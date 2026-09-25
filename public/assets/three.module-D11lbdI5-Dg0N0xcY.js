/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cs="184",Dg={ROTATE:0,DOLLY:1,PAN:2},Ug={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ac=0,ro=1,wc=2,Aa=1,Rc=2,Fi=3,Ur=0,Ct=1,fr=2,_r=0,mi=1,io=2,ao=3,no=4,Cc=5,Gr=100,Pc=101,Dc=102,Uc=103,Ic=104,Nc=200,Lc=201,Fc=202,Oc=203,Nn=204,Ln=205,Bc=206,Vc=207,zc=208,Hc=209,kc=210,Gc=211,Wc=212,Xc=213,jc=214,Fn=0,On=1,Bn=2,_i=3,Vn=4,zn=5,Hn=6,kn=7,Tl=0,qc=1,Yc=2,ir=0,bl=1,El=2,Al=3,wl=4,Rl=5,Cl=6,Pl=7,so="attached",Kc="detached",Dl=300,qr=301,vi=302,Ja=303,Za=304,ka=306,Gn=1e3,mr=1001,Wn=1002,xt=1003,Jc=1004,Ji=1005,Tt=1006,$a=1007,Xr=1008,Ft=1009,Ul=1010,Il=1011,zi=1012,Ps=1013,nr=1014,zt=1015,Mr=1016,Ds=1017,Us=1018,Hi=1020,Nl=35902,Ll=35899,Fl=1021,Ol=1022,Ht=1023,xr=1026,jr=1027,Is=1028,Ns=1029,Yr=1030,Ls=1031,Fs=1033,wa=33776,Ra=33777,Ca=33778,Pa=33779,Xn=35840,jn=35841,qn=35842,Yn=35843,Kn=36196,Jn=37492,Zn=37496,$n=37488,Qn=37489,Ua=37490,es=37491,ts=37808,rs=37809,is=37810,as=37811,ns=37812,ss=37813,os=37814,ls=37815,cs=37816,hs=37817,us=37818,ds=37819,ps=37820,fs=37821,ms=36492,gs=36494,_s=36495,vs=36283,Ms=36284,Ia=36285,xs=36286,Na=2300,Ss=2301,Qa=2302,oo=2303,lo=2400,co=2401,ho=2402,Zc=2500,Ig=0,Ng=1,Lg=2,$c=3200,ys=0,Qc=1,Pr="",Vt="srgb",La="srgb-linear",Fa="linear",Ye="srgb",Qr=7680,uo=519,eh=512,th=513,rh=514,Os=515,ih=516,ah=517,Bs=518,nh=519,Ts=35044,po="300 es",rr=2e3,ki=2001;function sh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function oh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lh(){const i=Gi("canvas");return i.style.display="block",i}const fo={};function Oa(...i){const e="THREE."+i.shift();console.log(e,...i)}function Bl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Me(...i){i=Bl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function be(...i){i=Bl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function bs(...i){const e=i.join(" ");e in fo||(fo[e]=!0,Me(...i))}function ch(i,e,t){return new Promise(function(r,a){function n(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:r()}}setTimeout(n,t)})}const hh={[Fn]:On,[Bn]:Hn,[Vn]:kn,[_i]:zn,[On]:Fn,[Hn]:Bn,[kn]:Vn,[zn]:_i};class Nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const n=a.indexOf(t);n!==-1&&a.splice(n,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let n=0,s=a.length;n<s;n++)a[n].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mo=1234567;const Bi=Math.PI/180,Mi=180/Math.PI;function Kt(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[r&255]+St[r>>8&255]+St[r>>16&255]+St[r>>24&255]).toLowerCase()}function Le(i,e,t){return Math.max(e,Math.min(t,i))}function Vs(i,e){return(i%e+e)%e}function uh(i,e,t,r,a){return r+(i-e)*(a-r)/(t-e)}function dh(i,e,t){return i!==e?(t-i)/(e-i):0}function Vi(i,e,t){return(1-t)*i+t*e}function ph(i,e,t,r){return Vi(i,e,1-Math.exp(-t*r))}function fh(i,e=1){return e-Math.abs(Vs(i,e*2)-e)}function mh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _h(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vh(i,e){return i+Math.random()*(e-i)}function Mh(i){return i*(.5-Math.random())}function xh(i){i!==void 0&&(mo=i);let e=mo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sh(i){return i*Bi}function yh(i){return i*Mi}function Th(i){return(i&i-1)===0&&i!==0}function bh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Eh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ah(i,e,t,r,a){const n=Math.cos,s=Math.sin,o=n(t/2),c=s(t/2),l=n((e+r)/2),u=s((e+r)/2),f=n((e-r)/2),h=s((e-r)/2),p=n((r-e)/2),_=s((r-e)/2);switch(a){case"XYX":i.set(o*u,c*f,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*_,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*_,o*l);break;case"ZYZ":i.set(c*_,c*p,o*u,o*l);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Fg={DEG2RAD:Bi,RAD2DEG:Mi,generateUUID:Kt,clamp:Le,euclideanModulo:Vs,mapLinear:uh,inverseLerp:dh,lerp:Vi,damp:ph,pingpong:fh,smoothstep:mh,smootherstep:gh,randInt:_h,randFloat:vh,randFloatSpread:Mh,seededRandom:xh,degToRad:Sh,radToDeg:yh,isPowerOfTwo:Th,ceilPowerOfTwo:bh,floorPowerOfTwo:Eh,setQuaternionFromProperEuler:Ah,normalize:Ke,denormalize:qt},Vl=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Le(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Le(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*r-s*a+e.x,this.y=n*a+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vl.prototype.isVector2=!0;let Xe=Vl;class Kr{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,n,s,o){let c=r[a+0],l=r[a+1],u=r[a+2],f=r[a+3],h=n[s+0],p=n[s+1],_=n[s+2],x=n[s+3];if(f!==x||c!==h||l!==p||u!==_){let m=c*h+l*p+u*_+f*x;m<0&&(h=-h,p=-p,_=-_,x=-x,m=-m);let d=1-o;if(m<.9995){const S=Math.acos(m),A=Math.sin(S);d=Math.sin(d*S)/A,o=Math.sin(o*S)/A,c=c*d+h*o,l=l*d+p*o,u=u*d+_*o,f=f*d+x*o}else{c=c*d+h*o,l=l*d+p*o,u=u*d+_*o,f=f*d+x*o;const S=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=S,l*=S,u*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,a,n,s){const o=r[a],c=r[a+1],l=r[a+2],u=r[a+3],f=n[s],h=n[s+1],p=n[s+2],_=n[s+3];return e[t]=o*_+u*f+c*p-l*h,e[t+1]=c*_+u*h+l*f-o*p,e[t+2]=l*_+u*p+o*h-c*f,e[t+3]=u*_-o*f-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,n=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(r/2),u=o(a/2),f=o(n/2),h=c(r/2),p=c(a/2),_=c(n/2);switch(s){case"XYZ":this._x=h*u*f+l*p*_,this._y=l*p*f-h*u*_,this._z=l*u*_+h*p*f,this._w=l*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+l*p*_,this._y=l*p*f-h*u*_,this._z=l*u*_-h*p*f,this._w=l*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-l*p*_,this._y=l*p*f+h*u*_,this._z=l*u*_+h*p*f,this._w=l*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-l*p*_,this._y=l*p*f+h*u*_,this._z=l*u*_-h*p*f,this._w=l*u*f+h*p*_;break;case"YZX":this._x=h*u*f+l*p*_,this._y=l*p*f+h*u*_,this._z=l*u*_-h*p*f,this._w=l*u*f-h*p*_;break;case"XZY":this._x=h*u*f-l*p*_,this._y=l*p*f-h*u*_,this._z=l*u*_+h*p*f,this._w=l*u*f+h*p*_;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],n=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=r+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(n-l)*p,this._z=(s-a)*p}else if(r>o&&r>f){const p=2*Math.sqrt(1+r-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(n+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-r-f);this._w=(n-l)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-r-o);this._w=(s-a)/p,this._x=(n+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Le(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,n=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=r*u+s*o+a*l-n*c,this._y=a*u+s*c+n*o-r*l,this._z=n*u+s*l+r*c-a*o,this._w=s*u-r*o-a*c-n*l,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,n=e._z,s=e._w,o=this.dot(e);o<0&&(r=-r,a=-a,n=-n,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+r*t,this._y=this._y*c+a*t,this._z=this._z*c+n*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+r*t,this._y=this._y*c+a*t,this._z=this._z*c+n*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),n=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zl=class{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(go.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(go.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6]*a,this.y=n[1]*t+n[4]*r+n[7]*a,this.z=n[2]*t+n[5]*r+n[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,n=e.elements,s=1/(n[3]*t+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*t+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*t+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*t+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,n=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*a-o*r),u=2*(o*t-n*a),f=2*(n*r-s*t);return this.x=t+c*l+s*f-o*u,this.y=r+c*u+o*l-n*f,this.z=a+c*f+n*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*a,this.y=n[1]*t+n[5]*r+n[9]*a,this.z=n[2]*t+n[6]*r+n[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this.z=Le(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this.z=Le(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Le(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,n=e.z,s=t.x,o=t.y,c=t.z;return this.x=a*c-n*o,this.y=n*s-r*c,this.z=r*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return en.copy(this).projectOnVector(e),this.sub(en)}reflect(e){return this.sub(en.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Le(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zl.prototype.isVector3=!0;let O=zl;const en=new O,go=new Kr,Hl=class{constructor(e,t,r,a,n,s,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,n,s,o,c,l)}set(e,t,r,a,n,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=n,u[5]=c,u[6]=r,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,n=this.elements,s=r[0],o=r[3],c=r[6],l=r[1],u=r[4],f=r[7],h=r[2],p=r[5],_=r[8],x=a[0],m=a[3],d=a[6],S=a[1],A=a[4],b=a[7],R=a[2],T=a[5],C=a[8];return n[0]=s*x+o*S+c*R,n[3]=s*m+o*A+c*T,n[6]=s*d+o*b+c*C,n[1]=l*x+u*S+f*R,n[4]=l*m+u*A+f*T,n[7]=l*d+u*b+f*C,n[2]=h*x+p*S+_*R,n[5]=h*m+p*A+_*T,n[8]=h*d+p*b+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-r*n*u+r*o*c+a*n*l-a*s*c}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*s-o*l,h=o*c-u*n,p=l*n-s*c,_=t*f+r*h+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(a*l-u*r)*x,e[2]=(o*r-a*s)*x,e[3]=h*x,e[4]=(u*t-a*c)*x,e[5]=(a*n-o*t)*x,e[6]=p*x,e[7]=(r*c-l*t)*x,e[8]=(s*t-r*n)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,n,s,o){const c=Math.cos(n),l=Math.sin(n);return this.set(r*c,r*l,-r*(c*s+l*o)+s+e,-a*l,a*c,-a*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tn.makeScale(e,t)),this}rotate(e){return this.premultiply(tn.makeRotation(-e)),this}translate(e,t){return this.premultiply(tn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hl.prototype.isMatrix3=!0;let Ue=Hl;const tn=new Ue,_o=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vo=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wh(){const i={enabled:!0,workingColorSpace:La,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===Ye&&(a.r=vr(a.r),a.g=vr(a.g),a.b=vr(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ye&&(a.r=gi(a.r),a.g=gi(a.g),a.b=gi(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Pr?Fa:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,n)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[La]:{primaries:e,whitePoint:r,transfer:Fa,toXYZ:_o,fromXYZ:vo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:r,transfer:Ye,toXYZ:_o,fromXYZ:vo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const He=wh();function vr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class Rh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ei===void 0&&(ei=Gi("canvas")),ei.width=e.width,ei.height=e.height;const a=ei.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=ei}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gi("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),n=a.data;for(let s=0;s<n.length;s++)n[s]=vr(n[s]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(vr(t[r]/255)*255):t[r]=vr(t[r]);return{data:t,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ch=0;class zs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Kt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let n;if(Array.isArray(a)){n=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?n.push(rn(a[s].image)):n.push(rn(a[s]))}else n=rn(a);r.url=n}return t||(e.images[this.uuid]=r),r}}function rn(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let Ph=0;const an=new O;class bt extends Nr{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,r=mr,a=mr,n=Tt,s=Xr,o=Ht,c=Ft,l=bt.DEFAULT_ANISOTROPY,u=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Kt(),this.name="",this.source=new zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(an).x}get height(){return this.source.getSize(an).y}get depth(){return this.source.getSize(an).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Me(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case Wn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case Wn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Dl;bt.DEFAULT_ANISOTROPY=1;const kl=class{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*t+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*t+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*t+s[7]*r+s[11]*a+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,n;const s=e.elements,o=s[0],c=s[4],l=s[8],u=s[1],f=s[5],h=s[9],p=s[2],_=s[6],x=s[10];if(Math.abs(c-u)<.01&&Math.abs(l-p)<.01&&Math.abs(h-_)<.01){if(Math.abs(c+u)<.1&&Math.abs(l+p)<.1&&Math.abs(h+_)<.1&&Math.abs(o+f+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const d=(o+1)/2,S=(f+1)/2,A=(x+1)/2,b=(c+u)/4,R=(l+p)/4,T=(h+_)/4;return d>S&&d>A?d<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(d),a=b/r,n=R/r):S>A?S<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(S),r=b/a,n=T/a):A<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(A),r=R/n,a=T/n),this.set(r,a,n,t),this}let m=Math.sqrt((_-h)*(_-h)+(l-p)*(l-p)+(u-c)*(u-c));return Math.abs(m)<.001&&(m=1),this.x=(_-h)/m,this.y=(l-p)/m,this.z=(u-c)/m,this.w=Math.acos((o+f+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this.z=Le(this.z,e.z,t.z),this.w=Le(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this.z=Le(this.z,e,t),this.w=Le(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Le(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kl.prototype.isVector4=!0;let at=kl;class Dh extends Nr{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},n=new bt(a),s=r.count;for(let o=0;o<s;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,n=this.textures.length;a<n;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new zs(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends Dh{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Gl extends bt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=xt,this.minFilter=xt,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uh extends bt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=xt,this.minFilter=xt,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wl=class Xl{constructor(e,t,r,a,n,s,o,c,l,u,f,h,p,_,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,n,s,o,c,l,u,f,h,p,_,x,m)}set(e,t,r,a,n,s,o,c,l,u,f,h,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=r,d[12]=a,d[1]=n,d[5]=s,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xl().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,a=1/ti.setFromMatrixColumn(e,0).length(),n=1/ti.setFromMatrixColumn(e,1).length(),s=1/ti.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,n=e.z,s=Math.cos(r),o=Math.sin(r),c=Math.cos(a),l=Math.sin(a),u=Math.cos(n),f=Math.sin(n);if(e.order==="XYZ"){const h=s*u,p=s*f,_=o*u,x=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+_*l,t[5]=h-x*l,t[9]=-o*c,t[2]=x-h*l,t[6]=_+p*l,t[10]=s*c}else if(e.order==="YXZ"){const h=c*u,p=c*f,_=l*u,x=l*f;t[0]=h+x*o,t[4]=_*o-p,t[8]=s*l,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=p*o-_,t[6]=x+h*o,t[10]=s*c}else if(e.order==="ZXY"){const h=c*u,p=c*f,_=l*u,x=l*f;t[0]=h-x*o,t[4]=-s*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=s*u,t[9]=x-h*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const h=s*u,p=s*f,_=o*u,x=o*f;t[0]=c*u,t[4]=_*l-p,t[8]=h*l+x,t[1]=c*f,t[5]=x*l+h,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const h=s*c,p=s*l,_=o*c,x=o*l;t[0]=c*u,t[4]=x-h*f,t[8]=_*f+p,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=s*c,p=s*l,_=o*c,x=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+x,t[5]=s*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ih,e,Nh)}lookAt(e,t,r){const a=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),br.crossVectors(r,It),br.lengthSq()===0&&(Math.abs(r.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),br.crossVectors(r,It)),br.normalize(),Zi.crossVectors(It,br),a[0]=br.x,a[4]=Zi.x,a[8]=It.x,a[1]=br.y,a[5]=Zi.y,a[9]=It.y,a[2]=br.z,a[6]=Zi.z,a[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,n=this.elements,s=r[0],o=r[4],c=r[8],l=r[12],u=r[1],f=r[5],h=r[9],p=r[13],_=r[2],x=r[6],m=r[10],d=r[14],S=r[3],A=r[7],b=r[11],R=r[15],T=a[0],C=a[4],v=a[8],E=a[12],L=a[1],w=a[5],I=a[9],X=a[13],W=a[2],F=a[6],H=a[10],G=a[14],$=a[3],ee=a[7],ie=a[11],ve=a[15];return n[0]=s*T+o*L+c*W+l*$,n[4]=s*C+o*w+c*F+l*ee,n[8]=s*v+o*I+c*H+l*ie,n[12]=s*E+o*X+c*G+l*ve,n[1]=u*T+f*L+h*W+p*$,n[5]=u*C+f*w+h*F+p*ee,n[9]=u*v+f*I+h*H+p*ie,n[13]=u*E+f*X+h*G+p*ve,n[2]=_*T+x*L+m*W+d*$,n[6]=_*C+x*w+m*F+d*ee,n[10]=_*v+x*I+m*H+d*ie,n[14]=_*E+x*X+m*G+d*ve,n[3]=S*T+A*L+b*W+R*$,n[7]=S*C+A*w+b*F+R*ee,n[11]=S*v+A*I+b*H+R*ie,n[15]=S*E+A*X+b*G+R*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],n=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15],S=c*p-l*h,A=o*p-l*f,b=o*h-c*f,R=s*p-l*u,T=s*h-c*u,C=s*f-o*u;return t*(x*S-m*A+d*b)-r*(_*S-m*R+d*T)+a*(_*A-x*R+d*C)-n*(_*b-x*T+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],n=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],S=t*o-r*s,A=t*c-a*s,b=t*l-n*s,R=r*c-a*o,T=r*l-n*o,C=a*l-n*c,v=u*x-f*_,E=u*m-h*_,L=u*d-p*_,w=f*m-h*x,I=f*d-p*x,X=h*d-p*m,W=S*X-A*I+b*w+R*L-T*E+C*v;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/W;return e[0]=(o*X-c*I+l*w)*F,e[1]=(a*I-r*X-n*w)*F,e[2]=(x*C-m*T+d*R)*F,e[3]=(h*T-f*C-p*R)*F,e[4]=(c*L-s*X-l*E)*F,e[5]=(t*X-a*L+n*E)*F,e[6]=(m*b-_*C-d*A)*F,e[7]=(u*C-h*b+p*A)*F,e[8]=(s*I-o*L+l*v)*F,e[9]=(r*L-t*I-n*v)*F,e[10]=(_*T-x*b+d*S)*F,e[11]=(f*b-u*T-p*S)*F,e[12]=(o*E-s*w-c*v)*F,e[13]=(t*w-r*E+a*v)*F,e[14]=(x*A-_*R-m*S)*F,e[15]=(u*R-f*A+h*S)*F,this}scale(e){const t=this.elements,r=e.x,a=e.y,n=e.z;return t[0]*=r,t[4]*=a,t[8]*=n,t[1]*=r,t[5]*=a,t[9]*=n,t[2]*=r,t[6]*=a,t[10]*=n,t[3]*=r,t[7]*=a,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),n=1-r,s=e.x,o=e.y,c=e.z,l=n*s,u=n*o;return this.set(l*s+r,l*o-a*c,l*c+a*o,0,l*o+a*c,u*o+r,u*c-a*s,0,l*c-a*o,u*c+a*s,n*c*c+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,n,s){return this.set(1,r,n,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,n=t._x,s=t._y,o=t._z,c=t._w,l=n+n,u=s+s,f=o+o,h=n*l,p=n*u,_=n*f,x=s*u,m=s*f,d=o*f,S=c*l,A=c*u,b=c*f,R=r.x,T=r.y,C=r.z;return a[0]=(1-(x+d))*R,a[1]=(p+b)*R,a[2]=(_-A)*R,a[3]=0,a[4]=(p-b)*T,a[5]=(1-(h+d))*T,a[6]=(m+S)*T,a[7]=0,a[8]=(_+A)*C,a[9]=(m-S)*C,a[10]=(1-(h+x))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const n=this.determinant();if(n===0)return r.set(1,1,1),t.identity(),this;let s=ti.set(a[0],a[1],a[2]).length();const o=ti.set(a[4],a[5],a[6]).length(),c=ti.set(a[8],a[9],a[10]).length();n<0&&(s=-s),Wt.copy(this);const l=1/s,u=1/o,f=1/c;return Wt.elements[0]*=l,Wt.elements[1]*=l,Wt.elements[2]*=l,Wt.elements[4]*=u,Wt.elements[5]*=u,Wt.elements[6]*=u,Wt.elements[8]*=f,Wt.elements[9]*=f,Wt.elements[10]*=f,t.setFromRotationMatrix(Wt),r.x=s,r.y=o,r.z=c,this}makePerspective(e,t,r,a,n,s,o=rr,c=!1){const l=this.elements,u=2*n/(t-e),f=2*n/(r-a),h=(t+e)/(t-e),p=(r+a)/(r-a);let _,x;if(c)_=n/(s-n),x=s*n/(s-n);else if(o===rr)_=-(s+n)/(s-n),x=-2*s*n/(s-n);else if(o===ki)_=-s/(s-n),x=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,a,n,s,o=rr,c=!1){const l=this.elements,u=2/(t-e),f=2/(r-a),h=-(t+e)/(t-e),p=-(r+a)/(r-a);let _,x;if(c)_=1/(s-n),x=s/(s-n);else if(o===rr)_=-2/(s-n),x=-(s+n)/(s-n);else if(o===ki)_=-1/(s-n),x=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Wl.prototype.isMatrix4=!0;let ke=Wl;const ti=new O,Wt=new ke,Ih=new O(0,0,0),Nh=new O(1,1,1),br=new O,Zi=new O,It=new O,Mo=new ke,xo=new Kr;class Ir{constructor(e=0,t=0,r=0,a=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,n=a[0],s=a[4],o=a[8],c=a[1],l=a[5],u=a[9],f=a[2],h=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,n),this._z=0);break;case"ZXY":this._x=Math.asin(Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-Le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Le(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mo,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xo.setFromEuler(this),this.setFromQuaternion(xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class Hs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lh=0;const So=new O,ri=new Kr,lr=new ke,$i=new O,Ai=new O,Fh=new O,Oh=new Kr,yo=new O(1,0,0),To=new O(0,1,0),bo=new O(0,0,1),Eo={type:"added"},Bh={type:"removed"},ii={type:"childadded",child:null},nn={type:"childremoved",child:null};class ut extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Kt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new O,t=new Ir,r=new Kr,a=new O(1,1,1);function n(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ue}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(yo,e)}rotateY(e){return this.rotateOnAxis(To,e)}rotateZ(e){return this.rotateOnAxis(bo,e)}translateOnAxis(e,t){return So.copy(e).applyQuaternion(this.quaternion),this.position.add(So.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yo,e)}translateY(e){return this.translateOnAxis(To,e)}translateZ(e){return this.translateOnAxis(bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?$i.copy(e):$i.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(Ai,$i,this.up):lr.lookAt($i,Ai,this.up),this.quaternion.setFromRotationMatrix(lr),a&&(lr.extractRotation(a.matrixWorld),ri.setFromRotationMatrix(lr),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eo),ii.child=e,this.dispatchEvent(ii),ii.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bh),nn.child=e,this.dispatchEvent(nn),nn.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eo),ii.child=e,this.dispatchEvent(ii),ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const n=this.children[r].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,e,Fh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,Oh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,n=this.matrix.elements;n[12]+=t-n[0]*t-n[4]*r-n[8]*a,n[13]+=r-n[1]*t-n[5]*r-n[9]*a,n[14]+=a-n[2]*t-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];n(e.shapes,f)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(n(e.materials,this.material[c]));a.material=o}else a.material=n(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(n(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),p=s(e.animations),_=s(e.nodes);o.length>0&&(r.geometries=o),c.length>0&&(r.materials=c),l.length>0&&(r.textures=l),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),p.length>0&&(r.animations=p),_.length>0&&(r.nodes=_)}return r.object=a,r;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}ut.DEFAULT_UP=new O(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qi extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vh={type:"move"};class sn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,n=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,r),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;l.inputState.pinching&&h>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,r),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&n!==null&&(a=n),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vh)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=n!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Qi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},ea={h:0,s:0,l:0};function on(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=He.workingColorSpace){return this.r=e,this.g=t,this.b=r,He.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=He.workingColorSpace){if(e=Vs(e,1),t=Le(t,0,1),r=Le(r,0,1),t===0)this.r=this.g=this.b=r;else{const n=r<=.5?r*(1+t):r+t-r*t,s=2*r-n;this.r=on(s,n,e+1/3),this.g=on(s,n,e),this.b=on(s,n,e-1/3)}return He.colorSpaceToWorking(this,a),this}setStyle(e,t=Vt){function r(n){n!==void 0&&parseFloat(n)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:Me("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=a[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(n,16),t);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const r=jl[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return He.workingToColorSpace(yt.copy(this),e),Math.round(Le(yt.r*255,0,255))*65536+Math.round(Le(yt.g*255,0,255))*256+Math.round(Le(yt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(yt.copy(this),t);const r=yt.r,a=yt.g,n=yt.b,s=Math.max(r,a,n),o=Math.min(r,a,n);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const f=s-o;switch(l=u<=.5?f/(s+o):f/(2-s-o),s){case r:c=(a-n)/f+(a<n?6:0);break;case a:c=(n-r)/f+2;break;case n:c=(r-a)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Vt){He.workingToColorSpace(yt.copy(this),e);const t=yt.r,r=yt.g,a=yt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(ea);const r=Vi(Er.h,ea.h,t),a=Vi(Er.s,ea.s,t),n=Vi(Er.l,ea.l,t);return this.setHSL(r,a,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,n=e.elements;return this.r=n[0]*t+n[3]*r+n[6]*a,this.g=n[1]*t+n[4]*r+n[7]*a,this.b=n[2]*t+n[5]*r+n[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Oe;Oe.NAMES=jl;class ql{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=r}clone(){return new ql(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hg extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ir,this.environmentIntensity=1,this.environmentRotation=new Ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xt=new O,cr=new O,ln=new O,hr=new O,ai=new O,ni=new O,Ao=new O,cn=new O,hn=new O,un=new O,dn=new at,pn=new at,fn=new at;class Yt{constructor(e=new O,t=new O,r=new O){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Xt.subVectors(e,t),a.cross(Xt);const n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(e,t,r,a,n){Xt.subVectors(a,t),cr.subVectors(r,t),ln.subVectors(e,t);const s=Xt.dot(Xt),o=Xt.dot(cr),c=Xt.dot(ln),l=cr.dot(cr),u=cr.dot(ln),f=s*l-o*o;if(f===0)return n.set(0,0,0),null;const h=1/f,p=(l*c-o*u)*h,_=(s*u-o*c)*h;return n.set(1-p-_,_,p)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,r,a,n,s,o,c){return this.getBarycoord(e,t,r,a,hr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(n,hr.x),c.addScaledVector(s,hr.y),c.addScaledVector(o,hr.z),c)}static getInterpolatedAttribute(e,t,r,a,n,s){return dn.setScalar(0),pn.setScalar(0),fn.setScalar(0),dn.fromBufferAttribute(e,t),pn.fromBufferAttribute(e,r),fn.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(dn,n.x),s.addScaledVector(pn,n.y),s.addScaledVector(fn,n.z),s}static isFrontFacing(e,t,r,a){return Xt.subVectors(r,t),cr.subVectors(e,t),Xt.cross(cr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Xt.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,n){return Yt.getInterpolation(e,this.a,this.b,this.c,t,r,a,n)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,n=this.c;let s,o;ai.subVectors(a,r),ni.subVectors(n,r),cn.subVectors(e,r);const c=ai.dot(cn),l=ni.dot(cn);if(c<=0&&l<=0)return t.copy(r);hn.subVectors(e,a);const u=ai.dot(hn),f=ni.dot(hn);if(u>=0&&f<=u)return t.copy(a);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(r).addScaledVector(ai,s);un.subVectors(e,n);const p=ai.dot(un),_=ni.dot(un);if(_>=0&&p<=_)return t.copy(n);const x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(r).addScaledVector(ni,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Ao.subVectors(n,a),o=(f-u)/(f-u+(p-_)),t.copy(a).addScaledVector(Ao,o);const d=1/(m+x+h);return s=x*d,o=h*d,t.copy(r).addScaledVector(ai,s).addScaledVector(ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Lr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const n=r.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=n.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,jt):jt.fromBufferAttribute(n,s),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ta.copy(r.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const a=e.children;for(let n=0,s=a.length;n<s;n++)this.expandByObject(a[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wi),ra.subVectors(this.max,wi),si.subVectors(e.a,wi),oi.subVectors(e.b,wi),li.subVectors(e.c,wi),Ar.subVectors(oi,si),wr.subVectors(li,oi),Br.subVectors(si,li);let t=[0,-Ar.z,Ar.y,0,-wr.z,wr.y,0,-Br.z,Br.y,Ar.z,0,-Ar.x,wr.z,0,-wr.x,Br.z,0,-Br.x,-Ar.y,Ar.x,0,-wr.y,wr.x,0,-Br.y,Br.x,0];return!mn(t,si,oi,li,ra)||(t=[1,0,0,0,1,0,0,0,1],!mn(t,si,oi,li,ra))?!1:(ia.crossVectors(Ar,wr),t=[ia.x,ia.y,ia.z],mn(t,si,oi,li,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ur=[new O,new O,new O,new O,new O,new O,new O,new O],jt=new O,ta=new Lr,si=new O,oi=new O,li=new O,Ar=new O,wr=new O,Br=new O,wi=new O,ra=new O,ia=new O,Vr=new O;function mn(i,e,t,r,a){for(let n=0,s=i.length-3;n<=s;n+=3){Vr.fromArray(i,n);const o=a.x*Math.abs(Vr.x)+a.y*Math.abs(Vr.y)+a.z*Math.abs(Vr.z),c=e.dot(Vr),l=t.dot(Vr),u=r.dot(Vr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const dt=new O,aa=new Xe;let zh=0;class kt extends Nr{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Ts,this.updateRanges=[],this.gpuType=zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,n=this.itemSize;a<n;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=qt(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ke(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),r=Ke(r,this.array),a=Ke(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),r=Ke(r,this.array),a=Ke(a,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ts&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Yl extends kt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Kl extends kt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class pt extends kt{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Hh=new Lr,Ri=new O,gn=new O;class Sr{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Hh.setFromPoints(e).getCenter(r);let a=0;for(let n=0,s=e.length;n<s;n++)a=Math.max(a,r.distanceToSquared(e[n]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ri.subVectors(e,this.center);const t=Ri.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Ri,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ri.copy(e.center).add(gn)),this.expandByPoint(Ri.copy(e.center).sub(gn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kh=0;const Bt=new ke,_n=new ut,ci=new O,Nt=new Lr,Ci=new Lr,vt=new O;class Pt extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Kt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sh(e)?Kl:Yl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const n=new Ue().getNormalMatrix(e);r.applyNormalMatrix(n),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,r){return Bt.makeTranslation(e,t,r),this.applyMatrix4(Bt),this}scale(e,t,r){return Bt.makeScale(e,t,r),this.applyMatrix4(Bt),this}lookAt(e){return _n.lookAt(e),_n.updateMatrix(),this.applyMatrix4(_n.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,n=e.length;a<n;a++){const s=e[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new pt(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const n=e[a];t.setXYZ(a,n.x,n.y,n.z||0)}e.length>t.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const n=t[r];Nt.setFromBufferAttribute(n),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const r=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Nt.min,Ci.min),Nt.expandByPoint(vt),vt.addVectors(Nt.max,Ci.max),Nt.expandByPoint(vt)):(Nt.expandByPoint(Ci.min),Nt.expandByPoint(Ci.max))}Nt.getCenter(r);let a=0;for(let n=0,s=e.count;n<s;n++)vt.fromBufferAttribute(e,n),a=Math.max(a,r.distanceToSquared(vt));if(t)for(let n=0,s=t.length;n<s;n++){const o=t[n],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)vt.fromBufferAttribute(o,l),c&&(ci.fromBufferAttribute(e,l),vt.add(ci)),a=Math.max(a,r.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let v=0;v<r.count;v++)o[v]=new O,c[v]=new O;const l=new O,u=new O,f=new O,h=new Xe,p=new Xe,_=new Xe,x=new O,m=new O;function d(v,E,L){l.fromBufferAttribute(r,v),u.fromBufferAttribute(r,E),f.fromBufferAttribute(r,L),h.fromBufferAttribute(n,v),p.fromBufferAttribute(n,E),_.fromBufferAttribute(n,L),u.sub(l),f.sub(l),p.sub(h),_.sub(h);const w=1/(p.x*_.y-_.x*p.y);isFinite(w)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(w),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(w),o[v].add(x),o[E].add(x),o[L].add(x),c[v].add(m),c[E].add(m),c[L].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,E=S.length;v<E;++v){const L=S[v],w=L.start,I=L.count;for(let X=w,W=w+I;X<W;X+=3)d(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const A=new O,b=new O,R=new O,T=new O;function C(v){R.fromBufferAttribute(a,v),T.copy(R);const E=o[v];A.copy(E),A.sub(R.multiplyScalar(R.dot(E))).normalize(),b.crossVectors(T,E);const L=b.dot(c[v])<0?-1:1;s.setXYZW(v,A.x,A.y,A.z,L)}for(let v=0,E=S.length;v<E;++v){const L=S[v],w=L.start,I=L.count;for(let X=w,W=w+I;X<W;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,p=r.count;h<p;h++)r.setXYZ(h,0,0,0);const a=new O,n=new O,s=new O,o=new O,c=new O,l=new O,u=new O,f=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);a.fromBufferAttribute(t,_),n.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),u.subVectors(s,n),f.subVectors(a,n),u.cross(f),o.fromBufferAttribute(r,_),c.fromBufferAttribute(r,x),l.fromBufferAttribute(r,m),o.add(u),c.add(u),l.add(u),r.setXYZ(_,o.x,o.y,o.z),r.setXYZ(x,c.x,c.y,c.z),r.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)a.fromBufferAttribute(t,h+0),n.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,n),f.subVectors(a,n),u.cross(f),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let d=0;d<u;d++)h[_++]=l[p++]}return new kt(h,u,f)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,r=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,r);t.setAttribute(o,l)}const n=this.morphAttributes;for(const o in n){const c=[],l=n[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=e(h,r);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const c in r){const l=r[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let n=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(a[c]=u,n=!0)}n&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const l in a){const u=a[l];this.setAttribute(l,u.clone(t))}const n=e.morphAttributes;for(const l in n){const u=[],f=n[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ts,this.updateRanges=[],this.version=0,this.uuid=Kt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,n=this.stride;a<n;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wt=new O;class Jl{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=qt(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ke(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qt(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),r=Ke(r,this.array),a=Ke(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),r=Ke(r,this.array),a=Ke(a,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=n,this}clone(e){if(e===void 0){Oa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[a+n])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Oa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Gh=0;class Jr extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Kt(),this.name="",this.type="Material",this.blending=mi,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nn,this.blendDst=Ln,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Me(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(r.blending=this.blending),this.side!==Ur&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nn&&(r.blendSrc=this.blendSrc),this.blendDst!==Ln&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uo&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(n){const s=[];for(const o in n){const c=n[o];delete c.metadata,s.push(c)}return s}if(t){const n=a(e.textures),s=a(e.images);n.length>0&&(r.textures=n),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let n=0;n!==a;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const dr=new O,vn=new O,na=new O,Rr=new O,Mn=new O,sa=new O,xn=new O;class Wi{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){vn.copy(e).add(t).multiplyScalar(.5),na.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(vn);const n=e.distanceTo(t)*.5,s=-this.direction.dot(na),o=Rr.dot(this.direction),c=-Rr.dot(na),l=Rr.lengthSq(),u=Math.abs(1-s*s);let f,h,p,_;if(u>0)if(f=s*c-o,h=s*o-c,_=n*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,p=f*(f+s*h+2*o)+h*(s*f+h+2*c)+l}else h=n,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*c)+l;else h=-n,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-s*n+o)),h=f>0?-n:Math.min(Math.max(-n,-c),n),p=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-n,-c),n),p=h*(h+2*c)+l):(f=Math.max(0,-(s*n+o)),h=f>0?n:Math.min(Math.max(-n,-c),n),p=-f*f+h*(h+2*c)+l);else h=s>0?-n:n,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*c)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(vn).addScaledVector(na,h),p}intersectSphere(e,t){dr.subVectors(e.center,this.origin);const r=dr.dot(this.direction),a=dr.dot(dr)-r*r,n=e.radius*e.radius;if(a>n)return null;const s=Math.sqrt(n-a),o=r-s,c=r+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,n,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(r=(e.min.x-h.x)*l,a=(e.max.x-h.x)*l):(r=(e.max.x-h.x)*l,a=(e.min.x-h.x)*l),u>=0?(n=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(n=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),r>s||n>a||((n>r||isNaN(r))&&(r=n),(s<a||isNaN(a))&&(a=s),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),r>c||o>a)||((o>r||r!==r)&&(r=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,r,a,n){Mn.subVectors(t,e),sa.subVectors(r,e),xn.crossVectors(Mn,sa);let s=this.direction.dot(xn),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Rr.subVectors(this.origin,e);const c=o*this.direction.dot(sa.crossVectors(Rr,sa));if(c<0)return null;const l=o*this.direction.dot(Mn.cross(Rr));if(l<0||c+l>s)return null;const u=-o*Rr.dot(xn);return u<0?null:this.at(u/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zl extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wo=new ke,zr=new Wi,oa=new Sr,Ro=new O,la=new O,ca=new O,ha=new O,Sn=new O,ua=new O,Co=new O,da=new O;class Gt extends ut{constructor(e=new Pt,t=new Zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=r.length;a<n;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,n=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(n&&o){ua.set(0,0,0);for(let c=0,l=n.length;c<l;c++){const u=o[c],f=n[c];u!==0&&(Sn.fromBufferAttribute(f,e),s?ua.addScaledVector(Sn,u):ua.addScaledVector(Sn.sub(t),u))}t.add(ua)}return t}raycast(e,t){const r=this.geometry,a=this.material,n=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),oa.copy(r.boundingSphere),oa.applyMatrix4(n),zr.copy(e.ray).recast(e.near),!(oa.containsPoint(zr.origin)===!1&&(zr.intersectSphere(oa,Ro)===null||zr.origin.distanceToSquared(Ro)>(e.far-e.near)**2))&&(wo.copy(n).invert(),zr.copy(e.ray).applyMatrix4(wo),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,r){let a;const n=this.geometry,s=this.material,o=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv1,f=n.attributes.normal,h=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=s[m.materialIndex],S=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,R=A;b<R;b+=3){const T=o.getX(b),C=o.getX(b+1),v=o.getX(b+2);a=pa(this,d,e,r,l,u,f,T,C,v),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const S=o.getX(m),A=o.getX(m+1),b=o.getX(m+2);a=pa(this,s,e,r,l,u,f,S,A,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=s[m.materialIndex],S=Math.max(m.start,p.start),A=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,R=A;b<R;b+=3){const T=b,C=b+1,v=b+2;a=pa(this,d,e,r,l,u,f,T,C,v),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const S=m,A=m+1,b=m+2;a=pa(this,s,e,r,l,u,f,S,A,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Wh(i,e,t,r,a,n,s,o){let c;if(e.side===Ct?c=r.intersectTriangle(s,n,a,!0,o):c=r.intersectTriangle(a,n,s,e.side===Ur,o),c===null)return null;da.copy(o),da.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(da);return l<t.near||l>t.far?null:{distance:l,point:da.clone(),object:i}}function pa(i,e,t,r,a,n,s,o,c,l){i.getVertexPosition(o,la),i.getVertexPosition(c,ca),i.getVertexPosition(l,ha);const u=Wh(i,e,t,r,la,ca,ha,Co);if(u){const f=new O;Yt.getBarycoord(Co,la,ca,ha,f),a&&(u.uv=Yt.getInterpolatedAttribute(a,o,c,l,f,new Xe)),n&&(u.uv1=Yt.getInterpolatedAttribute(n,o,c,l,f,new Xe)),s&&(u.normal=Yt.getInterpolatedAttribute(s,o,c,l,f,new O),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new O,materialIndex:0};Yt.getNormal(la,ca,ha,h.normal),u.face=h,u.barycoord=f}return u}const Pi=new at,Po=new at,Do=new at,Xh=new at,Uo=new ke,fa=new O,yn=new Sr,Io=new ke,Tn=new Wi;class Gg extends Gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=so,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Lr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,fa),this.boundingBox.expandByPoint(fa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,fa),this.boundingSphere.expandByPoint(fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const r=this.material,a=this.matrixWorld;r!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yn.copy(this.boundingSphere),yn.applyMatrix4(a),e.ray.intersectsSphere(yn)!==!1&&(Io.copy(a).invert(),Tn.copy(e.ray).applyMatrix4(Io),!(this.boundingBox!==null&&Tn.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Tn)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let r=0,a=t.count;r<a;r++){e.fromBufferAttribute(t,r);const n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(r,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===so?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kc?this.bindMatrixInverse.copy(this.bindMatrix).invert():Me("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const r=this.skeleton,a=this.geometry;Po.fromBufferAttribute(a.attributes.skinIndex,e),Do.fromBufferAttribute(a.attributes.skinWeight,e),t.isVector4?(Pi.copy(t),t.set(0,0,0,0)):(Pi.set(...t,1),t.set(0,0,0)),Pi.applyMatrix4(this.bindMatrix);for(let n=0;n<4;n++){const s=Do.getComponent(n);if(s!==0){const o=Po.getComponent(n);Uo.multiplyMatrices(r.bones[o].matrixWorld,r.boneInverses[o]),t.addScaledVector(Xh.copy(Pi).applyMatrix4(Uo),s)}}return t.isVector4&&(t.w=Pi.w),t.applyMatrix4(this.bindMatrixInverse)}}class jh extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ks extends bt{constructor(e=null,t=1,r=1,a,n,s,o,c,l=xt,u=xt,f,h){super(null,s,o,c,l,u,a,n,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const No=new ke,qh=new ke;class $l{constructor(e=[],t=[]){this.uuid=Kt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Me("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const r=new ke;this.bones[e]&&r.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&r.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){const e=this.bones,t=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let n=0,s=e.length;n<s;n++){const o=e[n]?e[n].matrixWorld:qh;No.multiplyMatrices(o,t[n]),No.toArray(r,n*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new $l(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const r=new ks(t,e,e,Ht,zt);return r.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=r,this}getBoneByName(e){for(let t=0,r=this.bones.length;t<r;t++){const a=this.bones[t];if(a.name===e)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let r=0,a=e.bones.length;r<a;r++){const n=e.bones[r];let s=t[n];s===void 0&&(Me("Skeleton: No bone found with UUID:",n),s=new jh),this.bones.push(s),this.boneInverses.push(new ke().fromArray(e.boneInverses[r]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,r=this.boneInverses;for(let a=0,n=t.length;a<n;a++){const s=t[a];e.bones.push(s.uuid);const o=r[a];e.boneInverses.push(o.toArray())}return e}}class Lo extends kt{constructor(e,t,r,a=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hi=new ke,Fo=new ke,ma=[],Oo=new Lr,Yh=new ke,Di=new Gt,Ui=new Sr;class Wg extends Gt{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lo(new Float32Array(r*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<r;a++)this.setMatrixAt(a,Yh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Lr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,hi),Oo.copy(e.boundingBox).applyMatrix4(hi),this.boundingBox.union(Oo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,hi),Ui.copy(e.boundingSphere).applyMatrix4(hi),this.boundingSphere.union(Ui)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,a=this.morphTexture.source.data.data,n=r.length+1,s=e*n+1;for(let o=0;o<r.length;o++)r[o]=a[s+o]}raycast(e,t){const r=this.matrixWorld,a=this.count;if(Di.geometry=this.geometry,Di.material=this.material,Di.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ui.copy(this.boundingSphere),Ui.applyMatrix4(r),e.ray.intersectsSphere(Ui)!==!1))for(let n=0;n<a;n++){this.getMatrixAt(n,hi),Fo.multiplyMatrices(r,hi),Di.matrixWorld=Fo,Di.raycast(e,ma);for(let s=0,o=ma.length;s<o;s++){const c=ma[s];c.instanceId=n,c.object=this,t.push(c)}ma.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const r=t.morphTargetInfluences,a=r.length+1;this.morphTexture===null&&(this.morphTexture=new ks(new Float32Array(a*this.count),a,this.count,Is,zt));const n=this.morphTexture.source.data.data;let s=0;for(let l=0;l<r.length;l++)s+=r[l];const o=this.geometry.morphTargetsRelative?1:1-s,c=a*e;return n[c]=o,n.set(r,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const bn=new O,Kh=new O,Jh=new Ue;class kr{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=bn.subVectors(r,t).cross(Kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(bn),n=this.normal.dot(a);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return r===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Jh.getNormalMatrix(e),a=this.coplanarPoint(bn).applyMatrix4(e),n=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Sr,Zh=new Xe(.5,.5),ga=new O;class Gs{constructor(e=new kr,t=new kr,r=new kr,a=new kr,n=new kr,s=new kr){this.planes=[e,t,r,a,n,s]}set(e,t,r,a,n,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(a),o[4].copy(n),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=rr,r=!1){const a=this.planes,n=e.elements,s=n[0],o=n[1],c=n[2],l=n[3],u=n[4],f=n[5],h=n[6],p=n[7],_=n[8],x=n[9],m=n[10],d=n[11],S=n[12],A=n[13],b=n[14],R=n[15];if(a[0].setComponents(l-s,p-u,d-_,R-S).normalize(),a[1].setComponents(l+s,p+u,d+_,R+S).normalize(),a[2].setComponents(l+o,p+f,d+x,R+A).normalize(),a[3].setComponents(l-o,p-f,d-x,R-A).normalize(),r)a[4].setComponents(c,h,m,b).normalize(),a[5].setComponents(l-c,p-h,d-m,R-b).normalize();else if(a[4].setComponents(l-c,p-h,d-m,R-b).normalize(),t===rr)a[5].setComponents(l+c,p+h,d+m,R+b).normalize();else if(t===ki)a[5].setComponents(c,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const t=Zh.distanceTo(e.center);return Hr.radius=.7071067811865476+t,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(ga.x=a.normal.x>0?e.max.x:e.min.x,ga.y=a.normal.y>0?e.max.y:e.min.y,ga.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $h extends Jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ba=new O,Va=new O,Bo=new ke,Ii=new Wi,_a=new Sr,En=new O,Vo=new O;class Ql extends ut{constructor(e=new Pt,t=new $h){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,n=t.count;a<n;a++)Ba.fromBufferAttribute(t,a-1),Va.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Ba.distanceTo(Va);e.setAttribute("lineDistance",new pt(r,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,n=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_a.copy(r.boundingSphere),_a.applyMatrix4(a),_a.radius+=n,e.ray.intersectsSphere(_a)===!1)return;Bo.copy(a).invert(),Ii.copy(e.ray).applyMatrix4(Bo);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=r.index,f=r.attributes.position;if(u!==null){const h=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let _=h,x=p-1;_<x;_+=l){const m=u.getX(_),d=u.getX(_+1),S=va(this,e,Ii,c,m,d,_);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(p-1),x=u.getX(h),m=va(this,e,Ii,c,_,x,p-1);m&&t.push(m)}}else{const h=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let _=h,x=p-1;_<x;_+=l){const m=va(this,e,Ii,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=va(this,e,Ii,c,p-1,h,p-1);_&&t.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=r.length;a<n;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function va(i,e,t,r,a,n,s){const o=i.geometry.attributes.position;if(Ba.fromBufferAttribute(o,a),Va.fromBufferAttribute(o,n),t.distanceSqToSegment(Ba,Va,En,Vo)>r)return;En.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(En);if(!(c<e.near||c>e.far))return{distance:c,point:Vo.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const zo=new O,Ho=new O;class Xg extends Ql{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,n=t.count;a<n;a+=2)zo.fromBufferAttribute(t,a),Ho.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+zo.distanceTo(Ho);e.setAttribute("lineDistance",new pt(r,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jg extends Ql{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Qh extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ko=new ke,Es=new Wi,Ma=new Sr,xa=new O;class qg extends ut{constructor(e=new Pt,t=new Qh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,n=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ma.copy(r.boundingSphere),Ma.applyMatrix4(a),Ma.radius+=n,e.ray.intersectsSphere(Ma)===!1)return;ko.copy(a).invert(),Es.copy(e.ray).applyMatrix4(ko);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=r.index,u=r.attributes.position;if(l!==null){const f=Math.max(0,s.start),h=Math.min(l.count,s.start+s.count);for(let p=f,_=h;p<_;p++){const x=l.getX(p);xa.fromBufferAttribute(u,x),Go(xa,x,c,a,e,t,this)}}else{const f=Math.max(0,s.start),h=Math.min(u.count,s.start+s.count);for(let p=f,_=h;p<_;p++)xa.fromBufferAttribute(u,p),Go(xa,p,c,a,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=r.length;a<n;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function Go(i,e,t,r,a,n,s){const o=Es.distanceSqToPoint(i);if(o<t){const c=new O;Es.closestPointToPoint(i,c),c.applyMatrix4(r);const l=a.ray.origin.distanceTo(c);if(l<a.near||l>a.far)return;n.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class ec extends bt{constructor(e=[],t=qr,r,a,n,s,o,c,l,u){super(e,t,r,a,n,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xi extends bt{constructor(e,t,r=nr,a,n,s,o=xt,c=xt,l,u=xr,f=1){if(u!==xr&&u!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,a,n,s,o,c,u,r,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class eu extends xi{constructor(e,t=nr,r=qr,a,n,s=xt,o=xt,c,l=xr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,r,a,n,s,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tc extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xi extends Pt{constructor(e=1,t=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};const o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);const c=[],l=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,r,t,e,s,n,0),_("z","y","x",1,-1,r,t,-e,s,n,1),_("x","z","y",1,1,e,r,t,a,s,2),_("x","z","y",1,-1,e,r,-t,a,s,3),_("x","y","z",1,-1,e,t,r,a,n,4),_("x","y","z",-1,-1,e,t,-r,a,n,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2));function _(x,m,d,S,A,b,R,T,C,v,E){const L=b/C,w=R/v,I=b/2,X=R/2,W=T/2,F=C+1,H=v+1;let G=0,$=0;const ee=new O;for(let ie=0;ie<H;ie++){const ve=ie*w-X;for(let Re=0;Re<F;Re++){const Ge=Re*L-I;ee[x]=Ge*S,ee[m]=ve*A,ee[d]=W,l.push(ee.x,ee.y,ee.z),ee[x]=0,ee[m]=0,ee[d]=T>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(Re/C),f.push(1-ie/v),G+=1}}for(let ie=0;ie<v;ie++)for(let ve=0;ve<C;ve++){const Re=h+ve+F*ie,Ge=h+ve+F*(ie+1),Je=h+(ve+1)+F*(ie+1),De=h+(ve+1)+F*ie;c.push(Re,Ge,De),c.push(Ge,Je,De),$+=6}o.addGroup(p,$,E),p+=$,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rc extends Pt{constructor(e=1,t=1,r=1,a=32,n=1,s=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:c};const l=this;a=Math.floor(a),n=Math.floor(n);const u=[],f=[],h=[],p=[];let _=0;const x=[],m=r/2;let d=0;S(),s===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2));function S(){const b=new O,R=new O;let T=0;const C=(t-e)/r;for(let v=0;v<=n;v++){const E=[],L=v/n,w=L*(t-e)+e;for(let I=0;I<=a;I++){const X=I/a,W=X*c+o,F=Math.sin(W),H=Math.cos(W);R.x=w*F,R.y=-L*r+m,R.z=w*H,f.push(R.x,R.y,R.z),b.set(F,C,H).normalize(),h.push(b.x,b.y,b.z),p.push(X,1-L),E.push(_++)}x.push(E)}for(let v=0;v<a;v++)for(let E=0;E<n;E++){const L=x[E][v],w=x[E+1][v],I=x[E+1][v+1],X=x[E][v+1];(e>0||E!==0)&&(u.push(L,w,X),T+=3),(t>0||E!==n-1)&&(u.push(w,I,X),T+=3)}l.addGroup(d,T,0),d+=T}function A(b){const R=_,T=new Xe,C=new O;let v=0;const E=b===!0?e:t,L=b===!0?1:-1;for(let I=1;I<=a;I++)f.push(0,m*L,0),h.push(0,L,0),p.push(.5,.5),_++;const w=_;for(let I=0;I<=a;I++){const X=I/a*c+o,W=Math.cos(X),F=Math.sin(X);C.x=E*F,C.y=m*L,C.z=E*W,f.push(C.x,C.y,C.z),h.push(0,L,0),T.x=W*.5+.5,T.y=F*.5*L+.5,p.push(T.x,T.y),_++}for(let I=0;I<a;I++){const X=R+I,W=w+I;b===!0?u.push(W,W+1,X):u.push(W+1,W,X),v+=3}l.addGroup(d,v,b===!0?1:2),d+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ga extends Pt{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const n=e/2,s=t/2,o=Math.floor(r),c=Math.floor(a),l=o+1,u=c+1,f=e/o,h=t/c,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const S=d*h-s;for(let A=0;A<l;A++){const b=A*f-n;_.push(b,-S,0),x.push(0,0,1),m.push(A/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<o;S++){const A=S+l*d,b=S+l*(d+1),R=S+1+l*(d+1),T=S+1+l*d;p.push(A,b,T),p.push(b,R,T)}this.setIndex(p),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.widthSegments,e.heightSegments)}}class ic extends Pt{constructor(e=1,t=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const c=Math.min(s+o,Math.PI);let l=0;const u=[],f=new O,h=new O,p=[],_=[],x=[],m=[];for(let d=0;d<=r;d++){const S=[],A=d/r;let b=0;d===0&&s===0?b=.5/t:d===r&&c===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){const T=R/t;f.x=-e*Math.cos(a+T*n)*Math.sin(s+A*o),f.y=e*Math.cos(s+A*o),f.z=e*Math.sin(a+T*n)*Math.sin(s+A*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(T+b,1-A),S.push(l++)}u.push(S)}for(let d=0;d<r;d++)for(let S=0;S<t;S++){const A=u[d][S+1],b=u[d][S],R=u[d+1][S],T=u[d+1][S+1];(d!==0||s>0)&&p.push(A,b,T),(d!==r-1||c<Math.PI)&&p.push(b,R,T)}this.setIndex(p),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ac extends Pt{constructor(e=1,t=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],f=[],h=new O,p=new O,_=new O;for(let x=0;x<=r;x++){const m=s+x/r*o;for(let d=0;d<=a;d++){const S=d/a*n;p.x=(e+t*Math.cos(m))*Math.cos(S),p.y=(e+t*Math.cos(m))*Math.sin(S),p.z=t*Math.sin(m),l.push(p.x,p.y,p.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),_.subVectors(p,h).normalize(),u.push(_.x,_.y,_.z),f.push(d/a),f.push(x/r)}}for(let x=1;x<=r;x++)for(let m=1;m<=a;m++){const d=(a+1)*x+m-1,S=(a+1)*(x-1)+m-1,A=(a+1)*(x-1)+m,b=(a+1)*x+m;c.push(d,S,b),c.push(S,A,b)}this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Si(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const a=i[t][r];if(Wo(a))a.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(Wo(a[0])){const n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();e[t][r]=n}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const r=Si(i[t]);for(const a in r)e[a]=r[a]}return e}function Wo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const ru={clone:Si,merge:Rt};var iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iu,this.fragmentShader=au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=tu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const n=this.uniforms[a].value;n&&n.isTexture?t.uniforms[a]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[a]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[a]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[a]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[a]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[a]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[a]={type:"m4",value:n.toArray()}:t.uniforms[a]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class nu extends sr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class su extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yg extends su{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ou extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lu extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Sa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function cu(i){function e(a,n){return i[a]-i[n]}const t=i.length,r=new Array(t);for(let a=0;a!==t;++a)r[a]=a;return r.sort(e),r}function Xo(i,e,t){const r=i.length,a=new i.constructor(r);for(let n=0,s=0;s!==r;++n){const o=t[n]*e;for(let c=0;c!==e;++c)a[s++]=i[o+c]}return a}function sc(i,e,t,r){let a=1,n=i[0];for(;n!==void 0&&n[r]===void 0;)n=i[a++];if(n===void 0)return;let s=n[r];if(s!==void 0)if(Array.isArray(s))do s=n[r],s!==void 0&&(e.push(n.time),t.push(...s)),n=i[a++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[r],s!==void 0&&(e.push(n.time),s.toArray(t,t.length)),n=i[a++];while(n!==void 0);else do s=n[r],s!==void 0&&(e.push(n.time),t.push(s)),n=i[a++];while(n!==void 0)}class ji{constructor(e,t,r,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let r=this._cachedIndex,a=t[r],n=t[r-1];r:{e:{let s;t:{i:if(!(e<a)){for(let o=r+2;;){if(a===void 0){if(e<n)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===o)break;if(n=a,a=t[++r],e<a)break e}s=t.length;break t}if(!(e>=n)){const o=t[1];e<o&&(r=2,n=o);for(let c=r-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===c)break;if(a=n,n=t[--r-1],e>=n)break e}s=r,r=0;break t}break r}for(;r<s;){const o=r+s>>>1;e<t[o]?s=o:r=o+1}if(a=t[r],n=t[r-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,n,a)}return this.interpolate_(r,n,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,a=this.valueSize,n=e*a;for(let s=0;s!==a;++s)t[s]=r[n+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hu extends ji{constructor(e,t,r,a){super(e,t,r,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lo,endingEnd:lo}}intervalChanged_(e,t,r){const a=this.parameterPositions;let n=e-2,s=e+1,o=a[n],c=a[s];if(o===void 0)switch(this.getSettings_().endingStart){case co:n=e,o=2*t-r;break;case ho:n=a.length-2,o=t+a[n]-a[n+1];break;default:n=e,o=r}if(c===void 0)switch(this.getSettings_().endingEnd){case co:s=e,c=2*r-t;break;case ho:s=1,c=r+a[1]-a[0];break;default:s=e-1,c=t}const l=(r-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-r),this._offsetPrev=n*u,this._offsetNext=s*u}interpolate_(e,t,r,a){const n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(r-t)/(a-t),x=_*_,m=x*_,d=-h*m+2*h*x-h*_,S=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*_+1,A=(-1-p)*m+(1.5+p)*x+.5*_,b=p*m-p*x;for(let R=0;R!==o;++R)n[R]=d*s[u+R]+S*s[l+R]+A*s[c+R]+b*s[f+R];return n}}class uu extends ji{constructor(e,t,r,a){super(e,t,r,a)}interpolate_(e,t,r,a){const n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(r-t)/(a-t),f=1-u;for(let h=0;h!==o;++h)n[h]=s[l+h]*f+s[c+h]*u;return n}}class du extends ji{constructor(e,t,r,a){super(e,t,r,a)}interpolate_(e){return this.copySampleValue_(e-1)}}class pu extends ji{interpolate_(e,t,r,a){const n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.settings||this.DefaultSettings_,f=u.inTangents,h=u.outTangents;if(!f||!h){const x=(r-t)/(a-t),m=1-x;for(let d=0;d!==o;++d)n[d]=s[l+d]*m+s[c+d]*x;return n}const p=o*2,_=e-1;for(let x=0;x!==o;++x){const m=s[l+x],d=s[c+x],S=_*p+x*2,A=h[S],b=h[S+1],R=e*p+x*2,T=f[R],C=f[R+1];let v=(r-t)/(a-t),E,L,w,I,X;for(let W=0;W<8;W++){E=v*v,L=E*v,w=1-v,I=w*w,X=I*w;const F=X*t+3*I*v*A+3*w*E*T+L*a-r;if(Math.abs(F)<1e-10)break;const H=3*I*(A-t)+6*w*v*(T-A)+3*E*(a-T);if(Math.abs(H)<1e-10)break;v=v-F/H,v=Math.max(0,Math.min(1,v))}n[x]=X*m+3*I*v*b+3*w*E*C+L*d}return n}}class Jt{constructor(e,t,r,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(r,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};const a=e.getInterpolation();a!==e.DefaultInterpolation&&(r.interpolation=a)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new du(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new pu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Na:t=this.InterpolantFactoryMethodDiscrete;break;case Ss:t=this.InterpolantFactoryMethodLinear;break;case Qa:t=this.InterpolantFactoryMethodSmooth;break;case oo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return Me("KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Ss;case this.InterpolantFactoryMethodSmooth:return Qa;case this.InterpolantFactoryMethodBezier:return oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let r=0,a=t.length;r!==a;++r)t[r]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let r=0,a=t.length;r!==a;++r)t[r]*=e}return this}trim(e,t){const r=this.times,a=r.length;let n=0,s=a-1;for(;n!==a&&r[n]<e;)++n;for(;s!==-1&&r[s]>t;)--s;if(++s,n!==0||s!==a){n>=s&&(s=Math.max(s,1),n=s-1);const o=this.getValueSize();this.times=r.slice(n,s),this.values=this.values.slice(n*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(be("KeyframeTrack: Invalid value size in track.",this),e=!1);const r=this.times,a=this.values,n=r.length;n===0&&(be("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==n;o++){const c=r[o];if(typeof c=="number"&&isNaN(c)){be("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(s!==null&&s>c){be("KeyframeTrack: Out of order keys.",this,o,c,s),e=!1;break}s=c}if(a!==void 0&&oh(a))for(let o=0,c=a.length;o!==c;++o){const l=a[o];if(isNaN(l)){be("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),a=this.getInterpolation()===Qa,n=e.length-1;let s=1;for(let o=1;o<n;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(a)c=!0;else{const f=o*r,h=f-r,p=f+r;for(let _=0;_!==r;++_){const x=t[f+_];if(x!==t[h+_]||x!==t[p+_]){c=!0;break}}}if(c){if(o!==s){e[s]=e[o];const f=o*r,h=s*r;for(let p=0;p!==r;++p)t[h+p]=t[f+p]}++s}}if(n>0){e[s]=e[n];for(let o=n*r,c=s*r,l=0;l!==r;++l)t[c+l]=t[o+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*r)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),r=this.constructor,a=new r(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}}Jt.prototype.ValueTypeName="";Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=Ss;class yi extends Jt{constructor(e,t,r){super(e,t,r)}}yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Na;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;class oc extends Jt{constructor(e,t,r,a){super(e,t,r,a)}}oc.prototype.ValueTypeName="color";class za extends Jt{constructor(e,t,r,a){super(e,t,r,a)}}za.prototype.ValueTypeName="number";class fu extends ji{constructor(e,t,r,a){super(e,t,r,a)}interpolate_(e,t,r,a){const n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=(r-t)/(a-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Kr.slerpFlat(n,0,s,l-o,s,l,c);return n}}class Wa extends Jt{constructor(e,t,r,a){super(e,t,r,a)}InterpolantFactoryMethodLinear(e){return new fu(this.times,this.values,this.getValueSize(),e)}}Wa.prototype.ValueTypeName="quaternion";Wa.prototype.InterpolantFactoryMethodSmooth=void 0;class Ti extends Jt{constructor(e,t,r){super(e,t,r)}}Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Na;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;class Ha extends Jt{constructor(e,t,r,a){super(e,t,r,a)}}Ha.prototype.ValueTypeName="vector";class Kg{constructor(e="",t=-1,r=[],a=Zc){this.name=e,this.tracks=r,this.duration=t,this.blendMode=a,this.uuid=Kt(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],r=e.tracks,a=1/(e.fps||1);for(let s=0,o=r.length;s!==o;++s)t.push(gu(r[s]).scale(a));const n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n.userData=JSON.parse(e.userData||"{}"),n}static toJSON(e){const t=[],r=e.tracks,a={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let n=0,s=r.length;n!==s;++n)t.push(Jt.toJSON(r[n]));return a}static CreateFromMorphTargetSequence(e,t,r,a){const n=t.length,s=[];for(let o=0;o<n;o++){let c=[],l=[];c.push((o+n-1)%n,o,(o+1)%n),l.push(0,1,0);const u=cu(c);c=Xo(c,1,u),l=Xo(l,1,u),!a&&c[0]===0&&(c.push(n),l.push(l[0])),s.push(new za(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/r))}return new this(e,-1,s)}static findByName(e,t){let r=e;if(!Array.isArray(e)){const a=e;r=a.geometry&&a.geometry.animations||a.animations}for(let a=0;a<r.length;a++)if(r[a].name===t)return r[a];return null}static CreateClipsFromMorphTargetSequences(e,t,r){const a={},n=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(n);if(u&&u.length>1){const f=u[1];let h=a[f];h||(a[f]=h=[]),h.push(l)}}const s=[];for(const o in a)s.push(this.CreateFromMorphTargetSequence(o,a[o],t,r));return s}static parseAnimation(e,t){if(Me("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return be("AnimationClip: No animation in JSONLoader data."),null;const r=function(u,f,h,p,_){if(h.length!==0){const x=[],m=[];sc(h,x,m,p),x.length!==0&&_.push(new u(f,x,m))}},a=[],n=e.name||"default",s=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const h={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)h[f[p].morphTargets[_]]=-1;for(const _ in h){const x=[],m=[];for(let d=0;d!==f[p].morphTargets.length;++d){const S=f[p];x.push(S.time),m.push(S.morphTarget===_?1:0)}a.push(new za(".morphTargetInfluence["+_+"]",x,m))}c=h.length*s}else{const h=".bones["+t[u].name+"]";r(Ha,h+".position",f,"pos",a),r(Wa,h+".quaternion",f,"rot",a),r(Ha,h+".scale",f,"scl",a)}}return a.length===0?null:new this(n,c,a,o)}resetDuration(){const e=this.tracks;let t=0;for(let r=0,a=e.length;r!==a;++r){const n=this.tracks[r];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let r=0;r<this.tracks.length;r++)e.push(this.tracks[r].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function mu(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return za;case"vector":case"vector2":case"vector3":case"vector4":return Ha;case"color":return oc;case"quaternion":return Wa;case"bool":case"boolean":return yi;case"string":return Ti}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gu(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=mu(i.type);if(i.times===void 0){const t=[],r=[];sc(i.keys,t,r,"value"),i.times=t,i.values=r}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const gr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(jo(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!jo(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function jo(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class _u{constructor(e,t,r){const a=this;let n=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(u){o++,n===!1&&a.onStart!==void 0&&a.onStart(u,s,o),n=!0},this.itemEnd=function(u){s++,a.onProgress!==void 0&&a.onProgress(u,s,o),s===o&&(n=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const p=l[f],_=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const vu=new _u;class qi{constructor(e){this.manager=e!==void 0?e:vu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(a,n){r.load(e,a,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr={};class Mu extends Error{constructor(e,t){super(e),this.response=t}}class Jg extends qi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=gr.get(`file:${e}`);if(n!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0);return}if(pr[e]!==void 0){pr[e].push({onLoad:t,onProgress:r,onError:a});return}pr[e]=[],pr[e].push({onLoad:t,onProgress:r,onError:a});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Me("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=pr[e],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=h?parseInt(h):0,_=p!==0;let x=0;const m=new ReadableStream({start(d){S();function S(){f.read().then(({done:A,value:b})=>{if(A)d.close();else{x+=b.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let T=0,C=u.length;T<C;T++){const v=u[T];v.onProgress&&v.onProgress(R)}d.enqueue(b),S()}},A=>{d.error(A)})}}});return new Response(m)}else throw new Mu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,h=new TextDecoder(f);return l.arrayBuffer().then(p=>h.decode(p))}}}).then(l=>{gr.add(`file:${e}`,l);const u=pr[e];delete pr[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=pr[e];if(u===void 0)throw this.manager.itemError(e),l;delete pr[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ui=new WeakMap;class xu extends qi{constructor(e){super(e)}load(e,t,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,s=gr.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)n.manager.itemStart(e),setTimeout(function(){t&&t(s),n.manager.itemEnd(e)},0);else{let f=ui.get(s);f===void 0&&(f=[],ui.set(s,f)),f.push({onLoad:t,onError:a})}return s}const o=Gi("img");function c(){u(),t&&t(this);const f=ui.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}ui.delete(this),n.manager.itemEnd(e)}function l(f){u(),a&&a(f),gr.remove(`image:${e}`);const h=ui.get(this)||[];for(let p=0;p<h.length;p++){const _=h[p];_.onError&&_.onError(f)}ui.delete(this),n.manager.itemError(e),n.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),gr.add(`image:${e}`,o),n.manager.itemStart(e),o.src=e,o}}class Zg extends qi{constructor(e){super(e)}load(e,t,r,a){const n=new bt,s=new xu(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){n.image=o,n.needsUpdate=!0,t!==void 0&&t(n)},r,a),n}}class Xa extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const An=new ke,qo=new O,Yo=new O;class Ws{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Ft,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;qo.setFromMatrixPosition(e.matrixWorld),t.position.copy(qo),Yo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yo),t.updateMatrixWorld(),An.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(An,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ki||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(An)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ya=new O,Ta=new Kr,Qt=new O;class lc extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=rr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ya,Ta,Qt),Qt.x===1&&Qt.y===1&&Qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,Ta,Qt.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ya,Ta,Qt),Qt.x===1&&Qt.y===1&&Qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,Ta,Qt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new O,Ko=new Xe,Jo=new Xe;class Lt extends lc{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mi*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,Ko,Jo),t.subVectors(Jo,Ko)}setViewOffset(e,t,r,a,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bi*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,n=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;n+=s.offsetX*a/c,t-=s.offsetY*r/l,a*=s.width/c,r*=s.height/l}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Su extends Ws{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=Mi*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,n=e.distance||t.far;(r!==t.fov||a!==t.aspect||n!==t.far)&&(t.fov=r,t.aspect=a,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $g extends Xa{constructor(e,t,r=0,a=Math.PI/3,n=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=r,this.angle=a,this.penumbra=n,this.decay=s,this.map=null,this.shadow=new Su}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class yu extends Ws{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0}}class Qg extends Xa{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new yu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Xs extends lc{constructor(e=-1,t=1,r=1,a=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let n=r-e,s=r+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,s=n+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Tu extends Ws{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class e_ extends Xa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Tu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class t_ extends Xa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class r_{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const wn=new WeakMap;class i_ extends qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Me("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Me("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,r,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,s=gr.get(`image-bitmap:${e}`);if(s!==void 0){if(n.manager.itemStart(e),s.then){s.then(l=>{wn.has(s)===!0?(a&&a(wn.get(s)),n.manager.itemError(e),n.manager.itemEnd(e)):(t&&t(l),n.manager.itemEnd(e))});return}setTimeout(function(){t&&t(s),n.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(l){gr.add(`image-bitmap:${e}`,l),t&&t(l),n.manager.itemEnd(e)}).catch(function(l){a&&a(l),wn.set(c,l),gr.remove(`image-bitmap:${e}`),n.manager.itemError(e),n.manager.itemEnd(e)});gr.add(`image-bitmap:${e}`,c),n.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const di=-90,pi=1;class bu extends ut{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Lt(di,pi,e,t);a.layers=this.layers,this.add(a);const n=new Lt(di,pi,e,t);n.layers=this.layers,this.add(n);const s=new Lt(di,pi,e,t);s.layers=this.layers,this.add(s);const o=new Lt(di,pi,e,t);o.layers=this.layers,this.add(o);const c=new Lt(di,pi,e,t);c.layers=this.layers,this.add(c);const l=new Lt(di,pi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,n,s,o,c]=t;for(const l of t)this.remove(l);if(e===rr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ki)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,s,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(r,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(r,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(r,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),r.texture.generateMipmaps=x,e.setRenderTarget(r,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class Eu extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const js="\\[\\]\\.:\\/",Au=new RegExp("["+js+"]","g"),qs="[^"+js+"]",wu="[^"+js.replace("\\.","")+"]",Ru=/((?:WC+[\/:])*)/.source.replace("WC",qs),Cu=/(WCOD+)?/.source.replace("WCOD",wu),Pu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qs),Du=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qs),Uu=new RegExp("^"+Ru+Cu+Pu+Du+"$"),Iu=["material","materials","bones","map"];class Nu{constructor(e,t,r){const a=r||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();const r=this._targetGroup.nCachedObjects_,a=this._bindings[r];a!==void 0&&a.getValue(e,t)}setValue(e,t){const r=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=r.length;a!==n;++a)r[a].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}}class $e{constructor(e,t,r){this.path=t,this.parsedPath=r||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,r):new $e(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Au,"")}static parseTrackName(e){const t=Uu.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){const n=r.nodeName.substring(a+1);Iu.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){const r=function(n){for(let s=0;s<n.length;s++){const o=n[s];if(o.name===t||o.uuid===t)return o;const c=r(o.children);if(c)return c}return null},a=r(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)e[t++]=r[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,r=t.objectName,a=t.propertyName;let n=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let l=t.objectIndex;switch(r){case"materials":if(!e.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(l!==void 0){if(e[l]===void 0){be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const s=e[a];if(s===void 0){const l=t.nodeName;be("PropertyBinding: Trying to update property for track: "+l+"."+a+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=Nu;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Zo=new ke;class a_{constructor(e,t,r=0,a=1/0){this.ray=new Wi(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new Hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):be("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zo),this}intersectObject(e,t=!0,r=[]){return As(e,this,r,t),r.sort($o),r}intersectObjects(e,t=!0,r=[]){for(let a=0,n=e.length;a<n;a++)As(e[a],this,r,t);return r.sort($o),r}}function $o(i,e){return i.distance-e.distance}function As(i,e,t,r){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const n=i.children;for(let s=0,o=n.length;s<o;s++)As(n[s],e,t,!0)}}class n_{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Le(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const cc=class{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const n=this.elements;return n[0]=e,n[2]=t,n[1]=r,n[3]=a,this}};cc.prototype.isMatrix2=!0;let o_=cc;class l_ extends Nr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Me("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Qo(i,e,t,r){const a=Lu(r);switch(t){case Fl:return i*e;case Is:return i*e/a.components*a.byteLength;case Ns:return i*e/a.components*a.byteLength;case Yr:return i*e*2/a.components*a.byteLength;case Ls:return i*e*2/a.components*a.byteLength;case Ol:return i*e*3/a.components*a.byteLength;case Ht:return i*e*4/a.components*a.byteLength;case Fs:return i*e*4/a.components*a.byteLength;case wa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jn:case Yn:return Math.max(i,16)*Math.max(e,8)/4;case Xn:case qn:return Math.max(i,8)*Math.max(e,8)/2;case Kn:case Jn:case $n:case Qn:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zn:case Ua:case es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case is:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case as:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ns:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ss:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case os:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ls:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case us:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ds:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ps:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ms:case gs:case _s:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vs:case Ms:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ia:case xs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lu(i){switch(i){case Ft:case Ul:return{byteLength:1,components:1};case zi:case Il:case Mr:return{byteLength:2,components:1};case Ds:case Us:return{byteLength:2,components:4};case nr:case Ps:case zt:return{byteLength:4,components:1};case Nl:case Ll:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cs}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cs);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hc(){let i=null,e=!1,t=null,r=null;function a(n,s){t(n,s),r=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(r=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){i=n}}}function Fu(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function r(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(l.buffer,o,c),l.version=o.version}}return{get:a,remove:n,update:s}}var Ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ku=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ju=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,od=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Cd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ld=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Up=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,of=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ff=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:Ou,alphahash_pars_fragment:Bu,alphamap_fragment:Vu,alphamap_pars_fragment:zu,alphatest_fragment:Hu,alphatest_pars_fragment:ku,aomap_fragment:Gu,aomap_pars_fragment:Wu,batching_pars_vertex:Xu,batching_vertex:ju,begin_vertex:qu,beginnormal_vertex:Yu,bsdfs:Ku,iridescence_fragment:Ju,bumpmap_pars_fragment:Zu,clipping_planes_fragment:$u,clipping_planes_pars_fragment:Qu,clipping_planes_pars_vertex:ed,clipping_planes_vertex:td,color_fragment:rd,color_pars_fragment:id,color_pars_vertex:ad,color_vertex:nd,common:sd,cube_uv_reflection_fragment:od,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:hd,emissivemap_fragment:ud,emissivemap_pars_fragment:dd,colorspace_fragment:pd,colorspace_pars_fragment:fd,envmap_fragment:md,envmap_common_pars_fragment:gd,envmap_pars_fragment:_d,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Cd,envmap_vertex:Md,fog_vertex:xd,fog_pars_vertex:Sd,fog_fragment:yd,fog_pars_fragment:Td,gradientmap_pars_fragment:bd,lightmap_pars_fragment:Ed,lights_lambert_fragment:Ad,lights_lambert_pars_fragment:wd,lights_pars_begin:Rd,lights_toon_fragment:Pd,lights_toon_pars_fragment:Dd,lights_phong_fragment:Ud,lights_phong_pars_fragment:Id,lights_physical_fragment:Nd,lights_physical_pars_fragment:Ld,lights_fragment_begin:Fd,lights_fragment_maps:Od,lights_fragment_end:Bd,lightprobes_pars_fragment:Vd,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:Hd,logdepthbuf_pars_vertex:kd,logdepthbuf_vertex:Gd,map_fragment:Wd,map_pars_fragment:Xd,map_particle_fragment:jd,map_particle_pars_fragment:qd,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:Kd,morphinstance_vertex:Jd,morphcolor_vertex:Zd,morphnormal_vertex:$d,morphtarget_pars_vertex:Qd,morphtarget_vertex:ep,normal_fragment_begin:tp,normal_fragment_maps:rp,normal_pars_fragment:ip,normal_pars_vertex:ap,normal_vertex:np,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:hp,opaque_fragment:up,packing:dp,premultiplied_alpha_fragment:pp,project_vertex:fp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:Mp,shadowmap_pars_vertex:xp,shadowmap_vertex:Sp,shadowmask_pars_fragment:yp,skinbase_vertex:Tp,skinning_pars_vertex:bp,skinning_vertex:Ep,skinnormal_vertex:Ap,specularmap_fragment:wp,specularmap_pars_fragment:Rp,tonemapping_fragment:Cp,tonemapping_pars_fragment:Pp,transmission_fragment:Dp,transmission_pars_fragment:Up,uv_pars_fragment:Ip,uv_pars_vertex:Np,uv_vertex:Lp,worldpos_vertex:Fp,background_vert:Op,background_frag:Bp,backgroundCube_vert:Vp,backgroundCube_frag:zp,cube_vert:Hp,cube_frag:kp,depth_vert:Gp,depth_frag:Wp,distance_vert:Xp,distance_frag:jp,equirect_vert:qp,equirect_frag:Yp,linedashed_vert:Kp,linedashed_frag:Jp,meshbasic_vert:Zp,meshbasic_frag:$p,meshlambert_vert:Qp,meshlambert_frag:ef,meshmatcap_vert:tf,meshmatcap_frag:rf,meshnormal_vert:af,meshnormal_frag:nf,meshphong_vert:sf,meshphong_frag:of,meshphysical_vert:lf,meshphysical_frag:cf,meshtoon_vert:hf,meshtoon_frag:uf,points_vert:df,points_frag:pf,shadow_vert:ff,shadow_frag:mf,sprite_vert:gf,sprite_frag:_f},ue={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},tr={basic:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Rt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Rt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Rt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Rt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Rt([ue.points,ue.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Rt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Rt([ue.common,ue.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Rt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Rt([ue.sprite,ue.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distance:{uniforms:Rt([ue.common,ue.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distance_vert,fragmentShader:Ie.distance_frag},shadow:{uniforms:Rt([ue.lights,ue.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};tr.physical={uniforms:Rt([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const ba={r:0,b:0,g:0},vf=new ke,uc=new Ue;uc.set(-1,0,0,0,1,0,0,0,1);function Mf(i,e,t,r,a,n){const s=new Oe(0);let o=a===!0?0:1,c,l,u=null,f=0,h=null;function p(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const b=S.backgroundBlurriness>0;A=e.get(A,b)}return A}function _(S){let A=!1;const b=p(S);b===null?m(s,o):b&&b.isColor&&(m(b,1),A=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,n):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,n),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,A){const b=p(A);b&&(b.isCubeTexture||b.mapping===ka)?(l===void 0&&(l=new Gt(new Xi(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Si(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(vf.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(uc),l.material.toneMapped=He.getTransfer(b.colorSpace)!==Ye,(u!==b||f!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Gt(new Ga(2,2),new sr({name:"BackgroundMaterial",uniforms:Si(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=He.getTransfer(b.colorSpace)!==Ye,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,A){S.getRGB(ba,nc(i)),t.buffers.color.setClear(ba.r,ba.g,ba.b,A,n)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(S,A=1){s.set(S),o=A,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(s,o)},render:_,addToRenderList:x,dispose:d}}function xf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},a=h(null);let n=a,s=!1;function o(w,I,X,W,F){let H=!1;const G=f(w,W,X,I);n!==G&&(n=G,l(n.object)),H=p(w,W,X,F),H&&_(w,W,X,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,b(w,I,X,W),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function f(w,I,X,W){const F=W.wireframe===!0;let H=r[I.id];H===void 0&&(H={},r[I.id]=H);const G=w.isInstancedMesh===!0?w.id:0;let $=H[G];$===void 0&&($={},H[G]=$);let ee=$[X.id];ee===void 0&&(ee={},$[X.id]=ee);let ie=ee[F];return ie===void 0&&(ie=h(c()),ee[F]=ie),ie}function h(w){const I=[],X=[],W=[];for(let F=0;F<t;F++)I[F]=0,X[F]=0,W[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:X,attributeDivisors:W,object:w,attributes:{},index:null}}function p(w,I,X,W){const F=n.attributes,H=I.attributes;let G=0;const $=X.getAttributes();for(const ee in $)if($[ee].location>=0){const ie=F[ee];let ve=H[ee];if(ve===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(ve=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(ve=w.instanceColor)),ie===void 0||ie.attribute!==ve||ve&&ie.data!==ve.data)return!0;G++}return n.attributesNum!==G||n.index!==W}function _(w,I,X,W){const F={},H=I.attributes;let G=0;const $=X.getAttributes();for(const ee in $)if($[ee].location>=0){let ie=H[ee];ie===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor));const ve={};ve.attribute=ie,ie&&ie.data&&(ve.data=ie.data),F[ee]=ve,G++}n.attributes=F,n.attributesNum=G,n.index=W}function x(){const w=n.newAttributes;for(let I=0,X=w.length;I<X;I++)w[I]=0}function m(w){d(w,0)}function d(w,I){const X=n.newAttributes,W=n.enabledAttributes,F=n.attributeDivisors;X[w]=1,W[w]===0&&(i.enableVertexAttribArray(w),W[w]=1),F[w]!==I&&(i.vertexAttribDivisor(w,I),F[w]=I)}function S(){const w=n.newAttributes,I=n.enabledAttributes;for(let X=0,W=I.length;X<W;X++)I[X]!==w[X]&&(i.disableVertexAttribArray(X),I[X]=0)}function A(w,I,X,W,F,H,G){G===!0?i.vertexAttribIPointer(w,I,X,F,H):i.vertexAttribPointer(w,I,X,W,F,H)}function b(w,I,X,W){x();const F=W.attributes,H=X.getAttributes(),G=I.defaultAttributeValues;for(const $ in H){const ee=H[$];if(ee.location>=0){let ie=F[$];if(ie===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor)),ie!==void 0){const ve=ie.normalized,Re=ie.itemSize,Ge=e.get(ie);if(Ge===void 0)continue;const Je=Ge.buffer,De=Ge.type,Y=Ge.bytesPerElement,oe=De===i.INT||De===i.UNSIGNED_INT||ie.gpuType===Ps;if(ie.isInterleavedBufferAttribute){const ae=ie.data,Ee=ae.stride,Pe=ie.offset;if(ae.isInstancedInterleavedBuffer){for(let fe=0;fe<ee.locationSize;fe++)d(ee.location+fe,ae.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let fe=0;fe<ee.locationSize;fe++)m(ee.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let fe=0;fe<ee.locationSize;fe++)A(ee.location+fe,Re/ee.locationSize,De,ve,Ee*Y,(Pe+Re/ee.locationSize*fe)*Y,oe)}else{if(ie.isInstancedBufferAttribute){for(let ae=0;ae<ee.locationSize;ae++)d(ee.location+ae,ie.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<ee.locationSize;ae++)m(ee.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let ae=0;ae<ee.locationSize;ae++)A(ee.location+ae,Re/ee.locationSize,De,ve,Re*Y,Re/ee.locationSize*ae*Y,oe)}}else if(G!==void 0){const ve=G[$];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(ee.location,ve);break;case 3:i.vertexAttrib3fv(ee.location,ve);break;case 4:i.vertexAttrib4fv(ee.location,ve);break;default:i.vertexAttrib1fv(ee.location,ve)}}}}S()}function R(){E();for(const w in r){const I=r[w];for(const X in I){const W=I[X];for(const F in W){const H=W[F];for(const G in H)u(H[G].object),delete H[G];delete W[F]}}delete r[w]}}function T(w){if(r[w.id]===void 0)return;const I=r[w.id];for(const X in I){const W=I[X];for(const F in W){const H=W[F];for(const G in H)u(H[G].object),delete H[G];delete W[F]}}delete r[w.id]}function C(w){for(const I in r){const X=r[I];for(const W in X){const F=X[W];if(F[w.id]===void 0)continue;const H=F[w.id];for(const G in H)u(H[G].object),delete H[G];delete F[w.id]}}}function v(w){for(const I in r){const X=r[I],W=w.isInstancedMesh===!0?w.id:0,F=X[W];if(F!==void 0){for(const H in F){const G=F[H];for(const $ in G)u(G[$].object),delete G[$];delete F[H]}delete X[W],Object.keys(X).length===0&&delete r[I]}}}function E(){L(),s=!0,n!==a&&(n=a,l(n.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:E,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Sf(i,e,t){let r;function a(c){r=c}function n(c,l){i.drawArrays(r,c,l),t.update(l,r,1)}function s(c,l,u){u!==0&&(i.drawArraysInstanced(r,c,l,u),t.update(l,r,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];t.update(f,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function yf(i,e,t,r){let a;function n(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==Ht&&r.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ft&&r.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zt&&!v)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Me("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:b,maxSamples:R,samples:T}}function Tf(i){const e=this;let t=null,r=0,a=!1,n=!1;const s=new kr,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||r!==0||a;return a=h,r=f.length,p},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!a||_===null||_.length===0||n&&!m)n?u(null):l();else{const S=n?0:r,A=S*4;let b=d.clippingState||null;c.value=b,b=u(_,h,A,p);for(let R=0;R!==A;++R)b[R]=t[R];d.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,h,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const d=p+x*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,b=p;A!==x;++A,b+=4)s.copy(f[A]).applyMatrix4(S,o),s.normal.toArray(m,b),m[b+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const Dr=4,el=[.125,.215,.35,.446,.526,.582],Wr=20,bf=256,Ni=new Xs,tl=new Oe;let Rn=null,Cn=0,Pn=0,Dn=!1;const Ef=new O;class rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,n={}){const{size:s=256,position:o=Ef}=n;Rn=this._renderer.getRenderTarget(),Cn=this._renderer.getActiveCubeFace(),Pn=this._renderer.getActiveMipmapLevel(),Dn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rn,Cn,Pn),this._renderer.xr.enabled=Dn,e.scissorTest=!1,fi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rn=this._renderer.getRenderTarget(),Cn=this._renderer.getActiveCubeFace(),Pn=this._renderer.getActiveMipmapLevel(),Dn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Mr,format:Ht,colorSpace:La,depthBuffer:!1},a=il(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(e,t,r);const{_lodMax:n}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Af(n)),this._blurMaterial=Rf(n,e,t),this._ggxMaterial=wf(n,e,t)}return a}_compileMaterial(e){const t=new Gt(new Pt,e);this._renderer.compile(t,Ni)}_sceneToCubeUV(e,t,r,a,n){const s=new Lt(90,1,t,r),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,f=l.toneMapping;l.getClearColor(tl),l.toneMapping=ir,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(a),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new Xi,new Zl({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1})));const h=this._backgroundBox,p=h.material;let _=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,_=!0):(p.color.copy(tl),_=!0);for(let m=0;m<6;m++){const d=m%3;d===0?(s.up.set(0,o[m],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x+c[m],n.y,n.z)):d===1?(s.up.set(0,0,o[m]),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y+c[m],n.z)):(s.up.set(0,o[m],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y,n.z+c[m]));const S=this._cubeSize;fi(a,d*S,m>2?S:0,S,S),l.setRenderTarget(a),_&&l.render(h,s),l.render(e,s)}l.toneMapping=f,l.autoClear=u,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===qr||e.mapping===vi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=al());const n=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=n;const o=n.uniforms;o.envMap.value=e;const c=this._cubeSize;fi(t,0,0,3*c,2*c),r.setRenderTarget(t),r.render(s,Ni)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let n=1;n<a;n++)this._applyGGXFilter(e,n-1,n);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,n=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[r];o.material=s;const c=s.uniforms,l=r/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,p=f*h,{_lodMax:_}=this,x=this._sizeLods[r],m=3*x*(r>_-Dr?r-_+Dr:0),d=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-t,fi(n,m,d,3*x,2*x),a.setRenderTarget(n),a.render(o,Ni),c.envMap.value=n.texture,c.roughness.value=0,c.mipInt.value=_-r,fi(e,m,d,3*x,2*x),a.setRenderTarget(e),a.render(o,Ni)}_blur(e,t,r,a,n){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,a,"latitudinal",n),this._halfBlur(s,e,r,r,a,"longitudinal",n)}_halfBlur(e,t,r,a,n,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&be("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[a];f.material=l;const h=l.uniforms,p=this._sizeLods[r]-1,_=isFinite(n)?Math.PI/(2*p):2*Math.PI/(2*Wr-1),x=n/_,m=isFinite(n)?1+Math.floor(u*x):Wr;m>Wr&&Me(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wr}`);const d=[];let S=0;for(let C=0;C<Wr;++C){const v=C/x,E=Math.exp(-v*v/2);d.push(E),C===0?S+=E:C<m&&(S+=2*E)}for(let C=0;C<d.length;C++)d[C]=d[C]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=_,h.mipInt.value=A-r;const b=this._sizeLods[a],R=3*b*(a>A-Dr?a-A+Dr:0),T=4*(this._cubeSize-b);fi(t,R,T,3*b,2*b),c.setRenderTarget(t),c.render(f,Ni)}}function Af(i){const e=[],t=[],r=[];let a=i;const n=i-Dr+1+el.length;for(let s=0;s<n;s++){const o=Math.pow(2,a);e.push(o);let c=1/o;s>i-Dr?c=el[s-i+Dr-1]:s===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,m=2,d=1,S=new Float32Array(x*_*p),A=new Float32Array(m*_*p),b=new Float32Array(d*_*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,v=T>2?0:-1,E=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];S.set(E,x*_*T),A.set(h,m*_*T);const L=[T,T,T,T,T,T];b.set(L,d*_*T)}const R=new Pt;R.setAttribute("position",new kt(S,x)),R.setAttribute("uv",new kt(A,m)),R.setAttribute("faceIndex",new kt(b,d)),r.push(new Gt(R,null)),a>Dr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function il(i,e,t){const r=new ar(i,e,t);return r.texture.mapping=ka,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fi(i,e,t,r,a){i.viewport.set(e,t,r,a),i.scissor.set(e,t,r,a)}function wf(i,e,t){return new sr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ja(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Rf(i,e,t){const r=new Float32Array(Wr),a=new O(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function al(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function nl(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class dc extends ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new ec(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Xi(5,5,5),n=new sr({name:"CubemapFromEquirect",uniforms:Si(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ct,blending:_r});n.uniforms.tEquirect.value=t;const s=new Gt(a,n),o=t.minFilter;return t.minFilter===Xr&&(t.minFilter=Tt),new bu(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,a);e.setRenderTarget(n)}}function Cf(i){let e=new WeakMap,t=new WeakMap,r=null;function a(h,p=!1){return h==null?null:p?s(h):n(h)}function n(h){if(h&&h.isTexture){const p=h.mapping;if(p===Ja||p===Za)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const x=new dc(_.height);return x.fromEquirectangularTexture(i,h),e.set(h,x),h.addEventListener("dispose",l),o(x.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){const p=h.mapping,_=p===Ja||p===Za,x=p===qr||p===vi;if(_||x){let m=t.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return r===null&&(r=new rl(i)),m=_?r.fromEquirectangular(h,m):r.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return _&&S&&S.height>0||x&&S&&c(S)?(r===null&&(r=new rl(i)),m=_?r.fromEquirectangular(h):r.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Ja?h.mapping=qr:p===Za&&(h.mapping=vi),h}function c(h){let p=0;const _=6;for(let x=0;x<_;x++)h[x]!==void 0&&p++;return p===_}function l(h){const p=h.target;p.removeEventListener("dispose",l);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:f}}function Pf(i){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=i.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&bs("WebGLRenderer: "+r+" extension not supported."),a}}}function Df(i,e,t,r){const a={},n=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",s),delete a[h.id];const p=n.get(h);p&&(e.remove(p),n.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function l(f){const h=[],p=f.index,_=f.attributes.position;let x=0;if(_===void 0)return;if(p!==null){const S=p.array;x=p.version;for(let A=0,b=S.length;A<b;A+=3){const R=S[A+0],T=S[A+1],C=S[A+2];h.push(R,T,T,C,C,R)}}else{const S=_.array;x=_.version;for(let A=0,b=S.length/3-1;A<b;A+=3){const R=A+0,T=A+1,C=A+2;h.push(R,T,T,C,C,R)}}const m=new(_.count>=65535?Kl:Yl)(h,1);m.version=x;const d=n.get(f);d&&e.remove(d),n.set(f,m)}function u(f){const h=n.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return n.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Uf(i,e,t){let r;function a(f){r=f}let n,s;function o(f){n=f.type,s=f.bytesPerElement}function c(f,h){i.drawElements(r,h,n,f*s),t.update(h,r,1)}function l(f,h,p){p!==0&&(i.drawElementsInstanced(r,h,n,f*s,p),t.update(h,r,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,n,f,0,p);let _=0;for(let x=0;x<p;x++)_+=h[x];t.update(_,r,1)}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function If(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(n/3);break;case i.LINES:t.lines+=o*(n/2);break;case i.LINE_STRIP:t.lines+=o*(n-1);break;case i.LINE_LOOP:t.lines+=o*n;break;case i.POINTS:t.points+=o*n;break;default:be("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function Nf(i,e,t){const r=new WeakMap,a=new at;function n(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=r.get(o);if(h===void 0||h.count!==f){let p=function(){v.dispose(),r.delete(o),o.removeEventListener("dispose",p)};h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let R=o.attributes.position.count*b,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*T*4*f),v=new Gl(C,R,T,f);v.type=zt,v.needsUpdate=!0;const E=b*4;for(let L=0;L<f;L++){const w=d[L],I=S[L],X=A[L],W=R*T*4*L;for(let F=0;F<w.count;F++){const H=F*E;_===!0&&(a.fromBufferAttribute(w,F),C[W+H+0]=a.x,C[W+H+1]=a.y,C[W+H+2]=a.z,C[W+H+3]=0),x===!0&&(a.fromBufferAttribute(I,F),C[W+H+4]=a.x,C[W+H+5]=a.y,C[W+H+6]=a.z,C[W+H+7]=0),m===!0&&(a.fromBufferAttribute(X,F),C[W+H+8]=a.x,C[W+H+9]=a.y,C[W+H+10]=a.z,C[W+H+11]=X.itemSize===4?a.w:1)}}h={count:f,texture:v,size:new Xe(R,T)},r.set(o,h),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:n}}function Lf(i,e,t,r,a){let n=new WeakMap;function s(l){const u=a.render.frame,f=l.geometry,h=e.get(l,f);if(n.get(h)!==u&&(e.update(h),n.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),n.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),n.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;n.get(p)!==u&&(p.update(),n.set(p,u))}return h}function o(){n=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),r.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Ff={[bl]:"LINEAR_TONE_MAPPING",[El]:"REINHARD_TONE_MAPPING",[Al]:"CINEON_TONE_MAPPING",[wl]:"ACES_FILMIC_TONE_MAPPING",[Cl]:"AGX_TONE_MAPPING",[Pl]:"NEUTRAL_TONE_MAPPING",[Rl]:"CUSTOM_TONE_MAPPING"};function Of(i,e,t,r,a){const n=new ar(e,t,{type:i,depthBuffer:r,stencilBuffer:a,depthTexture:r?new xi(e,t):void 0}),s=new ar(e,t,{type:Mr,depthBuffer:!1,stencilBuffer:!1}),o=new Pt;o.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new pt([0,2,0,0,2,0],2));const c=new nu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Gt(o,c),u=new Xs(-1,1,1,-1,0,1);let f=null,h=null,p=!1,_,x=null,m=[],d=!1;this.setSize=function(S,A){n.setSize(S,A),s.setSize(S,A);for(let b=0;b<m.length;b++){const R=m[b];R.setSize&&R.setSize(S,A)}},this.setEffects=function(S){m=S,d=m.length>0&&m[0].isRenderPass===!0;const A=n.width,b=n.height;for(let R=0;R<m.length;R++){const T=m[R];T.setSize&&T.setSize(A,b)}},this.begin=function(S,A){if(p||S.toneMapping===ir&&m.length===0)return!1;if(x=A,A!==null){const b=A.width,R=A.height;(n.width!==b||n.height!==R)&&this.setSize(b,R)}return d===!1&&S.setRenderTarget(n),_=S.toneMapping,S.toneMapping=ir,!0},this.hasRenderPass=function(){return d},this.end=function(S,A){S.toneMapping=_,p=!0;let b=n,R=s;for(let T=0;T<m.length;T++){const C=m[T];if(C.enabled!==!1&&(C.render(S,R,b,A),C.needsSwap!==!1)){const v=b;b=R,R=v}}if(f!==S.outputColorSpace||h!==S.toneMapping){f=S.outputColorSpace,h=S.toneMapping,c.defines={},He.getTransfer(f)===Ye&&(c.defines.SRGB_TRANSFER="");const T=Ff[h];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(x),S.render(l,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){n.depthTexture&&n.depthTexture.dispose(),n.dispose(),s.dispose(),o.dispose(),c.dispose()}}const pc=new bt,ws=new xi(1,1),fc=new Gl,mc=new Uh,gc=new ec,sl=[],ol=[],ll=new Float32Array(16),cl=new Float32Array(9),hl=new Float32Array(4);function bi(i,e,t){const r=i[0];if(r<=0||r>0)return i;const a=e*t;let n=sl[a];if(n===void 0&&(n=new Float32Array(a),sl[a]=n),e!==0){r.toArray(n,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(n,o)}return n}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function qa(i,e){let t=ol[e];t===void 0&&(t=new Int32Array(e),ol[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function Bf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function Hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function kf(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,r))return;hl.set(r),i.uniformMatrix2fv(this.addr,!1,hl),gt(t,r)}}function Gf(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,r))return;cl.set(r),i.uniformMatrix3fv(this.addr,!1,cl),gt(t,r)}}function Wf(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,r))return;ll.set(r),i.uniformMatrix4fv(this.addr,!1,ll),gt(t,r)}}function Xf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function Yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function Kf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function Zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function $f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Qf(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a);let n;this.type===i.SAMPLER_2D_SHADOW?(ws.compareFunction=t.isReversedDepthBuffer()?Bs:Os,n=ws):n=pc,t.setTexture2D(e||n,a)}function em(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||mc,a)}function tm(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||gc,a)}function rm(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||fc,a)}function im(i){switch(i){case 5126:return Bf;case 35664:return Vf;case 35665:return zf;case 35666:return Hf;case 35674:return kf;case 35675:return Gf;case 35676:return Wf;case 5124:case 35670:return Xf;case 35667:case 35671:return jf;case 35668:case 35672:return qf;case 35669:case 35673:return Yf;case 5125:return Kf;case 36294:return Jf;case 36295:return Zf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Qf;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return rm}}function am(i,e){i.uniform1fv(this.addr,e)}function nm(i,e){const t=bi(e,this.size,2);i.uniform2fv(this.addr,t)}function sm(i,e){const t=bi(e,this.size,3);i.uniform3fv(this.addr,t)}function om(i,e){const t=bi(e,this.size,4);i.uniform4fv(this.addr,t)}function lm(i,e){const t=bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cm(i,e){const t=bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hm(i,e){const t=bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function um(i,e){i.uniform1iv(this.addr,e)}function dm(i,e){i.uniform2iv(this.addr,e)}function pm(i,e){i.uniform3iv(this.addr,e)}function fm(i,e){i.uniform4iv(this.addr,e)}function mm(i,e){i.uniform1uiv(this.addr,e)}function gm(i,e){i.uniform2uiv(this.addr,e)}function _m(i,e){i.uniform3uiv(this.addr,e)}function vm(i,e){i.uniform4uiv(this.addr,e)}function Mm(i,e,t){const r=this.cache,a=e.length,n=qa(t,a);mt(r,n)||(i.uniform1iv(this.addr,n),gt(r,n));let s;this.type===i.SAMPLER_2D_SHADOW?s=ws:s=pc;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,n[o])}function xm(i,e,t){const r=this.cache,a=e.length,n=qa(t,a);mt(r,n)||(i.uniform1iv(this.addr,n),gt(r,n));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||mc,n[s])}function Sm(i,e,t){const r=this.cache,a=e.length,n=qa(t,a);mt(r,n)||(i.uniform1iv(this.addr,n),gt(r,n));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||gc,n[s])}function ym(i,e,t){const r=this.cache,a=e.length,n=qa(t,a);mt(r,n)||(i.uniform1iv(this.addr,n),gt(r,n));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||fc,n[s])}function Tm(i){switch(i){case 5126:return am;case 35664:return nm;case 35665:return sm;case 35666:return om;case 35674:return lm;case 35675:return cm;case 35676:return hm;case 5124:case 35670:return um;case 35667:case 35671:return dm;case 35668:case 35672:return pm;case 35669:case 35673:return fm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return ym}}class bm{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=im(t.type)}}class Em{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tm(t.type)}}class Am{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let n=0,s=a.length;n!==s;++n){const o=a[n];o.setValue(e,t[o.id],r)}}}const Un=/(\w+)(\])?(\[|\.)?/g;function ul(i,e){i.seq.push(e),i.map[e.id]=e}function wm(i,e,t){const r=i.name,a=r.length;for(Un.lastIndex=0;;){const n=Un.exec(r),s=Un.lastIndex;let o=n[1];const c=n[2]==="]",l=n[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===a){ul(t,l===void 0?new bm(o,i,e):new Em(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Am(o),ul(t,u)),t=u}}}class Da{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<r;++s){const o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);wm(o,c,this)}const a=[],n=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):n.push(s);a.length>0&&(this.seq=a.concat(n))}setValue(e,t,r,a){const n=this.map[t];n!==void 0&&n.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let n=0,s=t.length;n!==s;++n){const o=t[n],c=r[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,n=e.length;a!==n;++a){const s=e[a];s.id in t&&r.push(s)}return r}}function dl(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const Rm=37297;let Cm=0;function Pm(i,e){const t=i.split(`
`),r=[],a=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let s=a;s<n;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}const pl=new Ue;function Dm(i){He._getMatrix(pl,He.workingColorSpace,i);const e=`mat3( ${pl.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(i)){case Fa:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fl(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const n=/ERROR: 0:(\d+)/.exec(a);if(n){const s=parseInt(n[1]);return t.toUpperCase()+`

`+a+`

`+Pm(i.getShaderSource(e),s)}else return a}function Um(i,e){const t=Dm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Im={[bl]:"Linear",[El]:"Reinhard",[Al]:"Cineon",[wl]:"ACESFilmic",[Cl]:"AgX",[Pl]:"Neutral",[Rl]:"Custom"};function Nm(i,e){const t=Im[e];return t===void 0?(Me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ea=new O;function Lm(){He.getLuminanceCoefficients(Ea);const i=Ea.x.toFixed(4),e=Ea.y.toFixed(4),t=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function Om(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Bm(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const n=i.getActiveAttrib(e,a),s=n.name;let o=1;n.type===i.FLOAT_MAT2&&(o=2),n.type===i.FLOAT_MAT3&&(o=3),n.type===i.FLOAT_MAT4&&(o=4),t[s]={type:n.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Oi(i){return i!==""}function ml(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rs(i){return i.replace(Vm,Hm)}const zm=new Map;function Hm(i,e){let t=Ie[e];if(t===void 0){const r=zm.get(e);if(r!==void 0)t=Ie[r],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Rs(t)}const km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(i){return i.replace(km,Gm)}function Gm(i,e,t,r){let a="";for(let n=parseInt(e);n<parseInt(t);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function vl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Wm={[Aa]:"SHADOWMAP_TYPE_PCF",[Fi]:"SHADOWMAP_TYPE_VSM"};function Xm(i){return Wm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jm={[qr]:"ENVMAP_TYPE_CUBE",[vi]:"ENVMAP_TYPE_CUBE",[ka]:"ENVMAP_TYPE_CUBE_UV"};function qm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":jm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ym={[vi]:"ENVMAP_MODE_REFRACTION"};function Km(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ym[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jm={[Tl]:"ENVMAP_BLENDING_MULTIPLY",[qc]:"ENVMAP_BLENDING_MIX",[Yc]:"ENVMAP_BLENDING_ADD"};function Zm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Jm[i.combine]||"ENVMAP_BLENDING_NONE"}function $m(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function Qm(i,e,t,r){const a=i.getContext(),n=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Xm(t),l=qm(t),u=Km(t),f=Zm(t),h=$m(t),p=Fm(t),_=Om(n),x=a.createProgram();let m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Oi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Oi).join(`
`),d.length>0&&(d+=`
`)):(m=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),d=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Ie.tonemapping_pars_fragment:"",t.toneMapping!==ir?Nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Um("linearToOutputTexel",t.outputColorSpace),Lm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),s=Rs(s),s=ml(s,t),s=gl(s,t),o=Rs(o),o=ml(o,t),o=gl(o,t),s=_l(s),o=_l(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=S+m+s,b=S+d+o,R=dl(a,a.VERTEX_SHADER,A),T=dl(a,a.FRAGMENT_SHADER,b);a.attachShader(x,R),a.attachShader(x,T),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function C(w){if(i.debug.checkShaderErrors){const I=a.getProgramInfoLog(x)||"",X=a.getShaderInfoLog(R)||"",W=a.getShaderInfoLog(T)||"",F=I.trim(),H=X.trim(),G=W.trim();let $=!0,ee=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,x,R,T);else{const ie=fl(a,R,"vertex"),ve=fl(a,T,"fragment");be("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+ie+`
`+ve)}else F!==""?Me("WebGLProgram: Program Info Log:",F):(H===""||G==="")&&(ee=!1);ee&&(w.diagnostics={runnable:$,programLog:F,vertexShader:{log:H,prefix:m},fragmentShader:{log:G,prefix:d}})}a.deleteShader(R),a.deleteShader(T),v=new Da(a,x),E=Bm(a,x)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(x,Rm)),L},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}let eg=0;class tg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),n=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new rg(e),t.set(e,r)),r}}class rg{constructor(e){this.id=eg++,this.code=e,this.usedTimes=0}}function ig(i){return i===Yr||i===Ua||i===Ia}function ag(i,e,t,r,a,n){const s=new Hs,o=new tg,c=new Set,l=[],u=new Map,f=r.logarithmicDepthBuffer;let h=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,E,L,w,I,X){const W=w.fog,F=I.geometry,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,$=e.get(v.envMap||H,G),ee=$&&$.mapping===ka?$.image.height:null,ie=p[v.type];v.precision!==null&&(h=r.getMaxPrecision(v.precision),h!==v.precision&&Me("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ve=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Re=ve!==void 0?ve.length:0;let Ge=0;F.morphAttributes.position!==void 0&&(Ge=1),F.morphAttributes.normal!==void 0&&(Ge=2),F.morphAttributes.color!==void 0&&(Ge=3);let Je,De,Y,oe;if(ie){const Ae=tr[ie];Je=Ae.vertexShader,De=Ae.fragmentShader}else Je=v.vertexShader,De=v.fragmentShader,o.update(v),Y=o.getVertexShaderID(v),oe=o.getFragmentShaderID(v);const ae=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Pe=I.isInstancedMesh===!0,fe=I.isBatchedMesh===!0,We=!!v.map,je=!!v.matcap,Fe=!!$,Mt=!!v.aoMap,_t=!!v.lightMap,Et=!!v.bumpMap,nt=!!v.normalMap,Dt=!!v.displacementMap,D=!!v.emissiveMap,ft=!!v.metalnessMap,Be=!!v.roughnessMap,et=v.anisotropy>0,le=v.clearcoat>0,ot=v.dispersion>0,y=v.iridescence>0,g=v.sheen>0,B=v.transmission>0,q=et&&!!v.anisotropyMap,K=le&&!!v.clearcoatMap,ne=le&&!!v.clearcoatNormalMap,se=le&&!!v.clearcoatRoughnessMap,U=y&&!!v.iridescenceMap,re=y&&!!v.iridescenceThicknessMap,ce=g&&!!v.sheenColorMap,pe=g&&!!v.sheenRoughnessMap,J=!!v.specularMap,ye=!!v.specularColorMap,Ce=!!v.specularIntensityMap,ze=B&&!!v.transmissionMap,qe=B&&!!v.thicknessMap,P=!!v.gradientMap,j=!!v.alphaMap,Q=v.alphaTest>0,xe=!!v.alphaHash,he=!!v.extensions;let Z=ir;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Z=i.toneMapping);const Se={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:Je,fragmentShader:De,defines:v.defines,customVertexShaderID:Y,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:fe,batchingColor:fe&&I._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&I.instanceColor!==null,instancingMorph:Pe&&I.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:We,matcap:je,envMap:Fe,envMapMode:Fe&&$.mapping,envMapCubeUVHeight:ee,aoMap:Mt,lightMap:_t,bumpMap:Et,normalMap:nt,displacementMap:Dt,emissiveMap:D,normalMapObjectSpace:nt&&v.normalMapType===Qc,normalMapTangentSpace:nt&&v.normalMapType===ys,packedNormalMap:nt&&v.normalMapType===ys&&ig(v.normalMap.format),metalnessMap:ft,roughnessMap:Be,anisotropy:et,anisotropyMap:q,clearcoat:le,clearcoatMap:K,clearcoatNormalMap:ne,clearcoatRoughnessMap:se,dispersion:ot,iridescence:y,iridescenceMap:U,iridescenceThicknessMap:re,sheen:g,sheenColorMap:ce,sheenRoughnessMap:pe,specularMap:J,specularColorMap:ye,specularIntensityMap:Ce,transmission:B,transmissionMap:ze,thicknessMap:qe,gradientMap:P,opaque:v.transparent===!1&&v.blending===mi&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:Q,alphaHash:xe,combine:v.combine,mapUv:We&&_(v.map.channel),aoMapUv:Mt&&_(v.aoMap.channel),lightMapUv:_t&&_(v.lightMap.channel),bumpMapUv:Et&&_(v.bumpMap.channel),normalMapUv:nt&&_(v.normalMap.channel),displacementMapUv:Dt&&_(v.displacementMap.channel),emissiveMapUv:D&&_(v.emissiveMap.channel),metalnessMapUv:ft&&_(v.metalnessMap.channel),roughnessMapUv:Be&&_(v.roughnessMap.channel),anisotropyMapUv:q&&_(v.anisotropyMap.channel),clearcoatMapUv:K&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:U&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(v.sheenRoughnessMap.channel),specularMapUv:J&&_(v.specularMap.channel),specularColorMapUv:ye&&_(v.specularColorMap.channel),specularIntensityMapUv:Ce&&_(v.specularIntensityMap.channel),transmissionMapUv:ze&&_(v.transmissionMap.channel),thicknessMapUv:qe&&_(v.thicknessMap.channel),alphaMapUv:j&&_(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(nt||et),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(We||j),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&nt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Z,decodeVideoTexture:We&&v.map.isVideoTexture===!0&&He.getTransfer(v.map.colorSpace)===Ye,decodeVideoTextureEmissive:D&&v.emissiveMap.isVideoTexture===!0&&He.getTransfer(v.emissiveMap.colorSpace)===Ye,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===fr,flipSided:v.side===Ct,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:he&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&v.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)E.push(L),E.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(d(E,v),S(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function d(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function S(v,E){s.disableAll(),E.instancing&&s.enable(0),E.instancingColor&&s.enable(1),E.instancingMorph&&s.enable(2),E.matcap&&s.enable(3),E.envMap&&s.enable(4),E.normalMapObjectSpace&&s.enable(5),E.normalMapTangentSpace&&s.enable(6),E.clearcoat&&s.enable(7),E.iridescence&&s.enable(8),E.alphaTest&&s.enable(9),E.vertexColors&&s.enable(10),E.vertexAlphas&&s.enable(11),E.vertexUv1s&&s.enable(12),E.vertexUv2s&&s.enable(13),E.vertexUv3s&&s.enable(14),E.vertexTangents&&s.enable(15),E.anisotropy&&s.enable(16),E.alphaHash&&s.enable(17),E.batching&&s.enable(18),E.dispersion&&s.enable(19),E.batchingColor&&s.enable(20),E.gradientMap&&s.enable(21),E.packedNormalMap&&s.enable(22),E.vertexNormals&&s.enable(23),v.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.reversedDepthBuffer&&s.enable(4),E.skinning&&s.enable(5),E.morphTargets&&s.enable(6),E.morphNormals&&s.enable(7),E.morphColors&&s.enable(8),E.premultipliedAlpha&&s.enable(9),E.shadowMapEnabled&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),E.decodeVideoTextureEmissive&&s.enable(20),E.alphaToCoverage&&s.enable(21),E.numLightProbeGrids>0&&s.enable(22),v.push(s.mask)}function A(v){const E=p[v.type];let L;if(E){const w=tr[E];L=ru.clone(w.uniforms)}else L=v.uniforms;return L}function b(v,E){let L=u.get(E);return L!==void 0?++L.usedTimes:(L=new Qm(i,E,v,a),l.push(L),u.set(E,L)),L}function R(v){if(--v.usedTimes===0){const E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:A,acquireProgram:b,releaseProgram:R,releaseShaderCache:T,programs:l,dispose:C}}function ng(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function r(s){i.delete(s)}function a(s,o,c){i.get(s)[o]=c}function n(){i=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:n}}function sg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ml(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xl(){const i=[];let e=0;const t=[],r=[],a=[];function n(){e=0,t.length=0,r.length=0,a.length=0}function s(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,x,m,d){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:p,material:_,materialVariant:s(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:d},i[e]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=_,S.materialVariant=s(h),S.groupOrder=x,S.renderOrder=h.renderOrder,S.z=m,S.group=d),e++,S}function c(h,p,_,x,m,d){const S=o(h,p,_,x,m,d);_.transmission>0?r.push(S):_.transparent===!0?a.push(S):t.push(S)}function l(h,p,_,x,m,d){const S=o(h,p,_,x,m,d);_.transmission>0?r.unshift(S):_.transparent===!0?a.unshift(S):t.unshift(S)}function u(h,p){t.length>1&&t.sort(h||sg),r.length>1&&r.sort(p||Ml),a.length>1&&a.sort(p||Ml)}function f(){for(let h=e,p=i.length;h<p;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:r,transparent:a,init:n,push:c,unshift:l,finish:f,sort:u}}function og(){let i=new WeakMap;function e(r,a){const n=i.get(r);let s;return n===void 0?(s=new xl,i.set(r,[s])):a>=n.length?(s=new xl,n.push(s)):s=n[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function lg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Oe};break;case"SpotLight":t={position:new O,direction:new O,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function cg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let hg=0;function ug(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dg(i){const e=new lg,t=cg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new O);const a=new O,n=new ke,s=new ke;function o(l){let u=0,f=0,h=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,S=0,A=0,b=0,R=0,T=0,C=0;l.sort(ug);for(let E=0,L=l.length;E<L;E++){const w=l[E],I=w.color,X=w.intensity,W=w.distance;let F=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Yr?F=w.shadow.map.texture:F=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=I.r*X,f+=I.g*X,h+=I.b*X;else if(w.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(w.sh.coefficients[H],X);C++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const G=w.shadow,$=t.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,r.directionalShadow[p]=$,r.directionalShadowMap[p]=F,r.directionalShadowMatrix[p]=w.shadow.matrix,S++}r.directional[p]=H,p++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(I).multiplyScalar(X),H.distance=W,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,r.spot[x]=H;const G=w.shadow;if(w.map&&(r.spotLightMap[R]=w.map,R++,G.updateMatrices(w),w.castShadow&&T++),r.spotLightMatrix[x]=G.matrix,w.castShadow){const $=t.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,r.spotShadow[x]=$,r.spotShadowMap[x]=F,b++}x++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(I).multiplyScalar(X),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),r.rectArea[m]=H,m++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const G=w.shadow,$=t.get(w);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,r.pointShadow[_]=$,r.pointShadowMap[_]=F,r.pointShadowMatrix[_]=w.shadow.matrix,A++}r.point[_]=H,_++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(X),H.groundColor.copy(w.groundColor).multiplyScalar(X),r.hemi[d]=H,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=h;const v=r.hash;(v.directionalLength!==p||v.pointLength!==_||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==d||v.numDirectionalShadows!==S||v.numPointShadows!==A||v.numSpotShadows!==b||v.numSpotMaps!==R||v.numLightProbes!==C)&&(r.directional.length=p,r.spot.length=x,r.rectArea.length=m,r.point.length=_,r.hemi.length=d,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=b+R-T,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=C,v.directionalLength=p,v.pointLength=_,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=d,v.numDirectionalShadows=S,v.numPointShadows=A,v.numSpotShadows=b,v.numSpotMaps=R,v.numLightProbes=C,r.version=hg++)}function c(l,u){let f=0,h=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,S=l.length;d<S;d++){const A=l[d];if(A.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),f++}else if(A.isSpotLight){const b=r.spot[p];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const b=r.rectArea[_];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),s.identity(),n.copy(A.matrixWorld),n.premultiply(m),s.extractRotation(n),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),_++}else if(A.isPointLight){const b=r.point[h];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){const b=r.hemi[x];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:r}}function Sl(i){const e=new dg(i),t=[],r=[],a=[];function n(h){f.camera=h,t.length=0,r.length=0,a.length=0}function s(h){t.push(h)}function o(h){r.push(h)}function c(h){a.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:f,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function pg(i){let e=new WeakMap;function t(a,n=0){const s=e.get(a);let o;return s===void 0?(o=new Sl(i),e.set(a,[o])):n>=s.length?(o=new Sl(i),s.push(o)):o=s[n],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gg=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],_g=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],yl=new ke,Li=new O,In=new O;function vg(i,e,t){let r=new Gs;const a=new Xe,n=new Xe,s=new at,o=new ou,c=new lu,l={},u=t.maxTextureSize,f={[Ur]:Ct,[Ct]:Ur,[fr]:fr},h=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:fg,fragmentShader:mg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Pt;_.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Gt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let d=this.type;this.render=function(T,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Rc&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Aa);const E=i.getRenderTarget(),L=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),I=i.state;I.setBlending(_r),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const X=d!==this.type;X&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(F=>F.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,F=T.length;W<F;W++){const H=T[W],G=H.shadow;if(G===void 0){Me("WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const $=G.getFrameExtents();a.multiply($),n.copy(G.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(n.x=Math.floor(u/$.x),a.x=n.x*$.x,G.mapSize.x=n.x),a.y>u&&(n.y=Math.floor(u/$.y),a.y=n.y*$.y,G.mapSize.y=n.y));const ee=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ee,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Fi){if(H.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ar(a.x,a.y,{format:Yr,type:Mr,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),G.map.texture.name=H.name+".shadowMap",G.map.depthTexture=new xi(a.x,a.y,zt),G.map.depthTexture.name=H.name+".shadowMapDepth",G.map.depthTexture.format=xr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=xt,G.map.depthTexture.magFilter=xt}else H.isPointLight?(G.map=new dc(a.x),G.map.depthTexture=new eu(a.x,nr)):(G.map=new ar(a.x,a.y),G.map.depthTexture=new xi(a.x,a.y,nr)),G.map.depthTexture.name=H.name+".shadowMap",G.map.depthTexture.format=xr,this.type===Aa?(G.map.depthTexture.compareFunction=ee?Bs:Os,G.map.depthTexture.minFilter=Tt,G.map.depthTexture.magFilter=Tt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=xt,G.map.depthTexture.magFilter=xt);G.camera.updateProjectionMatrix()}const ie=G.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<ie;ve++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,ve),i.clear();else{ve===0&&(i.setRenderTarget(G.map),i.clear());const Re=G.getViewport(ve);s.set(n.x*Re.x,n.y*Re.y,n.x*Re.z,n.y*Re.w),I.viewport(s)}if(H.isPointLight){const Re=G.camera,Ge=G.matrix,Je=H.distance||Re.far;Je!==Re.far&&(Re.far=Je,Re.updateProjectionMatrix()),Li.setFromMatrixPosition(H.matrixWorld),Re.position.copy(Li),In.copy(Re.position),In.add(gg[ve]),Re.up.copy(_g[ve]),Re.lookAt(In),Re.updateMatrixWorld(),Ge.makeTranslation(-Li.x,-Li.y,-Li.z),yl.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),G._frustum.setFromProjectionMatrix(yl,Re.coordinateSystem,Re.reversedDepth)}else G.updateMatrices(H);r=G.getFrustum(),b(C,v,G.camera,H,this.type)}G.isPointLightShadow!==!0&&this.type===Fi&&S(G,v),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,L,w)};function S(T,C){const v=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ar(a.x,a.y,{format:Yr,type:Mr})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,v,h,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,v,p,x,null)}function A(T,C,v,E){let L=null;const w=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)L=w;else if(L=v.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=L.uuid,X=C.uuid;let W=l[I];W===void 0&&(W={},l[I]=W);let F=W[X];F===void 0&&(F=L.clone(),W[X]=F,C.addEventListener("dispose",R)),L=F}if(L.visible=C.visible,L.wireframe=C.wireframe,E===Fi?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:f[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const I=i.properties.get(L);I.light=v}return L}function b(T,C,v,E,L){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Fi)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const I=e.update(T),X=T.material;if(Array.isArray(X)){const W=I.groups;for(let F=0,H=W.length;F<H;F++){const G=W[F],$=X[G.materialIndex];if($&&$.visible){const ee=A(T,$,E,L);T.onBeforeShadow(i,T,C,v,I,ee,G),i.renderBufferDirect(v,null,I,ee,T,G),T.onAfterShadow(i,T,C,v,I,ee,G)}}}else if(X.visible){const W=A(T,X,E,L);T.onBeforeShadow(i,T,C,v,I,W,null),i.renderBufferDirect(v,null,I,W,T,null),T.onAfterShadow(i,T,C,v,I,W,null)}}const w=T.children;for(let I=0,X=w.length;I<X;I++)b(w[I],C,v,E,L)}function R(T){T.target.removeEventListener("dispose",R);for(const C in l){const v=l[C],E=T.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function Mg(i,e){function t(){let P=!1;const j=new at;let Q=null;const xe=new at(0,0,0,0);return{setMask:function(he){Q!==he&&!P&&(i.colorMask(he,he,he,he),Q=he)},setLocked:function(he){P=he},setClear:function(he,Z,Se,Ae,At){At===!0&&(he*=Ae,Z*=Ae,Se*=Ae),j.set(he,Z,Se,Ae),xe.equals(j)===!1&&(i.clearColor(he,Z,Se,Ae),xe.copy(j))},reset:function(){P=!1,Q=null,xe.set(-1,0,0,0)}}}function r(){let P=!1,j=!1,Q=null,xe=null,he=null;return{setReversed:function(Z){if(j!==Z){const Se=e.get("EXT_clip_control");Z?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),j=Z;const Ae=he;he=null,this.setClear(Ae)}},getReversed:function(){return j},setTest:function(Z){Z?ae(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(Z){Q!==Z&&!P&&(i.depthMask(Z),Q=Z)},setFunc:function(Z){if(j&&(Z=hh[Z]),xe!==Z){switch(Z){case Fn:i.depthFunc(i.NEVER);break;case On:i.depthFunc(i.ALWAYS);break;case Bn:i.depthFunc(i.LESS);break;case _i:i.depthFunc(i.LEQUAL);break;case Vn:i.depthFunc(i.EQUAL);break;case zn:i.depthFunc(i.GEQUAL);break;case Hn:i.depthFunc(i.GREATER);break;case kn:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Z}},setLocked:function(Z){P=Z},setClear:function(Z){he!==Z&&(he=Z,j&&(Z=1-Z),i.clearDepth(Z))},reset:function(){P=!1,Q=null,xe=null,he=null,j=!1}}}function a(){let P=!1,j=null,Q=null,xe=null,he=null,Z=null,Se=null,Ae=null,At=null;return{setTest:function(it){P||(it?ae(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(it){j!==it&&!P&&(i.stencilMask(it),j=it)},setFunc:function(it,or,Zt){(Q!==it||xe!==or||he!==Zt)&&(i.stencilFunc(it,or,Zt),Q=it,xe=or,he=Zt)},setOp:function(it,or,Zt){(Z!==it||Se!==or||Ae!==Zt)&&(i.stencilOp(it,or,Zt),Z=it,Se=or,Ae=Zt)},setLocked:function(it){P=it},setClear:function(it){At!==it&&(i.clearStencil(it),At=it)},reset:function(){P=!1,j=null,Q=null,xe=null,he=null,Z=null,Se=null,Ae=null,At=null}}}const n=new t,s=new r,o=new a,c=new WeakMap,l=new WeakMap;let u={},f={},h={},p=new WeakMap,_=[],x=null,m=!1,d=null,S=null,A=null,b=null,R=null,T=null,C=null,v=new Oe(0,0,0),E=0,L=!1,w=null,I=null,X=null,W=null,F=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ee)[1]),G=$>=1):ee.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),G=$>=2);let ie=null,ve={};const Re=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),Je=new at().fromArray(Re),De=new at().fromArray(Ge);function Y(P,j,Q,xe){const he=new Uint8Array(4),Z=i.createTexture();i.bindTexture(P,Z),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<Q;Se++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(j+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return Z}const oe={};oe[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),s.setFunc(_i),Et(!1),nt(ro),ae(i.CULL_FACE),Mt(_r);function ae(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Ee(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function Pe(P,j){return h[P]!==j?(i.bindFramebuffer(P,j),h[P]=j,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=j),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=j),!0):!1}function fe(P,j){let Q=_,xe=!1;if(P){Q=p.get(j),Q===void 0&&(Q=[],p.set(j,Q));const he=P.textures;if(Q.length!==he.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Se=he.length;Z<Se;Z++)Q[Z]=i.COLOR_ATTACHMENT0+Z;Q.length=he.length,xe=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,xe=!0);xe&&i.drawBuffers(Q)}function We(P){return x!==P?(i.useProgram(P),x=P,!0):!1}const je={[Gr]:i.FUNC_ADD,[Pc]:i.FUNC_SUBTRACT,[Dc]:i.FUNC_REVERSE_SUBTRACT};je[Uc]=i.MIN,je[Ic]=i.MAX;const Fe={[Nc]:i.ZERO,[Lc]:i.ONE,[Fc]:i.SRC_COLOR,[Nn]:i.SRC_ALPHA,[kc]:i.SRC_ALPHA_SATURATE,[zc]:i.DST_COLOR,[Bc]:i.DST_ALPHA,[Oc]:i.ONE_MINUS_SRC_COLOR,[Ln]:i.ONE_MINUS_SRC_ALPHA,[Hc]:i.ONE_MINUS_DST_COLOR,[Vc]:i.ONE_MINUS_DST_ALPHA,[Gc]:i.CONSTANT_COLOR,[Wc]:i.ONE_MINUS_CONSTANT_COLOR,[Xc]:i.CONSTANT_ALPHA,[jc]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(P,j,Q,xe,he,Z,Se,Ae,At,it){if(P===_r){m===!0&&(Ee(i.BLEND),m=!1);return}if(m===!1&&(ae(i.BLEND),m=!0),P!==Cc){if(P!==d||it!==L){if((S!==Gr||R!==Gr)&&(i.blendEquation(i.FUNC_ADD),S=Gr,R=Gr),it)switch(P){case mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case io:i.blendFunc(i.ONE,i.ONE);break;case ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case no:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:be("WebGLState: Invalid blending: ",P);break}else switch(P){case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case io:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ao:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case no:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",P);break}A=null,b=null,T=null,C=null,v.set(0,0,0),E=0,d=P,L=it}return}he=he||j,Z=Z||Q,Se=Se||xe,(j!==S||he!==R)&&(i.blendEquationSeparate(je[j],je[he]),S=j,R=he),(Q!==A||xe!==b||Z!==T||Se!==C)&&(i.blendFuncSeparate(Fe[Q],Fe[xe],Fe[Z],Fe[Se]),A=Q,b=xe,T=Z,C=Se),(Ae.equals(v)===!1||At!==E)&&(i.blendColor(Ae.r,Ae.g,Ae.b,At),v.copy(Ae),E=At),d=P,L=!1}function _t(P,j){P.side===fr?Ee(i.CULL_FACE):ae(i.CULL_FACE);let Q=P.side===Ct;j&&(Q=!Q),Et(Q),P.blending===mi&&P.transparent===!1?Mt(_r):Mt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),n.setMask(P.colorWrite);const xe=P.stencilWrite;o.setTest(xe),xe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),D(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(P){w!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),w=P)}function nt(P){P!==Ac?(ae(i.CULL_FACE),P!==I&&(P===ro?i.cullFace(i.BACK):P===wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),I=P}function Dt(P){P!==X&&(G&&i.lineWidth(P),X=P)}function D(P,j,Q){P?(ae(i.POLYGON_OFFSET_FILL),(W!==j||F!==Q)&&(W=j,F=Q,s.getReversed()&&(j=-j),i.polygonOffset(j,Q))):Ee(i.POLYGON_OFFSET_FILL)}function ft(P){P?ae(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function Be(P){P===void 0&&(P=i.TEXTURE0+H-1),ie!==P&&(i.activeTexture(P),ie=P)}function et(P,j,Q){Q===void 0&&(ie===null?Q=i.TEXTURE0+H-1:Q=ie);let xe=ve[Q];xe===void 0&&(xe={type:void 0,texture:void 0},ve[Q]=xe),(xe.type!==P||xe.texture!==j)&&(ie!==Q&&(i.activeTexture(Q),ie=Q),i.bindTexture(P,j||oe[P]),xe.type=P,xe.texture=j)}function le(){const P=ve[ie];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ot(){try{i.compressedTexImage2D(...arguments)}catch(P){be("WebGLState:",P)}}function y(){try{i.compressedTexImage3D(...arguments)}catch(P){be("WebGLState:",P)}}function g(){try{i.texSubImage2D(...arguments)}catch(P){be("WebGLState:",P)}}function B(){try{i.texSubImage3D(...arguments)}catch(P){be("WebGLState:",P)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(P){be("WebGLState:",P)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(P){be("WebGLState:",P)}}function ne(){try{i.texStorage2D(...arguments)}catch(P){be("WebGLState:",P)}}function se(){try{i.texStorage3D(...arguments)}catch(P){be("WebGLState:",P)}}function U(){try{i.texImage2D(...arguments)}catch(P){be("WebGLState:",P)}}function re(){try{i.texImage3D(...arguments)}catch(P){be("WebGLState:",P)}}function ce(P){return f[P]!==void 0?f[P]:i.getParameter(P)}function pe(P,j){f[P]!==j&&(i.pixelStorei(P,j),f[P]=j)}function J(P){Je.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Je.copy(P))}function ye(P){De.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),De.copy(P))}function Ce(P,j){let Q=l.get(j);Q===void 0&&(Q=new WeakMap,l.set(j,Q));let xe=Q.get(P);xe===void 0&&(xe=i.getUniformBlockIndex(j,P.name),Q.set(P,xe))}function ze(P,j){const Q=l.get(j).get(P);c.get(j)!==Q&&(i.uniformBlockBinding(j,Q,P.__bindingPointIndex),c.set(j,Q))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},ie=null,ve={},h={},p=new WeakMap,_=[],x=null,m=!1,d=null,S=null,A=null,b=null,R=null,T=null,C=null,v=new Oe(0,0,0),E=0,L=!1,w=null,I=null,X=null,W=null,F=null,Je.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:ae,disable:Ee,bindFramebuffer:Pe,drawBuffers:fe,useProgram:We,setBlending:Mt,setMaterial:_t,setFlipSided:Et,setCullFace:nt,setLineWidth:Dt,setPolygonOffset:D,setScissorTest:ft,activeTexture:Be,bindTexture:et,unbindTexture:le,compressedTexImage2D:ot,compressedTexImage3D:y,texImage2D:U,texImage3D:re,pixelStorei:pe,getParameter:ce,updateUBOMapping:Ce,uniformBlockBinding:ze,texStorage2D:ne,texStorage3D:se,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:J,viewport:ye,reset:qe}}function xg(i,e,t,r,a,n,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,u=new WeakMap,f=new Set;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(y,g){return _?new OffscreenCanvas(y,g):Gi("canvas")}function m(y,g,B){let q=1;const K=ot(y);if((K.width>B||K.height>B)&&(q=B/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const ne=Math.floor(q*K.width),se=Math.floor(q*K.height);h===void 0&&(h=x(ne,se));const U=g?x(ne,se):h;return U.width=ne,U.height=se,U.getContext("2d").drawImage(y,0,0,ne,se),Me("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ne+"x"+se+")."),U}else return"data"in y&&Me("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function d(y){return y.generateMipmaps}function S(y){i.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(y,g,B,q,K,ne=!1){if(y!==null){if(i[y]!==void 0)return i[y];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let se;q&&(se=e.get("EXT_texture_norm16"),se||Me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=g;if(g===i.RED&&(B===i.FLOAT&&(U=i.R32F),B===i.HALF_FLOAT&&(U=i.R16F),B===i.UNSIGNED_BYTE&&(U=i.R8),B===i.UNSIGNED_SHORT&&se&&(U=se.R16_EXT),B===i.SHORT&&se&&(U=se.R16_SNORM_EXT)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(U=i.R8UI),B===i.UNSIGNED_SHORT&&(U=i.R16UI),B===i.UNSIGNED_INT&&(U=i.R32UI),B===i.BYTE&&(U=i.R8I),B===i.SHORT&&(U=i.R16I),B===i.INT&&(U=i.R32I)),g===i.RG&&(B===i.FLOAT&&(U=i.RG32F),B===i.HALF_FLOAT&&(U=i.RG16F),B===i.UNSIGNED_BYTE&&(U=i.RG8),B===i.UNSIGNED_SHORT&&se&&(U=se.RG16_EXT),B===i.SHORT&&se&&(U=se.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(U=i.RG8UI),B===i.UNSIGNED_SHORT&&(U=i.RG16UI),B===i.UNSIGNED_INT&&(U=i.RG32UI),B===i.BYTE&&(U=i.RG8I),B===i.SHORT&&(U=i.RG16I),B===i.INT&&(U=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(U=i.RGB8UI),B===i.UNSIGNED_SHORT&&(U=i.RGB16UI),B===i.UNSIGNED_INT&&(U=i.RGB32UI),B===i.BYTE&&(U=i.RGB8I),B===i.SHORT&&(U=i.RGB16I),B===i.INT&&(U=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(U=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(U=i.RGBA16UI),B===i.UNSIGNED_INT&&(U=i.RGBA32UI),B===i.BYTE&&(U=i.RGBA8I),B===i.SHORT&&(U=i.RGBA16I),B===i.INT&&(U=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_SHORT&&se&&(U=se.RGB16_EXT),B===i.SHORT&&se&&(U=se.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(U=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(U=i.R11F_G11F_B10F)),g===i.RGBA){const re=ne?Fa:He.getTransfer(K);B===i.FLOAT&&(U=i.RGBA32F),B===i.HALF_FLOAT&&(U=i.RGBA16F),B===i.UNSIGNED_BYTE&&(U=re===Ye?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&se&&(U=se.RGBA16_EXT),B===i.SHORT&&se&&(U=se.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(U=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(U=i.RGB5_A1)}return(U===i.R16F||U===i.R32F||U===i.RG16F||U===i.RG32F||U===i.RGBA16F||U===i.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function R(y,g){let B;return y?g===null||g===nr||g===Hi?B=i.DEPTH24_STENCIL8:g===zt?B=i.DEPTH32F_STENCIL8:g===zi&&(B=i.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===nr||g===Hi?B=i.DEPTH_COMPONENT24:g===zt?B=i.DEPTH_COMPONENT32F:g===zi&&(B=i.DEPTH_COMPONENT16),B}function T(y,g){return d(y)===!0||y.isFramebufferTexture&&y.minFilter!==xt&&y.minFilter!==Tt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function C(y){const g=y.target;g.removeEventListener("dispose",C),E(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function v(y){const g=y.target;g.removeEventListener("dispose",v),w(g)}function E(y){const g=r.get(y);if(g.__webglInit===void 0)return;const B=y.source,q=p.get(B);if(q){const K=q[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&L(y),Object.keys(q).length===0&&p.delete(B)}r.remove(y)}function L(y){const g=r.get(y);i.deleteTexture(g.__webglTexture);const B=y.source,q=p.get(B);delete q[g.__cacheKey],s.memory.textures--}function w(y){const g=r.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),r.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let K=0;K<g.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(g.__webglFramebuffer[q][K]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=y.textures;for(let q=0,K=B.length;q<K;q++){const ne=r.get(B[q]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),s.memory.textures--),r.remove(B[q])}r.remove(y)}let I=0;function X(){I=0}function W(){return I}function F(y){I=y}function H(){const y=I;return y>=a.maxTextures&&Me("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+a.maxTextures),I+=1,y}function G(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function $(y,g){const B=r.get(y);if(y.isVideoTexture&&et(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&B.__version!==y.version){const q=y.image;if(q===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(B,y,g);return}}else y.isExternalTexture&&(B.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function ee(y,g){const B=r.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){Ee(B,y,g);return}else y.isExternalTexture&&(B.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function ie(y,g){const B=r.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){Ee(B,y,g);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function ve(y,g){const B=r.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&B.__version!==y.version){Pe(B,y,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}const Re={[Gn]:i.REPEAT,[mr]:i.CLAMP_TO_EDGE,[Wn]:i.MIRRORED_REPEAT},Ge={[xt]:i.NEAREST,[Jc]:i.NEAREST_MIPMAP_NEAREST,[Ji]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[$a]:i.LINEAR_MIPMAP_NEAREST,[Xr]:i.LINEAR_MIPMAP_LINEAR},Je={[eh]:i.NEVER,[nh]:i.ALWAYS,[th]:i.LESS,[Os]:i.LEQUAL,[rh]:i.EQUAL,[Bs]:i.GEQUAL,[ih]:i.GREATER,[ah]:i.NOTEQUAL};function De(y,g){if(g.type===zt&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Tt||g.magFilter===$a||g.magFilter===Ji||g.magFilter===Xr||g.minFilter===Tt||g.minFilter===$a||g.minFilter===Ji||g.minFilter===Xr)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,Re[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Re[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Re[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,Ge[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,Ge[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Je[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===xt||g.minFilter!==Ji&&g.minFilter!==Xr||g.type===zt&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||r.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),r.get(g).__currentAnisotropy=g.anisotropy}}}function Y(y,g){let B=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",C));const q=g.source;let K=p.get(q);K===void 0&&(K={},p.set(q,K));const ne=G(g);if(ne!==y.__cacheKey){K[ne]===void 0&&(K[ne]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,B=!0),K[ne].usedTimes++;const se=K[y.__cacheKey];se!==void 0&&(K[y.__cacheKey].usedTimes--,se.usedTimes===0&&L(g)),y.__cacheKey=ne,y.__webglTexture=K[ne].texture}return B}function oe(y,g,B){return Math.floor(Math.floor(y/B)/g)}function ae(y,g,B,q){const K=y.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,q,g.data);else{K.sort((ce,pe)=>ce.start-pe.start);let ne=0;for(let ce=1;ce<K.length;ce++){const pe=K[ne],J=K[ce],ye=pe.start+pe.count,Ce=oe(J.start,g.width,4),ze=oe(pe.start,g.width,4);J.start<=ye+1&&Ce===ze&&oe(J.start+J.count-1,g.width,4)===Ce?pe.count=Math.max(pe.count,J.start+J.count-pe.start):(++ne,K[ne]=J)}K.length=ne+1;const se=t.getParameter(i.UNPACK_ROW_LENGTH),U=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ce=0,pe=K.length;ce<pe;ce++){const J=K[ce],ye=Math.floor(J.start/4),Ce=Math.ceil(J.count/4),ze=ye%g.width,qe=Math.floor(ye/g.width),P=Ce;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,qe),t.texSubImage2D(i.TEXTURE_2D,0,ze,qe,P,1,B,q,g.data)}y.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,U),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function Ee(y,g,B){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);const K=Y(y,g),ne=g.source;t.bindTexture(q,y.__webglTexture,i.TEXTURE0+B);const se=r.get(ne);if(ne.version!==se.__version||K===!0){if(t.activeTexture(i.TEXTURE0+B),!(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)){const j=He.getPrimaries(He.workingColorSpace),Q=g.colorSpace===Pr?null:He.getPrimaries(g.colorSpace),xe=g.colorSpace===Pr||j===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let U=m(g.image,!1,a.maxTextureSize);U=le(g,U);const re=n.convert(g.format,g.colorSpace),ce=n.convert(g.type);let pe=b(g.internalFormat,re,ce,g.normalized,g.colorSpace,g.isVideoTexture);De(q,g);let J;const ye=g.mipmaps,Ce=g.isVideoTexture!==!0,ze=se.__version===void 0||K===!0,qe=ne.dataReady,P=T(g,U);if(g.isDepthTexture)pe=R(g.format===jr,g.type),ze&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,pe,U.width,U.height):t.texImage2D(i.TEXTURE_2D,0,pe,U.width,U.height,0,re,ce,null));else if(g.isDataTexture)if(ye.length>0){Ce&&ze&&t.texStorage2D(i.TEXTURE_2D,P,pe,ye[0].width,ye[0].height);for(let j=0,Q=ye.length;j<Q;j++)J=ye[j],Ce?qe&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,J.width,J.height,re,ce,J.data):t.texImage2D(i.TEXTURE_2D,j,pe,J.width,J.height,0,re,ce,J.data);g.generateMipmaps=!1}else Ce?(ze&&t.texStorage2D(i.TEXTURE_2D,P,pe,U.width,U.height),qe&&ae(g,U,re,ce)):t.texImage2D(i.TEXTURE_2D,0,pe,U.width,U.height,0,re,ce,U.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ce&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,P,pe,ye[0].width,ye[0].height,U.depth);for(let j=0,Q=ye.length;j<Q;j++)if(J=ye[j],g.format!==Ht)if(re!==null)if(Ce){if(qe)if(g.layerUpdates.size>0){const xe=Qo(J.width,J.height,g.format,g.type);for(const he of g.layerUpdates){const Z=J.data.subarray(he*xe/J.data.BYTES_PER_ELEMENT,(he+1)*xe/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,he,J.width,J.height,1,re,Z)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,J.width,J.height,U.depth,re,J.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,pe,J.width,J.height,U.depth,0,J.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,J.width,J.height,U.depth,re,ce,J.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,pe,J.width,J.height,U.depth,0,re,ce,J.data)}else{Ce&&ze&&t.texStorage2D(i.TEXTURE_2D,P,pe,ye[0].width,ye[0].height);for(let j=0,Q=ye.length;j<Q;j++)J=ye[j],g.format!==Ht?re!==null?Ce?qe&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,J.width,J.height,re,J.data):t.compressedTexImage2D(i.TEXTURE_2D,j,pe,J.width,J.height,0,J.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?qe&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,J.width,J.height,re,ce,J.data):t.texImage2D(i.TEXTURE_2D,j,pe,J.width,J.height,0,re,ce,J.data)}else if(g.isDataArrayTexture)if(Ce){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,P,pe,U.width,U.height,U.depth),qe)if(g.layerUpdates.size>0){const j=Qo(U.width,U.height,g.format,g.type);for(const Q of g.layerUpdates){const xe=U.data.subarray(Q*j/U.data.BYTES_PER_ELEMENT,(Q+1)*j/U.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,U.width,U.height,1,re,ce,xe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,re,ce,U.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,U.width,U.height,U.depth,0,re,ce,U.data);else if(g.isData3DTexture)Ce?(ze&&t.texStorage3D(i.TEXTURE_3D,P,pe,U.width,U.height,U.depth),qe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,re,ce,U.data)):t.texImage3D(i.TEXTURE_3D,0,pe,U.width,U.height,U.depth,0,re,ce,U.data);else if(g.isFramebufferTexture){if(ze)if(Ce)t.texStorage2D(i.TEXTURE_2D,P,pe,U.width,U.height);else{let j=U.width,Q=U.height;for(let xe=0;xe<P;xe++)t.texImage2D(i.TEXTURE_2D,xe,pe,j,Q,0,re,ce,null),j>>=1,Q>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),U.parentNode!==j){j.appendChild(U),f.add(g),j.onpaint=Se=>{const Ae=Se.changedElements;for(const At of f)Ae.includes(At.image)&&(At.needsUpdate=!0)},j.requestPaint();return}const Q=0,xe=i.RGBA,he=i.RGBA,Z=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Q,xe,he,Z,U),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(Ce&&ze){const j=ot(ye[0]);t.texStorage2D(i.TEXTURE_2D,P,pe,j.width,j.height)}for(let j=0,Q=ye.length;j<Q;j++)J=ye[j],Ce?qe&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,re,ce,J):t.texImage2D(i.TEXTURE_2D,j,pe,re,ce,J);g.generateMipmaps=!1}else if(Ce){if(ze){const j=ot(U);t.texStorage2D(i.TEXTURE_2D,P,pe,j.width,j.height)}qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,ce,U)}else t.texImage2D(i.TEXTURE_2D,0,pe,re,ce,U);d(g)&&S(q),se.__version=ne.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Pe(y,g,B){if(g.image.length!==6)return;const q=Y(y,g),K=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+B);const ne=r.get(K);if(K.version!==ne.__version||q===!0){t.activeTexture(i.TEXTURE0+B);const se=He.getPrimaries(He.workingColorSpace),U=g.colorSpace===Pr?null:He.getPrimaries(g.colorSpace),re=g.colorSpace===Pr||se===U?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const ce=g.isCompressedTexture||g.image[0].isCompressedTexture,pe=g.image[0]&&g.image[0].isDataTexture,J=[];for(let Z=0;Z<6;Z++)!ce&&!pe?J[Z]=m(g.image[Z],!0,a.maxCubemapSize):J[Z]=pe?g.image[Z].image:g.image[Z],J[Z]=le(g,J[Z]);const ye=J[0],Ce=n.convert(g.format,g.colorSpace),ze=n.convert(g.type),qe=b(g.internalFormat,Ce,ze,g.normalized,g.colorSpace),P=g.isVideoTexture!==!0,j=ne.__version===void 0||q===!0,Q=K.dataReady;let xe=T(g,ye);De(i.TEXTURE_CUBE_MAP,g);let he;if(ce){P&&j&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,qe,ye.width,ye.height);for(let Z=0;Z<6;Z++){he=J[Z].mipmaps;for(let Se=0;Se<he.length;Se++){const Ae=he[Se];g.format!==Ht?Ce!==null?P?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,Ae.width,Ae.height,Ce,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,qe,Ae.width,Ae.height,0,Ae.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,Ae.width,Ae.height,Ce,ze,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,qe,Ae.width,Ae.height,0,Ce,ze,Ae.data)}}}else{if(he=g.mipmaps,P&&j){he.length>0&&xe++;const Z=ot(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,qe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(pe){P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,J[Z].width,J[Z].height,Ce,ze,J[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,J[Z].width,J[Z].height,0,Ce,ze,J[Z].data);for(let Se=0;Se<he.length;Se++){const Ae=he[Se].image[Z].image;P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,Ae.width,Ae.height,Ce,ze,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,qe,Ae.width,Ae.height,0,Ce,ze,Ae.data)}}else{P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ce,ze,J[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,Ce,ze,J[Z]);for(let Se=0;Se<he.length;Se++){const Ae=he[Se];P?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,Ce,ze,Ae.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,qe,Ce,ze,Ae.image[Z])}}}d(g)&&S(i.TEXTURE_CUBE_MAP),ne.__version=K.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function fe(y,g,B,q,K,ne){const se=n.convert(B.format,B.colorSpace),U=n.convert(B.type),re=b(B.internalFormat,se,U,B.normalized,B.colorSpace),ce=r.get(g),pe=r.get(B);if(pe.__renderTarget=g,!ce.__hasExternalTextures){const J=Math.max(1,g.width>>ne),ye=Math.max(1,g.height>>ne);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,ne,re,J,ye,g.depth,0,se,U,null):t.texImage2D(K,ne,re,J,ye,0,se,U,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),Be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,pe.__webglTexture,0,ft(g)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,pe.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(y,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const q=g.depthTexture,K=q&&q.isDepthTexture?q.type:null,ne=R(g.stencilBuffer,K),se=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Be(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(g),ne,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(g),ne,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ne,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,y)}else{const q=g.textures;for(let K=0;K<q.length;K++){const ne=q[K],se=n.convert(ne.format,ne.colorSpace),U=n.convert(ne.type),re=b(ne.internalFormat,se,U,ne.normalized,ne.colorSpace);Be(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(g),re,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(g),re,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,re,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(y,g,B){const q=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=r.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),De(i.TEXTURE_CUBE_MAP,g.depthTexture);const ce=n.convert(g.depthTexture.format),pe=n.convert(g.depthTexture.type);let J;g.depthTexture.format===xr?J=i.DEPTH_COMPONENT24:g.depthTexture.format===jr&&(J=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,J,g.width,g.height,0,ce,pe,null)}}else $(g.depthTexture,0);const ne=K.__webglTexture,se=ft(g),U=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,re=g.depthTexture.format===jr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===xr)Be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,U,ne,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,re,U,ne,0);else if(g.depthTexture.format===jr)Be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,U,ne,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,re,U,ne,0);else throw new Error("Unknown depthTexture format")}function Fe(y){const g=r.get(y),B=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const q=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=q}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)je(g.__webglFramebuffer[q],y,q);else{const q=y.texture.mipmaps;q&&q.length>0?je(g.__webglFramebuffer[0],y,0):je(g.__webglFramebuffer,y,0)}else if(B){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),We(g.__webglDepthbuffer[q],y,!1);else{const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ne)}}else{const q=y.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),We(g.__webglDepthbuffer,y,!1);else{const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(y,g,B){const q=r.get(y);g!==void 0&&fe(q.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Fe(y)}function _t(y){const g=y.texture,B=r.get(y),q=r.get(g);y.addEventListener("dispose",v);const K=y.textures,ne=y.isWebGLCubeRenderTarget===!0,se=K.length>1;if(se||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,s.memory.textures++),ne){B.__webglFramebuffer=[];for(let U=0;U<6;U++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[U]=[];for(let re=0;re<g.mipmaps.length;re++)B.__webglFramebuffer[U][re]=i.createFramebuffer()}else B.__webglFramebuffer[U]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let U=0;U<g.mipmaps.length;U++)B.__webglFramebuffer[U]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(se)for(let U=0,re=K.length;U<re;U++){const ce=r.get(K[U]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),s.memory.textures++)}if(y.samples>0&&Be(y)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let U=0;U<K.length;U++){const re=K[U];B.__webglColorRenderbuffer[U]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[U]);const ce=n.convert(re.format,re.colorSpace),pe=n.convert(re.type),J=b(re.internalFormat,ce,pe,re.normalized,re.colorSpace,y.isXRRenderTarget===!0),ye=ft(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,J,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,B.__webglColorRenderbuffer[U])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),We(B.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),De(i.TEXTURE_CUBE_MAP,g);for(let U=0;U<6;U++)if(g.mipmaps&&g.mipmaps.length>0)for(let re=0;re<g.mipmaps.length;re++)fe(B.__webglFramebuffer[U][re],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+U,re);else fe(B.__webglFramebuffer[U],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);d(g)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let U=0,re=K.length;U<re;U++){const ce=K[U],pe=r.get(ce);let J=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(J=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,pe.__webglTexture),De(J,ce),fe(B.__webglFramebuffer,y,ce,i.COLOR_ATTACHMENT0+U,J,0),d(ce)&&S(J)}t.unbindTexture()}else{let U=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(U=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(U,q.__webglTexture),De(U,g),g.mipmaps&&g.mipmaps.length>0)for(let re=0;re<g.mipmaps.length;re++)fe(B.__webglFramebuffer[re],y,g,i.COLOR_ATTACHMENT0,U,re);else fe(B.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,U,0);d(g)&&S(U),t.unbindTexture()}y.depthBuffer&&Fe(y)}function Et(y){const g=y.textures;for(let B=0,q=g.length;B<q;B++){const K=g[B];if(d(K)){const ne=A(y),se=r.get(K).__webglTexture;t.bindTexture(ne,se),S(ne),t.unbindTexture()}}}const nt=[],Dt=[];function D(y){if(y.samples>0){if(Be(y)===!1){const g=y.textures,B=y.width,q=y.height;let K=i.COLOR_BUFFER_BIT;const ne=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=r.get(y),U=g.length>1;if(U)for(let ce=0;ce<g.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const re=y.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ce=0;ce<g.length;ce++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),U){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[ce]);const pe=r.get(g[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,K,i.NEAREST),c===!0&&(nt.length=0,Dt.length=0,nt.push(i.COLOR_ATTACHMENT0+ce),y.depthBuffer&&y.resolveDepthBuffer===!1&&(nt.push(ne),Dt.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),U)for(let ce=0;ce<g.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,se.__webglColorRenderbuffer[ce]);const pe=r.get(g[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ft(y){return Math.min(a.maxSamples,y.samples)}function Be(y){const g=r.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function et(y){const g=s.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function le(y,g){const B=y.colorSpace,q=y.format,K=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||B!==La&&B!==Pr&&(He.getTransfer(B)===Ye?(q!==Ht||K!==Ft)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",B)),g}function ot(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=X,this.getTextureUnits=W,this.setTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=ee,this.setTexture3D=ie,this.setTextureCube=ve,this.rebindTextures=Mt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Sg(i,e){function t(r,a=Pr){let n;const s=He.getTransfer(a);if(r===Ft)return i.UNSIGNED_BYTE;if(r===Ds)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Us)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Nl)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Ll)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ul)return i.BYTE;if(r===Il)return i.SHORT;if(r===zi)return i.UNSIGNED_SHORT;if(r===Ps)return i.INT;if(r===nr)return i.UNSIGNED_INT;if(r===zt)return i.FLOAT;if(r===Mr)return i.HALF_FLOAT;if(r===Fl)return i.ALPHA;if(r===Ol)return i.RGB;if(r===Ht)return i.RGBA;if(r===xr)return i.DEPTH_COMPONENT;if(r===jr)return i.DEPTH_STENCIL;if(r===Is)return i.RED;if(r===Ns)return i.RED_INTEGER;if(r===Yr)return i.RG;if(r===Ls)return i.RG_INTEGER;if(r===Fs)return i.RGBA_INTEGER;if(r===wa||r===Ra||r===Ca||r===Pa)if(s===Ye)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===wa)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ra)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ca)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===wa)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ra)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ca)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pa)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xn||r===jn||r===qn||r===Yn)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Xn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yn)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kn||r===Jn||r===Zn||r===$n||r===Qn||r===Ua||r===es)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Kn||r===Jn)return s===Ye?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Zn)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===$n)return n.COMPRESSED_R11_EAC;if(r===Qn)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Ua)return n.COMPRESSED_RG11_EAC;if(r===es)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ts||r===rs||r===is||r===as||r===ns||r===ss||r===os||r===ls||r===cs||r===hs||r===us||r===ds||r===ps||r===fs)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(r===ts)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rs)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===is)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===as)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ns)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ss)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===os)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ls)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cs)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hs)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===us)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ds)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ps)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fs)return s===Ye?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ms||r===gs||r===_s)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(r===ms)return s===Ye?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gs)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_s)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vs||r===Ms||r===Ia||r===xs)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(r===vs)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Ms)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ia)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xs)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hi?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new tc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new sr({vertexShader:yg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Ga(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Eg extends Nr{constructor(e,t){super();const r=this;let a=null,n=1,s=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new bg,d={},S=t.getContextAttributes();let A=null,b=null;const R=[],T=[],C=new Xe;let v=null;const E=new Lt;E.viewport=new at;const L=new Lt;L.viewport=new at;const w=[E,L],I=new Eu;let X=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let oe=R[Y];return oe===void 0&&(oe=new sn,R[Y]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Y){let oe=R[Y];return oe===void 0&&(oe=new sn,R[Y]=oe),oe.getGripSpace()},this.getHand=function(Y){let oe=R[Y];return oe===void 0&&(oe=new sn,R[Y]=oe),oe.getHandSpace()};function F(Y){const oe=T.indexOf(Y.inputSource);if(oe===-1)return;const ae=R[oe];ae!==void 0&&(ae.update(Y.inputSource,Y.frame,l||s),ae.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){a.removeEventListener("select",F),a.removeEventListener("selectstart",F),a.removeEventListener("selectend",F),a.removeEventListener("squeeze",F),a.removeEventListener("squeezestart",F),a.removeEventListener("squeezeend",F),a.removeEventListener("end",H),a.removeEventListener("inputsourceschange",G);for(let Y=0;Y<R.length;Y++){const oe=T[Y];oe!==null&&(T[Y]=null,R[Y].disconnect(oe))}X=null,W=null,m.reset();for(const Y in d)delete d[Y];e.setRenderTarget(A),p=null,h=null,f=null,a=null,b=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){n=Y,r.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,r.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(a,t)),f},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(A=e.getRenderTarget(),a.addEventListener("select",F),a.addEventListener("selectstart",F),a.addEventListener("selectend",F),a.addEventListener("squeeze",F),a.addEventListener("squeezestart",F),a.addEventListener("squeezeend",F),a.addEventListener("end",H),a.addEventListener("inputsourceschange",G),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,ae=null,Ee=null;S.depth&&(Ee=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=S.stencil?jr:xr,ae=S.stencil?Hi:nr);const Pe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:n};f=this.getBinding(),h=f.createProjectionLayer(Pe),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new ar(h.textureWidth,h.textureHeight,{format:Ht,type:Ft,depthTexture:new xi(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:n};p=new XRWebGLLayer(a,t,oe),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ar(p.framebufferWidth,p.framebufferHeight,{format:Ht,type:Ft,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await a.requestReferenceSpace(o),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Y){for(let oe=0;oe<Y.removed.length;oe++){const ae=Y.removed[oe],Ee=T.indexOf(ae);Ee>=0&&(T[Ee]=null,R[Ee].disconnect(ae))}for(let oe=0;oe<Y.added.length;oe++){const ae=Y.added[oe];let Ee=T.indexOf(ae);if(Ee===-1){for(let fe=0;fe<R.length;fe++)if(fe>=T.length){T.push(ae),Ee=fe;break}else if(T[fe]===null){T[fe]=ae,Ee=fe;break}if(Ee===-1)break}const Pe=R[Ee];Pe&&Pe.connect(ae)}}const $=new O,ee=new O;function ie(Y,oe,ae){$.setFromMatrixPosition(oe.matrixWorld),ee.setFromMatrixPosition(ae.matrixWorld);const Ee=$.distanceTo(ee),Pe=oe.projectionMatrix.elements,fe=ae.projectionMatrix.elements,We=Pe[14]/(Pe[10]-1),je=Pe[14]/(Pe[10]+1),Fe=(Pe[9]+1)/Pe[5],Mt=(Pe[9]-1)/Pe[5],_t=(Pe[8]-1)/Pe[0],Et=(fe[8]+1)/fe[0],nt=We*_t,Dt=We*Et,D=Ee/(-_t+Et),ft=D*-_t;if(oe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ft),Y.translateZ(D),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pe[10]===-1)Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Be=We+D,et=je+D,le=nt-ft,ot=Dt+(Ee-ft),y=Fe*je/et*Be,g=Mt*je/et*Be;Y.projectionMatrix.makePerspective(le,ot,y,g,Be,et),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ve(Y,oe){oe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(oe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let oe=Y.near,ae=Y.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),I.near=L.near=E.near=oe,I.far=L.far=E.far=ae,(X!==I.near||W!==I.far)&&(a.updateRenderState({depthNear:I.near,depthFar:I.far}),X=I.near,W=I.far),I.layers.mask=Y.layers.mask|6,E.layers.mask=I.layers.mask&-5,L.layers.mask=I.layers.mask&-3;const Ee=Y.parent,Pe=I.cameras;ve(I,Ee);for(let fe=0;fe<Pe.length;fe++)ve(Pe[fe],Ee);Pe.length===2?ie(I,E,L):I.projectionMatrix.copy(E.projectionMatrix),Re(Y,I,Ee)};function Re(Y,oe,ae){ae===null?Y.matrix.copy(oe.matrixWorld):(Y.matrix.copy(ae.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(oe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Mi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Y){return d[Y]};let Ge=null;function Je(Y,oe){if(u=oe.getViewerPose(l||s),_=oe,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Ee=!1;ae.length!==I.cameras.length&&(I.cameras.length=0,Ee=!0);for(let fe=0;fe<ae.length;fe++){const We=ae[fe];let je=null;if(p!==null)je=p.getViewport(We);else{const Mt=f.getViewSubImage(h,We);je=Mt.viewport,fe===0&&(e.setRenderTargetTextures(b,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(b))}let Fe=w[fe];Fe===void 0&&(Fe=new Lt,Fe.layers.enable(fe),Fe.viewport=new at,w[fe]=Fe),Fe.matrix.fromArray(We.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(We.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(je.x,je.y,je.width,je.height),fe===0&&(I.matrix.copy(Fe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ee===!0&&I.cameras.push(Fe)}const Pe=a.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){f=r.getBinding();const fe=f.getDepthInformation(ae[0]);fe&&fe.isValid&&fe.texture&&m.init(fe,a.renderState)}if(Pe&&Pe.includes("camera-access")&&x){e.state.unbindTexture(),f=r.getBinding();for(let fe=0;fe<ae.length;fe++){const We=ae[fe].camera;if(We){let je=d[We];je||(je=new tc,d[We]=je);const Fe=f.getCameraImage(We);je.sourceTexture=Fe}}}}for(let ae=0;ae<R.length;ae++){const Ee=T[ae],Pe=R[ae];Ee!==null&&Pe!==void 0&&Pe.update(Ee,oe,l||s)}Ge&&Ge(Y,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),_=null}const De=new hc;De.setAnimationLoop(Je),this.setAnimationLoop=function(Y){Ge=Y},this.dispose=function(){}}}const Ag=new ke,_c=new Ue;_c.set(-1,0,0,0,1,0,0,0,1);function wg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,nc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,S,A,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?n(m,d):d.isMeshLambertMaterial?(n(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(n(m,d),f(m,d)):d.isMeshPhongMaterial?(n(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(n(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(n(m,d),_(m,d)):d.isMeshDepthMaterial?n(m,d):d.isMeshDistanceMaterial?(n(m,d),x(m,d)):d.isMeshNormalMaterial?n(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,S,A):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ct&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ct&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=e.get(d),A=S.envMap,b=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_c),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ct&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Rg(i,e,t,r){let a={},n={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,A){const b=A.program;r.uniformBlockBinding(S,b)}function l(S,A){let b=a[S.id];b===void 0&&(_(S),b=u(S),a[S.id]=b,S.addEventListener("dispose",m));const R=A.program;r.updateUBOMapping(S,R);const T=e.render.frame;n[S.id]!==T&&(h(S),n[S.id]=T)}function u(S){const A=f();S.__bindingPointIndex=A;const b=i.createBuffer(),R=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,b),b}function f(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const A=a[S.id],b=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,C=b.length;T<C;T++){const v=Array.isArray(b[T])?b[T]:[b[T]];for(let E=0,L=v.length;E<L;E++){const w=v[E];if(p(w,T,E,R)===!0){const I=w.__offset,X=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let F=0;F<X.length;F++){const H=X[F],G=x(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,I+W,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):ArrayBuffer.isView(H)?w.__data.set(new H.constructor(H.buffer,H.byteOffset,w.__data.length)):(H.toArray(w.__data,W),W+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,A,b,R){const T=S.value,C=A+"_"+b;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:ArrayBuffer.isView(T)?R[C]=T.slice():R[C]=T.clone(),!0;{const v=R[C];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return R[C]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(v.equals(T)===!1)return v.copy(T),!0}}return!1}function _(S){const A=S.uniforms;let b=0;const R=16;for(let C=0,v=A.length;C<v;C++){const E=Array.isArray(A[C])?A[C]:[A[C]];for(let L=0,w=E.length;L<w;L++){const I=E[L],X=Array.isArray(I.value)?I.value:[I.value];for(let W=0,F=X.length;W<F;W++){const H=X[W],G=x(H),$=b%R,ee=$%G.boundary,ie=$+ee;b+=ee,ie!==0&&R-ie<G.storage&&(b+=R-ie),I.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=G.storage}}}const T=b%R;return T>0&&(b+=R-T),S.__size=b,S.__cache={},this}function x(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(A.boundary=16,A.storage=S.byteLength):Me("WebGLRenderer: Unsupported uniform value type.",S),A}function m(S){const A=S.target;A.removeEventListener("dispose",m);const b=s.indexOf(A.__bindingPointIndex);s.splice(b,1),i.deleteBuffer(a[A.id]),delete a[A.id],delete n[A.id]}function d(){for(const S in a)i.deleteBuffer(a[S]);s=[],a={},n={}}return{bind:c,update:l,dispose:d}}const Cg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let er=null;function Pg(){return er===null&&(er=new ks(Cg,16,16,Yr,Mr),er.name="DFG_LUT",er.minFilter=Tt,er.magFilter=Tt,er.wrapS=mr,er.wrapT=mr,er.generateMipmaps=!1,er.needsUpdate=!0),er}class c_{constructor(e={}){const{canvas:t=lh(),context:r=null,depth:a=!0,stencil:n=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Ft}=e;this.isWebGLRenderer=!0;let _;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=r.getContextAttributes().alpha}else _=s;const x=p,m=new Set([Fs,Ls,Ns]),d=new Set([Ft,nr,zi,Hi,Ds,Us]),S=new Uint32Array(4),A=new Int32Array(4),b=new O;let R=null,T=null;const C=[],v=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let w=!1,I=null;this._outputColorSpace=Vt;let X=0,W=0,F=null,H=-1,G=null;const $=new at,ee=new at;let ie=null;const ve=new Oe(0);let Re=0,Ge=t.width,Je=t.height,De=1,Y=null,oe=null;const ae=new at(0,0,Ge,Je),Ee=new at(0,0,Ge,Je);let Pe=!1;const fe=new Gs;let We=!1,je=!1;const Fe=new ke,Mt=new O,_t=new at,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Dt(){return F===null?De:1}let D=r;function ft(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:a,stencil:n,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cs}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),D===null){const N="webgl2";if(D=ft(N,M),D===null)throw ft(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw be("WebGLRenderer: "+M.message),M}let Be,et,le,ot,y,g,B,q,K,ne,se,U,re,ce,pe,J,ye,Ce,ze,qe,P,j,Q;function xe(){Be=new Pf(D),Be.init(),P=new Sg(D,Be),et=new yf(D,Be,e,P),le=new Mg(D,Be),et.reversedDepthBuffer&&h&&le.buffers.depth.setReversed(!0),ot=new If(D),y=new ng,g=new xg(D,Be,le,y,et,P,ot),B=new Cf(L),q=new Fu(D),j=new xf(D,q),K=new Df(D,q,ot,j),ne=new Lf(D,K,q,j,ot),Ce=new Nf(D,et,g),pe=new Tf(y),se=new ag(L,B,Be,et,j,pe),U=new wg(L,y),re=new og,ce=new pg(Be),ye=new Mf(L,B,le,ne,_,c),J=new vg(L,ne,et),Q=new Rg(D,ot,et,le),ze=new Sf(D,Be,ot),qe=new Uf(D,Be,ot),ot.programs=se.programs,L.capabilities=et,L.extensions=Be,L.properties=y,L.renderLists=re,L.shadowMap=J,L.state=le,L.info=ot}xe(),x!==Ft&&(E=new Of(x,t.width,t.height,a,n));const he=new Eg(L,D);this.xr=he,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=Be.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Be.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(M){M!==void 0&&(De=M,this.setSize(Ge,Je,!1))},this.getSize=function(M){return M.set(Ge,Je)},this.setSize=function(M,N,k=!0){if(he.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=M,Je=N,t.width=Math.floor(M*De),t.height=Math.floor(N*De),k===!0&&(t.style.width=M+"px",t.style.height=N+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(Ge*De,Je*De).floor()},this.setDrawingBufferSize=function(M,N,k){Ge=M,Je=N,De=k,t.width=Math.floor(M*k),t.height=Math.floor(N*k),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(x===Ft){be("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Me("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy($)},this.getViewport=function(M){return M.copy(ae)},this.setViewport=function(M,N,k,z){M.isVector4?ae.set(M.x,M.y,M.z,M.w):ae.set(M,N,k,z),le.viewport($.copy(ae).multiplyScalar(De).round())},this.getScissor=function(M){return M.copy(Ee)},this.setScissor=function(M,N,k,z){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,N,k,z),le.scissor(ee.copy(Ee).multiplyScalar(De).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(M){le.setScissorTest(Pe=M)},this.setOpaqueSort=function(M){Y=M},this.setTransparentSort=function(M){oe=M},this.getClearColor=function(M){return M.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,k=!0){let z=0;if(M){let V=!1;if(F!==null){const te=F.texture.format;V=m.has(te)}if(V){const te=F.texture.type,de=d.has(te),me=ye.getClearColor(),ge=ye.getClearAlpha(),we=me.r,Ne=me.g,Ve=me.b;de?(S[0]=we,S[1]=Ne,S[2]=Ve,S[3]=ge,D.clearBufferuiv(D.COLOR,0,S)):(A[0]=we,A[1]=Ne,A[2]=Ve,A[3]=ge,D.clearBufferiv(D.COLOR,0,A))}else z|=D.COLOR_BUFFER_BIT}N&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),I=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),ye.dispose(),re.dispose(),ce.dispose(),y.dispose(),B.dispose(),ne.dispose(),j.dispose(),Q.dispose(),se.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ys),he.removeEventListener("sessionend",Ks),Fr.stop()};function Z(M){M.preventDefault(),Oa("WebGLRenderer: Context Lost."),w=!0}function Se(){Oa("WebGLRenderer: Context Restored."),w=!1;const M=ot.autoReset,N=J.enabled,k=J.autoUpdate,z=J.needsUpdate,V=J.type;xe(),ot.autoReset=M,J.enabled=N,J.autoUpdate=k,J.needsUpdate=z,J.type=V}function Ae(M){be("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function At(M){const N=M.target;N.removeEventListener("dispose",At),it(N)}function it(M){or(M),y.remove(M)}function or(M){const N=y.get(M).programs;N!==void 0&&(N.forEach(function(k){se.releaseProgram(k)}),M.isShaderMaterial&&se.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,k,z,V,te){N===null&&(N=Et);const de=V.isMesh&&V.matrixWorld.determinant()<0,me=xc(M,N,k,z,V);le.setMaterial(z,de);let ge=k.index,we=1;if(z.wireframe===!0){if(ge=K.getWireframeAttribute(k),ge===void 0)return;we=2}const Ne=k.drawRange,Ve=k.attributes.position;let Te=Ne.start*we,tt=(Ne.start+Ne.count)*we;te!==null&&(Te=Math.max(Te,te.start*we),tt=Math.min(tt,(te.start+te.count)*we)),ge!==null?(Te=Math.max(Te,0),tt=Math.min(tt,ge.count)):Ve!=null&&(Te=Math.max(Te,0),tt=Math.min(tt,Ve.count));const ct=tt-Te;if(ct<0||ct===1/0)return;j.setup(V,z,me,k,ge);let st,rt=ze;if(ge!==null&&(st=q.get(ge),rt=qe,rt.setIndex(st)),V.isMesh)z.wireframe===!0?(le.setLineWidth(z.wireframeLinewidth*Dt()),rt.setMode(D.LINES)):rt.setMode(D.TRIANGLES);else if(V.isLine){let lt=z.linewidth;lt===void 0&&(lt=1),le.setLineWidth(lt*Dt()),V.isLineSegments?rt.setMode(D.LINES):V.isLineLoop?rt.setMode(D.LINE_LOOP):rt.setMode(D.LINE_STRIP)}else V.isPoints?rt.setMode(D.POINTS):V.isSprite&&rt.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(Be.get("WEBGL_multi_draw"))rt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const lt=V._multiDrawStarts,_e=V._multiDrawCounts,Ut=V._multiDrawCount,Or=ge?q.get(ge).bytesPerElement:1,Ot=y.get(z).currentProgram.getUniforms();for(let $t=0;$t<Ut;$t++)Ot.setValue(D,"_gl_DrawID",$t),rt.render(lt[$t]/Or,_e[$t])}else if(V.isInstancedMesh)rt.renderInstances(Te,ct,V.count);else if(k.isInstancedBufferGeometry){const lt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,_e=Math.min(k.instanceCount,lt);rt.renderInstances(Te,ct,_e)}else rt.render(Te,ct)};function Zt(M,N,k){M.transparent===!0&&M.side===fr&&M.forceSinglePass===!1?(M.side=Ct,M.needsUpdate=!0,Ki(M,N,k),M.side=Ur,M.needsUpdate=!0,Ki(M,N,k),M.side=fr):Ki(M,N,k)}this.compile=function(M,N,k=null){k===null&&(k=M),T=ce.get(k),T.init(N),v.push(T),k.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),M!==k&&M.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();const z=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const te=V.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){const me=te[de];Zt(me,k,V),z.add(me)}else Zt(te,k,V),z.add(te)}),T=v.pop(),z},this.compileAsync=function(M,N,k=null){const z=this.compile(M,N,k);return new Promise(V=>{function te(){if(z.forEach(function(de){y.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){V(M);return}setTimeout(te,10)}Be.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Ya=null;function vc(M){Ya&&Ya(M)}function Ys(){Fr.stop()}function Ks(){Fr.start()}const Fr=new hc;Fr.setAnimationLoop(vc),typeof self<"u"&&Fr.setContext(self),this.setAnimationLoop=function(M){Ya=M,he.setAnimationLoop(M),M===null?Fr.stop():Fr.start()},he.addEventListener("sessionstart",Ys),he.addEventListener("sessionend",Ks),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;I!==null&&I.renderStart(M,N);const k=he.enabled===!0&&he.isPresenting===!0,z=E!==null&&(F===null||k)&&E.begin(L,F);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(N),N=he.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,N,F),T=ce.get(M,v.length),T.init(N),T.state.textureUnits=g.getTextureUnits(),v.push(T),Fe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),fe.setFromProjectionMatrix(Fe,rr,N.reversedDepth),je=this.localClippingEnabled,We=pe.init(this.clippingPlanes,je),R=re.get(M,C.length),R.init(),C.push(R),he.enabled===!0&&he.isPresenting===!0){const te=L.xr.getDepthSensingMesh();te!==null&&Ka(te,N,-1/0,L.sortObjects)}Ka(M,N,0,L.sortObjects),R.finish(),L.sortObjects===!0&&R.sort(Y,oe),nt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,nt&&ye.addToRenderList(R,M),this.info.render.frame++,We===!0&&pe.beginShadows();const V=T.state.shadowsArray;if(J.render(V,M,N),We===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&E.hasRenderPass())===!1){const te=R.opaque,de=R.transmissive;if(T.setupLights(),N.isArrayCamera){const me=N.cameras;if(de.length>0)for(let ge=0,we=me.length;ge<we;ge++){const Ne=me[ge];Zs(te,de,M,Ne)}nt&&ye.render(M);for(let ge=0,we=me.length;ge<we;ge++){const Ne=me[ge];Js(R,M,Ne,Ne.viewport)}}else de.length>0&&Zs(te,de,M,N),nt&&ye.render(M),Js(R,M,N)}F!==null&&W===0&&(g.updateMultisampleRenderTarget(F),g.updateRenderTargetMipmap(F)),z&&E.end(L),M.isScene===!0&&M.onAfterRender(L,M,N),j.resetDefaultState(),H=-1,G=null,v.pop(),v.length>0?(T=v[v.length-1],g.setTextureUnits(T.state.textureUnits),We===!0&&pe.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?R=C[C.length-1]:R=null,I!==null&&I.renderEnd()};function Ka(M,N,k,z){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||fe.intersectsSprite(M)){z&&_t.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Fe);const te=ne.update(M),de=M.material;de.visible&&R.push(M,te,de,k,_t.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||fe.intersectsObject(M))){const te=ne.update(M),de=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),_t.copy(M.boundingSphere.center)):(te.boundingSphere===null&&te.computeBoundingSphere(),_t.copy(te.boundingSphere.center)),_t.applyMatrix4(M.matrixWorld).applyMatrix4(Fe)),Array.isArray(de)){const me=te.groups;for(let ge=0,we=me.length;ge<we;ge++){const Ne=me[ge],Ve=de[Ne.materialIndex];Ve&&Ve.visible&&R.push(M,te,Ve,k,_t.z,Ne)}}else de.visible&&R.push(M,te,de,k,_t.z,null)}}const V=M.children;for(let te=0,de=V.length;te<de;te++)Ka(V[te],N,k,z)}function Js(M,N,k,z){const{opaque:V,transmissive:te,transparent:de}=M;T.setupLightsView(k),We===!0&&pe.setGlobalState(L.clippingPlanes,k),z&&le.viewport($.copy(z)),V.length>0&&Yi(V,N,k),te.length>0&&Yi(te,N,k),de.length>0&&Yi(de,N,k),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Zs(M,N,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const Ve=Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new ar(1,1,{generateMipmaps:!0,type:Ve?Mr:Ft,minFilter:Xr,samples:Math.max(4,et.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}const V=T.state.transmissionRenderTarget[z.id],te=z.viewport||$;V.setSize(te.z*L.transmissionResolutionScale,te.w*L.transmissionResolutionScale);const de=L.getRenderTarget(),me=L.getActiveCubeFace(),ge=L.getActiveMipmapLevel();L.setRenderTarget(V),L.getClearColor(ve),Re=L.getClearAlpha(),Re<1&&L.setClearColor(16777215,.5),L.clear(),nt&&ye.render(k);const we=L.toneMapping;L.toneMapping=ir;const Ne=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),We===!0&&pe.setGlobalState(L.clippingPlanes,z),Yi(M,k,z),g.updateMultisampleRenderTarget(V),g.updateRenderTargetMipmap(V),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Te=0,tt=N.length;Te<tt;Te++){const ct=N[Te],{object:st,geometry:rt,material:lt,group:_e}=ct;if(lt.side===fr&&st.layers.test(z.layers)){const Ut=lt.side;lt.side=Ct,lt.needsUpdate=!0,$s(st,k,z,rt,lt,_e),lt.side=Ut,lt.needsUpdate=!0,Ve=!0}}Ve===!0&&(g.updateMultisampleRenderTarget(V),g.updateRenderTargetMipmap(V))}L.setRenderTarget(de,me,ge),L.setClearColor(ve,Re),Ne!==void 0&&(z.viewport=Ne),L.toneMapping=we}function Yi(M,N,k){const z=N.isScene===!0?N.overrideMaterial:null;for(let V=0,te=M.length;V<te;V++){const de=M[V],{object:me,geometry:ge,group:we}=de;let Ne=de.material;Ne.allowOverride===!0&&z!==null&&(Ne=z),me.layers.test(k.layers)&&$s(me,N,k,ge,Ne,we)}}function $s(M,N,k,z,V,te){M.onBeforeRender(L,N,k,z,V,te),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(L,N,k,z,M,te),V.transparent===!0&&V.side===fr&&V.forceSinglePass===!1?(V.side=Ct,V.needsUpdate=!0,L.renderBufferDirect(k,N,z,V,M,te),V.side=Ur,V.needsUpdate=!0,L.renderBufferDirect(k,N,z,V,M,te),V.side=fr):L.renderBufferDirect(k,N,z,V,M,te),M.onAfterRender(L,N,k,z,V,te)}function Ki(M,N,k){N.isScene!==!0&&(N=Et);const z=y.get(M),V=T.state.lights,te=T.state.shadowsArray,de=V.state.version,me=se.getParameters(M,V.state,te,N,k,T.state.lightProbeGridArray),ge=se.getProgramCacheKey(me);let we=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;const Ne=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=B.get(M.envMap||z.environment,Ne),z.envMapRotation=z.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,we===void 0&&(M.addEventListener("dispose",At),we=new Map,z.programs=we);let Ve=we.get(ge);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===de)return eo(M,me),Ve}else me.uniforms=se.getUniforms(M),I!==null&&M.isNodeMaterial&&I.build(M,k,me),M.onBeforeCompile(me,L),Ve=se.acquireProgram(me,ge),we.set(ge,Ve),z.uniforms=me.uniforms;const Te=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=pe.uniform),eo(M,me),z.needsLights=yc(M),z.lightsStateVersion=de,z.needsLights&&(Te.ambientLightColor.value=V.state.ambient,Te.lightProbe.value=V.state.probe,Te.directionalLights.value=V.state.directional,Te.directionalLightShadows.value=V.state.directionalShadow,Te.spotLights.value=V.state.spot,Te.spotLightShadows.value=V.state.spotShadow,Te.rectAreaLights.value=V.state.rectArea,Te.ltc_1.value=V.state.rectAreaLTC1,Te.ltc_2.value=V.state.rectAreaLTC2,Te.pointLights.value=V.state.point,Te.pointLightShadows.value=V.state.pointShadow,Te.hemisphereLights.value=V.state.hemi,Te.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Te.spotLightMatrix.value=V.state.spotLightMatrix,Te.spotLightMap.value=V.state.spotLightMap,Te.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=Ve,z.uniformsList=null,Ve}function Qs(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Da.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function eo(M,N){const k=y.get(M);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Mc(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(N.matrixWorld);for(let k=0,z=M.length;k<z;k++){const V=M[k];if(V.texture!==null&&V.boundingBox.containsPoint(b))return V}return null}function xc(M,N,k,z,V){N.isScene!==!0&&(N=Et),g.resetTextureUnits();const te=N.fog,de=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,me=F===null?L.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:He.workingColorSpace,ge=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,we=B.get(z.envMap||de,ge),Ne=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ve=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!k.morphAttributes.position,tt=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color;let st=ir;z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(st=L.toneMapping);const rt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,lt=rt!==void 0?rt.length:0,_e=y.get(z),Ut=T.state.lights;if(We===!0&&(je===!0||M!==G)){const Ze=M===G&&z.id===H;pe.setState(z,M,Ze)}let Or=!1;z.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Ut.state.version||_e.outputColorSpace!==me||V.isBatchedMesh&&_e.batching===!1||!V.isBatchedMesh&&_e.batching===!0||V.isBatchedMesh&&_e.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&_e.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&_e.instancing===!1||!V.isInstancedMesh&&_e.instancing===!0||V.isSkinnedMesh&&_e.skinning===!1||!V.isSkinnedMesh&&_e.skinning===!0||V.isInstancedMesh&&_e.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&_e.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&_e.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&_e.instancingMorph===!1&&V.morphTexture!==null||_e.envMap!==we||z.fog===!0&&_e.fog!==te||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==pe.numPlanes||_e.numIntersection!==pe.numIntersection)||_e.vertexAlphas!==Ne||_e.vertexTangents!==Ve||_e.morphTargets!==Te||_e.morphNormals!==tt||_e.morphColors!==ct||_e.toneMapping!==st||_e.morphTargetsCount!==lt||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Or=!0):(Or=!0,_e.__version=z.version);let Ot=_e.currentProgram;Or===!0&&(Ot=Ki(z,N,V),I&&z.isNodeMaterial&&I.onUpdateProgram(z,Ot,_e));let $t=!1,yr=!1,Zr=!1;const Qe=Ot.getUniforms(),ht=_e.uniforms;if(le.useProgram(Ot.program)&&($t=!0,yr=!0,Zr=!0),z.id!==H&&(H=z.id,yr=!0),_e.needsLights){const Ze=Mc(T.state.lightProbeGridArray,V);_e.lightProbeGrid!==Ze&&(_e.lightProbeGrid=Ze,yr=!0)}if($t||G!==M){le.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Qe.setValue(D,"projectionMatrix",M.projectionMatrix),Qe.setValue(D,"viewMatrix",M.matrixWorldInverse);const Ze=Qe.map.cameraPosition;Ze!==void 0&&Ze.setValue(D,Mt.setFromMatrixPosition(M.matrixWorld)),et.logarithmicDepthBuffer&&Qe.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Qe.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),G!==M&&(G=M,yr=!0,Zr=!0)}if(_e.needsLights&&(Ut.state.directionalShadowMap.length>0&&Qe.setValue(D,"directionalShadowMap",Ut.state.directionalShadowMap,g),Ut.state.spotShadowMap.length>0&&Qe.setValue(D,"spotShadowMap",Ut.state.spotShadowMap,g),Ut.state.pointShadowMap.length>0&&Qe.setValue(D,"pointShadowMap",Ut.state.pointShadowMap,g)),V.isSkinnedMesh){Qe.setOptional(D,V,"bindMatrix"),Qe.setOptional(D,V,"bindMatrixInverse");const Ze=V.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Qe.setValue(D,"boneTexture",Ze.boneTexture,g))}V.isBatchedMesh&&(Qe.setOptional(D,V,"batchingTexture"),Qe.setValue(D,"batchingTexture",V._matricesTexture,g),Qe.setOptional(D,V,"batchingIdTexture"),Qe.setValue(D,"batchingIdTexture",V._indirectTexture,g),Qe.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&Qe.setValue(D,"batchingColorTexture",V._colorsTexture,g));const Tr=k.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&Ce.update(V,k,Ot),(yr||_e.receiveShadow!==V.receiveShadow)&&(_e.receiveShadow=V.receiveShadow,Qe.setValue(D,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(ht.envMapIntensity.value=N.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=Pg()),yr){if(Qe.setValue(D,"toneMappingExposure",L.toneMappingExposure),_e.needsLights&&Sc(ht,Zr),te&&z.fog===!0&&U.refreshFogUniforms(ht,te),U.refreshMaterialUniforms(ht,z,De,Je,T.state.transmissionRenderTarget[M.id]),_e.needsLights&&_e.lightProbeGrid){const Ze=_e.lightProbeGrid;ht.probesSH.value=Ze.texture,ht.probesMin.value.copy(Ze.boundingBox.min),ht.probesMax.value.copy(Ze.boundingBox.max),ht.probesResolution.value.copy(Ze.resolution)}Da.upload(D,Qs(_e),ht,g)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Da.upload(D,Qs(_e),ht,g),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Qe.setValue(D,"center",V.center),Qe.setValue(D,"modelViewMatrix",V.modelViewMatrix),Qe.setValue(D,"normalMatrix",V.normalMatrix),Qe.setValue(D,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){const Ze=z.uniformsGroups;for(let Ei=0,$r=Ze.length;Ei<$r;Ei++){const to=Ze[Ei];Q.update(to,Ot),Q.bind(to,Ot)}}return Ot}function Sc(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function yc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(M,N,k){const z=y.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),y.get(M.texture).__webglTexture=N,y.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const k=y.get(M);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const Tc=D.createFramebuffer();this.setRenderTarget=function(M,N=0,k=0){F=M,X=N,W=k;let z=null,V=!1,te=!1;if(M){const de=y.get(M);if(de.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(D.FRAMEBUFFER,de.__webglFramebuffer),$.copy(M.viewport),ee.copy(M.scissor),ie=M.scissorTest,le.viewport($),le.scissor(ee),le.setScissorTest(ie),H=-1;return}else if(de.__webglFramebuffer===void 0)g.setupRenderTarget(M);else if(de.__hasExternalTextures)g.rebindTextures(M,y.get(M.texture).__webglTexture,y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const we=M.depthTexture;if(de.__boundDepthTexture!==we){if(we!==null&&y.has(we)&&(M.width!==we.image.width||M.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(M)}}const me=M.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(te=!0);const ge=y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ge[N])?z=ge[N][k]:z=ge[N],V=!0):M.samples>0&&g.useMultisampledRTT(M)===!1?z=y.get(M).__webglMultisampledFramebuffer:Array.isArray(ge)?z=ge[k]:z=ge,$.copy(M.viewport),ee.copy(M.scissor),ie=M.scissorTest}else $.copy(ae).multiplyScalar(De).floor(),ee.copy(Ee).multiplyScalar(De).floor(),ie=Pe;if(k!==0&&(z=Tc),le.bindFramebuffer(D.FRAMEBUFFER,z)&&le.drawBuffers(M,z),le.viewport($),le.scissor(ee),le.setScissorTest(ie),V){const de=y.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,k)}else if(te){const de=N;for(let me=0;me<M.textures.length;me++){const ge=y.get(M.textures[me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+me,ge.__webglTexture,k,de)}}else if(M!==null&&k!==0){const de=y.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,k)}H=-1},this.readRenderTargetPixels=function(M,N,k,z,V,te,de,me=0){if(!(M&&M.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){le.bindFramebuffer(D.FRAMEBUFFER,ge);try{const we=M.textures[me],Ne=we.format,Ve=we.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!et.textureFormatReadable(Ne)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Ve)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-z&&k>=0&&k<=M.height-V&&D.readPixels(N,k,z,V,P.convert(Ne),P.convert(Ve),te)}finally{const we=F!==null?y.get(F).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,N,k,z,V,te,de,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge)if(N>=0&&N<=M.width-z&&k>=0&&k<=M.height-V){le.bindFramebuffer(D.FRAMEBUFFER,ge);const we=M.textures[me],Ne=we.format,Ve=we.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!et.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,te.byteLength,D.STREAM_READ),D.readPixels(N,k,z,V,P.convert(Ne),P.convert(Ve),0);const tt=F!==null?y.get(F).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,tt);const ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ch(D,ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,te),D.deleteBuffer(Te),D.deleteSync(ct),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,k=0){const z=Math.pow(2,-k),V=Math.floor(M.image.width*z),te=Math.floor(M.image.height*z),de=N!==null?N.x:0,me=N!==null?N.y:0;g.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,de,me,V,te),le.unbindTexture()};const bc=D.createFramebuffer(),Ec=D.createFramebuffer();this.copyTextureToTexture=function(M,N,k=null,z=null,V=0,te=0){let de,me,ge,we,Ne,Ve,Te,tt,ct;const st=M.isCompressedTexture?M.mipmaps[te]:M.image;if(k!==null)de=k.max.x-k.min.x,me=k.max.y-k.min.y,ge=k.isBox3?k.max.z-k.min.z:1,we=k.min.x,Ne=k.min.y,Ve=k.isBox3?k.min.z:0;else{const ht=Math.pow(2,-V);de=Math.floor(st.width*ht),me=Math.floor(st.height*ht),M.isDataArrayTexture?ge=st.depth:M.isData3DTexture?ge=Math.floor(st.depth*ht):ge=1,we=0,Ne=0,Ve=0}z!==null?(Te=z.x,tt=z.y,ct=z.z):(Te=0,tt=0,ct=0);const rt=P.convert(N.format),lt=P.convert(N.type);let _e;N.isData3DTexture?(g.setTexture3D(N,0),_e=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(g.setTexture2DArray(N,0),_e=D.TEXTURE_2D_ARRAY):(g.setTexture2D(N,0),_e=D.TEXTURE_2D),le.activeTexture(D.TEXTURE0),le.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),le.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),le.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Ut=le.getParameter(D.UNPACK_ROW_LENGTH),Or=le.getParameter(D.UNPACK_IMAGE_HEIGHT),Ot=le.getParameter(D.UNPACK_SKIP_PIXELS),$t=le.getParameter(D.UNPACK_SKIP_ROWS),yr=le.getParameter(D.UNPACK_SKIP_IMAGES);le.pixelStorei(D.UNPACK_ROW_LENGTH,st.width),le.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st.height),le.pixelStorei(D.UNPACK_SKIP_PIXELS,we),le.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),le.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve);const Zr=M.isDataArrayTexture||M.isData3DTexture,Qe=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const ht=y.get(M),Tr=y.get(N),Ze=y.get(ht.__renderTarget),Ei=y.get(Tr.__renderTarget);le.bindFramebuffer(D.READ_FRAMEBUFFER,Ze.__webglFramebuffer),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let $r=0;$r<ge;$r++)Zr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,y.get(M).__webglTexture,V,Ve+$r),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,y.get(N).__webglTexture,te,ct+$r)),D.blitFramebuffer(we,Ne,de,me,Te,tt,de,me,D.DEPTH_BUFFER_BIT,D.NEAREST);le.bindFramebuffer(D.READ_FRAMEBUFFER,null),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||y.has(M)){const ht=y.get(M),Tr=y.get(N);le.bindFramebuffer(D.READ_FRAMEBUFFER,bc),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ec);for(let Ze=0;Ze<ge;Ze++)Zr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ht.__webglTexture,V,Ve+Ze):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ht.__webglTexture,V),Qe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tr.__webglTexture,te,ct+Ze):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Tr.__webglTexture,te),V!==0?D.blitFramebuffer(we,Ne,de,me,Te,tt,de,me,D.COLOR_BUFFER_BIT,D.NEAREST):Qe?D.copyTexSubImage3D(_e,te,Te,tt,ct+Ze,we,Ne,de,me):D.copyTexSubImage2D(_e,te,Te,tt,we,Ne,de,me);le.bindFramebuffer(D.READ_FRAMEBUFFER,null),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Qe?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(_e,te,Te,tt,ct,de,me,ge,rt,lt,st.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,te,Te,tt,ct,de,me,ge,rt,st.data):D.texSubImage3D(_e,te,Te,tt,ct,de,me,ge,rt,lt,st):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,te,Te,tt,de,me,rt,lt,st.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,te,Te,tt,st.width,st.height,rt,st.data):D.texSubImage2D(D.TEXTURE_2D,te,Te,tt,de,me,rt,lt,st);le.pixelStorei(D.UNPACK_ROW_LENGTH,Ut),le.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Or),le.pixelStorei(D.UNPACK_SKIP_PIXELS,Ot),le.pixelStorei(D.UNPACK_SKIP_ROWS,$t),le.pixelStorei(D.UNPACK_SKIP_IMAGES,yr),te===0&&N.generateMipmaps&&D.generateMipmap(_e),le.unbindTexture()},this.initRenderTarget=function(M){y.get(M).__webglFramebuffer===void 0&&g.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?g.setTextureCube(M,0):M.isData3DTexture?g.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?g.setTexture2DArray(M,0):g.setTexture2D(M,0),le.unbindTexture()},this.resetState=function(){X=0,W=0,F=null,le.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}export{wl as ACESFilmicToneMapping,Gr as AddEquation,Yc as AddOperation,io as AdditiveBlending,Cl as AgXToneMapping,Fl as AlphaFormat,nh as AlwaysCompare,On as AlwaysDepth,uo as AlwaysStencilFunc,t_ as AmbientLight,Kg as AnimationClip,Eu as ArrayCamera,so as AttachedBindMode,Ct as BackSide,$c as BasicDepthPacking,pu as BezierInterpolant,jh as Bone,yi as BooleanKeyframeTrack,Lr as Box3,Xi as BoxGeometry,kt as BufferAttribute,Pt as BufferGeometry,Ul as ByteType,gr as Cache,lc as Camera,Al as CineonToneMapping,mr as ClampToEdgeWrapping,Oe as Color,oc as ColorKeyframeTrack,He as ColorManagement,Xc as ConstantAlphaFactor,Gc as ConstantColorFactor,l_ as Controls,bu as CubeCamera,eu as CubeDepthTexture,qr as CubeReflectionMapping,vi as CubeRefractionMapping,ec as CubeTexture,ka as CubeUVReflectionMapping,hu as CubicInterpolant,ro as CullFaceBack,wc as CullFaceFront,Ac as CullFaceNone,Cc as CustomBlending,Rl as CustomToneMapping,rc as CylinderGeometry,Uh as Data3DTexture,Gl as DataArrayTexture,ks as DataTexture,vu as DefaultLoadingManager,xr as DepthFormat,jr as DepthStencilFormat,xi as DepthTexture,Kc as DetachedBindMode,e_ as DirectionalLight,du as DiscreteInterpolant,fr as DoubleSide,Bc as DstAlphaFactor,zc as DstColorFactor,rh as EqualCompare,Vn as EqualDepth,Ja as EquirectangularReflectionMapping,Za as EquirectangularRefractionMapping,Ir as Euler,Nr as EventDispatcher,tc as ExternalTexture,Jg as FileLoader,pt as Float32BufferAttribute,zt as FloatType,ql as Fog,Ur as FrontSide,Gs as Frustum,po as GLSL3,ih as GreaterCompare,Hn as GreaterDepth,Bs as GreaterEqualCompare,zn as GreaterEqualDepth,Qi as Group,Mr as HalfFloatType,i_ as ImageBitmapLoader,xu as ImageLoader,Rh as ImageUtils,Lo as InstancedBufferAttribute,Wg as InstancedMesh,Ps as IntType,kg as InterleavedBuffer,Jl as InterleavedBufferAttribute,ji as Interpolant,oo as InterpolateBezier,Na as InterpolateDiscrete,Ss as InterpolateLinear,Qa as InterpolateSmooth,Qr as KeepStencilOp,Jt as KeyframeTrack,Hs as Layers,th as LessCompare,Bn as LessDepth,Os as LessEqualCompare,_i as LessEqualDepth,Xa as Light,Ql as Line,$h as LineBasicMaterial,jg as LineLoop,Xg as LineSegments,Tt as LinearFilter,uu as LinearInterpolant,Xr as LinearMipmapLinearFilter,$a as LinearMipmapNearestFilter,La as LinearSRGBColorSpace,bl as LinearToneMapping,Fa as LinearTransfer,qi as Loader,r_ as LoaderUtils,_u as LoadingManager,Dg as MOUSE,Jr as Material,Fg as MathUtils,o_ as Matrix2,Ue as Matrix3,ke as Matrix4,Ic as MaxEquation,Gt as Mesh,Zl as MeshBasicMaterial,ou as MeshDepthMaterial,lu as MeshDistanceMaterial,Yg as MeshPhysicalMaterial,su as MeshStandardMaterial,Uc as MinEquation,Wn as MirroredRepeatWrapping,qc as MixOperation,no as MultiplyBlending,Tl as MultiplyOperation,xt as NearestFilter,Ji as NearestMipmapLinearFilter,Jc as NearestMipmapNearestFilter,Pl as NeutralToneMapping,eh as NeverCompare,Fn as NeverDepth,_r as NoBlending,Pr as NoColorSpace,ir as NoToneMapping,Zc as NormalAnimationBlendMode,mi as NormalBlending,ah as NotEqualCompare,kn as NotEqualDepth,za as NumberKeyframeTrack,ut as Object3D,Qc as ObjectSpaceNormalMap,Lc as OneFactor,jc as OneMinusConstantAlphaFactor,Wc as OneMinusConstantColorFactor,Vc as OneMinusDstAlphaFactor,Hc as OneMinusDstColorFactor,Ln as OneMinusSrcAlphaFactor,Oc as OneMinusSrcColorFactor,Xs as OrthographicCamera,Aa as PCFShadowMap,Rc as PCFSoftShadowMap,rl as PMREMGenerator,Lt as PerspectiveCamera,kr as Plane,Ga as PlaneGeometry,Qg as PointLight,qg as Points,Qh as PointsMaterial,$e as PropertyBinding,Kr as Quaternion,Wa as QuaternionKeyframeTrack,fu as QuaternionLinearInterpolant,$n as R11_EAC_Format,Ia as RED_GREEN_RGTC2_Format,vs as RED_RGTC1_Format,Cs as REVISION,Ua as RG11_EAC_Format,Ht as RGBAFormat,Fs as RGBAIntegerFormat,ds as RGBA_ASTC_10x10_Format,cs as RGBA_ASTC_10x5_Format,hs as RGBA_ASTC_10x6_Format,us as RGBA_ASTC_10x8_Format,ps as RGBA_ASTC_12x10_Format,fs as RGBA_ASTC_12x12_Format,ts as RGBA_ASTC_4x4_Format,rs as RGBA_ASTC_5x4_Format,is as RGBA_ASTC_5x5_Format,as as RGBA_ASTC_6x5_Format,ns as RGBA_ASTC_6x6_Format,ss as RGBA_ASTC_8x5_Format,os as RGBA_ASTC_8x6_Format,ls as RGBA_ASTC_8x8_Format,ms as RGBA_BPTC_Format,Zn as RGBA_ETC2_EAC_Format,Yn as RGBA_PVRTC_2BPPV1_Format,qn as RGBA_PVRTC_4BPPV1_Format,Ra as RGBA_S3TC_DXT1_Format,Ca as RGBA_S3TC_DXT3_Format,Pa as RGBA_S3TC_DXT5_Format,Ol as RGBFormat,gs as RGB_BPTC_SIGNED_Format,_s as RGB_BPTC_UNSIGNED_Format,Kn as RGB_ETC1_Format,Jn as RGB_ETC2_Format,jn as RGB_PVRTC_2BPPV1_Format,Xn as RGB_PVRTC_4BPPV1_Format,wa as RGB_S3TC_DXT1_Format,Yr as RGFormat,Ls as RGIntegerFormat,nu as RawShaderMaterial,Wi as Ray,a_ as Raycaster,Is as RedFormat,Ns as RedIntegerFormat,El as ReinhardToneMapping,Dh as RenderTarget,Gn as RepeatWrapping,Dc as ReverseSubtractEquation,Qn as SIGNED_R11_EAC_Format,xs as SIGNED_RED_GREEN_RGTC2_Format,Ms as SIGNED_RED_RGTC1_Format,es as SIGNED_RG11_EAC_Format,Vt as SRGBColorSpace,Ye as SRGBTransfer,Hg as Scene,Ie as ShaderChunk,tr as ShaderLib,sr as ShaderMaterial,Il as ShortType,$l as Skeleton,Gg as SkinnedMesh,zs as Source,Sr as Sphere,ic as SphereGeometry,n_ as Spherical,$g as SpotLight,Nn as SrcAlphaFactor,kc as SrcAlphaSaturateFactor,Fc as SrcColorFactor,Ts as StaticDrawUsage,Ti as StringKeyframeTrack,Pc as SubtractEquation,ao as SubtractiveBlending,Ug as TOUCH,ys as TangentSpaceNormalMap,bt as Texture,Zg as TextureLoader,ac as TorusGeometry,Yt as Triangle,Lg as TriangleFanDrawMode,Ng as TriangleStripDrawMode,Ig as TrianglesDrawMode,Dl as UVMapping,Yl as Uint16BufferAttribute,Kl as Uint32BufferAttribute,ue as UniformsLib,ru as UniformsUtils,Ft as UnsignedByteType,Ll as UnsignedInt101111Type,Hi as UnsignedInt248Type,Nl as UnsignedInt5999Type,nr as UnsignedIntType,Ds as UnsignedShort4444Type,Us as UnsignedShort5551Type,zi as UnsignedShortType,Fi as VSMShadowMap,Xe as Vector2,O as Vector3,at as Vector4,Ha as VectorKeyframeTrack,rr as WebGLCoordinateSystem,dc as WebGLCubeRenderTarget,ar as WebGLRenderTarget,c_ as WebGLRenderer,Sg as WebGLUtils,ki as WebGPUCoordinateSystem,sn as WebXRController,ho as WrapAroundEnding,lo as ZeroCurvatureEnding,Nc as ZeroFactor,co as ZeroSlopeEnding,lh as createCanvasElement,be as error,Oa as log,Me as warn,bs as warnOnce};
//# sourceMappingURL=three.module-D11lbdI5-Dg0N0xcY.js.map
