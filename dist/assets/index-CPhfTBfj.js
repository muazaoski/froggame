var Vp=Object.defineProperty;var Hp=(r,e,t)=>e in r?Vp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ao=(r,e,t)=>Hp(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wc="181",Gp=0,Hh=1,Wp=2,Xp=0,Xc=1,$o=2,On=3,Ei=0,nn=1,fn=2,kt=0,Gs=1,zl=2,Gh=3,Wh=4,Vl=5,bi=100,qp=101,jp=102,$p=103,Yp=104,Hl=200,Kp=201,Zp=202,Jp=203,Gl=204,Wl=205,xf=206,Qp=207,vf=208,em=209,tm=210,nm=211,im=212,sm=213,rm=214,Xl=0,ql=1,jl=2,js=3,$l=4,Yl=5,Kl=6,Zl=7,qc=0,om=1,am=2,Wi=0,yf=1,_f=2,bf=3,jc=4,wf=5,Mf=6,Sf=7,Xh="attached",lm="detached",Ef=300,$s=301,Ys=302,Jl=303,Ql=304,Ma=306,Ks=1e3,qn=1001,la=1002,Vt=1003,Tf=1004,Pr=1005,Kt=1006,Yo=1007,wi=1008,Jn=1009,Af=1010,Cf=1011,zr=1012,$c=1013,xs=1014,Tn=1015,Ti=1016,Yc=1017,Kc=1018,Zs=1020,Rf=35902,Lf=35899,Pf=1021,If=1022,pn=1023,Vr=1026,Js=1027,Zc=1028,Jc=1029,Qc=1030,eh=1031,th=1033,Ko=33776,Zo=33777,Jo=33778,Qo=33779,ec=35840,tc=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37808,lc=37809,cc=37810,hc=37811,uc=37812,dc=37813,fc=37814,pc=37815,mc=37816,gc=37817,xc=37818,vc=37819,yc=37820,_c=37821,bc=36492,wc=36494,Mc=36495,Sc=36283,Ec=36284,Tc=36285,Ac=36286,Hr=2300,Gr=2301,Ga=2302,qh=2400,jh=2401,$h=2402,cm=2500,hm=0,Df=1,Cc=2,um=3200,dm=3201,Sa=0,fm=1,zi="",zt="srgb",Zt="srgb-linear",ca="linear",at="srgb",ws=7680,Yh=519,pm=512,mm=513,gm=514,Nf=515,xm=516,vm=517,ym=518,_m=519,Rc=35044,Kh="300 es",jn=2e3,ha=2001;function Ff(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Wr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bm(){const r=Wr("canvas");return r.style.display="block",r}const Zh={};function ua(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ae(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Xe(...r){const e="THREE."+r.shift();console.error(e,...r)}function Xr(...r){const e=r.join(" ");e in Zh||(Zh[e]=!0,Ae(...r))}function wm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jh=1234567;const Ur=Math.PI/180,Qs=180/Math.PI;function Rn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[r&255]+Ht[r>>8&255]+Ht[r>>16&255]+Ht[r>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function nh(r,e){return(r%e+e)%e}function Mm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Sm(r,e,t){return r!==e?(t-r)/(e-r):0}function Br(r,e,t){return(1-t)*r+t*e}function Em(r,e,t,n){return Br(r,e,1-Math.exp(-t*n))}function Tm(r,e=1){return e-Math.abs(nh(r,e*2)-e)}function Am(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Cm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Rm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Lm(r,e){return r+Math.random()*(e-r)}function Pm(r){return r*(.5-Math.random())}function Im(r){r!==void 0&&(Jh=r);let e=Jh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dm(r){return r*Ur}function Nm(r){return r*Qs}function Fm(r){return(r&r-1)===0&&r!==0}function Um(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Bm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Om(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ot={DEG2RAD:Ur,RAD2DEG:Qs,generateUUID:Rn,clamp:je,euclideanModulo:nh,mapLinear:Mm,inverseLerp:Sm,lerp:Br,damp:Em,pingpong:Tm,smoothstep:Am,smootherstep:Cm,randInt:Rm,randFloat:Lm,randFloatSpread:Pm,seededRandom:Im,degToRad:Dm,radToDeg:Nm,isPowerOfTwo:Fm,ceilPowerOfTwo:Um,floorPowerOfTwo:Bm,setQuaternionFromProperEuler:Om,normalize:lt,denormalize:Mn};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let ln=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],m=s[o+2],x=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){const v=Math.acos(g),y=Math.sin(v);p=Math.sin(p*v)/y,a=Math.sin(a*v)/y,l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+x*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+x*a;const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new L,Qh=new ln;class Ge{constructor(e,t,n,i,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],v=i[1],y=i[4],b=i[7],A=i[2],w=i[5],R=i[8];return s[0]=o*x+a*v+l*A,s[3]=o*g+a*y+l*w,s[6]=o*p+a*b+l*R,s[1]=c*x+h*v+u*A,s[4]=c*g+h*y+u*w,s[7]=c*p+h*b+u*R,s[2]=d*x+f*v+m*A,s[5]=d*g+f*y+m*w,s[8]=d*p+f*b+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new Ge,eu=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function km(){const r={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(i.r=Ws(i.r),i.g=Ws(i.g),i.b=Ws(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zi?ca:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Zt]:{primaries:e,whitePoint:n,transfer:ca,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),r}const tt=km();function Si(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ms;class zm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=Wr("canvas")),Ms.width=e.width,Ms.height=e.height;const i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Si(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vm=0;class ih{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(qa(i[o].image)):s.push(qa(i[o]))}else s=qa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function qa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let Hm=0;const ja=new L;class Ft extends ar{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=qn,i=qn,s=Kt,o=wi,a=pn,l=Jn,c=Ft.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Rn(),this.name="",this.source=new ih(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ja).x}get height(){return this.source.getSize(ja).y}get depth(){return this.source.getSize(ja).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ef)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Ef;Ft.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(f+1)/2,A=(p+1)/2,w=(h+d)/4,R=(u+x)/4,D=(m+g)/4;return y>b&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=R/n):b>A?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=w/i,s=D/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=R/s,i=D/s),this.set(n,i,s,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gm extends ar{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Ft(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ih(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends Gm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uf extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wm extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(s,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),co.subVectors(this.max,gr),Ss.subVectors(e.a,gr),Es.subVectors(e.b,gr),Ts.subVectors(e.c,gr),Ri.subVectors(Es,Ss),Li.subVectors(Ts,Es),ts.subVectors(Ss,Ts);let t=[0,-Ri.z,Ri.y,0,-Li.z,Li.y,0,-ts.z,ts.y,Ri.z,0,-Ri.x,Li.z,0,-Li.x,ts.z,0,-ts.x,-Ri.y,Ri.x,0,-Li.y,Li.x,0,-ts.y,ts.x,0];return!$a(t,Ss,Es,Ts,co)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,Ss,Es,Ts,co))?!1:(ho.crossVectors(Ri,Li),t=[ho.x,ho.y,ho.z],$a(t,Ss,Es,Ts,co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ai=[new L,new L,new L,new L,new L,new L,new L,new L],vn=new L,lo=new ti,Ss=new L,Es=new L,Ts=new L,Ri=new L,Li=new L,ts=new L,gr=new L,co=new L,ho=new L,ns=new L;function $a(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ns.fromArray(r,s);const a=i.x*Math.abs(ns.x)+i.y*Math.abs(ns.y)+i.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Xm=new ti,xr=new L,Ya=new L;let ni=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Ya)),this.expandByPoint(xr.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};const li=new L,Ka=new L,uo=new L,Pi=new L,Za=new L,fo=new L,Ja=new L;let $r=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ka.copy(e).add(t).multiplyScalar(.5),uo.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Ka);const s=e.distanceTo(t)*.5,o=-this.direction.dot(uo),a=Pi.dot(this.direction),l=-Pi.dot(uo),c=Pi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ka).addScaledVector(uo,d),f}intersectSphere(e,t){li.subVectors(e.center,this.origin);const n=li.dot(this.direction),i=li.dot(li)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,i,s){Za.subVectors(t,e),fo.subVectors(n,e),Ja.crossVectors(Za,fo);let o=this.direction.dot(Ja),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(fo.crossVectors(Pi,fo));if(l<0)return null;const c=a*this.direction.dot(Za.cross(Pi));if(c<0||l+c>o)return null;const h=-a*Pi.dot(Ja);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ke{constructor(e,t,n,i,s,o,a,l,c,h,u,d,f,m,x,g){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,f,m,x,g)}set(e,t,n,i,s,o,a,l,c,h,u,d,f,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qm,e,jm)}lookAt(e,t,n){const i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),Ii.crossVectors(n,on),Ii.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ii.crossVectors(n,on)),Ii.normalize(),po.crossVectors(on,Ii),i[0]=Ii.x,i[4]=po.x,i[8]=on.x,i[1]=Ii.y,i[5]=po.y,i[9]=on.y,i[2]=Ii.z,i[6]=po.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],y=n[7],b=n[11],A=n[15],w=i[0],R=i[4],D=i[8],E=i[12],M=i[1],I=i[5],O=i[9],N=i[13],V=i[2],k=i[6],B=i[10],Y=i[14],W=i[3],K=i[7],ie=i[11],me=i[15];return s[0]=o*w+a*M+l*V+c*W,s[4]=o*R+a*I+l*k+c*K,s[8]=o*D+a*O+l*B+c*ie,s[12]=o*E+a*N+l*Y+c*me,s[1]=h*w+u*M+d*V+f*W,s[5]=h*R+u*I+d*k+f*K,s[9]=h*D+u*O+d*B+f*ie,s[13]=h*E+u*N+d*Y+f*me,s[2]=m*w+x*M+g*V+p*W,s[6]=m*R+x*I+g*k+p*K,s[10]=m*D+x*O+g*B+p*ie,s[14]=m*E+x*N+g*Y+p*me,s[3]=v*w+y*M+b*V+A*W,s[7]=v*R+y*I+b*k+A*K,s[11]=v*D+y*O+b*B+A*ie,s[15]=v*E+y*N+b*Y+A*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+g*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=u*g*c-x*d*c+x*l*f-a*g*f-u*l*p+a*d*p,y=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,b=h*x*c-m*u*c+m*a*f-o*x*f-h*a*p+o*u*p,A=m*u*l-h*x*l-m*a*d+o*x*d+h*a*g-o*u*g,w=t*v+n*y+i*b+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=v*R,e[1]=(x*d*s-u*g*s-x*i*f+n*g*f+u*i*p-n*d*p)*R,e[2]=(a*g*s-x*l*s+x*i*c-n*g*c-a*i*p+n*l*p)*R,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*R,e[4]=y*R,e[5]=(h*g*s-m*d*s+m*i*f-t*g*f-h*i*p+t*d*p)*R,e[6]=(m*l*s-o*g*s-m*i*c+t*g*c+o*i*p-t*l*p)*R,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*f+t*l*f)*R,e[8]=b*R,e[9]=(m*u*s-h*x*s-m*n*f+t*x*f+h*n*p-t*u*p)*R,e[10]=(o*x*s-m*a*s+m*n*c-t*x*c-o*n*p+t*a*p)*R,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*R,e[12]=A*R,e[13]=(h*x*i-m*u*i+m*n*d-t*x*d-h*n*g+t*u*g)*R,e[14]=(m*a*i-o*x*i-m*n*l+t*x*l+o*n*g-t*a*g)*R,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,x=o*h,g=o*u,p=a*u,v=l*c,y=l*h,b=l*u,A=n.x,w=n.y,R=n.z;return i[0]=(1-(x+p))*A,i[1]=(f+b)*A,i[2]=(m-y)*A,i[3]=0,i[4]=(f-b)*w,i[5]=(1-(d+p))*w,i[6]=(g+v)*w,i[7]=0,i[8]=(m+y)*R,i[9]=(g-v)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=As.set(i[0],i[1],i[2]).length();const o=As.set(i[4],i[5],i[6]).length(),a=As.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],yn.copy(this);const c=1/s,h=1/o,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=jn,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===jn)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ha)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=jn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===jn)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===ha)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const As=new L,yn=new ke,qm=new L(0,0,0),jm=new L(1,1,1),Ii=new L,po=new L,on=new L,nu=new ke,iu=new ln;class Pn{constructor(e=0,t=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $m=0;const su=new L,Cs=new ln,ci=new ke,mo=new L,vr=new L,Ym=new L,Km=new ln,ru=new L(1,0,0),ou=new L(0,1,0),au=new L(0,0,1),lu={type:"added"},Zm={type:"removed"},Rs={type:"childadded",child:null},Qa={type:"childremoved",child:null};class vt extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new L,t=new Pn,n=new ln,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ge}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(au,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mo.copy(e):mo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(vr,mo,this.up):ci.lookAt(mo,vr,this.up),this.quaternion.setFromRotationMatrix(ci),i&&(ci.extractRotation(i.matrixWorld),Cs.setFromRotationMatrix(ci),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lu),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lu),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Km,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new L(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new L,hi=new L,el=new L,ui=new L,Ls=new L,Ps=new L,cu=new L,tl=new L,nl=new L,il=new L,sl=new rt,rl=new rt,ol=new rt;class Sn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_n.subVectors(i,t),hi.subVectors(n,t),el.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(hi),l=_n.dot(el),c=hi.dot(hi),h=hi.dot(el),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return sl.setScalar(0),rl.setScalar(0),ol.setScalar(0),sl.fromBufferAttribute(e,t),rl.fromBufferAttribute(e,n),ol.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(sl,s.x),o.addScaledVector(rl,s.y),o.addScaledVector(ol,s.z),o}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),hi.subVectors(e,t),_n.cross(hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),_n.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ls.subVectors(i,n),Ps.subVectors(s,n),tl.subVectors(e,n);const l=Ls.dot(tl),c=Ps.dot(tl);if(l<=0&&c<=0)return t.copy(n);nl.subVectors(e,i);const h=Ls.dot(nl),u=Ps.dot(nl);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ls,o);il.subVectors(e,s);const f=Ls.dot(il),m=Ps.dot(il);if(m>=0&&f<=m)return t.copy(s);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ps,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return cu.subVectors(s,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(cu,a);const p=1/(g+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Ls,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},go={h:0,s:0,l:0};function al(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=nh(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=al(o,s,e+1/3),this.g=al(o,s,e),this.b=al(o,s,e-1/3)}return tt.colorSpaceToWorking(this,i),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=Bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return tt.workingToColorSpace(Gt.copy(this),e),Math.round(je(Gt.r*255,0,255))*65536+Math.round(je(Gt.g*255,0,255))*256+Math.round(je(Gt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,i=Gt.g,s=Gt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=zt){tt.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,i=Gt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(go);const n=Br(Di.h,go.h,t),i=Br(Di.s,go.s,t),s=Br(Di.l,go.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Se;Se.NAMES=Bf;let Jm=0,mn=class extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Gs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Wl,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gl&&(n.blendSrc=this.blendSrc),this.blendDst!==Wl&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class tn extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new L,xo=new Ce;let Qm=0;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}}class Of extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kf extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let eg=0;const hn=new ke,ll=new vt,Is=new L,an=new ti,yr=new ti,Nt=new L;class Ut extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ff(e)?kf:Of)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(an.min,yr.min),an.expandByPoint(Nt),Nt.addVectors(an.max,yr.max),an.expandByPoint(Nt)):(an.expandByPoint(yr.min),an.expandByPoint(yr.max))}an.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Nt.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),Nt.add(Is)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new L,l[D]=new L;const c=new L,h=new L,u=new L,d=new Ce,f=new Ce,m=new Ce,x=new L,g=new L;function p(D,E,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,D),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,M),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),a[D].add(x),a[E].add(x),a[M].add(x),l[D].add(g),l[E].add(g),l[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,E=v.length;D<E;++D){const M=v[D],I=M.start,O=M.count;for(let N=I,V=I+O;N<V;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new L,b=new L,A=new L,w=new L;function R(D){A.fromBufferAttribute(i,D),w.copy(A);const E=a[D];y.copy(E),y.sub(A.multiplyScalar(A.dot(E))).normalize(),b.crossVectors(w,E);const I=b.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,I)}for(let D=0,E=v.length;D<E;++D){const M=v[D],I=M.start,O=M.count;for(let N=I,V=I+O;N<V;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new qt(d,h,u)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new ke,is=new $r,vo=new ni,uu=new L,yo=new L,_o=new L,bo=new L,cl=new L,wo=new L,du=new L,Mo=new L;class dt extends vt{constructor(e=new Ut,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(cl.fromBufferAttribute(u,e),o?wo.addScaledVector(cl,h):wo.addScaledVector(cl.sub(t),h))}t.add(wo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),is.copy(e.ray).recast(e.near),!(vo.containsPoint(is.origin)===!1&&(is.intersectSphere(vo,uu)===null||is.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(hu.copy(s).invert(),is.copy(e.ray).applyMatrix4(hu),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let b=v,A=y;b<A;b+=3){const w=a.getX(b),R=a.getX(b+1),D=a.getX(b+2);i=So(this,p,e,n,c,h,u,w,R,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const v=a.getX(g),y=a.getX(g+1),b=a.getX(g+2);i=So(this,o,e,n,c,h,u,v,y,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=v,A=y;b<A;b+=3){const w=b,R=b+1,D=b+2;i=So(this,p,e,n,c,h,u,w,R,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const v=g,y=g+1,b=g+2;i=So(this,o,e,n,c,h,u,v,y,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function tg(r,e,t,n,i,s,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Ei,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Mo);return c<t.near||c>t.far?null:{distance:c,point:Mo.clone(),object:r}}function So(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,yo),r.getVertexPosition(l,_o),r.getVertexPosition(c,bo);const h=tg(r,e,t,n,yo,_o,bo,du);if(h){const u=new L;Sn.getBarycoord(du,yo,_o,bo,u),i&&(h.uv=Sn.getInterpolatedAttribute(i,a,l,c,u,new Ce)),s&&(h.uv1=Sn.getInterpolatedAttribute(s,a,l,c,u,new Ce)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Sn.getNormal(yo,_o,bo,d.normal),h.face=d,h.barycoord=u}return h}class Yi extends Ut{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2));function m(x,g,p,v,y,b,A,w,R,D,E){const M=b/R,I=A/D,O=b/2,N=A/2,V=w/2,k=R+1,B=D+1;let Y=0,W=0;const K=new L;for(let ie=0;ie<B;ie++){const me=ie*I-N;for(let oe=0;oe<k;oe++){const Qe=oe*M-O;K[x]=Qe*v,K[g]=me*y,K[p]=V,c.push(K.x,K.y,K.z),K[x]=0,K[g]=0,K[p]=w>0?1:-1,h.push(K.x,K.y,K.z),u.push(oe/R),u.push(1-ie/D),Y+=1}}for(let ie=0;ie<D;ie++)for(let me=0;me<R;me++){const oe=d+me+k*ie,Qe=d+me+k*(ie+1),st=d+(me+1)+k*(ie+1),ot=d+(me+1)+k*ie;l.push(oe,Qe,ot),l.push(Qe,st,ot),W+=6}a.addGroup(f,W,E),f+=W,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(r){const e={};for(let t=0;t<r.length;t++){const n=er(r[t]);for(const i in n)e[i]=n[i]}return e}function ng(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function zf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const ms={clone:er,merge:Yt};var ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ig,this.fragmentShader=sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vf extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new L,fu=new Ce,pu=new Ce;class Wt extends Vf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,fu,pu),t.subVectors(pu,fu)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ds=-90,Ns=1;class rg extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(Ds,Ns,e,t);i.layers=this.layers,this.add(i);const s=new Wt(Ds,Ns,e,t);s.layers=this.layers,this.add(s);const o=new Wt(Ds,Ns,e,t);o.layers=this.layers,this.add(o);const a=new Wt(Ds,Ns,e,t);a.layers=this.layers,this.add(a);const l=new Wt(Ds,Ns,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Ds,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Hf extends Ft{constructor(e=[],t=$s,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class og extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Hf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yi(5,5,5),s=new Xt({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:kt});s.uniforms.tEquirect.value=t;const o=new dt(i,s),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=Kt),new rg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class An extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ag={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ag)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class rh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new rh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mu extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new L;class oh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new oh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gu=new L,xu=new rt,vu=new rt,cg=new L,yu=new ke,Eo=new L,ul=new ni,_u=new ke,dl=new $r;class hg extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xh,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Eo),this.boundingBox.expandByPoint(Eo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Eo),this.boundingSphere.expandByPoint(Eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(i),e.ray.intersectsSphere(ul)!==!1&&(_u.copy(i).invert(),dl.copy(e.ray).applyMatrix4(_u),!(this.boundingBox!==null&&dl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Xh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;xu.fromBufferAttribute(i.attributes.skinIndex,e),vu.fromBufferAttribute(i.attributes.skinWeight,e),gu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=vu.getComponent(s);if(o!==0){const a=xu.getComponent(s);yu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(cg.copy(gu).applyMatrix4(yu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gf extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ah extends Ft{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Vt,h=Vt,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bu=new ke,ug=new ke;class lh{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:ug;bu.multiplyMatrices(a,t[s]),bu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new lh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ah(t,e,e,pn,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(Ae("Skeleton: No bone found with UUID:",s),o=new Gf),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Lc extends qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fs=new ke,wu=new ke,To=[],Mu=new ti,dg=new ke,_r=new dt,br=new ni;class fg extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,dg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Mu.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Mu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),br.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Fs),wu.multiplyMatrices(n,Fs),_r.matrixWorld=wu,_r.raycast(e,To);for(let o=0,a=To.length;o<a;o++){const l=To[o];l.instanceId=s,l.object=this,t.push(l)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ah(new Float32Array(i*this.count),i,this.count,Zc,Tn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fl=new L,pg=new L,mg=new Ge;let yi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fl.subVectors(n,t).cross(pg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mg.getNormalMatrix(e),i=this.coplanarPoint(fl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const ss=new ni,gg=new Ce(.5,.5),Ao=new L;class ch{constructor(e=new yi,t=new yi,n=new yi,i=new yi,s=new yi,o=new yi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],x=s[9],g=s[10],p=s[11],v=s[12],y=s[13],b=s[14],A=s[15];if(i[0].setComponents(c-o,f-h,p-m,A-v).normalize(),i[1].setComponents(c+o,f+h,p+m,A+v).normalize(),i[2].setComponents(c+a,f+u,p+x,A+y).normalize(),i[3].setComponents(c-a,f-u,p-x,A-y).normalize(),n)i[4].setComponents(l,d,g,b).normalize(),i[5].setComponents(c-l,f-d,p-g,A-b).normalize();else if(i[4].setComponents(c-l,f-d,p-g,A-b).normalize(),t===jn)i[5].setComponents(c+l,f+d,p+g,A+b).normalize();else if(t===ha)i[5].setComponents(l,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);const t=gg.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ao.x=i.normal.x>0?e.max.x:e.min.x,Ao.y=i.normal.y>0?e.max.y:e.min.y,Ao.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hh extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const da=new L,fa=new L,Su=new ke,wr=new $r,Co=new ni,pl=new L,Eu=new L;class Ea extends vt{constructor(e=new Ut,t=new hh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)da.fromBufferAttribute(t,i-1),fa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=da.distanceTo(fa);e.setAttribute("lineDistance",new mt(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(i),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;Su.copy(i).invert(),wr.copy(e.ray).applyMatrix4(Su);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){const p=h.getX(x),v=h.getX(x+1),y=Ro(this,e,wr,l,p,v,x);y&&t.push(y)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(f),p=Ro(this,e,wr,l,x,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){const p=Ro(this,e,wr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Ro(this,e,wr,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ro(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(da.fromBufferAttribute(a,i),fa.fromBufferAttribute(a,s),t.distanceSqToSegment(da,fa,pl,Eu)>n)return;pl.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(pl);if(!(c<e.near||c>e.far))return{distance:c,point:Eu.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Tu=new L,Au=new L;class xg extends Ea{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Tu.fromBufferAttribute(t,i),Au.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tu.distanceTo(Au);e.setAttribute("lineDistance",new mt(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vg extends Ea{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Wf extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cu=new ke,Pc=new $r,Lo=new ni,Po=new L;class yg extends vt{constructor(e=new Ut,t=new Wf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(i),Lo.radius+=s,e.ray.intersectsSphere(Lo)===!1)return;Cu.copy(i).invert(),Pc.copy(e.ray).applyMatrix4(Cu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){const g=c.getX(m);Po.fromBufferAttribute(u,g),Ru(Po,g,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Po.fromBufferAttribute(u,m),Ru(Po,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ru(r,e,t,n,i,s,o){const a=Pc.distanceSqToPoint(r);if(a<t){const l=new L;Pc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class uh extends Ft{constructor(e,t,n=xs,i,s,o,a=Vt,l=Vt,c,h=Vr,u=1){if(h!==Vr&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ih(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xf extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dh extends Ut{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new L,h=new Ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ta extends Ut{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const x=[],g=n/2;let p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function v(){const b=new L,A=new L;let w=0;const R=(t-e)/n;for(let D=0;D<=s;D++){const E=[],M=D/s,I=M*(t-e)+e;for(let O=0;O<=i;O++){const N=O/i,V=N*l+a,k=Math.sin(V),B=Math.cos(V);A.x=I*k,A.y=-M*n+g,A.z=I*B,u.push(A.x,A.y,A.z),b.set(k,R,B).normalize(),d.push(b.x,b.y,b.z),f.push(N,1-M),E.push(m++)}x.push(E)}for(let D=0;D<i;D++)for(let E=0;E<s;E++){const M=x[E][D],I=x[E+1][D],O=x[E+1][D+1],N=x[E][D+1];(e>0||E!==0)&&(h.push(M,I,N),w+=3),(t>0||E!==s-1)&&(h.push(I,O,N),w+=3)}c.addGroup(p,w,0),p+=w}function y(b){const A=m,w=new Ce,R=new L;let D=0;const E=b===!0?e:t,M=b===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;const I=m;for(let O=0;O<=i;O++){const V=O/i*l+a,k=Math.cos(V),B=Math.sin(V);R.x=E*B,R.y=g*M,R.z=E*k,u.push(R.x,R.y,R.z),d.push(0,M,0),w.x=k*.5+.5,w.y=B*.5*M+.5,f.push(w.x,w.y),m++}for(let O=0;O<i;O++){const N=A+O,V=I+O;b===!0?h.push(V,V+1,N):h.push(V+1,V,N),D+=3}c.addGroup(p,D,b===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pa extends Ta{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new pa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fh extends Ut{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(s.slice(),3)),this.setAttribute("uv",new mt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new L,b=new L,A=new L;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],b),f(t[w+2],A),l(y,b,A,v)}function l(v,y,b,A){const w=A+1,R=[];for(let D=0;D<=w;D++){R[D]=[];const E=v.clone().lerp(b,D/w),M=y.clone().lerp(b,D/w),I=w-D;for(let O=0;O<=I;O++)O===0&&D===w?R[D][O]=E:R[D][O]=E.clone().lerp(M,O/I)}for(let D=0;D<w;D++)for(let E=0;E<2*(w-D)-1;E++){const M=Math.floor(E/2);E%2===0?(d(R[D][M+1]),d(R[D+1][M]),d(R[D][M])):(d(R[D][M+1]),d(R[D+1][M+1]),d(R[D+1][M]))}}function c(v){const y=new L;for(let b=0;b<s.length;b+=3)y.x=s[b+0],y.y=s[b+1],y.z=s[b+2],y.normalize().multiplyScalar(v),s[b+0]=y.x,s[b+1]=y.y,s[b+2]=y.z}function h(){const v=new L;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const b=g(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;o.push(b,1-A)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],b=o[v+2],A=o[v+4],w=Math.max(y,b,A),R=Math.min(y,b,A);w>.9&&R<.1&&(y<.2&&(o[v+0]+=1),b<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,y){const b=v*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function m(){const v=new L,y=new L,b=new L,A=new L,w=new Ce,R=new Ce,D=new Ce;for(let E=0,M=0;E<s.length;E+=9,M+=6){v.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),b.set(s[E+6],s[E+7],s[E+8]),w.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),A.copy(v).add(y).add(b).divideScalar(3);const I=g(A);x(w,M+0,v,I),x(R,M+2,y,I),x(D,M+4,b,I)}}function x(v,y,b,A){A<0&&v.x===1&&(o[y]=v.x-1),b.x===0&&b.z===0&&(o[y]=A/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fh(e.vertices,e.indices,e.radius,e.details)}}class ph extends fh{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ph(e.radius,e.detail)}}class Yr extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const v=p*d-o;for(let y=0;y<c;y++){const b=y*u-s;m.push(b,-v,0),x.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,b=v+c*(p+1),A=v+1+c*(p+1),w=v+1+c*p;f.push(y,b,w),f.push(b,A,w)}this.setIndex(f),this.setAttribute("position",new mt(m,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.widthSegments,e.heightSegments)}}class mh extends Ut{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new L,m=new Ce;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const p=s+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){const g=x*(n+1);for(let p=0;p<n;p++){const v=p+g,y=v,b=v+n+1,A=v+n+2,w=v+1;a.push(y,b,w),a.push(b,A,w)}}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ji extends Ut{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let b=0;p===0&&o===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let A=0;A<=t;A++){const w=A/t;u.x=-e*Math.cos(i+w*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+w*s)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(w+b,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=h[p][v+1],b=h[p][v],A=h[p+1][v],w=h[p+1][v+1];(p!==0||o>0)&&f.push(y,b,w),(p!==n-1||l<Math.PI)&&f.push(b,A,w)}this.setIndex(f),this.setAttribute("position",new mt(m,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _g extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kn extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ii extends Kn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bg extends mn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class wg extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mg extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sg extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Io(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Eg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Tg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Lu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function qf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Kr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ag extends Kr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qh,endingEnd:qh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case jh:s=e,a=2*t-n;break;case $h:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jh:o=e,l=2*n-t;break;case $h:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,b=f*g-f*x;for(let A=0;A!==a;++A)s[A]=p*o[h+A]+v*o[c+A]+y*o[l+A]+b*o[u+A];return s}}class Cg extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class Rg extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class In{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Io(t,this.TimeBufferType),this.values=Io(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Io(e.times,Array),values:Io(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ag(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hr:t=this.InterpolantFactoryMethodDiscrete;break;case Gr:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return Gr;case this.InterpolantFactoryMethodSmooth:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Eg(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ga,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Gr;class lr extends In{constructor(e,t,n){super(e,t,n)}}lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Hr;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class jf extends In{constructor(e,t,n,i){super(e,t,n,i)}}jf.prototype.ValueTypeName="color";class tr extends In{constructor(e,t,n,i){super(e,t,n,i)}}tr.prototype.ValueTypeName="number";class Lg extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)ln.slerpFlat(s,0,o,c-a,o,c,l);return s}}class nr extends In{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Lg(this.times,this.values,this.getValueSize(),e)}}nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;class cr extends In{constructor(e,t,n){super(e,t,n)}}cr.prototype.ValueTypeName="string";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=Hr;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends In{constructor(e,t,n,i){super(e,t,n,i)}}ir.prototype.ValueTypeName="vector";class Pg{constructor(e="",t=-1,n=[],i=cm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Rn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Dg(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(In.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=Tg(l);l=Lu(l,1,h),c=Lu(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new tr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Ae("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Xe("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,x){if(f.length!==0){const g=[],p=[];qf(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(const x in f){const g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){const y=d[m];g.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new tr(".morphTargetInfluence["+x+"]",g,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(ir,f+".position",d,"pos",i),n(nr,f+".quaternion",d,"rot",i),n(ir,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Ig(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return ir;case"color":return jf;case"quaternion":return nr;case"bool":case"boolean":return lr;case"string":return cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Dg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ig(r.type);if(r.times===void 0){const t=[],n=[];qf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Mi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ng{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Fg=new Ng;class hr{constructor(e){this.manager=e!==void 0?e:Fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}hr.DEFAULT_MATERIAL_NAME="__DEFAULT";const di={};class Ug extends Error{constructor(e,t){super(e),this.response=t}}class $f extends hr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Mi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(di[e]!==void 0){di[e].push({onLoad:t,onProgress:n,onError:i});return}di[e]=[],di[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=di[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let x=0;const g=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:b})=>{if(y)p.close();else{x+=b.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let w=0,R=h.length;w<R;w++){const D=h[w];D.onProgress&&D.onProgress(A)}p.enqueue(b),v()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Ug(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Mi.add(`file:${e}`,c);const h=di[e];delete di[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=di[e];if(h===void 0)throw this.manager.itemError(e),c;delete di[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Us=new WeakMap;class Bg extends hr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Mi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=Us.get(o);u===void 0&&(u=[],Us.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=Wr("img");function l(){h(),t&&t(this);const u=Us.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Us.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),Mi.remove(`image:${e}`);const d=Us.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}Us.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Mi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Og extends hr{constructor(e){super(e)}load(e,t,n,i){const s=new Ft,o=new Bg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Zr extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class kg extends Zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ml=new ke,Pu=new L,Iu=new L;class gh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ch,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pu),Iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iu),t.updateMatrixWorld(),ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zg extends gh{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Qs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vg extends Zr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new zg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Du=new ke,Mr=new L,gl=new L;class Hg extends gh{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mr),gl.copy(n.position),gl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(gl),n.updateMatrixWorld(),i.makeTranslation(-Mr.x,-Mr.y,-Mr.z),Du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du,n.coordinateSystem,n.reversedDepth)}}class Yf extends Zr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Aa extends Vf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gg extends gh{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ea extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Gg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nu extends Zr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Or{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const xl=new WeakMap;class Wg extends hr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Mi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(xl.has(o)===!0)i&&i(xl.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Mi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),xl.set(l,c),Mi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Mi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Xg extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const xh="\\[\\]\\.:\\/",jg=new RegExp("["+xh+"]","g"),vh="[^"+xh+"]",$g="[^"+xh.replace("\\.","")+"]",Yg=/((?:WC+[\/:])*)/.source.replace("WC",vh),Kg=/(WCOD+)?/.source.replace("WCOD",$g),Zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),Jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),Qg=new RegExp("^"+Yg+Kg+Zg+Jg+"$"),e0=["material","materials","bones","map"];class t0{constructor(e,t,n){const i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(e){const t=Qg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);e0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=t0;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Fu=new ke;class n0{constructor(e,t,n=0,i=1/0){this.ray=new $r(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fu),this}intersectObject(e,t=!0,n=[]){return Ic(e,this,n,t),n.sort(Uu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ic(e[i],this,n,t);return n.sort(Uu),n}}function Uu(r,e){return r.distance-e.distance}function Ic(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Ic(s[o],e,t,!0)}}function Bu(r,e,t,n){const i=i0(n);switch(t){case Pf:return r*e;case Zc:return r*e/i.components*i.byteLength;case Jc:return r*e/i.components*i.byteLength;case Qc:return r*e*2/i.components*i.byteLength;case eh:return r*e*2/i.components*i.byteLength;case If:return r*e*3/i.components*i.byteLength;case pn:return r*e*4/i.components*i.byteLength;case th:return r*e*4/i.components*i.byteLength;case Ko:case Zo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jo:case Qo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(r,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(r,8)*Math.max(e,8)/2;case sc:case rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case cc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case hc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case uc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case dc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case fc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case pc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case mc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case gc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case vc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case yc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case bc:case wc:case Mc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Sc:case Ec:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Tc:case Ac:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i0(r){switch(r){case Jn:case Af:return{byteLength:1,components:1};case zr:case Cf:case Ti:return{byteLength:2,components:1};case Yc:case Kc:return{byteLength:2,components:4};case xs:case $c:case Tn:return{byteLength:4,components:1};case Rf:case Lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function s0(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var r0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o0=`#ifdef USE_ALPHAHASH
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
#endif`,a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
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
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v0=`#ifdef USE_IRIDESCENCE
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
#endif`,y0=`#ifdef USE_BUMPMAP
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,C0=`#define PI 3.141592653589793
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
} // validated`,R0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L0=`vec3 transformedNormal = objectNormal;
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
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F0="gl_FragColor = linearToOutputTexel( gl_FragColor );",U0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q0=`#ifdef USE_GRADIENTMAP
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
}`,j0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K0=`uniform bool receiveShadow;
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
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ix=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sx=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,ox=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,px=`#if defined( USE_POINTS_UV )
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
#endif`,mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`#ifdef USE_MORPHTARGETS
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
#endif`,bx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ax=`#ifdef USE_NORMALMAP
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
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ix=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ux=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Gx=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xx=`#ifdef USE_SKINNING
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
#endif`,qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jx=`#ifdef USE_SKINNING
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
#endif`,$x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jx=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qx=`#ifdef USE_TRANSMISSION
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
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rv=`uniform sampler2D t2D;
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
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,av=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`#include <common>
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
}`,uv=`#if DEPTH_PACKING == 3200
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
}`,dv=`#define DISTANCE
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
}`,fv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`uniform float scale;
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
}`,xv=`uniform vec3 diffuse;
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
}`,vv=`#include <common>
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
}`,yv=`uniform vec3 diffuse;
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
}`,_v=`#define LAMBERT
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
}`,bv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,wv=`#define MATCAP
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
}`,Mv=`#define MATCAP
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
}`,Sv=`#define NORMAL
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
}`,Ev=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tv=`#define PHONG
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
}`,Av=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Cv=`#define STANDARD
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
}`,Rv=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Lv=`#define TOON
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
}`,Pv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Iv=`uniform float size;
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
}`,Dv=`uniform vec3 diffuse;
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
}`,Nv=`#include <common>
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
}`,Fv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Uv=`uniform float rotation;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:r0,alphahash_pars_fragment:o0,alphamap_fragment:a0,alphamap_pars_fragment:l0,alphatest_fragment:c0,alphatest_pars_fragment:h0,aomap_fragment:u0,aomap_pars_fragment:d0,batching_pars_vertex:f0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:x0,iridescence_fragment:v0,bumpmap_pars_fragment:y0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:M0,color_fragment:S0,color_pars_fragment:E0,color_pars_vertex:T0,color_vertex:A0,common:C0,cube_uv_reflection_fragment:R0,defaultnormal_vertex:L0,displacementmap_pars_vertex:P0,displacementmap_vertex:I0,emissivemap_fragment:D0,emissivemap_pars_fragment:N0,colorspace_fragment:F0,colorspace_pars_fragment:U0,envmap_fragment:B0,envmap_common_pars_fragment:O0,envmap_pars_fragment:k0,envmap_pars_vertex:z0,envmap_physical_pars_fragment:Z0,envmap_vertex:V0,fog_vertex:H0,fog_pars_vertex:G0,fog_fragment:W0,fog_pars_fragment:X0,gradientmap_pars_fragment:q0,lightmap_pars_fragment:j0,lights_lambert_fragment:$0,lights_lambert_pars_fragment:Y0,lights_pars_begin:K0,lights_toon_fragment:J0,lights_toon_pars_fragment:Q0,lights_phong_fragment:ex,lights_phong_pars_fragment:tx,lights_physical_fragment:nx,lights_physical_pars_fragment:ix,lights_fragment_begin:sx,lights_fragment_maps:rx,lights_fragment_end:ox,logdepthbuf_fragment:ax,logdepthbuf_pars_fragment:lx,logdepthbuf_pars_vertex:cx,logdepthbuf_vertex:hx,map_fragment:ux,map_pars_fragment:dx,map_particle_fragment:fx,map_particle_pars_fragment:px,metalnessmap_fragment:mx,metalnessmap_pars_fragment:gx,morphinstance_vertex:xx,morphcolor_vertex:vx,morphnormal_vertex:yx,morphtarget_pars_vertex:_x,morphtarget_vertex:bx,normal_fragment_begin:wx,normal_fragment_maps:Mx,normal_pars_fragment:Sx,normal_pars_vertex:Ex,normal_vertex:Tx,normalmap_pars_fragment:Ax,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Rx,clearcoat_pars_fragment:Lx,iridescence_pars_fragment:Px,opaque_fragment:Ix,packing:Dx,premultiplied_alpha_fragment:Nx,project_vertex:Fx,dithering_fragment:Ux,dithering_pars_fragment:Bx,roughnessmap_fragment:Ox,roughnessmap_pars_fragment:kx,shadowmap_pars_fragment:zx,shadowmap_pars_vertex:Vx,shadowmap_vertex:Hx,shadowmask_pars_fragment:Gx,skinbase_vertex:Wx,skinning_pars_vertex:Xx,skinning_vertex:qx,skinnormal_vertex:jx,specularmap_fragment:$x,specularmap_pars_fragment:Yx,tonemapping_fragment:Kx,tonemapping_pars_fragment:Zx,transmission_fragment:Jx,transmission_pars_fragment:Qx,uv_pars_fragment:ev,uv_pars_vertex:tv,uv_vertex:nv,worldpos_vertex:iv,background_vert:sv,background_frag:rv,backgroundCube_vert:ov,backgroundCube_frag:av,cube_vert:lv,cube_frag:cv,depth_vert:hv,depth_frag:uv,distanceRGBA_vert:dv,distanceRGBA_frag:fv,equirect_vert:pv,equirect_frag:mv,linedashed_vert:gv,linedashed_frag:xv,meshbasic_vert:vv,meshbasic_frag:yv,meshlambert_vert:_v,meshlambert_frag:bv,meshmatcap_vert:wv,meshmatcap_frag:Mv,meshnormal_vert:Sv,meshnormal_frag:Ev,meshphong_vert:Tv,meshphong_frag:Av,meshphysical_vert:Cv,meshphysical_frag:Rv,meshtoon_vert:Lv,meshtoon_frag:Pv,points_vert:Iv,points_frag:Dv,shadow_vert:Nv,shadow_frag:Fv,sprite_vert:Uv,sprite_frag:Bv},he={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Hn={basic:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Se(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Yt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Yt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Se(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Yt([he.points,he.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Yt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Yt([he.common,he.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Yt([he.sprite,he.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Yt([he.common,he.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Yt([he.lights,he.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Hn.physical={uniforms:Yt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Do={r:0,b:0,g:0},rs=new Pn,Ov=new ke;function kv(r,e,t,n,i,s,o){const a=new Se(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function x(y){let b=!1;const A=m(y);A===null?p(a,l):A&&A.isColor&&(p(A,1),b=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,b){const A=m(b);A&&(A.isCubeTexture||A.mapping===Ma)?(h===void 0&&(h=new dt(new Yi(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:er(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),rs.copy(b.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ov.makeRotationFromEuler(rs)),h.material.toneMapped=tt.getTransfer(A.colorSpace)!==at,(u!==A||d!==A.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new dt(new Yr(2,2),new Xt({name:"BackgroundMaterial",uniforms:er(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=tt.getTransfer(A.colorSpace)!==at,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,b){y.getRGB(Do,zf(r)),n.buffers.color.setClear(Do.r,Do.g,Do.b,b,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:g,dispose:v}}function zv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,I,O,N,V){let k=!1;const B=u(N,O,I);s!==B&&(s=B,c(s.object)),k=f(M,N,O,V),k&&m(M,N,O,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,b(M,I,O,N),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,I,O){const N=O.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let k=V[I.id];k===void 0&&(k={},V[I.id]=k);let B=k[N];return B===void 0&&(B=d(l()),k[N]=B),B}function d(M){const I=[],O=[],N=[];for(let V=0;V<t;V++)I[V]=0,O[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,I,O,N){const V=s.attributes,k=I.attributes;let B=0;const Y=O.getAttributes();for(const W in Y)if(Y[W].location>=0){const ie=V[W];let me=k[W];if(me===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),ie===void 0||ie.attribute!==me||me&&ie.data!==me.data)return!0;B++}return s.attributesNum!==B||s.index!==N}function m(M,I,O,N){const V={},k=I.attributes;let B=0;const Y=O.getAttributes();for(const W in Y)if(Y[W].location>=0){let ie=k[W];ie===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));const me={};me.attribute=ie,ie&&ie.data&&(me.data=ie.data),V[W]=me,B++}s.attributes=V,s.attributesNum=B,s.index=N}function x(){const M=s.newAttributes;for(let I=0,O=M.length;I<O;I++)M[I]=0}function g(M){p(M,0)}function p(M,I){const O=s.newAttributes,N=s.enabledAttributes,V=s.attributeDivisors;O[M]=1,N[M]===0&&(r.enableVertexAttribArray(M),N[M]=1),V[M]!==I&&(r.vertexAttribDivisor(M,I),V[M]=I)}function v(){const M=s.newAttributes,I=s.enabledAttributes;for(let O=0,N=I.length;O<N;O++)I[O]!==M[O]&&(r.disableVertexAttribArray(O),I[O]=0)}function y(M,I,O,N,V,k,B){B===!0?r.vertexAttribIPointer(M,I,O,V,k):r.vertexAttribPointer(M,I,O,N,V,k)}function b(M,I,O,N){x();const V=N.attributes,k=O.getAttributes(),B=I.defaultAttributeValues;for(const Y in k){const W=k[Y];if(W.location>=0){let K=V[Y];if(K===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){const ie=K.normalized,me=K.itemSize,oe=e.get(K);if(oe===void 0)continue;const Qe=oe.buffer,st=oe.type,ot=oe.bytesPerElement,Z=st===r.INT||st===r.UNSIGNED_INT||K.gpuType===$c;if(K.isInterleavedBufferAttribute){const ee=K.data,ye=ee.stride,He=K.offset;if(ee.isInstancedInterleavedBuffer){for(let Re=0;Re<W.locationSize;Re++)p(W.location+Re,ee.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Re=0;Re<W.locationSize;Re++)g(W.location+Re);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let Re=0;Re<W.locationSize;Re++)y(W.location+Re,me/W.locationSize,st,ie,ye*ot,(He+me/W.locationSize*Re)*ot,Z)}else{if(K.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)p(W.location+ee,K.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ee=0;ee<W.locationSize;ee++)g(W.location+ee);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let ee=0;ee<W.locationSize;ee++)y(W.location+ee,me/W.locationSize,st,ie,me*ot,me/W.locationSize*ee*ot,Z)}}else if(B!==void 0){const ie=B[Y];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(W.location,ie);break;case 3:r.vertexAttrib3fv(W.location,ie);break;case 4:r.vertexAttrib4fv(W.location,ie);break;default:r.vertexAttrib1fv(W.location,ie)}}}}v()}function A(){D();for(const M in n){const I=n[M];for(const O in I){const N=I[O];for(const V in N)h(N[V].object),delete N[V];delete I[O]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const O in I){const N=I[O];for(const V in N)h(N[V].object),delete N[V];delete I[O]}delete n[M.id]}function R(M){for(const I in n){const O=n[I];if(O[M.id]===void 0)continue;const N=O[M.id];for(const V in N)h(N[V].object),delete N[V];delete O[M.id]}}function D(){E(),o=!0,s!==i&&(s=i,c(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Vv(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==pn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Jn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Tn&&!D)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:A,maxSamples:w}}function Gv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new yi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{const v=s?0:n,y=v*4;let b=p.clippingState||null;l.value=b,b=h(m,d,y,f);for(let A=0;A!==y;++A)b[A]=t[A];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,b=f;y!==x;++y,b+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Wv(r){let e=new WeakMap;function t(o,a){return a===Jl?o.mapping=$s:a===Ql&&(o.mapping=Ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jl||a===Ql)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new og(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Hi=4,Ou=[.125,.215,.35,.446,.526,.582],ds=20,Xv=256,Sr=new Aa,ku=new Se;let vl=null,yl=0,_l=0,bl=!1;const qv=new L;class zu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=qv}=s;vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,yl,_l),this._renderer.xr.enabled=bl,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Ti,format:pn,colorSpace:Zt,depthBuffer:!1},i=Vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jv(s)),this._blurMaterial=Yv(s,e,t),this._ggxMaterial=$v(s,e,t)}return i}_compileMaterial(e){const t=new dt(new Ut,e);this._renderer.compile(t,Sr)}_sceneToCubeUV(e,t,n,i,s){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ku),u.toneMapping=Wi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dt(new Yi,new tn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,p=!0):(g.color.copy(ku),p=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const A=this._cubeSize;Bs(i,b*A,y>2?A:0,A,A),u.setRenderTarget(i),p&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===$s||e.mapping===Ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Sr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=.05+c*.95,f=u*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Hi?n-m+Hi:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Bs(s,g,p,3*x,2*x),i.setRenderTarget(s),i.render(a,Sr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Bs(e,g,p,3*x,2*x),i.setRenderTarget(e),i.render(a,Sr)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ds-1),x=s/m,g=isFinite(s)?1+Math.floor(h*x):ds;g>ds&&Ae(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ds}`);const p=[];let v=0;for(let R=0;R<ds;++R){const D=R/x,E=Math.exp(-D*D/2);p.push(E),R===0?v+=E:R<g&&(v+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const b=this._sizeLods[i],A=3*b*(i>y-Hi?i-y+Hi:0),w=4*(this._cubeSize-b);Bs(t,A,w,3*b,2*b),l.setRenderTarget(t),l.render(u,Sr)}}function jv(r){const e=[],t=[],n=[];let i=r;const s=r-Hi+1+Ou.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Hi?l=Ou[o-r+Hi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),y=new Float32Array(g*m*f),b=new Float32Array(p*m*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,D=w>2?0:-1,E=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];v.set(E,x*m*w),y.set(d,g*m*w);const M=[w,w,w,w,w,w];b.set(M,p*m*w)}const A=new Ut;A.setAttribute("position",new qt(v,x)),A.setAttribute("uv",new qt(y,g)),A.setAttribute("faceIndex",new qt(b,p)),n.push(new dt(A,null)),i>Hi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Vu(r,e,t){const n=new Qn(r,e,t);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function $v(r,e,t){return new Xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ca(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Yv(r,e,t){const n=new Float32Array(ds),i=new L(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Hu(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Gu(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Ca(){return`

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
	`}function Kv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jl||l===Ql,h=l===$s||l===Ys;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new zu(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new zu(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Xr("WebGLRenderer: "+n+" extension not supported."),i}}}function Jv(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let y=0,b=v.length;y<b;y+=3){const A=v[y+0],w=v[y+1],R=v[y+2];d.push(A,w,w,R,R,A)}}else if(m!==void 0){const v=m.array;x=m.version;for(let y=0,b=v.length/3-1;y<b;y+=3){const A=y+0,w=y+1,R=y+2;d.push(A,w,w,R,R,A)}}else return;const g=new(Ff(d)?kf:Of)(d,1);g.version=x;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Qv(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ey(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ty(r,e,t){const n=new WeakMap,i=new rt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;m===!0&&(b=1),x===!0&&(b=2),g===!0&&(b=3);let A=a.attributes.position.count*b,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*w*4*u),D=new Uf(R,A,w,u);D.type=Tn,D.needsUpdate=!0;const E=b*4;for(let I=0;I<u;I++){const O=p[I],N=v[I],V=y[I],k=A*w*4*I;for(let B=0;B<O.count;B++){const Y=B*E;m===!0&&(i.fromBufferAttribute(O,B),R[k+Y+0]=i.x,R[k+Y+1]=i.y,R[k+Y+2]=i.z,R[k+Y+3]=0),x===!0&&(i.fromBufferAttribute(N,B),R[k+Y+4]=i.x,R[k+Y+5]=i.y,R[k+Y+6]=i.z,R[k+Y+7]=0),g===!0&&(i.fromBufferAttribute(V,B),R[k+Y+8]=i.x,R[k+Y+9]=i.y,R[k+Y+10]=i.z,R[k+Y+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new Ce(A,w)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function ny(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Zf=new Ft,Wu=new uh(1,1),Jf=new Uf,Qf=new Wm,ep=new Hf,Xu=[],qu=[],ju=new Float32Array(16),$u=new Float32Array(9),Yu=new Float32Array(4);function ur(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Xu[i];if(s===void 0&&(s=new Float32Array(i),Xu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function It(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Dt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ra(r,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function iy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function sy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2fv(this.addr,e),Dt(t,e)}}function ry(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;r.uniform3fv(this.addr,e),Dt(t,e)}}function oy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4fv(this.addr,e),Dt(t,e)}}function ay(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Yu.set(n),r.uniformMatrix2fv(this.addr,!1,Yu),Dt(t,n)}}function ly(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;$u.set(n),r.uniformMatrix3fv(this.addr,!1,$u),Dt(t,n)}}function cy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;ju.set(n),r.uniformMatrix4fv(this.addr,!1,ju),Dt(t,n)}}function hy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function uy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2iv(this.addr,e),Dt(t,e)}}function dy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3iv(this.addr,e),Dt(t,e)}}function fy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4iv(this.addr,e),Dt(t,e)}}function py(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function my(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2uiv(this.addr,e),Dt(t,e)}}function gy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3uiv(this.addr,e),Dt(t,e)}}function xy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4uiv(this.addr,e),Dt(t,e)}}function vy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Wu.compareFunction=Nf,s=Wu):s=Zf,t.setTexture2D(e||s,i)}function yy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qf,i)}function _y(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ep,i)}function by(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jf,i)}function wy(r){switch(r){case 5126:return iy;case 35664:return sy;case 35665:return ry;case 35666:return oy;case 35674:return ay;case 35675:return ly;case 35676:return cy;case 5124:case 35670:return hy;case 35667:case 35671:return uy;case 35668:case 35672:return dy;case 35669:case 35673:return fy;case 5125:return py;case 36294:return my;case 36295:return gy;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return _y;case 36289:case 36303:case 36311:case 36292:return by}}function My(r,e){r.uniform1fv(this.addr,e)}function Sy(r,e){const t=ur(e,this.size,2);r.uniform2fv(this.addr,t)}function Ey(r,e){const t=ur(e,this.size,3);r.uniform3fv(this.addr,t)}function Ty(r,e){const t=ur(e,this.size,4);r.uniform4fv(this.addr,t)}function Ay(r,e){const t=ur(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Cy(r,e){const t=ur(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ry(r,e){const t=ur(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ly(r,e){r.uniform1iv(this.addr,e)}function Py(r,e){r.uniform2iv(this.addr,e)}function Iy(r,e){r.uniform3iv(this.addr,e)}function Dy(r,e){r.uniform4iv(this.addr,e)}function Ny(r,e){r.uniform1uiv(this.addr,e)}function Fy(r,e){r.uniform2uiv(this.addr,e)}function Uy(r,e){r.uniform3uiv(this.addr,e)}function By(r,e){r.uniform4uiv(this.addr,e)}function Oy(r,e,t){const n=this.cache,i=e.length,s=Ra(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Zf,s[o])}function ky(r,e,t){const n=this.cache,i=e.length,s=Ra(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Qf,s[o])}function zy(r,e,t){const n=this.cache,i=e.length,s=Ra(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ep,s[o])}function Vy(r,e,t){const n=this.cache,i=e.length,s=Ra(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Jf,s[o])}function Hy(r){switch(r){case 5126:return My;case 35664:return Sy;case 35665:return Ey;case 35666:return Ty;case 35674:return Ay;case 35675:return Cy;case 35676:return Ry;case 5124:case 35670:return Ly;case 35667:case 35671:return Py;case 35668:case 35672:return Iy;case 35669:case 35673:return Dy;case 5125:return Ny;case 36294:return Fy;case 36295:return Uy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return Vy}}class Gy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wy(t.type)}}class Wy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hy(t.type)}}class Xy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const wl=/(\w+)(\])?(\[|\.)?/g;function Ku(r,e){r.seq.push(e),r.map[e.id]=e}function qy(r,e,t){const n=r.name,i=n.length;for(wl.lastIndex=0;;){const s=wl.exec(n),o=wl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ku(t,c===void 0?new Gy(a,r,e):new Wy(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Xy(a),Ku(t,u)),t=u}}}class ta{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);qy(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Zu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const jy=37297;let $y=0;function Yy(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ju=new Ge;function Ky(r){tt._getMatrix(Ju,tt.workingColorSpace,r);const e=`mat3( ${Ju.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(r)){case ca:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Qu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Yy(r.getShaderSource(e),a)}else return s}function Zy(r,e){const t=Ky(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jy(r,e){let t;switch(e){case yf:t="Linear";break;case _f:t="Reinhard";break;case bf:t="Cineon";break;case jc:t="ACESFilmic";break;case Mf:t="AgX";break;case Sf:t="Neutral";break;case wf:t="Custom";break;default:Ae("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const No=new L;function Qy(){tt.getLuminanceCoefficients(No);const r=No.x.toFixed(4),e=No.y.toFixed(4),t=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function t_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function n_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ir(r){return r!==""}function ed(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function td(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(r){return r.replace(i_,r_)}const s_=new Map;function r_(r,e){let t=We[e];if(t===void 0){const n=s_.get(e);if(n!==void 0)t=We[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dc(t)}const o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(r){return r.replace(o_,a_)}function a_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function id(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===$o?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function c_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $s:case Ys:e="ENVMAP_TYPE_CUBE";break;case Ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function u_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qc:e="ENVMAP_BLENDING_MULTIPLY";break;case om:e="ENVMAP_BLENDING_MIX";break;case am:e="ENVMAP_BLENDING_ADD";break}return e}function d_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function f_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=l_(t),c=c_(t),h=h_(t),u=u_(t),d=d_(t),f=e_(t),m=t_(s),x=i.createProgram();let g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ir).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(g=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?We.tonemapping_pars_fragment:"",t.toneMapping!==Wi?Jy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Zy("linearToOutputTexel",t.outputColorSpace),Qy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Dc(o),o=ed(o,t),o=td(o,t),a=Dc(a),a=ed(a,t),a=td(a,t),o=nd(o),a=nd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+g+o,b=v+p+a,A=Zu(i,i.VERTEX_SHADER,y),w=Zu(i,i.FRAGMENT_SHADER,b);i.attachShader(x,A),i.attachShader(x,w),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(I){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(x)||"",N=i.getShaderInfoLog(A)||"",V=i.getShaderInfoLog(w)||"",k=O.trim(),B=N.trim(),Y=V.trim();let W=!0,K=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,A,w);else{const ie=Qu(i,A,"vertex"),me=Qu(i,w,"fragment");Xe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+ie+`
`+me)}else k!==""?Ae("WebGLProgram: Program Info Log:",k):(B===""||Y==="")&&(K=!1);K&&(I.diagnostics={runnable:W,programLog:k,vertexShader:{log:B,prefix:g},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(A),i.deleteShader(w),D=new ta(i,x),E=n_(i,x)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,jy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$y++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}let p_=0;class m_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new g_(e),t.set(e,n)),n}}class g_{constructor(e){this.id=p_++,this.code=e,this.usedTimes=0}}function x_(r,e,t,n,i,s,o){const a=new sh,l=new m_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,I,O,N){const V=O.fog,k=N.geometry,B=E.isMeshStandardMaterial?O.environment:null,Y=(E.isMeshStandardMaterial?t:e).get(E.envMap||B),W=Y&&Y.mapping===Ma?Y.image.height:null,K=m[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&Ae("WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ie=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,me=ie!==void 0?ie.length:0;let oe=0;k.morphAttributes.position!==void 0&&(oe=1),k.morphAttributes.normal!==void 0&&(oe=2),k.morphAttributes.color!==void 0&&(oe=3);let Qe,st,ot,Z;if(K){const ht=Hn[K];Qe=ht.vertexShader,st=ht.fragmentShader}else Qe=E.vertexShader,st=E.fragmentShader,l.update(E),ot=l.getVertexShaderID(E),Z=l.getFragmentShaderID(E);const ee=r.getRenderTarget(),ye=r.state.buffers.depth.getReversed(),He=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,Ye=!!E.map,Bt=!!E.matcap,qe=!!Y,yt=!!E.aoMap,F=!!E.lightMap,Ke=!!E.bumpMap,Ze=!!E.normalMap,pt=!!E.displacementMap,Me=!!E.emissiveMap,wt=!!E.metalnessMap,Pe=!!E.roughnessMap,Ve=E.anisotropy>0,P=E.clearcoat>0,T=E.dispersion>0,X=E.iridescence>0,J=E.sheen>0,te=E.transmission>0,$=Ve&&!!E.anisotropyMap,Te=P&&!!E.clearcoatMap,ue=P&&!!E.clearcoatNormalMap,Ie=P&&!!E.clearcoatRoughnessMap,Ee=X&&!!E.iridescenceMap,ne=X&&!!E.iridescenceThicknessMap,ae=J&&!!E.sheenColorMap,Ue=J&&!!E.sheenRoughnessMap,Ne=!!E.specularMap,ge=!!E.specularColorMap,Oe=!!E.specularIntensityMap,U=te&&!!E.transmissionMap,de=te&&!!E.thicknessMap,le=!!E.gradientMap,ce=!!E.alphaMap,se=E.alphaTest>0,Q=!!E.alphaHash,_e=!!E.extensions;let ze=Wi;E.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ze=r.toneMapping);const gt={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:Qe,fragmentShader:st,defines:E.defines,customVertexShaderID:ot,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Re,batchingColor:Re&&N._colorsTexture!==null,instancing:He,instancingColor:He&&N.instanceColor!==null,instancingMorph:He&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Zt,alphaToCoverage:!!E.alphaToCoverage,map:Ye,matcap:Bt,envMap:qe,envMapMode:qe&&Y.mapping,envMapCubeUVHeight:W,aoMap:yt,lightMap:F,bumpMap:Ke,normalMap:Ze,displacementMap:d&&pt,emissiveMap:Me,normalMapObjectSpace:Ze&&E.normalMapType===fm,normalMapTangentSpace:Ze&&E.normalMapType===Sa,metalnessMap:wt,roughnessMap:Pe,anisotropy:Ve,anisotropyMap:$,clearcoat:P,clearcoatMap:Te,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ie,dispersion:T,iridescence:X,iridescenceMap:Ee,iridescenceThicknessMap:ne,sheen:J,sheenColorMap:ae,sheenRoughnessMap:Ue,specularMap:Ne,specularColorMap:ge,specularIntensityMap:Oe,transmission:te,transmissionMap:U,thicknessMap:de,gradientMap:le,opaque:E.transparent===!1&&E.blending===Gs&&E.alphaToCoverage===!1,alphaMap:ce,alphaTest:se,alphaHash:Q,combine:E.combine,mapUv:Ye&&x(E.map.channel),aoMapUv:yt&&x(E.aoMap.channel),lightMapUv:F&&x(E.lightMap.channel),bumpMapUv:Ke&&x(E.bumpMap.channel),normalMapUv:Ze&&x(E.normalMap.channel),displacementMapUv:pt&&x(E.displacementMap.channel),emissiveMapUv:Me&&x(E.emissiveMap.channel),metalnessMapUv:wt&&x(E.metalnessMap.channel),roughnessMapUv:Pe&&x(E.roughnessMap.channel),anisotropyMapUv:$&&x(E.anisotropyMap.channel),clearcoatMapUv:Te&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(E.sheenRoughnessMap.channel),specularMapUv:Ne&&x(E.specularMap.channel),specularColorMapUv:ge&&x(E.specularColorMap.channel),specularIntensityMapUv:Oe&&x(E.specularIntensityMap.channel),transmissionMapUv:U&&x(E.transmissionMap.channel),thicknessMapUv:de&&x(E.thicknessMap.channel),alphaMapUv:ce&&x(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ze||Ve),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(Ye||ce),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===at,decodeVideoTextureEmissive:Me&&E.emissiveMap.isVideoTexture===!0&&tt.getTransfer(E.emissiveMap.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fn,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:_e&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&E.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)M.push(I),M.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(v(M,E),y(M,E),M.push(r.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function b(E){const M=m[E.type];let I;if(M){const O=Hn[M];I=ms.clone(O.uniforms)}else I=E.uniforms;return I}function A(E,M){let I;for(let O=0,N=h.length;O<N;O++){const V=h[O];if(V.cacheKey===M){I=V,++I.usedTimes;break}}return I===void 0&&(I=new f_(r,M,E,s),h.push(I)),I}function w(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function R(E){l.remove(E)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:b,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:D}}function v_(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function y_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function sd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,m,x,g){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,d,f,m,x,g){const p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,x,g){const p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||y_),n.length>1&&n.sort(d||sd),i.length>1&&i.sort(d||sd)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function __(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new rd,r.set(n,[o])):i>=s.length?(o=new rd,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function b_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Se};break;case"SpotLight":t={position:new L,direction:new L,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function w_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let M_=0;function S_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function E_(r){const e=new b_,t=w_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,s=new ke,o=new ke;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,y=0,b=0,A=0,w=0,R=0;c.sort(S_);for(let E=0,M=c.length;E<M;E++){const I=c[E],O=I.color,N=I.intensity,V=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*N,u+=O.g*N,d+=O.b*N;else if(I.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(I.sh.coefficients[B],N);R++}else if(I.isDirectionalLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Y=I.shadow,W=t.get(I);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=B,f++}else if(I.isSpotLight){const B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(O).multiplyScalar(N),B.distance=V,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,n.spot[x]=B;const Y=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,Y.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[x]=Y.matrix,I.castShadow){const W=t.get(I);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=k,b++}x++}else if(I.isRectAreaLight){const B=e.get(I);B.color.copy(O).multiplyScalar(N),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=B,g++}else if(I.isPointLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){const Y=I.shadow,W=t.get(I);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=I.shadow.matrix,y++}n.point[m]=B,m++}else if(I.isHemisphereLight){const B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(N),B.groundColor.copy(I.groundColor).multiplyScalar(N),n.hemi[p]=B,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==v||D.numPointShadows!==y||D.numSpotShadows!==b||D.numSpotMaps!==A||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,D.directionalLength=f,D.pointLength=m,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=v,D.numPointShadows=y,D.numSpotShadows=b,D.numSpotMaps=A,D.numLightProbes=R,n.version=M_++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),u++}else if(y.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const b=n.rectArea[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function od(r){const e=new E_(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function T_(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new od(r),e.set(i,[a])):s>=o.length?(a=new od(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R_(r,e,t){let n=new ch;const i=new Ce,s=new Ce,o=new rt,a=new Mg({depthPacking:dm}),l=new Sg,c={},h=t.maxTextureSize,u={[Ei]:nn,[nn]:Ei,[fn]:fn},d=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:A_,fragmentShader:C_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ut;m.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new dt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let p=this.type;this.render=function(w,R,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const E=r.getRenderTarget(),M=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),O=r.state;O.setBlending(kt),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=p!==On&&this.type===On,V=p===On&&this.type!==On;for(let k=0,B=w.length;k<B;k++){const Y=w[k],W=Y.shadow;if(W===void 0){Ae("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const K=W.getFrameExtents();if(i.multiply(K),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,W.mapSize.y=s.y)),W.map===null||N===!0||V===!0){const me=this.type!==On?{minFilter:Vt,magFilter:Vt}:{};W.map!==null&&W.map.dispose(),W.map=new Qn(i.x,i.y,me),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const ie=W.getViewportCount();for(let me=0;me<ie;me++){const oe=W.getViewport(me);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),O.viewport(o),W.updateMatrices(Y,me),n=W.getFrustum(),b(R,D,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===On&&v(W,D),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(E,M,I)};function v(w,R){const D=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(R,null,D,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(R,null,D,f,x,null)}function y(w,R,D,E){let M=null;const I=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)M=I;else if(M=D.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=M.uuid,N=R.uuid;let V=c[O];V===void 0&&(V={},c[O]=V);let k=V[N];k===void 0&&(k=M.clone(),V[N]=k,R.addEventListener("dispose",A)),M=k}if(M.visible=R.visible,M.wireframe=R.wireframe,E===On?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=r.properties.get(M);O.light=D}return M}function b(w,R,D,E,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===On)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const N=e.update(w),V=w.material;if(Array.isArray(V)){const k=N.groups;for(let B=0,Y=k.length;B<Y;B++){const W=k[B],K=V[W.materialIndex];if(K&&K.visible){const ie=y(w,K,E,M);w.onBeforeShadow(r,w,R,D,N,ie,W),r.renderBufferDirect(D,null,N,ie,w,W),w.onAfterShadow(r,w,R,D,N,ie,W)}}}else if(V.visible){const k=y(w,V,E,M);w.onBeforeShadow(r,w,R,D,N,k,null),r.renderBufferDirect(D,null,N,k,w,null),w.onAfterShadow(r,w,R,D,N,k,null)}}const O=w.children;for(let N=0,V=O.length;N<V;N++)b(O[N],R,D,E,M)}function A(w){w.target.removeEventListener("dispose",A);for(const D in c){const E=c[D],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const L_={[Xl]:ql,[jl]:Kl,[$l]:Zl,[js]:Yl,[ql]:Xl,[Kl]:jl,[Zl]:$l,[Yl]:js};function P_(r,e){function t(){let U=!1;const de=new rt;let le=null;const ce=new rt(0,0,0,0);return{setMask:function(se){le!==se&&!U&&(r.colorMask(se,se,se,se),le=se)},setLocked:function(se){U=se},setClear:function(se,Q,_e,ze,gt){gt===!0&&(se*=ze,Q*=ze,_e*=ze),de.set(se,Q,_e,ze),ce.equals(de)===!1&&(r.clearColor(se,Q,_e,ze),ce.copy(de))},reset:function(){U=!1,le=null,ce.set(-1,0,0,0)}}}function n(){let U=!1,de=!1,le=null,ce=null,se=null;return{setReversed:function(Q){if(de!==Q){const _e=e.get("EXT_clip_control");Q?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),de=Q;const ze=se;se=null,this.setClear(ze)}},getReversed:function(){return de},setTest:function(Q){Q?ee(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(Q){le!==Q&&!U&&(r.depthMask(Q),le=Q)},setFunc:function(Q){if(de&&(Q=L_[Q]),ce!==Q){switch(Q){case Xl:r.depthFunc(r.NEVER);break;case ql:r.depthFunc(r.ALWAYS);break;case jl:r.depthFunc(r.LESS);break;case js:r.depthFunc(r.LEQUAL);break;case $l:r.depthFunc(r.EQUAL);break;case Yl:r.depthFunc(r.GEQUAL);break;case Kl:r.depthFunc(r.GREATER);break;case Zl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=Q}},setLocked:function(Q){U=Q},setClear:function(Q){se!==Q&&(de&&(Q=1-Q),r.clearDepth(Q),se=Q)},reset:function(){U=!1,le=null,ce=null,se=null,de=!1}}}function i(){let U=!1,de=null,le=null,ce=null,se=null,Q=null,_e=null,ze=null,gt=null;return{setTest:function(ht){U||(ht?ee(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(ht){de!==ht&&!U&&(r.stencilMask(ht),de=ht)},setFunc:function(ht,Nn,xn){(le!==ht||ce!==Nn||se!==xn)&&(r.stencilFunc(ht,Nn,xn),le=ht,ce=Nn,se=xn)},setOp:function(ht,Nn,xn){(Q!==ht||_e!==Nn||ze!==xn)&&(r.stencilOp(ht,Nn,xn),Q=ht,_e=Nn,ze=xn)},setLocked:function(ht){U=ht},setClear:function(ht){gt!==ht&&(r.clearStencil(ht),gt=ht)},reset:function(){U=!1,de=null,le=null,ce=null,se=null,Q=null,_e=null,ze=null,gt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,y=null,b=null,A=null,w=null,R=new Se(0,0,0),D=0,E=!1,M=null,I=null,O=null,N=null,V=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Y>=2);let K=null,ie={};const me=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),Qe=new rt().fromArray(me),st=new rt().fromArray(oe);function ot(U,de,le,ce){const se=new Uint8Array(4),Q=r.createTexture();r.bindTexture(U,Q),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let _e=0;_e<le;_e++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(de,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(de+_e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return Q}const Z={};Z[r.TEXTURE_2D]=ot(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(r.DEPTH_TEST),o.setFunc(js),Ke(!1),Ze(Hh),ee(r.CULL_FACE),yt(kt);function ee(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function ye(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function He(U,de){return u[U]!==de?(r.bindFramebuffer(U,de),u[U]=de,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=de),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=de),!0):!1}function Re(U,de){let le=f,ce=!1;if(U){le=d.get(de),le===void 0&&(le=[],d.set(de,le));const se=U.textures;if(le.length!==se.length||le[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,_e=se.length;Q<_e;Q++)le[Q]=r.COLOR_ATTACHMENT0+Q;le.length=se.length,ce=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,ce=!0);ce&&r.drawBuffers(le)}function Ye(U){return m!==U?(r.useProgram(U),m=U,!0):!1}const Bt={[bi]:r.FUNC_ADD,[qp]:r.FUNC_SUBTRACT,[jp]:r.FUNC_REVERSE_SUBTRACT};Bt[$p]=r.MIN,Bt[Yp]=r.MAX;const qe={[Hl]:r.ZERO,[Kp]:r.ONE,[Zp]:r.SRC_COLOR,[Gl]:r.SRC_ALPHA,[tm]:r.SRC_ALPHA_SATURATE,[vf]:r.DST_COLOR,[xf]:r.DST_ALPHA,[Jp]:r.ONE_MINUS_SRC_COLOR,[Wl]:r.ONE_MINUS_SRC_ALPHA,[em]:r.ONE_MINUS_DST_COLOR,[Qp]:r.ONE_MINUS_DST_ALPHA,[nm]:r.CONSTANT_COLOR,[im]:r.ONE_MINUS_CONSTANT_COLOR,[sm]:r.CONSTANT_ALPHA,[rm]:r.ONE_MINUS_CONSTANT_ALPHA};function yt(U,de,le,ce,se,Q,_e,ze,gt,ht){if(U===kt){x===!0&&(ye(r.BLEND),x=!1);return}if(x===!1&&(ee(r.BLEND),x=!0),U!==Vl){if(U!==g||ht!==E){if((p!==bi||b!==bi)&&(r.blendEquation(r.FUNC_ADD),p=bi,b=bi),ht)switch(U){case Gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zl:r.blendFunc(r.ONE,r.ONE);break;case Gh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xe("WebGLState: Invalid blending: ",U);break}else switch(U){case Gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Gh:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wh:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",U);break}v=null,y=null,A=null,w=null,R.set(0,0,0),D=0,g=U,E=ht}return}se=se||de,Q=Q||le,_e=_e||ce,(de!==p||se!==b)&&(r.blendEquationSeparate(Bt[de],Bt[se]),p=de,b=se),(le!==v||ce!==y||Q!==A||_e!==w)&&(r.blendFuncSeparate(qe[le],qe[ce],qe[Q],qe[_e]),v=le,y=ce,A=Q,w=_e),(ze.equals(R)===!1||gt!==D)&&(r.blendColor(ze.r,ze.g,ze.b,gt),R.copy(ze),D=gt),g=U,E=!1}function F(U,de){U.side===fn?ye(r.CULL_FACE):ee(r.CULL_FACE);let le=U.side===nn;de&&(le=!le),Ke(le),U.blending===Gs&&U.transparent===!1?yt(kt):yt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const ce=U.stencilWrite;a.setTest(ce),ce&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Me(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(U){M!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),M=U)}function Ze(U){U!==Gp?(ee(r.CULL_FACE),U!==I&&(U===Hh?r.cullFace(r.BACK):U===Wp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),I=U}function pt(U){U!==O&&(B&&r.lineWidth(U),O=U)}function Me(U,de,le){U?(ee(r.POLYGON_OFFSET_FILL),(N!==de||V!==le)&&(r.polygonOffset(de,le),N=de,V=le)):ye(r.POLYGON_OFFSET_FILL)}function wt(U){U?ee(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function Pe(U){U===void 0&&(U=r.TEXTURE0+k-1),K!==U&&(r.activeTexture(U),K=U)}function Ve(U,de,le){le===void 0&&(K===null?le=r.TEXTURE0+k-1:le=K);let ce=ie[le];ce===void 0&&(ce={type:void 0,texture:void 0},ie[le]=ce),(ce.type!==U||ce.texture!==de)&&(K!==le&&(r.activeTexture(le),K=le),r.bindTexture(U,de||Z[U]),ce.type=U,ce.texture=de)}function P(){const U=ie[K];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function X(){try{r.compressedTexImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function J(){try{r.texSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function te(){try{r.texSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Te(){try{r.compressedTexSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function ue(){try{r.texStorage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Ie(){try{r.texStorage3D(...arguments)}catch(U){U("WebGLState:",U)}}function Ee(){try{r.texImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function ne(){try{r.texImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function ae(U){Qe.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Qe.copy(U))}function Ue(U){st.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),st.copy(U))}function Ne(U,de){let le=c.get(de);le===void 0&&(le=new WeakMap,c.set(de,le));let ce=le.get(U);ce===void 0&&(ce=r.getUniformBlockIndex(de,U.name),le.set(U,ce))}function ge(U,de){const ce=c.get(de).get(U);l.get(de)!==ce&&(r.uniformBlockBinding(de,ce,U.__bindingPointIndex),l.set(de,ce))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},K=null,ie={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,y=null,b=null,A=null,w=null,R=new Se(0,0,0),D=0,E=!1,M=null,I=null,O=null,N=null,V=null,Qe.set(0,0,r.canvas.width,r.canvas.height),st.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:ye,bindFramebuffer:He,drawBuffers:Re,useProgram:Ye,setBlending:yt,setMaterial:F,setFlipSided:Ke,setCullFace:Ze,setLineWidth:pt,setPolygonOffset:Me,setScissorTest:wt,activeTexture:Pe,bindTexture:Ve,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:X,texImage2D:Ee,texImage3D:ne,updateUBOMapping:Ne,uniformBlockBinding:ge,texStorage2D:ue,texStorage3D:Ie,texSubImage2D:J,texSubImage3D:te,compressedTexSubImage2D:$,compressedTexSubImage3D:Te,scissor:ae,viewport:Ue,reset:Oe}}function I_(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,T){return f?new OffscreenCanvas(P,T):Wr("canvas")}function x(P,T,X){let J=1;const te=Ve(P);if((te.width>X||te.height>X)&&(J=X/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const $=Math.floor(J*te.width),Te=Math.floor(J*te.height);u===void 0&&(u=m($,Te));const ue=T?m($,Te):u;return ue.width=$,ue.height=Te,ue.getContext("2d").drawImage(P,0,0,$,Te),Ae("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Te+")."),ue}else return"data"in P&&Ae("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,T,X,J,te=!1){if(P!==null){if(r[P]!==void 0)return r[P];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=T;if(T===r.RED&&(X===r.FLOAT&&($=r.R32F),X===r.HALF_FLOAT&&($=r.R16F),X===r.UNSIGNED_BYTE&&($=r.R8)),T===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&($=r.R8UI),X===r.UNSIGNED_SHORT&&($=r.R16UI),X===r.UNSIGNED_INT&&($=r.R32UI),X===r.BYTE&&($=r.R8I),X===r.SHORT&&($=r.R16I),X===r.INT&&($=r.R32I)),T===r.RG&&(X===r.FLOAT&&($=r.RG32F),X===r.HALF_FLOAT&&($=r.RG16F),X===r.UNSIGNED_BYTE&&($=r.RG8)),T===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&($=r.RG8UI),X===r.UNSIGNED_SHORT&&($=r.RG16UI),X===r.UNSIGNED_INT&&($=r.RG32UI),X===r.BYTE&&($=r.RG8I),X===r.SHORT&&($=r.RG16I),X===r.INT&&($=r.RG32I)),T===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&($=r.RGB8UI),X===r.UNSIGNED_SHORT&&($=r.RGB16UI),X===r.UNSIGNED_INT&&($=r.RGB32UI),X===r.BYTE&&($=r.RGB8I),X===r.SHORT&&($=r.RGB16I),X===r.INT&&($=r.RGB32I)),T===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&($=r.RGBA8UI),X===r.UNSIGNED_SHORT&&($=r.RGBA16UI),X===r.UNSIGNED_INT&&($=r.RGBA32UI),X===r.BYTE&&($=r.RGBA8I),X===r.SHORT&&($=r.RGBA16I),X===r.INT&&($=r.RGBA32I)),T===r.RGB&&(X===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),T===r.RGBA){const Te=te?ca:tt.getTransfer(J);X===r.FLOAT&&($=r.RGBA32F),X===r.HALF_FLOAT&&($=r.RGBA16F),X===r.UNSIGNED_BYTE&&($=Te===at?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(P,T){let X;return P?T===null||T===xs||T===Zs?X=r.DEPTH24_STENCIL8:T===Tn?X=r.DEPTH32F_STENCIL8:T===zr&&(X=r.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===xs||T===Zs?X=r.DEPTH_COMPONENT24:T===Tn?X=r.DEPTH_COMPONENT32F:T===zr&&(X=r.DEPTH_COMPONENT16),X}function A(P,T){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vt&&P.minFilter!==Kt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function w(P){const T=P.target;T.removeEventListener("dispose",w),D(T),T.isVideoTexture&&h.delete(T)}function R(P){const T=P.target;T.removeEventListener("dispose",R),M(T)}function D(P){const T=n.get(P);if(T.__webglInit===void 0)return;const X=P.source,J=d.get(X);if(J){const te=J[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(P),Object.keys(J).length===0&&d.delete(X)}n.remove(P)}function E(P){const T=n.get(P);r.deleteTexture(T.__webglTexture);const X=P.source,J=d.get(X);delete J[T.__cacheKey],o.memory.textures--}function M(P){const T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let te=0;te<T.__webglFramebuffer[J].length;te++)r.deleteFramebuffer(T.__webglFramebuffer[J][te]);else r.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)r.deleteFramebuffer(T.__webglFramebuffer[J]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=P.textures;for(let J=0,te=X.length;J<te;J++){const $=n.get(X[J]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(X[J])}n.remove(P)}let I=0;function O(){I=0}function N(){const P=I;return P>=i.maxTextures&&Ae("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function V(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function k(P,T){const X=n.get(P);if(P.isVideoTexture&&wt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){const J=P.image;if(J===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(X,P,T);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+T)}function B(P,T){const X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){Z(X,P,T);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+T)}function Y(P,T){const X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){Z(X,P,T);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+T)}function W(P,T){const X=n.get(P);if(P.version>0&&X.__version!==P.version){ee(X,P,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+T)}const K={[Ks]:r.REPEAT,[qn]:r.CLAMP_TO_EDGE,[la]:r.MIRRORED_REPEAT},ie={[Vt]:r.NEAREST,[Tf]:r.NEAREST_MIPMAP_NEAREST,[Pr]:r.NEAREST_MIPMAP_LINEAR,[Kt]:r.LINEAR,[Yo]:r.LINEAR_MIPMAP_NEAREST,[wi]:r.LINEAR_MIPMAP_LINEAR},me={[pm]:r.NEVER,[_m]:r.ALWAYS,[mm]:r.LESS,[Nf]:r.LEQUAL,[gm]:r.EQUAL,[ym]:r.GEQUAL,[xm]:r.GREATER,[vm]:r.NOTEQUAL};function oe(P,T){if(T.type===Tn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Kt||T.magFilter===Yo||T.magFilter===Pr||T.magFilter===wi||T.minFilter===Kt||T.minFilter===Yo||T.minFilter===Pr||T.minFilter===wi)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,K[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,K[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,K[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ie[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,me[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Vt||T.minFilter!==Pr&&T.minFilter!==wi||T.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Qe(P,T){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",w));const J=T.source;let te=d.get(J);te===void 0&&(te={},d.set(J,te));const $=V(T);if($!==P.__cacheKey){te[$]===void 0&&(te[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),te[$].usedTimes++;const Te=te[P.__cacheKey];Te!==void 0&&(te[P.__cacheKey].usedTimes--,Te.usedTimes===0&&E(T)),P.__cacheKey=$,P.__webglTexture=te[$].texture}return X}function st(P,T,X){return Math.floor(Math.floor(P/X)/T)}function ot(P,T,X,J){const $=P.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,X,J,T.data);else{$.sort((ne,ae)=>ne.start-ae.start);let Te=0;for(let ne=1;ne<$.length;ne++){const ae=$[Te],Ue=$[ne],Ne=ae.start+ae.count,ge=st(Ue.start,T.width,4),Oe=st(ae.start,T.width,4);Ue.start<=Ne+1&&ge===Oe&&st(Ue.start+Ue.count-1,T.width,4)===ge?ae.count=Math.max(ae.count,Ue.start+Ue.count-ae.start):(++Te,$[Te]=Ue)}$.length=Te+1;const ue=r.getParameter(r.UNPACK_ROW_LENGTH),Ie=r.getParameter(r.UNPACK_SKIP_PIXELS),Ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let ne=0,ae=$.length;ne<ae;ne++){const Ue=$[ne],Ne=Math.floor(Ue.start/4),ge=Math.ceil(Ue.count/4),Oe=Ne%T.width,U=Math.floor(Ne/T.width),de=ge,le=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,Oe,U,de,le,X,J,T.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ie),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ee)}}function Z(P,T,X){let J=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=r.TEXTURE_3D);const te=Qe(P,T),$=T.source;t.bindTexture(J,P.__webglTexture,r.TEXTURE0+X);const Te=n.get($);if($.version!==Te.__version||te===!0){t.activeTexture(r.TEXTURE0+X);const ue=tt.getPrimaries(tt.workingColorSpace),Ie=T.colorSpace===zi?null:tt.getPrimaries(T.colorSpace),Ee=T.colorSpace===zi||ue===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ne=x(T.image,!1,i.maxTextureSize);ne=Pe(T,ne);const ae=s.convert(T.format,T.colorSpace),Ue=s.convert(T.type);let Ne=y(T.internalFormat,ae,Ue,T.colorSpace,T.isVideoTexture);oe(J,T);let ge;const Oe=T.mipmaps,U=T.isVideoTexture!==!0,de=Te.__version===void 0||te===!0,le=$.dataReady,ce=A(T,ne);if(T.isDepthTexture)Ne=b(T.format===Js,T.type),de&&(U?t.texStorage2D(r.TEXTURE_2D,1,Ne,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Ne,ne.width,ne.height,0,ae,Ue,null));else if(T.isDataTexture)if(Oe.length>0){U&&de&&t.texStorage2D(r.TEXTURE_2D,ce,Ne,Oe[0].width,Oe[0].height);for(let se=0,Q=Oe.length;se<Q;se++)ge=Oe[se],U?le&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,ge.width,ge.height,ae,Ue,ge.data):t.texImage2D(r.TEXTURE_2D,se,Ne,ge.width,ge.height,0,ae,Ue,ge.data);T.generateMipmaps=!1}else U?(de&&t.texStorage2D(r.TEXTURE_2D,ce,Ne,ne.width,ne.height),le&&ot(T,ne,ae,Ue)):t.texImage2D(r.TEXTURE_2D,0,Ne,ne.width,ne.height,0,ae,Ue,ne.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){U&&de&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Ne,Oe[0].width,Oe[0].height,ne.depth);for(let se=0,Q=Oe.length;se<Q;se++)if(ge=Oe[se],T.format!==pn)if(ae!==null)if(U){if(le)if(T.layerUpdates.size>0){const _e=Bu(ge.width,ge.height,T.format,T.type);for(const ze of T.layerUpdates){const gt=ge.data.subarray(ze*_e/ge.data.BYTES_PER_ELEMENT,(ze+1)*_e/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,ze,ge.width,ge.height,1,ae,gt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,ne.depth,ae,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,Ne,ge.width,ge.height,ne.depth,0,ge.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?le&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,ne.depth,ae,Ue,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,Ne,ge.width,ge.height,ne.depth,0,ae,Ue,ge.data)}else{U&&de&&t.texStorage2D(r.TEXTURE_2D,ce,Ne,Oe[0].width,Oe[0].height);for(let se=0,Q=Oe.length;se<Q;se++)ge=Oe[se],T.format!==pn?ae!==null?U?le&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,ge.width,ge.height,ae,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,se,Ne,ge.width,ge.height,0,ge.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?le&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,ge.width,ge.height,ae,Ue,ge.data):t.texImage2D(r.TEXTURE_2D,se,Ne,ge.width,ge.height,0,ae,Ue,ge.data)}else if(T.isDataArrayTexture)if(U){if(de&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Ne,ne.width,ne.height,ne.depth),le)if(T.layerUpdates.size>0){const se=Bu(ne.width,ne.height,T.format,T.type);for(const Q of T.layerUpdates){const _e=ne.data.subarray(Q*se/ne.data.BYTES_PER_ELEMENT,(Q+1)*se/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,ae,Ue,_e)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ae,Ue,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,ne.width,ne.height,ne.depth,0,ae,Ue,ne.data);else if(T.isData3DTexture)U?(de&&t.texStorage3D(r.TEXTURE_3D,ce,Ne,ne.width,ne.height,ne.depth),le&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ae,Ue,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Ne,ne.width,ne.height,ne.depth,0,ae,Ue,ne.data);else if(T.isFramebufferTexture){if(de)if(U)t.texStorage2D(r.TEXTURE_2D,ce,Ne,ne.width,ne.height);else{let se=ne.width,Q=ne.height;for(let _e=0;_e<ce;_e++)t.texImage2D(r.TEXTURE_2D,_e,Ne,se,Q,0,ae,Ue,null),se>>=1,Q>>=1}}else if(Oe.length>0){if(U&&de){const se=Ve(Oe[0]);t.texStorage2D(r.TEXTURE_2D,ce,Ne,se.width,se.height)}for(let se=0,Q=Oe.length;se<Q;se++)ge=Oe[se],U?le&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,ae,Ue,ge):t.texImage2D(r.TEXTURE_2D,se,Ne,ae,Ue,ge);T.generateMipmaps=!1}else if(U){if(de){const se=Ve(ne);t.texStorage2D(r.TEXTURE_2D,ce,Ne,se.width,se.height)}le&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,Ue,ne)}else t.texImage2D(r.TEXTURE_2D,0,Ne,ae,Ue,ne);g(T)&&p(J),Te.__version=$.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ee(P,T,X){if(T.image.length!==6)return;const J=Qe(P,T),te=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+X);const $=n.get(te);if(te.version!==$.__version||J===!0){t.activeTexture(r.TEXTURE0+X);const Te=tt.getPrimaries(tt.workingColorSpace),ue=T.colorSpace===zi?null:tt.getPrimaries(T.colorSpace),Ie=T.colorSpace===zi||Te===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ee=T.isCompressedTexture||T.image[0].isCompressedTexture,ne=T.image[0]&&T.image[0].isDataTexture,ae=[];for(let Q=0;Q<6;Q++)!Ee&&!ne?ae[Q]=x(T.image[Q],!0,i.maxCubemapSize):ae[Q]=ne?T.image[Q].image:T.image[Q],ae[Q]=Pe(T,ae[Q]);const Ue=ae[0],Ne=s.convert(T.format,T.colorSpace),ge=s.convert(T.type),Oe=y(T.internalFormat,Ne,ge,T.colorSpace),U=T.isVideoTexture!==!0,de=$.__version===void 0||J===!0,le=te.dataReady;let ce=A(T,Ue);oe(r.TEXTURE_CUBE_MAP,T);let se;if(Ee){U&&de&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Oe,Ue.width,Ue.height);for(let Q=0;Q<6;Q++){se=ae[Q].mipmaps;for(let _e=0;_e<se.length;_e++){const ze=se[_e];T.format!==pn?Ne!==null?U?le&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,ze.width,ze.height,Ne,ze.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Oe,ze.width,ze.height,0,ze.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,ze.width,ze.height,Ne,ge,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Oe,ze.width,ze.height,0,Ne,ge,ze.data)}}}else{if(se=T.mipmaps,U&&de){se.length>0&&ce++;const Q=Ve(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Oe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){U?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ae[Q].width,ae[Q].height,Ne,ge,ae[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Oe,ae[Q].width,ae[Q].height,0,Ne,ge,ae[Q].data);for(let _e=0;_e<se.length;_e++){const gt=se[_e].image[Q].image;U?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,gt.width,gt.height,Ne,ge,gt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Oe,gt.width,gt.height,0,Ne,ge,gt.data)}}else{U?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ne,ge,ae[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Oe,Ne,ge,ae[Q]);for(let _e=0;_e<se.length;_e++){const ze=se[_e];U?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,Ne,ge,ze.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Oe,Ne,ge,ze.image[Q])}}}g(T)&&p(r.TEXTURE_CUBE_MAP),$.__version=te.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ye(P,T,X,J,te,$){const Te=s.convert(X.format,X.colorSpace),ue=s.convert(X.type),Ie=y(X.internalFormat,Te,ue,X.colorSpace),Ee=n.get(T),ne=n.get(X);if(ne.__renderTarget=T,!Ee.__hasExternalTextures){const ae=Math.max(1,T.width>>$),Ue=Math.max(1,T.height>>$);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,$,Ie,ae,Ue,T.depth,0,Te,ue,null):t.texImage2D(te,$,Ie,ae,Ue,0,Te,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Me(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,te,ne.__webglTexture,0,pt(T)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,te,ne.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function He(P,T,X){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const J=T.depthTexture,te=J&&J.isDepthTexture?J.type:null,$=b(T.stencilBuffer,te),Te=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=pt(T);Me(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,$,T.width,T.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,$,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,$,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,P)}else{const J=T.textures;for(let te=0;te<J.length;te++){const $=J[te],Te=s.convert($.format,$.colorSpace),ue=s.convert($.type),Ie=y($.internalFormat,Te,ue,$.colorSpace),Ee=pt(T);X&&Me(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,Ie,T.width,T.height):Me(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,Ie,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ie,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Re(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(T.depthTexture);J.__renderTarget=T,(!J.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const te=J.__webglTexture,$=pt(T);if(T.depthTexture.format===Vr)Me(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(T.depthTexture.format===Js)Me(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ye(P){const T=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){const te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),T.__depthDisposeCallback=te}T.__boundDepthTexture=J}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const J=P.texture.mipmaps;J&&J.length>0?Re(T.__webglFramebuffer[0],P):Re(T.__webglFramebuffer,P)}else if(X){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=r.createRenderbuffer(),He(T.__webglDepthbuffer[J],P,!1);else{const te=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,$)}}else{const J=P.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),He(T.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(P,T,X){const J=n.get(P);T!==void 0&&ye(J.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Ye(P)}function qe(P){const T=P.texture,X=n.get(P),J=n.get(T);P.addEventListener("dispose",R);const te=P.textures,$=P.isWebGLCubeRenderTarget===!0,Te=te.length>1;if(Te||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=T.version,o.memory.textures++),$){X.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[ue]=[];for(let Ie=0;Ie<T.mipmaps.length;Ie++)X.__webglFramebuffer[ue][Ie]=r.createFramebuffer()}else X.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)X.__webglFramebuffer[ue]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Te)for(let ue=0,Ie=te.length;ue<Ie;ue++){const Ee=n.get(te[ue]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&Me(P)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const Ie=te[ue];X.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[ue]);const Ee=s.convert(Ie.format,Ie.colorSpace),ne=s.convert(Ie.type),ae=y(Ie.internalFormat,Ee,ne,Ie.colorSpace,P.isXRRenderTarget===!0),Ue=pt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,ae,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,X.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),He(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),oe(r.TEXTURE_CUBE_MAP,T);for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)ye(X.__webglFramebuffer[ue][Ie],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ie);else ye(X.__webglFramebuffer[ue],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(T)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ue=0,Ie=te.length;ue<Ie;ue++){const Ee=te[ue],ne=n.get(Ee);let ae=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ae=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,ne.__webglTexture),oe(ae,Ee),ye(X.__webglFramebuffer,P,Ee,r.COLOR_ATTACHMENT0+ue,ae,0),g(Ee)&&p(ae)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,J.__webglTexture),oe(ue,T),T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)ye(X.__webglFramebuffer[Ie],P,T,r.COLOR_ATTACHMENT0,ue,Ie);else ye(X.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,ue,0);g(T)&&p(ue),t.unbindTexture()}P.depthBuffer&&Ye(P)}function yt(P){const T=P.textures;for(let X=0,J=T.length;X<J;X++){const te=T[X];if(g(te)){const $=v(P),Te=n.get(te).__webglTexture;t.bindTexture($,Te),p($),t.unbindTexture()}}}const F=[],Ke=[];function Ze(P){if(P.samples>0){if(Me(P)===!1){const T=P.textures,X=P.width,J=P.height;let te=r.COLOR_BUFFER_BIT;const $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=n.get(P),ue=T.length>1;if(ue)for(let Ee=0;Ee<T.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Ie=P.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ee=0;Ee<T.length;Ee++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const ne=n.get(T[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,X,J,0,0,X,J,te,r.NEAREST),l===!0&&(F.length=0,Ke.length=0,F.push(r.COLOR_ATTACHMENT0+Ee),P.depthBuffer&&P.resolveDepthBuffer===!1&&(F.push($),Ke.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ke)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Ee=0;Ee<T.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const ne=n.get(T[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function pt(P){return Math.min(i.maxSamples,P.samples)}function Me(P){const T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function wt(P){const T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Pe(P,T){const X=P.colorSpace,J=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Zt&&X!==zi&&(tt.getTransfer(X)===at?(J!==pn||te!==Jn)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",X)),T}function Ve(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Bt,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Me}function D_(r,e){function t(n,i=zi){let s;const o=tt.getTransfer(i);if(n===Jn)return r.UNSIGNED_BYTE;if(n===Yc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Kc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Rf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Lf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Af)return r.BYTE;if(n===Cf)return r.SHORT;if(n===zr)return r.UNSIGNED_SHORT;if(n===$c)return r.INT;if(n===xs)return r.UNSIGNED_INT;if(n===Tn)return r.FLOAT;if(n===Ti)return r.HALF_FLOAT;if(n===Pf)return r.ALPHA;if(n===If)return r.RGB;if(n===pn)return r.RGBA;if(n===Vr)return r.DEPTH_COMPONENT;if(n===Js)return r.DEPTH_STENCIL;if(n===Zc)return r.RED;if(n===Jc)return r.RED_INTEGER;if(n===Qc)return r.RG;if(n===eh)return r.RG_INTEGER;if(n===th)return r.RGBA_INTEGER;if(n===Ko||n===Zo||n===Jo||n===Qo)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===oc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===sc||n===rc)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===oc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===vc||n===yc||n===_c)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ac)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bc||n===wc||n===Mc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===bc)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sc||n===Ec||n===Tc||n===Ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
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

}`;class U_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Xf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xt({vertexShader:N_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Yr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B_ extends ar{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const x=typeof XRWebGLBinding<"u",g=new U_,p={},v=t.getContextAttributes();let y=null,b=null;const A=[],w=[],R=new Ce;let D=null;const E=new Wt;E.viewport=new rt;const M=new Wt;M.viewport=new rt;const I=[E,M],O=new Xg;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=A[Z];return ee===void 0&&(ee=new hl,A[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=A[Z];return ee===void 0&&(ee=new hl,A[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=A[Z];return ee===void 0&&(ee=new hl,A[Z]=ee),ee.getHandSpace()};function k(Z){const ee=w.indexOf(Z.inputSource);if(ee===-1)return;const ye=A[ee];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,c||o),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<A.length;Z++){const ee=w[Z];ee!==null&&(w[Z]=null,A[Z].disconnect(ee))}N=null,V=null,g.reset();for(const Z in p)delete p[Z];e.setRenderTarget(y),f=null,d=null,u=null,i=null,b=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",B),i.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,He=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=v.stencil?Js:Vr,He=v.stencil?Zs:xs);const Ye={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Qn(d.textureWidth,d.textureHeight,{format:pn,type:Jn,depthTexture:new uh(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Qn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(Z){for(let ee=0;ee<Z.removed.length;ee++){const ye=Z.removed[ee],He=w.indexOf(ye);He>=0&&(w[He]=null,A[He].disconnect(ye))}for(let ee=0;ee<Z.added.length;ee++){const ye=Z.added[ee];let He=w.indexOf(ye);if(He===-1){for(let Ye=0;Ye<A.length;Ye++)if(Ye>=w.length){w.push(ye),He=Ye;break}else if(w[Ye]===null){w[Ye]=ye,He=Ye;break}if(He===-1)break}const Re=A[He];Re&&Re.connect(ye)}}const W=new L,K=new L;function ie(Z,ee,ye){W.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ye.matrixWorld);const He=W.distanceTo(K),Re=ee.projectionMatrix.elements,Ye=ye.projectionMatrix.elements,Bt=Re[14]/(Re[10]-1),qe=Re[14]/(Re[10]+1),yt=(Re[9]+1)/Re[5],F=(Re[9]-1)/Re[5],Ke=(Re[8]-1)/Re[0],Ze=(Ye[8]+1)/Ye[0],pt=Bt*Ke,Me=Bt*Ze,wt=He/(-Ke+Ze),Pe=wt*-Ke;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Pe),Z.translateZ(wt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Re[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ve=Bt+wt,P=qe+wt,T=pt-Pe,X=Me+(He-Pe),J=yt*qe/P*Ve,te=F*qe/P*Ve;Z.projectionMatrix.makePerspective(T,X,J,te,Ve,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function me(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ee=Z.near,ye=Z.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),O.near=M.near=E.near=ee,O.far=M.far=E.far=ye,(N!==O.near||V!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),N=O.near,V=O.far),O.layers.mask=Z.layers.mask|6,E.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const He=Z.parent,Re=O.cameras;me(O,He);for(let Ye=0;Ye<Re.length;Ye++)me(Re[Ye],He);Re.length===2?ie(O,E,M):O.projectionMatrix.copy(E.projectionMatrix),oe(Z,O,He)};function oe(Z,ee,ye){ye===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Qs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(Z){return p[Z]};let Qe=null;function st(Z,ee){if(h=ee.getViewerPose(c||o),m=ee,h!==null){const ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let He=!1;ye.length!==O.cameras.length&&(O.cameras.length=0,He=!0);for(let qe=0;qe<ye.length;qe++){const yt=ye[qe];let F=null;if(f!==null)F=f.getViewport(yt);else{const Ze=u.getViewSubImage(d,yt);F=Ze.viewport,qe===0&&(e.setRenderTargetTextures(b,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(b))}let Ke=I[qe];Ke===void 0&&(Ke=new Wt,Ke.layers.enable(qe),Ke.viewport=new rt,I[qe]=Ke),Ke.matrix.fromArray(yt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(yt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(F.x,F.y,F.width,F.height),qe===0&&(O.matrix.copy(Ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),He===!0&&O.cameras.push(Ke)}const Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const qe=u.getDepthInformation(ye[0]);qe&&qe.isValid&&qe.texture&&g.init(qe,i.renderState)}if(Re&&Re.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let qe=0;qe<ye.length;qe++){const yt=ye[qe].camera;if(yt){let F=p[yt];F||(F=new Xf,p[yt]=F);const Ke=u.getCameraImage(yt);F.sourceTexture=Ke}}}}for(let ye=0;ye<A.length;ye++){const He=w[ye],Re=A[ye];He!==null&&Re!==void 0&&Re.update(He,ee,c||o)}Qe&&Qe(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}const ot=new Kf;ot.setAnimationLoop(st),this.setAnimationLoop=function(Z){Qe=Z},this.dispose=function(){}}}const os=new Pn,O_=new ke;function k_(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,zf(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,b)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===nn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===nn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,b=v.envMapRotation;y&&(g.envMap.value=y,os.copy(b),os.x*=-1,os.y*=-1,os.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),g.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(os)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function z_(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const b=y.program;n.uniformBlockBinding(v,b)}function c(v,y){let b=i[v.id];b===void 0&&(m(v),b=h(v),i[v.id]=b,v.addEventListener("dispose",g));const A=y.program;n.updateUBOMapping(v,A);const w=e.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function h(v){const y=u();v.__bindingPointIndex=y;const b=r.createBuffer(),A=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],b=v.uniforms,A=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,R=b.length;w<R;w++){const D=Array.isArray(b[w])?b[w]:[b[w]];for(let E=0,M=D.length;E<M;E++){const I=D[E];if(f(I,w,E,A)===!0){const O=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let V=0;for(let k=0;k<N.length;k++){const B=N[k],Y=x(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,O+V,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,b,A){const w=v.value,R=y+"_"+b;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const D=A[R];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return A[R]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function m(v){const y=v.uniforms;let b=0;const A=16;for(let R=0,D=y.length;R<D;R++){const E=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,I=E.length;M<I;M++){const O=E[M],N=Array.isArray(O.value)?O.value:[O.value];for(let V=0,k=N.length;V<k;V++){const B=N[V],Y=x(B),W=b%A,K=W%Y.boundary,ie=W+K;b+=K,ie!==0&&A-ie<Y.storage&&(b+=A-ie),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=Y.storage}}}const w=b%A;return w>0&&(b+=A-w),v.__size=b,v.__cache={},this}function x(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}const V_=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let fi=null;function H_(){return fi===null&&(fi=new ah(V_,32,32,Qc,Ti),fi.minFilter=Kt,fi.magFilter=Kt,fi.wrapS=qn,fi.wrapT=qn,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class ad{constructor(e={}){const{canvas:t=bm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Set([th,eh,Jc]),x=new Set([Jn,xs,zr,Zs,Yc,Kc]),g=new Uint32Array(4),p=new Int32Array(4);let v=null,y=null;const b=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let R=!1;this._outputColorSpace=zt;let D=0,E=0,M=null,I=-1,O=null;const N=new rt,V=new rt;let k=null;const B=new Se(0);let Y=0,W=t.width,K=t.height,ie=1,me=null,oe=null;const Qe=new rt(0,0,W,K),st=new rt(0,0,W,K);let ot=!1;const Z=new ch;let ee=!1,ye=!1;const He=new ke,Re=new L,Ye=new rt,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function yt(){return M===null?ie:1}let F=n;function Ke(C,H){return t.getContext(C,H)}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wc}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",_e,!1),F===null){const H="webgl2";if(F=Ke(H,C),F===null)throw Ke(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw C("WebGLRenderer: "+C.message),C}let Ze,pt,Me,wt,Pe,Ve,P,T,X,J,te,$,Te,ue,Ie,Ee,ne,ae,Ue,Ne,ge,Oe,U,de;function le(){Ze=new Zv(F),Ze.init(),Oe=new D_(F,Ze),pt=new Hv(F,Ze,e,Oe),Me=new P_(F,Ze),pt.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),wt=new ey(F),Pe=new v_,Ve=new I_(F,Ze,Me,Pe,pt,Oe,wt),P=new Wv(w),T=new Kv(w),X=new s0(F),U=new zv(F,X),J=new Jv(F,X,wt,U),te=new ny(F,J,X,wt),Ue=new ty(F,pt,Ve),Ee=new Gv(Pe),$=new x_(w,P,T,Ze,pt,U,Ee),Te=new k_(w,Pe),ue=new __,Ie=new T_(Ze),ae=new kv(w,P,T,Me,te,f,l),ne=new R_(w,te,pt),de=new z_(F,wt,pt,Me),Ne=new Vv(F,Ze,wt),ge=new Qv(F,Ze,wt),wt.programs=$.programs,w.capabilities=pt,w.extensions=Ze,w.properties=Pe,w.renderLists=ue,w.shadowMap=ne,w.state=Me,w.info=wt}le();const ce=new B_(w,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=Ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(C){C!==void 0&&(ie=C,this.setSize(W,K,!1))},this.getSize=function(C){return C.set(W,K)},this.setSize=function(C,H,q=!0){if(ce.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,K=H,t.width=Math.floor(C*ie),t.height=Math.floor(H*ie),q===!0&&(t.style.width=C+"px",t.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(W*ie,K*ie).floor()},this.setDrawingBufferSize=function(C,H,q){W=C,K=H,ie=q,t.width=Math.floor(C*q),t.height=Math.floor(H*q),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(Qe)},this.setViewport=function(C,H,q,j){C.isVector4?Qe.set(C.x,C.y,C.z,C.w):Qe.set(C,H,q,j),Me.viewport(N.copy(Qe).multiplyScalar(ie).round())},this.getScissor=function(C){return C.copy(st)},this.setScissor=function(C,H,q,j){C.isVector4?st.set(C.x,C.y,C.z,C.w):st.set(C,H,q,j),Me.scissor(V.copy(st).multiplyScalar(ie).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(C){Me.setScissorTest(ot=C)},this.setOpaqueSort=function(C){me=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,q=!0){let j=0;if(C){let G=!1;if(M!==null){const re=M.texture.format;G=m.has(re)}if(G){const re=M.texture.type,fe=x.has(re),be=ae.getClearColor(),ve=ae.getClearAlpha(),Fe=be.r,Be=be.g,Le=be.b;fe?(g[0]=Fe,g[1]=Be,g[2]=Le,g[3]=ve,F.clearBufferuiv(F.COLOR,0,g)):(p[0]=Fe,p[1]=Be,p[2]=Le,p[3]=ve,F.clearBufferiv(F.COLOR,0,p))}else j|=F.COLOR_BUFFER_BIT}H&&(j|=F.DEPTH_BUFFER_BIT),q&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ae.dispose(),ue.dispose(),Ie.dispose(),Pe.dispose(),P.dispose(),T.dispose(),te.dispose(),U.dispose(),de.dispose(),$.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Fh),ce.removeEventListener("sessionend",Uh),Qi.stop()};function se(C){C.preventDefault(),ua("WebGLRenderer: Context Lost."),R=!0}function Q(){ua("WebGLRenderer: Context Restored."),R=!1;const C=wt.autoReset,H=ne.enabled,q=ne.autoUpdate,j=ne.needsUpdate,G=ne.type;le(),wt.autoReset=C,ne.enabled=H,ne.autoUpdate=q,ne.needsUpdate=j,ne.type=G}function _e(C){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ze(C){const H=C.target;H.removeEventListener("dispose",ze),gt(H)}function gt(C){ht(C),Pe.remove(C)}function ht(C){const H=Pe.get(C).programs;H!==void 0&&(H.forEach(function(q){$.releaseProgram(q)}),C.isShaderMaterial&&$.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,q,j,G,re){H===null&&(H=Bt);const fe=G.isMesh&&G.matrixWorld.determinant()<0,be=Fp(C,H,q,j,G);Me.setMaterial(j,fe);let ve=q.index,Fe=1;if(j.wireframe===!0){if(ve=J.getWireframeAttribute(q),ve===void 0)return;Fe=2}const Be=q.drawRange,Le=q.attributes.position;let Je=Be.start*Fe,ut=(Be.start+Be.count)*Fe;re!==null&&(Je=Math.max(Je,re.start*Fe),ut=Math.min(ut,(re.start+re.count)*Fe)),ve!==null?(Je=Math.max(Je,0),ut=Math.min(ut,ve.count)):Le!=null&&(Je=Math.max(Je,0),ut=Math.min(ut,Le.count));const Et=ut-Je;if(Et<0||Et===1/0)return;U.setup(G,j,be,q,ve);let Tt,ft=Ne;if(ve!==null&&(Tt=X.get(ve),ft=ge,ft.setIndex(Tt)),G.isMesh)j.wireframe===!0?(Me.setLineWidth(j.wireframeLinewidth*yt()),ft.setMode(F.LINES)):ft.setMode(F.TRIANGLES);else if(G.isLine){let De=j.linewidth;De===void 0&&(De=1),Me.setLineWidth(De*yt()),G.isLineSegments?ft.setMode(F.LINES):G.isLineLoop?ft.setMode(F.LINE_LOOP):ft.setMode(F.LINE_STRIP)}else G.isPoints?ft.setMode(F.POINTS):G.isSprite&&ft.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Xr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))ft.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const De=G._multiDrawStarts,Mt=G._multiDrawCounts,nt=G._multiDrawCount,sn=ve?X.get(ve).bytesPerElement:1,bs=Pe.get(j).currentProgram.getUniforms();for(let rn=0;rn<nt;rn++)bs.setValue(F,"_gl_DrawID",rn),ft.render(De[rn]/sn,Mt[rn])}else if(G.isInstancedMesh)ft.renderInstances(Je,Et,G.count);else if(q.isInstancedBufferGeometry){const De=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Mt=Math.min(q.instanceCount,De);ft.renderInstances(Je,Et,Mt)}else ft.render(Je,Et)};function Nn(C,H,q){C.transparent===!0&&C.side===fn&&C.forceSinglePass===!1?(C.side=nn,C.needsUpdate=!0,oo(C,H,q),C.side=Ei,C.needsUpdate=!0,oo(C,H,q),C.side=fn):oo(C,H,q)}this.compile=function(C,H,q=null){q===null&&(q=C),y=Ie.get(q),y.init(H),A.push(y),q.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),C!==q&&C.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights();const j=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const re=G.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const be=re[fe];Nn(be,q,G),j.add(be)}else Nn(re,q,G),j.add(re)}),y=A.pop(),j},this.compileAsync=function(C,H,q=null){const j=this.compile(C,H,q);return new Promise(G=>{function re(){if(j.forEach(function(fe){Pe.get(fe).currentProgram.isReady()&&j.delete(fe)}),j.size===0){G(C);return}setTimeout(re,10)}Ze.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let xn=null;function Np(C){xn&&xn(C)}function Fh(){Qi.stop()}function Uh(){Qi.start()}const Qi=new Kf;Qi.setAnimationLoop(Np),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(C){xn=C,ce.setAnimationLoop(C),C===null?Qi.stop():Qi.start()},ce.addEventListener("sessionstart",Fh),ce.addEventListener("sessionend",Uh),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(H),H=ce.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,H,M),y=Ie.get(C,A.length),y.init(H),A.push(y),He.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Z.setFromProjectionMatrix(He,jn,H.reversedDepth),ye=this.localClippingEnabled,ee=Ee.init(this.clippingPlanes,ye),v=ue.get(C,b.length),v.init(),b.push(v),ce.enabled===!0&&ce.isPresenting===!0){const re=w.xr.getDepthSensingMesh();re!==null&&Va(re,H,-1/0,w.sortObjects)}Va(C,H,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(me,oe),qe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,qe&&ae.addToRenderList(v,C),this.info.render.frame++,ee===!0&&Ee.beginShadows();const q=y.state.shadowsArray;ne.render(q,C,H),ee===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=v.opaque,G=v.transmissive;if(y.setupLights(),H.isArrayCamera){const re=H.cameras;if(G.length>0)for(let fe=0,be=re.length;fe<be;fe++){const ve=re[fe];Oh(j,G,C,ve)}qe&&ae.render(C);for(let fe=0,be=re.length;fe<be;fe++){const ve=re[fe];Bh(v,C,ve,ve.viewport)}}else G.length>0&&Oh(j,G,C,H),qe&&ae.render(C),Bh(v,C,H);M!==null&&E===0&&(Ve.updateMultisampleRenderTarget(M),Ve.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(w,C,H),U.resetDefaultState(),I=-1,O=null,A.pop(),A.length>0?(y=A[A.length-1],ee===!0&&Ee.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,b.pop(),b.length>0?v=b[b.length-1]:v=null};function Va(C,H,q,j){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){j&&Ye.setFromMatrixPosition(C.matrixWorld).applyMatrix4(He);const fe=te.update(C),be=C.material;be.visible&&v.push(C,fe,be,q,Ye.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const fe=te.update(C),be=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ye.copy(C.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ye.copy(fe.boundingSphere.center)),Ye.applyMatrix4(C.matrixWorld).applyMatrix4(He)),Array.isArray(be)){const ve=fe.groups;for(let Fe=0,Be=ve.length;Fe<Be;Fe++){const Le=ve[Fe],Je=be[Le.materialIndex];Je&&Je.visible&&v.push(C,fe,Je,q,Ye.z,Le)}}else be.visible&&v.push(C,fe,be,q,Ye.z,null)}}const re=C.children;for(let fe=0,be=re.length;fe<be;fe++)Va(re[fe],H,q,j)}function Bh(C,H,q,j){const{opaque:G,transmissive:re,transparent:fe}=C;y.setupLightsView(q),ee===!0&&Ee.setGlobalState(w.clippingPlanes,q),j&&Me.viewport(N.copy(j)),G.length>0&&ro(G,H,q),re.length>0&&ro(re,H,q),fe.length>0&&ro(fe,H,q),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Oh(C,H,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[j.id]===void 0&&(y.state.transmissionRenderTarget[j.id]=new Qn(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Ti:Jn,minFilter:wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const re=y.state.transmissionRenderTarget[j.id],fe=j.viewport||N;re.setSize(fe.z*w.transmissionResolutionScale,fe.w*w.transmissionResolutionScale);const be=w.getRenderTarget(),ve=w.getActiveCubeFace(),Fe=w.getActiveMipmapLevel();w.setRenderTarget(re),w.getClearColor(B),Y=w.getClearAlpha(),Y<1&&w.setClearColor(16777215,.5),w.clear(),qe&&ae.render(q);const Be=w.toneMapping;w.toneMapping=Wi;const Le=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),y.setupLightsView(j),ee===!0&&Ee.setGlobalState(w.clippingPlanes,j),ro(C,q,j),Ve.updateMultisampleRenderTarget(re),Ve.updateRenderTargetMipmap(re),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ut=0,Et=H.length;ut<Et;ut++){const Tt=H[ut],{object:ft,geometry:De,material:Mt,group:nt}=Tt;if(Mt.side===fn&&ft.layers.test(j.layers)){const sn=Mt.side;Mt.side=nn,Mt.needsUpdate=!0,kh(ft,q,j,De,Mt,nt),Mt.side=sn,Mt.needsUpdate=!0,Je=!0}}Je===!0&&(Ve.updateMultisampleRenderTarget(re),Ve.updateRenderTargetMipmap(re))}w.setRenderTarget(be,ve,Fe),w.setClearColor(B,Y),Le!==void 0&&(j.viewport=Le),w.toneMapping=Be}function ro(C,H,q){const j=H.isScene===!0?H.overrideMaterial:null;for(let G=0,re=C.length;G<re;G++){const fe=C[G],{object:be,geometry:ve,group:Fe}=fe;let Be=fe.material;Be.allowOverride===!0&&j!==null&&(Be=j),be.layers.test(q.layers)&&kh(be,H,q,ve,Be,Fe)}}function kh(C,H,q,j,G,re){C.onBeforeRender(w,H,q,j,G,re),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(w,H,q,j,C,re),G.transparent===!0&&G.side===fn&&G.forceSinglePass===!1?(G.side=nn,G.needsUpdate=!0,w.renderBufferDirect(q,H,j,G,C,re),G.side=Ei,G.needsUpdate=!0,w.renderBufferDirect(q,H,j,G,C,re),G.side=fn):w.renderBufferDirect(q,H,j,G,C,re),C.onAfterRender(w,H,q,j,G,re)}function oo(C,H,q){H.isScene!==!0&&(H=Bt);const j=Pe.get(C),G=y.state.lights,re=y.state.shadowsArray,fe=G.state.version,be=$.getParameters(C,G.state,re,H,q),ve=$.getProgramCacheKey(be);let Fe=j.programs;j.environment=C.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(C.isMeshStandardMaterial?T:P).get(C.envMap||j.environment),j.envMapRotation=j.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Fe===void 0&&(C.addEventListener("dispose",ze),Fe=new Map,j.programs=Fe);let Be=Fe.get(ve);if(Be!==void 0){if(j.currentProgram===Be&&j.lightsStateVersion===fe)return Vh(C,be),Be}else be.uniforms=$.getUniforms(C),C.onBeforeCompile(be,w),Be=$.acquireProgram(be,ve),Fe.set(ve,Be),j.uniforms=be.uniforms;const Le=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Le.clippingPlanes=Ee.uniform),Vh(C,be),j.needsLights=Bp(C),j.lightsStateVersion=fe,j.needsLights&&(Le.ambientLightColor.value=G.state.ambient,Le.lightProbe.value=G.state.probe,Le.directionalLights.value=G.state.directional,Le.directionalLightShadows.value=G.state.directionalShadow,Le.spotLights.value=G.state.spot,Le.spotLightShadows.value=G.state.spotShadow,Le.rectAreaLights.value=G.state.rectArea,Le.ltc_1.value=G.state.rectAreaLTC1,Le.ltc_2.value=G.state.rectAreaLTC2,Le.pointLights.value=G.state.point,Le.pointLightShadows.value=G.state.pointShadow,Le.hemisphereLights.value=G.state.hemi,Le.directionalShadowMap.value=G.state.directionalShadowMap,Le.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Le.spotShadowMap.value=G.state.spotShadowMap,Le.spotLightMatrix.value=G.state.spotLightMatrix,Le.spotLightMap.value=G.state.spotLightMap,Le.pointShadowMap.value=G.state.pointShadowMap,Le.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=Be,j.uniformsList=null,Be}function zh(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=ta.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Vh(C,H){const q=Pe.get(C);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Fp(C,H,q,j,G){H.isScene!==!0&&(H=Bt),Ve.resetTextureUnits();const re=H.fog,fe=j.isMeshStandardMaterial?H.environment:null,be=M===null?w.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Zt,ve=(j.isMeshStandardMaterial?T:P).get(j.envMap||fe),Fe=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!q.morphAttributes.position,Je=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color;let Et=Wi;j.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Et=w.toneMapping);const Tt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ft=Tt!==void 0?Tt.length:0,De=Pe.get(j),Mt=y.state.lights;if(ee===!0&&(ye===!0||C!==O)){const jt=C===O&&j.id===I;Ee.setState(j,C,jt)}let nt=!1;j.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Mt.state.version||De.outputColorSpace!==be||G.isBatchedMesh&&De.batching===!1||!G.isBatchedMesh&&De.batching===!0||G.isBatchedMesh&&De.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&De.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&De.instancing===!1||!G.isInstancedMesh&&De.instancing===!0||G.isSkinnedMesh&&De.skinning===!1||!G.isSkinnedMesh&&De.skinning===!0||G.isInstancedMesh&&De.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&De.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&De.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&De.instancingMorph===!1&&G.morphTexture!==null||De.envMap!==ve||j.fog===!0&&De.fog!==re||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ee.numPlanes||De.numIntersection!==Ee.numIntersection)||De.vertexAlphas!==Fe||De.vertexTangents!==Be||De.morphTargets!==Le||De.morphNormals!==Je||De.morphColors!==ut||De.toneMapping!==Et||De.morphTargetsCount!==ft)&&(nt=!0):(nt=!0,De.__version=j.version);let sn=De.currentProgram;nt===!0&&(sn=oo(j,H,G));let bs=!1,rn=!1,mr=!1;const St=sn.getUniforms(),Jt=De.uniforms;if(Me.useProgram(sn.program)&&(bs=!0,rn=!0,mr=!0),j.id!==I&&(I=j.id,rn=!0),bs||O!==C){Me.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),St.setValue(F,"projectionMatrix",C.projectionMatrix),St.setValue(F,"viewMatrix",C.matrixWorldInverse);const Qt=St.map.cameraPosition;Qt!==void 0&&Qt.setValue(F,Re.setFromMatrixPosition(C.matrixWorld)),pt.logarithmicDepthBuffer&&St.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&St.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),O!==C&&(O=C,rn=!0,mr=!0)}if(G.isSkinnedMesh){St.setOptional(F,G,"bindMatrix"),St.setOptional(F,G,"bindMatrixInverse");const jt=G.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),St.setValue(F,"boneTexture",jt.boneTexture,Ve))}G.isBatchedMesh&&(St.setOptional(F,G,"batchingTexture"),St.setValue(F,"batchingTexture",G._matricesTexture,Ve),St.setOptional(F,G,"batchingIdTexture"),St.setValue(F,"batchingIdTexture",G._indirectTexture,Ve),St.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&St.setValue(F,"batchingColorTexture",G._colorsTexture,Ve));const cn=q.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&Ue.update(G,q,sn),(rn||De.receiveShadow!==G.receiveShadow)&&(De.receiveShadow=G.receiveShadow,St.setValue(F,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Jt.envMap.value=ve,Jt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&H.environment!==null&&(Jt.envMapIntensity.value=H.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=H_()),rn&&(St.setValue(F,"toneMappingExposure",w.toneMappingExposure),De.needsLights&&Up(Jt,mr),re&&j.fog===!0&&Te.refreshFogUniforms(Jt,re),Te.refreshMaterialUniforms(Jt,j,ie,K,y.state.transmissionRenderTarget[C.id]),ta.upload(F,zh(De),Jt,Ve)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ta.upload(F,zh(De),Jt,Ve),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&St.setValue(F,"center",G.center),St.setValue(F,"modelViewMatrix",G.modelViewMatrix),St.setValue(F,"normalMatrix",G.normalMatrix),St.setValue(F,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const jt=j.uniformsGroups;for(let Qt=0,Ha=jt.length;Qt<Ha;Qt++){const es=jt[Qt];de.update(es,sn),de.bind(es,sn)}}return sn}function Up(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function Bp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,H,q){const j=Pe.get(C);j.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Pe.get(C.texture).__webglTexture=H,Pe.get(C.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){const q=Pe.get(C);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const Op=F.createFramebuffer();this.setRenderTarget=function(C,H=0,q=0){M=C,D=H,E=q;let j=!0,G=null,re=!1,fe=!1;if(C){const ve=Pe.get(C);if(ve.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(F.FRAMEBUFFER,null),j=!1;else if(ve.__webglFramebuffer===void 0)Ve.setupRenderTarget(C);else if(ve.__hasExternalTextures)Ve.rebindTextures(C,Pe.get(C.texture).__webglTexture,Pe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Le=C.depthTexture;if(ve.__boundDepthTexture!==Le){if(Le!==null&&Pe.has(Le)&&(C.width!==Le.image.width||C.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(C)}}const Fe=C.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(fe=!0);const Be=Pe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[H])?G=Be[H][q]:G=Be[H],re=!0):C.samples>0&&Ve.useMultisampledRTT(C)===!1?G=Pe.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?G=Be[q]:G=Be,N.copy(C.viewport),V.copy(C.scissor),k=C.scissorTest}else N.copy(Qe).multiplyScalar(ie).floor(),V.copy(st).multiplyScalar(ie).floor(),k=ot;if(q!==0&&(G=Op),Me.bindFramebuffer(F.FRAMEBUFFER,G)&&j&&Me.drawBuffers(C,G),Me.viewport(N),Me.scissor(V),Me.setScissorTest(k),re){const ve=Pe.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,ve.__webglTexture,q)}else if(fe){const ve=H;for(let Fe=0;Fe<C.textures.length;Fe++){const Be=Pe.get(C.textures[Fe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,q,ve)}}else if(C!==null&&q!==0){const ve=Pe.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,q)}I=-1},this.readRenderTargetPixels=function(C,H,q,j,G,re,fe,be=0){if(!(C&&C.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){Me.bindFramebuffer(F.FRAMEBUFFER,ve);try{const Fe=C.textures[be],Be=Fe.format,Le=Fe.type;if(!pt.textureFormatReadable(Be)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Le)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-j&&q>=0&&q<=C.height-G&&(C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+be),F.readPixels(H,q,j,G,Oe.convert(Be),Oe.convert(Le),re))}finally{const Fe=M!==null?Pe.get(M).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(C,H,q,j,G,re,fe,be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(H>=0&&H<=C.width-j&&q>=0&&q<=C.height-G){Me.bindFramebuffer(F.FRAMEBUFFER,ve);const Fe=C.textures[be],Be=Fe.format,Le=Fe.type;if(!pt.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Je),F.bufferData(F.PIXEL_PACK_BUFFER,re.byteLength,F.STREAM_READ),C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+be),F.readPixels(H,q,j,G,Oe.convert(Be),Oe.convert(Le),0);const ut=M!==null?Pe.get(M).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,ut);const Et=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await wm(F,Et,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Je),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,re),F.deleteBuffer(Je),F.deleteSync(Et),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,q=0){const j=Math.pow(2,-q),G=Math.floor(C.image.width*j),re=Math.floor(C.image.height*j),fe=H!==null?H.x:0,be=H!==null?H.y:0;Ve.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,fe,be,G,re),Me.unbindTexture()};const kp=F.createFramebuffer(),zp=F.createFramebuffer();this.copyTextureToTexture=function(C,H,q=null,j=null,G=0,re=null){re===null&&(G!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=G,G=0):re=0);let fe,be,ve,Fe,Be,Le,Je,ut,Et;const Tt=C.isCompressedTexture?C.mipmaps[re]:C.image;if(q!==null)fe=q.max.x-q.min.x,be=q.max.y-q.min.y,ve=q.isBox3?q.max.z-q.min.z:1,Fe=q.min.x,Be=q.min.y,Le=q.isBox3?q.min.z:0;else{const cn=Math.pow(2,-G);fe=Math.floor(Tt.width*cn),be=Math.floor(Tt.height*cn),C.isDataArrayTexture?ve=Tt.depth:C.isData3DTexture?ve=Math.floor(Tt.depth*cn):ve=1,Fe=0,Be=0,Le=0}j!==null?(Je=j.x,ut=j.y,Et=j.z):(Je=0,ut=0,Et=0);const ft=Oe.convert(H.format),De=Oe.convert(H.type);let Mt;H.isData3DTexture?(Ve.setTexture3D(H,0),Mt=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ve.setTexture2DArray(H,0),Mt=F.TEXTURE_2D_ARRAY):(Ve.setTexture2D(H,0),Mt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const nt=F.getParameter(F.UNPACK_ROW_LENGTH),sn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),bs=F.getParameter(F.UNPACK_SKIP_PIXELS),rn=F.getParameter(F.UNPACK_SKIP_ROWS),mr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Tt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Tt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Fe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Be),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Le);const St=C.isDataArrayTexture||C.isData3DTexture,Jt=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){const cn=Pe.get(C),jt=Pe.get(H),Qt=Pe.get(cn.__renderTarget),Ha=Pe.get(jt.__renderTarget);Me.bindFramebuffer(F.READ_FRAMEBUFFER,Qt.__webglFramebuffer),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ha.__webglFramebuffer);for(let es=0;es<ve;es++)St&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.get(C).__webglTexture,G,Le+es),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.get(H).__webglTexture,re,Et+es)),F.blitFramebuffer(Fe,Be,fe,be,Je,ut,fe,be,F.DEPTH_BUFFER_BIT,F.NEAREST);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||C.isRenderTargetTexture||Pe.has(C)){const cn=Pe.get(C),jt=Pe.get(H);Me.bindFramebuffer(F.READ_FRAMEBUFFER,kp),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,zp);for(let Qt=0;Qt<ve;Qt++)St?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,cn.__webglTexture,G,Le+Qt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,cn.__webglTexture,G),Jt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.__webglTexture,re,Et+Qt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,jt.__webglTexture,re),G!==0?F.blitFramebuffer(Fe,Be,fe,be,Je,ut,fe,be,F.COLOR_BUFFER_BIT,F.NEAREST):Jt?F.copyTexSubImage3D(Mt,re,Je,ut,Et+Qt,Fe,Be,fe,be):F.copyTexSubImage2D(Mt,re,Je,ut,Fe,Be,fe,be);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Jt?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(Mt,re,Je,ut,Et,fe,be,ve,ft,De,Tt.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(Mt,re,Je,ut,Et,fe,be,ve,ft,Tt.data):F.texSubImage3D(Mt,re,Je,ut,Et,fe,be,ve,ft,De,Tt):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,re,Je,ut,fe,be,ft,De,Tt.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,re,Je,ut,Tt.width,Tt.height,ft,Tt.data):F.texSubImage2D(F.TEXTURE_2D,re,Je,ut,fe,be,ft,De,Tt);F.pixelStorei(F.UNPACK_ROW_LENGTH,nt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,sn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,bs),F.pixelStorei(F.UNPACK_SKIP_ROWS,rn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,mr),re===0&&H.generateMipmaps&&F.generateMipmap(Mt),Me.unbindTexture()},this.initRenderTarget=function(C){Pe.get(C).__webglFramebuffer===void 0&&Ve.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ve.setTextureCube(C,0):C.isData3DTexture?Ve.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ve.setTexture2DArray(C,0):Ve.setTexture2D(C,0),Me.unbindTexture()},this.resetState=function(){D=0,E=0,M=null,Me.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class Dr extends vt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ce(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Os=new L,ld=new ke,cd=new ke,hd=new L,ud=new L;class G_{constructor(e={}){const t=this;let n,i,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:i}},this.render=function(m,x){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),ld.copy(x.matrixWorldInverse),cd.multiplyMatrices(x.projectionMatrix,ld),h(m,m,x),this.sortObjects&&f(m)},this.setSize=function(m,x){n=m,i=x,s=n/2,o=i/2,l.style.width=m+"px",l.style.height=x+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let x=0,g=m.children.length;x<g;x++)c(m.children[x])}function h(m,x,g){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){Os.setFromMatrixPosition(m.matrixWorld),Os.applyMatrix4(cd);const p=Os.z>=-1&&Os.z<=1&&m.layers.test(g.layers)===!0,v=m.element;v.style.display=p===!0?"":"none",p===!0&&(m.onBeforeRender(t,x,g),v.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(Os.x*s+s)+"px,"+(-Os.y*o+o)+"px)",v.parentNode!==l&&l.appendChild(v),m.onAfterRender(t,x,g));const y={distanceToCameraSquared:u(g,m)};a.objects.set(m,y)}for(let p=0,v=m.children.length;p<v;p++)h(m.children[p],x,g)}function u(m,x){return hd.setFromMatrixPosition(m.matrixWorld),ud.setFromMatrixPosition(x.matrixWorld),hd.distanceToSquared(ud)}function d(m){const x=[];return m.traverseVisible(function(g){g.isCSS2DObject&&x.push(g)}),x}function f(m){const x=d(m).sort(function(p,v){if(p.renderOrder!==v.renderOrder)return v.renderOrder-p.renderOrder;const y=a.objects.get(p).distanceToCameraSquared,b=a.objects.get(v).distanceToCameraSquared;return y-b}),g=x.length;for(let p=0,v=x.length;p<v;p++)x[p].element.style.zIndex=g-p}}}function dd(r,e){if(e===hm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Cc||e===Df){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Cc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class La extends hr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new lb(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Or.extractUrlBase(e);o=Or.resolveURL(c,this.path)}else o=Or.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new $f(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===tp){try{o[$e.KHR_BINARY_GLTF]=new cb(e)}catch(u){i&&i(u);return}s=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new wb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new q_;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new hb(s,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new ub;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new db;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function W_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class X_{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Zt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ea(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yf(h),c.distance=u;break;case"spot":c=new Vg(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),kn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class q_{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,zt))}return Promise.all(i)}}class j_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class $_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(a,a)}return Promise.all(s)}}class Y_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class K_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Z_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,zt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class J_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Q_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(a[0],a[1],a[2],Zt),Promise.all(s)}}class eb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class tb{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,zt)),Promise.all(s)}}class nb{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class ib{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class sb{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class rb{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class ob{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class ab{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class lb{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==un.TRIANGLES&&c.mode!==un.TRIANGLE_STRIP&&c.mode!==un.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const x=new ke,g=new L,p=new ln,v=new L(1,1,1),y=new fg(m.geometry,m.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&v.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,x.compose(g,p,v));for(const b in l)if(b==="_COLOR_0"){const A=l[b];y.instanceColor=new Lc(A.array,A.itemSize,A.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&m.geometry.setAttribute(b,l[b]);vt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const tp="glTF",Er=12,fd={JSON:1313821514,BIN:5130562};class cb{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==tp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Er,s=new DataView(e,Er);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===fd.JSON){const c=new Uint8Array(e,Er+o,a);this.content=n.decode(c)}else if(l===fd.BIN){const c=Er+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class hb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Nc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Nc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Xs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const x=f.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(f)},a,c,Zt,d)})})}}class ub{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class db{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class np extends Kr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,x=m-c,g=-2*f+3*d,p=f-d,v=1-g,y=p-d+u;for(let b=0;b!==a;b++){const A=o[x+b+a],w=o[x+b+l]*h,R=o[m+b+a],D=o[m+b]*h;s[b]=v*A+y*w+g*R+p*D}return s}}const fb=new ln;class pb extends np{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return fb.fromArray(s).normalize().toArray(s),s}}const un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pd={9728:Vt,9729:Kt,9984:Tf,9985:Yo,9986:Pr,9987:wi},md={33071:qn,33648:la,10497:Ks},Ml={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mb={CUBICSPLINE:void 0,LINEAR:Gr,STEP:Hr},Sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Kn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ei})),r.DefaultMaterial}function as(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function kn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xb(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function vb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yb(r){let e;const t=r.extensions&&r.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+El(t.attributes):e=r.indices+":"+El(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+El(r.targets[n]);return e}function El(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Fc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _b(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const bb=new ke;class wb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new W_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Og(this.options.manager):this.textureLoader=new Wg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $f(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return as(s,a,i),kn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Or.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ml[i.type],a=Xs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new qt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Ml[i.type],c=Xs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let x,g;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(v);y||(x=new c(a,p*f,i.count*f/h),y=new lg(x,f/h),t.cache.add(v,y)),g=new oh(y,l,d%f/h,m)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),g=new qt(x,l,m);if(i.sparse!==void 0){const p=Ml.SCALAR,v=Xs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,A=new v(o[1],y,i.sparse.count*p),w=new c(o[2],b,i.sparse.count*l);a!==null&&(g=new qt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,D=A.length;R<D;R++){const E=A[R];if(g.setX(E,w[R*l]),l>=2&&g.setY(E,w[R*l+1]),l>=3&&g.setZ(E,w[R*l+2]),l>=4&&g.setW(E,w[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=pd[d.magFilter]||Kt,h.minFilter=pd[d.minFilter]||wi,h.wrapS=md[d.wrapS]||Ks,h.wrapT=md[d.wrapT]||Ks,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Vt&&h.minFilter!==Kt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){const g=new Ft(x);g.needsUpdate=!0,d(g)}),t.load(Or.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),kn(u,o),u.userData.mimeType=o.mimeType||_b(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Wf,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new hh,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Kn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const u=i[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Zt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,zt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=fn);const h=s.alphaMode||Sl.OPAQUE;if(h===Sl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Sl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==tn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ce(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==tn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==tn){const u=s.emissiveFactor;a.emissive=new Se().setRGB(u[0],u[1],u[2],Zt)}return s.emissiveTexture!==void 0&&o!==tn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,zt)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),kn(u,s),t.associations.set(u,{materials:e}),s.extensions&&as(i,u,s),u})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return gd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=yb(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=gd(new Ut,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?gb(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const x=h[f],g=o[f];let p;const v=c[f];if(g.mode===un.TRIANGLES||g.mode===un.TRIANGLE_STRIP||g.mode===un.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new hg(x,v):new dt(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===un.TRIANGLE_STRIP?p.geometry=dd(p.geometry,Df):g.mode===un.TRIANGLE_FAN&&(p.geometry=dd(p.geometry,Cc));else if(g.mode===un.LINES)p=new xg(x,v);else if(g.mode===un.LINE_STRIP)p=new Ea(x,v);else if(g.mode===un.LINE_LOOP)p=new vg(x,v);else if(g.mode===un.POINTS)p=new yg(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&vb(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),kn(p,s),g.extensions&&as(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&as(i,u[0],s),u[0];const d=new An;s.extensions&&as(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(Ot.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Aa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new ke;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new lh(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],x=f.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let y=0,b=d.length;y<b;y++){const A=d[y],w=f[y],R=m[y],D=x[y],E=g[y];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const M=n._createAnimationTracks(A,w,R,D,E);if(M)for(let I=0;I<M.length;I++)p.push(M[I])}const v=new Pg(s,void 0,p);return kn(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,bb)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Gf:c.length>1?h=new An:c.length===1?h=c[0]:h=new vt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),kn(h,s),s.extensions&&as(n,h,s),s.matrix!==void 0){const u=new ke;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new An;n.name&&(s.name=i.createUniqueName(n.name)),kn(s,n),n.extensions&&as(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof mn||d instanceof Ft)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Fi[s.path]===Fi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Fi[s.path]){case Fi.weights:c=tr;break;case Fi.rotation:c=nr;break;case Fi.translation:case Fi.scale:c=ir;break;default:switch(n.itemSize){case 1:c=tr;break;case 2:case 3:default:c=ir;break}break}const h=i.interpolation!==void 0?mb[i.interpolation]:Gr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+Fi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Fc(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof nr?pb:np;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Mb(r,e,t){const n=e.attributes,i=new ti;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const h=Fc(Xs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,l=new L;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const x=Fc(Xs[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new ni;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function gd(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Nc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return tt.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),kn(r,e),Mb(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?xb(r,e.targets,t):r})}class Cn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new S);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new S);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Cn);const n=this.elements,i=e.elements,s=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],u=n[5],d=n[6],f=n[7],m=n[8],x=i[0],g=i[1],p=i[2],v=i[3],y=i[4],b=i[5],A=i[6],w=i[7],R=i[8];return s[0]=o*x+a*v+l*A,s[1]=o*g+a*y+l*w,s[2]=o*p+a*b+l*R,s[3]=c*x+h*v+u*A,s[4]=c*g+h*y+u*w,s[5]=c*p+h*b+u*R,s[6]=d*x+f*v+m*A,s[7]=d*g+f*y+m*w,s[8]=d*p+f*b+m*R,t}scale(e,t){t===void 0&&(t=new Cn);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new S);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let l=3;const c=l;let h;const u=4;let d;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=u;do d=u-h,s[d+i*o]+=s[d+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];h=u;do d=u-h,s[d+i*a]=d<=o?0:s[d+i*a]-s[d+i*o]*f;while(--h)}}while(--l);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Cn);const t=3,n=6,i=Sb;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let u;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do u=h-c,i[u+n*s]+=i[u+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const d=i[s+n*o]/i[s+n*s];c=h;do u=h-c,i[u+n*o]=u<=s?0:i[u+n*o]-i[u+n*s]*d;while(--c)}}while(--a);s=2;do{o=s-1;do{const d=i[s+n*o]/i[s+n*s];c=n;do u=n-c,i[u+n*o]=i[u+n*o]-i[u+n*s]*d;while(--c)}while(o--)}while(--s);s=2;do{const d=1/i[s+n*s];c=n;do u=n-c,i[u+n*s]=i[u+n*s]*d;while(--c)}while(s--);s=2;do{o=2;do{if(u=i[t+o+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,u)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,a=n+n,l=i+i,c=t*o,h=t*a,u=t*l,d=n*a,f=n*l,m=i*l,x=s*o,g=s*a,p=s*l,v=this.elements;return v[3*0+0]=1-(d+m),v[3*0+1]=h-p,v[3*0+2]=u+g,v[3*1+0]=h+p,v[3*1+1]=1-(c+m),v[3*1+2]=f-x,v[3*2+0]=u-g,v[3*2+1]=f+x,v[3*2+2]=1-(c+d),this}transpose(e){e===void 0&&(e=new Cn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const Sb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new S);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*s-l*i,t.y=l*n-o*s,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new S(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new S(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Cn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new S);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new S);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new S),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new S),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new S),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=Eb,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Tb;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(xd),xd.almostEquals(e,t)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const Eb=new S,Tb=new S,xd=new S;class _t{constructor(e){e===void 0&&(e={}),this.lowerBound=new S,this.upperBound=new S,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,vd),c=vd),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new _t().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const n=yd,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const f=n[d];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=yd,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const f=n[d];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(u,d)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(u,d));return!(m<0||f>m)}}const vd=new S,yd=[new S,new S,new S,new S,new S,new S,new S,new S];class _d{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class ip{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class Rt{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new S),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Ab,i=Cb;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Rt);const n=this.x,i=this.y,s=this.z,o=this.w,a=e.x,l=e.y,c=e.z,h=e.w;return t.x=n*h+o*a+i*c-s*l,t.y=i*h+o*l+s*a-n*c,t.z=s*h+o*c+n*l-i*a,t.w=o*h-n*a-i*l-s*c,t}inverse(e){e===void 0&&(e=new Rt);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new Rt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new S);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,u=c*i+l*n-o*s,d=c*s+o*i-a*n,f=-o*n-a*i-l*s;return t.x=h*c+f*-o+u*-l-d*-a,t.y=u*c+f*-a+d*-o-h*-l,t.z=d*c+f*-l+h*-a-u*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const u=o*o,d=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*d-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*u-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new Rt(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Rt);const i=this.x,s=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,h=e.z,u=e.w,d,f,m,x,g;return f=i*l+s*c+o*h+a*u,f<0&&(f=-f,l=-l,c=-c,h=-h,u=-u),1-f>1e-6?(d=Math.acos(f),m=Math.sin(d),x=Math.sin((1-t)*d)/m,g=Math.sin(t*d)/m):(x=1-t,g=t),n.x=x*i+g*l,n.y=x*s+g*c,n.z=x*o+g*h,n.w=x*a+g*u,n}integrate(e,t,n,i){i===void 0&&(i=new Rt);const s=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,h=this.z,u=this.w,d=t*.5;return i.x+=d*(s*u+o*h-a*c),i.y+=d*(o*u+a*l-s*h),i.z+=d*(a*u+s*c-o*l),i.w+=d*(-s*l-o*c-a*h),i}}const Ab=new S,Cb=new S,Rb={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class xe{constructor(e){e===void 0&&(e={}),this.id=xe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}xe.idCounter=0;xe.types=Rb;class it{constructor(e){e===void 0&&(e={}),this.position=new S,this.quaternion=new Rt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return it.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return it.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new S),n.vsub(e,i),t.conjugate(bd),bd.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new S),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new S),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new S),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const bd=new Rt;class kr extends xe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:xe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new S;for(let s=0;s!==e.length;s++){const o=e[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new S;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];kr.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new S,o=new S;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,a,l,c){const h=new S;let u=-1,d=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),s.vmult(h,h);const x=h.dot(o);x>d&&(d=x,u=m)}const f=[];for(let m=0;m<n.faces[u].length;m++){const x=n.vertices[n.faces[u][m]],g=new S;g.copy(x),s.vmult(g,g),i.vadd(g,g),f.push(g)}u>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,i,s,o,a,l){const c=new S,h=new S,u=new S,d=new S,f=new S,m=new S;let x=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){n.vmult(g.uniqueAxes[p],c);const v=g.testSepAxis(c,e,t,n,i,s);if(v===!1)return!1;v<x&&(x=v,o.copy(c))}else{const p=a?a.length:g.faces.length;for(let v=0;v<p;v++){const y=a?a[v]:v;c.copy(g.faceNormals[y]),n.vmult(c,c);const b=g.testSepAxis(c,e,t,n,i,s);if(b===!1)return!1;b<x&&(x=b,o.copy(c))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){s.vmult(e.uniqueAxes[p],h);const v=g.testSepAxis(h,e,t,n,i,s);if(v===!1)return!1;v<x&&(x=v,o.copy(h))}else{const p=l?l.length:e.faces.length;for(let v=0;v<p;v++){const y=l?l[v]:v;h.copy(e.faceNormals[y]),s.vmult(h,h);const b=g.testSepAxis(h,e,t,n,i,s);if(b===!1)return!1;b<x&&(x=b,o.copy(h))}}for(let p=0;p!==g.uniqueEdges.length;p++){n.vmult(g.uniqueEdges[p],d);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],f),d.cross(f,m),!m.almostZero()){m.normalize();const y=g.testSepAxis(m,e,t,n,i,s);if(y===!1)return!1;y<x&&(x=y,o.copy(m))}}return i.vsub(t,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const a=this;kr.project(a,e,n,i,Tl),kr.project(t,e,s,o,Al);const l=Tl[0],c=Tl[1],h=Al[0],u=Al[1];if(l<u||h<c)return!1;const d=l-u,f=h-c;return d<f?d:f}calculateLocalInertia(e,t){const n=new S,i=new S;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,a){const l=new S,c=new S,h=new S,u=new S,d=new S,f=new S,m=new S,x=new S,g=this,p=[],v=i,y=p;let b=-1,A=Number.MAX_VALUE;for(let M=0;M<g.faces.length;M++){l.copy(g.faceNormals[M]),n.vmult(l,l);const I=l.dot(e);I<A&&(A=I,b=M)}if(b<0)return;const w=g.faces[b];w.connectedFaces=[];for(let M=0;M<g.faces.length;M++)for(let I=0;I<g.faces[M].length;I++)w.indexOf(g.faces[M][I])!==-1&&M!==b&&w.connectedFaces.indexOf(M)===-1&&w.connectedFaces.push(M);const R=w.length;for(let M=0;M<R;M++){const I=g.vertices[w[M]],O=g.vertices[w[(M+1)%R]];I.vsub(O,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),u.copy(this.faceNormals[b]),n.vmult(u,u),t.vadd(u,u),h.cross(u,d),d.negate(d),f.copy(I),n.vmult(f,f),t.vadd(f,f);const N=w.connectedFaces[M];m.copy(this.faceNormals[N]);const V=this.getPlaneConstantOfFace(N);x.copy(m),n.vmult(x,x);const k=V-x.dot(t);for(this.clipFaceAgainstPlane(v,y,x,k);v.length;)v.shift();for(;y.length;)v.push(y.shift())}m.copy(this.faceNormals[b]);const D=this.getPlaneConstantOfFace(b);x.copy(m),n.vmult(x,x);const E=D-x.dot(t);for(let M=0;M<v.length;M++){let I=x.dot(v[M])+E;if(I<=s&&(console.log(`clamped: depth=${I} to minDist=${s}`),I=s),I<=o){const O=v[M];if(I<=1e-6){const N={point:O,normal:x,depth:I};a.push(N)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=e[h],o=n.dot(c)+i,s<0)if(o<0){const u=new S;u.copy(c),t.push(u)}else{const u=new S;l.lerp(c,s/(s-o),u),t.push(u)}else if(o<0){const u=new S;l.lerp(c,s/(s-o),u),t.push(u),t.push(c)}l=c,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new S);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,a,l,c,h,u,d=new S;for(let f=0;f<s.length;f++){d.copy(s[f]),t.vmult(d,d),e.vadd(d,d);const m=d;(o===void 0||m.x<o)&&(o=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(u===void 0||m.z>u)&&(u=m.z)}n.set(o,a,l),i.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new S);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=new S;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=t[n[o][0]],c=new S;e.vsub(l,c);const h=a.dot(c),u=new S;s.vsub(l,u);const d=a.dot(u);if(h<0&&d>0||h>0&&d<0)return!1}return-1}static project(e,t,n,i,s){const o=e.vertices.length,a=Lb;let l=0,c=0;const h=Pb,u=e.vertices;h.setZero(),it.vectorToLocalFrame(n,i,t,a),it.pointToLocalFrame(n,i,h,h);const d=h.dot(a);c=l=u[0].dot(a);for(let f=1;f<o;f++){const m=u[f].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=d,l-=d,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const Tl=[],Al=[];new S;const Lb=new S,Pb=new S;class yh extends xe{constructor(e){super({type:xe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=S,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new kr({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new S),yh.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Ui.set(s[o][0],s[o][1],s[o][2]),t.vmult(Ui,Ui),e.vadd(Ui,Ui),n(Ui.x,Ui.y,Ui.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Fn[0].set(s.x,s.y,s.z),Fn[1].set(-s.x,s.y,s.z),Fn[2].set(-s.x,-s.y,s.z),Fn[3].set(-s.x,-s.y,-s.z),Fn[4].set(s.x,-s.y,-s.z),Fn[5].set(s.x,s.y,-s.z),Fn[6].set(-s.x,s.y,-s.z),Fn[7].set(s.x,-s.y,s.z);const o=Fn[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Fn[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),u>i.z&&(i.z=u),c<n.x&&(n.x=c),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const Ui=new S,Fn=[new S,new S,new S,new S,new S,new S,new S,new S],_h={DYNAMIC:1,STATIC:2,KINEMATIC:4},bh={AWAKE:0,SLEEPY:1,SLEEPING:2};class pe extends ip{constructor(e){e===void 0&&(e={}),super(),this.id=pe.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new S,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new S,this.force=new S;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?pe.STATIC:pe.DYNAMIC,typeof e.type==typeof pe.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=pe.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new Rt,this.initQuaternion=new Rt,this.previousQuaternion=new Rt,this.interpolatedQuaternion=new Rt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new S,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new Cn,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new Cn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new S(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new S(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new _t,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=pe.AWAKE,this.wakeUpAfterNarrowphase=!1,e===pe.SLEEPING&&this.dispatchEvent(pe.wakeupEvent)}sleep(){this.sleepState=pe.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===pe.AWAKE&&n<i?(this.sleepState=pe.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(pe.sleepyEvent)):t===pe.SLEEPY&&n>i?this.wakeUp():t===pe.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(pe.sleepEvent))}}updateSolveMassProperties(){this.sleepState===pe.SLEEPING||this.type===pe.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new S),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new S),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new S,s=new Rt;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const a=t[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=Ib,o=Db,a=this.quaternion,l=this.aabb,c=Nb;for(let h=0;h!==i;h++){const u=e[h];a.vmult(t[h],s),s.vadd(this.position,s),a.mult(n[h],o),u.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=Fb,i=Ub;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new S),this.type!==pe.DYNAMIC)return;this.sleepState===pe.SLEEPING&&this.wakeUp();const n=Bb;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new S),this.type!==pe.DYNAMIC)return;const n=Ob,i=kb;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===pe.DYNAMIC&&(this.sleepState===pe.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new S),this.type!==pe.DYNAMIC)return;this.sleepState===pe.SLEEPING&&this.wakeUp();const n=t,i=zb;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Vb;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new S),this.type!==pe.DYNAMIC)return;const n=Hb,i=Gb;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=Wb;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),yh.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new S;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===pe.DYNAMIC||this.type===pe.KINEMATIC)||this.sleepState===pe.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,f=h*e;i.x+=a.x*f*d.x,i.y+=a.y*f*d.y,i.z+=a.z*f*d.z;const m=u.elements,x=this.angularFactor,g=l.x*x.x,p=l.y*x.y,v=l.z*x.z;s.x+=e*(m[0]*g+m[1]*p+m[2]*v),s.y+=e*(m[3]*g+m[4]*p+m[5]*v),s.z+=e*(m[6]*g+m[7]*p+m[8]*v),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}pe.idCounter=0;pe.COLLIDE_EVENT_NAME="collide";pe.DYNAMIC=_h.DYNAMIC;pe.STATIC=_h.STATIC;pe.KINEMATIC=_h.KINEMATIC;pe.AWAKE=bh.AWAKE;pe.SLEEPY=bh.SLEEPY;pe.SLEEPING=bh.SLEEPING;pe.wakeupEvent={type:"wakeup"};pe.sleepyEvent={type:"sleepy"};pe.sleepEvent={type:"sleep"};const Ib=new S,Db=new Rt,Nb=new _t,Fb=new Cn,Ub=new Cn;new Cn;const Bb=new S,Ob=new S,kb=new S,zb=new S,Vb=new S,Hb=new S,Gb=new S,Wb=new S;class Xb{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&pe.STATIC||e.sleepState===pe.SLEEPING)&&(t.type&pe.STATIC||t.sleepState===pe.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=qb;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=jb,i=$b,s=Yb,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(s[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new S;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const qb=new S;new S;new Rt;new S;const jb={keys:[]},$b=[],Yb=[];new S;new S;new S;class sp extends Xb{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class sr{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let rp,op,ap,lp,cp,hp,up;const wh={CLOSEST:1,ANY:2,ALL:4};rp=xe.types.SPHERE;op=xe.types.PLANE;ap=xe.types.BOX;lp=xe.types.CYLINDER;cp=xe.types.CONVEXPOLYHEDRON;hp=xe.types.HEIGHTFIELD;up=xe.types.TRIMESH;class At{get[rp](){return this._intersectSphere}get[op](){return this._intersectPlane}get[ap](){return this._intersectBox}get[lp](){return this._intersectConvex}get[cp](){return this._intersectConvex}get[hp](){return this._intersectHeightfield}get[up](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new S),t===void 0&&(t=new S),this.from=e.clone(),this.to=t.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=At.ANY,this.result=new sr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||At.ANY,this.result=t.result||new sr,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(wd),Cl.length=0,e.broadphase.aabbQuery(e,wd,Cl),this.intersectBodies(Cl),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=Kb,s=Zb;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(uw(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new S(0,0,1);t.vmult(c,c);const h=new S;o.vsub(n,h);const u=h.dot(c);a.vsub(n,h);const d=h.dot(c);if(u*d>0||o.distanceTo(a)<u)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const m=new S,x=new S,g=new S;o.vsub(n,m);const p=-c.dot(m)/f;l.scale(p,x),o.vadd(x,g),this.reportIntersection(c,g,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=Jb;o.from.copy(this.from),o.to.copy(this.to),it.pointToLocalFrame(n,t,o.from,o.from),it.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=Qb;let l,c,h,u;l=c=0,h=u=e.data.length-1;const d=new _t;o.getAABB(d),e.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let f=l;f<h;f++)for(let m=c;m<u;m++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,m,d),!!d.overlapsRay(o)){if(e.getConvexTrianglePillar(f,m,!1),it.pointToWorldFrame(n,t,e.pillarOffset,Fo),this._intersectConvex(e.pillarConvex,t,Fo,i,s,Md),this.result.shouldStop)return;e.getConvexTrianglePillar(f,m,!0),it.pointToWorldFrame(n,t,e.pillarOffset,Fo),this._intersectConvex(e.pillarConvex,t,Fo,i,s,Md)}}}_intersectSphere(e,t,n,i,s){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,d=h**2-4*c*u,f=ew,m=tw;if(!(d<0))if(d===0)o.lerp(a,d,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1);else{const x=(-h-Math.sqrt(d))/(2*c),g=(-h+Math.sqrt(d))/(2*c);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(o.lerp(a,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const a=nw,l=Sd,c=o&&o.faceList||null,h=e.faces,u=e.vertices,d=e.faceNormals,f=this.direction,m=this.from,x=this.to,g=m.distanceTo(x),p=c?c.length:h.length,v=this.result;for(let y=0;!v.shouldStop&&y<p;y++){const b=c?c[y]:y,A=h[b],w=d[b],R=t,D=n;l.copy(u[A[0]]),R.vmult(l,l),l.vadd(D,l),l.vsub(m,l),R.vmult(w,a);const E=f.dot(a);if(Math.abs(E)<this.precision)continue;const M=a.dot(l)/E;if(!(M<0)){f.scale(M,en),en.vadd(m,en),bn.copy(u[A[0]]),R.vmult(bn,bn),D.vadd(bn,bn);for(let I=1;!v.shouldStop&&I<A.length-1;I++){Un.copy(u[A[I]]),Bn.copy(u[A[I+1]]),R.vmult(Un,Un),R.vmult(Bn,Bn),D.vadd(Un,Un),D.vadd(Bn,Bn);const O=en.distanceTo(m);!(At.pointInTriangle(en,bn,Un,Bn)||At.pointInTriangle(en,Un,bn,Bn))||O>g||this.reportIntersection(a,en,s,i,b)}}}}_intersectTrimesh(e,t,n,i,s,o){const a=iw,l=cw,c=hw,h=Sd,u=sw,d=rw,f=ow,m=lw,x=aw,g=e.indices;e.vertices;const p=this.from,v=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(t),it.vectorToLocalFrame(n,t,y,u),it.pointToLocalFrame(n,t,p,d),it.pointToLocalFrame(n,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,f.vsub(d,u),u.normalize();const b=d.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let A=0,w=l.length;!this.result.shouldStop&&A!==w;A++){const R=l[A];e.getNormal(R,a),e.getVertex(g[R*3],bn),bn.vsub(d,h);const D=u.dot(a),E=a.dot(h)/D;if(E<0)continue;u.scale(E,en),en.vadd(d,en),e.getVertex(g[R*3+1],Un),e.getVertex(g[R*3+2],Bn);const M=en.distanceSquared(d);!(At.pointInTriangle(en,Un,bn,Bn)||At.pointInTriangle(en,bn,Un,Bn))||M>b||(it.vectorToWorldFrame(t,a,x),it.pointToWorldFrame(n,t,en,m),this.reportIntersection(x,m,s,i,R))}l.length=0}reportIntersection(e,t,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case At.ALL:this.hasHit=!0,c.set(o,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case At.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l));break;case At.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,fs),n.vsub(t,Tr),e.vsub(t,Rl);const s=fs.dot(fs),o=fs.dot(Tr),a=fs.dot(Rl),l=Tr.dot(Tr),c=Tr.dot(Rl);let h,u;return(h=l*a-o*c)>=0&&(u=s*c-o*a)>=0&&h+u<s*l-o*o}}At.CLOSEST=wh.CLOSEST;At.ANY=wh.ANY;At.ALL=wh.ALL;const wd=new _t,Cl=[],Tr=new S,Rl=new S,Kb=new S,Zb=new Rt,en=new S,bn=new S,Un=new S,Bn=new S;new S;new sr;const Md={faceList:[0]},Fo=new S,Jb=new At,Qb=[],ew=new S,tw=new S,nw=new S;new S;new S;const Sd=new S,iw=new S,sw=new S,rw=new S,ow=new S,aw=new S,lw=new S;new _t;const cw=[],hw=new it,fs=new S,Uo=new S;function uw(r,e,t){t.vsub(r,fs);const n=fs.dot(e);return e.scale(n,Uo),Uo.vadd(r,Uo),t.distanceTo(Uo)}class dw{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Ed{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Jr{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Jr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ed,this.jacobianElementB=new Ed,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Td),a.scale(h,Ad),n.invInertiaWorldSolve.vmult(o,Cd),i.invInertiaWorldSolve.vmult(l,Rd),e.multiplyVectors(Td,Cd)+t.multiplyVectors(Ad,Rd)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(e.rotational,Bo),c+=Bo.dot(e.rotational),l.vmult(t.rotational,Bo),c+=Bo.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=fw;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Jr.idCounter=0;const Td=new S,Ad=new S,Cd=new S,Rd=new S,Bo=new S,fw=new S;class pw extends Jr{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=mw,c=gw,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=s.velocity,f=s.angularVelocity;s.force,s.torque;const m=xw,x=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(x.spatial),l.negate(x.rotational),g.spatial.copy(p),g.rotational.copy(c),m.copy(s.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const v=p.dot(m),y=this.restitution+1,b=y*d.dot(p)-y*h.dot(p)+f.dot(c)-u.dot(l),A=this.computeGiMf();return-v*t-b*n-e*A}getImpactVelocityAlongNormal(){const e=vw,t=yw,n=_w,i=bw,s=ww;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const mw=new S,gw=new S,xw=new S,vw=new S,yw=new S,_w=new S,bw=new S,ww=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class Ld extends Jr{constructor(e,t,n){super(e,t,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Mw,o=Sw,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),u=this.computeGiMf();return-h*t-e*u}}const Mw=new S,Sw=new S;class $i{constructor(e,t,n){n=dw.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=$i.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}$i.idCounter=0;class vs{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=vs.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}vs.idCounter=0;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new At;new S;new S;new S;new S(1,0,0),new S(0,1,0),new S(0,0,1);new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class Mh extends xe{constructor(e){if(super({type:xe.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new S);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=e[l]-s,i[l]=e[l]+s}}}new S;new S;new S;new S;new S;new S;new S;new S;new S;class dp extends xe{constructor(){super({type:xe.types.PLANE}),this.worldNormal=new S,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new S),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){pi.set(0,0,1),t.vmult(pi,pi);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),pi.x===1?i.x=e.x:pi.x===-1&&(n.x=e.x),pi.y===1?i.y=e.y:pi.y===-1&&(n.y=e.y),pi.z===1?i.z=e.z:pi.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const pi=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class zn{constructor(e){e===void 0&&(e={}),this.root=e.root||null,this.aabb=e.aabb?e.aabb.clone():new _t,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(e,t,n){n===void 0&&(n=0);const i=this.data;if(!this.aabb.contains(e))return!1;const s=this.children,o=this.maxDepth||this.root.maxDepth;if(n<o){let a=!1;s.length||(this.subdivide(),a=!0);for(let l=0;l!==8;l++)if(s[l].insert(e,t,n+1))return!0;a&&(s.length=0)}return i.push(t),!0}subdivide(){const e=this.aabb,t=e.lowerBound,n=e.upperBound,i=this.children;i.push(new zn({aabb:new _t({lowerBound:new S(0,0,0)})}),new zn({aabb:new _t({lowerBound:new S(1,0,0)})}),new zn({aabb:new _t({lowerBound:new S(1,1,0)})}),new zn({aabb:new _t({lowerBound:new S(1,1,1)})}),new zn({aabb:new _t({lowerBound:new S(0,1,1)})}),new zn({aabb:new _t({lowerBound:new S(0,0,1)})}),new zn({aabb:new _t({lowerBound:new S(1,0,1)})}),new zn({aabb:new _t({lowerBound:new S(0,1,0)})})),n.vsub(t,ls),ls.scale(.5,ls);const s=this.root||this;for(let o=0;o!==8;o++){const a=i[o];a.root=s;const l=a.aabb.lowerBound;l.x*=ls.x,l.y*=ls.y,l.z*=ls.z,l.vadd(t,l),l.vadd(ls,a.aabb.upperBound)}}aabbQuery(e,t){this.data,this.children;const n=[this];for(;n.length;){const i=n.pop();i.aabb.overlaps(e)&&Array.prototype.push.apply(t,i.data),Array.prototype.push.apply(n,i.children)}return t}rayQuery(e,t,n){return e.getAABB(Oo),Oo.toLocalFrame(t,Oo),this.aabbQuery(Oo,n),n}removeEmptyNodes(){for(let e=this.children.length-1;e>=0;e--)this.children[e].removeEmptyNodes(),!this.children[e].children.length&&!this.children[e].data.length&&this.children.splice(e,1)}}class Ew extends zn{constructor(e,t){t===void 0&&(t={}),super({root:null,aabb:e}),this.maxDepth=typeof t.maxDepth<"u"?t.maxDepth:8}}const ls=new S,Oo=new _t;class ma extends xe{constructor(e,t){super({type:xe.types.TRIMESH}),this.vertices=new Float32Array(e),this.indices=new Int16Array(t),this.normals=new Float32Array(t.length),this.aabb=new _t,this.edges=null,this.scale=new S(1,1,1),this.tree=new Ew,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const e=this.tree;e.reset(),e.aabb.copy(this.aabb);const t=this.scale;e.aabb.lowerBound.x*=1/t.x,e.aabb.lowerBound.y*=1/t.y,e.aabb.lowerBound.z*=1/t.z,e.aabb.upperBound.x*=1/t.x,e.aabb.upperBound.y*=1/t.y,e.aabb.upperBound.z*=1/t.z;const n=new _t,i=new S,s=new S,o=new S,a=[i,s,o];for(let l=0;l<this.indices.length/3;l++){const c=l*3;this._getUnscaledVertex(this.indices[c],i),this._getUnscaledVertex(this.indices[c+1],s),this._getUnscaledVertex(this.indices[c+2],o),n.setFromPoints(a),e.insert(n,l)}e.removeEmptyNodes()}getTrianglesInAABB(e,t){ko.copy(e);const n=this.scale,i=n.x,s=n.y,o=n.z,a=ko.lowerBound,l=ko.upperBound;return a.x/=i,a.y/=s,a.z/=o,l.x/=i,l.y/=s,l.z/=o,this.tree.aabbQuery(ko,t)}setScale(e){const t=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,n=e.x===e.y&&e.y===e.z;t&&n||this.updateNormals(),this.scale.copy(e),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const e=Tw,t=this.normals;for(let n=0;n<this.indices.length/3;n++){const i=n*3,s=this.indices[i],o=this.indices[i+1],a=this.indices[i+2];this.getVertex(s,Dd),this.getVertex(o,Nd),this.getVertex(a,Fd),ma.computeNormal(Nd,Dd,Fd,e),t[i]=e.x,t[i+1]=e.y,t[i+2]=e.z}}updateEdges(){const e={},t=(i,s)=>{const o=i<s?`${i}_${s}`:`${s}_${i}`;e[o]=!0};for(let i=0;i<this.indices.length/3;i++){const s=i*3,o=this.indices[s],a=this.indices[s+1],l=this.indices[s+2];t(o,a),t(a,l),t(l,o)}const n=Object.keys(e);this.edges=new Int16Array(n.length*2);for(let i=0;i<n.length;i++){const s=n[i].split("_");this.edges[2*i]=parseInt(s[0],10),this.edges[2*i+1]=parseInt(s[1],10)}}getEdgeVertex(e,t,n){const i=this.edges[e*2+(t?1:0)];this.getVertex(i,n)}getEdgeVector(e,t){const n=Aw,i=Cw;this.getEdgeVertex(e,0,n),this.getEdgeVertex(e,1,i),i.vsub(n,t)}static computeNormal(e,t,n,i){t.vsub(e,Id),n.vsub(t,Pd),Pd.cross(Id,i),i.isZero()||i.normalize()}getVertex(e,t){const n=this.scale;return this._getUnscaledVertex(e,t),t.x*=n.x,t.y*=n.y,t.z*=n.z,t}_getUnscaledVertex(e,t){const n=e*3,i=this.vertices;return t.set(i[n],i[n+1],i[n+2])}getWorldVertex(e,t,n,i){return this.getVertex(e,i),it.pointToWorldFrame(t,n,i,i),i}getTriangleVertices(e,t,n,i){const s=e*3;this.getVertex(this.indices[s],t),this.getVertex(this.indices[s+1],n),this.getVertex(this.indices[s+2],i)}getNormal(e,t){const n=e*3;return t.set(this.normals[n],this.normals[n+1],this.normals[n+2])}calculateLocalInertia(e,t){this.computeLocalAABB(cs);const n=cs.upperBound.x-cs.lowerBound.x,i=cs.upperBound.y-cs.lowerBound.y,s=cs.upperBound.z-cs.lowerBound.z;return t.set(1/12*e*(2*i*2*i+2*s*2*s),1/12*e*(2*n*2*n+2*s*2*s),1/12*e*(2*i*2*i+2*n*2*n))}computeLocalAABB(e){const t=e.lowerBound,n=e.upperBound,i=this.vertices.length;this.vertices;const s=Rw;this.getVertex(0,s),t.copy(s),n.copy(s);for(let o=0;o!==i;o++)this.getVertex(o,s),s.x<t.x?t.x=s.x:s.x>n.x&&(n.x=s.x),s.y<t.y?t.y=s.y:s.y>n.y&&(n.y=s.y),s.z<t.z?t.z=s.z:s.z>n.z&&(n.z=s.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let e=0;const t=this.vertices,n=new S;for(let i=0,s=t.length/3;i!==s;i++){this.getVertex(i,n);const o=n.lengthSquared();o>e&&(e=o)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=Lw,o=Pw;s.position=e,s.quaternion=t,this.aabb.toWorldFrame(s,o),n.copy(o.lowerBound),i.copy(o.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}static createTorus(e,t,n,i,s){e===void 0&&(e=1),t===void 0&&(t=.5),n===void 0&&(n=8),i===void 0&&(i=6),s===void 0&&(s=Math.PI*2);const o=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=i;c++){const h=c/i*s,u=l/n*Math.PI*2,d=(e+t*Math.cos(u))*Math.cos(h),f=(e+t*Math.cos(u))*Math.sin(h),m=t*Math.sin(u);o.push(d,f,m)}for(let l=1;l<=n;l++)for(let c=1;c<=i;c++){const h=(i+1)*l+c-1,u=(i+1)*(l-1)+c-1,d=(i+1)*(l-1)+c,f=(i+1)*l+c;a.push(h,u,f),a.push(u,d,f)}return new ma(o,a)}}const Tw=new S,ko=new _t,Aw=new S,Cw=new S,Pd=new S,Id=new S,Dd=new S,Nd=new S,Fd=new S,cs=new _t,Rw=new S,Lw=new it,Pw=new _t;class Iw{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Dw extends Iw{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,h=e;let u,d,f,m,x,g;if(a!==0)for(let b=0;b!==c;b++)l[b].updateSolveMassProperties();const p=Fw,v=Uw,y=Nw;p.length=a,v.length=a,y.length=a;for(let b=0;b!==a;b++){const A=o[b];y[b]=0,v[b]=A.computeB(h),p[b]=1/A.computeC()}if(a!==0){for(let w=0;w!==c;w++){const R=l[w],D=R.vlambda,E=R.wlambda;D.set(0,0,0),E.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let w=0;w!==a;w++){const R=o[w];u=v[w],d=p[w],g=y[w],x=R.computeGWlambda(),f=d*(u-x-R.eps*g),g+f<R.minForce?f=R.minForce-g:g+f>R.maxForce&&(f=R.maxForce-g),y[w]+=f,m+=f>0?f:-f,R.addToWlambda(f)}if(m*m<s)break}for(let w=0;w!==c;w++){const R=l[w],D=R.velocity,E=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),D.vadd(R.vlambda,D),R.wlambda.vmul(R.angularFactor,R.wlambda),E.vadd(R.wlambda,E)}let b=o.length;const A=1/h;for(;b--;)o[b].multiplier=y[b]*A}return n}}const Nw=[],Fw=[],Uw=[];class Bw{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Ow extends Bw{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const xt={sphereSphere:xe.types.SPHERE,spherePlane:xe.types.SPHERE|xe.types.PLANE,boxBox:xe.types.BOX|xe.types.BOX,sphereBox:xe.types.SPHERE|xe.types.BOX,planeBox:xe.types.PLANE|xe.types.BOX,convexConvex:xe.types.CONVEXPOLYHEDRON,sphereConvex:xe.types.SPHERE|xe.types.CONVEXPOLYHEDRON,planeConvex:xe.types.PLANE|xe.types.CONVEXPOLYHEDRON,boxConvex:xe.types.BOX|xe.types.CONVEXPOLYHEDRON,sphereHeightfield:xe.types.SPHERE|xe.types.HEIGHTFIELD,boxHeightfield:xe.types.BOX|xe.types.HEIGHTFIELD,convexHeightfield:xe.types.CONVEXPOLYHEDRON|xe.types.HEIGHTFIELD,sphereParticle:xe.types.PARTICLE|xe.types.SPHERE,planeParticle:xe.types.PLANE|xe.types.PARTICLE,boxParticle:xe.types.BOX|xe.types.PARTICLE,convexParticle:xe.types.PARTICLE|xe.types.CONVEXPOLYHEDRON,cylinderCylinder:xe.types.CYLINDER,sphereCylinder:xe.types.SPHERE|xe.types.CYLINDER,planeCylinder:xe.types.PLANE|xe.types.CYLINDER,boxCylinder:xe.types.BOX|xe.types.CYLINDER,convexCylinder:xe.types.CONVEXPOLYHEDRON|xe.types.CYLINDER,heightfieldCylinder:xe.types.HEIGHTFIELD|xe.types.CYLINDER,particleCylinder:xe.types.PARTICLE|xe.types.CYLINDER,sphereTrimesh:xe.types.SPHERE|xe.types.TRIMESH,planeTrimesh:xe.types.PLANE|xe.types.TRIMESH};class kw{get[xt.sphereSphere](){return this.sphereSphere}get[xt.spherePlane](){return this.spherePlane}get[xt.boxBox](){return this.boxBox}get[xt.sphereBox](){return this.sphereBox}get[xt.planeBox](){return this.planeBox}get[xt.convexConvex](){return this.convexConvex}get[xt.sphereConvex](){return this.sphereConvex}get[xt.planeConvex](){return this.planeConvex}get[xt.boxConvex](){return this.boxConvex}get[xt.sphereHeightfield](){return this.sphereHeightfield}get[xt.boxHeightfield](){return this.boxHeightfield}get[xt.convexHeightfield](){return this.convexHeightfield}get[xt.sphereParticle](){return this.sphereParticle}get[xt.planeParticle](){return this.planeParticle}get[xt.boxParticle](){return this.boxParticle}get[xt.convexParticle](){return this.convexParticle}get[xt.cylinderCylinder](){return this.convexConvex}get[xt.sphereCylinder](){return this.sphereConvex}get[xt.planeCylinder](){return this.planeConvex}get[xt.boxCylinder](){return this.boxConvex}get[xt.convexCylinder](){return this.convexConvex}get[xt.heightfieldCylinder](){return this.heightfieldCylinder}get[xt.particleCylinder](){return this.particleCylinder}get[xt.sphereTrimesh](){return this.sphereTrimesh}get[xt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Ow,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new pw(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,h=i.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,u=o.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const d=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,x=m.length?m.pop():new Ld(n,i,d*f),g=m.length?m.pop():new Ld(n,i,d*f);return x.bi=g.bi=n,x.bj=g.bj=i,x.minForce=g.minForce=-d*f,x.maxForce=g.maxForce=d*f,x.ri.copy(e.ri),x.rj.copy(e.rj),g.ri.copy(e.ri),g.rj.copy(e.rj),e.ni.tangents(x.t,g.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=g.enabled=e.enabled,t.push(x,g),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];hs.setZero(),ks.setZero(),zs.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(hs.vadd(t.ni,hs),ks.vadd(t.ri,ks),zs.vadd(t.rj,zs)):(hs.vsub(t.ni,hs),ks.vadd(t.rj,ks),zs.vadd(t.ri,zs));const o=1/e;ks.scale(o,n.ri),zs.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),hs.normalize(),hs.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=Hw,c=Gw,h=zw,u=Vw;for(let d=0,f=e.length;d!==f;d++){const m=e[d],x=t[d];let g=null;m.material&&x.material&&(g=n.getContactMaterial(m.material,x.material)||null);const p=m.type&pe.KINEMATIC&&x.type&pe.STATIC||m.type&pe.STATIC&&x.type&pe.KINEMATIC||m.type&pe.KINEMATIC&&x.type&pe.KINEMATIC;for(let v=0;v<m.shapes.length;v++){m.quaternion.mult(m.shapeOrientations[v],l),m.quaternion.vmult(m.shapeOffsets[v],h),h.vadd(m.position,h);const y=m.shapes[v];for(let b=0;b<x.shapes.length;b++){x.quaternion.mult(x.shapeOrientations[b],c),x.quaternion.vmult(x.shapeOffsets[b],u),u.vadd(x.position,u);const A=x.shapes[b];if(!(y.collisionFilterMask&A.collisionFilterGroup&&A.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(u)>y.boundingSphereRadius+A.boundingSphereRadius)continue;let w=null;y.material&&A.material&&(w=n.getContactMaterial(y.material,A.material)||null),this.currentContactMaterial=w||g||n.defaultContactMaterial;const R=y.type|A.type,D=this[R];if(D){let E=!1;y.type<A.type?E=D.call(this,y,A,h,u,l,c,m,x,y,A,p):E=D.call(this,A,y,u,h,c,l,x,m,y,A,p),E&&p&&(n.shapeOverlapKeeper.set(y.id,A.id),n.bodyOverlapKeeper.set(m.id,x.id))}}}}}sphereSphere(e,t,n,i,s,o,a,l,c,h,u){if(u)return n.distanceSquared(i)<(e.radius+t.radius)**2;const d=this.createContactEquation(a,l,e,t,c,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(e.radius,d.ri),d.rj.scale(-t.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(e,t,n,i,s,o,a,l,c,h,u){const d=this.createContactEquation(a,l,e,t,c,h);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(e.radius,d.ri),n.vsub(i,zo),d.ni.scale(d.ni.dot(zo),Ud),zo.vsub(Ud,d.rj),-zo.dot(d.ni)<=e.radius){if(u)return!0;const f=d.ri,m=d.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(l.position,m),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,a,l,e,t,u)}sphereBox(e,t,n,i,s,o,a,l,c,h,u){const d=this.v3pool,f=mM;n.vsub(i,Vo),t.getSideNormals(f,o);const m=e.radius;let x=!1;const g=xM,p=vM,v=yM;let y=null,b=0,A=0,w=0,R=null;for(let B=0,Y=f.length;B!==Y&&x===!1;B++){const W=dM;W.copy(f[B]);const K=W.length();W.normalize();const ie=Vo.dot(W);if(ie<K+m&&ie>0){const me=fM,oe=pM;me.copy(f[(B+1)%3]),oe.copy(f[(B+2)%3]);const Qe=me.length(),st=oe.length();me.normalize(),oe.normalize();const ot=Vo.dot(me),Z=Vo.dot(oe);if(ot<Qe&&ot>-Qe&&Z<st&&Z>-st){const ee=Math.abs(ie-K-m);if((R===null||ee<R)&&(R=ee,A=ot,w=Z,y=K,g.copy(W),p.copy(me),v.copy(oe),b++,u))return!0}}}if(b){x=!0;const B=this.createContactEquation(a,l,e,t,c,h);g.scale(-m,B.ri),B.ni.copy(g),B.ni.negate(B.ni),g.scale(y,g),p.scale(A,p),g.vadd(p,g),v.scale(w,v),g.vadd(v,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}let D=d.get();const E=gM;for(let B=0;B!==2&&!x;B++)for(let Y=0;Y!==2&&!x;Y++)for(let W=0;W!==2&&!x;W++)if(D.set(0,0,0),B?D.vadd(f[0],D):D.vsub(f[0],D),Y?D.vadd(f[1],D):D.vsub(f[1],D),W?D.vadd(f[2],D):D.vsub(f[2],D),i.vadd(D,E),E.vsub(n,E),E.lengthSquared()<m*m){if(u)return!0;x=!0;const K=this.createContactEquation(a,l,e,t,c,h);K.ri.copy(E),K.ri.normalize(),K.ni.copy(K.ri),K.ri.scale(m,K.ri),K.rj.copy(D),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(l.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}d.release(D),D=null;const M=d.get(),I=d.get(),O=d.get(),N=d.get(),V=d.get(),k=f.length;for(let B=0;B!==k&&!x;B++)for(let Y=0;Y!==k&&!x;Y++)if(B%3!==Y%3){f[Y].cross(f[B],M),M.normalize(),f[B].vadd(f[Y],I),O.copy(n),O.vsub(I,O),O.vsub(i,O);const W=O.dot(M);M.scale(W,N);let K=0;for(;K===B%3||K===Y%3;)K++;V.copy(n),V.vsub(N,V),V.vsub(I,V),V.vsub(i,V);const ie=Math.abs(W),me=V.length();if(ie<f[K].length()&&me<m){if(u)return!0;x=!0;const oe=this.createContactEquation(a,l,e,t,c,h);I.vadd(N,oe.rj),oe.rj.copy(oe.rj),V.negate(oe.ni),oe.ni.normalize(),oe.ri.copy(oe.rj),oe.ri.vadd(i,oe.ri),oe.ri.vsub(n,oe.ri),oe.ri.normalize(),oe.ri.scale(m,oe.ri),oe.ri.vadd(n,oe.ri),oe.ri.vsub(a.position,oe.ri),oe.rj.vadd(i,oe.rj),oe.rj.vsub(l.position,oe.rj),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult)}}d.release(M,I,O,N,V)}planeBox(e,t,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,a,l,e,t,u)}convexConvex(e,t,n,i,s,o,a,l,c,h,u,d,f){const m=NM;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,m,d,f)){const x=[],g=FM;e.clipAgainstHull(n,s,t,i,o,m,-100,100,x);let p=0;for(let v=0;v!==x.length;v++){if(u)return!0;const y=this.createContactEquation(a,l,e,t,c,h),b=y.ri,A=y.rj;m.negate(y.ni),x[v].normal.negate(g),g.scale(x[v].depth,g),x[v].point.vadd(g,b),A.copy(x[v].point),b.vsub(n,b),A.vsub(i,A),b.vadd(n,b),b.vsub(a.position,b),A.vadd(i,A),A.vsub(l.position,A),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,n,i,s,o,a,l,c,h,u){const d=this.v3pool;n.vsub(i,_M);const f=t.faceNormals,m=t.faces,x=t.vertices,g=e.radius;let p=!1;for(let v=0;v!==x.length;v++){const y=x[v],b=SM;o.vmult(y,b),i.vadd(b,b);const A=MM;if(b.vsub(n,A),A.lengthSquared()<g*g){if(u)return!0;p=!0;const w=this.createContactEquation(a,l,e,t,c,h);w.ri.copy(A),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(g,w.ri),b.vsub(i,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(i,w.rj),w.rj.vsub(l.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let v=0,y=m.length;v!==y&&p===!1;v++){const b=f[v],A=m[v],w=EM;o.vmult(b,w);const R=TM;o.vmult(x[A[0]],R),R.vadd(i,R);const D=AM;w.scale(-g,D),n.vadd(D,D);const E=CM;D.vsub(R,E);const M=E.dot(w),I=RM;if(n.vsub(R,I),M<0&&I.dot(w)>0){const O=[];for(let N=0,V=A.length;N!==V;N++){const k=d.get();o.vmult(x[A[N]],k),i.vadd(k,k),O.push(k)}if(uM(O,w,n)){if(u)return!0;p=!0;const N=this.createContactEquation(a,l,e,t,c,h);w.scale(-g,N.ri),w.negate(N.ni);const V=d.get();w.scale(-M,V);const k=d.get();w.scale(-g,k),n.vsub(i,N.rj),N.rj.vadd(k,N.rj),N.rj.vadd(V,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),d.release(V),d.release(k),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let B=0,Y=O.length;B!==Y;B++)d.release(O[B]);return}else for(let N=0;N!==A.length;N++){const V=d.get(),k=d.get();o.vmult(x[A[(N+1)%A.length]],V),o.vmult(x[A[(N+2)%A.length]],k),i.vadd(V,V),i.vadd(k,k);const B=bM;k.vsub(V,B);const Y=wM;B.unit(Y);const W=d.get(),K=d.get();n.vsub(V,K);const ie=K.dot(Y);Y.scale(ie,W),W.vadd(V,W);const me=d.get();if(W.vsub(n,me),ie>0&&ie*ie<B.lengthSquared()&&me.lengthSquared()<g*g){if(u)return!0;const oe=this.createContactEquation(a,l,e,t,c,h);W.vsub(i,oe.rj),W.vsub(n,oe.ni),oe.ni.normalize(),oe.ni.scale(g,oe.ri),oe.rj.vadd(i,oe.rj),oe.rj.vsub(l.position,oe.rj),oe.ri.vadd(n,oe.ri),oe.ri.vsub(a.position,oe.ri),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult);for(let Qe=0,st=O.length;Qe!==st;Qe++)d.release(O[Qe]);d.release(V),d.release(k),d.release(W),d.release(me),d.release(K);return}d.release(V),d.release(k),d.release(W),d.release(me),d.release(K)}for(let N=0,V=O.length;N!==V;N++)d.release(O[N])}}}planeConvex(e,t,n,i,s,o,a,l,c,h,u){const d=LM,f=PM;f.set(0,0,1),s.vmult(f,f);let m=0;const x=IM;for(let g=0;g!==t.vertices.length;g++)if(d.copy(t.vertices[g]),o.vmult(d,d),i.vadd(d,d),d.vsub(n,x),f.dot(x)<=0){if(u)return!0;const v=this.createContactEquation(a,l,e,t,c,h),y=DM;f.scale(f.dot(x),y),d.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(f),d.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,u)}sphereHeightfield(e,t,n,i,s,o,a,l,c,h,u){const d=t.data,f=e.radius,m=t.elementSize,x=jM,g=qM;it.pointToLocalFrame(i,o,n,g);let p=Math.floor((g.x-f)/m)-1,v=Math.ceil((g.x+f)/m)+1,y=Math.floor((g.y-f)/m)-1,b=Math.ceil((g.y+f)/m)+1;if(v<0||b<0||p>d.length||y>d[0].length)return;p<0&&(p=0),v<0&&(v=0),y<0&&(y=0),b<0&&(b=0),p>=d.length&&(p=d.length-1),v>=d.length&&(v=d.length-1),b>=d[0].length&&(b=d[0].length-1),y>=d[0].length&&(y=d[0].length-1);const A=[];t.getRectMinMax(p,y,v,b,A);const w=A[0],R=A[1];if(g.z-f>R||g.z+f<w)return;const D=this.result;for(let E=p;E<v;E++)for(let M=y;M<b;M++){const I=D.length;let O=!1;if(t.getConvexTrianglePillar(E,M,!1),it.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,n,x,s,o,a,l,e,t,u)),u&&O||(t.getConvexTrianglePillar(E,M,!0),it.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,n,x,s,o,a,l,e,t,u)),u&&O))return!0;if(D.length-I>2)return}}boxHeightfield(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,u)}convexHeightfield(e,t,n,i,s,o,a,l,c,h,u){const d=t.data,f=t.elementSize,m=e.boundingSphereRadius,x=WM,g=XM,p=GM;it.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-m)/f)-1,y=Math.ceil((p.x+m)/f)+1,b=Math.floor((p.y-m)/f)-1,A=Math.ceil((p.y+m)/f)+1;if(y<0||A<0||v>d.length||b>d[0].length)return;v<0&&(v=0),y<0&&(y=0),b<0&&(b=0),A<0&&(A=0),v>=d.length&&(v=d.length-1),y>=d.length&&(y=d.length-1),A>=d[0].length&&(A=d[0].length-1),b>=d[0].length&&(b=d[0].length-1);const w=[];t.getRectMinMax(v,b,y,A,w);const R=w[0],D=w[1];if(!(p.z-m>D||p.z+m<R))for(let E=v;E<y;E++)for(let M=b;M<A;M++){let I=!1;if(t.getConvexTrianglePillar(E,M,!1),it.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,x,s,o,a,l,null,null,u,g,null)),u&&I||(t.getConvexTrianglePillar(E,M,!0),it.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,x,s,o,a,l,null,null,u,g,null)),u&&I))return!0}}sphereParticle(e,t,n,i,s,o,a,l,c,h,u){const d=kM;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=e.radius*e.radius){if(u)return!0;const m=this.createContactEquation(l,a,t,e,c,h);d.normalize(),m.rj.copy(d),m.rj.scale(e.radius,m.rj),m.ni.copy(d),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(e,t,n,i,s,o,a,l,c,h,u){const d=UM;d.set(0,0,1),a.quaternion.vmult(d,d);const f=BM;if(i.vsub(a.position,f),d.dot(f)<=0){if(u)return!0;const x=this.createContactEquation(l,a,t,e,c,h);x.ni.copy(d),x.ni.negate(x.ni),x.ri.set(0,0,0);const g=OM;d.scale(d.dot(i),g),i.vsub(g,g),x.rj.copy(g),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,u)}convexParticle(e,t,n,i,s,o,a,l,c,h,u){let d=-1;const f=VM,m=HM;let x=null;const g=zM;if(g.copy(i),g.vsub(n,g),s.conjugate(Bd),Bd.vmult(g,g),e.pointIsInside(g)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let p=0,v=e.faces.length;p!==v;p++){const y=[e.worldVertices[e.faces[p][0]]],b=e.worldFaceNormals[p];i.vsub(y[0],Od);const A=-b.dot(Od);if(x===null||Math.abs(A)<Math.abs(x)){if(u)return!0;x=A,d=p,f.copy(b)}}if(d!==-1){const p=this.createContactEquation(l,a,t,e,c,h);f.scale(x,m),m.vadd(i,m),m.vsub(n,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,y=p.rj;v.vadd(i,v),v.vsub(l.position,v),y.vadd(n,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,a,l,c,h,u){return this.convexHeightfield(t,e,i,n,o,s,l,a,c,h,u)}particleCylinder(e,t,n,i,s,o,a,l,c,h,u){return this.convexParticle(t,e,i,n,o,s,l,a,c,h,u)}sphereTrimesh(e,t,n,i,s,o,a,l,c,h,u){const d=Zw,f=Jw,m=Qw,x=eM,g=tM,p=nM,v=oM,y=Kw,b=$w,A=aM;it.pointToLocalFrame(i,o,n,g);const w=e.radius;v.lowerBound.set(g.x-w,g.y-w,g.z-w),v.upperBound.set(g.x+w,g.y+w,g.z+w),t.getTrianglesInAABB(v,A);const R=Yw,D=e.radius*e.radius;for(let N=0;N<A.length;N++)for(let V=0;V<3;V++)if(t.getVertex(t.indices[A[N]*3+V],R),R.vsub(g,b),b.lengthSquared()<=D){if(y.copy(R),it.pointToWorldFrame(i,o,y,R),R.vsub(n,b),u)return!0;let k=this.createContactEquation(a,l,e,t,c,h);k.ni.copy(b),k.ni.normalize(),k.ri.copy(k.ni),k.ri.scale(e.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),k.rj.copy(R),k.rj.vsub(l.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}for(let N=0;N<A.length;N++)for(let V=0;V<3;V++){t.getVertex(t.indices[A[N]*3+V],d),t.getVertex(t.indices[A[N]*3+(V+1)%3],f),f.vsub(d,m),g.vsub(f,p);const k=p.dot(m);g.vsub(d,p);let B=p.dot(m);if(B>0&&k<0&&(g.vsub(d,p),x.copy(m),x.normalize(),B=p.dot(x),x.scale(B,p),p.vadd(d,p),p.distanceTo(g)<e.radius)){if(u)return!0;const W=this.createContactEquation(a,l,e,t,c,h);p.vsub(g,W.ni),W.ni.normalize(),W.ni.scale(e.radius,W.ri),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),it.pointToWorldFrame(i,o,p,p),p.vsub(l.position,W.rj),it.vectorToWorldFrame(o,W.ni,W.ni),it.vectorToWorldFrame(o,W.ri,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}const E=iM,M=sM,I=rM,O=jw;for(let N=0,V=A.length;N!==V;N++){t.getTriangleVertices(A[N],E,M,I),t.getNormal(A[N],O),g.vsub(E,p);let k=p.dot(O);if(O.scale(k,p),g.vsub(p,p),k=p.distanceTo(g),At.pointInTriangle(p,E,M,I)&&k<e.radius){if(u)return!0;let B=this.createContactEquation(a,l,e,t,c,h);p.vsub(g,B.ni),B.ni.normalize(),B.ni.scale(e.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),it.pointToWorldFrame(i,o,p,p),p.vsub(l.position,B.rj),it.vectorToWorldFrame(o,B.ni,B.ni),it.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}A.length=0}planeTrimesh(e,t,n,i,s,o,a,l,c,h,u){const d=new S,f=Ww;f.set(0,0,1),s.vmult(f,f);for(let m=0;m<t.vertices.length/3;m++){t.getVertex(m,d);const x=new S;x.copy(d),it.pointToWorldFrame(i,o,x,d);const g=Xw;if(d.vsub(n,g),f.dot(g)<=0){if(u)return!0;const v=this.createContactEquation(a,l,e,t,c,h);v.ni.copy(f);const y=qw;f.scale(g.dot(f),y),d.vsub(y,y),v.ri.copy(y),v.ri.vsub(a.position,v.ri),v.rj.copy(d),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const hs=new S,ks=new S,zs=new S,zw=new S,Vw=new S,Hw=new Rt,Gw=new Rt,Ww=new S,Xw=new S,qw=new S,jw=new S,$w=new S;new S;const Yw=new S,Kw=new S,Zw=new S,Jw=new S,Qw=new S,eM=new S,tM=new S,nM=new S,iM=new S,sM=new S,rM=new S,oM=new _t,aM=[],zo=new S,Ud=new S,lM=new S,cM=new S,hM=new S;function uM(r,e,t){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=lM;r[(s+1)%i].vsub(o,a);const l=cM;a.cross(e,l);const c=hM;t.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Vo=new S,dM=new S,fM=new S,pM=new S,mM=[new S,new S,new S,new S,new S,new S],gM=new S,xM=new S,vM=new S,yM=new S,_M=new S,bM=new S,wM=new S,MM=new S,SM=new S,EM=new S,TM=new S,AM=new S,CM=new S,RM=new S;new S;new S;const LM=new S,PM=new S,IM=new S,DM=new S,NM=new S,FM=new S,UM=new S,BM=new S,OM=new S,kM=new S,Bd=new Rt,zM=new S;new S;const VM=new S,Od=new S,HM=new S,GM=new S,WM=new S,XM=[0],qM=new S,jM=new S;class kd{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||zd(e,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||zd(t,h)}}}function zd(r,e){r.push((e&4294901760)>>16,e&65535)}const Ll=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class $M{constructor(){this.data={keys:[]}}get(e,t){const n=Ll(e,t);return this.data[n]}set(e,t,n){const i=Ll(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Ll(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}let YM=class extends ip{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new sp,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Dw,this.constraints=[],this.narrowphase=new kw(this),this.collisionMatrix=new _d,this.collisionMatrixPrevious=new _d,this.bodyOverlapKeeper=new kd,this.shapeOverlapKeeper=new kd,this.contactmaterials=[],this.contactMaterialTable=new $M,this.defaultMaterial=new vs("default"),this.defaultContactMaterial=new $i(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof sr?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=At.ALL,n.from=e,n.to=t,n.callback=i,Pl.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=At.ANY,n.from=e,n.to=t,n.result=i,Pl.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=At.CLOSEST,n.from=e,n.to=t,n.result=i,Pl.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof pe&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Pt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Pt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(Pt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=eS,i=tS,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=pe.DYNAMIC;let d=-1/0;const f=this.constraints,m=QM;l.length();const x=l.x,g=l.y,p=l.z;let v=0;for(c&&(d=Pt.now()),v=0;v!==s;v++){const N=o[v];if(N.type===u){const V=N.force,k=N.mass;V.x+=k*x,V.y+=k*g,V.z+=k*p}}for(let N=0,V=this.subsystems.length;N!==V;N++)this.subsystems[N].update();c&&(d=Pt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Pt.now()-d);let y=f.length;for(v=0;v!==y;v++){const N=f[v];if(!N.collideConnected)for(let V=n.length-1;V>=0;V-=1)(N.bodyA===n[V]&&N.bodyB===i[V]||N.bodyB===n[V]&&N.bodyA===i[V])&&(n.splice(V,1),i.splice(V,1))}this.collisionMatrixTick(),c&&(d=Pt.now());const b=JM,A=t.length;for(v=0;v!==A;v++)b.push(t[v]);t.length=0;const w=this.frictionEquations.length;for(v=0;v!==w;v++)m.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,b,this.frictionEquations,m),c&&(h.narrowphase=Pt.now()-d),c&&(d=Pt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const R=t.length;for(let N=0;N!==R;N++){const V=t[N],k=V.bi,B=V.bj,Y=V.si,W=V.sj;let K;if(k.material&&B.material?K=this.getContactMaterial(k.material,B.material)||this.defaultContactMaterial:K=this.defaultContactMaterial,K.friction,k.material&&B.material&&(k.material.friction>=0&&B.material.friction>=0&&k.material.friction*B.material.friction,k.material.restitution>=0&&B.material.restitution>=0&&(V.restitution=k.material.restitution*B.material.restitution)),a.addEquation(V),k.allowSleep&&k.type===pe.DYNAMIC&&k.sleepState===pe.SLEEPING&&B.sleepState===pe.AWAKE&&B.type!==pe.STATIC){const ie=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),me=B.sleepSpeedLimit**2;ie>=me*2&&(k.wakeUpAfterNarrowphase=!0)}if(B.allowSleep&&B.type===pe.DYNAMIC&&B.sleepState===pe.SLEEPING&&k.sleepState===pe.AWAKE&&k.type!==pe.STATIC){const ie=k.velocity.lengthSquared()+k.angularVelocity.lengthSquared(),me=k.sleepSpeedLimit**2;ie>=me*2&&(B.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(k,B,!0),this.collisionMatrixPrevious.get(k,B)||(Ar.body=B,Ar.contact=V,k.dispatchEvent(Ar),Ar.body=k,B.dispatchEvent(Ar)),this.bodyOverlapKeeper.set(k.id,B.id),this.shapeOverlapKeeper.set(Y.id,W.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Pt.now()-d,d=Pt.now()),v=0;v!==s;v++){const N=o[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(y=f.length,v=0;v!==y;v++){const N=f[v];N.update();for(let V=0,k=N.equations.length;V!==k;V++){const B=N.equations[V];a.addEquation(B)}}a.solve(e,this),c&&(h.solve=Pt.now()-d),a.removeAllEquations();const D=Math.pow;for(v=0;v!==s;v++){const N=o[v];if(N.type&u){const V=D(1-N.linearDamping,e),k=N.velocity;k.scale(V,k);const B=N.angularVelocity;if(B){const Y=D(1-N.angularDamping,e);B.scale(Y,B)}}}this.dispatchEvent(ZM),c&&(d=Pt.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,I=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(e,M,I);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Pt.now()-d),this.stepnumber+=1,this.dispatchEvent(KM);let O=!0;if(this.allowSleep)for(O=!1,v=0;v!==s;v++){const N=o[v];N.sleepTick(this.time),N.sleepState!==pe.SLEEPING&&(O=!0)}this.hasActiveBodies=O}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(mi,gi),e){for(let s=0,o=mi.length;s<o;s+=2)Cr.bodyA=this.getBodyById(mi[s]),Cr.bodyB=this.getBodyById(mi[s+1]),this.dispatchEvent(Cr);Cr.bodyA=Cr.bodyB=null}if(t){for(let s=0,o=gi.length;s<o;s+=2)Rr.bodyA=this.getBodyById(gi[s]),Rr.bodyB=this.getBodyById(gi[s+1]),this.dispatchEvent(Rr);Rr.bodyA=Rr.bodyB=null}mi.length=gi.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(mi,gi),n){for(let s=0,o=mi.length;s<o;s+=2){const a=this.getShapeById(mi[s]),l=this.getShapeById(mi[s+1]);xi.shapeA=a,xi.shapeB=l,a&&(xi.bodyA=a.body),l&&(xi.bodyB=l.body),this.dispatchEvent(xi)}xi.bodyA=xi.bodyB=xi.shapeA=xi.shapeB=null}if(i){for(let s=0,o=gi.length;s<o;s+=2){const a=this.getShapeById(gi[s]),l=this.getShapeById(gi[s+1]);vi.shapeA=a,vi.shapeB=l,a&&(vi.bodyA=a.body),l&&(vi.bodyB=l.body),this.dispatchEvent(vi)}vi.bodyA=vi.bodyB=vi.shapeA=vi.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new _t;const Pl=new At,Pt=globalThis.performance||{};if(!Pt.now){let r=Date.now();Pt.timing&&Pt.timing.navigationStart&&(r=Pt.timing.navigationStart),Pt.now=()=>Date.now()-r}new S;const KM={type:"postStep"},ZM={type:"preStep"},Ar={type:pe.COLLIDE_EVENT_NAME,body:null,contact:null},JM=[],QM=[],eS=[],tS=[],mi=[],gi=[],Cr={type:"beginContact",bodyA:null,bodyB:null},Rr={type:"endContact",bodyA:null,bodyB:null},xi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},vi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},_={gravity:-21.39,friction:0,restitution:.336,moveSpeed:1143.7,jumpVelocity:19.5,rotationSpeed:9.323,airControl:.5,hopHeight:.545,hopSpeed:11.817,talkSpeed:4.335,linearDamping:.93,legKickForce:.889,legKickDecay:6.1093,walkLegSpeed:1.0424,walkLegHeight:.754,sunIntensity:2.97,ambientIntensity:2,shadowEnabled:!0,shadowMapSize:4096,shadowType:"Basic",shadowRadius:4,shadowBlurSamples:32,shadowBias:800000000000002e-19,shadowNormalBias:.0428,shadowIntensity:.478,shadowCameraNear:1.6444,shadowCameraFar:119.27,shadowCameraSize:55.03,shadowCameraLeft:-50,shadowCameraRight:50,shadowCameraTop:50,shadowCameraBottom:-50,shadowAutoUpdate:!0,shadowCascades:1,toonEnabled:!1,outlineEnabled:!1,outlineIntensity:.471,saonEnabled:!0,hemiSkyColor:1427122,hemiGroundColor:12125188,hemiIntensity:3,rimColor:15468809,rimIntensity:2.54,rimPosX:18.8,rimPosY:18.9,rimPosZ:4.2,auraIntensity:0,auraDistance:6,auraColor:62207,useShader:!0,shaderSaturation:1.15,shaderBrightness:.05,shaderContrast:1.1,shaderGamma:1,shaderTintR:1,shaderTintG:1,shaderTintB:1,shaderTemperature:0,vignetteEnabled:!0,vignetteIntensity:.267,vignetteRadius:.661,vignetteSoftness:.35,chromaticEnabled:!1,chromaticIntensity:.005,chromaticRadial:!0,grainEnabled:!1,grainIntensity:.02,grainSpeed:.1,grainSize:3.5,sharpenEnabled:!1,sharpenIntensity:1,bloomEnabled:!1,bloomIntensity:1.566,bloomThreshold:.2,bloomRadius:.05,cameraHeight:15,cameraDistance:16.34,cameraLerp:.15471,cameraMinDistance:4.591,cameraMaxDistance:20,cameraZoomSpeed:1.7555,cameraRotateSpeed:.006662,cameraMinPitch:.1,cameraMaxPitch:1.4,cameraOrbitAngle:0,cameraPitchAngle:.6,spectatorDistance:34.04,spectatorPitch:.1,spectatorSpeed:.22866,spectatorHeight:8.7,jiggleEnabled:!0,jiggleIntensity:.15,jiggleSpeed:12,jiggleDamping:5,jiggleBounce:.8,jiggleMovementResponse:1,jiggleWalkWobble:.1968,jiggleWalkSpeed:10,tongueRange:16,tongueExtendDuration:.12,tongueRetractDuration:.08,tongueConeAngle:12,tongueAssistRadius:2,tongueMagnetRadius:.8,tongueAngleWeight:.85,tongueDistanceWeight:.15,tongueGrappleForce:25,tongueSwingForce:12,tongueGrabForce:15,tongueCooldown:.5,tongueColor:"#ff6b9d",tongueTipSize:.15,tongueThicknessBase:.08,tongueThicknessTip:.04,tongueDebugEnabled:!1,jiggleReturnSpeed:8,punchSwingDistance:2.537,punchSwingSpeed:6.35,punchReturnSpeed:9.38,punchCooldown:.3,punchLegRotation:.1,punchHitRadius:2,vfxEnabled:!0,vfxDustCount:3,vfxDustSize:.0905,vfxDustLife:.6,vfxImpactCount:16,vfxImpactSize:.372,vfxImpactLife:.4915,vfxWalkInterval:.12,vfxGroundOffset:-.45,vfxForwardOffset:.3,maxHealth:200,punchDamageMin:6,punchDamageMax:10,criticalDamageMin:15,criticalDamageMax:20,criticalChance:.15,knockbackForce:15,knockbackUpward:8,respawnTime:2.035,deathFadeDuration:1.0025,ballRadius:.5,ballMass:.6225,ballLinearDamping:.533,ballAngularDamping:.975,ballBounciness:.7,ballFriction:.422,ballKickForce:21.4,ballKickUpward:6.885,ballSpawnHeight:30,ballResetHeight:-20,scooterSpeed:18,scooterTurnSpeed:3,scooterMaxTurn:.5,scooterWheelSpeed:15,scooterVisualOffsetY:-.45,scooterAcceleration:8,scooterDeceleration:5,scooterSpawnRadius:2,scooterDismountKey:"KeyE",scooterRiderY:.35,scooterLegOffsetX:0,scooterLegOffsetY:0,scooterLegOffsetZ:-.75,scooterLegRotationX:1.15840734641021,scooterLegRotationY:.0584073464102071,scooterLegRotationZ:.0584073464102071};class nS{constructor(){this.world=new YM,this.world.gravity.set(0,_.gravity,0),this.world.broadphase=new sp,this.world.solver.iterations=30,this.groundMaterial=new vs("ground"),this.frogMaterial=new vs("frog"),this.updateMaterials();const e=new dp;this.groundBody=new pe({mass:0,material:this.groundMaterial}),this.groundBody.addShape(e),this.groundBody.quaternion.setFromEuler(-Math.PI/2,0,0),this.groundBody.position.set(0,0,0),this.world.addBody(this.groundBody)}updateMaterials(){let e=this.world.contactmaterials.find(n=>n.materials.includes(this.groundMaterial)&&n.materials.includes(this.frogMaterial));e?(e.friction=_.friction,e.restitution=_.restitution):(e=new $i(this.groundMaterial,this.frogMaterial,{friction:_.friction,restitution:_.restitution,contactEquationStiffness:1e7,contactEquationRelaxation:3}),this.world.addContactMaterial(e));let t=this.world.contactmaterials.find(n=>n.materials[0]===this.frogMaterial&&n.materials[1]===this.frogMaterial);t||(t=new $i(this.frogMaterial,this.frogMaterial,{friction:.1,restitution:.5}),this.world.addContactMaterial(t))}step(e){this.world.gravity.set(0,_.gravity,0),this.updateMaterials(),this.world.step(1/60,e,10)}}const wa=class wa{constructor(e,t,n,i){this.id=e,this.color=t,this.scene=n,this.physicsWorld=i,this.rider=null,this.velocity=0,this.facingAngle=0,this.wheelRotation=0,this.jumpCooldown=0,this.steerAmount=0,this.isHighlighted=!1,this.mesh=new An,this.board=null,this.handle=null,this.wheels={backLeft:null,backRight:null,frontLeft:null,frontRight:null},this.allMeshes=[],this.body=null,this.loadModel(),this.createPhysics(),this.createPromptLabel(),n.add(this.mesh)}loadModel(){const e=new Yi(.5,.1,1),t=new Kn({color:this.color}),n=new dt(e,t);n.position.y=0,this.mesh.add(n),wa.loader.load("/models/scooter.glb",i=>{this.mesh.remove(n),n.geometry.dispose(),n.material.dispose();const s=i.scene;s.scale.set(.5,.5,.5),s.rotation.y=Math.PI,s.traverse(o=>{if(o.isMesh){o.castShadow=!0,o.receiveShadow=!0,this.allMeshes.push(o);const a=o.name.toLowerCase();(a.includes("board")||a.includes("deck"))&&(o.material=o.material.clone(),o.material.color.set(this.color),this.board=o),a.includes("handle")&&(this.handle=o),a.includes("wheel")&&(a.includes("back")&&a.includes("left")&&(this.wheels.backLeft=o),a.includes("back")&&a.includes("right")&&(this.wheels.backRight=o),a.includes("front")&&a.includes("left")&&(this.wheels.frontLeft=o),a.includes("front")&&a.includes("right")&&(this.wheels.frontRight=o))}}),s.position.y=_.scooterVisualOffsetY,this.mesh.add(s),console.log("Scooter model loaded!")})}createPhysics(){if(!this.physicsWorld)return;const e=new Mh(.5);this.body=new pe({mass:5,shape:e,material:this.physicsWorld.frogMaterial,linearDamping:.9,angularDamping:.99,fixedRotation:!0}),this.body.position.set(0,1,0),this.physicsWorld.world.addBody(this.body)}createPromptLabel(){const e=document.createElement("div");e.className="scooter-prompt",e.textContent="Press E to ride",e.style.cssText=`
            color: white;
            background: rgba(0,0,0,0.7);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-family: sans-serif;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.2s;
        `,this.promptLabel=new Dr(e),this.promptLabel.position.set(0,1.5,0),this.mesh.add(this.promptLabel)}setHighlight(e){this.isHighlighted=e,this.promptLabel&&this.promptLabel.element&&(this.promptLabel.element.style.opacity=e?"1":"0")}mount(e){return this.rider?!1:(this.rider=e,e.isRidingScooter=!0,e.currentScooter=this,this.velocity=0,this.facingAngle=e.mesh.rotation.y,this.setHighlight(!1),this.updateRiderPosition(),console.log(`Frog ${e.id} mounted scooter`),!0)}dismount(){if(!this.rider)return;const e=this.rider;e.leftLeg&&(e.leftLeg.visible=!0),e.rightLeg&&(e.rightLeg.visible=!0),e.leftLeg&&e._originalLeftLegX!==void 0&&(e.leftLeg.position.x=e._originalLeftLegX,e.leftLeg.position.y=e._originalLeftLegY,e.leftLeg.position.z=e._originalLeftLegZ,e.leftLeg.rotation.x=0,e.leftLeg.rotation.y=0,e.leftLeg.rotation.z=0),e.rightLeg&&e._originalRightLegX!==void 0&&(e.rightLeg.position.x=e._originalRightLegX,e.rightLeg.position.y=e._originalRightLegY,e.rightLeg.position.z=e._originalRightLegZ,e.rightLeg.rotation.x=0,e.rightLeg.rotation.y=0,e.rightLeg.rotation.z=0);const t=new L(1.5,0,0);t.applyAxisAngle(new L(0,1,0),this.facingAngle),e.mesh.position.copy(this.mesh.position),e.mesh.position.add(t),e.mesh.position.y+=.5,e.body&&(e.body.position.copy(e.mesh.position),e.body.velocity.set(0,5,0)),e.isRidingScooter=!1,e.currentScooter=null,this.rider=null,console.log(`Frog ${e.id} dismounted scooter`)}updateRiderPosition(){if(!this.rider)return;this.rider.mesh.position.copy(this.mesh.position),this.rider.mesh.position.y+=_.scooterRiderY,this.rider.mesh.rotation.y=this.facingAngle;const e=this.steerAmount*.3;this.rider.leftLeg&&(this.rider.leftLeg.position.x=this.rider._originalLeftLegX+_.scooterLegOffsetX,this.rider.leftLeg.position.y=this.rider._originalLeftLegY+_.scooterLegOffsetY,this.rider.leftLeg.position.z=this.rider._originalLeftLegZ+_.scooterLegOffsetZ,this.rider.leftLeg.rotation.x=_.scooterLegRotationX,this.rider.leftLeg.rotation.y=_.scooterLegRotationY+e,this.rider.leftLeg.rotation.z=_.scooterLegRotationZ),this.rider.rightLeg&&(this.rider.rightLeg.position.x=this.rider._originalRightLegX-_.scooterLegOffsetX,this.rider.rightLeg.position.y=this.rider._originalRightLegY+_.scooterLegOffsetY,this.rider.rightLeg.position.z=this.rider._originalRightLegZ+_.scooterLegOffsetZ,this.rider.rightLeg.rotation.x=_.scooterLegRotationX,this.rider.rightLeg.rotation.y=-_.scooterLegRotationY+e,this.rider.rightLeg.rotation.z=-_.scooterLegRotationZ),this.rider.body&&this.rider.body.position.set(this.rider.mesh.position.x,this.rider.mesh.position.y,this.rider.mesh.position.z)}update(e,t){if(!this.rider||!this.rider.isLocal){this.body&&this.mesh.position.copy(this.body.position),this.animateWheels(e);return}const n=t.keys.forward?1:t.keys.backward?-1:0,i=t.keys.left?1:t.keys.right?-1:0,s=t.keys.jump;if(n!==0?(this.velocity+=n*_.scooterAcceleration*e,this.velocity=Ot.clamp(this.velocity,-_.scooterSpeed*.5,_.scooterSpeed)):Math.abs(this.velocity)>.1?this.velocity-=Math.sign(this.velocity)*_.scooterDeceleration*e:this.velocity=0,Math.abs(this.velocity)>.5){const o=this.velocity>0?1:-1;this.facingAngle+=i*_.scooterTurnSpeed*e*o}if(this.steerAmount=i,this.body){const o=Math.sin(this.facingAngle)*this.velocity,a=Math.cos(this.facingAngle)*this.velocity;this.body.velocity.x=o,this.body.velocity.z=a,this.jumpCooldown>0&&(this.jumpCooldown-=e);const l=Math.abs(this.body.velocity.y)<1&&this.body.position.y<3;s&&l&&this.jumpCooldown<=0&&(this.body.velocity.y=10,this.jumpCooldown=.5)}this.mesh.position.copy(this.body.position),this.mesh.rotation.y=this.facingAngle,this.handle&&(this.handle.rotation.y=this.steerAmount*_.scooterMaxTurn),this.updateRiderPosition(),this.animateWheels(e),this.spawnDustParticles(e)}animateWheels(e){this.wheelRotation+=this.velocity*_.scooterWheelSpeed*e,[this.wheels.backLeft,this.wheels.backRight,this.wheels.frontLeft,this.wheels.frontRight].forEach(n=>{n&&(n.rotation.x=this.wheelRotation)})}spawnDustParticles(e){if(!(!this.particles||!_.vfxEnabled)&&!(Math.abs(this.velocity)<2)&&(this._dustTimer=(this._dustTimer||0)+e,this._dustTimer>.1)){this._dustTimer=0;const t=this.mesh.position.clone();t.y=.1,this.particles.spawnWalkDust(t,this.color||"#ffffff")}}dispose(){this.body&&this.physicsWorld&&this.physicsWorld.world.removeBody(this.body),this.mesh.parent&&this.mesh.parent.remove(this.mesh)}};ao(wa,"loader",new La);let ga=wa;const ki=class ki{constructor(e,t,n,i=!1){if(this.id=e,this.isLocal=i,this.color=t,this.mesh=new An,this.bodyMesh=new An,this.mesh.add(this.bodyMesh),ki.modelGeometry){const s=ki.modelGeometry.clone();this.applyColor(s),this.bodyMesh.add(s)}else ki.loader.load("/models/frog.glb",s=>{const o=s.scene;o.scale.set(.5,.5,.5),o.position.y=-.6,o.rotation.y=Math.PI,ki.modelGeometry=o.clone(),this.applyColor(o),this.bodyMesh.add(o)},void 0,s=>{console.error("Error loading model:",s);const o=new ji(.5),a=new Kn({color:this.color});this.bodyMesh.add(new dt(o,a))});if(this.chatBubbleDiv=document.createElement("div"),this.chatBubbleDiv.className="chat-container",this.chatBubble=new Dr(this.chatBubbleDiv),this.chatBubble.position.set(0,1.5,0),this.mesh.add(this.chatBubble),this.chatTimer=null,n){const s=new Mh(.5);this.isLocal?(this.body=new pe({mass:1,shape:s,material:n.frogMaterial,fixedRotation:!0}),this.body.linearDamping=_.linearDamping):this.body=new pe({type:pe.KINEMATIC,shape:s,material:n.frogMaterial}),this.body.position.set(0,5,0),this.body.updateMassProperties(),n.world.addBody(this.body)}else this.body=null;this.onGround=!1,this.jumpCooldown=0,this.facingAngle=0,this.moveAnimTimer=0,this.isRidingScooter=!1,this.currentScooter=null,this.jiggleVelocity=0,this.jiggleOffset=0,this.lastVelocityY=0,this.wasMoving=!1,this.isPunching=!1,this.punchProgress=0,this.punchCooldownTimer=0,this.walkDustTimer=0,this.wasOnGround=!1,this.particles=null,this.health=_.maxHealth,this.isDead=!1,this.deathTimer=0,this.respawnTimer=0,this.healthBarVisibleTimer=0,this.healthBarVisible=!1,this.isAFK=!1,this.tongue={state:"idle",target:null,lockedPoint:new L,startTime:0,progress:0,cooldownTimer:0},this.tongueStartPos=new L,this.flies=0,this.tongueLine=null,this.tongueTip=null,this.tongueTube=null,this.healthBarContainer=document.createElement("div"),this.healthBarContainer.className="health-bar-container",this.healthBarContainer.style.opacity="0",this.healthBarContainer.style.transition="opacity 0.3s ease",this.healthBarContainer.innerHTML=`
            <div class="health-bar-bg">
                <div class="health-bar-fill"></div>
            </div>
        `,this.healthBarFill=this.healthBarContainer.querySelector(".health-bar-fill"),this.healthBar=new Dr(this.healthBarContainer),this.healthBar.position.set(0,2,0),this.mesh.add(this.healthBar),this.damageToasts=[],this.nameTagDiv=document.createElement("div"),this.nameTagDiv.className="name-tag",this.nameTagDiv.textContent=`Frog ${e.substr(0,4)}`,this.nameTag=new Dr(this.nameTagDiv),this.nameTag.position.set(0,1.2,0),this.mesh.add(this.nameTag)}setName(e){this.name=e,this.updateNameTag()}updateNameTag(){let e=`<span>${this.name||"Frog"}</span>`;this.isAFK&&(e+='<span class="afk-badge">AFK</span>'),this.nameTagDiv.innerHTML=e}update(e,t,n,i=0){if(this.isRidingScooter&&this.currentScooter){this.updateHealthBar(),this.updateHealthBarVisibility(e),this.updateJiggle(e,Math.abs(this.currentScooter.velocity)>1);return}if(!this.body)return;if(this.isDead){this.deathTimer+=e,this.respawnTimer-=e,this.respawnTimer<=0&&this.respawn();return}this.updateHealthBar(),this.updateHealthBarVisibility(e),this.mesh.position.copy(this.body.position);const s=new L(0,1,0);if(this.mesh.quaternion.setFromAxisAngle(s,this.facingAngle),this.chatTimer>0,!t)return;if(this.onGround=!1,this.body.world)for(const c of this.body.world.contacts){let h=0;if(c.bi===this.body?h=-c.ni.y:c.bj===this.body&&(h=c.ni.y),h>.5){this.onGround=!0;break}}this.body.position.y<.6&&(this.onGround=!0);const o=_.moveSpeed*e,a=new L(0,0,0);if(t.keys.forward&&(a.z-=1),t.keys.backward&&(a.z+=1),t.keys.left&&(a.x-=1),t.keys.right&&(a.x+=1),a.length()>0){a.normalize();const c=Math.cos(i),h=Math.sin(i),u=new L(a.x*c+a.z*h,0,-a.x*h+a.z*c);let f=Math.atan2(u.x,u.z)-this.facingAngle;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;this.facingAngle+=f*_.rotationSpeed*e;const x=this.tongue.state==="attached"?.3:1,g=new S(u.x*o*x,0,u.z*o*x);if(this.body.applyForce(g,this.body.position),this.onGround){this.moveAnimTimer+=e*_.hopSpeed;const p=Math.abs(Math.sin(this.moveAnimTimer))*_.hopHeight;if(this.bodyMesh.position.y=p,this.particles&&(this.walkDustTimer-=e,this.walkDustTimer<=0)){const v=this.mesh.position.clone();v.y+=_.vfxGroundOffset;const y=.25,b=Math.sin(this.moveAnimTimer*2)>0?1:-1,A=new L(y*b,0,.1);A.applyQuaternion(this.mesh.quaternion),v.add(A),this.particles.spawnWalkDust(v,this.color),this.walkDustTimer=_.vfxWalkInterval}}}else this.moveAnimTimer=0,this.bodyMesh.position.y=Ot.lerp(this.bodyMesh.position.y,0,e*10);if(this.onGround&&t.keys.jump&&this.jumpCooldown<=0&&(this.body.velocity.y=_.jumpVelocity,this.jumpCooldown=1,this.jumpKickAmount=1,this.particles)){const c=this.mesh.position.clone();c.y+=_.vfxGroundOffset;const h=this.getForwardDirection();c.add(h.multiplyScalar(_.vfxForwardOffset)),this.particles.spawnJumpDust(c,this.color)}if(this.onGround&&!this.wasOnGround){const c=Math.abs(this.lastVelocityY);if(this.particles&&c>3){const h=this.mesh.position.clone();h.y+=_.vfxGroundOffset;const u=this.getForwardDirection();h.add(u.multiplyScalar(_.vfxForwardOffset)),this.particles.spawnLandingDust(h,c,this.color),this.isLocal&&c>8&&this.world&&this.world.triggerScreenShake(c*.05,.2)}}this.wasOnGround=this.onGround,this.jumpCooldown>0&&(this.jumpCooldown-=e),n&&(this.lookTarget=n,this.updateEyes(n));const l=a.length()>0;if(this.updateAnimations(e,l,this.onGround),this.updateJiggle(e,l),this.updatePunch(e,t),this.updateTongue(e,t),this.isTalking&&this.mouthMesh&&this.mouthBaseScale){const c=_.talkSpeed,h=.5+Math.sin(Date.now()/100*c)*.5;this.mouthMesh.scale.y=this.mouthBaseScale.y*(1+h*.5)}this.bodyUniforms&&(this.bodyUniforms.uTime.value=performance.now()/1e3,this.bodyUniforms.uSpeed.value=_.shaderSpeed,this.bodyUniforms.uIntensity.value=_.shaderIntensity,this.bodyUniforms.uMix.value=_.shaderColorMix)}updatePosition(e,t){this.targetPos=new L(e.x,e.y,e.z),this.targetRot=new ln(t.qx,t.qy,t.qz,t.qw),this.body&&this.body.position.set(e.x,e.y,e.z)}getSyncState(){var s,o,a,l,c,h;if(!this.body)return null;const e=this.isRidingScooter?this.mesh.position:this.body.position,t=this.isRidingScooter?{x:0,y:0,z:0}:this.body.velocity,n=this.isRidingScooter&&this.currentScooter?this.currentScooter.steerAmount:0;let i=0;return this.tongue.state==="extending"?i=1:this.tongue.state==="retracting"?i=2:this.tongue.state==="attached"&&(i=3),{x:e.x,y:e.y,z:e.z,qx:this.mesh.quaternion.x,qy:this.mesh.quaternion.y,qz:this.mesh.quaternion.z,qw:this.mesh.quaternion.w,vx:t.x,vy:t.y,vz:t.z,lookX:((s=this.lookTarget)==null?void 0:s.x)||0,lookY:this.isRidingScooter&&this.currentScooter?1e9+parseInt(this.currentScooter.color.replace("#",""),16):((o=this.lookTarget)==null?void 0:o.y)||0,lookZ:this.isRidingScooter&&this.currentScooter?1e3+n*10:((a=this.lookTarget)==null?void 0:a.z)||0,isGrounded:this.onGround,isTalking:this.isTalking,isPunching:this.isPunching,punchProgress:this.punchProgress+(this.isRidingScooter?100:0)+i*10,tongueTargetX:((l=this.tongue.lockedPoint)==null?void 0:l.x)||0,tongueTargetY:((c=this.tongue.lockedPoint)==null?void 0:c.y)||0,tongueTargetZ:((h=this.tongue.lockedPoint)==null?void 0:h.z)||0,tongueProgress:this.tongue.progress||0}}applySyncState(e){if(this.targetPos=new L(e.x,e.y,e.z),this.targetRot=new ln(e.qx,e.qy,e.qz,e.qw),this.remoteVelocity=new L(e.vx,e.vy,e.vz),e.lookX!==void 0){let s=e.lookY,o=e.lookZ;if(s>=1e9){const a=s-1e9;this.remoteScooterColor="#"+a.toString(16).padStart(6,"0"),s=0}o>=990&&o<=1010?(this.remoteSteerAmount=(o-1e3)/10,o=0):this.remoteSteerAmount=0,this.targetLook=new L(e.lookX,s,o)}this.isRemoteGrounded=e.isGrounded,this.isRemoteTalking=e.isTalking,this.isRemotePunching=e.isPunching;let t=e.punchProgress||0,n=!1,i=0;t>=100&&(n=!0,t-=100),t>=30?(i=3,t-=30):t>=20?(i=2,t-=20):t>=10&&(i=1,t-=10),this.remotePunchProgress=t,this.remoteTongueStateCode=i,e.tongueTargetX!==void 0&&(this.remoteTongueTarget=new L(e.tongueTargetX,e.tongueTargetY,e.tongueTargetZ),this.remoteTongueProgress=e.tongueProgress||0),this.isRemoteRidingScooter!==n&&(this.isRemoteRidingScooter=n,this.isRemoteRidingScooter&&!this.remoteScooter?(this.remoteScooter=new ga(`scooter_remote_${this.id}`,this.remoteScooterColor||this.color,this.mesh,null),this.remoteScooter.particles=this.particles,this.remoteScooter.mesh.position.set(0,-.6,0),this.remoteScooter.rider=this):!this.isRemoteRidingScooter&&this.remoteScooter&&(this.remoteScooter.dispose(),this.remoteScooter=null,this.leftLeg&&this._originalLeftLegX!==void 0&&(this.leftLeg.position.x=this._originalLeftLegX,this.leftLeg.position.y=this._originalLeftLegY,this.leftLeg.position.z=this._originalLeftLegZ,this.leftLeg.rotation.x=0,this.leftLeg.rotation.y=0,this.leftLeg.rotation.z=0),this.rightLeg&&this._originalRightLegX!==void 0&&(this.rightLeg.position.x=this._originalRightLegX,this.rightLeg.position.y=this._originalRightLegY,this.rightLeg.position.z=this._originalRightLegZ,this.rightLeg.rotation.x=0,this.rightLeg.rotation.y=0,this.rightLeg.rotation.z=0))),this.body&&this.body.position.set(e.x,e.y,e.z)}applyServerPhysics(e){if(e)if(this.serverTargetPos={x:e.x,y:e.y,z:e.z},this.serverVelocity={x:e.vx,y:e.vy,z:e.vz},this.serverFacingAngle=e.facingAngle,this.serverIsGrounded=e.isGrounded,this.serverIsPunching=e.isPunching,this.serverIsDead=e.isDead,this.serverHealth=e.health,this.health!==e.health&&(this.health=e.health,this.updateHealthBar(),this.health<_.maxHealth&&this.showHealthBar()),e.isDead&&!this.isDead&&this.die(!0),this.isLocal){if(this.body){const t=e.x-this.body.position.x,n=e.y-this.body.position.y,i=e.z-this.body.position.z,s=Math.sqrt(t*t+n*n+i*i);s>.5&&(s>3?(this.body.position.set(e.x,e.y,e.z),this.body.velocity.set(e.vx,e.vy,e.vz)):(this.body.position.x+=t*.3,this.body.position.y+=n*.3,this.body.position.z+=i*.3))}}else{this.targetPos=new L(e.x,e.y,e.z),this.remoteVelocity=new L(e.vx,e.vy,e.vz),this.isRemoteGrounded=e.isGrounded,this.isRemotePunching=e.isPunching;const t=new ln;t.setFromAxisAngle(new L(0,1,0),e.facingAngle),this.targetRot=t,this.body&&this.body.position.set(e.x,e.y,e.z)}}updateRemote(e){if(!this.targetPos)return;this.mesh.position.lerp(this.targetPos,15*e),this.targetRot&&this.mesh.quaternion.slerp(this.targetRot,15*e),this.targetLook&&this.updateEyes(this.targetLook);const t=this.remoteVelocity||new L,i=t.length()>.1,s=this.isRemoteGrounded!==void 0?this.isRemoteGrounded:this.mesh.position.y<.1;if(!s&&t.y>2&&this.wasRemoteGrounded&&(this.jumpKickAmount=1,this.particles&&this.particles.spawnJumpDust(this.mesh.position,13413e3)),s&&!this.wasRemoteGrounded&&this.particles&&Math.abs(this.lastRemoteVelY)>2&&this.particles.spawnLandingDust(this.mesh.position,Math.abs(this.lastRemoteVelY),13413e3),this.wasRemoteGrounded=s,this.lastRemoteVelY=t.y,this.updateAnimations(e,i,s),this.updatePunch(e,null),this.isRemoteTalking&&this.mouthMesh&&this.mouthBaseScale){const o=_.talkSpeed,a=.5+Math.sin(Date.now()/100*o)*.5;this.mouthMesh.scale.y=this.mouthBaseScale.y*(1+a*.5)}else this.mouthMesh&&this.mouthBaseScale&&this.mouthMesh.scale.lerp(this.mouthBaseScale,e*10);if(i&&s){this.moveAnimTimer=(this.moveAnimTimer||0)+15*e;const o=Math.abs(Math.sin(this.moveAnimTimer))*_.hopHeight;this.bodyMesh.position.y=o,this.particles&&(this.walkDustTimer=(this.walkDustTimer||0)-e,this.walkDustTimer<=0&&(this.particles.spawnWalkDust(this.mesh.position,13413e3),this.walkDustTimer=_.vfxWalkInterval))}else this.moveAnimTimer=0,this.bodyMesh.position.y=Ot.lerp(this.bodyMesh.position.y,0,e*10);if(this.body&&(this.body.velocity.copy(t),this.updateJiggle(e,i)),this.isRemoteRidingScooter&&this.remoteScooter){const o=this.remoteSteerAmount||0;this.remoteScooter.steerAmount=o,this.remoteScooter.handle&&(this.remoteScooter.handle.rotation.y=o*_.scooterMaxTurn);const a=o*.3;if(this.leftLeg&&this._originalLeftLegZ!==void 0&&(this.leftLeg.position.x=this._originalLeftLegX+_.scooterLegOffsetX,this.leftLeg.position.y=this._originalLeftLegY+_.scooterLegOffsetY,this.leftLeg.position.z=this._originalLeftLegZ+_.scooterLegOffsetZ,this.leftLeg.rotation.x=_.scooterLegRotationX,this.leftLeg.rotation.y=_.scooterLegRotationY+a,this.leftLeg.rotation.z=_.scooterLegRotationZ),this.rightLeg&&this._originalRightLegZ!==void 0&&(this.rightLeg.position.x=this._originalRightLegX-_.scooterLegOffsetX,this.rightLeg.position.y=this._originalRightLegY+_.scooterLegOffsetY,this.rightLeg.position.z=this._originalRightLegZ+_.scooterLegOffsetZ,this.rightLeg.rotation.x=_.scooterLegRotationX,this.rightLeg.rotation.y=-_.scooterLegRotationY+a,this.rightLeg.rotation.z=-_.scooterLegRotationZ),this.particles&&_.vfxEnabled){const l=this.mesh.position;this._lastRemoteScooterPos||(this._lastRemoteScooterPos=l.clone());const c=l.distanceTo(this._lastRemoteScooterPos);if(this._lastRemoteScooterPos.copy(l),c>.05&&(this._remoteScooterDustTimer=(this._remoteScooterDustTimer||0)+e,this._remoteScooterDustTimer>.1)){this._remoteScooterDustTimer=0;const h=this.mesh.position.clone();h.y=.1,this.particles.spawnWalkDust(h,this.color||"#ffffff")}}}if(this.updateHealthBarVisibility(e),this.remoteTongueStateCode>0&&this.remoteTongueTarget){if(this.tongueLine||this.createTongueVisual(),this.tongueLine&&this.tongueTip){this.tongueLine.visible=!0,this.tongueTip.visible=!0;const o=new L(0,.3,.5);o.applyQuaternion(this.mesh.quaternion);const a=this.mesh.position.clone().add(o),l=new L().lerpVectors(a,this.remoteTongueTarget,this.remoteTongueProgress),c=this.tongueLine.geometry.attributes.position.array;c[0]=a.x,c[1]=a.y,c[2]=a.z,c[3]=l.x,c[4]=l.y,c[5]=l.z,this.tongueLine.geometry.attributes.position.needsUpdate=!0,this.tongueTip.position.copy(l)}}else this.tongueLine&&(this.tongueLine.visible=!1,this.tongueTip&&(this.tongueTip.visible=!1))}showChat(e){const t=document.createElement("div");for(t.className="chat-bubble",t.innerText=e,this.chatBubbleDiv.prepend(t);this.chatBubbleDiv.children.length>9;)this.chatBubbleDiv.removeChild(this.chatBubbleDiv.lastElementChild);t.addEventListener("animationend",()=>{t.parentNode&&t.remove()}),this.isTalking=!0,this.chatTimer&&clearTimeout(this.chatTimer);const n=Math.min(3e3,e.length*100);this.chatTimer=setTimeout(()=>{this.isTalking=!1,this.mouthMesh&&this.mouthBaseScale&&this.mouthMesh.scale.copy(this.mouthBaseScale)},n)}applyColor(e){this.pupils=[],this.leftLeg=null,this.rightLeg=null,console.log("Analyzing Model Meshes:"),e.traverse(t=>{if(t.isMesh){const n=t.name.toLowerCase();if(t.material=t.material.clone(),t.castShadow=!0,t.receiveShadow=!0,n.includes("pupil"))t.material.color.set(0),t.userData.initialPos=t.position.clone(),this.pupils.push(t);else if(n.includes("eye")||n.includes("white"))t.material.color.set(16777215);else if(n.includes("mouth")){const i=new Se(this.color);i.multiplyScalar(.8),t.material.color.set(i),this.mouthMesh=t,this.mouthBaseScale=t.scale.clone()}else n.includes("leftleg")?(this.leftLeg=t,this.leftLegBasePos=t.position.clone(),this._originalLeftLegX=t.position.x,this._originalLeftLegY=t.position.y,this._originalLeftLegZ=t.position.z,t.material.color.set(this.color)):n.includes("rightleg")?(this.rightLeg=t,this.rightLegBasePos=t.position.clone(),this._originalRightLegX=t.position.x,this._originalRightLegY=t.position.y,this._originalRightLegZ=t.position.z,t.material.color.set(this.color)):n.includes("assleft")||n.includes("ass_left")?(this.assLeft=t,this.assLeftBasePos=t.position.clone(),this.assLeftBaseScale=t.scale.clone(),t.material.color.set(this.color)):n.includes("assright")||n.includes("ass_right")?(this.assRight=t,this.assRightBasePos=t.position.clone(),this.assRightBaseScale=t.scale.clone(),t.material.color.set(this.color)):t.material.color.set(this.color)}}),console.log(`Legs found: Left=${!!this.leftLeg}, Right=${!!this.rightLeg}`),console.log(`Ass found: Left=${!!this.assLeft}, Right=${!!this.assRight}`)}setColor(e){this.color=e,this.bodyMesh&&this.bodyMesh.traverse(t=>{if(t.isMesh&&t.material){const n=t.name.toLowerCase();if(n.includes("pupil")||n.includes("eye")||n.includes("white"))return;if(n.includes("mouth")){const i=new Se(e);i.multiplyScalar(.8),t.material.color.set(i)}else t.material.color.set(e);t.userData.originalColor=t.material.color.clone()}})}updateAnimations(e,t,n){if(!(!this.leftLeg||!this.rightLeg)){if(n)if(this.jumpKickAmount=0,t){const i=Date.now()/1e3*(_.hopSpeed*_.walkLegSpeed),s=Math.sin(i),o=Math.max(0,s)*_.walkLegHeight,a=Math.max(0,-s)*_.walkLegHeight;this.leftLeg.position.y=this.leftLegBasePos.y+o,this.rightLeg.position.y=this.rightLegBasePos.y+a}else this.leftLeg.position.lerp(this.leftLegBasePos,e*10),this.rightLeg.position.lerp(this.rightLegBasePos,e*10);else if(this.jumpKickAmount>0){this.jumpKickAmount-=e*_.legKickDecay,this.jumpKickAmount<0&&(this.jumpKickAmount=0);const i=this.jumpKickAmount*this.jumpKickAmount*this.jumpKickAmount,s=-_.legKickForce*i;this.leftLeg.position.y=this.leftLegBasePos.y+s,this.rightLeg.position.y=this.rightLegBasePos.y+s}}}updateJiggle(e,t){if(!_.jiggleEnabled||!this.assLeft&&!this.assRight)return;const n=this.body?this.body.velocity.y:0,i=this.lastVelocityY<-2&&n>this.lastVelocityY?Math.abs(this.lastVelocityY)*.1*_.jiggleBounce:0,s=t!==this.wasMoving?_.jiggleMovementResponse*.5:0,o=t?Math.sin(Date.now()*.01*_.jiggleSpeed)*.3:0;this.jiggleVelocity+=i+s;const a=-this.jiggleOffset*_.jiggleSpeed*_.jiggleSpeed,l=-this.jiggleVelocity*_.jiggleDamping;this.jiggleVelocity+=(a+l)*e,this.jiggleOffset+=this.jiggleVelocity*e,this.jiggleOffset=Math.max(-1,Math.min(1,this.jiggleOffset));const c=(this.jiggleOffset+o)*_.jiggleIntensity,h=Date.now()*.001*_.jiggleWalkSpeed,u=t?Math.sin(h)*_.jiggleWalkWobble:0,d=t?Math.sin(h+Math.PI)*_.jiggleWalkWobble:0,f=t?Math.sin(h)*_.jiggleWalkWobble*.5:0,m=t?Math.sin(h+Math.PI)*_.jiggleWalkWobble*.5:0,x=_.jiggleReturnSpeed;if(this.assLeft&&this.assLeftBaseScale){const g=c;this.assLeft.scale.x=this.assLeftBaseScale.x*(1+g*.5),this.assLeft.scale.y=this.assLeftBaseScale.y*(1-g*.3),this.assLeft.scale.z=this.assLeftBaseScale.z*(1+g*.4);const p=this.assLeftBasePos.z+u;this.assLeft.position.z=Ot.lerp(this.assLeft.position.z,p,e*x),this.assLeft.position.y=this.assLeftBasePos.y+g*.1,this.assLeft.rotation.x=Ot.lerp(this.assLeft.rotation.x,f,e*x)}if(this.assRight&&this.assRightBaseScale){const g=c*.9+Math.sin(Date.now()*.012*_.jiggleSpeed)*.1*_.jiggleIntensity;this.assRight.scale.x=this.assRightBaseScale.x*(1+g*.5),this.assRight.scale.y=this.assRightBaseScale.y*(1-g*.3),this.assRight.scale.z=this.assRightBaseScale.z*(1+g*.4);const p=this.assRightBasePos.z+d;this.assRight.position.z=Ot.lerp(this.assRight.position.z,p,e*x),this.assRight.position.y=this.assRightBasePos.y+g*.1,this.assRight.rotation.x=Ot.lerp(this.assRight.rotation.x,m,e*x)}this.lastVelocityY=n,this.wasMoving=t}updatePunch(e,t){if(!(!this.rightLeg||!this.rightLegBasePos))if(this.punchCooldownTimer>0&&(this.punchCooldownTimer-=e),t&&t.consumePunch()&&this.punchCooldownTimer<=0&&!this.isPunching&&(this.isPunching=!0,this.punchProgress=0,this.punchCooldownTimer=_.punchCooldown,this.punchHitChecked=!1,this.isLocal&&this.world&&this.world.network&&this.world.network.sendPunch()),this.isPunching){this.punchProgress<1?(this.punchProgress+=e*_.punchSwingSpeed,this.punchProgress>=1&&(this.punchProgress=1)):this.isPunching=!1;const n=Math.sin(this.punchProgress*Math.PI)*_.punchSwingDistance;if(this.rightLeg.position.z=this.rightLegBasePos.z-n,this.rightLeg.position.y=this.rightLegBasePos.y+n*.15,this.rightLeg.rotation.x=n*_.punchLegRotation,this.punchProgress>.4&&this.punchProgress<.6&&!this.punchHitChecked){this.punchHitChecked=!0;const i=new L(Math.sin(this.facingAngle),0,Math.cos(this.facingAngle));let s=this.mesh.position.clone();if(this.rightLeg&&(this.rightLeg.getWorldPosition(s),s.add(i.clone().multiplyScalar(.5))),this.onPunchHit){const o=this.onPunchHit(s,i,_.punchHitRadius);this.isLocal&&this.world&&this.world.triggerScreenShake(o?1.5:.3,.2)}}}else this.rightLeg.position.z=Ot.lerp(this.rightLeg.position.z,this.rightLegBasePos.z,e*_.punchReturnSpeed),this.rightLeg.position.y=Ot.lerp(this.rightLeg.position.y,this.rightLegBasePos.y,e*_.punchReturnSpeed),this.rightLeg.rotation.x=Ot.lerp(this.rightLeg.rotation.x,0,e*_.punchReturnSpeed)}getMouthPosition(){const e=new L(0,.3,.5);return e.applyQuaternion(this.mesh.quaternion),this.mesh.position.clone().add(e)}getForwardDirection(){return new L(0,0,1).applyQuaternion(this.mesh.quaternion)}selectTongueTarget(e,t=null){const n=this.getMouthPosition(),i=t||this.getForwardDirection(),s=[],o=_.tongueRange,a=Ot.degToRad(_.tongueConeAngle);if(e.frogs)for(const[h,u]of Object.entries(e.frogs)){if(h===this.id||u.isDead)continue;const d=u.mesh.position.clone();d.y+=.3;const f=new L().subVectors(d,n),m=f.length();if(m>o)continue;const x=f.clone().normalize();if(x.dot(i)<0)continue;const g=x.angleTo(i);g>a||s.push({type:"frog",id:h,object:u,point:d,distance:m,angle:g})}if(e.grappleHooks)for(const h of e.grappleHooks){const u=new L().subVectors(h.position,n),d=u.length();if(d>o)continue;const f=u.clone().normalize();if(f.dot(i)<0)continue;const m=f.angleTo(i);m>a||s.push({type:"hook",id:null,object:h,point:h.position.clone(),distance:d,angle:m})}if(e.ball&&e.ball.mesh){const h=e.ball.mesh.position.clone(),u=new L().subVectors(h,n),d=u.length();if(d<=o){const f=u.clone().normalize();if(f.dot(i)>=0){const m=f.angleTo(i);m<=a&&s.push({type:"ball",id:null,object:e.ball,point:h,distance:d,angle:m})}}}if(e.scooters)for(const h of e.scooters){if(h.rider)continue;const u=h.mesh.position.clone(),d=new L().subVectors(u,n),f=d.length();if(f>o)continue;const m=d.clone().normalize();if(m.dot(i)<0)continue;const x=m.angleTo(i);x>a||s.push({type:"scooter",id:null,object:h,point:u,distance:f,angle:x})}const l=this.getWallTarget(e,n,i);if(l&&s.length>0){const h=_.tongueAssistRadius||2,u=s.find(d=>d.point.distanceTo(l.point)<h);if(u)return console.log("Tongue Assist: Snapping to target near wall hit"),u}if(s.length===0)return l;const c=s.map(h=>({...h,score:_.tongueAngleWeight*(h.angle/a)+_.tongueDistanceWeight*(h.distance/o)}));return c.sort((h,u)=>h.score-u.score),c[0]}getWallTarget(e,t,n){if(!e||!e.physics)return null;const i=_.tongueRange,s=[new L(0,0,0),new L(.1,0,0),new L(-.1,0,0),new L(0,.1,0),new L(0,-.1,0)],o=new L(0,1,0),a=new L().crossVectors(n,o).normalize(),l=new L().crossVectors(a,n).normalize();let c=null;for(const h of s){const u=t.clone().add(a.clone().multiplyScalar(h.x)).add(l.clone().multiplyScalar(h.y)),d=new S(u.x,u.y,u.z),f=new S(u.x+n.x*i,u.y+n.y*i,u.z+n.z*i),m=new sr;if(new At(d,f).intersectWorld(e.physics.world,{result:m}),m.hasHit){const g=new L(m.hitPointWorld.x,m.hitPointWorld.y,m.hitPointWorld.z);if(!(m.hitNormalWorld.y>.8||g.y<.5)){const y=t.distanceTo(g);(!c||y<c.distance)&&(c={type:"wall",id:null,object:null,point:g,distance:y,angle:0})}}}return c}createTongueVisual(){if(this.tongueLine)return;const e=16,t=new Ut,n=new Float32Array((e+1)*3);t.setAttribute("position",new qt(n,3));const i=new hh({color:_.tongueColor,linewidth:4});this.tongueSegmentCount=e,this.tongueLine=new Ea(t,i),this.tongueLine.visible=!1,this.tongueLine.frustumCulled=!1;const s=new ji(_.tongueTipSize,8,8),o=new tn({color:_.tongueColor});this.tongueTip=new dt(s,o),this.tongueTip.visible=!1,this.mesh.parent&&(this.mesh.parent.add(this.tongueLine),this.mesh.parent.add(this.tongueTip))}shootTongue(e,t){if(this.tongue.state!=="idle"||this.tongue.cooldownTimer>0||this.isRidingScooter)return;this.world=t;const n=this.getMouthPosition(),i=new L().subVectors(e,n).normalize(),s=this.selectTongueTarget(t,i);if(!s){this.playTongueMiss();return}this.tongue.target=s,this.tongue.lockedPoint.copy(s.point),this.tongue.state="extending",this.tongue.startTime=performance.now(),this.tongue.progress=0,this.tongueStartPos.copy(this.getMouthPosition()),this.createTongueVisual(),this.tongueLine&&(this.tongueLine.visible=!0),this.tongueTip&&(this.tongueTip.visible=!0)}playTongueMiss(){this.createTongueVisual(),this.tongue.target={type:"miss",id:null,object:null,point:this.getMouthPosition().add(this.getForwardDirection().multiplyScalar(2)),distance:2,angle:0},this.tongue.lockedPoint.copy(this.tongue.target.point),this.tongue.state="extending",this.tongue.startTime=performance.now(),this.tongue.progress=0,this.tongueStartPos.copy(this.getMouthPosition()),this.tongueLine&&(this.tongueLine.visible=!0),this.tongueTip&&(this.tongueTip.visible=!0)}updateTongue(e,t=null){var i;if(this.tongue.state==="idle"){this.tongue.cooldownTimer=Math.max(0,this.tongue.cooldownTimer-e);return}this.tongueStartPos.copy(this.getMouthPosition());const n=(performance.now()-this.tongue.startTime)/1e3;if(this.tongue.state==="extending"){const s=((i=this.tongue.target)==null?void 0:i.type)==="miss"?_.tongueExtendDuration*.5:_.tongueExtendDuration,o=Math.min(n/s,1);this.tongue.progress=1-Math.pow(1-o,3),o>=1&&this.resolveTongue()}else if(this.tongue.state==="retracting"){const s=_.tongueRetractDuration,o=Math.min(n/s,1);this.tongue.progress=1-o,o>=1&&this.finishTongue()}else this.tongue.state==="attached"&&this.updateGrapplePull(e,t);this.updateTongueVisual()}resolveTongue(){var s,o;const e=this.tongue.target;if(!e||e.type==="miss"){this.tongue.state="retracting",this.tongue.startTime=performance.now();return}if(e.type==="frog"&&(!e.object||e.object.isDead)){this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playMissEffect();return}let t=null;if(e.type==="frog"&&((s=e.object)!=null&&s.mesh)?(t=e.object.mesh.position.clone(),t.y+=.3):e.type==="ball"&&((o=e.object)!=null&&o.mesh)?t=e.object.mesh.position.clone():e.type==="hook"&&e.object?t=e.object.position.clone():(e.type==="wall"||e.type==="scooter")&&(t=e.point.clone()),!t){this.tongue.state="retracting",this.tongue.startTime=performance.now();return}const n=this.tongue.lockedPoint.distanceTo(t),i=_.tongueMagnetRadius*3;if(n>i){console.log("Tongue miss - target moved too far"),this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playMissEffect();return}switch(e.type){case"frog":this.grabFrog(e.object),this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playHitEffect();break;case"hook":case"wall":this.tongue.state="attached",this.tongue.lockedPoint.copy(t),this.playHitEffect();break;case"ball":this.grabBall(e.object),this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playHitEffect();break;case"scooter":this.pullScooter(e.object),this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playHitEffect();break;default:this.tongue.state="retracting",this.tongue.startTime=performance.now()}}grabFrog(e){var n;if(!e||!e.body)return;const t=new L().subVectors(this.mesh.position,e.mesh.position).normalize();e.body.velocity.x+=t.x*_.tongueGrabForce,e.body.velocity.y+=t.y*_.tongueGrabForce*.5,e.body.velocity.z+=t.z*_.tongueGrabForce,console.log("Grabbed frog!"),(n=this.world)!=null&&n.network&&this.world.network.socket.emit("tongueResult",{sourceId:this.id,targetId:e.id,type:"pull"})}grabBall(e){if(!e||!e.body)return;const t=new L().subVectors(this.mesh.position,e.mesh.position).normalize();e.body.velocity.x+=t.x*_.tongueGrabForce,e.body.velocity.y+=t.y*_.tongueGrabForce*.3,e.body.velocity.z+=t.z*_.tongueGrabForce,console.log("Grabbed ball!")}pullScooter(e){if(!e||!e.body)return;const t=new L().subVectors(this.mesh.position,e.mesh.position).normalize();e.body.velocity.x+=t.x*_.tongueGrabForce*.5,e.body.velocity.z+=t.z*_.tongueGrabForce*.5,console.log("Pulled scooter!")}updateGrapplePull(e,t){if(!this.tongue.target)return;const n=this.tongue.lockedPoint,i=new L().subVectors(n,this.mesh.position).normalize(),s=this.mesh.position.distanceTo(n);let o=1;s<4&&(o=Math.max(0,(s-1.5)/2.5));const a=_.tongueGrappleForce*o;if(this.body){if(this.body.velocity.x+=i.x*a*e*10,this.body.velocity.y+=i.y*a*e*10,this.body.velocity.z+=i.z*a*e*10,t&&t.keys){const u=this.getForwardDirection(),d=new L().crossVectors(new L(0,1,0),u).normalize(),f=_.tongueSwingForce||10;t.keys.left&&(this.body.velocity.x-=d.x*f*e*10,this.body.velocity.z-=d.z*f*e*10),t.keys.right&&(this.body.velocity.x+=d.x*f*e*10,this.body.velocity.z+=d.z*f*e*10),t.keys.forward&&(this.body.velocity.x+=u.x*f*.5*e*10,this.body.velocity.z+=u.z*f*.5*e*10),t.keys.backward&&(this.body.velocity.x-=u.x*f*.5*e*10,this.body.velocity.z-=u.z*f*.5*e*10)}const c=35,h=this.body.velocity.length();h>c&&this.body.velocity.scale(c/h,this.body.velocity)}(!(t?t.tongueHeld:!0)&&s<2.5||s<1)&&(this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.body&&this.body.velocity.scale(.5,this.body.velocity))}finishTongue(){this.tongue.state="idle",this.tongue.progress=0,this.tongue.target=null,this.tongue.cooldownTimer=_.tongueCooldown,this.tongueLine&&(this.tongueLine.visible=!1),this.tongueTip&&(this.tongueTip.visible=!1)}updateTongueVisual(){if(!this.tongueLine||!this.tongueTip)return;const e=this.tongue.lockedPoint,t=new L().lerpVectors(this.tongueStartPos,e,this.tongue.progress),n=this.tongueSegmentCount||1,i=this.tongueLine.geometry.attributes.position.array,s=performance.now()/1e3,o=this.tongue.state==="attached",a=this.tongueStartPos.distanceTo(t);let l=0;o&&(l=Math.max(0,(6-a)*.15));const c=this.tongue.state==="extending",h=c?.08:o?.02:0,d=Math.sin(s*(c?25:10))*h;for(let m=0;m<=n;m++){const x=m/n,g=new L().lerpVectors(this.tongueStartPos,t,x);if(l>0){const p=Math.sin(x*Math.PI);g.y-=p*l}if(c||o){const p=Math.sin(x*Math.PI*2+s*10)*(d*Math.sin(x*Math.PI));g.z+=p,g.x+=p*.5}i[m*3]=g.x,i[m*3+1]=g.y,i[m*3+2]=g.z}this.tongueLine.geometry.attributes.position.needsUpdate=!0,this.tongueTip.position.copy(t);const f=1+Math.sin(s*15)*.1;this.tongueTip.scale.setScalar(f)}releaseTongue(){this.tongue.state==="attached"&&(this.tongue.state="retracting",this.tongue.startTime=performance.now())}playHitEffect(){this.world&&this.isLocal&&(this.world.triggerScreenShake(.5,.1),this.particles&&this.tongue.target&&this.particles.spawnTongueImpact(this.tongue.lockedPoint,_.tongueColor))}playMissEffect(){this.world&&this.isLocal&&this.world.triggerScreenShake(.2,.05)}updateEyes(e){!this.pupils||this.pupils.length===0||!e||this.pupils.forEach(t=>{const n=t.parent.worldToLocal(e.clone()),i=t.userData.initialPos,s=new L().subVectors(n,i);s.z=0;const o=.12;s.length()>o&&s.normalize().multiplyScalar(o);const a=i.clone().add(s);t.position.lerp(a,.2)})}remotePunch(){this.punchTimer=0,this.isPunching=!0,this.punchProgress=0,this.punchHitChecked=!1}takeDamage(e,t,n=!1,i=!1,s=null){if(!this.isDead){if(this.health-=e,s&&(this.lastAttackerId=s,console.log(`⚔️ lastAttackerId set to: ${s}`)),this.showHealthBar(),this.updateHealthBar(),this.showHitTint(),this.particles&&this.mesh){const o=this.mesh.position.clone();o.y+=.5;const a=t?new L(t.x,t.y,t.z).normalize():new L(0,1,0);this.particles.spawnPunchImpact(o,a)}if(this.isLocal&&this.world){const o=i?2:1;this.world.triggerScreenShake(o,.5)}t&&this.body&&this.body.type!==2&&this.body.velocity.set(t.x,t.y,t.z),this.showDamageToast(e,i),this.health<=0&&(this.health=0,this.die(n))}}showHitTint(){this.bodyMesh.traverse(e=>{if(e.isMesh&&e.material&&(e.userData.originalColor||e.material.color&&(e.userData.originalColor=e.material.color.clone()),e.material.color)){const t=new Se(16711680);e.material.color.lerp(t,.6)}}),this.hitTintTimeout&&clearTimeout(this.hitTintTimeout),this.hitTintTimeout=setTimeout(()=>{this.fadeHitTint()},100)}fadeHitTint(){let e=0;const t=setInterval(()=>{e+=.1,this.bodyMesh.traverse(n=>{n.isMesh&&n.material&&n.userData.originalColor&&n.material.color.lerp(n.userData.originalColor,.3)}),e>=1&&(clearInterval(t),this.bodyMesh.traverse(n=>{n.isMesh&&n.material&&n.userData.originalColor&&n.material.color.copy(n.userData.originalColor)}))},50)}showHealthBar(){this.healthBarVisible=!0,this.healthBarVisibleTimer=3,this.healthBarContainer.style.opacity="1"}hideHealthBar(){this.healthBarVisible=!1,this.healthBarContainer.style.opacity="0"}updateHealthBarVisibility(e){this.healthBarVisible&&this.healthBarVisibleTimer>0&&(this.healthBarVisibleTimer-=e,this.healthBarVisibleTimer<=0&&this.hideHealthBar())}die(e=!1){this.isDead||(this.isRidingScooter&&this.currentScooter&&this.currentScooter.dismount(),this.isDead=!0,this.deathTimer=0,this.respawnTimer=_.respawnTime,this.particles&&this.particles.spawnDeathDisperse(this.mesh.position,this.color),this.setMeshOpacity(0),this.bodyMesh.visible=!1,this.body&&(this.body.velocity.set(0,0,0),this.body.position.y=1e3),this.healthBarContainer.style.display="none",this.isLocal&&window.showDeathScreen&&window.showDeathScreen(),this.isLocal&&!e&&this.world&&this.world.network&&(console.log(`💀 Sending death event: lastAttackerId=${this.lastAttackerId}`),this.world.network.sendDeath(this.lastAttackerId||null)))}respawn(e=!1){this.isDead=!1,this.health=_.maxHealth,this.deathTimer=0,this.lastAttackerId=null,this.body&&(this.body.position.set(0,10,0),this.body.velocity.set(0,0,0),this.mesh.position.set(0,10,0)),this.setMeshOpacity(1),this.bodyMesh.visible=!0,this.healthBarContainer.style.display="block",this.updateHealthBar(),this.isLocal&&window.hideDeathScreen&&window.hideDeathScreen(),this.isLocal&&!e&&this.world&&this.world.network&&this.world.network.sendRespawn()}updateHealthBar(){if(!this.healthBarFill)return;const e=this.health/_.maxHealth*100;this.healthBarFill.style.width=`${e}%`,this.healthBarFill.classList.remove("low","critical"),e<=25?this.healthBarFill.classList.add("critical"):e<=50&&this.healthBarFill.classList.add("low")}setMeshOpacity(e){this.bodyMesh.traverse(t=>{t.isMesh&&t.material&&(t.material.transparent=!0,t.material.opacity=e)})}showDamageToast(e,t=!1){const n=document.createElement("div");n.className="damage-toast"+(t?" critical":""),n.textContent=t?`CRIT! -${e}`:`-${e}`;const i=new Dr(n);i.position.set((Math.random()-.5)*.5,2.5+Math.random()*.5,0),this.mesh.add(i),setTimeout(()=>{this.mesh.remove(i),n.remove()},1e3),console.log(`Frog ${this.id} took ${e} damage! Health: ${this.health}/${_.maxHealth}`)}dispose(){this.chatBubbleDiv&&this.chatBubbleDiv.parentNode&&this.chatBubbleDiv.parentNode.removeChild(this.chatBubbleDiv),this.healthBarContainer&&this.healthBarContainer.parentNode&&this.healthBarContainer.parentNode.removeChild(this.healthBarContainer),this.nameTagDiv&&this.nameTagDiv.parentNode&&this.nameTagDiv.parentNode.removeChild(this.nameTagDiv),this.chatTimer&&(clearTimeout(this.chatTimer),this.chatTimer=null),this.bodyMesh.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()))})}};ao(ki,"modelGeometry",null),ao(ki,"loader",new La);let xa=ki;class iS{constructor(e,t,n={x:0,y:2,z:0}){this.scene=t,this.physicsWorld=e,this.radius=_.ballRadius,this.mass=_.ballMass,this.mesh=new An,this.mesh.position.set(n.x,n.y,n.z),this.createFallbackSphere(),n.x===0&&n.z===0&&(n.x=(Math.random()-.5)*20,n.z=(Math.random()-.5)*20),new La().load("/models/ball.glb",s=>{this.fallbackSphere&&this.mesh.remove(this.fallbackSphere);const o=s.scene,a=new ti().setFromObject(o),l=new L;a.getSize(l);const c=Math.max(l.x,l.y,l.z),u=this.radius*2/c;o.scale.set(u,u,u);const d=new L;a.getCenter(d),o.position.sub(d.multiplyScalar(u)),o.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0,f.material&&(f.material.roughness=.4,f.material.metalness=.1))}),this.mesh.add(o),this.modelLoaded=!0,console.log("Ball GLB model loaded successfully (precisely scaled)!")},void 0,s=>{console.error("Error loading ball GLB:",s)}),t.add(this.mesh),this.createPhysicsBody(e,n)}createFallbackSphere(){const e=new ji(this.radius,32,32),t=new Kn({color:16777215,roughness:.3,metalness:0,emissive:2236962});this.fallbackSphere=new dt(e,t),this.fallbackSphere.castShadow=!0,this.fallbackSphere.receiveShadow=!0,this.mesh.add(this.fallbackSphere)}createPhysicsBody(e,t){this.ballMaterial=new vs("ball");const n=new $i(e.groundMaterial,this.ballMaterial,{friction:_.ballFriction,restitution:_.ballBounciness});e.world.addContactMaterial(n);const i=new $i(e.frogMaterial,this.ballMaterial,{friction:.2,restitution:_.ballBounciness*.85});e.world.addContactMaterial(i);const s=new Mh(this.radius);this.body=new pe({mass:this.mass,shape:s,material:this.ballMaterial,linearDamping:_.ballLinearDamping,angularDamping:_.ballAngularDamping}),this.body.position.set(t.x,t.y,t.z),e.world.addBody(this.body)}update(e){this.body&&(this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion),this.body.position.y<_.ballResetHeight&&this.reset())}kick(e,t=null){if(!this.body)return;const n=t||_.ballKickForce,i=new S(e.x*n,e.y*n+_.ballKickUpward,e.z*n);this.body.applyImpulse(i,this.body.position)}reset(){if(this.body){const e=(Math.random()-.5)*30,t=(Math.random()-.5)*30;this.body.position.set(e,_.ballSpawnHeight,t),this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0)}}getSyncState(){return this.body?{x:this.body.position.x,y:this.body.position.y,z:this.body.position.z,qx:this.body.quaternion.x,qy:this.body.quaternion.y,qz:this.body.quaternion.z,qw:this.body.quaternion.w,vx:this.body.velocity.x,vy:this.body.velocity.y,vz:this.body.velocity.z}:null}applySyncState(e){this.body&&(this.body.position.set(e.x,e.y,e.z),this.body.quaternion.set(e.qx,e.qy,e.qz,e.qw),this.body.velocity.set(e.vx,e.vy,e.vz))}}const na={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class dr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const sS=new Aa(-1,1,1,-1,0,1);class rS extends Ut{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}}const oS=new rS;class Sh{constructor(e){this._mesh=new dt(oS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class fp extends dr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ms.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Sh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Vd extends dr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class aS extends dr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class lS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ce);this._width=n.width,this._height=n.height,t=new Qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ti}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fp(na),this.copyPass.material.blending=kt,this.clock=new qg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vd!==void 0&&(o instanceof Vd?n=!0:o instanceof aS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cS extends dr{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Se}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Ho={defines:{NUM_SAMPLES:7,NUM_RINGS:4,DIFFUSE_TEXTURE:0,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new Ce(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new ke},cameraInverseProjectionMatrix:{value:new ke},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		#include <common>

		varying vec2 vUv;

		#if DIFFUSE_TEXTURE == 1
		uniform sampler2D tDiffuse;
		#endif

		uniform highp sampler2D tDepth;
		uniform highp sampler2D tNormal;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float scale;
		uniform float intensity;
		uniform float bias;
		uniform float kernelRadius;
		uniform float minResolution;
		uniform vec2 size;
		uniform float randomSeed;

		// RGBA depth

		#include <packing>

		vec4 getDefaultColor( const in vec2 screenPosition ) {
			#if DIFFUSE_TEXTURE == 1
			return texture2D( tDiffuse, vUv );
			#else
			return vec4( 1.0 );
			#endif
		}

		float getDepth( const in vec2 screenPosition ) {
			return texture2D( tDepth, screenPosition ).x;
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {
			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];
			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );
			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;
		}

		vec3 getViewNormal( const in vec3 viewPosition, const in vec2 screenPosition ) {
			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );
		}

		float scaleDividedByCameraFar;
		float minResolutionMultipliedByCameraFar;

		float getOcclusion( const in vec3 centerViewPosition, const in vec3 centerViewNormal, const in vec3 sampleViewPosition ) {
			vec3 viewDelta = sampleViewPosition - centerViewPosition;
			float viewDistance = length( viewDelta );
			float scaledScreenDistance = scaleDividedByCameraFar * viewDistance;

			return max(0.0, (dot(centerViewNormal, viewDelta) - minResolutionMultipliedByCameraFar) / scaledScreenDistance - bias) / (1.0 + pow2( scaledScreenDistance ) );
		}

		// moving costly divides into consts
		const float ANGLE_STEP = PI2 * float( NUM_RINGS ) / float( NUM_SAMPLES );
		const float INV_NUM_SAMPLES = 1.0 / float( NUM_SAMPLES );

		float getAmbientOcclusion( const in vec3 centerViewPosition ) {
			// precompute some variables require in getOcclusion.
			scaleDividedByCameraFar = scale / cameraFar;
			minResolutionMultipliedByCameraFar = minResolution * cameraFar;
			vec3 centerViewNormal = getViewNormal( centerViewPosition, vUv );

			// jsfiddle that shows sample pattern: https://jsfiddle.net/a16ff1p7/
			float angle = rand( vUv + randomSeed ) * PI2;
			vec2 radius = vec2( kernelRadius * INV_NUM_SAMPLES ) / size;
			vec2 radiusStep = radius;

			float occlusionSum = 0.0;
			float weightSum = 0.0;

			for( int i = 0; i < NUM_SAMPLES; i ++ ) {
				vec2 sampleUv = vUv + vec2( cos( angle ), sin( angle ) ) * radius;
				radius += radiusStep;
				angle += ANGLE_STEP;

				float sampleDepth = getDepth( sampleUv );
				if( sampleDepth >= ( 1.0 - EPSILON ) ) {
					continue;
				}

				float sampleViewZ = getViewZ( sampleDepth );
				vec3 sampleViewPosition = getViewPosition( sampleUv, sampleDepth, sampleViewZ );
				occlusionSum += getOcclusion( centerViewPosition, centerViewNormal, sampleViewPosition );
				weightSum += 1.0;
			}

			if( weightSum == 0.0 ) discard;

			return occlusionSum * ( intensity / weightSum );
		}

		void main() {
			float centerDepth = getDepth( vUv );
			if( centerDepth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = getViewZ( centerDepth );
			vec3 viewPosition = getViewPosition( vUv, centerDepth, centerViewZ );

			float ambientOcclusion = getAmbientOcclusion( viewPosition );

			gl_FragColor = getDefaultColor( vUv );
			gl_FragColor.xyz *=  1.0 - ambientOcclusion;
		}`},Bi={defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new Ce(512,512)},sampleUvOffsets:{value:[new Ce(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

		#include <common>

		uniform vec2 size;

		varying vec2 vUv;
		varying vec2 vInvSize;

		void main() {
			vUv = uv;
			vInvSize = 1.0 / size;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		#include <common>
		#include <packing>

		uniform sampler2D tDiffuse;
		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform float depthCutoff;

		uniform vec2 sampleUvOffsets[ KERNEL_RADIUS + 1 ];
		uniform float sampleWeights[ KERNEL_RADIUS + 1 ];

		varying vec2 vUv;
		varying vec2 vInvSize;

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		void main() {
			float depth = getDepth( vUv );
			if( depth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = -getViewZ( depth );
			bool rBreak = false, lBreak = false;

			float weightSum = sampleWeights[0];
			vec4 diffuseSum = texture2D( tDiffuse, vUv ) * weightSum;

			for( int i = 1; i <= KERNEL_RADIUS; i ++ ) {

				float sampleWeight = sampleWeights[i];
				vec2 sampleUvOffset = sampleUvOffsets[i] * vInvSize;

				vec2 sampleUv = vUv + sampleUvOffset;
				float viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) rBreak = true;

				if( ! rBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

				sampleUv = vUv - sampleUvOffset;
				viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) lBreak = true;

				if( ! lBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

			}

			gl_FragColor = diffuseSum / weightSum;
		}`},va={createSampleWeights:function(r,e){const t=[];for(let n=0;n<=r;n++)t.push(hS(n,e));return t},createSampleOffsets:function(r,e){const t=[];for(let n=0;n<=r;n++)t.push(e.clone().multiplyScalar(n));return t},configure:function(r,e,t,n){r.defines.KERNEL_RADIUS=e,r.uniforms.sampleUvOffsets.value=va.createSampleOffsets(e,n),r.uniforms.sampleWeights.value=va.createSampleWeights(e,t),r.needsUpdate=!0}};function hS(r,e){return Math.exp(-(r*r)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}class rr extends dr{constructor(e,t,n=new Ce(256,256)){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this._originalClearColor=new Se,this._oldClearColor=new Se,this._oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new Ce(n.x,n.y),this.saoRenderTarget=new Qn(this.resolution.x,this.resolution.y,{type:Ti}),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone();const i=new uh;i.format=Js,i.type=Zs,this.normalRenderTarget=new Qn(this.resolution.x,this.resolution.y,{minFilter:Vt,magFilter:Vt,type:Ti,depthTexture:i}),this.normalMaterial=new bg,this.normalMaterial.blending=kt,this.saoMaterial=new Xt({defines:Object.assign({},Ho.defines),fragmentShader:Ho.fragmentShader,vertexShader:Ho.vertexShader,uniforms:ms.clone(Ho.uniforms)}),this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=i,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=kt,this.vBlurMaterial=new Xt({uniforms:ms.clone(Bi.uniforms),defines:Object.assign({},Bi.defines),vertexShader:Bi.vertexShader,fragmentShader:Bi.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=0,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=i,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=kt,this.hBlurMaterial=new Xt({uniforms:ms.clone(Bi.uniforms),defines:Object.assign({},Bi.defines),vertexShader:Bi.vertexShader,fragmentShader:Bi.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=0,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=i,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=kt,this.materialCopy=new Xt({uniforms:ms.clone(na.uniforms),vertexShader:na.vertexShader,fragmentShader:na.fragmentShader,blending:kt}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=Vl,this.materialCopy.blendSrc=vf,this.materialCopy.blendDst=Hl,this.materialCopy.blendEquation=bi,this.materialCopy.blendSrcAlpha=xf,this.materialCopy.blendDstAlpha=Hl,this.materialCopy.blendEquationAlpha=bi,this.fsQuad=new Sh(null)}render(e,t,n){this.renderToScreen&&(this.materialCopy.blending=kt,this.materialCopy.uniforms.tDiffuse.value=n.texture,this.materialCopy.needsUpdate=!0,this._renderPass(e,this.materialCopy,null)),e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const i=e.autoClear;e.autoClear=!1,this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const s=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=s,this.hBlurMaterial.uniforms.depthCutoff.value=s,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(va.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ce(0,1)),va.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Ce(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this._renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this._renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));const o=this.materialCopy;this.params.output===rr.OUTPUT.Normal?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===rr.OUTPUT.Default?o.blending=Vl:o.blending=kt,this._renderPass(e,o,this.renderToScreen?null:n),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=i}setSize(e,t){this.saoRenderTarget.setSize(e,t),this.blurIntermediateRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.saoMaterial.uniforms.size.value.set(e,t),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,t),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,t),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}_renderPass(e,t,n,i,s){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,i,s){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}}rr.OUTPUT={Default:0,SAO:1,Normal:2};const Go={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class uS extends dr{constructor(){super(),this.uniforms=ms.clone(Go.uniforms),this.material=new _g({name:Go.name,uniforms:this.uniforms,vertexShader:Go.vertexShader,fragmentShader:Go.fragmentShader}),this._fsQuad=new Sh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_f?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sf?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===wf&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class dS{constructor(e){this.scene=e,this.particles=[],this.dustPool=[],this.impactPool=[],this.dustGeometry=new Yi(1,1,1),this.impactGeometry=new ph(1,0),this.dustMaterial=new Kn({color:13413e3,roughness:1,transparent:!0,opacity:.8}),this.impactMaterial=new tn({color:16777096,transparent:!0,opacity:1,blending:zl}),this.initPool()}initPool(){for(let e=0;e<80;e++){const t=new dt(this.dustGeometry,this.dustMaterial.clone());t.castShadow=!0,t.receiveShadow=!0,t.visible=!1,this.scene.add(t),this.dustPool.push(t)}for(let e=0;e<150;e++){const t=new dt(this.impactGeometry,this.impactMaterial.clone());t.visible=!1,this.scene.add(t),this.impactPool.push(t)}}getDustParticle(){return this.dustPool.find(e=>!e.visible)}getImpactParticle(){return this.impactPool.find(e=>!e.visible)}randRange(e,t){return e+Math.random()*(t-e)}spawnWalkDust(e,t){if(!_.vfxEnabled)return;const n=3,i=new Se(t||13413e3);for(let s=0;s<n;s++){const o=this.getImpactParticle();if(!o)return;const a=.2;o.position.set(e.x+this.randRange(-a,a),e.y+.1,e.z+this.randRange(-a,a)),o.scale.setScalar(.01);const l=.15*this.randRange(.5,1.2),c=i.clone();Math.random()>.5&&c.offsetHSL(0,0,.2),o.material.color.copy(c),o.visible=!0,this.particles.push({mesh:o,velocity:new L(this.randRange(-1,1),this.randRange(1,3),this.randRange(-1,1)),angularVelocity:new L(this.randRange(-10,10),this.randRange(-10,10),0),targetScale:l,life:.4,maxLife:.4,type:"impact"})}}spawnJumpDust(e,t){if(!_.vfxEnabled)return;const n=15,i=new Se(t||13413e3);for(let s=0;s<n;s++){const o=this.getImpactParticle();if(!o)return;const a=s/n*Math.PI*2+this.randRange(-.2,.2),l=this.randRange(4,7);o.position.set(e.x+Math.cos(a)*.5,e.y+.1,e.z+Math.sin(a)*.5);const c=.25*this.randRange(1,2);o.scale.setScalar(.01),o.material.color.copy(i),o.visible=!0,this.particles.push({mesh:o,velocity:new L(Math.cos(a)*l,this.randRange(2,5),Math.sin(a)*l),angularVelocity:new L(this.randRange(-10,10),this.randRange(-10,10),0),targetScale:c,life:.5,maxLife:.5,type:"impact"})}}spawnLandingDust(e,t,n){if(!_.vfxEnabled)return;const i=18,s=new Se(n||13413e3);for(let o=0;o<i;o++){const a=this.getImpactParticle();if(!a)return;const l=Math.random()*Math.PI*2,c=Math.random()*.8,h=t+this.randRange(2,6);a.position.set(e.x+Math.cos(l)*c,e.y+.05,e.z+Math.sin(l)*c);const u=.3*this.randRange(.8,1.5);a.scale.setScalar(.01),a.material.color.copy(s),a.visible=!0,this.particles.push({mesh:a,velocity:new L(Math.cos(l)*h,this.randRange(2,t*1.5),Math.sin(l)*h),angularVelocity:new L(this.randRange(-15,15),this.randRange(-15,15),0),targetScale:u,life:.6,maxLife:.6,type:"impact"})}}spawnPunchImpact(e,t){if(!_.vfxEnabled)return;const n=_.vfxImpactCount;for(let i=0;i<n;i++){const s=this.getImpactParticle();if(!s)return;s.position.copy(e),s.scale.setScalar(.01);const o=_.vfxImpactSize*this.randRange(.5,1.5),a=this.randRange(.05,.15),l=1,c=this.randRange(.5,1);s.material.color.setHSL(a,l,c),s.visible=!0;const h=.8;this.particles.push({mesh:s,velocity:new L(t.x*10+this.randRange(-h,h)*5,this.randRange(-1,5),t.z*10+this.randRange(-h,h)*5),angularVelocity:new L(this.randRange(-20,20),this.randRange(-20,20),this.randRange(-20,20)),targetScale:o,life:_.vfxImpactLife,maxLife:_.vfxImpactLife,type:"impact"})}}spawnTongueImpact(e,t){if(!_.vfxEnabled)return;const n=12,i=new Se(t||_.tongueColor);for(let s=0;s<n;s++){const o=this.getImpactParticle();if(!o)return;o.position.copy(e),o.scale.setScalar(.01);const a=.2*this.randRange(.8,2);o.material.color.copy(i),o.visible=!0;const l=Math.random()*Math.PI*2,c=this.randRange(2,6);this.particles.push({mesh:o,velocity:new L(Math.cos(l)*c,this.randRange(1,4),Math.sin(l)*c),angularVelocity:new L(this.randRange(-10,10),this.randRange(-10,10),0),targetScale:a,life:.6,maxLife:.6,type:"impact"})}}spawnDeathDisperse(e,t){if(!_.vfxEnabled)return;const n=30;for(let i=0;i<n;i++){const s=this.getDustParticle();if(!s)return;s.position.set(e.x+this.randRange(-.3,.3),e.y+this.randRange(0,.5),e.z+this.randRange(-.3,.3)),s.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),s.visible=!0,s.material.color.setHex(t||5025616),s.material.opacity=.9;const o=.2*this.randRange(.5,1.5);s.scale.setScalar(.01);const a=this.randRange(2,8),l=Math.random()*Math.PI*2,c=this.randRange(2,10);this.particles.push({mesh:s,velocity:new L(Math.cos(l)*a,c,Math.sin(l)*a),angularVelocity:new L(this.randRange(-10,10),this.randRange(-10,10),this.randRange(-10,10)),targetScale:o,life:1.5,maxLife:1.5,type:"dust"})}}update(e){for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t];n.mesh.position.add(n.velocity.clone().multiplyScalar(e)),n.mesh.rotation.x+=n.angularVelocity.x*e,n.mesh.rotation.y+=n.angularVelocity.y*e,n.mesh.rotation.z+=n.angularVelocity.z*e,n.type==="dust"?(n.velocity.y-=15*e,n.velocity.multiplyScalar(1-e*2)):n.velocity.multiplyScalar(1-e*5),n.life-=e;const i=n.life/n.maxLife;let s=0;if(i>.8){const o=(1-i)/.2;s=Ot.lerp(0,n.targetScale,o)}else{const o=i/.8;s=n.targetScale*o}n.mesh.scale.setScalar(s),n.life<=0&&(n.mesh.visible=!1,this.particles.splice(t,1))}}}class fS{constructor(){this.container=document.getElementById("canvas-container"),this.scene=new mu,this.scene.background=new Se(16746496),this.scene.fog=new rh(16746496,40,120),this.camera=new Wt(60,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,15,15),this.camera.lookAt(0,0,0),this.cameraOrbitAngle=_.cameraOrbitAngle,this.cameraPitchAngle=_.cameraPitchAngle,this.cameraDistance=_.cameraDistance,this.shakeIntensity=0,this.shakeTimer=0,this.shakeOffset=new L,this.grappleHooks=[],this.tongueCursorIndicator=null,this.createTongueCursorIndicator(),this.renderer=new ad({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=_.shadowEnabled,this.renderer.shadowMap.type=$o,this.renderer.shadowMap.autoUpdate=_.shadowAutoUpdate,this.renderer.toneMapping=jc,this.renderer.toneMappingExposure=1,this.container.appendChild(this.renderer.domElement),this.labelRenderer=new G_,this.labelRenderer.setSize(window.innerWidth,window.innerHeight),this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.top="0px",this.labelRenderer.domElement.style.left="0px",this.labelRenderer.domElement.style.pointerEvents="none",this.container.appendChild(this.labelRenderer.domElement);const e=new Nu(16777215,_.ambientIntensity);this.scene.add(e);const t=new kg(_.hemiSkyColor,_.hemiGroundColor,_.hemiIntensity);this.scene.add(t),this.hemiLight=t;const n=new ea(16777215,_.sunIntensity);n.position.set(20,30,10),this.dirLight=n;const i=new ea(_.rimColor,_.rimIntensity);i.position.set(_.rimPosX,_.rimPosY,_.rimPosZ),this.scene.add(i),this.rimLight=i,n.castShadow=_.shadowEnabled,n.shadow.mapSize.width=_.shadowMapSize,n.shadow.mapSize.height=_.shadowMapSize,n.shadow.camera.near=_.shadowCameraNear,n.shadow.camera.far=_.shadowCameraFar,n.shadow.camera.top=_.shadowCameraTop,n.shadow.camera.bottom=_.shadowCameraBottom,n.shadow.camera.left=_.shadowCameraLeft,n.shadow.camera.right=_.shadowCameraRight,n.shadow.bias=_.shadowBias,n.shadow.normalBias=_.shadowNormalBias,n.shadow.radius=_.shadowRadius,n.shadow.blurSamples=_.shadowBlurSamples,n.shadow.intensity=_.shadowIntensity,this.scene.add(n),this.physics=new nS,this.loadLevel(),this.frogs={},this.localFrog=null,this.isBallAuthority=!1,this.scooters=[],this.scooterSpawnZones=[],this.playerHasScooter={},window.addEventListener("resize",()=>this.onWindowResize()),this.raycaster=new n0,this.mousePlane=new yi(new L(0,1,0),0),this.composer=new lS(this.renderer),this.composer.addPass(new cS(this.scene,this.camera)),this.saoPass=new rr(this.scene,this.camera),this.saoPass.params.output=rr.OUTPUT.Default,this.saoPass.params.saoBias=.5,this.saoPass.params.saoIntensity=.015,this.saoPass.params.saoScale=12,this.saoPass.params.saoKernelRadius=40,this.saoPass.params.saoMinResolution=0,this.saoPass.enabled=_.saonEnabled,this.composer.addPass(this.saoPass);const s={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new Ce(window.innerWidth,window.innerHeight)},uSaturation:{value:_.shaderSaturation},uBrightness:{value:_.shaderBrightness},uContrast:{value:_.shaderContrast},uGamma:{value:_.shaderGamma},uTint:{value:new L(_.shaderTintR,_.shaderTintG,_.shaderTintB)},uTemperature:{value:_.shaderTemperature},uVignetteEnabled:{value:_.vignetteEnabled?1:0},uVignetteIntensity:{value:_.vignetteIntensity},uVignetteRadius:{value:_.vignetteRadius},uVignetteSoftness:{value:_.vignetteSoftness},uChromaticEnabled:{value:_.chromaticEnabled?1:0},uChromaticIntensity:{value:_.chromaticIntensity},uChromaticRadial:{value:_.chromaticRadial?1:0},uGrainEnabled:{value:_.grainEnabled?1:0},uGrainIntensity:{value:_.grainIntensity},uGrainSpeed:{value:_.grainSpeed},uGrainSize:{value:_.grainSize},uSharpenEnabled:{value:_.sharpenEnabled?1:0},uSharpenIntensity:{value:_.sharpenIntensity},uBloomEnabled:{value:_.bloomEnabled?1:0},uBloomIntensity:{value:_.bloomIntensity},uBloomThreshold:{value:_.bloomThreshold},uBloomRadius:{value:_.bloomRadius},uToonEnabled:{value:_.toonEnabled?1:0},uOutlineEnabled:{value:_.outlineEnabled?1:0},uOutlineIntensity:{value:_.outlineIntensity},uSkyColor:{value:new L(1,.53,0)},uLowHealth:{value:0}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                precision highp float;
                
                uniform sampler2D tDiffuse;
                uniform float uTime;
                uniform vec2 uResolution;
                
                // Color Grading
                uniform float uSaturation;
                uniform float uBrightness;
                uniform float uContrast;
                uniform float uGamma;
                
                // Tint / Temperature
                uniform vec3 uTint;
                uniform float uTemperature;
                
                // Vignette
                uniform float uVignetteEnabled;
                uniform float uVignetteIntensity;
                uniform float uVignetteRadius;
                uniform float uVignetteSoftness;
                
                // Chromatic Aberration
                uniform float uChromaticEnabled;
                uniform float uChromaticIntensity;
                uniform float uChromaticRadial;
                
                // Film Grain
                uniform float uGrainEnabled;
                uniform float uGrainIntensity;
                uniform float uGrainSpeed;
                uniform float uGrainSize;
                
                // Sharpen
                uniform float uSharpenEnabled;
                uniform float uSharpenIntensity;
                
                // Bloom
                uniform float uBloomEnabled;
                uniform float uBloomIntensity;
                uniform float uBloomThreshold;
                uniform float uBloomRadius;

                // Toon / Outline
                uniform float uToonEnabled;
                uniform float uOutlineEnabled;
                uniform float uOutlineIntensity;
                uniform vec3 uSkyColor;
                uniform float uLowHealth;
                
                varying vec2 vUv;
                
                // Random function for grain
                float random(vec2 st) {
                    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
                }
                
                // Luminance calculation
                float getLuminance(vec3 c) {
                    return dot(c, vec3(0.299, 0.587, 0.114));
                }
                
                void main() {
                    vec2 uv = vUv;
                    vec2 texelSize = 1.0 / uResolution;
                    
                    // === CHROMATIC ABERRATION ===
                    vec4 color;
                    if (uChromaticEnabled > 0.5) {
                        vec2 direction;
                        if (uChromaticRadial > 0.5) {
                            direction = uv - 0.5;
                        } else {
                            direction = vec2(1.0, 0.0);
                        }
                        float r = texture2D(tDiffuse, uv + direction * uChromaticIntensity).r;
                        float g = texture2D(tDiffuse, uv).g;
                        float b = texture2D(tDiffuse, uv - direction * uChromaticIntensity).b;
                        color = vec4(r, g, b, 1.0);
                    } else {
                        color = texture2D(tDiffuse, uv);
                    }
                    
                    // === SHARPEN ===
                    if (uSharpenEnabled > 0.5) {
                        vec4 center = color;
                        vec4 left = texture2D(tDiffuse, uv - vec2(texelSize.x, 0.0));
                        vec4 right = texture2D(tDiffuse, uv + vec2(texelSize.x, 0.0));
                        vec4 top = texture2D(tDiffuse, uv - vec2(0.0, texelSize.y));
                        vec4 bottom = texture2D(tDiffuse, uv + vec2(0.0, texelSize.y));
                        
                        vec4 sharpened = center * (1.0 + 4.0 * uSharpenIntensity) - 
                                       (left + right + top + bottom) * uSharpenIntensity;
                        color = sharpened;
                    }
                    
                    // === BLOOM (simplified glow) ===
                    if (uBloomEnabled > 0.5) {
                        vec4 bloomColor = vec4(0.0);
                        float bloomSamples = 0.0;
                        for (float x = -4.0; x <= 4.0; x += 1.0) {
                            for (float y = -4.0; y <= 4.0; y += 1.0) {
                                vec2 offset = vec2(x, y) * texelSize * uBloomRadius * 10.0;
                                vec4 sampleCol = texture2D(tDiffuse, uv + offset);
                                float bright = getLuminance(sampleCol.rgb);
                                if (bright > uBloomThreshold) {
                                    bloomColor += sampleCol * (bright - uBloomThreshold);
                                    bloomSamples += 1.0;
                                }
                            }
                        }
                        if (bloomSamples > 0.0) {
                            bloomColor /= bloomSamples;
                            color.rgb += bloomColor.rgb * uBloomIntensity;
                        }
                    }
                    
                    // === COLOR TEMPERATURE ===
                    color.r += uTemperature * 0.1;
                    color.b -= uTemperature * 0.1;
                    
                    // === COLOR TINT ===
                    color.rgb *= uTint;
                    
                    // === SATURATION ===
                    float gray = getLuminance(color.rgb);
                    color.rgb = mix(vec3(gray), color.rgb, uSaturation);
                    
                    // === BRIGHTNESS ===
                    color.rgb += uBrightness;
                    
                    // === CONTRAST ===
                    color.rgb = (color.rgb - 0.5) * uContrast + 0.5;
                    
                    // === GAMMA CORRECTION ===
                    color.rgb = pow(max(color.rgb, vec3(0.0)), vec3(1.0 / uGamma));
                    
                    // === FILM GRAIN ===
                    if (uGrainEnabled > 0.5) {
                        vec2 grainUv = vUv * uResolution / uGrainSize;
                        float grain = random(grainUv + uTime * uGrainSpeed) * 2.0 - 1.0;
                        color.rgb += grain * uGrainIntensity;
                    }
                    
                    // === CEL SHADING (Smooth Posterize) ===
                    bool isSky = distance(color.rgb, uSkyColor) < 0.25;
                    
                    if (uToonEnabled > 0.5 && !isSky) {
                        float levels = 8.0;
                        vec3 originalCol = color.rgb;
                        
                        // Use a smoother floor for cleaner ramps
                        vec3 low = floor(color.rgb * levels) / levels;
                        vec3 high = ceil(color.rgb * levels) / levels;
                        vec3 posterized = mix(low, high, fract(color.rgb * levels) * 0.4);
                        
                        // Mix back heavily for that soft "Ghibli" feel
                        color.rgb = mix(posterized, originalCol, 0.7);
                    }

                    // === SOBEL OUTLINE ===
                    if (uOutlineEnabled > 0.5 && !isSky) {
                        float thickness = 0.6; // Even thinner edge
                        vec2 offset = thickness / uResolution;
                        
                        float t00 = getLuminance(texture2D(tDiffuse, uv + vec2(-offset.x, -offset.y)).rgb);
                        float t10 = getLuminance(texture2D(tDiffuse, uv + vec2( 0.0,      -offset.y)).rgb);
                        float t20 = getLuminance(texture2D(tDiffuse, uv + vec2( offset.x, -offset.y)).rgb);
                        float t01 = getLuminance(texture2D(tDiffuse, uv + vec2(-offset.x,  0.0)).rgb);
                        float t21 = getLuminance(texture2D(tDiffuse, uv + vec2( offset.x,  0.0)).rgb);
                        float t02 = getLuminance(texture2D(tDiffuse, uv + vec2(-offset.x,  offset.y)).rgb);
                        float t12 = getLuminance(texture2D(tDiffuse, uv + vec2( 0.0,       offset.y)).rgb);
                        float t22 = getLuminance(texture2D(tDiffuse, uv + vec2( offset.x,  offset.y)).rgb);
                        
                        float gx = t00 + 2.0 * t01 + t02 - t20 - 2.0 * t21 - t22;
                        float gy = t00 + 2.0 * t10 + t20 - t02 - 2.0 * t12 - t22;
                        float edge = sqrt(gx * gx + gy * gy);
                        
                        if (edge > 0.25) { // Protect smooth surfaces
                            color.rgb *= (1.0 - uOutlineIntensity * 2.5);
                        }
                    }

                    // === VIGNETTE ===
                    if (uVignetteEnabled > 0.5) {
                        vec2 vignetteUv = vUv - 0.5;
                        float dist = length(vignetteUv);
                        
                        // Heartbeat pulse calculation
                        float pulseSpeed = 4.0 + (uLowHealth * 8.0);
                        float pulse = (0.5 + 0.5 * sin(uTime * pulseSpeed)) * uLowHealth;
                        
                        // Modulate vignette parameters based on health/pulse
                        float currentRadius = uVignetteRadius * (1.1 - uLowHealth * 0.4);
                        float currentIntensity = uVignetteIntensity + (pulse * 0.5);
                        
                        float vig = smoothstep(currentRadius, currentRadius - uVignetteSoftness, dist);
                        
                        // Mix in red tint for low health
                        vec3 vignetteColor = mix(vec3(0.0), vec3(0.8, 0.0, 0.0), uLowHealth * 0.7);
                        
                        // Apply darkening and red tint
                        vec3 processedColor = color.rgb * (1.0 - currentIntensity);
                        processedColor += (vignetteColor * (dist * 2.0) * currentIntensity);
                        
                        color.rgb = mix(processedColor, color.rgb, vig);
                    }
                    
                    // Clamp final output
                    color.rgb = clamp(color.rgb, 0.0, 1.0);
                    
                    gl_FragColor = color;
                }
            `};this.customPass=new fp(s),this.composer.addPass(this.customPass);const o=new uS;this.composer.addPass(o),this.particles=new dS(this.scene),this.ball=new iS(this.physics,this.scene,{x:5,y:30,z:0})}getShadowMapType(e){switch(e){case"Basic":return Xp;case"PCF":return Xc;case"PCFSoft":return $o;case"VSM":return On;default:return $o}}loadLevel(){const e=new La;this.wallMeshes=[],e.load("/models/world.glb",t=>{const n=t.scene;this.scene.add(n),n.traverse(i=>{if(i.isMesh){if(i.castShadow=!0,i.receiveShadow=!0,i.material&&(i.material.transparent=!0,i.material.opacity=1,i.userData.originalOpacity=1,i.userData.targetOpacity=1,(i.name.toLowerCase().includes("terrain")||i.name.toLowerCase().includes("island"))&&(i.material.color.setHex(5614182),i.material.emissive.setHex(0),i.material.emissiveIntensity=0,i.material.roughness=.8),i.name.toLowerCase().includes("water")&&(i.material.color.setHex(1140394),i.material.opacity=.9,i.material.emissive.setHex(8772),i.material.emissiveIntensity=.1,i.material.metalness=.6,i.material.roughness=.1)),!i.name.toLowerCase().includes("ground")&&!i.name.toLowerCase().includes("floor")&&this.wallMeshes.push(i),i.name.toLowerCase().includes("scooterspawn")){i.visible=!1,i.userData.isSpawnPlate=!0;const s=new L;i.getWorldPosition(s);const o={position:s,mesh:i};this.scooterSpawnZones.push(o),setTimeout(()=>{this.spawnScooterAtZone(o)},100),console.log("Found scooter spawn zone at:",s)}i.name.startsWith("Ghost_")||i.name.toLowerCase().includes("scooterspawn")||this.createPhysicsForMesh(i)}})},void 0,t=>{console.error("Error loading world:",t);const n=new Yr(100,100),i=new Kn({color:30654}),s=new dt(n,i);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s);const o=new dp,a=new pe({mass:0});a.addShape(o),a.quaternion.setFromEuler(-Math.PI/2,0,0),this.physics.world.addBody(a),this.spawnGrappleHooks()})}spawnGrappleHooks(){[{x:-10,y:8,z:-10},{x:10,y:10,z:-10},{x:-10,y:7,z:10},{x:10,y:9,z:10},{x:0,y:12,z:0},{x:-15,y:6,z:0},{x:15,y:6,z:0},{x:0,y:8,z:-15},{x:0,y:8,z:15}].forEach(t=>{const n=new ji(.3,16,16),i=new Kn({color:16766720,metalness:.8,roughness:.2,emissive:16766720,emissiveIntensity:.3}),s=new dt(n,i);s.position.set(t.x,t.y,t.z),s.castShadow=!0;const o=new Ta(.03,.03,2,8),a=new Kn({color:9127187}),l=new dt(o,a);l.position.y=1,s.add(l),this.scene.add(s),this.grappleHooks.push(s)}),console.log(`Spawned ${this.grappleHooks.length} grapple hooks`)}createTongueCursorIndicator(){const e=new mh(.3,.4,32),t=new tn({color:_.tongueColor,side:fn,transparent:!0,opacity:.8,depthTest:!1});this.tongueCursorIndicator=new dt(e,t),this.tongueCursorIndicator.visible=!1;const n=new dh(.3,32),i=new tn({color:_.tongueColor,transparent:!0,opacity:.3,depthTest:!1}),s=new dt(n,i);this.tongueCursorIndicator.add(s),this.scene.add(this.tongueCursorIndicator)}updateTongueCursorIndicator(e){if(!this.tongueCursorIndicator||!this.localFrog)return;if(this.localFrog.tongue.state!=="idle"){this.tongueCursorIndicator.visible=!1;return}const t=this.getMouseIntersection(e);if(!t){this.tongueCursorIndicator.visible=!1;return}const n=this.localFrog.mesh.position,i=new L(0,.3,.5);i.applyQuaternion(this.localFrog.mesh.quaternion);const s=n.clone().add(i);let o=new L().subVectors(t,s).normalize();const a=this.getPotentialTongueTargets(o),l=a.length>0,c=new L().subVectors(t,n),h=new L(c.x,0,c.z).normalize(),u=new L(0,0,1).applyQuaternion(this.localFrog.mesh.quaternion),d=new L(u.x,0,u.z).normalize(),f=Math.acos(Math.max(-1,Math.min(1,h.dot(d)))),m=Ot.degToRad(_.tongueConeAngle);if(f>m*2.5||isNaN(f)){this.tongueCursorIndicator.visible=!1;return}const x=new S(s.x,s.y,s.z),g=new S(s.x+o.x*_.tongueRange,s.y+o.y*_.tongueRange,s.z+o.z*_.tongueRange),p=new sr;if(new At(x,g).intersectWorld(this.physics.world,{result:p}),p.hasHit){const y=new L(p.hitPointWorld.x,p.hitPointWorld.y,p.hitPointWorld.z),b=p.hitNormalWorld;if(!(b.y>.8||y.y<.5)){if(this.tongueCursorIndicator.position.copy(y),l){const w=a[0],R=_.tongueAssistRadius||2;if(w.point.distanceTo(y)<R)this.tongueCursorIndicator.position.copy(w.point),this.tongueCursorIndicator.quaternion.set(0,0,0,1);else{const D=new L(b.x,b.y,b.z);this.tongueCursorIndicator.quaternion.setFromUnitVectors(new L(0,0,1),D),this.tongueCursorIndicator.position.add(D.multiplyScalar(.05))}}else{const w=new L(b.x,b.y,b.z);this.tongueCursorIndicator.quaternion.setFromUnitVectors(new L(0,0,1),w),this.tongueCursorIndicator.position.add(w.multiplyScalar(.05))}if(this.tongueCursorIndicator.visible=!0,l)if(a[0].point.distanceTo(y)<(_.tongueAssistRadius||2)){this.tongueCursorIndicator.material.color.setHex(65484);const E=performance.now()/1e3,M=1.4+Math.sin(E*10)*.1;this.tongueCursorIndicator.scale.set(M,M,1)}else this.tongueCursorIndicator.material.color.set(_.tongueColor),this.tongueCursorIndicator.scale.set(1.1,1.1,1);else{this.tongueCursorIndicator.material.color.set(_.tongueColor);const w=performance.now()/1e3,R=1+Math.sin(w*5)*.1;this.tongueCursorIndicator.scale.set(R,R,1)}return}}if(l){const y=a[0];this.tongueCursorIndicator.position.copy(y.point),this.tongueCursorIndicator.visible=!0,this.tongueCursorIndicator.material.color.setHex(65416);const b=performance.now()/1e3,A=1.3+Math.sin(b*8)*.15;this.tongueCursorIndicator.scale.set(A,A,1),this.tongueCursorIndicator.quaternion.set(0,0,0,1);return}this.tongueCursorIndicator.visible=!1}getPotentialTongueTargets(e=null){if(!this.localFrog)return[];const t=this.localFrog.getMouthPosition(),n=e||this.localFrog.getForwardDirection(),i=_.tongueRange,s=Ot.degToRad(_.tongueConeAngle),o=[];for(const[a,l]of Object.entries(this.frogs)){if(a===this.localFrog.id||l.isDead)continue;const c=l.mesh.position.clone();c.y+=.3;const h=new L().subVectors(c,t),u=h.length();if(u>i)continue;const d=h.clone().normalize();if(d.dot(n)<0)continue;const f=d.angleTo(n);f>s||o.push({type:"frog",point:c,distance:u,angle:f})}for(const a of this.grappleHooks){const l=new L().subVectors(a.position,t),c=l.length();if(c>i)continue;const h=l.clone().normalize();if(h.dot(n)<0)continue;const u=h.angleTo(n);u>s||o.push({type:"hook",point:a.position.clone(),distance:c,angle:u})}if(this.ball&&this.ball.mesh){const a=this.ball.mesh.position.clone(),l=new L().subVectors(a,t),c=l.length();if(c<=i){const h=l.clone().normalize();if(h.dot(n)>=0){const u=h.angleTo(n);u<=s&&o.push({type:"ball",point:a,distance:c,angle:u})}}}return o.map(a=>({...a,score:_.tongueAngleWeight*(a.angle/s)+_.tongueDistanceWeight*(a.distance/i)})).sort((a,l)=>a.score-l.score)}updateTongueDebug(){if(!this.tongueDebugCone){const a=Math.tan(Ot.degToRad(_.tongueConeAngle))*_.tongueRange,l=new pa(a,_.tongueRange,32,1,!0),c=new tn({color:65280,transparent:!0,opacity:.15,wireframe:!1,side:fn,depthWrite:!1});this.tongueDebugCone=new dt(l,c),this.tongueDebugCone.visible=!1,this.scene.add(this.tongueDebugCone);const h=new pa(a,_.tongueRange,16,1,!0),u=new tn({color:65280,wireframe:!0,transparent:!0,opacity:.4});this.tongueDebugConeWire=new dt(h,u),this.tongueDebugConeWire.visible=!1,this.scene.add(this.tongueDebugConeWire),this.tongueDebugTargets=[];for(let d=0;d<10;d++){const f=new ji(_.tongueMagnetRadius,16,16),m=new tn({color:16776960,transparent:!0,opacity:.5,wireframe:!0}),x=new dt(f,m);x.visible=!1,this.scene.add(x),this.tongueDebugTargets.push(x)}}if(!_.tongueDebugEnabled){this.tongueDebugCone.visible=!1,this.tongueDebugConeWire.visible=!1;for(const a of this.tongueDebugTargets)a.visible=!1;return}if(!this.localFrog)return;const e=this.localFrog.getMouthPosition(),t=this.localFrog.getForwardDirection();this.tongueDebugCone.position.copy(e),this.tongueDebugConeWire.position.copy(e);const n=_.tongueRange/2;this.tongueDebugCone.position.add(t.clone().multiplyScalar(n)),this.tongueDebugConeWire.position.add(t.clone().multiplyScalar(n));const i=new L(0,-1,0),s=new ln().setFromUnitVectors(i,t);this.tongueDebugCone.quaternion.copy(s),this.tongueDebugConeWire.quaternion.copy(s),this.tongueDebugCone.visible=!0,this.tongueDebugConeWire.visible=!0;const o=this.getPotentialTongueTargets();for(let a=0;a<this.tongueDebugTargets.length;a++)a<o.length?(this.tongueDebugTargets[a].position.copy(o[a].point),this.tongueDebugTargets[a].visible=!0,this.tongueDebugTargets[a].material.color.setHex(a===0?65280:16776960)):this.tongueDebugTargets[a].visible=!1}createPhysicsForMesh(e){const t=e.geometry;if(!t||!t.attributes||!t.attributes.position){console.warn(`Skipping physics for mesh "${e.name}": no position attributes`);return}const n=t.attributes.position,i=t.index;if(!n||n.count===0){console.warn(`Skipping physics for mesh "${e.name}": empty vertices`);return}if(n.count<3){console.warn(`Skipping physics for mesh "${e.name}": not enough vertices (${n.count})`);return}const s=e.getWorldScale(new L);if(s.x===0||s.y===0||s.z===0){console.warn(`Skipping physics for mesh "${e.name}": zero scale`);return}const o=[],a=[];for(let l=0;l<n.count;l++){const c=n.getX(l)*s.x,h=n.getY(l)*s.y,u=n.getZ(l)*s.z;if(!isFinite(c)||!isFinite(h)||!isFinite(u)){console.warn(`Skipping physics for mesh "${e.name}": invalid vertex at index ${l}`);return}o.push(c,h,u)}if(i&&i.count>0){if(i.count<3){console.warn(`Skipping physics for mesh "${e.name}": not enough indices (${i.count})`);return}for(let l=0;l<i.count;l++){const c=i.getX(l);if(c<0||c>=n.count){console.warn(`Skipping physics for mesh "${e.name}": index out of bounds at ${l}`);return}a.push(c)}}else{if(n.count%3!==0){console.warn(`Skipping physics for mesh "${e.name}": vertex count not divisible by 3`);return}for(let l=0;l<n.count;l++)a.push(l)}if(o.length<9||a.length<3){console.warn(`Skipping physics for mesh "${e.name}": insufficient data for triangles`);return}try{const l=new ma(o,a);if(!l.vertices||l.vertices.length===0||!l.indices||l.indices.length===0){console.warn(`Skipping physics for mesh "${e.name}": Trimesh creation resulted in empty data`);return}const c=new pe({mass:0,material:this.physics.groundMaterial});c.addShape(l);const h=e.getWorldPosition(new L),u=e.getWorldQuaternion(new ln);c.position.copy(h),c.quaternion.copy(u),this.physics.world.addBody(c)}catch(l){console.error(`Failed to create physics for mesh "${e.name}":`,l)}}getMouseIntersection(e){if(!e)return null;this.raycaster.setFromCamera(e.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);for(const i of t)if(i.object.visible&&!(i.object.userData&&i.object.userData.targetOpacity!==void 0&&i.object.userData.targetOpacity<1)&&!(i.object.parent&&i.object.parent.type==="Line")){if(i.object.geometry&&i.object.geometry.type==="BoxGeometry"&&(i.object.geometry.boundingBox||i.object.geometry.computeBoundingBox())){const o=new L;if(i.object.geometry.boundingBox.getSize(o),o.x<.3&&o.y<.3&&o.z<.3)continue}return i.point.clone()}if(this.localFrog){const i=this.localFrog.mesh.position.y,s=new yi(new L(0,1,0),-i),o=new L;if(this.raycaster.ray.intersectPlane(s,o),o)return o}const n=new L;return this.raycaster.ray.at(15,n)}addLocalFrog(e,t,n){const i=new xa(e,t,this.physics,!0);return i.world=this,n&&(i.body.position.set(n.x,n.y,n.z),n.name&&i.setName(n.name),i.level=n.level||1,i.bio=n.bio||"",i.badges=n.badges||[],i.userId=n.userId||null),this.scene.add(i.mesh),this.localFrog=i,this.frogs[e]=i,i.particles=this.particles,i.onPunchHit=(s,o,a)=>this.checkPunchCollision(e,s,o,a),i}addRemoteFrog(e,t){if(this.frogs[e]){console.log(`Frog ${e} already exists, updating properties`);const i=this.frogs[e];return t.name&&i.setName(t.name),t.color&&i.setColor(t.color),t.level&&(i.level=t.level),t.bio!==void 0&&(i.bio=t.bio),t.badges&&(i.badges=t.badges),t.userId&&(i.userId=t.userId),i}const n=new xa(e,t.color,this.physics,!1);return t.name&&n.setName(t.name),n.level=t.level||1,n.bio=t.bio||"",n.badges=t.badges||[],n.userId=t.userId||null,n.updatePosition({x:t.x,y:t.y,z:t.z},{qx:t.qx,qy:t.qy,qz:t.qz,qw:t.qw}),this.scene.add(n.mesh),this.frogs[e]=n,n.particles=this.particles,n}checkPunchCollision(e,t,n,i){let s=!1;for(const o in this.frogs){if(o===e)continue;const a=this.frogs[o];if(!a.mesh||a.isDead)continue;const l=t.distanceTo(a.mesh.position);if(l<i){const c=Math.random()<_.criticalChance;let h;c?h=Math.floor(Math.random()*(_.criticalDamageMax-_.criticalDamageMin+1))+_.criticalDamageMin:h=Math.floor(Math.random()*(_.punchDamageMax-_.punchDamageMin+1))+_.punchDamageMin;const u=c?1.5:1,d=n.clone().multiplyScalar(_.knockbackForce*u);d.y=_.knockbackUpward*u,this.network&&this.network.sendHit(o,h,d,c),this.particles&&this.particles.spawnPunchImpact(a.mesh.position,n),console.log(`Frog ${e} hit frog ${o} for ${h} damage!${c?" CRITICAL!":""}`),s=!0}else l<i*2&&console.log(`Near miss on frog ${o}. Distance: ${l.toFixed(2)}, Need: ${i}`)}if(this.ball&&this.ball.mesh){const o=t.distanceTo(this.ball.mesh.position),a=i+this.ball.radius;o<a&&(this.ball.kick(n,12),this.particles&&this.particles.spawnPunchImpact(this.ball.mesh.position,n),console.log(`Frog ${e} kicked the ball!`),s=!0,this.network&&this.network.sendBallKick(this.ball.getSyncState()))}return s}removeFrog(e){if(this.frogs[e]){const t=this.frogs[e],n=t.name||`Frog ${e.substr(0,4)}`;t.dispose&&t.dispose(),this.scene.remove(t.mesh),t.body&&this.physics.world.removeBody(t.body),delete this.frogs[e],this.showToast(`${n} left the game`,"leave")}}showToast(e,t="info"){let n=document.getElementById("toast-container");n||(n=document.createElement("div"),n.id="toast-container",n.style.cssText=`
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                display: flex;
                flex-direction: column;
                gap: 10px;
                pointer-events: none;
            `,document.body.appendChild(n));const i=document.createElement("div");if(i.className=`game-toast toast-${t}`,i.innerHTML=`
            <span class="toast-icon">${t==="join"?"🐸":t==="leave"?"👋":"ℹ️"}</span>
            <span class="toast-message">${e}</span>
        `,i.style.cssText=`
            background: ${t==="join"?"linear-gradient(135deg, #22c55e, #16a34a)":t==="leave"?"linear-gradient(135deg, #f87171, #ef4444)":"linear-gradient(135deg, #3b82f6, #2563eb)"};
            color: white;
            padding: 12px 20px;
            border-radius: 12px;
            font-family: 'Segoe UI', sans-serif;
            font-weight: 600;
            font-size: 14px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            gap: 10px;
            animation: toast-slide-in 0.3s ease-out;
            transform-origin: right center;
        `,!document.getElementById("toast-styles")){const s=document.createElement("style");s.id="toast-styles",s.textContent=`
                @keyframes toast-slide-in {
                    from { opacity: 0; transform: translateX(100%); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes toast-slide-out {
                    from { opacity: 1; transform: translateX(0); }
                    to { opacity: 0; transform: translateX(100%); }
                }
            `,document.head.appendChild(s)}n.appendChild(i),setTimeout(()=>{i.style.animation="toast-slide-out 0.3s ease-in forwards",setTimeout(()=>{i.parentNode&&i.parentNode.removeChild(i)},300)},3e3)}updateCamera(e){if(!this.localFrog||!this.localFrog.mesh)return;const t=this.localFrog.mesh.position.clone();if(e){if(e.middleMouseDown){const h=e.consumeMouseDelta();this.cameraOrbitAngle-=h.x*_.cameraRotateSpeed,this.cameraPitchAngle+=h.y*_.cameraRotateSpeed,this.cameraPitchAngle=Math.max(_.cameraMinPitch,Math.min(_.cameraMaxPitch,this.cameraPitchAngle))}const c=e.consumeScroll();c!==0&&(this.cameraDistance+=c*_.cameraZoomSpeed*.01,this.cameraDistance=Math.max(_.cameraMinDistance,Math.min(_.cameraMaxDistance,this.cameraDistance)))}const n=this.cameraDistance*Math.cos(this.cameraPitchAngle),i=this.cameraDistance*Math.sin(this.cameraPitchAngle),s=t.x+n*Math.sin(this.cameraOrbitAngle),o=t.y+i,a=t.z+n*Math.cos(this.cameraOrbitAngle),l=new L(s,o,a);this.shakeOffset&&l.add(this.shakeOffset),this.camera.position.lerp(l,_.cameraLerp),this.camera.lookAt(t),this.updateWallOcclusion(t)}updateWallOcclusion(e){if(!this.wallMeshes||this.wallMeshes.length===0)return;const t=new L().subVectors(e,this.camera.position).normalize(),n=this.camera.position.distanceTo(e);this.raycaster.set(this.camera.position,t),this.raycaster.far=n;const i=this.raycaster.intersectObjects(this.wallMeshes,!1),s=new Set;for(const o of i)o.distance<n-.5&&s.add(o.object);for(const o of this.wallMeshes){if(!o.userData.originalOpacity)continue;const a=s.has(o);if(o.userData.targetOpacity=a?.2:1,o.material){const l=o.material.opacity,c=o.userData.targetOpacity,h=5;Math.abs(l-c)>.01?o.material.opacity=Ot.lerp(l,c,h*.016):o.material.opacity=c}}}step(e,t){if(this.physics.step(e),this.particles&&this.particles.update(e),this.ball&&(this.ball.update(e),this.isBallAuthority&&this.network&&this.ball.body)){const n=this.ball.body.velocity;(Math.abs(n.x)>.1||Math.abs(n.y)>.1||Math.abs(n.z)>.1)&&this.network.sendBallUpdate(this.ball.getSyncState())}for(const n of this.scooters)n.update(e,t);if(this.checkScooterSpawnZones(),t&&t.consumeDismount&&t.consumeDismount()&&(this.localFrog&&this.localFrog.isRidingScooter?this.localFrog.currentScooter&&(this.localFrog.currentScooter.dismount(),this.showToast("Dismounted! 🐸")):this.tryMountScooter()),this.shakeTimer>0){this.shakeTimer-=e;const n=this.shakeIntensity*(this.shakeTimer>0?1:0);this.shakeOffset.set((Math.random()-.5)*n,(Math.random()-.5)*n,(Math.random()-.5)*n)}else this.shakeOffset.set(0,0,0);if(this.updateCamera(t),this.updateTongueCursorIndicator(t),this.updateTongueDebug(),this.updateLocalFrogAura(),this.localFrog&&this.checkFrogClick(t),_.useShader&&this.composer){const n=this.customPass.uniforms;n.uTime.value=performance.now()/1e3;let i=0;if(this.localFrog){const s=this.localFrog.health/_.maxHealth;i=Math.max(0,Math.min(1,(.5-s)/.5))}n.uLowHealth.value=i,n.uSaturation.value=_.shaderSaturation,n.uBrightness.value=_.shaderBrightness,n.uContrast.value=_.shaderContrast,n.uGamma.value=_.shaderGamma,n.uTint.value.set(_.shaderTintR,_.shaderTintG,_.shaderTintB),n.uTemperature.value=_.shaderTemperature,n.uVignetteEnabled.value=_.vignetteEnabled?1:0,n.uVignetteIntensity.value=_.vignetteIntensity,n.uVignetteRadius.value=_.vignetteRadius,n.uVignetteSoftness.value=_.vignetteSoftness,n.uChromaticEnabled.value=_.chromaticEnabled?1:0,n.uChromaticIntensity.value=_.chromaticIntensity,n.uChromaticRadial.value=_.chromaticRadial?1:0,n.uGrainEnabled.value=_.grainEnabled?1:0,n.uGrainIntensity.value=_.grainIntensity,n.uGrainSpeed.value=_.grainSpeed,n.uGrainSize.value=_.grainSize,n.uSharpenEnabled.value=_.sharpenEnabled?1:0,n.uSharpenIntensity.value=_.sharpenIntensity,n.uBloomEnabled.value=_.bloomEnabled?1:0,n.uBloomIntensity.value=_.bloomIntensity,n.uBloomThreshold.value=_.bloomThreshold,n.uBloomRadius.value=_.bloomRadius,n.uToonEnabled.value=_.toonEnabled?1:0,n.uOutlineEnabled.value=_.outlineEnabled?1:0,n.uOutlineIntensity.value=_.outlineIntensity,this.saoPass&&(this.saoPass.enabled=_.saonEnabled),this.composer.render()}else this.renderer.render(this.scene,this.camera);this.labelRenderer.render(this.scene,this.camera)}triggerScreenShake(e,t){_.vfxEnabled&&(this.shakeIntensity=e,this.shakeTimer=t)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.labelRenderer.setSize(window.innerWidth,window.innerHeight),this.composer&&this.composer.setSize(window.innerWidth,window.innerHeight),this.customPass&&this.customPass.uniforms.uResolution&&this.customPass.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight)}checkScooterSpawnZones(){if(!this.localFrog||!this.localFrog.mesh)return;const e=this.localFrog.mesh.position;for(const t of this.scooters){if(t.rider)continue;const i=e.distanceTo(t.mesh.position)<_.scooterSpawnRadius;t.setHighlight(i&&!this.localFrog.isRidingScooter)}}tryMountScooter(){if(!this.localFrog||this.localFrog.isRidingScooter)return!1;const e=this.localFrog.mesh.position;for(const t of this.scooters){if(t.rider)continue;if(e.distanceTo(t.mesh.position)<_.scooterSpawnRadius)return t.mount(this.localFrog),this.showToast("Vroom! 🛴 (Jump to dismount)"),!0}return!1}spawnScooterAtZone(e){const t="#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),n=new ga(`scooter_${Date.now()}_${Math.random().toString(36).substr(2,9)} `,t,this.scene,this.physics),i=e.position.x+(Math.random()-.5)*4,s=e.position.z+(Math.random()-.5)*4,o=e.position.y+1;n.mesh.position.set(i,o,s),n.body&&n.body.position.set(i,o,s),n.particles=this.particles,this.scooters.push(n),console.log(`Scooter spawned at: (${randomX.toFixed(1)}, ${o}, ${randomZ.toFixed(1)})`)}showToast(e){let t=document.getElementById("game-toast");t||(t=document.createElement("div"),t.id="game-toast",t.style.cssText=`
        position: fixed;
        top: 20 %;
        left: 50 %;
        transform: translateX(-50 %);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px 25px;
        border - radius: 10px;
        font - size: 18px;
        font - weight: bold;
        z - index: 9999;
        pointer - events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
        `,document.body.appendChild(t)),t.textContent=e,t.style.opacity="1",this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>{t.style.opacity="0"},2e3)}checkFrogClick(e){if(!e||!e.leftClickPunch)return;this.raycaster.setFromCamera(e.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);for(const n of t){let i=n.object;for(;i;){for(const s of Object.values(this.frogs))if(s.mesh===i&&!s.isLocal)return this.showProfileButton(s),e.leftClickPunch=!1,!0;i=i.parent}}return!1}showProfileButton(e){if(this.profileButtonTarget=e,this.network&&this.network.socket){const t=e.userId&&String(e.userId).length<15?"getProfile":"getProfileBySocket",n=t==="getProfile"?e.userId:e.id;console.log(`📡 Pre-fetching profile for ${e.name} via ${t}(${n})`),this.network.socket.emit(t,n,i=>{const s={id:e.id,userId:(i==null?void 0:i.id)||e.userId,name:(i==null?void 0:i.username)||e.name,color:(i==null?void 0:i.color)||e.color,level:(i==null?void 0:i.level)||e.level||1,bio:(i==null?void 0:i.bio)||e.bio||"",badges:(i==null?void 0:i.badges)||e.badges||[],kills:(i==null?void 0:i.kills)||0,deaths:(i==null?void 0:i.deaths)||0,isFriend:void 0};i&&(e.userId=s.userId,e.bio=s.bio,e.badges=s.badges,e.level=s.level),console.log("✅ Opening profile directly:",s),this.openProfile(s)})}else this.openProfile({id:e.id,userId:e.userId,name:e.name,color:e.color,level:e.level||1,bio:e.bio||"",badges:e.badges||[],isFriend:void 0})}openProfile(e){this.currentProfileId=e.id,this.currentProfileData=e;const t=document.getElementById("profile-modal"),n=document.getElementById("p-username"),i=document.getElementById("p-level"),s=document.getElementById("p-bio"),o=document.getElementById("p-badges-row"),a=document.getElementById("p-btn-action"),l=document.getElementById("p-btn-mute"),c=document.getElementById("p-close-btn"),h=document.getElementById("p-avatar-canvas-container"),u=document.getElementById("p-kills"),d=document.getElementById("p-deaths");if(!t||!n||!i||!a||!l){console.error("Profile modal elements missing!");return}const f=String(e.id||"");n.textContent=e.name||`Frog ${f.substring(0,4)}`,i.textContent=`LEVEL ${e.level||1}`,s.textContent=e.bio||"No bio set.",u&&(u.textContent=e.kills||0),d&&(d.textContent=e.deaths||0);const m=document.getElementById("p-kd");if(m){const v=e.kills||0,y=e.deaths||0,b=y>0?(v/y).toFixed(2):v>0?v.toFixed(2):"0.00";m.textContent=b}if(o){let v=[];try{v=Array.isArray(e.badges)?e.badges:JSON.parse(e.badges||"[]")}catch{v=[]}o.innerHTML="",v.slice(0,4).forEach(b=>{const A=document.createElement("div");A.className="profile-badge-new",A.textContent=b,o.appendChild(A)})}h&&this.showFrogPreviewInModal(e,h);const x=this.network&&this.network.mutedPlayers&&this.network.mutedPlayers.has(e.id);l.innerHTML=x?"<span>🔊</span> Unmute Chat":"<span>🔇</span> Mute Chat",l.onclick=v=>{if(v.stopPropagation(),this.network){this.network.toggleMute(e.id);const y=this.network.mutedPlayers.has(e.id);l.innerHTML=y?"<span>🔊</span> Unmute Chat":"<span>🔇</span> Mute Chat"}};const g=v=>{v?a.innerHTML="<span>💬</span> Send Message":a.innerHTML="<span>✚</span> Add Friend"};g(e.isFriend),a.onclick=v=>{if(v.stopPropagation(),window.game&&!window.game.isAuthenticated){this.showToast("Register an account to interact!");return}e.isFriend?this.network&&(this.network.openDM(e.id,e.name),this.closeProfile()):this.network&&this.network.socket&&this.network.socket.emit("sendFriendRequest",e.name,y=>{y.success?(this.showToast(`Friend request sent to ${e.name}!`),a.innerHTML="<span>🕒</span> Sent"):this.showToast(y.error||"Failed to send")})};const p=e.userId||e.id;e.isFriend===void 0&&this.network&&this.network.socket&&p&&this.network.socket.emit("checkFriendship",p,v=>{v&&v.isFriend&&(e.isFriend=!0,g(!0))}),c&&(c.onclick=()=>this.closeProfile()),t.style.display="block",t.offsetWidth,t.classList.add("active")}closeProfile(){const e=document.getElementById("profile-modal");e&&(e.classList.remove("active"),setTimeout(()=>{e.style.display="none"},300)),this.currentProfileId=null,this.currentProfileData=null,this.previewFrameId&&(cancelAnimationFrame(this.previewFrameId),this.previewFrameId=null)}showFrogPreviewInModal(e,t){t.innerHTML="";const n=new mu,i=new Wt(45,1,.1,10);i.position.set(0,.4,3.5),i.lookAt(0,.1,0);const s=new ad({antialias:!0,alpha:!0});s.setSize(120,120),s.setPixelRatio(window.devicePixelRatio),t.appendChild(s.domElement);const o=new Nu(16777215,1);n.add(o);const a=new ea(16777215,1.5);a.position.set(2,2,5),n.add(a);let l;const c=this.frogs[e.id];if(c&&c.bodyMesh)l=c.bodyMesh.clone();else if(this.frogModel)l=this.frogModel.clone(),e.color&&l.traverse(u=>{u.isMesh&&u.name.includes("Body")&&(u.material=u.material.clone(),u.material.color.set(e.color))});else{const u=new Yi(.8,.6,1),d=new wg({color:e.color||"#4CAF50"});l=new dt(u,d)}l.position.set(0,-.1,0),l.scale.set(1.2,1.2,1.2),n.add(l);const h=()=>{if(this.currentProfileId!==e.id){s.dispose();return}l.rotation.y+=.02,s.render(n,i),this.previewFrameId=requestAnimationFrame(h)};h()}updateLocalFrogAura(){if(!(!this.localFrog||!this.localFrog.mesh))if(this.localAura||(this.localAura=new Yf(_.auraColor,_.auraIntensity,_.auraDistance),this.scene.add(this.localAura)),this.localFrog.isDead)this.localAura.visible=!1;else{this.localAura.visible=!0,this.localAura.position.copy(this.localFrog.mesh.position),this.localAura.position.y+=.5,this.localAura.color.set(_.auraColor),this.localAura.distance=_.auraDistance;const e=performance.now()/1e3,t=Math.sin(e*4)*(_.auraIntensity*.2);this.localAura.intensity=_.auraIntensity+t}}}class pS{constructor(){this.keys={forward:!1,backward:!1,left:!1,right:!1,jump:!1},this.mouse={x:0,y:0},this.middleMouseDown=!1,this.mouseDelta={x:0,y:0},this.lastMouse={x:0,y:0},this.scrollDelta=0,this.leftClickPunch=!1,this.rightClickTongue=!1,this.tongueHeld=!1,this.chatOpen=!1,this.chatInput=document.getElementById("chat-input"),this.isMobile=this.detectMobile(),document.addEventListener("keydown",e=>this.onKeyDown(e)),document.addEventListener("keyup",e=>this.onKeyUp(e)),document.addEventListener("mousemove",e=>this.onMouseMove(e)),document.addEventListener("mousedown",e=>this.onMouseDown(e)),document.addEventListener("mouseup",e=>this.onMouseUp(e)),document.addEventListener("wheel",e=>this.onWheel(e),{passive:!1}),document.addEventListener("contextmenu",e=>{e.preventDefault()}),document.addEventListener("gesturestart",e=>e.preventDefault()),document.addEventListener("gesturechange",e=>e.preventDefault()),document.addEventListener("gestureend",e=>e.preventDefault()),this.isMobile&&this.setupMobileControls()}showMobileControls(){this.mobileUI&&(this.mobileUI.style.display="block")}detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=800}setupMobileControls(){this.createMobileUI(),this.joystick={active:!1,startX:0,startY:0,currentX:0,currentY:0,touchId:null},this.cameraTouch={active:!1,startX:0,startY:0,touchId:null},document.addEventListener("touchstart",e=>this.onTouchStart(e),{passive:!1}),document.addEventListener("touchmove",e=>this.onTouchMove(e),{passive:!1}),document.addEventListener("touchend",e=>this.onTouchEnd(e),{passive:!1})}createMobileUI(){const e=document.createElement("div");e.id="mobile-controls",e.style.display="none",e.innerHTML=`
            <!-- Virtual Joystick -->
            <div id="joystick-zone">
                <div id="joystick-base">
                    <div id="joystick-stick"></div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div id="action-buttons">
                <button id="btn-jump" class="action-btn">⬆️</button>
                <button id="btn-attack" class="action-btn attack">👊</button>
            </div>
        `,document.body.appendChild(e),this.mobileUI=e;const t=document.createElement("style");t.textContent=`
            #mobile-controls {
                position: fixed;
                z-index: 1000;
                pointer-events: none;
            }

            #joystick-zone {
                position: fixed;
                bottom: 30px;
                left: 30px;
                width: 150px;
                height: 150px;
                pointer-events: auto;
            }

            #joystick-base {
                width: 120px;
                height: 120px;
                background: rgba(255, 255, 255, 0.2);
                border: 3px solid rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            #joystick-stick {
                width: 50px;
                height: 50px;
                background: rgba(255, 255, 255, 0.7);
                border-radius: 50%;
                position: absolute;
                transition: none;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            }

            #action-buttons {
                position: fixed;
                bottom: 30px;
                right: 30px;
                display: flex;
                gap: 15px;
                pointer-events: auto;
            }

            .action-btn {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                border: 3px solid rgba(255, 255, 255, 0.5);
                background: rgba(255, 255, 255, 0.2);
                font-size: 28px;
                color: white;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                -webkit-tap-highlight-color: transparent;
                user-select: none;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            }

            .action-btn:active {
                background: rgba(255, 255, 255, 0.4);
                transform: scale(0.95);
            }

            .action-btn.attack {
                background: rgba(255, 100, 100, 0.3);
                border-color: rgba(255, 100, 100, 0.6);
            }

            .action-btn.attack:active {
                background: rgba(255, 100, 100, 0.6);
            }

            /* Hide instructions on mobile */
            @media (max-width: 800px) {
                #instructions {
                    display: none !important;
                }
                #chat-input {
                    bottom: 200px !important;
                }
            }
        `,document.head.appendChild(t);const n=document.getElementById("btn-jump"),i=document.getElementById("btn-attack");n.addEventListener("touchstart",s=>{s.preventDefault(),this.keys.jump=!0}),n.addEventListener("touchend",s=>{s.preventDefault(),this.keys.jump=!1}),i.addEventListener("touchstart",s=>{s.preventDefault(),this.leftClickPunch=!0}),this.joystickBase=document.getElementById("joystick-base"),this.joystickStick=document.getElementById("joystick-stick")}onTouchStart(e){for(const t of e.changedTouches){const n=t.clientX,i=t.clientY;n<window.innerWidth/3&&!this.joystick.active?(this.joystick.active=!0,this.joystick.touchId=t.identifier,this.joystick.startX=n,this.joystick.startY=i,e.preventDefault()):n>window.innerWidth/2&&i<window.innerHeight-150&&!this.cameraTouch.active&&(this.cameraTouch.active=!0,this.cameraTouch.touchId=t.identifier,this.cameraTouch.startX=n,this.cameraTouch.startY=i,e.preventDefault())}}onTouchMove(e){for(const t of e.changedTouches){if(this.joystick.active&&t.identifier===this.joystick.touchId){const n=t.clientX-this.joystick.startX,i=t.clientY-this.joystick.startY,s=40,o=Math.sqrt(n*n+i*i),a=Math.min(o,s),l=Math.atan2(i,n),c=Math.cos(l)*a,h=Math.sin(l)*a;this.joystickStick.style.transform=`translate(${c}px, ${h}px)`;const u=15;this.keys.forward=h<-u,this.keys.backward=h>u,this.keys.left=c<-u,this.keys.right=c>u,e.preventDefault()}if(this.cameraTouch.active&&t.identifier===this.cameraTouch.touchId){const n=t.clientX-this.cameraTouch.startX,i=t.clientY-this.cameraTouch.startY;this.mouseDelta.x+=n*2,this.mouseDelta.y+=i*2,this.cameraTouch.startX=t.clientX,this.cameraTouch.startY=t.clientY,this.middleMouseDown=!0,e.preventDefault()}}}onTouchEnd(e){for(const t of e.changedTouches)this.joystick.active&&t.identifier===this.joystick.touchId&&(this.joystick.active=!1,this.joystick.touchId=null,this.joystickStick.style.transform="translate(0, 0)",this.keys.forward=!1,this.keys.backward=!1,this.keys.left=!1,this.keys.right=!1),this.cameraTouch.active&&t.identifier===this.cameraTouch.touchId&&(this.cameraTouch.active=!1,this.cameraTouch.touchId=null,this.middleMouseDown=!1,this.mouseDelta.x=0,this.mouseDelta.y=0)}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.middleMouseDown&&(this.mouseDelta.x=e.clientX-this.lastMouse.x,this.mouseDelta.y=e.clientY-this.lastMouse.y),this.lastMouse.x=e.clientX,this.lastMouse.y=e.clientY}onMouseDown(e){e.button===1&&(this.middleMouseDown=!0,this.lastMouse.x=e.clientX,this.lastMouse.y=e.clientY,this.mouseDelta.x=0,this.mouseDelta.y=0,e.preventDefault());const t=e.target.closest("button, input, textarea, .panel, .panel-overlay, .bottom-left-buttons, #profile-modal, #dm-chat-panel, #emote-wheel, #friend-list-overlay, #profile-editor-overlay");e.button===0&&!this.chatOpen&&!t&&(this.leftClickPunch=!0),e.button===2&&!this.chatOpen&&!t&&(this.rightClickTongue=!0,this.tongueHeld=!0,e.preventDefault())}onMouseUp(e){e.button===1&&(this.middleMouseDown=!1,this.mouseDelta.x=0,this.mouseDelta.y=0),e.button===2&&(this.tongueHeld=!1)}onWheel(e){if(this.chatOpen)return;const t=document.getElementById("chat-panel");t&&t.contains(e.target)||(this.scrollDelta=e.deltaY,e.preventDefault())}consumeScroll(){const e=this.scrollDelta;return this.scrollDelta=0,e}consumeMouseDelta(){const e={x:this.mouseDelta.x,y:this.mouseDelta.y};return this.mouseDelta.x=0,this.mouseDelta.y=0,e}consumePunch(){const e=this.leftClickPunch;return this.leftClickPunch=!1,e}consumeTongue(){const e=this.rightClickTongue;return this.rightClickTongue=!1,e}onKeyDown(e){const t=document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA");if(e.code==="Enter"){if(this.chatOpen){this.toggleChat(),e.preventDefault();return}else if(!t){this.toggleChat(),e.preventDefault();return}}if(e.code==="F3"){e.preventDefault(),window.dispatchEvent(new CustomEvent("toggle-tongue-debug"));return}if(!(this.chatOpen||t))switch(e.code){case"ArrowUp":case"KeyW":this.keys.forward=!0;break;case"ArrowDown":case"KeyS":this.keys.backward=!0;break;case"ArrowLeft":case"KeyA":this.keys.left=!0;break;case"ArrowRight":case"KeyD":this.keys.right=!0;break;case"Space":this.keys.jump=!0;break;case"KeyE":this.dismountPressed=!0;break}}consumeDismount(){const e=this.dismountPressed;return this.dismountPressed=!1,e}onKeyUp(e){const t=document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA");if(!(this.chatOpen||t))switch(e.code){case"ArrowUp":case"KeyW":this.keys.forward=!1;break;case"ArrowDown":case"KeyS":this.keys.backward=!1;break;case"ArrowLeft":case"KeyA":this.keys.left=!1;break;case"ArrowRight":case"KeyD":this.keys.right=!1;break;case"Space":this.keys.jump=!1;break}}toggleChat(){if(this.chatOpen=!this.chatOpen,this.chatOpen)this.chatInput.style.display="block",this.chatInput.focus(),this.keys.forward=!1,this.keys.backward=!1,this.keys.left=!1,this.keys.right=!1,this.keys.jump=!1;else{const e=this.chatInput.value.trim();if(e){const t=new CustomEvent("chat-send",{detail:e});window.dispatchEvent(t)}this.chatInput.value="",this.chatInput.style.display="none"}}}const ei=Object.create(null);ei.open="0";ei.close="1";ei.ping="2";ei.pong="3";ei.message="4";ei.upgrade="5";ei.noop="6";const ia=Object.create(null);Object.keys(ei).forEach(r=>{ia[ei[r]]=r});const Uc={type:"error",data:"parser error"},pp=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",mp=typeof ArrayBuffer=="function",gp=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer,Eh=({type:r,data:e},t,n)=>pp&&e instanceof Blob?t?n(e):Hd(e,n):mp&&(e instanceof ArrayBuffer||gp(e))?t?n(e):Hd(new Blob([e]),n):n(ei[r]+(e||"")),Hd=(r,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(r)};function Gd(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}let Il;function mS(r,e){if(pp&&r.data instanceof Blob)return r.data.arrayBuffer().then(Gd).then(e);if(mp&&(r.data instanceof ArrayBuffer||gp(r.data)))return e(Gd(r.data));Eh(r,!1,t=>{Il||(Il=new TextEncoder),e(Il.encode(t))})}const Wd="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Nr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let r=0;r<Wd.length;r++)Nr[Wd.charCodeAt(r)]=r;const gS=r=>{let e=r.length*.75,t=r.length,n,i=0,s,o,a,l;r[r.length-1]==="="&&(e--,r[r.length-2]==="="&&e--);const c=new ArrayBuffer(e),h=new Uint8Array(c);for(n=0;n<t;n+=4)s=Nr[r.charCodeAt(n)],o=Nr[r.charCodeAt(n+1)],a=Nr[r.charCodeAt(n+2)],l=Nr[r.charCodeAt(n+3)],h[i++]=s<<2|o>>4,h[i++]=(o&15)<<4|a>>2,h[i++]=(a&3)<<6|l&63;return c},xS=typeof ArrayBuffer=="function",Th=(r,e)=>{if(typeof r!="string")return{type:"message",data:xp(r,e)};const t=r.charAt(0);return t==="b"?{type:"message",data:vS(r.substring(1),e)}:ia[t]?r.length>1?{type:ia[t],data:r.substring(1)}:{type:ia[t]}:Uc},vS=(r,e)=>{if(xS){const t=gS(r);return xp(t,e)}else return{base64:!0,data:r}},xp=(r,e)=>{switch(e){case"blob":return r instanceof Blob?r:new Blob([r]);case"arraybuffer":default:return r instanceof ArrayBuffer?r:r.buffer}},vp="",yS=(r,e)=>{const t=r.length,n=new Array(t);let i=0;r.forEach((s,o)=>{Eh(s,!1,a=>{n[o]=a,++i===t&&e(n.join(vp))})})},_S=(r,e)=>{const t=r.split(vp),n=[];for(let i=0;i<t.length;i++){const s=Th(t[i],e);if(n.push(s),s.type==="error")break}return n};function bS(){return new TransformStream({transform(r,e){mS(r,t=>{const n=t.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}r.data&&typeof r.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(t)})}})}let Dl;function Wo(r){return r.reduce((e,t)=>e+t.length,0)}function Xo(r,e){if(r[0].length===e)return r.shift();const t=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)t[i]=r[0][n++],n===r[0].length&&(r.shift(),n=0);return r.length&&n<r[0].length&&(r[0]=r[0].slice(n)),t}function wS(r,e){Dl||(Dl=new TextDecoder);const t=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(n===0){if(Wo(t)<1)break;const l=Xo(t,1);s=(l[0]&128)===128,i=l[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(Wo(t)<2)break;const l=Xo(t,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(Wo(t)<8)break;const l=Xo(t,8),c=new DataView(l.buffer,l.byteOffset,l.length),h=c.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue(Uc);break}i=h*Math.pow(2,32)+c.getUint32(4),n=3}else{if(Wo(t)<i)break;const l=Xo(t,i);a.enqueue(Th(s?l:Dl.decode(l),e)),n=0}if(i===0||i>r){a.enqueue(Uc);break}}}})}const yp=4;function Lt(r){if(r)return MS(r)}function MS(r){for(var e in Lt.prototype)r[e]=Lt.prototype[e];return r}Lt.prototype.on=Lt.prototype.addEventListener=function(r,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+r]=this._callbacks["$"+r]||[]).push(e),this};Lt.prototype.once=function(r,e){function t(){this.off(r,t),e.apply(this,arguments)}return t.fn=e,this.on(r,t),this};Lt.prototype.off=Lt.prototype.removeListener=Lt.prototype.removeAllListeners=Lt.prototype.removeEventListener=function(r,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+r];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+r],this;for(var n,i=0;i<t.length;i++)if(n=t[i],n===e||n.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+r],this};Lt.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+r],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,i=t.length;n<i;++n)t[n].apply(this,e)}return this};Lt.prototype.emitReserved=Lt.prototype.emit;Lt.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks["$"+r]||[]};Lt.prototype.hasListeners=function(r){return!!this.listeners(r).length};const Pa=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),dn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),SS="arraybuffer";function _p(r,...e){return e.reduce((t,n)=>(r.hasOwnProperty(n)&&(t[n]=r[n]),t),{})}const ES=dn.setTimeout,TS=dn.clearTimeout;function Ia(r,e){e.useNativeTimers?(r.setTimeoutFn=ES.bind(dn),r.clearTimeoutFn=TS.bind(dn)):(r.setTimeoutFn=dn.setTimeout.bind(dn),r.clearTimeoutFn=dn.clearTimeout.bind(dn))}const AS=1.33;function CS(r){return typeof r=="string"?RS(r):Math.ceil((r.byteLength||r.size)*AS)}function RS(r){let e=0,t=0;for(let n=0,i=r.length;n<i;n++)e=r.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function bp(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function LS(r){let e="";for(let t in r)r.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(r[t]));return e}function PS(r){let e={},t=r.split("&");for(let n=0,i=t.length;n<i;n++){let s=t[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class IS extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class Ah extends Lt{constructor(e){super(),this.writable=!1,Ia(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new IS(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Th(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=LS(e);return t.length?"?"+t:""}}class DS extends Ah{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};_S(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,yS(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=bp()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let wp=!1;try{wp=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const NS=wp;function FS(){}class US extends DS{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let n=location.port;n||(n=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}let qs=class sa extends Lt{constructor(e,t,n){super(),this.createRequest=e,Ia(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const t=_p(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=sa.requestsCount++,sa.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=FS,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete sa.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};qs.requestsCount=0;qs.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Xd);else if(typeof addEventListener=="function"){const r="onpagehide"in dn?"pagehide":"unload";addEventListener(r,Xd,!1)}}function Xd(){for(let r in qs.requests)qs.requests.hasOwnProperty(r)&&qs.requests[r].abort()}const BS=function(){const r=Mp({xdomain:!1});return r&&r.responseType!==null}();class OS extends US{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=BS&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new qs(Mp,this.uri(),e)}}function Mp(r){const e=r.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||NS))return new XMLHttpRequest}catch{}if(!e)try{return new dn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Sp=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class kS extends Ah{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=Sp?{}:_p(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;Eh(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&Pa(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=bp()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const Nl=dn.WebSocket||dn.MozWebSocket;class zS extends kS{createSocket(e,t,n){return Sp?new Nl(e,t,n):t?new Nl(e,t):new Nl(e)}doWrite(e,t){this.ws.send(t)}}class VS extends Ah{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=wS(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),i=bS();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;this._writer.write(n).then(()=>{i&&Pa(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const HS={websocket:zS,webtransport:VS,polling:OS},GS=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,WS=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Bc(r){if(r.length>8e3)throw"URI too long";const e=r,t=r.indexOf("["),n=r.indexOf("]");t!=-1&&n!=-1&&(r=r.substring(0,t)+r.substring(t,n).replace(/:/g,";")+r.substring(n,r.length));let i=GS.exec(r||""),s={},o=14;for(;o--;)s[WS[o]]=i[o]||"";return t!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=XS(s,s.path),s.queryKey=qS(s,s.query),s}function XS(r,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function qS(r,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(t[i]=s)}),t}const Oc=typeof addEventListener=="function"&&typeof removeEventListener=="function",ra=[];Oc&&addEventListener("offline",()=>{ra.forEach(r=>r())},!1);class Xi extends Lt{constructor(e,t){if(super(),this.binaryType=SS,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const n=Bc(e);t.hostname=n.host,t.secure=n.protocol==="https"||n.protocol==="wss",t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=Bc(t.host).host);Ia(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=PS(this.opts.query)),Oc&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ra.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=yp,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Xi.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",Xi.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(t+=CS(i)),n>0&&t>this._maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Pa(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,i){if(typeof t=="function"&&(i=t,t=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:t,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(Xi.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Oc&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=ra.indexOf(this._offlineEventListener);n!==-1&&ra.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}Xi.protocol=yp;class jS extends Xi{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;Xi.priorWebsocketSuccess=!1;const i=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",u=>{if(!n)if(u.type==="pong"&&u.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Xi.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(h(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=t.name,this.emitReserved("upgradeError",d)}}))};function s(){n||(n=!0,h(),t.close(),t=null)}const o=u=>{const d=new Error("probe error: "+u);d.transport=t.name,s(),this.emitReserved("upgradeError",d)};function a(){o("transport closed")}function l(){o("socket closed")}function c(u){t&&u.name!==t.name&&s()}const h=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};t.once("open",i),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}let $S=class extends jS{constructor(e,t={}){const n=typeof e=="object"?e:t;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>HS[i]).filter(i=>!!i)),super(e,n)}};function YS(r,e="",t){let n=r;t=t||typeof location<"u"&&location,r==null&&(r=t.protocol+"//"+t.host),typeof r=="string"&&(r.charAt(0)==="/"&&(r.charAt(1)==="/"?r=t.protocol+r:r=t.host+r),/^(https?|wss?):\/\//.test(r)||(typeof t<"u"?r=t.protocol+"//"+r:r="https://"+r),n=Bc(r)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(t&&t.port===n.port?"":":"+n.port),n}const KS=typeof ArrayBuffer=="function",ZS=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer,Ep=Object.prototype.toString,JS=typeof Blob=="function"||typeof Blob<"u"&&Ep.call(Blob)==="[object BlobConstructor]",QS=typeof File=="function"||typeof File<"u"&&Ep.call(File)==="[object FileConstructor]";function Ch(r){return KS&&(r instanceof ArrayBuffer||ZS(r))||JS&&r instanceof Blob||QS&&r instanceof File}function oa(r,e){if(!r||typeof r!="object")return!1;if(Array.isArray(r)){for(let t=0,n=r.length;t<n;t++)if(oa(r[t]))return!0;return!1}if(Ch(r))return!0;if(r.toJSON&&typeof r.toJSON=="function"&&arguments.length===1)return oa(r.toJSON(),!0);for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&oa(r[t]))return!0;return!1}function eE(r){const e=[],t=r.data,n=r;return n.data=kc(t,e),n.attachments=e.length,{packet:n,buffers:e}}function kc(r,e){if(!r)return r;if(Ch(r)){const t={_placeholder:!0,num:e.length};return e.push(r),t}else if(Array.isArray(r)){const t=new Array(r.length);for(let n=0;n<r.length;n++)t[n]=kc(r[n],e);return t}else if(typeof r=="object"&&!(r instanceof Date)){const t={};for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=kc(r[n],e));return t}return r}function tE(r,e){return r.data=zc(r.data,e),delete r.attachments,r}function zc(r,e){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num=="number"&&r.num>=0&&r.num<e.length)return e[r.num];throw new Error("illegal attachments")}else if(Array.isArray(r))for(let t=0;t<r.length;t++)r[t]=zc(r[t],e);else if(typeof r=="object")for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&(r[t]=zc(r[t],e));return r}const nE=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],iE=5;var et;(function(r){r[r.CONNECT=0]="CONNECT",r[r.DISCONNECT=1]="DISCONNECT",r[r.EVENT=2]="EVENT",r[r.ACK=3]="ACK",r[r.CONNECT_ERROR=4]="CONNECT_ERROR",r[r.BINARY_EVENT=5]="BINARY_EVENT",r[r.BINARY_ACK=6]="BINARY_ACK"})(et||(et={}));class sE{constructor(e){this.replacer=e}encode(e){return(e.type===et.EVENT||e.type===et.ACK)&&oa(e)?this.encodeAsBinary({type:e.type===et.EVENT?et.BINARY_EVENT:et.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===et.BINARY_EVENT||e.type===et.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=eE(e),n=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(n),i}}function qd(r){return Object.prototype.toString.call(r)==="[object Object]"}class Rh extends Lt{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===et.BINARY_EVENT;n||t.type===et.BINARY_ACK?(t.type=n?et.EVENT:et.ACK,this.reconstructor=new rE(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(Ch(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(et[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===et.BINARY_EVENT||n.type===et.BINARY_ACK){const s=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(s,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(e.charAt(t+1)==="/"){const s=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(s,t)}else n.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const s=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(s,t+1))}if(e.charAt(++t)){const s=this.tryParse(e.substr(t));if(Rh.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case et.CONNECT:return qd(t);case et.DISCONNECT:return t===void 0;case et.CONNECT_ERROR:return typeof t=="string"||qd(t);case et.EVENT:case et.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&nE.indexOf(t[0])===-1);case et.ACK:case et.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class rE{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=tE(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const oE=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Rh,Encoder:sE,get PacketType(){return et},protocol:iE},Symbol.toStringTag,{value:"Module"}));function wn(r,e,t){return r.on(e,t),function(){r.off(e,t)}}const aE=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Tp extends Lt{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[wn(e,"open",this.onopen.bind(this)),wn(e,"packet",this.onpacket.bind(this)),wn(e,"error",this.onerror.bind(this)),wn(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var n,i,s;if(aE.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const o={type:et.EVENT,data:t};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const h=this.ids++,u=t.pop();this._registerAckCallback(h,u),o.id=h}const a=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,t){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=t;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);t.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),t.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...t){return new Promise((n,i)=>{const s=(o,a)=>o?i(o):n(a);s.withError=!0,t.push(s),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>n!==this._queue[0]?void 0:(i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:et.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case et.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case et.EVENT:case et.BINARY_EVENT:this.onevent(e);break;case et.ACK:case et.BINARY_ACK:this.onack(e);break;case et.DISCONNECT:this.ondisconnect();break;case et.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...i){n||(n=!0,t.packet({type:et.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:et.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function fr(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}fr.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*r);r=Math.floor(e*10)&1?r+t:r-t}return Math.min(r,this.max)|0};fr.prototype.reset=function(){this.attempts=0};fr.prototype.setMin=function(r){this.ms=r};fr.prototype.setMax=function(r){this.max=r};fr.prototype.setJitter=function(r){this.jitter=r};class Vc extends Lt{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Ia(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new fr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||oE;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new $S(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=wn(t,"open",function(){n.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=wn(t,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(wn(e,"ping",this.onping.bind(this)),wn(e,"data",this.ondata.bind(this)),wn(e,"error",this.onerror.bind(this)),wn(e,"close",this.onclose.bind(this)),wn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Pa(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Tp(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Lr={};function aa(r,e){typeof r=="object"&&(e=r,r=void 0),e=e||{};const t=YS(r,e.path||"/socket.io"),n=t.source,i=t.id,s=t.path,o=Lr[i]&&s in Lr[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new Vc(n,e):(Lr[i]||(Lr[i]=new Vc(n,e)),l=Lr[i]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(aa,{Manager:Vc,Socket:Tp,io:aa,connect:aa});class lE{constructor(e){this.world=e,this.socket=aa(),this.socket.on("connect",()=>{console.log("Connected to server:",this.socket.id);const t=document.getElementById("offline-overlay");t&&t.classList.contains("visible")&&(t.classList.remove("visible"),window.location.reload()),this.socket.emit("spectate")}),this.socket.on("disconnect",t=>{console.log("Disconnected from server:",t),this.showOfflineOverlay()}),this.socket.on("connect_error",t=>{console.log("Connection error:",t),this.showOfflineOverlay()}),this.socket.on("kicked",t=>{alert("Disconnected: "+t),window.location.reload()}),this.socket.on("currentPlayers",t=>{Object.keys(t).forEach(n=>{this.world.addRemoteFrog(n,t[n])})}),this.socket.on("selfJoined",t=>{if(this.world.addLocalFrog(t.id,t.color,t),t.accountData){const n=t.accountData,i=document.getElementById("level-badge"),s=document.getElementById("xp-fill");i&&(i.textContent=`Lv.${n.level||1}`),s&&n.xpToNext&&(s.style.width=`${n.xp/n.xpToNext*100}%`);const o=document.getElementById("stat-level"),a=document.getElementById("stat-xp"),l=document.getElementById("stat-kills"),c=document.getElementById("stat-deaths"),h=document.getElementById("stat-kd"),u=document.getElementById("stat-playtime");if(o&&(o.textContent=n.level||1),a&&(a.textContent=n.xp||0),l&&(l.textContent=n.kills||0),c&&(c.textContent=n.deaths||0),h){const d=n.deaths>0?(n.kills/n.deaths).toFixed(2):(n.kills||0).toFixed(2);h.textContent=d}if(u){const d=Math.floor((n.totalPlaytime||0)/36e5),f=Math.floor((n.totalPlaytime||0)%36e5/6e4);u.textContent=d>0?`${d}h ${f}m`:`${f}m`}this.socket.emit("getFriendRequests"),this.socket.emit("getUnreadDMs")}}),this.socket.on("newPlayer",t=>{this.world.addRemoteFrog(t.id,t);const n=t.name||`Frog ${t.id.substr(0,4)}`;this.world.showToast&&this.world.showToast(`${n} joined the game`,"join")}),this.socket.on("playerDisconnected",t=>{this.world.removeFrog(t),this.mutedPlayers&&this.mutedPlayers.delete(t)}),this.mutedPlayers=new Set,this.socket.on("playerAFKStatus",({id:t,isAFK:n})=>{const i=this.world.frogs[t];i&&(i.isAFK=n,i.updateNameTag())}),this.socket.on("playerColorChanged",({id:t,color:n})=>{const i=this.world.frogs[t];i&&i.setColor&&i.setColor(n)}),this.socket.on("playerProfileUpdated",({id:t,bio:n,badges:i})=>{const s=this.world.frogs[t];s&&(n!==void 0&&(s.bio=n),i!==void 0&&(s.badges=i),this.world.currentProfileId===t&&this.world.openProfile({id:s.id,userId:s.userId,name:s.name,color:s.color,level:s.level||1,bio:s.bio,badges:s.badges,isFriend:this.world.currentProfileData?this.world.currentProfileData.isFriend:void 0}))}),this.socket.on("playerMoved",t=>{if(t.id===this.socket.id)return;const n=this.world.frogs[t.id];n&&n.applySyncState(t)}),this.socket.on("playerKnockback",t=>{const n=this.world.frogs[t.id];n&&n.isLocal&&n.body&&(n.body.velocity.x+=t.velocity.x,n.body.velocity.y+=t.velocity.y,n.body.velocity.z+=t.velocity.z)}),this.socket.on("playerRespawned",t=>{const n=this.world.frogs[t.id];n&&(n.respawn(!0),n.health=t.health,n.body&&(n.body.position.set(t.x,t.y,t.z),n.body.velocity.set(0,0,0)),n.mesh.position.set(t.x,t.y,t.z))}),this.socket.on("tonguePulled",t=>{const n=this.world.localFrog,i=this.world.frogs[t.sourceId];if(n&&i&&n.body){const s=new L().subVectors(i.mesh.position,n.mesh.position).normalize(),o=t.pullForce||8;n.body.velocity.x+=s.x*o,n.body.velocity.y+=Math.max(0,s.y*o*.3),n.body.velocity.z+=s.z*o,this.world.showToast&&this.world.showToast(`${i.name||"Someone"} grabbed you!`)}}),this.socket.on("chatMessage",t=>{if(this.mutedPlayers.has(t.id))return;const n=this.world.frogs[t.id];n&&(n.showChat(t.text),this.addToChatHistory(n.name||`Frog ${t.id.substr(0,4)}`,t.text,n.color))}),window.addEventListener("chat-send",t=>{this.socket.emit("chatMessage",t.detail)}),this.socket.on("playerPunched",t=>{const n=this.world.frogs[t];n&&n.remotePunch()}),this.socket.on("playerDamaged",t=>{const n=this.world.frogs[t.targetId];n&&n.takeDamage(t.damage,t.knockback,!0,t.isCritical,t.attackerId)}),this.socket.on("playerDied",t=>{const n=typeof t=="object"?t.id:t,i=this.world.frogs[n];i&&i.die(!0)}),this.socket.on("playerRespawn",t=>{const n=this.world.frogs[t];n&&n.respawn(!0)}),this.socket.on("ballKicked",t=>{this.world.ball&&(this.world.ball.applySyncState(t),this.world.isBallAuthority=!1)}),this.socket.on("ballSync",t=>{this.world.ball&&!this.world.isBallAuthority&&this.world.ball.applySyncState(t)}),this.socket.on("ballAuthority",t=>{this.world.isBallAuthority=t,console.log("Ball authority:",t)}),this.ping=0,this.allPings={},this._pingStartTime=0,this.socket.on("pong_response",()=>{this.ping=Date.now()-this._pingStartTime,this.socket.emit("share_ping",this.ping)}),this.socket.on("all_pings",t=>{this.allPings=t}),setInterval(()=>{this._pingStartTime=Date.now(),this.socket.emit("ping_request")},2e3)}join(e,t){this.socket.emit("joinGame",{name:e,color:t})}addToChatHistory(e,t,n="#ffffff"){const i=document.getElementById("chat-history");if(!i)return;const s=document.createElement("div");s.className="chat-message";const o=document.createElement("span");o.className="chat-name",o.textContent=e+":",o.style.color=n;const a=document.createElement("span");for(a.textContent=t,s.appendChild(o),s.appendChild(a),i.appendChild(s),i.scrollTop=i.scrollHeight;i.children.length>100;)i.removeChild(i.firstChild)}update(e){}sendUpdate(e){var n,i,s;if(!e.body)return;const t=e.getSyncState();t&&(e.isRidingScooter&&(!this._lastNetDebug||Date.now()-this._lastNetDebug>1e3)&&(this._lastNetDebug=Date.now(),console.log("NETWORK SYNC (riding):",{x:(n=t.x)==null?void 0:n.toFixed(2),y:(i=t.y)==null?void 0:i.toFixed(2),z:(s=t.z)==null?void 0:s.toFixed(2)})),this.socket.emit("playerMove",t))}sendPunch(){this.socket.emit("playerPunch")}sendInput(e,t){this.socket.emit("playerInput",{forward:e.keys.forward,backward:e.keys.backward,left:e.keys.left,right:e.keys.right,jump:e.keys.jump,punch:e.keys.punch,cameraAngle:t})}sendHit(e,t,n,i=!1){this.socket.emit("playerHit",{targetId:e,damage:t,knockback:n,isCritical:i})}sendDeath(e=null){this.socket.emit("playerDied",{id:this.socket.id,killerId:e})}sendRespawn(){this.socket.emit("playerRespawn",this.socket.id)}sendBallKick(e){this.world.isBallAuthority=!0,this.socket.emit("ballKick",e)}sendBallUpdate(e){this.world.isBallAuthority&&this.socket.emit("ballUpdate",e)}showOfflineOverlay(){const e=document.getElementById("offline-overlay");e&&e.classList.add("visible")}toggleMute(e){return this.mutedPlayers.has(e)?(this.mutedPlayers.delete(e),console.log(`Unmuted player: ${e}`),!1):(this.mutedPlayers.add(e),console.log(`Muted player: ${e}`),!0)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class Zn{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Zn.nextNameID=Zn.nextNameID||0,this.$name.id=`lil-gui-name-${++Zn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class cE extends Zn{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Hc(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const hE={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Hc,toHexString:Hc},qr={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},uE={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const n=qr.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return qr.toHexString(i)}},dE={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=qr.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return qr.toHexString(i)}},fE=[hE,qr,uE,dE];function pE(r){return fE.find(e=>e.match(r))}class mE extends Zn{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=pE(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Hc(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Fl extends Zn{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class gE extends Zn{constructor(e,t,n,i,s,o){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let o=!1,a,l,c,h,u;const d=5,f=v=>{a=v.clientX,l=c=v.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",x)},m=v=>{if(o){const y=v.clientX-a,b=v.clientY-l;Math.abs(b)>d?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&x()}if(!o){const y=v.clientY-c;u-=y*this._step*this._arrowKeyMultiplier(v),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=v.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",x)},g=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,v,y,b,A)=>(p-v)/(y-v)*(A-b)+b,t=p=>{const v=this.$slider.getBoundingClientRect();let y=e(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(y)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(o){const v=p.touches[0].clientX-a,y=p.touches[0].clientY-l;Math.abs(v)>Math.abs(y)?c(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),m=400;let x;const g=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const y=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(f,m)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class xE extends Zn{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class vE extends Zn{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var yE=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function _E(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let jd=!1;class Lh{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!jd&&a&&(_E(yE),jd=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new xE(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new gE(this,e,t,n,i,s);case"boolean":return new cE(this,e,t);case"string":return new vE(this,e,t);case"function":return new Fl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new mE(this,e,t,n)}addFolder(e){const t=new Lh({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Fl||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Fl)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const us=JSON.parse(JSON.stringify(_)),z=new fS,Gn=new pS,we=new lE(z);z.network=we;window.addEventListener("toggle-tongue-debug",()=>{_.tongueDebugEnabled=!_.tongueDebugEnabled,console.log(`🐸 Tongue debug: ${_.tongueDebugEnabled?"ON":"OFF"}`)});const bt=new Lh({title:"🐸 Dev Config"});bt.hide();function si(r,e){r.$name&&(r.$name.title=e,r.$name.style.cursor="help"),r.domElement&&(r.domElement.title=e);const t=r.domElement.querySelector("input");return t&&(t.title=e,t.addEventListener("dblclick",n=>{n.preventDefault(),n.stopPropagation();const i=r.property;us[i]!==void 0&&(_[i]=us[i],r.updateDisplay(),r._onChange&&r._onChange(_[i]),console.log(`Reset ${i} to default: ${us[i]}`))})),r.$name&&r.$name.addEventListener("dblclick",n=>{const i=r.property;us[i]!==void 0&&(_[i]=us[i],r.updateDisplay(),r._onChange&&r._onChange(_[i]),console.log(`Reset ${i} to default: ${us[i]}`))}),r}const Da=bt.addFolder("Physics");Da.add(_,"gravity",-30,0);Da.add(_,"friction",0,1);Da.add(_,"restitution",0,1);const Ph=bt.addFolder("Movement");Ph.add(_,"moveSpeed",100,5e3);Ph.add(_,"jumpVelocity",0,20);Ph.add(_,"rotationSpeed",1,30);const ys=bt.addFolder("Animation");ys.add(_,"hopHeight",0,1);ys.add(_,"hopSpeed",1,30);ys.add(_,"talkSpeed",1,30);ys.add(_,"legKickForce",0,1).name("Kick Force");ys.add(_,"legKickDecay",.1,10).name("Kick Decay");ys.add(_,"walkLegSpeed",.1,2).name("Walk Speed Mult");ys.add(_,"walkLegHeight",0,1).name("Walk Height");Da.add(_,"linearDamping",0,1).name("Sliding (Damping)").onChange(r=>{z.localFrog&&z.localFrog.body&&(z.localFrog.body.linearDamping=r)});const Ap=bt.addFolder("Environment");Ap.add(_,"sunIntensity",0,5).onChange(r=>{z.scene.traverse(e=>{e.isDirectionalLight&&(e.intensity=r)})});Ap.add(_,"ambientIntensity",0,2).onChange(r=>{z.scene.traverse(e=>{e.isAmbientLight&&(e.intensity=r)})});z.scene.traverse(r=>{r.isDirectionalLight&&(r.intensity=_.sunIntensity),r.isAmbientLight&&(r.intensity=_.ambientIntensity)});const Na=bt.addFolder("Hemisphere Light 🌓");Na.add(_,"hemiIntensity",0,3).name("Intensity").onChange(r=>{z.hemiLight&&(z.hemiLight.intensity=r)});Na.addColor(_,"hemiSkyColor").name("Sky Color").onChange(r=>{z.hemiLight&&z.hemiLight.color.set(r)});Na.addColor(_,"hemiGroundColor").name("Ground Color").onChange(r=>{z.hemiLight&&z.hemiLight.groundColor.set(r)});Na.close();const pr=bt.addFolder("Rim Light 💡");pr.add(_,"rimIntensity",0,5).name("Intensity").onChange(r=>{z.rimLight&&(z.rimLight.intensity=r)});pr.addColor(_,"rimColor").name("Color").onChange(r=>{z.rimLight&&z.rimLight.color.set(r)});pr.add(_,"rimPosX",-100,100).name("Pos X").onChange(r=>{z.rimLight&&(z.rimLight.position.x=r)});pr.add(_,"rimPosY",0,100).name("Pos Y").onChange(r=>{z.rimLight&&(z.rimLight.position.y=r)});pr.add(_,"rimPosZ",-100,100).name("Pos Z").onChange(r=>{z.rimLight&&(z.rimLight.position.z=r)});pr.close();const Fa=bt.addFolder("Player Aura 🌟");Fa.add(_,"auraIntensity",0,10).name("Intensity");Fa.add(_,"auraDistance",1,20).name("Distance");Fa.addColor(_,"auraColor").name("Color");Fa.close();const Ua=bt.addFolder("Sky & Fog ☁️");Ua.addColor({color:"#"+z.scene.background.getHexString()},"color").name("Background Color").onChange(r=>{if(z.scene.background.set(r),z.scene.fog.color.set(r),z.composer){const e=z.composer.passes.find(t=>t.uniforms&&t.uniforms.uSkyColor);if(e){const t=new Se(r);e.uniforms.uSkyColor.value.set(t.r,t.g,t.b)}}});Ua.add(z.scene.fog,"near",0,100).name("Fog Near");Ua.add(z.scene.fog,"far",50,500).name("Fog Far");Ua.close();const ri=bt.addFolder("Shader FX");ri.add(_,"useShader").name("Enable Post-FX");const Vs=ri.addFolder("Cycles Mode (SAO) 💎");Vs.add(_,"saonEnabled").name("Enable SAO").onChange(r=>{z.saoPass&&(z.saoPass.enabled=r)});z.saoPass&&z.saoPass.params&&(Vs.add(z.saoPass.params,"saoIntensity",0,.1).name("AO Strength"),Vs.add(z.saoPass.params,"saoBias",-1,1).name("AO Bias"),Vs.add(z.saoPass.params,"saoKernelRadius",1,100).name("AO Radius"),Vs.add(z.saoPass.params,"saoScale",1,50).name("AO Scale"));Vs.close();const Ba=ri.addFolder("Toon Style 🎨");Ba.add(_,"toonEnabled").name("Enable Cel-Shade").onChange(r=>{z.customPass&&(z.customPass.uniforms.uToonEnabled.value=r?1:0)});Ba.add(_,"outlineEnabled").name("Enable Outlines").onChange(r=>{z.customPass&&(z.customPass.uniforms.uOutlineEnabled.value=r?1:0)});Ba.add(_,"outlineIntensity",0,1).name("Outline Darkness").onChange(r=>{z.customPass&&(z.customPass.uniforms.uOutlineIntensity.value=r)});Ba.close();const Oa=ri.addFolder("Color Grading");Oa.add(_,"shaderSaturation",0,2).name("Saturation");Oa.add(_,"shaderBrightness",-.5,.5).name("Brightness");Oa.add(_,"shaderContrast",.5,2).name("Contrast");Oa.add(_,"shaderGamma",.5,2).name("Gamma");const Qr=ri.addFolder("Color Tint");Qr.add(_,"shaderTemperature",-1,1).name("Temperature");Qr.add(_,"shaderTintR",0,2).name("Red Tint");Qr.add(_,"shaderTintG",0,2).name("Green Tint");Qr.add(_,"shaderTintB",0,2).name("Blue Tint");Qr.close();const eo=ri.addFolder("Vignette");eo.add(_,"vignetteEnabled").name("Enabled");eo.add(_,"vignetteIntensity",0,1).name("Intensity");eo.add(_,"vignetteRadius",0,1).name("Radius");eo.add(_,"vignetteSoftness",0,1).name("Softness");eo.close();const ka=ri.addFolder("Chromatic Aberration");ka.add(_,"chromaticEnabled").name("Enabled");ka.add(_,"chromaticIntensity",0,.02).name("Intensity");ka.add(_,"chromaticRadial").name("Radial Mode");ka.close();const to=ri.addFolder("Film Grain");to.add(_,"grainEnabled").name("Enabled");to.add(_,"grainIntensity",0,.3).name("Intensity");to.add(_,"grainSpeed",.1,5).name("Speed");to.add(_,"grainSize",.5,5).name("Size");to.close();const Ih=ri.addFolder("Sharpen");Ih.add(_,"sharpenEnabled").name("Enabled");Ih.add(_,"sharpenIntensity",0,1).name("Intensity");Ih.close();const no=ri.addFolder("Bloom");no.add(_,"bloomEnabled").name("Enabled");no.add(_,"bloomIntensity",0,2).name("Intensity");no.add(_,"bloomThreshold",0,1).name("Threshold");no.add(_,"bloomRadius",0,1).name("Radius");no.close();const Ai=bt.addFolder("Shadows");Ai.add(_,"shadowEnabled").name("Enable Shadows").onChange(r=>{z.renderer.shadowMap.enabled=r,z.dirLight&&(z.dirLight.castShadow=r),z.scene.traverse(e=>{e.material&&(e.material.needsUpdate=!0)})});Ai.add(_,"shadowMapSize",[512,1024,2048,4096]).name("Map Resolution").onChange(r=>{var e;z.dirLight&&(z.dirLight.shadow.mapSize.width=r,z.dirLight.shadow.mapSize.height=r,(e=z.dirLight.shadow.map)==null||e.dispose(),z.dirLight.shadow.map=null)});Ai.add(_,"shadowType",["Basic","PCF","PCFSoft","VSM"]).name("Shadow Type").onChange(r=>{z.renderer.shadowMap.type=z.getShadowMapType(r),z.renderer.shadowMap.needsUpdate=!0,z.scene.traverse(e=>{e.material&&(e.material.needsUpdate=!0)})});Ai.add(_,"shadowRadius",0,16).name("Blur Radius").onChange(r=>{z.dirLight&&(z.dirLight.shadow.radius=r)});Ai.add(_,"shadowBlurSamples",1,32,1).name("Blur Samples").onChange(r=>{z.dirLight&&(z.dirLight.shadow.blurSamples=r)});Ai.add(_,"shadowIntensity",0,1).name("Shadow Darkness").onChange(r=>{z.dirLight&&(z.dirLight.shadow.intensity=r)});Ai.add(_,"shadowBias",-.01,.01).name("Depth Bias").onChange(r=>{z.dirLight&&(z.dirLight.shadow.bias=r)});Ai.add(_,"shadowNormalBias",0,.1).name("Normal Bias").onChange(r=>{z.dirLight&&(z.dirLight.shadow.normalBias=r)});const za=Ai.addFolder("Camera Bounds");za.add(_,"shadowCameraNear",.1,10).name("Near").onChange(r=>{z.dirLight&&(z.dirLight.shadow.camera.near=r,z.dirLight.shadow.camera.updateProjectionMatrix())});za.add(_,"shadowCameraFar",10,500).name("Far").onChange(r=>{z.dirLight&&(z.dirLight.shadow.camera.far=r,z.dirLight.shadow.camera.updateProjectionMatrix())});za.add(_,"shadowCameraSize",10,200).name("Frustum Size").onChange(r=>{z.dirLight&&(z.dirLight.shadow.camera.top=r,z.dirLight.shadow.camera.bottom=-r,z.dirLight.shadow.camera.left=-r,z.dirLight.shadow.camera.right=r,z.dirLight.shadow.camera.updateProjectionMatrix())});za.close();const Ki=bt.addFolder("Camera");Ki.add(_,"cameraDistance",_.cameraMinDistance,_.cameraMaxDistance).name("Distance").onChange(r=>{z.cameraDistance=r});Ki.add(_,"cameraMinDistance",1,20).name("Min Zoom");Ki.add(_,"cameraMaxDistance",20,100).name("Max Zoom");Ki.add(_,"cameraZoomSpeed",.5,5).name("Zoom Speed");Ki.add(_,"cameraRotateSpeed",.001,.02).name("Rotate Speed");Ki.add(_,"cameraLerp",.01,.3).name("Smoothness");Ki.add({resetCamera:()=>{z.cameraOrbitAngle=0,z.cameraPitchAngle=.6,z.cameraDistance=_.cameraDistance}},"resetCamera").name("🔄 Reset View");Ki.close();const io=bt.addFolder("Spectator Camera 👁️");io.add(_,"spectatorDistance",20,200).name("Distance");io.add(_,"spectatorPitch",.1,1.5).name("Pitch");io.add(_,"spectatorSpeed",.01,.3).name("Orbit Speed");io.add(_,"spectatorHeight",-20,50).name("Look At Height");io.close();const oi=bt.addFolder("Jiggle Physics 🍑");oi.add(_,"jiggleEnabled").name("Enable Jiggle");oi.add(_,"jiggleIntensity",0,.5).name("Intensity");oi.add(_,"jiggleSpeed",1,30).name("Speed");oi.add(_,"jiggleDamping",1,15).name("Damping");oi.add(_,"jiggleBounce",0,2).name("Bounce");oi.add(_,"jiggleMovementResponse",0,3).name("Movement Response");oi.add(_,"jiggleWalkWobble",0,.3).name("Walk Wobble (Z)");oi.add(_,"jiggleWalkSpeed",1,25).name("Walk Speed");oi.add(_,"jiggleReturnSpeed",1,20).name("Return Speed");oi.close();const _s=bt.addFolder("Punch/Kick 🦵");_s.add(_,"punchSwingDistance",.5,4).name("Swing Distance");_s.add(_,"punchSwingSpeed",5,30).name("Swing Speed");_s.add(_,"punchReturnSpeed",2,20).name("Return Speed");_s.add(_,"punchCooldown",.1,1).name("Cooldown");_s.add(_,"punchLegRotation",0,.5).name("Leg Rotation");_s.add(_,"punchHitRadius",1,5).name("Hit Radius");_s.close();const Ci=bt.addFolder("VFX ✨");Ci.add(_,"vfxEnabled").name("Enable VFX");Ci.add(_,"vfxDustCount",1,15,1).name("Dust Count");Ci.add(_,"vfxDustSize",.05,.5).name("Dust Size");Ci.add(_,"vfxDustLife",.1,1.5).name("Dust Life");Ci.add(_,"vfxImpactCount",2,20,1).name("Impact Count");Ci.add(_,"vfxImpactSize",.1,.5).name("Impact Size");Ci.add(_,"vfxImpactLife",.1,1).name("Impact Life");Ci.add(_,"vfxWalkInterval",.05,.5).name("Walk Interval");Ci.close();const Dn=bt.addFolder("Combat ⚔️");Dn.add(_,"maxHealth",50,200,10).name("Max Health");Dn.add(_,"punchDamageMin",1,20,1).name("Base Damage Min");Dn.add(_,"punchDamageMax",5,30,1).name("Base Damage Max");Dn.add(_,"criticalDamageMin",10,40,1).name("Crit Damage Min");Dn.add(_,"criticalDamageMax",15,50,1).name("Crit Damage Max");Dn.add(_,"criticalChance",0,.5).name("Crit Chance");Dn.add(_,"knockbackForce",5,30).name("Knockback Force");Dn.add(_,"knockbackUpward",0,15).name("Knockback Up");Dn.add(_,"respawnTime",1,10).name("Respawn Time");Dn.add(_,"deathFadeDuration",.5,3).name("Death Fade");Dn.close();const Zi=bt.addFolder("Scooter 🛴");Zi.add(_,"scooterSpeed",5,40).name("Speed");Zi.add(_,"scooterTurnSpeed",1,10).name("Turn Speed");Zi.add(_,"scooterMaxTurn",.1,1).name("Max Turn Angle");Zi.add(_,"scooterWheelSpeed",5,30).name("Wheel Spin Speed");Zi.add(_,"scooterAcceleration",2,20).name("Acceleration");Zi.add(_,"scooterDeceleration",1,15).name("Deceleration");Zi.add(_,"scooterSpawnRadius",1,5).name("Spawn Radius");Zi.close();const gn=bt.addFolder("Ball ⚽");si(gn.add(_,"ballRadius",.2,2).name("Radius").onChange(r=>{z.ball&&z.ball.fallbackSphere&&(z.ball.fallbackSphere.geometry.dispose(),z.ball.fallbackSphere.geometry=new ji(r,32,32))}),"Ball size. Low=small, High=big. Double-click to reset.");si(gn.add(_,"ballMass",.1,2).name("Mass").onChange(r=>{z.ball&&z.ball.body&&(z.ball.body.mass=r,z.ball.body.updateMassProperties())}),"Ball weight. Low=flies far, High=hard to kick. Double-click to reset.");si(gn.add(_,"ballLinearDamping",0,1).name("Linear Damping").onChange(r=>{z.ball&&z.ball.body&&(z.ball.body.linearDamping=r)}),"How fast ball slows. Low=rolls forever, High=stops quick. Double-click to reset.");si(gn.add(_,"ballAngularDamping",0,1).name("Angular Damping").onChange(r=>{z.ball&&z.ball.body&&(z.ball.body.angularDamping=r)}),"How fast spin stops. Low=spins long, High=stops spinning. Double-click to reset.");si(gn.add(_,"ballBounciness",0,1).name("Bounciness"),"Bounce amount. Low=dead ball, High=super bouncy. Double-click to reset.");si(gn.add(_,"ballFriction",0,1).name("Friction"),"Ground grip. Low=slides, High=rolls properly. Double-click to reset.");si(gn.add(_,"ballKickForce",5,30).name("Kick Force"),"Kick power. Low=weak kicks, High=powerful kicks. Double-click to reset.");si(gn.add(_,"ballKickUpward",0,15).name("Kick Upward"),"Upward kick force. Low=ground shot, High=pop fly. Double-click to reset.");si(gn.add(_,"ballSpawnHeight",5,50).name("Spawn Height"),"Ball spawn/reset height. Low=near ground, High=from sky. Double-click to reset.");si(gn.add(_,"ballResetHeight",-50,0).name("Reset Height"),"Y position that triggers reset. Lower=can fall far. Double-click to reset.");gn.add({resetBall:()=>{z.ball&&(z.ball.body.position.set(5,_.ballSpawnHeight,0),z.ball.body.velocity.set(0,0,0),z.ball.body.angularVelocity.set(0,0,0))}},"resetBall").name("🔄 Reset Ball Position");gn.close();const Ji=bt.addFolder("Scooter Rider Position");Ji.add(_,"scooterRiderY",-1,2,.05).name("Frog Y Offset");Ji.add(_,"scooterLegOffsetX",-1,1,.05).name("Leg X Offset");Ji.add(_,"scooterLegOffsetY",-1,1,.05).name("Leg Y Offset");Ji.add(_,"scooterLegOffsetZ",-1,1,.05).name("Leg Z Offset");Ji.add(_,"scooterLegRotationX",-Math.PI,Math.PI,.05).name("Leg Rotation X");Ji.add(_,"scooterLegRotationY",-Math.PI,Math.PI,.05).name("Leg Rotation Y");Ji.add(_,"scooterLegRotationZ",-Math.PI,Math.PI,.05).name("Leg Rotation Z");Ji.close();const Cp={exportSettings:()=>{const r={};for(const e in _)_[e]!==us[e]&&(r[e]=_[e]);Object.keys(r).length===0?(console.log("--- NO CHANGES ---"),alert("No settings have been changed from defaults.")):(console.log("--- CHANGED SETTINGS ---"),console.log(JSON.stringify(r,null,4)),alert(`${Object.keys(r).length} settings changed! Check Console (F12)`))},exportAll:()=>{console.log("--- FULL CONFIG ---"),console.log(JSON.stringify(_,null,4)),alert("Full config exported to Console! (Press F12)")}};bt.add(Cp,"exportSettings").name("💾 Log Changed Settings");bt.add(Cp,"exportAll").name("📋 Log All Settings");let Ul=!1;window.addEventListener("keydown",r=>{r.altKey&&(r.key==="v"||r.key==="V")&&(r.preventDefault(),Ul=!Ul,Ul?bt.show():bt.hide())});let $d=0,Yd=0;function Rp(r){requestAnimationFrame(Rp);let e=(r-$d)/1e3;if($d=r,e>.1&&(e=.1),z.step(e,Gn),we.update(e),z.localFrog){const t=z.getMouseIntersection(Gn);z.localFrog.update(e,Gn,t,z.cameraOrbitAngle),Gn.consumeTongue()&&t&&z.localFrog.shootTongue(t,z),!Gn.tongueHeld&&z.localFrog.tongue.state==="attached"&&z.localFrog.releaseTongue(),we.sendInput(Gn,z.cameraOrbitAngle),we.sendUpdate(z.localFrog)}else{Yd+=e*_.spectatorSpeed,z.cameraOrbitAngle=Yd,z.cameraPitchAngle=_.spectatorPitch,z.cameraDistance=_.spectatorDistance;const t={x:0,y:_.spectatorHeight,z:0},n=t.x+Math.sin(z.cameraOrbitAngle)*z.cameraDistance,i=t.z+Math.cos(z.cameraOrbitAngle)*z.cameraDistance,s=t.y+Math.sin(z.cameraPitchAngle)*z.cameraDistance;z.camera.position.set(n,s,i),z.camera.lookAt(t.x,t.y,t.z)}Object.values(z.frogs).forEach(t=>{t.isLocal||t.updateRemote(e)})}Rp(0);window.game={world:z,input:Gn,network:we};document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("login-modal"),e=document.getElementById("tab-login"),t=document.getElementById("tab-register"),n=document.getElementById("auth-message"),i=document.getElementById("account-stats"),s=document.getElementById("player-name"),o=document.getElementById("player-password"),a=document.getElementById("password-toggle"),l=document.getElementById("player-color"),c=document.getElementById("btn-auth"),h=document.getElementById("btn-guest");if(!c||!r){console.warn("Login elements not found!");return}let u=!0,d=!1,f=null;window.game&&Object.defineProperty(window.game,"isAuthenticated",{get:()=>d});function m(w){u=w,e.classList.toggle("active",w),t.classList.toggle("active",!w),c.textContent="PLAY",p()}e.addEventListener("click",()=>m(!0)),t.addEventListener("click",()=>m(!1)),a.addEventListener("click",()=>{o.type==="password"?(o.type="text",a.textContent="🙈"):(o.type="password",a.textContent="👁️")});const x=document.querySelectorAll(".color-circle");x.forEach(w=>{w.addEventListener("click",()=>{x.forEach(D=>D.classList.remove("selected")),w.classList.add("selected");const R=w.dataset.color;l&&(l.value=R)})});function g(w,R=!0){n.textContent=w,n.className="auth-message "+(R?"error":"success")}function p(){n.className="auth-message",n.textContent=""}function v(w){const R=document.getElementById("stat-flies"),D=document.getElementById("stat-kills"),E=document.getElementById("stat-deaths");if(R&&(R.textContent=w.flies||0),D&&(D.textContent=w.kills||0),E&&(E.textContent=w.deaths||0),i&&(i.style.display="flex"),w.color){l.value=w.color;const M=Array.from(x).find(I=>I.dataset.color===w.color);M&&(x.forEach(I=>I.classList.remove("selected")),M.classList.add("selected"))}}async function y(){const w=s.value.trim(),R=o.value,D=l.value;if(!w||!R){g("Please enter username and password");return}c.disabled=!0,c.textContent=u?"Logging in...":"Registering...",p();const E=u?"login":"register",M=u?{username:w,password:R}:{username:w,password:R,color:D};we.socket.emit(E,M,I=>{c.disabled=!1,c.textContent="PLAY",I.success?(d=!0,f=I.user,window.game&&(window.game.currentUserId=I.user.id),g(u?"Welcome back!":"Account created!",!1),v(I.user),setTimeout(()=>b(!0),800)):g(I.error||"Authentication failed")})}function b(w=!1){const R=w?f.username:`Guest${Math.floor(Math.random()*9999)}`,D=l.value;document.body.classList.remove("spectator-mode"),r.style.display="none",Gn.isMobile&&Gn.showMobileControls(),z.cameraDistance=16,z.cameraPitchAngle=.6,we.join(R,D),document.getElementById("canvas-container").focus()}function A(){d=!1,f=null,b(!1)}c.addEventListener("click",y),h.addEventListener("click",A),s.addEventListener("keydown",w=>{w.key==="Enter"&&(o.value?y():o.focus())}),o.addEventListener("keydown",w=>{w.key==="Enter"&&y()}),setInterval(()=>{d&&z.localFrog&&we.socket.emit("saveProgress",{flies:z.localFrog.flies||0})},3e4),l.addEventListener("change",()=>{d&&we.socket.emit("updateColor",l.value)})});const ya=document.getElementById("player-table"),Bl=document.getElementById("player-list");let Ol=!0;window.addEventListener("keydown",r=>{r.key==="Tab"&&(r.preventDefault(),Lp())});ya&&ya.addEventListener("click",()=>{Gn.isMobile&&Lp()});function Lp(){Ol=!Ol,Ol?ya.classList.remove("hidden"):ya.classList.add("hidden")}function Pp(r,e=!1){const t=e?"#ffffff":r||"#4CAF50",n=e?"#cccccc":bE(t,-30);return`<svg viewBox="0 0 108.9 74.65" style="width: 16px; height: 11px;">
        <rect fill="${t}" x="13.68" y="20.71" width="81.55" height="48"/>
        <rect fill="${n}" y="40.84" width="24.77" height="33.81"/>
        <rect fill="#fff" x="26.71" width="24.77" height="33.81"/>
        <rect fill="#fff" x="59.35" width="24.77" height="33.81"/>
        <rect fill="${n}" x="84.13" y="40.84" width="24.77" height="33.81"/>
        <rect fill="#000" x="35.29" y="13.1" width="7.61" height="7.61"/>
        <rect fill="#000" x="67.94" y="13.1" width="7.61" height="7.61"/>
    </svg>`}function bE(r,e){const t=parseInt(r.replace("#",""),16),n=Math.round(2.55*e),i=Math.max(0,Math.min(255,(t>>16)+n)),s=Math.max(0,Math.min(255,(t>>8&255)+n)),o=Math.max(0,Math.min(255,(t&255)+n));return"#"+(16777216+i*65536+s*256+o).toString(16).slice(1)}const Kd=document.querySelector("#player-table .table-header");Kd&&(Kd.innerHTML=Pp("#ffffff",!0)+" Froggies");function so(){var e;if(!Bl)return;Bl.innerHTML="";const r=(e=we.socket)==null?void 0:e.id;for(const t in z.frogs){const n=z.frogs[t],i=t===r,s=document.createElement("li");s.className="player-item";const o=document.createElement("span");o.className="player-icon",o.innerHTML=Pp(n.color),s.appendChild(o);const a=document.createElement("span");a.className="player-level",a.textContent=`LV${n.level||1}`,a.style.cssText="font-size: 9px; background: linear-gradient(135deg, #ffd700, #ff9500); color: #000; padding: 1px 4px; border-radius: 4px; margin-right: 6px; font-weight: bold;",s.appendChild(a);const l=document.createElement("span");l.className="player-name",l.textContent=n.name||`Frog ${t.substr(0,4)}`,s.appendChild(l);const c=document.createElement("span");c.className="player-ping";const h=i?we.ping||0:we.allPings[t]||0;c.textContent=h>0?`${h}ms`:"—",c.style.color=h<=0?"#888":h<70?"#4CAF50":h<=100?"#FFA500":"#F44336",s.appendChild(c),Bl.appendChild(s)}}const wE=z.addRemoteFrog.bind(z);z.addRemoteFrog=function(r,e){const t=wE(r,e);return so(),t};const ME=z.addLocalFrog.bind(z);z.addLocalFrog=function(r,e,t){const n=ME(r,e,t);return so(),n};const SE=z.removeFrog.bind(z);z.removeFrog=function(r){const e=SE(r);return so(),e};setInterval(so,2e3);const _a=document.getElementById("death-screen");function EE(){_a&&_a.classList.add("active")}function TE(){_a&&_a.classList.remove("active")}window.showDeathScreen=EE;window.hideDeathScreen=TE;const $n=document.getElementById("settings-overlay"),Zd=document.getElementById("settings-btn"),Jd=document.getElementById("settings-close"),Qd=document.getElementById("btn-respawn");document.querySelectorAll(".settings-option[data-quality]");let ba=!1;function AE(){$n&&(ba=!0,$n.style.display="flex",$n.offsetHeight,$n.classList.add("visible"))}function jr(){$n&&(ba=!1,$n.classList.remove("visible"),setTimeout(()=>{ba||($n.style.display="none")},300))}function Ip(){ba?jr():AE()}Zd&&Zd.addEventListener("click",Ip);Jd&&Jd.addEventListener("click",jr);$n&&$n.addEventListener("click",r=>{r.target===$n&&jr()});window.addEventListener("keydown",r=>{if(r.key==="Escape"){const e=document.getElementById("chat-input");if(e&&document.activeElement===e)return;Ip()}});Qd&&Qd.addEventListener("click",()=>{z.localFrog&&!z.localFrog.isDead?(z.localFrog.lastAttackerId=null,z.localFrog.takeDamage(999,null,!1,!1,null),jr()):z.localFrog&&z.localFrog.isDead&&jr()});const ef=document.getElementById("btn-logout");ef&&ef.addEventListener("click",()=>{we.socket&&we.socket.emit("logout"),window.location.reload()});const Ln=new Audio("/song/bgsong1.mp3");Ln.loop=!0;Ln.volume=.2;const Vn=document.getElementById("music-btn"),tf=document.getElementById("volume-slider"),nf=document.getElementById("volume-value"),Hs=document.getElementById("volume-icon");let gs=!1,or=!1;function Dh(){gs||Ln.volume===0?(Hs.textContent="🔇",Vn.textContent="🔇",Vn.classList.add("muted")):Ln.volume<.3?(Hs.textContent="🔈",Vn.textContent="🎵",Vn.classList.remove("muted")):Ln.volume<.7?(Hs.textContent="🔉",Vn.textContent="🎵",Vn.classList.remove("muted")):(Hs.textContent="🔊",Vn.textContent="🎵",Vn.classList.remove("muted"))}function Nh(){or?(gs=!gs,Ln.muted=gs):(Ln.play().catch(r=>console.warn("Music autoplay blocked:",r)),or=!0,gs=!1),Dh()}Vn&&Vn.addEventListener("click",Nh);tf&&tf.addEventListener("input",r=>{const e=r.target.value/100;Ln.volume=e,nf&&(nf.textContent=`${r.target.value}%`),gs&&e>0&&(gs=!1,Ln.muted=!1),Dh(),!or&&e>0&&(Ln.play().catch(t=>console.warn("Music autoplay blocked:",t)),or=!0)});Hs&&Hs.addEventListener("click",()=>{Nh()});window.addEventListener("keydown",r=>{if(r.key==="m"||r.key==="M"){const e=document.getElementById("chat-input");if(e&&document.activeElement===e)return;Nh()}});const CE=we.join.bind(we);we.join=function(r,e){const t=CE(r,e);return or||(Ln.play().catch(n=>console.warn("Music autoplay blocked:",n)),or=!0),t};Dh();const sf=document.getElementById("profile-editor-btn"),Wn=document.getElementById("profile-editor-overlay"),rf=document.getElementById("profile-editor-close"),Yn=document.getElementById("profile-color-picker"),Fr=document.getElementById("profile-bio-input"),of=document.getElementById("btn-save-profile"),af=document.getElementById("friend-list-btn"),En=document.getElementById("friend-list-overlay"),lf=document.getElementById("friend-list-close"),qo=document.getElementById("tab-friends"),jo=document.getElementById("tab-requests"),_i=document.getElementById("friends-content"),Vi=document.getElementById("requests-content"),cf=document.getElementById("request-count");sf&&Wn&&sf.addEventListener("click",()=>{if(window.game&&!window.game.isAuthenticated){z&&z.showToast&&z.showToast("Register an account to edit your profile!");return}we&&we.socket&&z.localFrog.userId?we.socket.emit("getProfile",z.localFrog.userId,e=>{if(e){console.log("📝 Loaded fresh profile data for editor:",e),z.localFrog&&(z.localFrog.bio=e.bio||"",z.localFrog.badges=e.badges||[],z.localFrog.color=e.color||z.localFrog.color);const t=e.color||z.localFrog.color||"#4CAF50";Yn&&(Yn.value=t),document.querySelectorAll("#profile-color-circles .color-circle").forEach(s=>{s.classList.toggle("selected",s.dataset.color.toLowerCase()===t.toLowerCase())}),Fr&&(Fr.value=e.bio||"");const i=e.badges||[];Gi=[...i],document.querySelectorAll(".badge-item:not(.locked)").forEach(s=>{const o=s.textContent;i.includes(o)?s.classList.add("selected"):s.classList.remove("selected")}),Wn.classList.add("active")}else console.warn("⚠️ Failed to fetch fresh profile for editor, using cache"),r()}):r();function r(){if(z.localFrog){const e=z.localFrog.color||"#4CAF50";Yn&&(Yn.value=e),document.querySelectorAll("#profile-color-circles .color-circle").forEach(i=>{i.classList.toggle("selected",i.dataset.color.toLowerCase()===e.toLowerCase())}),Fr&&(Fr.value=z.localFrog.bio||"");const n=z.localFrog.badges||[];Gi=[...n],document.querySelectorAll(".badge-item:not(.locked)").forEach(i=>{const s=i.textContent;n.includes(s)?i.classList.add("selected"):i.classList.remove("selected")})}Wn.classList.add("active")}});rf&&Wn&&(rf.addEventListener("click",()=>{Wn.classList.remove("active")}),Wn.addEventListener("click",r=>{r.target===Wn&&Wn.classList.remove("active")}));of&&of.addEventListener("click",()=>{const r=(Yn==null?void 0:Yn.value)||"#4CAF50",e=Fr.value.trim();z.localFrog&&(z.localFrog.color=r,z.localFrog.bio=e,z.localFrog.badges=Gi),we&&we.socket&&we.socket.emit("updateProfile",{color:r,bio:e,badges:Gi}),z&&z.showToast&&z.showToast("Profile saved!"),Wn&&Wn.classList.remove("active")});document.querySelectorAll(".profile-sidebar .profile-tab").forEach(r=>{r.addEventListener("click",()=>{document.querySelectorAll(".profile-sidebar .profile-tab").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".profile-tab-content").forEach(n=>n.classList.remove("active")),r.classList.add("active");const e=r.dataset.tab,t=document.getElementById(`tab-content-${e}`);t&&t.classList.add("active")})});const hf=4;let Gi=[];document.querySelectorAll(".badge-item:not(.locked)").forEach(r=>{r.addEventListener("click",()=>{const e=r.textContent;r.classList.contains("selected")?(r.classList.remove("selected"),Gi=Gi.filter(n=>n!==e)):Gi.length<hf?(r.classList.add("selected"),Gi.push(e)):z&&z.showToast&&z.showToast(`Maximum ${hf} badges allowed!`)})});const uf=document.querySelectorAll("#profile-color-circles .color-circle");uf.forEach(r=>{r.addEventListener("click",()=>{const e=r.dataset.color;uf.forEach(n=>n.classList.remove("selected")),r.classList.add("selected");const t=document.getElementById("profile-color-picker");t&&(t.value=e),z.localFrog&&z.localFrog.setColor&&z.localFrog.setColor(e)})});const df=document.getElementById("btn-save-outfit");df&&df.addEventListener("click",()=>{const r=(Yn==null?void 0:Yn.value)||"#4CAF50";z.localFrog&&(z.localFrog.color=r),we&&we.socket&&we.socket.emit("updateProfile",{color:r}),z&&z.showToast&&z.showToast("Outfit saved!")});af&&En&&af.addEventListener("click",()=>{if(window.game&&!window.game.isAuthenticated){z&&z.showToast&&z.showToast("Register an account to use friend features!");return}En.classList.add("active"),we&&we.socket&&(we.socket.emit("getFriends"),we.socket.emit("getFriendRequests"))});lf&&En&&(lf.addEventListener("click",()=>{En.classList.remove("active")}),En.addEventListener("click",r=>{r.target===En&&En.classList.remove("active")}));qo&&jo&&_i&&Vi&&(qo.addEventListener("click",()=>{qo.classList.add("active"),jo.classList.remove("active"),_i.style.display="flex",Vi.style.display="none"}),jo.addEventListener("click",()=>{jo.classList.add("active"),qo.classList.remove("active"),Vi.style.display="flex",_i.style.display="none"}));if(we&&we.socket){let r=function(e,t,n){const i=document.getElementById("level-badge"),s=document.getElementById("xp-fill");i&&(i.textContent=`Lv.${e}`),s&&(s.style.width=`${t/n*100}%`)};var BE=r;we.socket.on("friendList",e=>{if(_i){if(e.length===0){_i.innerHTML=`
                <div class="empty-state">
                    <div class="empty-state-icon">🐸</div>
                    <div>No friends yet. Click on players to add them!</div>
                </div>
            `;return}_i.innerHTML=e.map(t=>`
            <div class="friend-item" data-friend-id="${t.id}" data-friend-name="${t.username}" data-friend-color="${t.color||"#4CAF50"}" style="cursor: pointer;">
                <div class="friend-avatar" style="background: ${t.color||"#4CAF50"}">🐸</div>
                <div class="friend-info">
                    <div class="friend-name">${t.username}</div>
                    <div class="friend-status ${t.online?"online":""}">${t.online?"Online":"Offline"}</div>
                </div>
                <div class="friend-actions">
                    <button class="friend-action-btn accept dm-btn" data-id="${t.id}" data-name="${t.username}" title="Message">💬</button>
                    <button class="friend-action-btn decline remove-btn" data-id="${t.id}" data-name="${t.username}" title="Remove Friend">✕</button>
                </div>
            </div>
        `).join(""),_i.querySelectorAll(".dm-btn").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation(),En&&En.classList.remove("active"),window.openDMChat(t.dataset.id,t.dataset.name)})}),_i.querySelectorAll(".remove-btn").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation();const i=t.dataset.name;confirm(`Remove ${i} from friends?`)&&(we.socket.emit("removeFriend",t.dataset.id),we.socket.emit("getFriendList"))})}),_i.querySelectorAll(".friend-item").forEach(t=>{t.addEventListener("click",()=>{En&&En.classList.remove("active");const n=t.dataset.friendId;we.socket.emit("getProfile",n,i=>{i&&z&&z.openProfile&&z.openProfile({id:t.dataset.friendId,userId:n,name:i.username||t.dataset.friendName,color:i.color||t.dataset.friendColor,level:i.level||1,bio:i.bio||"",badges:i.badges||[],isFriend:!0})})})})}}),we.socket.on("friendRequests",e=>{const t=document.getElementById("friend-notification-dot");if(t&&(t.style.display=e.length>0?"block":"none"),cf&&(cf.textContent=e.length>0?`(${e.length})`:""),!!Vi){if(e.length===0){Vi.innerHTML=`
                <div class="empty-state">
                    <div class="empty-state-icon">📭</div>
                    <div>No pending friend requests</div>
                </div>
            `;return}Vi.innerHTML=e.map(n=>`
            <div class="friend-item">
                <div class="friend-avatar" style="background: ${n.color||"#4CAF50"}">🐸</div>
                <div class="friend-info">
                    <div class="friend-name">${n.username}</div>
                    <div class="friend-status">Wants to be friends</div>
                </div>
                <div class="friend-actions">
                    <button class="friend-action-btn accept" data-id="${n.id}" title="Accept">✓</button>
                    <button class="friend-action-btn decline" data-id="${n.id}" title="Decline">✕</button>
                </div>
            </div>
        `).join(""),Vi.querySelectorAll(".accept").forEach(n=>{n.addEventListener("click",i=>{i.stopPropagation(),we.socket.emit("acceptFriendRequest",n.dataset.id)})}),Vi.querySelectorAll(".decline").forEach(n=>{n.addEventListener("click",()=>{we.socket.emit("declineFriend",n.dataset.id)})})}}),we.socket.on("friendRequestAccepted",e=>{var t;z&&z.showToast&&z.showToast(`You and ${((t=e.by)==null?void 0:t.username)||"someone"} are friends now! 🎉`),we.socket.emit("getFriendList")}),we.socket.on("unreadDMs",e=>{e.total,ff()}),we.socket.on("dmReceived",e=>{const t=document.getElementById("dm-chat-panel"),n=t.dataset.friendId;t.classList.contains("active")&&n==e.sender_id?(Gc(e,!1),we.socket.emit("markDMRead",e.sender_id)):(window.openDMChat(e.sender_id,e.sender_name),ff())}),we.socket.on("xpGained",e=>{const t=document.createElement("div");t.className="xp-toast",t.textContent=`+${e.amount} XP`,document.body.appendChild(t),setTimeout(()=>t.remove(),2e3),z.localFrog&&(z.localFrog.level=e.level),r(e.level,e.xp,e.xpToNext);const n=document.getElementById("stat-level"),i=document.getElementById("stat-xp"),s=document.getElementById("stat-kills"),o=document.getElementById("stat-kd");if(n&&(n.textContent=e.level),i&&(i.textContent=e.xp),s){const a=parseInt(s.textContent||"0")+1;s.textContent=a;const l=document.getElementById("stat-deaths"),c=parseInt((l==null?void 0:l.textContent)||"0");o&&(o.textContent=c>0?(a/c).toFixed(2):a.toFixed(2))}so()}),we.socket.on("playerDied",e=>{if((typeof e=="object"?e.id:e)===we.socket.id){const n=document.getElementById("stat-deaths"),i=document.getElementById("stat-kills"),s=document.getElementById("stat-kd");if(n){const o=parseInt(n.textContent||"0")+1;if(n.textContent=o,i&&s){const a=parseInt(i.textContent||"0");s.textContent=o>0?(a/o).toFixed(2):a.toFixed(2)}}}})}function ff(){const r=document.getElementById("friend-notification-dot"),e=document.getElementById("request-count"),t=e?parseInt(e.textContent.replace(/[()]/g,"")||"0"):0;r&&(r.style.display=t>0||window.totalUnreadDMs>0?"block":"none")}window.totalUnreadDMs=0;const qi=document.getElementById("dm-chat-panel"),pf=document.getElementById("dm-close"),ps=document.getElementById("dm-input"),mf=document.getElementById("dm-send"),Xn=document.getElementById("dm-messages"),gf=document.getElementById("dm-friend-name");window.openDMChat=function(r,e){qi&&(qi.dataset.friendId=r,gf&&(gf.textContent=e),qi.classList.add("active"),Xn&&(Xn.innerHTML='<div class="empty-state">Loading messages...</div>'),we&&we.socket&&we.socket.emit("getMessages",r))};pf&&qi&&pf.addEventListener("click",()=>{qi.classList.remove("active")});function Dp(){const r=ps==null?void 0:ps.value.trim(),e=qi==null?void 0:qi.dataset.friendId;!r||!e||(we&&we.socket&&we.socket.emit("sendDM",{friendId:parseInt(e),content:r}),ps&&(ps.value=""))}mf&&mf.addEventListener("click",Dp);ps&&ps.addEventListener("keydown",r=>{r.key==="Enter"&&Dp()});function Gc(r,e){if(!Xn)return;const t=Xn.querySelector(".empty-state");t&&t.remove();const n=document.createElement("div");n.className=`dm-message ${e?"sent":"received"}`,n.textContent=r.content,Xn.appendChild(n),Xn.scrollTop=Xn.scrollHeight}we&&we.socket&&(we.socket.on("dmSent",r=>{Gc(r,!0)}),we.socket.on("messageHistory",r=>{var t;if(!Xn)return;if(Xn.innerHTML="",r.length===0){Xn.innerHTML='<div class="empty-state">No messages yet. Say hi!</div>';return}const e=(t=window.game)==null?void 0:t.currentUserId;r.forEach(n=>{Gc(n,n.sender_id===e)})}),we.socket.emit("getUnreadDMs"));const kl=document.getElementById("emote-btn"),Oi=document.getElementById("emote-wheel");kl&&Oi&&(kl.addEventListener("click",()=>{Oi.classList.toggle("active")}),document.addEventListener("click",r=>{!Oi.contains(r.target)&&r.target!==kl&&Oi.classList.remove("active")}),Oi.querySelectorAll(".emote-option").forEach(r=>{r.addEventListener("click",()=>{r.dataset.emote;const e=r.textContent;we&&we.socket&&we.socket.emit("chatMessage",e),Oi.classList.remove("active")})}));window.addEventListener("keydown",r=>{if(r.key==="t"||r.key==="T"){if(document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA"))return;Oi&&Oi.classList.toggle("active")}});
