var nm=Object.defineProperty;var sm=(o,e,t)=>e in o?nm(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var wo=(o,e,t)=>sm(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const th="181",om=0,Qh=1,rm=2,am=0,ya=1,$l=2,Ui=3,En=0,ni=1,li=2,kt=0,Ys=1,Zl=2,eu=3,tu=4,Ql=5,An=100,lm=101,cm=102,hm=103,um=104,ec=200,dm=201,fm=202,pm=203,tc=204,ic=205,Rf=206,mm=207,Bf=208,gm=209,xm=210,vm=211,ym=212,_m=213,bm=214,nc=0,sc=1,oc=2,eo=3,rc=4,ac=5,lc=6,cc=7,ih=0,Am=1,Mm=2,Wn=0,If=1,Lf=2,Pf=3,nh=4,Df=5,Ff=6,Nf=7,iu="attached",wm="detached",Uf=300,to=301,io=302,hc=303,uc=304,Pa=306,no=1e3,Xi=1001,_a=1002,Vt=1003,Of=1004,Go=1005,Zt=1006,ra=1007,Mn=1008,Yi=1009,kf=1010,Gf=1011,Yo=1012,sh=1013,As=1014,Ei=1015,Cn=1016,oh=1017,rh=1018,so=1020,zf=35902,Hf=35899,Vf=1021,Wf=1022,fi=1023,$o=1026,oo=1027,ah=1028,lh=1029,ch=1030,hh=1031,uh=1033,aa=33776,la=33777,ca=33778,ha=33779,dc=35840,fc=35841,pc=35842,mc=35843,gc=36196,xc=37492,vc=37496,yc=37808,_c=37809,bc=37810,Ac=37811,Mc=37812,wc=37813,Sc=37814,Ec=37815,Cc=37816,Tc=37817,Rc=37818,Bc=37819,Ic=37820,Lc=37821,Pc=36492,Dc=36494,Fc=36495,Nc=36283,Uc=36284,Oc=36285,kc=36286,Zo=2300,Qo=2301,Qa=2302,nu=2400,su=2401,ou=2402,Sm=2500,Em=0,Xf=1,Gc=2,Cm=3200,Tm=3201,Da=0,Rm=1,Gn="",Gt="srgb",Qt="srgb-linear",ba="linear",at="srgb",Rs=7680,ru=519,Bm=512,Im=513,Lm=514,qf=515,Pm=516,Dm=517,Fm=518,Nm=519,zc=35044,au="300 es",qi=2e3,Aa=2001;function Jf(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function er(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Um(){const o=er("canvas");return o.style.display="block",o}const lu={};function Ma(...o){const e="THREE."+o.shift();console.log(e,...o)}function be(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Xe(...o){const e="THREE."+o.shift();console.error(e,...o)}function tr(...o){const e=o.join(" ");e in lu||(lu[e]=!0,be(...o))}function Om(o,e,t){return new Promise(function(i,n){function s(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:n();break;case o.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class go{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cu=1234567;const Xo=Math.PI/180,ro=180/Math.PI;function Ri(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[o&255]+Xt[o>>8&255]+Xt[o>>16&255]+Xt[o>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Je(o,e,t){return Math.max(e,Math.min(t,o))}function dh(o,e){return(o%e+e)%e}function km(o,e,t,i,n){return i+(o-e)*(n-i)/(t-e)}function Gm(o,e,t){return o!==e?(t-o)/(e-o):0}function qo(o,e,t){return(1-t)*o+t*e}function zm(o,e,t,i){return qo(o,e,1-Math.exp(-t*i))}function Hm(o,e=1){return e-Math.abs(dh(o,e*2)-e)}function Vm(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Wm(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Xm(o,e){return o+Math.floor(Math.random()*(e-o+1))}function qm(o,e){return o+Math.random()*(e-o)}function Jm(o){return o*(.5-Math.random())}function Km(o){o!==void 0&&(cu=o);let e=cu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jm(o){return o*Xo}function Ym(o){return o*ro}function $m(o){return(o&o-1)===0&&o!==0}function Zm(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Qm(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function eg(o,e,t,i,n){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+i)/2),h=r((e+i)/2),u=s((e-i)/2),d=r((e-i)/2),f=s((i-e)/2),m=r((i-e)/2);switch(n){case"XYX":o.set(a*h,l*u,l*d,a*c);break;case"YZY":o.set(l*d,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*d,a*h,a*c);break;case"XZX":o.set(a*h,l*m,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*m,a*c);break;case"ZYZ":o.set(l*m,l*f,a*h,a*c);break;default:be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Mi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function lt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const mt={DEG2RAD:Xo,RAD2DEG:ro,generateUUID:Ri,clamp:Je,euclideanModulo:dh,mapLinear:km,inverseLerp:Gm,lerp:qo,damp:zm,pingpong:Hm,smoothstep:Vm,smootherstep:Wm,randInt:Xm,randFloat:qm,randFloatSpread:Jm,seededRandom:Km,degToRad:jm,radToDeg:Ym,isPowerOfTwo:$m,ceilPowerOfTwo:Zm,floorPowerOfTwo:Qm,setQuaternionFromProperEuler:eg,normalize:lt,denormalize:Mi};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*n+e.x,this.y=s*n+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Wt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,r,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[r+0],f=s[r+1],m=s[r+2],x=s[r+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){const v=Math.acos(g),_=Math.sin(v);p=Math.sin(p*v)/_,a=Math.sin(a*v)/_,l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+x*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+x*a;const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,r){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[r],d=s[r+1],f=s[r+2],m=s[r+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),f=l(n/2),m=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*a+n*c-s*l,this._y=n*h+r*l+s*a-i*c,this._z=s*h+r*c+i*l-n*a,this._w=r*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,n=e._y,s=e._z,r=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,s=-s,r=-r,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*n-a*i),h=2*(a*t-s*n),u=2*(s*i-r*t);return this.x=t+l*c+r*u-a*h,this.y=i+l*h+a*c-s*u,this.z=n+l*u+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*r-i*l,this.z=i*a-n*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new B,hu=new Wt;class Ve{constructor(e,t,i,n,s,r,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,a,l,c)}set(e,t,i,n,s,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],x=n[0],g=n[3],p=n[6],v=n[1],_=n[4],b=n[7],C=n[2],M=n[5],T=n[8];return s[0]=r*x+a*v+l*C,s[3]=r*g+a*_+l*M,s[6]=r*p+a*b+l*T,s[1]=c*x+h*v+u*C,s[4]=c*g+h*_+u*M,s[7]=c*p+h*b+u*T,s[2]=d*x+f*v+m*C,s[5]=d*g+f*_+m*M,s[8]=d*p+f*b+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-i*s*h+i*a*l+n*s*c-n*r*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*r-a*c,d=a*l-h*s,f=c*s-r*l,m=t*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=u*x,e[1]=(n*c-h*i)*x,e[2]=(a*i-n*r)*x,e[3]=d*x,e[4]=(h*t-n*l)*x,e[5]=(n*s-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(r*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*a)+r+e,-n*c,n*l,-n*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new Ve,uu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),du=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tg(){const o={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(n,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===at&&(n.r=Sn(n.r),n.g=Sn(n.g),n.b=Sn(n.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===at&&(n.r=$s(n.r),n.g=$s(n.g),n.b=$s(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Gn?ba:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,r){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Qt]:{primaries:e,whitePoint:i,transfer:ba,toXYZ:uu,fromXYZ:du,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:i,transfer:at,toXYZ:uu,fromXYZ:du,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),o}const tt=tg();function Sn(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function $s(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Bs;class ig{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Bs===void 0&&(Bs=er("canvas")),Bs.width=e.width,Bs.height=e.height;const n=Bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Bs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=er("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=Sn(s[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Sn(t[i]/255)*255):t[i]=Sn(t[i]);return{data:t,width:e.width,height:e.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ng=0;class fh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,a=n.length;r<a;r++)n[r].isDataTexture?s.push(il(n[r].image)):s.push(il(n[r]))}else s=il(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function il(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ig.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}let sg=0;const nl=new B;class Nt extends go{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=Xi,n=Xi,s=Zt,r=Mn,a=fi,l=Yi,c=Nt.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Ri(),this.name="",this.source=new fh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nl).x}get height(){return this.source.getSize(nl).y}get depth(){return this.source.getSize(nl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){be(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case _a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case _a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Uf;Nt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,n=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,b=(f+1)/2,C=(p+1)/2,M=(h+d)/4,T=(u+x)/4,L=(m+g)/4;return _>b&&_>C?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=M/i,s=T/i):b>C?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=M/n,s=L/n):C<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(C),i=T/s,n=L/s),this.set(i,n,s,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class og extends go{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const n={width:e,height:t,depth:i.depth},s=new Nt(n);this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new fh(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends og{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kf extends Nt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rg extends Nt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,vi):vi.fromBufferAttribute(s,r),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yr.copy(i.boundingBox)),yr.applyMatrix4(e.matrixWorld),this.union(yr)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),_r.subVectors(this.max,So),Is.subVectors(e.a,So),Ls.subVectors(e.b,So),Ps.subVectors(e.c,So),Bn.subVectors(Ls,Is),In.subVectors(Ps,Ls),ts.subVectors(Is,Ps);let t=[0,-Bn.z,Bn.y,0,-In.z,In.y,0,-ts.z,ts.y,Bn.z,0,-Bn.x,In.z,0,-In.x,ts.z,0,-ts.x,-Bn.y,Bn.x,0,-In.y,In.x,0,-ts.y,ts.x,0];return!sl(t,Is,Ls,Ps,_r)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,Is,Ls,Ps,_r))?!1:(br.crossVectors(Bn,In),t=[br.x,br.y,br.z],sl(t,Is,Ls,Ps,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rn=[new B,new B,new B,new B,new B,new B,new B,new B],vi=new B,yr=new Qi,Is=new B,Ls=new B,Ps=new B,Bn=new B,In=new B,ts=new B,So=new B,_r=new B,br=new B,is=new B;function sl(o,e,t,i,n){for(let s=0,r=o.length-3;s<=r;s+=3){is.fromArray(o,s);const a=n.x*Math.abs(is.x)+n.y*Math.abs(is.y)+n.z*Math.abs(is.z),l=e.dot(is),c=t.dot(is),h=i.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ag=new Qi,Eo=new B,ol=new B;let en=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ag.setFromPoints(e).getCenter(i);let n=0;for(let s=0,r=e.length;s<r;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const t=Eo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Eo,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(ol)),this.expandByPoint(Eo.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};const an=new B,rl=new B,Ar=new B,Ln=new B,al=new B,Mr=new B,ll=new B;let or=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){rl.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(rl);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Ar),a=Ln.dot(this.direction),l=-Ln.dot(Ar),c=Ln.lengthSq(),h=Math.abs(1-r*r);let u,d,f,m;if(h>0)if(u=r*l-a,d=r*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(rl).addScaledVector(Ar,d),f}intersectSphere(e,t){an.subVectors(e.center,this.origin);const i=an.dot(this.direction),n=an.dot(an)-i*i,s=e.radius*e.radius;if(n>s)return null;const r=Math.sqrt(s-n),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,i,n,s){al.subVectors(t,e),Mr.subVectors(i,e),ll.crossVectors(al,Mr);let r=this.direction.dot(ll),a;if(r>0){if(n)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ln.subVectors(this.origin,e);const l=a*this.direction.dot(Mr.crossVectors(Ln,Mr));if(l<0)return null;const c=a*this.direction.dot(al.cross(Ln));if(c<0||l+c>r)return null;const h=-a*Ln.dot(ll);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ke{constructor(e,t,i,n,s,r,a,l,c,h,u,d,f,m,x,g){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,a,l,c,h,u,d,f,m,x,g)}set(e,t,i,n,s,r,a,l,c,h,u,d,f,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),r=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,f=r*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*a,t[4]=m*a-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*a,t[4]=-r*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=r*h,t[9]=x-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,f=r*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){const d=r*l,f=r*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=r*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lg,e,cg)}lookAt(e,t,i){const n=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Pn.crossVectors(i,ri),Pn.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Pn.crossVectors(i,ri)),Pn.normalize(),wr.crossVectors(ri,Pn),n[0]=Pn.x,n[4]=wr.x,n[8]=ri.x,n[1]=Pn.y,n[5]=wr.y,n[9]=ri.y,n[2]=Pn.z,n[6]=wr.z,n[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],x=i[6],g=i[10],p=i[14],v=i[3],_=i[7],b=i[11],C=i[15],M=n[0],T=n[4],L=n[8],S=n[12],A=n[1],P=n[5],U=n[9],D=n[13],z=n[2],G=n[6],k=n[10],j=n[14],W=n[3],Y=n[7],ne=n[11],me=n[15];return s[0]=r*M+a*A+l*z+c*W,s[4]=r*T+a*P+l*G+c*Y,s[8]=r*L+a*U+l*k+c*ne,s[12]=r*S+a*D+l*j+c*me,s[1]=h*M+u*A+d*z+f*W,s[5]=h*T+u*P+d*G+f*Y,s[9]=h*L+u*U+d*k+f*ne,s[13]=h*S+u*D+d*j+f*me,s[2]=m*M+x*A+g*z+p*W,s[6]=m*T+x*P+g*G+p*Y,s[10]=m*L+x*U+g*k+p*ne,s[14]=m*S+x*D+g*j+p*me,s[3]=v*M+_*A+b*z+C*W,s[7]=v*T+_*P+b*G+C*Y,s[11]=v*L+_*U+b*k+C*ne,s[15]=v*S+_*D+b*j+C*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*f-i*l*f)+x*(+t*l*f-t*c*d+s*r*d-n*r*f+n*c*h-s*l*h)+g*(+t*c*u-t*a*f-s*r*u+i*r*f+s*a*h-i*c*h)+p*(-n*a*h-t*l*u+t*a*d+n*r*u-i*r*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=u*g*c-x*d*c+x*l*f-a*g*f-u*l*p+a*d*p,_=m*d*c-h*g*c-m*l*f+r*g*f+h*l*p-r*d*p,b=h*x*c-m*u*c+m*a*f-r*x*f-h*a*p+r*u*p,C=m*u*l-h*x*l-m*a*d+r*x*d+h*a*g-r*u*g,M=t*v+i*_+n*b+s*C;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(x*d*s-u*g*s-x*n*f+i*g*f+u*n*p-i*d*p)*T,e[2]=(a*g*s-x*l*s+x*n*c-i*g*c-a*n*p+i*l*p)*T,e[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*f-i*l*f)*T,e[4]=_*T,e[5]=(h*g*s-m*d*s+m*n*f-t*g*f-h*n*p+t*d*p)*T,e[6]=(m*l*s-r*g*s-m*n*c+t*g*c+r*n*p-t*l*p)*T,e[7]=(r*d*s-h*l*s+h*n*c-t*d*c-r*n*f+t*l*f)*T,e[8]=b*T,e[9]=(m*u*s-h*x*s-m*i*f+t*x*f+h*i*p-t*u*p)*T,e[10]=(r*x*s-m*a*s+m*i*c-t*x*c-r*i*p+t*a*p)*T,e[11]=(h*a*s-r*u*s-h*i*c+t*u*c+r*i*f-t*a*f)*T,e[12]=C*T,e[13]=(h*x*n-m*u*n+m*i*d-t*x*d-h*i*g+t*u*g)*T,e[14]=(m*a*n-r*x*n-m*i*l+t*x*l+r*i*g-t*a*g)*T,e[15]=(r*u*n-h*a*n+h*i*l-t*u*l-r*i*d+t*a*d)*T,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,r=e.x,a=e.y,l=e.z,c=s*r,h=s*a;return this.set(c*r+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*r,0,c*l-n*a,h*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,r){return this.set(1,i,s,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,h=r+r,u=a+a,d=s*c,f=s*h,m=s*u,x=r*h,g=r*u,p=a*u,v=l*c,_=l*h,b=l*u,C=i.x,M=i.y,T=i.z;return n[0]=(1-(x+p))*C,n[1]=(f+b)*C,n[2]=(m-_)*C,n[3]=0,n[4]=(f-b)*M,n[5]=(1-(d+p))*M,n[6]=(g+v)*M,n[7]=0,n[8]=(m+_)*T,n[9]=(g-v)*T,n[10]=(1-(d+x))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Ds.set(n[0],n[1],n[2]).length();const r=Ds.set(n[4],n[5],n[6]).length(),a=Ds.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],yi.copy(this);const c=1/s,h=1/r,u=1/a;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=u,yi.elements[9]*=u,yi.elements[10]*=u,t.setFromRotationMatrix(yi),i.x=s,i.y=r,i.z=a,this}makePerspective(e,t,i,n,s,r,a=qi,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n);let m,x;if(l)m=s/(r-s),x=r*s/(r-s);else if(a===qi)m=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(a===Aa)m=-r/(r-s),x=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,r,a=qi,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n);let m,x;if(l)m=1/(r-s),x=r/(r-s);else if(a===qi)m=-2/(r-s),x=-(r+s)/(r-s);else if(a===Aa)m=-1/(r-s),x=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ds=new B,yi=new ke,lg=new B(0,0,0),cg=new B(1,1,1),Pn=new B,wr=new B,ri=new B,fu=new ke,pu=new Wt;class mi{constructor(e=0,t=0,i=0,n=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],r=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Je(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pu.setFromEuler(this),this.setFromQuaternion(pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hg=0;const mu=new B,Fs=new Wt,ln=new ke,Sr=new B,Co=new B,ug=new B,dg=new Wt,gu=new B(1,0,0),xu=new B(0,1,0),vu=new B(0,0,1),yu={type:"added"},fg={type:"removed"},Ns={type:"childadded",child:null},cl={type:"childremoved",child:null};class ft extends go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new B,t=new mi,i=new Wt,n=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ve}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(gu,e)}rotateY(e){return this.rotateOnAxis(xu,e)}rotateZ(e){return this.rotateOnAxis(vu,e)}translateOnAxis(e,t){return mu.copy(e).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gu,e)}translateY(e){return this.translateOnAxis(xu,e)}translateZ(e){return this.translateOnAxis(vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sr.copy(e):Sr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Co,Sr,this.up):ln.lookAt(Sr,Co,this.up),this.quaternion.setFromRotationMatrix(ln),n&&(ln.extractRotation(n.matrixWorld),Fs.setFromRotationMatrix(ln),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yu),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fg),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yu),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,dg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),m=r(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}ft.DEFAULT_UP=new B(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new B,cn=new B,hl=new B,hn=new B,Us=new B,Os=new B,_u=new B,ul=new B,dl=new B,fl=new B,pl=new ot,ml=new ot,gl=new ot;class wi{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),_i.subVectors(e,t),n.cross(_i);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){_i.subVectors(n,t),cn.subVectors(i,t),hl.subVectors(e,t);const r=_i.dot(_i),a=_i.dot(cn),l=_i.dot(hl),c=cn.dot(cn),h=cn.dot(hl),u=r*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(r*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,i,n,s,r,a,l){return this.getBarycoord(e,t,i,n,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hn.x),l.addScaledVector(r,hn.y),l.addScaledVector(a,hn.z),l)}static getInterpolatedAttribute(e,t,i,n,s,r){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,i),gl.fromBufferAttribute(e,n),r.setScalar(0),r.addScaledVector(pl,s.x),r.addScaledVector(ml,s.y),r.addScaledVector(gl,s.z),r}static isFrontFacing(e,t,i,n){return _i.subVectors(i,t),cn.subVectors(e,t),_i.cross(cn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),_i.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return wi.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let r,a;Us.subVectors(n,i),Os.subVectors(s,i),ul.subVectors(e,i);const l=Us.dot(ul),c=Os.dot(ul);if(l<=0&&c<=0)return t.copy(i);dl.subVectors(e,n);const h=Us.dot(dl),u=Os.dot(dl);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(i).addScaledVector(Us,r);fl.subVectors(e,s);const f=Us.dot(fl),m=Os.dot(fl);if(m>=0&&f<=m)return t.copy(s);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Os,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return _u.subVectors(s,n),a=(u-h)/(u-h+(f-m)),t.copy(n).addScaledVector(_u,a);const p=1/(g+x+d);return r=x*p,a=d*p,t.copy(i).addScaledVector(Us,r).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function xl(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class _e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=tt.workingColorSpace){if(e=dh(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=xl(r,s,e+1/3),this.g=xl(r,s,e),this.b=xl(r,s,e-1/3)}return tt.colorSpaceToWorking(this,n),this}setStyle(e,t=Gt){function i(s){s!==void 0&&parseFloat(s)<1&&be("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:be("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const i=jf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return tt.workingToColorSpace(qt.copy(this),e),Math.round(Je(qt.r*255,0,255))*65536+Math.round(Je(qt.g*255,0,255))*256+Math.round(Je(qt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(qt.copy(this),t);const i=qt.r,n=qt.g,s=qt.b,r=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Gt){tt.workingToColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,n=qt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Er);const i=qo(Dn.h,Er.h,t),n=qo(Dn.s,Er.s,t),s=qo(Dn.l,Er.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new _e;_e.NAMES=jf;let pg=0,pi=class extends go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Ys,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=ic,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){be(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(i.blending=this.blending),this.side!==En&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tc&&(i.blendSrc=this.blendSrc),this.blendDst!==ic&&(i.blendDst=this.blendDst),this.blendEquation!==An&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=n(e.textures),r=n(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class zt extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new B,Cr=new Te;let mg=0;class Kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zc,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),e}}class Yf extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $f extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gg=0;const hi=new ke,vl=new ft,ks=new B,ai=new Qi,To=new Qi,Ft=new B;class Ut extends go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jf(e)?$f:Yf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,i){return hi.makeTranslation(e,t,i),this.applyMatrix4(hi),this}scale(e,t,i){return hi.makeScale(e,t,i),this.applyMatrix4(hi),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new xt(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];ai.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new en);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];To.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(ai.min,To.min),ai.expandByPoint(Ft),Ft.addVectors(ai.max,To.max),ai.expandByPoint(Ft)):(ai.expandByPoint(To.min),ai.expandByPoint(To.max))}ai.getCenter(i);let n=0;for(let s=0,r=e.count;s<r;s++)Ft.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Ft));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ft.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),Ft.add(ks)),n=Math.max(n,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new B,l[L]=new B;const c=new B,h=new B,u=new B,d=new Te,f=new Te,m=new Te,x=new B,g=new B;function p(L,S,A){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,A),d.fromBufferAttribute(s,L),f.fromBufferAttribute(s,S),m.fromBufferAttribute(s,A),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[L].add(x),a[S].add(x),a[A].add(x),l[L].add(g),l[S].add(g),l[A].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,S=v.length;L<S;++L){const A=v[L],P=A.start,U=A.count;for(let D=P,z=P+U;D<z;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const _=new B,b=new B,C=new B,M=new B;function T(L){C.fromBufferAttribute(n,L),M.copy(C);const S=a[L];_.copy(S),_.sub(C.multiplyScalar(C.dot(S))).normalize(),b.crossVectors(M,S);const P=b.dot(l[L])<0?-1:1;r.setXYZW(L,_.x,_.y,_.z,P)}for(let L=0,S=v.length;L<S;++L){const A=v[L],P=A.start,U=A.count;for(let D=P,z=P+U;D<z;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new B,s=new B,r=new B,a=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Kt(d,h,u)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bu=new ke,ns=new or,Tr=new en,Au=new B,Rr=new B,Br=new B,Ir=new B,yl=new B,Lr=new B,Mu=new B,Pr=new B;class dt extends ft{constructor(e=new Ut,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){Lr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(yl.fromBufferAttribute(u,e),r?Lr.addScaledVector(yl,h):Lr.addScaledVector(yl.sub(t),h))}t.add(Lr)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere),Tr.applyMatrix4(s),ns.copy(e.ray).recast(e.near),!(Tr.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Tr,Au)===null||ns.origin.distanceToSquared(Au)>(e.far-e.near)**2))&&(bu.copy(s).invert(),ns.copy(e.ray).applyMatrix4(bu),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,i){let n;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=r[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let b=v,C=_;b<C;b+=3){const M=a.getX(b),T=a.getX(b+1),L=a.getX(b+2);n=Dr(this,p,e,i,c,h,u,M,T,L),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const v=a.getX(g),_=a.getX(g+1),b=a.getX(g+2);n=Dr(this,r,e,i,c,h,u,v,_,b),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=r[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=v,C=_;b<C;b+=3){const M=b,T=b+1,L=b+2;n=Dr(this,p,e,i,c,h,u,M,T,L),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const v=g,_=g+1,b=g+2;n=Dr(this,r,e,i,c,h,u,v,_,b),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}}function xg(o,e,t,i,n,s,r,a){let l;if(e.side===ni?l=i.intersectTriangle(r,s,n,!0,a):l=i.intersectTriangle(n,s,r,e.side===En,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Pr);return c<t.near||c>t.far?null:{distance:c,point:Pr.clone(),object:o}}function Dr(o,e,t,i,n,s,r,a,l,c){o.getVertexPosition(a,Rr),o.getVertexPosition(l,Br),o.getVertexPosition(c,Ir);const h=xg(o,e,t,i,Rr,Br,Ir,Mu);if(h){const u=new B;wi.getBarycoord(Mu,Rr,Br,Ir,u),n&&(h.uv=wi.getInterpolatedAttribute(n,a,l,c,u,new Te)),s&&(h.uv1=wi.getInterpolatedAttribute(s,a,l,c,u,new Te)),r&&(h.normal=wi.getInterpolatedAttribute(r,a,l,c,u,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};wi.getNormal(Rr,Br,Ir,d.normal),h.face=d,h.barycoord=u}return h}class jn extends Ut{constructor(e=1,t=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};const a=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,r,s,0),m("z","y","x",1,-1,i,t,-e,r,s,1),m("x","z","y",1,1,e,i,t,n,r,2),m("x","z","y",1,-1,e,i,-t,n,r,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(u,2));function m(x,g,p,v,_,b,C,M,T,L,S){const A=b/T,P=C/L,U=b/2,D=C/2,z=M/2,G=T+1,k=L+1;let j=0,W=0;const Y=new B;for(let ne=0;ne<k;ne++){const me=ne*P-D;for(let re=0;re<G;re++){const Qe=re*A-U;Y[x]=Qe*v,Y[g]=me*_,Y[p]=z,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[p]=M>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(re/T),u.push(1-ne/L),j+=1}}for(let ne=0;ne<L;ne++)for(let me=0;me<T;me++){const re=d+me+G*ne,Qe=d+me+G*(ne+1),st=d+(me+1)+G*(ne+1),rt=d+(me+1)+G*ne;l.push(re,Qe,rt),l.push(Qe,st,rt),W+=6}a.addGroup(f,W,S),f+=W,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const n=o[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function $t(o){const e={};for(let t=0;t<o.length;t++){const i=ao(o[t]);for(const n in i)e[n]=i[n]}return e}function vg(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Zf(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const _s={clone:ao,merge:$t};var yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yg,this.fragmentShader=_g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=vg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Qf extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new B,wu=new Te,Su=new Te;class Jt extends Qf{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Su),t.subVectors(Su,wu)}setViewOffset(e,t,i,n,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xo*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/l,t-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gs=-90,zs=1;class bg extends ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Jt(Gs,zs,e,t);n.layers=this.layers,this.add(n);const s=new Jt(Gs,zs,e,t);s.layers=this.layers,this.add(s);const r=new Jt(Gs,zs,e,t);r.layers=this.layers,this.add(r);const a=new Jt(Gs,zs,e,t);a.layers=this.layers,this.add(a);const l=new Jt(Gs,zs,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Gs,zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,r,a,l]=t;for(const c of t)this.remove(c);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,r),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class ep extends Nt{constructor(e=[],t=to,i,n,s,r,a,l,c,h){super(e,t,i,n,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ag extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ep(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new jn(5,5,5),s=new Ht({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:kt});s.uniforms.tEquirect.value=t;const r=new dt(n,s),a=t.minFilter;return t.minFilter===Mn&&(t.minFilter=Zt),new bg(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(s)}}class Ci extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mg={type:"move"};class _l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ci;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class mh{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=i}clone(){return new mh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Eu extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zc,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new B;class gh{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ma("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ma("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Cu=new B,Tu=new ot,Ru=new ot,Sg=new B,Bu=new ke,Fr=new B,bl=new en,Iu=new ke,Al=new or;class Eg extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=iu,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fr),this.boundingBox.expandByPoint(Fr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new en),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fr),this.boundingSphere.expandByPoint(Fr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(n),e.ray.intersectsSphere(bl)!==!1&&(Iu.copy(n).invert(),Al.copy(e.ray).applyMatrix4(Iu),!(this.boundingBox!==null&&Al.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Al)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wm?this.bindMatrixInverse.copy(this.bindMatrix).invert():be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;Tu.fromBufferAttribute(n.attributes.skinIndex,e),Ru.fromBufferAttribute(n.attributes.skinWeight,e),Cu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Ru.getComponent(s);if(r!==0){const a=Tu.getComponent(s);Bu.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Sg.copy(Cu).applyMatrix4(Bu),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class tp extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xh extends Nt{constructor(e=null,t=1,i=1,n,s,r,a,l,c=Vt,h=Vt,u,d){super(null,r,a,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lu=new ke,Cg=new ke;class vh{constructor(e=[],t=[]){this.uuid=Ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:Cg;Lu.multiplyMatrices(a,t[s]),Lu.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new vh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new xh(t,e,e,fi,Ei);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let r=t[s];r===void 0&&(be("Skeleton: No bone found with UUID:",s),r=new tp),this.bones.push(r),this.boneInverses.push(new ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const r=t[n];e.bones.push(r.uuid);const a=i[n];e.boneInverses.push(a.toArray())}return e}}class wa extends Kt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hs=new ke,Pu=new ke,Nr=[],Du=new Qi,Tg=new ke,Ro=new dt,Bo=new en;class ip extends dt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Tg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hs),Du.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Du)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new en),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hs),Bo.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,r=e*s+1;for(let a=0;a<i.length;a++)i[a]=n[r+a]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Ro.geometry=this.geometry,Ro.material=this.material,Ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(i),e.ray.intersectsSphere(Bo)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Hs),Pu.multiplyMatrices(i,Hs),Ro.matrixWorld=Pu,Ro.raycast(e,Nr);for(let r=0,a=Nr.length;r<a;r++){const l=Nr[r];l.instanceId=s,l.object=this,t.push(l)}Nr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new xh(new Float32Array(n*this.count),n,this.count,ah,Ei));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<i.length;c++)r+=i[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=n*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ml=new B,Rg=new B,Bg=new Ve;let _n=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Ml.subVectors(i,t).cross(Rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ml),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Bg.getNormalMatrix(e),n=this.coplanarPoint(Ml).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const ss=new en,Ig=new Te(.5,.5),Ur=new B;class yh{constructor(e=new _n,t=new _n,i=new _n,n=new _n,s=new _n,r=new _n){this.planes=[e,t,i,n,s,r]}set(e,t,i,n,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qi,i=!1){const n=this.planes,s=e.elements,r=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],x=s[9],g=s[10],p=s[11],v=s[12],_=s[13],b=s[14],C=s[15];if(n[0].setComponents(c-r,f-h,p-m,C-v).normalize(),n[1].setComponents(c+r,f+h,p+m,C+v).normalize(),n[2].setComponents(c+a,f+u,p+x,C+_).normalize(),n[3].setComponents(c-a,f-u,p-x,C-_).normalize(),i)n[4].setComponents(l,d,g,b).normalize(),n[5].setComponents(c-l,f-d,p-g,C-b).normalize();else if(n[4].setComponents(c-l,f-d,p-g,C-b).normalize(),t===qi)n[5].setComponents(c+l,f+d,p+g,C+b).normalize();else if(t===Aa)n[5].setComponents(l,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);const t=Ig.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ur.x=n.normal.x>0?e.max.x:e.min.x,Ur.y=n.normal.y>0?e.max.y:e.min.y,Ur.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _h extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sa=new B,Ea=new B,Fu=new ke,Io=new or,Or=new en,wl=new B,Nu=new B;class Fa extends ft{constructor(e=new Ut,t=new _h){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Sa.fromBufferAttribute(t,n-1),Ea.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Sa.distanceTo(Ea);e.setAttribute("lineDistance",new xt(i,1))}else be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(n),Or.radius+=s,e.ray.intersectsSphere(Or)===!1)return;Fu.copy(n).invert(),Io.copy(e.ray).applyMatrix4(Fu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let x=f,g=m-1;x<g;x+=c){const p=h.getX(x),v=h.getX(x+1),_=kr(this,e,Io,l,p,v,x);_&&t.push(_)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(f),p=kr(this,e,Io,l,x,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let x=f,g=m-1;x<g;x+=c){const p=kr(this,e,Io,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=kr(this,e,Io,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function kr(o,e,t,i,n,s,r){const a=o.geometry.attributes.position;if(Sa.fromBufferAttribute(a,n),Ea.fromBufferAttribute(a,s),t.distanceSqToSegment(Sa,Ea,wl,Nu)>i)return;wl.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(wl);if(!(c<e.near||c>e.far))return{distance:c,point:Nu.clone().applyMatrix4(o.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:o}}const Uu=new B,Ou=new B;class Lg extends Fa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Uu.fromBufferAttribute(t,n),Ou.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Uu.distanceTo(Ou);e.setAttribute("lineDistance",new xt(i,1))}else be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pg extends Fa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class np extends pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ku=new ke,Hc=new or,Gr=new en,zr=new B;class Dg extends ft{constructor(e=new Ut,t=new np){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(n),Gr.radius+=s,e.ray.intersectsSphere(Gr)===!1)return;ku.copy(n).invert(),Hc.copy(e.ray).applyMatrix4(ku);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=d,x=f;m<x;m++){const g=c.getX(m);zr.fromBufferAttribute(u,g),Gu(zr,g,l,n,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,x=f;m<x;m++)zr.fromBufferAttribute(u,m),Gu(zr,m,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gu(o,e,t,i,n,s,r){const a=Hc.distanceSqToPoint(o);if(a<t){const l=new B;Hc.closestPointToPoint(o,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class bh extends Nt{constructor(e,t,i=As,n,s,r,a=Vt,l=Vt,c,h=$o,u=1){if(h!==$o&&h!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,n,s,r,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sp extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ah extends Ut{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],r=[],a=[],l=[],c=new B,h=new Te;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/e+1)/2,h.y=(r[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Na extends Ut{constructor(e=1,t=1,i=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const x=[],g=i/2;let p=0;v(),r===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(f,2));function v(){const b=new B,C=new B;let M=0;const T=(t-e)/i;for(let L=0;L<=s;L++){const S=[],A=L/s,P=A*(t-e)+e;for(let U=0;U<=n;U++){const D=U/n,z=D*l+a,G=Math.sin(z),k=Math.cos(z);C.x=P*G,C.y=-A*i+g,C.z=P*k,u.push(C.x,C.y,C.z),b.set(G,T,k).normalize(),d.push(b.x,b.y,b.z),f.push(D,1-A),S.push(m++)}x.push(S)}for(let L=0;L<n;L++)for(let S=0;S<s;S++){const A=x[S][L],P=x[S+1][L],U=x[S+1][L+1],D=x[S][L+1];(e>0||S!==0)&&(h.push(A,P,D),M+=3),(t>0||S!==s-1)&&(h.push(P,U,D),M+=3)}c.addGroup(p,M,0),p+=M}function _(b){const C=m,M=new Te,T=new B;let L=0;const S=b===!0?e:t,A=b===!0?1:-1;for(let U=1;U<=n;U++)u.push(0,g*A,0),d.push(0,A,0),f.push(.5,.5),m++;const P=m;for(let U=0;U<=n;U++){const z=U/n*l+a,G=Math.cos(z),k=Math.sin(z);T.x=S*k,T.y=g*A,T.z=S*G,u.push(T.x,T.y,T.z),d.push(0,A,0),M.x=G*.5+.5,M.y=k*.5*A+.5,f.push(M.x,M.y),m++}for(let U=0;U<n;U++){const D=C+U,z=P+U;b===!0?h.push(z,z+1,D):h.push(z+1,z,D),L+=3}c.addGroup(p,L,b===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ca extends Na{constructor(e=1,t=1,i=32,n=1,s=!1,r=0,a=Math.PI*2){super(0,e,t,i,n,s,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(e){return new Ca(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mh extends Ut{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],r=[];a(n),c(i),h(),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(s.slice(),3)),this.setAttribute("uv",new xt(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new B,b=new B,C=new B;for(let M=0;M<t.length;M+=3)f(t[M+0],_),f(t[M+1],b),f(t[M+2],C),l(_,b,C,v)}function l(v,_,b,C){const M=C+1,T=[];for(let L=0;L<=M;L++){T[L]=[];const S=v.clone().lerp(b,L/M),A=_.clone().lerp(b,L/M),P=M-L;for(let U=0;U<=P;U++)U===0&&L===M?T[L][U]=S:T[L][U]=S.clone().lerp(A,U/P)}for(let L=0;L<M;L++)for(let S=0;S<2*(M-L)-1;S++){const A=Math.floor(S/2);S%2===0?(d(T[L][A+1]),d(T[L+1][A]),d(T[L][A])):(d(T[L][A+1]),d(T[L+1][A+1]),d(T[L+1][A]))}}function c(v){const _=new B;for(let b=0;b<s.length;b+=3)_.x=s[b+0],_.y=s[b+1],_.z=s[b+2],_.normalize().multiplyScalar(v),s[b+0]=_.x,s[b+1]=_.y,s[b+2]=_.z}function h(){const v=new B;for(let _=0;_<s.length;_+=3){v.x=s[_+0],v.y=s[_+1],v.z=s[_+2];const b=g(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;r.push(b,1-C)}m(),u()}function u(){for(let v=0;v<r.length;v+=6){const _=r[v+0],b=r[v+2],C=r[v+4],M=Math.max(_,b,C),T=Math.min(_,b,C);M>.9&&T<.1&&(_<.2&&(r[v+0]+=1),b<.2&&(r[v+2]+=1),C<.2&&(r[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,_){const b=v*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function m(){const v=new B,_=new B,b=new B,C=new B,M=new Te,T=new Te,L=new Te;for(let S=0,A=0;S<s.length;S+=9,A+=6){v.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),b.set(s[S+6],s[S+7],s[S+8]),M.set(r[A+0],r[A+1]),T.set(r[A+2],r[A+3]),L.set(r[A+4],r[A+5]),C.copy(v).add(_).add(b).divideScalar(3);const P=g(C);x(M,A+0,v,P),x(T,A+2,_,P),x(L,A+4,b,P)}}function x(v,_,b,C){C<0&&v.x===1&&(r[_]=v.x-1),b.x===0&&b.z===0&&(r[_]=C/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mh(e.vertices,e.indices,e.radius,e.details)}}class wh extends Mh{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wh(e.radius,e.detail)}}class rr extends Ut{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,r=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const v=p*d-r;for(let _=0;_<c;_++){const b=_*u-s;m.push(b,-v,0),x.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const _=v+c*p,b=v+c*(p+1),C=v+1+c*(p+1),M=v+1+c*p;f.push(_,b,M),f.push(b,C,M)}this.setIndex(f),this.setAttribute("position",new xt(m,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sh extends Ut{constructor(e=.5,t=1,i=32,n=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/n,f=new B,m=new Te;for(let x=0;x<=n;x++){for(let g=0;g<=i;g++){const p=s+g/i*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<n;x++){const g=x*(i+1);for(let p=0;p<i;p++){const v=p+g,_=v,b=v+i+1,C=v+i+2,M=v+1;a.push(_,b,M),a.push(b,C,M)}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Jn extends Ut{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new B,d=new B,f=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){const v=[],_=p/i;let b=0;p===0&&r===0?b=.5/t:p===i&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const M=C/t;u.x=-e*Math.cos(n+M*s)*Math.sin(r+_*a),u.y=e*Math.cos(r+_*a),u.z=e*Math.sin(n+M*s)*Math.sin(r+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(M+b,1-_),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const _=h[p][v+1],b=h[p][v],C=h[p+1][v],M=h[p+1][v+1];(p!==0||r>0)&&f.push(_,b,M),(p!==i-1||l<Math.PI)&&f.push(b,C,M)}this.setIndex(f),this.setAttribute("position",new xt(m,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fg extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ws extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tn extends ws{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ng extends pi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Ug extends pi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Og extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kg extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Hr(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Gg(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function zg(o){function e(n,s){return o[n]-o[s]}const t=o.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function zu(o,e,t){const i=o.length,n=new o.constructor(i);for(let s=0,r=0;r!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)n[r++]=o[a+l]}return n}function op(o,e,t,i){let n=1,s=o[0];for(;s!==void 0&&s[i]===void 0;)s=o[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(e.push(s.time),t.push(...r)),s=o[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(e.push(s.time),t.push(r)),s=o[n++];while(s!==void 0)}class ar{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let r;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break e}r=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}r=i,i=0;break t}break i}for(;i<r;){const a=i+r>>>1;e<t[a]?r=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let r=0;r!==n;++r)t[r]=i[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Hg extends ar{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nu,endingEnd:nu}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,r=e+1,a=n[s],l=n[r];if(a===void 0)switch(this.getSettings_().endingStart){case su:s=e,a=2*t-i;break;case ou:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case su:r=e,l=2*i-t;break;case ou:r=1,l=i+n[1]-n[0];break;default:r=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(n-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*x+.5*m,b=f*g-f*x;for(let C=0;C!==a;++C)s[C]=p*r[h+C]+v*r[c+C]+_*r[l+C]+b*r[u+C];return s}}class Vg extends ar{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}}class Wg extends ar{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ii{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Wg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zo:t=this.InterpolantFactoryMethodDiscrete;break;case Qo:t=this.InterpolantFactoryMethodLinear;break;case Qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return be("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zo;case this.InterpolantFactoryMethodLinear:return Qo;case this.InterpolantFactoryMethodSmooth:return Qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,r=n-1;for(;s!==n&&i[s]<e;)++s;for(;r!==-1&&i[r]>t;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(n!==void 0&&Gg(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Qa,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){const x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const u=a*i,d=r*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*i,l=r*i,c=0;c!==i;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Qo;class xo extends Ii{constructor(e,t,i){super(e,t,i)}}xo.prototype.ValueTypeName="bool";xo.prototype.ValueBufferType=Array;xo.prototype.DefaultInterpolation=Zo;xo.prototype.InterpolantFactoryMethodLinear=void 0;xo.prototype.InterpolantFactoryMethodSmooth=void 0;class rp extends Ii{constructor(e,t,i,n){super(e,t,i,n)}}rp.prototype.ValueTypeName="color";class lo extends Ii{constructor(e,t,i,n){super(e,t,i,n)}}lo.prototype.ValueTypeName="number";class Xg extends ar{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Wt.slerpFlat(s,0,r,c-a,r,c,l);return s}}class co extends Ii{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Xg(this.times,this.values,this.getValueSize(),e)}}co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;class vo extends Ii{constructor(e,t,i){super(e,t,i)}}vo.prototype.ValueTypeName="string";vo.prototype.ValueBufferType=Array;vo.prototype.DefaultInterpolation=Zo;vo.prototype.InterpolantFactoryMethodLinear=void 0;vo.prototype.InterpolantFactoryMethodSmooth=void 0;class ho extends Ii{constructor(e,t,i,n){super(e,t,i,n)}}ho.prototype.ValueTypeName="vector";class qg{constructor(e="",t=-1,i=[],n=Sm){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Ri(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let r=0,a=i.length;r!==a;++r)t.push(Kg(i[r]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=i.length;s!==r;++s)t.push(Ii.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=zg(l);l=zu(l,1,h),c=zu(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new lo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,r)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const r=[];for(const a in n)r.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return r}static parseAnimation(e,t){if(be("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Xe("AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,m,x){if(f.length!==0){const g=[],p=[];op(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},n=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(const x in f){const g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){const _=d[m];g.push(_.time),p.push(_.morphTarget===x?1:0)}n.push(new lo(".morphTargetInfluence["+x+"]",g,p))}l=f.length*r}else{const f=".bones["+t[u].name+"]";i(ho,f+".position",d,"pos",n),i(co,f+".quaternion",d,"rot",n),i(ho,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Jg(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return lo;case"vector":case"vector2":case"vector3":case"vector4":return ho;case"color":return rp;case"quaternion":return co;case"bool":case"boolean":return xo;case"string":return vo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Kg(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jg(o.type);if(o.times===void 0){const t=[],i=[];op(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const wn={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class ap{constructor(e,t,i){const n=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,n.onProgress!==void 0&&n.onProgress(h,r,a),r===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const jg=new ap;class Ss{constructor(e){this.manager=e!==void 0?e:jg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ss.DEFAULT_MATERIAL_NAME="__DEFAULT";const un={};class Yg extends Error{constructor(e,t){super(e),this.response=t}}class Eh extends Ss{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=wn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(un[e]!==void 0){un[e].push({onLoad:t,onProgress:i,onError:n});return}un[e]=[],un[e].push({onLoad:t,onProgress:i,onError:n});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=un[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let x=0;const g=new ReadableStream({start(p){v();function v(){u.read().then(({done:_,value:b})=>{if(_)p.close();else{x+=b.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let M=0,T=h.length;M<T;M++){const L=h[M];L.onProgress&&L.onProgress(C)}p.enqueue(b),v()}},_=>{p.error(_)})}}});return new Response(g)}else throw new Yg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{wn.add(`file:${e}`,c);const h=un[e];delete un[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=un[e];if(h===void 0)throw this.manager.itemError(e),c;delete un[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vs=new WeakMap;class $g extends Ss{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=wn.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let u=Vs.get(r);u===void 0&&(u=[],Vs.set(r,u)),u.push({onLoad:t,onError:n})}return r}const a=er("img");function l(){h(),t&&t(this);const u=Vs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Vs.delete(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),wn.remove(`image:${e}`);const d=Vs.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}Vs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),wn.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Zg extends Ss{constructor(e){super(e)}load(e,t,i,n){const s=new Nt,r=new $g(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class lr extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Qg extends lr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Sl=new ke,Hu=new B,Vu=new B;class Ch{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=Yi,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yh,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hu),Vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vu),t.updateMatrixWorld(),Sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class e0 extends Ch{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ro*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class t0 extends lr{constructor(e,t,i=0,n=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=i,this.angle=n,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new e0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wu=new ke,Lo=new B,El=new B;class i0 extends Ch{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Lo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Lo),El.copy(i.position),El.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(El),i.updateMatrixWorld(),n.makeTranslation(-Lo.x,-Lo.y,-Lo.z),Wu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu,i.coordinateSystem,i.reversedDepth)}}class lp extends lr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new i0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ua extends Qf{constructor(e=-1,t=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,r=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class n0 extends Ch{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ua extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new n0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xu extends lr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Cl=new WeakMap;class s0 extends Ss{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=wn.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(c=>{if(Cl.has(r)===!0)n&&n(Cl.get(r)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return wn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Cl.set(l,c),wn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});wn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Vr;class cp{static getContext(){return Vr===void 0&&(Vr=new(window.AudioContext||window.webkitAudioContext)),Vr}static setContext(e){Vr=e}}class o0 extends Ss{constructor(e){super(e)}load(e,t,i,n){const s=this,r=new Eh(this.manager);r.setResponseType("arraybuffer"),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(l){try{const c=l.slice(0);cp.getContext().decodeAudioData(c,function(u){t(u)}).catch(a)}catch(c){a(c)}},i,n);function a(l){n?n(l):Xe(l),s.manager.itemError(e)}}}class r0 extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const os=new B,Tl=new Wt,a0=new B,rs=new B,as=new B;class l0 extends ft{constructor(){super(),this.type="AudioListener",this.context=cp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new hp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(os,Tl,a0),rs.set(0,0,-1).applyQuaternion(Tl),as.set(0,1,0).applyQuaternion(Tl),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(os.x,i),t.positionY.linearRampToValueAtTime(os.y,i),t.positionZ.linearRampToValueAtTime(os.z,i),t.forwardX.linearRampToValueAtTime(rs.x,i),t.forwardY.linearRampToValueAtTime(rs.y,i),t.forwardZ.linearRampToValueAtTime(rs.z,i),t.upX.linearRampToValueAtTime(as.x,i),t.upY.linearRampToValueAtTime(as.y,i),t.upZ.linearRampToValueAtTime(as.z,i)}else t.setPosition(os.x,os.y,os.z),t.setOrientation(rs.x,rs.y,rs.z,as.x,as.y,as.z)}}let up=class extends ft{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){be("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){be("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){be("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){be("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){be("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(be("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){be("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(be("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}};const ls=new B,qu=new Wt,c0=new B,cs=new B;class h0 extends up{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ls,qu,c0),cs.set(0,0,1).applyQuaternion(qu);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ls.x,i),t.positionY.linearRampToValueAtTime(ls.y,i),t.positionZ.linearRampToValueAtTime(ls.z,i),t.orientationX.linearRampToValueAtTime(cs.x,i),t.orientationY.linearRampToValueAtTime(cs.y,i),t.orientationZ.linearRampToValueAtTime(cs.z,i)}else t.setPosition(ls.x,ls.y,ls.z),t.setOrientation(cs.x,cs.y,cs.z)}}const Th="\\[\\]\\.:\\/",u0=new RegExp("["+Th+"]","g"),Rh="[^"+Th+"]",d0="[^"+Th.replace("\\.","")+"]",f0=/((?:WC+[\/:])*)/.source.replace("WC",Rh),p0=/(WCOD+)?/.source.replace("WCOD",d0),m0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),g0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),x0=new RegExp("^"+f0+p0+m0+g0+"$"),v0=["material","materials","bones","map"];class y0{constructor(e,t,i){const n=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ct{constructor(e,t,i){this.path=t,this.parsedPath=i||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,i):new ct(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u0,"")}static parseTrackName(e){const t=x0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);v0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){be("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[n];if(r===void 0){const c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=y0;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ju=new ke;class dp{constructor(e,t,i=0,n=1/0){this.ray=new or(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new ph,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ju),this}intersectObject(e,t=!0,i=[]){return Vc(e,this,i,t),i.sort(Ku),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Vc(e[n],this,i,t);return i.sort(Ku),i}}function Ku(o,e){return o.distance-e.distance}function Vc(o,e,t,i){let n=!0;if(o.layers.test(e.layers)&&o.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const s=o.children;for(let r=0,a=s.length;r<a;r++)Vc(s[r],e,t,!0)}}function ju(o,e,t,i){const n=_0(i);switch(t){case Vf:return o*e;case ah:return o*e/n.components*n.byteLength;case lh:return o*e/n.components*n.byteLength;case ch:return o*e*2/n.components*n.byteLength;case hh:return o*e*2/n.components*n.byteLength;case Wf:return o*e*3/n.components*n.byteLength;case fi:return o*e*4/n.components*n.byteLength;case uh:return o*e*4/n.components*n.byteLength;case aa:case la:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ca:case ha:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case fc:case mc:return Math.max(o,16)*Math.max(e,8)/4;case dc:case pc:return Math.max(o,8)*Math.max(e,8)/2;case gc:case xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Dc:case Fc:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Nc:case Uc:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Oc:case kc:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _0(o){switch(o){case Yi:case kf:return{byteLength:1,components:1};case Yo:case Gf:case Cn:return{byteLength:2,components:1};case oh:case rh:return{byteLength:2,components:4};case As:case sh:case Ei:return{byteLength:4,components:1};case zf:case Hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fp(){let o=null,e=!1,t=null,i=null;function n(s,r){t(s,r),i=o.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(n),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function b0(o){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=o.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(o.bindBuffer(c,a),u.length===0)o.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const x=u[f];o.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(o.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:r}}var A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M0=`#ifdef USE_ALPHAHASH
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
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
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
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
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
#endif`,I0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F0=`#ifdef USE_IRIDESCENCE
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
#endif`,N0=`#ifdef USE_BUMPMAP
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,X0=`#define PI 3.141592653589793
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
} // validated`,q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cx=`#ifdef USE_GRADIENTMAP
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
}`,hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fx=`uniform bool receiveShadow;
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
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
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
#endif`,_x=`uniform sampler2D dfgLUT;
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
}`,bx=`
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ix=`#if defined( USE_POINTS_UV )
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
#endif`,Lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
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
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
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
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rv=`float getShadowMask() {
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
}`,av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lv=`#ifdef USE_SKINNING
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
#endif`,cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hv=`#ifdef USE_SKINNING
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
#endif`,uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mv=`#ifdef USE_TRANSMISSION
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
#endif`,gv=`#ifdef USE_TRANSMISSION
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
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Av=`uniform sampler2D t2D;
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`#include <common>
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
}`,Tv=`#if DEPTH_PACKING == 3200
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
}`,Rv=`#define DISTANCE
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
}`,Bv=`#define DISTANCE
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
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`uniform float scale;
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
}`,Dv=`uniform vec3 diffuse;
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
}`,Fv=`#include <common>
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Uv=`#define LAMBERT
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
}`,Ov=`#define LAMBERT
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
}`,kv=`#define MATCAP
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
}`,Gv=`#define MATCAP
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
}`,zv=`#define NORMAL
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
}`,Hv=`#define NORMAL
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
}`,Vv=`#define PHONG
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
}`,Wv=`#define PHONG
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
}`,Xv=`#define STANDARD
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
}`,qv=`#define STANDARD
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
}`,Jv=`#define TOON
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
}`,Kv=`#define TOON
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
}`,jv=`uniform float size;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,$v=`#include <common>
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
}`,Zv=`uniform vec3 color;
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
}`,Qv=`uniform float rotation;
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
}`,ey=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:A0,alphahash_pars_fragment:M0,alphamap_fragment:w0,alphamap_pars_fragment:S0,alphatest_fragment:E0,alphatest_pars_fragment:C0,aomap_fragment:T0,aomap_pars_fragment:R0,batching_pars_vertex:B0,batching_vertex:I0,begin_vertex:L0,beginnormal_vertex:P0,bsdfs:D0,iridescence_fragment:F0,bumpmap_pars_fragment:N0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:O0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:G0,color_fragment:z0,color_pars_fragment:H0,color_pars_vertex:V0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:q0,defaultnormal_vertex:J0,displacementmap_pars_vertex:K0,displacementmap_vertex:j0,emissivemap_fragment:Y0,emissivemap_pars_fragment:$0,colorspace_fragment:Z0,colorspace_pars_fragment:Q0,envmap_fragment:ex,envmap_common_pars_fragment:tx,envmap_pars_fragment:ix,envmap_pars_vertex:nx,envmap_physical_pars_fragment:px,envmap_vertex:sx,fog_vertex:ox,fog_pars_vertex:rx,fog_fragment:ax,fog_pars_fragment:lx,gradientmap_pars_fragment:cx,lightmap_pars_fragment:hx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:dx,lights_pars_begin:fx,lights_toon_fragment:mx,lights_toon_pars_fragment:gx,lights_phong_fragment:xx,lights_phong_pars_fragment:vx,lights_physical_fragment:yx,lights_physical_pars_fragment:_x,lights_fragment_begin:bx,lights_fragment_maps:Ax,lights_fragment_end:Mx,logdepthbuf_fragment:wx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:Ex,logdepthbuf_vertex:Cx,map_fragment:Tx,map_pars_fragment:Rx,map_particle_fragment:Bx,map_particle_pars_fragment:Ix,metalnessmap_fragment:Lx,metalnessmap_pars_fragment:Px,morphinstance_vertex:Dx,morphcolor_vertex:Fx,morphnormal_vertex:Nx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Ox,normal_fragment_begin:kx,normal_fragment_maps:Gx,normal_pars_fragment:zx,normal_pars_vertex:Hx,normal_vertex:Vx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:qx,clearcoat_pars_fragment:Jx,iridescence_pars_fragment:Kx,opaque_fragment:jx,packing:Yx,premultiplied_alpha_fragment:$x,project_vertex:Zx,dithering_fragment:Qx,dithering_pars_fragment:ev,roughnessmap_fragment:tv,roughnessmap_pars_fragment:iv,shadowmap_pars_fragment:nv,shadowmap_pars_vertex:sv,shadowmap_vertex:ov,shadowmask_pars_fragment:rv,skinbase_vertex:av,skinning_pars_vertex:lv,skinning_vertex:cv,skinnormal_vertex:hv,specularmap_fragment:uv,specularmap_pars_fragment:dv,tonemapping_fragment:fv,tonemapping_pars_fragment:pv,transmission_fragment:mv,transmission_pars_fragment:gv,uv_pars_fragment:xv,uv_pars_vertex:vv,uv_vertex:yv,worldpos_vertex:_v,background_vert:bv,background_frag:Av,backgroundCube_vert:Mv,backgroundCube_frag:wv,cube_vert:Sv,cube_frag:Ev,depth_vert:Cv,depth_frag:Tv,distanceRGBA_vert:Rv,distanceRGBA_frag:Bv,equirect_vert:Iv,equirect_frag:Lv,linedashed_vert:Pv,linedashed_frag:Dv,meshbasic_vert:Fv,meshbasic_frag:Nv,meshlambert_vert:Uv,meshlambert_frag:Ov,meshmatcap_vert:kv,meshmatcap_frag:Gv,meshnormal_vert:zv,meshnormal_frag:Hv,meshphong_vert:Vv,meshphong_frag:Wv,meshphysical_vert:Xv,meshphysical_frag:qv,meshtoon_vert:Jv,meshtoon_frag:Kv,points_vert:jv,points_frag:Yv,shadow_vert:$v,shadow_frag:Zv,sprite_vert:Qv,sprite_frag:ey},he={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},zi={basic:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new _e(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:$t([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:$t([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new _e(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:$t([he.points,he.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:$t([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:$t([he.common,he.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:$t([he.sprite,he.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:$t([he.common,he.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:$t([he.lights,he.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};zi.physical={uniforms:$t([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Wr={r:0,b:0,g:0},hs=new mi,ty=new ke;function iy(o,e,t,i,n,s,r){const a=new _e(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b)),b}function x(_){let b=!1;const C=m(_);C===null?p(a,l):C&&C.isColor&&(p(C,1),b=!0);const M=o.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(o.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function g(_,b){const C=m(b);C&&(C.isCubeTexture||C.mapping===Pa)?(h===void 0&&(h=new dt(new jn(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:ao(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),hs.copy(b.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ty.makeRotationFromEuler(hs)),h.material.toneMapped=tt.getTransfer(C.colorSpace)!==at,(u!==C||d!==C.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,f=o.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new dt(new rr(2,2),new Ht({name:"BackgroundMaterial",uniforms:ao(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=tt.getTransfer(C.colorSpace)!==at,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,f=o.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,b){_.getRGB(Wr,Zf(o)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,b,r)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:g,dispose:v}}function ny(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,r=!1;function a(A,P,U,D,z){let G=!1;const k=u(D,U,P);s!==k&&(s=k,c(s.object)),G=f(A,D,U,z),G&&m(A,D,U,z),z!==null&&e.update(z,o.ELEMENT_ARRAY_BUFFER),(G||r)&&(r=!1,b(A,P,U,D),z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return o.createVertexArray()}function c(A){return o.bindVertexArray(A)}function h(A){return o.deleteVertexArray(A)}function u(A,P,U){const D=U.wireframe===!0;let z=i[A.id];z===void 0&&(z={},i[A.id]=z);let G=z[P.id];G===void 0&&(G={},z[P.id]=G);let k=G[D];return k===void 0&&(k=d(l()),G[D]=k),k}function d(A){const P=[],U=[],D=[];for(let z=0;z<t;z++)P[z]=0,U[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:D,object:A,attributes:{},index:null}}function f(A,P,U,D){const z=s.attributes,G=P.attributes;let k=0;const j=U.getAttributes();for(const W in j)if(j[W].location>=0){const ne=z[W];let me=G[W];if(me===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(me=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(me=A.instanceColor)),ne===void 0||ne.attribute!==me||me&&ne.data!==me.data)return!0;k++}return s.attributesNum!==k||s.index!==D}function m(A,P,U,D){const z={},G=P.attributes;let k=0;const j=U.getAttributes();for(const W in j)if(j[W].location>=0){let ne=G[W];ne===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(ne=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(ne=A.instanceColor));const me={};me.attribute=ne,ne&&ne.data&&(me.data=ne.data),z[W]=me,k++}s.attributes=z,s.attributesNum=k,s.index=D}function x(){const A=s.newAttributes;for(let P=0,U=A.length;P<U;P++)A[P]=0}function g(A){p(A,0)}function p(A,P){const U=s.newAttributes,D=s.enabledAttributes,z=s.attributeDivisors;U[A]=1,D[A]===0&&(o.enableVertexAttribArray(A),D[A]=1),z[A]!==P&&(o.vertexAttribDivisor(A,P),z[A]=P)}function v(){const A=s.newAttributes,P=s.enabledAttributes;for(let U=0,D=P.length;U<D;U++)P[U]!==A[U]&&(o.disableVertexAttribArray(U),P[U]=0)}function _(A,P,U,D,z,G,k){k===!0?o.vertexAttribIPointer(A,P,U,z,G):o.vertexAttribPointer(A,P,U,D,z,G)}function b(A,P,U,D){x();const z=D.attributes,G=U.getAttributes(),k=P.defaultAttributeValues;for(const j in G){const W=G[j];if(W.location>=0){let Y=z[j];if(Y===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(Y=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(Y=A.instanceColor)),Y!==void 0){const ne=Y.normalized,me=Y.itemSize,re=e.get(Y);if(re===void 0)continue;const Qe=re.buffer,st=re.type,rt=re.bytesPerElement,$=st===o.INT||st===o.UNSIGNED_INT||Y.gpuType===sh;if(Y.isInterleavedBufferAttribute){const ee=Y.data,ye=ee.stride,He=Y.offset;if(ee.isInstancedInterleavedBuffer){for(let Re=0;Re<W.locationSize;Re++)p(W.location+Re,ee.meshPerAttribute);A.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Re=0;Re<W.locationSize;Re++)g(W.location+Re);o.bindBuffer(o.ARRAY_BUFFER,Qe);for(let Re=0;Re<W.locationSize;Re++)_(W.location+Re,me/W.locationSize,st,ne,ye*rt,(He+me/W.locationSize*Re)*rt,$)}else{if(Y.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)p(W.location+ee,Y.meshPerAttribute);A.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ee=0;ee<W.locationSize;ee++)g(W.location+ee);o.bindBuffer(o.ARRAY_BUFFER,Qe);for(let ee=0;ee<W.locationSize;ee++)_(W.location+ee,me/W.locationSize,st,ne,me*rt,me/W.locationSize*ee*rt,$)}}else if(k!==void 0){const ne=k[j];if(ne!==void 0)switch(ne.length){case 2:o.vertexAttrib2fv(W.location,ne);break;case 3:o.vertexAttrib3fv(W.location,ne);break;case 4:o.vertexAttrib4fv(W.location,ne);break;default:o.vertexAttrib1fv(W.location,ne)}}}}v()}function C(){L();for(const A in i){const P=i[A];for(const U in P){const D=P[U];for(const z in D)h(D[z].object),delete D[z];delete P[U]}delete i[A]}}function M(A){if(i[A.id]===void 0)return;const P=i[A.id];for(const U in P){const D=P[U];for(const z in D)h(D[z].object),delete D[z];delete P[U]}delete i[A.id]}function T(A){for(const P in i){const U=i[P];if(U[A.id]===void 0)continue;const D=U[A.id];for(const z in D)h(D[z].object),delete D[z];delete U[A.id]}}function L(){S(),r=!0,s!==n&&(s=n,c(s.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function sy(o,e,t){let i;function n(c){i=c}function s(c,h){o.drawArrays(i,c,h),t.update(h,i,1)}function r(c,h,u){u!==0&&(o.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)r(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];t.update(m,i,1)}}this.setMode=n,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oy(o,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){return!(T!==fi&&i.convert(T)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Yi&&i.convert(T)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ei&&!L)}function l(T){if(T==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),m=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),b=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,M=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:C,maxSamples:M}}function ry(o){const e=this;let t=null,i=0,n=!1,s=!1;const r=new _n,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=o.get(u);if(!n||m===null||m.length===0||s&&!g)s?h(null):c();else{const v=s?0:i,_=v*4;let b=p.clippingState||null;l.value=b,b=h(m,d,_,f);for(let C=0;C!==_;++C)b[C]=t[C];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,b=f;_!==x;++_,b+=4)r.copy(u[_]).applyMatrix4(v,a),r.normal.toArray(g,b),g[b+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function ay(o){let e=new WeakMap;function t(r,a){return a===hc?r.mapping=to:a===uc&&(r.mapping=io),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===hc||a===uc)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Ag(l.height);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",n),t(c.texture,r.mapping)}else return null}}return r}function n(r){const a=r.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Hn=4,Yu=[.125,.215,.35,.446,.526,.582],xs=20,ly=256,Po=new Ua,$u=new _e;let Rl=null,Bl=0,Il=0,Ll=!1;const cy=new B;class Zu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){const{size:r=256,position:a=cy}=s;Rl=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rl,Bl,Il),this._renderer.xr.enabled=Ll,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===to||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rl=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Cn,format:fi,colorSpace:Qt,depthBuffer:!1},n=Qu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hy(s)),this._blurMaterial=dy(s,e,t),this._ggxMaterial=uy(s,e,t)}return n}_compileMaterial(e){const t=new dt(new Ut,e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,i,n,s){const l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor($u),u.toneMapping=Wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dt(new jn,new zt({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,p=!0):(g.color.copy($u),p=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):b===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));const C=this._cubeSize;Ws(n,b*C,_>2?C:0,C,C),u.setRenderTarget(n),p&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===to||e.mapping===io;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const s=n?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,Po)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[i];a.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=.05+c*.95,f=u*d,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-Hn?i-m+Hn:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Ws(s,g,p,3*x,2*x),n.setRenderTarget(s),n.render(a,Po),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Ws(e,g,p,3*x,2*x),n.setRenderTarget(e),n.render(a,Po)}_blur(e,t,i,n,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,n,"latitudinal",s),this._halfBlur(r,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[n];u.material=c;const d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*xs-1),x=s/m,g=isFinite(s)?1+Math.floor(h*x):xs;g>xs&&be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xs}`);const p=[];let v=0;for(let T=0;T<xs;++T){const L=T/x,S=Math.exp(-L*L/2);p.push(S),T===0?v+=S:T<g&&(v+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-i;const b=this._sizeLods[n],C=3*b*(n>_-Hn?n-_+Hn:0),M=4*(this._cubeSize-b);Ws(t,C,M,3*b,2*b),l.setRenderTarget(t),l.render(u,Po)}}function hy(o){const e=[],t=[],i=[];let n=o;const s=o-Hn+1+Yu.length;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);let l=1/a;r>o-Hn?l=Yu[r-o+Hn-1]:r===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),_=new Float32Array(g*m*f),b=new Float32Array(p*m*f);for(let M=0;M<f;M++){const T=M%3*2/3-1,L=M>2?0:-1,S=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];v.set(S,x*m*M),_.set(d,g*m*M);const A=[M,M,M,M,M,M];b.set(A,p*m*M)}const C=new Ut;C.setAttribute("position",new Kt(v,x)),C.setAttribute("uv",new Kt(_,g)),C.setAttribute("faceIndex",new Kt(b,p)),i.push(new dt(C,null)),n>Hn&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Qu(o,e,t){const i=new $i(o,e,t);return i.texture.mapping=Pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(o,e,t,i,n){o.viewport.set(e,t,i,n),o.scissor.set(e,t,i,n)}function uy(o,e,t){return new Ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ly,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function dy(o,e,t){const i=new Float32Array(xs),n=new B(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function ed(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function td(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Oa(){return`

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
	`}function fy(o){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hc||l===uc,h=l===to||l===io;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Zu(o)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new Zu(o)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function py(o){const e={};function t(i){if(e[i]!==void 0)return e[i];const n=o.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&tr("WebGLRenderer: "+i+" extension not supported."),n}}}function my(o,e,t,i){const n={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",r),delete n[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],o.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let _=0,b=v.length;_<b;_+=3){const C=v[_+0],M=v[_+1],T=v[_+2];d.push(C,M,M,T,T,C)}}else if(m!==void 0){const v=m.array;x=m.version;for(let _=0,b=v.length/3-1;_<b;_+=3){const C=_+0,M=_+1,T=_+2;d.push(C,M,M,T,T,C)}}else return;const g=new(Jf(d)?$f:Yf)(d,1);g.version=x;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function gy(o,e,t){let i;function n(d){i=d}let s,r;function a(d){s=d.type,r=d.bytesPerElement}function l(d,f){o.drawElements(i,f,s,d*r),t.update(f,i,1)}function c(d,f,m){m!==0&&(o.drawElementsInstanced(i,f,s,d*r,m),t.update(f,i,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,i,1)}function u(d,f,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];t.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xy(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,a){switch(t.calls++,r){case o.TRIANGLES:t.triangles+=a*(s/3);break;case o.LINES:t.lines+=a*(s/2);break;case o.LINE_STRIP:t.lines+=a*(s-1);break;case o.LINE_LOOP:t.lines+=a*s;break;case o.POINTS:t.points+=a*s;break;default:Xe("WebGLInfo: Unknown draw mode:",r);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function vy(o,e,t){const i=new WeakMap,n=new ot;function s(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let A=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var f=A;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let b=0;m===!0&&(b=1),x===!0&&(b=2),g===!0&&(b=3);let C=a.attributes.position.count*b,M=1;C>e.maxTextureSize&&(M=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*M*4*u),L=new Kf(T,C,M,u);L.type=Ei,L.needsUpdate=!0;const S=b*4;for(let P=0;P<u;P++){const U=p[P],D=v[P],z=_[P],G=C*M*4*P;for(let k=0;k<U.count;k++){const j=k*S;m===!0&&(n.fromBufferAttribute(U,k),T[G+j+0]=n.x,T[G+j+1]=n.y,T[G+j+2]=n.z,T[G+j+3]=0),x===!0&&(n.fromBufferAttribute(D,k),T[G+j+4]=n.x,T[G+j+5]=n.y,T[G+j+6]=n.z,T[G+j+7]=0),g===!0&&(n.fromBufferAttribute(z,k),T[G+j+8]=n.x,T[G+j+9]=n.y,T[G+j+10]=n.z,T[G+j+11]=z.itemSize===4?n.w:1)}}d={count:u,texture:L,size:new Te(C,M)},i.set(a,d),a.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(o,"morphTargetBaseInfluence",x),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:s}}function yy(o,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function r(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const pp=new Nt,id=new bh(1,1),mp=new Kf,gp=new rg,xp=new ep,nd=[],sd=[],od=new Float32Array(16),rd=new Float32Array(9),ad=new Float32Array(4);function yo(o,e,t){const i=o[0];if(i<=0||i>0)return o;const n=e*t;let s=nd[n];if(s===void 0&&(s=new Float32Array(n),nd[n]=s),e!==0){i.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function Pt(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function Dt(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function ka(o,e){let t=sd[e];t===void 0&&(t=new Int32Array(e),sd[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function _y(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function by(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;o.uniform2fv(this.addr,e),Dt(t,e)}}function Ay(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;o.uniform3fv(this.addr,e),Dt(t,e)}}function My(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;o.uniform4fv(this.addr,e),Dt(t,e)}}function wy(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;ad.set(i),o.uniformMatrix2fv(this.addr,!1,ad),Dt(t,i)}}function Sy(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;rd.set(i),o.uniformMatrix3fv(this.addr,!1,rd),Dt(t,i)}}function Ey(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;od.set(i),o.uniformMatrix4fv(this.addr,!1,od),Dt(t,i)}}function Cy(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Ty(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;o.uniform2iv(this.addr,e),Dt(t,e)}}function Ry(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;o.uniform3iv(this.addr,e),Dt(t,e)}}function By(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;o.uniform4iv(this.addr,e),Dt(t,e)}}function Iy(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Ly(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;o.uniform2uiv(this.addr,e),Dt(t,e)}}function Py(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;o.uniform3uiv(this.addr,e),Dt(t,e)}}function Dy(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;o.uniform4uiv(this.addr,e),Dt(t,e)}}function Fy(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n);let s;this.type===o.SAMPLER_2D_SHADOW?(id.compareFunction=qf,s=id):s=pp,t.setTexture2D(e||s,n)}function Ny(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||gp,n)}function Uy(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||xp,n)}function Oy(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||mp,n)}function ky(o){switch(o){case 5126:return _y;case 35664:return by;case 35665:return Ay;case 35666:return My;case 35674:return wy;case 35675:return Sy;case 35676:return Ey;case 5124:case 35670:return Cy;case 35667:case 35671:return Ty;case 35668:case 35672:return Ry;case 35669:case 35673:return By;case 5125:return Iy;case 36294:return Ly;case 36295:return Py;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Oy}}function Gy(o,e){o.uniform1fv(this.addr,e)}function zy(o,e){const t=yo(e,this.size,2);o.uniform2fv(this.addr,t)}function Hy(o,e){const t=yo(e,this.size,3);o.uniform3fv(this.addr,t)}function Vy(o,e){const t=yo(e,this.size,4);o.uniform4fv(this.addr,t)}function Wy(o,e){const t=yo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Xy(o,e){const t=yo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function qy(o,e){const t=yo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Jy(o,e){o.uniform1iv(this.addr,e)}function Ky(o,e){o.uniform2iv(this.addr,e)}function jy(o,e){o.uniform3iv(this.addr,e)}function Yy(o,e){o.uniform4iv(this.addr,e)}function $y(o,e){o.uniform1uiv(this.addr,e)}function Zy(o,e){o.uniform2uiv(this.addr,e)}function Qy(o,e){o.uniform3uiv(this.addr,e)}function e_(o,e){o.uniform4uiv(this.addr,e)}function t_(o,e,t){const i=this.cache,n=e.length,s=ka(t,n);Pt(i,s)||(o.uniform1iv(this.addr,s),Dt(i,s));for(let r=0;r!==n;++r)t.setTexture2D(e[r]||pp,s[r])}function i_(o,e,t){const i=this.cache,n=e.length,s=ka(t,n);Pt(i,s)||(o.uniform1iv(this.addr,s),Dt(i,s));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||gp,s[r])}function n_(o,e,t){const i=this.cache,n=e.length,s=ka(t,n);Pt(i,s)||(o.uniform1iv(this.addr,s),Dt(i,s));for(let r=0;r!==n;++r)t.setTextureCube(e[r]||xp,s[r])}function s_(o,e,t){const i=this.cache,n=e.length,s=ka(t,n);Pt(i,s)||(o.uniform1iv(this.addr,s),Dt(i,s));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||mp,s[r])}function o_(o){switch(o){case 5126:return Gy;case 35664:return zy;case 35665:return Hy;case 35666:return Vy;case 35674:return Wy;case 35675:return Xy;case 35676:return qy;case 5124:case 35670:return Jy;case 35667:case 35671:return Ky;case 35668:case 35672:return jy;case 35669:case 35673:return Yy;case 5125:return $y;case 36294:return Zy;case 36295:return Qy;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return s_}}class r_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ky(t.type)}}class a_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o_(t.type)}}class l_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const Pl=/(\w+)(\])?(\[|\.)?/g;function ld(o,e){o.seq.push(e),o.map[e.id]=e}function c_(o,e,t){const i=o.name,n=i.length;for(Pl.lastIndex=0;;){const s=Pl.exec(i),r=Pl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===n){ld(t,c===void 0?new r_(a,o,e):new a_(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new l_(a),ld(t,u)),t=u}}}class da{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),r=e.getUniformLocation(t,s.name);c_(s,r,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.id in t&&i.push(r)}return i}}function cd(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const h_=37297;let u_=0;function d_(o,e){const t=o.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=n;r<s;r++){const a=r+1;i.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return i.join(`
`)}const hd=new Ve;function f_(o){tt._getMatrix(hd,tt.workingColorSpace,o);const e=`mat3( ${hd.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(o)){case ba:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function ud(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=(o.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+d_(o.getShaderSource(e),a)}else return s}function p_(o,e){const t=f_(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function m_(o,e){let t;switch(e){case If:t="Linear";break;case Lf:t="Reinhard";break;case Pf:t="Cineon";break;case nh:t="ACESFilmic";break;case Ff:t="AgX";break;case Nf:t="Neutral";break;case Df:t="Custom";break;default:be("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xr=new B;function g_(){tt.getLuminanceCoefficients(Xr);const o=Xr.x.toFixed(4),e=Xr.y.toFixed(4),t=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x_(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function v_(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function y_(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=o.getActiveAttrib(e,n),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function zo(o){return o!==""}function dd(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fd(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const __=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(o){return o.replace(__,A_)}const b_=new Map;function A_(o,e){let t=We[e];if(t===void 0){const i=b_.get(e);if(i!==void 0)t=We[i],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wc(t)}const M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(o){return o.replace(M_,w_)}function w_(o,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function md(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S_(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ya?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function E_(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case to:case io:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C_(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function T_(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ih:e="ENVMAP_BLENDING_MULTIPLY";break;case Am:e="ENVMAP_BLENDING_MIX";break;case Mm:e="ENVMAP_BLENDING_ADD";break}return e}function R_(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function B_(o,e,t,i){const n=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=S_(t),c=E_(t),h=C_(t),u=T_(t),d=R_(t),f=x_(t),m=v_(s),x=n.createProgram();let g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(zo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(zo).join(`
`),p.length>0&&(p+=`
`)):(g=[md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),p=[md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?We.tonemapping_pars_fragment:"",t.toneMapping!==Wn?m_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,p_("linearToOutputTexel",t.outputColorSpace),g_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),r=Wc(r),r=dd(r,t),r=fd(r,t),a=Wc(a),a=dd(a,t),a=fd(a,t),r=pd(r),a=pd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+g+r,b=v+p+a,C=cd(n,n.VERTEX_SHADER,_),M=cd(n,n.FRAGMENT_SHADER,b);n.attachShader(x,C),n.attachShader(x,M),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function T(P){if(o.debug.checkShaderErrors){const U=n.getProgramInfoLog(x)||"",D=n.getShaderInfoLog(C)||"",z=n.getShaderInfoLog(M)||"",G=U.trim(),k=D.trim(),j=z.trim();let W=!0,Y=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(n,x,C,M);else{const ne=ud(n,C,"vertex"),me=ud(n,M,"fragment");Xe("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+ne+`
`+me)}else G!==""?be("WebGLProgram: Program Info Log:",G):(k===""||j==="")&&(Y=!1);Y&&(P.diagnostics={runnable:W,programLog:G,vertexShader:{log:k,prefix:g},fragmentShader:{log:j,prefix:p}})}n.deleteShader(C),n.deleteShader(M),L=new da(n,x),S=y_(n,x)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=n.getProgramParameter(x,h_)),A},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=M,this}let I_=0;class L_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new P_(e),t.set(e,i)),i}}class P_{constructor(e){this.id=I_++,this.code=e,this.usedTimes=0}}function D_(o,e,t,i,n,s,r){const a=new ph,l=new L_,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,A,P,U,D){const z=U.fog,G=D.geometry,k=S.isMeshStandardMaterial?U.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),W=j&&j.mapping===Pa?j.image.height:null,Y=m[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&be("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ne=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,me=ne!==void 0?ne.length:0;let re=0;G.morphAttributes.position!==void 0&&(re=1),G.morphAttributes.normal!==void 0&&(re=2),G.morphAttributes.color!==void 0&&(re=3);let Qe,st,rt,$;if(Y){const ht=zi[Y];Qe=ht.vertexShader,st=ht.fragmentShader}else Qe=S.vertexShader,st=S.fragmentShader,l.update(S),rt=l.getVertexShaderID(S),$=l.getFragmentShaderID(S);const ee=o.getRenderTarget(),ye=o.state.buffers.depth.getReversed(),He=D.isInstancedMesh===!0,Re=D.isBatchedMesh===!0,je=!!S.map,Ot=!!S.matcap,qe=!!j,bt=!!S.aoMap,F=!!S.lightMap,Ye=!!S.bumpMap,$e=!!S.normalMap,gt=!!S.displacementMap,Se=!!S.emissiveMap,Mt=!!S.metalnessMap,Ie=!!S.roughnessMap,ze=S.anisotropy>0,I=S.clearcoat>0,E=S.dispersion>0,X=S.iridescence>0,Z=S.sheen>0,te=S.transmission>0,K=ze&&!!S.anisotropyMap,Ce=I&&!!S.clearcoatMap,ue=I&&!!S.clearcoatNormalMap,Le=I&&!!S.clearcoatRoughnessMap,Ee=X&&!!S.iridescenceMap,ie=X&&!!S.iridescenceThicknessMap,ae=Z&&!!S.sheenColorMap,Ne=Z&&!!S.sheenRoughnessMap,De=!!S.specularMap,ge=!!S.specularColorMap,Oe=!!S.specularIntensityMap,O=te&&!!S.transmissionMap,de=te&&!!S.thicknessMap,le=!!S.gradientMap,ce=!!S.alphaMap,se=S.alphaTest>0,Q=!!S.alphaHash,Ae=!!S.extensions;let Ge=Wn;S.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ge=o.toneMapping);const vt={shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:Qe,fragmentShader:st,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Re,batchingColor:Re&&D._colorsTexture!==null,instancing:He,instancingColor:He&&D.instanceColor!==null,instancingMorph:He&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?o.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Qt,alphaToCoverage:!!S.alphaToCoverage,map:je,matcap:Ot,envMap:qe,envMapMode:qe&&j.mapping,envMapCubeUVHeight:W,aoMap:bt,lightMap:F,bumpMap:Ye,normalMap:$e,displacementMap:d&&gt,emissiveMap:Se,normalMapObjectSpace:$e&&S.normalMapType===Rm,normalMapTangentSpace:$e&&S.normalMapType===Da,metalnessMap:Mt,roughnessMap:Ie,anisotropy:ze,anisotropyMap:K,clearcoat:I,clearcoatMap:Ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:Le,dispersion:E,iridescence:X,iridescenceMap:Ee,iridescenceThicknessMap:ie,sheen:Z,sheenColorMap:ae,sheenRoughnessMap:Ne,specularMap:De,specularColorMap:ge,specularIntensityMap:Oe,transmission:te,transmissionMap:O,thicknessMap:de,gradientMap:le,opaque:S.transparent===!1&&S.blending===Ys&&S.alphaToCoverage===!1,alphaMap:ce,alphaTest:se,alphaHash:Q,combine:S.combine,mapUv:je&&x(S.map.channel),aoMapUv:bt&&x(S.aoMap.channel),lightMapUv:F&&x(S.lightMap.channel),bumpMapUv:Ye&&x(S.bumpMap.channel),normalMapUv:$e&&x(S.normalMap.channel),displacementMapUv:gt&&x(S.displacementMap.channel),emissiveMapUv:Se&&x(S.emissiveMap.channel),metalnessMapUv:Mt&&x(S.metalnessMap.channel),roughnessMapUv:Ie&&x(S.roughnessMap.channel),anisotropyMapUv:K&&x(S.anisotropyMap.channel),clearcoatMapUv:Ce&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(S.sheenRoughnessMap.channel),specularMapUv:De&&x(S.specularMap.channel),specularColorMapUv:ge&&x(S.specularColorMap.channel),specularIntensityMapUv:Oe&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:de&&x(S.thicknessMap.channel),alphaMapUv:ce&&x(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&($e||ze),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(je||ce),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ge,decodeVideoTexture:je&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===at,decodeVideoTextureEmissive:Se&&S.emissiveMap.isVideoTexture===!0&&tt.getTransfer(S.emissiveMap.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===li,flipSided:S.side===ni,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ae&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&S.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function p(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(A,S),_(A,S),A.push(o.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),A.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function b(S){const A=m[S.type];let P;if(A){const U=zi[A];P=_s.clone(U.uniforms)}else P=S.uniforms;return P}function C(S,A){let P;for(let U=0,D=h.length;U<D;U++){const z=h[U];if(z.cacheKey===A){P=z,++P.usedTimes;break}}return P===void 0&&(P=new B_(o,A,S,s),h.push(P)),P}function M(S){if(--S.usedTimes===0){const A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:b,acquireProgram:C,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:L}}function F_(){let o=new WeakMap;function e(r){return o.has(r)}function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function i(r){o.delete(r)}function n(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function N_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function gd(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function xd(){const o=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function r(u,d,f,m,x,g){let p=o[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},o[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,d,f,m,x,g){const p=r(u,d,f,m,x,g);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,m,x,g){const p=r(u,d,f,m,x,g);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||N_),i.length>1&&i.sort(d||gd),n.length>1&&n.sort(d||gd)}function h(){for(let u=e,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function U_(){let o=new WeakMap;function e(i,n){const s=o.get(i);let r;return s===void 0?(r=new xd,o.set(i,[r])):n>=s.length?(r=new xd,s.push(r)):r=s[n],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function O_(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new _e};break;case"SpotLight":t={position:new B,direction:new B,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new B,halfWidth:new B,halfHeight:new B};break}return o[e.id]=t,t}}}function k_(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let G_=0;function z_(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function H_(o){const e=new O_,t=k_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const n=new B,s=new ke,r=new ke;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,_=0,b=0,C=0,M=0,T=0;c.sort(z_);for(let S=0,A=c.length;S<A;S++){const P=c[S],U=P.color,D=P.intensity,z=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*D,u+=U.g*D,d+=U.b*D;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],D);T++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,W=t.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=P.shadow.matrix,v++}i.directional[f]=k,f++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(U).multiplyScalar(D),k.distance=z,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[x]=k;const j=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,j.updateMatrices(P),P.castShadow&&M++),i.spotLightMatrix[x]=j.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=G,b++}x++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(U).multiplyScalar(D),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=k,g++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const j=P.shadow,W=t.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,i.pointShadow[m]=W,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=P.shadow.matrix,_++}i.point[m]=k,m++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(D),k.groundColor.copy(P.groundColor).multiplyScalar(D),i.hemi[p]=k,p++}}g>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==_||L.numSpotShadows!==b||L.numSpotMaps!==C||L.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=b+C-M,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=T,L.directionalLength=f,L.pointLength=m,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=_,L.numSpotShadows=b,L.numSpotMaps=C,L.numLightProbes=T,i.version=G_++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const _=c[p];if(_.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),u++}else if(_.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const b=i.rectArea[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),r.identity(),s.copy(_.matrixWorld),s.premultiply(g),r.extractRotation(s),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),m++}else if(_.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function vd(o){const e=new H_(o),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function r(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function V_(o){let e=new WeakMap;function t(n,s=0){const r=e.get(n);let a;return r===void 0?(a=new vd(o),e.set(n,[a])):s>=r.length?(a=new vd(o),r.push(a)):a=r[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const W_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X_=`uniform sampler2D shadow_pass;
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
}`;function q_(o,e,t){let i=new yh;const n=new Te,s=new Te,r=new ot,a=new Og({depthPacking:Tm}),l=new kg,c={},h=t.maxTextureSize,u={[En]:ni,[ni]:En,[li]:li},d=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:W_,fragmentShader:X_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ut;m.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new dt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ya;let p=this.type;this.render=function(M,T,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const S=o.getRenderTarget(),A=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),U=o.state;U.setBlending(kt),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=p!==Ui&&this.type===Ui,z=p===Ui&&this.type!==Ui;for(let G=0,k=M.length;G<k;G++){const j=M[G],W=j.shadow;if(W===void 0){be("WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const Y=W.getFrameExtents();if(n.multiply(Y),s.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/Y.x),n.x=s.x*Y.x,W.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/Y.y),n.y=s.y*Y.y,W.mapSize.y=s.y)),W.map===null||D===!0||z===!0){const me=this.type!==Ui?{minFilter:Vt,magFilter:Vt}:{};W.map!==null&&W.map.dispose(),W.map=new $i(n.x,n.y,me),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const ne=W.getViewportCount();for(let me=0;me<ne;me++){const re=W.getViewport(me);r.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),U.viewport(r),W.updateMatrices(j,me),i=W.getFrustum(),b(T,L,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Ui&&v(W,L),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,o.setRenderTarget(S,A,P)};function v(M,T){const L=e.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new $i(n.x,n.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(T,null,L,d,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(T,null,L,f,x,null)}function _(M,T,L,S){let A=null;const P=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)A=P;else if(A=L.isPointLight===!0?l:a,o.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const U=A.uuid,D=T.uuid;let z=c[U];z===void 0&&(z={},c[U]=z);let G=z[D];G===void 0&&(G=A.clone(),z[D]=G,T.addEventListener("dispose",C)),A=G}if(A.visible=T.visible,A.wireframe=T.wireframe,S===Ui?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:u[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,L.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const U=o.properties.get(A);U.light=L}return A}function b(M,T,L,S,A){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===Ui)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const D=e.update(M),z=M.material;if(Array.isArray(z)){const G=D.groups;for(let k=0,j=G.length;k<j;k++){const W=G[k],Y=z[W.materialIndex];if(Y&&Y.visible){const ne=_(M,Y,S,A);M.onBeforeShadow(o,M,T,L,D,ne,W),o.renderBufferDirect(L,null,D,ne,M,W),M.onAfterShadow(o,M,T,L,D,ne,W)}}}else if(z.visible){const G=_(M,z,S,A);M.onBeforeShadow(o,M,T,L,D,G,null),o.renderBufferDirect(L,null,D,G,M,null),M.onAfterShadow(o,M,T,L,D,G,null)}}const U=M.children;for(let D=0,z=U.length;D<z;D++)b(U[D],T,L,S,A)}function C(M){M.target.removeEventListener("dispose",C);for(const L in c){const S=c[L],A=M.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}const J_={[nc]:sc,[oc]:lc,[rc]:cc,[eo]:ac,[sc]:nc,[lc]:oc,[cc]:rc,[ac]:eo};function K_(o,e){function t(){let O=!1;const de=new ot;let le=null;const ce=new ot(0,0,0,0);return{setMask:function(se){le!==se&&!O&&(o.colorMask(se,se,se,se),le=se)},setLocked:function(se){O=se},setClear:function(se,Q,Ae,Ge,vt){vt===!0&&(se*=Ge,Q*=Ge,Ae*=Ge),de.set(se,Q,Ae,Ge),ce.equals(de)===!1&&(o.clearColor(se,Q,Ae,Ge),ce.copy(de))},reset:function(){O=!1,le=null,ce.set(-1,0,0,0)}}}function i(){let O=!1,de=!1,le=null,ce=null,se=null;return{setReversed:function(Q){if(de!==Q){const Ae=e.get("EXT_clip_control");Q?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),de=Q;const Ge=se;se=null,this.setClear(Ge)}},getReversed:function(){return de},setTest:function(Q){Q?ee(o.DEPTH_TEST):ye(o.DEPTH_TEST)},setMask:function(Q){le!==Q&&!O&&(o.depthMask(Q),le=Q)},setFunc:function(Q){if(de&&(Q=J_[Q]),ce!==Q){switch(Q){case nc:o.depthFunc(o.NEVER);break;case sc:o.depthFunc(o.ALWAYS);break;case oc:o.depthFunc(o.LESS);break;case eo:o.depthFunc(o.LEQUAL);break;case rc:o.depthFunc(o.EQUAL);break;case ac:o.depthFunc(o.GEQUAL);break;case lc:o.depthFunc(o.GREATER);break;case cc:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ce=Q}},setLocked:function(Q){O=Q},setClear:function(Q){se!==Q&&(de&&(Q=1-Q),o.clearDepth(Q),se=Q)},reset:function(){O=!1,le=null,ce=null,se=null,de=!1}}}function n(){let O=!1,de=null,le=null,ce=null,se=null,Q=null,Ae=null,Ge=null,vt=null;return{setTest:function(ht){O||(ht?ee(o.STENCIL_TEST):ye(o.STENCIL_TEST))},setMask:function(ht){de!==ht&&!O&&(o.stencilMask(ht),de=ht)},setFunc:function(ht,Pi,xi){(le!==ht||ce!==Pi||se!==xi)&&(o.stencilFunc(ht,Pi,xi),le=ht,ce=Pi,se=xi)},setOp:function(ht,Pi,xi){(Q!==ht||Ae!==Pi||Ge!==xi)&&(o.stencilOp(ht,Pi,xi),Q=ht,Ae=Pi,Ge=xi)},setLocked:function(ht){O=ht},setClear:function(ht){vt!==ht&&(o.clearStencil(ht),vt=ht)},reset:function(){O=!1,de=null,le=null,ce=null,se=null,Q=null,Ae=null,Ge=null,vt=null}}}const s=new t,r=new i,a=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,_=null,b=null,C=null,M=null,T=new _e(0,0,0),L=0,S=!1,A=null,P=null,U=null,D=null,z=null;const G=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,j=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=j>=2);let Y=null,ne={};const me=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),Qe=new ot().fromArray(me),st=new ot().fromArray(re);function rt(O,de,le,ce){const se=new Uint8Array(4),Q=o.createTexture();o.bindTexture(O,Q),o.texParameteri(O,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(O,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ae=0;Ae<le;Ae++)O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY?o.texImage3D(de,0,o.RGBA,1,1,ce,0,o.RGBA,o.UNSIGNED_BYTE,se):o.texImage2D(de+Ae,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,se);return Q}const $={};$[o.TEXTURE_2D]=rt(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=rt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=rt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=rt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ee(o.DEPTH_TEST),r.setFunc(eo),Ye(!1),$e(Qh),ee(o.CULL_FACE),bt(kt);function ee(O){h[O]!==!0&&(o.enable(O),h[O]=!0)}function ye(O){h[O]!==!1&&(o.disable(O),h[O]=!1)}function He(O,de){return u[O]!==de?(o.bindFramebuffer(O,de),u[O]=de,O===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=de),O===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=de),!0):!1}function Re(O,de){let le=f,ce=!1;if(O){le=d.get(de),le===void 0&&(le=[],d.set(de,le));const se=O.textures;if(le.length!==se.length||le[0]!==o.COLOR_ATTACHMENT0){for(let Q=0,Ae=se.length;Q<Ae;Q++)le[Q]=o.COLOR_ATTACHMENT0+Q;le.length=se.length,ce=!0}}else le[0]!==o.BACK&&(le[0]=o.BACK,ce=!0);ce&&o.drawBuffers(le)}function je(O){return m!==O?(o.useProgram(O),m=O,!0):!1}const Ot={[An]:o.FUNC_ADD,[lm]:o.FUNC_SUBTRACT,[cm]:o.FUNC_REVERSE_SUBTRACT};Ot[hm]=o.MIN,Ot[um]=o.MAX;const qe={[ec]:o.ZERO,[dm]:o.ONE,[fm]:o.SRC_COLOR,[tc]:o.SRC_ALPHA,[xm]:o.SRC_ALPHA_SATURATE,[Bf]:o.DST_COLOR,[Rf]:o.DST_ALPHA,[pm]:o.ONE_MINUS_SRC_COLOR,[ic]:o.ONE_MINUS_SRC_ALPHA,[gm]:o.ONE_MINUS_DST_COLOR,[mm]:o.ONE_MINUS_DST_ALPHA,[vm]:o.CONSTANT_COLOR,[ym]:o.ONE_MINUS_CONSTANT_COLOR,[_m]:o.CONSTANT_ALPHA,[bm]:o.ONE_MINUS_CONSTANT_ALPHA};function bt(O,de,le,ce,se,Q,Ae,Ge,vt,ht){if(O===kt){x===!0&&(ye(o.BLEND),x=!1);return}if(x===!1&&(ee(o.BLEND),x=!0),O!==Ql){if(O!==g||ht!==S){if((p!==An||b!==An)&&(o.blendEquation(o.FUNC_ADD),p=An,b=An),ht)switch(O){case Ys:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zl:o.blendFunc(o.ONE,o.ONE);break;case eu:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case tu:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Xe("WebGLState: Invalid blending: ",O);break}else switch(O){case Ys:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case eu:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tu:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",O);break}v=null,_=null,C=null,M=null,T.set(0,0,0),L=0,g=O,S=ht}return}se=se||de,Q=Q||le,Ae=Ae||ce,(de!==p||se!==b)&&(o.blendEquationSeparate(Ot[de],Ot[se]),p=de,b=se),(le!==v||ce!==_||Q!==C||Ae!==M)&&(o.blendFuncSeparate(qe[le],qe[ce],qe[Q],qe[Ae]),v=le,_=ce,C=Q,M=Ae),(Ge.equals(T)===!1||vt!==L)&&(o.blendColor(Ge.r,Ge.g,Ge.b,vt),T.copy(Ge),L=vt),g=O,S=!1}function F(O,de){O.side===li?ye(o.CULL_FACE):ee(o.CULL_FACE);let le=O.side===ni;de&&(le=!le),Ye(le),O.blending===Ys&&O.transparent===!1?bt(kt):bt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);const ce=O.stencilWrite;a.setTest(ce),ce&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Se(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ee(o.SAMPLE_ALPHA_TO_COVERAGE):ye(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(O){A!==O&&(O?o.frontFace(o.CW):o.frontFace(o.CCW),A=O)}function $e(O){O!==om?(ee(o.CULL_FACE),O!==P&&(O===Qh?o.cullFace(o.BACK):O===rm?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ye(o.CULL_FACE),P=O}function gt(O){O!==U&&(k&&o.lineWidth(O),U=O)}function Se(O,de,le){O?(ee(o.POLYGON_OFFSET_FILL),(D!==de||z!==le)&&(o.polygonOffset(de,le),D=de,z=le)):ye(o.POLYGON_OFFSET_FILL)}function Mt(O){O?ee(o.SCISSOR_TEST):ye(o.SCISSOR_TEST)}function Ie(O){O===void 0&&(O=o.TEXTURE0+G-1),Y!==O&&(o.activeTexture(O),Y=O)}function ze(O,de,le){le===void 0&&(Y===null?le=o.TEXTURE0+G-1:le=Y);let ce=ne[le];ce===void 0&&(ce={type:void 0,texture:void 0},ne[le]=ce),(ce.type!==O||ce.texture!==de)&&(Y!==le&&(o.activeTexture(le),Y=le),o.bindTexture(O,de||$[O]),ce.type=O,ce.texture=de)}function I(){const O=ne[Y];O!==void 0&&O.type!==void 0&&(o.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function X(){try{o.compressedTexImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function Z(){try{o.texSubImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function te(){try{o.texSubImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function K(){try{o.compressedTexSubImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function Ce(){try{o.compressedTexSubImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function ue(){try{o.texStorage2D(...arguments)}catch(O){O("WebGLState:",O)}}function Le(){try{o.texStorage3D(...arguments)}catch(O){O("WebGLState:",O)}}function Ee(){try{o.texImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function ie(){try{o.texImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function ae(O){Qe.equals(O)===!1&&(o.scissor(O.x,O.y,O.z,O.w),Qe.copy(O))}function Ne(O){st.equals(O)===!1&&(o.viewport(O.x,O.y,O.z,O.w),st.copy(O))}function De(O,de){let le=c.get(de);le===void 0&&(le=new WeakMap,c.set(de,le));let ce=le.get(O);ce===void 0&&(ce=o.getUniformBlockIndex(de,O.name),le.set(O,ce))}function ge(O,de){const ce=c.get(de).get(O);l.get(de)!==ce&&(o.uniformBlockBinding(de,ce,O.__bindingPointIndex),l.set(de,ce))}function Oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},Y=null,ne={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,_=null,b=null,C=null,M=null,T=new _e(0,0,0),L=0,S=!1,A=null,P=null,U=null,D=null,z=null,Qe.set(0,0,o.canvas.width,o.canvas.height),st.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ee,disable:ye,bindFramebuffer:He,drawBuffers:Re,useProgram:je,setBlending:bt,setMaterial:F,setFlipSided:Ye,setCullFace:$e,setLineWidth:gt,setPolygonOffset:Se,setScissorTest:Mt,activeTexture:Ie,bindTexture:ze,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:Ee,texImage3D:ie,updateUBOMapping:De,uniformBlockBinding:ge,texStorage2D:ue,texStorage3D:Le,texSubImage2D:Z,texSubImage3D:te,compressedTexSubImage2D:K,compressedTexSubImage3D:Ce,scissor:ae,viewport:Ne,reset:Oe}}function j_(o,e,t,i,n,s,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,E){return f?new OffscreenCanvas(I,E):er("canvas")}function x(I,E,X){let Z=1;const te=ze(I);if((te.width>X||te.height>X)&&(Z=X/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const K=Math.floor(Z*te.width),Ce=Math.floor(Z*te.height);u===void 0&&(u=m(K,Ce));const ue=E?m(K,Ce):u;return ue.width=K,ue.height=Ce,ue.getContext("2d").drawImage(I,0,0,K,Ce),be("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Ce+")."),ue}else return"data"in I&&be("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){o.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function _(I,E,X,Z,te=!1){if(I!==null){if(o[I]!==void 0)return o[I];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=E;if(E===o.RED&&(X===o.FLOAT&&(K=o.R32F),X===o.HALF_FLOAT&&(K=o.R16F),X===o.UNSIGNED_BYTE&&(K=o.R8)),E===o.RED_INTEGER&&(X===o.UNSIGNED_BYTE&&(K=o.R8UI),X===o.UNSIGNED_SHORT&&(K=o.R16UI),X===o.UNSIGNED_INT&&(K=o.R32UI),X===o.BYTE&&(K=o.R8I),X===o.SHORT&&(K=o.R16I),X===o.INT&&(K=o.R32I)),E===o.RG&&(X===o.FLOAT&&(K=o.RG32F),X===o.HALF_FLOAT&&(K=o.RG16F),X===o.UNSIGNED_BYTE&&(K=o.RG8)),E===o.RG_INTEGER&&(X===o.UNSIGNED_BYTE&&(K=o.RG8UI),X===o.UNSIGNED_SHORT&&(K=o.RG16UI),X===o.UNSIGNED_INT&&(K=o.RG32UI),X===o.BYTE&&(K=o.RG8I),X===o.SHORT&&(K=o.RG16I),X===o.INT&&(K=o.RG32I)),E===o.RGB_INTEGER&&(X===o.UNSIGNED_BYTE&&(K=o.RGB8UI),X===o.UNSIGNED_SHORT&&(K=o.RGB16UI),X===o.UNSIGNED_INT&&(K=o.RGB32UI),X===o.BYTE&&(K=o.RGB8I),X===o.SHORT&&(K=o.RGB16I),X===o.INT&&(K=o.RGB32I)),E===o.RGBA_INTEGER&&(X===o.UNSIGNED_BYTE&&(K=o.RGBA8UI),X===o.UNSIGNED_SHORT&&(K=o.RGBA16UI),X===o.UNSIGNED_INT&&(K=o.RGBA32UI),X===o.BYTE&&(K=o.RGBA8I),X===o.SHORT&&(K=o.RGBA16I),X===o.INT&&(K=o.RGBA32I)),E===o.RGB&&(X===o.UNSIGNED_INT_5_9_9_9_REV&&(K=o.RGB9_E5),X===o.UNSIGNED_INT_10F_11F_11F_REV&&(K=o.R11F_G11F_B10F)),E===o.RGBA){const Ce=te?ba:tt.getTransfer(Z);X===o.FLOAT&&(K=o.RGBA32F),X===o.HALF_FLOAT&&(K=o.RGBA16F),X===o.UNSIGNED_BYTE&&(K=Ce===at?o.SRGB8_ALPHA8:o.RGBA8),X===o.UNSIGNED_SHORT_4_4_4_4&&(K=o.RGBA4),X===o.UNSIGNED_SHORT_5_5_5_1&&(K=o.RGB5_A1)}return(K===o.R16F||K===o.R32F||K===o.RG16F||K===o.RG32F||K===o.RGBA16F||K===o.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(I,E){let X;return I?E===null||E===As||E===so?X=o.DEPTH24_STENCIL8:E===Ei?X=o.DEPTH32F_STENCIL8:E===Yo&&(X=o.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===As||E===so?X=o.DEPTH_COMPONENT24:E===Ei?X=o.DEPTH_COMPONENT32F:E===Yo&&(X=o.DEPTH_COMPONENT16),X}function C(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Vt&&I.minFilter!==Zt?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function M(I){const E=I.target;E.removeEventListener("dispose",M),L(E),E.isVideoTexture&&h.delete(E)}function T(I){const E=I.target;E.removeEventListener("dispose",T),A(E)}function L(I){const E=i.get(I);if(E.__webglInit===void 0)return;const X=I.source,Z=d.get(X);if(Z){const te=Z[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(I),Object.keys(Z).length===0&&d.delete(X)}i.remove(I)}function S(I){const E=i.get(I);o.deleteTexture(E.__webglTexture);const X=I.source,Z=d.get(X);delete Z[E.__cacheKey],r.memory.textures--}function A(I){const E=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let te=0;te<E.__webglFramebuffer[Z].length;te++)o.deleteFramebuffer(E.__webglFramebuffer[Z][te]);else o.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)o.deleteFramebuffer(E.__webglFramebuffer[Z]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=I.textures;for(let Z=0,te=X.length;Z<te;Z++){const K=i.get(X[Z]);K.__webglTexture&&(o.deleteTexture(K.__webglTexture),r.memory.textures--),i.remove(X[Z])}i.remove(I)}let P=0;function U(){P=0}function D(){const I=P;return I>=n.maxTextures&&be("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+n.maxTextures),P+=1,I}function z(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function G(I,E){const X=i.get(I);if(I.isVideoTexture&&Mt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){const Z=I.image;if(Z===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{$(X,I,E);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,X.__webglTexture,o.TEXTURE0+E)}function k(I,E){const X=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){$(X,I,E);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,X.__webglTexture,o.TEXTURE0+E)}function j(I,E){const X=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){$(X,I,E);return}t.bindTexture(o.TEXTURE_3D,X.__webglTexture,o.TEXTURE0+E)}function W(I,E){const X=i.get(I);if(I.version>0&&X.__version!==I.version){ee(X,I,E);return}t.bindTexture(o.TEXTURE_CUBE_MAP,X.__webglTexture,o.TEXTURE0+E)}const Y={[no]:o.REPEAT,[Xi]:o.CLAMP_TO_EDGE,[_a]:o.MIRRORED_REPEAT},ne={[Vt]:o.NEAREST,[Of]:o.NEAREST_MIPMAP_NEAREST,[Go]:o.NEAREST_MIPMAP_LINEAR,[Zt]:o.LINEAR,[ra]:o.LINEAR_MIPMAP_NEAREST,[Mn]:o.LINEAR_MIPMAP_LINEAR},me={[Bm]:o.NEVER,[Nm]:o.ALWAYS,[Im]:o.LESS,[qf]:o.LEQUAL,[Lm]:o.EQUAL,[Fm]:o.GEQUAL,[Pm]:o.GREATER,[Dm]:o.NOTEQUAL};function re(I,E){if(E.type===Ei&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Zt||E.magFilter===ra||E.magFilter===Go||E.magFilter===Mn||E.minFilter===Zt||E.minFilter===ra||E.minFilter===Go||E.minFilter===Mn)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,Y[E.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,Y[E.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,Y[E.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,ne[E.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,ne[E.minFilter]),E.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Vt||E.minFilter!==Go&&E.minFilter!==Mn||E.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");o.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Qe(I,E){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",M));const Z=E.source;let te=d.get(Z);te===void 0&&(te={},d.set(Z,te));const K=z(E);if(K!==I.__cacheKey){te[K]===void 0&&(te[K]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,X=!0),te[K].usedTimes++;const Ce=te[I.__cacheKey];Ce!==void 0&&(te[I.__cacheKey].usedTimes--,Ce.usedTimes===0&&S(E)),I.__cacheKey=K,I.__webglTexture=te[K].texture}return X}function st(I,E,X){return Math.floor(Math.floor(I/X)/E)}function rt(I,E,X,Z){const K=I.updateRanges;if(K.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,X,Z,E.data);else{K.sort((ie,ae)=>ie.start-ae.start);let Ce=0;for(let ie=1;ie<K.length;ie++){const ae=K[Ce],Ne=K[ie],De=ae.start+ae.count,ge=st(Ne.start,E.width,4),Oe=st(ae.start,E.width,4);Ne.start<=De+1&&ge===Oe&&st(Ne.start+Ne.count-1,E.width,4)===ge?ae.count=Math.max(ae.count,Ne.start+Ne.count-ae.start):(++Ce,K[Ce]=Ne)}K.length=Ce+1;const ue=o.getParameter(o.UNPACK_ROW_LENGTH),Le=o.getParameter(o.UNPACK_SKIP_PIXELS),Ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let ie=0,ae=K.length;ie<ae;ie++){const Ne=K[ie],De=Math.floor(Ne.start/4),ge=Math.ceil(Ne.count/4),Oe=De%E.width,O=Math.floor(De/E.width),de=ge,le=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,O),t.texSubImage2D(o.TEXTURE_2D,0,Oe,O,de,le,X,Z,E.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,ue),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Le),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ee)}}function $(I,E,X){let Z=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=o.TEXTURE_3D);const te=Qe(I,E),K=E.source;t.bindTexture(Z,I.__webglTexture,o.TEXTURE0+X);const Ce=i.get(K);if(K.version!==Ce.__version||te===!0){t.activeTexture(o.TEXTURE0+X);const ue=tt.getPrimaries(tt.workingColorSpace),Le=E.colorSpace===Gn?null:tt.getPrimaries(E.colorSpace),Ee=E.colorSpace===Gn||ue===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ie=x(E.image,!1,n.maxTextureSize);ie=Ie(E,ie);const ae=s.convert(E.format,E.colorSpace),Ne=s.convert(E.type);let De=_(E.internalFormat,ae,Ne,E.colorSpace,E.isVideoTexture);re(Z,E);let ge;const Oe=E.mipmaps,O=E.isVideoTexture!==!0,de=Ce.__version===void 0||te===!0,le=K.dataReady,ce=C(E,ie);if(E.isDepthTexture)De=b(E.format===oo,E.type),de&&(O?t.texStorage2D(o.TEXTURE_2D,1,De,ie.width,ie.height):t.texImage2D(o.TEXTURE_2D,0,De,ie.width,ie.height,0,ae,Ne,null));else if(E.isDataTexture)if(Oe.length>0){O&&de&&t.texStorage2D(o.TEXTURE_2D,ce,De,Oe[0].width,Oe[0].height);for(let se=0,Q=Oe.length;se<Q;se++)ge=Oe[se],O?le&&t.texSubImage2D(o.TEXTURE_2D,se,0,0,ge.width,ge.height,ae,Ne,ge.data):t.texImage2D(o.TEXTURE_2D,se,De,ge.width,ge.height,0,ae,Ne,ge.data);E.generateMipmaps=!1}else O?(de&&t.texStorage2D(o.TEXTURE_2D,ce,De,ie.width,ie.height),le&&rt(E,ie,ae,Ne)):t.texImage2D(o.TEXTURE_2D,0,De,ie.width,ie.height,0,ae,Ne,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){O&&de&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ce,De,Oe[0].width,Oe[0].height,ie.depth);for(let se=0,Q=Oe.length;se<Q;se++)if(ge=Oe[se],E.format!==fi)if(ae!==null)if(O){if(le)if(E.layerUpdates.size>0){const Ae=ju(ge.width,ge.height,E.format,E.type);for(const Ge of E.layerUpdates){const vt=ge.data.subarray(Ge*Ae/ge.data.BYTES_PER_ELEMENT,(Ge+1)*Ae/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,Ge,ge.width,ge.height,1,ae,vt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,ie.depth,ae,ge.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,se,De,ge.width,ge.height,ie.depth,0,ge.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?le&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,ie.depth,ae,Ne,ge.data):t.texImage3D(o.TEXTURE_2D_ARRAY,se,De,ge.width,ge.height,ie.depth,0,ae,Ne,ge.data)}else{O&&de&&t.texStorage2D(o.TEXTURE_2D,ce,De,Oe[0].width,Oe[0].height);for(let se=0,Q=Oe.length;se<Q;se++)ge=Oe[se],E.format!==fi?ae!==null?O?le&&t.compressedTexSubImage2D(o.TEXTURE_2D,se,0,0,ge.width,ge.height,ae,ge.data):t.compressedTexImage2D(o.TEXTURE_2D,se,De,ge.width,ge.height,0,ge.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?le&&t.texSubImage2D(o.TEXTURE_2D,se,0,0,ge.width,ge.height,ae,Ne,ge.data):t.texImage2D(o.TEXTURE_2D,se,De,ge.width,ge.height,0,ae,Ne,ge.data)}else if(E.isDataArrayTexture)if(O){if(de&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ce,De,ie.width,ie.height,ie.depth),le)if(E.layerUpdates.size>0){const se=ju(ie.width,ie.height,E.format,E.type);for(const Q of E.layerUpdates){const Ae=ie.data.subarray(Q*se/ie.data.BYTES_PER_ELEMENT,(Q+1)*se/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,ae,Ne,Ae)}E.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ae,Ne,ie.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,ae,Ne,ie.data);else if(E.isData3DTexture)O?(de&&t.texStorage3D(o.TEXTURE_3D,ce,De,ie.width,ie.height,ie.depth),le&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ae,Ne,ie.data)):t.texImage3D(o.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,ae,Ne,ie.data);else if(E.isFramebufferTexture){if(de)if(O)t.texStorage2D(o.TEXTURE_2D,ce,De,ie.width,ie.height);else{let se=ie.width,Q=ie.height;for(let Ae=0;Ae<ce;Ae++)t.texImage2D(o.TEXTURE_2D,Ae,De,se,Q,0,ae,Ne,null),se>>=1,Q>>=1}}else if(Oe.length>0){if(O&&de){const se=ze(Oe[0]);t.texStorage2D(o.TEXTURE_2D,ce,De,se.width,se.height)}for(let se=0,Q=Oe.length;se<Q;se++)ge=Oe[se],O?le&&t.texSubImage2D(o.TEXTURE_2D,se,0,0,ae,Ne,ge):t.texImage2D(o.TEXTURE_2D,se,De,ae,Ne,ge);E.generateMipmaps=!1}else if(O){if(de){const se=ze(ie);t.texStorage2D(o.TEXTURE_2D,ce,De,se.width,se.height)}le&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,ae,Ne,ie)}else t.texImage2D(o.TEXTURE_2D,0,De,ae,Ne,ie);g(E)&&p(Z),Ce.__version=K.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ee(I,E,X){if(E.image.length!==6)return;const Z=Qe(I,E),te=E.source;t.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+X);const K=i.get(te);if(te.version!==K.__version||Z===!0){t.activeTexture(o.TEXTURE0+X);const Ce=tt.getPrimaries(tt.workingColorSpace),ue=E.colorSpace===Gn?null:tt.getPrimaries(E.colorSpace),Le=E.colorSpace===Gn||Ce===ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,ae=[];for(let Q=0;Q<6;Q++)!Ee&&!ie?ae[Q]=x(E.image[Q],!0,n.maxCubemapSize):ae[Q]=ie?E.image[Q].image:E.image[Q],ae[Q]=Ie(E,ae[Q]);const Ne=ae[0],De=s.convert(E.format,E.colorSpace),ge=s.convert(E.type),Oe=_(E.internalFormat,De,ge,E.colorSpace),O=E.isVideoTexture!==!0,de=K.__version===void 0||Z===!0,le=te.dataReady;let ce=C(E,Ne);re(o.TEXTURE_CUBE_MAP,E);let se;if(Ee){O&&de&&t.texStorage2D(o.TEXTURE_CUBE_MAP,ce,Oe,Ne.width,Ne.height);for(let Q=0;Q<6;Q++){se=ae[Q].mipmaps;for(let Ae=0;Ae<se.length;Ae++){const Ge=se[Ae];E.format!==fi?De!==null?O?le&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,0,0,Ge.width,Ge.height,De,Ge.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,Oe,Ge.width,Ge.height,0,Ge.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?le&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,0,0,Ge.width,Ge.height,De,ge,Ge.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,Oe,Ge.width,Ge.height,0,De,ge,Ge.data)}}}else{if(se=E.mipmaps,O&&de){se.length>0&&ce++;const Q=ze(ae[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,ce,Oe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){O?le&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ae[Q].width,ae[Q].height,De,ge,ae[Q].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Oe,ae[Q].width,ae[Q].height,0,De,ge,ae[Q].data);for(let Ae=0;Ae<se.length;Ae++){const vt=se[Ae].image[Q].image;O?le&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,0,0,vt.width,vt.height,De,ge,vt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,Oe,vt.width,vt.height,0,De,ge,vt.data)}}else{O?le&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,ge,ae[Q]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Oe,De,ge,ae[Q]);for(let Ae=0;Ae<se.length;Ae++){const Ge=se[Ae];O?le&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,0,0,De,ge,Ge.image[Q]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,Oe,De,ge,Ge.image[Q])}}}g(E)&&p(o.TEXTURE_CUBE_MAP),K.__version=te.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ye(I,E,X,Z,te,K){const Ce=s.convert(X.format,X.colorSpace),ue=s.convert(X.type),Le=_(X.internalFormat,Ce,ue,X.colorSpace),Ee=i.get(E),ie=i.get(X);if(ie.__renderTarget=E,!Ee.__hasExternalTextures){const ae=Math.max(1,E.width>>K),Ne=Math.max(1,E.height>>K);te===o.TEXTURE_3D||te===o.TEXTURE_2D_ARRAY?t.texImage3D(te,K,Le,ae,Ne,E.depth,0,Ce,ue,null):t.texImage2D(te,K,Le,ae,Ne,0,Ce,ue,null)}t.bindFramebuffer(o.FRAMEBUFFER,I),Se(E)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Z,te,ie.__webglTexture,0,gt(E)):(te===o.TEXTURE_2D||te>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Z,te,ie.__webglTexture,K),t.bindFramebuffer(o.FRAMEBUFFER,null)}function He(I,E,X){if(o.bindRenderbuffer(o.RENDERBUFFER,I),E.depthBuffer){const Z=E.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,K=b(E.stencilBuffer,te),Ce=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=gt(E);Se(E)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ue,K,E.width,E.height):X?o.renderbufferStorageMultisample(o.RENDERBUFFER,ue,K,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,K,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ce,o.RENDERBUFFER,I)}else{const Z=E.textures;for(let te=0;te<Z.length;te++){const K=Z[te],Ce=s.convert(K.format,K.colorSpace),ue=s.convert(K.type),Le=_(K.internalFormat,Ce,ue,K.colorSpace),Ee=gt(E);X&&Se(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ee,Le,E.width,E.height):Se(E)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ee,Le,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Le,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Re(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const te=Z.__webglTexture,K=gt(E);if(E.depthTexture.format===$o)Se(E)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,te,0,K):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,te,0);else if(E.depthTexture.format===oo)Se(E)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,te,0,K):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function je(I){const E=i.get(I),X=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=Z}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const Z=I.texture.mipmaps;Z&&Z.length>0?Re(E.__webglFramebuffer[0],I):Re(E.__webglFramebuffer,I)}else if(X){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=o.createRenderbuffer(),He(E.__webglDepthbuffer[Z],I,!1);else{const te=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Z];o.bindRenderbuffer(o.RENDERBUFFER,K),o.framebufferRenderbuffer(o.FRAMEBUFFER,te,o.RENDERBUFFER,K)}}else{const Z=I.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),He(E.__webglDepthbuffer,I,!1);else{const te=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,K),o.framebufferRenderbuffer(o.FRAMEBUFFER,te,o.RENDERBUFFER,K)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(I,E,X){const Z=i.get(I);E!==void 0&&ye(Z.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),X!==void 0&&je(I)}function qe(I){const E=I.texture,X=i.get(I),Z=i.get(E);I.addEventListener("dispose",T);const te=I.textures,K=I.isWebGLCubeRenderTarget===!0,Ce=te.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=o.createTexture()),Z.__version=E.version,r.memory.textures++),K){X.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[ue]=[];for(let Le=0;Le<E.mipmaps.length;Le++)X.__webglFramebuffer[ue][Le]=o.createFramebuffer()}else X.__webglFramebuffer[ue]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)X.__webglFramebuffer[ue]=o.createFramebuffer()}else X.__webglFramebuffer=o.createFramebuffer();if(Ce)for(let ue=0,Le=te.length;ue<Le;ue++){const Ee=i.get(te[ue]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=o.createTexture(),r.memory.textures++)}if(I.samples>0&&Se(I)===!1){X.__webglMultisampledFramebuffer=o.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const Le=te[ue];X.__webglColorRenderbuffer[ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,X.__webglColorRenderbuffer[ue]);const Ee=s.convert(Le.format,Le.colorSpace),ie=s.convert(Le.type),ae=_(Le.internalFormat,Ee,ie,Le.colorSpace,I.isXRRenderTarget===!0),Ne=gt(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ne,ae,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ue,o.RENDERBUFFER,X.__webglColorRenderbuffer[ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=o.createRenderbuffer(),He(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(K){t.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture),re(o.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let Le=0;Le<E.mipmaps.length;Le++)ye(X.__webglFramebuffer[ue][Le],I,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Le);else ye(X.__webglFramebuffer[ue],I,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(E)&&p(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ue=0,Le=te.length;ue<Le;ue++){const Ee=te[ue],ie=i.get(Ee);let ae=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ae=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(ae,ie.__webglTexture),re(ae,Ee),ye(X.__webglFramebuffer,I,Ee,o.COLOR_ATTACHMENT0+ue,ae,0),g(Ee)&&p(ae)}t.unbindTexture()}else{let ue=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(ue,Z.__webglTexture),re(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let Le=0;Le<E.mipmaps.length;Le++)ye(X.__webglFramebuffer[Le],I,E,o.COLOR_ATTACHMENT0,ue,Le);else ye(X.__webglFramebuffer,I,E,o.COLOR_ATTACHMENT0,ue,0);g(E)&&p(ue),t.unbindTexture()}I.depthBuffer&&je(I)}function bt(I){const E=I.textures;for(let X=0,Z=E.length;X<Z;X++){const te=E[X];if(g(te)){const K=v(I),Ce=i.get(te).__webglTexture;t.bindTexture(K,Ce),p(K),t.unbindTexture()}}}const F=[],Ye=[];function $e(I){if(I.samples>0){if(Se(I)===!1){const E=I.textures,X=I.width,Z=I.height;let te=o.COLOR_BUFFER_BIT;const K=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=i.get(I),ue=E.length>1;if(ue)for(let Ee=0;Ee<E.length;Ee++)t.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ee,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ee,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Le=I.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(te|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(te|=o.STENCIL_BUFFER_BIT)),ue){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ee]);const ie=i.get(E[Ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ie,0)}o.blitFramebuffer(0,0,X,Z,0,0,X,Z,te,o.NEAREST),l===!0&&(F.length=0,Ye.length=0,F.push(o.COLOR_ATTACHMENT0+Ee),I.depthBuffer&&I.resolveDepthBuffer===!1&&(F.push(K),Ye.push(K),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ye)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ue)for(let Ee=0;Ee<E.length;Ee++){t.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ee,o.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ee]);const ie=i.get(E[Ee]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ee,o.TEXTURE_2D,ie,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const E=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function gt(I){return Math.min(n.maxSamples,I.samples)}function Se(I){const E=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(I){const E=r.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function Ie(I,E){const X=I.colorSpace,Z=I.format,te=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Qt&&X!==Gn&&(tt.getTransfer(X)===at?(Z!==fi||te!==Yi)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",X)),E}function ze(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Ot,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Se}function Y_(o,e){function t(i,n=Gn){let s;const r=tt.getTransfer(n);if(i===Yi)return o.UNSIGNED_BYTE;if(i===oh)return o.UNSIGNED_SHORT_4_4_4_4;if(i===rh)return o.UNSIGNED_SHORT_5_5_5_1;if(i===zf)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===Hf)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===kf)return o.BYTE;if(i===Gf)return o.SHORT;if(i===Yo)return o.UNSIGNED_SHORT;if(i===sh)return o.INT;if(i===As)return o.UNSIGNED_INT;if(i===Ei)return o.FLOAT;if(i===Cn)return o.HALF_FLOAT;if(i===Vf)return o.ALPHA;if(i===Wf)return o.RGB;if(i===fi)return o.RGBA;if(i===$o)return o.DEPTH_COMPONENT;if(i===oo)return o.DEPTH_STENCIL;if(i===ah)return o.RED;if(i===lh)return o.RED_INTEGER;if(i===ch)return o.RG;if(i===hh)return o.RG_INTEGER;if(i===uh)return o.RGBA_INTEGER;if(i===aa||i===la||i===ca||i===ha)if(r===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dc||i===fc||i===pc||i===mc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gc||i===xc||i===vc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gc||i===xc)return r===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vc)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yc||i===_c||i===bc||i===Ac||i===Mc||i===wc||i===Sc||i===Ec||i===Cc||i===Tc||i===Rc||i===Bc||i===Ic||i===Lc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yc)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bc)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ac)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wc)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sc)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ec)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cc)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rc)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bc)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ic)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lc)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pc||i===Dc||i===Fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pc)return r===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nc||i===Uc||i===Oc||i===kc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Nc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Uc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const $_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z_=`
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

}`;class Q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new sp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ht({vertexShader:$_,fragmentShader:Z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new rr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eb extends go{constructor(e,t){super();const i=this;let n=null,s=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const x=typeof XRWebGLBinding<"u",g=new Q_,p={},v=t.getContextAttributes();let _=null,b=null;const C=[],M=[],T=new Te;let L=null;const S=new Jt;S.viewport=new ot;const A=new Jt;A.viewport=new ot;const P=[S,A],U=new r0;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=C[$];return ee===void 0&&(ee=new _l,C[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=C[$];return ee===void 0&&(ee=new _l,C[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=C[$];return ee===void 0&&(ee=new _l,C[$]=ee),ee.getHandSpace()};function G($){const ee=M.indexOf($.inputSource);if(ee===-1)return;const ye=C[ee];ye!==void 0&&(ye.update($.inputSource,$.frame,c||r),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",j);for(let $=0;$<C.length;$++){const ee=M[$];ee!==null&&(M[$]=null,C[$].disconnect(ee))}D=null,z=null,g.reset();for(const $ in p)delete p[$];e.setRenderTarget(_),f=null,d=null,u=null,n=null,b=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(_=e.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",k),n.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,He=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=v.stencil?oo:$o,He=v.stencil?so:As);const je={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(je),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new $i(d.textureWidth,d.textureHeight,{format:fi,type:Yi,depthTexture:new bh(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,ye),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new $i(f.framebufferWidth,f.framebufferHeight,{format:fi,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(a),rt.setContext(n),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j($){for(let ee=0;ee<$.removed.length;ee++){const ye=$.removed[ee],He=M.indexOf(ye);He>=0&&(M[He]=null,C[He].disconnect(ye))}for(let ee=0;ee<$.added.length;ee++){const ye=$.added[ee];let He=M.indexOf(ye);if(He===-1){for(let je=0;je<C.length;je++)if(je>=M.length){M.push(ye),He=je;break}else if(M[je]===null){M[je]=ye,He=je;break}if(He===-1)break}const Re=C[He];Re&&Re.connect(ye)}}const W=new B,Y=new B;function ne($,ee,ye){W.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(ye.matrixWorld);const He=W.distanceTo(Y),Re=ee.projectionMatrix.elements,je=ye.projectionMatrix.elements,Ot=Re[14]/(Re[10]-1),qe=Re[14]/(Re[10]+1),bt=(Re[9]+1)/Re[5],F=(Re[9]-1)/Re[5],Ye=(Re[8]-1)/Re[0],$e=(je[8]+1)/je[0],gt=Ot*Ye,Se=Ot*$e,Mt=He/(-Ye+$e),Ie=Mt*-Ye;if(ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ie),$.translateZ(Mt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Re[10]===-1)$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ze=Ot+Mt,I=qe+Mt,E=gt-Ie,X=Se+(He-Ie),Z=bt*qe/I*ze,te=F*qe/I*ze;$.projectionMatrix.makePerspective(E,X,Z,te,ze,I),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function me($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let ee=$.near,ye=$.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),U.near=A.near=S.near=ee,U.far=A.far=S.far=ye,(D!==U.near||z!==U.far)&&(n.updateRenderState({depthNear:U.near,depthFar:U.far}),D=U.near,z=U.far),U.layers.mask=$.layers.mask|6,S.layers.mask=U.layers.mask&3,A.layers.mask=U.layers.mask&5;const He=$.parent,Re=U.cameras;me(U,He);for(let je=0;je<Re.length;je++)me(Re[je],He);Re.length===2?ne(U,S,A):U.projectionMatrix.copy(S.projectionMatrix),re($,U,He)};function re($,ee,ye){ye===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(ye.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ro*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function($){return p[$]};let Qe=null;function st($,ee){if(h=ee.getViewerPose(c||r),m=ee,h!==null){const ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let He=!1;ye.length!==U.cameras.length&&(U.cameras.length=0,He=!0);for(let qe=0;qe<ye.length;qe++){const bt=ye[qe];let F=null;if(f!==null)F=f.getViewport(bt);else{const $e=u.getViewSubImage(d,bt);F=$e.viewport,qe===0&&(e.setRenderTargetTextures(b,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(b))}let Ye=P[qe];Ye===void 0&&(Ye=new Jt,Ye.layers.enable(qe),Ye.viewport=new ot,P[qe]=Ye),Ye.matrix.fromArray(bt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(bt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(F.x,F.y,F.width,F.height),qe===0&&(U.matrix.copy(Ye.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),He===!0&&U.cameras.push(Ye)}const Re=n.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();const qe=u.getDepthInformation(ye[0]);qe&&qe.isValid&&qe.texture&&g.init(qe,n.renderState)}if(Re&&Re.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let qe=0;qe<ye.length;qe++){const bt=ye[qe].camera;if(bt){let F=p[bt];F||(F=new sp,p[bt]=F);const Ye=u.getCameraImage(bt);F.sourceTexture=Ye}}}}for(let ye=0;ye<C.length;ye++){const He=M[ye],Re=C[ye];He!==null&&Re!==void 0&&Re.update(He,ee,c||r)}Qe&&Qe($,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),m=null}const rt=new fp;rt.setAnimationLoop(st),this.setAnimationLoop=function($){Qe=$},this.dispose=function(){}}}const us=new mi,tb=new ke;function ib(o,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Zf(o)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,v,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,b)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ni&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ni&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),_=v.envMap,b=v.envMapRotation;_&&(g.envMap.value=_,us.copy(b),us.x*=-1,us.y*=-1,us.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),g.envMapRotation.value.setFromMatrix4(tb.makeRotationFromEuler(us)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ni&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function nb(o,e,t,i){let n={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const b=_.program;i.uniformBlockBinding(v,b)}function c(v,_){let b=n[v.id];b===void 0&&(m(v),b=h(v),n[v.id]=b,v.addEventListener("dispose",g));const C=_.program;i.updateUBOMapping(v,C);const M=e.render.frame;s[v.id]!==M&&(d(v),s[v.id]=M)}function h(v){const _=u();v.__bindingPointIndex=_;const b=o.createBuffer(),C=v.__size,M=v.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,C,M),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,_,b),b}function u(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=n[v.id],b=v.uniforms,C=v.__cache;o.bindBuffer(o.UNIFORM_BUFFER,_);for(let M=0,T=b.length;M<T;M++){const L=Array.isArray(b[M])?b[M]:[b[M]];for(let S=0,A=L.length;S<A;S++){const P=L[S];if(f(P,M,S,C)===!0){const U=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let G=0;G<D.length;G++){const k=D[G],j=x(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,U+z,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,z),z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,U,P.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(v,_,b,C){const M=v.value,T=_+"_"+b;if(C[T]===void 0)return typeof M=="number"||typeof M=="boolean"?C[T]=M:C[T]=M.clone(),!0;{const L=C[T];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return C[T]=M,!0}else if(L.equals(M)===!1)return L.copy(M),!0}return!1}function m(v){const _=v.uniforms;let b=0;const C=16;for(let T=0,L=_.length;T<L;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let A=0,P=S.length;A<P;A++){const U=S[A],D=Array.isArray(U.value)?U.value:[U.value];for(let z=0,G=D.length;z<G;z++){const k=D[z],j=x(k),W=b%C,Y=W%j.boundary,ne=W+Y;b+=Y,ne!==0&&C-ne<j.storage&&(b+=C-ne),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=j.storage}}}const M=b%C;return M>0&&(b+=C-M),v.__size=b,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):be("WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){const _=v.target;_.removeEventListener("dispose",g);const b=r.indexOf(_.__bindingPointIndex);r.splice(b,1),o.deleteBuffer(n[_.id]),delete n[_.id],delete s[_.id]}function p(){for(const v in n)o.deleteBuffer(n[v]);r=[],n={},s={}}return{bind:l,update:c,dispose:p}}const sb=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let dn=null;function ob(){return dn===null&&(dn=new xh(sb,32,32,ch,Cn),dn.minFilter=Zt,dn.magFilter=Zt,dn.wrapS=Xi,dn.wrapT=Xi,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}class yd{constructor(e={}){const{canvas:t=Um(),context:i=null,depth:n=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const m=new Set([uh,hh,lh]),x=new Set([Yi,As,Yo,so,oh,rh]),g=new Uint32Array(4),p=new Int32Array(4);let v=null,_=null;const b=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let T=!1;this._outputColorSpace=Gt;let L=0,S=0,A=null,P=-1,U=null;const D=new ot,z=new ot;let G=null;const k=new _e(0);let j=0,W=t.width,Y=t.height,ne=1,me=null,re=null;const Qe=new ot(0,0,W,Y),st=new ot(0,0,W,Y);let rt=!1;const $=new yh;let ee=!1,ye=!1;const He=new ke,Re=new B,je=new ot,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function bt(){return A===null?ne:1}let F=i;function Ye(R,H){return t.getContext(R,H)}try{const R={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${th}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),F===null){const H="webgl2";if(F=Ye(H,R),F===null)throw Ye(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let $e,gt,Se,Mt,Ie,ze,I,E,X,Z,te,K,Ce,ue,Le,Ee,ie,ae,Ne,De,ge,Oe,O,de;function le(){$e=new py(F),$e.init(),Oe=new Y_(F,$e),gt=new oy(F,$e,e,Oe),Se=new K_(F,$e),gt.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),Mt=new xy(F),Ie=new F_,ze=new j_(F,$e,Se,Ie,gt,Oe,Mt),I=new ay(M),E=new fy(M),X=new b0(F),O=new ny(F,X),Z=new my(F,X,Mt,O),te=new yy(F,Z,X,Mt),Ne=new vy(F,gt,ze),Ee=new ry(Ie),K=new D_(M,I,E,$e,gt,O,Ee),Ce=new ib(M,Ie),ue=new U_,Le=new V_($e),ae=new iy(M,I,E,Se,te,f,l),ie=new q_(M,te,gt),de=new nb(F,Mt,gt,Se),De=new sy(F,$e,Mt),ge=new gy(F,$e,Mt),Mt.programs=K.programs,M.capabilities=gt,M.extensions=$e,M.properties=Ie,M.renderLists=ue,M.shadowMap=ie,M.state=Se,M.info=Mt}le();const ce=new eb(M,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=$e.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$e.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(W,Y,!1))},this.getSize=function(R){return R.set(W,Y)},this.setSize=function(R,H,q=!0){if(ce.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,Y=H,t.width=Math.floor(R*ne),t.height=Math.floor(H*ne),q===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(W*ne,Y*ne).floor()},this.setDrawingBufferSize=function(R,H,q){W=R,Y=H,ne=q,t.width=Math.floor(R*q),t.height=Math.floor(H*q),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(Qe)},this.setViewport=function(R,H,q,J){R.isVector4?Qe.set(R.x,R.y,R.z,R.w):Qe.set(R,H,q,J),Se.viewport(D.copy(Qe).multiplyScalar(ne).round())},this.getScissor=function(R){return R.copy(st)},this.setScissor=function(R,H,q,J){R.isVector4?st.set(R.x,R.y,R.z,R.w):st.set(R,H,q,J),Se.scissor(z.copy(st).multiplyScalar(ne).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(R){Se.setScissorTest(rt=R)},this.setOpaqueSort=function(R){me=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,q=!0){let J=0;if(R){let V=!1;if(A!==null){const oe=A.texture.format;V=m.has(oe)}if(V){const oe=A.texture.type,fe=x.has(oe),Me=ae.getClearColor(),ve=ae.getClearAlpha(),Fe=Me.r,Ue=Me.g,Be=Me.b;fe?(g[0]=Fe,g[1]=Ue,g[2]=Be,g[3]=ve,F.clearBufferuiv(F.COLOR,0,g)):(p[0]=Fe,p[1]=Ue,p[2]=Be,p[3]=ve,F.clearBufferiv(F.COLOR,0,p))}else J|=F.COLOR_BUFFER_BIT}H&&(J|=F.DEPTH_BUFFER_BIT),q&&(J|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),ae.dispose(),ue.dispose(),Le.dispose(),Ie.dispose(),I.dispose(),E.dispose(),te.dispose(),O.dispose(),de.dispose(),K.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",qh),ce.removeEventListener("sessionend",Jh),Qn.stop()};function se(R){R.preventDefault(),Ma("WebGLRenderer: Context Lost."),T=!0}function Q(){Ma("WebGLRenderer: Context Restored."),T=!1;const R=Mt.autoReset,H=ie.enabled,q=ie.autoUpdate,J=ie.needsUpdate,V=ie.type;le(),Mt.autoReset=R,ie.enabled=H,ie.autoUpdate=q,ie.needsUpdate=J,ie.type=V}function Ae(R){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ge(R){const H=R.target;H.removeEventListener("dispose",Ge),vt(H)}function vt(R){ht(R),Ie.remove(R)}function ht(R){const H=Ie.get(R).programs;H!==void 0&&(H.forEach(function(q){K.releaseProgram(q)}),R.isShaderMaterial&&K.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,q,J,V,oe){H===null&&(H=Ot);const fe=V.isMesh&&V.matrixWorld.determinant()<0,Me=$p(R,H,q,J,V);Se.setMaterial(J,fe);let ve=q.index,Fe=1;if(J.wireframe===!0){if(ve=Z.getWireframeAttribute(q),ve===void 0)return;Fe=2}const Ue=q.drawRange,Be=q.attributes.position;let Ze=Ue.start*Fe,ut=(Ue.start+Ue.count)*Fe;oe!==null&&(Ze=Math.max(Ze,oe.start*Fe),ut=Math.min(ut,(oe.start+oe.count)*Fe)),ve!==null?(Ze=Math.max(Ze,0),ut=Math.min(ut,ve.count)):Be!=null&&(Ze=Math.max(Ze,0),ut=Math.min(ut,Be.count));const Et=ut-Ze;if(Et<0||Et===1/0)return;O.setup(V,J,Me,q,ve);let Ct,pt=De;if(ve!==null&&(Ct=X.get(ve),pt=ge,pt.setIndex(Ct)),V.isMesh)J.wireframe===!0?(Se.setLineWidth(J.wireframeLinewidth*bt()),pt.setMode(F.LINES)):pt.setMode(F.TRIANGLES);else if(V.isLine){let Pe=J.linewidth;Pe===void 0&&(Pe=1),Se.setLineWidth(Pe*bt()),V.isLineSegments?pt.setMode(F.LINES):V.isLineLoop?pt.setMode(F.LINE_LOOP):pt.setMode(F.LINE_STRIP)}else V.isPoints?pt.setMode(F.POINTS):V.isSprite&&pt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)tr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Pe=V._multiDrawStarts,wt=V._multiDrawCounts,it=V._multiDrawCount,si=ve?X.get(ve).bytesPerElement:1,Ts=Ie.get(J).currentProgram.getUniforms();for(let oi=0;oi<it;oi++)Ts.setValue(F,"_gl_DrawID",oi),pt.render(Pe[oi]/si,wt[oi])}else if(V.isInstancedMesh)pt.renderInstances(Ze,Et,V.count);else if(q.isInstancedBufferGeometry){const Pe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,wt=Math.min(q.instanceCount,Pe);pt.renderInstances(Ze,Et,wt)}else pt.render(Ze,Et)};function Pi(R,H,q){R.transparent===!0&&R.side===li&&R.forceSinglePass===!1?(R.side=ni,R.needsUpdate=!0,vr(R,H,q),R.side=En,R.needsUpdate=!0,vr(R,H,q),R.side=li):vr(R,H,q)}this.compile=function(R,H,q=null){q===null&&(q=R),_=Le.get(q),_.init(H),C.push(_),q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),R!==q&&R.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),_.setupLights();const J=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const oe=V.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){const Me=oe[fe];Pi(Me,q,V),J.add(Me)}else Pi(oe,q,V),J.add(oe)}),_=C.pop(),J},this.compileAsync=function(R,H,q=null){const J=this.compile(R,H,q);return new Promise(V=>{function oe(){if(J.forEach(function(fe){Ie.get(fe).currentProgram.isReady()&&J.delete(fe)}),J.size===0){V(R);return}setTimeout(oe,10)}$e.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let xi=null;function Yp(R){xi&&xi(R)}function qh(){Qn.stop()}function Jh(){Qn.start()}const Qn=new fp;Qn.setAnimationLoop(Yp),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(R){xi=R,ce.setAnimationLoop(R),R===null?Qn.stop():Qn.start()},ce.addEventListener("sessionstart",qh),ce.addEventListener("sessionend",Jh),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(H),H=ce.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,H,A),_=Le.get(R,C.length),_.init(H),C.push(_),He.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),$.setFromProjectionMatrix(He,qi,H.reversedDepth),ye=this.localClippingEnabled,ee=Ee.init(this.clippingPlanes,ye),v=ue.get(R,b.length),v.init(),b.push(v),ce.enabled===!0&&ce.isPresenting===!0){const oe=M.xr.getDepthSensingMesh();oe!==null&&$a(oe,H,-1/0,M.sortObjects)}$a(R,H,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(me,re),qe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,qe&&ae.addToRenderList(v,R),this.info.render.frame++,ee===!0&&Ee.beginShadows();const q=_.state.shadowsArray;ie.render(q,R,H),ee===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=v.opaque,V=v.transmissive;if(_.setupLights(),H.isArrayCamera){const oe=H.cameras;if(V.length>0)for(let fe=0,Me=oe.length;fe<Me;fe++){const ve=oe[fe];jh(J,V,R,ve)}qe&&ae.render(R);for(let fe=0,Me=oe.length;fe<Me;fe++){const ve=oe[fe];Kh(v,R,ve,ve.viewport)}}else V.length>0&&jh(J,V,R,H),qe&&ae.render(R),Kh(v,R,H);A!==null&&S===0&&(ze.updateMultisampleRenderTarget(A),ze.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(M,R,H),O.resetDefaultState(),P=-1,U=null,C.pop(),C.length>0?(_=C[C.length-1],ee===!0&&Ee.setGlobalState(M.clippingPlanes,_.state.camera)):_=null,b.pop(),b.length>0?v=b[b.length-1]:v=null};function $a(R,H,q,J){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$.intersectsSprite(R)){J&&je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(He);const fe=te.update(R),Me=R.material;Me.visible&&v.push(R,fe,Me,q,je.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||$.intersectsObject(R))){const fe=te.update(R),Me=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),je.copy(R.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),je.copy(fe.boundingSphere.center)),je.applyMatrix4(R.matrixWorld).applyMatrix4(He)),Array.isArray(Me)){const ve=fe.groups;for(let Fe=0,Ue=ve.length;Fe<Ue;Fe++){const Be=ve[Fe],Ze=Me[Be.materialIndex];Ze&&Ze.visible&&v.push(R,fe,Ze,q,je.z,Be)}}else Me.visible&&v.push(R,fe,Me,q,je.z,null)}}const oe=R.children;for(let fe=0,Me=oe.length;fe<Me;fe++)$a(oe[fe],H,q,J)}function Kh(R,H,q,J){const{opaque:V,transmissive:oe,transparent:fe}=R;_.setupLightsView(q),ee===!0&&Ee.setGlobalState(M.clippingPlanes,q),J&&Se.viewport(D.copy(J)),V.length>0&&xr(V,H,q),oe.length>0&&xr(oe,H,q),fe.length>0&&xr(fe,H,q),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function jh(R,H,q,J){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[J.id]===void 0&&(_.state.transmissionRenderTarget[J.id]=new $i(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Cn:Yi,minFilter:Mn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const oe=_.state.transmissionRenderTarget[J.id],fe=J.viewport||D;oe.setSize(fe.z*M.transmissionResolutionScale,fe.w*M.transmissionResolutionScale);const Me=M.getRenderTarget(),ve=M.getActiveCubeFace(),Fe=M.getActiveMipmapLevel();M.setRenderTarget(oe),M.getClearColor(k),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),M.clear(),qe&&ae.render(q);const Ue=M.toneMapping;M.toneMapping=Wn;const Be=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),_.setupLightsView(J),ee===!0&&Ee.setGlobalState(M.clippingPlanes,J),xr(R,q,J),ze.updateMultisampleRenderTarget(oe),ze.updateRenderTargetMipmap(oe),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ut=0,Et=H.length;ut<Et;ut++){const Ct=H[ut],{object:pt,geometry:Pe,material:wt,group:it}=Ct;if(wt.side===li&&pt.layers.test(J.layers)){const si=wt.side;wt.side=ni,wt.needsUpdate=!0,Yh(pt,q,J,Pe,wt,it),wt.side=si,wt.needsUpdate=!0,Ze=!0}}Ze===!0&&(ze.updateMultisampleRenderTarget(oe),ze.updateRenderTargetMipmap(oe))}M.setRenderTarget(Me,ve,Fe),M.setClearColor(k,j),Be!==void 0&&(J.viewport=Be),M.toneMapping=Ue}function xr(R,H,q){const J=H.isScene===!0?H.overrideMaterial:null;for(let V=0,oe=R.length;V<oe;V++){const fe=R[V],{object:Me,geometry:ve,group:Fe}=fe;let Ue=fe.material;Ue.allowOverride===!0&&J!==null&&(Ue=J),Me.layers.test(q.layers)&&Yh(Me,H,q,ve,Ue,Fe)}}function Yh(R,H,q,J,V,oe){R.onBeforeRender(M,H,q,J,V,oe),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(M,H,q,J,R,oe),V.transparent===!0&&V.side===li&&V.forceSinglePass===!1?(V.side=ni,V.needsUpdate=!0,M.renderBufferDirect(q,H,J,V,R,oe),V.side=En,V.needsUpdate=!0,M.renderBufferDirect(q,H,J,V,R,oe),V.side=li):M.renderBufferDirect(q,H,J,V,R,oe),R.onAfterRender(M,H,q,J,V,oe)}function vr(R,H,q){H.isScene!==!0&&(H=Ot);const J=Ie.get(R),V=_.state.lights,oe=_.state.shadowsArray,fe=V.state.version,Me=K.getParameters(R,V.state,oe,H,q),ve=K.getProgramCacheKey(Me);let Fe=J.programs;J.environment=R.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(R.isMeshStandardMaterial?E:I).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Fe===void 0&&(R.addEventListener("dispose",Ge),Fe=new Map,J.programs=Fe);let Ue=Fe.get(ve);if(Ue!==void 0){if(J.currentProgram===Ue&&J.lightsStateVersion===fe)return Zh(R,Me),Ue}else Me.uniforms=K.getUniforms(R),R.onBeforeCompile(Me,M),Ue=K.acquireProgram(Me,ve),Fe.set(ve,Ue),J.uniforms=Me.uniforms;const Be=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Be.clippingPlanes=Ee.uniform),Zh(R,Me),J.needsLights=Qp(R),J.lightsStateVersion=fe,J.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMap.value=V.state.directionalShadowMap,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotShadowMap.value=V.state.spotShadowMap,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMap.value=V.state.pointShadowMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=Ue,J.uniformsList=null,Ue}function $h(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=da.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Zh(R,H){const q=Ie.get(R);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function $p(R,H,q,J,V){H.isScene!==!0&&(H=Ot),ze.resetTextureUnits();const oe=H.fog,fe=J.isMeshStandardMaterial?H.environment:null,Me=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qt,ve=(J.isMeshStandardMaterial?E:I).get(J.envMap||fe),Fe=J.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ue=!!q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Be=!!q.morphAttributes.position,Ze=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color;let Et=Wn;J.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Et=M.toneMapping);const Ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pt=Ct!==void 0?Ct.length:0,Pe=Ie.get(J),wt=_.state.lights;if(ee===!0&&(ye===!0||R!==U)){const jt=R===U&&J.id===P;Ee.setState(J,R,jt)}let it=!1;J.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==wt.state.version||Pe.outputColorSpace!==Me||V.isBatchedMesh&&Pe.batching===!1||!V.isBatchedMesh&&Pe.batching===!0||V.isBatchedMesh&&Pe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Pe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Pe.instancing===!1||!V.isInstancedMesh&&Pe.instancing===!0||V.isSkinnedMesh&&Pe.skinning===!1||!V.isSkinnedMesh&&Pe.skinning===!0||V.isInstancedMesh&&Pe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Pe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Pe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Pe.instancingMorph===!1&&V.morphTexture!==null||Pe.envMap!==ve||J.fog===!0&&Pe.fog!==oe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ee.numPlanes||Pe.numIntersection!==Ee.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==Ue||Pe.morphTargets!==Be||Pe.morphNormals!==Ze||Pe.morphColors!==ut||Pe.toneMapping!==Et||Pe.morphTargetsCount!==pt)&&(it=!0):(it=!0,Pe.__version=J.version);let si=Pe.currentProgram;it===!0&&(si=vr(J,H,V));let Ts=!1,oi=!1,Mo=!1;const St=si.getUniforms(),ei=Pe.uniforms;if(Se.useProgram(si.program)&&(Ts=!0,oi=!0,Mo=!0),J.id!==P&&(P=J.id,oi=!0),Ts||U!==R){Se.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),St.setValue(F,"projectionMatrix",R.projectionMatrix),St.setValue(F,"viewMatrix",R.matrixWorldInverse);const ti=St.map.cameraPosition;ti!==void 0&&ti.setValue(F,Re.setFromMatrixPosition(R.matrixWorld)),gt.logarithmicDepthBuffer&&St.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&St.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),U!==R&&(U=R,oi=!0,Mo=!0)}if(V.isSkinnedMesh){St.setOptional(F,V,"bindMatrix"),St.setOptional(F,V,"bindMatrixInverse");const jt=V.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),St.setValue(F,"boneTexture",jt.boneTexture,ze))}V.isBatchedMesh&&(St.setOptional(F,V,"batchingTexture"),St.setValue(F,"batchingTexture",V._matricesTexture,ze),St.setOptional(F,V,"batchingIdTexture"),St.setValue(F,"batchingIdTexture",V._indirectTexture,ze),St.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&St.setValue(F,"batchingColorTexture",V._colorsTexture,ze));const ci=q.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&Ne.update(V,q,si),(oi||Pe.receiveShadow!==V.receiveShadow)&&(Pe.receiveShadow=V.receiveShadow,St.setValue(F,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ei.envMap.value=ve,ei.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(ei.envMapIntensity.value=H.environmentIntensity),ei.dfgLUT!==void 0&&(ei.dfgLUT.value=ob()),oi&&(St.setValue(F,"toneMappingExposure",M.toneMappingExposure),Pe.needsLights&&Zp(ei,Mo),oe&&J.fog===!0&&Ce.refreshFogUniforms(ei,oe),Ce.refreshMaterialUniforms(ei,J,ne,Y,_.state.transmissionRenderTarget[R.id]),da.upload(F,$h(Pe),ei,ze)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(da.upload(F,$h(Pe),ei,ze),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&St.setValue(F,"center",V.center),St.setValue(F,"modelViewMatrix",V.modelViewMatrix),St.setValue(F,"normalMatrix",V.normalMatrix),St.setValue(F,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const jt=J.uniformsGroups;for(let ti=0,Za=jt.length;ti<Za;ti++){const es=jt[ti];de.update(es,si),de.bind(es,si)}}return si}function Zp(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function Qp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,H,q){const J=Ie.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Ie.get(R.texture).__webglTexture=H,Ie.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:q,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){const q=Ie.get(R);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const em=F.createFramebuffer();this.setRenderTarget=function(R,H=0,q=0){A=R,L=H,S=q;let J=!0,V=null,oe=!1,fe=!1;if(R){const ve=Ie.get(R);if(ve.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(F.FRAMEBUFFER,null),J=!1;else if(ve.__webglFramebuffer===void 0)ze.setupRenderTarget(R);else if(ve.__hasExternalTextures)ze.rebindTextures(R,Ie.get(R.texture).__webglTexture,Ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Be=R.depthTexture;if(ve.__boundDepthTexture!==Be){if(Be!==null&&Ie.has(Be)&&(R.width!==Be.image.width||R.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(R)}}const Fe=R.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(fe=!0);const Ue=Ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ue[H])?V=Ue[H][q]:V=Ue[H],oe=!0):R.samples>0&&ze.useMultisampledRTT(R)===!1?V=Ie.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?V=Ue[q]:V=Ue,D.copy(R.viewport),z.copy(R.scissor),G=R.scissorTest}else D.copy(Qe).multiplyScalar(ne).floor(),z.copy(st).multiplyScalar(ne).floor(),G=rt;if(q!==0&&(V=em),Se.bindFramebuffer(F.FRAMEBUFFER,V)&&J&&Se.drawBuffers(R,V),Se.viewport(D),Se.scissor(z),Se.setScissorTest(G),oe){const ve=Ie.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,ve.__webglTexture,q)}else if(fe){const ve=H;for(let Fe=0;Fe<R.textures.length;Fe++){const Ue=Ie.get(R.textures[Fe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Fe,Ue.__webglTexture,q,ve)}}else if(R!==null&&q!==0){const ve=Ie.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,q)}P=-1},this.readRenderTargetPixels=function(R,H,q,J,V,oe,fe,Me=0){if(!(R&&R.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){Se.bindFramebuffer(F.FRAMEBUFFER,ve);try{const Fe=R.textures[Me],Ue=Fe.format,Be=Fe.type;if(!gt.textureFormatReadable(Ue)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Be)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-J&&q>=0&&q<=R.height-V&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me),F.readPixels(H,q,J,V,Oe.convert(Ue),Oe.convert(Be),oe))}finally{const Fe=A!==null?Ie.get(A).__webglFramebuffer:null;Se.bindFramebuffer(F.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(R,H,q,J,V,oe,fe,Me=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(H>=0&&H<=R.width-J&&q>=0&&q<=R.height-V){Se.bindFramebuffer(F.FRAMEBUFFER,ve);const Fe=R.textures[Me],Ue=Fe.format,Be=Fe.type;if(!gt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ze),F.bufferData(F.PIXEL_PACK_BUFFER,oe.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me),F.readPixels(H,q,J,V,Oe.convert(Ue),Oe.convert(Be),0);const ut=A!==null?Ie.get(A).__webglFramebuffer:null;Se.bindFramebuffer(F.FRAMEBUFFER,ut);const Et=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Om(F,Et,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ze),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,oe),F.deleteBuffer(Ze),F.deleteSync(Et),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,q=0){const J=Math.pow(2,-q),V=Math.floor(R.image.width*J),oe=Math.floor(R.image.height*J),fe=H!==null?H.x:0,Me=H!==null?H.y:0;ze.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,fe,Me,V,oe),Se.unbindTexture()};const tm=F.createFramebuffer(),im=F.createFramebuffer();this.copyTextureToTexture=function(R,H,q=null,J=null,V=0,oe=null){oe===null&&(V!==0?(tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=V,V=0):oe=0);let fe,Me,ve,Fe,Ue,Be,Ze,ut,Et;const Ct=R.isCompressedTexture?R.mipmaps[oe]:R.image;if(q!==null)fe=q.max.x-q.min.x,Me=q.max.y-q.min.y,ve=q.isBox3?q.max.z-q.min.z:1,Fe=q.min.x,Ue=q.min.y,Be=q.isBox3?q.min.z:0;else{const ci=Math.pow(2,-V);fe=Math.floor(Ct.width*ci),Me=Math.floor(Ct.height*ci),R.isDataArrayTexture?ve=Ct.depth:R.isData3DTexture?ve=Math.floor(Ct.depth*ci):ve=1,Fe=0,Ue=0,Be=0}J!==null?(Ze=J.x,ut=J.y,Et=J.z):(Ze=0,ut=0,Et=0);const pt=Oe.convert(H.format),Pe=Oe.convert(H.type);let wt;H.isData3DTexture?(ze.setTexture3D(H,0),wt=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ze.setTexture2DArray(H,0),wt=F.TEXTURE_2D_ARRAY):(ze.setTexture2D(H,0),wt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const it=F.getParameter(F.UNPACK_ROW_LENGTH),si=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ts=F.getParameter(F.UNPACK_SKIP_PIXELS),oi=F.getParameter(F.UNPACK_SKIP_ROWS),Mo=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ct.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ct.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Fe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ue),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Be);const St=R.isDataArrayTexture||R.isData3DTexture,ei=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){const ci=Ie.get(R),jt=Ie.get(H),ti=Ie.get(ci.__renderTarget),Za=Ie.get(jt.__renderTarget);Se.bindFramebuffer(F.READ_FRAMEBUFFER,ti.__webglFramebuffer),Se.bindFramebuffer(F.DRAW_FRAMEBUFFER,Za.__webglFramebuffer);for(let es=0;es<ve;es++)St&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.get(R).__webglTexture,V,Be+es),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.get(H).__webglTexture,oe,Et+es)),F.blitFramebuffer(Fe,Ue,fe,Me,Ze,ut,fe,Me,F.DEPTH_BUFFER_BIT,F.NEAREST);Se.bindFramebuffer(F.READ_FRAMEBUFFER,null),Se.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||R.isRenderTargetTexture||Ie.has(R)){const ci=Ie.get(R),jt=Ie.get(H);Se.bindFramebuffer(F.READ_FRAMEBUFFER,tm),Se.bindFramebuffer(F.DRAW_FRAMEBUFFER,im);for(let ti=0;ti<ve;ti++)St?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ci.__webglTexture,V,Be+ti):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ci.__webglTexture,V),ei?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.__webglTexture,oe,Et+ti):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,jt.__webglTexture,oe),V!==0?F.blitFramebuffer(Fe,Ue,fe,Me,Ze,ut,fe,Me,F.COLOR_BUFFER_BIT,F.NEAREST):ei?F.copyTexSubImage3D(wt,oe,Ze,ut,Et+ti,Fe,Ue,fe,Me):F.copyTexSubImage2D(wt,oe,Ze,ut,Fe,Ue,fe,Me);Se.bindFramebuffer(F.READ_FRAMEBUFFER,null),Se.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ei?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(wt,oe,Ze,ut,Et,fe,Me,ve,pt,Pe,Ct.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(wt,oe,Ze,ut,Et,fe,Me,ve,pt,Ct.data):F.texSubImage3D(wt,oe,Ze,ut,Et,fe,Me,ve,pt,Pe,Ct):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,oe,Ze,ut,fe,Me,pt,Pe,Ct.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,oe,Ze,ut,Ct.width,Ct.height,pt,Ct.data):F.texSubImage2D(F.TEXTURE_2D,oe,Ze,ut,fe,Me,pt,Pe,Ct);F.pixelStorei(F.UNPACK_ROW_LENGTH,it),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,si),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ts),F.pixelStorei(F.UNPACK_SKIP_ROWS,oi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Mo),oe===0&&H.generateMipmaps&&F.generateMipmap(wt),Se.unbindTexture()},this.initRenderTarget=function(R){Ie.get(R).__webglFramebuffer===void 0&&ze.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ze.setTextureCube(R,0):R.isData3DTexture?ze.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ze.setTexture2DArray(R,0):ze.setTexture2D(R,0),Se.unbindTexture()},this.resetState=function(){L=0,S=0,A=null,Se.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class Ho extends ft{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Te(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Xs=new B,_d=new ke,bd=new ke,Ad=new B,Md=new B;class rb{constructor(e={}){const t=this;let i,n,s,r;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:i,height:n}},this.render=function(m,x){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),_d.copy(x.matrixWorldInverse),bd.multiplyMatrices(x.projectionMatrix,_d),h(m,m,x),this.sortObjects&&f(m)},this.setSize=function(m,x){i=m,n=x,s=i/2,r=n/2,l.style.width=m+"px",l.style.height=x+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let x=0,g=m.children.length;x<g;x++)c(m.children[x])}function h(m,x,g){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){Xs.setFromMatrixPosition(m.matrixWorld),Xs.applyMatrix4(bd);const p=Xs.z>=-1&&Xs.z<=1&&m.layers.test(g.layers)===!0,v=m.element;v.style.display=p===!0?"":"none",p===!0&&(m.onBeforeRender(t,x,g),v.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(Xs.x*s+s)+"px,"+(-Xs.y*r+r)+"px)",v.parentNode!==l&&l.appendChild(v),m.onAfterRender(t,x,g));const _={distanceToCameraSquared:u(g,m)};a.objects.set(m,_)}for(let p=0,v=m.children.length;p<v;p++)h(m.children[p],x,g)}function u(m,x){return Ad.setFromMatrixPosition(m.matrixWorld),Md.setFromMatrixPosition(x.matrixWorld),Ad.distanceToSquared(Md)}function d(m){const x=[];return m.traverseVisible(function(g){g.isCSS2DObject&&x.push(g)}),x}function f(m){const x=d(m).sort(function(p,v){if(p.renderOrder!==v.renderOrder)return v.renderOrder-p.renderOrder;const _=a.objects.get(p).distanceToCameraSquared,b=a.objects.get(v).distanceToCameraSquared;return _-b}),g=x.length;for(let p=0,v=x.length;p<v;p++)x[p].element.style.zIndex=g-p}}}function wd(o,e){if(e===Em)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Gc||e===Xf){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,n=[];if(e===Gc)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class uo extends Ss{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ub(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new Ab(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new Sb(t)})}load(e,t,i,n){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=Jo.extractUrlBase(e);r=Jo.resolveURL(c,this.path)}else r=Jo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Eh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const r={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===vp){try{r[Ke.KHR_BINARY_GLTF]=new Eb(e)}catch(u){n&&n(u);return}s=JSON.parse(r[Ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new kb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:r[u]=new cb;break;case Ke.KHR_DRACO_MESH_COMPRESSION:r[u]=new Cb(s,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:r[u]=new Tb;break;case Ke.KHR_MESH_QUANTIZATION:r[u]=new Rb;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function ab(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lb{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new _e(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Qt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ua(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new lp(h),c.distance=u;break;case"spot":c=new t0(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class cb{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return zt}extendParams(e,t,i){const n=[];e.color=new _e(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Qt),e.opacity=r[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,Gt))}return Promise.all(n)}}class hb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class ub{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(a,a)}return Promise.all(s)}}class db{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class fb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class pb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=n.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Gt)),r.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class mb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class gb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(a[0],a[1],a[2],Qt),Promise.all(s)}}class xb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class vb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(a[0],a[1],a[2],Qt),r.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",r.specularColorTexture,Gt)),Promise.all(s)}}class yb{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class _b{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class bb{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Ab{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=n.images[r.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,r.source,l)}}class Mb{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=n.images[r.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,r.source,l)}}class wb{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class Sb{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==ui.TRIANGLES&&c.mode!==ui.TRIANGLE_STRIP&&c.mode!==ui.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=i.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const x=new ke,g=new B,p=new Wt,v=new B(1,1,1),_=new ip(m.geometry,m.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&v.fromBufferAttribute(l.SCALE,b),_.setMatrixAt(b,x.compose(g,p,v));for(const b in l)if(b==="_COLOR_0"){const C=l[b];_.instanceColor=new wa(C.array,C.itemSize,C.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&m.geometry.setAttribute(b,l[b]);ft.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const vp="glTF",Do=12,Sd={JSON:1313821514,BIN:5130562};class Eb{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Do),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Do,s=new DataView(e,Do);let r=0;for(;r<n;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===Sd.JSON){const c=new Uint8Array(e,Do+r,a);this.content=i.decode(c)}else if(l===Sd.BIN){const c=Do+r;this.body=e.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Cb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const h in r){const u=Xc[h]||h.toLowerCase();a[u]=r[h]}for(const h in e.attributes){const u=Xc[h]||h.toLowerCase();if(r[h]!==void 0){const d=i.accessors[e.attributes[h]],f=Zs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(const m in f.attributes){const x=f.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(f)},a,c,Qt,d)})})}}class Tb{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Rb{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class yp extends ar{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let r=0;r!==n;r++)t[r]=i[s+r];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,m=e*c,x=m-c,g=-2*f+3*d,p=f-d,v=1-g,_=p-d+u;for(let b=0;b!==a;b++){const C=r[x+b+a],M=r[x+b+l]*h,T=r[m+b+a],L=r[m+b]*h;s[b]=v*C+_*M+g*T+p*L}return s}}const Bb=new Wt;class Ib extends yp{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return Bb.fromArray(s).normalize().toArray(s),s}}const ui={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ed={9728:Vt,9729:Zt,9984:Of,9985:ra,9986:Go,9987:Mn},Cd={33071:Xi,33648:_a,10497:no},Dl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Nn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Lb={CUBICSPLINE:void 0,LINEAR:Qo,STEP:Zo},Fl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Pb(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new ws({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:En})),o.DefaultMaterial}function ds(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Oi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Db(o,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;r.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(o.morphAttributes.position=h),n&&(o.morphAttributes.normal=u),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function Fb(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Nb(o){let e;const t=o.extensions&&o.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nl(t.attributes):e=o.indices+":"+Nl(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,n=o.targets.length;i<n;i++)e+=":"+Nl(o.targets[i]);return e}function Nl(o){let e="";const t=Object.keys(o).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+o[t[i]]+";";return e}function qc(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ub(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ob=new ke;class kb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ab,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,r=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&r<98?this.textureLoader=new Zg(this.options.manager):this.textureLoader=new s0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Eh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){const a={scene:r[0][n.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:n.asset,parser:i,userData:{}};return ds(s,a,n),Oi(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const r=e[n];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,h]of r.children.entries())s(h,a.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,r){return i.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,r){i.load(Jo.resolveURL(t.uri,n.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const r=Dl[n.type],a=Zs[n.componentType],l=n.normalized===!0,c=new a(n.count*r);return Promise.resolve(new Kt(c,r,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=Dl[n.type],c=Zs[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0;let x,g;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let _=t.cache.get(v);_||(x=new c(a,p*f,n.count*f/h),_=new wg(x,f/h),t.cache.add(v,_)),g=new gh(_,l,d%f/h,m)}else a===null?x=new c(n.count*l):x=new c(a,d,n.count*l),g=new Kt(x,l,m);if(n.sparse!==void 0){const p=Dl.SCALAR,v=Zs[n.sparse.indices.componentType],_=n.sparse.indices.byteOffset||0,b=n.sparse.values.byteOffset||0,C=new v(r[1],_,n.sparse.count*p),M=new c(r[2],b,n.sparse.count*l);a!==null&&(g=new Kt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,L=C.length;T<L;T++){const S=C[T];if(g.setX(S,M[T*l]),l>=2&&g.setY(S,M[T*l+1]),l>=3&&g.setZ(S,M[T*l+2]),l>=4&&g.setW(S,M[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const l=i.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const n=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=r.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=Ed[d.magFilter]||Zt,h.minFilter=Ed[d.minFilter]||Mn,h.wrapS=Cd[d.wrapS]||no,h.wrapT=Cd[d.wrapT]||no,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Vt&&h.minFilter!==Zt,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=n.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=i.getDependency("bufferView",r.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){const g=new Nt(x);g.needsUpdate=!0,d(g)}),t.load(Jo.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Oi(u,r),u.userData.mimeType=r.mimeType||Ub(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(r=r.clone(),r.channel=i.texCoord),s.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return n!==void 0&&(r.colorSpace=n),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new np,pi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new _h,pi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(n||s||r){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ws}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let r;const a={},l=s.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const u=n[Ke.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new _e(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Qt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Gt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=li);const h=s.alphaMode||Fl.OPAQUE;if(h===Fl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Fl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==zt&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Te(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==zt&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==zt){const u=s.emissiveFactor;a.emissive=new _e().setRGB(u[0],u[1],u[2],Qt)}return s.emissiveTexture!==void 0&&r!==zt&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Gt)),Promise.all(c).then(function(){const u=new r(a);return s.name&&(u.name=s.name),Oi(u,s),t.associations.set(u,{materials:e}),s.extensions&&ds(n,u,s),u})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(a){return i[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Td(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Nb(c),u=n[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Td(new Ut,c,t),n[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?Pb(this.cache):this.getDependency("material",r[l].material);a.push(h)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const x=h[f],g=r[f];let p;const v=c[f];if(g.mode===ui.TRIANGLES||g.mode===ui.TRIANGLE_STRIP||g.mode===ui.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Eg(x,v):new dt(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===ui.TRIANGLE_STRIP?p.geometry=wd(p.geometry,Xf):g.mode===ui.TRIANGLE_FAN&&(p.geometry=wd(p.geometry,Gc));else if(g.mode===ui.LINES)p=new Lg(x,v);else if(g.mode===ui.LINE_STRIP)p=new Fa(x,v);else if(g.mode===ui.LINE_LOOP)p=new Pg(x,v);else if(g.mode===ui.POINTS)p=new Dg(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Fb(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Oi(p,s),g.extensions&&ds(n,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&ds(n,u[0],s),u[0];const d=new Ci;s.extensions&&ds(n,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Jt(mt.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Ua(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Oi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),r=n,a=[],l=[];for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u){a.push(u);const d=new ke;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new vh(a,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,r=[],a=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const f=n.channels[u],m=n.samplers[f.sampler],x=f.target,g=x.node,p=n.parameters!==void 0?n.parameters[m.input]:m.input,v=n.parameters!==void 0?n.parameters[m.output]:m.output;x.node!==void 0&&(r.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(x))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let _=0,b=d.length;_<b;_++){const C=d[_],M=f[_],T=m[_],L=x[_],S=g[_];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const A=i._createAnimationTracks(C,M,T,L,S);if(A)for(let P=0;P<A.length;P++)p.push(A[P])}const v=new qg(s,void 0,p);return Oi(v,n),v})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const r=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=n.weights.length;l<c;l++)a.morphTargetInfluences[l]=n.weights[l]}),r})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),r=[],a=n.children||[];for(let c=0,h=a.length;c<h;c++)r.push(i.getDependency("node",a[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ob)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?n.createUniqueName(s.name):"",a=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new tp:c.length>1?h=new Ci:c.length===1?h=c[0]:h=new ft,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=r),Oi(h,s),s.extensions&&ds(i,h,s),s.matrix!==void 0){const u=new ke;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){const u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new Ci;i.name&&(s.name=n.createUniqueName(i.name)),Oi(s,i),i.extensions&&ds(t,s,i);const r=i.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(n.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof pi||d instanceof Nt)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}_createAnimationTracks(e,t,i,n,s){const r=[],a=e.name?e.name:e.uuid,l=[];Nn[s.path]===Nn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Nn[s.path]){case Nn.weights:c=lo;break;case Nn.rotation:c=co;break;case Nn.translation:case Nn.scale:c=ho;break;default:switch(i.itemSize){case 1:c=lo;break;case 2:case 3:default:c=ho;break}break}const h=n.interpolation!==void 0?Lb[n.interpolation]:Qo,u=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+Nn[s.path],t.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),r.push(m)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=qc(t.constructor),n=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof co?Ib:yp;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Gb(o,e,t){const i=e.attributes,n=new Qi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(n.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const h=qc(Zs[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new B,l=new B;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const x=qc(Zs[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}o.boundingBox=n;const r=new en;n.getCenter(r.center),r.radius=n.min.distanceTo(n.max)/2,o.boundingSphere=r}function Td(o,e,t){const i=e.attributes,n=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in i){const a=Xc[r]||r.toLowerCase();a in o.attributes||n.push(s(i[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});n.push(r)}return tt.workingColorSpace!==Qt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Oi(o,e),Gb(o,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Db(o,e.targets,t):o})}let qr;const Bh=()=>{if(qr)return qr;const o="B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB",e="B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]);if(typeof WebAssembly!="object")return{supported:!1};let n=o;WebAssembly.validate(t)&&(n=e);let s;const r=WebAssembly.instantiate(a(n),{}).then(u=>{s=u.instance,s.exports.__wasm_call_ctors()});function a(u){const d=new Uint8Array(u.length);for(let m=0;m<u.length;++m){const x=u.charCodeAt(m);d[m]=x>96?x-71:x>64?x-65:x>47?x+4:x>46?63:62}let f=0;for(let m=0;m<u.length;++m)d[f++]=d[m]<60?i[d[m]]:(d[m]-60)*64+d[++m];return d.buffer.slice(0,f)}function l(u,d,f,m,x,g){const p=s.exports.sbrk,v=f+3&-4,_=p(v*m),b=p(x.length),C=new Uint8Array(s.exports.memory.buffer);C.set(x,b);const M=u(_,f,m,b,x.length);if(M===0&&g&&g(_,v,m),d.set(C.subarray(_,_+f*m)),p(_-p(0)),M!==0)throw new Error(`Malformed buffer data: ${M}`)}const c={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};return qr={ready:r,supported:!0,decodeVertexBuffer(u,d,f,m,x){l(s.exports.meshopt_decodeVertexBuffer,u,d,f,m,s.exports[c[x]])},decodeIndexBuffer(u,d,f,m){l(s.exports.meshopt_decodeIndexBuffer,u,d,f,m)},decodeIndexSequence(u,d,f,m){l(s.exports.meshopt_decodeIndexSequence,u,d,f,m)},decodeGltfBuffer(u,d,f,m,x,g){l(s.exports[h[x]],u,d,f,m,s.exports[c[g]])}},qr};class Ti{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new w);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new w);const i=this.elements,n=e.x,s=e.y,r=e.z;return t.x=i[0]*n+i[1]*s+i[2]*r,t.y=i[3]*n+i[4]*s+i[5]*r,t.z=i[6]*n+i[7]*s+i[8]*r,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Ti);const i=this.elements,n=e.elements,s=t.elements,r=i[0],a=i[1],l=i[2],c=i[3],h=i[4],u=i[5],d=i[6],f=i[7],m=i[8],x=n[0],g=n[1],p=n[2],v=n[3],_=n[4],b=n[5],C=n[6],M=n[7],T=n[8];return s[0]=r*x+a*v+l*C,s[1]=r*g+a*_+l*M,s[2]=r*p+a*b+l*T,s[3]=c*x+h*v+u*C,s[4]=c*g+h*_+u*M,s[5]=c*p+h*b+u*T,s[6]=d*x+f*v+m*C,s[7]=d*g+f*_+m*M,s[8]=d*p+f*b+m*T,t}scale(e,t){t===void 0&&(t=new Ti);const i=this.elements,n=t.elements;for(let s=0;s!==3;s++)n[3*s+0]=e.x*i[3*s+0],n[3*s+1]=e.y*i[3*s+1],n[3*s+2]=e.z*i[3*s+2];return t}solve(e,t){t===void 0&&(t=new w);const i=3,n=4,s=[];let r,a;for(r=0;r<i*n;r++)s.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)s[r+n*a]=this.elements[r+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let l=3;const c=l;let h;const u=4;let d;do{if(r=c-l,s[r+n*r]===0){for(a=r+1;a<c;a++)if(s[r+n*a]!==0){h=u;do d=u-h,s[d+n*r]+=s[d+n*a];while(--h);break}}if(s[r+n*r]!==0)for(a=r+1;a<c;a++){const f=s[r+n*a]/s[r+n*r];h=u;do d=u-h,s[d+n*a]=d<=r?0:s[d+n*a]-s[d+n*r]*f;while(--h)}}while(--l);if(t.z=s[2*n+3]/s[2*n+2],t.y=(s[1*n+3]-s[1*n+2]*t.z)/s[1*n+1],t.x=(s[0*n+3]-s[0*n+2]*t.z-s[0*n+1]*t.y)/s[0*n+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let i=0;i<9;i++)e+=this.elements[i]+t;return e}reverse(e){e===void 0&&(e=new Ti);const t=3,i=6,n=zb;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)n[s+i*r]=this.elements[s+3*r];n[3+6*0]=1,n[3+6*1]=0,n[3+6*2]=0,n[4+6*0]=0,n[4+6*1]=1,n[4+6*2]=0,n[5+6*0]=0,n[5+6*1]=0,n[5+6*2]=1;let a=3;const l=a;let c;const h=i;let u;do{if(s=l-a,n[s+i*s]===0){for(r=s+1;r<l;r++)if(n[s+i*r]!==0){c=h;do u=h-c,n[u+i*s]+=n[u+i*r];while(--c);break}}if(n[s+i*s]!==0)for(r=s+1;r<l;r++){const d=n[s+i*r]/n[s+i*s];c=h;do u=h-c,n[u+i*r]=u<=s?0:n[u+i*r]-n[u+i*s]*d;while(--c)}}while(--a);s=2;do{r=s-1;do{const d=n[s+i*r]/n[s+i*s];c=i;do u=i-c,n[u+i*r]=n[u+i*r]-n[u+i*s]*d;while(--c)}while(r--)}while(--s);s=2;do{const d=1/n[s+i*s];c=i;do u=i-c,n[u+i*s]=n[u+i*s]*d;while(--c)}while(s--);s=2;do{r=2;do{if(u=n[t+r+i*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,r,u)}while(r--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,i=e.y,n=e.z,s=e.w,r=t+t,a=i+i,l=n+n,c=t*r,h=t*a,u=t*l,d=i*a,f=i*l,m=n*l,x=s*r,g=s*a,p=s*l,v=this.elements;return v[3*0+0]=1-(d+m),v[3*0+1]=h-p,v[3*0+2]=u+g,v[3*1+0]=h+p,v[3*1+1]=1-(c+m),v[3*1+2]=f-x,v[3*2+0]=u-g,v[3*2+1]=f+x,v[3*2+2]=1-(c+d),this}transpose(e){e===void 0&&(e=new Ti);const t=this.elements,i=e.elements;let n;return i[0]=t[0],i[4]=t[4],i[8]=t[8],n=t[1],i[1]=t[3],i[3]=n,n=t[2],i[2]=t[6],i[6]=n,n=t[5],i[5]=t[7],i[7]=n,e}}const zb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.z=i}cross(e,t){t===void 0&&(t=new w);const i=e.x,n=e.y,s=e.z,r=this.x,a=this.y,l=this.z;return t.x=a*s-l*n,t.y=l*i-r*s,t.z=r*n-a*i,t}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new w(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new w(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Ti([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,i=this.z,n=Math.sqrt(e*e+t*t+i*i);if(n>0){const s=1/n;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return n}unit(e){e===void 0&&(e=new w);const t=this.x,i=this.y,n=this.z;let s=Math.sqrt(t*t+i*i+n*n);return s>0?(s=1/s,e.x=t*s,e.y=i*s,e.z=n*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,i=this.z;return Math.sqrt(e*e+t*t+i*i)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,i=this.y,n=this.z,s=e.x,r=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(r-i)*(r-i)+(a-n)*(a-n))}distanceSquared(e){const t=this.x,i=this.y,n=this.z,s=e.x,r=e.y,a=e.z;return(s-t)*(s-t)+(r-i)*(r-i)+(a-n)*(a-n)}scale(e,t){t===void 0&&(t=new w);const i=this.x,n=this.y,s=this.z;return t.x=e*i,t.y=e*n,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new w),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,i){return i===void 0&&(i=new w),i.x=this.x+e*t.x,i.y=this.y+e*t.y,i.z=this.z+e*t.z,i}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new w),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const i=this.length();if(i>0){const n=Hb,s=1/i;n.set(this.x*s,this.y*s,this.z*s);const r=Vb;Math.abs(n.x)<.9?(r.set(1,0,0),n.cross(r,e)):(r.set(0,1,0),n.cross(r,e)),n.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,i){const n=this.x,s=this.y,r=this.z;i.x=n+(e.x-n)*t,i.y=s+(e.y-s)*t,i.z=r+(e.z-r)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Rd),Rd.almostEquals(e,t)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const Hb=new w,Vb=new w,Rd=new w;class At{constructor(e){e===void 0&&(e={}),this.lowerBound=new w,this.upperBound=new w,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,i,n){const s=this.lowerBound,r=this.upperBound,a=i;s.copy(e[0]),a&&a.vmult(s,s),r.copy(s);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Bd),c=Bd),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(r,r)),n&&(s.x-=n,s.y-=n,s.z-=n,r.x+=n,r.y+=n,r.z+=n),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new At().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,i=this.upperBound,n=e.lowerBound,s=e.upperBound,r=n.x<=i.x&&i.x<=s.x||t.x<=s.x&&s.x<=i.x,a=n.y<=i.y&&i.y<=s.y||t.y<=s.y&&s.y<=i.y,l=n.z<=i.z&&i.z<=s.z||t.z<=s.z&&s.z<=i.z;return r&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,i=this.upperBound,n=e.lowerBound,s=e.upperBound;return t.x<=n.x&&i.x>=s.x&&t.y<=n.y&&i.y>=s.y&&t.z<=n.z&&i.z>=s.z}getCorners(e,t,i,n,s,r,a,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),i.set(h.x,h.y,c.z),n.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const i=Id,n=i[0],s=i[1],r=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7];this.getCorners(n,s,r,a,l,c,h,u);for(let d=0;d!==8;d++){const f=i[d];e.pointToLocal(f,f)}return t.setFromPoints(i)}toWorldFrame(e,t){const i=Id,n=i[0],s=i[1],r=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7];this.getCorners(n,s,r,a,l,c,h,u);for(let d=0;d!==8;d++){const f=i[d];e.pointToWorld(f,f)}return t.setFromPoints(i)}overlapsRay(e){const{direction:t,from:i}=e,n=1/t.x,s=1/t.y,r=1/t.z,a=(this.lowerBound.x-i.x)*n,l=(this.upperBound.x-i.x)*n,c=(this.lowerBound.y-i.y)*s,h=(this.upperBound.y-i.y)*s,u=(this.lowerBound.z-i.z)*r,d=(this.upperBound.z-i.z)*r,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(u,d)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(u,d));return!(m<0||f>m)}}const Bd=new w,Id=[new w,new w,new w,new w,new w,new w,new w,new w];class Ld{constructor(){this.matrix=[]}get(e,t){let{index:i}=e,{index:n}=t;if(n>i){const s=n;n=i,i=s}return this.matrix[(i*(i+1)>>1)+n-1]}set(e,t,i){let{index:n}=e,{index:s}=t;if(s>n){const r=s;s=n,n=r}this.matrix[(n*(n+1)>>1)+s-1]=i?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class _p{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[e]===void 0&&(i[e]=[]),i[e].includes(t)||i[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[e]!==void 0&&i[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const i=this._listeners;if(i[e]===void 0)return this;const n=i[e].indexOf(t);return n!==-1&&i[e].splice(n,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const i=this._listeners[e.type];if(i!==void 0){e.target=this;for(let n=0,s=i.length;n<s;n++)i[n].call(this,e)}return this}}class Bt{constructor(e,t,i,n){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=1),this.x=e,this.y=t,this.z=i,this.w=n}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const i=Math.sin(t*.5);return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new w),this.normalize();const t=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/i,e.y=this.y/i,e.z=this.z/i),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const i=Wb,n=Xb;e.tangents(i,n),this.setFromAxisAngle(i,Math.PI)}else{const i=e.cross(t);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Bt);const i=this.x,n=this.y,s=this.z,r=this.w,a=e.x,l=e.y,c=e.z,h=e.w;return t.x=i*h+r*a+n*c-s*l,t.y=n*h+r*l+s*a-i*c,t.z=s*h+r*c+i*l-n*a,t.w=r*h-i*a-n*l-s*c,t}inverse(e){e===void 0&&(e=new Bt);const t=this.x,i=this.y,n=this.z,s=this.w;this.conjugate(e);const r=1/(t*t+i*i+n*n+s*s);return e.x*=r,e.y*=r,e.z*=r,e.w*=r,e}conjugate(e){return e===void 0&&(e=new Bt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new w);const i=e.x,n=e.y,s=e.z,r=this.x,a=this.y,l=this.z,c=this.w,h=c*i+a*s-l*n,u=c*n+l*i-r*s,d=c*s+r*n-a*i,f=-r*i-a*n-l*s;return t.x=h*c+f*-r+u*-l-d*-a,t.y=u*c+f*-a+d*-r-h*-l,t.z=d*c+f*-l+h*-a-u*-r,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let i,n,s;const r=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=r*a+l*c;if(h>.499&&(i=2*Math.atan2(r,c),n=Math.PI/2,s=0),h<-.499&&(i=-2*Math.atan2(r,c),n=-Math.PI/2,s=0),i===void 0){const u=r*r,d=a*a,f=l*l;i=Math.atan2(2*a*c-2*r*l,1-2*d-2*f),n=Math.asin(2*h),s=Math.atan2(2*r*c-2*a*l,1-2*u-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=i,e.z=n,e.x=s}setFromEuler(e,t,i,n){n===void 0&&(n="XYZ");const s=Math.cos(e/2),r=Math.cos(t/2),a=Math.cos(i/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(i/2);return n==="XYZ"?(this.x=l*r*a+s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a-l*c*h):n==="YXZ"?(this.x=l*r*a+s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a+l*c*h):n==="ZXY"?(this.x=l*r*a-s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a-l*c*h):n==="ZYX"?(this.x=l*r*a-s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a+l*c*h):n==="YZX"?(this.x=l*r*a+s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a-l*c*h):n==="XZY"&&(this.x=l*r*a-s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a+l*c*h),this}clone(){return new Bt(this.x,this.y,this.z,this.w)}slerp(e,t,i){i===void 0&&(i=new Bt);const n=this.x,s=this.y,r=this.z,a=this.w;let l=e.x,c=e.y,h=e.z,u=e.w,d,f,m,x,g;return f=n*l+s*c+r*h+a*u,f<0&&(f=-f,l=-l,c=-c,h=-h,u=-u),1-f>1e-6?(d=Math.acos(f),m=Math.sin(d),x=Math.sin((1-t)*d)/m,g=Math.sin(t*d)/m):(x=1-t,g=t),i.x=x*n+g*l,i.y=x*s+g*c,i.z=x*r+g*h,i.w=x*a+g*u,i}integrate(e,t,i,n){n===void 0&&(n=new Bt);const s=e.x*i.x,r=e.y*i.y,a=e.z*i.z,l=this.x,c=this.y,h=this.z,u=this.w,d=t*.5;return n.x+=d*(s*u+r*h-a*c),n.y+=d*(r*u+a*l-s*h),n.z+=d*(a*u+s*c-r*l),n.w+=d*(-s*l-r*c-a*h),n}}const Wb=new w,Xb=new w,qb={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class xe{constructor(e){e===void 0&&(e={}),this.id=xe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,i,n){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}xe.idCounter=0;xe.types=qb;class nt{constructor(e){e===void 0&&(e={}),this.position=new w,this.quaternion=new Bt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return nt.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return nt.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,n){return n===void 0&&(n=new w),i.vsub(e,n),t.conjugate(Pd),Pd.vmult(n,n),n}static pointToWorldFrame(e,t,i,n){return n===void 0&&(n=new w),t.vmult(i,n),n.vadd(e,n),n}static vectorToWorldFrame(e,t,i){return i===void 0&&(i=new w),e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,n){return n===void 0&&(n=new w),t.w*=-1,t.vmult(i,n),t.w*=-1,n}}const Pd=new Bt;class Ko extends xe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:i=[],normals:n=[],axes:s,boundingSphereRadius:r}=e;super({type:xe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=i,this.faceNormals=n,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,i=this.uniqueEdges;i.length=0;const n=new w;for(let s=0;s!==e.length;s++){const r=e[s],a=r.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[r[l]].vsub(t[r[c]],n),n.normalize();let h=!1;for(let u=0;u!==i.length;u++)if(i[u].almostEquals(n)||i[u].almostEquals(n)){h=!0;break}h||i.push(n.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let n=0;n<this.faces[e].length;n++)if(!this.vertices[this.faces[e][n]])throw new Error(`Vertex ${this.faces[e][n]} not found!`);const t=this.faceNormals[e]||new w;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const i=this.vertices[this.faces[e][0]];if(t.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let n=0;n<this.faces[e].length;n++)console.warn(`.vertices[${this.faces[e][n]}] = Vec3(${this.vertices[this.faces[e][n]].toString()})`)}}}getFaceNormal(e,t){const i=this.faces[e],n=this.vertices[i[0]],s=this.vertices[i[1]],r=this.vertices[i[2]];Ko.computeNormal(n,s,r,t)}static computeNormal(e,t,i,n){const s=new w,r=new w;t.vsub(e,r),i.vsub(t,s),s.cross(r,n),n.isZero()||n.normalize()}clipAgainstHull(e,t,i,n,s,r,a,l,c){const h=new w;let u=-1,d=-Number.MAX_VALUE;for(let m=0;m<i.faces.length;m++){h.copy(i.faceNormals[m]),s.vmult(h,h);const x=h.dot(r);x>d&&(d=x,u=m)}const f=[];for(let m=0;m<i.faces[u].length;m++){const x=i.vertices[i.faces[u][m]],g=new w;g.copy(x),s.vmult(g,g),n.vadd(g,g),f.push(g)}u>=0&&this.clipFaceAgainstHull(r,e,t,f,a,l,c)}findSeparatingAxis(e,t,i,n,s,r,a,l){const c=new w,h=new w,u=new w,d=new w,f=new w,m=new w;let x=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){i.vmult(g.uniqueAxes[p],c);const v=g.testSepAxis(c,e,t,i,n,s);if(v===!1)return!1;v<x&&(x=v,r.copy(c))}else{const p=a?a.length:g.faces.length;for(let v=0;v<p;v++){const _=a?a[v]:v;c.copy(g.faceNormals[_]),i.vmult(c,c);const b=g.testSepAxis(c,e,t,i,n,s);if(b===!1)return!1;b<x&&(x=b,r.copy(c))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){s.vmult(e.uniqueAxes[p],h);const v=g.testSepAxis(h,e,t,i,n,s);if(v===!1)return!1;v<x&&(x=v,r.copy(h))}else{const p=l?l.length:e.faces.length;for(let v=0;v<p;v++){const _=l?l[v]:v;h.copy(e.faceNormals[_]),s.vmult(h,h);const b=g.testSepAxis(h,e,t,i,n,s);if(b===!1)return!1;b<x&&(x=b,r.copy(h))}}for(let p=0;p!==g.uniqueEdges.length;p++){i.vmult(g.uniqueEdges[p],d);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],f),d.cross(f,m),!m.almostZero()){m.normalize();const _=g.testSepAxis(m,e,t,i,n,s);if(_===!1)return!1;_<x&&(x=_,r.copy(m))}}return n.vsub(t,u),u.dot(r)>0&&r.negate(r),!0}testSepAxis(e,t,i,n,s,r){const a=this;Ko.project(a,e,i,n,Ul),Ko.project(t,e,s,r,Ol);const l=Ul[0],c=Ul[1],h=Ol[0],u=Ol[1];if(l<u||h<c)return!1;const d=l-u,f=h-c;return d<f?d:f}calculateLocalInertia(e,t){const i=new w,n=new w;this.computeLocalAABB(n,i);const s=i.x-n.x,r=i.y-n.y,a=i.z-n.z;t.x=1/12*e*(2*r*2*r+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],i=this.faceNormals[e],n=this.vertices[t[0]];return-i.dot(n)}clipFaceAgainstHull(e,t,i,n,s,r,a){const l=new w,c=new w,h=new w,u=new w,d=new w,f=new w,m=new w,x=new w,g=this,p=[],v=n,_=p;let b=-1,C=Number.MAX_VALUE;for(let A=0;A<g.faces.length;A++){l.copy(g.faceNormals[A]),i.vmult(l,l);const P=l.dot(e);P<C&&(C=P,b=A)}if(b<0)return;const M=g.faces[b];M.connectedFaces=[];for(let A=0;A<g.faces.length;A++)for(let P=0;P<g.faces[A].length;P++)M.indexOf(g.faces[A][P])!==-1&&A!==b&&M.connectedFaces.indexOf(A)===-1&&M.connectedFaces.push(A);const T=M.length;for(let A=0;A<T;A++){const P=g.vertices[M[A]],U=g.vertices[M[(A+1)%T]];P.vsub(U,c),h.copy(c),i.vmult(h,h),t.vadd(h,h),u.copy(this.faceNormals[b]),i.vmult(u,u),t.vadd(u,u),h.cross(u,d),d.negate(d),f.copy(P),i.vmult(f,f),t.vadd(f,f);const D=M.connectedFaces[A];m.copy(this.faceNormals[D]);const z=this.getPlaneConstantOfFace(D);x.copy(m),i.vmult(x,x);const G=z-x.dot(t);for(this.clipFaceAgainstPlane(v,_,x,G);v.length;)v.shift();for(;_.length;)v.push(_.shift())}m.copy(this.faceNormals[b]);const L=this.getPlaneConstantOfFace(b);x.copy(m),i.vmult(x,x);const S=L-x.dot(t);for(let A=0;A<v.length;A++){let P=x.dot(v[A])+S;if(P<=s&&(console.log(`clamped: depth=${P} to minDist=${s}`),P=s),P<=r){const U=v[A];if(P<=1e-6){const D={point:U,normal:x,depth:P};a.push(D)}}}}clipFaceAgainstPlane(e,t,i,n){let s,r;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];s=i.dot(l)+n;for(let h=0;h<a;h++){if(c=e[h],r=i.dot(c)+n,s<0)if(r<0){const u=new w;u.copy(c),t.push(u)}else{const u=new w;l.lerp(c,s/(s-r),u),t.push(u)}else if(r<0){const u=new w;l.lerp(c,s/(s-r),u),t.push(u),t.push(c)}l=c,s=r}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const i=this.vertices,n=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(i[s],n[s]),e.vadd(n[s],n[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let n=0;n<this.vertices.length;n++){const s=i[n];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new w);const i=this.faceNormals,n=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(i[s],n[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let i=0;i!==t.length;i++){const n=t[i].lengthSquared();n>e&&(e=n)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,n){const s=this.vertices;let r,a,l,c,h,u,d=new w;for(let f=0;f<s.length;f++){d.copy(s[f]),t.vmult(d,d),e.vadd(d,d);const m=d;(r===void 0||m.x<r)&&(r=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(u===void 0||m.z>u)&&(u=m.z)}i.set(r,a,l),n.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new w);const t=this.vertices;for(let i=0;i<t.length;i++)e.vadd(t[i],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const i=this.vertices.length,n=this.vertices;if(t){for(let s=0;s<i;s++){const r=n[s];t.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];t.vmult(r,r)}}if(e)for(let s=0;s<i;s++){const r=n[s];r.vadd(e,r)}}pointIsInside(e){const t=this.vertices,i=this.faces,n=this.faceNormals,s=new w;this.getAveragePointLocal(s);for(let r=0;r<this.faces.length;r++){let a=n[r];const l=t[i[r][0]],c=new w;e.vsub(l,c);const h=a.dot(c),u=new w;s.vsub(l,u);const d=a.dot(u);if(h<0&&d>0||h>0&&d<0)return!1}return-1}static project(e,t,i,n,s){const r=e.vertices.length,a=Jb;let l=0,c=0;const h=Kb,u=e.vertices;h.setZero(),nt.vectorToLocalFrame(i,n,t,a),nt.pointToLocalFrame(i,n,h,h);const d=h.dot(a);c=l=u[0].dot(a);for(let f=1;f<r;f++){const m=u[f].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=d,l-=d,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const Ul=[],Ol=[];new w;const Jb=new w,Kb=new w;class Ih extends xe{constructor(e){super({type:xe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,i=this.halfExtents.z,n=w,s=[new n(-e,-t,-i),new n(e,-t,-i),new n(e,t,-i),new n(-e,t,-i),new n(-e,-t,i),new n(e,-t,i),new n(e,t,i),new n(-e,t,i)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new n(0,0,1),new n(0,1,0),new n(1,0,0)],l=new Ko({vertices:s,faces:r,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new w),Ih.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,i){const n=e;i.x=1/12*t*(2*n.y*2*n.y+2*n.z*2*n.z),i.y=1/12*t*(2*n.x*2*n.x+2*n.z*2*n.z),i.z=1/12*t*(2*n.y*2*n.y+2*n.x*2*n.x)}getSideNormals(e,t){const i=e,n=this.halfExtents;if(i[0].set(n.x,0,0),i[1].set(0,n.y,0),i[2].set(0,0,n.z),i[3].set(-n.x,0,0),i[4].set(0,-n.y,0),i[5].set(0,0,-n.z),t!==void 0)for(let s=0;s!==i.length;s++)t.vmult(i[s],i[s]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,i){const n=this.halfExtents,s=[[n.x,n.y,n.z],[-n.x,n.y,n.z],[-n.x,-n.y,n.z],[-n.x,-n.y,-n.z],[n.x,-n.y,-n.z],[n.x,n.y,-n.z],[-n.x,n.y,-n.z],[n.x,-n.y,n.z]];for(let r=0;r<s.length;r++)Un.set(s[r][0],s[r][1],s[r][2]),t.vmult(Un,Un),e.vadd(Un,Un),i(Un.x,Un.y,Un.z)}calculateWorldAABB(e,t,i,n){const s=this.halfExtents;Di[0].set(s.x,s.y,s.z),Di[1].set(-s.x,s.y,s.z),Di[2].set(-s.x,-s.y,s.z),Di[3].set(-s.x,-s.y,-s.z),Di[4].set(s.x,-s.y,-s.z),Di[5].set(s.x,s.y,-s.z),Di[6].set(-s.x,s.y,-s.z),Di[7].set(s.x,-s.y,s.z);const r=Di[0];t.vmult(r,r),e.vadd(r,r),n.copy(r),i.copy(r);for(let a=1;a<8;a++){const l=Di[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>n.x&&(n.x=c),h>n.y&&(n.y=h),u>n.z&&(n.z=u),c<i.x&&(i.x=c),h<i.y&&(i.y=h),u<i.z&&(i.z=u)}}}const Un=new w,Di=[new w,new w,new w,new w,new w,new w,new w,new w],Lh={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ph={AWAKE:0,SLEEPY:1,SLEEPING:2};class pe extends _p{constructor(e){e===void 0&&(e={}),super(),this.id=pe.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new w,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new w,this.force=new w;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?pe.STATIC:pe.DYNAMIC,typeof e.type==typeof pe.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=pe.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Bt,this.initQuaternion=new Bt,this.previousQuaternion=new Bt,this.interpolatedQuaternion=new Bt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new w,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new Ti,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new Ti,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new w(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new w(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new At,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=pe.AWAKE,this.wakeUpAfterNarrowphase=!1,e===pe.SLEEPING&&this.dispatchEvent(pe.wakeupEvent)}sleep(){this.sleepState=pe.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),n=this.sleepSpeedLimit**2;t===pe.AWAKE&&i<n?(this.sleepState=pe.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(pe.sleepyEvent)):t===pe.SLEEPY&&i>n?this.wakeUp():t===pe.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(pe.sleepEvent))}}updateSolveMassProperties(){this.sleepState===pe.SLEEPING||this.type===pe.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new w),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new w),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}addShape(e,t,i){const n=new w,s=new Bt;return t&&n.copy(t),i&&s.copy(i),this.shapes.push(e),this.shapeOffsets.push(n),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,i=e.length;let n=0;for(let s=0;s!==i;s++){const r=e[s];r.updateBoundingSphereRadius();const a=t[s].length(),l=r.boundingSphereRadius;a+l>n&&(n=a+l)}this.boundingRadius=n}updateAABB(){const e=this.shapes,t=this.shapeOffsets,i=this.shapeOrientations,n=e.length,s=jb,r=Yb,a=this.quaternion,l=this.aabb,c=$b;for(let h=0;h!==n;h++){const u=e[h];a.vmult(t[h],s),s.vadd(this.position,s),a.mult(i[h],r),u.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const i=Zb,n=Qb;i.setRotationFromQuaternion(this.quaternion),i.transpose(n),i.scale(t,i),i.mmult(n,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new w),this.type!==pe.DYNAMIC)return;this.sleepState===pe.SLEEPING&&this.wakeUp();const i=eA;t.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new w),this.type!==pe.DYNAMIC)return;const i=tA,n=iA;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,n),this.applyForce(i,n)}applyTorque(e){this.type===pe.DYNAMIC&&(this.sleepState===pe.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new w),this.type!==pe.DYNAMIC)return;this.sleepState===pe.SLEEPING&&this.wakeUp();const i=t,n=nA;n.copy(e),n.scale(this.invMass,n),this.velocity.vadd(n,this.velocity);const s=sA;i.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new w),this.type!==pe.DYNAMIC)return;const i=oA,n=rA;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,n),this.applyImpulse(i,n)}updateMassProperties(){const e=aA;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ih.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!i?1/t.x:0,t.y>0&&!i?1/t.y:0,t.z>0&&!i?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const i=new w;return e.vsub(this.position,i),this.angularVelocity.cross(i,t),this.velocity.vadd(t,t),t}integrate(e,t,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===pe.DYNAMIC||this.type===pe.KINEMATIC)||this.sleepState===pe.SLEEPING)return;const n=this.velocity,s=this.angularVelocity,r=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,f=h*e;n.x+=a.x*f*d.x,n.y+=a.y*f*d.y,n.z+=a.z*f*d.z;const m=u.elements,x=this.angularFactor,g=l.x*x.x,p=l.y*x.y,v=l.z*x.z;s.x+=e*(m[0]*g+m[1]*p+m[2]*v),s.y+=e*(m[3]*g+m[4]*p+m[5]*v),s.z+=e*(m[6]*g+m[7]*p+m[8]*v),r.x+=n.x*e,r.y+=n.y*e,r.z+=n.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}pe.idCounter=0;pe.COLLIDE_EVENT_NAME="collide";pe.DYNAMIC=Lh.DYNAMIC;pe.STATIC=Lh.STATIC;pe.KINEMATIC=Lh.KINEMATIC;pe.AWAKE=Ph.AWAKE;pe.SLEEPY=Ph.SLEEPY;pe.SLEEPING=Ph.SLEEPING;pe.wakeupEvent={type:"wakeup"};pe.sleepyEvent={type:"sleepy"};pe.sleepEvent={type:"sleep"};const jb=new w,Yb=new Bt,$b=new At,Zb=new Ti,Qb=new Ti;new Ti;const eA=new w,tA=new w,iA=new w,nA=new w,sA=new w,oA=new w,rA=new w,aA=new w;class lA{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&pe.STATIC||e.sleepState===pe.SLEEPING)&&(t.type&pe.STATIC||t.sleepState===pe.SLEEPING))}intersectionTest(e,t,i,n){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,i,n):this.doBoundingSphereBroadphase(e,t,i,n)}doBoundingSphereBroadphase(e,t,i,n){const s=cA;t.position.vsub(e.position,s);const r=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<r&&(i.push(e),n.push(t))}doBoundingBoxBroadphase(e,t,i,n){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(i.push(e),n.push(t))}makePairsUnique(e,t){const i=hA,n=uA,s=dA,r=e.length;for(let a=0;a!==r;a++)n[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==r;a++){const l=n[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;i[h]=a,i.keys.push(h)}for(let a=0;a!==i.keys.length;a++){const l=i.keys.pop(),c=i[l];e.push(n[c]),t.push(s[c]),delete i[l]}}setWorld(e){}static boundingSphereCheck(e,t){const i=new w;e.position.vsub(t.position,i);const n=e.shapes[0],s=t.shapes[0];return Math.pow(n.boundingSphereRadius+s.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(e,t,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const cA=new w;new w;new Bt;new w;const hA={keys:[]},uA=[],dA=[];new w;new w;new w;class bp extends lA{constructor(){super()}collisionPairs(e,t,i){const n=e.bodies,s=n.length;let r,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=n[l],a=n[c],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,t,i)}aabbQuery(e,t,i){i===void 0&&(i=[]);for(let n=0;n<e.bodies.length;n++){const s=e.bodies[n];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&i.push(s)}return i}}class fo{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,i,n,s,r,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(n),this.shape=s,this.body=r,this.distance=a}}let Ap,Mp,wp,Sp,Ep,Cp,Tp;const Dh={CLOSEST:1,ANY:2,ALL:4};Ap=xe.types.SPHERE;Mp=xe.types.PLANE;wp=xe.types.BOX;Sp=xe.types.CYLINDER;Ep=xe.types.CONVEXPOLYHEDRON;Cp=xe.types.HEIGHTFIELD;Tp=xe.types.TRIMESH;class Tt{get[Ap](){return this._intersectSphere}get[Mp](){return this._intersectPlane}get[wp](){return this._intersectBox}get[Sp](){return this._intersectConvex}get[Ep](){return this._intersectConvex}get[Cp](){return this._intersectHeightfield}get[Tp](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new w),t===void 0&&(t=new w),this.from=e.clone(),this.to=t.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Tt.ANY,this.result=new fo,this.hasHit=!1,this.callback=i=>{}}intersectWorld(e,t){return this.mode=t.mode||Tt.ANY,this.result=t.result||new fo,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Dd),kl.length=0,e.broadphase.aabbQuery(e,Dd,kl),this.intersectBodies(kl),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const n=fA,s=pA;for(let r=0,a=e.shapes.length;r<a;r++){const l=e.shapes[r];if(!(i&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[r],s),e.quaternion.vmult(e.shapeOffsets[r],n),n.vadd(e.position,n),this.intersectShape(l,s,n,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let i=0,n=e.length;!this.result.shouldStop&&i<n;i++)this.intersectBody(e[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,i,n){const s=this.from;if(TA(s,this.direction,i)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,i,n,e)}_intersectBox(e,t,i,n,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,i,n,s)}_intersectPlane(e,t,i,n,s){const r=this.from,a=this.to,l=this.direction,c=new w(0,0,1);t.vmult(c,c);const h=new w;r.vsub(i,h);const u=h.dot(c);a.vsub(i,h);const d=h.dot(c);if(u*d>0||r.distanceTo(a)<u)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const m=new w,x=new w,g=new w;r.vsub(i,m);const p=-c.dot(m)/f;l.scale(p,x),r.vadd(x,g),this.reportIntersection(c,g,s,n,-1)}getAABB(e){const{lowerBound:t,upperBound:i}=e,n=this.to,s=this.from;t.x=Math.min(n.x,s.x),t.y=Math.min(n.y,s.y),t.z=Math.min(n.z,s.z),i.x=Math.max(n.x,s.x),i.y=Math.max(n.y,s.y),i.z=Math.max(n.z,s.z)}_intersectHeightfield(e,t,i,n,s){e.data,e.elementSize;const r=mA;r.from.copy(this.from),r.to.copy(this.to),nt.pointToLocalFrame(i,t,r.from,r.from),nt.pointToLocalFrame(i,t,r.to,r.to),r.updateDirection();const a=gA;let l,c,h,u;l=c=0,h=u=e.data.length-1;const d=new At;r.getAABB(d),e.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let f=l;f<h;f++)for(let m=c;m<u;m++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,m,d),!!d.overlapsRay(r)){if(e.getConvexTrianglePillar(f,m,!1),nt.pointToWorldFrame(i,t,e.pillarOffset,Jr),this._intersectConvex(e.pillarConvex,t,Jr,n,s,Fd),this.result.shouldStop)return;e.getConvexTrianglePillar(f,m,!0),nt.pointToWorldFrame(i,t,e.pillarOffset,Jr),this._intersectConvex(e.pillarConvex,t,Jr,n,s,Fd)}}}_intersectSphere(e,t,i,n,s){const r=this.from,a=this.to,l=e.radius,c=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,h=2*((a.x-r.x)*(r.x-i.x)+(a.y-r.y)*(r.y-i.y)+(a.z-r.z)*(r.z-i.z)),u=(r.x-i.x)**2+(r.y-i.y)**2+(r.z-i.z)**2-l**2,d=h**2-4*c*u,f=xA,m=vA;if(!(d<0))if(d===0)r.lerp(a,d,f),f.vsub(i,m),m.normalize(),this.reportIntersection(m,f,s,n,-1);else{const x=(-h-Math.sqrt(d))/(2*c),g=(-h+Math.sqrt(d))/(2*c);if(x>=0&&x<=1&&(r.lerp(a,x,f),f.vsub(i,m),m.normalize(),this.reportIntersection(m,f,s,n,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(r.lerp(a,g,f),f.vsub(i,m),m.normalize(),this.reportIntersection(m,f,s,n,-1))}}_intersectConvex(e,t,i,n,s,r){const a=yA,l=Nd,c=r&&r.faceList||null,h=e.faces,u=e.vertices,d=e.faceNormals,f=this.direction,m=this.from,x=this.to,g=m.distanceTo(x),p=c?c.length:h.length,v=this.result;for(let _=0;!v.shouldStop&&_<p;_++){const b=c?c[_]:_,C=h[b],M=d[b],T=t,L=i;l.copy(u[C[0]]),T.vmult(l,l),l.vadd(L,l),l.vsub(m,l),T.vmult(M,a);const S=f.dot(a);if(Math.abs(S)<this.precision)continue;const A=a.dot(l)/S;if(!(A<0)){f.scale(A,ii),ii.vadd(m,ii),bi.copy(u[C[0]]),T.vmult(bi,bi),L.vadd(bi,bi);for(let P=1;!v.shouldStop&&P<C.length-1;P++){Fi.copy(u[C[P]]),Ni.copy(u[C[P+1]]),T.vmult(Fi,Fi),T.vmult(Ni,Ni),L.vadd(Fi,Fi),L.vadd(Ni,Ni);const U=ii.distanceTo(m);!(Tt.pointInTriangle(ii,bi,Fi,Ni)||Tt.pointInTriangle(ii,Fi,bi,Ni))||U>g||this.reportIntersection(a,ii,s,n,b)}}}}_intersectTrimesh(e,t,i,n,s,r){const a=_A,l=EA,c=CA,h=Nd,u=bA,d=AA,f=MA,m=SA,x=wA,g=e.indices;e.vertices;const p=this.from,v=this.to,_=this.direction;c.position.copy(i),c.quaternion.copy(t),nt.vectorToLocalFrame(i,t,_,u),nt.pointToLocalFrame(i,t,p,d),nt.pointToLocalFrame(i,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,f.vsub(d,u),u.normalize();const b=d.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let C=0,M=l.length;!this.result.shouldStop&&C!==M;C++){const T=l[C];e.getNormal(T,a),e.getVertex(g[T*3],bi),bi.vsub(d,h);const L=u.dot(a),S=a.dot(h)/L;if(S<0)continue;u.scale(S,ii),ii.vadd(d,ii),e.getVertex(g[T*3+1],Fi),e.getVertex(g[T*3+2],Ni);const A=ii.distanceSquared(d);!(Tt.pointInTriangle(ii,Fi,bi,Ni)||Tt.pointInTriangle(ii,bi,Fi,Ni))||A>b||(nt.vectorToWorldFrame(t,a,x),nt.pointToWorldFrame(i,t,ii,m),this.reportIntersection(x,m,s,n,T))}l.length=0}reportIntersection(e,t,i,n,s){const r=this.from,a=this.to,l=r.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Tt.ALL:this.hasHit=!0,c.set(r,a,e,t,i,n,l),c.hasHit=!0,this.callback(c);break;case Tt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,a,e,t,i,n,l));break;case Tt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,a,e,t,i,n,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,i,n){n.vsub(t,vs),i.vsub(t,Fo),e.vsub(t,Gl);const s=vs.dot(vs),r=vs.dot(Fo),a=vs.dot(Gl),l=Fo.dot(Fo),c=Fo.dot(Gl);let h,u;return(h=l*a-r*c)>=0&&(u=s*c-r*a)>=0&&h+u<s*l-r*r}}Tt.CLOSEST=Dh.CLOSEST;Tt.ANY=Dh.ANY;Tt.ALL=Dh.ALL;const Dd=new At,kl=[],Fo=new w,Gl=new w,fA=new w,pA=new Bt,ii=new w,bi=new w,Fi=new w,Ni=new w;new w;new fo;const Fd={faceList:[0]},Jr=new w,mA=new Tt,gA=[],xA=new w,vA=new w,yA=new w;new w;new w;const Nd=new w,_A=new w,bA=new w,AA=new w,MA=new w,wA=new w,SA=new w;new At;const EA=[],CA=new nt,vs=new w,Kr=new w;function TA(o,e,t){t.vsub(o,vs);const i=vs.dot(e);return e.scale(i,Kr),Kr.vadd(o,Kr),t.distanceTo(Kr)}class RA{static defaults(e,t){e===void 0&&(e={});for(let i in t)i in e||(e[i]=t[i]);return e}}class Ud{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class cr{constructor(e,t,i,n){i===void 0&&(i=-1e6),n===void 0&&(n=1e6),this.id=cr.idCounter++,this.minForce=i,this.maxForce=n,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ud,this.jacobianElementB=new Ud,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,i){const n=t,s=e,r=i;this.a=4/(r*(1+4*n)),this.b=4*n/(1+4*n),this.eps=4/(r*r*s*(1+4*n))}computeB(e,t,i){const n=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*e-n*t-r*i}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,s=i.position,r=n.position;return e.spatial.dot(s)+t.spatial.dot(r)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,s=i.velocity,r=n.velocity,a=i.angularVelocity,l=n.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(r,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,s=i.vlambda,r=n.vlambda,a=i.wlambda,l=n.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(r,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,s=i.force,r=i.torque,a=n.force,l=n.torque,c=i.invMassSolve,h=n.invMassSolve;return s.scale(c,Od),a.scale(h,kd),i.invInertiaWorldSolve.vmult(r,Gd),n.invInertiaWorldSolve.vmult(l,zd),e.multiplyVectors(Od,Gd)+t.multiplyVectors(kd,zd)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,s=i.invMassSolve,r=n.invMassSolve,a=i.invInertiaWorldSolve,l=n.invInertiaWorldSolve;let c=s+r;return a.vmult(e.rotational,jr),c+=jr.dot(e.rotational),l.vmult(t.rotational,jr),c+=jr.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,i=this.jacobianElementB,n=this.bi,s=this.bj,r=BA;n.vlambda.addScaledVector(n.invMassSolve*e,t.spatial,n.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,i.spatial,s.vlambda),n.invInertiaWorldSolve.vmult(t.rotational,r),n.wlambda.addScaledVector(e,r,n.wlambda),s.invInertiaWorldSolve.vmult(i.rotational,r),s.wlambda.addScaledVector(e,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}cr.idCounter=0;const Od=new w,kd=new w,Gd=new w,zd=new w,jr=new w,BA=new w;class IA extends cr{constructor(e,t,i){i===void 0&&(i=1e6),super(e,t,0,i),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(e){const t=this.a,i=this.b,n=this.bi,s=this.bj,r=this.ri,a=this.rj,l=LA,c=PA,h=n.velocity,u=n.angularVelocity;n.force,n.torque;const d=s.velocity,f=s.angularVelocity;s.force,s.torque;const m=DA,x=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;r.cross(p,l),a.cross(p,c),p.negate(x.spatial),l.negate(x.rotational),g.spatial.copy(p),g.rotational.copy(c),m.copy(s.position),m.vadd(a,m),m.vsub(n.position,m),m.vsub(r,m);const v=p.dot(m),_=this.restitution+1,b=_*d.dot(p)-_*h.dot(p)+f.dot(c)-u.dot(l),C=this.computeGiMf();return-v*t-b*i-e*C}getImpactVelocityAlongNormal(){const e=FA,t=NA,i=UA,n=OA,s=kA;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,n),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(n,t),e.vsub(t,s),this.ni.dot(s)}}const LA=new w,PA=new w,DA=new w,FA=new w,NA=new w,UA=new w,OA=new w,kA=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Hd extends cr{constructor(e,t,i){super(e,t,-i,i),this.ri=new w,this.rj=new w,this.t=new w}computeB(e){this.a;const t=this.b;this.bi,this.bj;const i=this.ri,n=this.rj,s=GA,r=zA,a=this.t;i.cross(a,s),n.cross(a,r);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(r);const h=this.computeGW(),u=this.computeGiMf();return-h*t-e*u}}const GA=new w,zA=new w;class Kn{constructor(e,t,i){i=RA.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Kn.idCounter++,this.materials=[e,t],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}Kn.idCounter=0;class Ms{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Ms.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Ms.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Tt;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class Fh extends xe{constructor(e){if(super({type:xe.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new w);const i=2*e*this.radius*this.radius/5;return t.x=i,t.y=i,t.z=i,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,i,n){const s=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){const l=r[a];i[l]=e[l]-s,n[l]=e[l]+s}}}new w;new w;new w;new w;new w;new w;new w;new w;new w;class HA extends xe{constructor(){super({type:xe.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new w),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,i,n){fn.set(0,0,1),t.vmult(fn,fn);const s=Number.MAX_VALUE;i.set(-s,-s,-s),n.set(s,s,s),fn.x===1?n.x=e.x:fn.x===-1&&(i.x=e.x),fn.y===1?n.y=e.y:fn.y===-1&&(i.y=e.y),fn.z===1?n.z=e.z:fn.z===-1&&(i.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const fn=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class ki{constructor(e){e===void 0&&(e={}),this.root=e.root||null,this.aabb=e.aabb?e.aabb.clone():new At,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(e,t,i){i===void 0&&(i=0);const n=this.data;if(!this.aabb.contains(e))return!1;const s=this.children,r=this.maxDepth||this.root.maxDepth;if(i<r){let a=!1;s.length||(this.subdivide(),a=!0);for(let l=0;l!==8;l++)if(s[l].insert(e,t,i+1))return!0;a&&(s.length=0)}return n.push(t),!0}subdivide(){const e=this.aabb,t=e.lowerBound,i=e.upperBound,n=this.children;n.push(new ki({aabb:new At({lowerBound:new w(0,0,0)})}),new ki({aabb:new At({lowerBound:new w(1,0,0)})}),new ki({aabb:new At({lowerBound:new w(1,1,0)})}),new ki({aabb:new At({lowerBound:new w(1,1,1)})}),new ki({aabb:new At({lowerBound:new w(0,1,1)})}),new ki({aabb:new At({lowerBound:new w(0,0,1)})}),new ki({aabb:new At({lowerBound:new w(1,0,1)})}),new ki({aabb:new At({lowerBound:new w(0,1,0)})})),i.vsub(t,fs),fs.scale(.5,fs);const s=this.root||this;for(let r=0;r!==8;r++){const a=n[r];a.root=s;const l=a.aabb.lowerBound;l.x*=fs.x,l.y*=fs.y,l.z*=fs.z,l.vadd(t,l),l.vadd(fs,a.aabb.upperBound)}}aabbQuery(e,t){this.data,this.children;const i=[this];for(;i.length;){const n=i.pop();n.aabb.overlaps(e)&&Array.prototype.push.apply(t,n.data),Array.prototype.push.apply(i,n.children)}return t}rayQuery(e,t,i){return e.getAABB(Yr),Yr.toLocalFrame(t,Yr),this.aabbQuery(Yr,i),i}removeEmptyNodes(){for(let e=this.children.length-1;e>=0;e--)this.children[e].removeEmptyNodes(),!this.children[e].children.length&&!this.children[e].data.length&&this.children.splice(e,1)}}class VA extends ki{constructor(e,t){t===void 0&&(t={}),super({root:null,aabb:e}),this.maxDepth=typeof t.maxDepth<"u"?t.maxDepth:8}}const fs=new w,Yr=new At;class Ta extends xe{constructor(e,t){super({type:xe.types.TRIMESH}),this.vertices=new Float32Array(e),this.indices=new Int16Array(t),this.normals=new Float32Array(t.length),this.aabb=new At,this.edges=null,this.scale=new w(1,1,1),this.tree=new VA,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const e=this.tree;e.reset(),e.aabb.copy(this.aabb);const t=this.scale;e.aabb.lowerBound.x*=1/t.x,e.aabb.lowerBound.y*=1/t.y,e.aabb.lowerBound.z*=1/t.z,e.aabb.upperBound.x*=1/t.x,e.aabb.upperBound.y*=1/t.y,e.aabb.upperBound.z*=1/t.z;const i=new At,n=new w,s=new w,r=new w,a=[n,s,r];for(let l=0;l<this.indices.length/3;l++){const c=l*3;this._getUnscaledVertex(this.indices[c],n),this._getUnscaledVertex(this.indices[c+1],s),this._getUnscaledVertex(this.indices[c+2],r),i.setFromPoints(a),e.insert(i,l)}e.removeEmptyNodes()}getTrianglesInAABB(e,t){$r.copy(e);const i=this.scale,n=i.x,s=i.y,r=i.z,a=$r.lowerBound,l=$r.upperBound;return a.x/=n,a.y/=s,a.z/=r,l.x/=n,l.y/=s,l.z/=r,this.tree.aabbQuery($r,t)}setScale(e){const t=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,i=e.x===e.y&&e.y===e.z;t&&i||this.updateNormals(),this.scale.copy(e),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const e=WA,t=this.normals;for(let i=0;i<this.indices.length/3;i++){const n=i*3,s=this.indices[n],r=this.indices[n+1],a=this.indices[n+2];this.getVertex(s,Xd),this.getVertex(r,qd),this.getVertex(a,Jd),Ta.computeNormal(qd,Xd,Jd,e),t[n]=e.x,t[n+1]=e.y,t[n+2]=e.z}}updateEdges(){const e={},t=(n,s)=>{const r=n<s?`${n}_${s}`:`${s}_${n}`;e[r]=!0};for(let n=0;n<this.indices.length/3;n++){const s=n*3,r=this.indices[s],a=this.indices[s+1],l=this.indices[s+2];t(r,a),t(a,l),t(l,r)}const i=Object.keys(e);this.edges=new Int16Array(i.length*2);for(let n=0;n<i.length;n++){const s=i[n].split("_");this.edges[2*n]=parseInt(s[0],10),this.edges[2*n+1]=parseInt(s[1],10)}}getEdgeVertex(e,t,i){const n=this.edges[e*2+(t?1:0)];this.getVertex(n,i)}getEdgeVector(e,t){const i=XA,n=qA;this.getEdgeVertex(e,0,i),this.getEdgeVertex(e,1,n),n.vsub(i,t)}static computeNormal(e,t,i,n){t.vsub(e,Wd),i.vsub(t,Vd),Vd.cross(Wd,n),n.isZero()||n.normalize()}getVertex(e,t){const i=this.scale;return this._getUnscaledVertex(e,t),t.x*=i.x,t.y*=i.y,t.z*=i.z,t}_getUnscaledVertex(e,t){const i=e*3,n=this.vertices;return t.set(n[i],n[i+1],n[i+2])}getWorldVertex(e,t,i,n){return this.getVertex(e,n),nt.pointToWorldFrame(t,i,n,n),n}getTriangleVertices(e,t,i,n){const s=e*3;this.getVertex(this.indices[s],t),this.getVertex(this.indices[s+1],i),this.getVertex(this.indices[s+2],n)}getNormal(e,t){const i=e*3;return t.set(this.normals[i],this.normals[i+1],this.normals[i+2])}calculateLocalInertia(e,t){this.computeLocalAABB(ps);const i=ps.upperBound.x-ps.lowerBound.x,n=ps.upperBound.y-ps.lowerBound.y,s=ps.upperBound.z-ps.lowerBound.z;return t.set(1/12*e*(2*n*2*n+2*s*2*s),1/12*e*(2*i*2*i+2*s*2*s),1/12*e*(2*n*2*n+2*i*2*i))}computeLocalAABB(e){const t=e.lowerBound,i=e.upperBound,n=this.vertices.length;this.vertices;const s=JA;this.getVertex(0,s),t.copy(s),i.copy(s);for(let r=0;r!==n;r++)this.getVertex(r,s),s.x<t.x?t.x=s.x:s.x>i.x&&(i.x=s.x),s.y<t.y?t.y=s.y:s.y>i.y&&(i.y=s.y),s.z<t.z?t.z=s.z:s.z>i.z&&(i.z=s.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let e=0;const t=this.vertices,i=new w;for(let n=0,s=t.length/3;n!==s;n++){this.getVertex(n,i);const r=i.lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,n){const s=KA,r=jA;s.position=e,s.quaternion=t,this.aabb.toWorldFrame(s,r),i.copy(r.lowerBound),n.copy(r.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}static createTorus(e,t,i,n,s){e===void 0&&(e=1),t===void 0&&(t=.5),i===void 0&&(i=8),n===void 0&&(n=6),s===void 0&&(s=Math.PI*2);const r=[],a=[];for(let l=0;l<=i;l++)for(let c=0;c<=n;c++){const h=c/n*s,u=l/i*Math.PI*2,d=(e+t*Math.cos(u))*Math.cos(h),f=(e+t*Math.cos(u))*Math.sin(h),m=t*Math.sin(u);r.push(d,f,m)}for(let l=1;l<=i;l++)for(let c=1;c<=n;c++){const h=(n+1)*l+c-1,u=(n+1)*(l-1)+c-1,d=(n+1)*(l-1)+c,f=(n+1)*l+c;a.push(h,u,f),a.push(u,d,f)}return new Ta(r,a)}}const WA=new w,$r=new At,XA=new w,qA=new w,Vd=new w,Wd=new w,Xd=new w,qd=new w,Jd=new w,ps=new At,JA=new w,KA=new nt,jA=new At;class YA{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,i=t.indexOf(e);i!==-1&&t.splice(i,1)}removeAllEquations(){this.equations.length=0}}class $A extends YA{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let i=0;const n=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,a=r.length,l=t.bodies,c=l.length,h=e;let u,d,f,m,x,g;if(a!==0)for(let b=0;b!==c;b++)l[b].updateSolveMassProperties();const p=QA,v=eM,_=ZA;p.length=a,v.length=a,_.length=a;for(let b=0;b!==a;b++){const C=r[b];_[b]=0,v[b]=C.computeB(h),p[b]=1/C.computeC()}if(a!==0){for(let M=0;M!==c;M++){const T=l[M],L=T.vlambda,S=T.wlambda;L.set(0,0,0),S.set(0,0,0)}for(i=0;i!==n;i++){m=0;for(let M=0;M!==a;M++){const T=r[M];u=v[M],d=p[M],g=_[M],x=T.computeGWlambda(),f=d*(u-x-T.eps*g),g+f<T.minForce?f=T.minForce-g:g+f>T.maxForce&&(f=T.maxForce-g),_[M]+=f,m+=f>0?f:-f,T.addToWlambda(f)}if(m*m<s)break}for(let M=0;M!==c;M++){const T=l[M],L=T.velocity,S=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),L.vadd(T.vlambda,L),T.wlambda.vmul(T.angularFactor,T.wlambda),S.vadd(T.wlambda,S)}let b=r.length;const C=1/h;for(;b--;)r[b].multiplier=_[b]*C}return i}}const ZA=[],QA=[],eM=[];class tM{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class iM extends tM{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const yt={sphereSphere:xe.types.SPHERE,spherePlane:xe.types.SPHERE|xe.types.PLANE,boxBox:xe.types.BOX|xe.types.BOX,sphereBox:xe.types.SPHERE|xe.types.BOX,planeBox:xe.types.PLANE|xe.types.BOX,convexConvex:xe.types.CONVEXPOLYHEDRON,sphereConvex:xe.types.SPHERE|xe.types.CONVEXPOLYHEDRON,planeConvex:xe.types.PLANE|xe.types.CONVEXPOLYHEDRON,boxConvex:xe.types.BOX|xe.types.CONVEXPOLYHEDRON,sphereHeightfield:xe.types.SPHERE|xe.types.HEIGHTFIELD,boxHeightfield:xe.types.BOX|xe.types.HEIGHTFIELD,convexHeightfield:xe.types.CONVEXPOLYHEDRON|xe.types.HEIGHTFIELD,sphereParticle:xe.types.PARTICLE|xe.types.SPHERE,planeParticle:xe.types.PLANE|xe.types.PARTICLE,boxParticle:xe.types.BOX|xe.types.PARTICLE,convexParticle:xe.types.PARTICLE|xe.types.CONVEXPOLYHEDRON,cylinderCylinder:xe.types.CYLINDER,sphereCylinder:xe.types.SPHERE|xe.types.CYLINDER,planeCylinder:xe.types.PLANE|xe.types.CYLINDER,boxCylinder:xe.types.BOX|xe.types.CYLINDER,convexCylinder:xe.types.CONVEXPOLYHEDRON|xe.types.CYLINDER,heightfieldCylinder:xe.types.HEIGHTFIELD|xe.types.CYLINDER,particleCylinder:xe.types.PARTICLE|xe.types.CYLINDER,sphereTrimesh:xe.types.SPHERE|xe.types.TRIMESH,planeTrimesh:xe.types.PLANE|xe.types.TRIMESH};class nM{get[yt.sphereSphere](){return this.sphereSphere}get[yt.spherePlane](){return this.spherePlane}get[yt.boxBox](){return this.boxBox}get[yt.sphereBox](){return this.sphereBox}get[yt.planeBox](){return this.planeBox}get[yt.convexConvex](){return this.convexConvex}get[yt.sphereConvex](){return this.sphereConvex}get[yt.planeConvex](){return this.planeConvex}get[yt.boxConvex](){return this.boxConvex}get[yt.sphereHeightfield](){return this.sphereHeightfield}get[yt.boxHeightfield](){return this.boxHeightfield}get[yt.convexHeightfield](){return this.convexHeightfield}get[yt.sphereParticle](){return this.sphereParticle}get[yt.planeParticle](){return this.planeParticle}get[yt.boxParticle](){return this.boxParticle}get[yt.convexParticle](){return this.convexParticle}get[yt.cylinderCylinder](){return this.convexConvex}get[yt.sphereCylinder](){return this.sphereConvex}get[yt.planeCylinder](){return this.planeConvex}get[yt.boxCylinder](){return this.boxConvex}get[yt.convexCylinder](){return this.convexConvex}get[yt.heightfieldCylinder](){return this.heightfieldCylinder}get[yt.particleCylinder](){return this.particleCylinder}get[yt.sphereTrimesh](){return this.sphereTrimesh}get[yt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new iM,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,i,n,s,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new IA(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&i.collisionResponse&&n.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||e.material,h=n.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||i,a.sj=r||n,a}createFrictionEquationsFromContact(e,t){const i=e.bi,n=e.bj,s=e.si,r=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||i.material,u=r.material||n.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const d=c*(a.frictionGravity||a.gravity).length();let f=i.invMass+n.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,x=m.length?m.pop():new Hd(i,n,d*f),g=m.length?m.pop():new Hd(i,n,d*f);return x.bi=g.bi=i,x.bj=g.bj=n,x.minForce=g.minForce=-d*f,x.maxForce=g.maxForce=d*f,x.ri.copy(e.ri),x.rj.copy(e.rj),g.ri.copy(e.ri),g.rj.copy(e.rj),e.ni.tangents(x.t,g.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=g.enabled=e.enabled,t.push(x,g),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const i=this.frictionResult[this.frictionResult.length-2],n=this.frictionResult[this.frictionResult.length-1];ms.setZero(),qs.setZero(),Js.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(ms.vadd(t.ni,ms),qs.vadd(t.ri,qs),Js.vadd(t.rj,Js)):(ms.vsub(t.ni,ms),qs.vadd(t.rj,qs),Js.vadd(t.ri,Js));const r=1/e;qs.scale(r,i.ri),Js.scale(r,i.rj),n.ri.copy(i.ri),n.rj.copy(i.rj),ms.normalize(),ms.tangents(i.t,n.t)}getContacts(e,t,i,n,s,r,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=n,this.frictionResult=r;const l=rM,c=aM,h=sM,u=oM;for(let d=0,f=e.length;d!==f;d++){const m=e[d],x=t[d];let g=null;m.material&&x.material&&(g=i.getContactMaterial(m.material,x.material)||null);const p=m.type&pe.KINEMATIC&&x.type&pe.STATIC||m.type&pe.STATIC&&x.type&pe.KINEMATIC||m.type&pe.KINEMATIC&&x.type&pe.KINEMATIC;for(let v=0;v<m.shapes.length;v++){m.quaternion.mult(m.shapeOrientations[v],l),m.quaternion.vmult(m.shapeOffsets[v],h),h.vadd(m.position,h);const _=m.shapes[v];for(let b=0;b<x.shapes.length;b++){x.quaternion.mult(x.shapeOrientations[b],c),x.quaternion.vmult(x.shapeOffsets[b],u),u.vadd(x.position,u);const C=x.shapes[b];if(!(_.collisionFilterMask&C.collisionFilterGroup&&C.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(u)>_.boundingSphereRadius+C.boundingSphereRadius)continue;let M=null;_.material&&C.material&&(M=i.getContactMaterial(_.material,C.material)||null),this.currentContactMaterial=M||g||i.defaultContactMaterial;const T=_.type|C.type,L=this[T];if(L){let S=!1;_.type<C.type?S=L.call(this,_,C,h,u,l,c,m,x,_,C,p):S=L.call(this,C,_,u,h,c,l,x,m,_,C,p),S&&p&&(i.shapeOverlapKeeper.set(_.id,C.id),i.bodyOverlapKeeper.set(m.id,x.id))}}}}}sphereSphere(e,t,i,n,s,r,a,l,c,h,u){if(u)return i.distanceSquared(n)<(e.radius+t.radius)**2;const d=this.createContactEquation(a,l,e,t,c,h);n.vsub(i,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(e.radius,d.ri),d.rj.scale(-t.radius,d.rj),d.ri.vadd(i,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(n,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(e,t,i,n,s,r,a,l,c,h,u){const d=this.createContactEquation(a,l,e,t,c,h);if(d.ni.set(0,0,1),r.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(e.radius,d.ri),i.vsub(n,Zr),d.ni.scale(d.ni.dot(Zr),Kd),Zr.vsub(Kd,d.rj),-Zr.dot(d.ni)<=e.radius){if(u)return!0;const f=d.ri,m=d.rj;f.vadd(i,f),f.vsub(a.position,f),m.vadd(n,m),m.vsub(l.position,m),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(e,t,i,n,s,r,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,i,n,s,r,a,l,e,t,u)}sphereBox(e,t,i,n,s,r,a,l,c,h,u){const d=this.v3pool,f=PM;i.vsub(n,Qr),t.getSideNormals(f,r);const m=e.radius;let x=!1;const g=FM,p=NM,v=UM;let _=null,b=0,C=0,M=0,T=null;for(let k=0,j=f.length;k!==j&&x===!1;k++){const W=BM;W.copy(f[k]);const Y=W.length();W.normalize();const ne=Qr.dot(W);if(ne<Y+m&&ne>0){const me=IM,re=LM;me.copy(f[(k+1)%3]),re.copy(f[(k+2)%3]);const Qe=me.length(),st=re.length();me.normalize(),re.normalize();const rt=Qr.dot(me),$=Qr.dot(re);if(rt<Qe&&rt>-Qe&&$<st&&$>-st){const ee=Math.abs(ne-Y-m);if((T===null||ee<T)&&(T=ee,C=rt,M=$,_=Y,g.copy(W),p.copy(me),v.copy(re),b++,u))return!0}}}if(b){x=!0;const k=this.createContactEquation(a,l,e,t,c,h);g.scale(-m,k.ri),k.ni.copy(g),k.ni.negate(k.ni),g.scale(_,g),p.scale(C,p),g.vadd(p,g),v.scale(M,v),g.vadd(v,k.rj),k.ri.vadd(i,k.ri),k.ri.vsub(a.position,k.ri),k.rj.vadd(n,k.rj),k.rj.vsub(l.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}let L=d.get();const S=DM;for(let k=0;k!==2&&!x;k++)for(let j=0;j!==2&&!x;j++)for(let W=0;W!==2&&!x;W++)if(L.set(0,0,0),k?L.vadd(f[0],L):L.vsub(f[0],L),j?L.vadd(f[1],L):L.vsub(f[1],L),W?L.vadd(f[2],L):L.vsub(f[2],L),n.vadd(L,S),S.vsub(i,S),S.lengthSquared()<m*m){if(u)return!0;x=!0;const Y=this.createContactEquation(a,l,e,t,c,h);Y.ri.copy(S),Y.ri.normalize(),Y.ni.copy(Y.ri),Y.ri.scale(m,Y.ri),Y.rj.copy(L),Y.ri.vadd(i,Y.ri),Y.ri.vsub(a.position,Y.ri),Y.rj.vadd(n,Y.rj),Y.rj.vsub(l.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}d.release(L),L=null;const A=d.get(),P=d.get(),U=d.get(),D=d.get(),z=d.get(),G=f.length;for(let k=0;k!==G&&!x;k++)for(let j=0;j!==G&&!x;j++)if(k%3!==j%3){f[j].cross(f[k],A),A.normalize(),f[k].vadd(f[j],P),U.copy(i),U.vsub(P,U),U.vsub(n,U);const W=U.dot(A);A.scale(W,D);let Y=0;for(;Y===k%3||Y===j%3;)Y++;z.copy(i),z.vsub(D,z),z.vsub(P,z),z.vsub(n,z);const ne=Math.abs(W),me=z.length();if(ne<f[Y].length()&&me<m){if(u)return!0;x=!0;const re=this.createContactEquation(a,l,e,t,c,h);P.vadd(D,re.rj),re.rj.copy(re.rj),z.negate(re.ni),re.ni.normalize(),re.ri.copy(re.rj),re.ri.vadd(n,re.ri),re.ri.vsub(i,re.ri),re.ri.normalize(),re.ri.scale(m,re.ri),re.ri.vadd(i,re.ri),re.ri.vsub(a.position,re.ri),re.rj.vadd(n,re.rj),re.rj.vsub(l.position,re.rj),this.result.push(re),this.createFrictionEquationsFromContact(re,this.frictionResult)}}d.release(A,P,U,D,z)}planeBox(e,t,i,n,s,r,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,i,n,s,r,a,l,e,t,u)}convexConvex(e,t,i,n,s,r,a,l,c,h,u,d,f){const m=ZM;if(!(i.distanceTo(n)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,i,s,n,r,m,d,f)){const x=[],g=QM;e.clipAgainstHull(i,s,t,n,r,m,-100,100,x);let p=0;for(let v=0;v!==x.length;v++){if(u)return!0;const _=this.createContactEquation(a,l,e,t,c,h),b=_.ri,C=_.rj;m.negate(_.ni),x[v].normal.negate(g),g.scale(x[v].depth,g),x[v].point.vadd(g,b),C.copy(x[v].point),b.vsub(i,b),C.vsub(n,C),b.vadd(i,b),b.vsub(a.position,b),C.vadd(n,C),C.vsub(l.position,C),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,i,n,s,r,a,l,c,h,u){const d=this.v3pool;i.vsub(n,OM);const f=t.faceNormals,m=t.faces,x=t.vertices,g=e.radius;let p=!1;for(let v=0;v!==x.length;v++){const _=x[v],b=HM;r.vmult(_,b),n.vadd(b,b);const C=zM;if(b.vsub(i,C),C.lengthSquared()<g*g){if(u)return!0;p=!0;const M=this.createContactEquation(a,l,e,t,c,h);M.ri.copy(C),M.ri.normalize(),M.ni.copy(M.ri),M.ri.scale(g,M.ri),b.vsub(n,M.rj),M.ri.vadd(i,M.ri),M.ri.vsub(a.position,M.ri),M.rj.vadd(n,M.rj),M.rj.vsub(l.position,M.rj),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult);return}}for(let v=0,_=m.length;v!==_&&p===!1;v++){const b=f[v],C=m[v],M=VM;r.vmult(b,M);const T=WM;r.vmult(x[C[0]],T),T.vadd(n,T);const L=XM;M.scale(-g,L),i.vadd(L,L);const S=qM;L.vsub(T,S);const A=S.dot(M),P=JM;if(i.vsub(T,P),A<0&&P.dot(M)>0){const U=[];for(let D=0,z=C.length;D!==z;D++){const G=d.get();r.vmult(x[C[D]],G),n.vadd(G,G),U.push(G)}if(RM(U,M,i)){if(u)return!0;p=!0;const D=this.createContactEquation(a,l,e,t,c,h);M.scale(-g,D.ri),M.negate(D.ni);const z=d.get();M.scale(-A,z);const G=d.get();M.scale(-g,G),i.vsub(n,D.rj),D.rj.vadd(G,D.rj),D.rj.vadd(z,D.rj),D.rj.vadd(n,D.rj),D.rj.vsub(l.position,D.rj),D.ri.vadd(i,D.ri),D.ri.vsub(a.position,D.ri),d.release(z),d.release(G),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let k=0,j=U.length;k!==j;k++)d.release(U[k]);return}else for(let D=0;D!==C.length;D++){const z=d.get(),G=d.get();r.vmult(x[C[(D+1)%C.length]],z),r.vmult(x[C[(D+2)%C.length]],G),n.vadd(z,z),n.vadd(G,G);const k=kM;G.vsub(z,k);const j=GM;k.unit(j);const W=d.get(),Y=d.get();i.vsub(z,Y);const ne=Y.dot(j);j.scale(ne,W),W.vadd(z,W);const me=d.get();if(W.vsub(i,me),ne>0&&ne*ne<k.lengthSquared()&&me.lengthSquared()<g*g){if(u)return!0;const re=this.createContactEquation(a,l,e,t,c,h);W.vsub(n,re.rj),W.vsub(i,re.ni),re.ni.normalize(),re.ni.scale(g,re.ri),re.rj.vadd(n,re.rj),re.rj.vsub(l.position,re.rj),re.ri.vadd(i,re.ri),re.ri.vsub(a.position,re.ri),this.result.push(re),this.createFrictionEquationsFromContact(re,this.frictionResult);for(let Qe=0,st=U.length;Qe!==st;Qe++)d.release(U[Qe]);d.release(z),d.release(G),d.release(W),d.release(me),d.release(Y);return}d.release(z),d.release(G),d.release(W),d.release(me),d.release(Y)}for(let D=0,z=U.length;D!==z;D++)d.release(U[D])}}}planeConvex(e,t,i,n,s,r,a,l,c,h,u){const d=KM,f=jM;f.set(0,0,1),s.vmult(f,f);let m=0;const x=YM;for(let g=0;g!==t.vertices.length;g++)if(d.copy(t.vertices[g]),r.vmult(d,d),n.vadd(d,d),d.vsub(i,x),f.dot(x)<=0){if(u)return!0;const v=this.createContactEquation(a,l,e,t,c,h),_=$M;f.scale(f.dot(x),_),d.vsub(_,_),_.vsub(i,v.ri),v.ni.copy(f),d.vsub(n,v.rj),v.ri.vadd(i,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(n,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(e,t,i,n,s,r,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,i,n,s,r,a,l,e,t,u)}sphereHeightfield(e,t,i,n,s,r,a,l,c,h,u){const d=t.data,f=e.radius,m=t.elementSize,x=uw,g=hw;nt.pointToLocalFrame(n,r,i,g);let p=Math.floor((g.x-f)/m)-1,v=Math.ceil((g.x+f)/m)+1,_=Math.floor((g.y-f)/m)-1,b=Math.ceil((g.y+f)/m)+1;if(v<0||b<0||p>d.length||_>d[0].length)return;p<0&&(p=0),v<0&&(v=0),_<0&&(_=0),b<0&&(b=0),p>=d.length&&(p=d.length-1),v>=d.length&&(v=d.length-1),b>=d[0].length&&(b=d[0].length-1),_>=d[0].length&&(_=d[0].length-1);const C=[];t.getRectMinMax(p,_,v,b,C);const M=C[0],T=C[1];if(g.z-f>T||g.z+f<M)return;const L=this.result;for(let S=p;S<v;S++)for(let A=_;A<b;A++){const P=L.length;let U=!1;if(t.getConvexTrianglePillar(S,A,!1),nt.pointToWorldFrame(n,r,t.pillarOffset,x),i.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.sphereConvex(e,t.pillarConvex,i,x,s,r,a,l,e,t,u)),u&&U||(t.getConvexTrianglePillar(S,A,!0),nt.pointToWorldFrame(n,r,t.pillarOffset,x),i.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.sphereConvex(e,t.pillarConvex,i,x,s,r,a,l,e,t,u)),u&&U))return!0;if(L.length-P>2)return}}boxHeightfield(e,t,i,n,s,r,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,i,n,s,r,a,l,e,t,u)}convexHeightfield(e,t,i,n,s,r,a,l,c,h,u){const d=t.data,f=t.elementSize,m=e.boundingSphereRadius,x=lw,g=cw,p=aw;nt.pointToLocalFrame(n,r,i,p);let v=Math.floor((p.x-m)/f)-1,_=Math.ceil((p.x+m)/f)+1,b=Math.floor((p.y-m)/f)-1,C=Math.ceil((p.y+m)/f)+1;if(_<0||C<0||v>d.length||b>d[0].length)return;v<0&&(v=0),_<0&&(_=0),b<0&&(b=0),C<0&&(C=0),v>=d.length&&(v=d.length-1),_>=d.length&&(_=d.length-1),C>=d[0].length&&(C=d[0].length-1),b>=d[0].length&&(b=d[0].length-1);const M=[];t.getRectMinMax(v,b,_,C,M);const T=M[0],L=M[1];if(!(p.z-m>L||p.z+m<T))for(let S=v;S<_;S++)for(let A=b;A<C;A++){let P=!1;if(t.getConvexTrianglePillar(S,A,!1),nt.pointToWorldFrame(n,r,t.pillarOffset,x),i.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(P=this.convexConvex(e,t.pillarConvex,i,x,s,r,a,l,null,null,u,g,null)),u&&P||(t.getConvexTrianglePillar(S,A,!0),nt.pointToWorldFrame(n,r,t.pillarOffset,x),i.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(P=this.convexConvex(e,t.pillarConvex,i,x,s,r,a,l,null,null,u,g,null)),u&&P))return!0}}sphereParticle(e,t,i,n,s,r,a,l,c,h,u){const d=nw;if(d.set(0,0,1),n.vsub(i,d),d.lengthSquared()<=e.radius*e.radius){if(u)return!0;const m=this.createContactEquation(l,a,t,e,c,h);d.normalize(),m.rj.copy(d),m.rj.scale(e.radius,m.rj),m.ni.copy(d),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(e,t,i,n,s,r,a,l,c,h,u){const d=ew;d.set(0,0,1),a.quaternion.vmult(d,d);const f=tw;if(n.vsub(a.position,f),d.dot(f)<=0){if(u)return!0;const x=this.createContactEquation(l,a,t,e,c,h);x.ni.copy(d),x.ni.negate(x.ni),x.ri.set(0,0,0);const g=iw;d.scale(d.dot(n),g),n.vsub(g,g),x.rj.copy(g),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(e,t,i,n,s,r,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,i,n,s,r,a,l,e,t,u)}convexParticle(e,t,i,n,s,r,a,l,c,h,u){let d=-1;const f=ow,m=rw;let x=null;const g=sw;if(g.copy(n),g.vsub(i,g),s.conjugate(jd),jd.vmult(g,g),e.pointIsInside(g)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(i,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let p=0,v=e.faces.length;p!==v;p++){const _=[e.worldVertices[e.faces[p][0]]],b=e.worldFaceNormals[p];n.vsub(_[0],Yd);const C=-b.dot(Yd);if(x===null||Math.abs(C)<Math.abs(x)){if(u)return!0;x=C,d=p,f.copy(b)}}if(d!==-1){const p=this.createContactEquation(l,a,t,e,c,h);f.scale(x,m),m.vadd(n,m),m.vsub(i,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,_=p.rj;v.vadd(n,v),v.vsub(l.position,v),_.vadd(i,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,i,n,s,r,a,l,c,h,u){return this.convexHeightfield(t,e,n,i,r,s,l,a,c,h,u)}particleCylinder(e,t,i,n,s,r,a,l,c,h,u){return this.convexParticle(t,e,n,i,r,s,l,a,c,h,u)}sphereTrimesh(e,t,i,n,s,r,a,l,c,h,u){const d=mM,f=gM,m=xM,x=vM,g=yM,p=_M,v=wM,_=pM,b=dM,C=SM;nt.pointToLocalFrame(n,r,i,g);const M=e.radius;v.lowerBound.set(g.x-M,g.y-M,g.z-M),v.upperBound.set(g.x+M,g.y+M,g.z+M),t.getTrianglesInAABB(v,C);const T=fM,L=e.radius*e.radius;for(let D=0;D<C.length;D++)for(let z=0;z<3;z++)if(t.getVertex(t.indices[C[D]*3+z],T),T.vsub(g,b),b.lengthSquared()<=L){if(_.copy(T),nt.pointToWorldFrame(n,r,_,T),T.vsub(i,b),u)return!0;let G=this.createContactEquation(a,l,e,t,c,h);G.ni.copy(b),G.ni.normalize(),G.ri.copy(G.ni),G.ri.scale(e.radius,G.ri),G.ri.vadd(i,G.ri),G.ri.vsub(a.position,G.ri),G.rj.copy(T),G.rj.vsub(l.position,G.rj),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}for(let D=0;D<C.length;D++)for(let z=0;z<3;z++){t.getVertex(t.indices[C[D]*3+z],d),t.getVertex(t.indices[C[D]*3+(z+1)%3],f),f.vsub(d,m),g.vsub(f,p);const G=p.dot(m);g.vsub(d,p);let k=p.dot(m);if(k>0&&G<0&&(g.vsub(d,p),x.copy(m),x.normalize(),k=p.dot(x),x.scale(k,p),p.vadd(d,p),p.distanceTo(g)<e.radius)){if(u)return!0;const W=this.createContactEquation(a,l,e,t,c,h);p.vsub(g,W.ni),W.ni.normalize(),W.ni.scale(e.radius,W.ri),W.ri.vadd(i,W.ri),W.ri.vsub(a.position,W.ri),nt.pointToWorldFrame(n,r,p,p),p.vsub(l.position,W.rj),nt.vectorToWorldFrame(r,W.ni,W.ni),nt.vectorToWorldFrame(r,W.ri,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}const S=bM,A=AM,P=MM,U=uM;for(let D=0,z=C.length;D!==z;D++){t.getTriangleVertices(C[D],S,A,P),t.getNormal(C[D],U),g.vsub(S,p);let G=p.dot(U);if(U.scale(G,p),g.vsub(p,p),G=p.distanceTo(g),Tt.pointInTriangle(p,S,A,P)&&G<e.radius){if(u)return!0;let k=this.createContactEquation(a,l,e,t,c,h);p.vsub(g,k.ni),k.ni.normalize(),k.ni.scale(e.radius,k.ri),k.ri.vadd(i,k.ri),k.ri.vsub(a.position,k.ri),nt.pointToWorldFrame(n,r,p,p),p.vsub(l.position,k.rj),nt.vectorToWorldFrame(r,k.ni,k.ni),nt.vectorToWorldFrame(r,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}C.length=0}planeTrimesh(e,t,i,n,s,r,a,l,c,h,u){const d=new w,f=lM;f.set(0,0,1),s.vmult(f,f);for(let m=0;m<t.vertices.length/3;m++){t.getVertex(m,d);const x=new w;x.copy(d),nt.pointToWorldFrame(n,r,x,d);const g=cM;if(d.vsub(i,g),f.dot(g)<=0){if(u)return!0;const v=this.createContactEquation(a,l,e,t,c,h);v.ni.copy(f);const _=hM;f.scale(g.dot(f),_),d.vsub(_,_),v.ri.copy(_),v.ri.vsub(a.position,v.ri),v.rj.copy(d),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const ms=new w,qs=new w,Js=new w,sM=new w,oM=new w,rM=new Bt,aM=new Bt,lM=new w,cM=new w,hM=new w,uM=new w,dM=new w;new w;const fM=new w,pM=new w,mM=new w,gM=new w,xM=new w,vM=new w,yM=new w,_M=new w,bM=new w,AM=new w,MM=new w,wM=new At,SM=[],Zr=new w,Kd=new w,EM=new w,CM=new w,TM=new w;function RM(o,e,t){let i=null;const n=o.length;for(let s=0;s!==n;s++){const r=o[s],a=EM;o[(s+1)%n].vsub(r,a);const l=CM;a.cross(e,l);const c=TM;t.vsub(r,c);const h=l.dot(c);if(i===null||h>0&&i===!0||h<=0&&i===!1){i===null&&(i=h>0);continue}else return!1}return!0}const Qr=new w,BM=new w,IM=new w,LM=new w,PM=[new w,new w,new w,new w,new w,new w],DM=new w,FM=new w,NM=new w,UM=new w,OM=new w,kM=new w,GM=new w,zM=new w,HM=new w,VM=new w,WM=new w,XM=new w,qM=new w,JM=new w;new w;new w;const KM=new w,jM=new w,YM=new w,$M=new w,ZM=new w,QM=new w,ew=new w,tw=new w,iw=new w,nw=new w,jd=new Bt,sw=new w;new w;const ow=new w,Yd=new w,rw=new w,aw=new w,lw=new w,cw=[0],hw=new w,uw=new w;class $d{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const i=t;t=e,e=i}return e<<16|t}set(e,t){const i=this.getKey(e,t),n=this.current;let s=0;for(;i>n[s];)s++;if(i!==n[s]){for(let r=n.length-1;r>=s;r--)n[r+1]=n[r];n[s]=i}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const i=this.current,n=this.previous,s=i.length,r=n.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=h===n[a],c||Zd(e,h)}a=0;for(let l=0;l<r;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=i[a]===h,c||Zd(t,h)}}}function Zd(o,e){o.push((e&4294901760)>>16,e&65535)}const zl=(o,e)=>o<e?`${o}-${e}`:`${e}-${o}`;class dw{constructor(){this.data={keys:[]}}get(e,t){const i=zl(e,t);return this.data[i]}set(e,t,i){const n=zl(e,t);this.get(e,t)||this.data.keys.push(n),this.data[n]=i}delete(e,t){const i=zl(e,t),n=this.data.keys.indexOf(i);n!==-1&&this.data.keys.splice(n,1),delete this.data[i]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const i=t.pop();delete e[i]}}}let fw=class extends _p{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new bp,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new $A,this.constraints=[],this.narrowphase=new nM(this),this.collisionMatrix=new Ld,this.collisionMatrixPrevious=new Ld,this.bodyOverlapKeeper=new $d,this.shapeOverlapKeeper=new $d,this.contactmaterials=[],this.contactMaterialTable=new dw,this.defaultMaterial=new Ms("default"),this.defaultContactMaterial=new Kn(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,i){i instanceof fo?this.raycastClosest(e,t,{skipBackfaces:!0},i):this.raycastAll(e,t,{skipBackfaces:!0},i)}raycastAll(e,t,i,n){return i===void 0&&(i={}),i.mode=Tt.ALL,i.from=e,i.to=t,i.callback=n,Hl.intersectWorld(this,i)}raycastAny(e,t,i,n){return i===void 0&&(i={}),i.mode=Tt.ANY,i.from=e,i.to=t,i.result=n,Hl.intersectWorld(this,i)}raycastClosest(e,t,i,n){return i===void 0&&(i={}),i.mode=Tt.CLOSEST,i.from=e,i.to=t,i.result=n,Hl.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof pe&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,i=this.bodies,n=i.indexOf(e);if(n!==-1){i.splice(n,1);for(let s=0;s!==i.length;s++)i[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let i=0;i<t.length;i++){const n=t[i].shapes;for(let s=0;s<n.length;s++){const r=n[s];if(r.id===e)return r}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const i=Lt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const n=i-this.lastCallTime;this.step(e,n,t)}this.lastCallTime=i}step(e,t,i){if(i===void 0&&(i=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const n=Lt.now();let s=0;for(;this.accumulator>=e&&s<i&&(this.internalStep(e),this.accumulator-=e,s++,!(Lt.now()-n>e*1e3)););this.accumulator=this.accumulator%e;const r=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,i=vw,n=yw,s=this.bodies.length,r=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=pe.DYNAMIC;let d=-1/0;const f=this.constraints,m=xw;l.length();const x=l.x,g=l.y,p=l.z;let v=0;for(c&&(d=Lt.now()),v=0;v!==s;v++){const D=r[v];if(D.type===u){const z=D.force,G=D.mass;z.x+=G*x,z.y+=G*g,z.z+=G*p}}for(let D=0,z=this.subsystems.length;D!==z;D++)this.subsystems[D].update();c&&(d=Lt.now()),i.length=0,n.length=0,this.broadphase.collisionPairs(this,i,n),c&&(h.broadphase=Lt.now()-d);let _=f.length;for(v=0;v!==_;v++){const D=f[v];if(!D.collideConnected)for(let z=i.length-1;z>=0;z-=1)(D.bodyA===i[z]&&D.bodyB===n[z]||D.bodyB===i[z]&&D.bodyA===n[z])&&(i.splice(z,1),n.splice(z,1))}this.collisionMatrixTick(),c&&(d=Lt.now());const b=gw,C=t.length;for(v=0;v!==C;v++)b.push(t[v]);t.length=0;const M=this.frictionEquations.length;for(v=0;v!==M;v++)m.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,n,this,t,b,this.frictionEquations,m),c&&(h.narrowphase=Lt.now()-d),c&&(d=Lt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const T=t.length;for(let D=0;D!==T;D++){const z=t[D],G=z.bi,k=z.bj,j=z.si,W=z.sj;let Y;if(G.material&&k.material?Y=this.getContactMaterial(G.material,k.material)||this.defaultContactMaterial:Y=this.defaultContactMaterial,Y.friction,G.material&&k.material&&(G.material.friction>=0&&k.material.friction>=0&&G.material.friction*k.material.friction,G.material.restitution>=0&&k.material.restitution>=0&&(z.restitution=G.material.restitution*k.material.restitution)),a.addEquation(z),G.allowSleep&&G.type===pe.DYNAMIC&&G.sleepState===pe.SLEEPING&&k.sleepState===pe.AWAKE&&k.type!==pe.STATIC){const ne=k.velocity.lengthSquared()+k.angularVelocity.lengthSquared(),me=k.sleepSpeedLimit**2;ne>=me*2&&(G.wakeUpAfterNarrowphase=!0)}if(k.allowSleep&&k.type===pe.DYNAMIC&&k.sleepState===pe.SLEEPING&&G.sleepState===pe.AWAKE&&G.type!==pe.STATIC){const ne=G.velocity.lengthSquared()+G.angularVelocity.lengthSquared(),me=G.sleepSpeedLimit**2;ne>=me*2&&(k.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(G,k,!0),this.collisionMatrixPrevious.get(G,k)||(No.body=k,No.contact=z,G.dispatchEvent(No),No.body=G,k.dispatchEvent(No)),this.bodyOverlapKeeper.set(G.id,k.id),this.shapeOverlapKeeper.set(j.id,W.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Lt.now()-d,d=Lt.now()),v=0;v!==s;v++){const D=r[v];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(_=f.length,v=0;v!==_;v++){const D=f[v];D.update();for(let z=0,G=D.equations.length;z!==G;z++){const k=D.equations[z];a.addEquation(k)}}a.solve(e,this),c&&(h.solve=Lt.now()-d),a.removeAllEquations();const L=Math.pow;for(v=0;v!==s;v++){const D=r[v];if(D.type&u){const z=L(1-D.linearDamping,e),G=D.velocity;G.scale(z,G);const k=D.angularVelocity;if(k){const j=L(1-D.angularDamping,e);k.scale(j,k)}}}this.dispatchEvent(mw),c&&(d=Lt.now());const A=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(v=0;v!==s;v++)r[v].integrate(e,A,P);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Lt.now()-d),this.stepnumber+=1,this.dispatchEvent(pw);let U=!0;if(this.allowSleep)for(U=!1,v=0;v!==s;v++){const D=r[v];D.sleepTick(this.time),D.sleepState!==pe.SLEEPING&&(U=!0)}this.hasActiveBodies=U}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(pn,mn),e){for(let s=0,r=pn.length;s<r;s+=2)Uo.bodyA=this.getBodyById(pn[s]),Uo.bodyB=this.getBodyById(pn[s+1]),this.dispatchEvent(Uo);Uo.bodyA=Uo.bodyB=null}if(t){for(let s=0,r=mn.length;s<r;s+=2)Oo.bodyA=this.getBodyById(mn[s]),Oo.bodyB=this.getBodyById(mn[s+1]),this.dispatchEvent(Oo);Oo.bodyA=Oo.bodyB=null}pn.length=mn.length=0;const i=this.hasAnyEventListener("beginShapeContact"),n=this.hasAnyEventListener("endShapeContact");if((i||n)&&this.shapeOverlapKeeper.getDiff(pn,mn),i){for(let s=0,r=pn.length;s<r;s+=2){const a=this.getShapeById(pn[s]),l=this.getShapeById(pn[s+1]);gn.shapeA=a,gn.shapeB=l,a&&(gn.bodyA=a.body),l&&(gn.bodyB=l.body),this.dispatchEvent(gn)}gn.bodyA=gn.bodyB=gn.shapeA=gn.shapeB=null}if(n){for(let s=0,r=mn.length;s<r;s+=2){const a=this.getShapeById(mn[s]),l=this.getShapeById(mn[s+1]);xn.shapeA=a,xn.shapeB=l,a&&(xn.bodyA=a.body),l&&(xn.bodyB=l.body),this.dispatchEvent(xn)}xn.bodyA=xn.bodyB=xn.shapeA=xn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let i=0;i!==t;i++){const n=e[i];n.force,n.torque,n.force.set(0,0,0),n.torque.set(0,0,0)}}};new At;const Hl=new Tt,Lt=globalThis.performance||{};if(!Lt.now){let o=Date.now();Lt.timing&&Lt.timing.navigationStart&&(o=Lt.timing.navigationStart),Lt.now=()=>Date.now()-o}new w;const pw={type:"postStep"},mw={type:"preStep"},No={type:pe.COLLIDE_EVENT_NAME,body:null,contact:null},gw=[],xw=[],vw=[],yw=[],pn=[],mn=[],Uo={type:"beginContact",bodyA:null,bodyB:null},Oo={type:"endContact",bodyA:null,bodyB:null},gn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},xn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},y={gravity:-21.39,friction:0,restitution:.336,moveSpeed:8.5,jumpVelocity:19.5,rotationSpeed:10.077,airControl:.5,hopHeight:.545,hopSpeed:7.119,talkSpeed:4.335,linearDamping:.93,legKickForce:.466,legKickDecay:7.4854,walkLegSpeed:1.0424,walkLegHeight:.754,sunIntensity:2.97,ambientIntensity:2,shadowEnabled:!0,shadowMapSize:2048,shadowType:"Basic",shadowRadius:4,shadowBlurSamples:32,shadowBias:800000000000002e-19,shadowNormalBias:.0428,shadowIntensity:.8,shadowCameraNear:1.6444,shadowCameraFar:119.27,shadowCameraSize:55.03,shadowCameraLeft:-50,shadowCameraRight:50,shadowCameraTop:50,shadowCameraBottom:-50,shadowAutoUpdate:!0,shadowCascades:1,toonEnabled:!1,outlineEnabled:!1,outlineIntensity:.471,saonEnabled:!1,hemiSkyColor:1427122,hemiGroundColor:12198177,hemiIntensity:3,rimColor:16763402,rimIntensity:1.885,rimPosX:23.6,rimPosY:18.9,rimPosZ:4.2,auraIntensity:0,auraDistance:6,auraColor:62207,useShader:!0,shaderSaturation:1.15,shaderBrightness:.05,shaderContrast:1.1,shaderGamma:1,shaderTintR:1,shaderTintG:1,shaderTintB:1,shaderTemperature:0,vignetteEnabled:!0,vignetteIntensity:.267,vignetteRadius:.661,vignetteSoftness:.35,chromaticEnabled:!1,chromaticIntensity:.005,chromaticRadial:!0,grainEnabled:!1,grainIntensity:.02,grainSpeed:.1,grainSize:3.5,sharpenEnabled:!1,sharpenIntensity:1,bloomEnabled:!1,bloomIntensity:1.566,bloomThreshold:.2,bloomRadius:.05,cameraHeight:15,cameraDistance:16.34,cameraLerp:.15471,cameraMinDistance:4.591,cameraMaxDistance:20,cameraZoomSpeed:1.7555,cameraRotateSpeed:.006662,cameraMinPitch:.1,cameraMaxPitch:1.4,cameraOrbitAngle:0,cameraPitchAngle:.6,spectatorDistance:34.04,spectatorPitch:.1,spectatorSpeed:.22866,spectatorHeight:8.7,jiggleEnabled:!0,jiggleIntensity:.15,jiggleSpeed:12,jiggleDamping:5,jiggleBounce:.8,jiggleMovementResponse:1,jiggleWalkWobble:.1968,jiggleWalkSpeed:10,tongueRange:16,tongueExtendDuration:.12,tongueRetractDuration:.08,tongueConeAngle:12,tongueAssistRadius:2,tongueMagnetRadius:.8,tongueAngleWeight:.85,tongueDistanceWeight:.15,tongueGrappleForce:25,tongueSwingForce:12,tongueGrabForce:15,tongueCooldown:.5,tongueColor:"#ff6b9d",tongueTipSize:.15,tongueThicknessBase:.08,tongueThicknessTip:.04,tongueDebugEnabled:!1,jiggleReturnSpeed:8,punchSwingDistance:2.537,punchSwingSpeed:5,punchReturnSpeed:18.848,punchCooldown:.7597,punchLegRotation:.1,punchHitRadius:2,vfxEnabled:!0,vfxDustCount:3,vfxDustSize:.0905,vfxDustLife:.6,vfxImpactCount:16,vfxImpactSize:.372,vfxImpactLife:.4915,vfxWalkInterval:.12,vfxGroundOffset:-.45,vfxForwardOffset:.3,maxHealth:200,punchDamageMin:6,punchDamageMax:10,criticalDamageMin:15,criticalDamageMax:20,criticalChance:.15,knockbackForce:15,knockbackUpward:8,respawnTime:2.035,deathFadeDuration:1.0025,ballRadius:.5,ballMass:.3812,ballLinearDamping:.533,ballAngularDamping:.975,ballBounciness:.7,ballFriction:.422,ballKickForce:21.4,ballKickUpward:6.885,ballSpawnHeight:30,ballSpawnRangeX:25,ballSpawnRangeZ:25,ballResetHeight:-20,scooterSpeed:18,scooterTurnSpeed:3,scooterMaxTurn:.5,scooterWheelSpeed:15,scooterVisualOffsetY:-.45,scooterAcceleration:8,scooterDeceleration:5,scooterSpawnRadius:2,scooterDismountKey:"KeyE",scooterRiderY:.55,scooterLegOffsetX:0,scooterLegOffsetY:-.1,scooterLegOffsetZ:-.85,scooterLegRotationX:1.15840734641021,scooterLegRotationY:.2,scooterLegRotationZ:.208407346410207,scooterAssOffsetY:0,scooterAssOffsetZ:0,scooterBanking:.18,grassBendingStrength:2,grassBendingRadius:2.5,grassWindSpeed:1.5,grassWindStrength:.15,showFPS:!0};class _w{constructor(){this.world=new fw,this.world.gravity.set(0,y.gravity,0),this.world.broadphase=new bp,this.world.solver.iterations=30,this.groundMaterial=new Ms("ground"),this.frogMaterial=new Ms("frog"),this.updateMaterials()}updateMaterials(){let e=this.world.contactmaterials.find(i=>i.materials.includes(this.groundMaterial)&&i.materials.includes(this.frogMaterial));e?(e.friction=y.friction,e.restitution=y.restitution):(e=new Kn(this.groundMaterial,this.frogMaterial,{friction:y.friction,restitution:y.restitution,contactEquationStiffness:1e7,contactEquationRelaxation:3}),this.world.addContactMaterial(e));let t=this.world.contactmaterials.find(i=>i.materials[0]===this.frogMaterial&&i.materials[1]===this.frogMaterial);t||(t=new Kn(this.frogMaterial,this.frogMaterial,{friction:.1,restitution:.5}),this.world.addContactMaterial(t))}step(e){this.world.gravity.set(0,y.gravity,0),this.world.step(1/60,e,3)}}const vn=class vn{static setLoaderManager(e){vn.loader=new uo(e)}constructor(e,t,i,n){this.id=e,this.color=t,this.scene=i,this.physicsWorld=n,this.rider=null,this.velocity=0,this.facingAngle=0,this.wheelRotation=0,this.jumpCooldown=0,this.steerAmount=0,this.audio=null,this.engineSound=null,this.terrainNormal=new B(0,1,0),this.targetQuaternion=new Wt,this.raycaster=new dp,this.isGrounded=!0,this._lastGroundY=null,this.raycaster.far=3,this.isHighlighted=!1,this.mesh=new Ci,this.board=null,this.handle=null,this.wheels={backLeft:null,backRight:null,frontLeft:null,frontRight:null},this.allMeshes=[],this.body=null,this.loadModel(),this.createPhysics(),this.createPromptLabel(),i.add(this.mesh)}loadModel(){if(vn.modelCache){this.setupModel(vn.modelCache.clone());return}const e=new jn(.5,.1,1),t=new ws({color:this.color}),i=new dt(e,t);i.position.y=0,this.mesh.add(i),vn.loader.load("/models/scooter.glb",n=>{this.mesh.remove(i),i.geometry.dispose(),i.material.dispose();const s=n.scene;vn.modelCache=s.clone(),this.setupModel(s)})}setupModel(e){e.scale.set(.5,.5,.5),e.rotation.y=Math.PI,e.traverse(t=>{if(t.isMesh){t.castShadow=!0,t.receiveShadow=!0,this.allMeshes.push(t);const i=t.name.toLowerCase();(i.includes("board")||i.includes("deck"))&&(t.material=t.material.clone(),t.material.color.set(this.color),this.board=t),i.includes("handle")&&(this.handle=t),i.includes("wheel")&&(i.includes("back")&&i.includes("left")&&(this.wheels.backLeft=t),i.includes("back")&&i.includes("right")&&(this.wheels.backRight=t),i.includes("front")&&i.includes("left")&&(this.wheels.frontLeft=t),i.includes("front")&&i.includes("right")&&(this.wheels.frontRight=t))}}),e.position.y=y.scooterVisualOffsetY,this.mesh.add(e)}setColor(e){!e||e===this.color||(this.color=e,this.board&&this.board.material&&this.board.material.color.set(this.color))}dispose(){this.rider&&this.dismount(),this.engineSound&&(this.engineSound.stop(),this.engineSound=null),this.label&&this.label.element&&this.label.element.parentNode&&this.label.element.parentNode.removeChild(this.label.element),this.body&&this.physicsWorld&&this.physicsWorld.world.removeBody(this.body),this.mesh&&this.mesh.parent&&this.mesh.parent.remove(this.mesh),this.mesh.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()))})}createPhysics(){if(!this.physicsWorld)return;const e=new Fh(.5);this.body=new pe({mass:5,shape:e,material:this.physicsWorld.frogMaterial,linearDamping:.9,angularDamping:.99,fixedRotation:!0}),this.body.position.set(0,1,0),this.physicsWorld.world.addBody(this.body)}createPromptLabel(){const e=document.createElement("div");e.className="scooter-prompt",e.textContent="Press E to ride",e.style.cssText=`
            color: white;
            background: rgba(0,0,0,0.7);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-family: sans-serif;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.2s;
        `,this.promptLabel=new Ho(e),this.promptLabel.position.set(0,1.5,0),this.mesh.add(this.promptLabel)}setHighlight(e){this.isHighlighted=e,this.promptLabel&&this.promptLabel.element&&(this.promptLabel.element.style.opacity=e?"1":"0")}mount(e){return this.rider?!1:(this.rider=e,e.isRidingScooter=!0,e.currentScooter=this,this.velocity=0,this.facingAngle=e.mesh.rotation.y,this.setHighlight(!1),this.updateRiderPosition(),this.audio&&(this.audio.playSpatial("scooter_mount",this.mesh.position),this.engineSound||(this.engineSound=this.audio.playSpatial("scooter_engine",this.mesh.position,{loop:!0,volume:.3}))),!0)}dismount(){if(!this.rider)return;const e=this.rider;e.leftLeg&&(e.leftLeg.visible=!0),e.rightLeg&&(e.rightLeg.visible=!0),e.leftLeg&&e.leftLegBasePos&&(e.leftLeg.position.copy(e.leftLegBasePos),e.leftLeg.rotation.set(0,0,0)),e.rightLeg&&e.rightLegBasePos&&(e.rightLeg.position.copy(e.rightLegBasePos),e.rightLeg.rotation.set(0,0,0)),e.assLeft&&e.assLeftBasePos&&e.assLeft.position.copy(e.assLeftBasePos),e.assRight&&e.assRightBasePos&&e.assRight.position.copy(e.assRightBasePos);const t=new B(1.5,0,0);t.applyAxisAngle(new B(0,1,0),this.facingAngle),e.mesh.position.copy(this.mesh.position),e.mesh.position.add(t),e.mesh.position.y+=.5,e.body&&(e.body.position.copy(e.mesh.position),e.body.velocity.set(0,5,0)),e.isRidingScooter=!1,e.currentScooter=null,this.rider=null,this.engineSound&&(this.engineSound.stop(),this.engineSound=null),this.audio&&this.audio.playSpatial("scooter_mount",this.mesh.position,{playbackRate:.8})}updateRiderPosition(){if(this.rider){if(this.rider.mesh.quaternion.copy(this.mesh.quaternion),this.rider.isLocal){const e=new B(0,y.scooterRiderY,0).applyQuaternion(this.mesh.quaternion);this.rider.mesh.position.copy(this.mesh.position).add(e)}else this.rider.mesh.scale.y=.75;this.rider.leftLeg&&this.rider.leftLegBasePos&&(this.rider.leftLeg.position.x=this.rider.leftLegBasePos.x+y.scooterLegOffsetX,this.rider.leftLeg.position.y=this.rider.leftLegBasePos.y+y.scooterLegOffsetY,this.rider.leftLeg.position.z=this.rider.leftLegBasePos.z+y.scooterLegOffsetZ,this.rider.leftLeg.rotation.x=y.scooterLegRotationX,this.rider.leftLeg.rotation.y=y.scooterLegRotationY+this.steerAmount*.4,this.rider.leftLeg.rotation.z=y.scooterLegRotationZ+this.steerAmount*.1),this.rider.rightLeg&&this.rider.rightLegBasePos&&(this.rider.rightLeg.position.x=this.rider.rightLegBasePos.x-y.scooterLegOffsetX,this.rider.rightLeg.position.y=this.rider.rightLegBasePos.y+y.scooterLegOffsetY,this.rider.rightLeg.position.z=this.rider.rightLegBasePos.z+y.scooterLegOffsetZ,this.rider.rightLeg.rotation.x=y.scooterLegRotationX,this.rider.rightLeg.rotation.y=-y.scooterLegRotationY+this.steerAmount*.4,this.rider.rightLeg.rotation.z=-y.scooterLegRotationZ-this.steerAmount*.1),this.rider.assLeft&&this.rider.assLeftBasePos&&(this.rider.assLeft.position.y=this.rider.assLeftBasePos.y+y.scooterAssOffsetY,this.rider.assLeft.position.z=this.rider.assLeftBasePos.z+y.scooterAssOffsetZ),this.rider.assRight&&this.rider.assRightBasePos&&(this.rider.assRight.position.y=this.rider.assRightBasePos.y+y.scooterAssOffsetY,this.rider.assRight.position.z=this.rider.assRightBasePos.z+y.scooterAssOffsetZ),this.rider.body&&this.rider.body.position.set(this.rider.mesh.position.x,this.rider.mesh.position.y,this.rider.mesh.position.z)}}update(e,t,i){if(!this.rider||!this.rider.isLocal){this.rider&&this.rider.mesh?(this.mesh.position.copy(this.rider.mesh.position),this.mesh.position.y-=y.scooterRiderY||.6,this.facingAngle=this.rider.facingAngle,this.rider.remoteVelocity?this.velocity=this.rider.remoteVelocity.length():this.velocity=0,this.steerAmount=this.rider.remoteSteerAmount||0):this.body&&this.mesh.position.copy(this.body.position);const l=-this.steerAmount*y.scooterBanking*(Math.abs(this.velocity)/y.scooterSpeed);i&&i.length>0?this.alignWithTerrain(i,e,l):this.rider&&this.rider.mesh&&(this._lastGroundY=this.rider.mesh.position.y-(y.scooterRiderY||.6)),this.animateWheels(e),this.spawnDustParticles(e);return}const n=t.keys.forward?1:t.keys.backward?-1:0,s=t.keys.left?1:t.keys.right?-1:0,r=t.keys.jump;if(n!==0?(this.velocity+=n*y.scooterAcceleration*e,this.velocity=mt.clamp(this.velocity,-y.scooterSpeed*.5,y.scooterSpeed)):Math.abs(this.velocity)>.1?this.velocity-=Math.sign(this.velocity)*y.scooterDeceleration*e:this.velocity=0,Math.abs(this.velocity)>.5){const l=this.velocity>0?1:-1;this.facingAngle+=s*y.scooterTurnSpeed*e*l}if(this.steerAmount=s,this.body){const l=Math.sin(this.facingAngle)*this.velocity,c=Math.cos(this.facingAngle)*this.velocity;this.body.velocity.x=l,this.body.velocity.z=c,this.jumpCooldown>0&&(this.jumpCooldown-=e);const h=Math.abs(this.body.velocity.y)<1&&this.body.position.y<3;r&&h&&this.jumpCooldown<=0&&(this.body.velocity.y=10,this.jumpCooldown=.5)}this.mesh.position.copy(this.body.position);const a=-this.steerAmount*y.scooterBanking*(Math.abs(this.velocity)/y.scooterSpeed);if(i?this.alignWithTerrain(i,e,a):this.mesh.rotation.z=mt.lerp(this.mesh.rotation.z,a,e*8),this.handle&&(this.handle.rotation.y=this.steerAmount*y.scooterMaxTurn),this.updateRiderPosition(),this.animateWheels(e),this.spawnDustParticles(e),this.engineSound&&this.rider){const l=Math.abs(this.velocity)/y.scooterSpeed;this.engineSound.setPlaybackRate(.8+l*.7),this.engineSound.setVolume(.2+l*.4)}}alignWithTerrain(e,t,i=0){const n=!this.rider||!this.rider.isLocal?3:1.5,s=this.mesh.position.clone().add(new B(0,n,0)),r=new B(0,-1,0);this.raycaster.set(s,r),this.raycaster.far=n+2;const a=this.raycaster.intersectObjects(e,!0);if(a.length>0){const d=a[0].distance;if(this.isGrounded=d<n+1,this._lastGroundY=a[0].point.y,a[0].face){const f=a[0].face.normal.clone();f.transformDirection(a[0].object.matrixWorld),this.terrainNormal.lerp(f,t*15)}}else this.isGrounded=!1;this.isGrounded||this.terrainNormal.lerp(new B(0,1,0),t*2);const l=new B(Math.sin(this.facingAngle),0,Math.cos(this.facingAngle)),c=new B().crossVectors(this.terrainNormal,l).normalize(),h=new B().crossVectors(c,this.terrainNormal),u=new ke;if(u.makeBasis(c,this.terrainNormal,h),this.targetQuaternion.setFromRotationMatrix(u),i!==0){const d=new Wt().setFromAxisAngle(new B(0,0,1),i);this.targetQuaternion.multiply(d)}this.mesh.quaternion.slerp(this.targetQuaternion,t*15)}animateWheels(e){this.wheelRotation+=this.velocity*y.scooterWheelSpeed*e,[this.wheels.backLeft,this.wheels.backRight,this.wheels.frontLeft,this.wheels.frontRight].forEach(i=>{i&&(i.rotation.x=this.wheelRotation)})}spawnDustParticles(e){if(!(!this.particles||!y.vfxEnabled)&&!(Math.abs(this.velocity)<2)&&(this._dustTimer=(this._dustTimer||0)+e,this._dustTimer>.1&&this.isGrounded)){this._dustTimer=0;const t=this.mesh.position.clone();this._lastGroundY!==null&&this._lastGroundY!==void 0?t.y=this._lastGroundY:this.rider&&this.rider.mesh?t.y=this.rider.mesh.position.y-(y.scooterRiderY||.5):t.y=this.mesh.position.y-.5,this.particles.spawnWalkDust(t,this.color||"#ffffff")}}dispose(){this.body&&this.physicsWorld&&this.physicsWorld.world.removeBody(this.body),this.mesh.parent&&this.mesh.parent.remove(this.mesh)}};wo(vn,"loader",(()=>{const e=new uo;return e.setMeshoptDecoder(Bh),e})()),wo(vn,"modelCache",null);let ir=vn;const yn=class yn{static setLoaderManager(e){yn.loader=new uo(e)}constructor(e,t,i,n=!1){if(this.id=e,this.isLocal=n,this.color=t,this.mesh=new Ci,this.bodyMesh=new Ci,this.mesh.add(this.bodyMesh),yn.modelGeometry){const s=yn.modelGeometry.clone();this.applyColor(s),this.bodyMesh.add(s)}else yn.loader.load("/models/frog.glb",s=>{const r=s.scene;r.scale.set(.5,.5,.5),r.position.y=-.6,r.rotation.y=Math.PI,yn.modelGeometry=r.clone(),this.applyColor(r),this.bodyMesh.add(r)},void 0,s=>{console.error("Error loading model:",s);const r=new Jn(.5),a=new ws({color:this.color});this.bodyMesh.add(new dt(r,a))});if(this.chatBubbleDiv=document.createElement("div"),this.chatBubbleDiv.className="chat-container",this.chatBubble=new Ho(this.chatBubbleDiv),this.chatBubble.position.set(0,1.5,0),this.mesh.add(this.chatBubble),this.chatTimer=null,i){const s=new Fh(.5);this.isLocal?(this.body=new pe({mass:1,shape:s,material:i.frogMaterial,fixedRotation:!0}),this.body.linearDamping=y.linearDamping):this.body=new pe({type:pe.KINEMATIC,shape:s,material:i.frogMaterial}),this.body.position.set(0,5,0),this.body.updateMassProperties(),i.world.addBody(this.body)}else this.body=null;this.onGround=!1,this.jumpCooldown=0,this.facingAngle=0,this.moveAnimTimer=0,this.isRidingScooter=!1,this.currentScooter=null,this.jiggleVelocity=0,this.jiggleOffset=0,this.lastVelocityY=0,this.wasMoving=!1,this.isPunching=!1,this.punchProgress=0,this.punchCooldownTimer=0,this.walkDustTimer=0,this.wasOnGround=!1,this.particles=null,this.health=y.maxHealth,this.isDead=!1,this.deathTimer=0,this.respawnTimer=0,this.healthBarVisibleTimer=0,this.healthBarVisible=!1,this.isAFK=!1,this.isUnderwater=!1,this.tongue={state:"idle",target:null,lockedPoint:new B,startTime:0,progress:0,cooldownTimer:0},this.tongueStartPos=new B,this.flies=0,this.tongueLine=null,this.tongueTip=null,this.tongueTube=null,this.healthBarContainer=document.createElement("div"),this.healthBarContainer.className="health-bar-container",this.healthBarContainer.style.opacity="0",this.healthBarContainer.style.transition="opacity 0.3s ease",this.healthBarContainer.innerHTML=`
            <div class="health-bar-bg">
                <div class="health-bar-fill"></div>
            </div>
        `,this.healthBarFill=this.healthBarContainer.querySelector(".health-bar-fill"),this.healthBar=new Ho(this.healthBarContainer),this.healthBar.position.set(0,2,0),this.mesh.add(this.healthBar),this.damageToasts=[],this.nameTagDiv=document.createElement("div"),this.nameTagDiv.className="name-tag",this.nameTagDiv.textContent=`Frog ${e.substr(0,4)}`,this.nameTag=new Ho(this.nameTagDiv),this.nameTag.position.set(0,1.2,0),this.mesh.add(this.nameTag),this.audio=null}setName(e){this.name=e,this.updateNameTag()}updateNameTag(){let e=`<span>${this.name||"Frog"}</span>`;this.isAFK&&(e+='<span class="afk-badge">AFK</span>'),this.nameTagDiv.innerHTML=e}update(e,t,i,n=0){if(this.isRidingScooter&&this.currentScooter){this.updateHealthBar(),this.updateHealthBarVisibility(e),this.updateJiggle(e,Math.abs(this.currentScooter.velocity)>1);return}if(!this.body)return;if(this.isDead){this.deathTimer+=e,this.respawnTimer-=e,this.respawnTimer<=0&&this.respawn();return}this.updateHealthBar(),this.updateHealthBarVisibility(e),this.mesh.position.copy(this.body.position);const s=new B(0,1,0);if(this.mesh.quaternion.setFromAxisAngle(s,this.facingAngle),this.chatTimer>0,!this.isLocal&&this.targetPos&&(this.body&&(this.body.position.x=mt.lerp(this.body.position.x,this.targetPos.x,.3),this.body.position.y=mt.lerp(this.body.position.y,this.targetPos.y,.3),this.body.position.z=mt.lerp(this.body.position.z,this.targetPos.z,.3),this.body.velocity.set(0,0,0)),this.targetRot&&this.mesh.quaternion.slerp(this.targetRot,.3),this.mesh.position.copy(this.body.position)),!t){const h=this.remoteVelocity&&this.remoteVelocity.length()>.1;if(this.isRemoteGrounded&&!this.wasRemoteGrounded){const d=Math.abs(this.remoteVelocity?this.remoteVelocity.y:0);if(this.audio&&d>2&&this.audio.playSpatial("land",this.mesh.position,{volume:Math.min(d/10,.8)}),this.particles&&d>3){const f=this.mesh.position.clone();f.y+=y.vfxGroundOffset,this.particles.spawnLandingDust(f,d,this.color)}}if(!this.isRemoteGrounded&&this.wasRemoteGrounded&&this.remoteVelocity&&this.remoteVelocity.y>5&&this.audio){this.audio.playSpatial("hop",this.mesh.position,{volume:.6});const d=Math.random()>.5?"grunt1":"grunt2";this.audio.playSpatial(d,this.mesh.position,{volume:.4})}this.wasRemoteGrounded=this.isRemoteGrounded,this.updateAnimations(e,h,this.isRemoteGrounded),this.updateJiggle(e,h),this.targetLook&&this.updateEyes(this.targetLook);const u=this.tongue.state;if(this.updateTongue(e,null),this.audio&&this.tongue.state!==u){if(this.tongue.state==="extending")this.audio.playSpatial("tongue_shoot",this.getMouthPosition(),{volume:.5});else if(this.tongue.state==="attached"){const d=Math.random()>.5?"tongue_hit_player1":"tongue_hit_player2";this.audio.playSpatial(d,this.tongue.lockedPoint,{volume:.6})}}if(this.isRemoteTalking&&this.mouthMesh&&this.mouthBaseScale){const d=y.talkSpeed,f=.5+Math.sin(Date.now()/100*d)*.5;this.mouthMesh.scale.y=this.mouthBaseScale.y*(1+f*.5)}if(!this.remoteScooter&&this.particles&&h&&this.isRemoteGrounded&&(this.walkDustTimer-=e,this.walkDustTimer<=0)){const d=this.mesh.position.clone();d.y+=y.vfxGroundOffset,this.particles.spawnWalkDust(d,this.color),this.walkDustTimer=y.vfxWalkInterval}if(this.isPunching&&!this.remotePunchPlayed?(this.audio&&this.audio.playSpatial("punch",this.mesh.position,{volume:.5}),this.remotePunchPlayed=!0):this.isPunching||(this.remotePunchPlayed=!1),this.remoteScooter){const d=this.world?this.world.terrainMeshes:null;this.remoteScooter.update(e,null,d)}return}if(this.onGround=!1,this.body.world)for(const h of this.body.world.contacts){let u=0;if(h.bi===this.body?u=-h.ni.y:h.bj===this.body&&(u=h.ni.y),u>.5){this.onGround=!0;break}}this.body.position.y<.6&&(this.onGround=!0);const r=this.isUnderwater?.5:1,a=y.moveSpeed*r,l=new B(0,0,0);if(t.keys.forward&&(l.z-=1),t.keys.backward&&(l.z+=1),t.keys.left&&(l.x-=1),t.keys.right&&(l.x+=1),l.length()>0){l.normalize();const h=Math.cos(n),u=Math.sin(n),d=new B(l.x*h+l.z*u,0,-l.x*u+l.z*h);let m=Math.atan2(d.x,d.z)-this.facingAngle;for(;m>Math.PI;)m-=Math.PI*2;for(;m<-Math.PI;)m+=Math.PI*2;this.facingAngle+=m*y.rotationSpeed*e;const x=this.tongue.state==="attached",g=this.onGround?12:y.airControl*5,p=x?.3:1,v=d.x*a*p,_=d.z*a*p;if(this.body.velocity.x=mt.lerp(this.body.velocity.x,v,g*e),this.body.velocity.z=mt.lerp(this.body.velocity.z,_,g*e),this.onGround){this.moveAnimTimer+=e*y.hopSpeed;const b=Math.abs(Math.sin(this.moveAnimTimer))*y.hopHeight;if(this.bodyMesh.position.y=b,this.particles&&(this.walkDustTimer-=e,this.walkDustTimer<=0)){const C=this.mesh.position.clone();C.y+=y.vfxGroundOffset;const M=.25,T=Math.sin(this.moveAnimTimer*2)>0?1:-1,L=new B(M*T,0,.1);L.applyQuaternion(this.mesh.quaternion),C.add(L),this.particles.spawnWalkDust(C,this.color),this.walkDustTimer=y.vfxWalkInterval}}}else if(this.moveAnimTimer=0,this.bodyMesh.position.y=mt.lerp(this.bodyMesh.position.y,0,e*10),this.onGround){const h=this.isUnderwater?5:15;this.body.velocity.x=mt.lerp(this.body.velocity.x,0,h*e),this.body.velocity.z=mt.lerp(this.body.velocity.z,0,h*e)}if(this.isUnderwater&&this.body){let h=12;t.keys.dive?h=-15:t.keys.jump&&(h=25),this.body.velocity.y+=h*e,this.body.velocity.x*=.98,this.body.velocity.z*=.98,this.body.velocity.y*=.95;const u=5;this.body.velocity.y=Math.max(-u,Math.min(u,this.body.velocity.y))}if(this.onGround&&t.keys.jump&&this.jumpCooldown<=0){if(this.body.velocity.y=y.jumpVelocity,this.jumpCooldown=1,this.jumpKickAmount=1,this.particles){const h=this.mesh.position.clone();h.y+=y.vfxGroundOffset;const u=this.getForwardDirection();h.add(u.multiplyScalar(y.vfxForwardOffset)),this.particles.spawnJumpDust(h,this.color)}if(this.audio){this.audio.playSpatial("hop",this.mesh.position);const h=Math.random()>.5?"grunt1":"grunt2";this.audio.playSpatial(h,this.mesh.position,{volume:.6})}}if(this.onGround&&!this.wasOnGround){const h=Math.abs(this.lastVelocityY);if(this.particles&&h>3){const u=this.mesh.position.clone();u.y+=y.vfxGroundOffset;const d=this.getForwardDirection();u.add(d.multiplyScalar(y.vfxForwardOffset)),this.particles.spawnLandingDust(u,h,this.color),this.isLocal&&h>8&&this.world&&this.world.triggerScreenShake(h*.05,.2),this.audio&&h>3&&this.audio.playSpatial("land",this.mesh.position,{volume:Math.min(h/10,1)})}}this.wasOnGround=this.onGround,this.jumpCooldown>0&&(this.jumpCooldown-=e),i&&(this.lookTarget=i,this.updateEyes(i));const c=l.length()>0;if(this.updateAnimations(e,c,this.onGround),this.updateJiggle(e,c),this.updatePunch(e,t),this.updateTongue(e,t),this.isTalking&&this.mouthMesh&&this.mouthBaseScale){const h=y.talkSpeed,u=.5+Math.sin(Date.now()/100*h)*.5;this.mouthMesh.scale.y=this.mouthBaseScale.y*(1+u*.5)}this.bodyUniforms&&(this.bodyUniforms.uTime.value=performance.now()/1e3,this.bodyUniforms.uSpeed.value=y.shaderSpeed,this.bodyUniforms.uIntensity.value=y.shaderIntensity,this.bodyUniforms.uMix.value=y.shaderColorMix)}updatePosition(e,t){this.targetPos=new B(e.x,e.y,e.z),this.targetRot=new Wt(t.qx,t.qy,t.qz,t.qw),this.body&&this.body.position.set(e.x,e.y,e.z)}getSyncState(){var s,r,a,l,c,h;if(!this.body)return null;const e=this.isRidingScooter?this.mesh.position:this.body.position,t=this.isRidingScooter?{x:0,y:0,z:0}:this.body.velocity,i=this.isRidingScooter&&this.currentScooter?this.currentScooter.steerAmount:0;let n=0;return this.tongue.state==="extending"?n=1:this.tongue.state==="retracting"?n=2:this.tongue.state==="attached"&&(n=3),{x:e.x,y:e.y,z:e.z,qx:this.mesh.quaternion.x,qy:this.mesh.quaternion.y,qz:this.mesh.quaternion.z,qw:this.mesh.quaternion.w,vx:t.x,vy:t.y,vz:t.z,lookX:((s=this.lookTarget)==null?void 0:s.x)||0,lookY:this.isRidingScooter&&this.currentScooter?1e9+parseInt(this.currentScooter.color.replace("#",""),16):((r=this.lookTarget)==null?void 0:r.y)||0,lookZ:this.isRidingScooter&&this.currentScooter?1e3+i*10:((a=this.lookTarget)==null?void 0:a.z)||0,isGrounded:this.onGround,isTalking:this.isTalking,isPunching:this.isPunching,punchProgress:this.punchProgress+(this.isRidingScooter?100:0)+n*10+(this.isUnderwater?200:0),tongueTargetX:((l=this.tongue.lockedPoint)==null?void 0:l.x)||0,tongueTargetY:((c=this.tongue.lockedPoint)==null?void 0:c.y)||0,tongueTargetZ:((h=this.tongue.lockedPoint)==null?void 0:h.z)||0,tongueProgress:this.tongue.progress||0}}applySyncState(e,t=1/60){this.targetPos=new B(e.x,e.y,e.z),this.targetRot=new Wt(e.qx,e.qy,e.qz,e.qw);const i=new mi().setFromQuaternion(this.targetRot,"YXZ");if(this.facingAngle=i.y,this.remoteVelocity=new B(e.vx,e.vy,e.vz),e.lookX!==void 0){let l=e.lookY,c=e.lookZ;if(l>=1e9){const h=l-1e9;this.remoteScooterColor="#"+h.toString(16).padStart(6,"0"),l=0}c>=990&&c<=1010?(this.remoteSteerAmount=(c-1e3)/10,c=0):this.remoteSteerAmount=0,this.targetLook=new B(e.lookX,l,c)}this.isRemoteGrounded=e.isGrounded,this.isRemoteTalking=e.isTalking,this.isRemotePunching=e.isPunching;let n=e.punchProgress||0,s=!1,r=0,a=!1;if(n>=200&&(a=!0,n-=200),n>=100&&(s=!0,n-=100),n>=30?(r=3,n-=30):n>=20?(r=2,n-=20):n>=10&&(r=1,n-=10),this.remotePunchProgress=n,this.remoteTongueStateCode=r,this.isRemoteUnderwater=a,e.tongueTargetX!==void 0)if(this.remoteTongueTarget=new B(e.tongueTargetX,e.tongueTargetY,e.tongueTargetZ),this.remoteTongueProgress=e.tongueProgress||0,this.remoteTongueStateCode>0){const l=["idle","extending","retracting","attached"];this.tongue.state=l[this.remoteTongueStateCode],this.tongue.progress=this.remoteTongueProgress,this.tongue.lockedPoint.copy(this.remoteTongueTarget),this.createTongueVisual(),this.tongueLine&&(this.tongueLine.visible=!0),this.tongueTip&&(this.tongueTip.visible=!0)}else this.tongue.state!=="idle"&&this.finishTongue();if(this.isRemoteRidingScooter!==s)if(this.isRemoteRidingScooter=s,this.isRemoteRidingScooter&&!this.remoteScooter){this.remoteScooter=new ir(`scooter_remote_${this.id}`,this.remoteScooterColor||this.color,this.mesh.parent||(this.world?this.world.scene:null),null),this.remoteScooter.particles=this.particles,this.remoteScooter.rider=this;const l=this.world?this.world.terrainMeshes:null;this.remoteScooter.update(t,null,l)}else!this.isRemoteRidingScooter&&this.remoteScooter&&(this.remoteScooter.dispose(),this.remoteScooter=null,this.leftLeg&&this._originalLeftLegX!==void 0&&(this.leftLeg.position.x=this._originalLeftLegX,this.leftLeg.position.y=this._originalLeftLegY,this.leftLeg.position.z=this._originalLeftLegZ,this.leftLeg.rotation.x=0,this.leftLeg.rotation.y=0,this.leftLeg.rotation.z=0),this.rightLeg&&this._originalRightLegX!==void 0&&(this.rightLeg.position.x=this._originalRightLegX,this.rightLeg.position.y=this._originalRightLegY,this.rightLeg.position.z=this._originalRightLegZ,this.rightLeg.rotation.x=0,this.rightLeg.rotation.y=0,this.rightLeg.rotation.z=0));this.isRemoteRidingScooter&&this.remoteScooter&&this.remoteScooterColor&&this.remoteScooter.setColor(this.remoteScooterColor),this.body&&this.body.position.set(e.x,e.y,e.z)}applyServerPhysics(e){if(e)if(this.serverTargetPos={x:e.x,y:e.y,z:e.z},this.serverVelocity={x:e.vx,y:e.vy,z:e.vz},this.serverFacingAngle=e.facingAngle,this.serverIsGrounded=e.isGrounded,this.serverIsPunching=e.isPunching,this.serverIsDead=e.isDead,this.serverHealth=e.health,this.health!==e.health&&(this.health=e.health,this.updateHealthBar(),this.health<y.maxHealth&&this.showHealthBar()),e.isDead&&!this.isDead&&this.die(!0),this.isLocal){if(this.body){const t=e.x-this.body.position.x,i=e.y-this.body.position.y,n=e.z-this.body.position.z,s=Math.sqrt(t*t+i*i+n*n);s>.5&&(s>3?(this.body.position.set(e.x,e.y,e.z),this.body.velocity.set(e.vx,e.vy,e.vz)):(this.body.position.x+=t*.3,this.body.position.y+=i*.3,this.body.position.z+=n*.3))}}else{this.targetPos=new B(e.x,e.y,e.z),this.remoteVelocity=new B(e.vx,e.vy,e.vz),this.isRemoteGrounded=e.isGrounded,this.isRemotePunching=e.isPunching;const t=new Wt;t.setFromAxisAngle(new B(0,1,0),e.facingAngle),this.targetRot=t,this.body&&this.body.position.set(e.x,e.y,e.z)}}updateRemote(e){if(!this.targetPos)return;this.mesh.position.lerp(this.targetPos,15*e),this.targetRot&&this.mesh.quaternion.slerp(this.targetRot,15*e),this.targetLook&&this.updateEyes(this.targetLook);const t=this.remoteVelocity||new B,n=Math.sqrt(t.x*t.x+t.z*t.z)>.1,s=this.isRemoteUnderwater,r=this.isRemoteGrounded!==void 0?this.isRemoteGrounded:this.mesh.position.y<.1;if(!r&&t.y>2&&this.wasRemoteGrounded&&(this.jumpKickAmount=1,this.particles&&this.particles.spawnJumpDust(this.mesh.position,13413e3)),r&&!this.wasRemoteGrounded&&this.particles&&Math.abs(this.lastRemoteVelY)>2&&this.particles.spawnLandingDust(this.mesh.position,Math.abs(this.lastRemoteVelY),13413e3),this.wasRemoteGrounded=r,this.lastRemoteVelY=t.y,this.updateAnimations(e,n,r,s),this.updatePunch(e,null),this.isRemoteTalking&&this.mouthMesh&&this.mouthBaseScale){const a=y.talkSpeed,l=.5+Math.sin(Date.now()/100*a)*.5;this.mouthMesh.scale.y=this.mouthBaseScale.y*(1+l*.5)}else this.mouthMesh&&this.mouthBaseScale&&this.mouthMesh.scale.lerp(this.mouthBaseScale,e*10);if(n&&r){this.moveAnimTimer=(this.moveAnimTimer||0)+15*e;const a=Math.abs(Math.sin(this.moveAnimTimer))*y.hopHeight;this.bodyMesh.position.y=a,this.particles&&(this.walkDustTimer=(this.walkDustTimer||0)-e,this.walkDustTimer<=0&&(this.particles.spawnWalkDust(this.mesh.position,13413e3),this.walkDustTimer=y.vfxWalkInterval))}else this.moveAnimTimer=0,this.bodyMesh.position.y=mt.lerp(this.bodyMesh.position.y,0,e*10);if(this.body&&(this.body.velocity.copy(t),this.updateJiggle(e,n)),this.isRemoteRidingScooter&&this.remoteScooter){const a=this.remoteSteerAmount||0;this.remoteScooter.steerAmount=a,this.remoteScooter.handle&&(this.remoteScooter.handle.rotation.y=a*y.scooterMaxTurn);const l=a*.3;if(this.leftLeg&&this._originalLeftLegZ!==void 0&&(this.leftLeg.position.x=this._originalLeftLegX+y.scooterLegOffsetX,this.leftLeg.position.y=this._originalLeftLegY+y.scooterLegOffsetY,this.leftLeg.position.z=this._originalLeftLegZ+y.scooterLegOffsetZ,this.leftLeg.rotation.x=y.scooterLegRotationX,this.leftLeg.rotation.y=y.scooterLegRotationY+l,this.leftLeg.rotation.z=y.scooterLegRotationZ),this.rightLeg&&this._originalRightLegZ!==void 0&&(this.rightLeg.position.x=this._originalRightLegX-y.scooterLegOffsetX,this.rightLeg.position.y=this._originalRightLegY+y.scooterLegOffsetY,this.rightLeg.position.z=this._originalRightLegZ+y.scooterLegOffsetZ,this.rightLeg.rotation.x=y.scooterLegRotationX,this.rightLeg.rotation.y=-y.scooterLegRotationY+l,this.rightLeg.rotation.z=-y.scooterLegRotationZ),this.particles&&y.vfxEnabled){const c=this.mesh.position;this._lastRemoteScooterPos||(this._lastRemoteScooterPos=c.clone());const h=c.distanceTo(this._lastRemoteScooterPos);if(this._lastRemoteScooterPos.copy(c),h>.05&&(this._remoteScooterDustTimer=(this._remoteScooterDustTimer||0)+e,this._remoteScooterDustTimer>.1)){this._remoteScooterDustTimer=0;const u=this.mesh.position.clone();u.y=.1,this.particles.spawnWalkDust(u,this.color||"#ffffff")}}}if(this.updateHealthBarVisibility(e),this.remoteTongueStateCode>0&&this.remoteTongueTarget){if(this.tongueLine||this.createTongueVisual(),this.tongueLine&&this.tongueTip){this.tongueLine.visible=!0,this.tongueTip.visible=!0;const a=new B(0,.3,.5);a.applyQuaternion(this.mesh.quaternion);const l=this.mesh.position.clone().add(a),c=new B().lerpVectors(l,this.remoteTongueTarget,this.remoteTongueProgress),h=this.tongueLine.geometry.attributes.position.array;h[0]=l.x,h[1]=l.y,h[2]=l.z,h[3]=c.x,h[4]=c.y,h[5]=c.z,this.tongueLine.geometry.attributes.position.needsUpdate=!0,this.tongueTip.position.copy(c)}}else this.tongueLine&&(this.tongueLine.visible=!1,this.tongueTip&&(this.tongueTip.visible=!1))}showChat(e){const t=document.createElement("div");for(t.className="chat-bubble",t.innerText=e,this.chatBubbleDiv.prepend(t);this.chatBubbleDiv.children.length>9;)this.chatBubbleDiv.removeChild(this.chatBubbleDiv.lastElementChild);t.addEventListener("animationend",()=>{t.parentNode&&t.remove()}),this.isTalking=!0,this.chatTimer&&clearTimeout(this.chatTimer);const i=Math.min(3e3,e.length*100);this.chatTimer=setTimeout(()=>{this.isTalking=!1,this.mouthMesh&&this.mouthBaseScale&&this.mouthMesh.scale.copy(this.mouthBaseScale)},i)}applyColor(e){this.pupils=[],this.leftLeg=null,this.rightLeg=null,e.traverse(t=>{if(t.isMesh){const i=t.name.toLowerCase();if(t.material=t.material.clone(),t.castShadow=!0,t.receiveShadow=!0,i.includes("pupil"))t.material.color.set(0),t.userData.initialPos=t.position.clone(),this.pupils.push(t);else if(i.includes("eye")||i.includes("white"))t.material.color.set(16777215);else if(i.includes("mouth")){const n=new _e(this.color);n.multiplyScalar(.8),t.material.color.set(n),this.mouthMesh=t,this.mouthBaseScale=t.scale.clone()}else i.includes("leftleg")?(this.leftLeg=t,this.leftLegBasePos=t.position.clone(),this._originalLeftLegX=t.position.x,this._originalLeftLegY=t.position.y,this._originalLeftLegZ=t.position.z,t.material.color.set(this.color)):i.includes("rightleg")?(this.rightLeg=t,this.rightLegBasePos=t.position.clone(),this._originalRightLegX=t.position.x,this._originalRightLegY=t.position.y,this._originalRightLegZ=t.position.z,t.material.color.set(this.color)):i.includes("assleft")||i.includes("ass_left")?(this.assLeft=t,this.assLeftBasePos=t.position.clone(),this.assLeftBaseScale=t.scale.clone(),t.material.color.set(this.color)):i.includes("assright")||i.includes("ass_right")?(this.assRight=t,this.assRightBasePos=t.position.clone(),this.assRightBaseScale=t.scale.clone(),t.material.color.set(this.color)):t.material.color.set(this.color)}})}setColor(e){this.color=e,this.bodyMesh&&this.bodyMesh.traverse(t=>{if(t.isMesh&&t.material){const i=t.name.toLowerCase();if(i.includes("pupil")||i.includes("eye")||i.includes("white"))return;if(i.includes("mouth")){const n=new _e(e);n.multiplyScalar(.8),t.material.color.set(n)}else t.material.color.set(e);t.userData.originalColor=t.material.color.clone(),t.castShadow=!0,t.receiveShadow=!0}})}updateAnimations(e,t,i,n=!1){if(!(!this.leftLeg||!this.rightLeg)){if(n){this.jumpKickAmount=0,this.leftLeg.position.lerp(this.leftLegBasePos,e*5),this.rightLeg.position.lerp(this.rightLegBasePos,e*5);return}if(i)if(this.jumpKickAmount=0,t){const s=Date.now()/1e3*(y.hopSpeed*y.walkLegSpeed),r=Math.sin(s),a=Math.max(0,r)*y.walkLegHeight,l=Math.max(0,-r)*y.walkLegHeight;this.leftLeg.position.y=this.leftLegBasePos.y+a,this.rightLeg.position.y=this.rightLegBasePos.y+l}else this.leftLeg.position.lerp(this.leftLegBasePos,e*10),this.rightLeg.position.lerp(this.rightLegBasePos,e*10);else if(this.jumpKickAmount>0){this.jumpKickAmount-=e*y.legKickDecay,this.jumpKickAmount<0&&(this.jumpKickAmount=0);const s=this.jumpKickAmount*this.jumpKickAmount*this.jumpKickAmount,r=-y.legKickForce*s;this.leftLeg.position.y=this.leftLegBasePos.y+r,this.rightLeg.position.y=this.rightLegBasePos.y+r}}}updateJiggle(e,t){if(!y.jiggleEnabled||!this.assLeft&&!this.assRight)return;const i=this.body?this.body.velocity.y:0,n=this.lastVelocityY<-2&&i>this.lastVelocityY?Math.abs(this.lastVelocityY)*.1*y.jiggleBounce:0,s=t!==this.wasMoving?y.jiggleMovementResponse*.5:0,r=t?Math.sin(Date.now()*.01*y.jiggleSpeed)*.3:0;this.jiggleVelocity+=n+s;const a=-this.jiggleOffset*y.jiggleSpeed*y.jiggleSpeed,l=-this.jiggleVelocity*y.jiggleDamping;this.jiggleVelocity+=(a+l)*e,this.jiggleOffset+=this.jiggleVelocity*e,this.jiggleOffset=Math.max(-1,Math.min(1,this.jiggleOffset));const c=(this.jiggleOffset+r)*y.jiggleIntensity,h=Date.now()*.001*y.jiggleWalkSpeed,u=t?Math.sin(h)*y.jiggleWalkWobble:0,d=t?Math.sin(h+Math.PI)*y.jiggleWalkWobble:0,f=t?Math.sin(h)*y.jiggleWalkWobble*.5:0,m=t?Math.sin(h+Math.PI)*y.jiggleWalkWobble*.5:0,x=y.jiggleReturnSpeed;if(this.assLeft&&this.assLeftBaseScale){const g=c;this.assLeft.scale.x=this.assLeftBaseScale.x*(1+g*.5),this.assLeft.scale.y=this.assLeftBaseScale.y*(1-g*.3),this.assLeft.scale.z=this.assLeftBaseScale.z*(1+g*.4);const p=this.assLeftBasePos.z+u;this.assLeft.position.z=mt.lerp(this.assLeft.position.z,p,e*x),this.assLeft.position.y=this.assLeftBasePos.y+g*.1,this.assLeft.rotation.x=mt.lerp(this.assLeft.rotation.x,f,e*x)}if(this.assRight&&this.assRightBaseScale){const g=c*.9+Math.sin(Date.now()*.012*y.jiggleSpeed)*.1*y.jiggleIntensity;this.assRight.scale.x=this.assRightBaseScale.x*(1+g*.5),this.assRight.scale.y=this.assRightBaseScale.y*(1-g*.3),this.assRight.scale.z=this.assRightBaseScale.z*(1+g*.4);const p=this.assRightBasePos.z+d;this.assRight.position.z=mt.lerp(this.assRight.position.z,p,e*x),this.assRight.position.y=this.assRightBasePos.y+g*.1,this.assRight.rotation.x=mt.lerp(this.assRight.rotation.x,m,e*x)}this.lastVelocityY=i,this.wasMoving=t}updatePunch(e,t){if(!(!this.rightLeg||!this.rightLegBasePos))if(this.punchCooldownTimer>0&&(this.punchCooldownTimer-=e),t&&t.consumePunch()&&this.punchCooldownTimer<=0&&!this.isPunching&&(this.isPunching=!0,this.punchProgress=0,this.punchCooldownTimer=y.punchCooldown,this.punchHitChecked=!1,this.isLocal&&this.world&&this.world.network&&this.world.network.sendPunch()),this.isPunching){this.punchProgress<1?(this.punchProgress+=e*y.punchSwingSpeed,this.punchProgress>=1&&(this.punchProgress=1)):this.isPunching=!1;const i=Math.sin(this.punchProgress*Math.PI)*y.punchSwingDistance;if(this.rightLeg.position.z=this.rightLegBasePos.z-i,this.rightLeg.position.y=this.rightLegBasePos.y+i*.15,this.rightLeg.rotation.x=i*y.punchLegRotation,this.punchProgress>.4&&this.punchProgress<.6&&!this.punchHitChecked){this.punchHitChecked=!0;const n=new B(Math.sin(this.facingAngle),0,Math.cos(this.facingAngle));let s=this.mesh.position.clone();if(this.rightLeg&&(this.rightLeg.getWorldPosition(s),s.add(n.clone().multiplyScalar(.5))),this.onPunchHit){const r=this.onPunchHit(s,n,y.punchHitRadius);if(this.audio){const a=r?Math.random()>.15?"punch":"punch_crit":"punch";this.audio.playSpatial(a,s,{volume:r?1:.5})}this.isLocal&&this.world&&this.world.triggerScreenShake(r?1.5:.3,.2)}}}else this.rightLeg.position.z=mt.lerp(this.rightLeg.position.z,this.rightLegBasePos.z,e*y.punchReturnSpeed),this.rightLeg.position.y=mt.lerp(this.rightLeg.position.y,this.rightLegBasePos.y,e*y.punchReturnSpeed),this.rightLeg.rotation.x=mt.lerp(this.rightLeg.rotation.x,0,e*y.punchReturnSpeed)}getMouthPosition(){const e=new B(0,.3,.5);return e.applyQuaternion(this.mesh.quaternion),this.mesh.position.clone().add(e)}getForwardDirection(){return new B(0,0,1).applyQuaternion(this.mesh.quaternion)}selectTongueTarget(e,t=null){const i=this.getMouthPosition(),n=t||this.getForwardDirection(),s=[],r=y.tongueRange,a=mt.degToRad(y.tongueConeAngle);if(e.frogs)for(const[h,u]of Object.entries(e.frogs)){if(h===this.id||u.isDead)continue;const d=u.mesh.position.clone();d.y+=.3;const f=new B().subVectors(d,i),m=f.length();if(m>r)continue;const x=f.clone().normalize();if(x.dot(n)<0)continue;const g=x.angleTo(n);g>a||s.push({type:"frog",id:h,object:u,point:d,distance:m,angle:g})}if(e.grappleHooks)for(const h of e.grappleHooks){const u=new B().subVectors(h.position,i),d=u.length();if(d>r)continue;const f=u.clone().normalize();if(f.dot(n)<0)continue;const m=f.angleTo(n);m>a||s.push({type:"hook",id:null,object:h,point:h.position.clone(),distance:d,angle:m})}if(e.ball&&e.ball.mesh){const h=e.ball.mesh.position.clone(),u=new B().subVectors(h,i),d=u.length();if(d<=r){const f=u.clone().normalize();if(f.dot(n)>=0){const m=f.angleTo(n);m<=a&&s.push({type:"ball",id:null,object:e.ball,point:h,distance:d,angle:m})}}}if(e.scooters)for(const h of e.scooters){if(h.rider)continue;const u=h.mesh.position.clone(),d=new B().subVectors(u,i),f=d.length();if(f>r)continue;const m=d.clone().normalize();if(m.dot(n)<0)continue;const x=m.angleTo(n);x>a||s.push({type:"scooter",id:null,object:h,point:u,distance:f,angle:x})}const l=this.getWallTarget(e,i,n);if(l&&s.length>0){const h=y.tongueAssistRadius||2,u=s.find(d=>d.point.distanceTo(l.point)<h);if(u)return u}if(s.length===0)return l;const c=s.map(h=>({...h,score:y.tongueAngleWeight*(h.angle/a)+y.tongueDistanceWeight*(h.distance/r)}));return c.sort((h,u)=>h.score-u.score),c[0]}getWallTarget(e,t,i){if(!e||!e.physics)return null;const n=y.tongueRange,s=[new B(0,0,0),new B(.1,0,0),new B(-.1,0,0),new B(0,.1,0),new B(0,-.1,0)],r=new B(0,1,0),a=new B().crossVectors(i,r).normalize(),l=new B().crossVectors(a,i).normalize();let c=null;for(const h of s){const u=t.clone().add(a.clone().multiplyScalar(h.x)).add(l.clone().multiplyScalar(h.y)),d=new w(u.x,u.y,u.z),f=new w(u.x+i.x*n,u.y+i.y*n,u.z+i.z*n),m=new fo;if(new Tt(d,f).intersectWorld(e.physics.world,{result:m}),m.hasHit){const g=new B(m.hitPointWorld.x,m.hitPointWorld.y,m.hitPointWorld.z);if(!(m.hitNormalWorld.y>.8||g.y<.5)){const _=t.distanceTo(g);(!c||_<c.distance)&&(c={type:"wall",id:null,object:null,point:g,distance:_,angle:0})}}}return c}createTongueVisual(){if(this.tongueLine)return;const e=16,t=new Ut,i=new Float32Array((e+1)*3);t.setAttribute("position",new Kt(i,3));const n=new _h({color:y.tongueColor,linewidth:4});this.tongueSegmentCount=e,this.tongueLine=new Fa(t,n),this.tongueLine.visible=!1,this.tongueLine.frustumCulled=!1;const s=new Jn(y.tongueTipSize,8,8),r=new zt({color:y.tongueColor});this.tongueTip=new dt(s,r),this.tongueTip.visible=!1,this.mesh.parent&&(this.mesh.parent.add(this.tongueLine),this.mesh.parent.add(this.tongueTip))}shootTongue(e,t){if(this.tongue.state!=="idle"||this.tongue.cooldownTimer>0||this.isRidingScooter)return;this.world=t;const i=this.getMouthPosition(),n=new B().subVectors(e,i).normalize(),s=this.selectTongueTarget(t,n);if(!s){this.playTongueMiss();return}this.tongue.target=s,this.tongue.lockedPoint.copy(s.point),this.tongue.state="extending",this.tongue.startTime=performance.now(),this.tongue.progress=0,this.tongueStartPos.copy(this.getMouthPosition()),this.createTongueVisual(),this.tongueLine&&(this.tongueLine.visible=!0),this.tongueTip&&(this.tongueTip.visible=!0)}playTongueMiss(){this.createTongueVisual(),this.tongue.target={type:"miss",id:null,object:null,point:this.getMouthPosition().add(this.getForwardDirection().multiplyScalar(2)),distance:2,angle:0},this.tongue.lockedPoint.copy(this.tongue.target.point),this.tongue.state="extending",this.tongue.startTime=performance.now(),this.tongue.progress=0,this.tongueStartPos.copy(this.getMouthPosition()),this.tongueLine&&(this.tongueLine.visible=!0),this.tongueTip&&(this.tongueTip.visible=!0)}updateTongue(e,t=null){var n;if(this.tongue.state==="idle"){this.tongue.cooldownTimer=Math.max(0,this.tongue.cooldownTimer-e);return}this.tongueStartPos.copy(this.getMouthPosition());const i=(performance.now()-this.tongue.startTime)/1e3;if(this.tongue.state==="extending"){const s=((n=this.tongue.target)==null?void 0:n.type)==="miss"?y.tongueExtendDuration*.5:y.tongueExtendDuration,r=Math.min(i/s,1);this.tongue.progress=1-Math.pow(1-r,3),r>=1&&this.resolveTongue()}else if(this.tongue.state==="retracting"){const s=y.tongueRetractDuration,r=Math.min(i/s,1);this.tongue.progress=1-r,r>=1&&this.finishTongue()}else this.tongue.state==="attached"&&this.updateGrapplePull(e,t);this.updateTongueVisual()}resolveTongue(){var s,r;const e=this.tongue.target;if(!e||e.type==="miss"){this.tongue.state="retracting",this.tongue.startTime=performance.now();return}if(e.type==="frog"&&(!e.object||e.object.isDead)){this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playMissEffect();return}let t=null;if(e.type==="frog"&&((s=e.object)!=null&&s.mesh)?(t=e.object.mesh.position.clone(),t.y+=.3):e.type==="ball"&&((r=e.object)!=null&&r.mesh)?t=e.object.mesh.position.clone():e.type==="hook"&&e.object?t=e.object.position.clone():(e.type==="wall"||e.type==="scooter")&&(t=e.point.clone()),!t){this.tongue.state="retracting",this.tongue.startTime=performance.now();return}const i=this.tongue.lockedPoint.distanceTo(t),n=y.tongueMagnetRadius*3;if(i>n){this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playMissEffect();return}switch(e.type){case"frog":this.grabFrog(e.object),this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playHitEffect();break;case"hook":case"wall":this.tongue.state="attached",this.tongue.lockedPoint.copy(t),this.playHitEffect();break;case"ball":this.grabBall(e.object),this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playHitEffect();break;case"scooter":this.pullScooter(e.object),this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playHitEffect();break;default:this.tongue.state="retracting",this.tongue.startTime=performance.now()}}grabFrog(e){var i;if(!e||!e.body)return;const t=new B().subVectors(this.mesh.position,e.mesh.position).normalize();e.body.velocity.x+=t.x*y.tongueGrabForce,e.body.velocity.y+=t.y*y.tongueGrabForce*.5,e.body.velocity.z+=t.z*y.tongueGrabForce,(i=this.world)!=null&&i.network&&this.world.network.socket.emit("tongueResult",{sourceId:this.id,targetId:e.id,type:"pull"})}grabBall(e){if(!e||!e.body)return;const t=new B().subVectors(this.mesh.position,e.mesh.position).normalize();e.body.velocity.x+=t.x*y.tongueGrabForce,e.body.velocity.y+=t.y*y.tongueGrabForce*.3,e.body.velocity.z+=t.z*y.tongueGrabForce}pullScooter(e){if(!e||!e.body)return;const t=new B().subVectors(this.mesh.position,e.mesh.position).normalize();e.body.velocity.x+=t.x*y.tongueGrabForce*.5,e.body.velocity.z+=t.z*y.tongueGrabForce*.5}updateGrapplePull(e,t){if(!this.tongue.target)return;const i=this.tongue.lockedPoint,n=new B().subVectors(i,this.mesh.position).normalize(),s=this.mesh.position.distanceTo(i);let r=1;s<4&&(r=Math.max(0,(s-1.5)/2.5));const a=y.tongueGrappleForce*r;if(this.body){if(this.body.velocity.x+=n.x*a*e*10,this.body.velocity.y+=n.y*a*e*10,this.body.velocity.z+=n.z*a*e*10,t&&t.keys){const u=this.getForwardDirection(),d=new B().crossVectors(new B(0,1,0),u).normalize(),f=y.tongueSwingForce||10;t.keys.left&&(this.body.velocity.x-=d.x*f*e*10,this.body.velocity.z-=d.z*f*e*10),t.keys.right&&(this.body.velocity.x+=d.x*f*e*10,this.body.velocity.z+=d.z*f*e*10),t.keys.forward&&(this.body.velocity.x+=u.x*f*.5*e*10,this.body.velocity.z+=u.z*f*.5*e*10),t.keys.backward&&(this.body.velocity.x-=u.x*f*.5*e*10,this.body.velocity.z-=u.z*f*.5*e*10)}const c=35,h=this.body.velocity.length();h>c&&this.body.velocity.scale(c/h,this.body.velocity)}(!(t?t.tongueHeld:!0)&&s<2.5||s<1)&&(this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.body&&this.body.velocity.scale(.5,this.body.velocity))}finishTongue(){this.tongue.state="idle",this.tongue.progress=0,this.tongue.target=null,this.tongue.cooldownTimer=y.tongueCooldown,this.tongueLine&&(this.tongueLine.visible=!1),this.tongueTip&&(this.tongueTip.visible=!1)}updateTongueVisual(){if(!this.tongueLine||!this.tongueTip)return;const e=this.tongue.lockedPoint,t=new B().lerpVectors(this.tongueStartPos,e,this.tongue.progress),i=this.tongueSegmentCount||1,n=this.tongueLine.geometry.attributes.position.array,s=performance.now()/1e3,r=this.tongue.state==="attached",a=this.tongueStartPos.distanceTo(t);let l=0;r&&(l=Math.max(0,(6-a)*.15));const c=this.tongue.state==="extending",h=c?.08:r?.02:0,d=Math.sin(s*(c?25:10))*h;for(let m=0;m<=i;m++){const x=m/i,g=new B().lerpVectors(this.tongueStartPos,t,x);if(l>0){const p=Math.sin(x*Math.PI);g.y-=p*l}if(c||r){const p=Math.sin(x*Math.PI*2+s*10)*(d*Math.sin(x*Math.PI));g.z+=p,g.x+=p*.5}n[m*3]=g.x,n[m*3+1]=g.y,n[m*3+2]=g.z}this.tongueLine.geometry.attributes.position.needsUpdate=!0,this.tongueTip.position.copy(t);const f=1+Math.sin(s*15)*.1;this.tongueTip.scale.setScalar(f)}releaseTongue(){this.tongue.state==="attached"&&(this.tongue.state="retracting",this.tongue.startTime=performance.now())}playHitEffect(){if(this.world&&this.isLocal&&(this.world.triggerScreenShake(.5,.1),this.particles&&this.tongue.target&&this.particles.spawnTongueImpact(this.tongue.lockedPoint,y.tongueColor),this.audio&&this.tongue.target))if(this.tongue.target.type==="frog"){const t=Math.random()>.5?"tongue_hit_player1":"tongue_hit_player2";this.audio.playSpatial(t,this.tongue.lockedPoint)}else this.audio.playSpatial("tongue_hit_surface",this.tongue.lockedPoint)}playMissEffect(){this.world&&this.isLocal&&this.world.triggerScreenShake(.2,.05),this.audio&&this.audio.playSpatial("tongue_miss",this.getMouthPosition(),{volume:.5})}updateEyes(e){!this.pupils||this.pupils.length===0||!e||this.pupils.forEach(t=>{const i=t.parent.worldToLocal(e.clone()),n=t.userData.initialPos,s=new B().subVectors(i,n);s.z=0;const r=.12;s.length()>r&&s.normalize().multiplyScalar(r);const a=n.clone().add(s);t.position.lerp(a,.2)})}remotePunch(){this.punchTimer=0,this.isPunching=!0,this.punchProgress=0,this.punchHitChecked=!1}takeDamage(e,t,i=!1,n=!1,s=null){if(!this.isDead){if(this.health-=e,s&&(this.lastAttackerId=s),this.showHealthBar(),this.updateHealthBar(),this.showHitTint(),this.particles&&this.mesh){const r=this.mesh.position.clone();r.y+=.5;const a=t?new B(t.x,t.y,t.z).normalize():new B(0,1,0);this.particles.spawnPunchImpact(r,a)}if(this.isLocal&&this.world){const r=n?2:1;this.world.triggerScreenShake(r,.5)}t&&this.body&&this.body.type!==2&&this.body.velocity.set(t.x,t.y,t.z),this.showDamageToast(e,n),this.health<=0&&(this.health=0,this.die(i))}}showHitTint(){this.bodyMesh.traverse(e=>{if(e.isMesh&&e.material&&(e.userData.originalColor||e.material.color&&(e.userData.originalColor=e.material.color.clone()),e.material.color)){const t=new _e(16711680);e.material.color.lerp(t,.6)}}),this.hitTintTimeout&&clearTimeout(this.hitTintTimeout),this.hitTintTimeout=setTimeout(()=>{this.fadeHitTint()},100)}fadeHitTint(){let e=0;const t=setInterval(()=>{e+=.1,this.bodyMesh.traverse(i=>{i.isMesh&&i.material&&i.userData.originalColor&&i.material.color.lerp(i.userData.originalColor,.3)}),e>=1&&(clearInterval(t),this.bodyMesh.traverse(i=>{i.isMesh&&i.material&&i.userData.originalColor&&i.material.color.copy(i.userData.originalColor)}))},50)}showHealthBar(){this.healthBarVisible=!0,this.healthBarVisibleTimer=3,this.isHidden?this.healthBarContainer.style.opacity=this.isLocal?"0.2":"0":this.healthBarContainer.style.opacity="1"}hideHealthBar(){this.healthBarVisible=!1,this.healthBarContainer.style.opacity="0"}updateHealthBarVisibility(e){this.healthBarVisible&&this.healthBarVisibleTimer>0&&(this.healthBarVisibleTimer-=e,this.healthBarVisibleTimer<=0?this.hideHealthBar():this.isHidden&&(this.healthBarContainer.style.opacity=this.isLocal?"0.2":"0"))}die(e=!1){this.isDead||(this.isRidingScooter&&this.currentScooter&&this.currentScooter.dismount(),this.isDead=!0,this.deathTimer=0,this.respawnTimer=y.respawnTime,this.particles&&this.particles.spawnDeathDisperse(this.mesh.position,this.color),this.setMeshOpacity(0),this.bodyMesh.visible=!1,this.body&&(this.body.velocity.set(0,0,0),this.body.position.y=1e3),this.healthBarContainer.style.display="none",this.isLocal&&window.showDeathScreen&&window.showDeathScreen(),this.audio&&this.audio.play("death",{volume:.8,randomizePitch:!1}),this.isLocal&&!e&&this.world&&this.world.network&&this.world.network.sendDeath(this.lastAttackerId||null))}respawn(e=!1){this.isDead=!1,this.health=y.maxHealth,this.deathTimer=0,this.lastAttackerId=null,this.body&&(this.body.position.set(0,10,0),this.body.velocity.set(0,0,0),this.mesh.position.set(0,10,0)),this.setHidden(!1),this.setMeshOpacity(1),this.bodyMesh.visible=!0,this.healthBarContainer.style.display="block",this.updateHealthBar(),this.isLocal&&window.hideDeathScreen&&window.hideDeathScreen(),this.audio&&this.audio.playSpatial("respawn",this.mesh.position),this.isLocal&&!e&&this.world&&this.world.network&&this.world.network.sendRespawn()}setHidden(e){if(this.isHidden===e)return;this.isHidden=e;const t=e?this.isLocal?"0.2":"0":"1",i=e&&!this.isLocal?"none":"block";this.nameTagDiv&&(this.nameTagDiv.style.opacity=t,this.nameTagDiv.style.display=i,this.nameTagDiv.style.transition="opacity 0.3s ease"),this.healthBarContainer&&(e?(this.healthBarContainer.style.opacity=this.isLocal?"0.2":"0",this.isLocal||(this.healthBarContainer.style.display="none")):(this.healthBarContainer.style.display="block",this.healthBarVisibleTimer>0?this.healthBarContainer.style.opacity="1":this.healthBarContainer.style.opacity="0")),this.chatBubbleDiv&&(this.chatBubbleDiv.style.opacity=t,this.chatBubbleDiv.style.display=i),this.isLocal&&this.setMeshOpacity(e?.7:1)}updateHealthBar(){if(!this.healthBarFill)return;const e=this.health/y.maxHealth*100;this.healthBarFill.style.width=`${e}%`,this.healthBarFill.classList.remove("low","critical"),e<=25?this.healthBarFill.classList.add("critical"):e<=50&&this.healthBarFill.classList.add("low")}setMeshOpacity(e){this.bodyMesh.traverse(t=>{t.isMesh&&t.material&&(t.material.transparent=!0,t.material.opacity=e)})}showDamageToast(e,t=!1){const i=document.createElement("div");i.className="damage-toast"+(t?" critical":""),i.textContent=t?`CRIT! -${e}`:`-${e}`;const n=new Ho(i);n.position.set((Math.random()-.5)*.5,2.5+Math.random()*.5,0),this.mesh.add(n),setTimeout(()=>{this.mesh.remove(n),i.remove()},1e3)}dispose(){this.chatBubbleDiv&&this.chatBubbleDiv.parentNode&&this.chatBubbleDiv.parentNode.removeChild(this.chatBubbleDiv),this.healthBarContainer&&this.healthBarContainer.parentNode&&this.healthBarContainer.parentNode.removeChild(this.healthBarContainer),this.nameTagDiv&&this.nameTagDiv.parentNode&&this.nameTagDiv.parentNode.removeChild(this.nameTagDiv),this.chatTimer&&(clearTimeout(this.chatTimer),this.chatTimer=null),this.bodyMesh.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()))})}};wo(yn,"modelGeometry",null),wo(yn,"loader",(()=>{const e=new uo;return e.setMeshoptDecoder(Bh),e})());let jo=yn;class bw{constructor(e,t,i={x:0,y:2,z:0}){this.scene=t,this.physicsWorld=e,this.radius=y.ballRadius,this.mass=y.ballMass,this.audio=null,this.mesh=new Ci,this.mesh.position.set(i.x,i.y,i.z),this.createFallbackSphere(),i.x===0&&i.z===0&&(i.x=(Math.random()-.5)*20,i.z=(Math.random()-.5)*20),new uo().load("/models/ball.glb",s=>{this.fallbackSphere&&this.mesh.remove(this.fallbackSphere);const r=s.scene,a=new Qi().setFromObject(r),l=new B;a.getSize(l);const c=Math.max(l.x,l.y,l.z),u=this.radius*2/c;r.scale.set(u,u,u);const d=new B;a.getCenter(d),r.position.sub(d.multiplyScalar(u)),r.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0,f.material&&(f.material.roughness=.4,f.material.metalness=.1))}),this.mesh.add(r),this.modelLoaded=!0},void 0,s=>{console.error("Error loading ball GLB:",s)}),t.add(this.mesh),this.createPhysicsBody(e,i)}createFallbackSphere(){const e=new Jn(this.radius,32,32),t=new ws({color:16777215,roughness:.3,metalness:0,emissive:2236962});this.fallbackSphere=new dt(e,t),this.fallbackSphere.castShadow=!0,this.fallbackSphere.receiveShadow=!0,this.mesh.add(this.fallbackSphere)}createPhysicsBody(e,t){this.ballMaterial=new Ms("ball");const i=new Kn(e.groundMaterial,this.ballMaterial,{friction:y.ballFriction,restitution:y.ballBounciness});e.world.addContactMaterial(i);const n=new Kn(e.frogMaterial,this.ballMaterial,{friction:.2,restitution:y.ballBounciness*.85});e.world.addContactMaterial(n);const s=new Fh(this.radius);this.body=new pe({mass:this.mass,shape:s,material:this.ballMaterial,linearDamping:y.ballLinearDamping,angularDamping:y.ballAngularDamping}),this.body.position.set(t.x,t.y,t.z),e.world.addBody(this.body),this.body.addEventListener("collide",r=>{if(!this.audio)return;const a=r.contact.getImpactVelocityAlongNormal();a>2&&(r.body.material&&r.body.material.name==="water"?this.audio.playSpatial("splash",this.mesh.position,{volume:Math.min(a/10,.8)}):this.audio.playSpatial("ball_drop",this.mesh.position,{volume:Math.min(a/15,.6)}))})}update(e,t=null){if(this.body){if(this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion),t!==null&&this.body.position.y<t){const i=t-this.body.position.y,n=25,s=Math.min(i/this.radius,2);this.body.velocity.y+=n*s*e,this.body.velocity.y<-2&&(this.body.velocity.y=-2),i<this.radius*.5&&(this.body.velocity.y*=.9),this.body.velocity.x*=.98,this.body.velocity.z*=.98,this.body.angularVelocity.scale(.96,this.body.angularVelocity)}this.body.position.y<y.ballResetHeight&&this.reset()}}kick(e,t=null){if(!this.body)return;const i=t||y.ballKickForce,n=new w(e.x*i,e.y*i+y.ballKickUpward,e.z*i);if(this.body.applyImpulse(n,this.body.position),this.audio){const s=Math.random()>.5?"ball_kick1":"ball_kick2";this.audio.playSpatial(s,this.mesh.position),this.audio.playSpatial("ball_swoosh",this.mesh.position,{volume:.4})}}reset(){if(this.body){const e=(Math.random()-.5)*y.ballSpawnRangeX*2,t=(Math.random()-.5)*y.ballSpawnRangeZ*2;this.body.position.set(e,y.ballSpawnHeight,t),this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0)}}getSyncState(){return this.body?{x:this.body.position.x,y:this.body.position.y,z:this.body.position.z,qx:this.body.quaternion.x,qy:this.body.quaternion.y,qz:this.body.quaternion.z,qw:this.body.quaternion.w,vx:this.body.velocity.x,vy:this.body.velocity.y,vz:this.body.velocity.z}:null}applySyncState(e){this.body&&(this.body.position.set(e.x,e.y,e.z),this.body.quaternion.set(e.qx,e.qy,e.qz,e.qw),this.body.velocity.set(e.vx,e.vy,e.vz))}}const fa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _o{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Aw=new Ua(-1,1,1,-1,0,1);class Mw extends Ut{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}}const ww=new Mw;class Nh{constructor(e){this._mesh=new dt(ww,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Aw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Rp extends _o{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_s.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Nh(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Qd extends _o{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Sw extends _o{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ew{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Te);this._width=i.width,this._height=i.height,t=new $i(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rp(fa),this.copyPass.material.blending=kt,this.clock=new hp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Qd!==void 0&&(r instanceof Qd?i=!0:r instanceof Sw&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Cw extends _o{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _e}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=n}}const ea={defines:{NUM_SAMPLES:7,NUM_RINGS:4,DIFFUSE_TEXTURE:0,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new Te(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new ke},cameraInverseProjectionMatrix:{value:new ke},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

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
		}`},On={defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new Te(512,512)},sampleUvOffsets:{value:[new Te(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

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
		}`},Ra={createSampleWeights:function(o,e){const t=[];for(let i=0;i<=o;i++)t.push(Tw(i,e));return t},createSampleOffsets:function(o,e){const t=[];for(let i=0;i<=o;i++)t.push(e.clone().multiplyScalar(i));return t},configure:function(o,e,t,i){o.defines.KERNEL_RADIUS=e,o.uniforms.sampleUvOffsets.value=Ra.createSampleOffsets(e,i),o.uniforms.sampleWeights.value=Ra.createSampleWeights(e,t),o.needsUpdate=!0}};function Tw(o,e){return Math.exp(-(o*o)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}class po extends _o{constructor(e,t,i=new Te(256,256)){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this._originalClearColor=new _e,this._oldClearColor=new _e,this._oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new Te(i.x,i.y),this.saoRenderTarget=new $i(this.resolution.x,this.resolution.y,{type:Cn}),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone();const n=new bh;n.format=oo,n.type=so,this.normalRenderTarget=new $i(this.resolution.x,this.resolution.y,{minFilter:Vt,magFilter:Vt,type:Cn,depthTexture:n}),this.normalMaterial=new Ng,this.normalMaterial.blending=kt,this.saoMaterial=new Ht({defines:Object.assign({},ea.defines),fragmentShader:ea.fragmentShader,vertexShader:ea.vertexShader,uniforms:_s.clone(ea.uniforms)}),this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=n,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=kt,this.vBlurMaterial=new Ht({uniforms:_s.clone(On.uniforms),defines:Object.assign({},On.defines),vertexShader:On.vertexShader,fragmentShader:On.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=0,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=n,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=kt,this.hBlurMaterial=new Ht({uniforms:_s.clone(On.uniforms),defines:Object.assign({},On.defines),vertexShader:On.vertexShader,fragmentShader:On.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=0,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=n,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=kt,this.materialCopy=new Ht({uniforms:_s.clone(fa.uniforms),vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader,blending:kt}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=Ql,this.materialCopy.blendSrc=Bf,this.materialCopy.blendDst=ec,this.materialCopy.blendEquation=An,this.materialCopy.blendSrcAlpha=Rf,this.materialCopy.blendDstAlpha=ec,this.materialCopy.blendEquationAlpha=An,this.fsQuad=new Nh(null)}render(e,t,i){this.renderToScreen&&(this.materialCopy.blending=kt,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this._renderPass(e,this.materialCopy,null)),e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const n=e.autoClear;e.autoClear=!1,this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const s=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=s,this.hBlurMaterial.uniforms.depthCutoff.value=s,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(Ra.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Te(0,1)),Ra.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Te(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this._renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this._renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));const r=this.materialCopy;this.params.output===po.OUTPUT.Normal?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===po.OUTPUT.Default?r.blending=Ql:r.blending=kt,this._renderPass(e,r,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=n}setSize(e,t){this.saoRenderTarget.setSize(e,t),this.blurIntermediateRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.saoMaterial.uniforms.size.value.set(e,t),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,t),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,t),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}_renderPass(e,t,i,n,s){e.getClearColor(this._originalClearColor);const r=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n!=null&&(e.setClearColor(n),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}_renderOverride(e,t,i,n,s){e.getClearColor(this._originalClearColor);const r=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n=t.clearColor||n,s=t.clearAlpha||s,n!=null&&(e.setClearColor(n),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(r)}}po.OUTPUT={Default:0,SAO:1,Normal:2};const ta={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Rw extends _o{constructor(){super(),this.uniforms=_s.clone(ta.uniforms),this.material=new Fg({name:ta.name,uniforms:this.uniforms,vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader}),this._fsQuad=new Nh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===If?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===nh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ff?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nf?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Df&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Bw{constructor(e){this.scene=e,this.particles=[],this.dustPool=[],this.impactPool=[],this.dustGeometry=new jn(1,1,1),this.impactGeometry=new wh(1,0),this.dustMaterial=new zt({color:13413e3,transparent:!0,opacity:.8}),this.impactMaterial=new zt({color:16777096,transparent:!0,opacity:1,blending:Zl}),this.initPool()}initPool(){for(let e=0;e<40;e++){const t=new dt(this.dustGeometry,this.dustMaterial.clone());t.castShadow=!1,t.receiveShadow=!1,t.visible=!1,this.scene.add(t),this.dustPool.push(t)}for(let e=0;e<80;e++){const t=new dt(this.impactGeometry,this.impactMaterial.clone());t.visible=!1,this.scene.add(t),this.impactPool.push(t)}}getDustParticle(){return this.dustPool.find(e=>!e.visible)}getImpactParticle(){return this.impactPool.find(e=>!e.visible)}randRange(e,t){return e+Math.random()*(t-e)}spawnWalkDust(e,t){if(!y.vfxEnabled)return;const i=3,n=new _e(t||13413e3);for(let s=0;s<i;s++){const r=this.getImpactParticle();if(!r)return;const a=.2;r.position.set(e.x+this.randRange(-a,a),e.y+.1,e.z+this.randRange(-a,a)),r.scale.setScalar(.01);const l=.15*this.randRange(.5,1.2),c=n.clone();Math.random()>.5&&c.offsetHSL(0,0,.2),r.material.color.copy(c),r.visible=!0,this.particles.push({mesh:r,velocity:new B(this.randRange(-1,1),this.randRange(1,3),this.randRange(-1,1)),angularVelocity:new B(this.randRange(-10,10),this.randRange(-10,10),0),targetScale:l,life:.4,maxLife:.4,type:"impact"})}}spawnJumpDust(e,t){if(!y.vfxEnabled)return;const i=15,n=new _e(t||13413e3);for(let s=0;s<i;s++){const r=this.getImpactParticle();if(!r)return;const a=s/i*Math.PI*2+this.randRange(-.2,.2),l=this.randRange(4,7);r.position.set(e.x+Math.cos(a)*.5,e.y+.1,e.z+Math.sin(a)*.5);const c=.25*this.randRange(1,2);r.scale.setScalar(.01),r.material.color.copy(n),r.visible=!0,this.particles.push({mesh:r,velocity:new B(Math.cos(a)*l,this.randRange(2,5),Math.sin(a)*l),angularVelocity:new B(this.randRange(-10,10),this.randRange(-10,10),0),targetScale:c,life:.5,maxLife:.5,type:"impact"})}}spawnLandingDust(e,t,i){if(!y.vfxEnabled)return;const n=18,s=new _e(i||13413e3);for(let r=0;r<n;r++){const a=this.getImpactParticle();if(!a)return;const l=Math.random()*Math.PI*2,c=Math.random()*.8,h=t+this.randRange(2,6);a.position.set(e.x+Math.cos(l)*c,e.y+.05,e.z+Math.sin(l)*c);const u=.3*this.randRange(.8,1.5);a.scale.setScalar(.01),a.material.color.copy(s),a.visible=!0,this.particles.push({mesh:a,velocity:new B(Math.cos(l)*h,this.randRange(2,t*1.5),Math.sin(l)*h),angularVelocity:new B(this.randRange(-15,15),this.randRange(-15,15),0),targetScale:u,life:.6,maxLife:.6,type:"impact"})}}spawnPunchImpact(e,t){if(!y.vfxEnabled)return;const i=y.vfxImpactCount;for(let n=0;n<i;n++){const s=this.getImpactParticle();if(!s)return;s.position.copy(e),s.scale.setScalar(.01);const r=y.vfxImpactSize*this.randRange(.5,1.5),a=this.randRange(.05,.15),l=1,c=this.randRange(.5,1);s.material.color.setHSL(a,l,c),s.visible=!0;const h=.8;this.particles.push({mesh:s,velocity:new B(t.x*10+this.randRange(-h,h)*5,this.randRange(-1,5),t.z*10+this.randRange(-h,h)*5),angularVelocity:new B(this.randRange(-20,20),this.randRange(-20,20),this.randRange(-20,20)),targetScale:r,life:y.vfxImpactLife,maxLife:y.vfxImpactLife,type:"impact"})}}spawnTongueImpact(e,t){if(!y.vfxEnabled)return;const i=12,n=new _e(t||y.tongueColor);for(let s=0;s<i;s++){const r=this.getImpactParticle();if(!r)return;r.position.copy(e),r.scale.setScalar(.01);const a=.2*this.randRange(.8,2);r.material.color.copy(n),r.visible=!0;const l=Math.random()*Math.PI*2,c=this.randRange(2,6);this.particles.push({mesh:r,velocity:new B(Math.cos(l)*c,this.randRange(1,4),Math.sin(l)*c),angularVelocity:new B(this.randRange(-10,10),this.randRange(-10,10),0),targetScale:a,life:.6,maxLife:.6,type:"impact"})}}spawnDeathDisperse(e,t){if(!y.vfxEnabled)return;const i=30;for(let n=0;n<i;n++){const s=this.getDustParticle();if(!s)return;s.position.set(e.x+this.randRange(-.3,.3),e.y+this.randRange(0,.5),e.z+this.randRange(-.3,.3)),s.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),s.visible=!0,s.material.color.setHex(t||5025616),s.material.opacity=.9;const r=.2*this.randRange(.5,1.5);s.scale.setScalar(.01);const a=this.randRange(2,8),l=Math.random()*Math.PI*2,c=this.randRange(2,10);this.particles.push({mesh:s,velocity:new B(Math.cos(l)*a,c,Math.sin(l)*a),angularVelocity:new B(this.randRange(-10,10),this.randRange(-10,10),this.randRange(-10,10)),targetScale:r,life:1.5,maxLife:1.5,type:"dust"})}}update(e){for(let t=this.particles.length-1;t>=0;t--){const i=this.particles[t];i.mesh.position.add(i.velocity.clone().multiplyScalar(e)),i.mesh.rotation.x+=i.angularVelocity.x*e,i.mesh.rotation.y+=i.angularVelocity.y*e,i.mesh.rotation.z+=i.angularVelocity.z*e,i.type==="dust"?(i.velocity.y-=15*e,i.velocity.multiplyScalar(1-e*2)):i.velocity.multiplyScalar(1-e*5),i.life-=e;const n=i.life/i.maxLife;let s=0;if(n>.8){const r=(1-n)/.2;s=mt.lerp(0,i.targetScale,r)}else{const r=n/.8;s=i.targetScale*r}i.mesh.scale.setScalar(s),i.life<=0&&(i.mesh.visible=!1,this.particles.splice(t,1))}}}class Iw{constructor(e,t){this.camera=e,this.scene=t,this.listener=new l0,this.camera.add(this.listener),this.sounds={},this.masterVolume=.5,this.isMuted=!1,this.manifest={hop:"/soundfx/Small Hop.aiff",grunt1:"/soundfx/froggrunt-01.mp3",grunt2:"/soundfx/froggrunt-02.mp3",land:"/soundfx/landground.mp3",splash:"/soundfx/watersplash.wav",tongue_shoot:"/soundfx/whiplashtongue.wav",tongue_hit_surface:"/soundfx/tongueimpactsurface.mp3",tongue_hit_player1:"/soundfx/tonguehitplayer1.mp3",tongue_hit_player2:"/soundfx/tonguehitplayer2.mp3",tongue_miss:"/soundfx/tonguemiss.mp3",punch:"/soundfx/punchbase.mp3",punch_crit:"/soundfx/punchcritical.wav",death:"/soundfx/deathjingle.mp3",respawn:"/soundfx/respawn.wav",ball_kick1:"/soundfx/ballkick-01.mp3",ball_kick2:"/soundfx/ballkick-02.mp3",ball_drop:"/soundfx/balldrop.mp3",ball_swoosh:"/soundfx/ballswoosh.mp3",scooter_mount:"/soundfx/mountscooter.wav",scooter_engine:"/soundfx/scooterengine.mp3",ui_click:"/soundfx/clickbutton-ui.aiff",ui_error:"/soundfx/error_toast.wav",ui_success:"/soundfx/toast_success.flac",login_success:"/soundfx/login_success.wav",levelup:"/soundfx/levelup.mp3",message:"/soundfx/message_received.wav",friend_req:"/soundfx/new_friend_req.wav",ambiance:"/soundfx/ambienceforest.wav"},this.loader=new o0,this.loadAll()}async loadAll(){const e=Object.entries(this.manifest).map(([t,i])=>new Promise(n=>{this.loader.load(i,s=>{this.sounds[t]=s,n()},void 0,s=>{console.warn(`Failed to load sound: ${t} from ${i}`,s),n()})}));await Promise.all(e)}play(e,t={}){if(this.isMuted||!this.sounds[e])return null;const i=new up(this.listener);i.setBuffer(this.sounds[e]);const n=(t.volume!==void 0?t.volume:1)*this.masterVolume;if(i.setVolume(n),t.loop&&i.setLoop(!0),t.randomizePitch!==!1){const s=.9+Math.random()*.2;i.playbackRate=s}return i.play(),i}playSpatial(e,t,i={}){if(this.isMuted||!this.sounds[e])return null;const n=new h0(this.listener);n.setBuffer(this.sounds[e]);const s=(i.volume!==void 0?i.volume:1)*this.masterVolume;n.setVolume(s);const r=i.refDistance||10;if(n.setRefDistance(r),i.loop&&n.setLoop(!0),i.randomizePitch!==!1){const c=.9+Math.random()*.2;n.playbackRate=c}const a=new ft;a.position.copy(t);const l=this.scene||this.camera.parent;if(l)l.add(a);else{let c=this.camera;for(;c.parent;)c=c.parent;c.add(a)}return a.add(n),n.play(),n.onEnded=()=>{a.remove(n),a.parent&&a.parent.remove(a)},n}setMasterVolume(e){this.masterVolume=mt.clamp(e,0,1),this.listener.setMasterVolume(this.isMuted?0:this.masterVolume)}toggleMute(){return this.isMuted=!this.isMuted,this.listener.setMasterVolume(this.isMuted?0:this.masterVolume),this.isMuted}}class Lw{constructor(){this.container=document.getElementById("canvas-container"),this.scene=new Eu,this.scene.background=new _e(16746496),this.scene.fog=new mh(16746496,40,120),this.camera=new Jt(60,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,15,15),this.camera.lookAt(0,0,0),this.cameraOrbitAngle=y.cameraOrbitAngle,this.cameraPitchAngle=y.cameraPitchAngle,this.cameraDistance=y.cameraDistance,this.shakeIntensity=0,this.shakeTimer=0,this.shakeOffset=new B,this.grappleHooks=[],this.tongueCursorIndicator=null,this.createTongueCursorIndicator(),this.renderer=new yd({antialias:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=y.shadowEnabled,this.renderer.shadowMap.type=ya,this.renderer.shadowMap.autoUpdate=y.shadowAutoUpdate,this.renderer.toneMapping=nh,this.renderer.toneMappingExposure=1,this.container.appendChild(this.renderer.domElement),this.labelRenderer=new rb,this.labelRenderer.setSize(window.innerWidth,window.innerHeight),this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.top="0px",this.labelRenderer.domElement.style.left="0px",this.labelRenderer.domElement.style.pointerEvents="none",this.container.appendChild(this.labelRenderer.domElement);const e=new Xu(16777215,y.ambientIntensity);this.scene.add(e);const t=new Qg(y.hemiSkyColor,y.hemiGroundColor,y.hemiIntensity);this.scene.add(t),this.hemiLight=t;const i=new ua(16777215,y.sunIntensity);i.position.set(20,30,10),this.dirLight=i;const n=new ua(y.rimColor,y.rimIntensity);n.position.set(y.rimPosX,y.rimPosY,y.rimPosZ),this.scene.add(n),this.rimLight=n,i.castShadow=y.shadowEnabled,i.shadow.mapSize.width=y.shadowMapSize,i.shadow.mapSize.height=y.shadowMapSize,i.shadow.camera.near=y.shadowCameraNear,i.shadow.camera.far=y.shadowCameraFar,i.shadow.camera.left=-100,i.shadow.camera.right=100,i.shadow.camera.top=100,i.shadow.camera.bottom=-100,i.shadow.bias=y.shadowBias,i.shadow.normalBias=y.shadowNormalBias,i.shadow.radius=y.shadowRadius,i.shadow.blurSamples=y.shadowBlurSamples,i.shadow.intensity=y.shadowIntensity,this.scene.add(i),this.scene.add(i.target),this.physics=new _w,this.loadingManager=new ap,this.setupLoadingManager(),jo.setLoaderManager(this.loadingManager),ir.setLoaderManager(this.loadingManager),this.terrainMeshes=[],this.wallMeshes=[],this.loadLevel(),this.frogs={},this.localFrog=null,this.isBallAuthority=!1,this.scooters=[],this.scooterSpawnZones=[],this.playerHasScooter={},this.waterLevel=null,this.bushZones=[],this.bushMeshes=[],window.addEventListener("resize",()=>this.onWindowResize()),this.raycaster=new dp,this.mousePlane=new _n(new B(0,1,0),0),this.fpsCounter=document.getElementById("fps-counter"),this.frameCount=0,this.lastFpsUpdate=performance.now(),this.grassMeshes=[],this.grassUniforms={uTime:{value:0},uPlayerPos:{value:new B},uBendingStrength:{value:y.grassBendingStrength},uBendingRadius:{value:y.grassBendingRadius},uWindSpeed:{value:y.grassWindSpeed},uWindStrength:{value:y.grassWindStrength}},this.waterMeshes=[],this.waterUniforms={uTime:{value:0},uWaveSpeed:{value:.8},uWaveHeight:{value:.15},uWaveFrequency:{value:3},uDeepColor:{value:new _e(671068)},uShallowColor:{value:new _e(1739980)},uFoamColor:{value:new _e(16777215)}},this.composer=new Ew(this.renderer),this.composer.addPass(new Cw(this.scene,this.camera)),this.saoPass=new po(this.scene,this.camera),this.saoPass.params.output=po.OUTPUT.Default,this.saoPass.params.saoBias=.5,this.saoPass.params.saoIntensity=.015,this.saoPass.params.saoScale=12,this.saoPass.params.saoKernelRadius=40,this.saoPass.params.saoMinResolution=0,this.saoPass.enabled=y.saonEnabled,this.composer.addPass(this.saoPass);const s={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new Te(window.innerWidth,window.innerHeight)},uSaturation:{value:y.shaderSaturation},uBrightness:{value:y.shaderBrightness},uContrast:{value:y.shaderContrast},uGamma:{value:y.shaderGamma},uTint:{value:new B(y.shaderTintR,y.shaderTintG,y.shaderTintB)},uTemperature:{value:y.shaderTemperature},uVignetteEnabled:{value:y.vignetteEnabled?1:0},uVignetteIntensity:{value:y.vignetteIntensity},uVignetteRadius:{value:y.vignetteRadius},uVignetteSoftness:{value:y.vignetteSoftness},uChromaticEnabled:{value:y.chromaticEnabled?1:0},uChromaticIntensity:{value:y.chromaticIntensity},uChromaticRadial:{value:y.chromaticRadial?1:0},uGrainEnabled:{value:y.grainEnabled?1:0},uGrainIntensity:{value:y.grainIntensity},uGrainSpeed:{value:y.grainSpeed},uGrainSize:{value:y.grainSize},uSharpenEnabled:{value:y.sharpenEnabled?1:0},uSharpenIntensity:{value:y.sharpenIntensity},uBloomEnabled:{value:y.bloomEnabled?1:0},uBloomIntensity:{value:y.bloomIntensity},uBloomThreshold:{value:y.bloomThreshold},uBloomRadius:{value:y.bloomRadius},uToonEnabled:{value:y.toonEnabled?1:0},uOutlineEnabled:{value:y.outlineEnabled?1:0},uOutlineIntensity:{value:y.outlineIntensity},uSkyColor:{value:new B(1,.53,0)},uLowHealth:{value:0}},vertexShader:`
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
            `};this.customPass=new Rp(s),this.composer.addPass(this.customPass);const r=new Rw;this.composer.addPass(r),this.particles=new Bw(this.scene);const a=(Math.random()-.5)*y.ballSpawnRangeX*2,l=(Math.random()-.5)*y.ballSpawnRangeZ*2;this.ball=new bw(this.physics,this.scene,{x:a,y:y.ballSpawnHeight,z:l}),this.audio=new Iw(this.camera,this.scene),this.ball.audio=this.audio}setupLoadingManager(){const e=document.getElementById("loading-bar"),t=document.getElementById("loading-status"),i=document.getElementById("loading-screen");this.loadingManager.onProgress=(n,s,r)=>{const a=s/r*100;e&&(e.style.width=a+"%"),n.includes("world.glb")?t&&(t.textContent="Analyzing Terrain & Lilypads..."):n.includes("scooter.glb")?t&&(t.textContent="Polishing Scooters..."):n.includes("frog_ready")?t&&(t.textContent="Waking up Frogs..."):t&&(t.textContent=`Gathering assets... (${s}/${r})`)},this.loadingManager.onLoad=()=>{console.log("Loading complete!"),t&&(t.textContent="Optimizing Grass & Shadows..."),setTimeout(()=>{i&&(i.classList.add("fade-out"),setTimeout(()=>{i.style.display="none";const n=document.getElementById("login-modal");n&&document.body.classList.contains("spectator-mode")&&(n.style.display="flex")},800))},500)},this.loadingManager.onError=n=>{console.error("Error loading: "+n),t&&(t.textContent="Error loading assets. Please refresh.")}}getShadowMapType(e){switch(e){case"Basic":return am;case"PCF":return ya;case"PCFSoft":return $l;case"VSM":return Ui;default:return $l}}setupVegetationMaterial(e,t="grass"){e&&(e.onBeforeCompile=i=>{i.uniforms.uTime=this.grassUniforms.uTime,i.uniforms.uPlayerPos=this.grassUniforms.uPlayerPos;const n=t==="bush"?y.grassBendingStrength*1.5:y.grassBendingStrength,s=t==="bush"?y.grassBendingRadius*1.8:y.grassBendingRadius,r=t==="bush"?y.grassWindStrength*1.3:y.grassWindStrength;i.uniforms.uBendingStrength={value:n},i.uniforms.uBendingRadius={value:s},i.uniforms.uWindSpeed=this.grassUniforms.uWindSpeed,i.uniforms.uWindStrength={value:r},i.vertexShader=`
                attribute float instanceOpacity;
                varying float vInstanceOpacity;
                uniform float uTime;
                uniform vec3 uPlayerPos;
                uniform float uBendingStrength;
                uniform float uBendingRadius;
                uniform float uWindSpeed;
                uniform float uWindStrength;
            `+i.vertexShader,i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`
                #include <begin_vertex>
                vInstanceOpacity = instanceOpacity;
                
                // Get world position of vertex (Handle instancing)
                #ifdef USE_INSTANCING
                    vec4 worldPos = modelMatrix * instanceMatrix * vec4(position, 1.0);
                #else
                    vec4 worldPos = modelMatrix * vec4(position, 1.0);
                #endif
                
                // 1. Wind Sway (Simple sin wave based on height)
                // We use object-space Y for height factor
                float heightFactor = clamp(position.y * 2.0, 0.0, 1.0); 
                float windTime = uTime * uWindSpeed;
                
                // Enhanced "Leafy" jitter for bushes
                float jitter = 0.0;
                ${t==="bush"?"jitter = sin(uTime * 15.0 + worldPos.y * 10.0) * 0.02 * heightFactor;":""}
                
                float windSway = sin(windTime + worldPos.x * 0.5 + worldPos.z * 0.5) * uWindStrength * heightFactor;
                transformed.x += windSway + jitter;
                transformed.z += windSway * 0.5 + jitter;

                // 2. Player Pushing
                float dist = distance(worldPos.xyz, uPlayerPos);
                if (dist < uBendingRadius) {
                    float pushFactor = (1.0 - (dist / uBendingRadius)) * uBendingStrength * heightFactor;
                    vec3 pushDir = normalize(worldPos.xyz - uPlayerPos);
                    pushDir.y = -0.3; // Push down slightly
                    
                    // Transform push direction back to local space
                    #ifdef USE_INSTANCING
                        transformed += (inverse(instanceMatrix) * inverse(modelMatrix) * vec4(pushDir * pushFactor, 0.0)).xyz;
                    #else
                        transformed += (inverse(modelMatrix) * vec4(pushDir * pushFactor, 0.0)).xyz;
                    #endif
                }
                `),i.fragmentShader=`
                varying float vInstanceOpacity;
            `+i.fragmentShader,i.fragmentShader=i.fragmentShader.replace("#include <alphatest_fragment>",`
                #include <alphatest_fragment>
                diffuseColor.a *= vInstanceOpacity;
                `)})}setupInstancedVegetation(e,t,i="grass"){const n=e.geometry.clone(),s=e.material.clone(),r=new Float32Array(t.length).fill(1);n.setAttribute("instanceOpacity",new wa(r,1)),i==="bush"?(s.color.setHex(2972199),s.transparent=!0):s.color.setHex(4105009),this.setupVegetationMaterial(s,i);const a=new ip(n,s,t.length);a.name=i==="bush"?"InstancedBush":"InstancedGrass",a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!0;for(let l=0;l<t.length;l++)a.setMatrixAt(l,t[l]);if(a.instanceMatrix.needsUpdate=!0,this.scene.add(a),i==="bush"){this.grassMeshes.push(a),this.bushMeshes.push(a);for(let l=0;l<t.length;l++){const c=new B;c.setFromMatrixPosition(t[l]);let h=null,u=1/0;for(const d of this.bushZones){if(d.mesh)continue;const f=d.position.distanceTo(c);f<u&&(u=f,h=d)}h&&u<.1&&(h.mesh=a,h.index=l,h.currentOpacity=1)}}else this.grassMeshes.push(a)}setupWaterMaterial(e){const t=new Ht({uniforms:{uTime:this.waterUniforms.uTime,uColor:{value:new _e(1739980)},uOpacity:{value:.6}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform float uTime;
                uniform vec3 uColor;
                uniform float uOpacity;
                varying vec2 vUv;
                
                void main() {
                    // Two layers of scrolling diagonal lines for a "shimmer" effect
                    float ripple1 = sin((vUv.x + vUv.y) * 30.0 + uTime * 1.5);
                    float ripple2 = sin((vUv.x - vUv.y) * 25.0 - uTime * 1.2);
                    
                    float shimmer = (ripple1 * 0.5 + ripple2 * 0.5);
                    shimmer = smoothstep(0.7, 1.0, shimmer);
                    
                    vec3 finalColor = mix(uColor, vec3(1.0), shimmer * 0.15);
                    gl_FragColor = vec4(finalColor, uOpacity);
                }
            `,transparent:!0,side:li,depthWrite:!0});e.material=t,e.renderOrder=1,e.castShadow=!1,e.receiveShadow=!1,e.updateMatrixWorld();const i=new B;e.getWorldPosition(i),this.waterLevel=i.y,console.log(`[WATER] Water surface detected at Y=${this.waterLevel} (Collision DISABLED)`)}loadLevel(){const e=new uo(this.loadingManager);e.setMeshoptDecoder(Bh),this.wallMeshes=[];const t=[];let i=null;const n=[];let s=null;e.load("/models/world.glb",r=>{const a=r.scene;this.scene.add(a),a.traverse(c=>{if(c.isMesh){const h=c.name.toLowerCase(),u=h.includes("grass"),d=h.includes("bush");if(c.castShadow=!u,c.receiveShadow=!0,c.material&&(c.material.transparent=!0,c.material.opacity=1,c.userData.originalOpacity=1,c.userData.targetOpacity=1,(h.includes("terrain")||h.includes("island"))&&(c.material.color.setHex(5614182),c.material.emissive.setHex(0),c.material.emissiveIntensity=0,c.material.roughness=.8),h.includes("water")&&(this.setupWaterMaterial(c),this.waterMeshes.push(c)),u&&(c.updateMatrixWorld(),t.push(c.matrixWorld.clone()),i||(i=c),c.visible=!1),d)){c.updateMatrixWorld();const g=c.matrixWorld.clone();n.push(g);const p=new B;p.setFromMatrixPosition(g),c.geometry.computeBoundingSphere();const v=new B;v.setFromMatrixScale(g);const _=c.geometry.boundingSphere.radius*Math.max(v.x,v.y,v.z);this.bushZones.push({position:p,radius:_*.8}),s||(s=c),c.visible=!1}const f=h.includes("water"),m=h.includes("scooterspawn");if(!f&&!u&&!d&&!m&&this.terrainMeshes.push(c),!h.includes("ground")&&!h.includes("floor")&&this.wallMeshes.push(c),m){c.visible=!1,c.userData.isSpawnPlate=!0;const g=new B;c.getWorldPosition(g);const p={position:g,mesh:c};this.scooterSpawnZones.push(p),setTimeout(()=>this.spawnScooterAtZone(p),100)}const x=h.includes("water");c.name.startsWith("Ghost_")||u||d||x||m||this.createPhysicsForMesh(c)}}),i&&t.length>0&&(console.log(`[PERF] Creating instanced grass from ${t.length} individual pieces`),this.setupInstancedVegetation(i,t,"grass")),s&&n.length>0&&(console.log(`[PERF] Creating instanced bush from ${n.length} individual pieces`),this.setupInstancedVegetation(s,n,"bush"));const l=[];a.traverse(c=>{c.isMesh&&(c.name.toLowerCase().includes("grass")||c.name.toLowerCase().includes("bush"))&&l.push(c)});for(const c of l)c.parent&&c.parent.remove(c),c.geometry&&c.geometry.dispose(),c.material&&(Array.isArray(c.material)?c.material.forEach(h=>h.dispose()):c.material.dispose())},void 0,r=>{console.error("Error loading world:",r);const a=new rr(100,100),l=new ws({color:30654}),c=new dt(a,l);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,this.scene.add(c);const h=new HA,u=new pe({mass:0});u.addShape(h),u.quaternion.setFromEuler(-Math.PI/2,0,0),this.physics.world.addBody(u),this.spawnGrappleHooks()})}spawnGrappleHooks(){[{x:-10,y:8,z:-10},{x:10,y:10,z:-10},{x:-10,y:7,z:10},{x:10,y:9,z:10},{x:0,y:12,z:0},{x:-15,y:6,z:0},{x:15,y:6,z:0},{x:0,y:8,z:-15},{x:0,y:8,z:15}].forEach(t=>{const i=new Jn(.3,8,8),n=new zt({color:16766720}),s=new dt(i,n);s.position.set(t.x,t.y,t.z),s.castShadow=!1;const r=new Na(.03,.03,2,8),a=new zt({color:9127187}),l=new dt(r,a);l.position.y=1,s.add(l),this.scene.add(s),this.grappleHooks.push(s)})}createTongueCursorIndicator(){const e=new Sh(.3,.4,32),t=new zt({color:y.tongueColor,side:li,transparent:!0,opacity:.8,depthTest:!1});this.tongueCursorIndicator=new dt(e,t),this.tongueCursorIndicator.visible=!1;const i=new Ah(.3,32),n=new zt({color:y.tongueColor,transparent:!0,opacity:.3,depthTest:!1}),s=new dt(i,n);this.tongueCursorIndicator.add(s),this.scene.add(this.tongueCursorIndicator)}updateTongueCursorIndicator(e){if(!this.tongueCursorIndicator||!this.localFrog)return;if(this.localFrog.tongue.state!=="idle"){this.tongueCursorIndicator.visible=!1;return}const t=this.getMouseIntersection(e);if(!t){this.tongueCursorIndicator.visible=!1;return}const i=this.localFrog.mesh.position,n=new B(0,.3,.5);n.applyQuaternion(this.localFrog.mesh.quaternion);const s=i.clone().add(n);let r=new B().subVectors(t,s).normalize();const a=this.getPotentialTongueTargets(r),l=a.length>0,c=new B().subVectors(t,i),h=new B(c.x,0,c.z).normalize(),u=new B(0,0,1).applyQuaternion(this.localFrog.mesh.quaternion),d=new B(u.x,0,u.z).normalize(),f=Math.acos(Math.max(-1,Math.min(1,h.dot(d)))),m=mt.degToRad(y.tongueConeAngle);if(f>m*2.5||isNaN(f)){this.tongueCursorIndicator.visible=!1;return}const x=new w(s.x,s.y,s.z),g=new w(s.x+r.x*y.tongueRange,s.y+r.y*y.tongueRange,s.z+r.z*y.tongueRange),p=new fo;if(new Tt(x,g).intersectWorld(this.physics.world,{result:p}),p.hasHit){const _=new B(p.hitPointWorld.x,p.hitPointWorld.y,p.hitPointWorld.z),b=p.hitNormalWorld;if(!(b.y>.8||_.y<.5)){if(this.tongueCursorIndicator.position.copy(_),l){const M=a[0],T=y.tongueAssistRadius||2;if(M.point.distanceTo(_)<T)this.tongueCursorIndicator.position.copy(M.point),this.tongueCursorIndicator.quaternion.set(0,0,0,1);else{const L=new B(b.x,b.y,b.z);this.tongueCursorIndicator.quaternion.setFromUnitVectors(new B(0,0,1),L),this.tongueCursorIndicator.position.add(L.multiplyScalar(.05))}}else{const M=new B(b.x,b.y,b.z);this.tongueCursorIndicator.quaternion.setFromUnitVectors(new B(0,0,1),M),this.tongueCursorIndicator.position.add(M.multiplyScalar(.05))}if(this.tongueCursorIndicator.visible=!0,l)if(a[0].point.distanceTo(_)<(y.tongueAssistRadius||2)){this.tongueCursorIndicator.material.color.setHex(65484);const S=performance.now()/1e3,A=1.4+Math.sin(S*10)*.1;this.tongueCursorIndicator.scale.set(A,A,1)}else this.tongueCursorIndicator.material.color.set(y.tongueColor),this.tongueCursorIndicator.scale.set(1.1,1.1,1);else{this.tongueCursorIndicator.material.color.set(y.tongueColor);const M=performance.now()/1e3,T=1+Math.sin(M*5)*.1;this.tongueCursorIndicator.scale.set(T,T,1)}return}}if(l){const _=a[0];this.tongueCursorIndicator.position.copy(_.point),this.tongueCursorIndicator.visible=!0,this.tongueCursorIndicator.material.color.setHex(65416);const b=performance.now()/1e3,C=1.3+Math.sin(b*8)*.15;this.tongueCursorIndicator.scale.set(C,C,1),this.tongueCursorIndicator.quaternion.set(0,0,0,1);return}this.tongueCursorIndicator.visible=!1}getPotentialTongueTargets(e=null){if(!this.localFrog)return[];const t=this.localFrog.getMouthPosition(),i=e||this.localFrog.getForwardDirection(),n=y.tongueRange,s=mt.degToRad(y.tongueConeAngle),r=[];for(const[a,l]of Object.entries(this.frogs)){if(a===this.localFrog.id||l.isDead)continue;const c=l.mesh.position.clone();c.y+=.3;const h=new B().subVectors(c,t),u=h.length();if(u>n)continue;const d=h.clone().normalize();if(d.dot(i)<0)continue;const f=d.angleTo(i);f>s||r.push({type:"frog",point:c,distance:u,angle:f})}for(const a of this.grappleHooks){const l=new B().subVectors(a.position,t),c=l.length();if(c>n)continue;const h=l.clone().normalize();if(h.dot(i)<0)continue;const u=h.angleTo(i);u>s||r.push({type:"hook",point:a.position.clone(),distance:c,angle:u})}if(this.ball&&this.ball.mesh){const a=this.ball.mesh.position.clone(),l=new B().subVectors(a,t),c=l.length();if(c<=n){const h=l.clone().normalize();if(h.dot(i)>=0){const u=h.angleTo(i);u<=s&&r.push({type:"ball",point:a,distance:c,angle:u})}}}return r.map(a=>({...a,score:y.tongueAngleWeight*(a.angle/s)+y.tongueDistanceWeight*(a.distance/n)})).sort((a,l)=>a.score-l.score)}updateTongueDebug(){if(!this.tongueDebugCone){const a=Math.tan(mt.degToRad(y.tongueConeAngle))*y.tongueRange,l=new Ca(a,y.tongueRange,32,1,!0),c=new zt({color:65280,transparent:!0,opacity:.15,wireframe:!1,side:li,depthWrite:!1});this.tongueDebugCone=new dt(l,c),this.tongueDebugCone.visible=!1,this.scene.add(this.tongueDebugCone);const h=new Ca(a,y.tongueRange,16,1,!0),u=new zt({color:65280,wireframe:!0,transparent:!0,opacity:.4});this.tongueDebugConeWire=new dt(h,u),this.tongueDebugConeWire.visible=!1,this.scene.add(this.tongueDebugConeWire),this.tongueDebugTargets=[];for(let d=0;d<10;d++){const f=new Jn(y.tongueMagnetRadius,16,16),m=new zt({color:16776960,transparent:!0,opacity:.5,wireframe:!0}),x=new dt(f,m);x.visible=!1,this.scene.add(x),this.tongueDebugTargets.push(x)}}if(!y.tongueDebugEnabled){this.tongueDebugCone.visible=!1,this.tongueDebugConeWire.visible=!1;for(const a of this.tongueDebugTargets)a.visible=!1;return}if(!this.localFrog)return;const e=this.localFrog.getMouthPosition(),t=this.localFrog.getForwardDirection();this.tongueDebugCone.position.copy(e),this.tongueDebugConeWire.position.copy(e);const i=y.tongueRange/2;this.tongueDebugCone.position.add(t.clone().multiplyScalar(i)),this.tongueDebugConeWire.position.add(t.clone().multiplyScalar(i));const n=new B(0,-1,0),s=new Wt().setFromUnitVectors(n,t);this.tongueDebugCone.quaternion.copy(s),this.tongueDebugConeWire.quaternion.copy(s),this.tongueDebugCone.visible=!0,this.tongueDebugConeWire.visible=!0;const r=this.getPotentialTongueTargets();for(let a=0;a<this.tongueDebugTargets.length;a++)a<r.length?(this.tongueDebugTargets[a].position.copy(r[a].point),this.tongueDebugTargets[a].visible=!0,this.tongueDebugTargets[a].material.color.setHex(a===0?65280:16776960)):this.tongueDebugTargets[a].visible=!1}createPhysicsForMesh(e){const t=e.geometry;if(!t||!t.attributes||!t.attributes.position){console.warn(`Skipping physics for mesh "${e.name}": no position attributes`);return}const i=t.attributes.position,n=t.index;if(!i||i.count===0){console.warn(`Skipping physics for mesh "${e.name}": empty vertices`);return}if(i.count<3){console.warn(`Skipping physics for mesh "${e.name}": not enough vertices (${i.count})`);return}const s=e.getWorldScale(new B);if(s.x===0||s.y===0||s.z===0){console.warn(`Skipping physics for mesh "${e.name}": zero scale`);return}const r=[],a=[];for(let l=0;l<i.count;l++){const c=i.getX(l)*s.x,h=i.getY(l)*s.y,u=i.getZ(l)*s.z;if(!isFinite(c)||!isFinite(h)||!isFinite(u)){console.warn(`Skipping physics for mesh "${e.name}": invalid vertex at index ${l}`);return}r.push(c,h,u)}if(n&&n.count>0){if(n.count<3){console.warn(`Skipping physics for mesh "${e.name}": not enough indices (${n.count})`);return}for(let l=0;l<n.count;l++){const c=n.getX(l);if(c<0||c>=i.count){console.warn(`Skipping physics for mesh "${e.name}": index out of bounds at ${l}`);return}a.push(c)}}else{if(i.count%3!==0){console.warn(`Skipping physics for mesh "${e.name}": vertex count not divisible by 3`);return}for(let l=0;l<i.count;l++)a.push(l)}if(r.length<9||a.length<3){console.warn(`Skipping physics for mesh "${e.name}": insufficient data for triangles`);return}try{const l=new Ta(r,a);if(!l.vertices||l.vertices.length===0||!l.indices||l.indices.length===0){console.warn(`Skipping physics for mesh "${e.name}": Trimesh creation resulted in empty data`);return}const c=new pe({mass:0,material:this.physics.groundMaterial});c.addShape(l);const h=e.getWorldPosition(new B),u=e.getWorldQuaternion(new Wt);c.position.copy(h),c.quaternion.copy(u),this.physics.world.addBody(c)}catch(l){console.error(`Failed to create physics for mesh "${e.name}":`,l)}}getMouseIntersection(e){if(!e)return null;this.raycaster.setFromCamera(e.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);for(const n of t)if(n.object.visible&&!(n.object.userData&&n.object.userData.targetOpacity!==void 0&&n.object.userData.targetOpacity<1)&&!(n.object.parent&&n.object.parent.type==="Line")){if(n.object.geometry&&n.object.geometry.type==="BoxGeometry"&&(n.object.geometry.boundingBox||n.object.geometry.computeBoundingBox())){const r=new B;if(n.object.geometry.boundingBox.getSize(r),r.x<.3&&r.y<.3&&r.z<.3)continue}return n.point.clone()}if(this.localFrog){const n=this.localFrog.mesh.position.y,s=new _n(new B(0,1,0),-n),r=new B;if(this.raycaster.ray.intersectPlane(s,r),r)return r}const i=new B;return this.raycaster.ray.at(15,i)}addLocalFrog(e,t,i){const n=new jo(e,t,this.physics,!0);return n.world=this,i&&(n.body.position.set(i.x,i.y,i.z),i.name&&n.setName(i.name),n.level=i.level||1,n.bio=i.bio||"",n.badges=i.badges||[],n.userId=i.userId||null),this.scene.add(n.mesh),this.localFrog=n,this.frogs[e]=n,n.particles=this.particles,n.audio=this.audio,n.onPunchHit=(s,r,a)=>this.checkPunchCollision(e,s,r,a),n}addRemoteFrog(e,t){if(this.frogs[e]){const n=this.frogs[e];return t.name&&n.setName(t.name),t.color&&n.setColor(t.color),t.level&&(n.level=t.level),t.bio!==void 0&&(n.bio=t.bio),t.badges&&(n.badges=t.badges),t.userId&&(n.userId=t.userId),n}const i=new jo(e,t.color,this.physics,!1);return t.name&&i.setName(t.name),i.level=t.level||1,i.bio=t.bio||"",i.badges=t.badges||[],i.userId=t.userId||null,this.scene.add(i.mesh),this.frogs[e]=i,i.world=this,i.applySyncState(t),i.particles=this.particles,i.audio=this.audio,i}checkPunchCollision(e,t,i,n){let s=!1;for(const r in this.frogs){if(r===e)continue;const a=this.frogs[r];if(!a.mesh||a.isDead)continue;if(t.distanceTo(a.mesh.position)<n){const c=Math.random()<y.criticalChance;let h;c?h=Math.floor(Math.random()*(y.criticalDamageMax-y.criticalDamageMin+1))+y.criticalDamageMin:h=Math.floor(Math.random()*(y.punchDamageMax-y.punchDamageMin+1))+y.punchDamageMin;const u=c?1.5:1,d=i.clone().multiplyScalar(y.knockbackForce*u);d.y=y.knockbackUpward*u,this.network&&this.network.sendHit(r,h,d,c),this.particles&&this.particles.spawnPunchImpact(a.mesh.position,i),s=!0}}if(this.ball&&this.ball.mesh){const r=t.distanceTo(this.ball.mesh.position),a=n+this.ball.radius;r<a&&(this.ball.kick(i,12),this.particles&&this.particles.spawnPunchImpact(this.ball.mesh.position,i),s=!0,this.network&&this.network.sendBallKick(this.ball.getSyncState()))}return s}removeFrog(e){if(this.frogs[e]){const t=this.frogs[e],i=t.name||`Frog ${e.substr(0,4)}`;t.dispose&&t.dispose(),this.scene.remove(t.mesh),t.body&&this.physics.world.removeBody(t.body),delete this.frogs[e],this.showToast(`${i} left the game`,"leave")}}showToast(e,t="info"){let i=document.getElementById("toast-container");i||(i=document.createElement("div"),i.id="toast-container",i.style.cssText=`
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                display: flex;
                flex-direction: column;
                gap: 10px;
                pointer-events: none;
            `,document.body.appendChild(i));const n=document.createElement("div");if(n.className=`game-toast toast-${t}`,n.innerHTML=`
            <span class="toast-icon">${t==="join"?"🐸":t==="leave"?"👋":"ℹ️"}</span>
            <span class="toast-message">${e}</span>
        `,n.style.cssText=`
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
            `,document.head.appendChild(s)}i.appendChild(n),setTimeout(()=>{n.style.animation="toast-slide-out 0.3s ease-in forwards",setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},300)},3e3)}updateCamera(e){if(!this.localFrog||!this.localFrog.mesh)return;const t=this.localFrog.mesh.position.clone();if(e){if(e.middleMouseDown){const h=e.consumeMouseDelta();this.cameraOrbitAngle-=h.x*y.cameraRotateSpeed,this.cameraPitchAngle+=h.y*y.cameraRotateSpeed,this.cameraPitchAngle=Math.max(y.cameraMinPitch,Math.min(y.cameraMaxPitch,this.cameraPitchAngle))}const c=e.consumeScroll();c!==0&&(this.cameraDistance+=c*y.cameraZoomSpeed*.01,this.cameraDistance=Math.max(y.cameraMinDistance,Math.min(y.cameraMaxDistance,this.cameraDistance)))}const i=this.cameraDistance*Math.cos(this.cameraPitchAngle),n=this.cameraDistance*Math.sin(this.cameraPitchAngle),s=t.x+i*Math.sin(this.cameraOrbitAngle),r=t.y+n,a=t.z+i*Math.cos(this.cameraOrbitAngle),l=new B(s,r,a);this.shakeOffset&&l.add(this.shakeOffset),this.camera.position.lerp(l,y.cameraLerp),this.camera.lookAt(t),this.updateWallOcclusion(t)}updateWallOcclusion(e){if(!this.wallMeshes||this.wallMeshes.length===0||(this._occlusionFrame=(this._occlusionFrame||0)+1,this._occlusionFrame%3!==0))return;const t=new B().subVectors(e,this.camera.position).normalize(),i=this.camera.position.distanceTo(e);this.raycaster.set(this.camera.position,t),this.raycaster.far=i;const n=this.raycaster.intersectObjects(this.wallMeshes,!1),s=new Set;for(const r of n)r.distance<i-.5&&s.add(r.object);for(const r of this.wallMeshes){if(!r.userData.originalOpacity)continue;const a=s.has(r);if(r.userData.targetOpacity=a?.2:1,r.material){const l=r.material.opacity,c=r.userData.targetOpacity,h=5;Math.abs(l-c)>.01?r.material.opacity=mt.lerp(l,c,h*.016):r.material.opacity=c}}}step(e,t){if(this.physics.step(e),this.particles&&this.particles.update(e),this.grassUniforms.uTime.value+=e,this.localFrog&&this.localFrog.mesh&&(this.grassUniforms.uPlayerPos.value.copy(this.localFrog.mesh.position),this.dirLight)){const s=this.localFrog.mesh.position,r=new B(20,30,10);this.dirLight.position.copy(s).add(r),this.dirLight.target.position.copy(s),this.dirLight.target.updateMatrixWorld()}if(this.waterLevel!==null&&this.localFrog&&this.localFrog.mesh){const r=this.localFrog.mesh.position.y<this.waterLevel;this.localFrog.isUnderwater!==r&&(this.localFrog.isUnderwater=r,console.log(r?"[DIVING] Player entered water!":"[DIVING] Player surfaced!"))}if(this.ball&&(this.ball.update(e,this.waterLevel),this.isBallAuthority&&this.network&&this.ball.body)){const s=this.ball.body.velocity;(Math.abs(s.x)>.1||Math.abs(s.y)>.1||Math.abs(s.z)>.1)&&this.network.sendBallUpdate(this.ball.getSyncState())}for(const s of this.scooters)s.update(e,t,this.terrainMeshes);const i=this.localFrog?this.getMouseIntersection(t):null;for(const s in this.frogs){const r=this.frogs[s];let a=!1;if(!r.isDead){for(const l of this.bushZones)if(r.mesh.position.distanceTo(l.position)<l.radius){a=!0;break}}r.setHidden(a),r.isLocal?r.update(e,t,i,this.cameraOrbitAngle):r.update(e,null,r.targetLook)}if(this.localFrog){let s=null;if(this.localFrog.isHidden){for(const r of this.bushZones)if(this.localFrog.mesh.position.distanceTo(r.position)<r.radius){s=r;break}}for(const r of this.bushZones){const a=s===r?.7:1;if(Math.abs(r.currentOpacity-a)>.01&&(r.currentOpacity=mt.lerp(r.currentOpacity,a,10*e),r.mesh&&r.mesh.geometry.attributes.instanceOpacity)){const l=r.mesh.geometry.attributes.instanceOpacity;l.setX(r.index,r.currentOpacity),l.needsUpdate=!0}}}if(this.checkScooterSpawnZones(),t&&t.consumeDismount&&t.consumeDismount()&&(this.localFrog&&this.localFrog.isRidingScooter?this.localFrog.currentScooter&&(this.localFrog.currentScooter.dismount(),this.showToast("Dismounted! 🐸")):this.tryMountScooter()),this.shakeTimer>0){this.shakeTimer-=e;const s=this.shakeIntensity*(this.shakeTimer>0?1:0);this.shakeOffset.set((Math.random()-.5)*s,(Math.random()-.5)*s,(Math.random()-.5)*s)}else this.shakeOffset.set(0,0,0);this.updateCamera(t),this.updateTongueCursorIndicator(t),this.updateTongueDebug(),this.updateLocalFrogAura(),this.frameCount++;const n=performance.now();if(n-this.lastFpsUpdate>1e3){const s=Math.round(this.frameCount*1e3/(n-this.lastFpsUpdate));this.fpsCounter&&(this.fpsCounter.textContent=`FPS: ${s}`,this.fpsCounter.style.display=y.showFPS?"block":"none"),this.frameCount=0,this.lastFpsUpdate=n}if(this.localFrog&&this.checkFrogClick(t),y.useShader&&this.composer){const s=this.customPass.uniforms;s.uTime.value=performance.now()/1e3;let r=0;if(this.localFrog){const a=this.localFrog.health/y.maxHealth;r=Math.max(0,Math.min(1,(.5-a)/.5))}s.uLowHealth.value=r,s.uSaturation.value=y.shaderSaturation,s.uBrightness.value=y.shaderBrightness,s.uContrast.value=y.shaderContrast,s.uGamma.value=y.shaderGamma,s.uTint.value.set(y.shaderTintR,y.shaderTintG,y.shaderTintB),s.uTemperature.value=y.shaderTemperature,s.uVignetteEnabled.value=y.vignetteEnabled?1:0,s.uVignetteIntensity.value=y.vignetteIntensity,s.uVignetteRadius.value=y.vignetteRadius,s.uVignetteSoftness.value=y.vignetteSoftness,s.uChromaticEnabled.value=y.chromaticEnabled?1:0,s.uChromaticIntensity.value=y.chromaticIntensity,s.uChromaticRadial.value=y.chromaticRadial?1:0,s.uGrainEnabled.value=y.grainEnabled?1:0,s.uGrainIntensity.value=y.grainIntensity,s.uGrainSpeed.value=y.grainSpeed,s.uGrainSize.value=y.grainSize,s.uSharpenEnabled.value=y.sharpenEnabled?1:0,s.uSharpenIntensity.value=y.sharpenIntensity,s.uBloomEnabled.value=y.bloomEnabled?1:0,s.uBloomIntensity.value=y.bloomIntensity,s.uBloomThreshold.value=y.bloomThreshold,s.uBloomRadius.value=y.bloomRadius,s.uToonEnabled.value=y.toonEnabled?1:0,s.uOutlineEnabled.value=y.outlineEnabled?1:0,s.uOutlineIntensity.value=y.outlineIntensity,this.saoPass&&(this.saoPass.enabled=y.saonEnabled),this.composer.render()}else this.renderer.render(this.scene,this.camera);this.labelRenderer.render(this.scene,this.camera)}triggerScreenShake(e,t){y.vfxEnabled&&(this.shakeIntensity=e,this.shakeTimer=t)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.labelRenderer.setSize(window.innerWidth,window.innerHeight),this.composer&&this.composer.setSize(window.innerWidth,window.innerHeight),this.customPass&&this.customPass.uniforms.uResolution&&this.customPass.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight)}checkScooterSpawnZones(){if(!this.localFrog||!this.localFrog.mesh)return;const e=this.localFrog.mesh.position;for(const t of this.scooters){if(t.rider)continue;const n=e.distanceTo(t.mesh.position)<y.scooterSpawnRadius;t.setHighlight(n&&!this.localFrog.isRidingScooter)}}tryMountScooter(){if(!this.localFrog||this.localFrog.isRidingScooter)return!1;const e=this.localFrog.mesh.position;for(const t of this.scooters){if(t.rider)continue;if(e.distanceTo(t.mesh.position)<y.scooterSpawnRadius)return t.mount(this.localFrog),this.showToast("Vroom! 🛴 (Jump to dismount)"),!0}return!1}spawnScooterAtZone(e){const t="#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),i=new ir(`scooter_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,t,this.scene,this.physics);i.particles=this.particles,i.audio=this.audio,this.scooters.push(i);const n=e.position.x+(Math.random()-.5)*4,s=e.position.z+(Math.random()-.5)*4,r=e.position.y+1;i.mesh.position.set(n,r,s),i.body&&i.body.position.set(n,r,s),i.particles=this.particles,this.scooters.push(i)}showToast(e){let t=document.getElementById("game-toast");t||(t=document.createElement("div"),t.id="game-toast",t.style.cssText=`
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
        `,document.body.appendChild(t)),t.textContent=e,t.style.opacity="1",this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>{t.style.opacity="0"},2e3)}checkFrogClick(e){if(!e||!e.leftClickPunch)return;this.raycaster.setFromCamera(e.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);for(const i of t){let n=i.object;for(;n;){for(const s of Object.values(this.frogs))if(s.mesh===n&&!s.isLocal)return this.showProfileButton(s),e.leftClickPunch=!1,!0;n=n.parent}}return!1}showProfileButton(e){if(this.profileButtonTarget=e,this.network&&this.network.socket){const t=e.userId&&String(e.userId).length<15?"getProfile":"getProfileBySocket",i=t==="getProfile"?e.userId:e.id;this.network.socket.emit(t,i,n=>{const s={id:e.id,userId:(n==null?void 0:n.id)||e.userId,name:(n==null?void 0:n.username)||e.name,color:(n==null?void 0:n.color)||e.color,level:(n==null?void 0:n.level)||e.level||1,bio:(n==null?void 0:n.bio)||e.bio||"",badges:(n==null?void 0:n.badges)||e.badges||[],kills:(n==null?void 0:n.kills)||0,deaths:(n==null?void 0:n.deaths)||0,isFriend:void 0};n&&(e.userId=s.userId,e.bio=s.bio,e.badges=s.badges,e.level=s.level),this.openProfile(s)})}else this.openProfile({id:e.id,userId:e.userId,name:e.name,color:e.color,level:e.level||1,bio:e.bio||"",badges:e.badges||[],isFriend:void 0})}openProfile(e){this.currentProfileId=e.id,this.currentProfileData=e;const t=document.getElementById("profile-modal"),i=document.getElementById("p-username"),n=document.getElementById("p-level"),s=document.getElementById("p-bio"),r=document.getElementById("p-badges-row"),a=document.getElementById("p-btn-action"),l=document.getElementById("p-btn-mute"),c=document.getElementById("p-close-btn"),h=document.getElementById("p-avatar-canvas-container"),u=document.getElementById("p-kills"),d=document.getElementById("p-deaths");if(!t||!i||!n||!a||!l){console.error("Profile modal elements missing!");return}const f=String(e.id||"");i.textContent=e.name||`Frog ${f.substring(0,4)}`,n.textContent=`LEVEL ${e.level||1}`,s.textContent=e.bio||"No bio set.",u&&(u.textContent=e.kills||0),d&&(d.textContent=e.deaths||0);const m=document.getElementById("p-kd");if(m){const v=e.kills||0,_=e.deaths||0,b=_>0?(v/_).toFixed(2):v>0?v.toFixed(2):"0.00";m.textContent=b}if(r){let v=[];try{v=Array.isArray(e.badges)?e.badges:JSON.parse(e.badges||"[]")}catch{v=[]}r.innerHTML="",v.slice(0,4).forEach(b=>{const C=document.createElement("div");C.className="profile-badge-new",C.textContent=b,r.appendChild(C)})}h&&this.showFrogPreviewInModal(e,h);const x=this.network&&this.network.mutedPlayers&&this.network.mutedPlayers.has(e.id);l.innerHTML=x?"<span>🔊</span> Unmute Chat":"<span>🔇</span> Mute Chat",l.onclick=v=>{if(v.stopPropagation(),this.network){this.network.toggleMute(e.id);const _=this.network.mutedPlayers.has(e.id);l.innerHTML=_?"<span>🔊</span> Unmute Chat":"<span>🔇</span> Mute Chat"}};const g=v=>{v?a.innerHTML="<span>💬</span> Send Message":a.innerHTML="<span>✚</span> Add Friend"};g(e.isFriend),a.onclick=v=>{if(v.stopPropagation(),window.game&&!window.game.isAuthenticated){this.showToast("Register an account to interact!");return}e.isFriend?this.network&&(this.network.openDM(e.id,e.name),this.closeProfile()):this.network&&this.network.socket&&this.network.socket.emit("sendFriendRequest",e.name,_=>{_.success?(this.showToast(`Friend request sent to ${e.name}!`),a.innerHTML="<span>🕒</span> Sent"):this.showToast(_.error||"Failed to send")})};const p=e.userId||e.id;e.isFriend===void 0&&this.network&&this.network.socket&&p&&this.network.socket.emit("checkFriendship",p,v=>{v&&v.isFriend&&(e.isFriend=!0,g(!0))}),c&&(c.onclick=()=>this.closeProfile()),t.style.display="block",t.offsetWidth,t.classList.add("active")}closeProfile(){const e=document.getElementById("profile-modal");e&&(e.classList.remove("active"),setTimeout(()=>{e.style.display="none"},300)),this.currentProfileId=null,this.currentProfileData=null,this.previewFrameId&&(cancelAnimationFrame(this.previewFrameId),this.previewFrameId=null)}showFrogPreviewInModal(e,t){t.innerHTML="";const i=new Eu,n=new Jt(45,1,.1,10);n.position.set(0,.4,3.5),n.lookAt(0,.1,0);const s=new yd({antialias:!0,alpha:!0});s.setSize(120,120),s.setPixelRatio(window.devicePixelRatio),t.appendChild(s.domElement);const r=new Xu(16777215,1);i.add(r);const a=new ua(16777215,1.5);a.position.set(2,2,5),i.add(a);let l;const c=this.frogs[e.id];if(c&&c.bodyMesh)l=c.bodyMesh.clone();else if(this.frogModel)l=this.frogModel.clone(),e.color&&l.traverse(u=>{u.isMesh&&u.name.includes("Body")&&(u.material=u.material.clone(),u.material.color.set(e.color))});else{const u=new jn(.8,.6,1),d=new Ug({color:e.color||"#4CAF50"});l=new dt(u,d)}l.position.set(0,-.1,0),l.scale.set(1.2,1.2,1.2),i.add(l);const h=()=>{if(this.currentProfileId!==e.id){s.dispose();return}l.rotation.y+=.02,s.render(i,n),this.previewFrameId=requestAnimationFrame(h)};h()}updateLocalFrogAura(){if(!(!this.localFrog||!this.localFrog.mesh))if(this.localAura||(this.localAura=new lp(y.auraColor,y.auraIntensity,y.auraDistance),this.scene.add(this.localAura)),this.localFrog.isDead)this.localAura.visible=!1;else{this.localAura.visible=!0,this.localAura.position.copy(this.localFrog.mesh.position),this.localAura.position.y+=.5,this.localAura.color.set(y.auraColor),this.localAura.distance=y.auraDistance;const e=performance.now()/1e3,t=Math.sin(e*4)*(y.auraIntensity*.2);this.localAura.intensity=y.auraIntensity+t}}}class Pw{constructor(){this.keys={forward:!1,backward:!1,left:!1,right:!1,jump:!1},this.mouse={x:0,y:0},this.middleMouseDown=!1,this.mouseDelta={x:0,y:0},this.lastMouse={x:0,y:0},this.scrollDelta=0,this.leftClickPunch=!1,this.rightClickTongue=!1,this.tongueHeld=!1,this.chatOpen=!1,this.chatInput=document.getElementById("chat-input"),this.isMobile=this.detectMobile(),document.addEventListener("keydown",e=>this.onKeyDown(e)),document.addEventListener("keyup",e=>this.onKeyUp(e)),document.addEventListener("mousemove",e=>this.onMouseMove(e)),document.addEventListener("mousedown",e=>this.onMouseDown(e)),document.addEventListener("mouseup",e=>this.onMouseUp(e)),document.addEventListener("wheel",e=>this.onWheel(e),{passive:!1}),document.addEventListener("contextmenu",e=>{e.preventDefault()}),document.addEventListener("gesturestart",e=>e.preventDefault()),document.addEventListener("gesturechange",e=>e.preventDefault()),document.addEventListener("gestureend",e=>e.preventDefault()),this.isMobile&&(this.setupMobileControls(),this.checkOrientation(),window.addEventListener("resize",()=>this.checkOrientation()))}showMobileControls(){this.mobileUI&&this.mobileUI.classList.add("visible")}detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||window.innerWidth<=1024&&("ontouchstart"in window||navigator.maxTouchPoints>0)}checkOrientation(){window.innerHeight>window.innerWidth&&this.isMobile?(this.orientationOverlay||this.createOrientationOverlay(),this.orientationOverlay.style.display="flex"):this.orientationOverlay&&(this.orientationOverlay.style.display="none")}createOrientationOverlay(){const e=document.createElement("div");e.id="orientation-overlay",e.innerHTML=`
            <div class="oo-content">
                <div class="oo-icon">🔄</div>
                <h2>Rotate for Better Grip!</h2>
                <p>Please rotate your device to landscape for the best froggy experience.</p>
            </div>
        `,document.body.appendChild(e),this.orientationOverlay=e;const t=document.createElement("style");t.textContent=`
            #orientation-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: #1a1a1a;
                color: white;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                font-family: 'Outfit', sans-serif;
            }
            .oo-icon { font-size: 80px; margin-bottom: 20px; animation: oo-rotate 2s ease-in-out infinite; }
            @keyframes oo-rotate {
                0% { transform: rotate(0deg); }
                50% { transform: rotate(90deg); }
                100% { transform: rotate(0deg); }
            }
        `,document.head.appendChild(t)}setupMobileControls(){this.createMobileUI(),this.joystick={active:!1,startX:0,startY:0,currentX:0,currentY:0,touchId:null,maxRadius:60},this.cameraTouch={active:!1,startX:0,startY:0,touchId:null},document.addEventListener("touchstart",e=>this.onTouchStart(e),{passive:!1}),document.addEventListener("touchmove",e=>this.onTouchMove(e),{passive:!1}),document.addEventListener("touchend",e=>this.onTouchEnd(e),{passive:!1})}createMobileUI(){const e=document.createElement("div");e.id="mobile-controls",e.innerHTML=`
            <div id="joystick-boundary">
                <div id="joystick-base">
                    <div id="joystick-stick"></div>
                </div>
            </div>

            <div id="mobile-action-buttons">
                <div class="btn-row">
                    <button id="btn-tongue" class="m-btn secondary">👅</button>
                    <button id="btn-jump" class="m-btn primary">⬆️</button>
                </div>
                <div class="btn-row">
                    <button id="btn-dive" class="m-btn secondary">⬇️</button>
                    <button id="btn-punch" class="m-btn primary">👊</button>
                </div>
            </div>

            <div id="mobile-utils">
                <button id="m-btn-fullscreen" class="m-util-btn">⛶</button>
                <button id="m-btn-chat" class="m-util-btn">💬</button>
                <button id="m-btn-tab" class="m-util-btn">👥</button>
                <button id="m-btn-esc" class="m-util-btn">⚙️</button>
            </div>
        `,document.body.appendChild(e),this.mobileUI=e;const t=document.createElement("style");t.textContent=`
            #mobile-controls {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                pointer-events: none;
                z-index: 1000;
                display: none;
                opacity: 0;
                transition: opacity 0.5s ease;
            }
            #mobile-controls.visible { display: block; opacity: 1; }

            #joystick-boundary {
                position: absolute;
                bottom: 40px; left: 40px;
                width: 180px; height: 180px;
                pointer-events: auto;
            }
            #joystick-base {
                width: 140px; height: 140px;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(5px);
                border: 2px solid rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                position: relative;
                top: 20px; left: 20px;
            }
            #joystick-stick {
                width: 60px; height: 60px;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 50%;
                position: absolute;
                top: 40px; left: 40px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.5);
                pointer-events: none;
            }

            #mobile-action-buttons {
                position: absolute;
                bottom: 40px; right: 40px;
                display: flex;
                flex-direction: column;
                gap: 20px;
                pointer-events: auto;
            }
            .btn-row { display: flex; gap: 20px; justify-content: flex-end; }
            .m-btn {
                width: 85px; height: 85px;
                border-radius: 50%;
                border: none;
                background: rgba(255, 255, 255, 0.15);
                backdrop-filter: blur(8px);
                color: white;
                font-size: 32px;
                display: flex; align-items: center; justify-content: center;
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                -webkit-tap-highlight-color: transparent;
                transition: transform 0.1s, background 0.1s;
            }
            .m-btn:active { transform: scale(0.9); background: rgba(255, 255, 255, 0.3); }
            .m-btn.primary { background: rgba(76, 175, 80, 0.4); border: 2px solid rgba(76, 175, 80, 0.6); }
            .m-btn.secondary { width: 70px; height: 70px; font-size: 24px; position: relative; top: 7.5px; }

            #mobile-utils {
                position: absolute;
                top: 20px; right: 20px;
                display: flex; gap: 15px;
                pointer-events: auto;
            }
            .m-util-btn {
                width: 50px; height: 50px;
                border-radius: 12px;
                border: none;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(5px);
                color: white; font-size: 20px;
                display: flex; align-items: center; justify-content: center;
                -webkit-tap-highlight-color: transparent;
            }
        `,document.head.appendChild(t),document.getElementById("m-btn-fullscreen").addEventListener("touchstart",i=>{i.preventDefault(),this.toggleFullscreen()}),document.getElementById("m-btn-chat").addEventListener("touchstart",i=>{i.preventDefault(),this.toggleChat()}),document.getElementById("m-btn-esc").addEventListener("touchstart",i=>{i.preventDefault(),window.dispatchEvent(new KeyboardEvent("keydown",{code:"Escape"}))}),document.getElementById("m-btn-tab").addEventListener("touchstart",i=>{i.preventDefault();const n=document.getElementById("player-table");n&&n.classList.toggle("visible-mobile")}),this.setupActionBtn("btn-jump","jump"),this.setupActionBtn("btn-punch",i=>this.leftClickPunch=i),this.setupActionBtn("btn-tongue",i=>{this.rightClickTongue=i,this.tongueHeld=i}),this.setupActionBtn("btn-dive","dive")}setupActionBtn(e,t){const i=document.getElementById(e);i.addEventListener("touchstart",n=>{n.preventDefault(),typeof t=="string"?this.keys[t]=!0:t(!0)}),i.addEventListener("touchend",n=>{n.preventDefault(),typeof t=="string"?this.keys[t]=!1:t(!1)})}onTouchStart(e){var t;for(const i of e.changedTouches){const n=i.clientX,s=i.clientY;n<window.innerWidth*.4&&!this.joystick.active?(this.joystick.active=!0,this.joystick.touchId=i.identifier,this.joystick.startX=n,this.joystick.startY=s,this.updateJoystickPosition(n,s)):this.cameraTouch.active||(t=document.elementFromPoint(n,s))!=null&&t.closest("button, #joystick-boundary")||(this.cameraTouch.active=!0,this.cameraTouch.touchId=i.identifier,this.cameraTouch.startX=n,this.cameraTouch.startY=s)}}updateJoystickPosition(e,t){document.getElementById("joystick-base"),document.getElementById("joystick-boundary")}onTouchMove(e){for(const t of e.changedTouches){if(this.joystick.active&&t.identifier===this.joystick.touchId){const i=t.clientX-this.joystick.startX,n=t.clientY-this.joystick.startY,s=Math.sqrt(i*i+n*n),r=Math.min(s,this.joystick.maxRadius),a=Math.atan2(n,i),l=Math.cos(a)*r,c=Math.sin(a)*r;this.joystickStick&&(this.joystickStick.style.transform=`translate(${l}px, ${c}px)`);const h=l/this.joystick.maxRadius,u=c/this.joystick.maxRadius,d=.2;this.keys.forward=u<-d,this.keys.backward=u>d,this.keys.left=h<-d,this.keys.right=h>d,e.preventDefault()}if(this.cameraTouch.active&&t.identifier===this.cameraTouch.touchId){const i=t.clientX-this.cameraTouch.startX,n=t.clientY-this.cameraTouch.startY;this.mouseDelta.x+=i*1.5,this.mouseDelta.y+=n*1.5,this.cameraTouch.startX=t.clientX,this.cameraTouch.startY=t.clientY,this.middleMouseDown=!0,e.preventDefault()}}}onTouchEnd(e){for(const t of e.changedTouches)this.joystick.active&&t.identifier===this.joystick.touchId&&(this.joystick.active=!1,this.joystick.touchId=null,this.joystickStick&&(this.joystickStick.style.transform="translate(0, 0)"),this.keys.forward=!1,this.keys.backward=!1,this.keys.left=!1,this.keys.right=!1),this.cameraTouch.active&&t.identifier===this.cameraTouch.touchId&&(this.cameraTouch.active=!1,this.cameraTouch.touchId=null,this.middleMouseDown=!1,this.mouseDelta.x=0,this.mouseDelta.y=0)}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.middleMouseDown&&(this.mouseDelta.x=e.clientX-this.lastMouse.x,this.mouseDelta.y=e.clientY-this.lastMouse.y),this.lastMouse.x=e.clientX,this.lastMouse.y=e.clientY}onMouseDown(e){e.button===1&&(this.middleMouseDown=!0,this.lastMouse.x=e.clientX,this.lastMouse.y=e.clientY,this.mouseDelta.x=0,this.mouseDelta.y=0,e.preventDefault());const t=e.target.closest("button, input, textarea, .panel, .panel-overlay, .bottom-left-buttons, #profile-modal, #dm-chat-panel, #emote-wheel, #friend-list-overlay, #profile-editor-overlay");e.button===0&&!this.chatOpen&&!t&&(this.leftClickPunch=!0),e.button===2&&!this.chatOpen&&!t&&(this.rightClickTongue=!0,this.tongueHeld=!0,e.preventDefault())}onMouseUp(e){e.button===1&&(this.middleMouseDown=!1,this.mouseDelta.x=0,this.mouseDelta.y=0),e.button===2&&(this.tongueHeld=!1)}onWheel(e){if(this.chatOpen)return;const t=document.getElementById("chat-panel");t&&t.contains(e.target)||(this.scrollDelta=e.deltaY,e.preventDefault())}consumeScroll(){const e=this.scrollDelta;return this.scrollDelta=0,e}consumeMouseDelta(){const e={x:this.mouseDelta.x,y:this.mouseDelta.y};return this.mouseDelta.x=0,this.mouseDelta.y=0,e}consumePunch(){const e=this.leftClickPunch;return this.leftClickPunch=!1,e}consumeTongue(){const e=this.rightClickTongue;return this.rightClickTongue=!1,e}onKeyDown(e){const t=document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA");if(e.code==="Enter"){if(this.chatOpen){this.toggleChat(),e.preventDefault();return}else if(!t){this.toggleChat(),e.preventDefault();return}}if(e.code==="F3"){e.preventDefault(),window.dispatchEvent(new CustomEvent("toggle-tongue-debug"));return}if(!(this.chatOpen||t))switch(e.code){case"ArrowUp":case"KeyW":this.keys.forward=!0;break;case"ArrowDown":case"KeyS":this.keys.backward=!0;break;case"ArrowLeft":case"KeyA":this.keys.left=!0;break;case"ArrowRight":case"KeyD":this.keys.right=!0;break;case"Space":this.keys.jump=!0;break;case"ShiftLeft":case"ShiftRight":this.keys.dive=!0;break;case"KeyE":this.dismountPressed=!0;break}}consumeDismount(){const e=this.dismountPressed;return this.dismountPressed=!1,e}onKeyUp(e){const t=document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA");if(!(this.chatOpen||t))switch(e.code){case"ArrowUp":case"KeyW":this.keys.forward=!1;break;case"ArrowDown":case"KeyS":this.keys.backward=!1;break;case"ArrowLeft":case"KeyA":this.keys.left=!1;break;case"ArrowRight":case"KeyD":this.keys.right=!1;break;case"Space":this.keys.jump=!1;break;case"ShiftLeft":case"ShiftRight":this.keys.dive=!1;break}}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(e=>{console.warn(`Error attempting to enable full-screen mode: ${e.message}`)})}toggleChat(){if(this.chatOpen=!this.chatOpen,this.chatOpen)this.chatInput.style.display="block",this.chatInput.focus(),this.keys.forward=!1,this.keys.backward=!1,this.keys.left=!1,this.keys.right=!1,this.keys.jump=!1;else{const e=this.chatInput.value.trim();if(e){const t=new CustomEvent("chat-send",{detail:e});window.dispatchEvent(t)}this.chatInput.value="",this.chatInput.style.display="none"}}}const Zi=Object.create(null);Zi.open="0";Zi.close="1";Zi.ping="2";Zi.pong="3";Zi.message="4";Zi.upgrade="5";Zi.noop="6";const pa=Object.create(null);Object.keys(Zi).forEach(o=>{pa[Zi[o]]=o});const Jc={type:"error",data:"parser error"},Bp=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Ip=typeof ArrayBuffer=="function",Lp=o=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(o):o&&o.buffer instanceof ArrayBuffer,Uh=({type:o,data:e},t,i)=>Bp&&e instanceof Blob?t?i(e):ef(e,i):Ip&&(e instanceof ArrayBuffer||Lp(e))?t?i(e):ef(new Blob([e]),i):i(Zi[o]+(e||"")),ef=(o,e)=>{const t=new FileReader;return t.onload=function(){const i=t.result.split(",")[1];e("b"+(i||""))},t.readAsDataURL(o)};function tf(o){return o instanceof Uint8Array?o:o instanceof ArrayBuffer?new Uint8Array(o):new Uint8Array(o.buffer,o.byteOffset,o.byteLength)}let Vl;function Dw(o,e){if(Bp&&o.data instanceof Blob)return o.data.arrayBuffer().then(tf).then(e);if(Ip&&(o.data instanceof ArrayBuffer||Lp(o.data)))return e(tf(o.data));Uh(o,!1,t=>{Vl||(Vl=new TextEncoder),e(Vl.encode(t))})}const nf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Vo=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let o=0;o<nf.length;o++)Vo[nf.charCodeAt(o)]=o;const Fw=o=>{let e=o.length*.75,t=o.length,i,n=0,s,r,a,l;o[o.length-1]==="="&&(e--,o[o.length-2]==="="&&e--);const c=new ArrayBuffer(e),h=new Uint8Array(c);for(i=0;i<t;i+=4)s=Vo[o.charCodeAt(i)],r=Vo[o.charCodeAt(i+1)],a=Vo[o.charCodeAt(i+2)],l=Vo[o.charCodeAt(i+3)],h[n++]=s<<2|r>>4,h[n++]=(r&15)<<4|a>>2,h[n++]=(a&3)<<6|l&63;return c},Nw=typeof ArrayBuffer=="function",Oh=(o,e)=>{if(typeof o!="string")return{type:"message",data:Pp(o,e)};const t=o.charAt(0);return t==="b"?{type:"message",data:Uw(o.substring(1),e)}:pa[t]?o.length>1?{type:pa[t],data:o.substring(1)}:{type:pa[t]}:Jc},Uw=(o,e)=>{if(Nw){const t=Fw(o);return Pp(t,e)}else return{base64:!0,data:o}},Pp=(o,e)=>{switch(e){case"blob":return o instanceof Blob?o:new Blob([o]);case"arraybuffer":default:return o instanceof ArrayBuffer?o:o.buffer}},Dp="",Ow=(o,e)=>{const t=o.length,i=new Array(t);let n=0;o.forEach((s,r)=>{Uh(s,!1,a=>{i[r]=a,++n===t&&e(i.join(Dp))})})},kw=(o,e)=>{const t=o.split(Dp),i=[];for(let n=0;n<t.length;n++){const s=Oh(t[n],e);if(i.push(s),s.type==="error")break}return i};function Gw(){return new TransformStream({transform(o,e){Dw(o,t=>{const i=t.length;let n;if(i<126)n=new Uint8Array(1),new DataView(n.buffer).setUint8(0,i);else if(i<65536){n=new Uint8Array(3);const s=new DataView(n.buffer);s.setUint8(0,126),s.setUint16(1,i)}else{n=new Uint8Array(9);const s=new DataView(n.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(i))}o.data&&typeof o.data!="string"&&(n[0]|=128),e.enqueue(n),e.enqueue(t)})}})}let Wl;function ia(o){return o.reduce((e,t)=>e+t.length,0)}function na(o,e){if(o[0].length===e)return o.shift();const t=new Uint8Array(e);let i=0;for(let n=0;n<e;n++)t[n]=o[0][i++],i===o[0].length&&(o.shift(),i=0);return o.length&&i<o[0].length&&(o[0]=o[0].slice(i)),t}function zw(o,e){Wl||(Wl=new TextDecoder);const t=[];let i=0,n=-1,s=!1;return new TransformStream({transform(r,a){for(t.push(r);;){if(i===0){if(ia(t)<1)break;const l=na(t,1);s=(l[0]&128)===128,n=l[0]&127,n<126?i=3:n===126?i=1:i=2}else if(i===1){if(ia(t)<2)break;const l=na(t,2);n=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),i=3}else if(i===2){if(ia(t)<8)break;const l=na(t,8),c=new DataView(l.buffer,l.byteOffset,l.length),h=c.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue(Jc);break}n=h*Math.pow(2,32)+c.getUint32(4),i=3}else{if(ia(t)<n)break;const l=na(t,n);a.enqueue(Oh(s?l:Wl.decode(l),e)),i=0}if(n===0||n>o){a.enqueue(Jc);break}}}})}const Fp=4;function It(o){if(o)return Hw(o)}function Hw(o){for(var e in It.prototype)o[e]=It.prototype[e];return o}It.prototype.on=It.prototype.addEventListener=function(o,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+o]=this._callbacks["$"+o]||[]).push(e),this};It.prototype.once=function(o,e){function t(){this.off(o,t),e.apply(this,arguments)}return t.fn=e,this.on(o,t),this};It.prototype.off=It.prototype.removeListener=It.prototype.removeAllListeners=It.prototype.removeEventListener=function(o,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+o];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+o],this;for(var i,n=0;n<t.length;n++)if(i=t[n],i===e||i.fn===e){t.splice(n,1);break}return t.length===0&&delete this._callbacks["$"+o],this};It.prototype.emit=function(o){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+o],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(t){t=t.slice(0);for(var i=0,n=t.length;i<n;++i)t[i].apply(this,e)}return this};It.prototype.emitReserved=It.prototype.emit;It.prototype.listeners=function(o){return this._callbacks=this._callbacks||{},this._callbacks["$"+o]||[]};It.prototype.hasListeners=function(o){return!!this.listeners(o).length};const Ga=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),di=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Vw="arraybuffer";function Np(o,...e){return e.reduce((t,i)=>(o.hasOwnProperty(i)&&(t[i]=o[i]),t),{})}const Ww=di.setTimeout,Xw=di.clearTimeout;function za(o,e){e.useNativeTimers?(o.setTimeoutFn=Ww.bind(di),o.clearTimeoutFn=Xw.bind(di)):(o.setTimeoutFn=di.setTimeout.bind(di),o.clearTimeoutFn=di.clearTimeout.bind(di))}const qw=1.33;function Jw(o){return typeof o=="string"?Kw(o):Math.ceil((o.byteLength||o.size)*qw)}function Kw(o){let e=0,t=0;for(let i=0,n=o.length;i<n;i++)e=o.charCodeAt(i),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(i++,t+=4);return t}function Up(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function jw(o){let e="";for(let t in o)o.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(o[t]));return e}function Yw(o){let e={},t=o.split("&");for(let i=0,n=t.length;i<n;i++){let s=t[i].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class $w extends Error{constructor(e,t,i){super(e),this.description=t,this.context=i,this.type="TransportError"}}class kh extends It{constructor(e){super(),this.writable=!1,za(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,i){return super.emitReserved("error",new $w(e,t,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Oh(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=jw(e);return t.length?"?"+t:""}}class Zw extends kh{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||t()})),this.writable||(i++,this.once("drain",function(){--i||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};kw(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Ow(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Up()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let Op=!1;try{Op=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Qw=Op;function eS(){}class tS extends Zw{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let i=location.port;i||(i=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}}doWrite(e,t){const i=this.request({method:"POST",data:e});i.on("success",t),i.on("error",(n,s)=>{this.onError("xhr post error",n,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,i)=>{this.onError("xhr poll error",t,i)}),this.pollXhr=e}}let Qs=class ma extends It{constructor(e,t,i){super(),this.createRequest=e,za(this,i),this._opts=i,this._method=i.method||"GET",this._uri=t,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var e;const t=Np(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const i=this._xhr=this.createRequest(t);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let n in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(n)&&i.setRequestHeader(n,this._opts.extraHeaders[n])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var n;i.readyState===3&&((n=this._opts.cookieJar)===null||n===void 0||n.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(n){this.setTimeoutFn(()=>{this._onError(n)},0);return}typeof document<"u"&&(this._index=ma.requestsCount++,ma.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=eS,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ma.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};Qs.requestsCount=0;Qs.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",sf);else if(typeof addEventListener=="function"){const o="onpagehide"in di?"pagehide":"unload";addEventListener(o,sf,!1)}}function sf(){for(let o in Qs.requests)Qs.requests.hasOwnProperty(o)&&Qs.requests[o].abort()}const iS=function(){const o=kp({xdomain:!1});return o&&o.responseType!==null}();class nS extends tS{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=iS&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Qs(kp,this.uri(),e)}}function kp(o){const e=o.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Qw))return new XMLHttpRequest}catch{}if(!e)try{return new di[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Gp=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class sS extends kh{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,i=Gp?{}:Np(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,i)}catch(n){return this.emitReserved("error",n)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],n=t===e.length-1;Uh(i,this.supportsBinary,s=>{try{this.doWrite(i,s)}catch{}n&&Ga(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Up()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const Xl=di.WebSocket||di.MozWebSocket;class oS extends sS{createSocket(e,t,i){return Gp?new Xl(e,t,i):t?new Xl(e,t):new Xl(e)}doWrite(e,t){this.ws.send(t)}}class rS extends kh{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=zw(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=e.readable.pipeThrough(t).getReader(),n=Gw();n.readable.pipeTo(e.writable),this._writer=n.writable.getWriter();const s=()=>{i.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const r={type:"open"};this.query.sid&&(r.data=`{"sid":"${this.query.sid}"}`),this._writer.write(r).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],n=t===e.length-1;this._writer.write(i).then(()=>{n&&Ga(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const aS={websocket:oS,webtransport:rS,polling:nS},lS=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,cS=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Kc(o){if(o.length>8e3)throw"URI too long";const e=o,t=o.indexOf("["),i=o.indexOf("]");t!=-1&&i!=-1&&(o=o.substring(0,t)+o.substring(t,i).replace(/:/g,";")+o.substring(i,o.length));let n=lS.exec(o||""),s={},r=14;for(;r--;)s[cS[r]]=n[r]||"";return t!=-1&&i!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=hS(s,s.path),s.queryKey=uS(s,s.query),s}function hS(o,e){const t=/\/{2,9}/g,i=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function uS(o,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,n,s){n&&(t[n]=s)}),t}const jc=typeof addEventListener=="function"&&typeof removeEventListener=="function",ga=[];jc&&addEventListener("offline",()=>{ga.forEach(o=>o())},!1);class Xn extends It{constructor(e,t){if(super(),this.binaryType=Vw,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const i=Kc(e);t.hostname=i.host,t.secure=i.protocol==="https"||i.protocol==="wss",t.port=i.port,i.query&&(t.query=i.query)}else t.host&&(t.hostname=Kc(t.host).host);za(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(i=>{const n=i.prototype.name;this.transports.push(n),this._transportsByName[n]=i}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Yw(this.opts.query)),jc&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ga.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Fp,t.transport=e,this.id&&(t.sid=this.id);const i=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Xn.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",Xn.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let i=0;i<this.writeBuffer.length;i++){const n=this.writeBuffer[i].data;if(n&&(t+=Jw(n)),i>0&&t>this._maxPayload)return this.writeBuffer.slice(0,i);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Ga(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,i){return this._sendPacket("message",e,t,i),this}send(e,t,i){return this._sendPacket("message",e,t,i),this}_sendPacket(e,t,i,n){if(typeof t=="function"&&(n=t,t=void 0),typeof i=="function"&&(n=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const s={type:e,data:t,options:i};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),n&&this.once("flush",n),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},i=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}_onError(e){if(Xn.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),jc&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const i=ga.indexOf(this._offlineEventListener);i!==-1&&ga.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}Xn.protocol=Fp;class dS extends Xn{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),i=!1;Xn.priorWebsocketSuccess=!1;const n=()=>{i||(t.send([{type:"ping",data:"probe"}]),t.once("packet",u=>{if(!i)if(u.type==="pong"&&u.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Xn.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(h(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=t.name,this.emitReserved("upgradeError",d)}}))};function s(){i||(i=!0,h(),t.close(),t=null)}const r=u=>{const d=new Error("probe error: "+u);d.transport=t.name,s(),this.emitReserved("upgradeError",d)};function a(){r("transport closed")}function l(){r("socket closed")}function c(u){t&&u.name!==t.name&&s()}const h=()=>{t.removeListener("open",n),t.removeListener("error",r),t.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};t.once("open",n),t.once("error",r),t.once("close",a),this.once("close",l),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{i||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let i=0;i<e.length;i++)~this.transports.indexOf(e[i])&&t.push(e[i]);return t}}let fS=class extends dS{constructor(e,t={}){const i=typeof e=="object"?e:t;(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(n=>aS[n]).filter(n=>!!n)),super(e,i)}};function pS(o,e="",t){let i=o;t=t||typeof location<"u"&&location,o==null&&(o=t.protocol+"//"+t.host),typeof o=="string"&&(o.charAt(0)==="/"&&(o.charAt(1)==="/"?o=t.protocol+o:o=t.host+o),/^(https?|wss?):\/\//.test(o)||(typeof t<"u"?o=t.protocol+"//"+o:o="https://"+o),i=Kc(o)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const s=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+s+":"+i.port+e,i.href=i.protocol+"://"+s+(t&&t.port===i.port?"":":"+i.port),i}const mS=typeof ArrayBuffer=="function",gS=o=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(o):o.buffer instanceof ArrayBuffer,zp=Object.prototype.toString,xS=typeof Blob=="function"||typeof Blob<"u"&&zp.call(Blob)==="[object BlobConstructor]",vS=typeof File=="function"||typeof File<"u"&&zp.call(File)==="[object FileConstructor]";function Gh(o){return mS&&(o instanceof ArrayBuffer||gS(o))||xS&&o instanceof Blob||vS&&o instanceof File}function xa(o,e){if(!o||typeof o!="object")return!1;if(Array.isArray(o)){for(let t=0,i=o.length;t<i;t++)if(xa(o[t]))return!0;return!1}if(Gh(o))return!0;if(o.toJSON&&typeof o.toJSON=="function"&&arguments.length===1)return xa(o.toJSON(),!0);for(const t in o)if(Object.prototype.hasOwnProperty.call(o,t)&&xa(o[t]))return!0;return!1}function yS(o){const e=[],t=o.data,i=o;return i.data=Yc(t,e),i.attachments=e.length,{packet:i,buffers:e}}function Yc(o,e){if(!o)return o;if(Gh(o)){const t={_placeholder:!0,num:e.length};return e.push(o),t}else if(Array.isArray(o)){const t=new Array(o.length);for(let i=0;i<o.length;i++)t[i]=Yc(o[i],e);return t}else if(typeof o=="object"&&!(o instanceof Date)){const t={};for(const i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=Yc(o[i],e));return t}return o}function _S(o,e){return o.data=$c(o.data,e),delete o.attachments,o}function $c(o,e){if(!o)return o;if(o&&o._placeholder===!0){if(typeof o.num=="number"&&o.num>=0&&o.num<e.length)return e[o.num];throw new Error("illegal attachments")}else if(Array.isArray(o))for(let t=0;t<o.length;t++)o[t]=$c(o[t],e);else if(typeof o=="object")for(const t in o)Object.prototype.hasOwnProperty.call(o,t)&&(o[t]=$c(o[t],e));return o}const bS=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],AS=5;var et;(function(o){o[o.CONNECT=0]="CONNECT",o[o.DISCONNECT=1]="DISCONNECT",o[o.EVENT=2]="EVENT",o[o.ACK=3]="ACK",o[o.CONNECT_ERROR=4]="CONNECT_ERROR",o[o.BINARY_EVENT=5]="BINARY_EVENT",o[o.BINARY_ACK=6]="BINARY_ACK"})(et||(et={}));class MS{constructor(e){this.replacer=e}encode(e){return(e.type===et.EVENT||e.type===et.ACK)&&xa(e)?this.encodeAsBinary({type:e.type===et.EVENT?et.BINARY_EVENT:et.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===et.BINARY_EVENT||e.type===et.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=yS(e),i=this.encodeAsString(t.packet),n=t.buffers;return n.unshift(i),n}}function of(o){return Object.prototype.toString.call(o)==="[object Object]"}class zh extends It{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const i=t.type===et.BINARY_EVENT;i||t.type===et.BINARY_ACK?(t.type=i?et.EVENT:et.ACK,this.reconstructor=new wS(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(Gh(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const i={type:Number(e.charAt(0))};if(et[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===et.BINARY_EVENT||i.type===et.BINARY_ACK){const s=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const r=e.substring(s,t);if(r!=Number(r)||e.charAt(t)!=="-")throw new Error("Illegal attachments");i.attachments=Number(r)}if(e.charAt(t+1)==="/"){const s=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););i.nsp=e.substring(s,t)}else i.nsp="/";const n=e.charAt(t+1);if(n!==""&&Number(n)==n){const s=t+1;for(;++t;){const r=e.charAt(t);if(r==null||Number(r)!=r){--t;break}if(t===e.length)break}i.id=Number(e.substring(s,t+1))}if(e.charAt(++t)){const s=this.tryParse(e.substr(t));if(zh.isPayloadValid(i.type,s))i.data=s;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case et.CONNECT:return of(t);case et.DISCONNECT:return t===void 0;case et.CONNECT_ERROR:return typeof t=="string"||of(t);case et.EVENT:case et.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&bS.indexOf(t[0])===-1);case et.ACK:case et.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class wS{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=_S(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const SS=Object.freeze(Object.defineProperty({__proto__:null,Decoder:zh,Encoder:MS,get PacketType(){return et},protocol:AS},Symbol.toStringTag,{value:"Module"}));function Ai(o,e,t){return o.on(e,t),function(){o.off(e,t)}}const ES=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Hp extends It{constructor(e,t,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Ai(e,"open",this.onopen.bind(this)),Ai(e,"packet",this.onpacket.bind(this)),Ai(e,"error",this.onerror.bind(this)),Ai(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var i,n,s;if(ES.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const r={type:et.EVENT,data:t};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const h=this.ids++,u=t.pop();this._registerAckCallback(h,u),r.id=h}const a=(n=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||n===void 0?void 0:n.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(e,t){var i;const n=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(n===void 0){this.acks[e]=t;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);t.call(this,new Error("operation has timed out"))},n),r=(...a)=>{this.io.clearTimeoutFn(s),t.apply(this,a)};r.withError=!0,this.acks[e]=r}emitWithAck(e,...t){return new Promise((i,n)=>{const s=(r,a)=>r?n(r):i(a);s.withError=!0,t.push(s),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((n,...s)=>i!==this._queue[0]?void 0:(n!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(n)):(this._queue.shift(),t&&t(null,...s)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:et.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(i=>String(i.id)===e)){const i=this.acks[e];delete this.acks[e],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case et.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case et.EVENT:case et.BINARY_EVENT:this.onevent(e);break;case et.ACK:case et.BINARY_ACK:this.onack(e);break;case et.DISCONNECT:this.ondisconnect();break;case et.CONNECT_ERROR:this.destroy();const i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const i of t)i.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let i=!1;return function(...n){i||(i=!0,t.packet({type:et.ACK,id:e,data:n}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:et.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const i of t)i.apply(this,e.data)}}}function bo(o){o=o||{},this.ms=o.min||100,this.max=o.max||1e4,this.factor=o.factor||2,this.jitter=o.jitter>0&&o.jitter<=1?o.jitter:0,this.attempts=0}bo.prototype.duration=function(){var o=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*o);o=Math.floor(e*10)&1?o+t:o-t}return Math.min(o,this.max)|0};bo.prototype.reset=function(){this.attempts=0};bo.prototype.setMin=function(o){this.ms=o};bo.prototype.setMax=function(o){this.max=o};bo.prototype.setJitter=function(o){this.jitter=o};class Zc extends It{constructor(e,t){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,za(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((i=t.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new bo({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const n=t.parser||SS;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new fS(this.uri,this.opts);const t=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const n=Ai(t,"open",function(){i.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},r=Ai(t,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{n(),s(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(n),this.subs.push(r),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Ai(e,"ping",this.onping.bind(this)),Ai(e,"data",this.ondata.bind(this)),Ai(e,"error",this.onerror.bind(this)),Ai(e,"close",this.onclose.bind(this)),Ai(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Ga(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let i=this.nsps[e];return i?this._autoConnect&&!i.active&&i.connect():(i=new Hp(this,e,t),this.nsps[e]=i),i}_destroy(e){const t=Object.keys(this.nsps);for(const i of t)if(this.nsps[i].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let i=0;i<t.length;i++)this.engine.write(t[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(n=>{n?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",n)):e.onreconnect()}))},t);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const ko={};function va(o,e){typeof o=="object"&&(e=o,o=void 0),e=e||{};const t=pS(o,e.path||"/socket.io"),i=t.source,n=t.id,s=t.path,r=ko[n]&&s in ko[n].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||r;let l;return a?l=new Zc(i,e):(ko[n]||(ko[n]=new Zc(i,e)),l=ko[n]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(va,{Manager:Zc,Socket:Hp,io:va,connect:va});class CS{constructor(e){this.world=e,this.socket=va(),this.socket.on("connect",()=>{const t=document.getElementById("offline-overlay");t&&t.classList.contains("visible")&&(t.classList.remove("visible"),window.location.reload()),this.socket.emit("spectate")}),this.socket.on("disconnect",t=>{this.showOfflineOverlay()}),this.socket.on("connect_error",t=>{this.showOfflineOverlay()}),this.socket.on("kicked",t=>{alert("Disconnected: "+t),window.location.reload()}),this.socket.on("currentPlayers",t=>{Object.keys(t).forEach(i=>{this.world.addRemoteFrog(i,t[i])})}),this.socket.on("selfJoined",t=>{if(this.world.addLocalFrog(t.id,t.color,t),t.accountData){const i=t.accountData,n=document.getElementById("level-badge"),s=document.getElementById("xp-fill");n&&(n.textContent=`Lv.${i.level||1}`),s&&i.xpToNext&&(s.style.width=`${i.xp/i.xpToNext*100}%`);const r=document.getElementById("stat-level"),a=document.getElementById("stat-xp"),l=document.getElementById("stat-kills"),c=document.getElementById("stat-deaths"),h=document.getElementById("stat-kd"),u=document.getElementById("stat-playtime");if(r&&(r.textContent=i.level||1),a&&(a.textContent=i.xp||0),l&&(l.textContent=i.kills||0),c&&(c.textContent=i.deaths||0),h){const d=i.deaths>0?(i.kills/i.deaths).toFixed(2):(i.kills||0).toFixed(2);h.textContent=d}if(u){const d=Math.floor((i.totalPlaytime||0)/36e5),f=Math.floor((i.totalPlaytime||0)%36e5/6e4);u.textContent=d>0?`${d}h ${f}m`:`${f}m`}this.socket.emit("getFriendRequests"),this.socket.emit("getUnreadDMs")}}),this.socket.on("newPlayer",t=>{this.world.addRemoteFrog(t.id,t);const i=t.name||`Frog ${t.id.substr(0,4)}`;this.world.showToast&&this.world.showToast(`${i} joined the game`,"join")}),this.socket.on("playerDisconnected",t=>{this.world.removeFrog(t),this.mutedPlayers&&this.mutedPlayers.delete(t)}),this.mutedPlayers=new Set,this.socket.on("playerAFKStatus",({id:t,isAFK:i})=>{const n=this.world.frogs[t];n&&(n.isAFK=i,n.updateNameTag())}),this.socket.on("playerColorChanged",({id:t,color:i})=>{const n=this.world.frogs[t];n&&n.setColor&&n.setColor(i)}),this.socket.on("playerProfileUpdated",({id:t,bio:i,badges:n})=>{const s=this.world.frogs[t];s&&(i!==void 0&&(s.bio=i),n!==void 0&&(s.badges=n),this.world.currentProfileId===t&&this.world.openProfile({id:s.id,userId:s.userId,name:s.name,color:s.color,level:s.level||1,bio:s.bio,badges:s.badges,isFriend:this.world.currentProfileData?this.world.currentProfileData.isFriend:void 0}))}),this.socket.on("playerMoved",t=>{if(t.id===this.socket.id)return;const i=this.world.frogs[t.id];i&&i.applySyncState(t)}),this.socket.on("playerKnockback",t=>{const i=this.world.frogs[t.id];i&&i.isLocal&&i.body&&(i.body.velocity.x+=t.velocity.x,i.body.velocity.y+=t.velocity.y,i.body.velocity.z+=t.velocity.z)}),this.socket.on("playerRespawned",t=>{const i=this.world.frogs[t.id];i&&(i.respawn(!0),i.health=t.health,i.body&&(i.body.position.set(t.x,t.y,t.z),i.body.velocity.set(0,0,0)),i.mesh.position.set(t.x,t.y,t.z))}),this.socket.on("tonguePulled",t=>{const i=this.world.localFrog,n=this.world.frogs[t.sourceId];if(i&&n&&i.body){const s=new B().subVectors(n.mesh.position,i.mesh.position).normalize(),r=t.pullForce||8;i.body.velocity.x+=s.x*r,i.body.velocity.y+=Math.max(0,s.y*r*.3),i.body.velocity.z+=s.z*r,this.world.showToast&&this.world.showToast(`${n.name||"Someone"} grabbed you!`)}}),this.socket.on("chatMessage",t=>{if(this.mutedPlayers.has(t.id))return;const i=this.world.frogs[t.id];i&&(i.showChat(t.text),this.addToChatHistory(i.name||`Frog ${t.id.substr(0,4)}`,t.text,i.color))}),window.addEventListener("chat-send",t=>{this.socket.emit("chatMessage",t.detail)}),this.socket.on("playerPunched",t=>{const i=this.world.frogs[t];i&&i.remotePunch()}),this.socket.on("playerDamaged",t=>{const i=this.world.frogs[t.targetId];i&&i.takeDamage(t.damage,t.knockback,!0,t.isCritical,t.attackerId)}),this.socket.on("playerDied",t=>{const i=typeof t=="object"?t.id:t,n=this.world.frogs[i];n&&n.die(!0)}),this.socket.on("playerRespawn",t=>{const i=this.world.frogs[t];i&&i.respawn(!0)}),this.socket.on("ballKicked",t=>{this.world.ball&&(this.world.ball.applySyncState(t),this.world.isBallAuthority=!1)}),this.socket.on("ballSync",t=>{this.world.ball&&!this.world.isBallAuthority&&this.world.ball.applySyncState(t)}),this.socket.on("ballAuthority",t=>{this.world.isBallAuthority=t}),this.ping=0,this.allPings={},this._pingStartTime=0,this.socket.on("pong_response",()=>{this.ping=Date.now()-this._pingStartTime,this.socket.emit("share_ping",this.ping)}),this.socket.on("all_pings",t=>{this.allPings=t}),setInterval(()=>{this._pingStartTime=Date.now(),this.socket.emit("ping_request")},2e3)}join(e,t){this.socket.emit("joinGame",{name:e,color:t})}addToChatHistory(e,t,i="#ffffff"){const n=document.getElementById("chat-history");if(!n)return;const s=document.createElement("div");s.className="chat-message";const r=document.createElement("span");r.className="chat-name",r.textContent=e+":",r.style.color=i;const a=document.createElement("span");for(a.textContent=t,s.appendChild(r),s.appendChild(a),n.appendChild(s),n.scrollTop=n.scrollHeight;n.children.length>100;)n.removeChild(n.firstChild)}update(e){}sendUpdate(e){if(!e.body)return;const t=e.getSyncState();t&&this.socket.emit("playerMove",t)}sendPunch(){this.socket.emit("playerPunch")}sendInput(e,t){this.socket.emit("playerInput",{forward:e.keys.forward,backward:e.keys.backward,left:e.keys.left,right:e.keys.right,jump:e.keys.jump,punch:e.keys.punch,cameraAngle:t})}sendHit(e,t,i,n=!1){this.socket.emit("playerHit",{targetId:e,damage:t,knockback:i,isCritical:n})}sendDeath(e=null){this.socket.emit("playerDied",{id:this.socket.id,killerId:e})}sendRespawn(){this.socket.emit("playerRespawn",this.socket.id)}sendBallKick(e){this.world.isBallAuthority=!0,this.socket.emit("ballKick",e)}sendBallUpdate(e){this.world.isBallAuthority&&this.socket.emit("ballUpdate",e)}showOfflineOverlay(){const e=document.getElementById("offline-overlay");e&&e.classList.add("visible")}toggleMute(e){return this.mutedPlayers.has(e)?(this.mutedPlayers.delete(e),!1):(this.mutedPlayers.add(e),!0)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class ji{constructor(e,t,i,n,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),ji.nextNameID=ji.nextNameID||0,this.$name.id=`lil-gui-name-${++ji.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",r=>r.stopPropagation()),this.domElement.addEventListener("keyup",r=>r.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class TS extends ji{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Qc(o){let e,t;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const RS={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Qc,toHexString:Qc},nr={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},BS={isPrimitive:!1,match:o=>Array.isArray(o)||ArrayBuffer.isView(o),fromHexString(o,e,t=1){const i=nr.fromHexString(o);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([o,e,t],i=1){i=255/i;const n=o*i<<16^e*i<<8^t*i<<0;return nr.toHexString(n)}},IS={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,t=1){const i=nr.fromHexString(o);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:o,g:e,b:t},i=1){i=255/i;const n=o*i<<16^e*i<<8^t*i<<0;return nr.toHexString(n)}},LS=[RS,nr,BS,IS];function PS(o){return LS.find(e=>e.match(o))}class DS extends ji{constructor(e,t,i,n){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=PS(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Qc(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ql extends ji{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class FS extends ji{constructor(e,t,i,n,s,r){super(e,t,i,"lil-number"),this._initInput(),this.min(n),this.max(s);const a=r!==void 0;this.step(a?r:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},i=v=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+v),this.$input.value=this.getValue())},n=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),i(this._step*this._normalizeMouseWheel(v)))};let r=!1,a,l,c,h,u;const d=5,f=v=>{a=v.clientX,l=c=v.clientY,r=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",x)},m=v=>{if(r){const _=v.clientX-a,b=v.clientY-l;Math.abs(b)>d?(v.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>d&&x()}if(!r){const _=v.clientY-c;u-=_*this._step*this._arrowKeyMultiplier(v),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=v.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",x)},g=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,v,_,b,C)=>(p-v)/(_-v)*(C-b)+b,t=p=>{const v=this.$slider.getBoundingClientRect();let _=e(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(_)},i=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",s)},n=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",s)};let r=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),r=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,r=!0):c(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(r){const v=p.touches[0].clientX-a,_=p.touches[0].clientY-l;Math.abs(v)>Math.abs(_)?c(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),m=400;let x;const g=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const _=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(f,m)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class NS extends ji{constructor(e,t,i,n){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class US extends ji{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var OS=`.lil-gui {
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
}`;function kS(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let rf=!1;class Hh{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:n,title:s="Controls",closeFolders:r=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!rf&&a&&(kS(OS),rf=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=r}add(e,t,i,n,s){if(Object(i)===i)return new NS(this,e,t,i);const r=e[t];switch(typeof r){case"number":return new FS(this,e,t,i,n,s);case"boolean":return new TS(this,e,t);case"string":return new US(this,e,t);case"function":return new ql(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,r)}addColor(e,t,i=1){return new DS(this,e,t,i)}addFolder(e){const t=new Hh({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof ql||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof ql)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const gs=JSON.parse(JSON.stringify(y)),N=new Lw,Hi=new Pw,we=new CS(N);N.network=we;window.addEventListener("toggle-tongue-debug",()=>{y.tongueDebugEnabled=!y.tongueDebugEnabled,console.log(`🐸 Tongue debug: ${y.tongueDebugEnabled?"ON":"OFF"}`)});const _t=new Hh({title:"🐸 Dev Config"});_t.hide();function nn(o,e){o.$name&&(o.$name.title=e,o.$name.style.cursor="help"),o.domElement&&(o.domElement.title=e);const t=o.domElement.querySelector("input");return t&&(t.title=e,t.addEventListener("dblclick",i=>{i.preventDefault(),i.stopPropagation();const n=o.property;gs[n]!==void 0&&(y[n]=gs[n],o.updateDisplay(),o._onChange&&o._onChange(y[n]),console.log(`Reset ${n} to default: ${gs[n]}`))})),o.$name&&o.$name.addEventListener("dblclick",i=>{const n=o.property;gs[n]!==void 0&&(y[n]=gs[n],o.updateDisplay(),o._onChange&&o._onChange(y[n]),console.log(`Reset ${n} to default: ${gs[n]}`))}),o}const Ha=_t.addFolder("Physics");Ha.add(y,"gravity",-30,0);Ha.add(y,"friction",0,1);Ha.add(y,"restitution",0,1);const Vh=_t.addFolder("Movement");Vh.add(y,"moveSpeed",100,5e3);Vh.add(y,"jumpVelocity",0,20);Vh.add(y,"rotationSpeed",1,30);const Es=_t.addFolder("Animation");Es.add(y,"hopHeight",0,1);Es.add(y,"hopSpeed",1,30);Es.add(y,"talkSpeed",1,30);Es.add(y,"legKickForce",0,1).name("Kick Force");Es.add(y,"legKickDecay",.1,10).name("Kick Decay");Es.add(y,"walkLegSpeed",.1,2).name("Walk Speed Mult");Es.add(y,"walkLegHeight",0,1).name("Walk Height");Ha.add(y,"linearDamping",0,1).name("Sliding (Damping)").onChange(o=>{N.localFrog&&N.localFrog.body&&(N.localFrog.body.linearDamping=o)});const Vp=_t.addFolder("Environment");Vp.add(y,"sunIntensity",0,5).onChange(o=>{N.scene.traverse(e=>{e.isDirectionalLight&&(e.intensity=o)})});Vp.add(y,"ambientIntensity",0,2).onChange(o=>{N.scene.traverse(e=>{e.isAmbientLight&&(e.intensity=o)})});N.scene.traverse(o=>{o.isDirectionalLight&&(o.intensity=y.sunIntensity),o.isAmbientLight&&(o.intensity=y.ambientIntensity)});const Va=_t.addFolder("Hemisphere Light 🌓");Va.add(y,"hemiIntensity",0,3).name("Intensity").onChange(o=>{N.hemiLight&&(N.hemiLight.intensity=o)});Va.addColor(y,"hemiSkyColor").name("Sky Color").onChange(o=>{N.hemiLight&&N.hemiLight.color.set(o)});Va.addColor(y,"hemiGroundColor").name("Ground Color").onChange(o=>{N.hemiLight&&N.hemiLight.groundColor.set(o)});Va.close();const Ao=_t.addFolder("Rim Light 💡");Ao.add(y,"rimIntensity",0,5).name("Intensity").onChange(o=>{N.rimLight&&(N.rimLight.intensity=o)});Ao.addColor(y,"rimColor").name("Color").onChange(o=>{N.rimLight&&N.rimLight.color.set(o)});Ao.add(y,"rimPosX",-100,100).name("Pos X").onChange(o=>{N.rimLight&&(N.rimLight.position.x=o)});Ao.add(y,"rimPosY",0,100).name("Pos Y").onChange(o=>{N.rimLight&&(N.rimLight.position.y=o)});Ao.add(y,"rimPosZ",-100,100).name("Pos Z").onChange(o=>{N.rimLight&&(N.rimLight.position.z=o)});Ao.close();const Wa=_t.addFolder("Player Aura 🌟");Wa.add(y,"auraIntensity",0,10).name("Intensity");Wa.add(y,"auraDistance",1,20).name("Distance");Wa.addColor(y,"auraColor").name("Color");Wa.close();const Xa=_t.addFolder("Sky & Fog ☁️");Xa.addColor({color:"#"+N.scene.background.getHexString()},"color").name("Background Color").onChange(o=>{if(N.scene.background.set(o),N.scene.fog.color.set(o),N.composer){const e=N.composer.passes.find(t=>t.uniforms&&t.uniforms.uSkyColor);if(e){const t=new _e(o);e.uniforms.uSkyColor.value.set(t.r,t.g,t.b)}}});Xa.add(N.scene.fog,"near",0,100).name("Fog Near");Xa.add(N.scene.fog,"far",50,500).name("Fog Far");Xa.close();const sn=_t.addFolder("Shader FX");sn.add(y,"useShader").name("Enable Post-FX");const Ks=sn.addFolder("Cycles Mode (SAO) 💎");Ks.add(y,"saonEnabled").name("Enable SAO").onChange(o=>{N.saoPass&&(N.saoPass.enabled=o)});N.saoPass&&N.saoPass.params&&(Ks.add(N.saoPass.params,"saoIntensity",0,.1).name("AO Strength"),Ks.add(N.saoPass.params,"saoBias",-1,1).name("AO Bias"),Ks.add(N.saoPass.params,"saoKernelRadius",1,100).name("AO Radius"),Ks.add(N.saoPass.params,"saoScale",1,50).name("AO Scale"));Ks.close();const qa=sn.addFolder("Toon Style 🎨");qa.add(y,"toonEnabled").name("Enable Cel-Shade").onChange(o=>{N.customPass&&(N.customPass.uniforms.uToonEnabled.value=o?1:0)});qa.add(y,"outlineEnabled").name("Enable Outlines").onChange(o=>{N.customPass&&(N.customPass.uniforms.uOutlineEnabled.value=o?1:0)});qa.add(y,"outlineIntensity",0,1).name("Outline Darkness").onChange(o=>{N.customPass&&(N.customPass.uniforms.uOutlineIntensity.value=o)});qa.close();const Ja=sn.addFolder("Color Grading");Ja.add(y,"shaderSaturation",0,2).name("Saturation");Ja.add(y,"shaderBrightness",-.5,.5).name("Brightness");Ja.add(y,"shaderContrast",.5,2).name("Contrast");Ja.add(y,"shaderGamma",.5,2).name("Gamma");const hr=sn.addFolder("Color Tint");hr.add(y,"shaderTemperature",-1,1).name("Temperature");hr.add(y,"shaderTintR",0,2).name("Red Tint");hr.add(y,"shaderTintG",0,2).name("Green Tint");hr.add(y,"shaderTintB",0,2).name("Blue Tint");hr.close();const ur=sn.addFolder("Vignette");ur.add(y,"vignetteEnabled").name("Enabled");ur.add(y,"vignetteIntensity",0,1).name("Intensity");ur.add(y,"vignetteRadius",0,1).name("Radius");ur.add(y,"vignetteSoftness",0,1).name("Softness");ur.close();const Ka=sn.addFolder("Chromatic Aberration");Ka.add(y,"chromaticEnabled").name("Enabled");Ka.add(y,"chromaticIntensity",0,.02).name("Intensity");Ka.add(y,"chromaticRadial").name("Radial Mode");Ka.close();const dr=sn.addFolder("Film Grain");dr.add(y,"grainEnabled").name("Enabled");dr.add(y,"grainIntensity",0,.3).name("Intensity");dr.add(y,"grainSpeed",.1,5).name("Speed");dr.add(y,"grainSize",.5,5).name("Size");dr.close();const Wh=sn.addFolder("Sharpen");Wh.add(y,"sharpenEnabled").name("Enabled");Wh.add(y,"sharpenIntensity",0,1).name("Intensity");Wh.close();const fr=sn.addFolder("Bloom");fr.add(y,"bloomEnabled").name("Enabled");fr.add(y,"bloomIntensity",0,2).name("Intensity");fr.add(y,"bloomThreshold",0,1).name("Threshold");fr.add(y,"bloomRadius",0,1).name("Radius");fr.close();const Tn=_t.addFolder("Shadows");Tn.add(y,"shadowEnabled").name("Enable Shadows").onChange(o=>{N.renderer.shadowMap.enabled=o,N.dirLight&&(N.dirLight.castShadow=o),N.scene.traverse(e=>{e.material&&(e.material.needsUpdate=!0)})});Tn.add(y,"shadowMapSize",[512,1024,2048,4096]).name("Map Resolution").onChange(o=>{var e;N.dirLight&&(N.dirLight.shadow.mapSize.width=o,N.dirLight.shadow.mapSize.height=o,(e=N.dirLight.shadow.map)==null||e.dispose(),N.dirLight.shadow.map=null)});Tn.add(y,"shadowType",["Basic","PCF","PCFSoft","VSM"]).name("Shadow Type").onChange(o=>{N.renderer.shadowMap.type=N.getShadowMapType(o),N.renderer.shadowMap.needsUpdate=!0,N.scene.traverse(e=>{e.material&&(e.material.needsUpdate=!0)})});Tn.add(y,"shadowRadius",0,16).name("Blur Radius").onChange(o=>{N.dirLight&&(N.dirLight.shadow.radius=o)});Tn.add(y,"shadowBlurSamples",1,32,1).name("Blur Samples").onChange(o=>{N.dirLight&&(N.dirLight.shadow.blurSamples=o)});Tn.add(y,"shadowIntensity",0,1).name("Shadow Darkness").onChange(o=>{N.dirLight&&(N.dirLight.shadow.intensity=o)});Tn.add(y,"shadowBias",-.01,.01).name("Depth Bias").onChange(o=>{N.dirLight&&(N.dirLight.shadow.bias=o)});Tn.add(y,"shadowNormalBias",0,.1).name("Normal Bias").onChange(o=>{N.dirLight&&(N.dirLight.shadow.normalBias=o)});const ja=Tn.addFolder("Camera Bounds");ja.add(y,"shadowCameraNear",.1,10).name("Near").onChange(o=>{N.dirLight&&(N.dirLight.shadow.camera.near=o,N.dirLight.shadow.camera.updateProjectionMatrix())});ja.add(y,"shadowCameraFar",10,500).name("Far").onChange(o=>{N.dirLight&&(N.dirLight.shadow.camera.far=o,N.dirLight.shadow.camera.updateProjectionMatrix())});ja.add(y,"shadowCameraSize",10,200).name("Frustum Size").onChange(o=>{N.dirLight&&(N.dirLight.shadow.camera.top=o,N.dirLight.shadow.camera.bottom=-o,N.dirLight.shadow.camera.left=-o,N.dirLight.shadow.camera.right=o,N.dirLight.shadow.camera.updateProjectionMatrix())});ja.close();const Yn=_t.addFolder("Camera");Yn.add(y,"cameraDistance",y.cameraMinDistance,y.cameraMaxDistance).name("Distance").onChange(o=>{N.cameraDistance=o});Yn.add(y,"cameraMinDistance",1,20).name("Min Zoom");Yn.add(y,"cameraMaxDistance",20,100).name("Max Zoom");Yn.add(y,"cameraZoomSpeed",.5,5).name("Zoom Speed");Yn.add(y,"cameraRotateSpeed",.001,.02).name("Rotate Speed");Yn.add(y,"cameraLerp",.01,.3).name("Smoothness");Yn.add({resetCamera:()=>{N.cameraOrbitAngle=0,N.cameraPitchAngle=.6,N.cameraDistance=y.cameraDistance}},"resetCamera").name("🔄 Reset View");Yn.close();const pr=_t.addFolder("Spectator Camera 👁️");pr.add(y,"spectatorDistance",20,200).name("Distance");pr.add(y,"spectatorPitch",.1,1.5).name("Pitch");pr.add(y,"spectatorSpeed",.01,.3).name("Orbit Speed");pr.add(y,"spectatorHeight",-20,50).name("Look At Height");pr.close();const on=_t.addFolder("Jiggle Physics 🍑");on.add(y,"jiggleEnabled").name("Enable Jiggle");on.add(y,"jiggleIntensity",0,.5).name("Intensity");on.add(y,"jiggleSpeed",1,30).name("Speed");on.add(y,"jiggleDamping",1,15).name("Damping");on.add(y,"jiggleBounce",0,2).name("Bounce");on.add(y,"jiggleMovementResponse",0,3).name("Movement Response");on.add(y,"jiggleWalkWobble",0,.3).name("Walk Wobble (Z)");on.add(y,"jiggleWalkSpeed",1,25).name("Walk Speed");on.add(y,"jiggleReturnSpeed",1,20).name("Return Speed");on.close();const Cs=_t.addFolder("Punch/Kick 🦵");Cs.add(y,"punchSwingDistance",.5,4).name("Swing Distance");Cs.add(y,"punchSwingSpeed",5,30).name("Swing Speed");Cs.add(y,"punchReturnSpeed",2,20).name("Return Speed");Cs.add(y,"punchCooldown",.1,1).name("Cooldown");Cs.add(y,"punchLegRotation",0,.5).name("Leg Rotation");Cs.add(y,"punchHitRadius",1,5).name("Hit Radius");Cs.close();const Rn=_t.addFolder("VFX ✨");Rn.add(y,"vfxEnabled").name("Enable VFX");Rn.add(y,"vfxDustCount",1,15,1).name("Dust Count");Rn.add(y,"vfxDustSize",.05,.5).name("Dust Size");Rn.add(y,"vfxDustLife",.1,1.5).name("Dust Life");Rn.add(y,"vfxImpactCount",2,20,1).name("Impact Count");Rn.add(y,"vfxImpactSize",.1,.5).name("Impact Size");Rn.add(y,"vfxImpactLife",.1,1).name("Impact Life");Rn.add(y,"vfxWalkInterval",.05,.5).name("Walk Interval");Rn.close();const Li=_t.addFolder("Combat ⚔️");Li.add(y,"maxHealth",50,200,10).name("Max Health");Li.add(y,"punchDamageMin",1,20,1).name("Base Damage Min");Li.add(y,"punchDamageMax",5,30,1).name("Base Damage Max");Li.add(y,"criticalDamageMin",10,40,1).name("Crit Damage Min");Li.add(y,"criticalDamageMax",15,50,1).name("Crit Damage Max");Li.add(y,"criticalChance",0,.5).name("Crit Chance");Li.add(y,"knockbackForce",5,30).name("Knockback Force");Li.add(y,"knockbackUpward",0,15).name("Knockback Up");Li.add(y,"respawnTime",1,10).name("Respawn Time");Li.add(y,"deathFadeDuration",.5,3).name("Death Fade");Li.close();const $n=_t.addFolder("Scooter 🛴");$n.add(y,"scooterSpeed",5,40).name("Speed");$n.add(y,"scooterTurnSpeed",1,10).name("Turn Speed");$n.add(y,"scooterMaxTurn",.1,1).name("Max Turn Angle");$n.add(y,"scooterWheelSpeed",5,30).name("Wheel Spin Speed");$n.add(y,"scooterAcceleration",2,20).name("Acceleration");$n.add(y,"scooterDeceleration",1,15).name("Deceleration");$n.add(y,"scooterSpawnRadius",1,5).name("Spawn Radius");$n.close();const gi=_t.addFolder("Ball ⚽");nn(gi.add(y,"ballRadius",.2,2).name("Radius").onChange(o=>{N.ball&&N.ball.fallbackSphere&&(N.ball.fallbackSphere.geometry.dispose(),N.ball.fallbackSphere.geometry=new Jn(o,32,32))}),"Ball size. Low=small, High=big. Double-click to reset.");nn(gi.add(y,"ballMass",.1,2).name("Mass").onChange(o=>{N.ball&&N.ball.body&&(N.ball.body.mass=o,N.ball.body.updateMassProperties())}),"Ball weight. Low=flies far, High=hard to kick. Double-click to reset.");nn(gi.add(y,"ballLinearDamping",0,1).name("Linear Damping").onChange(o=>{N.ball&&N.ball.body&&(N.ball.body.linearDamping=o)}),"How fast ball slows. Low=rolls forever, High=stops quick. Double-click to reset.");nn(gi.add(y,"ballAngularDamping",0,1).name("Angular Damping").onChange(o=>{N.ball&&N.ball.body&&(N.ball.body.angularDamping=o)}),"How fast spin stops. Low=spins long, High=stops spinning. Double-click to reset.");nn(gi.add(y,"ballBounciness",0,1).name("Bounciness"),"Bounce amount. Low=dead ball, High=super bouncy. Double-click to reset.");nn(gi.add(y,"ballFriction",0,1).name("Friction"),"Ground grip. Low=slides, High=rolls properly. Double-click to reset.");nn(gi.add(y,"ballKickForce",5,30).name("Kick Force"),"Kick power. Low=weak kicks, High=powerful kicks. Double-click to reset.");nn(gi.add(y,"ballKickUpward",0,15).name("Kick Upward"),"Upward kick force. Low=ground shot, High=pop fly. Double-click to reset.");nn(gi.add(y,"ballSpawnHeight",5,50).name("Spawn Height"),"Ball spawn/reset height. Low=near ground, High=from sky. Double-click to reset.");nn(gi.add(y,"ballResetHeight",-50,0).name("Reset Height"),"Y position that triggers reset. Lower=can fall far. Double-click to reset.");gi.add({resetBall:()=>{N.ball&&(N.ball.body.position.set(5,y.ballSpawnHeight,0),N.ball.body.velocity.set(0,0,0),N.ball.body.angularVelocity.set(0,0,0))}},"resetBall").name("🔄 Reset Ball Position");gi.close();const Zn=_t.addFolder("Scooter Rider Position");Zn.add(y,"scooterRiderY",-1,2,.05).name("Frog Y Offset");Zn.add(y,"scooterLegOffsetX",-1,1,.05).name("Leg X Offset");Zn.add(y,"scooterLegOffsetY",-1,1,.05).name("Leg Y Offset");Zn.add(y,"scooterLegOffsetZ",-1,1,.05).name("Leg Z Offset");Zn.add(y,"scooterLegRotationX",-Math.PI,Math.PI,.05).name("Leg Rotation X");Zn.add(y,"scooterLegRotationY",-Math.PI,Math.PI,.05).name("Leg Rotation Y");Zn.add(y,"scooterLegRotationZ",-Math.PI,Math.PI,.05).name("Leg Rotation Z");Zn.close();const mr=_t.addFolder("🌿 Grass Interaction");mr.add(y,"grassBendingStrength",0,10).name("Bending Strength");mr.add(y,"grassBendingRadius",1,10).name("Bending Radius");mr.add(y,"grassWindSpeed",0,5).name("Wind Speed");mr.add(y,"grassWindStrength",0,1).name("Wind Strength");mr.close();const Wp={exportSettings:()=>{const o={};for(const e in y)y[e]!==gs[e]&&(o[e]=y[e]);Object.keys(o).length===0?(console.log("--- NO CHANGES ---"),alert("No settings have been changed from defaults.")):(console.log("--- CHANGED SETTINGS ---"),console.log(JSON.stringify(o,null,4)),alert(`${Object.keys(o).length} settings changed! Check Console (F12)`))},exportAll:()=>{console.log("--- FULL CONFIG ---"),console.log(JSON.stringify(y,null,4)),alert("Full config exported to Console! (Press F12)")}};_t.add(Wp,"exportSettings").name("💾 Log Changed Settings");_t.add(Wp,"exportAll").name("📋 Log All Settings");let Jl=!1;window.addEventListener("keydown",o=>{o.altKey&&(o.key==="v"||o.key==="V")&&(o.preventDefault(),Jl=!Jl,Jl?_t.show():_t.hide())});let af=0,lf=0;function Xp(o){requestAnimationFrame(Xp);let e=(o-af)/1e3;if(af=o,e>.1&&(e=.1),N.step(e,Hi),we.update(e),N.localFrog){const t=N.getMouseIntersection(Hi);N.localFrog.update(e,Hi,t,N.cameraOrbitAngle),Hi.consumeTongue()&&t&&N.localFrog.shootTongue(t,N),!Hi.tongueHeld&&N.localFrog.tongue.state==="attached"&&N.localFrog.releaseTongue(),we.sendInput(Hi,N.cameraOrbitAngle),we.sendUpdate(N.localFrog)}else{lf+=e*y.spectatorSpeed,N.cameraOrbitAngle=lf,N.cameraPitchAngle=y.spectatorPitch,N.cameraDistance=y.spectatorDistance;const t={x:0,y:y.spectatorHeight,z:0},i=t.x+Math.sin(N.cameraOrbitAngle)*N.cameraDistance,n=t.z+Math.cos(N.cameraOrbitAngle)*N.cameraDistance,s=t.y+Math.sin(N.cameraPitchAngle)*N.cameraDistance;N.camera.position.set(i,s,n),N.camera.lookAt(t.x,t.y,t.z)}Object.values(N.frogs).forEach(t=>{t.isLocal||t.updateRemote(e)})}Xp(0);window.game={world:N,input:Hi,network:we};document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("login-modal"),e=document.getElementById("tab-login"),t=document.getElementById("tab-register"),i=document.getElementById("auth-message"),n=document.getElementById("account-stats"),s=document.getElementById("player-name"),r=document.getElementById("player-password"),a=document.getElementById("password-toggle"),l=document.getElementById("player-color"),c=document.getElementById("btn-auth"),h=document.getElementById("btn-guest");if(!c||!o){console.warn("Login elements not found!");return}let u=!0,d=!1,f=null;window.game&&Object.defineProperty(window.game,"isAuthenticated",{get:()=>d});function m(T){u=T,e.classList.toggle("active",T),t.classList.toggle("active",!T),c.textContent="PLAY",v()}e.addEventListener("click",()=>m(!0)),t.addEventListener("click",()=>m(!1)),a.addEventListener("click",()=>{r.type==="password"?(r.type="text",a.textContent="🙈"):(r.type="password",a.textContent="👁️")});const x=document.querySelectorAll(".color-circle");x.forEach(T=>{T.addEventListener("click",()=>{x.forEach(S=>S.classList.remove("selected")),T.classList.add("selected");const L=T.dataset.color;l&&(l.value=L)})});let g=null;function p(T,L=!0){g&&clearTimeout(g),i.textContent=T,i.classList.remove("hiding"),i.className="auth-message "+(L?"error":"success")+" visible",g=setTimeout(()=>{v()},3e3),N&&N.audio&&N.audio.play(L?"ui_error":"ui_success")}function v(){i.classList.add("hiding"),i.classList.remove("visible")}function _(T){const L=document.getElementById("stat-flies"),S=document.getElementById("stat-kills"),A=document.getElementById("stat-deaths");if(L&&(L.textContent=T.flies||0),S&&(S.textContent=T.kills||0),A&&(A.textContent=T.deaths||0),n&&(n.style.display="flex"),T.color){l.value=T.color;const P=Array.from(x).find(U=>U.dataset.color===T.color);P&&(x.forEach(U=>U.classList.remove("selected")),P.classList.add("selected"))}}async function b(){const T=s.value.trim(),L=r.value,S=l.value;if(!T||!L){p("Please enter username and password");return}c.disabled=!0,c.textContent=u?"Logging in...":"Registering...",v();const A=u?"login":"register",P=u?{username:T,password:L}:{username:T,password:L,color:S};we.socket.emit(A,P,U=>{c.disabled=!1,c.textContent="PLAY",U.success?(d=!0,f=U.user,window.game&&(window.game.currentUserId=U.user.id),p(u?"Welcome back!":"Account created!",!1),_(U.user),N&&N.audio&&N.audio.play("login_success"),setTimeout(()=>C(!0),800)):p(U.error||"Authentication failed")})}function C(T=!1){const L=T?f.username:`Guest${Math.floor(Math.random()*9999)}`,S=l.value;document.body.classList.remove("spectator-mode"),o.style.display="none",Hi.isMobile&&(Hi.showMobileControls(),document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(()=>{})),N.cameraDistance=16,N.cameraPitchAngle=.6,we.join(L,S),document.getElementById("canvas-container").focus()}function M(){d=!1,f=null,C(!1)}c.addEventListener("click",b),h.addEventListener("click",M),s.addEventListener("keydown",T=>{T.key==="Enter"&&(r.value?b():r.focus())}),r.addEventListener("keydown",T=>{T.key==="Enter"&&b()}),setInterval(()=>{d&&N.localFrog&&we.socket.emit("saveProgress",{flies:N.localFrog.flies||0})},3e4),l.addEventListener("change",()=>{d&&we.socket.emit("updateColor",l.value)})});const Ba=document.getElementById("player-table"),Kl=document.getElementById("player-list");let jl=!0;window.addEventListener("keydown",o=>{o.key==="Tab"&&(o.preventDefault(),qp())});Ba&&Ba.addEventListener("click",()=>{Hi.isMobile&&qp()});function qp(){jl=!jl,jl?Ba.classList.remove("hidden"):Ba.classList.add("hidden")}function Jp(o,e=!1){const t=e?"#ffffff":o||"#4CAF50",i=e?"#cccccc":GS(t,-30);return`<svg viewBox="0 0 108.9 74.65" style="width: 16px; height: 11px;">
        <rect fill="${t}" x="13.68" y="20.71" width="81.55" height="48"/>
        <rect fill="${i}" y="40.84" width="24.77" height="33.81"/>
        <rect fill="#fff" x="26.71" width="24.77" height="33.81"/>
        <rect fill="#fff" x="59.35" width="24.77" height="33.81"/>
        <rect fill="${i}" x="84.13" y="40.84" width="24.77" height="33.81"/>
        <rect fill="#000" x="35.29" y="13.1" width="7.61" height="7.61"/>
        <rect fill="#000" x="67.94" y="13.1" width="7.61" height="7.61"/>
    </svg>`}function GS(o,e){const t=parseInt(o.replace("#",""),16),i=Math.round(2.55*e),n=Math.max(0,Math.min(255,(t>>16)+i)),s=Math.max(0,Math.min(255,(t>>8&255)+i)),r=Math.max(0,Math.min(255,(t&255)+i));return"#"+(16777216+n*65536+s*256+r).toString(16).slice(1)}const cf=document.querySelector("#player-table .table-header");cf&&(cf.innerHTML=Jp("#ffffff",!0)+" Froggies");function gr(){var e;if(!Kl)return;Kl.innerHTML="";const o=(e=we.socket)==null?void 0:e.id;for(const t in N.frogs){const i=N.frogs[t],n=t===o,s=document.createElement("li");s.className="player-item";const r=document.createElement("span");r.className="player-icon",r.innerHTML=Jp(i.color),s.appendChild(r);const a=document.createElement("span");a.className="player-level",a.textContent=`LV${i.level||1}`,a.style.cssText="font-size: 9px; background: linear-gradient(135deg, #ffd700, #ff9500); color: #000; padding: 1px 4px; border-radius: 4px; margin-right: 6px; font-weight: bold;",s.appendChild(a);const l=document.createElement("span");l.className="player-name",l.textContent=i.name||`Frog ${t.substr(0,4)}`,s.appendChild(l);const c=document.createElement("span");c.className="player-ping";const h=n?we.ping||0:we.allPings[t]||0;c.textContent=h>0?`${h}ms`:"—",c.style.color=h<=0?"#888":h<70?"#4CAF50":h<=100?"#FFA500":"#F44336",s.appendChild(c),Kl.appendChild(s)}}const zS=N.addRemoteFrog.bind(N);N.addRemoteFrog=function(o,e){const t=zS(o,e);return gr(),t};const HS=N.addLocalFrog.bind(N);N.addLocalFrog=function(o,e,t){const i=HS(o,e,t);return gr(),i};const VS=N.removeFrog.bind(N);N.removeFrog=function(o){const e=VS(o);return gr(),e};setInterval(gr,2e3);const Ia=document.getElementById("death-screen");function WS(){Ia&&Ia.classList.add("active")}function XS(){Ia&&Ia.classList.remove("active")}window.showDeathScreen=WS;window.hideDeathScreen=XS;const Ji=document.getElementById("settings-overlay"),hf=document.getElementById("settings-btn"),uf=document.getElementById("settings-close"),df=document.getElementById("btn-respawn");document.querySelectorAll(".settings-option[data-quality]");let La=!1;function qS(){Ji&&(La=!0,Ji.style.display="flex",Ji.offsetHeight,Ji.classList.add("visible"))}function sr(){Ji&&(La=!1,Ji.classList.remove("visible"),setTimeout(()=>{La||(Ji.style.display="none")},300))}function Kp(){La?sr():qS()}hf&&hf.addEventListener("click",Kp);uf&&uf.addEventListener("click",sr);Ji&&Ji.addEventListener("click",o=>{o.target===Ji&&sr()});window.addEventListener("keydown",o=>{if(o.key==="Escape"){const e=document.getElementById("chat-input");if(e&&document.activeElement===e)return;Kp()}});df&&df.addEventListener("click",()=>{N.localFrog&&!N.localFrog.isDead?(N.localFrog.lastAttackerId=null,N.localFrog.takeDamage(999,null,!1,!1,null),sr()):N.localFrog&&N.localFrog.isDead&&sr()});const ff=document.getElementById("btn-logout");ff&&ff.addEventListener("click",()=>{we.socket&&we.socket.emit("logout"),window.location.reload()});const Bi=new Audio("/song/bgsong1.mp3");Bi.loop=!0;Bi.volume=.2;const Gi=document.getElementById("music-btn"),pf=document.getElementById("volume-slider"),mf=document.getElementById("volume-value"),js=document.getElementById("volume-icon");let bs=!1,mo=!1;function Xh(){bs||Bi.volume===0?(js.textContent="🔇",Gi.textContent="🔇",Gi.classList.add("muted")):Bi.volume<.3?(js.textContent="🔈",Gi.textContent="🎵",Gi.classList.remove("muted")):Bi.volume<.7?(js.textContent="🔉",Gi.textContent="🎵",Gi.classList.remove("muted")):(js.textContent="🔊",Gi.textContent="🎵",Gi.classList.remove("muted"))}function Ya(){mo?(bs=!bs,Bi.muted=bs,N&&N.audio&&N.audio.toggleMute()):(Bi.play().catch(o=>console.warn("Music autoplay blocked:",o)),mo=!0,bs=!1),Xh()}Gi&&Gi.addEventListener("click",Ya);pf&&pf.addEventListener("input",o=>{const e=o.target.value/100;Bi.volume=e,mf&&(mf.textContent=`${o.target.value}%`),N&&N.audio&&N.audio.setMasterVolume(e),bs&&e>0&&(bs=!1,Bi.muted=!1,N&&N.audio&&N.audio.isMuted&&N.audio.toggleMute()),Xh(),!mo&&e>0&&(Bi.play().catch(t=>console.warn("Music autoplay blocked:",t)),mo=!0)});js&&js.addEventListener("click",()=>{Ya()});window.addEventListener("keydown",o=>{if(o.key==="m"||o.key==="M"){const e=document.getElementById("chat-input");if(e&&document.activeElement===e)return;Ya()}});const JS=we.join.bind(we);we.join=function(o,e){const t=JS(o,e);return mo||(Bi.play().catch(i=>console.warn("Music autoplay blocked:",i)),mo=!0),t};Xh();const gf=document.getElementById("profile-editor-btn"),Vi=document.getElementById("profile-editor-overlay"),xf=document.getElementById("profile-editor-close"),Ki=document.getElementById("profile-color-picker"),Wo=document.getElementById("profile-bio-input"),vf=document.getElementById("btn-save-profile"),yf=document.getElementById("friend-list-btn"),Si=document.getElementById("friend-list-overlay"),_f=document.getElementById("friend-list-close"),sa=document.getElementById("tab-friends"),oa=document.getElementById("tab-requests"),bn=document.getElementById("friends-content"),zn=document.getElementById("requests-content"),bf=document.getElementById("request-count");gf&&Vi&&gf.addEventListener("click",()=>{if(window.game&&!window.game.isAuthenticated){N&&N.showToast&&N.showToast("Register an account to edit your profile!");return}we&&we.socket&&N.localFrog.userId?we.socket.emit("getProfile",N.localFrog.userId,e=>{if(e){N.localFrog&&(N.localFrog.bio=e.bio||"",N.localFrog.badges=e.badges||[],N.localFrog.color=e.color||N.localFrog.color);const t=e.color||N.localFrog.color||"#4CAF50";Ki&&(Ki.value=t),document.querySelectorAll("#profile-color-circles .color-circle").forEach(s=>{s.classList.toggle("selected",s.dataset.color.toLowerCase()===t.toLowerCase())}),Wo&&(Wo.value=e.bio||"");const n=e.badges||[];Vn=[...n],document.querySelectorAll(".badge-item:not(.locked)").forEach(s=>{const r=s.textContent;n.includes(r)?s.classList.add("selected"):s.classList.remove("selected")}),Vi.classList.add("active")}else console.warn("⚠️ Failed to fetch fresh profile for editor, using cache"),o()}):o();function o(){if(N.localFrog){const e=N.localFrog.color||"#4CAF50";Ki&&(Ki.value=e),document.querySelectorAll("#profile-color-circles .color-circle").forEach(n=>{n.classList.toggle("selected",n.dataset.color.toLowerCase()===e.toLowerCase())}),Wo&&(Wo.value=N.localFrog.bio||"");const i=N.localFrog.badges||[];Vn=[...i],document.querySelectorAll(".badge-item:not(.locked)").forEach(n=>{const s=n.textContent;i.includes(s)?n.classList.add("selected"):n.classList.remove("selected")})}Vi.classList.add("active")}});xf&&Vi&&(xf.addEventListener("click",()=>{Vi.classList.remove("active")}),Vi.addEventListener("click",o=>{o.target===Vi&&Vi.classList.remove("active")}));vf&&vf.addEventListener("click",()=>{const o=(Ki==null?void 0:Ki.value)||"#4CAF50",e=Wo.value.trim();N.localFrog&&(N.localFrog.color=o,N.localFrog.bio=e,N.localFrog.badges=Vn),we&&we.socket&&we.socket.emit("updateProfile",{color:o,bio:e,badges:Vn}),N&&N.showToast&&N.showToast("Profile saved!"),Vi&&Vi.classList.remove("active")});document.querySelectorAll(".profile-sidebar .profile-tab").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll(".profile-sidebar .profile-tab").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".profile-tab-content").forEach(i=>i.classList.remove("active")),o.classList.add("active");const e=o.dataset.tab,t=document.getElementById(`tab-content-${e}`);t&&t.classList.add("active")})});const Af=4;let Vn=[];document.querySelectorAll(".badge-item:not(.locked)").forEach(o=>{o.addEventListener("click",()=>{const e=o.textContent;o.classList.contains("selected")?(o.classList.remove("selected"),Vn=Vn.filter(i=>i!==e)):Vn.length<Af?(o.classList.add("selected"),Vn.push(e)):N&&N.showToast&&N.showToast(`Maximum ${Af} badges allowed!`)})});const Mf=document.querySelectorAll("#profile-color-circles .color-circle");Mf.forEach(o=>{o.addEventListener("click",()=>{const e=o.dataset.color;Mf.forEach(i=>i.classList.remove("selected")),o.classList.add("selected");const t=document.getElementById("profile-color-picker");t&&(t.value=e),N.localFrog&&N.localFrog.setColor&&N.localFrog.setColor(e)})});const wf=document.getElementById("btn-save-outfit");wf&&wf.addEventListener("click",()=>{const o=(Ki==null?void 0:Ki.value)||"#4CAF50";N.localFrog&&(N.localFrog.color=o),we&&we.socket&&we.socket.emit("updateProfile",{color:o}),N&&N.showToast&&N.showToast("Outfit saved!")});yf&&Si&&yf.addEventListener("click",()=>{if(window.game&&!window.game.isAuthenticated){N&&N.showToast&&N.showToast("Register an account to use friend features!");return}Si.classList.add("active"),we&&we.socket&&(we.socket.emit("getFriends"),we.socket.emit("getFriendRequests"))});_f&&Si&&(_f.addEventListener("click",()=>{Si.classList.remove("active")}),Si.addEventListener("click",o=>{o.target===Si&&Si.classList.remove("active")}));sa&&oa&&bn&&zn&&(sa.addEventListener("click",()=>{sa.classList.add("active"),oa.classList.remove("active"),bn.style.display="flex",zn.style.display="none"}),oa.addEventListener("click",()=>{oa.classList.add("active"),sa.classList.remove("active"),zn.style.display="flex",bn.style.display="none"}));if(we&&we.socket){let o=function(e,t,i){const n=document.getElementById("level-badge"),s=document.getElementById("xp-fill");n&&(n.textContent=`Lv.${e}`),s&&(s.style.width=`${t/i*100}%`)};var nE=o;we.socket.on("friendList",e=>{if(bn){if(e.length===0){bn.innerHTML=`
                <div class="empty-state">
                    <div class="empty-state-icon">🐸</div>
                    <div>No friends yet. Click on players to add them!</div>
                </div>
            `;return}bn.innerHTML=e.map(t=>`
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
        `).join(""),bn.querySelectorAll(".dm-btn").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation(),Si&&Si.classList.remove("active"),window.openDMChat(t.dataset.id,t.dataset.name)})}),bn.querySelectorAll(".remove-btn").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const n=t.dataset.name;confirm(`Remove ${n} from friends?`)&&(we.socket.emit("removeFriend",t.dataset.id),we.socket.emit("getFriendList"))})}),bn.querySelectorAll(".friend-item").forEach(t=>{t.addEventListener("click",()=>{Si&&Si.classList.remove("active");const i=t.dataset.friendId;we.socket.emit("getProfile",i,n=>{n&&N&&N.openProfile&&N.openProfile({id:t.dataset.friendId,userId:i,name:n.username||t.dataset.friendName,color:n.color||t.dataset.friendColor,level:n.level||1,bio:n.bio||"",badges:n.badges||[],isFriend:!0})})})})}}),we.socket.on("friendRequests",e=>{const t=document.getElementById("friend-notification-dot");if(t&&(t.style.display=e.length>0?"block":"none"),bf&&(bf.textContent=e.length>0?`(${e.length})`:""),!!zn){if(e.length===0){zn.innerHTML=`
                <div class="empty-state">
                    <div class="empty-state-icon">📭</div>
                    <div>No pending friend requests</div>
                </div>
            `;return}zn.innerHTML=e.map(i=>`
            <div class="friend-item">
                <div class="friend-avatar" style="background: ${i.color||"#4CAF50"}">🐸</div>
                <div class="friend-info">
                    <div class="friend-name">${i.username}</div>
                    <div class="friend-status">Wants to be friends</div>
                </div>
                <div class="friend-actions">
                    <button class="friend-action-btn accept" data-id="${i.id}" title="Accept">✓</button>
                    <button class="friend-action-btn decline" data-id="${i.id}" title="Decline">✕</button>
                </div>
            </div>
        `).join(""),zn.querySelectorAll(".accept").forEach(i=>{i.addEventListener("click",n=>{n.stopPropagation(),we.socket.emit("acceptFriendRequest",i.dataset.id)})}),zn.querySelectorAll(".decline").forEach(i=>{i.addEventListener("click",()=>{we.socket.emit("declineFriend",i.dataset.id)})})}}),we.socket.on("friendRequestAccepted",e=>{var t;N&&N.showToast&&N.showToast(`You and ${((t=e.by)==null?void 0:t.username)||"someone"} are friends now! 🎉`),we.socket.emit("getFriendList")}),we.socket.on("unreadDMs",e=>{e.total,Sf()}),we.socket.on("dmReceived",e=>{const t=document.getElementById("dm-chat-panel"),i=t.dataset.friendId;t.classList.contains("active")&&i==e.sender_id?(eh(e,!1),we.socket.emit("markDMRead",e.sender_id)):(window.openDMChat(e.sender_id,e.sender_name),Sf())}),we.socket.on("xpGained",e=>{const t=document.createElement("div");t.className="xp-toast",t.textContent=`+${e.amount} XP`,document.body.appendChild(t),setTimeout(()=>t.remove(),2e3),N.localFrog&&(N.localFrog.level=e.level),o(e.level,e.xp,e.xpToNext);const i=document.getElementById("stat-level"),n=document.getElementById("stat-xp"),s=document.getElementById("stat-kills"),r=document.getElementById("stat-kd");if(i&&(i.textContent=e.level),n&&(n.textContent=e.xp),s){const a=parseInt(s.textContent||"0")+1;s.textContent=a;const l=document.getElementById("stat-deaths"),c=parseInt((l==null?void 0:l.textContent)||"0");r&&(r.textContent=c>0?(a/c).toFixed(2):a.toFixed(2))}gr()}),we.socket.on("playerDied",e=>{if((typeof e=="object"?e.id:e)===we.socket.id){const i=document.getElementById("stat-deaths"),n=document.getElementById("stat-kills"),s=document.getElementById("stat-kd");if(i){const r=parseInt(i.textContent||"0")+1;if(i.textContent=r,n&&s){const a=parseInt(n.textContent||"0");s.textContent=r>0?(a/r).toFixed(2):a.toFixed(2)}}}})}function Sf(){const o=document.getElementById("friend-notification-dot"),e=document.getElementById("request-count"),t=e?parseInt(e.textContent.replace(/[()]/g,"")||"0"):0;o&&(o.style.display=t>0||window.totalUnreadDMs>0?"block":"none")}window.totalUnreadDMs=0;const qn=document.getElementById("dm-chat-panel"),Ef=document.getElementById("dm-close"),ys=document.getElementById("dm-input"),Cf=document.getElementById("dm-send"),Wi=document.getElementById("dm-messages"),Tf=document.getElementById("dm-friend-name");window.openDMChat=function(o,e){qn&&(qn.dataset.friendId=o,Tf&&(Tf.textContent=e),qn.classList.add("active"),Wi&&(Wi.innerHTML='<div class="empty-state">Loading messages...</div>'),we&&we.socket&&we.socket.emit("getMessages",o))};Ef&&qn&&Ef.addEventListener("click",()=>{qn.classList.remove("active")});function jp(){const o=ys==null?void 0:ys.value.trim(),e=qn==null?void 0:qn.dataset.friendId;!o||!e||(we&&we.socket&&we.socket.emit("sendDM",{friendId:parseInt(e),content:o}),ys&&(ys.value=""))}Cf&&Cf.addEventListener("click",jp);ys&&ys.addEventListener("keydown",o=>{o.key==="Enter"&&jp()});function eh(o,e){if(!Wi)return;const t=Wi.querySelector(".empty-state");t&&t.remove();const i=document.createElement("div");i.className=`dm-message ${e?"sent":"received"}`,i.textContent=o.content,Wi.appendChild(i),Wi.scrollTop=Wi.scrollHeight}we&&we.socket&&(we.socket.on("dmSent",o=>{eh(o,!0)}),we.socket.on("messageHistory",o=>{var t;if(!Wi)return;if(Wi.innerHTML="",o.length===0){Wi.innerHTML='<div class="empty-state">No messages yet. Say hi!</div>';return}const e=(t=window.game)==null?void 0:t.currentUserId;o.forEach(i=>{eh(i,i.sender_id===e)})}),we.socket.emit("getUnreadDMs"));const Yl=document.getElementById("emote-btn"),kn=document.getElementById("emote-wheel");Yl&&kn&&(Yl.addEventListener("click",()=>{kn.classList.toggle("active")}),document.addEventListener("click",o=>{!kn.contains(o.target)&&o.target!==Yl&&kn.classList.remove("active")}),kn.querySelectorAll(".emote-option").forEach(o=>{o.addEventListener("click",()=>{o.dataset.emote;const e=o.textContent;we&&we.socket&&we.socket.emit("chatMessage",e),kn.classList.remove("active")})}));window.addEventListener("keydown",o=>{document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA")||((o.key==="t"||o.key==="T")&&kn&&kn.classList.toggle("active"),(o.key==="m"||o.key==="M")&&Ya())});
