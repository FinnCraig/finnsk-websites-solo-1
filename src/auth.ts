/** Password hashing (PBKDF2) + HMAC session JWT (compact, no jose dep). */

const te = new TextEncoder();

function b64url(buf: ArrayBuffer | Uint8Array): string {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlToBytes(s: string): Uint8Array {
  const pad = "=".repeat((4 - (s.length % 4)) % 4);
  const b64 = (s + pad).replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey("raw", te.encode(password), "PBKDF2", false, [
    "deriveBits",
  ]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: 100_000, hash: "SHA-256" },
    key,
    256
  );
  return `pbkdf2$100000$${b64url(salt)}$${b64url(bits)}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const parts = stored.split("$");
  if (parts.length !== 4 || parts[0] !== "pbkdf2") return false;
  const iterations = Number(parts[1]);
  const salt = b64urlToBytes(parts[2]);
  const expected = parts[3];
  const key = await crypto.subtle.importKey("raw", te.encode(password), "PBKDF2", false, [
    "deriveBits",
  ]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations, hash: "SHA-256" },
    key,
    256
  );
  return b64url(bits) === expected;
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    te.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function signSession(secret: string, userId: string): Promise<string> {
  const header = b64url(te.encode(JSON.stringify({ alg: "HS256", typ: "JWT" })));
  const now = Math.floor(Date.now() / 1000);
  const payload = b64url(
    te.encode(JSON.stringify({ sub: userId, iat: now, exp: now + 60 * 60 * 24 * 30 }))
  );
  const data = `${header}.${payload}`;
  const key = await hmacKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, te.encode(data));
  return `${data}.${b64url(sig)}`;
}

export async function verifySession(
  secret: string,
  token: string
): Promise<{ sub: string }> {
  const [header, payload, sig] = token.split(".");
  if (!header || !payload || !sig) throw new Error("bad token");
  const data = `${header}.${payload}`;
  const key = await hmacKey(secret);
  const ok = await crypto.subtle.verify("HMAC", key, b64urlToBytes(sig), te.encode(data));
  if (!ok) throw new Error("bad sig");
  const body = JSON.parse(new TextDecoder().decode(b64urlToBytes(payload))) as {
    sub?: string;
    exp?: number;
  };
  if (!body.sub) throw new Error("no sub");
  if (body.exp && body.exp < Math.floor(Date.now() / 1000)) throw new Error("expired");
  return { sub: body.sub };
}
