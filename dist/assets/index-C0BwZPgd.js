var Tp=Object.defineProperty;var Ap=(r,e,t)=>e in r?Tp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ro=(r,e,t)=>Ap(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="181",Cp=0,Ih=1,Rp=2,Lp=0,Oc=1,Dl=2,kn=3,wi=0,en=1,fn=2,Kn=0,Gs=1,Nl=2,Dh=3,Nh=4,Pp=5,hs=100,Ip=101,Dp=102,Np=103,Fp=104,Up=200,Bp=201,Op=202,kp=203,Fl=204,Ul=205,zp=206,Vp=207,Hp=208,Gp=209,Wp=210,Xp=211,qp=212,jp=213,$p=214,Bl=0,Ol=1,kl=2,$s=3,zl=4,Vl=5,Hl=6,Gl=7,va=0,Yp=1,Kp=2,zi=0,Zp=1,Jp=2,Qp=3,em=4,tm=5,nm=6,im=7,Fh="attached",sm="detached",hf=300,Ys=301,Ks=302,Wl=303,Xl=304,ya=306,Zs=1e3,jn=1001,sa=1002,$t=1003,uf=1004,Ar=1005,jt=1006,Xo=1007,yi=1008,Qn=1009,df=1010,ff=1011,Ur=1012,kc=1013,ms=1014,An=1015,xs=1016,zc=1017,Vc=1018,Br=1020,pf=35902,mf=35899,gf=1021,xf=1022,pn=1023,Or=1026,kr=1027,Hc=1028,Gc=1029,Wc=1030,Xc=1031,qc=1033,qo=33776,jo=33777,$o=33778,Yo=33779,ql=35840,jl=35841,$l=35842,Yl=35843,Kl=36196,Zl=37492,Jl=37496,Ql=37808,ec=37809,tc=37810,nc=37811,ic=37812,sc=37813,rc=37814,oc=37815,ac=37816,lc=37817,cc=37818,hc=37819,uc=37820,dc=37821,fc=36492,pc=36494,mc=36495,gc=36283,xc=36284,vc=36285,yc=36286,zr=2300,Vr=2301,Fa=2302,Uh=2400,Bh=2401,Oh=2402,rm=2500,om=0,vf=1,_c=2,am=3200,lm=3201,_a=0,cm=1,Ui="",Ut="srgb",Yt="srgb-linear",ra="linear",ft="srgb",ws=7680,kh=519,hm=512,um=513,dm=514,yf=515,fm=516,pm=517,mm=518,gm=519,bc=35044,zh="300 es",$n=2e3,oa=2001;function _f(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Hr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xm(){const r=Hr("canvas");return r.style.display="block",r}const Vh={};function aa(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ae(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Xe(...r){const e="THREE."+r.shift();console.error(e,...r)}function Gr(...r){const e=r.join(" ");e in Vh||(Vh[e]=!0,Ae(...r))}function vm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hh=1234567;const Ir=Math.PI/180,Js=180/Math.PI;function Rn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[r&255]+zt[r>>8&255]+zt[r>>16&255]+zt[r>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function jc(r,e){return(r%e+e)%e}function ym(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function _m(r,e,t){return r!==e?(t-r)/(e-r):0}function Dr(r,e,t){return(1-t)*r+t*e}function bm(r,e,t,n){return Dr(r,e,1-Math.exp(-t*n))}function wm(r,e=1){return e-Math.abs(jc(r,e*2)-e)}function Mm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Sm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Em(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Tm(r,e){return r+Math.random()*(e-r)}function Am(r){return r*(.5-Math.random())}function Cm(r){r!==void 0&&(Hh=r);let e=Hh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rm(r){return r*Ir}function Lm(r){return r*Js}function Pm(r){return(r&r-1)===0&&r!==0}function Im(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Dm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Nm(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*h,a*c);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ct(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const kt={DEG2RAD:Ir,RAD2DEG:Js,generateUUID:Rn,clamp:je,euclideanModulo:jc,mapLinear:ym,inverseLerp:_m,lerp:Dr,damp:bm,pingpong:wm,smoothstep:Mm,smootherstep:Sm,randInt:Em,randFloat:Tm,randFloatSpread:Am,seededRandom:Cm,degToRad:Rm,radToDeg:Lm,isPowerOfTwo:Pm,ceilPowerOfTwo:Im,floorPowerOfTwo:Dm,setQuaternionFromProperEuler:Nm,normalize:ct,denormalize:Sn};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let an=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);p=Math.sin(p*v)/y,a=Math.sin(a*v)/y,l=l*p+d*a,c=c*p+f*a,h=h*p+g*a,u=u*p+x*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+g*a,u=u*p+x*a;const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new P,Gh=new an;class Ge{constructor(e,t,n,i,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],v=i[1],y=i[4],_=i[7],E=i[2],w=i[5],R=i[8];return s[0]=o*x+a*v+l*E,s[3]=o*m+a*y+l*w,s[6]=o*p+a*_+l*R,s[1]=c*x+h*v+u*E,s[4]=c*m+h*y+u*w,s[7]=c*p+h*_+u*R,s[2]=d*x+f*v+g*E,s[5]=d*m+f*y+g*w,s[8]=d*p+f*_+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Ge,Wh=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fm(){const r={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ft&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(i.r=Ws(i.r),i.g=Ws(i.g),i.b=Ws(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ui?ra:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Yt]:{primaries:e,whitePoint:n,transfer:ra,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),r}const tt=Fm();function bi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ms;class Um{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=Hr("canvas")),Ms.width=e.width,Ms.height=e.height;const i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=bi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bm=0;class $c{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Oa(i[o].image)):s.push(Oa(i[o]))}else s=Oa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Oa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Um.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let Om=0;const ka=new P;class Bt extends or{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=jn,i=jn,s=jt,o=yi,a=pn,l=Qn,c=Bt.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Rn(),this.name="",this.source=new $c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ka).x}get height(){return this.source.getSize(ka).y}get depth(){return this.source.getSize(ka).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=hf;Bt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,_=(f+1)/2,E=(p+1)/2,w=(h+d)/4,R=(u+x)/4,D=(g+m)/4;return y>_&&y>E?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=R/n):_>E?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=w/i,s=D/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=R/s,i=D/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class km extends or{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Bt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new $c(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends km{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bf extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zm extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oo.copy(n.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),ao.subVectors(this.max,dr),Ss.subVectors(e.a,dr),Es.subVectors(e.b,dr),Ts.subVectors(e.c,dr),Ti.subVectors(Es,Ss),Ai.subVectors(Ts,Es),Qi.subVectors(Ss,Ts);let t=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-Qi.z,Qi.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,Qi.z,0,-Qi.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-Qi.y,Qi.x,0];return!za(t,Ss,Es,Ts,ao)||(t=[1,0,0,0,1,0,0,0,1],!za(t,Ss,Es,Ts,ao))?!1:(lo.crossVectors(Ti,Ai),t=[lo.x,lo.y,lo.z],za(t,Ss,Es,Ts,ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ri=[new P,new P,new P,new P,new P,new P,new P,new P],yn=new P,oo=new Mi,Ss=new P,Es=new P,Ts=new P,Ti=new P,Ai=new P,Qi=new P,dr=new P,ao=new P,lo=new P,es=new P;function za(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){es.fromArray(r,s);const a=i.x*Math.abs(es.x)+i.y*Math.abs(es.y)+i.z*Math.abs(es.z),l=e.dot(es),c=t.dot(es),h=n.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Vm=new Mi,fr=new P,Va=new P;let ti=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(Va)),this.expandByPoint(fr.copy(e.center).sub(Va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};const oi=new P,Ha=new P,co=new P,Ci=new P,Ga=new P,ho=new P,Wa=new P;let qr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ha.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(co),a=Ci.dot(this.direction),l=-Ci.dot(co),c=Ci.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ha).addScaledVector(co,d),f}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const n=oi.dot(this.direction),i=oi.dot(oi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,i,s){Ga.subVectors(t,e),ho.subVectors(n,e),Wa.crossVectors(Ga,ho);let o=this.direction.dot(Wa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(ho.crossVectors(Ci,ho));if(l<0)return null;const c=a*this.direction.dot(Ga.cross(Ci));if(c<0||l+c>o)return null;const h=-a*Ci.dot(Wa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ve{constructor(e,t,n,i,s,o,a,l,c,h,u,d,f,g,x,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,f,g,x,m)}set(e,t,n,i,s,o,a,l,c,h,u,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hm,e,Gm)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Ri.crossVectors(n,rn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Ri.crossVectors(n,rn)),Ri.normalize(),uo.crossVectors(rn,Ri),i[0]=Ri.x,i[4]=uo.x,i[8]=rn.x,i[1]=Ri.y,i[5]=uo.y,i[9]=rn.y,i[2]=Ri.z,i[6]=uo.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],y=n[7],_=n[11],E=n[15],w=i[0],R=i[4],D=i[8],A=i[12],M=i[1],I=i[5],O=i[9],N=i[13],z=i[2],k=i[6],B=i[10],Y=i[14],G=i[3],K=i[7],ie=i[11],me=i[15];return s[0]=o*w+a*M+l*z+c*G,s[4]=o*R+a*I+l*k+c*K,s[8]=o*D+a*O+l*B+c*ie,s[12]=o*A+a*N+l*Y+c*me,s[1]=h*w+u*M+d*z+f*G,s[5]=h*R+u*I+d*k+f*K,s[9]=h*D+u*O+d*B+f*ie,s[13]=h*A+u*N+d*Y+f*me,s[2]=g*w+x*M+m*z+p*G,s[6]=g*R+x*I+m*k+p*K,s[10]=g*D+x*O+m*B+p*ie,s[14]=g*A+x*N+m*Y+p*me,s[3]=v*w+y*M+_*z+E*G,s[7]=v*R+y*I+_*k+E*K,s[11]=v*D+y*O+_*B+E*ie,s[15]=v*A+y*N+_*Y+E*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,_=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,E=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,w=t*v+n*y+i*_+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=v*R,e[1]=(x*d*s-u*m*s-x*i*f+n*m*f+u*i*p-n*d*p)*R,e[2]=(a*m*s-x*l*s+x*i*c-n*m*c-a*i*p+n*l*p)*R,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*R,e[4]=y*R,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*R,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*R,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*f+t*l*f)*R,e[8]=_*R,e[9]=(g*u*s-h*x*s-g*n*f+t*x*f+h*n*p-t*u*p)*R,e[10]=(o*x*s-g*a*s+g*n*c-t*x*c-o*n*p+t*a*p)*R,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*R,e[12]=E*R,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*m+t*u*m)*R,e[14]=(g*a*i-o*x*i-g*n*l+t*x*l+o*n*m-t*a*m)*R,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,x=o*h,m=o*u,p=a*u,v=l*c,y=l*h,_=l*u,E=n.x,w=n.y,R=n.z;return i[0]=(1-(x+p))*E,i[1]=(f+_)*E,i[2]=(g-y)*E,i[3]=0,i[4]=(f-_)*w,i[5]=(1-(d+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(g+y)*R,i[9]=(m-v)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=As.set(i[0],i[1],i[2]).length();const o=As.set(i[4],i[5],i[6]).length(),a=As.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_n.copy(this);const c=1/s,h=1/o,u=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=$n,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===$n)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===oa)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=$n,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===$n)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===oa)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const As=new P,_n=new Ve,Hm=new P(0,0,0),Gm=new P(1,1,1),Ri=new P,uo=new P,rn=new P,qh=new Ve,jh=new an;class gn{constructor(e=0,t=0,n=0,i=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jh.setFromEuler(this),this.setFromQuaternion(jh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wm=0;const $h=new P,Cs=new an,ai=new Ve,fo=new P,pr=new P,Xm=new P,qm=new an,Yh=new P(1,0,0),Kh=new P(0,1,0),Zh=new P(0,0,1),Jh={type:"added"},jm={type:"removed"},Rs={type:"childadded",child:null},Xa={type:"childremoved",child:null};class vt extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new P,t=new gn,n=new an,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ge}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fo.copy(e):fo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(pr,fo,this.up):ai.lookAt(fo,pr,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),Cs.setFromRotationMatrix(ai),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jm),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,Xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,qm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new P(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new P,li=new P,qa=new P,ci=new P,Ls=new P,Ps=new P,Qh=new P,ja=new P,$a=new P,Ya=new P,Ka=new ot,Za=new ot,Ja=new ot;class En{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){bn.subVectors(i,t),li.subVectors(n,t),qa.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(li),l=bn.dot(qa),c=li.dot(li),h=li.dot(qa),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Ka.setScalar(0),Za.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(e,t),Za.fromBufferAttribute(e,n),Ja.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ka,s.x),o.addScaledVector(Za,s.y),o.addScaledVector(Ja,s.z),o}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),li.subVectors(e,t),bn.cross(li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),bn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return En.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ls.subVectors(i,n),Ps.subVectors(s,n),ja.subVectors(e,n);const l=Ls.dot(ja),c=Ps.dot(ja);if(l<=0&&c<=0)return t.copy(n);$a.subVectors(e,i);const h=Ls.dot($a),u=Ps.dot($a);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ls,o);Ya.subVectors(e,s);const f=Ls.dot(Ya),g=Ps.dot(Ya);if(g>=0&&f<=g)return t.copy(s);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ps,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Qh.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Qh,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Ls,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},po={h:0,s:0,l:0};function Qa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=jc(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Qa(o,s,e+1/3),this.g=Qa(o,s,e),this.b=Qa(o,s,e-1/3)}return tt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ut){function n(s){s!==void 0&&parseFloat(s)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=wf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return tt.workingToColorSpace(Vt.copy(this),e),Math.round(je(Vt.r*255,0,255))*65536+Math.round(je(Vt.g*255,0,255))*256+Math.round(je(Vt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,s=Vt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Ut){tt.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(po);const n=Dr(Li.h,po.h,t),i=Dr(Li.s,po.s,t),s=Dr(Li.l,po.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ee;Ee.NAMES=wf;let $m=0,tn=class extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Gs,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Ul,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ul&&(n.blendDst=this.blendDst),this.blendEquation!==hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class Qt extends tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new P,mo=new Be;let Ym=0;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ym++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bc,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mo.fromBufferAttribute(this,t),mo.applyMatrix3(e),this.setXY(t,mo.x,mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bc&&(e.usage=this.usage),e}}class Mf extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sf extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Km=0;const cn=new Ve,el=new vt,Is=new P,on=new Mi,mr=new Mi,Ft=new P;class Lt extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_f(e)?Sf:Mf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(on.min,mr.min),on.expandByPoint(Ft),Ft.addVectors(on.max,mr.max),on.expandByPoint(Ft)):(on.expandByPoint(mr.min),on.expandByPoint(mr.max))}on.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ft.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),Ft.add(Is)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new P,l[D]=new P;const c=new P,h=new P,u=new P,d=new Be,f=new Be,g=new Be,x=new P,m=new P;function p(D,A,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,D),f.fromBufferAttribute(s,A),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[D].add(x),a[A].add(x),a[M].add(x),l[D].add(m),l[A].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,A=v.length;D<A;++D){const M=v[D],I=M.start,O=M.count;for(let N=I,z=I+O;N<z;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new P,_=new P,E=new P,w=new P;function R(D){E.fromBufferAttribute(i,D),w.copy(E);const A=a[D];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),_.crossVectors(w,A);const I=_.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,I)}for(let D=0,A=v.length;D<A;++D){const M=v[D],I=M.start,O=M.count;for(let N=I,z=I+O;N<z;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Gt(d,h,u)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eu=new Ve,ts=new qr,go=new ti,tu=new P,xo=new P,vo=new P,yo=new P,tl=new P,_o=new P,nu=new P,bo=new P;class lt extends vt{constructor(e=new Lt,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){_o.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(tl.fromBufferAttribute(u,e),o?_o.addScaledVector(tl,h):_o.addScaledVector(tl.sub(t),h))}t.add(_o)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),ts.copy(e.ray).recast(e.near),!(go.containsPoint(ts.origin)===!1&&(ts.intersectSphere(go,tu)===null||ts.origin.distanceToSquared(tu)>(e.far-e.near)**2))&&(eu.copy(s).invert(),ts.copy(e.ray).applyMatrix4(eu),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,E=y;_<E;_+=3){const w=a.getX(_),R=a.getX(_+1),D=a.getX(_+2);i=wo(this,p,e,n,c,h,u,w,R,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);i=wo(this,o,e,n,c,h,u,v,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,E=y;_<E;_+=3){const w=_,R=_+1,D=_+2;i=wo(this,p,e,n,c,h,u,w,R,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=m,y=m+1,_=m+2;i=wo(this,o,e,n,c,h,u,v,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Zm(r,e,t,n,i,s,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===wi,a),l===null)return null;bo.copy(a),bo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(bo);return c<t.near||c>t.far?null:{distance:c,point:bo.clone(),object:r}}function wo(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,xo),r.getVertexPosition(l,vo),r.getVertexPosition(c,yo);const h=Zm(r,e,t,n,xo,vo,yo,nu);if(h){const u=new P;En.getBarycoord(nu,xo,vo,yo,u),i&&(h.uv=En.getInterpolatedAttribute(i,a,l,c,u,new Be)),s&&(h.uv1=En.getInterpolatedAttribute(s,a,l,c,u,new Be)),o&&(h.normal=En.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};En.getNormal(xo,vo,yo,d.normal),h.face=d,h.barycoord=u}return h}class qi extends Lt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(x,m,p,v,y,_,E,w,R,D,A){const M=_/R,I=E/D,O=_/2,N=E/2,z=w/2,k=R+1,B=D+1;let Y=0,G=0;const K=new P;for(let ie=0;ie<B;ie++){const me=ie*I-N;for(let oe=0;oe<k;oe++){const Qe=oe*M-O;K[x]=Qe*v,K[m]=me*y,K[p]=z,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[p]=w>0?1:-1,h.push(K.x,K.y,K.z),u.push(oe/R),u.push(1-ie/D),Y+=1}}for(let ie=0;ie<D;ie++)for(let me=0;me<R;me++){const oe=d+me+k*ie,Qe=d+me+k*(ie+1),rt=d+(me+1)+k*(ie+1),at=d+(me+1)+k*ie;l.push(oe,Qe,at),l.push(Qe,rt,at),G+=6}a.addGroup(f,G,A),f+=G,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(r){const e={};for(let t=0;t<r.length;t++){const n=Qs(r[t]);for(const i in n)e[i]=n[i]}return e}function Jm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ef(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Tf={clone:Qs,merge:qt};var Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Af extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new P,iu=new Be,su=new Be;class Ht extends Af{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,iu,su),t.subVectors(su,iu)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ds=-90,Ns=1;class tg extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(Ds,Ns,e,t);i.layers=this.layers,this.add(i);const s=new Ht(Ds,Ns,e,t);s.layers=this.layers,this.add(s);const o=new Ht(Ds,Ns,e,t);o.layers=this.layers,this.add(o);const a=new Ht(Ds,Ns,e,t);a.layers=this.layers,this.add(a);const l=new Ht(Ds,Ns,e,t);l.layers=this.layers,this.add(l);const c=new Ht(Ds,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cf extends Bt{constructor(e=[],t=Ys,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ng extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Cf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qi(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Kn});s.uniforms.tEquirect.value=t;const o=new lt(i,s),a=t.minFilter;return t.minFilter===yi&&(t.minFilter=jt),new tg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class mn extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ig={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Kc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new Kc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ru extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new P;class Zc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){aa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){aa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ou=new P,au=new ot,lu=new ot,rg=new P,cu=new Ve,Mo=new P,il=new ti,hu=new Ve,sl=new qr;class og extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fh,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mo),this.boundingBox.expandByPoint(Mo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mo),this.boundingSphere.expandByPoint(Mo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),il.copy(this.boundingSphere),il.applyMatrix4(i),e.ray.intersectsSphere(il)!==!1&&(hu.copy(i).invert(),sl.copy(e.ray).applyMatrix4(hu),!(this.boundingBox!==null&&sl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;au.fromBufferAttribute(i.attributes.skinIndex,e),lu.fromBufferAttribute(i.attributes.skinWeight,e),ou.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=lu.getComponent(s);if(o!==0){const a=au.getComponent(s);cu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(rg.copy(ou).applyMatrix4(cu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rf extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Jc extends Bt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=$t,h=$t,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=new Ve,ag=new Ve;class Qc{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:ag;uu.multiplyMatrices(a,t[s]),uu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Qc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Jc(t,e,e,pn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(Ae("Skeleton: No bone found with UUID:",s),o=new Rf),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class wc extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fs=new Ve,du=new Ve,So=[],fu=new Mi,lg=new Ve,gr=new lt,xr=new ti;class cg extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),fu.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(fu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),xr.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),e.ray.intersectsSphere(xr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Fs),du.multiplyMatrices(n,Fs),gr.matrixWorld=du,gr.raycast(e,So);for(let o=0,a=So.length;o<a;o++){const l=So[o];l.instanceId=s,l.object=this,t.push(l)}So.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jc(new Float32Array(i*this.count),i,this.count,Hc,An));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rl=new P,hg=new P,ug=new Ge;let xi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=rl.subVectors(n,t).cross(hg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ug.getNormalMatrix(e),i=this.coplanarPoint(rl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const ns=new ti,dg=new Be(.5,.5),Eo=new P;class eh{constructor(e=new xi,t=new xi,n=new xi,i=new xi,s=new xi,o=new xi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],x=s[9],m=s[10],p=s[11],v=s[12],y=s[13],_=s[14],E=s[15];if(i[0].setComponents(c-o,f-h,p-g,E-v).normalize(),i[1].setComponents(c+o,f+h,p+g,E+v).normalize(),i[2].setComponents(c+a,f+u,p+x,E+y).normalize(),i[3].setComponents(c-a,f-u,p-x,E-y).normalize(),n)i[4].setComponents(l,d,m,_).normalize(),i[5].setComponents(c-l,f-d,p-m,E-_).normalize();else if(i[4].setComponents(c-l,f-d,p-m,E-_).normalize(),t===$n)i[5].setComponents(c+l,f+d,p+m,E+_).normalize();else if(t===oa)i[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=dg.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Eo.x=i.normal.x>0?e.max.x:e.min.x,Eo.y=i.normal.y>0?e.max.y:e.min.y,Eo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xs extends tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const la=new P,ca=new P,pu=new Ve,vr=new qr,To=new ti,ol=new P,mu=new P;class ba extends vt{constructor(e=new Lt,t=new Xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)la.fromBufferAttribute(t,i-1),ca.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=la.distanceTo(ca);e.setAttribute("lineDistance",new st(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(i),To.radius+=s,e.ray.intersectsSphere(To)===!1)return;pu.copy(i).invert(),vr.copy(e.ray).applyMatrix4(pu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){const p=h.getX(x),v=h.getX(x+1),y=Ao(this,e,vr,l,p,v,x);y&&t.push(y)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=Ao(this,e,vr,l,x,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){const p=Ao(this,e,vr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Ao(this,e,vr,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ao(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(la.fromBufferAttribute(a,i),ca.fromBufferAttribute(a,s),t.distanceSqToSegment(la,ca,ol,mu)>n)return;ol.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ol);if(!(c<e.near||c>e.far))return{distance:c,point:mu.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const gu=new P,xu=new P;class Mc extends ba{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)gu.fromBufferAttribute(t,i),xu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gu.distanceTo(xu);e.setAttribute("lineDistance",new st(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fg extends ba{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Vs extends tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vu=new Ve,Sc=new qr,Co=new ti,Ro=new P;class Ko extends vt{constructor(e=new Lt,t=new Vs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(i),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;vu.copy(i).invert(),Sc.copy(e.ray).applyMatrix4(vu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);Ro.fromBufferAttribute(u,m),yu(Ro,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Ro.fromBufferAttribute(u,g),yu(Ro,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yu(r,e,t,n,i,s,o){const a=Sc.distanceSqToPoint(r);if(a<t){const l=new P;Sc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Lf extends Bt{constructor(e,t,n=ms,i,s,o,a=$t,l=$t,c,h=Or,u=1){if(h!==Or&&h!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $c(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pf extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class th extends Lt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new P,h=new Be;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new th(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wa extends Lt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function v(){const _=new P,E=new P;let w=0;const R=(t-e)/n;for(let D=0;D<=s;D++){const A=[],M=D/s,I=M*(t-e)+e;for(let O=0;O<=i;O++){const N=O/i,z=N*l+a,k=Math.sin(z),B=Math.cos(z);E.x=I*k,E.y=-M*n+m,E.z=I*B,u.push(E.x,E.y,E.z),_.set(k,R,B).normalize(),d.push(_.x,_.y,_.z),f.push(N,1-M),A.push(g++)}x.push(A)}for(let D=0;D<i;D++)for(let A=0;A<s;A++){const M=x[A][D],I=x[A+1][D],O=x[A+1][D+1],N=x[A][D+1];(e>0||A!==0)&&(h.push(M,I,N),w+=3),(t>0||A!==s-1)&&(h.push(I,O,N),w+=3)}c.addGroup(p,w,0),p+=w}function y(_){const E=g,w=new Be,R=new P;let D=0;const A=_===!0?e:t,M=_===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const I=g;for(let O=0;O<=i;O++){const z=O/i*l+a,k=Math.cos(z),B=Math.sin(z);R.x=A*B,R.y=m*M,R.z=A*k,u.push(R.x,R.y,R.z),d.push(0,M,0),w.x=k*.5+.5,w.y=B*.5*M+.5,f.push(w.x,w.y),g++}for(let O=0;O<i;O++){const N=E+O,z=I+O;_===!0?h.push(z,z+1,N):h.push(z+1,z,N),D+=3}c.addGroup(p,D,_===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ha extends wa{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ha(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nh extends Lt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(s.slice(),3)),this.setAttribute("uv",new st(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new P,_=new P,E=new P;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],_),f(t[w+2],E),l(y,_,E,v)}function l(v,y,_,E){const w=E+1,R=[];for(let D=0;D<=w;D++){R[D]=[];const A=v.clone().lerp(_,D/w),M=y.clone().lerp(_,D/w),I=w-D;for(let O=0;O<=I;O++)O===0&&D===w?R[D][O]=A:R[D][O]=A.clone().lerp(M,O/I)}for(let D=0;D<w;D++)for(let A=0;A<2*(w-D)-1;A++){const M=Math.floor(A/2);A%2===0?(d(R[D][M+1]),d(R[D+1][M]),d(R[D][M])):(d(R[D][M+1]),d(R[D+1][M+1]),d(R[D+1][M]))}}function c(v){const y=new P;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(v),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function h(){const v=new P;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const _=m(v)/2/Math.PI+.5,E=p(v)/Math.PI+.5;o.push(_,1-E)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],_=o[v+2],E=o[v+4],w=Math.max(y,_,E),R=Math.min(y,_,E);w>.9&&R<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,y){const _=v*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){const v=new P,y=new P,_=new P,E=new P,w=new Be,R=new Be,D=new Be;for(let A=0,M=0;A<s.length;A+=9,M+=6){v.set(s[A+0],s[A+1],s[A+2]),y.set(s[A+3],s[A+4],s[A+5]),_.set(s[A+6],s[A+7],s[A+8]),w.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),E.copy(v).add(y).add(_).divideScalar(3);const I=m(E);x(w,M+0,v,I),x(R,M+2,y,I),x(D,M+4,_,I)}}function x(v,y,_,E){E<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nh(e.vertices,e.indices,e.radius,e.details)}}class ih extends nh{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ih(e.radius,e.detail)}}class jr extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const v=p*d-o;for(let y=0;y<c;y++){const _=y*u-s;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,_=v+c*(p+1),E=v+1+c*(p+1),w=v+1+c*p;f.push(y,_,w),f.push(_,E,w)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}}class sh extends Lt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new P,g=new Be;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){const m=x*(n+1);for(let p=0;p<n;p++){const v=p+m,y=v,_=v+n+1,E=v+n+2,w=v+1;a.push(y,_,w),a.push(_,E,w)}}this.setIndex(a),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wi extends Lt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let _=0;p===0&&o===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){const w=E/t;u.x=-e*Math.cos(i+w*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+w*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+_,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=h[p][v+1],_=h[p][v],E=h[p+1][v],w=h[p+1][v+1];(p!==0||o>0)&&f.push(y,_,w),(p!==n-1||l<Math.PI)&&f.push(_,E,w)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ln extends tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ni extends Ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pg extends tn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mg extends tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gg extends tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xg extends tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Lo(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function vg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function yg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function _u(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function If(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class $r{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _g extends $r{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uh,endingEnd:Uh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bh:s=e,a=2*t-n;break;case Oh:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bh:o=e,l=2*n-t;break;case Oh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let E=0;E!==a;++E)s[E]=p*o[h+E]+v*o[c+E]+y*o[l+E]+_*o[u+E];return s}}class bg extends $r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class wg extends $r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lo(t,this.TimeBufferType),this.values=Lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lo(e.times,Array),values:Lo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _g(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zr:t=this.InterpolantFactoryMethodDiscrete;break;case Vr:t=this.InterpolantFactoryMethodLinear;break;case Fa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return Fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&vg(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Fa,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Vr;class ar extends Dn{constructor(e,t,n){super(e,t,n)}}ar.prototype.ValueTypeName="bool";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=zr;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Df extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}Df.prototype.ValueTypeName="color";class er extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}er.prototype.ValueTypeName="number";class Mg extends $r{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)an.slerpFlat(s,0,o,c-a,o,c,l);return s}}class tr extends Dn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Mg(this.times,this.values,this.getValueSize(),e)}}tr.prototype.ValueTypeName="quaternion";tr.prototype.InterpolantFactoryMethodSmooth=void 0;class lr extends Dn{constructor(e,t,n){super(e,t,n)}}lr.prototype.ValueTypeName="string";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=zr;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends Dn{constructor(e,t,n,i){super(e,t,n,i)}}nr.prototype.ValueTypeName="vector";class Sg{constructor(e="",t=-1,n=[],i=rm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Rn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Tg(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Dn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=yg(l);l=_u(l,1,h),c=_u(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new er(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Ae("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Xe("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,x){if(f.length!==0){const m=[],p=[];If(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const y=d[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new er(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(nr,f+".position",d,"pos",i),n(tr,f+".quaternion",d,"rot",i),n(nr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Eg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return er;case"vector":case"vector2":case"vector3":case"vector4":return nr;case"color":return Df;case"quaternion":return tr;case"bool":case"boolean":return ar;case"string":return lr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Tg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Eg(r.type);if(r.times===void 0){const t=[],n=[];If(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const _i={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ag{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Cg=new Ag;class vs{constructor(e){this.manager=e!==void 0?e:Cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class Rg extends Error{constructor(e,t){super(e),this.response=t}}class rh extends vs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=_i.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:i});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=hi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,R=h.length;w<R;w++){const D=h[w];D.onProgress&&D.onProgress(E)}p.enqueue(_),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Rg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{_i.add(`file:${e}`,c);const h=hi[e];delete hi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=hi[e];if(h===void 0)throw this.manager.itemError(e),c;delete hi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Us=new WeakMap;class Lg extends vs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=_i.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=Us.get(o);u===void 0&&(u=[],Us.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=Hr("img");function l(){h(),t&&t(this);const u=Us.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Us.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),_i.remove(`image:${e}`);const d=Us.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Us.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),_i.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Pg extends vs{constructor(e){super(e)}load(e,t,n,i){const s=new Bt,o=new Lg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Yr extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ig extends Yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const al=new Ve,bu=new P,wu=new P;class oh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eh,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(bu),wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wu),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dg extends oh{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Js*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ng extends Yr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Dg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Mu=new Ve,yr=new P,ll=new P;class Fg extends oh{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),yr.setFromMatrixPosition(e.matrixWorld),n.position.copy(yr),ll.copy(n.position),ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ll),n.updateMatrixWorld(),i.makeTranslation(-yr.x,-yr.y,-yr.z),Mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mu,n.coordinateSystem,n.reversedDepth)}}class Nf extends Yr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ma extends Af{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ug extends oh{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zo extends Yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Ug}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Su extends Yr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const cl=new WeakMap;class Bg extends vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=_i.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(cl.has(o)===!0)i&&i(cl.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),cl.set(l,c),_i.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});_i.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Og extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ah="\\[\\]\\.:\\/",zg=new RegExp("["+ah+"]","g"),lh="[^"+ah+"]",Vg="[^"+ah.replace("\\.","")+"]",Hg=/((?:WC+[\/:])*)/.source.replace("WC",lh),Gg=/(WCOD+)?/.source.replace("WCOD",Vg),Wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),Xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),qg=new RegExp("^"+Hg+Gg+Wg+Xg+"$"),jg=["material","materials","bones","map"];class $g{constructor(e,t,n){const i=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zg,"")}static parseTrackName(e){const t=qg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);jg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=$g;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Eu=new Ve;class Yg{constructor(e,t,n=0,i=1/0){this.ray=new qr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Yc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eu),this}intersectObject(e,t=!0,n=[]){return Ec(e,this,n,t),n.sort(Tu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ec(e[i],this,n,t);return n.sort(Tu),n}}function Tu(r,e){return r.distance-e.distance}function Ec(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Ec(s[o],e,t,!0)}}function Au(r,e,t,n){const i=Kg(n);switch(t){case gf:return r*e;case Hc:return r*e/i.components*i.byteLength;case Gc:return r*e/i.components*i.byteLength;case Wc:return r*e*2/i.components*i.byteLength;case Xc:return r*e*2/i.components*i.byteLength;case xf:return r*e*3/i.components*i.byteLength;case pn:return r*e*4/i.components*i.byteLength;case qc:return r*e*4/i.components*i.byteLength;case qo:case jo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $o:case Yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jl:case Yl:return Math.max(r,16)*Math.max(e,8)/4;case ql:case $l:return Math.max(r,8)*Math.max(e,8)/2;case Kl:case Zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case tc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case nc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ic:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case sc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case rc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case oc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ac:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case lc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case cc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case uc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case dc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case fc:case pc:case mc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case gc:case xc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case vc:case yc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kg(r){switch(r){case Qn:case df:return{byteLength:1,components:1};case Ur:case ff:case xs:return{byteLength:2,components:1};case zc:case Vc:return{byteLength:2,components:4};case ms:case kc:case An:return{byteLength:4,components:1};case pf:case mf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ff(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Zg(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Jg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qg=`#ifdef USE_ALPHAHASH
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
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s0=`#ifdef USE_AOMAP
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
#endif`,r0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o0=`#ifdef USE_BATCHING
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
#endif`,a0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u0=`#ifdef USE_IRIDESCENCE
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
#endif`,d0=`#ifdef USE_BUMPMAP
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,b0=`#define PI 3.141592653589793
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
} // validated`,w0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M0=`vec3 transformedNormal = objectNormal;
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
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C0="gl_FragColor = linearToOutputTexel( gl_FragColor );",R0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
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
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y0=`PhysicalMaterial material;
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
#endif`,K0=`uniform sampler2D dfgLUT;
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
}`,Z0=`
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ax=`#if defined( USE_POINTS_UV )
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
#endif`,lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
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
#endif`,px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_x=`#ifdef USE_NORMALMAP
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
#endif`,bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ux=`float getShadowMask() {
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
}`,Bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zx=`#ifdef USE_SKINNING
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
#endif`,Vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`#include <common>
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
}`,sv=`#if DEPTH_PACKING == 3200
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
}`,rv=`#define DISTANCE
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
}`,ov=`#define DISTANCE
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
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`uniform float scale;
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
}`,hv=`uniform vec3 diffuse;
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
}`,uv=`#include <common>
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
}`,dv=`uniform vec3 diffuse;
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
}`,fv=`#define LAMBERT
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
}`,pv=`#define LAMBERT
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
}`,mv=`#define MATCAP
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
}`,gv=`#define MATCAP
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
}`,xv=`#define NORMAL
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
}`,vv=`#define NORMAL
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
}`,yv=`#define PHONG
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
}`,_v=`#define PHONG
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
}`,bv=`#define STANDARD
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
}`,wv=`#define STANDARD
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
}`,Mv=`#define TOON
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
}`,Sv=`#define TOON
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
}`,Ev=`uniform float size;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,Av=`#include <common>
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
}`,Cv=`uniform vec3 color;
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
}`,Rv=`uniform float rotation;
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
}`,Lv=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Jg,alphahash_pars_fragment:Qg,alphamap_fragment:e0,alphamap_pars_fragment:t0,alphatest_fragment:n0,alphatest_pars_fragment:i0,aomap_fragment:s0,aomap_pars_fragment:r0,batching_pars_vertex:o0,batching_vertex:a0,begin_vertex:l0,beginnormal_vertex:c0,bsdfs:h0,iridescence_fragment:u0,bumpmap_pars_fragment:d0,clipping_planes_fragment:f0,clipping_planes_pars_fragment:p0,clipping_planes_pars_vertex:m0,clipping_planes_vertex:g0,color_fragment:x0,color_pars_fragment:v0,color_pars_vertex:y0,color_vertex:_0,common:b0,cube_uv_reflection_fragment:w0,defaultnormal_vertex:M0,displacementmap_pars_vertex:S0,displacementmap_vertex:E0,emissivemap_fragment:T0,emissivemap_pars_fragment:A0,colorspace_fragment:C0,colorspace_pars_fragment:R0,envmap_fragment:L0,envmap_common_pars_fragment:P0,envmap_pars_fragment:I0,envmap_pars_vertex:D0,envmap_physical_pars_fragment:W0,envmap_vertex:N0,fog_vertex:F0,fog_pars_vertex:U0,fog_fragment:B0,fog_pars_fragment:O0,gradientmap_pars_fragment:k0,lightmap_pars_fragment:z0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:H0,lights_pars_begin:G0,lights_toon_fragment:X0,lights_toon_pars_fragment:q0,lights_phong_fragment:j0,lights_phong_pars_fragment:$0,lights_physical_fragment:Y0,lights_physical_pars_fragment:K0,lights_fragment_begin:Z0,lights_fragment_maps:J0,lights_fragment_end:Q0,logdepthbuf_fragment:ex,logdepthbuf_pars_fragment:tx,logdepthbuf_pars_vertex:nx,logdepthbuf_vertex:ix,map_fragment:sx,map_pars_fragment:rx,map_particle_fragment:ox,map_particle_pars_fragment:ax,metalnessmap_fragment:lx,metalnessmap_pars_fragment:cx,morphinstance_vertex:hx,morphcolor_vertex:ux,morphnormal_vertex:dx,morphtarget_pars_vertex:fx,morphtarget_vertex:px,normal_fragment_begin:mx,normal_fragment_maps:gx,normal_pars_fragment:xx,normal_pars_vertex:vx,normal_vertex:yx,normalmap_pars_fragment:_x,clearcoat_normal_fragment_begin:bx,clearcoat_normal_fragment_maps:wx,clearcoat_pars_fragment:Mx,iridescence_pars_fragment:Sx,opaque_fragment:Ex,packing:Tx,premultiplied_alpha_fragment:Ax,project_vertex:Cx,dithering_fragment:Rx,dithering_pars_fragment:Lx,roughnessmap_fragment:Px,roughnessmap_pars_fragment:Ix,shadowmap_pars_fragment:Dx,shadowmap_pars_vertex:Nx,shadowmap_vertex:Fx,shadowmask_pars_fragment:Ux,skinbase_vertex:Bx,skinning_pars_vertex:Ox,skinning_vertex:kx,skinnormal_vertex:zx,specularmap_fragment:Vx,specularmap_pars_fragment:Hx,tonemapping_fragment:Gx,tonemapping_pars_fragment:Wx,transmission_fragment:Xx,transmission_pars_fragment:qx,uv_pars_fragment:jx,uv_pars_vertex:$x,uv_vertex:Yx,worldpos_vertex:Kx,background_vert:Zx,background_frag:Jx,backgroundCube_vert:Qx,backgroundCube_frag:ev,cube_vert:tv,cube_frag:nv,depth_vert:iv,depth_frag:sv,distanceRGBA_vert:rv,distanceRGBA_frag:ov,equirect_vert:av,equirect_frag:lv,linedashed_vert:cv,linedashed_frag:hv,meshbasic_vert:uv,meshbasic_frag:dv,meshlambert_vert:fv,meshlambert_frag:pv,meshmatcap_vert:mv,meshmatcap_frag:gv,meshnormal_vert:xv,meshnormal_frag:vv,meshphong_vert:yv,meshphong_frag:_v,meshphysical_vert:bv,meshphysical_frag:wv,meshtoon_vert:Mv,meshtoon_frag:Sv,points_vert:Ev,points_frag:Tv,shadow_vert:Av,shadow_frag:Cv,sprite_vert:Rv,sprite_frag:Lv},he={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Gn={basic:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ee(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:qt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:qt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ee(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:qt([he.points,he.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:qt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:qt([he.common,he.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:qt([he.sprite,he.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:qt([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:qt([he.lights,he.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Gn.physical={uniforms:qt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Po={r:0,b:0,g:0},is=new gn,Pv=new Ve;function Iv(r,e,t,n,i,s,o){const a=new Ee(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1;const E=g(y);E===null?p(a,l):E&&E.isColor&&(p(E,1),_=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,_){const E=g(_);E&&(E.isCubeTexture||E.mapping===ya)?(h===void 0&&(h=new lt(new qi(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Qs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),is.copy(_.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(is)),h.material.toneMapped=tt.getTransfer(E.colorSpace)!==ft,(u!==E||d!==E.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new lt(new jr(2,2),new In({name:"BackgroundMaterial",uniforms:Qs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=tt.getTransfer(E.colorSpace)!==ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(Po,Ef(r)),n.buffers.color.setClear(Po.r,Po.g,Po.b,_,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:m,dispose:v}}function Dv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,I,O,N,z){let k=!1;const B=u(N,O,I);s!==B&&(s=B,c(s.object)),k=f(M,N,O,z),k&&g(M,N,O,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(M,I,O,N),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,I,O){const N=O.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let k=z[I.id];k===void 0&&(k={},z[I.id]=k);let B=k[N];return B===void 0&&(B=d(l()),k[N]=B),B}function d(M){const I=[],O=[],N=[];for(let z=0;z<t;z++)I[z]=0,O[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,I,O,N){const z=s.attributes,k=I.attributes;let B=0;const Y=O.getAttributes();for(const G in Y)if(Y[G].location>=0){const ie=z[G];let me=k[G];if(me===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),ie===void 0||ie.attribute!==me||me&&ie.data!==me.data)return!0;B++}return s.attributesNum!==B||s.index!==N}function g(M,I,O,N){const z={},k=I.attributes;let B=0;const Y=O.getAttributes();for(const G in Y)if(Y[G].location>=0){let ie=k[G];ie===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));const me={};me.attribute=ie,ie&&ie.data&&(me.data=ie.data),z[G]=me,B++}s.attributes=z,s.attributesNum=B,s.index=N}function x(){const M=s.newAttributes;for(let I=0,O=M.length;I<O;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){const O=s.newAttributes,N=s.enabledAttributes,z=s.attributeDivisors;O[M]=1,N[M]===0&&(r.enableVertexAttribArray(M),N[M]=1),z[M]!==I&&(r.vertexAttribDivisor(M,I),z[M]=I)}function v(){const M=s.newAttributes,I=s.enabledAttributes;for(let O=0,N=I.length;O<N;O++)I[O]!==M[O]&&(r.disableVertexAttribArray(O),I[O]=0)}function y(M,I,O,N,z,k,B){B===!0?r.vertexAttribIPointer(M,I,O,z,k):r.vertexAttribPointer(M,I,O,N,z,k)}function _(M,I,O,N){x();const z=N.attributes,k=O.getAttributes(),B=I.defaultAttributeValues;for(const Y in k){const G=k[Y];if(G.location>=0){let K=z[Y];if(K===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){const ie=K.normalized,me=K.itemSize,oe=e.get(K);if(oe===void 0)continue;const Qe=oe.buffer,rt=oe.type,at=oe.bytesPerElement,Z=rt===r.INT||rt===r.UNSIGNED_INT||K.gpuType===kc;if(K.isInterleavedBufferAttribute){const ee=K.data,ye=ee.stride,He=K.offset;if(ee.isInstancedInterleavedBuffer){for(let Ce=0;Ce<G.locationSize;Ce++)p(G.location+Ce,ee.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ce=0;Ce<G.locationSize;Ce++)m(G.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let Ce=0;Ce<G.locationSize;Ce++)y(G.location+Ce,me/G.locationSize,rt,ie,ye*at,(He+me/G.locationSize*Ce)*at,Z)}else{if(K.isInstancedBufferAttribute){for(let ee=0;ee<G.locationSize;ee++)p(G.location+ee,K.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ee=0;ee<G.locationSize;ee++)m(G.location+ee);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let ee=0;ee<G.locationSize;ee++)y(G.location+ee,me/G.locationSize,rt,ie,me*at,me/G.locationSize*ee*at,Z)}}else if(B!==void 0){const ie=B[Y];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(G.location,ie);break;case 3:r.vertexAttrib3fv(G.location,ie);break;case 4:r.vertexAttrib4fv(G.location,ie);break;default:r.vertexAttrib1fv(G.location,ie)}}}}v()}function E(){D();for(const M in n){const I=n[M];for(const O in I){const N=I[O];for(const z in N)h(N[z].object),delete N[z];delete I[O]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const O in I){const N=I[O];for(const z in N)h(N[z].object),delete N[z];delete I[O]}delete n[M.id]}function R(M){for(const I in n){const O=n[I];if(O[M.id]===void 0)continue;const N=O[M.id];for(const z in N)h(N[z].object),delete N[z];delete O[M.id]}}function D(){A(),o=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Nv(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==pn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Qn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==An&&!D)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:E,maxSamples:w}}function Uv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new xi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const v=s?0:n,y=v*4;let _=p.clippingState||null;l.value=_,_=h(g,d,y,f);for(let E=0;E!==y;++E)_[E]=t[E];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Bv(r){let e=new WeakMap;function t(o,a){return a===Wl?o.mapping=Ys:a===Xl&&(o.mapping=Ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wl||a===Xl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ng(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Oi=4,Cu=[.125,.215,.35,.446,.526,.582],us=20,Ov=256,_r=new Ma,Ru=new Ee;let hl=null,ul=0,dl=0,fl=!1;const kv=new P;class Lu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=kv}=s;hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hl,ul,dl),this._renderer.xr.enabled=fl,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:xs,format:pn,colorSpace:Yt,depthBuffer:!1},i=Pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zv(s)),this._blurMaterial=Hv(s,e,t),this._ggxMaterial=Vv(s,e,t)}return i}_compileMaterial(e){const t=new lt(new Lt,e);this._renderer.compile(t,_r)}_sceneToCubeUV(e,t,n,i,s){const l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ru),u.toneMapping=zi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new qi,new Qt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(Ru),p=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const E=this._cubeSize;Bs(i,_*E,y>2?E:0,E,E),u.setRenderTarget(i),p&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ys||e.mapping===Ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,_r)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=.05+c*.95,f=u*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Oi?n-g+Oi:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Bs(s,m,p,3*x,2*x),i.setRenderTarget(s),i.render(a,_r),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Bs(e,m,p,3*x,2*x),i.setRenderTarget(e),i.render(a,_r)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*us-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):us;m>us&&Ae(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const p=[];let v=0;for(let R=0;R<us;++R){const D=R/x,A=Math.exp(-D*D/2);p.push(A),R===0?v+=A:R<m&&(v+=2*A)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const _=this._sizeLods[i],E=3*_*(i>y-Oi?i-y+Oi:0),w=4*(this._cubeSize-_);Bs(t,E,w,3*_,2*_),l.setRenderTarget(t),l.render(u,_r)}}function zv(r){const e=[],t=[],n=[];let i=r;const s=r-Oi+1+Cu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Oi?l=Cu[o-r+Oi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,D=w>2?0:-1,A=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];v.set(A,x*g*w),y.set(d,m*g*w);const M=[w,w,w,w,w,w];_.set(M,p*g*w)}const E=new Lt;E.setAttribute("position",new Gt(v,x)),E.setAttribute("uv",new Gt(y,m)),E.setAttribute("faceIndex",new Gt(_,p)),n.push(new lt(E,null)),i>Oi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Pu(r,e,t){const n=new Gi(r,e,t);return n.texture.mapping=ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Vv(r,e,t){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ov,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Hv(r,e,t){const n=new Float32Array(us),i=new P(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Iu(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Du(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Sa(){return`

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
	`}function Gv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wl||l===Xl,h=l===Ys||l===Ks;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Lu(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Lu(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Gr("WebGLRenderer: "+n+" extension not supported."),i}}}function Xv(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let y=0,_=v.length;y<_;y+=3){const E=v[y+0],w=v[y+1],R=v[y+2];d.push(E,w,w,R,R,E)}}else if(g!==void 0){const v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const E=y+0,w=y+1,R=y+2;d.push(E,w,w,R,R,E)}}else return;const m=new(_f(d)?Sf:Mf)(d,1);m.version=x;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function qv(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*x[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function jv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $v(r,e,t){const n=new WeakMap,i=new ot;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let E=a.attributes.position.count*_,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*w*4*u),D=new bf(R,E,w,u);D.type=An,D.needsUpdate=!0;const A=_*4;for(let I=0;I<u;I++){const O=p[I],N=v[I],z=y[I],k=E*w*4*I;for(let B=0;B<O.count;B++){const Y=B*A;g===!0&&(i.fromBufferAttribute(O,B),R[k+Y+0]=i.x,R[k+Y+1]=i.y,R[k+Y+2]=i.z,R[k+Y+3]=0),x===!0&&(i.fromBufferAttribute(N,B),R[k+Y+4]=i.x,R[k+Y+5]=i.y,R[k+Y+6]=i.z,R[k+Y+7]=0),m===!0&&(i.fromBufferAttribute(z,B),R[k+Y+8]=i.x,R[k+Y+9]=i.y,R[k+Y+10]=i.z,R[k+Y+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new Be(E,w)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Yv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Uf=new Bt,Nu=new Lf(1,1),Bf=new bf,Of=new zm,kf=new Cf,Fu=[],Uu=[],Bu=new Float32Array(16),Ou=new Float32Array(9),ku=new Float32Array(4);function cr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Fu[i];if(s===void 0&&(s=new Float32Array(i),Fu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Nt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ea(r,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Kv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Zv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2fv(this.addr,e),Nt(t,e)}}function Jv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;r.uniform3fv(this.addr,e),Nt(t,e)}}function Qv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4fv(this.addr,e),Nt(t,e)}}function ey(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;ku.set(n),r.uniformMatrix2fv(this.addr,!1,ku),Nt(t,n)}}function ty(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Ou.set(n),r.uniformMatrix3fv(this.addr,!1,Ou),Nt(t,n)}}function ny(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Bu.set(n),r.uniformMatrix4fv(this.addr,!1,Bu),Nt(t,n)}}function iy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function sy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2iv(this.addr,e),Nt(t,e)}}function ry(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3iv(this.addr,e),Nt(t,e)}}function oy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4iv(this.addr,e),Nt(t,e)}}function ay(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ly(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2uiv(this.addr,e),Nt(t,e)}}function cy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3uiv(this.addr,e),Nt(t,e)}}function hy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4uiv(this.addr,e),Nt(t,e)}}function uy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Nu.compareFunction=yf,s=Nu):s=Uf,t.setTexture2D(e||s,i)}function dy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Of,i)}function fy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kf,i)}function py(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bf,i)}function my(r){switch(r){case 5126:return Kv;case 35664:return Zv;case 35665:return Jv;case 35666:return Qv;case 35674:return ey;case 35675:return ty;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return sy;case 35668:case 35672:return ry;case 35669:case 35673:return oy;case 5125:return ay;case 36294:return ly;case 36295:return cy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return py}}function gy(r,e){r.uniform1fv(this.addr,e)}function xy(r,e){const t=cr(e,this.size,2);r.uniform2fv(this.addr,t)}function vy(r,e){const t=cr(e,this.size,3);r.uniform3fv(this.addr,t)}function yy(r,e){const t=cr(e,this.size,4);r.uniform4fv(this.addr,t)}function _y(r,e){const t=cr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function by(r,e){const t=cr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function wy(r,e){const t=cr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function My(r,e){r.uniform1iv(this.addr,e)}function Sy(r,e){r.uniform2iv(this.addr,e)}function Ey(r,e){r.uniform3iv(this.addr,e)}function Ty(r,e){r.uniform4iv(this.addr,e)}function Ay(r,e){r.uniform1uiv(this.addr,e)}function Cy(r,e){r.uniform2uiv(this.addr,e)}function Ry(r,e){r.uniform3uiv(this.addr,e)}function Ly(r,e){r.uniform4uiv(this.addr,e)}function Py(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Nt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Uf,s[o])}function Iy(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Nt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Of,s[o])}function Dy(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Nt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||kf,s[o])}function Ny(r,e,t){const n=this.cache,i=e.length,s=Ea(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Nt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Bf,s[o])}function Fy(r){switch(r){case 5126:return gy;case 35664:return xy;case 35665:return vy;case 35666:return yy;case 35674:return _y;case 35675:return by;case 35676:return wy;case 5124:case 35670:return My;case 35667:case 35671:return Sy;case 35668:case 35672:return Ey;case 35669:case 35673:return Ty;case 5125:return Ay;case 36294:return Cy;case 36295:return Ry;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Ny}}class Uy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=my(t.type)}}class By{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fy(t.type)}}class Oy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function zu(r,e){r.seq.push(e),r.map[e.id]=e}function ky(r,e,t){const n=r.name,i=n.length;for(pl.lastIndex=0;;){const s=pl.exec(n),o=pl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){zu(t,c===void 0?new Uy(a,r,e):new By(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Oy(a),zu(t,u)),t=u}}}class Jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);ky(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Vu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const zy=37297;let Vy=0;function Hy(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Hu=new Ge;function Gy(r){tt._getMatrix(Hu,tt.workingColorSpace,r);const e=`mat3( ${Hu.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(r)){case ra:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Gu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Hy(r.getShaderSource(e),a)}else return s}function Wy(r,e){const t=Gy(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xy(r,e){let t;switch(e){case Zp:t="Linear";break;case Jp:t="Reinhard";break;case Qp:t="Cineon";break;case em:t="ACESFilmic";break;case nm:t="AgX";break;case im:t="Neutral";break;case tm:t="Custom";break;default:Ae("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Io=new P;function qy(){tt.getLuminanceCoefficients(Io);const r=Io.x.toFixed(4),e=Io.y.toFixed(4),t=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function $y(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Cr(r){return r!==""}function Wu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ky=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(r){return r.replace(Ky,Jy)}const Zy=new Map;function Jy(r,e){let t=We[e];if(t===void 0){const n=Zy.get(e);if(n!==void 0)t=We[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tc(t)}const Qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(r){return r.replace(Qy,e_)}function e_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ju(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function t_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Dl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function n_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ys:case Ks:e="ENVMAP_TYPE_CUBE";break;case ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function s_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case va:e="ENVMAP_BLENDING_MULTIPLY";break;case Yp:e="ENVMAP_BLENDING_MIX";break;case Kp:e="ENVMAP_BLENDING_ADD";break}return e}function r_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function o_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=t_(t),c=n_(t),h=i_(t),u=s_(t),d=r_(t),f=jy(t),g=$y(s),x=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(m=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?We.tonemapping_pars_fragment:"",t.toneMapping!==zi?Xy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Wy("linearToOutputTexel",t.outputColorSpace),qy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),o=Tc(o),o=Wu(o,t),o=Xu(o,t),a=Tc(a),a=Wu(a,t),a=Xu(a,t),o=qu(o),a=qu(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,_=v+p+a,E=Vu(i,i.VERTEX_SHADER,y),w=Vu(i,i.FRAGMENT_SHADER,_);i.attachShader(x,E),i.attachShader(x,w),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(I){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(x)||"",N=i.getShaderInfoLog(E)||"",z=i.getShaderInfoLog(w)||"",k=O.trim(),B=N.trim(),Y=z.trim();let G=!0,K=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,E,w);else{const ie=Gu(i,E,"vertex"),me=Gu(i,w,"fragment");Xe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+ie+`
`+me)}else k!==""?Ae("WebGLProgram: Program Info Log:",k):(B===""||Y==="")&&(K=!1);K&&(I.diagnostics={runnable:G,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(E),i.deleteShader(w),D=new Jo(i,x),A=Yy(i,x)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,zy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=w,this}let a_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new c_(e),t.set(e,n)),n}}class c_{constructor(e){this.id=a_++,this.code=e,this.usedTimes=0}}function h_(r,e,t,n,i,s,o){const a=new Yc,l=new l_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,M,I,O,N){const z=O.fog,k=N.geometry,B=A.isMeshStandardMaterial?O.environment:null,Y=(A.isMeshStandardMaterial?t:e).get(A.envMap||B),G=Y&&Y.mapping===ya?Y.image.height:null,K=g[A.type];A.precision!==null&&(f=i.getMaxPrecision(A.precision),f!==A.precision&&Ae("WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));const ie=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,me=ie!==void 0?ie.length:0;let oe=0;k.morphAttributes.position!==void 0&&(oe=1),k.morphAttributes.normal!==void 0&&(oe=2),k.morphAttributes.color!==void 0&&(oe=3);let Qe,rt,at,Z;if(K){const ut=Gn[K];Qe=ut.vertexShader,rt=ut.fragmentShader}else Qe=A.vertexShader,rt=A.fragmentShader,l.update(A),at=l.getVertexShaderID(A),Z=l.getFragmentShaderID(A);const ee=r.getRenderTarget(),ye=r.state.buffers.depth.getReversed(),He=N.isInstancedMesh===!0,Ce=N.isBatchedMesh===!0,Ye=!!A.map,Ot=!!A.matcap,qe=!!Y,yt=!!A.aoMap,F=!!A.lightMap,Ke=!!A.bumpMap,Ze=!!A.normalMap,mt=!!A.displacementMap,we=!!A.emissiveMap,bt=!!A.metalnessMap,Le=!!A.roughnessMap,ze=A.anisotropy>0,L=A.clearcoat>0,T=A.dispersion>0,X=A.iridescence>0,J=A.sheen>0,te=A.transmission>0,$=ze&&!!A.anisotropyMap,Te=L&&!!A.clearcoatMap,ue=L&&!!A.clearcoatNormalMap,Pe=L&&!!A.clearcoatRoughnessMap,Se=X&&!!A.iridescenceMap,ne=X&&!!A.iridescenceThicknessMap,ae=J&&!!A.sheenColorMap,Fe=J&&!!A.sheenRoughnessMap,De=!!A.specularMap,ge=!!A.specularColorMap,Oe=!!A.specularIntensityMap,U=te&&!!A.transmissionMap,de=te&&!!A.thicknessMap,le=!!A.gradientMap,ce=!!A.alphaMap,se=A.alphaTest>0,Q=!!A.alphaHash,_e=!!A.extensions;let ke=zi;A.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ke=r.toneMapping);const gt={shaderID:K,shaderType:A.type,shaderName:A.name,vertexShader:Qe,fragmentShader:rt,defines:A.defines,customVertexShaderID:at,customFragmentShaderID:Z,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&N._colorsTexture!==null,instancing:He,instancingColor:He&&N.instanceColor!==null,instancingMorph:He&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Yt,alphaToCoverage:!!A.alphaToCoverage,map:Ye,matcap:Ot,envMap:qe,envMapMode:qe&&Y.mapping,envMapCubeUVHeight:G,aoMap:yt,lightMap:F,bumpMap:Ke,normalMap:Ze,displacementMap:d&&mt,emissiveMap:we,normalMapObjectSpace:Ze&&A.normalMapType===cm,normalMapTangentSpace:Ze&&A.normalMapType===_a,metalnessMap:bt,roughnessMap:Le,anisotropy:ze,anisotropyMap:$,clearcoat:L,clearcoatMap:Te,clearcoatNormalMap:ue,clearcoatRoughnessMap:Pe,dispersion:T,iridescence:X,iridescenceMap:Se,iridescenceThicknessMap:ne,sheen:J,sheenColorMap:ae,sheenRoughnessMap:Fe,specularMap:De,specularColorMap:ge,specularIntensityMap:Oe,transmission:te,transmissionMap:U,thicknessMap:de,gradientMap:le,opaque:A.transparent===!1&&A.blending===Gs&&A.alphaToCoverage===!1,alphaMap:ce,alphaTest:se,alphaHash:Q,combine:A.combine,mapUv:Ye&&x(A.map.channel),aoMapUv:yt&&x(A.aoMap.channel),lightMapUv:F&&x(A.lightMap.channel),bumpMapUv:Ke&&x(A.bumpMap.channel),normalMapUv:Ze&&x(A.normalMap.channel),displacementMapUv:mt&&x(A.displacementMap.channel),emissiveMapUv:we&&x(A.emissiveMap.channel),metalnessMapUv:bt&&x(A.metalnessMap.channel),roughnessMapUv:Le&&x(A.roughnessMap.channel),anisotropyMapUv:$&&x(A.anisotropyMap.channel),clearcoatMapUv:Te&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&x(A.sheenRoughnessMap.channel),specularMapUv:De&&x(A.specularMap.channel),specularColorMapUv:ge&&x(A.specularColorMap.channel),specularIntensityMapUv:Oe&&x(A.specularIntensityMap.channel),transmissionMapUv:U&&x(A.transmissionMap.channel),thicknessMapUv:de&&x(A.thicknessMap.channel),alphaMapUv:ce&&x(A.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ze||ze),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(Ye||ce),fog:!!z,useFog:A.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ye&&A.map.isVideoTexture===!0&&tt.getTransfer(A.map.colorSpace)===ft,decodeVideoTextureEmissive:we&&A.emissiveMap.isVideoTexture===!0&&tt.getTransfer(A.emissiveMap.colorSpace)===ft,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===fn,flipSided:A.side===en,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:_e&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&A.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function p(A){const M=[];if(A.shaderID?M.push(A.shaderID):(M.push(A.customVertexShaderID),M.push(A.customFragmentShaderID)),A.defines!==void 0)for(const I in A.defines)M.push(I),M.push(A.defines[I]);return A.isRawShaderMaterial===!1&&(v(M,A),y(M,A),M.push(r.outputColorSpace)),M.push(A.customProgramCacheKey),M.join()}function v(A,M){A.push(M.precision),A.push(M.outputColorSpace),A.push(M.envMapMode),A.push(M.envMapCubeUVHeight),A.push(M.mapUv),A.push(M.alphaMapUv),A.push(M.lightMapUv),A.push(M.aoMapUv),A.push(M.bumpMapUv),A.push(M.normalMapUv),A.push(M.displacementMapUv),A.push(M.emissiveMapUv),A.push(M.metalnessMapUv),A.push(M.roughnessMapUv),A.push(M.anisotropyMapUv),A.push(M.clearcoatMapUv),A.push(M.clearcoatNormalMapUv),A.push(M.clearcoatRoughnessMapUv),A.push(M.iridescenceMapUv),A.push(M.iridescenceThicknessMapUv),A.push(M.sheenColorMapUv),A.push(M.sheenRoughnessMapUv),A.push(M.specularMapUv),A.push(M.specularColorMapUv),A.push(M.specularIntensityMapUv),A.push(M.transmissionMapUv),A.push(M.thicknessMapUv),A.push(M.combine),A.push(M.fogExp2),A.push(M.sizeAttenuation),A.push(M.morphTargetsCount),A.push(M.morphAttributeCount),A.push(M.numDirLights),A.push(M.numPointLights),A.push(M.numSpotLights),A.push(M.numSpotLightMaps),A.push(M.numHemiLights),A.push(M.numRectAreaLights),A.push(M.numDirLightShadows),A.push(M.numPointLightShadows),A.push(M.numSpotLightShadows),A.push(M.numSpotLightShadowsWithMaps),A.push(M.numLightProbes),A.push(M.shadowMapType),A.push(M.toneMapping),A.push(M.numClippingPlanes),A.push(M.numClipIntersection),A.push(M.depthPacking)}function y(A,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),A.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),A.push(a.mask)}function _(A){const M=g[A.type];let I;if(M){const O=Gn[M];I=Tf.clone(O.uniforms)}else I=A.uniforms;return I}function E(A,M){let I;for(let O=0,N=h.length;O<N;O++){const z=h[O];if(z.cacheKey===M){I=z,++I.usedTimes;break}}return I===void 0&&(I=new o_(r,M,A,s),h.push(I)),I}function w(A){if(--A.usedTimes===0){const M=h.indexOf(A);h[M]=h[h.length-1],h.pop(),A.destroy()}}function R(A){l.remove(A)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:D}}function u_(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function d_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function $u(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||d_),n.length>1&&n.sort(d||$u),i.length>1&&i.sort(d||$u)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function f_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Yu,r.set(n,[o])):i>=s.length?(o=new Yu,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function p_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ee};break;case"SpotLight":t={position:new P,direction:new P,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function m_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let g_=0;function x_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function v_(r){const e=new p_,t=m_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,s=new Ve,o=new Ve;function a(c){let h=0,u=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,y=0,_=0,E=0,w=0,R=0;c.sort(x_);for(let A=0,M=c.length;A<M;A++){const I=c[A],O=I.color,N=I.intensity,z=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*N,u+=O.g*N,d+=O.b*N;else if(I.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(I.sh.coefficients[B],N);R++}else if(I.isDirectionalLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Y=I.shadow,G=t.get(I);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=B,f++}else if(I.isSpotLight){const B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(O).multiplyScalar(N),B.distance=z,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,n.spot[x]=B;const Y=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,Y.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[x]=Y.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=k,_++}x++}else if(I.isRectAreaLight){const B=e.get(I);B.color.copy(O).multiplyScalar(N),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=B,m++}else if(I.isPointLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){const Y=I.shadow,G=t.get(I);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=B,g++}else if(I.isHemisphereLight){const B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(N),B.groundColor.copy(I.groundColor).multiplyScalar(N),n.hemi[p]=B,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==v||D.numPointShadows!==y||D.numSpotShadows!==_||D.numSpotMaps!==E||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=v,D.numPointShadows=y,D.numSpotShadows=_,D.numSpotMaps=E,D.numLightProbes=R,n.version=g_++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Ku(r){const e=new v_(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function y_(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Ku(r),e.set(i,[a])):s>=o.length?(a=new Ku(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
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
}`;function w_(r,e,t){let n=new eh;const i=new Be,s=new Be,o=new ot,a=new gg({depthPacking:lm}),l=new xg,c={},h=t.maxTextureSize,u={[wi]:en,[en]:wi,[fn]:fn},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:__,fragmentShader:b_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let p=this.type;this.render=function(w,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const A=r.getRenderTarget(),M=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Kn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=p!==kn&&this.type===kn,z=p===kn&&this.type!==kn;for(let k=0,B=w.length;k<B;k++){const Y=w[k],G=Y.shadow;if(G===void 0){Ae("WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const K=G.getFrameExtents();if(i.multiply(K),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,G.mapSize.y=s.y)),G.map===null||N===!0||z===!0){const me=this.type!==kn?{minFilter:$t,magFilter:$t}:{};G.map!==null&&G.map.dispose(),G.map=new Gi(i.x,i.y,me),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ie=G.getViewportCount();for(let me=0;me<ie;me++){const oe=G.getViewport(me);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),O.viewport(o),G.updateMatrices(Y,me),n=G.getFrustum(),_(R,D,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===kn&&v(G,D),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(A,M,I)};function v(w,R){const D=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Gi(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(R,null,D,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(R,null,D,f,x,null)}function y(w,R,D,A){let M=null;const I=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)M=I;else if(M=D.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=M.uuid,N=R.uuid;let z=c[O];z===void 0&&(z={},c[O]=z);let k=z[N];k===void 0&&(k=M.clone(),z[N]=k,R.addEventListener("dispose",E)),M=k}if(M.visible=R.visible,M.wireframe=R.wireframe,A===kn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=r.properties.get(M);O.light=D}return M}function _(w,R,D,A,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const N=e.update(w),z=w.material;if(Array.isArray(z)){const k=N.groups;for(let B=0,Y=k.length;B<Y;B++){const G=k[B],K=z[G.materialIndex];if(K&&K.visible){const ie=y(w,K,A,M);w.onBeforeShadow(r,w,R,D,N,ie,G),r.renderBufferDirect(D,null,N,ie,w,G),w.onAfterShadow(r,w,R,D,N,ie,G)}}}else if(z.visible){const k=y(w,z,A,M);w.onBeforeShadow(r,w,R,D,N,k,null),r.renderBufferDirect(D,null,N,k,w,null),w.onAfterShadow(r,w,R,D,N,k,null)}}const O=w.children;for(let N=0,z=O.length;N<z;N++)_(O[N],R,D,A,M)}function E(w){w.target.removeEventListener("dispose",E);for(const D in c){const A=c[D],M=w.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}const M_={[Bl]:Ol,[kl]:Hl,[zl]:Gl,[$s]:Vl,[Ol]:Bl,[Hl]:kl,[Gl]:zl,[Vl]:$s};function S_(r,e){function t(){let U=!1;const de=new ot;let le=null;const ce=new ot(0,0,0,0);return{setMask:function(se){le!==se&&!U&&(r.colorMask(se,se,se,se),le=se)},setLocked:function(se){U=se},setClear:function(se,Q,_e,ke,gt){gt===!0&&(se*=ke,Q*=ke,_e*=ke),de.set(se,Q,_e,ke),ce.equals(de)===!1&&(r.clearColor(se,Q,_e,ke),ce.copy(de))},reset:function(){U=!1,le=null,ce.set(-1,0,0,0)}}}function n(){let U=!1,de=!1,le=null,ce=null,se=null;return{setReversed:function(Q){if(de!==Q){const _e=e.get("EXT_clip_control");Q?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),de=Q;const ke=se;se=null,this.setClear(ke)}},getReversed:function(){return de},setTest:function(Q){Q?ee(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(Q){le!==Q&&!U&&(r.depthMask(Q),le=Q)},setFunc:function(Q){if(de&&(Q=M_[Q]),ce!==Q){switch(Q){case Bl:r.depthFunc(r.NEVER);break;case Ol:r.depthFunc(r.ALWAYS);break;case kl:r.depthFunc(r.LESS);break;case $s:r.depthFunc(r.LEQUAL);break;case zl:r.depthFunc(r.EQUAL);break;case Vl:r.depthFunc(r.GEQUAL);break;case Hl:r.depthFunc(r.GREATER);break;case Gl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=Q}},setLocked:function(Q){U=Q},setClear:function(Q){se!==Q&&(de&&(Q=1-Q),r.clearDepth(Q),se=Q)},reset:function(){U=!1,le=null,ce=null,se=null,de=!1}}}function i(){let U=!1,de=null,le=null,ce=null,se=null,Q=null,_e=null,ke=null,gt=null;return{setTest:function(ut){U||(ut?ee(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(ut){de!==ut&&!U&&(r.stencilMask(ut),de=ut)},setFunc:function(ut,Fn,vn){(le!==ut||ce!==Fn||se!==vn)&&(r.stencilFunc(ut,Fn,vn),le=ut,ce=Fn,se=vn)},setOp:function(ut,Fn,vn){(Q!==ut||_e!==Fn||ke!==vn)&&(r.stencilOp(ut,Fn,vn),Q=ut,_e=Fn,ke=vn)},setLocked:function(ut){U=ut},setClear:function(ut){gt!==ut&&(r.clearStencil(ut),gt=ut)},reset:function(){U=!1,de=null,le=null,ce=null,se=null,Q=null,_e=null,ke=null,gt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,E=null,w=null,R=new Ee(0,0,0),D=0,A=!1,M=null,I=null,O=null,N=null,z=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=Y>=2);let K=null,ie={};const me=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),Qe=new ot().fromArray(me),rt=new ot().fromArray(oe);function at(U,de,le,ce){const se=new Uint8Array(4),Q=r.createTexture();r.bindTexture(U,Q),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let _e=0;_e<le;_e++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(de,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(de+_e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return Q}const Z={};Z[r.TEXTURE_2D]=at(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=at(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=at(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=at(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(r.DEPTH_TEST),o.setFunc($s),Ke(!1),Ze(Ih),ee(r.CULL_FACE),yt(Kn);function ee(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function ye(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function He(U,de){return u[U]!==de?(r.bindFramebuffer(U,de),u[U]=de,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=de),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=de),!0):!1}function Ce(U,de){let le=f,ce=!1;if(U){le=d.get(de),le===void 0&&(le=[],d.set(de,le));const se=U.textures;if(le.length!==se.length||le[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,_e=se.length;Q<_e;Q++)le[Q]=r.COLOR_ATTACHMENT0+Q;le.length=se.length,ce=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,ce=!0);ce&&r.drawBuffers(le)}function Ye(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const Ot={[hs]:r.FUNC_ADD,[Ip]:r.FUNC_SUBTRACT,[Dp]:r.FUNC_REVERSE_SUBTRACT};Ot[Np]=r.MIN,Ot[Fp]=r.MAX;const qe={[Up]:r.ZERO,[Bp]:r.ONE,[Op]:r.SRC_COLOR,[Fl]:r.SRC_ALPHA,[Wp]:r.SRC_ALPHA_SATURATE,[Hp]:r.DST_COLOR,[zp]:r.DST_ALPHA,[kp]:r.ONE_MINUS_SRC_COLOR,[Ul]:r.ONE_MINUS_SRC_ALPHA,[Gp]:r.ONE_MINUS_DST_COLOR,[Vp]:r.ONE_MINUS_DST_ALPHA,[Xp]:r.CONSTANT_COLOR,[qp]:r.ONE_MINUS_CONSTANT_COLOR,[jp]:r.CONSTANT_ALPHA,[$p]:r.ONE_MINUS_CONSTANT_ALPHA};function yt(U,de,le,ce,se,Q,_e,ke,gt,ut){if(U===Kn){x===!0&&(ye(r.BLEND),x=!1);return}if(x===!1&&(ee(r.BLEND),x=!0),U!==Pp){if(U!==m||ut!==A){if((p!==hs||_!==hs)&&(r.blendEquation(r.FUNC_ADD),p=hs,_=hs),ut)switch(U){case Gs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nl:r.blendFunc(r.ONE,r.ONE);break;case Dh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xe("WebGLState: Invalid blending: ",U);break}else switch(U){case Gs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Dh:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nh:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",U);break}v=null,y=null,E=null,w=null,R.set(0,0,0),D=0,m=U,A=ut}return}se=se||de,Q=Q||le,_e=_e||ce,(de!==p||se!==_)&&(r.blendEquationSeparate(Ot[de],Ot[se]),p=de,_=se),(le!==v||ce!==y||Q!==E||_e!==w)&&(r.blendFuncSeparate(qe[le],qe[ce],qe[Q],qe[_e]),v=le,y=ce,E=Q,w=_e),(ke.equals(R)===!1||gt!==D)&&(r.blendColor(ke.r,ke.g,ke.b,gt),R.copy(ke),D=gt),m=U,A=!1}function F(U,de){U.side===fn?ye(r.CULL_FACE):ee(r.CULL_FACE);let le=U.side===en;de&&(le=!le),Ke(le),U.blending===Gs&&U.transparent===!1?yt(Kn):yt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const ce=U.stencilWrite;a.setTest(ce),ce&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),we(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(U){M!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),M=U)}function Ze(U){U!==Cp?(ee(r.CULL_FACE),U!==I&&(U===Ih?r.cullFace(r.BACK):U===Rp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),I=U}function mt(U){U!==O&&(B&&r.lineWidth(U),O=U)}function we(U,de,le){U?(ee(r.POLYGON_OFFSET_FILL),(N!==de||z!==le)&&(r.polygonOffset(de,le),N=de,z=le)):ye(r.POLYGON_OFFSET_FILL)}function bt(U){U?ee(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function Le(U){U===void 0&&(U=r.TEXTURE0+k-1),K!==U&&(r.activeTexture(U),K=U)}function ze(U,de,le){le===void 0&&(K===null?le=r.TEXTURE0+k-1:le=K);let ce=ie[le];ce===void 0&&(ce={type:void 0,texture:void 0},ie[le]=ce),(ce.type!==U||ce.texture!==de)&&(K!==le&&(r.activeTexture(le),K=le),r.bindTexture(U,de||Z[U]),ce.type=U,ce.texture=de)}function L(){const U=ie[K];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function X(){try{r.compressedTexImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function J(){try{r.texSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function te(){try{r.texSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Te(){try{r.compressedTexSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function ue(){try{r.texStorage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Pe(){try{r.texStorage3D(...arguments)}catch(U){U("WebGLState:",U)}}function Se(){try{r.texImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function ne(){try{r.texImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function ae(U){Qe.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Qe.copy(U))}function Fe(U){rt.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),rt.copy(U))}function De(U,de){let le=c.get(de);le===void 0&&(le=new WeakMap,c.set(de,le));let ce=le.get(U);ce===void 0&&(ce=r.getUniformBlockIndex(de,U.name),le.set(U,ce))}function ge(U,de){const ce=c.get(de).get(U);l.get(de)!==ce&&(r.uniformBlockBinding(de,ce,U.__bindingPointIndex),l.set(de,ce))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},K=null,ie={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,E=null,w=null,R=new Ee(0,0,0),D=0,A=!1,M=null,I=null,O=null,N=null,z=null,Qe.set(0,0,r.canvas.width,r.canvas.height),rt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:ye,bindFramebuffer:He,drawBuffers:Ce,useProgram:Ye,setBlending:yt,setMaterial:F,setFlipSided:Ke,setCullFace:Ze,setLineWidth:mt,setPolygonOffset:we,setScissorTest:bt,activeTexture:Le,bindTexture:ze,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:X,texImage2D:Se,texImage3D:ne,updateUBOMapping:De,uniformBlockBinding:ge,texStorage2D:ue,texStorage3D:Pe,texSubImage2D:J,texSubImage3D:te,compressedTexSubImage2D:$,compressedTexSubImage3D:Te,scissor:ae,viewport:Fe,reset:Oe}}function E_(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return f?new OffscreenCanvas(L,T):Hr("canvas")}function x(L,T,X){let J=1;const te=ze(L);if((te.width>X||te.height>X)&&(J=X/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const $=Math.floor(J*te.width),Te=Math.floor(J*te.height);u===void 0&&(u=g($,Te));const ue=T?g($,Te):u;return ue.width=$,ue.height=Te,ue.getContext("2d").drawImage(L,0,0,$,Te),Ae("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Te+")."),ue}else return"data"in L&&Ae("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){r.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(L,T,X,J,te=!1){if(L!==null){if(r[L]!==void 0)return r[L];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let $=T;if(T===r.RED&&(X===r.FLOAT&&($=r.R32F),X===r.HALF_FLOAT&&($=r.R16F),X===r.UNSIGNED_BYTE&&($=r.R8)),T===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&($=r.R8UI),X===r.UNSIGNED_SHORT&&($=r.R16UI),X===r.UNSIGNED_INT&&($=r.R32UI),X===r.BYTE&&($=r.R8I),X===r.SHORT&&($=r.R16I),X===r.INT&&($=r.R32I)),T===r.RG&&(X===r.FLOAT&&($=r.RG32F),X===r.HALF_FLOAT&&($=r.RG16F),X===r.UNSIGNED_BYTE&&($=r.RG8)),T===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&($=r.RG8UI),X===r.UNSIGNED_SHORT&&($=r.RG16UI),X===r.UNSIGNED_INT&&($=r.RG32UI),X===r.BYTE&&($=r.RG8I),X===r.SHORT&&($=r.RG16I),X===r.INT&&($=r.RG32I)),T===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&($=r.RGB8UI),X===r.UNSIGNED_SHORT&&($=r.RGB16UI),X===r.UNSIGNED_INT&&($=r.RGB32UI),X===r.BYTE&&($=r.RGB8I),X===r.SHORT&&($=r.RGB16I),X===r.INT&&($=r.RGB32I)),T===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&($=r.RGBA8UI),X===r.UNSIGNED_SHORT&&($=r.RGBA16UI),X===r.UNSIGNED_INT&&($=r.RGBA32UI),X===r.BYTE&&($=r.RGBA8I),X===r.SHORT&&($=r.RGBA16I),X===r.INT&&($=r.RGBA32I)),T===r.RGB&&(X===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),T===r.RGBA){const Te=te?ra:tt.getTransfer(J);X===r.FLOAT&&($=r.RGBA32F),X===r.HALF_FLOAT&&($=r.RGBA16F),X===r.UNSIGNED_BYTE&&($=Te===ft?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(L,T){let X;return L?T===null||T===ms||T===Br?X=r.DEPTH24_STENCIL8:T===An?X=r.DEPTH32F_STENCIL8:T===Ur&&(X=r.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ms||T===Br?X=r.DEPTH_COMPONENT24:T===An?X=r.DEPTH_COMPONENT32F:T===Ur&&(X=r.DEPTH_COMPONENT16),X}function E(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==$t&&L.minFilter!==jt?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function w(L){const T=L.target;T.removeEventListener("dispose",w),D(T),T.isVideoTexture&&h.delete(T)}function R(L){const T=L.target;T.removeEventListener("dispose",R),M(T)}function D(L){const T=n.get(L);if(T.__webglInit===void 0)return;const X=L.source,J=d.get(X);if(J){const te=J[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&A(L),Object.keys(J).length===0&&d.delete(X)}n.remove(L)}function A(L){const T=n.get(L);r.deleteTexture(T.__webglTexture);const X=L.source,J=d.get(X);delete J[T.__cacheKey],o.memory.textures--}function M(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let te=0;te<T.__webglFramebuffer[J].length;te++)r.deleteFramebuffer(T.__webglFramebuffer[J][te]);else r.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)r.deleteFramebuffer(T.__webglFramebuffer[J]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=L.textures;for(let J=0,te=X.length;J<te;J++){const $=n.get(X[J]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(X[J])}n.remove(L)}let I=0;function O(){I=0}function N(){const L=I;return L>=i.maxTextures&&Ae("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),I+=1,L}function z(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function k(L,T){const X=n.get(L);if(L.isVideoTexture&&bt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){const J=L.image;if(J===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(X,L,T);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+T)}function B(L,T){const X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){Z(X,L,T);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+T)}function Y(L,T){const X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){Z(X,L,T);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+T)}function G(L,T){const X=n.get(L);if(L.version>0&&X.__version!==L.version){ee(X,L,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+T)}const K={[Zs]:r.REPEAT,[jn]:r.CLAMP_TO_EDGE,[sa]:r.MIRRORED_REPEAT},ie={[$t]:r.NEAREST,[uf]:r.NEAREST_MIPMAP_NEAREST,[Ar]:r.NEAREST_MIPMAP_LINEAR,[jt]:r.LINEAR,[Xo]:r.LINEAR_MIPMAP_NEAREST,[yi]:r.LINEAR_MIPMAP_LINEAR},me={[hm]:r.NEVER,[gm]:r.ALWAYS,[um]:r.LESS,[yf]:r.LEQUAL,[dm]:r.EQUAL,[mm]:r.GEQUAL,[fm]:r.GREATER,[pm]:r.NOTEQUAL};function oe(L,T){if(T.type===An&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===jt||T.magFilter===Xo||T.magFilter===Ar||T.magFilter===yi||T.minFilter===jt||T.minFilter===Xo||T.minFilter===Ar||T.minFilter===yi)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,K[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,K[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,K[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ie[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,me[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===$t||T.minFilter!==Ar&&T.minFilter!==yi||T.type===An&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Qe(L,T){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",w));const J=T.source;let te=d.get(J);te===void 0&&(te={},d.set(J,te));const $=z(T);if($!==L.__cacheKey){te[$]===void 0&&(te[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),te[$].usedTimes++;const Te=te[L.__cacheKey];Te!==void 0&&(te[L.__cacheKey].usedTimes--,Te.usedTimes===0&&A(T)),L.__cacheKey=$,L.__webglTexture=te[$].texture}return X}function rt(L,T,X){return Math.floor(Math.floor(L/X)/T)}function at(L,T,X,J){const $=L.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,X,J,T.data);else{$.sort((ne,ae)=>ne.start-ae.start);let Te=0;for(let ne=1;ne<$.length;ne++){const ae=$[Te],Fe=$[ne],De=ae.start+ae.count,ge=rt(Fe.start,T.width,4),Oe=rt(ae.start,T.width,4);Fe.start<=De+1&&ge===Oe&&rt(Fe.start+Fe.count-1,T.width,4)===ge?ae.count=Math.max(ae.count,Fe.start+Fe.count-ae.start):(++Te,$[Te]=Fe)}$.length=Te+1;const ue=r.getParameter(r.UNPACK_ROW_LENGTH),Pe=r.getParameter(r.UNPACK_SKIP_PIXELS),Se=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let ne=0,ae=$.length;ne<ae;ne++){const Fe=$[ne],De=Math.floor(Fe.start/4),ge=Math.ceil(Fe.count/4),Oe=De%T.width,U=Math.floor(De/T.width),de=ge,le=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,Oe,U,de,le,X,J,T.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Se)}}function Z(L,T,X){let J=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=r.TEXTURE_3D);const te=Qe(L,T),$=T.source;t.bindTexture(J,L.__webglTexture,r.TEXTURE0+X);const Te=n.get($);if($.version!==Te.__version||te===!0){t.activeTexture(r.TEXTURE0+X);const ue=tt.getPrimaries(tt.workingColorSpace),Pe=T.colorSpace===Ui?null:tt.getPrimaries(T.colorSpace),Se=T.colorSpace===Ui||ue===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ne=x(T.image,!1,i.maxTextureSize);ne=Le(T,ne);const ae=s.convert(T.format,T.colorSpace),Fe=s.convert(T.type);let De=y(T.internalFormat,ae,Fe,T.colorSpace,T.isVideoTexture);oe(J,T);let ge;const Oe=T.mipmaps,U=T.isVideoTexture!==!0,de=Te.__version===void 0||te===!0,le=$.dataReady,ce=E(T,ne);if(T.isDepthTexture)De=_(T.format===kr,T.type),de&&(U?t.texStorage2D(r.TEXTURE_2D,1,De,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,De,ne.width,ne.height,0,ae,Fe,null));else if(T.isDataTexture)if(Oe.length>0){U&&de&&t.texStorage2D(r.TEXTURE_2D,ce,De,Oe[0].width,Oe[0].height);for(let se=0,Q=Oe.length;se<Q;se++)ge=Oe[se],U?le&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,ge.width,ge.height,ae,Fe,ge.data):t.texImage2D(r.TEXTURE_2D,se,De,ge.width,ge.height,0,ae,Fe,ge.data);T.generateMipmaps=!1}else U?(de&&t.texStorage2D(r.TEXTURE_2D,ce,De,ne.width,ne.height),le&&at(T,ne,ae,Fe)):t.texImage2D(r.TEXTURE_2D,0,De,ne.width,ne.height,0,ae,Fe,ne.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){U&&de&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,De,Oe[0].width,Oe[0].height,ne.depth);for(let se=0,Q=Oe.length;se<Q;se++)if(ge=Oe[se],T.format!==pn)if(ae!==null)if(U){if(le)if(T.layerUpdates.size>0){const _e=Au(ge.width,ge.height,T.format,T.type);for(const ke of T.layerUpdates){const gt=ge.data.subarray(ke*_e/ge.data.BYTES_PER_ELEMENT,(ke+1)*_e/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,ke,ge.width,ge.height,1,ae,gt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,ne.depth,ae,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,De,ge.width,ge.height,ne.depth,0,ge.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?le&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,ne.depth,ae,Fe,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,De,ge.width,ge.height,ne.depth,0,ae,Fe,ge.data)}else{U&&de&&t.texStorage2D(r.TEXTURE_2D,ce,De,Oe[0].width,Oe[0].height);for(let se=0,Q=Oe.length;se<Q;se++)ge=Oe[se],T.format!==pn?ae!==null?U?le&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,ge.width,ge.height,ae,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,se,De,ge.width,ge.height,0,ge.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?le&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,ge.width,ge.height,ae,Fe,ge.data):t.texImage2D(r.TEXTURE_2D,se,De,ge.width,ge.height,0,ae,Fe,ge.data)}else if(T.isDataArrayTexture)if(U){if(de&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,De,ne.width,ne.height,ne.depth),le)if(T.layerUpdates.size>0){const se=Au(ne.width,ne.height,T.format,T.type);for(const Q of T.layerUpdates){const _e=ne.data.subarray(Q*se/ne.data.BYTES_PER_ELEMENT,(Q+1)*se/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,ae,Fe,_e)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ae,Fe,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,ne.width,ne.height,ne.depth,0,ae,Fe,ne.data);else if(T.isData3DTexture)U?(de&&t.texStorage3D(r.TEXTURE_3D,ce,De,ne.width,ne.height,ne.depth),le&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ae,Fe,ne.data)):t.texImage3D(r.TEXTURE_3D,0,De,ne.width,ne.height,ne.depth,0,ae,Fe,ne.data);else if(T.isFramebufferTexture){if(de)if(U)t.texStorage2D(r.TEXTURE_2D,ce,De,ne.width,ne.height);else{let se=ne.width,Q=ne.height;for(let _e=0;_e<ce;_e++)t.texImage2D(r.TEXTURE_2D,_e,De,se,Q,0,ae,Fe,null),se>>=1,Q>>=1}}else if(Oe.length>0){if(U&&de){const se=ze(Oe[0]);t.texStorage2D(r.TEXTURE_2D,ce,De,se.width,se.height)}for(let se=0,Q=Oe.length;se<Q;se++)ge=Oe[se],U?le&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,ae,Fe,ge):t.texImage2D(r.TEXTURE_2D,se,De,ae,Fe,ge);T.generateMipmaps=!1}else if(U){if(de){const se=ze(ne);t.texStorage2D(r.TEXTURE_2D,ce,De,se.width,se.height)}le&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,Fe,ne)}else t.texImage2D(r.TEXTURE_2D,0,De,ae,Fe,ne);m(T)&&p(J),Te.__version=$.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ee(L,T,X){if(T.image.length!==6)return;const J=Qe(L,T),te=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+X);const $=n.get(te);if(te.version!==$.__version||J===!0){t.activeTexture(r.TEXTURE0+X);const Te=tt.getPrimaries(tt.workingColorSpace),ue=T.colorSpace===Ui?null:tt.getPrimaries(T.colorSpace),Pe=T.colorSpace===Ui||Te===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Se=T.isCompressedTexture||T.image[0].isCompressedTexture,ne=T.image[0]&&T.image[0].isDataTexture,ae=[];for(let Q=0;Q<6;Q++)!Se&&!ne?ae[Q]=x(T.image[Q],!0,i.maxCubemapSize):ae[Q]=ne?T.image[Q].image:T.image[Q],ae[Q]=Le(T,ae[Q]);const Fe=ae[0],De=s.convert(T.format,T.colorSpace),ge=s.convert(T.type),Oe=y(T.internalFormat,De,ge,T.colorSpace),U=T.isVideoTexture!==!0,de=$.__version===void 0||J===!0,le=te.dataReady;let ce=E(T,Fe);oe(r.TEXTURE_CUBE_MAP,T);let se;if(Se){U&&de&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Oe,Fe.width,Fe.height);for(let Q=0;Q<6;Q++){se=ae[Q].mipmaps;for(let _e=0;_e<se.length;_e++){const ke=se[_e];T.format!==pn?De!==null?U?le&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,ke.width,ke.height,De,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Oe,ke.width,ke.height,0,ke.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,ke.width,ke.height,De,ge,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,Oe,ke.width,ke.height,0,De,ge,ke.data)}}}else{if(se=T.mipmaps,U&&de){se.length>0&&ce++;const Q=ze(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Oe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){U?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ae[Q].width,ae[Q].height,De,ge,ae[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Oe,ae[Q].width,ae[Q].height,0,De,ge,ae[Q].data);for(let _e=0;_e<se.length;_e++){const gt=se[_e].image[Q].image;U?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,gt.width,gt.height,De,ge,gt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Oe,gt.width,gt.height,0,De,ge,gt.data)}}else{U?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,De,ge,ae[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Oe,De,ge,ae[Q]);for(let _e=0;_e<se.length;_e++){const ke=se[_e];U?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,De,ge,ke.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,Oe,De,ge,ke.image[Q])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),$.__version=te.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ye(L,T,X,J,te,$){const Te=s.convert(X.format,X.colorSpace),ue=s.convert(X.type),Pe=y(X.internalFormat,Te,ue,X.colorSpace),Se=n.get(T),ne=n.get(X);if(ne.__renderTarget=T,!Se.__hasExternalTextures){const ae=Math.max(1,T.width>>$),Fe=Math.max(1,T.height>>$);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,$,Pe,ae,Fe,T.depth,0,Te,ue,null):t.texImage2D(te,$,Pe,ae,Fe,0,Te,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),we(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,te,ne.__webglTexture,0,mt(T)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,te,ne.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function He(L,T,X){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer){const J=T.depthTexture,te=J&&J.isDepthTexture?J.type:null,$=_(T.stencilBuffer,te),Te=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=mt(T);we(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,$,T.width,T.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,$,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,$,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,L)}else{const J=T.textures;for(let te=0;te<J.length;te++){const $=J[te],Te=s.convert($.format,$.colorSpace),ue=s.convert($.type),Pe=y($.internalFormat,Te,ue,$.colorSpace),Se=mt(T);X&&we(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,Pe,T.width,T.height):we(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,Pe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Pe,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(T.depthTexture);J.__renderTarget=T,(!J.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const te=J.__webglTexture,$=mt(T);if(T.depthTexture.format===Or)we(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(T.depthTexture.format===kr)we(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ye(L){const T=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){const te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),T.__depthDisposeCallback=te}T.__boundDepthTexture=J}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const J=L.texture.mipmaps;J&&J.length>0?Ce(T.__webglFramebuffer[0],L):Ce(T.__webglFramebuffer,L)}else if(X){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=r.createRenderbuffer(),He(T.__webglDepthbuffer[J],L,!1);else{const te=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,$)}}else{const J=L.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),He(T.__webglDepthbuffer,L,!1);else{const te=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(L,T,X){const J=n.get(L);T!==void 0&&ye(J.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Ye(L)}function qe(L){const T=L.texture,X=n.get(L),J=n.get(T);L.addEventListener("dispose",R);const te=L.textures,$=L.isWebGLCubeRenderTarget===!0,Te=te.length>1;if(Te||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=T.version,o.memory.textures++),$){X.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[ue]=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)X.__webglFramebuffer[ue][Pe]=r.createFramebuffer()}else X.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)X.__webglFramebuffer[ue]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Te)for(let ue=0,Pe=te.length;ue<Pe;ue++){const Se=n.get(te[ue]);Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&we(L)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const Pe=te[ue];X.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[ue]);const Se=s.convert(Pe.format,Pe.colorSpace),ne=s.convert(Pe.type),ae=y(Pe.internalFormat,Se,ne,Pe.colorSpace,L.isXRRenderTarget===!0),Fe=mt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,ae,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,X.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),He(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),oe(r.TEXTURE_CUBE_MAP,T);for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)ye(X.__webglFramebuffer[ue][Pe],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe);else ye(X.__webglFramebuffer[ue],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(T)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ue=0,Pe=te.length;ue<Pe;ue++){const Se=te[ue],ne=n.get(Se);let ae=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ae=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,ne.__webglTexture),oe(ae,Se),ye(X.__webglFramebuffer,L,Se,r.COLOR_ATTACHMENT0+ue,ae,0),m(Se)&&p(ae)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,J.__webglTexture),oe(ue,T),T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)ye(X.__webglFramebuffer[Pe],L,T,r.COLOR_ATTACHMENT0,ue,Pe);else ye(X.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,ue,0);m(T)&&p(ue),t.unbindTexture()}L.depthBuffer&&Ye(L)}function yt(L){const T=L.textures;for(let X=0,J=T.length;X<J;X++){const te=T[X];if(m(te)){const $=v(L),Te=n.get(te).__webglTexture;t.bindTexture($,Te),p($),t.unbindTexture()}}}const F=[],Ke=[];function Ze(L){if(L.samples>0){if(we(L)===!1){const T=L.textures,X=L.width,J=L.height;let te=r.COLOR_BUFFER_BIT;const $=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=n.get(L),ue=T.length>1;if(ue)for(let Se=0;Se<T.length;Se++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Pe=L.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<T.length;Se++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const ne=n.get(T[Se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,X,J,0,0,X,J,te,r.NEAREST),l===!0&&(F.length=0,Ke.length=0,F.push(r.COLOR_ATTACHMENT0+Se),L.depthBuffer&&L.resolveDepthBuffer===!1&&(F.push($),Ke.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ke)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Se=0;Se<T.length;Se++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const ne=n.get(T[Se]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function mt(L){return Math.min(i.maxSamples,L.samples)}function we(L){const T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function bt(L){const T=o.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function Le(L,T){const X=L.colorSpace,J=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Yt&&X!==Ui&&(tt.getTransfer(X)===ft?(J!==pn||te!==Qn)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",X)),T}function ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=Ot,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=we}function T_(r,e){function t(n,i=Ui){let s;const o=tt.getTransfer(i);if(n===Qn)return r.UNSIGNED_BYTE;if(n===zc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Vc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===pf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===mf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===df)return r.BYTE;if(n===ff)return r.SHORT;if(n===Ur)return r.UNSIGNED_SHORT;if(n===kc)return r.INT;if(n===ms)return r.UNSIGNED_INT;if(n===An)return r.FLOAT;if(n===xs)return r.HALF_FLOAT;if(n===gf)return r.ALPHA;if(n===xf)return r.RGB;if(n===pn)return r.RGBA;if(n===Or)return r.DEPTH_COMPONENT;if(n===kr)return r.DEPTH_STENCIL;if(n===Hc)return r.RED;if(n===Gc)return r.RED_INTEGER;if(n===Wc)return r.RG;if(n===Xc)return r.RG_INTEGER;if(n===qc)return r.RGBA_INTEGER;if(n===qo||n===jo||n===$o||n===Yo)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ql||n===jl||n===$l||n===Yl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$l)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===Zl||n===Jl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Kl||n===Zl)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Jl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ql)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fc||n===pc||n===mc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===fc)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gc||n===xc||n===vc||n===yc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===gc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===xc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C_=`
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

}`;class R_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Pf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:A_,fragmentShader:C_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L_ extends or{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new R_,p={},v=t.getContextAttributes();let y=null,_=null;const E=[],w=[],R=new Be;let D=null;const A=new Ht;A.viewport=new ot;const M=new Ht;M.viewport=new ot;const I=[A,M],O=new Og;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=E[Z];return ee===void 0&&(ee=new nl,E[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=E[Z];return ee===void 0&&(ee=new nl,E[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=E[Z];return ee===void 0&&(ee=new nl,E[Z]=ee),ee.getHandSpace()};function k(Z){const ee=w.indexOf(Z.inputSource);if(ee===-1)return;const ye=E[ee];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,c||o),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<E.length;Z++){const ee=w[Z];ee!==null&&(w[Z]=null,E[Z].disconnect(ee))}N=null,z=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(y),f=null,d=null,u=null,i=null,_=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",B),i.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,He=null,Ce=null;v.depth&&(Ce=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=v.stencil?kr:Or,He=v.stencil?Br:ms);const Ye={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Gi(d.textureWidth,d.textureHeight,{format:pn,type:Qn,depthTexture:new Lf(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Gi(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(Z){for(let ee=0;ee<Z.removed.length;ee++){const ye=Z.removed[ee],He=w.indexOf(ye);He>=0&&(w[He]=null,E[He].disconnect(ye))}for(let ee=0;ee<Z.added.length;ee++){const ye=Z.added[ee];let He=w.indexOf(ye);if(He===-1){for(let Ye=0;Ye<E.length;Ye++)if(Ye>=w.length){w.push(ye),He=Ye;break}else if(w[Ye]===null){w[Ye]=ye,He=Ye;break}if(He===-1)break}const Ce=E[He];Ce&&Ce.connect(ye)}}const G=new P,K=new P;function ie(Z,ee,ye){G.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ye.matrixWorld);const He=G.distanceTo(K),Ce=ee.projectionMatrix.elements,Ye=ye.projectionMatrix.elements,Ot=Ce[14]/(Ce[10]-1),qe=Ce[14]/(Ce[10]+1),yt=(Ce[9]+1)/Ce[5],F=(Ce[9]-1)/Ce[5],Ke=(Ce[8]-1)/Ce[0],Ze=(Ye[8]+1)/Ye[0],mt=Ot*Ke,we=Ot*Ze,bt=He/(-Ke+Ze),Le=bt*-Ke;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Le),Z.translateZ(bt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ce[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ze=Ot+bt,L=qe+bt,T=mt-Le,X=we+(He-Le),J=yt*qe/L*ze,te=F*qe/L*ze;Z.projectionMatrix.makePerspective(T,X,J,te,ze,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function me(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ee=Z.near,ye=Z.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),O.near=M.near=A.near=ee,O.far=M.far=A.far=ye,(N!==O.near||z!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),N=O.near,z=O.far),O.layers.mask=Z.layers.mask|6,A.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const He=Z.parent,Ce=O.cameras;me(O,He);for(let Ye=0;Ye<Ce.length;Ye++)me(Ce[Ye],He);Ce.length===2?ie(O,A,M):O.projectionMatrix.copy(A.projectionMatrix),oe(Z,O,He)};function oe(Z,ee,ye){ye===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Js*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return p[Z]};let Qe=null;function rt(Z,ee){if(h=ee.getViewerPose(c||o),g=ee,h!==null){const ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let He=!1;ye.length!==O.cameras.length&&(O.cameras.length=0,He=!0);for(let qe=0;qe<ye.length;qe++){const yt=ye[qe];let F=null;if(f!==null)F=f.getViewport(yt);else{const Ze=u.getViewSubImage(d,yt);F=Ze.viewport,qe===0&&(e.setRenderTargetTextures(_,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(_))}let Ke=I[qe];Ke===void 0&&(Ke=new Ht,Ke.layers.enable(qe),Ke.viewport=new ot,I[qe]=Ke),Ke.matrix.fromArray(yt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(yt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(F.x,F.y,F.width,F.height),qe===0&&(O.matrix.copy(Ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),He===!0&&O.cameras.push(Ke)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const qe=u.getDepthInformation(ye[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,i.renderState)}if(Ce&&Ce.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let qe=0;qe<ye.length;qe++){const yt=ye[qe].camera;if(yt){let F=p[yt];F||(F=new Pf,p[yt]=F);const Ke=u.getCameraImage(yt);F.sourceTexture=Ke}}}}for(let ye=0;ye<E.length;ye++){const He=w[ye],Ce=E[ye];He!==null&&Ce!==void 0&&Ce.update(He,ee,c||o)}Qe&&Qe(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const at=new Ff;at.setAnimationLoop(rt),this.setAnimationLoop=function(Z){Qe=Z},this.dispose=function(){}}}const ss=new gn,P_=new Ve;function I_(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ef(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,ss.copy(_),ss.x*=-1,ss.y*=-1,ss.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),m.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(ss)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function D_(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const _=y.program;n.uniformBlockBinding(v,_)}function c(v,y){let _=i[v.id];_===void 0&&(g(v),_=h(v),i[v.id]=_,v.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(v,E);const w=e.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function h(v){const y=u();v.__bindingPointIndex=y;const _=r.createBuffer(),E=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],_=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,R=_.length;w<R;w++){const D=Array.isArray(_[w])?_[w]:[_[w]];for(let A=0,M=D.length;A<M;A++){const I=D[A];if(f(I,w,A,E)===!0){const O=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let z=0;for(let k=0;k<N.length;k++){const B=N[k],Y=x(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,O+z,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,_,E){const w=v.value,R=y+"_"+_;if(E[R]===void 0)return typeof w=="number"||typeof w=="boolean"?E[R]=w:E[R]=w.clone(),!0;{const D=E[R];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return E[R]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(v){const y=v.uniforms;let _=0;const E=16;for(let R=0,D=y.length;R<D;R++){const A=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,I=A.length;M<I;M++){const O=A[M],N=Array.isArray(O.value)?O.value:[O.value];for(let z=0,k=N.length;z<k;z++){const B=N[z],Y=x(B),G=_%E,K=G%Y.boundary,ie=G+K;_+=K,ie!==0&&E-ie<Y.storage&&(_+=E-ie),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=Y.storage}}}const w=_%E;return w>0&&(_+=E-w),v.__size=_,v.__cache={},this}function x(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}const N_=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ui=null;function F_(){return ui===null&&(ui=new Jc(N_,32,32,Wc,xs),ui.minFilter=jt,ui.magFilter=jt,ui.wrapS=jn,ui.wrapT=jn,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class Zu{constructor(e={}){const{canvas:t=xm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Set([qc,Xc,Gc]),x=new Set([Qn,ms,Ur,Br,zc,Vc]),m=new Uint32Array(4),p=new Int32Array(4);let v=null,y=null;const _=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let R=!1;this._outputColorSpace=Ut;let D=0,A=0,M=null,I=-1,O=null;const N=new ot,z=new ot;let k=null;const B=new Ee(0);let Y=0,G=t.width,K=t.height,ie=1,me=null,oe=null;const Qe=new ot(0,0,G,K),rt=new ot(0,0,G,K);let at=!1;const Z=new eh;let ee=!1,ye=!1;const He=new Ve,Ce=new P,Ye=new ot,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function yt(){return M===null?ie:1}let F=n;function Ke(C,V){return t.getContext(C,V)}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",_e,!1),F===null){const V="webgl2";if(F=Ke(V,C),F===null)throw Ke(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw C("WebGLRenderer: "+C.message),C}let Ze,mt,we,bt,Le,ze,L,T,X,J,te,$,Te,ue,Pe,Se,ne,ae,Fe,De,ge,Oe,U,de;function le(){Ze=new Wv(F),Ze.init(),Oe=new T_(F,Ze),mt=new Fv(F,Ze,e,Oe),we=new S_(F,Ze),mt.reversedDepthBuffer&&d&&we.buffers.depth.setReversed(!0),bt=new jv(F),Le=new u_,ze=new E_(F,Ze,we,Le,mt,Oe,bt),L=new Bv(w),T=new Gv(w),X=new Zg(F),U=new Dv(F,X),J=new Xv(F,X,bt,U),te=new Yv(F,J,X,bt),Fe=new $v(F,mt,ze),Se=new Uv(Le),$=new h_(w,L,T,Ze,mt,U,Se),Te=new I_(w,Le),ue=new f_,Pe=new y_(Ze),ae=new Iv(w,L,T,we,te,f,l),ne=new w_(w,te,mt),de=new D_(F,bt,mt,we),De=new Nv(F,Ze,bt),ge=new qv(F,Ze,bt),bt.programs=$.programs,w.capabilities=mt,w.extensions=Ze,w.properties=Le,w.renderLists=ue,w.shadowMap=ne,w.state=we,w.info=bt}le();const ce=new L_(w,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=Ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(C){C!==void 0&&(ie=C,this.setSize(G,K,!1))},this.getSize=function(C){return C.set(G,K)},this.setSize=function(C,V,q=!0){if(ce.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,K=V,t.width=Math.floor(C*ie),t.height=Math.floor(V*ie),q===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(G*ie,K*ie).floor()},this.setDrawingBufferSize=function(C,V,q){G=C,K=V,ie=q,t.width=Math.floor(C*q),t.height=Math.floor(V*q),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(Qe)},this.setViewport=function(C,V,q,j){C.isVector4?Qe.set(C.x,C.y,C.z,C.w):Qe.set(C,V,q,j),we.viewport(N.copy(Qe).multiplyScalar(ie).round())},this.getScissor=function(C){return C.copy(rt)},this.setScissor=function(C,V,q,j){C.isVector4?rt.set(C.x,C.y,C.z,C.w):rt.set(C,V,q,j),we.scissor(z.copy(rt).multiplyScalar(ie).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(C){we.setScissorTest(at=C)},this.setOpaqueSort=function(C){me=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,q=!0){let j=0;if(C){let H=!1;if(M!==null){const re=M.texture.format;H=g.has(re)}if(H){const re=M.texture.type,fe=x.has(re),be=ae.getClearColor(),ve=ae.getClearAlpha(),Ne=be.r,Ue=be.g,Re=be.b;fe?(m[0]=Ne,m[1]=Ue,m[2]=Re,m[3]=ve,F.clearBufferuiv(F.COLOR,0,m)):(p[0]=Ne,p[1]=Ue,p[2]=Re,p[3]=ve,F.clearBufferiv(F.COLOR,0,p))}else j|=F.COLOR_BUFFER_BIT}V&&(j|=F.DEPTH_BUFFER_BIT),q&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ae.dispose(),ue.dispose(),Pe.dispose(),Le.dispose(),L.dispose(),T.dispose(),te.dispose(),U.dispose(),de.dispose(),$.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Eh),ce.removeEventListener("sessionend",Th),Zi.stop()};function se(C){C.preventDefault(),aa("WebGLRenderer: Context Lost."),R=!0}function Q(){aa("WebGLRenderer: Context Restored."),R=!1;const C=bt.autoReset,V=ne.enabled,q=ne.autoUpdate,j=ne.needsUpdate,H=ne.type;le(),bt.autoReset=C,ne.enabled=V,ne.autoUpdate=q,ne.needsUpdate=j,ne.type=H}function _e(C){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ke(C){const V=C.target;V.removeEventListener("dispose",ke),gt(V)}function gt(C){ut(C),Le.remove(C)}function ut(C){const V=Le.get(C).programs;V!==void 0&&(V.forEach(function(q){$.releaseProgram(q)}),C.isShaderMaterial&&$.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,q,j,H,re){V===null&&(V=Ot);const fe=H.isMesh&&H.matrixWorld.determinant()<0,be=_p(C,V,q,j,H);we.setMaterial(j,fe);let ve=q.index,Ne=1;if(j.wireframe===!0){if(ve=J.getWireframeAttribute(q),ve===void 0)return;Ne=2}const Ue=q.drawRange,Re=q.attributes.position;let Je=Ue.start*Ne,dt=(Ue.start+Ue.count)*Ne;re!==null&&(Je=Math.max(Je,re.start*Ne),dt=Math.min(dt,(re.start+re.count)*Ne)),ve!==null?(Je=Math.max(Je,0),dt=Math.min(dt,ve.count)):Re!=null&&(Je=Math.max(Je,0),dt=Math.min(dt,Re.count));const St=dt-Je;if(St<0||St===1/0)return;U.setup(H,j,be,q,ve);let Et,pt=De;if(ve!==null&&(Et=X.get(ve),pt=ge,pt.setIndex(Et)),H.isMesh)j.wireframe===!0?(we.setLineWidth(j.wireframeLinewidth*yt()),pt.setMode(F.LINES)):pt.setMode(F.TRIANGLES);else if(H.isLine){let Ie=j.linewidth;Ie===void 0&&(Ie=1),we.setLineWidth(Ie*yt()),H.isLineSegments?pt.setMode(F.LINES):H.isLineLoop?pt.setMode(F.LINE_LOOP):pt.setMode(F.LINE_STRIP)}else H.isPoints?pt.setMode(F.POINTS):H.isSprite&&pt.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Gr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ie=H._multiDrawStarts,wt=H._multiDrawCounts,nt=H._multiDrawCount,nn=ve?X.get(ve).bytesPerElement:1,bs=Le.get(j).currentProgram.getUniforms();for(let sn=0;sn<nt;sn++)bs.setValue(F,"_gl_DrawID",sn),pt.render(Ie[sn]/nn,wt[sn])}else if(H.isInstancedMesh)pt.renderInstances(Je,St,H.count);else if(q.isInstancedBufferGeometry){const Ie=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,wt=Math.min(q.instanceCount,Ie);pt.renderInstances(Je,St,wt)}else pt.render(Je,St)};function Fn(C,V,q){C.transparent===!0&&C.side===fn&&C.forceSinglePass===!1?(C.side=en,C.needsUpdate=!0,so(C,V,q),C.side=wi,C.needsUpdate=!0,so(C,V,q),C.side=fn):so(C,V,q)}this.compile=function(C,V,q=null){q===null&&(q=C),y=Pe.get(q),y.init(V),E.push(y),q.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),C!==q&&C.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),y.setupLights();const j=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const re=H.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const be=re[fe];Fn(be,q,H),j.add(be)}else Fn(re,q,H),j.add(re)}),y=E.pop(),j},this.compileAsync=function(C,V,q=null){const j=this.compile(C,V,q);return new Promise(H=>{function re(){if(j.forEach(function(fe){Le.get(fe).currentProgram.isReady()&&j.delete(fe)}),j.size===0){H(C);return}setTimeout(re,10)}Ze.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let vn=null;function yp(C){vn&&vn(C)}function Eh(){Zi.stop()}function Th(){Zi.start()}const Zi=new Ff;Zi.setAnimationLoop(yp),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(C){vn=C,ce.setAnimationLoop(C),C===null?Zi.stop():Zi.start()},ce.addEventListener("sessionstart",Eh),ce.addEventListener("sessionend",Th),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(V),V=ce.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,V,M),y=Pe.get(C,E.length),y.init(V),E.push(y),He.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Z.setFromProjectionMatrix(He,$n,V.reversedDepth),ye=this.localClippingEnabled,ee=Se.init(this.clippingPlanes,ye),v=ue.get(C,_.length),v.init(),_.push(v),ce.enabled===!0&&ce.isPresenting===!0){const re=w.xr.getDepthSensingMesh();re!==null&&Da(re,V,-1/0,w.sortObjects)}Da(C,V,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(me,oe),qe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,qe&&ae.addToRenderList(v,C),this.info.render.frame++,ee===!0&&Se.beginShadows();const q=y.state.shadowsArray;ne.render(q,C,V),ee===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=v.opaque,H=v.transmissive;if(y.setupLights(),V.isArrayCamera){const re=V.cameras;if(H.length>0)for(let fe=0,be=re.length;fe<be;fe++){const ve=re[fe];Ch(j,H,C,ve)}qe&&ae.render(C);for(let fe=0,be=re.length;fe<be;fe++){const ve=re[fe];Ah(v,C,ve,ve.viewport)}}else H.length>0&&Ch(j,H,C,V),qe&&ae.render(C),Ah(v,C,V);M!==null&&A===0&&(ze.updateMultisampleRenderTarget(M),ze.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(w,C,V),U.resetDefaultState(),I=-1,O=null,E.pop(),E.length>0?(y=E[E.length-1],ee===!0&&Se.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,_.pop(),_.length>0?v=_[_.length-1]:v=null};function Da(C,V,q,j){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){j&&Ye.setFromMatrixPosition(C.matrixWorld).applyMatrix4(He);const fe=te.update(C),be=C.material;be.visible&&v.push(C,fe,be,q,Ye.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const fe=te.update(C),be=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ye.copy(C.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ye.copy(fe.boundingSphere.center)),Ye.applyMatrix4(C.matrixWorld).applyMatrix4(He)),Array.isArray(be)){const ve=fe.groups;for(let Ne=0,Ue=ve.length;Ne<Ue;Ne++){const Re=ve[Ne],Je=be[Re.materialIndex];Je&&Je.visible&&v.push(C,fe,Je,q,Ye.z,Re)}}else be.visible&&v.push(C,fe,be,q,Ye.z,null)}}const re=C.children;for(let fe=0,be=re.length;fe<be;fe++)Da(re[fe],V,q,j)}function Ah(C,V,q,j){const{opaque:H,transmissive:re,transparent:fe}=C;y.setupLightsView(q),ee===!0&&Se.setGlobalState(w.clippingPlanes,q),j&&we.viewport(N.copy(j)),H.length>0&&io(H,V,q),re.length>0&&io(re,V,q),fe.length>0&&io(fe,V,q),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Ch(C,V,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[j.id]===void 0&&(y.state.transmissionRenderTarget[j.id]=new Gi(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?xs:Qn,minFilter:yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const re=y.state.transmissionRenderTarget[j.id],fe=j.viewport||N;re.setSize(fe.z*w.transmissionResolutionScale,fe.w*w.transmissionResolutionScale);const be=w.getRenderTarget(),ve=w.getActiveCubeFace(),Ne=w.getActiveMipmapLevel();w.setRenderTarget(re),w.getClearColor(B),Y=w.getClearAlpha(),Y<1&&w.setClearColor(16777215,.5),w.clear(),qe&&ae.render(q);const Ue=w.toneMapping;w.toneMapping=zi;const Re=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),y.setupLightsView(j),ee===!0&&Se.setGlobalState(w.clippingPlanes,j),io(C,q,j),ze.updateMultisampleRenderTarget(re),ze.updateRenderTargetMipmap(re),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let dt=0,St=V.length;dt<St;dt++){const Et=V[dt],{object:pt,geometry:Ie,material:wt,group:nt}=Et;if(wt.side===fn&&pt.layers.test(j.layers)){const nn=wt.side;wt.side=en,wt.needsUpdate=!0,Rh(pt,q,j,Ie,wt,nt),wt.side=nn,wt.needsUpdate=!0,Je=!0}}Je===!0&&(ze.updateMultisampleRenderTarget(re),ze.updateRenderTargetMipmap(re))}w.setRenderTarget(be,ve,Ne),w.setClearColor(B,Y),Re!==void 0&&(j.viewport=Re),w.toneMapping=Ue}function io(C,V,q){const j=V.isScene===!0?V.overrideMaterial:null;for(let H=0,re=C.length;H<re;H++){const fe=C[H],{object:be,geometry:ve,group:Ne}=fe;let Ue=fe.material;Ue.allowOverride===!0&&j!==null&&(Ue=j),be.layers.test(q.layers)&&Rh(be,V,q,ve,Ue,Ne)}}function Rh(C,V,q,j,H,re){C.onBeforeRender(w,V,q,j,H,re),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(w,V,q,j,C,re),H.transparent===!0&&H.side===fn&&H.forceSinglePass===!1?(H.side=en,H.needsUpdate=!0,w.renderBufferDirect(q,V,j,H,C,re),H.side=wi,H.needsUpdate=!0,w.renderBufferDirect(q,V,j,H,C,re),H.side=fn):w.renderBufferDirect(q,V,j,H,C,re),C.onAfterRender(w,V,q,j,H,re)}function so(C,V,q){V.isScene!==!0&&(V=Ot);const j=Le.get(C),H=y.state.lights,re=y.state.shadowsArray,fe=H.state.version,be=$.getParameters(C,H.state,re,V,q),ve=$.getProgramCacheKey(be);let Ne=j.programs;j.environment=C.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(C.isMeshStandardMaterial?T:L).get(C.envMap||j.environment),j.envMapRotation=j.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Ne===void 0&&(C.addEventListener("dispose",ke),Ne=new Map,j.programs=Ne);let Ue=Ne.get(ve);if(Ue!==void 0){if(j.currentProgram===Ue&&j.lightsStateVersion===fe)return Ph(C,be),Ue}else be.uniforms=$.getUniforms(C),C.onBeforeCompile(be,w),Ue=$.acquireProgram(be,ve),Ne.set(ve,Ue),j.uniforms=be.uniforms;const Re=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Re.clippingPlanes=Se.uniform),Ph(C,be),j.needsLights=wp(C),j.lightsStateVersion=fe,j.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMap.value=H.state.directionalShadowMap,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotShadowMap.value=H.state.spotShadowMap,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMap.value=H.state.pointShadowMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=Ue,j.uniformsList=null,Ue}function Lh(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Jo.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Ph(C,V){const q=Le.get(C);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function _p(C,V,q,j,H){V.isScene!==!0&&(V=Ot),ze.resetTextureUnits();const re=V.fog,fe=j.isMeshStandardMaterial?V.environment:null,be=M===null?w.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Yt,ve=(j.isMeshStandardMaterial?T:L).get(j.envMap||fe),Ne=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ue=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Re=!!q.morphAttributes.position,Je=!!q.morphAttributes.normal,dt=!!q.morphAttributes.color;let St=zi;j.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(St=w.toneMapping);const Et=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pt=Et!==void 0?Et.length:0,Ie=Le.get(j),wt=y.state.lights;if(ee===!0&&(ye===!0||C!==O)){const Wt=C===O&&j.id===I;Se.setState(j,C,Wt)}let nt=!1;j.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==wt.state.version||Ie.outputColorSpace!==be||H.isBatchedMesh&&Ie.batching===!1||!H.isBatchedMesh&&Ie.batching===!0||H.isBatchedMesh&&Ie.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ie.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ie.instancing===!1||!H.isInstancedMesh&&Ie.instancing===!0||H.isSkinnedMesh&&Ie.skinning===!1||!H.isSkinnedMesh&&Ie.skinning===!0||H.isInstancedMesh&&Ie.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ie.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ie.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ie.instancingMorph===!1&&H.morphTexture!==null||Ie.envMap!==ve||j.fog===!0&&Ie.fog!==re||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Se.numPlanes||Ie.numIntersection!==Se.numIntersection)||Ie.vertexAlphas!==Ne||Ie.vertexTangents!==Ue||Ie.morphTargets!==Re||Ie.morphNormals!==Je||Ie.morphColors!==dt||Ie.toneMapping!==St||Ie.morphTargetsCount!==pt)&&(nt=!0):(nt=!0,Ie.__version=j.version);let nn=Ie.currentProgram;nt===!0&&(nn=so(j,V,H));let bs=!1,sn=!1,ur=!1;const Mt=nn.getUniforms(),Kt=Ie.uniforms;if(we.useProgram(nn.program)&&(bs=!0,sn=!0,ur=!0),j.id!==I&&(I=j.id,sn=!0),bs||O!==C){we.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Mt.setValue(F,"projectionMatrix",C.projectionMatrix),Mt.setValue(F,"viewMatrix",C.matrixWorldInverse);const Zt=Mt.map.cameraPosition;Zt!==void 0&&Zt.setValue(F,Ce.setFromMatrixPosition(C.matrixWorld)),mt.logarithmicDepthBuffer&&Mt.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Mt.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),O!==C&&(O=C,sn=!0,ur=!0)}if(H.isSkinnedMesh){Mt.setOptional(F,H,"bindMatrix"),Mt.setOptional(F,H,"bindMatrixInverse");const Wt=H.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),Mt.setValue(F,"boneTexture",Wt.boneTexture,ze))}H.isBatchedMesh&&(Mt.setOptional(F,H,"batchingTexture"),Mt.setValue(F,"batchingTexture",H._matricesTexture,ze),Mt.setOptional(F,H,"batchingIdTexture"),Mt.setValue(F,"batchingIdTexture",H._indirectTexture,ze),Mt.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&Mt.setValue(F,"batchingColorTexture",H._colorsTexture,ze));const ln=q.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Fe.update(H,q,nn),(sn||Ie.receiveShadow!==H.receiveShadow)&&(Ie.receiveShadow=H.receiveShadow,Mt.setValue(F,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Kt.envMap.value=ve,Kt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(Kt.envMapIntensity.value=V.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=F_()),sn&&(Mt.setValue(F,"toneMappingExposure",w.toneMappingExposure),Ie.needsLights&&bp(Kt,ur),re&&j.fog===!0&&Te.refreshFogUniforms(Kt,re),Te.refreshMaterialUniforms(Kt,j,ie,K,y.state.transmissionRenderTarget[C.id]),Jo.upload(F,Lh(Ie),Kt,ze)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Jo.upload(F,Lh(Ie),Kt,ze),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Mt.setValue(F,"center",H.center),Mt.setValue(F,"modelViewMatrix",H.modelViewMatrix),Mt.setValue(F,"normalMatrix",H.normalMatrix),Mt.setValue(F,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Wt=j.uniformsGroups;for(let Zt=0,Na=Wt.length;Zt<Na;Zt++){const Ji=Wt[Zt];de.update(Ji,nn),de.bind(Ji,nn)}}return nn}function bp(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function wp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,V,q){const j=Le.get(C);j.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Le.get(C.texture).__webglTexture=V,Le.get(C.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){const q=Le.get(C);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0};const Mp=F.createFramebuffer();this.setRenderTarget=function(C,V=0,q=0){M=C,D=V,A=q;let j=!0,H=null,re=!1,fe=!1;if(C){const ve=Le.get(C);if(ve.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(F.FRAMEBUFFER,null),j=!1;else if(ve.__webglFramebuffer===void 0)ze.setupRenderTarget(C);else if(ve.__hasExternalTextures)ze.rebindTextures(C,Le.get(C.texture).__webglTexture,Le.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Re=C.depthTexture;if(ve.__boundDepthTexture!==Re){if(Re!==null&&Le.has(Re)&&(C.width!==Re.image.width||C.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(C)}}const Ne=C.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(fe=!0);const Ue=Le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ue[V])?H=Ue[V][q]:H=Ue[V],re=!0):C.samples>0&&ze.useMultisampledRTT(C)===!1?H=Le.get(C).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[q]:H=Ue,N.copy(C.viewport),z.copy(C.scissor),k=C.scissorTest}else N.copy(Qe).multiplyScalar(ie).floor(),z.copy(rt).multiplyScalar(ie).floor(),k=at;if(q!==0&&(H=Mp),we.bindFramebuffer(F.FRAMEBUFFER,H)&&j&&we.drawBuffers(C,H),we.viewport(N),we.scissor(z),we.setScissorTest(k),re){const ve=Le.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,ve.__webglTexture,q)}else if(fe){const ve=V;for(let Ne=0;Ne<C.textures.length;Ne++){const Ue=Le.get(C.textures[Ne]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ne,Ue.__webglTexture,q,ve)}}else if(C!==null&&q!==0){const ve=Le.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,q)}I=-1},this.readRenderTargetPixels=function(C,V,q,j,H,re,fe,be=0){if(!(C&&C.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){we.bindFramebuffer(F.FRAMEBUFFER,ve);try{const Ne=C.textures[be],Ue=Ne.format,Re=Ne.type;if(!mt.textureFormatReadable(Ue)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Re)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-j&&q>=0&&q<=C.height-H&&(C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+be),F.readPixels(V,q,j,H,Oe.convert(Ue),Oe.convert(Re),re))}finally{const Ne=M!==null?Le.get(M).__webglFramebuffer:null;we.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(C,V,q,j,H,re,fe,be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(V>=0&&V<=C.width-j&&q>=0&&q<=C.height-H){we.bindFramebuffer(F.FRAMEBUFFER,ve);const Ne=C.textures[be],Ue=Ne.format,Re=Ne.type;if(!mt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Je),F.bufferData(F.PIXEL_PACK_BUFFER,re.byteLength,F.STREAM_READ),C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+be),F.readPixels(V,q,j,H,Oe.convert(Ue),Oe.convert(Re),0);const dt=M!==null?Le.get(M).__webglFramebuffer:null;we.bindFramebuffer(F.FRAMEBUFFER,dt);const St=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await vm(F,St,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Je),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,re),F.deleteBuffer(Je),F.deleteSync(St),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,q=0){const j=Math.pow(2,-q),H=Math.floor(C.image.width*j),re=Math.floor(C.image.height*j),fe=V!==null?V.x:0,be=V!==null?V.y:0;ze.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,fe,be,H,re),we.unbindTexture()};const Sp=F.createFramebuffer(),Ep=F.createFramebuffer();this.copyTextureToTexture=function(C,V,q=null,j=null,H=0,re=null){re===null&&(H!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=H,H=0):re=0);let fe,be,ve,Ne,Ue,Re,Je,dt,St;const Et=C.isCompressedTexture?C.mipmaps[re]:C.image;if(q!==null)fe=q.max.x-q.min.x,be=q.max.y-q.min.y,ve=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,Ue=q.min.y,Re=q.isBox3?q.min.z:0;else{const ln=Math.pow(2,-H);fe=Math.floor(Et.width*ln),be=Math.floor(Et.height*ln),C.isDataArrayTexture?ve=Et.depth:C.isData3DTexture?ve=Math.floor(Et.depth*ln):ve=1,Ne=0,Ue=0,Re=0}j!==null?(Je=j.x,dt=j.y,St=j.z):(Je=0,dt=0,St=0);const pt=Oe.convert(V.format),Ie=Oe.convert(V.type);let wt;V.isData3DTexture?(ze.setTexture3D(V,0),wt=F.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ze.setTexture2DArray(V,0),wt=F.TEXTURE_2D_ARRAY):(ze.setTexture2D(V,0),wt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const nt=F.getParameter(F.UNPACK_ROW_LENGTH),nn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),bs=F.getParameter(F.UNPACK_SKIP_PIXELS),sn=F.getParameter(F.UNPACK_SKIP_ROWS),ur=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Et.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ue),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Re);const Mt=C.isDataArrayTexture||C.isData3DTexture,Kt=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){const ln=Le.get(C),Wt=Le.get(V),Zt=Le.get(ln.__renderTarget),Na=Le.get(Wt.__renderTarget);we.bindFramebuffer(F.READ_FRAMEBUFFER,Zt.__webglFramebuffer),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let Ji=0;Ji<ve;Ji++)Mt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(C).__webglTexture,H,Re+Ji),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(V).__webglTexture,re,St+Ji)),F.blitFramebuffer(Ne,Ue,fe,be,Je,dt,fe,be,F.DEPTH_BUFFER_BIT,F.NEAREST);we.bindFramebuffer(F.READ_FRAMEBUFFER,null),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||C.isRenderTargetTexture||Le.has(C)){const ln=Le.get(C),Wt=Le.get(V);we.bindFramebuffer(F.READ_FRAMEBUFFER,Sp),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ep);for(let Zt=0;Zt<ve;Zt++)Mt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,H,Re+Zt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,H),Kt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,re,St+Zt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Wt.__webglTexture,re),H!==0?F.blitFramebuffer(Ne,Ue,fe,be,Je,dt,fe,be,F.COLOR_BUFFER_BIT,F.NEAREST):Kt?F.copyTexSubImage3D(wt,re,Je,dt,St+Zt,Ne,Ue,fe,be):F.copyTexSubImage2D(wt,re,Je,dt,Ne,Ue,fe,be);we.bindFramebuffer(F.READ_FRAMEBUFFER,null),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Kt?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(wt,re,Je,dt,St,fe,be,ve,pt,Ie,Et.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(wt,re,Je,dt,St,fe,be,ve,pt,Et.data):F.texSubImage3D(wt,re,Je,dt,St,fe,be,ve,pt,Ie,Et):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,re,Je,dt,fe,be,pt,Ie,Et.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,re,Je,dt,Et.width,Et.height,pt,Et.data):F.texSubImage2D(F.TEXTURE_2D,re,Je,dt,fe,be,pt,Ie,Et);F.pixelStorei(F.UNPACK_ROW_LENGTH,nt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,bs),F.pixelStorei(F.UNPACK_SKIP_ROWS,sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ur),re===0&&V.generateMipmaps&&F.generateMipmap(wt),we.unbindTexture()},this.initRenderTarget=function(C){Le.get(C).__webglFramebuffer===void 0&&ze.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ze.setTextureCube(C,0):C.isData3DTexture?ze.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ze.setTexture2DArray(C,0):ze.setTexture2D(C,0),we.unbindTexture()},this.resetState=function(){D=0,A=0,M=null,we.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class Rr extends vt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Be(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Os=new P,Ju=new Ve,Qu=new Ve,ed=new P,td=new P;class U_{constructor(e={}){const t=this;let n,i,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:i}},this.render=function(g,x){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),Ju.copy(x.matrixWorldInverse),Qu.multiplyMatrices(x.projectionMatrix,Ju),h(g,g,x),this.sortObjects&&f(g)},this.setSize=function(g,x){n=g,i=x,s=n/2,o=i/2,l.style.width=g+"px",l.style.height=x+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let x=0,m=g.children.length;x<m;x++)c(g.children[x])}function h(g,x,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Os.setFromMatrixPosition(g.matrixWorld),Os.applyMatrix4(Qu);const p=Os.z>=-1&&Os.z<=1&&g.layers.test(m.layers)===!0,v=g.element;v.style.display=p===!0?"":"none",p===!0&&(g.onBeforeRender(t,x,m),v.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Os.x*s+s)+"px,"+(-Os.y*o+o)+"px)",v.parentNode!==l&&l.appendChild(v),g.onAfterRender(t,x,m));const y={distanceToCameraSquared:u(m,g)};a.objects.set(g,y)}for(let p=0,v=g.children.length;p<v;p++)h(g.children[p],x,m)}function u(g,x){return ed.setFromMatrixPosition(g.matrixWorld),td.setFromMatrixPosition(x.matrixWorld),ed.distanceToSquared(td)}function d(g){const x=[];return g.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function f(g){const x=d(g).sort(function(p,v){if(p.renderOrder!==v.renderOrder)return v.renderOrder-p.renderOrder;const y=a.objects.get(p).distanceToCameraSquared,_=a.objects.get(v).distanceToCameraSquared;return y-_}),m=x.length;for(let p=0,v=x.length;p<v;p++)x[p].element.style.zIndex=m-p}}}function nd(r,e){if(e===om)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===_c||e===vf){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===_c)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class ch extends vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new V_(t)}),this.register(function(t){return new H_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new z_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new tb(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Nr.extractUrlBase(e);o=Nr.resolveURL(c,this.path)}else o=Nr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new rh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zf){try{o[$e.KHR_BINARY_GLTF]=new nb(e)}catch(u){i&&i(u);return}s=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new mb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new k_;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new ib(s,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new sb;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new rb;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function B_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class O_{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ee(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Yt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Nf(h),c.distance=u;break;case"spot":c=new Ng(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),zn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class k_{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){const i=[];e.color=new Ee(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ut))}return Promise.all(i)}}class z_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class V_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(a,a)}return Promise.all(s)}}class H_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class G_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class W_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Yt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ut)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class X_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class q_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(a[0],a[1],a[2],Yt),Promise.all(s)}}class j_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class $_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(a[0],a[1],a[2],Yt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ut)),Promise.all(s)}}class Y_{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class K_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Z_{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class J_{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Q_{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class eb{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class tb{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==un.TRIANGLES&&c.mode!==un.TRIANGLE_STRIP&&c.mode!==un.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const x=new Ve,m=new P,p=new an,v=new P(1,1,1),y=new cg(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&v.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,x.compose(m,p,v));for(const _ in l)if(_==="_COLOR_0"){const E=l[_];y.instanceColor=new wc(E.array,E.itemSize,E.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);vt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const zf="glTF",br=12,id={JSON:1313821514,BIN:5130562};class nb{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,br),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-br,s=new DataView(e,br);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===id.JSON){const c=new Uint8Array(e,br+o,a);this.content=n.decode(c)}else if(l===id.BIN){const c=br+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ib{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Ac[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ac[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=qs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},a,c,Yt,d)})})}}class sb{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rb{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Vf extends $r{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,v=1-m,y=p-d+u;for(let _=0;_!==a;_++){const E=o[x+_+a],w=o[x+_+l]*h,R=o[g+_+a],D=o[g+_]*h;s[_]=v*E+y*w+m*R+p*D}return s}}const ob=new an;class ab extends Vf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return ob.fromArray(s).normalize().toArray(s),s}}const un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sd={9728:$t,9729:jt,9984:uf,9985:Xo,9986:Ar,9987:yi},rd={33071:jn,33648:sa,10497:Zs},ml={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ac={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lb={CUBICSPLINE:void 0,LINEAR:Vr,STEP:zr},gl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ln({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wi})),r.DefaultMaterial}function rs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hb(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function ub(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function db(r){let e;const t=r.extensions&&r.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xl(t.attributes):e=r.indices+":"+xl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+xl(r.targets[n]);return e}function xl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Cc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fb(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const pb=new Ve;class mb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new B_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Pg(this.options.manager):this.textureLoader=new Bg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return rs(s,a,i),zn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Nr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ml[i.type],a=qs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Gt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=ml[i.type],c=qs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(v);y||(x=new c(a,p*f,i.count*f/h),y=new sg(x,f/h),t.cache.add(v,y)),m=new Zc(y,l,d%f/h,g)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),m=new Gt(x,l,g);if(i.sparse!==void 0){const p=ml.SCALAR,v=qs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,E=new v(o[1],y,i.sparse.count*p),w=new c(o[2],_,i.sparse.count*l);a!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,D=E.length;R<D;R++){const A=E[R];if(m.setX(A,w[R*l]),l>=2&&m.setY(A,w[R*l+1]),l>=3&&m.setZ(A,w[R*l+2]),l>=4&&m.setW(A,w[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=sd[d.magFilter]||jt,h.minFilter=sd[d.minFilter]||yi,h.wrapS=rd[d.wrapS]||Zs,h.wrapT=rd[d.wrapT]||Zs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$t&&h.minFilter!==jt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Bt(x);m.needsUpdate=!0,d(m)}),t.load(Nr.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),zn(u,o),u.userData.mimeType=o.mimeType||fb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Vs,tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Xs,tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ln}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const u=i[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Ee(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Yt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ut)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=fn);const h=s.alphaMode||gl.OPAQUE;if(h===gl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===gl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Qt&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Be(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Qt&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Qt){const u=s.emissiveFactor;a.emissive=new Ee().setRGB(u[0],u[1],u[2],Yt)}return s.emissiveTexture!==void 0&&o!==Qt&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ut)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),zn(u,s),t.associations.set(u,{materials:e}),s.extensions&&rs(i,u,s),u})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return od(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=db(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=od(new Lt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?cb(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const x=h[f],m=o[f];let p;const v=c[f];if(m.mode===un.TRIANGLES||m.mode===un.TRIANGLE_STRIP||m.mode===un.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new og(x,v):new lt(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===un.TRIANGLE_STRIP?p.geometry=nd(p.geometry,vf):m.mode===un.TRIANGLE_FAN&&(p.geometry=nd(p.geometry,_c));else if(m.mode===un.LINES)p=new Mc(x,v);else if(m.mode===un.LINE_STRIP)p=new ba(x,v);else if(m.mode===un.LINE_LOOP)p=new fg(x,v);else if(m.mode===un.POINTS)p=new Ko(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ub(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),zn(p,s),m.extensions&&rs(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&rs(i,u[0],s),u[0];const d=new mn;s.extensions&&rs(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(kt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ma(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ve;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Qc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let y=0,_=d.length;y<_;y++){const E=d[y],w=f[y],R=g[y],D=x[y],A=m[y];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const M=n._createAnimationTracks(E,w,R,D,A);if(M)for(let I=0;I<M.length;I++)p.push(M[I])}const v=new Sg(s,void 0,p);return zn(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,pb)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Rf:c.length>1?h=new mn:c.length===1?h=c[0]:h=new vt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),zn(h,s),s.extensions&&rs(n,h,s),s.matrix!==void 0){const u=new Ve;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new mn;n.name&&(s.name=i.createUniqueName(n.name)),zn(s,n),n.extensions&&rs(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof tn||d instanceof Bt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ii[s.path]===Ii.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ii[s.path]){case Ii.weights:c=er;break;case Ii.rotation:c=tr;break;case Ii.translation:case Ii.scale:c=nr;break;default:switch(n.itemSize){case 1:c=er;break;case 2:case 3:default:c=nr;break}break}const h=i.interpolation!==void 0?lb[i.interpolation]:Vr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Ii[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Cc(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof tr?ab:Vf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gb(r,e,t){const n=e.attributes,i=new Mi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const h=Cc(qs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new P,l=new P;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const x=Cc(qs[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new ti;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function od(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Ac[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return tt.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),zn(r,e),gb(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?hb(r,e.targets,t):r})}class Cn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new S);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new S);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Cn);const n=this.elements,i=e.elements,s=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],u=n[5],d=n[6],f=n[7],g=n[8],x=i[0],m=i[1],p=i[2],v=i[3],y=i[4],_=i[5],E=i[6],w=i[7],R=i[8];return s[0]=o*x+a*v+l*E,s[1]=o*m+a*y+l*w,s[2]=o*p+a*_+l*R,s[3]=c*x+h*v+u*E,s[4]=c*m+h*y+u*w,s[5]=c*p+h*_+u*R,s[6]=d*x+f*v+g*E,s[7]=d*m+f*y+g*w,s[8]=d*p+f*_+g*R,t}scale(e,t){t===void 0&&(t=new Cn);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new S);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let l=3;const c=l;let h;const u=4;let d;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=u;do d=u-h,s[d+i*o]+=s[d+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];h=u;do d=u-h,s[d+i*a]=d<=o?0:s[d+i*a]-s[d+i*o]*f;while(--h)}}while(--l);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Cn);const t=3,n=6,i=xb;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let u;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do u=h-c,i[u+n*s]+=i[u+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const d=i[s+n*o]/i[s+n*s];c=h;do u=h-c,i[u+n*o]=u<=s?0:i[u+n*o]-i[u+n*s]*d;while(--c)}}while(--a);s=2;do{o=s-1;do{const d=i[s+n*o]/i[s+n*s];c=n;do u=n-c,i[u+n*o]=i[u+n*o]-i[u+n*s]*d;while(--c)}while(o--)}while(--s);s=2;do{const d=1/i[s+n*s];c=n;do u=n-c,i[u+n*s]=i[u+n*s]*d;while(--c)}while(s--);s=2;do{o=2;do{if(u=i[t+o+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,u)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,a=n+n,l=i+i,c=t*o,h=t*a,u=t*l,d=n*a,f=n*l,g=i*l,x=s*o,m=s*a,p=s*l,v=this.elements;return v[3*0+0]=1-(d+g),v[3*0+1]=h-p,v[3*0+2]=u+m,v[3*1+0]=h+p,v[3*1+1]=1-(c+g),v[3*1+2]=f-x,v[3*2+0]=u-m,v[3*2+1]=f+x,v[3*2+2]=1-(c+d),this}transpose(e){e===void 0&&(e=new Cn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const xb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new S);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*s-l*i,t.y=l*n-o*s,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new S(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new S(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Cn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new S);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new S);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new S),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new S),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new S),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=vb,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=yb;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(ad),ad.almostEquals(e,t)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const vb=new S,yb=new S,ad=new S;class _t{constructor(e){e===void 0&&(e={}),this.lowerBound=new S,this.upperBound=new S,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,ld),c=ld),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new _t().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const n=cd,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const f=n[d];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=cd,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const f=n[d];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(u,d)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(u,d));return!(g<0||f>g)}}const ld=new S,cd=[new S,new S,new S,new S,new S,new S,new S,new S];class hd{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Hf{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class Ct{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new S),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=_b,i=bb;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Ct);const n=this.x,i=this.y,s=this.z,o=this.w,a=e.x,l=e.y,c=e.z,h=e.w;return t.x=n*h+o*a+i*c-s*l,t.y=i*h+o*l+s*a-n*c,t.z=s*h+o*c+n*l-i*a,t.w=o*h-n*a-i*l-s*c,t}inverse(e){e===void 0&&(e=new Ct);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new Ct),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new S);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,u=c*i+l*n-o*s,d=c*s+o*i-a*n,f=-o*n-a*i-l*s;return t.x=h*c+f*-o+u*-l-d*-a,t.y=u*c+f*-a+d*-o-h*-l,t.z=d*c+f*-l+h*-a-u*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const u=o*o,d=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*d-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*u-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new Ct(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Ct);const i=this.x,s=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,h=e.z,u=e.w,d,f,g,x,m;return f=i*l+s*c+o*h+a*u,f<0&&(f=-f,l=-l,c=-c,h=-h,u=-u),1-f>1e-6?(d=Math.acos(f),g=Math.sin(d),x=Math.sin((1-t)*d)/g,m=Math.sin(t*d)/g):(x=1-t,m=t),n.x=x*i+m*l,n.y=x*s+m*c,n.z=x*o+m*h,n.w=x*a+m*u,n}integrate(e,t,n,i){i===void 0&&(i=new Ct);const s=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,h=this.z,u=this.w,d=t*.5;return i.x+=d*(s*u+o*h-a*c),i.y+=d*(o*u+a*l-s*h),i.z+=d*(a*u+s*c-o*l),i.w+=d*(-s*l-o*c-a*h),i}}const _b=new S,bb=new S,wb={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class xe{constructor(e){e===void 0&&(e={}),this.id=xe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}xe.idCounter=0;xe.types=wb;class it{constructor(e){e===void 0&&(e={}),this.position=new S,this.quaternion=new Ct,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return it.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return it.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new S),n.vsub(e,i),t.conjugate(ud),ud.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new S),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new S),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new S),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const ud=new Ct;class Fr extends xe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:xe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new S;for(let s=0;s!==e.length;s++){const o=e[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new S;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Fr.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new S,o=new S;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,a,l,c){const h=new S;let u=-1,d=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const x=h.dot(o);x>d&&(d=x,u=g)}const f=[];for(let g=0;g<n.faces[u].length;g++){const x=n.vertices[n.faces[u][g]],m=new S;m.copy(x),s.vmult(m,m),i.vadd(m,m),f.push(m)}u>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,i,s,o,a,l){const c=new S,h=new S,u=new S,d=new S,f=new S,g=new S;let x=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const v=m.testSepAxis(c,e,t,n,i,s);if(v===!1)return!1;v<x&&(x=v,o.copy(c))}else{const p=a?a.length:m.faces.length;for(let v=0;v<p;v++){const y=a?a[v]:v;c.copy(m.faceNormals[y]),n.vmult(c,c);const _=m.testSepAxis(c,e,t,n,i,s);if(_===!1)return!1;_<x&&(x=_,o.copy(c))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){s.vmult(e.uniqueAxes[p],h);const v=m.testSepAxis(h,e,t,n,i,s);if(v===!1)return!1;v<x&&(x=v,o.copy(h))}else{const p=l?l.length:e.faces.length;for(let v=0;v<p;v++){const y=l?l[v]:v;h.copy(e.faceNormals[y]),s.vmult(h,h);const _=m.testSepAxis(h,e,t,n,i,s);if(_===!1)return!1;_<x&&(x=_,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],d);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],f),d.cross(f,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,e,t,n,i,s);if(y===!1)return!1;y<x&&(x=y,o.copy(g))}}return i.vsub(t,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const a=this;Fr.project(a,e,n,i,vl),Fr.project(t,e,s,o,yl);const l=vl[0],c=vl[1],h=yl[0],u=yl[1];if(l<u||h<c)return!1;const d=l-u,f=h-c;return d<f?d:f}calculateLocalInertia(e,t){const n=new S,i=new S;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,a){const l=new S,c=new S,h=new S,u=new S,d=new S,f=new S,g=new S,x=new S,m=this,p=[],v=i,y=p;let _=-1,E=Number.MAX_VALUE;for(let M=0;M<m.faces.length;M++){l.copy(m.faceNormals[M]),n.vmult(l,l);const I=l.dot(e);I<E&&(E=I,_=M)}if(_<0)return;const w=m.faces[_];w.connectedFaces=[];for(let M=0;M<m.faces.length;M++)for(let I=0;I<m.faces[M].length;I++)w.indexOf(m.faces[M][I])!==-1&&M!==_&&w.connectedFaces.indexOf(M)===-1&&w.connectedFaces.push(M);const R=w.length;for(let M=0;M<R;M++){const I=m.vertices[w[M]],O=m.vertices[w[(M+1)%R]];I.vsub(O,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),u.copy(this.faceNormals[_]),n.vmult(u,u),t.vadd(u,u),h.cross(u,d),d.negate(d),f.copy(I),n.vmult(f,f),t.vadd(f,f);const N=w.connectedFaces[M];g.copy(this.faceNormals[N]);const z=this.getPlaneConstantOfFace(N);x.copy(g),n.vmult(x,x);const k=z-x.dot(t);for(this.clipFaceAgainstPlane(v,y,x,k);v.length;)v.shift();for(;y.length;)v.push(y.shift())}g.copy(this.faceNormals[_]);const D=this.getPlaneConstantOfFace(_);x.copy(g),n.vmult(x,x);const A=D-x.dot(t);for(let M=0;M<v.length;M++){let I=x.dot(v[M])+A;if(I<=s&&(console.log(`clamped: depth=${I} to minDist=${s}`),I=s),I<=o){const O=v[M];if(I<=1e-6){const N={point:O,normal:x,depth:I};a.push(N)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=e[h],o=n.dot(c)+i,s<0)if(o<0){const u=new S;u.copy(c),t.push(u)}else{const u=new S;l.lerp(c,s/(s-o),u),t.push(u)}else if(o<0){const u=new S;l.lerp(c,s/(s-o),u),t.push(u),t.push(c)}l=c,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new S);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,a,l,c,h,u,d=new S;for(let f=0;f<s.length;f++){d.copy(s[f]),t.vmult(d,d),e.vadd(d,d);const g=d;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(u===void 0||g.z>u)&&(u=g.z)}n.set(o,a,l),i.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new S);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=new S;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=t[n[o][0]],c=new S;e.vsub(l,c);const h=a.dot(c),u=new S;s.vsub(l,u);const d=a.dot(u);if(h<0&&d>0||h>0&&d<0)return!1}return-1}static project(e,t,n,i,s){const o=e.vertices.length,a=Mb;let l=0,c=0;const h=Sb,u=e.vertices;h.setZero(),it.vectorToLocalFrame(n,i,t,a),it.pointToLocalFrame(n,i,h,h);const d=h.dot(a);c=l=u[0].dot(a);for(let f=1;f<o;f++){const g=u[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=d,l-=d,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const vl=[],yl=[];new S;const Mb=new S,Sb=new S;class hh extends xe{constructor(e){super({type:xe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=S,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Fr({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new S),hh.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Di.set(s[o][0],s[o][1],s[o][2]),t.vmult(Di,Di),e.vadd(Di,Di),n(Di.x,Di.y,Di.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Un[0].set(s.x,s.y,s.z),Un[1].set(-s.x,s.y,s.z),Un[2].set(-s.x,-s.y,s.z),Un[3].set(-s.x,-s.y,-s.z),Un[4].set(s.x,-s.y,-s.z),Un[5].set(s.x,s.y,-s.z),Un[6].set(-s.x,s.y,-s.z),Un[7].set(s.x,-s.y,s.z);const o=Un[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Un[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),u>i.z&&(i.z=u),c<n.x&&(n.x=c),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const Di=new S,Un=[new S,new S,new S,new S,new S,new S,new S,new S],uh={DYNAMIC:1,STATIC:2,KINEMATIC:4},dh={AWAKE:0,SLEEPY:1,SLEEPING:2};class pe extends Hf{constructor(e){e===void 0&&(e={}),super(),this.id=pe.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new S,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new S,this.force=new S;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?pe.STATIC:pe.DYNAMIC,typeof e.type==typeof pe.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=pe.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new Ct,this.initQuaternion=new Ct,this.previousQuaternion=new Ct,this.interpolatedQuaternion=new Ct,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new S,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new Cn,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new Cn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new S(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new S(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new _t,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=pe.AWAKE,this.wakeUpAfterNarrowphase=!1,e===pe.SLEEPING&&this.dispatchEvent(pe.wakeupEvent)}sleep(){this.sleepState=pe.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===pe.AWAKE&&n<i?(this.sleepState=pe.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(pe.sleepyEvent)):t===pe.SLEEPY&&n>i?this.wakeUp():t===pe.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(pe.sleepEvent))}}updateSolveMassProperties(){this.sleepState===pe.SLEEPING||this.type===pe.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new S),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new S),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new S),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new S,s=new Ct;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const a=t[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=Eb,o=Tb,a=this.quaternion,l=this.aabb,c=Ab;for(let h=0;h!==i;h++){const u=e[h];a.vmult(t[h],s),s.vadd(this.position,s),a.mult(n[h],o),u.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=Cb,i=Rb;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new S),this.type!==pe.DYNAMIC)return;this.sleepState===pe.SLEEPING&&this.wakeUp();const n=Lb;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new S),this.type!==pe.DYNAMIC)return;const n=Pb,i=Ib;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===pe.DYNAMIC&&(this.sleepState===pe.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new S),this.type!==pe.DYNAMIC)return;this.sleepState===pe.SLEEPING&&this.wakeUp();const n=t,i=Db;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Nb;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new S),this.type!==pe.DYNAMIC)return;const n=Fb,i=Ub;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=Bb;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),hh.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new S;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===pe.DYNAMIC||this.type===pe.KINEMATIC)||this.sleepState===pe.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,f=h*e;i.x+=a.x*f*d.x,i.y+=a.y*f*d.y,i.z+=a.z*f*d.z;const g=u.elements,x=this.angularFactor,m=l.x*x.x,p=l.y*x.y,v=l.z*x.z;s.x+=e*(g[0]*m+g[1]*p+g[2]*v),s.y+=e*(g[3]*m+g[4]*p+g[5]*v),s.z+=e*(g[6]*m+g[7]*p+g[8]*v),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}pe.idCounter=0;pe.COLLIDE_EVENT_NAME="collide";pe.DYNAMIC=uh.DYNAMIC;pe.STATIC=uh.STATIC;pe.KINEMATIC=uh.KINEMATIC;pe.AWAKE=dh.AWAKE;pe.SLEEPY=dh.SLEEPY;pe.SLEEPING=dh.SLEEPING;pe.wakeupEvent={type:"wakeup"};pe.sleepyEvent={type:"sleepy"};pe.sleepEvent={type:"sleep"};const Eb=new S,Tb=new Ct,Ab=new _t,Cb=new Cn,Rb=new Cn;new Cn;const Lb=new S,Pb=new S,Ib=new S,Db=new S,Nb=new S,Fb=new S,Ub=new S,Bb=new S;class Ob{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&pe.STATIC||e.sleepState===pe.SLEEPING)&&(t.type&pe.STATIC||t.sleepState===pe.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=kb;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=zb,i=Vb,s=Hb,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(s[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new S;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const kb=new S;new S;new Ct;new S;const zb={keys:[]},Vb=[],Hb=[];new S;new S;new S;class Gf extends Ob{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class ir{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let Wf,Xf,qf,jf,$f,Yf,Kf;const fh={CLOSEST:1,ANY:2,ALL:4};Wf=xe.types.SPHERE;Xf=xe.types.PLANE;qf=xe.types.BOX;jf=xe.types.CYLINDER;$f=xe.types.CONVEXPOLYHEDRON;Yf=xe.types.HEIGHTFIELD;Kf=xe.types.TRIMESH;class Tt{get[Wf](){return this._intersectSphere}get[Xf](){return this._intersectPlane}get[qf](){return this._intersectBox}get[jf](){return this._intersectConvex}get[$f](){return this._intersectConvex}get[Yf](){return this._intersectHeightfield}get[Kf](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new S),t===void 0&&(t=new S),this.from=e.clone(),this.to=t.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Tt.ANY,this.result=new ir,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Tt.ANY,this.result=t.result||new ir,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(dd),_l.length=0,e.broadphase.aabbQuery(e,dd,_l),this.intersectBodies(_l),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=Gb,s=Wb;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(sw(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new S(0,0,1);t.vmult(c,c);const h=new S;o.vsub(n,h);const u=h.dot(c);a.vsub(n,h);const d=h.dot(c);if(u*d>0||o.distanceTo(a)<u)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new S,x=new S,m=new S;o.vsub(n,g);const p=-c.dot(g)/f;l.scale(p,x),o.vadd(x,m),this.reportIntersection(c,m,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=Xb;o.from.copy(this.from),o.to.copy(this.to),it.pointToLocalFrame(n,t,o.from,o.from),it.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=qb;let l,c,h,u;l=c=0,h=u=e.data.length-1;const d=new _t;o.getAABB(d),e.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let f=l;f<h;f++)for(let g=c;g<u;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,d),!!d.overlapsRay(o)){if(e.getConvexTrianglePillar(f,g,!1),it.pointToWorldFrame(n,t,e.pillarOffset,Do),this._intersectConvex(e.pillarConvex,t,Do,i,s,fd),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),it.pointToWorldFrame(n,t,e.pillarOffset,Do),this._intersectConvex(e.pillarConvex,t,Do,i,s,fd)}}}_intersectSphere(e,t,n,i,s){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,d=h**2-4*c*u,f=jb,g=$b;if(!(d<0))if(d===0)o.lerp(a,d,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const x=(-h-Math.sqrt(d))/(2*c),m=(-h+Math.sqrt(d))/(2*c);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const a=Yb,l=pd,c=o&&o.faceList||null,h=e.faces,u=e.vertices,d=e.faceNormals,f=this.direction,g=this.from,x=this.to,m=g.distanceTo(x),p=c?c.length:h.length,v=this.result;for(let y=0;!v.shouldStop&&y<p;y++){const _=c?c[y]:y,E=h[_],w=d[_],R=t,D=n;l.copy(u[E[0]]),R.vmult(l,l),l.vadd(D,l),l.vsub(g,l),R.vmult(w,a);const A=f.dot(a);if(Math.abs(A)<this.precision)continue;const M=a.dot(l)/A;if(!(M<0)){f.scale(M,Jt),Jt.vadd(g,Jt),wn.copy(u[E[0]]),R.vmult(wn,wn),D.vadd(wn,wn);for(let I=1;!v.shouldStop&&I<E.length-1;I++){Bn.copy(u[E[I]]),On.copy(u[E[I+1]]),R.vmult(Bn,Bn),R.vmult(On,On),D.vadd(Bn,Bn),D.vadd(On,On);const O=Jt.distanceTo(g);!(Tt.pointInTriangle(Jt,wn,Bn,On)||Tt.pointInTriangle(Jt,Bn,wn,On))||O>m||this.reportIntersection(a,Jt,s,i,_)}}}}_intersectTrimesh(e,t,n,i,s,o){const a=Kb,l=nw,c=iw,h=pd,u=Zb,d=Jb,f=Qb,g=tw,x=ew,m=e.indices;e.vertices;const p=this.from,v=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(t),it.vectorToLocalFrame(n,t,y,u),it.pointToLocalFrame(n,t,p,d),it.pointToLocalFrame(n,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,f.vsub(d,u),u.normalize();const _=d.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let E=0,w=l.length;!this.result.shouldStop&&E!==w;E++){const R=l[E];e.getNormal(R,a),e.getVertex(m[R*3],wn),wn.vsub(d,h);const D=u.dot(a),A=a.dot(h)/D;if(A<0)continue;u.scale(A,Jt),Jt.vadd(d,Jt),e.getVertex(m[R*3+1],Bn),e.getVertex(m[R*3+2],On);const M=Jt.distanceSquared(d);!(Tt.pointInTriangle(Jt,Bn,wn,On)||Tt.pointInTriangle(Jt,wn,Bn,On))||M>_||(it.vectorToWorldFrame(t,a,x),it.pointToWorldFrame(n,t,Jt,g),this.reportIntersection(x,g,s,i,R))}l.length=0}reportIntersection(e,t,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Tt.ALL:this.hasHit=!0,c.set(o,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case Tt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l));break;case Tt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,ds),n.vsub(t,wr),e.vsub(t,bl);const s=ds.dot(ds),o=ds.dot(wr),a=ds.dot(bl),l=wr.dot(wr),c=wr.dot(bl);let h,u;return(h=l*a-o*c)>=0&&(u=s*c-o*a)>=0&&h+u<s*l-o*o}}Tt.CLOSEST=fh.CLOSEST;Tt.ANY=fh.ANY;Tt.ALL=fh.ALL;const dd=new _t,_l=[],wr=new S,bl=new S,Gb=new S,Wb=new Ct,Jt=new S,wn=new S,Bn=new S,On=new S;new S;new ir;const fd={faceList:[0]},Do=new S,Xb=new Tt,qb=[],jb=new S,$b=new S,Yb=new S;new S;new S;const pd=new S,Kb=new S,Zb=new S,Jb=new S,Qb=new S,ew=new S,tw=new S;new _t;const nw=[],iw=new it,ds=new S,No=new S;function sw(r,e,t){t.vsub(r,ds);const n=ds.dot(e);return e.scale(n,No),No.vadd(r,No),t.distanceTo(No)}class rw{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class md{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Kr{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Kr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new md,this.jacobianElementB=new md,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,gd),a.scale(h,xd),n.invInertiaWorldSolve.vmult(o,vd),i.invInertiaWorldSolve.vmult(l,yd),e.multiplyVectors(gd,vd)+t.multiplyVectors(xd,yd)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(e.rotational,Fo),c+=Fo.dot(e.rotational),l.vmult(t.rotational,Fo),c+=Fo.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=ow;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Kr.idCounter=0;const gd=new S,xd=new S,vd=new S,yd=new S,Fo=new S,ow=new S;class aw extends Kr{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=lw,c=cw,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=hw,x=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(x.spatial),l.negate(x.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const v=p.dot(g),y=this.restitution+1,_=y*d.dot(p)-y*h.dot(p)+f.dot(c)-u.dot(l),E=this.computeGiMf();return-v*t-_*n-e*E}getImpactVelocityAlongNormal(){const e=uw,t=dw,n=fw,i=pw,s=mw;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const lw=new S,cw=new S,hw=new S,uw=new S,dw=new S,fw=new S,pw=new S,mw=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class _d extends Kr{constructor(e,t,n){super(e,t,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=gw,o=xw,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),u=this.computeGiMf();return-h*t-e*u}}const gw=new S,xw=new S;class Xi{constructor(e,t,n){n=rw.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Xi.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Xi.idCounter=0;class gs{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=gs.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}gs.idCounter=0;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new Tt;new S;new S;new S;new S(1,0,0),new S(0,1,0),new S(0,0,1);new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class ph extends xe{constructor(e){if(super({type:xe.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new S);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=e[l]-s,i[l]=e[l]+s}}}new S;new S;new S;new S;new S;new S;new S;new S;new S;class Zf extends xe{constructor(){super({type:xe.types.PLANE}),this.worldNormal=new S,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new S),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){di.set(0,0,1),t.vmult(di,di);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),di.x===1?i.x=e.x:di.x===-1&&(n.x=e.x),di.y===1?i.y=e.y:di.y===-1&&(n.y=e.y),di.z===1?i.z=e.z:di.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const di=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class Vn{constructor(e){e===void 0&&(e={}),this.root=e.root||null,this.aabb=e.aabb?e.aabb.clone():new _t,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(e,t,n){n===void 0&&(n=0);const i=this.data;if(!this.aabb.contains(e))return!1;const s=this.children,o=this.maxDepth||this.root.maxDepth;if(n<o){let a=!1;s.length||(this.subdivide(),a=!0);for(let l=0;l!==8;l++)if(s[l].insert(e,t,n+1))return!0;a&&(s.length=0)}return i.push(t),!0}subdivide(){const e=this.aabb,t=e.lowerBound,n=e.upperBound,i=this.children;i.push(new Vn({aabb:new _t({lowerBound:new S(0,0,0)})}),new Vn({aabb:new _t({lowerBound:new S(1,0,0)})}),new Vn({aabb:new _t({lowerBound:new S(1,1,0)})}),new Vn({aabb:new _t({lowerBound:new S(1,1,1)})}),new Vn({aabb:new _t({lowerBound:new S(0,1,1)})}),new Vn({aabb:new _t({lowerBound:new S(0,0,1)})}),new Vn({aabb:new _t({lowerBound:new S(1,0,1)})}),new Vn({aabb:new _t({lowerBound:new S(0,1,0)})})),n.vsub(t,os),os.scale(.5,os);const s=this.root||this;for(let o=0;o!==8;o++){const a=i[o];a.root=s;const l=a.aabb.lowerBound;l.x*=os.x,l.y*=os.y,l.z*=os.z,l.vadd(t,l),l.vadd(os,a.aabb.upperBound)}}aabbQuery(e,t){this.data,this.children;const n=[this];for(;n.length;){const i=n.pop();i.aabb.overlaps(e)&&Array.prototype.push.apply(t,i.data),Array.prototype.push.apply(n,i.children)}return t}rayQuery(e,t,n){return e.getAABB(Uo),Uo.toLocalFrame(t,Uo),this.aabbQuery(Uo,n),n}removeEmptyNodes(){for(let e=this.children.length-1;e>=0;e--)this.children[e].removeEmptyNodes(),!this.children[e].children.length&&!this.children[e].data.length&&this.children.splice(e,1)}}class vw extends Vn{constructor(e,t){t===void 0&&(t={}),super({root:null,aabb:e}),this.maxDepth=typeof t.maxDepth<"u"?t.maxDepth:8}}const os=new S,Uo=new _t;class ua extends xe{constructor(e,t){super({type:xe.types.TRIMESH}),this.vertices=new Float32Array(e),this.indices=new Int16Array(t),this.normals=new Float32Array(t.length),this.aabb=new _t,this.edges=null,this.scale=new S(1,1,1),this.tree=new vw,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const e=this.tree;e.reset(),e.aabb.copy(this.aabb);const t=this.scale;e.aabb.lowerBound.x*=1/t.x,e.aabb.lowerBound.y*=1/t.y,e.aabb.lowerBound.z*=1/t.z,e.aabb.upperBound.x*=1/t.x,e.aabb.upperBound.y*=1/t.y,e.aabb.upperBound.z*=1/t.z;const n=new _t,i=new S,s=new S,o=new S,a=[i,s,o];for(let l=0;l<this.indices.length/3;l++){const c=l*3;this._getUnscaledVertex(this.indices[c],i),this._getUnscaledVertex(this.indices[c+1],s),this._getUnscaledVertex(this.indices[c+2],o),n.setFromPoints(a),e.insert(n,l)}e.removeEmptyNodes()}getTrianglesInAABB(e,t){Bo.copy(e);const n=this.scale,i=n.x,s=n.y,o=n.z,a=Bo.lowerBound,l=Bo.upperBound;return a.x/=i,a.y/=s,a.z/=o,l.x/=i,l.y/=s,l.z/=o,this.tree.aabbQuery(Bo,t)}setScale(e){const t=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,n=e.x===e.y&&e.y===e.z;t&&n||this.updateNormals(),this.scale.copy(e),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const e=yw,t=this.normals;for(let n=0;n<this.indices.length/3;n++){const i=n*3,s=this.indices[i],o=this.indices[i+1],a=this.indices[i+2];this.getVertex(s,Md),this.getVertex(o,Sd),this.getVertex(a,Ed),ua.computeNormal(Sd,Md,Ed,e),t[i]=e.x,t[i+1]=e.y,t[i+2]=e.z}}updateEdges(){const e={},t=(i,s)=>{const o=i<s?`${i}_${s}`:`${s}_${i}`;e[o]=!0};for(let i=0;i<this.indices.length/3;i++){const s=i*3,o=this.indices[s],a=this.indices[s+1],l=this.indices[s+2];t(o,a),t(a,l),t(l,o)}const n=Object.keys(e);this.edges=new Int16Array(n.length*2);for(let i=0;i<n.length;i++){const s=n[i].split("_");this.edges[2*i]=parseInt(s[0],10),this.edges[2*i+1]=parseInt(s[1],10)}}getEdgeVertex(e,t,n){const i=this.edges[e*2+(t?1:0)];this.getVertex(i,n)}getEdgeVector(e,t){const n=_w,i=bw;this.getEdgeVertex(e,0,n),this.getEdgeVertex(e,1,i),i.vsub(n,t)}static computeNormal(e,t,n,i){t.vsub(e,wd),n.vsub(t,bd),bd.cross(wd,i),i.isZero()||i.normalize()}getVertex(e,t){const n=this.scale;return this._getUnscaledVertex(e,t),t.x*=n.x,t.y*=n.y,t.z*=n.z,t}_getUnscaledVertex(e,t){const n=e*3,i=this.vertices;return t.set(i[n],i[n+1],i[n+2])}getWorldVertex(e,t,n,i){return this.getVertex(e,i),it.pointToWorldFrame(t,n,i,i),i}getTriangleVertices(e,t,n,i){const s=e*3;this.getVertex(this.indices[s],t),this.getVertex(this.indices[s+1],n),this.getVertex(this.indices[s+2],i)}getNormal(e,t){const n=e*3;return t.set(this.normals[n],this.normals[n+1],this.normals[n+2])}calculateLocalInertia(e,t){this.computeLocalAABB(as);const n=as.upperBound.x-as.lowerBound.x,i=as.upperBound.y-as.lowerBound.y,s=as.upperBound.z-as.lowerBound.z;return t.set(1/12*e*(2*i*2*i+2*s*2*s),1/12*e*(2*n*2*n+2*s*2*s),1/12*e*(2*i*2*i+2*n*2*n))}computeLocalAABB(e){const t=e.lowerBound,n=e.upperBound,i=this.vertices.length;this.vertices;const s=ww;this.getVertex(0,s),t.copy(s),n.copy(s);for(let o=0;o!==i;o++)this.getVertex(o,s),s.x<t.x?t.x=s.x:s.x>n.x&&(n.x=s.x),s.y<t.y?t.y=s.y:s.y>n.y&&(n.y=s.y),s.z<t.z?t.z=s.z:s.z>n.z&&(n.z=s.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let e=0;const t=this.vertices,n=new S;for(let i=0,s=t.length/3;i!==s;i++){this.getVertex(i,n);const o=n.lengthSquared();o>e&&(e=o)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=Mw,o=Sw;s.position=e,s.quaternion=t,this.aabb.toWorldFrame(s,o),n.copy(o.lowerBound),i.copy(o.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}static createTorus(e,t,n,i,s){e===void 0&&(e=1),t===void 0&&(t=.5),n===void 0&&(n=8),i===void 0&&(i=6),s===void 0&&(s=Math.PI*2);const o=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=i;c++){const h=c/i*s,u=l/n*Math.PI*2,d=(e+t*Math.cos(u))*Math.cos(h),f=(e+t*Math.cos(u))*Math.sin(h),g=t*Math.sin(u);o.push(d,f,g)}for(let l=1;l<=n;l++)for(let c=1;c<=i;c++){const h=(i+1)*l+c-1,u=(i+1)*(l-1)+c-1,d=(i+1)*(l-1)+c,f=(i+1)*l+c;a.push(h,u,f),a.push(u,d,f)}return new ua(o,a)}}const yw=new S,Bo=new _t,_w=new S,bw=new S,bd=new S,wd=new S,Md=new S,Sd=new S,Ed=new S,as=new _t,ww=new S,Mw=new it,Sw=new _t;class Ew{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Tw extends Ew{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,h=e;let u,d,f,g,x,m;if(a!==0)for(let _=0;_!==c;_++)l[_].updateSolveMassProperties();const p=Cw,v=Rw,y=Aw;p.length=a,v.length=a,y.length=a;for(let _=0;_!==a;_++){const E=o[_];y[_]=0,v[_]=E.computeB(h),p[_]=1/E.computeC()}if(a!==0){for(let w=0;w!==c;w++){const R=l[w],D=R.vlambda,A=R.wlambda;D.set(0,0,0),A.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let w=0;w!==a;w++){const R=o[w];u=v[w],d=p[w],m=y[w],x=R.computeGWlambda(),f=d*(u-x-R.eps*m),m+f<R.minForce?f=R.minForce-m:m+f>R.maxForce&&(f=R.maxForce-m),y[w]+=f,g+=f>0?f:-f,R.addToWlambda(f)}if(g*g<s)break}for(let w=0;w!==c;w++){const R=l[w],D=R.velocity,A=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),D.vadd(R.vlambda,D),R.wlambda.vmul(R.angularFactor,R.wlambda),A.vadd(R.wlambda,A)}let _=o.length;const E=1/h;for(;_--;)o[_].multiplier=y[_]*E}return n}}const Aw=[],Cw=[],Rw=[];class Lw{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Pw extends Lw{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const xt={sphereSphere:xe.types.SPHERE,spherePlane:xe.types.SPHERE|xe.types.PLANE,boxBox:xe.types.BOX|xe.types.BOX,sphereBox:xe.types.SPHERE|xe.types.BOX,planeBox:xe.types.PLANE|xe.types.BOX,convexConvex:xe.types.CONVEXPOLYHEDRON,sphereConvex:xe.types.SPHERE|xe.types.CONVEXPOLYHEDRON,planeConvex:xe.types.PLANE|xe.types.CONVEXPOLYHEDRON,boxConvex:xe.types.BOX|xe.types.CONVEXPOLYHEDRON,sphereHeightfield:xe.types.SPHERE|xe.types.HEIGHTFIELD,boxHeightfield:xe.types.BOX|xe.types.HEIGHTFIELD,convexHeightfield:xe.types.CONVEXPOLYHEDRON|xe.types.HEIGHTFIELD,sphereParticle:xe.types.PARTICLE|xe.types.SPHERE,planeParticle:xe.types.PLANE|xe.types.PARTICLE,boxParticle:xe.types.BOX|xe.types.PARTICLE,convexParticle:xe.types.PARTICLE|xe.types.CONVEXPOLYHEDRON,cylinderCylinder:xe.types.CYLINDER,sphereCylinder:xe.types.SPHERE|xe.types.CYLINDER,planeCylinder:xe.types.PLANE|xe.types.CYLINDER,boxCylinder:xe.types.BOX|xe.types.CYLINDER,convexCylinder:xe.types.CONVEXPOLYHEDRON|xe.types.CYLINDER,heightfieldCylinder:xe.types.HEIGHTFIELD|xe.types.CYLINDER,particleCylinder:xe.types.PARTICLE|xe.types.CYLINDER,sphereTrimesh:xe.types.SPHERE|xe.types.TRIMESH,planeTrimesh:xe.types.PLANE|xe.types.TRIMESH};class Iw{get[xt.sphereSphere](){return this.sphereSphere}get[xt.spherePlane](){return this.spherePlane}get[xt.boxBox](){return this.boxBox}get[xt.sphereBox](){return this.sphereBox}get[xt.planeBox](){return this.planeBox}get[xt.convexConvex](){return this.convexConvex}get[xt.sphereConvex](){return this.sphereConvex}get[xt.planeConvex](){return this.planeConvex}get[xt.boxConvex](){return this.boxConvex}get[xt.sphereHeightfield](){return this.sphereHeightfield}get[xt.boxHeightfield](){return this.boxHeightfield}get[xt.convexHeightfield](){return this.convexHeightfield}get[xt.sphereParticle](){return this.sphereParticle}get[xt.planeParticle](){return this.planeParticle}get[xt.boxParticle](){return this.boxParticle}get[xt.convexParticle](){return this.convexParticle}get[xt.cylinderCylinder](){return this.convexConvex}get[xt.sphereCylinder](){return this.sphereConvex}get[xt.planeCylinder](){return this.planeConvex}get[xt.boxCylinder](){return this.boxConvex}get[xt.convexCylinder](){return this.convexConvex}get[xt.heightfieldCylinder](){return this.heightfieldCylinder}get[xt.particleCylinder](){return this.particleCylinder}get[xt.sphereTrimesh](){return this.sphereTrimesh}get[xt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Pw,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new aw(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,h=i.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,u=o.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const d=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,x=g.length?g.pop():new _d(n,i,d*f),m=g.length?g.pop():new _d(n,i,d*f);return x.bi=m.bi=n,x.bj=m.bj=i,x.minForce=m.minForce=-d*f,x.maxForce=m.maxForce=d*f,x.ri.copy(e.ri),x.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(x.t,m.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=m.enabled=e.enabled,t.push(x,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ls.setZero(),ks.setZero(),zs.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(ls.vadd(t.ni,ls),ks.vadd(t.ri,ks),zs.vadd(t.rj,zs)):(ls.vsub(t.ni,ls),ks.vadd(t.rj,ks),zs.vadd(t.ri,zs));const o=1/e;ks.scale(o,n.ri),zs.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ls.normalize(),ls.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=Fw,c=Uw,h=Dw,u=Nw;for(let d=0,f=e.length;d!==f;d++){const g=e[d],x=t[d];let m=null;g.material&&x.material&&(m=n.getContactMaterial(g.material,x.material)||null);const p=g.type&pe.KINEMATIC&&x.type&pe.STATIC||g.type&pe.STATIC&&x.type&pe.KINEMATIC||g.type&pe.KINEMATIC&&x.type&pe.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const y=g.shapes[v];for(let _=0;_<x.shapes.length;_++){x.quaternion.mult(x.shapeOrientations[_],c),x.quaternion.vmult(x.shapeOffsets[_],u),u.vadd(x.position,u);const E=x.shapes[_];if(!(y.collisionFilterMask&E.collisionFilterGroup&&E.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(u)>y.boundingSphereRadius+E.boundingSphereRadius)continue;let w=null;y.material&&E.material&&(w=n.getContactMaterial(y.material,E.material)||null),this.currentContactMaterial=w||m||n.defaultContactMaterial;const R=y.type|E.type,D=this[R];if(D){let A=!1;y.type<E.type?A=D.call(this,y,E,h,u,l,c,g,x,y,E,p):A=D.call(this,E,y,u,h,c,l,x,g,y,E,p),A&&p&&(n.shapeOverlapKeeper.set(y.id,E.id),n.bodyOverlapKeeper.set(g.id,x.id))}}}}}sphereSphere(e,t,n,i,s,o,a,l,c,h,u){if(u)return n.distanceSquared(i)<(e.radius+t.radius)**2;const d=this.createContactEquation(a,l,e,t,c,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(e.radius,d.ri),d.rj.scale(-t.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(e,t,n,i,s,o,a,l,c,h,u){const d=this.createContactEquation(a,l,e,t,c,h);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(e.radius,d.ri),n.vsub(i,Oo),d.ni.scale(d.ni.dot(Oo),Td),Oo.vsub(Td,d.rj),-Oo.dot(d.ni)<=e.radius){if(u)return!0;const f=d.ri,g=d.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(l.position,g),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,a,l,e,t,u)}sphereBox(e,t,n,i,s,o,a,l,c,h,u){const d=this.v3pool,f=lM;n.vsub(i,ko),t.getSideNormals(f,o);const g=e.radius;let x=!1;const m=hM,p=uM,v=dM;let y=null,_=0,E=0,w=0,R=null;for(let B=0,Y=f.length;B!==Y&&x===!1;B++){const G=rM;G.copy(f[B]);const K=G.length();G.normalize();const ie=ko.dot(G);if(ie<K+g&&ie>0){const me=oM,oe=aM;me.copy(f[(B+1)%3]),oe.copy(f[(B+2)%3]);const Qe=me.length(),rt=oe.length();me.normalize(),oe.normalize();const at=ko.dot(me),Z=ko.dot(oe);if(at<Qe&&at>-Qe&&Z<rt&&Z>-rt){const ee=Math.abs(ie-K-g);if((R===null||ee<R)&&(R=ee,E=at,w=Z,y=K,m.copy(G),p.copy(me),v.copy(oe),_++,u))return!0}}}if(_){x=!0;const B=this.createContactEquation(a,l,e,t,c,h);m.scale(-g,B.ri),B.ni.copy(m),B.ni.negate(B.ni),m.scale(y,m),p.scale(E,p),m.vadd(p,m),v.scale(w,v),m.vadd(v,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}let D=d.get();const A=cM;for(let B=0;B!==2&&!x;B++)for(let Y=0;Y!==2&&!x;Y++)for(let G=0;G!==2&&!x;G++)if(D.set(0,0,0),B?D.vadd(f[0],D):D.vsub(f[0],D),Y?D.vadd(f[1],D):D.vsub(f[1],D),G?D.vadd(f[2],D):D.vsub(f[2],D),i.vadd(D,A),A.vsub(n,A),A.lengthSquared()<g*g){if(u)return!0;x=!0;const K=this.createContactEquation(a,l,e,t,c,h);K.ri.copy(A),K.ri.normalize(),K.ni.copy(K.ri),K.ri.scale(g,K.ri),K.rj.copy(D),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(l.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}d.release(D),D=null;const M=d.get(),I=d.get(),O=d.get(),N=d.get(),z=d.get(),k=f.length;for(let B=0;B!==k&&!x;B++)for(let Y=0;Y!==k&&!x;Y++)if(B%3!==Y%3){f[Y].cross(f[B],M),M.normalize(),f[B].vadd(f[Y],I),O.copy(n),O.vsub(I,O),O.vsub(i,O);const G=O.dot(M);M.scale(G,N);let K=0;for(;K===B%3||K===Y%3;)K++;z.copy(n),z.vsub(N,z),z.vsub(I,z),z.vsub(i,z);const ie=Math.abs(G),me=z.length();if(ie<f[K].length()&&me<g){if(u)return!0;x=!0;const oe=this.createContactEquation(a,l,e,t,c,h);I.vadd(N,oe.rj),oe.rj.copy(oe.rj),z.negate(oe.ni),oe.ni.normalize(),oe.ri.copy(oe.rj),oe.ri.vadd(i,oe.ri),oe.ri.vsub(n,oe.ri),oe.ri.normalize(),oe.ri.scale(g,oe.ri),oe.ri.vadd(n,oe.ri),oe.ri.vsub(a.position,oe.ri),oe.rj.vadd(i,oe.rj),oe.rj.vsub(l.position,oe.rj),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult)}}d.release(M,I,O,N,z)}planeBox(e,t,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,a,l,e,t,u)}convexConvex(e,t,n,i,s,o,a,l,c,h,u,d,f){const g=AM;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,g,d,f)){const x=[],m=CM;e.clipAgainstHull(n,s,t,i,o,g,-100,100,x);let p=0;for(let v=0;v!==x.length;v++){if(u)return!0;const y=this.createContactEquation(a,l,e,t,c,h),_=y.ri,E=y.rj;g.negate(y.ni),x[v].normal.negate(m),m.scale(x[v].depth,m),x[v].point.vadd(m,_),E.copy(x[v].point),_.vsub(n,_),E.vsub(i,E),_.vadd(n,_),_.vsub(a.position,_),E.vadd(i,E),E.vsub(l.position,E),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,n,i,s,o,a,l,c,h,u){const d=this.v3pool;n.vsub(i,fM);const f=t.faceNormals,g=t.faces,x=t.vertices,m=e.radius;let p=!1;for(let v=0;v!==x.length;v++){const y=x[v],_=xM;o.vmult(y,_),i.vadd(_,_);const E=gM;if(_.vsub(n,E),E.lengthSquared()<m*m){if(u)return!0;p=!0;const w=this.createContactEquation(a,l,e,t,c,h);w.ri.copy(E),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(m,w.ri),_.vsub(i,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(i,w.rj),w.rj.vsub(l.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let v=0,y=g.length;v!==y&&p===!1;v++){const _=f[v],E=g[v],w=vM;o.vmult(_,w);const R=yM;o.vmult(x[E[0]],R),R.vadd(i,R);const D=_M;w.scale(-m,D),n.vadd(D,D);const A=bM;D.vsub(R,A);const M=A.dot(w),I=wM;if(n.vsub(R,I),M<0&&I.dot(w)>0){const O=[];for(let N=0,z=E.length;N!==z;N++){const k=d.get();o.vmult(x[E[N]],k),i.vadd(k,k),O.push(k)}if(sM(O,w,n)){if(u)return!0;p=!0;const N=this.createContactEquation(a,l,e,t,c,h);w.scale(-m,N.ri),w.negate(N.ni);const z=d.get();w.scale(-M,z);const k=d.get();w.scale(-m,k),n.vsub(i,N.rj),N.rj.vadd(k,N.rj),N.rj.vadd(z,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),d.release(z),d.release(k),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let B=0,Y=O.length;B!==Y;B++)d.release(O[B]);return}else for(let N=0;N!==E.length;N++){const z=d.get(),k=d.get();o.vmult(x[E[(N+1)%E.length]],z),o.vmult(x[E[(N+2)%E.length]],k),i.vadd(z,z),i.vadd(k,k);const B=pM;k.vsub(z,B);const Y=mM;B.unit(Y);const G=d.get(),K=d.get();n.vsub(z,K);const ie=K.dot(Y);Y.scale(ie,G),G.vadd(z,G);const me=d.get();if(G.vsub(n,me),ie>0&&ie*ie<B.lengthSquared()&&me.lengthSquared()<m*m){if(u)return!0;const oe=this.createContactEquation(a,l,e,t,c,h);G.vsub(i,oe.rj),G.vsub(n,oe.ni),oe.ni.normalize(),oe.ni.scale(m,oe.ri),oe.rj.vadd(i,oe.rj),oe.rj.vsub(l.position,oe.rj),oe.ri.vadd(n,oe.ri),oe.ri.vsub(a.position,oe.ri),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult);for(let Qe=0,rt=O.length;Qe!==rt;Qe++)d.release(O[Qe]);d.release(z),d.release(k),d.release(G),d.release(me),d.release(K);return}d.release(z),d.release(k),d.release(G),d.release(me),d.release(K)}for(let N=0,z=O.length;N!==z;N++)d.release(O[N])}}}planeConvex(e,t,n,i,s,o,a,l,c,h,u){const d=MM,f=SM;f.set(0,0,1),s.vmult(f,f);let g=0;const x=EM;for(let m=0;m!==t.vertices.length;m++)if(d.copy(t.vertices[m]),o.vmult(d,d),i.vadd(d,d),d.vsub(n,x),f.dot(x)<=0){if(u)return!0;const v=this.createContactEquation(a,l,e,t,c,h),y=TM;f.scale(f.dot(x),y),d.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(f),d.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,u)}sphereHeightfield(e,t,n,i,s,o,a,l,c,h,u){const d=t.data,f=e.radius,g=t.elementSize,x=zM,m=kM;it.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/g)-1,v=Math.ceil((m.x+f)/g)+1,y=Math.floor((m.y-f)/g)-1,_=Math.ceil((m.y+f)/g)+1;if(v<0||_<0||p>d.length||y>d[0].length)return;p<0&&(p=0),v<0&&(v=0),y<0&&(y=0),_<0&&(_=0),p>=d.length&&(p=d.length-1),v>=d.length&&(v=d.length-1),_>=d[0].length&&(_=d[0].length-1),y>=d[0].length&&(y=d[0].length-1);const E=[];t.getRectMinMax(p,y,v,_,E);const w=E[0],R=E[1];if(m.z-f>R||m.z+f<w)return;const D=this.result;for(let A=p;A<v;A++)for(let M=y;M<_;M++){const I=D.length;let O=!1;if(t.getConvexTrianglePillar(A,M,!1),it.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,n,x,s,o,a,l,e,t,u)),u&&O||(t.getConvexTrianglePillar(A,M,!0),it.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,n,x,s,o,a,l,e,t,u)),u&&O))return!0;if(D.length-I>2)return}}boxHeightfield(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,u)}convexHeightfield(e,t,n,i,s,o,a,l,c,h,u){const d=t.data,f=t.elementSize,g=e.boundingSphereRadius,x=BM,m=OM,p=UM;it.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-g)/f)-1,y=Math.ceil((p.x+g)/f)+1,_=Math.floor((p.y-g)/f)-1,E=Math.ceil((p.y+g)/f)+1;if(y<0||E<0||v>d.length||_>d[0].length)return;v<0&&(v=0),y<0&&(y=0),_<0&&(_=0),E<0&&(E=0),v>=d.length&&(v=d.length-1),y>=d.length&&(y=d.length-1),E>=d[0].length&&(E=d[0].length-1),_>=d[0].length&&(_=d[0].length-1);const w=[];t.getRectMinMax(v,_,y,E,w);const R=w[0],D=w[1];if(!(p.z-g>D||p.z+g<R))for(let A=v;A<y;A++)for(let M=_;M<E;M++){let I=!1;if(t.getConvexTrianglePillar(A,M,!1),it.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,x,s,o,a,l,null,null,u,m,null)),u&&I||(t.getConvexTrianglePillar(A,M,!0),it.pointToWorldFrame(i,o,t.pillarOffset,x),n.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,x,s,o,a,l,null,null,u,m,null)),u&&I))return!0}}sphereParticle(e,t,n,i,s,o,a,l,c,h,u){const d=IM;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=e.radius*e.radius){if(u)return!0;const g=this.createContactEquation(l,a,t,e,c,h);d.normalize(),g.rj.copy(d),g.rj.scale(e.radius,g.rj),g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,o,a,l,c,h,u){const d=RM;d.set(0,0,1),a.quaternion.vmult(d,d);const f=LM;if(i.vsub(a.position,f),d.dot(f)<=0){if(u)return!0;const x=this.createContactEquation(l,a,t,e,c,h);x.ni.copy(d),x.ni.negate(x.ni),x.ri.set(0,0,0);const m=PM;d.scale(d.dot(i),m),i.vsub(m,m),x.rj.copy(m),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,u)}convexParticle(e,t,n,i,s,o,a,l,c,h,u){let d=-1;const f=NM,g=FM;let x=null;const m=DM;if(m.copy(i),m.vsub(n,m),s.conjugate(Ad),Ad.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let p=0,v=e.faces.length;p!==v;p++){const y=[e.worldVertices[e.faces[p][0]]],_=e.worldFaceNormals[p];i.vsub(y[0],Cd);const E=-_.dot(Cd);if(x===null||Math.abs(E)<Math.abs(x)){if(u)return!0;x=E,d=p,f.copy(_)}}if(d!==-1){const p=this.createContactEquation(l,a,t,e,c,h);f.scale(x,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,y=p.rj;v.vadd(i,v),v.vsub(l.position,v),y.vadd(n,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,a,l,c,h,u){return this.convexHeightfield(t,e,i,n,o,s,l,a,c,h,u)}particleCylinder(e,t,n,i,s,o,a,l,c,h,u){return this.convexParticle(t,e,i,n,o,s,l,a,c,h,u)}sphereTrimesh(e,t,n,i,s,o,a,l,c,h,u){const d=Ww,f=Xw,g=qw,x=jw,m=$w,p=Yw,v=Qw,y=Gw,_=Vw,E=eM;it.pointToLocalFrame(i,o,n,m);const w=e.radius;v.lowerBound.set(m.x-w,m.y-w,m.z-w),v.upperBound.set(m.x+w,m.y+w,m.z+w),t.getTrianglesInAABB(v,E);const R=Hw,D=e.radius*e.radius;for(let N=0;N<E.length;N++)for(let z=0;z<3;z++)if(t.getVertex(t.indices[E[N]*3+z],R),R.vsub(m,_),_.lengthSquared()<=D){if(y.copy(R),it.pointToWorldFrame(i,o,y,R),R.vsub(n,_),u)return!0;let k=this.createContactEquation(a,l,e,t,c,h);k.ni.copy(_),k.ni.normalize(),k.ri.copy(k.ni),k.ri.scale(e.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),k.rj.copy(R),k.rj.vsub(l.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}for(let N=0;N<E.length;N++)for(let z=0;z<3;z++){t.getVertex(t.indices[E[N]*3+z],d),t.getVertex(t.indices[E[N]*3+(z+1)%3],f),f.vsub(d,g),m.vsub(f,p);const k=p.dot(g);m.vsub(d,p);let B=p.dot(g);if(B>0&&k<0&&(m.vsub(d,p),x.copy(g),x.normalize(),B=p.dot(x),x.scale(B,p),p.vadd(d,p),p.distanceTo(m)<e.radius)){if(u)return!0;const G=this.createContactEquation(a,l,e,t,c,h);p.vsub(m,G.ni),G.ni.normalize(),G.ni.scale(e.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),it.pointToWorldFrame(i,o,p,p),p.vsub(l.position,G.rj),it.vectorToWorldFrame(o,G.ni,G.ni),it.vectorToWorldFrame(o,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const A=Kw,M=Zw,I=Jw,O=zw;for(let N=0,z=E.length;N!==z;N++){t.getTriangleVertices(E[N],A,M,I),t.getNormal(E[N],O),m.vsub(A,p);let k=p.dot(O);if(O.scale(k,p),m.vsub(p,p),k=p.distanceTo(m),Tt.pointInTriangle(p,A,M,I)&&k<e.radius){if(u)return!0;let B=this.createContactEquation(a,l,e,t,c,h);p.vsub(m,B.ni),B.ni.normalize(),B.ni.scale(e.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),it.pointToWorldFrame(i,o,p,p),p.vsub(l.position,B.rj),it.vectorToWorldFrame(o,B.ni,B.ni),it.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}E.length=0}planeTrimesh(e,t,n,i,s,o,a,l,c,h,u){const d=new S,f=Bw;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,d);const x=new S;x.copy(d),it.pointToWorldFrame(i,o,x,d);const m=Ow;if(d.vsub(n,m),f.dot(m)<=0){if(u)return!0;const v=this.createContactEquation(a,l,e,t,c,h);v.ni.copy(f);const y=kw;f.scale(m.dot(f),y),d.vsub(y,y),v.ri.copy(y),v.ri.vsub(a.position,v.ri),v.rj.copy(d),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const ls=new S,ks=new S,zs=new S,Dw=new S,Nw=new S,Fw=new Ct,Uw=new Ct,Bw=new S,Ow=new S,kw=new S,zw=new S,Vw=new S;new S;const Hw=new S,Gw=new S,Ww=new S,Xw=new S,qw=new S,jw=new S,$w=new S,Yw=new S,Kw=new S,Zw=new S,Jw=new S,Qw=new _t,eM=[],Oo=new S,Td=new S,tM=new S,nM=new S,iM=new S;function sM(r,e,t){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=tM;r[(s+1)%i].vsub(o,a);const l=nM;a.cross(e,l);const c=iM;t.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const ko=new S,rM=new S,oM=new S,aM=new S,lM=[new S,new S,new S,new S,new S,new S],cM=new S,hM=new S,uM=new S,dM=new S,fM=new S,pM=new S,mM=new S,gM=new S,xM=new S,vM=new S,yM=new S,_M=new S,bM=new S,wM=new S;new S;new S;const MM=new S,SM=new S,EM=new S,TM=new S,AM=new S,CM=new S,RM=new S,LM=new S,PM=new S,IM=new S,Ad=new Ct,DM=new S;new S;const NM=new S,Cd=new S,FM=new S,UM=new S,BM=new S,OM=[0],kM=new S,zM=new S;class Rd{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Ld(e,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Ld(t,h)}}}function Ld(r,e){r.push((e&4294901760)>>16,e&65535)}const wl=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class VM{constructor(){this.data={keys:[]}}get(e,t){const n=wl(e,t);return this.data[n]}set(e,t,n){const i=wl(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=wl(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}let HM=class extends Hf{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Gf,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Tw,this.constraints=[],this.narrowphase=new Iw(this),this.collisionMatrix=new hd,this.collisionMatrixPrevious=new hd,this.bodyOverlapKeeper=new Rd,this.shapeOverlapKeeper=new Rd,this.contactmaterials=[],this.contactMaterialTable=new VM,this.defaultMaterial=new gs("default"),this.defaultContactMaterial=new Xi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof ir?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Tt.ALL,n.from=e,n.to=t,n.callback=i,Ml.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Tt.ANY,n.from=e,n.to=t,n.result=i,Ml.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Tt.CLOSEST,n.from=e,n.to=t,n.result=i,Ml.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof pe&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=It.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=It.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(It.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=jM,i=$M,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=pe.DYNAMIC;let d=-1/0;const f=this.constraints,g=qM;l.length();const x=l.x,m=l.y,p=l.z;let v=0;for(c&&(d=It.now()),v=0;v!==s;v++){const N=o[v];if(N.type===u){const z=N.force,k=N.mass;z.x+=k*x,z.y+=k*m,z.z+=k*p}}for(let N=0,z=this.subsystems.length;N!==z;N++)this.subsystems[N].update();c&&(d=It.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=It.now()-d);let y=f.length;for(v=0;v!==y;v++){const N=f[v];if(!N.collideConnected)for(let z=n.length-1;z>=0;z-=1)(N.bodyA===n[z]&&N.bodyB===i[z]||N.bodyB===n[z]&&N.bodyA===i[z])&&(n.splice(z,1),i.splice(z,1))}this.collisionMatrixTick(),c&&(d=It.now());const _=XM,E=t.length;for(v=0;v!==E;v++)_.push(t[v]);t.length=0;const w=this.frictionEquations.length;for(v=0;v!==w;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,_,this.frictionEquations,g),c&&(h.narrowphase=It.now()-d),c&&(d=It.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const R=t.length;for(let N=0;N!==R;N++){const z=t[N],k=z.bi,B=z.bj,Y=z.si,G=z.sj;let K;if(k.material&&B.material?K=this.getContactMaterial(k.material,B.material)||this.defaultContactMaterial:K=this.defaultContactMaterial,K.friction,k.material&&B.material&&(k.material.friction>=0&&B.material.friction>=0&&k.material.friction*B.material.friction,k.material.restitution>=0&&B.material.restitution>=0&&(z.restitution=k.material.restitution*B.material.restitution)),a.addEquation(z),k.allowSleep&&k.type===pe.DYNAMIC&&k.sleepState===pe.SLEEPING&&B.sleepState===pe.AWAKE&&B.type!==pe.STATIC){const ie=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),me=B.sleepSpeedLimit**2;ie>=me*2&&(k.wakeUpAfterNarrowphase=!0)}if(B.allowSleep&&B.type===pe.DYNAMIC&&B.sleepState===pe.SLEEPING&&k.sleepState===pe.AWAKE&&k.type!==pe.STATIC){const ie=k.velocity.lengthSquared()+k.angularVelocity.lengthSquared(),me=k.sleepSpeedLimit**2;ie>=me*2&&(B.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(k,B,!0),this.collisionMatrixPrevious.get(k,B)||(Mr.body=B,Mr.contact=z,k.dispatchEvent(Mr),Mr.body=k,B.dispatchEvent(Mr)),this.bodyOverlapKeeper.set(k.id,B.id),this.shapeOverlapKeeper.set(Y.id,G.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=It.now()-d,d=It.now()),v=0;v!==s;v++){const N=o[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(y=f.length,v=0;v!==y;v++){const N=f[v];N.update();for(let z=0,k=N.equations.length;z!==k;z++){const B=N.equations[z];a.addEquation(B)}}a.solve(e,this),c&&(h.solve=It.now()-d),a.removeAllEquations();const D=Math.pow;for(v=0;v!==s;v++){const N=o[v];if(N.type&u){const z=D(1-N.linearDamping,e),k=N.velocity;k.scale(z,k);const B=N.angularVelocity;if(B){const Y=D(1-N.angularDamping,e);B.scale(Y,B)}}}this.dispatchEvent(WM),c&&(d=It.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,I=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(e,M,I);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=It.now()-d),this.stepnumber+=1,this.dispatchEvent(GM);let O=!0;if(this.allowSleep)for(O=!1,v=0;v!==s;v++){const N=o[v];N.sleepTick(this.time),N.sleepState!==pe.SLEEPING&&(O=!0)}this.hasActiveBodies=O}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(fi,pi),e){for(let s=0,o=fi.length;s<o;s+=2)Sr.bodyA=this.getBodyById(fi[s]),Sr.bodyB=this.getBodyById(fi[s+1]),this.dispatchEvent(Sr);Sr.bodyA=Sr.bodyB=null}if(t){for(let s=0,o=pi.length;s<o;s+=2)Er.bodyA=this.getBodyById(pi[s]),Er.bodyB=this.getBodyById(pi[s+1]),this.dispatchEvent(Er);Er.bodyA=Er.bodyB=null}fi.length=pi.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(fi,pi),n){for(let s=0,o=fi.length;s<o;s+=2){const a=this.getShapeById(fi[s]),l=this.getShapeById(fi[s+1]);mi.shapeA=a,mi.shapeB=l,a&&(mi.bodyA=a.body),l&&(mi.bodyB=l.body),this.dispatchEvent(mi)}mi.bodyA=mi.bodyB=mi.shapeA=mi.shapeB=null}if(i){for(let s=0,o=pi.length;s<o;s+=2){const a=this.getShapeById(pi[s]),l=this.getShapeById(pi[s+1]);gi.shapeA=a,gi.shapeB=l,a&&(gi.bodyA=a.body),l&&(gi.bodyB=l.body),this.dispatchEvent(gi)}gi.bodyA=gi.bodyB=gi.shapeA=gi.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new _t;const Ml=new Tt,It=globalThis.performance||{};if(!It.now){let r=Date.now();It.timing&&It.timing.navigationStart&&(r=It.timing.navigationStart),It.now=()=>Date.now()-r}new S;const GM={type:"postStep"},WM={type:"preStep"},Mr={type:pe.COLLIDE_EVENT_NAME,body:null,contact:null},XM=[],qM=[],jM=[],$M=[],fi=[],pi=[],Sr={type:"beginContact",bodyA:null,bodyB:null},Er={type:"endContact",bodyA:null,bodyB:null},mi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},gi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},b={gravity:-21.39,friction:0,restitution:.336,moveSpeed:1143.7,jumpVelocity:15.08,rotationSpeed:9.323,airControl:.5,hopHeight:.545,hopSpeed:11.817,talkSpeed:4.335,linearDamping:.93,legKickForce:.889,legKickDecay:6.1093,walkLegSpeed:1.0424,walkLegHeight:.754,sunIntensity:3,ambientIntensity:1.2,shadowEnabled:!0,shadowMapSize:4096,shadowType:"PCF",shadowRadius:12.256,shadowBlurSamples:22,shadowBias:-82e-5,shadowNormalBias:.0213,shadowIntensity:.324,shadowCameraNear:1.6444,shadowCameraFar:119.27,shadowCameraSize:55.03,shadowCameraLeft:-50,shadowCameraRight:50,shadowCameraTop:50,shadowCameraBottom:-50,shadowAutoUpdate:!0,shadowCascades:1,useShader:!0,shaderSaturation:1.62,shaderBrightness:-.192,shaderContrast:.5,shaderGamma:.8795,shaderTintR:1.076,shaderTintG:1,shaderTintB:1,shaderTemperature:-.0579999999999999,vignetteEnabled:!1,vignetteIntensity:.25,vignetteRadius:1,vignetteSoftness:.35,chromaticEnabled:!1,chromaticIntensity:.005,chromaticRadial:!0,grainEnabled:!1,grainIntensity:.02,grainSpeed:.1,grainSize:3.5,sharpenEnabled:!1,sharpenIntensity:.8,bloomEnabled:!0,bloomIntensity:.806,bloomThreshold:.2,bloomRadius:.05,cameraHeight:15,cameraDistance:16.34,cameraLerp:.15471,cameraMinDistance:4.591,cameraMaxDistance:20,cameraZoomSpeed:1.7555,cameraRotateSpeed:.006662,cameraMinPitch:.1,cameraMaxPitch:1.4,cameraOrbitAngle:0,cameraPitchAngle:.6,spectatorDistance:34.04,spectatorPitch:.1,spectatorSpeed:.22866,spectatorHeight:8.7,jiggleEnabled:!0,jiggleIntensity:.15,jiggleSpeed:12,jiggleDamping:5,jiggleBounce:.8,jiggleMovementResponse:1,jiggleWalkWobble:.1968,jiggleWalkSpeed:10,tongueRange:12,tongueExtendDuration:.15,tongueRetractDuration:.1,tongueConeAngle:18,tongueMagnetRadius:.5,tongueAngleWeight:.7,tongueDistanceWeight:.3,tongueGrappleForce:25,tongueGrabForce:15,tongueCooldown:.5,tongueColor:"#ff6b9d",tongueTipSize:.15,tongueThicknessBase:.08,tongueThicknessTip:.04,tongueDebugEnabled:!1,jiggleReturnSpeed:8,punchSwingDistance:2.537,punchSwingSpeed:6.35,punchReturnSpeed:9.38,punchCooldown:.3,punchLegRotation:.1,punchHitRadius:2,vfxEnabled:!0,vfxDustCount:3,vfxDustSize:.0905,vfxDustLife:.6,vfxImpactCount:16,vfxImpactSize:.372,vfxImpactLife:.4915,vfxWalkInterval:.12,maxHealth:200,punchDamageMin:6,punchDamageMax:10,criticalDamageMin:15,criticalDamageMax:20,criticalChance:.15,knockbackForce:15,knockbackUpward:8,respawnTime:2.035,deathFadeDuration:1.0025,ballRadius:.8282,ballMass:.6225,ballLinearDamping:.533,ballAngularDamping:.975,ballBounciness:.7,ballFriction:.422,ballKickForce:21.4,ballKickUpward:6.885,ballSpawnHeight:30,ballResetHeight:-20,scooterSpeed:18,scooterTurnSpeed:3,scooterMaxTurn:.5,scooterWheelSpeed:15,scooterAcceleration:8,scooterDeceleration:5,scooterSpawnRadius:2,scooterDismountKey:"KeyE",scooterRiderY:.75,scooterLegOffsetX:0,scooterLegOffsetY:0,scooterLegOffsetZ:-.75,scooterLegRotationX:1.15840734641021,scooterLegRotationY:.0584073464102071,scooterLegRotationZ:.0584073464102071};class YM{constructor(){this.world=new HM,this.world.gravity.set(0,b.gravity,0),this.world.broadphase=new Gf,this.world.solver.iterations=10,this.groundMaterial=new gs("ground"),this.frogMaterial=new gs("frog"),this.updateMaterials();const e=new Zf;this.groundBody=new pe({mass:0,material:this.groundMaterial}),this.groundBody.addShape(e),this.groundBody.quaternion.setFromEuler(-Math.PI/2,0,0),this.groundBody.position.set(0,0,0),this.world.addBody(this.groundBody)}updateMaterials(){let e=this.world.contactmaterials.find(n=>n.materials.includes(this.groundMaterial)&&n.materials.includes(this.frogMaterial));e?(e.friction=b.friction,e.restitution=b.restitution):(e=new Xi(this.groundMaterial,this.frogMaterial,{friction:b.friction,restitution:b.restitution}),this.world.addContactMaterial(e));let t=this.world.contactmaterials.find(n=>n.materials[0]===this.frogMaterial&&n.materials[1]===this.frogMaterial);t||(t=new Xi(this.frogMaterial,this.frogMaterial,{friction:.1,restitution:.5}),this.world.addContactMaterial(t))}step(e){this.world.gravity.set(0,b.gravity,0),this.updateMaterials(),this.world.step(1/60,e,3)}}const xa=class xa{constructor(e,t,n,i){this.id=e,this.color=t,this.scene=n,this.physicsWorld=i,this.rider=null,this.velocity=0,this.facingAngle=0,this.wheelRotation=0,this.jumpCooldown=0,this.steerAmount=0,this.isHighlighted=!1,this.mesh=new mn,this.board=null,this.handle=null,this.wheels={backLeft:null,backRight:null,frontLeft:null,frontRight:null},this.allMeshes=[],this.body=null,this.loadModel(),this.createPhysics(),this.createPromptLabel(),n.add(this.mesh)}loadModel(){const e=new qi(.5,.1,1),t=new Ln({color:this.color}),n=new lt(e,t);n.position.y=.2,this.mesh.add(n),xa.loader.load("/models/scooter.glb",i=>{this.mesh.remove(n),n.geometry.dispose(),n.material.dispose();const s=i.scene;s.scale.set(.5,.5,.5),s.rotation.y=Math.PI,s.traverse(o=>{if(o.isMesh){o.castShadow=!0,o.receiveShadow=!0,this.allMeshes.push(o);const a=o.name.toLowerCase();(a.includes("board")||a.includes("deck"))&&(o.material=o.material.clone(),o.material.color.set(this.color),this.board=o),a.includes("handle")&&(this.handle=o),a.includes("wheel")&&(a.includes("back")&&a.includes("left")&&(this.wheels.backLeft=o),a.includes("back")&&a.includes("right")&&(this.wheels.backRight=o),a.includes("front")&&a.includes("left")&&(this.wheels.frontLeft=o),a.includes("front")&&a.includes("right")&&(this.wheels.frontRight=o))}}),this.mesh.add(s),console.log("Scooter model loaded!")})}createPhysics(){if(!this.physicsWorld)return;const e=new ph(.5);this.body=new pe({mass:5,shape:e,material:this.physicsWorld.frogMaterial,linearDamping:.9,angularDamping:.99,fixedRotation:!0}),this.body.position.set(0,1,0),this.physicsWorld.world.addBody(this.body)}createPromptLabel(){const e=document.createElement("div");e.className="scooter-prompt",e.textContent="Press E to ride",e.style.cssText=`
            color: white;
            background: rgba(0,0,0,0.7);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-family: sans-serif;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.2s;
        `,this.promptLabel=new Rr(e),this.promptLabel.position.set(0,1.5,0),this.mesh.add(this.promptLabel)}setHighlight(e){this.isHighlighted=e,this.promptLabel&&this.promptLabel.element&&(this.promptLabel.element.style.opacity=e?"1":"0")}mount(e){return this.rider?!1:(this.rider=e,e.isRidingScooter=!0,e.currentScooter=this,this.velocity=0,this.facingAngle=e.mesh.rotation.y,this.setHighlight(!1),this.updateRiderPosition(),console.log(`Frog ${e.id} mounted scooter`),!0)}dismount(){if(!this.rider)return;const e=this.rider;e.leftLeg&&(e.leftLeg.visible=!0),e.rightLeg&&(e.rightLeg.visible=!0),e.leftLeg&&e._originalLeftLegX!==void 0&&(e.leftLeg.position.x=e._originalLeftLegX,e.leftLeg.position.y=e._originalLeftLegY,e.leftLeg.position.z=e._originalLeftLegZ,e.leftLeg.rotation.x=0,e.leftLeg.rotation.y=0,e.leftLeg.rotation.z=0),e.rightLeg&&e._originalRightLegX!==void 0&&(e.rightLeg.position.x=e._originalRightLegX,e.rightLeg.position.y=e._originalRightLegY,e.rightLeg.position.z=e._originalRightLegZ,e.rightLeg.rotation.x=0,e.rightLeg.rotation.y=0,e.rightLeg.rotation.z=0);const t=new P(1.5,0,0);t.applyAxisAngle(new P(0,1,0),this.facingAngle),e.mesh.position.copy(this.mesh.position),e.mesh.position.add(t),e.mesh.position.y+=.5,e.body&&(e.body.position.copy(e.mesh.position),e.body.velocity.set(0,5,0)),e.isRidingScooter=!1,e.currentScooter=null,this.rider=null,console.log(`Frog ${e.id} dismounted scooter`)}updateRiderPosition(){if(!this.rider)return;this.rider.mesh.position.copy(this.mesh.position),this.rider.mesh.position.y+=b.scooterRiderY,this.rider.mesh.rotation.y=this.facingAngle;const e=this.steerAmount*.3;this.rider.leftLeg&&(this.rider.leftLeg.position.x=this.rider._originalLeftLegX+b.scooterLegOffsetX,this.rider.leftLeg.position.y=this.rider._originalLeftLegY+b.scooterLegOffsetY,this.rider.leftLeg.position.z=this.rider._originalLeftLegZ+b.scooterLegOffsetZ,this.rider.leftLeg.rotation.x=b.scooterLegRotationX,this.rider.leftLeg.rotation.y=b.scooterLegRotationY+e,this.rider.leftLeg.rotation.z=b.scooterLegRotationZ),this.rider.rightLeg&&(this.rider.rightLeg.position.x=this.rider._originalRightLegX-b.scooterLegOffsetX,this.rider.rightLeg.position.y=this.rider._originalRightLegY+b.scooterLegOffsetY,this.rider.rightLeg.position.z=this.rider._originalRightLegZ+b.scooterLegOffsetZ,this.rider.rightLeg.rotation.x=b.scooterLegRotationX,this.rider.rightLeg.rotation.y=-b.scooterLegRotationY+e,this.rider.rightLeg.rotation.z=-b.scooterLegRotationZ),this.rider.body&&this.rider.body.position.set(this.rider.mesh.position.x,this.rider.mesh.position.y,this.rider.mesh.position.z)}update(e,t){if(!this.rider||!this.rider.isLocal){this.body&&this.mesh.position.copy(this.body.position),this.animateWheels(e);return}const n=t.keys.forward?1:t.keys.backward?-1:0,i=t.keys.left?1:t.keys.right?-1:0,s=t.keys.jump;if(n!==0?(this.velocity+=n*b.scooterAcceleration*e,this.velocity=kt.clamp(this.velocity,-b.scooterSpeed*.5,b.scooterSpeed)):Math.abs(this.velocity)>.1?this.velocity-=Math.sign(this.velocity)*b.scooterDeceleration*e:this.velocity=0,Math.abs(this.velocity)>.5){const o=this.velocity>0?1:-1;this.facingAngle+=i*b.scooterTurnSpeed*e*o}if(this.steerAmount=i,this.body){const o=Math.sin(this.facingAngle)*this.velocity,a=Math.cos(this.facingAngle)*this.velocity;this.body.velocity.x=o,this.body.velocity.z=a,this.jumpCooldown>0&&(this.jumpCooldown-=e);const l=Math.abs(this.body.velocity.y)<1&&this.body.position.y<3;s&&l&&this.jumpCooldown<=0&&(this.body.velocity.y=10,this.jumpCooldown=.5)}this.mesh.position.copy(this.body.position),this.mesh.rotation.y=this.facingAngle,this.handle&&(this.handle.rotation.y=this.steerAmount*b.scooterMaxTurn),this.updateRiderPosition(),this.animateWheels(e),this.spawnDustParticles(e)}animateWheels(e){this.wheelRotation+=this.velocity*b.scooterWheelSpeed*e,[this.wheels.backLeft,this.wheels.backRight,this.wheels.frontLeft,this.wheels.frontRight].forEach(n=>{n&&(n.rotation.x=this.wheelRotation)})}spawnDustParticles(e){if(!(!this.particles||!b.vfxEnabled)&&!(Math.abs(this.velocity)<2)&&(this._dustTimer=(this._dustTimer||0)+e,this._dustTimer>.1)){this._dustTimer=0;const t=this.mesh.position.clone();t.y=.1,this.particles.spawnWalkDust(t,this.color||"#ffffff")}}dispose(){this.body&&this.physicsWorld&&this.physicsWorld.world.removeBody(this.body),this.mesh.parent&&this.mesh.parent.remove(this.mesh)}};ro(xa,"loader",new ch);let da=xa;const Fi=class Fi{constructor(e,t,n,i=!1){if(this.id=e,this.isLocal=i,this.color=t,this.mesh=new mn,this.bodyMesh=new mn,this.mesh.add(this.bodyMesh),Fi.modelGeometry){const s=Fi.modelGeometry.clone();this.applyColor(s),this.bodyMesh.add(s)}else Fi.loader.load("/models/frog.glb",s=>{const o=s.scene;o.scale.set(.5,.5,.5),o.position.y=-.6,o.rotation.y=Math.PI,Fi.modelGeometry=o.clone(),this.applyColor(o),this.bodyMesh.add(o)},void 0,s=>{console.error("Error loading model:",s);const o=new Wi(.5),a=new Ln({color:this.color});this.bodyMesh.add(new lt(o,a))});if(this.chatBubbleDiv=document.createElement("div"),this.chatBubbleDiv.className="chat-container",this.chatBubble=new Rr(this.chatBubbleDiv),this.chatBubble.position.set(0,1.5,0),this.mesh.add(this.chatBubble),this.chatTimer=null,n){const s=new ph(.5);this.isLocal?(this.body=new pe({mass:1,shape:s,material:n.frogMaterial,fixedRotation:!0}),this.body.linearDamping=b.linearDamping):this.body=new pe({type:pe.KINEMATIC,shape:s,material:n.frogMaterial}),this.body.position.set(0,5,0),this.body.updateMassProperties(),n.world.addBody(this.body)}else this.body=null;this.onGround=!1,this.jumpCooldown=0,this.facingAngle=0,this.moveAnimTimer=0,this.isRidingScooter=!1,this.currentScooter=null,this.jiggleVelocity=0,this.jiggleOffset=0,this.lastVelocityY=0,this.wasMoving=!1,this.isPunching=!1,this.punchProgress=0,this.punchCooldownTimer=0,this.walkDustTimer=0,this.wasOnGround=!1,this.particles=null,this.health=b.maxHealth,this.isDead=!1,this.deathTimer=0,this.respawnTimer=0,this.healthBarVisibleTimer=0,this.healthBarVisible=!1,this.isAFK=!1,this.tongue={state:"idle",target:null,lockedPoint:new P,startTime:0,progress:0,cooldownTimer:0},this.tongueStartPos=new P,this.flies=0,this.tongueLine=null,this.tongueTip=null,this.tongueTube=null,this.healthBarContainer=document.createElement("div"),this.healthBarContainer.className="health-bar-container",this.healthBarContainer.style.opacity="0",this.healthBarContainer.style.transition="opacity 0.3s ease",this.healthBarContainer.innerHTML=`
            <div class="health-bar-bg">
                <div class="health-bar-fill"></div>
            </div>
        `,this.healthBarFill=this.healthBarContainer.querySelector(".health-bar-fill"),this.healthBar=new Rr(this.healthBarContainer),this.healthBar.position.set(0,2,0),this.mesh.add(this.healthBar),this.damageToasts=[],this.nameTagDiv=document.createElement("div"),this.nameTagDiv.className="name-tag",this.nameTagDiv.textContent=`Frog ${e.substr(0,4)}`,this.nameTag=new Rr(this.nameTagDiv),this.nameTag.position.set(0,1.2,0),this.mesh.add(this.nameTag)}setName(e){this.name=e,this.updateNameTag()}updateNameTag(){let e=`<span>${this.name||"Frog"}</span>`;this.isAFK&&(e+='<span class="afk-badge">AFK</span>'),this.nameTagDiv.innerHTML=e}update(e,t,n,i=0){if(this.isRidingScooter&&this.currentScooter){this.updateHealthBar(),this.updateHealthBarVisibility(e),this.updateJiggle(e,Math.abs(this.currentScooter.velocity)>1);return}if(!this.body)return;if(this.isDead){this.deathTimer+=e,this.respawnTimer-=e,this.respawnTimer<=0&&this.respawn();return}this.updateHealthBar(),this.updateHealthBarVisibility(e),this.mesh.position.copy(this.body.position);const s=new P(0,1,0);if(this.mesh.quaternion.setFromAxisAngle(s,this.facingAngle),this.chatTimer>0,!t)return;if(this.onGround=!1,this.body.world)for(const c of this.body.world.contacts){let h=0;if(c.bi===this.body?h=-c.ni.y:c.bj===this.body&&(h=c.ni.y),h>.5){this.onGround=!0;break}}this.body.position.y<.6&&(this.onGround=!0);const o=b.moveSpeed*e,a=new P(0,0,0);if(t.keys.forward&&(a.z-=1),t.keys.backward&&(a.z+=1),t.keys.left&&(a.x-=1),t.keys.right&&(a.x+=1),a.length()>0){a.normalize();const c=Math.cos(i),h=Math.sin(i),u=new P(a.x*c+a.z*h,0,-a.x*h+a.z*c);let f=Math.atan2(u.x,u.z)-this.facingAngle;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;this.facingAngle+=f*b.rotationSpeed*e;const g=new S(u.x*o,0,u.z*o);if(this.body.applyForce(g,this.body.position),this.onGround){this.moveAnimTimer+=e*b.hopSpeed;const x=Math.abs(Math.sin(this.moveAnimTimer))*b.hopHeight;this.bodyMesh.position.y=x,this.particles&&(this.walkDustTimer-=e,this.walkDustTimer<=0&&(this.particles.spawnWalkDust(this.mesh.position,13413e3),this.walkDustTimer=b.vfxWalkInterval))}}else this.moveAnimTimer=0,this.bodyMesh.position.y=kt.lerp(this.bodyMesh.position.y,0,e*10);if(this.onGround&&t.keys.jump&&this.jumpCooldown<=0&&(this.body.velocity.y=b.jumpVelocity,this.jumpCooldown=1,this.jumpKickAmount=1,this.particles&&this.particles.spawnJumpDust(this.mesh.position,13413e3)),this.onGround&&!this.wasOnGround){const c=Math.abs(this.lastVelocityY);this.particles&&c>3&&(this.particles.spawnLandingDust(this.mesh.position,c,13413e3),this.isLocal&&c>8&&this.world&&this.world.triggerScreenShake(c*.05,.2))}this.wasOnGround=this.onGround,this.jumpCooldown>0&&(this.jumpCooldown-=e),n&&(this.lookTarget=n,this.updateEyes(n));const l=a.length()>0;if(this.updateAnimations(e,l,this.onGround),this.updateJiggle(e,l),this.updatePunch(e,t),this.updateTongue(e),this.isTalking&&this.mouthMesh&&this.mouthBaseScale){const c=b.talkSpeed,h=.5+Math.sin(Date.now()/100*c)*.5;this.mouthMesh.scale.y=this.mouthBaseScale.y*(1+h*.5)}this.bodyUniforms&&(this.bodyUniforms.uTime.value=performance.now()/1e3,this.bodyUniforms.uSpeed.value=b.shaderSpeed,this.bodyUniforms.uIntensity.value=b.shaderIntensity,this.bodyUniforms.uMix.value=b.shaderColorMix)}updatePosition(e,t){this.targetPos=new P(e.x,e.y,e.z),this.targetRot=new an(t.qx,t.qy,t.qz,t.qw),this.body&&this.body.position.set(e.x,e.y,e.z)}getSyncState(){var s,o,a,l,c,h;if(!this.body)return null;const e=this.isRidingScooter?this.mesh.position:this.body.position,t=this.isRidingScooter?{x:0,y:0,z:0}:this.body.velocity,n=this.isRidingScooter&&this.currentScooter?this.currentScooter.steerAmount:0;let i=0;return this.tongue.state==="extending"?i=1:this.tongue.state==="retracting"?i=2:this.tongue.state==="attached"&&(i=3),{x:e.x,y:e.y,z:e.z,qx:this.mesh.quaternion.x,qy:this.mesh.quaternion.y,qz:this.mesh.quaternion.z,qw:this.mesh.quaternion.w,vx:t.x,vy:t.y,vz:t.z,lookX:((s=this.lookTarget)==null?void 0:s.x)||0,lookY:this.isRidingScooter&&this.currentScooter?1e9+parseInt(this.currentScooter.color.replace("#",""),16):((o=this.lookTarget)==null?void 0:o.y)||0,lookZ:this.isRidingScooter&&this.currentScooter?1e3+n*10:((a=this.lookTarget)==null?void 0:a.z)||0,isGrounded:this.onGround,isTalking:this.isTalking,isPunching:this.isPunching,punchProgress:this.punchProgress+(this.isRidingScooter?100:0)+i*10,tongueTargetX:((l=this.tongue.lockedPoint)==null?void 0:l.x)||0,tongueTargetY:((c=this.tongue.lockedPoint)==null?void 0:c.y)||0,tongueTargetZ:((h=this.tongue.lockedPoint)==null?void 0:h.z)||0,tongueProgress:this.tongue.progress||0}}applySyncState(e){if(this.targetPos=new P(e.x,e.y,e.z),this.targetRot=new an(e.qx,e.qy,e.qz,e.qw),this.remoteVelocity=new P(e.vx,e.vy,e.vz),e.lookX!==void 0){let s=e.lookY,o=e.lookZ;if(s>=1e9){const a=s-1e9;this.remoteScooterColor="#"+a.toString(16).padStart(6,"0"),s=0}o>=990&&o<=1010?(this.remoteSteerAmount=(o-1e3)/10,o=0):this.remoteSteerAmount=0,this.targetLook=new P(e.lookX,s,o)}this.isRemoteGrounded=e.isGrounded,this.isRemoteTalking=e.isTalking,this.isRemotePunching=e.isPunching;let t=e.punchProgress||0,n=!1,i=0;t>=100&&(n=!0,t-=100),t>=30?(i=3,t-=30):t>=20?(i=2,t-=20):t>=10&&(i=1,t-=10),this.remotePunchProgress=t,this.remoteTongueStateCode=i,e.tongueTargetX!==void 0&&(this.remoteTongueTarget=new P(e.tongueTargetX,e.tongueTargetY,e.tongueTargetZ),this.remoteTongueProgress=e.tongueProgress||0),this.isRemoteRidingScooter!==n&&(this.isRemoteRidingScooter=n,this.isRemoteRidingScooter&&!this.remoteScooter?(this.remoteScooter=new da(`scooter_remote_${this.id}`,this.remoteScooterColor||this.color,this.mesh,null),this.remoteScooter.particles=this.particles,this.remoteScooter.mesh.position.set(0,-.6,0),this.remoteScooter.rider=this):!this.isRemoteRidingScooter&&this.remoteScooter&&(this.remoteScooter.dispose(),this.remoteScooter=null,this.leftLeg&&this._originalLeftLegX!==void 0&&(this.leftLeg.position.x=this._originalLeftLegX,this.leftLeg.position.y=this._originalLeftLegY,this.leftLeg.position.z=this._originalLeftLegZ,this.leftLeg.rotation.x=0,this.leftLeg.rotation.y=0,this.leftLeg.rotation.z=0),this.rightLeg&&this._originalRightLegX!==void 0&&(this.rightLeg.position.x=this._originalRightLegX,this.rightLeg.position.y=this._originalRightLegY,this.rightLeg.position.z=this._originalRightLegZ,this.rightLeg.rotation.x=0,this.rightLeg.rotation.y=0,this.rightLeg.rotation.z=0))),this.body&&this.body.position.set(e.x,e.y,e.z)}applyServerPhysics(e){if(e)if(this.serverTargetPos={x:e.x,y:e.y,z:e.z},this.serverVelocity={x:e.vx,y:e.vy,z:e.vz},this.serverFacingAngle=e.facingAngle,this.serverIsGrounded=e.isGrounded,this.serverIsPunching=e.isPunching,this.serverIsDead=e.isDead,this.serverHealth=e.health,this.health!==e.health&&(this.health=e.health,this.updateHealthBar(),this.health<b.maxHealth&&this.showHealthBar()),e.isDead&&!this.isDead&&this.die(!0),this.isLocal){if(this.body){const t=e.x-this.body.position.x,n=e.y-this.body.position.y,i=e.z-this.body.position.z,s=Math.sqrt(t*t+n*n+i*i);s>.5&&(s>3?(this.body.position.set(e.x,e.y,e.z),this.body.velocity.set(e.vx,e.vy,e.vz)):(this.body.position.x+=t*.3,this.body.position.y+=n*.3,this.body.position.z+=i*.3))}}else{this.targetPos=new P(e.x,e.y,e.z),this.remoteVelocity=new P(e.vx,e.vy,e.vz),this.isRemoteGrounded=e.isGrounded,this.isRemotePunching=e.isPunching;const t=new an;t.setFromAxisAngle(new P(0,1,0),e.facingAngle),this.targetRot=t,this.body&&this.body.position.set(e.x,e.y,e.z)}}updateRemote(e){if(!this.targetPos)return;this.mesh.position.lerp(this.targetPos,15*e),this.targetRot&&this.mesh.quaternion.slerp(this.targetRot,15*e),this.targetLook&&this.updateEyes(this.targetLook);const t=this.remoteVelocity||new P,i=t.length()>.1,s=this.isRemoteGrounded!==void 0?this.isRemoteGrounded:this.mesh.position.y<.1;if(!s&&t.y>2&&this.wasRemoteGrounded&&(this.jumpKickAmount=1,this.particles&&this.particles.spawnJumpDust(this.mesh.position,13413e3)),s&&!this.wasRemoteGrounded&&this.particles&&Math.abs(this.lastRemoteVelY)>2&&this.particles.spawnLandingDust(this.mesh.position,Math.abs(this.lastRemoteVelY),13413e3),this.wasRemoteGrounded=s,this.lastRemoteVelY=t.y,this.updateAnimations(e,i,s),this.updatePunch(e,null),this.isRemoteTalking&&this.mouthMesh&&this.mouthBaseScale){const o=b.talkSpeed,a=.5+Math.sin(Date.now()/100*o)*.5;this.mouthMesh.scale.y=this.mouthBaseScale.y*(1+a*.5)}else this.mouthMesh&&this.mouthBaseScale&&this.mouthMesh.scale.lerp(this.mouthBaseScale,e*10);if(i&&s){this.moveAnimTimer=(this.moveAnimTimer||0)+15*e;const o=Math.abs(Math.sin(this.moveAnimTimer))*b.hopHeight;this.bodyMesh.position.y=o,this.particles&&(this.walkDustTimer=(this.walkDustTimer||0)-e,this.walkDustTimer<=0&&(this.particles.spawnWalkDust(this.mesh.position,13413e3),this.walkDustTimer=b.vfxWalkInterval))}else this.moveAnimTimer=0,this.bodyMesh.position.y=kt.lerp(this.bodyMesh.position.y,0,e*10);if(this.body&&(this.body.velocity.copy(t),this.updateJiggle(e,i)),this.isRemoteRidingScooter&&this.remoteScooter){const o=this.remoteSteerAmount||0;this.remoteScooter.steerAmount=o,this.remoteScooter.handle&&(this.remoteScooter.handle.rotation.y=o*b.scooterMaxTurn);const a=o*.3;if(this.leftLeg&&this._originalLeftLegZ!==void 0&&(this.leftLeg.position.x=this._originalLeftLegX+b.scooterLegOffsetX,this.leftLeg.position.y=this._originalLeftLegY+b.scooterLegOffsetY,this.leftLeg.position.z=this._originalLeftLegZ+b.scooterLegOffsetZ,this.leftLeg.rotation.x=b.scooterLegRotationX,this.leftLeg.rotation.y=b.scooterLegRotationY+a,this.leftLeg.rotation.z=b.scooterLegRotationZ),this.rightLeg&&this._originalRightLegZ!==void 0&&(this.rightLeg.position.x=this._originalRightLegX-b.scooterLegOffsetX,this.rightLeg.position.y=this._originalRightLegY+b.scooterLegOffsetY,this.rightLeg.position.z=this._originalRightLegZ+b.scooterLegOffsetZ,this.rightLeg.rotation.x=b.scooterLegRotationX,this.rightLeg.rotation.y=-b.scooterLegRotationY+a,this.rightLeg.rotation.z=-b.scooterLegRotationZ),this.particles&&b.vfxEnabled){const l=this.mesh.position;this._lastRemoteScooterPos||(this._lastRemoteScooterPos=l.clone());const c=l.distanceTo(this._lastRemoteScooterPos);if(this._lastRemoteScooterPos.copy(l),c>.05&&(this._remoteScooterDustTimer=(this._remoteScooterDustTimer||0)+e,this._remoteScooterDustTimer>.1)){this._remoteScooterDustTimer=0;const h=this.mesh.position.clone();h.y=.1,this.particles.spawnWalkDust(h,this.color||"#ffffff")}}}if(this.updateHealthBarVisibility(e),this.remoteTongueStateCode>0&&this.remoteTongueTarget){if(this.tongueLine||this.createTongueVisual(),this.tongueLine&&this.tongueTip){this.tongueLine.visible=!0,this.tongueTip.visible=!0;const o=new P(0,.3,.5);o.applyQuaternion(this.mesh.quaternion);const a=this.mesh.position.clone().add(o),l=new P().lerpVectors(a,this.remoteTongueTarget,this.remoteTongueProgress),c=this.tongueLine.geometry.attributes.position.array;c[0]=a.x,c[1]=a.y,c[2]=a.z,c[3]=l.x,c[4]=l.y,c[5]=l.z,this.tongueLine.geometry.attributes.position.needsUpdate=!0,this.tongueTip.position.copy(l)}}else this.tongueLine&&(this.tongueLine.visible=!1,this.tongueTip&&(this.tongueTip.visible=!1))}showChat(e){const t=document.createElement("div");for(t.className="chat-bubble",t.innerText=e,this.chatBubbleDiv.prepend(t);this.chatBubbleDiv.children.length>9;)this.chatBubbleDiv.removeChild(this.chatBubbleDiv.lastElementChild);t.addEventListener("animationend",()=>{t.parentNode&&t.remove()}),this.isTalking=!0,this.chatTimer&&clearTimeout(this.chatTimer);const n=Math.min(3e3,e.length*100);this.chatTimer=setTimeout(()=>{this.isTalking=!1,this.mouthMesh&&this.mouthBaseScale&&this.mouthMesh.scale.copy(this.mouthBaseScale)},n)}applyColor(e){this.pupils=[],this.leftLeg=null,this.rightLeg=null,console.log("Analyzing Model Meshes:"),e.traverse(t=>{if(t.isMesh){const n=t.name.toLowerCase();if(t.material=t.material.clone(),t.castShadow=!0,t.receiveShadow=!0,n.includes("pupil"))t.material.color.set(0),t.userData.initialPos=t.position.clone(),this.pupils.push(t);else if(n.includes("eye")||n.includes("white"))t.material.color.set(16777215);else if(n.includes("mouth")){const i=new Ee(this.color);i.multiplyScalar(.8),t.material.color.set(i),this.mouthMesh=t,this.mouthBaseScale=t.scale.clone()}else n.includes("leftleg")?(this.leftLeg=t,this.leftLegBasePos=t.position.clone(),this._originalLeftLegX=t.position.x,this._originalLeftLegY=t.position.y,this._originalLeftLegZ=t.position.z,t.material.color.set(this.color)):n.includes("rightleg")?(this.rightLeg=t,this.rightLegBasePos=t.position.clone(),this._originalRightLegX=t.position.x,this._originalRightLegY=t.position.y,this._originalRightLegZ=t.position.z,t.material.color.set(this.color)):n.includes("assleft")||n.includes("ass_left")?(this.assLeft=t,this.assLeftBasePos=t.position.clone(),this.assLeftBaseScale=t.scale.clone(),t.material.color.set(this.color)):n.includes("assright")||n.includes("ass_right")?(this.assRight=t,this.assRightBasePos=t.position.clone(),this.assRightBaseScale=t.scale.clone(),t.material.color.set(this.color)):t.material.color.set(this.color)}}),console.log(`Legs found: Left=${!!this.leftLeg}, Right=${!!this.rightLeg}`),console.log(`Ass found: Left=${!!this.assLeft}, Right=${!!this.assRight}`)}setColor(e){this.color=e,this.bodyMesh&&this.bodyMesh.traverse(t=>{if(t.isMesh&&t.material){const n=t.name.toLowerCase();if(n.includes("pupil")||n.includes("eye")||n.includes("white"))return;if(n.includes("mouth")){const i=new Ee(e);i.multiplyScalar(.8),t.material.color.set(i)}else t.material.color.set(e)}})}updateAnimations(e,t,n){if(!(!this.leftLeg||!this.rightLeg)){if(n)if(this.jumpKickAmount=0,t){const i=Date.now()/1e3*(b.hopSpeed*b.walkLegSpeed),s=Math.sin(i),o=Math.max(0,s)*b.walkLegHeight,a=Math.max(0,-s)*b.walkLegHeight;this.leftLeg.position.y=this.leftLegBasePos.y+o,this.rightLeg.position.y=this.rightLegBasePos.y+a}else this.leftLeg.position.lerp(this.leftLegBasePos,e*10),this.rightLeg.position.lerp(this.rightLegBasePos,e*10);else if(this.jumpKickAmount>0){this.jumpKickAmount-=e*b.legKickDecay,this.jumpKickAmount<0&&(this.jumpKickAmount=0);const i=this.jumpKickAmount*this.jumpKickAmount*this.jumpKickAmount,s=-b.legKickForce*i;this.leftLeg.position.y=this.leftLegBasePos.y+s,this.rightLeg.position.y=this.rightLegBasePos.y+s}}}updateJiggle(e,t){if(!b.jiggleEnabled||!this.assLeft&&!this.assRight)return;const n=this.body?this.body.velocity.y:0,i=this.lastVelocityY<-2&&n>this.lastVelocityY?Math.abs(this.lastVelocityY)*.1*b.jiggleBounce:0,s=t!==this.wasMoving?b.jiggleMovementResponse*.5:0,o=t?Math.sin(Date.now()*.01*b.jiggleSpeed)*.3:0;this.jiggleVelocity+=i+s;const a=-this.jiggleOffset*b.jiggleSpeed*b.jiggleSpeed,l=-this.jiggleVelocity*b.jiggleDamping;this.jiggleVelocity+=(a+l)*e,this.jiggleOffset+=this.jiggleVelocity*e,this.jiggleOffset=Math.max(-1,Math.min(1,this.jiggleOffset));const c=(this.jiggleOffset+o)*b.jiggleIntensity,h=Date.now()*.001*b.jiggleWalkSpeed,u=t?Math.sin(h)*b.jiggleWalkWobble:0,d=t?Math.sin(h+Math.PI)*b.jiggleWalkWobble:0,f=t?Math.sin(h)*b.jiggleWalkWobble*.5:0,g=t?Math.sin(h+Math.PI)*b.jiggleWalkWobble*.5:0,x=b.jiggleReturnSpeed;if(this.assLeft&&this.assLeftBaseScale){const m=c;this.assLeft.scale.x=this.assLeftBaseScale.x*(1+m*.5),this.assLeft.scale.y=this.assLeftBaseScale.y*(1-m*.3),this.assLeft.scale.z=this.assLeftBaseScale.z*(1+m*.4);const p=this.assLeftBasePos.z+u;this.assLeft.position.z=kt.lerp(this.assLeft.position.z,p,e*x),this.assLeft.position.y=this.assLeftBasePos.y+m*.1,this.assLeft.rotation.x=kt.lerp(this.assLeft.rotation.x,f,e*x)}if(this.assRight&&this.assRightBaseScale){const m=c*.9+Math.sin(Date.now()*.012*b.jiggleSpeed)*.1*b.jiggleIntensity;this.assRight.scale.x=this.assRightBaseScale.x*(1+m*.5),this.assRight.scale.y=this.assRightBaseScale.y*(1-m*.3),this.assRight.scale.z=this.assRightBaseScale.z*(1+m*.4);const p=this.assRightBasePos.z+d;this.assRight.position.z=kt.lerp(this.assRight.position.z,p,e*x),this.assRight.position.y=this.assRightBasePos.y+m*.1,this.assRight.rotation.x=kt.lerp(this.assRight.rotation.x,g,e*x)}this.lastVelocityY=n,this.wasMoving=t}updatePunch(e,t){if(!(!this.rightLeg||!this.rightLegBasePos))if(this.punchCooldownTimer>0&&(this.punchCooldownTimer-=e),t&&t.consumePunch()&&this.punchCooldownTimer<=0&&!this.isPunching&&(this.isPunching=!0,this.punchProgress=0,this.punchCooldownTimer=b.punchCooldown,this.punchHitChecked=!1,this.isLocal&&this.world&&this.world.network&&this.world.network.sendPunch()),this.isPunching){this.punchProgress<1?(this.punchProgress+=e*b.punchSwingSpeed,this.punchProgress>=1&&(this.punchProgress=1)):this.isPunching=!1;const n=Math.sin(this.punchProgress*Math.PI)*b.punchSwingDistance;if(this.rightLeg.position.z=this.rightLegBasePos.z-n,this.rightLeg.position.y=this.rightLegBasePos.y+n*.15,this.rightLeg.rotation.x=n*b.punchLegRotation,this.punchProgress>.4&&this.punchProgress<.6&&!this.punchHitChecked){this.punchHitChecked=!0;const i=new P(Math.sin(this.facingAngle),0,Math.cos(this.facingAngle));let s=this.mesh.position.clone();if(this.rightLeg&&(this.rightLeg.getWorldPosition(s),s.add(i.clone().multiplyScalar(.5))),this.onPunchHit){const o=this.onPunchHit(s,i,b.punchHitRadius);this.isLocal&&this.world&&this.world.triggerScreenShake(o?1.5:.3,.2)}}}else this.rightLeg.position.z=kt.lerp(this.rightLeg.position.z,this.rightLegBasePos.z,e*b.punchReturnSpeed),this.rightLeg.position.y=kt.lerp(this.rightLeg.position.y,this.rightLegBasePos.y,e*b.punchReturnSpeed),this.rightLeg.rotation.x=kt.lerp(this.rightLeg.rotation.x,0,e*b.punchReturnSpeed)}getMouthPosition(){const e=new P(0,.3,.5);return e.applyQuaternion(this.mesh.quaternion),this.mesh.position.clone().add(e)}getForwardDirection(){return new P(0,0,1).applyQuaternion(this.mesh.quaternion)}selectTongueTarget(e){const t=this.getMouthPosition(),n=this.getForwardDirection(),i=[],s=b.tongueRange,o=kt.degToRad(b.tongueConeAngle);if(e.frogs)for(const[l,c]of Object.entries(e.frogs)){if(l===this.id||c.isDead)continue;const h=c.mesh.position.clone();h.y+=.3;const u=new P().subVectors(h,t),d=u.length();if(d>s)continue;const f=u.clone().normalize();if(f.dot(n)<0)continue;const g=f.angleTo(n);g>o||i.push({type:"frog",id:l,object:c,point:h,distance:d,angle:g})}if(e.grappleHooks)for(const l of e.grappleHooks){const c=new P().subVectors(l.position,t),h=c.length();if(h>s)continue;const u=c.clone().normalize();if(u.dot(n)<0)continue;const d=u.angleTo(n);d>o||i.push({type:"hook",id:null,object:l,point:l.position.clone(),distance:h,angle:d})}if(e.ball&&e.ball.mesh){const l=e.ball.mesh.position.clone(),c=new P().subVectors(l,t),h=c.length();if(h<=s){const u=c.clone().normalize();if(u.dot(n)>=0){const d=u.angleTo(n);d<=o&&i.push({type:"ball",id:null,object:e.ball,point:l,distance:h,angle:d})}}}if(e.scooters)for(const l of e.scooters){if(l.rider)continue;const c=l.mesh.position.clone(),h=new P().subVectors(c,t),u=h.length();if(u>s)continue;const d=h.clone().normalize();if(d.dot(n)<0)continue;const f=d.angleTo(n);f>o||i.push({type:"scooter",id:null,object:l,point:c,distance:u,angle:f})}if(i.length===0)return this.getWallTarget(e,t,n);const a=i.map(l=>({...l,score:b.tongueAngleWeight*(l.angle/o)+b.tongueDistanceWeight*(l.distance/s)}));return a.sort((l,c)=>l.score-c.score),a[0]}getWallTarget(e,t,n){if(!e||!e.physics)return null;const i=new S(t.x,t.y,t.z),s=new S(t.x+n.x*b.tongueRange,t.y+n.y*b.tongueRange,t.z+n.z*b.tongueRange),o=new ir;if(new Tt(i,s).intersectWorld(e.physics.world,{result:o}),o.hasHit){const l=new P(o.hitPointWorld.x,o.hitPointWorld.y,o.hitPointWorld.z);if(!(o.hitNormalWorld.y>.8||l.y<.5))return{type:"wall",id:null,object:null,point:l,distance:t.distanceTo(l),angle:0}}return null}createTongueVisual(){if(this.tongueLine)return;const e=new Lt,t=new Float32Array(6);e.setAttribute("position",new Gt(t,3));const n=new Xs({color:b.tongueColor,linewidth:3});this.tongueLine=new ba(e,n),this.tongueLine.visible=!1,this.tongueLine.frustumCulled=!1;const i=new Wi(b.tongueTipSize,8,8),s=new Qt({color:b.tongueColor});this.tongueTip=new lt(i,s),this.tongueTip.visible=!1,this.mesh.parent&&(this.mesh.parent.add(this.tongueLine),this.mesh.parent.add(this.tongueTip))}shootTongue(e,t){if(this.tongue.state!=="idle"||this.tongue.cooldownTimer>0||this.isRidingScooter)return;this.world=t;const n=this.selectTongueTarget(t);if(!n){this.playTongueMiss();return}this.tongue.target=n,this.tongue.lockedPoint.copy(n.point),this.tongue.state="extending",this.tongue.startTime=performance.now(),this.tongue.progress=0,this.tongueStartPos.copy(this.getMouthPosition()),this.createTongueVisual(),this.tongueLine&&(this.tongueLine.visible=!0),this.tongueTip&&(this.tongueTip.visible=!0)}playTongueMiss(){this.createTongueVisual(),this.tongue.target={type:"miss",id:null,object:null,point:this.getMouthPosition().add(this.getForwardDirection().multiplyScalar(2)),distance:2,angle:0},this.tongue.lockedPoint.copy(this.tongue.target.point),this.tongue.state="extending",this.tongue.startTime=performance.now(),this.tongue.progress=0,this.tongueStartPos.copy(this.getMouthPosition()),this.tongueLine&&(this.tongueLine.visible=!0),this.tongueTip&&(this.tongueTip.visible=!0)}updateTongue(e){var n;if(this.tongue.state==="idle"){this.tongue.cooldownTimer=Math.max(0,this.tongue.cooldownTimer-e);return}this.tongueStartPos.copy(this.getMouthPosition());const t=(performance.now()-this.tongue.startTime)/1e3;if(this.tongue.state==="extending"){const i=((n=this.tongue.target)==null?void 0:n.type)==="miss"?b.tongueExtendDuration*.5:b.tongueExtendDuration,s=Math.min(t/i,1);this.tongue.progress=1-Math.pow(1-s,3),s>=1&&this.resolveTongue()}else if(this.tongue.state==="retracting"){const i=b.tongueRetractDuration,s=Math.min(t/i,1);this.tongue.progress=1-s,s>=1&&this.finishTongue()}else this.tongue.state==="attached"&&this.updateGrapplePull(e);this.updateTongueVisual()}resolveTongue(){var s,o;const e=this.tongue.target;if(!e||e.type==="miss"){this.tongue.state="retracting",this.tongue.startTime=performance.now();return}if(e.type==="frog"&&(!e.object||e.object.isDead)){this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playMissEffect();return}let t=null;if(e.type==="frog"&&((s=e.object)!=null&&s.mesh)?(t=e.object.mesh.position.clone(),t.y+=.3):e.type==="ball"&&((o=e.object)!=null&&o.mesh)?t=e.object.mesh.position.clone():e.type==="hook"&&e.object?t=e.object.position.clone():(e.type==="wall"||e.type==="scooter")&&(t=e.point.clone()),!t){this.tongue.state="retracting",this.tongue.startTime=performance.now();return}const n=this.tongue.lockedPoint.distanceTo(t),i=b.tongueMagnetRadius*3;if(n>i){console.log("Tongue miss - target moved too far"),this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playMissEffect();return}switch(e.type){case"frog":this.grabFrog(e.object),this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playHitEffect();break;case"hook":case"wall":this.tongue.state="attached",this.tongue.lockedPoint.copy(t),this.playHitEffect();break;case"ball":this.grabBall(e.object),this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playHitEffect();break;case"scooter":this.pullScooter(e.object),this.tongue.state="retracting",this.tongue.startTime=performance.now(),this.playHitEffect();break;default:this.tongue.state="retracting",this.tongue.startTime=performance.now()}}grabFrog(e){var n;if(!e||!e.body)return;const t=new P().subVectors(this.mesh.position,e.mesh.position).normalize();e.body.velocity.x+=t.x*b.tongueGrabForce,e.body.velocity.y+=t.y*b.tongueGrabForce*.5,e.body.velocity.z+=t.z*b.tongueGrabForce,console.log("Grabbed frog!"),(n=this.world)!=null&&n.network&&this.world.network.socket.emit("tongueResult",{sourceId:this.id,targetId:e.id,type:"pull"})}grabBall(e){if(!e||!e.body)return;const t=new P().subVectors(this.mesh.position,e.mesh.position).normalize();e.body.velocity.x+=t.x*b.tongueGrabForce,e.body.velocity.y+=t.y*b.tongueGrabForce*.3,e.body.velocity.z+=t.z*b.tongueGrabForce,console.log("Grabbed ball!")}pullScooter(e){if(!e||!e.body)return;const t=new P().subVectors(this.mesh.position,e.mesh.position).normalize();e.body.velocity.x+=t.x*b.tongueGrabForce*.5,e.body.velocity.z+=t.z*b.tongueGrabForce*.5,console.log("Pulled scooter!")}updateGrapplePull(e){if(!this.tongue.target)return;const t=this.tongue.lockedPoint,n=new P().subVectors(t,this.mesh.position).normalize(),i=b.tongueGrappleForce;this.body&&(this.body.velocity.x+=n.x*i*e*10,this.body.velocity.y+=n.y*i*e*10,this.body.velocity.z+=n.z*i*e*10),this.mesh.position.distanceTo(t)<2&&(this.tongue.state="retracting",this.tongue.startTime=performance.now())}finishTongue(){this.tongue.state="idle",this.tongue.progress=0,this.tongue.target=null,this.tongue.cooldownTimer=b.tongueCooldown,this.tongueLine&&(this.tongueLine.visible=!1),this.tongueTip&&(this.tongueTip.visible=!1)}updateTongueVisual(){if(!this.tongueLine||!this.tongueTip)return;const e=this.tongue.state==="attached"?this.tongue.lockedPoint:this.tongue.lockedPoint,t=new P().lerpVectors(this.tongueStartPos,e,this.tongue.progress),n=this.tongueLine.geometry.attributes.position.array;n[0]=this.tongueStartPos.x,n[1]=this.tongueStartPos.y,n[2]=this.tongueStartPos.z,n[3]=t.x,n[4]=t.y,n[5]=t.z,this.tongueLine.geometry.attributes.position.needsUpdate=!0,this.tongueTip.position.copy(t)}releaseTongue(){this.tongue.state==="attached"&&(this.tongue.state="retracting",this.tongue.startTime=performance.now())}playHitEffect(){this.world&&this.isLocal&&this.world.triggerScreenShake(.5,.1)}playMissEffect(){this.world&&this.isLocal&&this.world.triggerScreenShake(.2,.05)}updateEyes(e){!this.pupils||this.pupils.length===0||!e||this.pupils.forEach(t=>{const n=t.parent.worldToLocal(e.clone()),i=t.userData.initialPos,s=new P().subVectors(n,i);s.z=0;const o=.12;s.length()>o&&s.normalize().multiplyScalar(o);const a=i.clone().add(s);t.position.lerp(a,.2)})}remotePunch(){this.punchTimer=0,this.isPunching=!0,this.punchProgress=0,this.punchHitChecked=!1}takeDamage(e,t,n=!1,i=!1,s=null){if(!this.isDead){if(this.health-=e,s&&(this.lastAttackerId=s,console.log(`⚔️ lastAttackerId set to: ${s}`)),this.showHealthBar(),this.updateHealthBar(),this.showHitTint(),this.particles&&this.mesh){const o=this.mesh.position.clone();o.y+=.5;const a=t?new P(t.x,t.y,t.z).normalize():new P(0,1,0);this.particles.spawnPunchImpact(o,a)}if(this.isLocal&&this.world){const o=i?2:1;this.world.triggerScreenShake(o,.5)}t&&this.body&&this.body.type!==2&&this.body.velocity.set(t.x,t.y,t.z),this.showDamageToast(e,i),this.health<=0&&(this.health=0,this.die(n))}}showHitTint(){this.bodyMesh.traverse(e=>{if(e.isMesh&&e.material&&(e.userData.originalColor||e.material.color&&(e.userData.originalColor=e.material.color.clone()),e.material.color)){const t=new Ee(16711680);e.material.color.lerp(t,.6)}}),this.hitTintTimeout&&clearTimeout(this.hitTintTimeout),this.hitTintTimeout=setTimeout(()=>{this.fadeHitTint()},100)}fadeHitTint(){let e=0;const t=setInterval(()=>{e+=.1,this.bodyMesh.traverse(n=>{n.isMesh&&n.material&&n.userData.originalColor&&n.material.color.lerp(n.userData.originalColor,.3)}),e>=1&&(clearInterval(t),this.bodyMesh.traverse(n=>{n.isMesh&&n.material&&n.userData.originalColor&&n.material.color.copy(n.userData.originalColor)}))},50)}showHealthBar(){this.healthBarVisible=!0,this.healthBarVisibleTimer=3,this.healthBarContainer.style.opacity="1"}hideHealthBar(){this.healthBarVisible=!1,this.healthBarContainer.style.opacity="0"}updateHealthBarVisibility(e){this.healthBarVisible&&this.healthBarVisibleTimer>0&&(this.healthBarVisibleTimer-=e,this.healthBarVisibleTimer<=0&&this.hideHealthBar())}die(e=!1){this.isDead||(this.isRidingScooter&&this.currentScooter&&this.currentScooter.dismount(),this.isDead=!0,this.deathTimer=0,this.respawnTimer=b.respawnTime,this.particles&&this.particles.spawnDeathDisperse(this.mesh.position,this.color),this.setMeshOpacity(0),this.bodyMesh.visible=!1,this.body&&(this.body.velocity.set(0,0,0),this.body.position.y=1e3),this.healthBarContainer.style.display="none",this.isLocal&&window.showDeathScreen&&window.showDeathScreen(),this.isLocal&&!e&&this.world&&this.world.network&&(console.log(`💀 Sending death event: lastAttackerId=${this.lastAttackerId}`),this.world.network.sendDeath(this.lastAttackerId||null)))}respawn(e=!1){this.isDead=!1,this.health=b.maxHealth,this.deathTimer=0,this.lastAttackerId=null,this.body&&(this.body.position.set(0,10,0),this.body.velocity.set(0,0,0),this.mesh.position.set(0,10,0)),this.setMeshOpacity(1),this.bodyMesh.visible=!0,this.healthBarContainer.style.display="block",this.updateHealthBar(),this.isLocal&&window.hideDeathScreen&&window.hideDeathScreen(),this.isLocal&&!e&&this.world&&this.world.network&&this.world.network.sendRespawn()}updateHealthBar(){if(!this.healthBarFill)return;const e=this.health/b.maxHealth*100;this.healthBarFill.style.width=`${e}%`,this.healthBarFill.classList.remove("low","critical"),e<=25?this.healthBarFill.classList.add("critical"):e<=50&&this.healthBarFill.classList.add("low")}setMeshOpacity(e){this.bodyMesh.traverse(t=>{t.isMesh&&t.material&&(t.material.transparent=!0,t.material.opacity=e)})}showDamageToast(e,t=!1){const n=document.createElement("div");n.className="damage-toast"+(t?" critical":""),n.textContent=t?`CRIT! -${e}`:`-${e}`;const i=new Rr(n);i.position.set((Math.random()-.5)*.5,2.5+Math.random()*.5,0),this.mesh.add(i),setTimeout(()=>{this.mesh.remove(i),n.remove()},1e3),console.log(`Frog ${this.id} took ${e} damage! Health: ${this.health}/${b.maxHealth}`)}dispose(){this.chatBubbleDiv&&this.chatBubbleDiv.parentNode&&this.chatBubbleDiv.parentNode.removeChild(this.chatBubbleDiv),this.healthBarContainer&&this.healthBarContainer.parentNode&&this.healthBarContainer.parentNode.removeChild(this.healthBarContainer),this.nameTagDiv&&this.nameTagDiv.parentNode&&this.nameTagDiv.parentNode.removeChild(this.nameTagDiv),this.chatTimer&&(clearTimeout(this.chatTimer),this.chatTimer=null),this.bodyMesh.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()))})}};ro(Fi,"modelGeometry",null),ro(Fi,"loader",new ch);let fa=Fi;const KM=/^[og]\s*(.+)?/,ZM=/^mtllib /,JM=/^usemtl /,QM=/^usemap /,Pd=/\s+/,Id=new P,Sl=new P,Dd=new P,Nd=new P,hn=new P,zo=new Ee;function eS(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;Id.fromArray(i,e),Sl.fromArray(i,t),Dd.fromArray(i,n),hn.subVectors(Dd,Sl),Nd.subVectors(Id,Sl),hn.cross(Nd),hn.normalize(),s.push(hn.x,hn.y,hn.z),s.push(hn.x,hn.y,hn.z),s.push(hn.x,hn.y,hn.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,o,a,l,c){const h=this.vertices.length;let u=this.parseVertexIndex(e,h),d=this.parseVertexIndex(t,h),f=this.parseVertexIndex(n,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),a!==void 0&&a!==""){const g=this.normals.length;u=this.parseNormalIndex(a,g),d=this.parseNormalIndex(l,g),f=this.parseNormalIndex(c,g),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(i!==void 0&&i!==""){const g=this.uvs.length;u=this.parseUVIndex(i,g),d=this.parseUVIndex(s,g),f=this.parseUVIndex(o,g),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return r.startObject("",!1),r}class tS extends vs{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,o=new rh(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new eS;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const u=c.split(Pd);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(zo.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Ut),t.colors.push(zo.r,zo.g,zo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const d=c.slice(1).trim().split(Pd),f=[];for(let x=0,m=d.length;x<m;x++){const p=d[x];if(p.length>0){const v=p.split("/");f.push(v)}}const g=f[0];for(let x=1,m=f.length-1;x<m;x++){const p=f[x],v=f[x+1];t.addFace(g[0],p[0],v[0],g[1],p[1],v[1],g[2],p[2],v[2])}}else if(h==="l"){const u=c.substring(1).trim().split(" ");let d=[];const f=[];if(c.indexOf("/")===-1)d=u;else for(let g=0,x=u.length;g<x;g++){const m=u[g].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(d,f)}else if(h==="p"){const d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((i=KM.exec(c))!==null){const u=(" "+i[0].slice(1).trim()).slice(1);t.startObject(u)}else if(JM.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(ZM.test(c))t.materialLibraries.push(c.substring(7).trim());else if(QM.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=c.split(" "),i.length>1){const d=i[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new mn;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],h=c.geometry,u=c.materials,d=h.type==="Line",f=h.type==="Points";let g=!1;if(h.vertices.length===0)continue;const x=new Lt;x.setAttribute("position",new st(h.vertices,3)),h.normals.length>0&&x.setAttribute("normal",new st(h.normals,3)),h.colors.length>0&&(g=!0,x.setAttribute("color",new st(h.colors,3))),h.hasUVIndices===!0&&x.setAttribute("uv",new st(h.uvs,2));const m=[];for(let v=0,y=u.length;v<y;v++){const _=u[v],E=_.name+"_"+_.smooth+"_"+g;let w=t.materials[E];if(this.materials!==null){if(w=this.materials.create(_.name),d&&w&&!(w instanceof Xs)){const R=new Xs;tn.prototype.copy.call(R,w),R.color.copy(w.color),w=R}else if(f&&w&&!(w instanceof Vs)){const R=new Vs({size:10,sizeAttenuation:!1});tn.prototype.copy.call(R,w),R.color.copy(w.color),R.map=w.map,w=R}}w===void 0&&(d?w=new Xs:f?w=new Vs({size:1,sizeAttenuation:!1}):w=new pg,w.name=_.name,w.flatShading=!_.smooth,w.vertexColors=g,t.materials[E]=w),m.push(w)}let p;if(m.length>1){for(let v=0,y=u.length;v<y;v++){const _=u[v];x.addGroup(_.groupStart,_.groupCount,v)}d?p=new Mc(x,m):f?p=new Ko(x,m):p=new lt(x,m)}else d?p=new Mc(x,m[0]):f?p=new Ko(x,m[0]):p=new lt(x,m[0]);p.name=c.name,s.add(p)}else if(t.vertices.length>0){const a=new Vs({size:1,sizeAttenuation:!1}),l=new Lt;l.setAttribute("position",new st(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new st(t.colors,3)),a.vertexColors=!0);const c=new Ko(l,a);s.add(c)}return s}}class nS{constructor(e,t,n={x:0,y:2,z:0}){this.scene=t,this.physicsWorld=e,this.radius=b.ballRadius,this.mass=b.ballMass,this.mesh=new mn,this.mesh.position.set(n.x,n.y,n.z),this.createFallbackSphere(),new tS().load("/models/ball.obj",s=>{this.fallbackSphere&&this.mesh.remove(this.fallbackSphere),s.scale.set(.5,.5,.5),s.traverse(o=>{o.isMesh&&(o.material=new Ln({color:16777215,roughness:.4,metalness:.1}),o.castShadow=!0,o.receiveShadow=!0)}),this.mesh.add(s),this.modelLoaded=!0,console.log("Ball model loaded successfully!")},void 0,s=>{console.error("Error loading ball model, using fallback sphere:",s)}),t.add(this.mesh),this.createPhysicsBody(e,n)}createFallbackSphere(){const e=new Wi(this.radius,32,32),t=new Ln({color:16777215,roughness:.3,metalness:0,emissive:2236962});this.fallbackSphere=new lt(e,t),this.fallbackSphere.castShadow=!0,this.fallbackSphere.receiveShadow=!0,this.mesh.add(this.fallbackSphere)}createPhysicsBody(e,t){this.ballMaterial=new gs("ball");const n=new Xi(e.groundMaterial,this.ballMaterial,{friction:b.ballFriction,restitution:b.ballBounciness});e.world.addContactMaterial(n);const i=new Xi(e.frogMaterial,this.ballMaterial,{friction:.2,restitution:b.ballBounciness*.85});e.world.addContactMaterial(i);const s=new ph(this.radius);this.body=new pe({mass:this.mass,shape:s,material:this.ballMaterial,linearDamping:b.ballLinearDamping,angularDamping:b.ballAngularDamping}),this.body.position.set(t.x,t.y,t.z),e.world.addBody(this.body)}update(e){this.body&&(this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion),this.body.position.y<b.ballResetHeight&&this.reset())}kick(e,t=null){if(!this.body)return;const n=t||b.ballKickForce,i=new S(e.x*n,e.y*n+b.ballKickUpward,e.z*n);this.body.applyImpulse(i,this.body.position)}reset(){this.body&&(this.body.position.set(5,b.ballSpawnHeight,0),this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0))}getSyncState(){return this.body?{x:this.body.position.x,y:this.body.position.y,z:this.body.position.z,qx:this.body.quaternion.x,qy:this.body.quaternion.y,qz:this.body.quaternion.z,qw:this.body.quaternion.w,vx:this.body.velocity.x,vy:this.body.velocity.y,vz:this.body.velocity.z}:null}applySyncState(e){this.body&&(this.body.position.set(e.x,e.y,e.z),this.body.quaternion.set(e.qx,e.qy,e.qz,e.qw),this.body.velocity.set(e.vx,e.vy,e.vz))}}const iS={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ta{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const sS=new Ma(-1,1,1,-1,0,1);class rS extends Lt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}}const oS=new rS;class aS{constructor(e){this._mesh=new lt(oS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Jf extends Ta{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof In?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Tf.clone(e.uniforms),this.material=new In({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new aS(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Fd extends Ta{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class lS extends Ta{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class cS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Be);this._width=n.width,this._height=n.height,t=new Gi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xs}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jf(iS),this.copyPass.material.blending=Kn,this.clock=new kg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Fd!==void 0&&(o instanceof Fd?n=!0:o instanceof lS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class hS extends Ta{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ee}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}class uS{constructor(e){this.scene=e,this.particles=[],this.dustPool=[],this.impactPool=[],this.dustGeometry=new qi(1,1,1),this.impactGeometry=new ih(1,0),this.dustMaterial=new Ln({color:13413e3,roughness:1,transparent:!0,opacity:.8}),this.impactMaterial=new Qt({color:16777096,transparent:!0,opacity:1,blending:Nl}),this.initPool()}initPool(){for(let e=0;e<80;e++){const t=new lt(this.dustGeometry,this.dustMaterial.clone());t.castShadow=!0,t.receiveShadow=!0,t.visible=!1,this.scene.add(t),this.dustPool.push(t)}for(let e=0;e<30;e++){const t=new lt(this.impactGeometry,this.impactMaterial.clone());t.visible=!1,this.scene.add(t),this.impactPool.push(t)}}getDustParticle(){return this.dustPool.find(e=>!e.visible)}getImpactParticle(){return this.impactPool.find(e=>!e.visible)}randRange(e,t){return e+Math.random()*(t-e)}spawnWalkDust(e,t){if(!b.vfxEnabled)return;const n=Math.ceil(b.vfxDustCount*.5);for(let i=0;i<n;i++){const s=this.getDustParticle();if(!s)return;const o=.3;s.position.set(e.x+this.randRange(-o,o),e.y+this.randRange(0,.2),e.z+this.randRange(-o,o)),s.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const a=b.vfxDustSize*this.randRange(.8,1.5);s.scale.setScalar(.01);const l=new Ee(t||13413e3);l.offsetHSL(0,0,this.randRange(-.1,.1)),s.material.color.copy(l),s.material.opacity=.5,s.visible=!0,this.particles.push({mesh:s,velocity:new P(this.randRange(-.5,.5),this.randRange(.5,1.5),this.randRange(-.5,.5)),angularVelocity:new P(this.randRange(-5,5),this.randRange(-5,5),this.randRange(-5,5)),targetScale:a,life:b.vfxDustLife,maxLife:b.vfxDustLife,type:"dust"})}}spawnJumpDust(e,t){if(!b.vfxEnabled)return;const n=b.vfxDustCount*1.5;for(let i=0;i<n;i++){const s=this.getDustParticle();if(!s)return;const o=i/n*Math.PI*2+this.randRange(-.2,.2),a=this.randRange(2,4),l=.5;s.position.set(e.x+Math.cos(o)*l,e.y+.1,e.z+Math.sin(o)*l),s.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0);const c=b.vfxDustSize*this.randRange(1,2);s.scale.setScalar(.01),s.material.color.setHex(t||13413e3),s.visible=!0,this.particles.push({mesh:s,velocity:new P(Math.cos(o)*a,this.randRange(1,3),Math.sin(o)*a),angularVelocity:new P(this.randRange(-2,2),this.randRange(-5,5),this.randRange(-2,2)),targetScale:c,life:b.vfxDustLife,maxLife:b.vfxDustLife,type:"dust"})}}spawnLandingDust(e,t,n){if(!b.vfxEnabled)return;const i=Math.min(b.vfxDustCount*2.5,20);for(let s=0;s<i;s++){const o=this.getDustParticle();if(!o)return;const a=Math.random()*Math.PI*2,l=Math.random()*.5,c=t*.8+Math.random()*2;o.position.set(e.x+Math.cos(a)*l,e.y+.05,e.z+Math.sin(a)*l),o.scale.setScalar(.01);const h=b.vfxDustSize*(1+t*.1)*this.randRange(.8,1.2);o.material.color.setHex(n||13413e3),o.visible=!0,this.particles.push({mesh:o,velocity:new P(Math.cos(a)*c,this.randRange(1,t*.5),Math.sin(a)*c),angularVelocity:new P(this.randRange(-10,10),this.randRange(-10,10),this.randRange(-10,10)),targetScale:h,life:b.vfxDustLife*1.5,maxLife:b.vfxDustLife*1.5,type:"dust"})}}spawnPunchImpact(e,t){if(!b.vfxEnabled)return;const n=b.vfxImpactCount;for(let i=0;i<n;i++){const s=this.getImpactParticle();if(!s)return;s.position.copy(e),s.scale.setScalar(.01);const o=b.vfxImpactSize*this.randRange(.5,1.5),a=this.randRange(.05,.15),l=1,c=this.randRange(.5,1);s.material.color.setHSL(a,l,c),s.visible=!0;const h=.8;this.particles.push({mesh:s,velocity:new P(t.x*10+this.randRange(-h,h)*5,this.randRange(-1,5),t.z*10+this.randRange(-h,h)*5),angularVelocity:new P(this.randRange(-20,20),this.randRange(-20,20),this.randRange(-20,20)),targetScale:o,life:b.vfxImpactLife,maxLife:b.vfxImpactLife,type:"impact"})}}spawnDeathDisperse(e,t){if(!b.vfxEnabled)return;const n=30;for(let i=0;i<n;i++){const s=this.getDustParticle();if(!s)return;s.position.set(e.x+this.randRange(-.3,.3),e.y+this.randRange(0,.5),e.z+this.randRange(-.3,.3)),s.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),s.visible=!0,s.material.color.setHex(t||5025616),s.material.opacity=.9;const o=.2*this.randRange(.5,1.5);s.scale.setScalar(.01);const a=this.randRange(2,8),l=Math.random()*Math.PI*2,c=this.randRange(2,10);this.particles.push({mesh:s,velocity:new P(Math.cos(l)*a,c,Math.sin(l)*a),angularVelocity:new P(this.randRange(-10,10),this.randRange(-10,10),this.randRange(-10,10)),targetScale:o,life:1.5,maxLife:1.5,type:"dust"})}}update(e){for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t];n.mesh.position.add(n.velocity.clone().multiplyScalar(e)),n.mesh.rotation.x+=n.angularVelocity.x*e,n.mesh.rotation.y+=n.angularVelocity.y*e,n.mesh.rotation.z+=n.angularVelocity.z*e,n.type==="dust"?(n.velocity.y-=15*e,n.velocity.multiplyScalar(1-e*2)):n.velocity.multiplyScalar(1-e*5),n.life-=e;const i=n.life/n.maxLife;let s=0;if(i>.8){const o=(1-i)/.2;s=kt.lerp(0,n.targetScale,o)}else{const o=i/.8;s=n.targetScale*o}n.mesh.scale.setScalar(s),n.life<=0&&(n.mesh.visible=!1,this.particles.splice(t,1))}}}class dS{constructor(){this.container=document.getElementById("canvas-container"),this.scene=new ru,this.scene.background=new Ee(16746496),this.scene.fog=new Kc(16746496,40,120),this.camera=new Ht(60,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,15,15),this.camera.lookAt(0,0,0),this.cameraOrbitAngle=b.cameraOrbitAngle,this.cameraPitchAngle=b.cameraPitchAngle,this.cameraDistance=b.cameraDistance,this.shakeIntensity=0,this.shakeTimer=0,this.shakeOffset=new P,this.grappleHooks=[],this.tongueCursorIndicator=null,this.createTongueCursorIndicator(),this.renderer=new Zu({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=b.shadowEnabled,this.renderer.shadowMap.type=this.getShadowMapType(b.shadowType),this.renderer.shadowMap.autoUpdate=b.shadowAutoUpdate,this.container.appendChild(this.renderer.domElement),this.labelRenderer=new U_,this.labelRenderer.setSize(window.innerWidth,window.innerHeight),this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.top="0px",this.labelRenderer.domElement.style.left="0px",this.labelRenderer.domElement.style.pointerEvents="none",this.container.appendChild(this.labelRenderer.domElement);const e=new Su(16777215,b.ambientIntensity);this.scene.add(e);const t=new Ig(16772863,6702114,b.ambientIntensity*.6);this.scene.add(t);const n=new Zo(16777215,b.sunIntensity);n.position.set(20,30,10),this.dirLight=n;const i=new Zo(16768426,b.sunIntensity*.5);i.position.set(-20,15,-15),this.scene.add(i),n.castShadow=b.shadowEnabled,n.shadow.mapSize.width=b.shadowMapSize,n.shadow.mapSize.height=b.shadowMapSize,n.shadow.camera.near=b.shadowCameraNear,n.shadow.camera.far=b.shadowCameraFar,n.shadow.camera.top=b.shadowCameraTop,n.shadow.camera.bottom=b.shadowCameraBottom,n.shadow.camera.left=b.shadowCameraLeft,n.shadow.camera.right=b.shadowCameraRight,n.shadow.bias=b.shadowBias,n.shadow.normalBias=b.shadowNormalBias,n.shadow.radius=b.shadowRadius,n.shadow.blurSamples=b.shadowBlurSamples,n.shadow.intensity=b.shadowIntensity,this.scene.add(n),this.physics=new YM,this.loadLevel(),this.frogs={},this.localFrog=null,this.isBallAuthority=!1,this.scooters=[],this.scooterSpawnZones=[],this.playerHasScooter={},window.addEventListener("resize",()=>this.onWindowResize()),this.raycaster=new Yg,this.mousePlane=new xi(new P(0,1,0),0),this.composer=new cS(this.renderer),this.composer.addPass(new hS(this.scene,this.camera));const s={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new Be(window.innerWidth,window.innerHeight)},uSaturation:{value:b.shaderSaturation},uBrightness:{value:b.shaderBrightness},uContrast:{value:b.shaderContrast},uGamma:{value:b.shaderGamma},uTint:{value:new P(b.shaderTintR,b.shaderTintG,b.shaderTintB)},uTemperature:{value:b.shaderTemperature},uVignetteEnabled:{value:b.vignetteEnabled?1:0},uVignetteIntensity:{value:b.vignetteIntensity},uVignetteRadius:{value:b.vignetteRadius},uVignetteSoftness:{value:b.vignetteSoftness},uChromaticEnabled:{value:b.chromaticEnabled?1:0},uChromaticIntensity:{value:b.chromaticIntensity},uChromaticRadial:{value:b.chromaticRadial?1:0},uGrainEnabled:{value:b.grainEnabled?1:0},uGrainIntensity:{value:b.grainIntensity},uGrainSpeed:{value:b.grainSpeed},uGrainSize:{value:b.grainSize},uSharpenEnabled:{value:b.sharpenEnabled?1:0},uSharpenIntensity:{value:b.sharpenIntensity},uBloomEnabled:{value:b.bloomEnabled?1:0},uBloomIntensity:{value:b.bloomIntensity},uBloomThreshold:{value:b.bloomThreshold},uBloomRadius:{value:b.bloomRadius},uToonEnabled:{value:1},uOutlineEnabled:{value:1},uOutlineIntensity:{value:.1},uSkyColor:{value:new P(1,.53,0)}},vertexShader:`
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
                        float vig = smoothstep(uVignetteRadius, uVignetteRadius - uVignetteSoftness, dist);
                        color.rgb = mix(color.rgb * (1.0 - uVignetteIntensity), color.rgb, vig);
                    }
                    
                    // Clamp final output
                    color.rgb = clamp(color.rgb, 0.0, 1.0);
                    
                    gl_FragColor = color;
                }
            `};this.customPass=new Jf(s),this.composer.addPass(this.customPass),this.particles=new uS(this.scene),this.ball=new nS(this.physics,this.scene,{x:5,y:30,z:0})}getShadowMapType(e){switch(e){case"Basic":return Lp;case"PCF":return Oc;case"PCFSoft":return Dl;case"VSM":return kn;default:return Dl}}loadLevel(){const e=new ch;this.wallMeshes=[],e.load("/models/world.glb",t=>{const n=t.scene;this.scene.add(n),n.traverse(i=>{if(i.isMesh){if(i.castShadow=!0,i.receiveShadow=!0,i.material&&(i.material.transparent=!0,i.material.opacity=1,i.userData.originalOpacity=1,i.userData.targetOpacity=1,(i.name.toLowerCase().includes("terrain")||i.name.toLowerCase().includes("island"))&&(i.material.color.setHex(1179392),i.material.emissive.setHex(1179392),i.material.emissiveIntensity=.15,i.material.roughness=1),i.name.toLowerCase().includes("water")&&(i.material.color.setHex(62207),i.material.opacity=.8,i.material.emissive.setHex(62207),i.material.emissiveIntensity=.6)),!i.name.toLowerCase().includes("ground")&&!i.name.toLowerCase().includes("floor")&&this.wallMeshes.push(i),i.name.toLowerCase().includes("scooterspawn")){i.visible=!1,i.userData.isSpawnPlate=!0;const s=new P;i.getWorldPosition(s);const o={position:s,mesh:i};this.scooterSpawnZones.push(o),setTimeout(()=>{this.spawnScooterAtZone(o)},100),console.log("Found scooter spawn zone at:",s)}i.name.startsWith("Ghost_")||i.name.toLowerCase().includes("scooterspawn")||this.createPhysicsForMesh(i)}})},void 0,t=>{console.error("Error loading world:",t);const n=new jr(100,100),i=new Ln({color:30654}),s=new lt(n,i);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s);const o=new Zf,a=new pe({mass:0});a.addShape(o),a.quaternion.setFromEuler(-Math.PI/2,0,0),this.physics.world.addBody(a),this.spawnGrappleHooks()})}spawnGrappleHooks(){[{x:-10,y:8,z:-10},{x:10,y:10,z:-10},{x:-10,y:7,z:10},{x:10,y:9,z:10},{x:0,y:12,z:0},{x:-15,y:6,z:0},{x:15,y:6,z:0},{x:0,y:8,z:-15},{x:0,y:8,z:15}].forEach(t=>{const n=new Wi(.3,16,16),i=new Ln({color:16766720,metalness:.8,roughness:.2,emissive:16766720,emissiveIntensity:.3}),s=new lt(n,i);s.position.set(t.x,t.y,t.z),s.castShadow=!0;const o=new wa(.03,.03,2,8),a=new Ln({color:9127187}),l=new lt(o,a);l.position.y=1,s.add(l),this.scene.add(s),this.grappleHooks.push(s)}),console.log(`Spawned ${this.grappleHooks.length} grapple hooks`)}createTongueCursorIndicator(){const e=new sh(.3,.4,32),t=new Qt({color:b.tongueColor,side:fn,transparent:!0,opacity:.8,depthTest:!1});this.tongueCursorIndicator=new lt(e,t),this.tongueCursorIndicator.visible=!1;const n=new th(.3,32),i=new Qt({color:b.tongueColor,transparent:!0,opacity:.3,depthTest:!1}),s=new lt(n,i);this.tongueCursorIndicator.add(s),this.scene.add(this.tongueCursorIndicator)}updateTongueCursorIndicator(e){if(!this.tongueCursorIndicator||!this.localFrog)return;if(this.localFrog.tongue.state!=="idle"){this.tongueCursorIndicator.visible=!1;return}const t=this.getMouseIntersection(e);if(!t){this.tongueCursorIndicator.visible=!1;return}const n=new P(0,0,1).applyQuaternion(this.localFrog.mesh.quaternion),i=this.localFrog.mesh.position,s=new P(0,.3,.5);s.applyQuaternion(this.localFrog.mesh.quaternion);const o=i.clone().add(s),a=this.getPotentialTongueTargets(),l=a.length>0,c=new P().subVectors(t,i),h=new P(c.x,0,c.z).normalize(),u=new P(n.x,0,n.z).normalize(),d=Math.acos(Math.max(-1,Math.min(1,h.dot(u)))),f=kt.degToRad(b.tongueConeAngle);if(d>f*2.5||isNaN(d)){this.tongueCursorIndicator.visible=!1;return}let g=new P().subVectors(t,o).normalize();const x=new S(o.x,o.y,o.z),m=new S(o.x+g.x*b.tongueRange,o.y+g.y*b.tongueRange,o.z+g.z*b.tongueRange),p=new ir;if(new Tt(x,m).intersectWorld(this.physics.world,{result:p}),p.hasHit){const y=new P(p.hitPointWorld.x,p.hitPointWorld.y,p.hitPointWorld.z),_=p.hitNormalWorld;if(!(_.y>.8||y.y<.5)){this.tongueCursorIndicator.position.copy(y);const w=new P(_.x,_.y,_.z);if(this.tongueCursorIndicator.quaternion.setFromUnitVectors(new P(0,0,1),w),this.tongueCursorIndicator.position.add(w.multiplyScalar(.05)),this.tongueCursorIndicator.visible=!0,l){this.tongueCursorIndicator.material.color.setHex(65416);const R=performance.now()/1e3,D=1.3+Math.sin(R*8)*.15;this.tongueCursorIndicator.scale.set(D,D,1)}else{this.tongueCursorIndicator.material.color.set(b.tongueColor);const R=performance.now()/1e3,D=1+Math.sin(R*5)*.1;this.tongueCursorIndicator.scale.set(D,D,1)}return}}if(l){const y=a[0];this.tongueCursorIndicator.position.copy(y.point),this.tongueCursorIndicator.visible=!0,this.tongueCursorIndicator.material.color.setHex(65416);const _=performance.now()/1e3,E=1.3+Math.sin(_*8)*.15;this.tongueCursorIndicator.scale.set(E,E,1),this.tongueCursorIndicator.quaternion.set(0,0,0,1);return}this.tongueCursorIndicator.visible=!1}getPotentialTongueTargets(){if(!this.localFrog)return[];const e=this.localFrog.getMouthPosition(),t=this.localFrog.getForwardDirection(),n=b.tongueRange,i=kt.degToRad(b.tongueConeAngle),s=[];for(const[o,a]of Object.entries(this.frogs)){if(o===this.localFrog.id||a.isDead)continue;const l=a.mesh.position.clone();l.y+=.3;const c=new P().subVectors(l,e),h=c.length();if(h>n)continue;const u=c.clone().normalize();if(u.dot(t)<0)continue;const d=u.angleTo(t);d>i||s.push({type:"frog",point:l,distance:h,angle:d})}for(const o of this.grappleHooks){const a=new P().subVectors(o.position,e),l=a.length();if(l>n)continue;const c=a.clone().normalize();if(c.dot(t)<0)continue;const h=c.angleTo(t);h>i||s.push({type:"hook",point:o.position.clone(),distance:l,angle:h})}if(this.ball&&this.ball.mesh){const o=this.ball.mesh.position.clone(),a=new P().subVectors(o,e),l=a.length();if(l<=n){const c=a.clone().normalize();if(c.dot(t)>=0){const h=c.angleTo(t);h<=i&&s.push({type:"ball",point:o,distance:l,angle:h})}}}return s.map(o=>({...o,score:b.tongueAngleWeight*(o.angle/i)+b.tongueDistanceWeight*(o.distance/n)})).sort((o,a)=>o.score-a.score)}updateTongueDebug(){if(!this.tongueDebugCone){const a=Math.tan(kt.degToRad(b.tongueConeAngle))*b.tongueRange,l=new ha(a,b.tongueRange,32,1,!0),c=new Qt({color:65280,transparent:!0,opacity:.15,wireframe:!1,side:fn,depthWrite:!1});this.tongueDebugCone=new lt(l,c),this.tongueDebugCone.visible=!1,this.scene.add(this.tongueDebugCone);const h=new ha(a,b.tongueRange,16,1,!0),u=new Qt({color:65280,wireframe:!0,transparent:!0,opacity:.4});this.tongueDebugConeWire=new lt(h,u),this.tongueDebugConeWire.visible=!1,this.scene.add(this.tongueDebugConeWire),this.tongueDebugTargets=[];for(let d=0;d<10;d++){const f=new Wi(b.tongueMagnetRadius,16,16),g=new Qt({color:16776960,transparent:!0,opacity:.5,wireframe:!0}),x=new lt(f,g);x.visible=!1,this.scene.add(x),this.tongueDebugTargets.push(x)}}if(!b.tongueDebugEnabled){this.tongueDebugCone.visible=!1,this.tongueDebugConeWire.visible=!1;for(const a of this.tongueDebugTargets)a.visible=!1;return}if(!this.localFrog)return;const e=this.localFrog.getMouthPosition(),t=this.localFrog.getForwardDirection();this.tongueDebugCone.position.copy(e),this.tongueDebugConeWire.position.copy(e);const n=b.tongueRange/2;this.tongueDebugCone.position.add(t.clone().multiplyScalar(n)),this.tongueDebugConeWire.position.add(t.clone().multiplyScalar(n));const i=new P(0,-1,0),s=new an().setFromUnitVectors(i,t);this.tongueDebugCone.quaternion.copy(s),this.tongueDebugConeWire.quaternion.copy(s),this.tongueDebugCone.visible=!0,this.tongueDebugConeWire.visible=!0;const o=this.getPotentialTongueTargets();for(let a=0;a<this.tongueDebugTargets.length;a++)a<o.length?(this.tongueDebugTargets[a].position.copy(o[a].point),this.tongueDebugTargets[a].visible=!0,this.tongueDebugTargets[a].material.color.setHex(a===0?65280:16776960)):this.tongueDebugTargets[a].visible=!1}createPhysicsForMesh(e){const t=e.geometry;if(!t||!t.attributes||!t.attributes.position){console.warn(`Skipping physics for mesh "${e.name}": no position attributes`);return}const n=t.attributes.position,i=t.index;if(!n||n.count===0){console.warn(`Skipping physics for mesh "${e.name}": empty vertices`);return}if(n.count<3){console.warn(`Skipping physics for mesh "${e.name}": not enough vertices (${n.count})`);return}const s=e.getWorldScale(new P);if(s.x===0||s.y===0||s.z===0){console.warn(`Skipping physics for mesh "${e.name}": zero scale`);return}const o=[],a=[];for(let l=0;l<n.count;l++){const c=n.getX(l)*s.x,h=n.getY(l)*s.y,u=n.getZ(l)*s.z;if(!isFinite(c)||!isFinite(h)||!isFinite(u)){console.warn(`Skipping physics for mesh "${e.name}": invalid vertex at index ${l}`);return}o.push(c,h,u)}if(i&&i.count>0){if(i.count<3){console.warn(`Skipping physics for mesh "${e.name}": not enough indices (${i.count})`);return}for(let l=0;l<i.count;l++){const c=i.getX(l);if(c<0||c>=n.count){console.warn(`Skipping physics for mesh "${e.name}": index out of bounds at ${l}`);return}a.push(c)}}else{if(n.count%3!==0){console.warn(`Skipping physics for mesh "${e.name}": vertex count not divisible by 3`);return}for(let l=0;l<n.count;l++)a.push(l)}if(o.length<9||a.length<3){console.warn(`Skipping physics for mesh "${e.name}": insufficient data for triangles`);return}try{const l=new ua(o,a);if(!l.vertices||l.vertices.length===0||!l.indices||l.indices.length===0){console.warn(`Skipping physics for mesh "${e.name}": Trimesh creation resulted in empty data`);return}const c=new pe({mass:0,material:this.physics.groundMaterial});c.addShape(l);const h=e.getWorldPosition(new P),u=e.getWorldQuaternion(new an);c.position.copy(h),c.quaternion.copy(u),this.physics.world.addBody(c)}catch(l){console.error(`Failed to create physics for mesh "${e.name}":`,l)}}getMouseIntersection(e){if(!e)return null;this.raycaster.setFromCamera(e.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);for(const i of t)if(i.object.visible&&!(i.object.parent&&i.object.parent.type==="Line")){if(i.object.geometry&&i.object.geometry.type==="BoxGeometry"&&(i.object.geometry.boundingBox||i.object.geometry.computeBoundingBox())){const o=new P;if(i.object.geometry.boundingBox.getSize(o),o.x<.3&&o.y<.3&&o.z<.3)continue}return i.point.clone()}if(this.localFrog){const i=this.localFrog.mesh.position.y,s=new xi(new P(0,1,0),-i),o=new P;if(this.raycaster.ray.intersectPlane(s,o),o)return o}const n=new P;return this.raycaster.ray.at(15,n)}addLocalFrog(e,t,n){const i=new fa(e,t,this.physics,!0);return i.world=this,n&&(i.body.position.set(n.x,n.y,n.z),n.name&&i.setName(n.name),i.level=n.level||1,i.bio=n.bio||"",i.badges=n.badges||[],i.userId=n.userId||null),this.scene.add(i.mesh),this.localFrog=i,this.frogs[e]=i,i.particles=this.particles,i.onPunchHit=(s,o,a)=>this.checkPunchCollision(e,s,o,a),i}addRemoteFrog(e,t){if(this.frogs[e]){console.log(`Frog ${e} already exists, updating properties`);const i=this.frogs[e];return t.name&&i.setName(t.name),t.color&&i.setColor(t.color),t.level&&(i.level=t.level),t.bio!==void 0&&(i.bio=t.bio),t.badges&&(i.badges=t.badges),t.userId&&(i.userId=t.userId),i}const n=new fa(e,t.color,this.physics,!1);return t.name&&n.setName(t.name),n.level=t.level||1,n.bio=t.bio||"",n.badges=t.badges||[],n.userId=t.userId||null,n.updatePosition({x:t.x,y:t.y,z:t.z},{qx:t.qx,qy:t.qy,qz:t.qz,qw:t.qw}),this.scene.add(n.mesh),this.frogs[e]=n,n.particles=this.particles,n}checkPunchCollision(e,t,n,i){let s=!1;for(const o in this.frogs){if(o===e)continue;const a=this.frogs[o];if(!a.mesh||a.isDead)continue;const l=t.distanceTo(a.mesh.position);if(l<i){const c=Math.random()<b.criticalChance;let h;c?h=Math.floor(Math.random()*(b.criticalDamageMax-b.criticalDamageMin+1))+b.criticalDamageMin:h=Math.floor(Math.random()*(b.punchDamageMax-b.punchDamageMin+1))+b.punchDamageMin;const u=c?1.5:1,d=n.clone().multiplyScalar(b.knockbackForce*u);d.y=b.knockbackUpward*u,this.network&&this.network.sendHit(o,h,d,c),this.particles&&this.particles.spawnPunchImpact(a.mesh.position,n),console.log(`Frog ${e} hit frog ${o} for ${h} damage!${c?" CRITICAL!":""}`),s=!0}else l<i*2&&console.log(`Near miss on frog ${o}. Distance: ${l.toFixed(2)}, Need: ${i}`)}if(this.ball&&this.ball.mesh){const o=t.distanceTo(this.ball.mesh.position),a=i+this.ball.radius;o<a&&(this.ball.kick(n,12),this.particles&&this.particles.spawnPunchImpact(this.ball.mesh.position,n),console.log(`Frog ${e} kicked the ball!`),s=!0,this.network&&this.network.sendBallKick(this.ball.getSyncState()))}return s}removeFrog(e){if(this.frogs[e]){const t=this.frogs[e],n=t.name||`Frog ${e.substr(0,4)}`;t.dispose&&t.dispose(),this.scene.remove(t.mesh),t.body&&this.physics.world.removeBody(t.body),delete this.frogs[e],this.showToast(`${n} left the game`,"leave")}}showToast(e,t="info"){let n=document.getElementById("toast-container");n||(n=document.createElement("div"),n.id="toast-container",n.style.cssText=`
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
            `,document.head.appendChild(s)}n.appendChild(i),setTimeout(()=>{i.style.animation="toast-slide-out 0.3s ease-in forwards",setTimeout(()=>{i.parentNode&&i.parentNode.removeChild(i)},300)},3e3)}updateCamera(e){if(!this.localFrog||!this.localFrog.mesh)return;const t=this.localFrog.mesh.position.clone();if(e){if(e.middleMouseDown){const h=e.consumeMouseDelta();this.cameraOrbitAngle-=h.x*b.cameraRotateSpeed,this.cameraPitchAngle+=h.y*b.cameraRotateSpeed,this.cameraPitchAngle=Math.max(b.cameraMinPitch,Math.min(b.cameraMaxPitch,this.cameraPitchAngle))}const c=e.consumeScroll();c!==0&&(this.cameraDistance+=c*b.cameraZoomSpeed*.01,this.cameraDistance=Math.max(b.cameraMinDistance,Math.min(b.cameraMaxDistance,this.cameraDistance)))}const n=this.cameraDistance*Math.cos(this.cameraPitchAngle),i=this.cameraDistance*Math.sin(this.cameraPitchAngle),s=t.x+n*Math.sin(this.cameraOrbitAngle),o=t.y+i,a=t.z+n*Math.cos(this.cameraOrbitAngle),l=new P(s,o,a);this.shakeOffset&&l.add(this.shakeOffset),this.camera.position.lerp(l,b.cameraLerp),this.camera.lookAt(t),this.updateWallOcclusion(t)}updateWallOcclusion(e){if(!this.wallMeshes||this.wallMeshes.length===0)return;const t=new P().subVectors(e,this.camera.position).normalize(),n=this.camera.position.distanceTo(e);this.raycaster.set(this.camera.position,t),this.raycaster.far=n;const i=this.raycaster.intersectObjects(this.wallMeshes,!1),s=new Set;for(const o of i)o.distance<n-.5&&s.add(o.object);for(const o of this.wallMeshes){if(!o.userData.originalOpacity)continue;const a=s.has(o);if(o.userData.targetOpacity=a?.2:1,o.material){const l=o.material.opacity,c=o.userData.targetOpacity,h=5;Math.abs(l-c)>.01?o.material.opacity=kt.lerp(l,c,h*.016):o.material.opacity=c}}}step(e,t){if(this.physics.step(e),this.particles&&this.particles.update(e),this.ball&&(this.ball.update(e),this.isBallAuthority&&this.network&&this.ball.body)){const n=this.ball.body.velocity;(Math.abs(n.x)>.1||Math.abs(n.y)>.1||Math.abs(n.z)>.1)&&this.network.sendBallUpdate(this.ball.getSyncState())}for(const n of this.scooters)n.update(e,t);if(this.checkScooterSpawnZones(),t&&t.consumeDismount&&t.consumeDismount()&&(this.localFrog&&this.localFrog.isRidingScooter?this.localFrog.currentScooter&&(this.localFrog.currentScooter.dismount(),this.showToast("Dismounted! 🐸")):this.tryMountScooter()),this.shakeTimer>0){this.shakeTimer-=e;const n=this.shakeIntensity*(this.shakeTimer>0?1:0);this.shakeOffset.set((Math.random()-.5)*n,(Math.random()-.5)*n,(Math.random()-.5)*n)}else this.shakeOffset.set(0,0,0);if(this.updateCamera(t),this.updateTongueCursorIndicator(t),this.updateTongueDebug(),this.updateLocalFrogAura(),this.localFrog&&this.checkFrogClick(t),b.useShader&&this.composer){const n=this.customPass.uniforms;n.uTime.value=performance.now()/1e3,n.uSaturation.value=b.shaderSaturation,n.uBrightness.value=b.shaderBrightness,n.uContrast.value=b.shaderContrast,n.uGamma.value=b.shaderGamma,n.uTint.value.set(b.shaderTintR,b.shaderTintG,b.shaderTintB),n.uTemperature.value=b.shaderTemperature,n.uVignetteEnabled.value=b.vignetteEnabled?1:0,n.uVignetteIntensity.value=b.vignetteIntensity,n.uVignetteRadius.value=b.vignetteRadius,n.uVignetteSoftness.value=b.vignetteSoftness,n.uChromaticEnabled.value=b.chromaticEnabled?1:0,n.uChromaticIntensity.value=b.chromaticIntensity,n.uChromaticRadial.value=b.chromaticRadial?1:0,n.uGrainEnabled.value=b.grainEnabled?1:0,n.uGrainIntensity.value=b.grainIntensity,n.uGrainSpeed.value=b.grainSpeed,n.uGrainSize.value=b.grainSize,n.uSharpenEnabled.value=b.sharpenEnabled?1:0,n.uSharpenIntensity.value=b.sharpenIntensity,n.uBloomEnabled.value=b.bloomEnabled?1:0,n.uBloomIntensity.value=b.bloomIntensity,n.uBloomThreshold.value=b.bloomThreshold,n.uBloomRadius.value=b.bloomRadius,this.composer.render()}else this.renderer.render(this.scene,this.camera);this.labelRenderer.render(this.scene,this.camera)}triggerScreenShake(e,t){b.vfxEnabled&&(this.shakeIntensity=e,this.shakeTimer=t)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.labelRenderer.setSize(window.innerWidth,window.innerHeight),this.composer&&this.composer.setSize(window.innerWidth,window.innerHeight),this.customPass&&this.customPass.uniforms.uResolution&&this.customPass.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight)}checkScooterSpawnZones(){if(!this.localFrog||!this.localFrog.mesh)return;const e=this.localFrog.mesh.position;for(const t of this.scooters){if(t.rider)continue;const i=e.distanceTo(t.mesh.position)<b.scooterSpawnRadius;t.setHighlight(i&&!this.localFrog.isRidingScooter)}}tryMountScooter(){if(!this.localFrog||this.localFrog.isRidingScooter)return!1;const e=this.localFrog.mesh.position;for(const t of this.scooters){if(t.rider)continue;if(e.distanceTo(t.mesh.position)<b.scooterSpawnRadius)return t.mount(this.localFrog),this.showToast("Vroom! 🛴 (Jump to dismount)"),!0}return!1}spawnScooterAtZone(e){const t="#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),n=new da(`scooter_${Date.now()}_${Math.random().toString(36).substr(2,9)} `,t,this.scene,this.physics),i=(Math.random()-.5)*20,s=(Math.random()-.5)*20,o=1.5;n.mesh.position.set(i,o,s),n.body&&n.body.position.set(i,o,s),n.particles=this.particles,this.scooters.push(n),console.log(`Scooter spawned at: (${i.toFixed(1)}, ${o}, ${s.toFixed(1)})`)}showToast(e){let t=document.getElementById("game-toast");t||(t=document.createElement("div"),t.id="game-toast",t.style.cssText=`
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
        `,document.body.appendChild(t)),t.textContent=e,t.style.opacity="1",this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>{t.style.opacity="0"},2e3)}checkFrogClick(e){if(!e||!e.leftClickPunch)return;this.raycaster.setFromCamera(e.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);for(const n of t){let i=n.object;for(;i;){for(const s of Object.values(this.frogs))if(s.mesh===i&&!s.isLocal)return this.showProfileButton(s),e.leftClickPunch=!1,!0;i=i.parent}}return!1}showProfileButton(e){if(this.profileButtonTarget=e,this.network&&this.network.socket){const t=e.userId&&String(e.userId).length<15?"getProfile":"getProfileBySocket",n=t==="getProfile"?e.userId:e.id;console.log(`📡 Pre-fetching profile for ${e.name} via ${t}(${n})`),this.network.socket.emit(t,n,i=>{const s={id:e.id,userId:(i==null?void 0:i.id)||e.userId,name:(i==null?void 0:i.username)||e.name,color:(i==null?void 0:i.color)||e.color,level:(i==null?void 0:i.level)||e.level||1,bio:(i==null?void 0:i.bio)||e.bio||"",badges:(i==null?void 0:i.badges)||e.badges||[],isFriend:void 0};i&&(e.userId=s.userId,e.bio=s.bio,e.badges=s.badges,e.level=s.level),console.log("✅ Opening profile directly:",s),this.openProfile(s)})}else this.openProfile({id:e.id,userId:e.userId,name:e.name,color:e.color,level:e.level||1,bio:e.bio||"",badges:e.badges||[],isFriend:void 0})}openProfile(e){this.currentProfileId=e.id,this.currentProfileData=e;const t=document.getElementById("profile-modal"),n=document.getElementById("p-username"),i=document.getElementById("p-level"),s=document.getElementById("p-bio"),o=document.getElementById("p-badges-row"),a=document.getElementById("p-btn-action"),l=document.getElementById("p-btn-mute"),c=document.getElementById("p-close-btn"),h=document.getElementById("p-avatar-canvas-container");if(!t||!n||!i||!a||!l){console.error("Profile modal elements missing!");return}const u=String(e.id||"");if(n.textContent=e.name||`Frog ${u.substring(0,4)}`,i.textContent=`LEVEL ${e.level||1}`,s.textContent=e.bio||"No bio set.",s.textContent=e.bio||"No bio set.",o){let x=[];try{x=Array.isArray(e.badges)?e.badges:JSON.parse(e.badges||"[]")}catch{x=[]}o.innerHTML="",x.slice(0,4).forEach(p=>{const v=document.createElement("div");v.className="profile-badge-new",v.textContent=p,o.appendChild(v)})}h&&this.showFrogPreviewInModal(e,h);const d=this.network&&this.network.mutedPlayers&&this.network.mutedPlayers.has(e.id);l.innerHTML=d?"<span>🔊</span> Unmute Chat":"<span>🔇</span> Mute Chat",l.onclick=x=>{if(x.stopPropagation(),this.network){this.network.toggleMute(e.id);const m=this.network.mutedPlayers.has(e.id);l.innerHTML=m?"<span>🔊</span> Unmute Chat":"<span>🔇</span> Mute Chat"}};const f=x=>{x?a.innerHTML="<span>💬</span> Send Message":a.innerHTML="<span>✚</span> Add Friend"};f(e.isFriend),a.onclick=x=>{if(x.stopPropagation(),window.game&&!window.game.isAuthenticated){this.showToast("Register an account to interact!");return}e.isFriend?this.network&&(this.network.openDM(e.id,e.name),this.closeProfile()):this.network&&this.network.socket&&this.network.socket.emit("sendFriendRequest",e.name,m=>{m.success?(this.showToast(`Friend request sent to ${e.name}!`),a.innerHTML="<span>🕒</span> Sent"):this.showToast(m.error||"Failed to send")})};const g=e.userId||e.id;e.isFriend===void 0&&this.network&&this.network.socket&&g&&this.network.socket.emit("checkFriendship",g,x=>{x&&x.isFriend&&(e.isFriend=!0,f(!0))}),c&&(c.onclick=()=>this.closeProfile()),t.style.display="block",t.offsetWidth,t.classList.add("active")}closeProfile(){const e=document.getElementById("profile-modal");e&&(e.classList.remove("active"),setTimeout(()=>{e.style.display="none"},300)),this.currentProfileId=null,this.currentProfileData=null,this.previewFrameId&&(cancelAnimationFrame(this.previewFrameId),this.previewFrameId=null)}showFrogPreviewInModal(e,t){t.innerHTML="";const n=new ru,i=new Ht(45,1,.1,10);i.position.set(0,.4,3.5),i.lookAt(0,.1,0);const s=new Zu({antialias:!0,alpha:!0});s.setSize(120,120),s.setPixelRatio(window.devicePixelRatio),t.appendChild(s.domElement);const o=new Su(16777215,1);n.add(o);const a=new Zo(16777215,1.5);a.position.set(2,2,5),n.add(a);let l;const c=this.frogs[e.id];if(c&&c.bodyMesh)l=c.bodyMesh.clone();else if(this.frogModel)l=this.frogModel.clone(),e.color&&l.traverse(u=>{u.isMesh&&u.name.includes("Body")&&(u.material=u.material.clone(),u.material.color.set(e.color))});else{const u=new qi(.8,.6,1),d=new mg({color:e.color||"#4CAF50"});l=new lt(u,d)}l.position.set(0,-.1,0),l.scale.set(1.2,1.2,1.2),n.add(l);const h=()=>{if(this.currentProfileId!==e.id){s.dispose();return}l.rotation.y+=.02,s.render(n,i),this.previewFrameId=requestAnimationFrame(h)};h()}updateLocalFrogAura(){if(!(!this.localFrog||!this.localFrog.mesh))if(this.localAura||(this.localAura=new Nf(62207,5,4),this.scene.add(this.localAura)),this.localFrog.isDead)this.localAura.visible=!1;else{this.localAura.visible=!0,this.localAura.position.copy(this.localFrog.mesh.position),this.localAura.position.y+=.5;const e=performance.now()/1e3;this.localAura.intensity=5+Math.sin(e*4)*1}}}class fS{constructor(){this.keys={forward:!1,backward:!1,left:!1,right:!1,jump:!1},this.mouse={x:0,y:0},this.middleMouseDown=!1,this.mouseDelta={x:0,y:0},this.lastMouse={x:0,y:0},this.scrollDelta=0,this.leftClickPunch=!1,this.rightClickTongue=!1,this.tongueHeld=!1,this.chatOpen=!1,this.chatInput=document.getElementById("chat-input"),this.isMobile=this.detectMobile(),document.addEventListener("keydown",e=>this.onKeyDown(e)),document.addEventListener("keyup",e=>this.onKeyUp(e)),document.addEventListener("mousemove",e=>this.onMouseMove(e)),document.addEventListener("mousedown",e=>this.onMouseDown(e)),document.addEventListener("mouseup",e=>this.onMouseUp(e)),document.addEventListener("wheel",e=>this.onWheel(e),{passive:!1}),document.addEventListener("contextmenu",e=>{e.preventDefault()}),document.addEventListener("gesturestart",e=>e.preventDefault()),document.addEventListener("gesturechange",e=>e.preventDefault()),document.addEventListener("gestureend",e=>e.preventDefault()),this.isMobile&&this.setupMobileControls()}showMobileControls(){this.mobileUI&&(this.mobileUI.style.display="block")}detectMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=800}setupMobileControls(){this.createMobileUI(),this.joystick={active:!1,startX:0,startY:0,currentX:0,currentY:0,touchId:null},this.cameraTouch={active:!1,startX:0,startY:0,touchId:null},document.addEventListener("touchstart",e=>this.onTouchStart(e),{passive:!1}),document.addEventListener("touchmove",e=>this.onTouchMove(e),{passive:!1}),document.addEventListener("touchend",e=>this.onTouchEnd(e),{passive:!1})}createMobileUI(){const e=document.createElement("div");e.id="mobile-controls",e.style.display="none",e.innerHTML=`
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
        `,document.head.appendChild(t);const n=document.getElementById("btn-jump"),i=document.getElementById("btn-attack");n.addEventListener("touchstart",s=>{s.preventDefault(),this.keys.jump=!0}),n.addEventListener("touchend",s=>{s.preventDefault(),this.keys.jump=!1}),i.addEventListener("touchstart",s=>{s.preventDefault(),this.leftClickPunch=!0}),this.joystickBase=document.getElementById("joystick-base"),this.joystickStick=document.getElementById("joystick-stick")}onTouchStart(e){for(const t of e.changedTouches){const n=t.clientX,i=t.clientY;n<window.innerWidth/3&&!this.joystick.active?(this.joystick.active=!0,this.joystick.touchId=t.identifier,this.joystick.startX=n,this.joystick.startY=i,e.preventDefault()):n>window.innerWidth/2&&i<window.innerHeight-150&&!this.cameraTouch.active&&(this.cameraTouch.active=!0,this.cameraTouch.touchId=t.identifier,this.cameraTouch.startX=n,this.cameraTouch.startY=i,e.preventDefault())}}onTouchMove(e){for(const t of e.changedTouches){if(this.joystick.active&&t.identifier===this.joystick.touchId){const n=t.clientX-this.joystick.startX,i=t.clientY-this.joystick.startY,s=40,o=Math.sqrt(n*n+i*i),a=Math.min(o,s),l=Math.atan2(i,n),c=Math.cos(l)*a,h=Math.sin(l)*a;this.joystickStick.style.transform=`translate(${c}px, ${h}px)`;const u=15;this.keys.forward=h<-u,this.keys.backward=h>u,this.keys.left=c<-u,this.keys.right=c>u,e.preventDefault()}if(this.cameraTouch.active&&t.identifier===this.cameraTouch.touchId){const n=t.clientX-this.cameraTouch.startX,i=t.clientY-this.cameraTouch.startY;this.mouseDelta.x+=n*2,this.mouseDelta.y+=i*2,this.cameraTouch.startX=t.clientX,this.cameraTouch.startY=t.clientY,this.middleMouseDown=!0,e.preventDefault()}}}onTouchEnd(e){for(const t of e.changedTouches)this.joystick.active&&t.identifier===this.joystick.touchId&&(this.joystick.active=!1,this.joystick.touchId=null,this.joystickStick.style.transform="translate(0, 0)",this.keys.forward=!1,this.keys.backward=!1,this.keys.left=!1,this.keys.right=!1),this.cameraTouch.active&&t.identifier===this.cameraTouch.touchId&&(this.cameraTouch.active=!1,this.cameraTouch.touchId=null,this.middleMouseDown=!1,this.mouseDelta.x=0,this.mouseDelta.y=0)}onMouseMove(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.middleMouseDown&&(this.mouseDelta.x=e.clientX-this.lastMouse.x,this.mouseDelta.y=e.clientY-this.lastMouse.y),this.lastMouse.x=e.clientX,this.lastMouse.y=e.clientY}onMouseDown(e){e.button===1&&(this.middleMouseDown=!0,this.lastMouse.x=e.clientX,this.lastMouse.y=e.clientY,this.mouseDelta.x=0,this.mouseDelta.y=0,e.preventDefault());const t=e.target.closest("button, input, textarea, .panel, .panel-overlay, .bottom-left-buttons, #profile-modal, #dm-chat-panel, #emote-wheel, #friend-list-overlay, #profile-editor-overlay");e.button===0&&!this.chatOpen&&!t&&(this.leftClickPunch=!0),e.button===2&&!this.chatOpen&&!t&&(this.rightClickTongue=!0,this.tongueHeld=!0,e.preventDefault())}onMouseUp(e){e.button===1&&(this.middleMouseDown=!1,this.mouseDelta.x=0,this.mouseDelta.y=0),e.button===2&&(this.tongueHeld=!1)}onWheel(e){if(this.chatOpen)return;const t=document.getElementById("chat-panel");t&&t.contains(e.target)||(this.scrollDelta=e.deltaY,e.preventDefault())}consumeScroll(){const e=this.scrollDelta;return this.scrollDelta=0,e}consumeMouseDelta(){const e={x:this.mouseDelta.x,y:this.mouseDelta.y};return this.mouseDelta.x=0,this.mouseDelta.y=0,e}consumePunch(){const e=this.leftClickPunch;return this.leftClickPunch=!1,e}consumeTongue(){const e=this.rightClickTongue;return this.rightClickTongue=!1,e}onKeyDown(e){const t=document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA");if(e.code==="Enter"){if(this.chatOpen){this.toggleChat(),e.preventDefault();return}else if(!t){this.toggleChat(),e.preventDefault();return}}if(e.code==="F3"){e.preventDefault(),window.dispatchEvent(new CustomEvent("toggle-tongue-debug"));return}if(!(this.chatOpen||t))switch(e.code){case"ArrowUp":case"KeyW":this.keys.forward=!0;break;case"ArrowDown":case"KeyS":this.keys.backward=!0;break;case"ArrowLeft":case"KeyA":this.keys.left=!0;break;case"ArrowRight":case"KeyD":this.keys.right=!0;break;case"Space":this.keys.jump=!0;break;case"KeyE":this.dismountPressed=!0;break}}consumeDismount(){const e=this.dismountPressed;return this.dismountPressed=!1,e}onKeyUp(e){const t=document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA");if(!(this.chatOpen||t))switch(e.code){case"ArrowUp":case"KeyW":this.keys.forward=!1;break;case"ArrowDown":case"KeyS":this.keys.backward=!1;break;case"ArrowLeft":case"KeyA":this.keys.left=!1;break;case"ArrowRight":case"KeyD":this.keys.right=!1;break;case"Space":this.keys.jump=!1;break}}toggleChat(){if(this.chatOpen=!this.chatOpen,this.chatOpen)this.chatInput.style.display="block",this.chatInput.focus(),this.keys.forward=!1,this.keys.backward=!1,this.keys.left=!1,this.keys.right=!1,this.keys.jump=!1;else{const e=this.chatInput.value.trim();if(e){const t=new CustomEvent("chat-send",{detail:e});window.dispatchEvent(t)}this.chatInput.value="",this.chatInput.style.display="none"}}}const ei=Object.create(null);ei.open="0";ei.close="1";ei.ping="2";ei.pong="3";ei.message="4";ei.upgrade="5";ei.noop="6";const Qo=Object.create(null);Object.keys(ei).forEach(r=>{Qo[ei[r]]=r});const Rc={type:"error",data:"parser error"},Qf=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",ep=typeof ArrayBuffer=="function",tp=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer,mh=({type:r,data:e},t,n)=>Qf&&e instanceof Blob?t?n(e):Ud(e,n):ep&&(e instanceof ArrayBuffer||tp(e))?t?n(e):Ud(new Blob([e]),n):n(ei[r]+(e||"")),Ud=(r,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(r)};function Bd(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}let El;function pS(r,e){if(Qf&&r.data instanceof Blob)return r.data.arrayBuffer().then(Bd).then(e);if(ep&&(r.data instanceof ArrayBuffer||tp(r.data)))return e(Bd(r.data));mh(r,!1,t=>{El||(El=new TextEncoder),e(El.encode(t))})}const Od="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Lr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let r=0;r<Od.length;r++)Lr[Od.charCodeAt(r)]=r;const mS=r=>{let e=r.length*.75,t=r.length,n,i=0,s,o,a,l;r[r.length-1]==="="&&(e--,r[r.length-2]==="="&&e--);const c=new ArrayBuffer(e),h=new Uint8Array(c);for(n=0;n<t;n+=4)s=Lr[r.charCodeAt(n)],o=Lr[r.charCodeAt(n+1)],a=Lr[r.charCodeAt(n+2)],l=Lr[r.charCodeAt(n+3)],h[i++]=s<<2|o>>4,h[i++]=(o&15)<<4|a>>2,h[i++]=(a&3)<<6|l&63;return c},gS=typeof ArrayBuffer=="function",gh=(r,e)=>{if(typeof r!="string")return{type:"message",data:np(r,e)};const t=r.charAt(0);return t==="b"?{type:"message",data:xS(r.substring(1),e)}:Qo[t]?r.length>1?{type:Qo[t],data:r.substring(1)}:{type:Qo[t]}:Rc},xS=(r,e)=>{if(gS){const t=mS(r);return np(t,e)}else return{base64:!0,data:r}},np=(r,e)=>{switch(e){case"blob":return r instanceof Blob?r:new Blob([r]);case"arraybuffer":default:return r instanceof ArrayBuffer?r:r.buffer}},ip="",vS=(r,e)=>{const t=r.length,n=new Array(t);let i=0;r.forEach((s,o)=>{mh(s,!1,a=>{n[o]=a,++i===t&&e(n.join(ip))})})},yS=(r,e)=>{const t=r.split(ip),n=[];for(let i=0;i<t.length;i++){const s=gh(t[i],e);if(n.push(s),s.type==="error")break}return n};function _S(){return new TransformStream({transform(r,e){pS(r,t=>{const n=t.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}r.data&&typeof r.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(t)})}})}let Tl;function Vo(r){return r.reduce((e,t)=>e+t.length,0)}function Ho(r,e){if(r[0].length===e)return r.shift();const t=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)t[i]=r[0][n++],n===r[0].length&&(r.shift(),n=0);return r.length&&n<r[0].length&&(r[0]=r[0].slice(n)),t}function bS(r,e){Tl||(Tl=new TextDecoder);const t=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(n===0){if(Vo(t)<1)break;const l=Ho(t,1);s=(l[0]&128)===128,i=l[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(Vo(t)<2)break;const l=Ho(t,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(Vo(t)<8)break;const l=Ho(t,8),c=new DataView(l.buffer,l.byteOffset,l.length),h=c.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue(Rc);break}i=h*Math.pow(2,32)+c.getUint32(4),n=3}else{if(Vo(t)<i)break;const l=Ho(t,i);a.enqueue(gh(s?l:Tl.decode(l),e)),n=0}if(i===0||i>r){a.enqueue(Rc);break}}}})}const sp=4;function Rt(r){if(r)return wS(r)}function wS(r){for(var e in Rt.prototype)r[e]=Rt.prototype[e];return r}Rt.prototype.on=Rt.prototype.addEventListener=function(r,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+r]=this._callbacks["$"+r]||[]).push(e),this};Rt.prototype.once=function(r,e){function t(){this.off(r,t),e.apply(this,arguments)}return t.fn=e,this.on(r,t),this};Rt.prototype.off=Rt.prototype.removeListener=Rt.prototype.removeAllListeners=Rt.prototype.removeEventListener=function(r,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+r];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+r],this;for(var n,i=0;i<t.length;i++)if(n=t[i],n===e||n.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+r],this};Rt.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+r],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,i=t.length;n<i;++n)t[n].apply(this,e)}return this};Rt.prototype.emitReserved=Rt.prototype.emit;Rt.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks["$"+r]||[]};Rt.prototype.hasListeners=function(r){return!!this.listeners(r).length};const Aa=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),dn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),MS="arraybuffer";function rp(r,...e){return e.reduce((t,n)=>(r.hasOwnProperty(n)&&(t[n]=r[n]),t),{})}const SS=dn.setTimeout,ES=dn.clearTimeout;function Ca(r,e){e.useNativeTimers?(r.setTimeoutFn=SS.bind(dn),r.clearTimeoutFn=ES.bind(dn)):(r.setTimeoutFn=dn.setTimeout.bind(dn),r.clearTimeoutFn=dn.clearTimeout.bind(dn))}const TS=1.33;function AS(r){return typeof r=="string"?CS(r):Math.ceil((r.byteLength||r.size)*TS)}function CS(r){let e=0,t=0;for(let n=0,i=r.length;n<i;n++)e=r.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function op(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function RS(r){let e="";for(let t in r)r.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(r[t]));return e}function LS(r){let e={},t=r.split("&");for(let n=0,i=t.length;n<i;n++){let s=t[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class PS extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class xh extends Rt{constructor(e){super(),this.writable=!1,Ca(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new PS(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=gh(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=RS(e);return t.length?"?"+t:""}}class IS extends xh{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};yS(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,vS(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=op()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let ap=!1;try{ap=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const DS=ap;function NS(){}class FS extends IS{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let n=location.port;n||(n=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}let js=class ea extends Rt{constructor(e,t,n){super(),this.createRequest=e,Ca(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const t=rp(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=ea.requestsCount++,ea.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=NS,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete ea.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};js.requestsCount=0;js.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",kd);else if(typeof addEventListener=="function"){const r="onpagehide"in dn?"pagehide":"unload";addEventListener(r,kd,!1)}}function kd(){for(let r in js.requests)js.requests.hasOwnProperty(r)&&js.requests[r].abort()}const US=function(){const r=lp({xdomain:!1});return r&&r.responseType!==null}();class BS extends FS{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=US&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new js(lp,this.uri(),e)}}function lp(r){const e=r.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||DS))return new XMLHttpRequest}catch{}if(!e)try{return new dn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const cp=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class OS extends xh{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=cp?{}:rp(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;mh(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&Aa(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=op()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const Al=dn.WebSocket||dn.MozWebSocket;class kS extends OS{createSocket(e,t,n){return cp?new Al(e,t,n):t?new Al(e,t):new Al(e)}doWrite(e,t){this.ws.send(t)}}class zS extends xh{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=bS(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),i=_S();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;this._writer.write(n).then(()=>{i&&Aa(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const VS={websocket:kS,webtransport:zS,polling:BS},HS=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,GS=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Lc(r){if(r.length>8e3)throw"URI too long";const e=r,t=r.indexOf("["),n=r.indexOf("]");t!=-1&&n!=-1&&(r=r.substring(0,t)+r.substring(t,n).replace(/:/g,";")+r.substring(n,r.length));let i=HS.exec(r||""),s={},o=14;for(;o--;)s[GS[o]]=i[o]||"";return t!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=WS(s,s.path),s.queryKey=XS(s,s.query),s}function WS(r,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function XS(r,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(t[i]=s)}),t}const Pc=typeof addEventListener=="function"&&typeof removeEventListener=="function",ta=[];Pc&&addEventListener("offline",()=>{ta.forEach(r=>r())},!1);class Vi extends Rt{constructor(e,t){if(super(),this.binaryType=MS,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const n=Lc(e);t.hostname=n.host,t.secure=n.protocol==="https"||n.protocol==="wss",t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=Lc(t.host).host);Ca(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=LS(this.opts.query)),Pc&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ta.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=sp,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Vi.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",Vi.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(t+=AS(i)),n>0&&t>this._maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Aa(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,i){if(typeof t=="function"&&(i=t,t=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:t,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(Vi.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Pc&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=ta.indexOf(this._offlineEventListener);n!==-1&&ta.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}Vi.protocol=sp;class qS extends Vi{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;Vi.priorWebsocketSuccess=!1;const i=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",u=>{if(!n)if(u.type==="pong"&&u.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Vi.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(h(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=t.name,this.emitReserved("upgradeError",d)}}))};function s(){n||(n=!0,h(),t.close(),t=null)}const o=u=>{const d=new Error("probe error: "+u);d.transport=t.name,s(),this.emitReserved("upgradeError",d)};function a(){o("transport closed")}function l(){o("socket closed")}function c(u){t&&u.name!==t.name&&s()}const h=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};t.once("open",i),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}let jS=class extends qS{constructor(e,t={}){const n=typeof e=="object"?e:t;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>VS[i]).filter(i=>!!i)),super(e,n)}};function $S(r,e="",t){let n=r;t=t||typeof location<"u"&&location,r==null&&(r=t.protocol+"//"+t.host),typeof r=="string"&&(r.charAt(0)==="/"&&(r.charAt(1)==="/"?r=t.protocol+r:r=t.host+r),/^(https?|wss?):\/\//.test(r)||(typeof t<"u"?r=t.protocol+"//"+r:r="https://"+r),n=Lc(r)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(t&&t.port===n.port?"":":"+n.port),n}const YS=typeof ArrayBuffer=="function",KS=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer,hp=Object.prototype.toString,ZS=typeof Blob=="function"||typeof Blob<"u"&&hp.call(Blob)==="[object BlobConstructor]",JS=typeof File=="function"||typeof File<"u"&&hp.call(File)==="[object FileConstructor]";function vh(r){return YS&&(r instanceof ArrayBuffer||KS(r))||ZS&&r instanceof Blob||JS&&r instanceof File}function na(r,e){if(!r||typeof r!="object")return!1;if(Array.isArray(r)){for(let t=0,n=r.length;t<n;t++)if(na(r[t]))return!0;return!1}if(vh(r))return!0;if(r.toJSON&&typeof r.toJSON=="function"&&arguments.length===1)return na(r.toJSON(),!0);for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&na(r[t]))return!0;return!1}function QS(r){const e=[],t=r.data,n=r;return n.data=Ic(t,e),n.attachments=e.length,{packet:n,buffers:e}}function Ic(r,e){if(!r)return r;if(vh(r)){const t={_placeholder:!0,num:e.length};return e.push(r),t}else if(Array.isArray(r)){const t=new Array(r.length);for(let n=0;n<r.length;n++)t[n]=Ic(r[n],e);return t}else if(typeof r=="object"&&!(r instanceof Date)){const t={};for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=Ic(r[n],e));return t}return r}function eE(r,e){return r.data=Dc(r.data,e),delete r.attachments,r}function Dc(r,e){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num=="number"&&r.num>=0&&r.num<e.length)return e[r.num];throw new Error("illegal attachments")}else if(Array.isArray(r))for(let t=0;t<r.length;t++)r[t]=Dc(r[t],e);else if(typeof r=="object")for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&(r[t]=Dc(r[t],e));return r}const tE=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],nE=5;var et;(function(r){r[r.CONNECT=0]="CONNECT",r[r.DISCONNECT=1]="DISCONNECT",r[r.EVENT=2]="EVENT",r[r.ACK=3]="ACK",r[r.CONNECT_ERROR=4]="CONNECT_ERROR",r[r.BINARY_EVENT=5]="BINARY_EVENT",r[r.BINARY_ACK=6]="BINARY_ACK"})(et||(et={}));class iE{constructor(e){this.replacer=e}encode(e){return(e.type===et.EVENT||e.type===et.ACK)&&na(e)?this.encodeAsBinary({type:e.type===et.EVENT?et.BINARY_EVENT:et.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===et.BINARY_EVENT||e.type===et.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=QS(e),n=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(n),i}}function zd(r){return Object.prototype.toString.call(r)==="[object Object]"}class yh extends Rt{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===et.BINARY_EVENT;n||t.type===et.BINARY_ACK?(t.type=n?et.EVENT:et.ACK,this.reconstructor=new sE(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(vh(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(et[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===et.BINARY_EVENT||n.type===et.BINARY_ACK){const s=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(s,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(e.charAt(t+1)==="/"){const s=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(s,t)}else n.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const s=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(s,t+1))}if(e.charAt(++t)){const s=this.tryParse(e.substr(t));if(yh.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case et.CONNECT:return zd(t);case et.DISCONNECT:return t===void 0;case et.CONNECT_ERROR:return typeof t=="string"||zd(t);case et.EVENT:case et.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&tE.indexOf(t[0])===-1);case et.ACK:case et.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class sE{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=eE(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const rE=Object.freeze(Object.defineProperty({__proto__:null,Decoder:yh,Encoder:iE,get PacketType(){return et},protocol:nE},Symbol.toStringTag,{value:"Module"}));function Mn(r,e,t){return r.on(e,t),function(){r.off(e,t)}}const oE=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class up extends Rt{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Mn(e,"open",this.onopen.bind(this)),Mn(e,"packet",this.onpacket.bind(this)),Mn(e,"error",this.onerror.bind(this)),Mn(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var n,i,s;if(oE.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const o={type:et.EVENT,data:t};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const h=this.ids++,u=t.pop();this._registerAckCallback(h,u),o.id=h}const a=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,t){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=t;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);t.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(s),t.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...t){return new Promise((n,i)=>{const s=(o,a)=>o?i(o):n(a);s.withError=!0,t.push(s),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>n!==this._queue[0]?void 0:(i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:et.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case et.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case et.EVENT:case et.BINARY_EVENT:this.onevent(e);break;case et.ACK:case et.BINARY_ACK:this.onack(e);break;case et.DISCONNECT:this.ondisconnect();break;case et.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...i){n||(n=!0,t.packet({type:et.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:et.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function hr(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}hr.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*r);r=Math.floor(e*10)&1?r+t:r-t}return Math.min(r,this.max)|0};hr.prototype.reset=function(){this.attempts=0};hr.prototype.setMin=function(r){this.ms=r};hr.prototype.setMax=function(r){this.max=r};hr.prototype.setJitter=function(r){this.jitter=r};class Nc extends Rt{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Ca(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new hr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||rE;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new jS(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=Mn(t,"open",function(){n.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Mn(t,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Mn(e,"ping",this.onping.bind(this)),Mn(e,"data",this.ondata.bind(this)),Mn(e,"error",this.onerror.bind(this)),Mn(e,"close",this.onclose.bind(this)),Mn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Aa(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new up(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Tr={};function ia(r,e){typeof r=="object"&&(e=r,r=void 0),e=e||{};const t=$S(r,e.path||"/socket.io"),n=t.source,i=t.id,s=t.path,o=Tr[i]&&s in Tr[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new Nc(n,e):(Tr[i]||(Tr[i]=new Nc(n,e)),l=Tr[i]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(ia,{Manager:Nc,Socket:up,io:ia,connect:ia});class aE{constructor(e){this.world=e,this.socket=ia(),this.socket.on("connect",()=>{console.log("Connected to server:",this.socket.id);const t=document.getElementById("offline-overlay");t&&t.classList.contains("visible")&&(t.classList.remove("visible"),window.location.reload()),this.socket.emit("spectate")}),this.socket.on("disconnect",t=>{console.log("Disconnected from server:",t),this.showOfflineOverlay()}),this.socket.on("connect_error",t=>{console.log("Connection error:",t),this.showOfflineOverlay()}),this.socket.on("kicked",t=>{alert("Disconnected: "+t),window.location.reload()}),this.socket.on("currentPlayers",t=>{Object.keys(t).forEach(n=>{this.world.addRemoteFrog(n,t[n])})}),this.socket.on("selfJoined",t=>{if(this.world.addLocalFrog(t.id,t.color,t),t.accountData){const n=t.accountData,i=document.getElementById("level-badge"),s=document.getElementById("xp-fill");i&&(i.textContent=`Lv.${n.level||1}`),s&&n.xpToNext&&(s.style.width=`${n.xp/n.xpToNext*100}%`);const o=document.getElementById("stat-level"),a=document.getElementById("stat-xp"),l=document.getElementById("stat-kills"),c=document.getElementById("stat-deaths"),h=document.getElementById("stat-kd"),u=document.getElementById("stat-playtime");if(o&&(o.textContent=n.level||1),a&&(a.textContent=n.xp||0),l&&(l.textContent=n.kills||0),c&&(c.textContent=n.deaths||0),h){const d=n.deaths>0?(n.kills/n.deaths).toFixed(2):(n.kills||0).toFixed(2);h.textContent=d}if(u){const d=Math.floor((n.totalPlaytime||0)/36e5),f=Math.floor((n.totalPlaytime||0)%36e5/6e4);u.textContent=d>0?`${d}h ${f}m`:`${f}m`}this.socket.emit("getFriendRequests"),this.socket.emit("getUnreadDMs")}}),this.socket.on("newPlayer",t=>{this.world.addRemoteFrog(t.id,t);const n=t.name||`Frog ${t.id.substr(0,4)}`;this.world.showToast&&this.world.showToast(`${n} joined the game`,"join")}),this.socket.on("playerDisconnected",t=>{this.world.removeFrog(t),this.mutedPlayers&&this.mutedPlayers.delete(t)}),this.mutedPlayers=new Set,this.socket.on("playerAFKStatus",({id:t,isAFK:n})=>{const i=this.world.frogs[t];i&&(i.isAFK=n,i.updateNameTag())}),this.socket.on("playerColorChanged",({id:t,color:n})=>{const i=this.world.frogs[t];i&&i.setColor&&i.setColor(n)}),this.socket.on("playerProfileUpdated",({id:t,bio:n,badges:i})=>{const s=this.world.frogs[t];s&&(n!==void 0&&(s.bio=n),i!==void 0&&(s.badges=i),this.world.currentProfileId===t&&this.world.openProfile({id:s.id,userId:s.userId,name:s.name,color:s.color,level:s.level||1,bio:s.bio,badges:s.badges,isFriend:this.world.currentProfileData?this.world.currentProfileData.isFriend:void 0}))}),this.socket.on("playerMoved",t=>{if(t.id===this.socket.id)return;const n=this.world.frogs[t.id];n&&n.applySyncState(t)}),this.socket.on("playerKnockback",t=>{const n=this.world.frogs[t.id];n&&n.isLocal&&n.body&&(n.body.velocity.x+=t.velocity.x,n.body.velocity.y+=t.velocity.y,n.body.velocity.z+=t.velocity.z)}),this.socket.on("playerRespawned",t=>{const n=this.world.frogs[t.id];n&&(n.respawn(!0),n.health=t.health,n.body&&(n.body.position.set(t.x,t.y,t.z),n.body.velocity.set(0,0,0)),n.mesh.position.set(t.x,t.y,t.z))}),this.socket.on("tonguePulled",t=>{const n=this.world.localFrog,i=this.world.frogs[t.sourceId];if(n&&i&&n.body){const s=new P().subVectors(i.mesh.position,n.mesh.position).normalize(),o=t.pullForce||8;n.body.velocity.x+=s.x*o,n.body.velocity.y+=Math.max(0,s.y*o*.3),n.body.velocity.z+=s.z*o,this.world.showToast&&this.world.showToast(`${i.name||"Someone"} grabbed you!`)}}),this.socket.on("chatMessage",t=>{if(this.mutedPlayers.has(t.id))return;const n=this.world.frogs[t.id];n&&(n.showChat(t.text),this.addToChatHistory(n.name||`Frog ${t.id.substr(0,4)}`,t.text,n.color))}),window.addEventListener("chat-send",t=>{this.socket.emit("chatMessage",t.detail)}),this.socket.on("playerPunched",t=>{const n=this.world.frogs[t];n&&n.remotePunch()}),this.socket.on("playerDamaged",t=>{const n=this.world.frogs[t.targetId];n&&n.takeDamage(t.damage,t.knockback,!0,t.isCritical,t.attackerId)}),this.socket.on("playerDied",t=>{const n=typeof t=="object"?t.id:t,i=this.world.frogs[n];i&&i.die(!0)}),this.socket.on("playerRespawn",t=>{const n=this.world.frogs[t];n&&n.respawn(!0)}),this.socket.on("ballKicked",t=>{this.world.ball&&(this.world.ball.applySyncState(t),this.world.isBallAuthority=!1)}),this.socket.on("ballSync",t=>{this.world.ball&&!this.world.isBallAuthority&&this.world.ball.applySyncState(t)}),this.socket.on("ballAuthority",t=>{this.world.isBallAuthority=t,console.log("Ball authority:",t)}),this.ping=0,this.allPings={},this._pingStartTime=0,this.socket.on("pong_response",()=>{this.ping=Date.now()-this._pingStartTime,this.socket.emit("share_ping",this.ping)}),this.socket.on("all_pings",t=>{this.allPings=t}),setInterval(()=>{this._pingStartTime=Date.now(),this.socket.emit("ping_request")},2e3)}join(e,t){this.socket.emit("joinGame",{name:e,color:t})}addToChatHistory(e,t,n="#ffffff"){const i=document.getElementById("chat-history");if(!i)return;const s=document.createElement("div");s.className="chat-message";const o=document.createElement("span");o.className="chat-name",o.textContent=e+":",o.style.color=n;const a=document.createElement("span");for(a.textContent=t,s.appendChild(o),s.appendChild(a),i.appendChild(s),i.scrollTop=i.scrollHeight;i.children.length>100;)i.removeChild(i.firstChild)}update(e){}sendUpdate(e){var n,i,s;if(!e.body)return;const t=e.getSyncState();t&&(e.isRidingScooter&&(!this._lastNetDebug||Date.now()-this._lastNetDebug>1e3)&&(this._lastNetDebug=Date.now(),console.log("NETWORK SYNC (riding):",{x:(n=t.x)==null?void 0:n.toFixed(2),y:(i=t.y)==null?void 0:i.toFixed(2),z:(s=t.z)==null?void 0:s.toFixed(2)})),this.socket.emit("playerMove",t))}sendPunch(){this.socket.emit("playerPunch")}sendInput(e,t){this.socket.emit("playerInput",{forward:e.keys.forward,backward:e.keys.backward,left:e.keys.left,right:e.keys.right,jump:e.keys.jump,punch:e.keys.punch,cameraAngle:t})}sendHit(e,t,n,i=!1){this.socket.emit("playerHit",{targetId:e,damage:t,knockback:n,isCritical:i})}sendDeath(e=null){this.socket.emit("playerDied",{id:this.socket.id,killerId:e})}sendRespawn(){this.socket.emit("playerRespawn",this.socket.id)}sendBallKick(e){this.world.isBallAuthority=!0,this.socket.emit("ballKick",e)}sendBallUpdate(e){this.world.isBallAuthority&&this.socket.emit("ballUpdate",e)}showOfflineOverlay(){const e=document.getElementById("offline-overlay");e&&e.classList.add("visible")}toggleMute(e){return this.mutedPlayers.has(e)?(this.mutedPlayers.delete(e),console.log(`Unmuted player: ${e}`),!1):(this.mutedPlayers.add(e),console.log(`Muted player: ${e}`),!0)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class Zn{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Zn.nextNameID=Zn.nextNameID||0,this.$name.id=`lil-gui-name-${++Zn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class lE extends Zn{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Fc(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const cE={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Fc,toHexString:Fc},Wr={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},hE={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const n=Wr.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Wr.toHexString(i)}},uE={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Wr.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Wr.toHexString(i)}},dE=[cE,Wr,hE,uE];function fE(r){return dE.find(e=>e.match(r))}class pE extends Zn{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=fE(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Fc(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Cl extends Zn{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class mE extends Zn{constructor(e,t,n,i,s,o){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let o=!1,a,l,c,h,u;const d=5,f=v=>{a=v.clientX,l=c=v.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",x)},g=v=>{if(o){const y=v.clientX-a,_=v.clientY-l;Math.abs(_)>d?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&x()}if(!o){const y=v.clientY-c;u-=y*this._step*this._arrowKeyMultiplier(v),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=v.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",x)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,v,y,_,E)=>(p-v)/(y-v)*(E-_)+_,t=p=>{const v=this.$slider.getBoundingClientRect();let y=e(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(y)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(o){const v=p.touches[0].clientX-a,y=p.touches[0].clientY-l;Math.abs(v)>Math.abs(y)?c(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let x;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const y=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class gE extends Zn{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class xE extends Zn{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var vE=`.lil-gui {
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
}`;function yE(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Vd=!1;class _h{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Vd&&a&&(yE(vE),Vd=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new gE(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new mE(this,e,t,n,i,s);case"boolean":return new lE(this,e,t);case"string":return new xE(this,e,t);case"function":return new Cl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new pE(this,e,t,n)}addFolder(e){const t=new _h({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Cl||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Cl)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const cs=JSON.parse(JSON.stringify(b)),W=new dS,Wn=new fS,Me=new aE(W);W.network=Me;window.addEventListener("toggle-tongue-debug",()=>{b.tongueDebugEnabled=!b.tongueDebugEnabled,console.log(`🐸 Tongue debug: ${b.tongueDebugEnabled?"ON":"OFF"}`)});const Pt=new _h({title:"🐸 Dev Config"});Pt.hide();function ii(r,e){r.$name&&(r.$name.title=e,r.$name.style.cursor="help"),r.domElement&&(r.domElement.title=e);const t=r.domElement.querySelector("input");return t&&(t.title=e,t.addEventListener("dblclick",n=>{n.preventDefault(),n.stopPropagation();const i=r.property;cs[i]!==void 0&&(b[i]=cs[i],r.updateDisplay(),r._onChange&&r._onChange(b[i]),console.log(`Reset ${i} to default: ${cs[i]}`))})),r.$name&&r.$name.addEventListener("dblclick",n=>{const i=r.property;cs[i]!==void 0&&(b[i]=cs[i],r.updateDisplay(),r._onChange&&r._onChange(b[i]),console.log(`Reset ${i} to default: ${cs[i]}`))}),r}const Ra=Pt.addFolder("Physics");Ra.add(b,"gravity",-30,0);Ra.add(b,"friction",0,1);Ra.add(b,"restitution",0,1);const bh=Pt.addFolder("Movement");bh.add(b,"moveSpeed",100,5e3);bh.add(b,"jumpVelocity",0,20);bh.add(b,"rotationSpeed",1,30);const ys=Pt.addFolder("Animation");ys.add(b,"hopHeight",0,1);ys.add(b,"hopSpeed",1,30);ys.add(b,"talkSpeed",1,30);ys.add(b,"legKickForce",0,1).name("Kick Force");ys.add(b,"legKickDecay",.1,10).name("Kick Decay");ys.add(b,"walkLegSpeed",.1,2).name("Walk Speed Mult");ys.add(b,"walkLegHeight",0,1).name("Walk Height");Ra.add(b,"linearDamping",0,1).name("Sliding (Damping)").onChange(r=>{W.localFrog&&W.localFrog.body&&(W.localFrog.body.linearDamping=r)});const dp=Pt.addFolder("Environment");dp.add(b,"sunIntensity",0,5).onChange(r=>{W.scene.traverse(e=>{e.isDirectionalLight&&(e.intensity=r)})});dp.add(b,"ambientIntensity",0,2).onChange(r=>{W.scene.traverse(e=>{e.isAmbientLight&&(e.intensity=r)})});W.scene.traverse(r=>{r.isDirectionalLight&&(r.intensity=b.sunIntensity),r.isAmbientLight&&(r.intensity=b.ambientIntensity)});const ji=Pt.addFolder("Shader FX");ji.add(b,"useShader").name("Enable Post-FX");const La=ji.addFolder("Color Grading");La.add(b,"shaderSaturation",0,2).name("Saturation");La.add(b,"shaderBrightness",-.5,.5).name("Brightness");La.add(b,"shaderContrast",.5,2).name("Contrast");La.add(b,"shaderGamma",.5,2).name("Gamma");const Zr=ji.addFolder("Color Tint");Zr.add(b,"shaderTemperature",-1,1).name("Temperature");Zr.add(b,"shaderTintR",0,2).name("Red Tint");Zr.add(b,"shaderTintG",0,2).name("Green Tint");Zr.add(b,"shaderTintB",0,2).name("Blue Tint");Zr.close();const Jr=ji.addFolder("Vignette");Jr.add(b,"vignetteEnabled").name("Enabled");Jr.add(b,"vignetteIntensity",0,1).name("Intensity");Jr.add(b,"vignetteRadius",0,1).name("Radius");Jr.add(b,"vignetteSoftness",0,1).name("Softness");Jr.close();const Pa=ji.addFolder("Chromatic Aberration");Pa.add(b,"chromaticEnabled").name("Enabled");Pa.add(b,"chromaticIntensity",0,.02).name("Intensity");Pa.add(b,"chromaticRadial").name("Radial Mode");Pa.close();const Qr=ji.addFolder("Film Grain");Qr.add(b,"grainEnabled").name("Enabled");Qr.add(b,"grainIntensity",0,.3).name("Intensity");Qr.add(b,"grainSpeed",.1,5).name("Speed");Qr.add(b,"grainSize",.5,5).name("Size");Qr.close();const wh=ji.addFolder("Sharpen");wh.add(b,"sharpenEnabled").name("Enabled");wh.add(b,"sharpenIntensity",0,1).name("Intensity");wh.close();const eo=ji.addFolder("Bloom");eo.add(b,"bloomEnabled").name("Enabled");eo.add(b,"bloomIntensity",0,2).name("Intensity");eo.add(b,"bloomThreshold",0,1).name("Threshold");eo.add(b,"bloomRadius",0,1).name("Radius");eo.close();const Si=Pt.addFolder("Shadows");Si.add(b,"shadowEnabled").name("Enable Shadows").onChange(r=>{W.renderer.shadowMap.enabled=r,W.dirLight&&(W.dirLight.castShadow=r),W.scene.traverse(e=>{e.material&&(e.material.needsUpdate=!0)})});Si.add(b,"shadowMapSize",[512,1024,2048,4096]).name("Map Resolution").onChange(r=>{var e;W.dirLight&&(W.dirLight.shadow.mapSize.width=r,W.dirLight.shadow.mapSize.height=r,(e=W.dirLight.shadow.map)==null||e.dispose(),W.dirLight.shadow.map=null)});Si.add(b,"shadowType",["Basic","PCF","PCFSoft","VSM"]).name("Shadow Type").onChange(r=>{W.renderer.shadowMap.type=W.getShadowMapType(r),W.renderer.shadowMap.needsUpdate=!0,W.scene.traverse(e=>{e.material&&(e.material.needsUpdate=!0)})});Si.add(b,"shadowRadius",0,16).name("Blur Radius").onChange(r=>{W.dirLight&&(W.dirLight.shadow.radius=r)});Si.add(b,"shadowBlurSamples",1,32,1).name("Blur Samples").onChange(r=>{W.dirLight&&(W.dirLight.shadow.blurSamples=r)});Si.add(b,"shadowIntensity",0,1).name("Shadow Darkness").onChange(r=>{W.dirLight&&(W.dirLight.shadow.intensity=r)});Si.add(b,"shadowBias",-.01,.01).name("Depth Bias").onChange(r=>{W.dirLight&&(W.dirLight.shadow.bias=r)});Si.add(b,"shadowNormalBias",0,.1).name("Normal Bias").onChange(r=>{W.dirLight&&(W.dirLight.shadow.normalBias=r)});const Ia=Si.addFolder("Camera Bounds");Ia.add(b,"shadowCameraNear",.1,10).name("Near").onChange(r=>{W.dirLight&&(W.dirLight.shadow.camera.near=r,W.dirLight.shadow.camera.updateProjectionMatrix())});Ia.add(b,"shadowCameraFar",10,500).name("Far").onChange(r=>{W.dirLight&&(W.dirLight.shadow.camera.far=r,W.dirLight.shadow.camera.updateProjectionMatrix())});Ia.add(b,"shadowCameraSize",10,200).name("Frustum Size").onChange(r=>{W.dirLight&&(W.dirLight.shadow.camera.top=r,W.dirLight.shadow.camera.bottom=-r,W.dirLight.shadow.camera.left=-r,W.dirLight.shadow.camera.right=r,W.dirLight.shadow.camera.updateProjectionMatrix())});Ia.close();const $i=Pt.addFolder("Camera");$i.add(b,"cameraDistance",b.cameraMinDistance,b.cameraMaxDistance).name("Distance").onChange(r=>{W.cameraDistance=r});$i.add(b,"cameraMinDistance",1,20).name("Min Zoom");$i.add(b,"cameraMaxDistance",20,100).name("Max Zoom");$i.add(b,"cameraZoomSpeed",.5,5).name("Zoom Speed");$i.add(b,"cameraRotateSpeed",.001,.02).name("Rotate Speed");$i.add(b,"cameraLerp",.01,.3).name("Smoothness");$i.add({resetCamera:()=>{W.cameraOrbitAngle=0,W.cameraPitchAngle=.6,W.cameraDistance=b.cameraDistance}},"resetCamera").name("🔄 Reset View");$i.close();const to=Pt.addFolder("Spectator Camera 👁️");to.add(b,"spectatorDistance",20,200).name("Distance");to.add(b,"spectatorPitch",.1,1.5).name("Pitch");to.add(b,"spectatorSpeed",.01,.3).name("Orbit Speed");to.add(b,"spectatorHeight",-20,50).name("Look At Height");to.close();const si=Pt.addFolder("Jiggle Physics 🍑");si.add(b,"jiggleEnabled").name("Enable Jiggle");si.add(b,"jiggleIntensity",0,.5).name("Intensity");si.add(b,"jiggleSpeed",1,30).name("Speed");si.add(b,"jiggleDamping",1,15).name("Damping");si.add(b,"jiggleBounce",0,2).name("Bounce");si.add(b,"jiggleMovementResponse",0,3).name("Movement Response");si.add(b,"jiggleWalkWobble",0,.3).name("Walk Wobble (Z)");si.add(b,"jiggleWalkSpeed",1,25).name("Walk Speed");si.add(b,"jiggleReturnSpeed",1,20).name("Return Speed");si.close();const _s=Pt.addFolder("Punch/Kick 🦵");_s.add(b,"punchSwingDistance",.5,4).name("Swing Distance");_s.add(b,"punchSwingSpeed",5,30).name("Swing Speed");_s.add(b,"punchReturnSpeed",2,20).name("Return Speed");_s.add(b,"punchCooldown",.1,1).name("Cooldown");_s.add(b,"punchLegRotation",0,.5).name("Leg Rotation");_s.add(b,"punchHitRadius",1,5).name("Hit Radius");_s.close();const Ei=Pt.addFolder("VFX ✨");Ei.add(b,"vfxEnabled").name("Enable VFX");Ei.add(b,"vfxDustCount",1,15,1).name("Dust Count");Ei.add(b,"vfxDustSize",.05,.5).name("Dust Size");Ei.add(b,"vfxDustLife",.1,1.5).name("Dust Life");Ei.add(b,"vfxImpactCount",2,20,1).name("Impact Count");Ei.add(b,"vfxImpactSize",.1,.5).name("Impact Size");Ei.add(b,"vfxImpactLife",.1,1).name("Impact Life");Ei.add(b,"vfxWalkInterval",.05,.5).name("Walk Interval");Ei.close();const Nn=Pt.addFolder("Combat ⚔️");Nn.add(b,"maxHealth",50,200,10).name("Max Health");Nn.add(b,"punchDamageMin",1,20,1).name("Base Damage Min");Nn.add(b,"punchDamageMax",5,30,1).name("Base Damage Max");Nn.add(b,"criticalDamageMin",10,40,1).name("Crit Damage Min");Nn.add(b,"criticalDamageMax",15,50,1).name("Crit Damage Max");Nn.add(b,"criticalChance",0,.5).name("Crit Chance");Nn.add(b,"knockbackForce",5,30).name("Knockback Force");Nn.add(b,"knockbackUpward",0,15).name("Knockback Up");Nn.add(b,"respawnTime",1,10).name("Respawn Time");Nn.add(b,"deathFadeDuration",.5,3).name("Death Fade");Nn.close();const Yi=Pt.addFolder("Scooter 🛴");Yi.add(b,"scooterSpeed",5,40).name("Speed");Yi.add(b,"scooterTurnSpeed",1,10).name("Turn Speed");Yi.add(b,"scooterMaxTurn",.1,1).name("Max Turn Angle");Yi.add(b,"scooterWheelSpeed",5,30).name("Wheel Spin Speed");Yi.add(b,"scooterAcceleration",2,20).name("Acceleration");Yi.add(b,"scooterDeceleration",1,15).name("Deceleration");Yi.add(b,"scooterSpawnRadius",1,5).name("Spawn Radius");Yi.close();const xn=Pt.addFolder("Ball ⚽");ii(xn.add(b,"ballRadius",.2,2).name("Radius").onChange(r=>{W.ball&&W.ball.fallbackSphere&&(W.ball.fallbackSphere.geometry.dispose(),W.ball.fallbackSphere.geometry=new Wi(r,32,32))}),"Ball size. Low=small, High=big. Double-click to reset.");ii(xn.add(b,"ballMass",.1,2).name("Mass").onChange(r=>{W.ball&&W.ball.body&&(W.ball.body.mass=r,W.ball.body.updateMassProperties())}),"Ball weight. Low=flies far, High=hard to kick. Double-click to reset.");ii(xn.add(b,"ballLinearDamping",0,1).name("Linear Damping").onChange(r=>{W.ball&&W.ball.body&&(W.ball.body.linearDamping=r)}),"How fast ball slows. Low=rolls forever, High=stops quick. Double-click to reset.");ii(xn.add(b,"ballAngularDamping",0,1).name("Angular Damping").onChange(r=>{W.ball&&W.ball.body&&(W.ball.body.angularDamping=r)}),"How fast spin stops. Low=spins long, High=stops spinning. Double-click to reset.");ii(xn.add(b,"ballBounciness",0,1).name("Bounciness"),"Bounce amount. Low=dead ball, High=super bouncy. Double-click to reset.");ii(xn.add(b,"ballFriction",0,1).name("Friction"),"Ground grip. Low=slides, High=rolls properly. Double-click to reset.");ii(xn.add(b,"ballKickForce",5,30).name("Kick Force"),"Kick power. Low=weak kicks, High=powerful kicks. Double-click to reset.");ii(xn.add(b,"ballKickUpward",0,15).name("Kick Upward"),"Upward kick force. Low=ground shot, High=pop fly. Double-click to reset.");ii(xn.add(b,"ballSpawnHeight",5,50).name("Spawn Height"),"Ball spawn/reset height. Low=near ground, High=from sky. Double-click to reset.");ii(xn.add(b,"ballResetHeight",-50,0).name("Reset Height"),"Y position that triggers reset. Lower=can fall far. Double-click to reset.");xn.add({resetBall:()=>{W.ball&&(W.ball.body.position.set(5,b.ballSpawnHeight,0),W.ball.body.velocity.set(0,0,0),W.ball.body.angularVelocity.set(0,0,0))}},"resetBall").name("🔄 Reset Ball Position");xn.close();const Ki=Pt.addFolder("Scooter Rider Position");Ki.add(b,"scooterRiderY",-1,2,.05).name("Frog Y Offset");Ki.add(b,"scooterLegOffsetX",-1,1,.05).name("Leg X Offset");Ki.add(b,"scooterLegOffsetY",-1,1,.05).name("Leg Y Offset");Ki.add(b,"scooterLegOffsetZ",-1,1,.05).name("Leg Z Offset");Ki.add(b,"scooterLegRotationX",-Math.PI,Math.PI,.05).name("Leg Rotation X");Ki.add(b,"scooterLegRotationY",-Math.PI,Math.PI,.05).name("Leg Rotation Y");Ki.add(b,"scooterLegRotationZ",-Math.PI,Math.PI,.05).name("Leg Rotation Z");Ki.close();const fp={exportSettings:()=>{const r={};for(const e in b)b[e]!==cs[e]&&(r[e]=b[e]);Object.keys(r).length===0?(console.log("--- NO CHANGES ---"),alert("No settings have been changed from defaults.")):(console.log("--- CHANGED SETTINGS ---"),console.log(JSON.stringify(r,null,4)),alert(`${Object.keys(r).length} settings changed! Check Console (F12)`))},exportAll:()=>{console.log("--- FULL CONFIG ---"),console.log(JSON.stringify(b,null,4)),alert("Full config exported to Console! (Press F12)")}};Pt.add(fp,"exportSettings").name("💾 Log Changed Settings");Pt.add(fp,"exportAll").name("📋 Log All Settings");let Rl=!1;window.addEventListener("keydown",r=>{r.altKey&&(r.key==="v"||r.key==="V")&&(r.preventDefault(),Rl=!Rl,Rl?Pt.show():Pt.hide())});let Hd=0,Gd=0;function pp(r){requestAnimationFrame(pp);let e=(r-Hd)/1e3;if(Hd=r,e>.1&&(e=.1),W.step(e,Wn),Me.update(e),W.localFrog){const t=W.getMouseIntersection(Wn);W.localFrog.update(e,Wn,t,W.cameraOrbitAngle),Wn.consumeTongue()&&t&&W.localFrog.shootTongue(t,W),!Wn.tongueHeld&&W.localFrog.tongue.state==="attached"&&W.localFrog.releaseTongue(),Me.sendInput(Wn,W.cameraOrbitAngle),Me.sendUpdate(W.localFrog)}else{Gd+=e*b.spectatorSpeed,W.cameraOrbitAngle=Gd,W.cameraPitchAngle=b.spectatorPitch,W.cameraDistance=b.spectatorDistance;const t={x:0,y:b.spectatorHeight,z:0},n=t.x+Math.sin(W.cameraOrbitAngle)*W.cameraDistance,i=t.z+Math.cos(W.cameraOrbitAngle)*W.cameraDistance,s=t.y+Math.sin(W.cameraPitchAngle)*W.cameraDistance;W.camera.position.set(n,s,i),W.camera.lookAt(t.x,t.y,t.z)}Object.values(W.frogs).forEach(t=>{t.isLocal||t.updateRemote(e)})}pp(0);window.game={world:W,input:Wn,network:Me};document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("login-modal"),e=document.getElementById("tab-login"),t=document.getElementById("tab-register"),n=document.getElementById("auth-message"),i=document.getElementById("account-stats"),s=document.getElementById("player-name"),o=document.getElementById("player-password"),a=document.getElementById("password-toggle"),l=document.getElementById("player-color"),c=document.getElementById("btn-auth"),h=document.getElementById("btn-guest");if(!c||!r){console.warn("Login elements not found!");return}let u=!0,d=!1,f=null;window.game&&Object.defineProperty(window.game,"isAuthenticated",{get:()=>d});function g(E){u=E,e.classList.toggle("active",E),t.classList.toggle("active",!E),c.textContent=E?"LOGIN":"REGISTER",m()}e.addEventListener("click",()=>g(!0)),t.addEventListener("click",()=>g(!1)),a.addEventListener("click",()=>{o.type==="password"?(o.type="text",a.textContent="🙈"):(o.type="password",a.textContent="👁️")});function x(E,w=!0){n.textContent=E,n.className="auth-message "+(w?"error":"success")}function m(){n.className="auth-message",n.textContent=""}function p(E){document.getElementById("stat-flies").textContent=E.flies||0,document.getElementById("stat-kills").textContent=E.kills||0,document.getElementById("stat-deaths").textContent=E.deaths||0,i.style.display="flex",E.color&&(l.value=E.color)}async function v(){const E=s.value.trim(),w=o.value,R=l.value;if(!E||!w){x("Please enter username and password");return}c.disabled=!0,c.textContent=u?"Logging in...":"Registering...",m();const D=u?"login":"register",A=u?{username:E,password:w}:{username:E,password:w,color:R};Me.socket.emit(D,A,M=>{c.disabled=!1,c.textContent=u?"LOGIN":"REGISTER",M.success?(d=!0,f=M.user,window.game&&(window.game.currentUserId=M.user.id),x(u?"Welcome back!":"Account created!",!1),p(M.user),setTimeout(()=>y(!0),800)):x(M.error||"Authentication failed")})}function y(E=!1){const w=E?f.username:`Guest${Math.floor(Math.random()*9999)}`,R=l.value;document.body.classList.remove("spectator-mode"),r.style.display="none",Wn.isMobile&&Wn.showMobileControls(),W.cameraDistance=16,W.cameraPitchAngle=.6,Me.join(w,R),document.getElementById("canvas-container").focus()}function _(){d=!1,f=null,y(!1)}c.addEventListener("click",v),h.addEventListener("click",_),s.addEventListener("keydown",E=>{E.key==="Enter"&&(o.value?v():o.focus())}),o.addEventListener("keydown",E=>{E.key==="Enter"&&v()}),setInterval(()=>{d&&W.localFrog&&Me.socket.emit("saveProgress",{flies:W.localFrog.flies||0})},3e4),l.addEventListener("change",()=>{d&&Me.socket.emit("updateColor",l.value)})});const pa=document.getElementById("player-table"),Ll=document.getElementById("player-list");let Pl=!0;window.addEventListener("keydown",r=>{r.key==="Tab"&&(r.preventDefault(),mp())});pa&&pa.addEventListener("click",()=>{Wn.isMobile&&mp()});function mp(){Pl=!Pl,Pl?pa.classList.remove("hidden"):pa.classList.add("hidden")}function gp(r,e=!1){const t=e?"#ffffff":r||"#4CAF50",n=e?"#cccccc":_E(t,-30);return`<svg viewBox="0 0 108.9 74.65" style="width: 16px; height: 11px;">
        <rect fill="${t}" x="13.68" y="20.71" width="81.55" height="48"/>
        <rect fill="${n}" y="40.84" width="24.77" height="33.81"/>
        <rect fill="#fff" x="26.71" width="24.77" height="33.81"/>
        <rect fill="#fff" x="59.35" width="24.77" height="33.81"/>
        <rect fill="${n}" x="84.13" y="40.84" width="24.77" height="33.81"/>
        <rect fill="#000" x="35.29" y="13.1" width="7.61" height="7.61"/>
        <rect fill="#000" x="67.94" y="13.1" width="7.61" height="7.61"/>
    </svg>`}function _E(r,e){const t=parseInt(r.replace("#",""),16),n=Math.round(2.55*e),i=Math.max(0,Math.min(255,(t>>16)+n)),s=Math.max(0,Math.min(255,(t>>8&255)+n)),o=Math.max(0,Math.min(255,(t&255)+n));return"#"+(16777216+i*65536+s*256+o).toString(16).slice(1)}const Wd=document.querySelector("#player-table .table-header");Wd&&(Wd.innerHTML=gp("#ffffff",!0)+" Froggies");function no(){var e;if(!Ll)return;Ll.innerHTML="";const r=(e=Me.socket)==null?void 0:e.id;for(const t in W.frogs){const n=W.frogs[t],i=t===r,s=document.createElement("li");s.className="player-item";const o=document.createElement("span");o.className="player-icon",o.innerHTML=gp(n.color),s.appendChild(o);const a=document.createElement("span");a.className="player-level",a.textContent=`LV${n.level||1}`,a.style.cssText="font-size: 9px; background: linear-gradient(135deg, #ffd700, #ff9500); color: #000; padding: 1px 4px; border-radius: 4px; margin-right: 6px; font-weight: bold;",s.appendChild(a);const l=document.createElement("span");l.className="player-name",l.textContent=n.name||`Frog ${t.substr(0,4)}`,s.appendChild(l);const c=document.createElement("span");c.className="player-ping";const h=i?Me.ping||0:Me.allPings[t]||0;c.textContent=h>0?`${h}ms`:"—",c.style.color=h<=0?"#888":h<70?"#4CAF50":h<=100?"#FFA500":"#F44336",s.appendChild(c),Ll.appendChild(s)}}const bE=W.addRemoteFrog.bind(W);W.addRemoteFrog=function(r,e){const t=bE(r,e);return no(),t};const wE=W.addLocalFrog.bind(W);W.addLocalFrog=function(r,e,t){const n=wE(r,e,t);return no(),n};const ME=W.removeFrog.bind(W);W.removeFrog=function(r){const e=ME(r);return no(),e};setInterval(no,2e3);const ma=document.getElementById("death-screen");function SE(){ma&&ma.classList.add("active")}function EE(){ma&&ma.classList.remove("active")}window.showDeathScreen=SE;window.hideDeathScreen=EE;const Yn=document.getElementById("settings-overlay"),Xd=document.getElementById("settings-btn"),qd=document.getElementById("settings-close"),jd=document.getElementById("btn-respawn");document.querySelectorAll(".settings-option[data-quality]");let ga=!1;function TE(){Yn&&(ga=!0,Yn.style.display="flex",Yn.offsetHeight,Yn.classList.add("visible"))}function Xr(){Yn&&(ga=!1,Yn.classList.remove("visible"),setTimeout(()=>{ga||(Yn.style.display="none")},300))}function xp(){ga?Xr():TE()}Xd&&Xd.addEventListener("click",xp);qd&&qd.addEventListener("click",Xr);Yn&&Yn.addEventListener("click",r=>{r.target===Yn&&Xr()});window.addEventListener("keydown",r=>{if(r.key==="Escape"){const e=document.getElementById("chat-input");if(e&&document.activeElement===e)return;xp()}});jd&&jd.addEventListener("click",()=>{W.localFrog&&!W.localFrog.isDead?(W.localFrog.lastAttackerId=null,W.localFrog.takeDamage(999,null,!1,!1,null),Xr()):W.localFrog&&W.localFrog.isDead&&Xr()});const $d=document.getElementById("btn-logout");$d&&$d.addEventListener("click",()=>{Me.socket&&Me.socket.emit("logout"),window.location.reload()});const Pn=new Audio("/song/bgsong1.mp3");Pn.loop=!0;Pn.volume=.2;const Hn=document.getElementById("music-btn"),Yd=document.getElementById("volume-slider"),Kd=document.getElementById("volume-value"),Hs=document.getElementById("volume-icon");let ps=!1,sr=!1;function Mh(){ps||Pn.volume===0?(Hs.textContent="🔇",Hn.textContent="🔇",Hn.classList.add("muted")):Pn.volume<.3?(Hs.textContent="🔈",Hn.textContent="🎵",Hn.classList.remove("muted")):Pn.volume<.7?(Hs.textContent="🔉",Hn.textContent="🎵",Hn.classList.remove("muted")):(Hs.textContent="🔊",Hn.textContent="🎵",Hn.classList.remove("muted"))}function Sh(){sr?(ps=!ps,Pn.muted=ps):(Pn.play().catch(r=>console.warn("Music autoplay blocked:",r)),sr=!0,ps=!1),Mh()}Hn&&Hn.addEventListener("click",Sh);Yd&&Yd.addEventListener("input",r=>{const e=r.target.value/100;Pn.volume=e,Kd&&(Kd.textContent=`${r.target.value}%`),ps&&e>0&&(ps=!1,Pn.muted=!1),Mh(),!sr&&e>0&&(Pn.play().catch(t=>console.warn("Music autoplay blocked:",t)),sr=!0)});Hs&&Hs.addEventListener("click",()=>{Sh()});window.addEventListener("keydown",r=>{if(r.key==="m"||r.key==="M"){const e=document.getElementById("chat-input");if(e&&document.activeElement===e)return;Sh()}});const AE=Me.join.bind(Me);Me.join=function(r,e){const t=AE(r,e);return sr||(Pn.play().catch(n=>console.warn("Music autoplay blocked:",n)),sr=!0),t};Mh();const Zd=document.getElementById("profile-editor-btn"),Xn=document.getElementById("profile-editor-overlay"),Jd=document.getElementById("profile-editor-close"),Jn=document.getElementById("profile-color-picker"),rr=document.getElementById("color-hex-display"),Pr=document.getElementById("profile-bio-input"),Qd=document.getElementById("btn-save-profile"),ef=document.getElementById("friend-list-btn"),Tn=document.getElementById("friend-list-overlay"),tf=document.getElementById("friend-list-close"),Go=document.getElementById("tab-friends"),Wo=document.getElementById("tab-requests"),vi=document.getElementById("friends-content"),Bi=document.getElementById("requests-content"),nf=document.getElementById("request-count");Zd&&Xn&&Zd.addEventListener("click",()=>{if(window.game&&!window.game.isAuthenticated){W&&W.showToast&&W.showToast("Register an account to edit your profile!");return}Me&&Me.socket&&W.localFrog.userId?Me.socket.emit("getProfile",W.localFrog.userId,e=>{if(e){console.log("📝 Loaded fresh profile data for editor:",e),W.localFrog&&(W.localFrog.bio=e.bio||"",W.localFrog.badges=e.badges||[],W.localFrog.color=e.color||W.localFrog.color);const t=e.color||W.localFrog.color||"#4CAF50";Jn.value=t,rr.textContent=t,Pr&&(Pr.value=e.bio||"");const n=e.badges||[];ki=[...n],document.querySelectorAll(".badge-item:not(.locked)").forEach(i=>{const s=i.textContent;n.includes(s)?i.classList.add("selected"):i.classList.remove("selected")}),Xn.classList.add("active")}else console.warn("⚠️ Failed to fetch fresh profile for editor, using cache"),r()}):r();function r(){if(W.localFrog){const e=W.localFrog.color||"#4CAF50";Jn.value=e,rr.textContent=e,Pr&&(Pr.value=W.localFrog.bio||"");const t=W.localFrog.badges||[];ki=[...t],document.querySelectorAll(".badge-item:not(.locked)").forEach(n=>{const i=n.textContent;t.includes(i)?n.classList.add("selected"):n.classList.remove("selected")})}Xn.classList.add("active")}});Jd&&Xn&&(Jd.addEventListener("click",()=>{Xn.classList.remove("active")}),Xn.addEventListener("click",r=>{r.target===Xn&&Xn.classList.remove("active")}));Jn&&rr&&Jn.addEventListener("input",r=>{rr.textContent=r.target.value,W.localFrog&&W.localFrog.setColor&&W.localFrog.setColor(r.target.value)});Qd&&Qd.addEventListener("click",()=>{const r=Jn.value,e=Pr.value.trim();W.localFrog&&(W.localFrog.color=r,W.localFrog.bio=e,W.localFrog.badges=ki),Me&&Me.socket&&Me.socket.emit("updateProfile",{color:r,bio:e,badges:ki}),W&&W.showToast&&W.showToast("Profile saved!"),Xn&&Xn.classList.remove("active")});document.querySelectorAll(".profile-sidebar .profile-tab").forEach(r=>{r.addEventListener("click",()=>{document.querySelectorAll(".profile-sidebar .profile-tab").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".profile-tab-content").forEach(n=>n.classList.remove("active")),r.classList.add("active");const e=r.dataset.tab,t=document.getElementById(`tab-content-${e}`);t&&t.classList.add("active")})});const sf=4;let ki=[];document.querySelectorAll(".badge-item:not(.locked)").forEach(r=>{r.addEventListener("click",()=>{const e=r.textContent;r.classList.contains("selected")?(r.classList.remove("selected"),ki=ki.filter(n=>n!==e)):ki.length<sf?(r.classList.add("selected"),ki.push(e)):W&&W.showToast&&W.showToast(`Maximum ${sf} badges allowed!`)})});document.querySelectorAll(".color-preset").forEach(r=>{r.addEventListener("click",()=>{const e=r.dataset.color;Jn&&(Jn.value=e),rr&&(rr.textContent=e),W.localFrog&&W.localFrog.setColor&&W.localFrog.setColor(e)})});const rf=document.getElementById("btn-save-outfit");rf&&rf.addEventListener("click",()=>{const r=(Jn==null?void 0:Jn.value)||"#4CAF50";W.localFrog&&(W.localFrog.color=r),Me&&Me.socket&&Me.socket.emit("updateProfile",{color:r}),W&&W.showToast&&W.showToast("Outfit saved!")});ef&&Tn&&ef.addEventListener("click",()=>{if(window.game&&!window.game.isAuthenticated){W&&W.showToast&&W.showToast("Register an account to use friend features!");return}Tn.classList.add("active"),Me&&Me.socket&&(Me.socket.emit("getFriends"),Me.socket.emit("getFriendRequests"))});tf&&Tn&&(tf.addEventListener("click",()=>{Tn.classList.remove("active")}),Tn.addEventListener("click",r=>{r.target===Tn&&Tn.classList.remove("active")}));Go&&Wo&&vi&&Bi&&(Go.addEventListener("click",()=>{Go.classList.add("active"),Wo.classList.remove("active"),vi.style.display="flex",Bi.style.display="none"}),Wo.addEventListener("click",()=>{Wo.classList.add("active"),Go.classList.remove("active"),Bi.style.display="flex",vi.style.display="none"}));if(Me&&Me.socket){let r=function(e,t,n){const i=document.getElementById("level-badge"),s=document.getElementById("xp-fill");i&&(i.textContent=`Lv.${e}`),s&&(s.style.width=`${t/n*100}%`)};var UE=r;Me.socket.on("friendList",e=>{if(vi){if(e.length===0){vi.innerHTML=`
                <div class="empty-state">
                    <div class="empty-state-icon">🐸</div>
                    <div>No friends yet. Click on players to add them!</div>
                </div>
            `;return}vi.innerHTML=e.map(t=>`
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
        `).join(""),vi.querySelectorAll(".dm-btn").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation(),Tn&&Tn.classList.remove("active"),window.openDMChat(t.dataset.id,t.dataset.name)})}),vi.querySelectorAll(".remove-btn").forEach(t=>{t.addEventListener("click",n=>{n.stopPropagation();const i=t.dataset.name;confirm(`Remove ${i} from friends?`)&&(Me.socket.emit("removeFriend",t.dataset.id),Me.socket.emit("getFriendList"))})}),vi.querySelectorAll(".friend-item").forEach(t=>{t.addEventListener("click",()=>{Tn&&Tn.classList.remove("active");const n=t.dataset.friendId;Me.socket.emit("getProfile",n,i=>{i&&W&&W.openProfile&&W.openProfile({id:t.dataset.friendId,userId:n,name:i.username||t.dataset.friendName,color:i.color||t.dataset.friendColor,level:i.level||1,bio:i.bio||"",badges:i.badges||[],isFriend:!0})})})})}}),Me.socket.on("friendRequests",e=>{const t=document.getElementById("friend-notification-dot");if(t&&(t.style.display=e.length>0?"block":"none"),nf&&(nf.textContent=e.length>0?`(${e.length})`:""),!!Bi){if(e.length===0){Bi.innerHTML=`
                <div class="empty-state">
                    <div class="empty-state-icon">📭</div>
                    <div>No pending friend requests</div>
                </div>
            `;return}Bi.innerHTML=e.map(n=>`
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
        `).join(""),Bi.querySelectorAll(".accept").forEach(n=>{n.addEventListener("click",i=>{i.stopPropagation(),Me.socket.emit("acceptFriendRequest",n.dataset.id)})}),Bi.querySelectorAll(".decline").forEach(n=>{n.addEventListener("click",()=>{Me.socket.emit("declineFriend",n.dataset.id)})})}}),Me.socket.on("friendRequestAccepted",e=>{var t;W&&W.showToast&&W.showToast(`You and ${((t=e.by)==null?void 0:t.username)||"someone"} are friends now! 🎉`),Me.socket.emit("getFriendList")}),Me.socket.on("unreadDMs",e=>{e.total,of()}),Me.socket.on("dmReceived",e=>{const t=document.getElementById("dm-chat-panel"),n=t.dataset.friendId;t.classList.contains("active")&&n==e.sender_id?(Uc(e,!1),Me.socket.emit("markDMRead",e.sender_id)):(window.openDMChat(e.sender_id,e.sender_name),of())}),Me.socket.on("xpGained",e=>{var a;const t=document.createElement("div");t.className="xp-toast",t.textContent=`+${e.amount} XP`,document.body.appendChild(t),setTimeout(()=>t.remove(),2e3),W.localFrog&&(W.localFrog.level=e.level),r(e.level,e.xp,e.xpToNext);const n=document.getElementById("stat-level"),i=document.getElementById("stat-xp"),s=document.getElementById("stat-kills"),o=document.getElementById("stat-kd");if(n&&(n.textContent=e.level),i&&(i.textContent=e.xp),s){const l=parseInt(s.textContent||"0")+1;s.textContent=l;const c=parseInt(((a=document.getElementById("stat-deaths"))==null?void 0:a.textContent)||"0");o&&(o.textContent=c>0?(l/c).toFixed(2):l.toFixed(2))}no()})}function of(){const r=document.getElementById("friend-notification-dot"),e=document.getElementById("request-count"),t=e?parseInt(e.textContent.replace(/[()]/g,"")||"0"):0;r&&(r.style.display=t>0||window.totalUnreadDMs>0?"block":"none")}window.totalUnreadDMs=0;const Hi=document.getElementById("dm-chat-panel"),af=document.getElementById("dm-close"),fs=document.getElementById("dm-input"),lf=document.getElementById("dm-send"),qn=document.getElementById("dm-messages"),cf=document.getElementById("dm-friend-name");window.openDMChat=function(r,e){Hi&&(Hi.dataset.friendId=r,cf&&(cf.textContent=e),Hi.classList.add("active"),qn&&(qn.innerHTML='<div class="empty-state">Loading messages...</div>'),Me&&Me.socket&&Me.socket.emit("getMessages",r))};af&&Hi&&af.addEventListener("click",()=>{Hi.classList.remove("active")});function vp(){const r=fs==null?void 0:fs.value.trim(),e=Hi==null?void 0:Hi.dataset.friendId;!r||!e||(Me&&Me.socket&&Me.socket.emit("sendDM",{friendId:parseInt(e),content:r}),fs&&(fs.value=""))}lf&&lf.addEventListener("click",vp);fs&&fs.addEventListener("keydown",r=>{r.key==="Enter"&&vp()});function Uc(r,e){if(!qn)return;const t=qn.querySelector(".empty-state");t&&t.remove();const n=document.createElement("div");n.className=`dm-message ${e?"sent":"received"}`,n.textContent=r.content,qn.appendChild(n),qn.scrollTop=qn.scrollHeight}Me&&Me.socket&&(Me.socket.on("dmSent",r=>{Uc(r,!0)}),Me.socket.on("messageHistory",r=>{var t;if(!qn)return;if(qn.innerHTML="",r.length===0){qn.innerHTML='<div class="empty-state">No messages yet. Say hi!</div>';return}const e=(t=window.game)==null?void 0:t.currentUserId;r.forEach(n=>{Uc(n,n.sender_id===e)})}),Me.socket.emit("getUnreadDMs"));const Il=document.getElementById("emote-btn"),Ni=document.getElementById("emote-wheel");Il&&Ni&&(Il.addEventListener("click",()=>{Ni.classList.toggle("active")}),document.addEventListener("click",r=>{!Ni.contains(r.target)&&r.target!==Il&&Ni.classList.remove("active")}),Ni.querySelectorAll(".emote-option").forEach(r=>{r.addEventListener("click",()=>{r.dataset.emote;const e=r.textContent;Me&&Me.socket&&Me.socket.emit("chatMessage",e),Ni.classList.remove("active")})}));window.addEventListener("keydown",r=>{if(r.key==="t"||r.key==="T"){if(document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA"))return;Ni&&Ni.classList.toggle("active")}});
