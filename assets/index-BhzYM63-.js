(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`songhu`,year:1937,name:`淞沪会战`,location:`上海`,battlefield:`八字桥防线`,date:`1937年8月13日`,objective:`逐次守卫八字桥街区`,mode:`攻防 · 日军进攻`,rule:`assault`,attacker:`enemy`,theme:`delta`,weather:`阴雨`,tickets:120,allies:5,enemies:12,flags:[{id:`A`,x:-2,z:-30,radius:5},{id:`B`,x:2,z:2,radius:5},{id:`C`,x:-1,z:32,radius:5}]},{id:`nanjing`,year:1937,name:`南京保卫战`,location:`南京`,battlefield:`中华门阵地`,date:`1937年12月9日`,objective:`逐次守住中华门外防线`,mode:`攻防 · 孤城坚守`,rule:`assault`,attacker:`enemy`,theme:`ruin`,weather:`阴霾`,tickets:110,allies:6,enemies:14,flags:[{id:`A`,x:2,z:-38,radius:5},{id:`B`,x:-2,z:-14,radius:5},{id:`C`,x:2,z:12,radius:5},{id:`D`,x:-1,z:38,radius:5}]},{id:`taierzhuang`,year:1938,name:`台儿庄战役`,location:`台儿庄`,battlefield:`运河街垒`,date:`1938年3月24日`,objective:`沿运河逐次夺回城镇据点`,mode:`攻防 · 国军反攻`,rule:`assault`,attacker:`ally`,theme:`canal`,weather:`多云`,tickets:140,allies:7,enemies:13,flags:[{id:`A`,x:2,z:40,radius:5},{id:`B`,x:-2,z:14,radius:5},{id:`C`,x:2,z:-13,radius:5},{id:`D`,x:-2,z:-39,radius:5}]},{id:`wuhan`,year:1938,name:`武汉会战`,location:`武汉`,battlefield:`长江北岸`,date:`1938年6月11日`,objective:`控制长江沿岸五处要点`,mode:`征服 · 五点争夺`,rule:`conquest`,theme:`green`,weather:`阵雨`,tickets:160,allies:8,enemies:15,flags:[{id:`A`,x:-14,z:-44,radius:6},{id:`B`,x:12,z:-23,radius:6},{id:`C`,x:0,z:0,radius:6.5},{id:`D`,x:-12,z:23,radius:6},{id:`E`,x:14,z:44,radius:6}]},{id:`baituan`,year:1940,name:`百团大战`,location:`华北`,battlefield:`正太铁路`,date:`1940年8月20日`,objective:`摧毁铁路沿线三座日军补给库`,mode:`破袭 · 铁路交通线`,rule:`demolition`,attacker:`ally`,theme:`loess`,weather:`晴朗`,tickets:130,allies:8,enemies:13,flags:[{id:`A`,x:13,z:-34,radius:6},{id:`B`,x:-14,z:0,radius:6},{id:`C`,x:12,z:35,radius:6}]},{id:`changsha`,year:1941,name:`长沙会战`,location:`长沙`,battlefield:`捞刀河防线`,date:`1941年9月17日`,objective:`逐次守卫湘北纵深阵地`,mode:`攻防 · 焦土御敌`,rule:`assault`,attacker:`enemy`,theme:`green`,weather:`雷雨`,tickets:145,allies:7,enemies:15,flags:[{id:`A`,x:-13,z:-40,radius:6},{id:`B`,x:11,z:-14,radius:6},{id:`C`,x:-12,z:14,radius:6},{id:`D`,x:13,z:40,radius:6}]},{id:`burma`,year:1942,name:`中国远征军`,location:`滇缅`,battlefield:`滇缅公路`,date:`1942年3月8日`,objective:`控制密林中的运输生命线`,mode:`征服 · 丛林争夺`,rule:`conquest`,theme:`jungle`,weather:`暴雨`,tickets:150,allies:7,enemies:14,flags:[{id:`A`,x:15,z:-38,radius:6},{id:`B`,x:-14,z:-12,radius:6},{id:`C`,x:13,z:15,radius:6},{id:`D`,x:-15,z:40,radius:6}]},{id:`changde`,year:1943,name:`常德会战`,location:`常德`,battlefield:`常德城防`,date:`1943年11月18日`,objective:`逐次固守孤城核心阵地`,mode:`攻防 · 孤城死守`,rule:`assault`,attacker:`enemy`,theme:`ruin`,weather:`阴霾`,tickets:105,allies:6,enemies:16,flags:[{id:`A`,x:-2,z:-40,radius:5},{id:`B`,x:2,z:-14,radius:5},{id:`C`,x:-2,z:14,radius:5},{id:`D`,x:2,z:40,radius:5}]},{id:`xiangxi`,year:1945,name:`湘西会战`,location:`雪峰山`,battlefield:`芷江防线`,date:`1945年4月9日`,objective:`逐次夺取山地据点发动反攻`,mode:`攻防 · 国军反攻`,rule:`assault`,attacker:`ally`,theme:`alpine`,weather:`山雨`,tickets:170,allies:9,enemies:14,flags:[{id:`A`,x:-14,z:41,radius:6},{id:`B`,x:13,z:15,radius:6},{id:`C`,x:-12,z:-14,radius:6},{id:`D`,x:14,z:-40,radius:6}]}],t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,D=1027,O=1028,ee=1029,k=1030,te=1031,ne=1033,A=33776,re=33777,ie=33778,j=33779,ae=35840,oe=35841,se=35842,ce=35843,le=36196,ue=37492,de=37496,M=37488,fe=37489,pe=37490,me=37491,he=37808,ge=37809,_e=37810,ve=37811,ye=37812,be=37813,xe=37814,Se=37815,Ce=37816,we=37817,Te=37818,Ee=37819,De=37820,Oe=37821,ke=36492,Ae=36494,je=36495,Me=36283,Ne=36284,Pe=36285,Fe=36286,N=2300,Ie=2301,P=2302,Le=2303,F=2400,Re=2401,I=2402,L=3200,ze=`srgb`,Be=`srgb-linear`,Ve=`linear`,He=`srgb`,Ue=7680,We=35044,Ge=2e3;function Ke(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function qe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Je(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ye(){let e=Je(`canvas`);return e.style.display=`block`,e}var Xe={};function Ze(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Qe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function $e(...e){let t=e.join(` `);t in Xe||(Xe[t]=!0,R(...e))}function et(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var tt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},nt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},rt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),it=1234567,at=Math.PI/180,ot=180/Math.PI;function st(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(rt[e&255]+rt[e>>8&255]+rt[e>>16&255]+rt[e>>24&255]+`-`+rt[t&255]+rt[t>>8&255]+`-`+rt[t>>16&15|64]+rt[t>>24&255]+`-`+rt[n&63|128]+rt[n>>8&255]+`-`+rt[n>>16&255]+rt[n>>24&255]+rt[r&255]+rt[r>>8&255]+rt[r>>16&255]+rt[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function ct(e,t){return(e%t+t)%t}function lt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ut(e,t,n){return e===t?0:(n-e)/(t-e)}function dt(e,t,n){return(1-n)*e+n*t}function ft(e,t,n,r){return dt(e,t,1-Math.exp(-n*r))}function pt(e,t=1){return t-Math.abs(ct(e,t*2)-t)}function mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function gt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function _t(e,t){return e+Math.random()*(t-e)}function vt(e){return e*(.5-Math.random())}function yt(e){e!==void 0&&(it=e);let t=it+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bt(e){return e*at}function xt(e){return e*ot}function St(e){return(e&e-1)==0&&e!==0}function Ct(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function wt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Tt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Et(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var V={DEG2RAD:at,RAD2DEG:ot,generateUUID:st,clamp:B,euclideanModulo:ct,mapLinear:lt,inverseLerp:ut,lerp:dt,damp:ft,pingpong:pt,smoothstep:mt,smootherstep:ht,randInt:gt,randFloat:_t,randFloatSpread:vt,seededRandom:yt,degToRad:bt,radToDeg:xt,isPowerOfTwo:St,ceilPowerOfTwo:Ct,floorPowerOfTwo:wt,setQuaternionFromProperEuler:Tt,normalize:Dt,denormalize:Et},H=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(At.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(At.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kt.copy(this).projectOnVector(e),this.sub(kt)}reflect(e){return this.sub(kt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kt=new U,At=new Ot,W=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return $e(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(jt.makeScale(e,t)),this}rotate(e){return $e(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(jt.makeRotation(-e)),this}translate(e,t){return $e(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(jt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jt=new W,Mt=new W().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nt=new W().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pt(){let e={enabled:!0,workingColorSpace:Be,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=It(e.r),e.g=It(e.g),e.b=It(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ve:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return $e(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return $e(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Be]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:Mt,fromXYZ:Nt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:r,transfer:He,toXYZ:Mt,fromXYZ:Nt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}var G=Pt();function Ft(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function It(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Lt,Rt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lt===void 0&&(Lt=Je(`canvas`)),Lt.width=e.width,Lt.height=e.height;let t=Lt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Lt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Je(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ft(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ft(t[e]/255)*255):t[e]=Ft(t[e]);return{data:t,width:e.width,height:e.height}}else return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},zt=0,Bt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=st(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Vt(r[t].image)):e.push(Vt(r[t]))}else e=Vt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Vt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Rt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Ht=0,Ut=new U,Wt=class e extends nt{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=st(),this.name=``,this.source=new Bt(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new W,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ut).x}get height(){return this.source.getSize(Ut).y}get depth(){return this.source.getSize(Ut).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){R(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=300,Wt.DEFAULT_ANISOTROPY=1;var Gt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kt=class extends nt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let r=new Wt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Bt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},qt=class extends Kt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jt=class extends Wt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Yt=class extends Wt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Zt.setFromMatrixColumn(e,0).length(),i=1/Zt.setFromMatrixColumn(e,1).length(),a=1/Zt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($t,e,en)}lookAt(e,t,n){let r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),tn.crossVectors(n,rn),tn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),tn.crossVectors(n,rn)),tn.normalize(),nn.crossVectors(rn,tn),r[0]=tn.x,r[4]=nn.x,r[8]=rn.x,r[1]=tn.y,r[5]=nn.y,r[9]=rn.y,r[2]=tn.z,r[6]=nn.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],A=r[3],re=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*ee+c*A,i[4]=a*S+o*E+s*k+c*re,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*O+s*ne+c*j,i[1]=l*x+u*T+d*ee+f*A,i[5]=l*S+u*E+d*k+f*re,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*O+d*ne+f*j,i[2]=p*x+m*T+h*ee+g*A,i[6]=p*S+m*E+h*k+g*re,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*O+h*ne+g*j,i[3]=_*x+v*T+y*ee+b*A,i[7]=_*S+v*E+y*k+b*re,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*O+y*ne+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Zt.set(r[0],r[1],r[2]).length(),o=Zt.set(r[4],r[5],r[6]).length(),s=Zt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Qt.copy(this);let c=1/a,l=1/o,u=1/s;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=l,Qt.elements[5]*=l,Qt.elements[6]*=l,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zt=new U,Qt=new Xt,$t=new U(0,0,0),en=new U(1,1,1),tn=new U,nn=new U,rn=new U,an=new Xt,on=new Ot,sn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return an.makeRotationFromQuaternion(e),this.setFromRotationMatrix(an,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return on.setFromEuler(this),this.setFromQuaternion(on,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER=`XYZ`;var cn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},ln=0,un=new U,dn=new Ot,fn=new Xt,pn=new U,mn=new U,hn=new U,gn=new Ot,_n=new U(1,0,0),vn=new U(0,1,0),yn=new U(0,0,1),bn={type:`added`},xn={type:`removed`},Sn={type:`childadded`,child:null},Cn={type:`childremoved`,child:null},wn=class e extends nt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=st(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new sn,r=new Ot,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new W}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.multiply(dn),this}rotateOnWorldAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.premultiply(dn),this}rotateX(e){return this.rotateOnAxis(_n,e)}rotateY(e){return this.rotateOnAxis(vn,e)}rotateZ(e){return this.rotateOnAxis(yn,e)}translateOnAxis(e,t){return un.copy(e).applyQuaternion(this.quaternion),this.position.add(un.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_n,e)}translateY(e){return this.translateOnAxis(vn,e)}translateZ(e){return this.translateOnAxis(yn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pn.copy(e):pn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(mn,pn,this.up):fn.lookAt(pn,mn,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),dn.setFromRotationMatrix(fn),this.quaternion.premultiply(dn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,e,hn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,gn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};wn.DEFAULT_UP=new U(0,1,0),wn.DEFAULT_MATRIX_AUTO_UPDATE=!0,wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var K=class extends wn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Tn={type:`move`},En=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new K,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new K,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new K,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new K;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},kn={h:0,s:0,l:0};function An(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,G.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=G.workingColorSpace){return this.r=e,this.g=t,this.b=n,G.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=G.workingColorSpace){if(e=ct(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=An(i,r,e+1/3),this.g=An(i,r,e),this.b=An(i,r,e-1/3)}return G.colorSpaceToWorking(this,r),this}setStyle(e,t=ze){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let n=Dn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}copyLinearToSRGB(e){return this.r=It(e.r),this.g=It(e.g),this.b=It(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return G.workingToColorSpace(jn.copy(this),e),Math.round(B(jn.r*255,0,255))*65536+Math.round(B(jn.g*255,0,255))*256+Math.round(B(jn.b*255,0,255))}getHexString(e=ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=G.workingColorSpace){G.workingToColorSpace(jn.copy(this),t);let n=jn.r,r=jn.g,i=jn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=G.workingColorSpace){return G.workingToColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=ze){G.workingToColorSpace(jn.copy(this),e);let t=jn.r,n=jn.g,r=jn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(kn);let n=dt(On.h,kn.h,t),r=dt(On.s,kn.s,t),i=dt(On.l,kn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new q;q.NAMES=Dn;var Mn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new q(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Nn=class extends wn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new U,Fn=new U,In=new U,Ln=new U,Rn=new U,zn=new U,Bn=new U,Vn=new U,Hn=new U,Un=new U,Wn=new Gt,Gn=new Gt,Kn=new Gt,qn=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Pn.subVectors(r,t),Fn.subVectors(n,t),In.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(Fn),s=Pn.dot(In),c=Fn.dot(Fn),l=Fn.dot(In),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln)!==null&&Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ln)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ln.x),s.addScaledVector(a,Ln.y),s.addScaledVector(o,Ln.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Wn.setScalar(0),Gn.setScalar(0),Kn.setScalar(0),Wn.fromBufferAttribute(e,t),Gn.fromBufferAttribute(e,n),Kn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wn,i.x),a.addScaledVector(Gn,i.y),a.addScaledVector(Kn,i.z),a}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),Fn.subVectors(e,t),Pn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Rn.subVectors(r,n),zn.subVectors(i,n),Vn.subVectors(e,n);let s=Rn.dot(Vn),c=zn.dot(Vn);if(s<=0&&c<=0)return t.copy(n);Hn.subVectors(e,r);let l=Rn.dot(Hn),u=zn.dot(Hn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Rn,a);Un.subVectors(e,i);let f=Rn.dot(Un),p=zn.dot(Un);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(zn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Bn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Bn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Rn,a).addScaledVector(zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Xn):Xn.fromBufferAttribute(r,t),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Zn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Zn.copy(e.boundingBox)),Zn.applyMatrix4(e.matrixWorld),this.union(Zn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ar.subVectors(this.max,ir),Qn.subVectors(e.a,ir),$n.subVectors(e.b,ir),er.subVectors(e.c,ir),tr.subVectors($n,Qn),nr.subVectors(er,$n),rr.subVectors(Qn,er);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-rr.z,rr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,rr.z,0,-rr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-rr.y,rr.x,0];return!cr(t,Qn,$n,er,ar)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,Qn,$n,er,ar))?!1:(or.crossVectors(tr,nr),t=[or.x,or.y,or.z],cr(t,Qn,$n,er,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yn=[new U,new U,new U,new U,new U,new U,new U,new U],Xn=new U,Zn=new Jn,Qn=new U,$n=new U,er=new U,tr=new U,nr=new U,rr=new U,ir=new U,ar=new U,or=new U,sr=new U;function cr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){sr.fromArray(e,a);let o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),s=t.dot(sr),c=n.dot(sr),l=r.dot(sr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var lr=new U,ur=new H,dr=0,fr=class extends nt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=We,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix4(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyNormalMatrix(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.transformDirection(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Et(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Et(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Et(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Et(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Et(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},pr=class extends fr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},mr=class extends fr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},J=class extends fr{constructor(e,t,n){super(new Float32Array(e),t,n)}},hr=new Jn,gr=new U,_r=new U,vr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?hr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);let t=gr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(gr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(_r)),this.expandByPoint(gr.copy(e.center).sub(_r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yr=0,br=new Xt,xr=new wn,Sr=new U,Cr=new Jn,wr=new Jn,Tr=new U,Er=class e extends nt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yr++}),this.uuid=st(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ke(e)?mr:pr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new W().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return br.makeRotationFromQuaternion(e),this.applyMatrix4(br),this}rotateX(e){return br.makeRotationX(e),this.applyMatrix4(br),this}rotateY(e){return br.makeRotationY(e),this.applyMatrix4(br),this}rotateZ(e){return br.makeRotationZ(e),this.applyMatrix4(br),this}translate(e,t,n){return br.makeTranslation(e,t,n),this.applyMatrix4(br),this}scale(e,t,n){return br.makeScale(e,t,n),this.applyMatrix4(br),this}lookAt(e){return xr.lookAt(e),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new J(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Cr.setFromBufferAttribute(n),this.morphTargetsRelative?(Tr.addVectors(this.boundingBox.min,Cr.min),this.boundingBox.expandByPoint(Tr),Tr.addVectors(this.boundingBox.max,Cr.max),this.boundingBox.expandByPoint(Tr)):(this.boundingBox.expandByPoint(Cr.min),this.boundingBox.expandByPoint(Cr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Cr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Tr.addVectors(Cr.min,wr.min),Cr.expandByPoint(Tr),Tr.addVectors(Cr.max,wr.max),Cr.expandByPoint(Tr)):(Cr.expandByPoint(wr.min),Cr.expandByPoint(wr.max))}Cr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Tr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Tr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Tr.fromBufferAttribute(a,t),o&&(Sr.fromBufferAttribute(e,t),Tr.add(Sr)),r=Math.max(r,n.distanceToSquared(Tr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new fr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let c=new U,l=new U,u=new U,d=new H,f=new H,p=new H,m=new U,h=new U;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new U,y=new U,b=new U,x=new U;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new fr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tr.fromBufferAttribute(e,t),Tr.normalize(),e.setXYZ(t,Tr.x,Tr.y,Tr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new fr(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Dr=0,Or=class extends nt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dr++}),this.uuid=st(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){R(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new q().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new H().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},kr=new U,Ar=new U,jr=new U,Mr=new U,Nr=new U,Pr=new U,Fr=new U,Ir=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kr.copy(this.origin).addScaledVector(this.direction,t),kr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ar.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(Ar);let i=e.distanceTo(t)*.5,a=-this.direction.dot(jr),o=Mr.dot(this.direction),s=-Mr.dot(jr),c=Mr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ar).addScaledVector(jr,d),f}intersectSphere(e,t){kr.subVectors(e.center,this.origin);let n=kr.dot(this.direction),r=kr.dot(kr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,kr)!==null}intersectTriangle(e,t,n,r,i){Nr.subVectors(t,e),Pr.subVectors(n,e),Fr.crossVectors(Nr,Pr);let a=this.direction.dot(Fr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mr.subVectors(this.origin,e);let s=o*this.direction.dot(Pr.crossVectors(Mr,Pr));if(s<0)return null;let c=o*this.direction.dot(Nr.cross(Mr));if(c<0||s+c>a)return null;let l=-o*Mr.dot(Fr);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lr=class extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rr=new Xt,zr=new Ir,Br=new vr,Vr=new U,Hr=new U,Ur=new U,Wr=new U,Gr=new U,Kr=new U,qr=new U,Jr=new U,Y=class extends wn{constructor(e=new Er,t=new Lr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Kr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Gr.fromBufferAttribute(s,e),a?Kr.addScaledVector(Gr,r):Kr.addScaledVector(Gr.sub(t),r))}t.add(Kr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(i),zr.copy(e.ray).recast(e.near),!(Br.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Br,Vr)===null||zr.origin.distanceToSquared(Vr)>(e.far-e.near)**2))&&(Rr.copy(i).invert(),zr.copy(e.ray).applyMatrix4(Rr),!(n.boundingBox!==null&&zr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Xr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Xr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Xr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Xr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function Yr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Jr.copy(s),Jr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Jr);return l<n.near||l>n.far?null:{distance:l,point:Jr.clone(),object:e}}function Xr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Hr),e.getVertexPosition(c,Ur),e.getVertexPosition(l,Wr);let u=Yr(e,t,n,r,Hr,Ur,Wr,qr);if(u){let e=new U;qn.getBarycoord(qr,Hr,Ur,Wr,e),i&&(u.uv=qn.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=qn.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=qn.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};qn.getNormal(Hr,Ur,Wr,t.normal),u.face=t,u.barycoord=e}return u}var Zr=class extends Wt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qr=new U,$r=new U,ei=new W,ti=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Qr.subVectors(n,t).cross($r.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Qr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ei.getNormalMatrix(e),r=this.coplanarPoint(Qr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ni=new vr,ri=new H(.5,.5),ii=new U,ai=class{constructor(e=new ti,t=new ti,n=new ti,r=new ti,i=new ti,a=new ti){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ge,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476+ri.distanceTo(e.center),ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ii.x=r.normal.x>0?e.max.x:e.min.x,ii.y=r.normal.y>0?e.max.y:e.min.y,ii.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ii)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},oi=class extends Or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new q(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},si=new U,ci=new U,li=new Xt,ui=new Ir,di=new vr,fi=new U,pi=new U,mi=class extends wn{constructor(e=new Er,t=new oi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)si.fromBufferAttribute(t,e-1),ci.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=si.distanceTo(ci);e.setAttribute(`lineDistance`,new J(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),di.copy(n.boundingSphere),di.applyMatrix4(r),di.radius+=i,e.ray.intersectsSphere(di)===!1)return;li.copy(r).invert(),ui.copy(e.ray).applyMatrix4(li);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=hi(this,e,ui,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=hi(this,e,ui,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=hi(this,e,ui,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=hi(this,e,ui,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function hi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(si.fromBufferAttribute(s,i),ci.fromBufferAttribute(s,a),n.distanceSqToSegment(si,ci,fi,pi)>r)return;fi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(fi);if(!(c<t.near||c>t.far))return{distance:c,point:pi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var gi=new U,_i=new U,vi=class extends mi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)gi.fromBufferAttribute(t,e),_i.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+gi.distanceTo(_i);e.setAttribute(`lineDistance`,new J(n,1))}else R(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},yi=class extends Or{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bi=new Xt,xi=new Ir,Si=new vr,Ci=new U,wi=class extends wn{constructor(e=new Er,t=new yi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Si.copy(n.boundingSphere),Si.applyMatrix4(r),Si.radius+=i,e.ray.intersectsSphere(Si)===!1)return;bi.copy(r).invert(),xi.copy(e.ray).applyMatrix4(bi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ci.fromBufferAttribute(l,n),Ti(Ci,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ci.fromBufferAttribute(l,a),Ti(Ci,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ti(e,t,n,r,i,a,o){let s=xi.distanceSqToPoint(e);if(s<n){let n=new U;xi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ei=class extends Wt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Di=class extends Wt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Oi=class extends Wt{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ki=class extends Oi{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ai=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ji=class e extends Er{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new J(c,3)),this.setAttribute(`normal`,new J(l,3)),this.setAttribute(`uv`,new J(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Mi=class e extends Er{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new U,g=new U;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new J(o,3)),this.setAttribute(`normal`,new J(s,3)),this.setAttribute(`uv`,new J(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ni=class e extends Er{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new U,l=new H;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new J(a,3)),this.setAttribute(`normal`,new J(o,3)),this.setAttribute(`uv`,new J(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},X=class e extends Er{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new J(u,3)),this.setAttribute(`normal`,new J(d,3)),this.setAttribute(`uv`,new J(f,2));function _(){let a=new U,_=new U,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new H,m=new U,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pi=class e extends X{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fi=class e extends Er{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new J(i,3)),this.setAttribute(`normal`,new J(i.slice(),3)),this.setAttribute(`uv`,new J(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new U,r=new U,i=new U;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new U;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new U;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new U,t=new U,n=new U,r=new U,o=new H,s=new H,c=new H;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ii=class e extends Fi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Li=class e extends Fi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ri=class e extends Fi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},zi=class e extends Er{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new J(p,3)),this.setAttribute(`normal`,new J(m,3)),this.setAttribute(`uv`,new J(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Bi=class e extends Er{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new U,p=new H;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new J(s,3)),this.setAttribute(`normal`,new J(c,3)),this.setAttribute(`uv`,new J(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Vi=class e extends Er{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new U,d=new U,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new J(p,3)),this.setAttribute(`normal`,new J(m,3)),this.setAttribute(`uv`,new J(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Hi=class e extends Er{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new U,f=new U,p=new U;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new J(c,3)),this.setAttribute(`normal`,new J(l,3)),this.setAttribute(`uv`,new J(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function Ui(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Gi(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(Gi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function Wi(e){let t={};for(let n=0;n<e.length;n++){let r=Ui(e[n]);for(let e in r)t[e]=r[e]}return t}function Gi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ki(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function qi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:G.workingColorSpace}var Ji={clone:Ui,merge:Wi},Yi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zi=class extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yi,this.fragmentShader=Xi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Ki(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new q().setHex(r.value);break;case`v2`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Gt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Qi=class extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},$i=class extends Or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ea=class extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=L,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ta=class extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function na(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var ra=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ia=class extends ra{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:F,endingEnd:F}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Re:i=e,o=2*t-n;break;case I:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Re:a=e,s=2*n-t;break;case I:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},aa=class extends ra{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},oa=class extends ra{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},sa=class extends ra{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},ca=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=na(t,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:na(e.times,Array),values:na(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new sa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case N:t=this.InterpolantFactoryMethodDiscrete;break;case Ie:t=this.InterpolantFactoryMethodLinear;break;case P:t=this.InterpolantFactoryMethodSmooth;break;case Le:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return N;case this.InterpolantFactoryMethodLinear:return Ie;case this.InterpolantFactoryMethodSmooth:return P;case this.InterpolantFactoryMethodBezier:return Le}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&qe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===P,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ca.prototype.ValueTypeName=``,ca.prototype.TimeBufferType=Float32Array,ca.prototype.ValueBufferType=Float32Array,ca.prototype.DefaultInterpolation=Ie;var la=class extends ca{constructor(e,t,n){super(e,t,n)}};la.prototype.ValueTypeName=`bool`,la.prototype.ValueBufferType=Array,la.prototype.DefaultInterpolation=N,la.prototype.InterpolantFactoryMethodLinear=void 0,la.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}};ua.prototype.ValueTypeName=`color`;var da=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}};da.prototype.ValueTypeName=`number`;var fa=class extends ra{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ot.slerpFlat(i,0,a,c-o,a,c,s);return i}},pa=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new fa(this.times,this.values,this.getValueSize(),e)}};pa.prototype.ValueTypeName=`quaternion`,pa.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends ca{constructor(e,t,n){super(e,t,n)}};ma.prototype.ValueTypeName=`string`,ma.prototype.ValueBufferType=Array,ma.prototype.DefaultInterpolation=N,ma.prototype.InterpolantFactoryMethodLinear=void 0,ma.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}};ha.prototype.ValueTypeName=`vector`;var ga=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},_a=class{constructor(e){this.manager=e===void 0?ga:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};_a.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var va=class extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new q(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ya=class extends va{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new q(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ba=new Xt,xa=new U,Sa=new U,Ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=u,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ai,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;xa.setFromMatrixPosition(e.matrixWorld),t.position.copy(xa),Sa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sa),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wa=new U,Ta=new Ot,Ea=new U,Da=class extends wn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Ge,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wa,Ta,Ea),Ea.x===1&&Ea.y===1&&Ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,Ea.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(wa,Ta,Ea),Ea.x===1&&Ea.y===1&&Ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,Ea.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oa=new U,ka=new H,Aa=new H,ja=class extends Da{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ot*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(at*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ot*2*Math.atan(Math.tan(at*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z)}getViewSize(e,t){return this.getViewBounds(e,ka,Aa),t.subVectors(Aa,ka)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(at*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ma=class extends Ca{constructor(){super(new ja(90,1,.5,500)),this.isPointLightShadow=!0}},Na=class extends va{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Ma}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Pa=class extends Da{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fa=class extends Ca{constructor(){super(new Pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ia=class extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new Fa}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},La=-90,Ra=1,za=class extends wn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ja(La,Ra,e,t);r.layers=this.layers,this.add(r);let i=new ja(La,Ra,e,t);i.layers=this.layers,this.add(i);let a=new ja(La,Ra,e,t);a.layers=this.layers,this.add(a);let o=new ja(La,Ra,e,t);o.layers=this.layers,this.add(o);let s=new ja(La,Ra,e,t);s.layers=this.layers,this.add(s);let c=new ja(La,Ra,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ba=class extends ja{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Va=`\\[\\]\\.:\\/`,Ha=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ua=`[^\\[\\]\\.:\\/]`,Wa=`[^`+Va.replace(`\\.`,``)+`]`,Ga=`((?:WC+[\\/:])*)`.replace(`WC`,Ua),Ka=`(WCOD+)?`.replace(`WCOD`,Wa),qa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ua),Ja=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ua),Ya=RegExp(`^`+Ga+Ka+qa+Ja+`$`),Xa=[`material`,`materials`,`bones`,`map`],Za=class{constructor(e,t,n){let r=n||Qa.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qa=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ha,``)}static parseTrackName(e){let t=Ya.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Xa.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qa.Composite=Za,Qa.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Qa.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Qa.prototype.GetterByBindingType=[Qa.prototype._getValue_direct,Qa.prototype._getValue_array,Qa.prototype._getValue_arrayElement,Qa.prototype._getValue_toArray],Qa.prototype.SetterByBindingTypeAndVersioning=[[Qa.prototype._setValue_direct,Qa.prototype._setValue_direct_setNeedsUpdate,Qa.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qa.prototype._setValue_array,Qa.prototype._setValue_array_setNeedsUpdate,Qa.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qa.prototype._setValue_arrayElement,Qa.prototype._setValue_arrayElement_setNeedsUpdate,Qa.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qa.prototype._setValue_fromArray,Qa.prototype._setValue_fromArray_setNeedsUpdate,Qa.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $a=new Xt,eo=class{constructor(e,t,n=0,r=1/0){this.ray=new Ir(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new cn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):z(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return $a.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($a),this}intersectObject(e,t=!0,n=[]){return no(e,this,n,t),n.sort(to),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)no(e[r],this,n,t);return n.sort(to),n}};function to(e,t){return e.distance-t.distance}function no(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)no(r[e],t,n,!0)}}var ro=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,R(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var io=new U,ao=new U,oo=new U,so=new U,co=new U,lo=new U,uo=new U,fo=class{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){io.subVectors(e,this.start),ao.subVectors(this.end,this.start);let n=ao.dot(ao);if(n===0)return 0;let r=ao.dot(io)/n;return t&&(r=B(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=lo,n=uo){let r=1e-8*1e-8,i,a,o=this.start,s=e.start,c=this.end,l=e.end;oo.subVectors(c,o),so.subVectors(l,s),co.subVectors(o,s);let u=oo.dot(oo),d=so.dot(so),f=so.dot(co);if(u<=r&&d<=r)return t.copy(o),n.copy(s),t.sub(n),t.dot(t);if(u<=r)i=0,a=f/d,a=B(a,0,1);else{let e=oo.dot(co);if(d<=r)a=0,i=B(-e/u,0,1);else{let t=oo.dot(so),n=u*d-t*t;i=n===0?0:B((t*f-e*d)/n,0,1),a=(t*i+f)/d,a<0?(a=0,i=B(-e/u,0,1)):a>1&&(a=1,i=B((t-e)/u,0,1))}}return t.copy(o).addScaledVector(oo,i),n.copy(s).addScaledVector(so,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function po(e,t,n,r){let i=mo(r);switch(n){case C:return e*t;case O:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case A:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case j:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case ue:case M:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ke:case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pe:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function mo(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function ho(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function go(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
}`,lights_fragment_begin:`
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
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
void main() {
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Q={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new W}},envmap:{envMap:{value:null},envMapRotation:{value:new W},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new W}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new W}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new W},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new W},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new W},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new W}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new W}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new W}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0},uvTransform:{value:new W}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}}},_o={basic:{uniforms:Wi([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:Wi([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new q(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:Wi([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:Wi([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:Wi([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new q(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:Wi([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:Wi([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:Wi([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:Wi([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:Wi([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:Wi([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new W},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new W}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:Wi([Q.common,Q.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:Wi([Q.lights,Q.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};_o.physical={uniforms:Wi([_o.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new W},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new W},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new W},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new W},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new W},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new W},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new W},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new W},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new W},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new W},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new W},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new W}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var vo={r:0,b:0,g:0},yo=new Xt,bo=new W;bo.set(-1,0,0,0,1,0,0,0,1);function xo(e,t,n,r,i,a){let o=new q(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Y(new ji(1,1,1),new Zi({name:`BackgroundCubeMaterial`,uniforms:Ui(_o.backgroundCube.uniforms),vertexShader:_o.backgroundCube.vertexShader,fragmentShader:_o.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(yo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(bo),l.material.toneMapped=G.getTransfer(i.colorSpace)!==He,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Y(new zi(2,2),new Zi({name:`BackgroundMaterial`,uniforms:Ui(_o.background.uniforms),vertexShader:_o.background.vertexShader,fragmentShader:_o.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=G.getTransfer(i.colorSpace)!==He,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(vo,qi(e)),n.buffers.color.setClear(vo.r,vo.g,vo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function So(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Co(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function wo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function To(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ti,s=new W,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Eo=4,Do=[.125,.215,.35,.446,.526,.582],Oo=20,ko=256,Ao=new Pa,jo=new q,Mo=null,No=0,Po=0,Fo=!1,Io=new U,Lo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Io}=i;Mo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo,No,Po),this._renderer.xr.enabled=Fo,e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:T,colorSpace:Be,depthBuffer:!1},r=zo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ro(r)),this._blurMaterial=Ho(r,e,t),this._ggxMaterial=Vo(r,e,t)}return r}_compileMaterial(e){let t=new Y(new Er,e);this._renderer.compile(t,Ao)}_sceneToCubeUV(e,t,n,r,i){let a=new ja(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(jo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Y(new ji,new Lr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(jo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Bo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Bo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ao)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Eo?n-d+Eo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Bo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ao),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Bo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ao)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&z(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Oo-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Oo;m>Oo&&R(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oo}`);let h=[],g=0;for(let e=0;e<Oo;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Bo(t,3*v*(r>_-Eo?r-_+Eo:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ao)}};function Ro(e){let t=[],n=[],r=[],i=e,a=e-Eo+1+Do.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Eo?s=Do[o-e+Eo-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Er;h.setAttribute(`position`,new fr(f,3)),h.setAttribute(`uv`,new fr(p,2)),h.setAttribute(`faceIndex`,new fr(m,1)),r.push(new Y(h,null)),i>Eo&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function zo(e,t,n){let r=new qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Bo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Vo(e,t,n){return new Zi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ko,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Go(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ho(e,t,n){let r=new Float32Array(Oo),i=new U(0,1,0);return new Zi({name:`SphericalGaussianBlur`,defines:{n:Oo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Go(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Uo(){return new Zi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Go(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wo(){return new Zi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Go(){return`

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
	`}var Ko=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ei(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ji(5,5,5),i=new Zi({name:`CubemapFromEquirect`,uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Y(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new za(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function qo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new Ko(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Lo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Lo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Jo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&$e(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Yo(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?mr:pr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Xo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Zo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Qo(e,t,n){let r=new WeakMap,i=new Gt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new Jt(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new H(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function $o(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var es={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ts(e,t,n,r,i,a){let o=new qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new Oi(t,n):void 0}),s=new qt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new Er;c.setAttribute(`position`,new J([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new J([0,2,0,0,2,0],2));let l=new Qi({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Y(c,l),d=new Pa(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&v.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},G.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=es[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var ns=new Wt,rs=new Oi(1,1),is=new Jt,as=new Yt,os=new Ei,ss=[],cs=[],ls=new Float32Array(16),us=new Float32Array(9),ds=new Float32Array(4);function fs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ss[i];if(a===void 0&&(a=new Float32Array(i),ss[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ps(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ms(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function hs(e,t){let n=cs[t];n===void 0&&(n=new Int32Array(t),cs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function gs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function _s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ps(n,t))return;e.uniform2fv(this.addr,t),ms(n,t)}}function vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ps(n,t))return;e.uniform3fv(this.addr,t),ms(n,t)}}function ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ps(n,t))return;e.uniform4fv(this.addr,t),ms(n,t)}}function bs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ps(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ms(n,t)}else{if(ps(n,r))return;ds.set(r),e.uniformMatrix2fv(this.addr,!1,ds),ms(n,r)}}function xs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ps(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ms(n,t)}else{if(ps(n,r))return;us.set(r),e.uniformMatrix3fv(this.addr,!1,us),ms(n,r)}}function Ss(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ps(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ms(n,t)}else{if(ps(n,r))return;ls.set(r),e.uniformMatrix4fv(this.addr,!1,ls),ms(n,r)}}function Cs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ps(n,t))return;e.uniform2iv(this.addr,t),ms(n,t)}}function Ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ps(n,t))return;e.uniform3iv(this.addr,t),ms(n,t)}}function Es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ps(n,t))return;e.uniform4iv(this.addr,t),ms(n,t)}}function Ds(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ps(n,t))return;e.uniform2uiv(this.addr,t),ms(n,t)}}function ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ps(n,t))return;e.uniform3uiv(this.addr,t),ms(n,t)}}function As(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ps(n,t))return;e.uniform4uiv(this.addr,t),ms(n,t)}}function js(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(rs.compareFunction=n.isReversedDepthBuffer()?518:515,a=rs):a=ns,n.setTexture2D(t||a,i)}function Ms(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||as,i)}function Ns(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||os,i)}function Ps(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||is,i)}function Fs(e){switch(e){case 5126:return gs;case 35664:return _s;case 35665:return vs;case 35666:return ys;case 35674:return bs;case 35675:return xs;case 35676:return Ss;case 5124:case 35670:return Cs;case 35667:case 35671:return ws;case 35668:case 35672:return Ts;case 35669:case 35673:return Es;case 5125:return Ds;case 36294:return Os;case 36295:return ks;case 36296:return As;case 35678:case 36198:case 36298:case 36306:case 35682:return js;case 35679:case 36299:case 36307:return Ms;case 35680:case 36300:case 36308:case 36293:return Ns;case 36289:case 36303:case 36311:case 36292:return Ps}}function Is(e,t){e.uniform1fv(this.addr,t)}function Ls(e,t){let n=fs(t,this.size,2);e.uniform2fv(this.addr,n)}function Rs(e,t){let n=fs(t,this.size,3);e.uniform3fv(this.addr,n)}function zs(e,t){let n=fs(t,this.size,4);e.uniform4fv(this.addr,n)}function Bs(e,t){let n=fs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Vs(e,t){let n=fs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Hs(e,t){let n=fs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Us(e,t){e.uniform1iv(this.addr,t)}function Ws(e,t){e.uniform2iv(this.addr,t)}function Gs(e,t){e.uniform3iv(this.addr,t)}function Ks(e,t){e.uniform4iv(this.addr,t)}function qs(e,t){e.uniform1uiv(this.addr,t)}function Js(e,t){e.uniform2uiv(this.addr,t)}function Ys(e,t){e.uniform3uiv(this.addr,t)}function Xs(e,t){e.uniform4uiv(this.addr,t)}function Zs(e,t,n){let r=this.cache,i=t.length,a=hs(n,i);ps(r,a)||(e.uniform1iv(this.addr,a),ms(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?rs:ns;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Qs(e,t,n){let r=this.cache,i=t.length,a=hs(n,i);ps(r,a)||(e.uniform1iv(this.addr,a),ms(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||as,a[e])}function $s(e,t,n){let r=this.cache,i=t.length,a=hs(n,i);ps(r,a)||(e.uniform1iv(this.addr,a),ms(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||os,a[e])}function ec(e,t,n){let r=this.cache,i=t.length,a=hs(n,i);ps(r,a)||(e.uniform1iv(this.addr,a),ms(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||is,a[e])}function tc(e){switch(e){case 5126:return Is;case 35664:return Ls;case 35665:return Rs;case 35666:return zs;case 35674:return Bs;case 35675:return Vs;case 35676:return Hs;case 5124:case 35670:return Us;case 35667:case 35671:return Ws;case 35668:case 35672:return Gs;case 35669:case 35673:return Ks;case 5125:return qs;case 36294:return Js;case 36295:return Ys;case 36296:return Xs;case 35678:case 36198:case 36298:case 36306:case 35682:return Zs;case 35679:case 36299:case 36307:return Qs;case 35680:case 36300:case 36308:case 36293:return $s;case 36289:case 36303:case 36311:case 36292:return ec}}var nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fs(t.type)}},rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tc(t.type)}},ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ac=/(\w+)(\])?(\[|\.)?/g;function oc(e,t){e.seq.push(t),e.map[t.id]=t}function sc(e,t,n){let r=e.name,i=r.length;for(ac.lastIndex=0;;){let a=ac.exec(r),o=ac.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){oc(n,l===void 0?new nc(s,e,t):new rc(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new ic(s),oc(n,e)),n=e}}}var cc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);sc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function lc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var uc=37297,dc=0;function fc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var pc=new W;function mc(e){G._getMatrix(pc,G.workingColorSpace,e);let t=`mat3( ${pc.elements.map(e=>e.toFixed(4))} )`;switch(G.getTransfer(e)){case Ve:return[t,`LinearTransferOETF`];case He:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function hc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+fc(e.getShaderSource(t),r)}else return i}function gc(e,t){let n=mc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var _c={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function vc(e,t){let n=_c[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var yc=new U;function bc(){return G.getLuminanceCoefficients(yc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${yc.x.toFixed(4)}, ${yc.y.toFixed(4)}, ${yc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function xc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(wc).join(`
`)}function Sc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Cc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function wc(e){return e!==``}function Tc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ec(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(e){return e.replace(Dc,Ac)}var kc=new Map;function Ac(e,t){let n=Z[t];if(n===void 0){let e=kc.get(t);if(e!==void 0)n=Z[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Oc(n)}var jc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(e){return e.replace(jc,Nc)}function Nc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Pc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Fc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ic(e){return Fc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Lc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Rc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Lc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var zc={302:`ENVMAP_MODE_REFRACTION`};function Bc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:zc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Vc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Hc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Vc[e.combine]||`ENVMAP_BLENDING_NONE`}function Uc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Wc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ic(n),l=Rc(n),u=Bc(n),d=Hc(n),f=Uc(n),p=xc(n),m=Sc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(wc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(wc).join(`
`),_.length>0&&(_+=`
`)):(g=[Pc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(wc).join(`
`),_=[Pc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:vc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,gc(`linearToOutputTexel`,n.outputColorSpace),bc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(wc).join(`
`)),o=Oc(o),o=Tc(o,n),o=Ec(o,n),s=Oc(s),s=Tc(s,n),s=Ec(s,n),o=Mc(o),s=Mc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=lc(i,i.VERTEX_SHADER,y),S=lc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=hc(i,x,`vertex`),n=hc(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new cc(i,h),T=Cc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,uc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Gc=0,Kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qc(e),t.set(e,n)),n}},qc=class{constructor(e){this.id=Gc++,this.code=e,this.usedTimes=0}};function Jc(e){return e===1030||e===37490||e===36285}function Yc(e,t,n,r,i,a){let o=new cn,s=new Kc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=_o[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),A=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=pe&&!!i.anisotropyMap,be=me&&!!i.clearcoatMap,xe=me&&!!i.clearcoatNormalMap,Se=me&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,Fe=!!i.alphaHash,N=!!i.extensions,Ie=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let P={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:A,instancingColor:A&&h.instanceColor!==null,instancingMorph:A&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:G.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Jc(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:ye,clearcoat:me,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:Fe,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&G.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&G.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:N&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(N&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return P.vertexUv1s=c.has(1),P.vertexUv2s=c.has(2),P.vertexUv3s=c.has(3),c.clear(),P}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=_o[t];n=Ji.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Wc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Xc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Zc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Qc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function $c(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Zc),r.length>1&&r.sort(t||Qc),i.length>1&&i.sort(t||Qc),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function el(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new $c,e.set(t,[i])):n>=r.length?(i=new $c,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function tl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new U,color:new q};break;case`SpotLight`:n={position:new U,direction:new U,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new q,groundColor:new q};break;case`RectAreaLight`:n={color:new q,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=n,n}}}function nl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var rl=0;function il(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function al(e){let t=new tl,n=nl(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new Xt,o=new Xt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(il);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=rl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function ol(e){let t=new al(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function sl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ol(e),t.set(n,[a])):r>=i.length?(a=new ol(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var cl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ll=`uniform sampler2D shadow_pass;
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
}`,ul=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],dl=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],fl=new Xt,pl=new U,ml=new U;function hl(e,t,n){let r=new ai,a=new H,o=new H,c=new Gt,l=new ea,u=new ta,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:cl,fragmentShader:ll}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new Er;y.setAttribute(`position`,new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Y(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){R(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new qt(a.x,a.y,{format:k,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Oi(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new Ko(a.x),p.map.depthTexture=new ki(a.x,h)):(p.map=new qt(a.x,a.y),p.map.depthTexture=new Oi(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),pl.setFromMatrixPosition(d.matrixWorld),e.position.copy(pl),ml.copy(e.position),ml.add(ul[t]),e.up.copy(dl[t]),e.lookAt(ml),e.updateMatrixWorld(),n.makeTranslation(-pl.x,-pl.y,-pl.z),fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(fl,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);r=p.getFrustum(),T(n,l,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new qt(a.x,a.y,{format:k,type:_})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value=n.mapSize,v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function gl(e,t){function n(){let t=!1,n=new Gt,r=null,i=new Gt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=tt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,re=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),A=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),A=re>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Gt().fromArray(oe),le=new Gt().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(fe(e.BLEND),g=!1);return}if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==ee&&(A&&e.lineWidth(t),ee=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+ne-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+ne-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function P(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function F(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function Re(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function I(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function L(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Le,getParameter:P,updateUBOMapping:I,uniformBlockBinding:L,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:F,viewport:Re,reset:ze}}function _l(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new H,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Je(`canvas`)}function T(e,t,n){let r=1,i=P(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function E(e){return e.generateMipmaps}function O(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?Ve:G.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ne(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ae(t)}function ie(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function j(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ae(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&R(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,n){let r=f.get(t);if(t.isVideoTexture&&N(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function fe(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){Se(r,t,n);return}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function pe(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){Se(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function me(t,n){let r=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){Ce(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let he={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},ge={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,he[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,he[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,he[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,ge[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,ge[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,_e[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,A));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=de(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=be(r.start,n.width,4),c=be(t.start,n.width,4);r.start<=i+1&&s===c&&be(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function Se(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=ye(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=G.getPrimaries(G.workingColorSpace),r=n.colorSpace===``?null:G.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Ie(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=k(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);ve(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=ne(n,t);if(n.isDepthTexture)u=te(n.format===D,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture)if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&xe(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data);else if(n.isCompressedTexture)if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023)if(c!==null)if(g){if(v)if(n.layerUpdates.size>0){let t=po(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0);else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data)}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}else if(n.isDataArrayTexture)if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v)if(n.layerUpdates.size>0){let r=po(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_)if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=P(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=P(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&O(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Ce(t,n,r){if(n.image.length!==6)return;let i=ye(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=G.getPrimaries(G.workingColorSpace),s=n.colorSpace===``?null:G.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Ie(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=k(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=ne(n,h);ve(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=P(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&O(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function we(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=k(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Pe(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,A)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else M(n.depthTexture,0);let o=a.__webglTexture,s=Pe(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer)if(r)for(let e=0;e<6;e++)Ee(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ee(n.__webglFramebuffer[0],t,0):Ee(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Te(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Te(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,r){let i=f.get(t);n!==void 0&&we(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&De(t)}function ke(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,re);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Fe(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=k(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)we(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&O(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),ve(s,i),we(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&O(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),ve(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else we(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&O(a),d.unbindTexture()}t.depthBuffer&&De(t)}function Ae(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let je=[],Me=[];function Ne(t){if(t.samples>0){if(Fe(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(je.length=0,Me.length=0,je.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(je.push(o),Me.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function Fe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function N(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(G.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function P(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function vl(e,t){function n(n,r=``){let i,a=G.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var yl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bl=`
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

}`,xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ai(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zi({vertexShader:yl,fragmentShader:bl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Y(new zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sl=class extends nt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new xl,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],O=new H,ee=null,k=new ja;k.viewport=new Gt;let te=new ja;te.viewport=new Gt;let ne=[k,te],A=new Ba,re=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getHandSpace()};function j(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}re=null,ie=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(ee),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?D:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new Oi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new qt(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let se=new U,ce=new U;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=te.near=k.near=t,A.far=te.far=k.far=n,(re!==A.near||ie!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),re=A.near,ie=A.far),A.layers.mask=e.layers.mask|6,k.layers.mask=A.layers.mask&-5,te.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ue(A,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(A,k,te):A.projectionMatrix.copy(k.projectionMatrix),de(e,A,i)};function de(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ot*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let M=null;function fe(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ne[n];o===void 0&&(o=new ja,o.layers.enable(n),o.viewport=new Gt,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Ai,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}M&&M(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let pe=new ho;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){M=e},this.dispose=function(){}}},Cl=new Xt,wl=new W;wl.set(-1,0,0,0,1,0,0,0,1);function Tl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,qi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Cl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(wl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function El(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Dl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ol=null;function kl(){return Ol===null&&(Ol=new Zr(Dl,16,16,k,_),Ol.name=`DFG_LUT`,Ol.minFilter=s,Ol.magFilter=s,Ol.wrapS=n,Ol.wrapT=n,Ol.generateMipmaps=!1,Ol.needsUpdate=!0),Ol}var Al=class{constructor(e={}){let{canvas:t=Ye(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([ne,te,ee]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),D=new U,O=null,k=null,A=[],re=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=ze;let ue=0,de=0,M=null,fe=-1,pe=null,me=new Gt,he=new Gt,ge=null,_e=new q(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new Gt(0,0,ye,be),Te=new Gt(0,0,ye,be),Ee=!1,De=new ai,Oe=!1,ke=!1,Ae=new Xt,je=new U,Me=new Gt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw z(`WebGLRenderer: `+e.message),e}let P,Le,F,Re,I,L,Be,Ve,He,Ue,We,Ke,qe,Je,Xe,Qe,$e,tt,nt,rt,it,at,ot;function st(){P=new Jo(N),P.init(),it=new vl(N,P),Le=new wo(N,P,e,it),F=new gl(N,P),Le.reversedDepthBuffer&&m&&F.buffers.depth.setReversed(!0),se=N.createFramebuffer(),ce=N.createFramebuffer(),le=N.createFramebuffer(),Re=new Zo(N),I=new Xc,L=new _l(N,P,F,I,Le,it,Re),Be=new qo(j),Ve=new go(N),at=new So(N,Ve),He=new Yo(N,Ve,Re,at),Ue=new $o(N,He,Ve,at,Re),tt=new Qo(N,Le,L),Xe=new To(I),We=new Yc(j,Be,P,Le,at,Xe),Ke=new Tl(j,I),qe=new el,Je=new sl(P),$e=new xo(j,Be,F,Ue,x,s),Qe=new hl(j,Ue,Le),ot=new El(N,Re,Le,F),nt=new Co(N,P,Re),rt=new Xo(N,P,Re),Re.programs=We.programs,j.capabilities=Le,j.extensions=P,j.properties=I,j.renderLists=qe,j.shadowMap=Qe,j.state=F,j.info=Re}st(),S!==1009&&(ie=new ts(S,t.width,t.height,o,r,i));let B=new Sl(j,N);this.xr=B,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=P.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=P.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){if(B.isPresenting){R(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),F.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){F.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=C.has(t)}if(e){let e=M.texture.type,t=w.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),$e.dispose(),qe.dispose(),Je.dispose(),I.dispose(),Be.dispose(),Ue.dispose(),at.dispose(),ot.dispose(),We.dispose(),B.dispose(),B.removeEventListener(`sessionstart`,_t),B.removeEventListener(`sessionend`,vt),yt.stop()};function ct(e){e.preventDefault(),Ze(`WebGLRenderer: Context Lost.`),ae=!0}function lt(){Ze(`WebGLRenderer: Context Restored.`),ae=!1;let e=Re.autoReset,t=Qe.enabled,n=Qe.autoUpdate,r=Qe.needsUpdate,i=Qe.type;st(),Re.autoReset=e,Qe.enabled=t,Qe.autoUpdate=n,Qe.needsUpdate=r,Qe.type=i}function ut(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){pt(e),I.remove(e)}function pt(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=H(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;at.setup(i,r,s,n,c);let h,g=nt;if(c!==null&&(h=Ve.get(c),g=rt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh)if(P.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,n),e.side=0,e.needsUpdate=!0,Tt(e,t,n),e.side=2):Tt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),k=Je.get(n),k.init(t),re.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];mt(a,n,e),r.add(a)}else mt(t,n,e),r.add(t)}),k=re.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){I.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}P.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ht=null;function gt(e){ht&&ht(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new ho;yt.setAnimationLoop(gt),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){ht=e,B.setAnimationLoop(e),e===null?yt.stop():yt.start()},B.addEventListener(`sessionstart`,_t),B.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=B.enabled===!0&&B.isPresenting===!0,r=ie!==null&&(M===null||n)&&ie.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(B.cameraAutoUpdate===!0&&B.updateCamera(t),t=B.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),k=Je.get(e,re.length),k.init(t),k.state.textureUnits=L.getTextureUnits(),re.push(k),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,Ge,t.reversedDepth),ke=this.localClippingEnabled,Oe=Xe.init(this.clippingPlanes,ke),O=qe.get(e,A.length),O.init(),A.push(O),B.enabled===!0&&B.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,j.sortObjects)}bt(e,t,0,j.sortObjects),O.finish(),j.sortObjects===!0&&O.sort(Se,Ce,t.reversedDepth),Pe=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Pe&&$e.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Xe.beginShadows();let i=k.state.shadowsArray;if(Qe.render(i,e,t),Oe===!0&&Xe.endShadows(),(r&&ie.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Pe&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(O,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Pe&&$e.render(e),xt(O,e,t)}M!==null&&de===0&&(L.updateMultisampleRenderTarget(M),L.updateRenderTargetMipmap(M)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),at.resetDefaultState(),fe=-1,pe=null,re.pop(),re.length>0?(k=re[re.length-1],L.setTextureUnits(k.state.textureUnits),Oe===!0&&Xe.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,oe!==null&&oe.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||De.intersectsSprite(e)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let t=Ue.update(e),i=e.material;i.visible&&O.push(e,t,i,n,Me.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||De.intersectsObject(e))){let t=Ue.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Me.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&O.push(e,t,s,n,Me.z,o)}}else i.visible&&O.push(e,t,i,n,Me.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Oe===!0&&Xe.setGlobalState(j.clippingPlanes,n),r&&F.viewport(me.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=P.has(`EXT_color_buffer_half_float`)||P.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new qt(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:G.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),d=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&$e.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Oe===!0&&Xe.setGlobalState(j.clippingPlanes,r),Ct(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),P.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,d),j.setClearColor(_e,ve),p!==void 0&&(r.viewport=p),j.toneMapping=f}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=Ne);let r=I.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=We.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),Dt(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=cc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function V(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function H(e,t,n,r,i){t.isScene!==!0&&(t=Ne),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:G.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=k.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;Xe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(F.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=V(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,L),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,L),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,L)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,L),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,L),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,L));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&tt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=kl()),C){if(T.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Ot(E,w),a&&r.fog===!0&&Ke.refreshFogUniforms(E,a),Ke.refreshMaterialUniforms(E,r,xe,be,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}cc.upload(N,Et(v),E,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(cc.upload(N,Et(v),E,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ot.update(n,x),ot.bind(n,x)}}return x}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,F.viewport(me),F.scissor(he),F.setScissorTest(ge),fe=-1;return}else if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=se),F.bindFramebuffer(N.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(me),F.scissor(he),F.setScissorTest(ge),i){let r=I.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s),!Le.textureFormatReadable(c)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Le.textureTypeReadable(l)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,it.convert(c),it.convert(l),a)}finally{let e=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s),!Le.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Le.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,d),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,it.convert(l),it.convert(u),0);let f=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(N.FRAMEBUFFER,f);let p=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await et(N,p,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,d),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.deleteBuffer(d),N.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=it.convert(t.format),_=it.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=N.TEXTURE_2D),F.activeTexture(N.TEXTURE0),F.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(N.UNPACK_ROW_LENGTH),b=F.getParameter(N.UNPACK_IMAGE_HEIGHT),x=F.getParameter(N.UNPACK_SKIP_PIXELS),S=F.getParameter(N.UNPACK_SKIP_ROWS),C=F.getParameter(N.UNPACK_SKIP_IMAGES);F.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(N.UNPACK_SKIP_PIXELS,l),F.pixelStorei(N.UNPACK_SKIP_ROWS,u),F.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);F.bindFramebuffer(N.READ_FRAMEBUFFER,null),F.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(N.READ_FRAMEBUFFER,ce),F.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);F.bindFramebuffer(N.READ_FRAMEBUFFER,null),F.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(N.UNPACK_ROW_LENGTH,y),F.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(N.UNPACK_SKIP_PIXELS,x),F.pixelStorei(N.UNPACK_SKIP_ROWS,S),F.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,F.reset(),at.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=G._getDrawingBufferColorSpace(e),t.unpackColorSpace=G._getUnpackColorSpace()}},jl=[{id:`rifleman`,name:`步枪兵`,role:`中远距离主力`,weapon:`中正式步骑枪`,mode:`栓动`,kind:`bolt`,damage:86,headMultiplier:2.5,rpm:52,magazine:5,reserve:50,reload:3.2,recoil:.075,spreadHip:4.5,spreadAds:.08,grenades:2,aid:2},{id:`assault`,name:`冲锋枪手`,role:`近距离突击`,weapon:`花机关 MP18`,mode:`全自动`,kind:`auto`,damage:20,headMultiplier:1.8,rpm:500,magazine:32,reserve:160,reload:2.9,recoil:.035,spreadHip:3.2,spreadAds:.85,grenades:3,aid:2},{id:`support`,name:`机枪手`,role:`持续火力压制`,weapon:`捷克式 ZB-26`,mode:`全自动`,kind:`auto`,damage:31,headMultiplier:1.9,rpm:500,magazine:20,reserve:120,reload:3.1,recoil:.052,spreadHip:3.8,spreadAds:.5,grenades:2,aid:2},{id:`scout`,name:`狙击手`,role:`精确远程射击`,weapon:`中正式狙击型`,mode:`栓动 · 4x`,kind:`bolt`,damage:94,headMultiplier:2.5,rpm:50,magazine:5,reserve:40,reload:3.4,recoil:.085,spreadHip:5,spreadAds:.02,grenades:1,aid:2},{id:`medic`,name:`医护兵`,role:`救护与自卫`,weapon:`汉阳造八八式`,mode:`栓动`,kind:`bolt`,damage:78,headMultiplier:2.4,rpm:50,magazine:5,reserve:45,reload:3.4,recoil:.07,spreadHip:5,spreadAds:.12,grenades:2,aid:2},{id:`anti-tank`,name:`反坦克兵`,role:`摧毁装甲与工事`,weapon:`博伊斯反坦克枪`,mode:`栓动 · 13.9mm`,kind:`bolt`,damage:92,headMultiplier:1.6,rpm:24,magazine:5,reserve:20,reload:3.8,recoil:.21,spreadHip:6,spreadAds:.06,vehicleDamage:125,armorPen:48,antiTankGrenades:3,grenades:1,aid:2},{id:`engineer`,name:`工程兵`,role:`构筑掩体与维修载具`,weapon:`老套筒步枪`,mode:`栓动`,kind:`bolt`,damage:54,headMultiplier:2.1,rpm:44,magazine:5,reserve:30,reload:3.7,recoil:.075,spreadHip:5.8,spreadAds:.3,grenades:1,aid:2},{id:`mortar`,name:`迫击炮兵`,role:`架设曲射火力支援`,weapon:`汉阳造 / 轻型迫击炮`,mode:`栓动 · 曲射支援`,kind:`bolt`,damage:68,headMultiplier:2.2,rpm:46,magazine:5,reserve:35,reload:3.5,recoil:.075,spreadHip:5.4,spreadAds:.24,grenades:1,aid:2}],Ml={id:`sidearm`,name:`副武器`,role:`近距离应急`,weapon:`毛瑟 C96 手枪`,mode:`半自动`,kind:`semi`,damage:34,headMultiplier:2,rpm:300,magazine:10,reserve:40,reload:2.35,recoil:.042,spreadHip:2.7,spreadAds:.5,grenades:0,aid:0},Nl={rifleman:{weapon:`汉阳造八八式`,damage:78,headMultiplier:2.4,rpm:50,magazine:5,reserve:45,reload:3.4,recoil:.07,spreadHip:5,spreadAds:.12},assault:{weapon:`快慢机（盒子炮）`,mode:`全自动`,damage:21,headMultiplier:1.9,rpm:620,magazine:20,reserve:120,reload:2.4,recoil:.05,spreadHip:3.8,spreadAds:.95},support:{weapon:`歪把子（缴获）`,damage:27,headMultiplier:1.9,rpm:480,magazine:30,reserve:120,reload:3.8,recoil:.055,spreadHip:4.2,spreadAds:.6},medic:{weapon:`汉阳造八八式`,damage:78,headMultiplier:2.4,rpm:50,magazine:5,reserve:45,reload:3.4,recoil:.07,spreadHip:5,spreadAds:.12},"anti-tank":{weapon:`汉阳造八八式`,mode:`栓动 · 反坦克手雷`,damage:78,headMultiplier:2.4,rpm:50,magazine:5,reserve:45,reload:3.4,recoil:.07,spreadHip:5,spreadAds:.12,vehicleDamage:void 0,armorPen:void 0,antiTankGrenades:4},mortar:{weapon:`老套筒 / 轻型迫击炮`,damage:54,headMultiplier:2.1,rpm:44,magazine:5,reserve:30,reload:3.7,recoil:.075,spreadHip:5.8,spreadAds:.3}},Pl=e=>e===`baituan`?jl.map(e=>({...e,...Nl[e.id]})):jl,Fl=class{context;noiseBuffer;volume=1;engineOscillator;engineGain;engineFilter;ambientStarted=!1;ambientGains=[];setVolume(e){this.volume=Math.max(0,Math.min(1,e));for(let e of this.ambientGains)e.gain.setTargetAtTime(e.baseVolume*this.volume,e.context.currentTime,.08)}unlock(e){this.context??=new AudioContext,this.context.state===`suspended`&&this.context.resume(),this.ambientStarted||this.startAmbient(!!e?.rain,e?.birds!==!1)}ambientGain(e){let t=this.context.createGain();return t.baseVolume=e,t.gain.value=e*this.volume,this.ambientGains.push(t),t}startAmbient(e,t){let n=this.context;if(this.ambientStarted=!0,!this.noiseBuffer){let e=n.sampleRate;this.noiseBuffer=n.createBuffer(1,e,n.sampleRate);let t=this.noiseBuffer.getChannelData(0);for(let n=0;n<e;n++)t[n]=Math.random()*2-1}let r=n.createBufferSource(),i=n.createBiquadFilter(),a=this.ambientGain(.026);r.buffer=this.noiseBuffer,r.loop=!0,i.type=`lowpass`,i.frequency.value=260,r.connect(i).connect(a).connect(n.destination),r.start();let o=n.createOscillator(),s=n.createGain();if(o.frequency.value=.13,s.gain.value=85,o.connect(s).connect(i.frequency),o.start(),e){let e=n.createBufferSource(),t=n.createBiquadFilter(),r=this.ambientGain(.035);e.buffer=this.noiseBuffer,e.loop=!0,t.type=`bandpass`,t.frequency.value=1450,t.Q.value=.35,e.connect(t).connect(r).connect(n.destination),e.start()}let c=()=>{Math.random()<.5&&this.distantMachineGun(),setTimeout(c,3800+Math.random()*2200)},l=()=>{t&&Math.random()<.55&&this.bird(),setTimeout(l,1900+Math.random()*1800)};setTimeout(c,2400),setTimeout(l,1200)}distantMachineGun(){let e=this.context;if(!e||e.state!==`running`)return;let t=5+Math.floor(Math.random()*9),n=.07+Math.random()*.04,r=400+Math.random()*300,i=(.012+Math.random()*.022)*this.volume,a=e.createStereoPanner(),o=e.createBiquadFilter();a.pan.value=(Math.random()-.5)*1.6,o.type=`lowpass`,o.frequency.value=900,o.connect(a).connect(e.destination);for(let a=0;a<t;a++){let t=e.currentTime+a*n,s=e.createOscillator(),c=e.createGain();s.type=`triangle`,s.frequency.value=r*(.9+Math.random()*.2),c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(i,t+.006),c.gain.exponentialRampToValueAtTime(1e-4,t+.05),s.connect(c).connect(o),s.start(t),s.stop(t+.08)}}bird(){let e=this.context;if(!e||e.state!==`running`)return;let t=e.createOscillator(),n=e.createGain(),r=e.createStereoPanner(),i=2+Math.floor(Math.random()*4);r.pan.value=(Math.random()-.5)*1.7,t.connect(n).connect(r).connect(e.destination),n.gain.value=1e-4;let a=e.currentTime+.03;for(let e=0;e<i;e++){let e=2300+Math.random()*1500;t.frequency.setValueAtTime(e,a),t.frequency.exponentialRampToValueAtTime(e*(1.12+Math.random()*.25),a+.06),n.gain.setValueAtTime(1e-4,a),n.gain.linearRampToValueAtTime((.006+Math.random()*.012)*this.volume,a+.018),n.gain.exponentialRampToValueAtTime(1e-4,a+.13),a+=.12+Math.random()*.16}t.start(),t.stop(a+.2)}shot(e,t=1,n=0){t*=this.volume;let r=this.context;if(!r||r.state!==`running`)return;let i=e===`auto`?.09:.16;this.noise(i,e===`auto`?1500:1050,.25*t,n);let a=r.createOscillator(),o=r.createGain(),s=r.createStereoPanner();a.type=`square`,a.frequency.setValueAtTime(e===`auto`?130:92,r.currentTime),a.frequency.exponentialRampToValueAtTime(42,r.currentTime+i),o.gain.setValueAtTime(.18*t,r.currentTime),o.gain.exponentialRampToValueAtTime(.001,r.currentTime+i),s.pan.value=n,a.connect(o).connect(s).connect(r.destination),a.start(),a.stop(r.currentTime+i)}explosion(e=1,t=0){e*=this.volume;let n=this.context;if(!n||n.state!==`running`)return;this.noise(.65,520,.6*e,t);let r=n.createOscillator(),i=n.createGain(),a=n.createStereoPanner();r.type=`sine`,r.frequency.setValueAtTime(78,n.currentTime),r.frequency.exponentialRampToValueAtTime(28,n.currentTime+.55),i.gain.setValueAtTime(.5*e,n.currentTime),i.gain.exponentialRampToValueAtTime(.001,n.currentTime+.65),a.pan.value=t,r.connect(i).connect(a).connect(n.destination),r.start(),r.stop(n.currentTime+.7)}click(e=850,t=.08){t*=this.volume;let n=this.context;if(!n||n.state!==`running`)return;let r=n.createOscillator(),i=n.createGain();r.type=`triangle`,r.frequency.setValueAtTime(e,n.currentTime),i.gain.setValueAtTime(t,n.currentTime),i.gain.exponentialRampToValueAtTime(.001,n.currentTime+.07),r.connect(i).connect(n.destination),r.start(),r.stop(n.currentTime+.08)}whizz(e=0){let t=this.context;if(!t||t.state!==`running`)return;let n=this.volume;this.noise(.16,5200,.16*n,e);let r=t.createOscillator(),i=t.createGain(),a=t.createStereoPanner();r.type=`sine`,r.frequency.setValueAtTime(2600,t.currentTime),r.frequency.exponentialRampToValueAtTime(780,t.currentTime+.14),i.gain.setValueAtTime(.09*n,t.currentTime),i.gain.exponentialRampToValueAtTime(.001,t.currentTime+.16),a.pan.value=e,r.connect(i).connect(a).connect(t.destination),r.start(),r.stop(t.currentTime+.17)}ricochet(e=1,t=0){e*=this.volume;let n=this.context;if(!n||n.state!==`running`)return;let r=n.createOscillator(),i=n.createGain(),a=n.createStereoPanner();r.type=`triangle`,r.frequency.setValueAtTime(1700+Math.random()*900,n.currentTime),r.frequency.exponentialRampToValueAtTime(420,n.currentTime+.13),i.gain.setValueAtTime(.11*e,n.currentTime),i.gain.exponentialRampToValueAtTime(.001,n.currentTime+.15),a.pan.value=t,r.connect(i).connect(a).connect(n.destination),r.start(),r.stop(n.currentTime+.16)}footstep(e=!1,t=1){let n=this.context;if(!n||n.state!==`running`)return;let r=this.volume*t;this.noise(e?.085:.07,e?620:480,(e?.075:.05)*r,(Math.random()-.5)*.12);let i=n.createOscillator(),a=n.createGain();i.type=`sine`,i.frequency.setValueAtTime(e?82:68,n.currentTime),i.frequency.exponentialRampToValueAtTime(38,n.currentTime+.075),a.gain.setValueAtTime((e?.045:.028)*r,n.currentTime),a.gain.exponentialRampToValueAtTime(.001,n.currentTime+.09),i.connect(a).connect(n.destination),i.start(),i.stop(n.currentTime+.1)}hurt(e=1){let t=this.context;if(!t||t.state!==`running`)return;this.noise(.16,760,.11*this.volume*e,0);let n=t.createOscillator(),r=t.createGain();n.type=`sine`,n.frequency.setValueAtTime(145,t.currentTime),n.frequency.exponentialRampToValueAtTime(62,t.currentTime+.14),r.gain.setValueAtTime(.09*this.volume*e,t.currentTime),r.gain.exponentialRampToValueAtTime(.001,t.currentTime+.18),n.connect(r).connect(t.destination),n.start(),n.stop(t.currentTime+.2)}engine(e,t){let n=this.context;if(!n||n.state!==`running`)return;(!this.engineOscillator||!this.engineGain||!this.engineFilter)&&(this.engineOscillator=n.createOscillator(),this.engineGain=n.createGain(),this.engineFilter=n.createBiquadFilter(),this.engineOscillator.type=`sawtooth`,this.engineFilter.type=`lowpass`,this.engineGain.gain.value=.001,this.engineOscillator.connect(this.engineFilter).connect(this.engineGain).connect(n.destination),this.engineOscillator.start());let r=n.currentTime,i=Math.max(e,t*.55);this.engineOscillator.frequency.setTargetAtTime(42+i*48-t*8,r,.08),this.engineFilter.frequency.setTargetAtTime(160+e*240-t*65,r,.1),this.engineGain.gain.setTargetAtTime((.022+e*.025+t*.012)*this.volume,r,.08)}stopEngine(){let e=this.context,t=this.engineGain;!e||!t||t.gain.setTargetAtTime(.001,e.currentTime,.1)}noise(e,t,n,r){let i=this.context;if(!this.noiseBuffer){let e=i.sampleRate;this.noiseBuffer=i.createBuffer(1,e,i.sampleRate);let t=this.noiseBuffer.getChannelData(0);for(let n=0;n<e;n++)t[n]=Math.random()*2-1}let a=i.createBufferSource(),o=i.createBiquadFilter(),s=i.createGain(),c=i.createStereoPanner();a.buffer=this.noiseBuffer,o.type=`lowpass`,o.frequency.value=t,s.gain.setValueAtTime(n,i.currentTime),s.gain.exponentialRampToValueAtTime(.001,i.currentTime+e),c.pan.value=r,a.connect(o).connect(s).connect(c).connect(i.destination),a.start(),a.stop(i.currentTime+e)}},Il=class{renderer;audio=new Fl;scene=new Nn;textureCache=new Map;camera=new ja(72,1,.06,420);clock=new ro;ray=new eo;keys=new Set;bots=[];tanks=[];transports=[];emplacements=[];planes=[];planeWrecks=[];bailedPilots=[];particles=[];casings=[];corpses=[];craters=[];smokeClouds=[];playerTank;playerTransport;playerTransportPassenger=!1;playerTransportSeat=-1;playerEmplacement;playerPlane;parachuting=!1;parachute;tankShotAt=0;tankMgShotAt=0;tankMgFiring=!1;tankGunnerView=!1;objectives=[];depots=[];assaultIndex=0;colliders=[];vehicleColliders=[];coverMeshes=[];botMotion=new Map;grenadesInWorld=[];artilleryShells=[];nextArtilleryAt=0;cannonShells=[];medkits=[];fortifications=[];constructionRisers=[];ladders=[];platforms=[];playerLadder;groundLevel=0;fieldStructures=[];urbanBuildings=[];mortar;playerMortar;mortarAmmo=16;mortarShotAt=0;mortarMarker=new Y(new Bi(.8,1.05,28),new Lr({color:16762982,transparent:!0,opacity:.8,side:2,depthTest:!1}));machineGuns=[];playerMG;mgShotAt=0;reinforcementWaveAt={ally:0,enemy:0};deathHeat=[];sun=new Ia(16769458,3.1);hemi=new ya(14410205,3421999,1.5);precipitation;snowing=!1;rainSpeed=0;lightningAt=0;stormFlash=0;ammoCrates=[];squadMode=`follow`;squadTarget=new U;squadMarker=new Y(new Pi(.35,.75,4),new Lr({color:16766810,depthTest:!1}));tickets=[120,120];maxTickets=120;enemyAccuracy=1;enemyFireRate=1;enemyDamage=1;matchTime=1080;weapon=new K;bolt=new K;weaponMagazine;playerMuzzle=new Y(new Vi(.11,8,6),new Lr({color:16761950}));yaw=Math.PI;pitch=-.04;planeStickPitch=-.04;recoil=0;lean=0;meleeAt=-10;meleeCooldown=0;stance=`stand`;stamina=1;staminaRegenAt=0;jumpHeight=0;jumpVelocity=0;landingKick=0;canBrace=!1;braced=!1;braceYaw=0;holdingBreath=!1;breathPhase=0;breathExhaustedUntil=0;movePhase=0;nextFootstepAt=0;selectedLoadout=jl[0];battleLoadouts=jl;weaponSlot=`primary`;primaryAmmo=[this.selectedLoadout.magazine,this.selectedLoadout.reserve];sidearmAmmo=[Ml.magazine,Ml.reserve];mag=this.selectedLoadout.magazine;reserve=this.selectedLoadout.reserve;grenades=this.selectedLoadout.grenades;antiTankGrenades=0;grenadeMode=`frag`;grenadeCooking=!1;grenadeFuse=3.8;heldGrenade;smokeGrenades=1;suppression=0;nextWhizzAt=0;aid=this.selectedLoadout.aid;bandagingUntil=0;bandagingStartedAt=0;heldBandage;medkitAvailable=!1;buildCharges=0;buildKind=`sandbag`;buildAction;heldTool;repairAt=0;resupplyAt=0;bandageResupplyAt=0;supplyAction;heldSupply;status=``;statusUntil=0;tacticalAt=0;hp=100;lastDamageAt=-99;kills=0;multiKills=0;lastPlayerKillAt=-99;lastDamageCause=`未知伤害`;lastDamageAmount=0;lastDamageSource;playerReviver;playerReviveStartedAt=0;giveUpStartedAt=0;downedFreeLook=!1;deaths=0;objectiveScore=0;nextPlayerShot=0;active=!1;paused=!1;loading=!1;reloadToken=0;nextWireDamage=0;firing=!1;aiming=!1;shotAt=-10;dead=!1;deathSceneToken=0;matchOver=!1;sensitivity=.0022;pointerLockGraceUntil=0;canvas;events;campaign;activeLoadout(){return this.weaponSlot===`primary`?this.selectedLoadout:Ml}logCombat(e,t){try{let n=`battlefield1937_combat_log`,r=JSON.parse(localStorage.getItem(n)??`[]`),i={at:new Date().toISOString(),battleTime:Math.round(performance.now()),campaign:this.campaign.id,type:e,playerPosition:[Number(this.camera.position.x.toFixed(2)),Number(this.camera.position.y.toFixed(2)),Number(this.camera.position.z.toFixed(2))],...t};r.push(i),localStorage.setItem(n,JSON.stringify(r.slice(-400),null,2)),console.info(`[战地1937]`,i)}catch(e){console.warn(`[战地1937] 战斗日志写入失败`,e)}}constructor(e,t,n){this.canvas=e,this.events=t,this.campaign=n,this.battleLoadouts=Pl(n.id),this.selectedLoadout=this.battleLoadouts[0],this.tickets=[n.tickets,n.tickets],this.maxTickets=n.tickets,this.renderer=new Al({canvas:e,antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.renderer.outputColorSpace=ze,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=.95,window.exportBattlefield1937Log=()=>{let e=localStorage.getItem(`battlefield1937_combat_log`)??`[]`,t=document.createElement(`a`);t.href=URL.createObjectURL(new Blob([e],{type:`application/json`})),t.download=`战地1937-战斗日志-${new Date().toISOString().replace(/[:.]/g,`-`)}.json`,t.click(),URL.revokeObjectURL(t.href)};let r={delta:[7568505,8752521],ruin:[7828846,8749947],canal:[9144958,10066059],green:[7832695,9016457],loess:[10127209,10785138],jungle:[5466971,6584166],alpine:[8161671,9608345]}[n.theme];this.scene.background=new q(r[0]),this.scene.fog=new Mn(r[1],n.theme===`jungle`?.018:.012),this.camera.position.set(0,1.72,47),this.lights(),this.map(),this.initWeather();for(let e of n.flags)this.objective(e.id,e.x,e.z,e.radius);if(n.rule===`demolition`)for(let e of n.flags)this.depot(e.id,e.x,e.z);this.resetModeState(),this.fixedMachineGuns(),this.supply(4,45),this.squadMarker.visible=!1,this.squadMarker.renderOrder=5,this.scene.add(this.squadMarker),this.mortarMarker.rotation.x=-Math.PI/2,this.mortarMarker.visible=!1,this.mortarMarker.renderOrder=6,this.scene.add(this.mortarMarker),this.gun(),this.forces(),this.tank(`ally`),this.tank(`enemy`),this.transport(`ally`),this.transport(`enemy`),this.emplacement(`ally`,`at`,-5.5,27),this.emplacement(`enemy`,`at`,5.5,-27),this.emplacement(`ally`,`aa`,6,43),this.emplacement(`enemy`,`aa`,-6,-43),this.plane(`ally`),this.plane(`enemy`),this.input(),this.resize(),this.loop(),this.expandVehicleForces(),addEventListener(`resize`,()=>this.resize())}expandVehicleForces(){for(let e of[`ally`,`enemy`]){for(;this.tanks.filter(t=>t.team===e).length<3;)this.tank(e);for(;this.planes.filter(t=>t.team===e).length<2;)this.plane(e)}}fixedMachineGuns(){this.campaign.flags.forEach((e,t)=>{let n=this.openPlacement(e.x+(t%2?-6:6),e.z+(t%3-1)*3,1.35),r=this.createMachineGun(n,t%2?Math.PI:0,!1);r.root.position.y=n.y+1,this.machineGuns.push(r)})}start(){this.active=!0,this.dead=!0}configureBattle(e){if(this.active)return;let t={standard:[11,330],reinforced:[16,430],epic:[22,540]}[e.size];this.maxTickets=t[1],this.resetTickets();for(let e of[`ally`,`enemy`]){let n=this.bots.filter(t=>t.team===e);for(let e of n.slice(t[0]))this.disposeGroup(e.root),this.bots.splice(this.bots.indexOf(e),1);for(let r=n.length;r<t[0];r++)this.bot(e,-7+r%6*2.8,(e===`ally`?39:-34)+(e===`ally`?1:-1)*Math.floor(r/6)*3.5)}let n={recruit:[.72,1.24,.78],veteran:[1,1,1],elite:[1.22,.82,1.18]}[e.difficulty];[this.enemyAccuracy,this.enemyFireRate,this.enemyDamage]=n}setPaused(e){!this.active||this.matchOver||(e&&(this.releaseGrenadeCook(),this.interruptBandage(),this.clearSupplyAction(),this.clearBuildAction(`建造已取消`)),this.paused=e,this.firing=!1,this.aiming=!1,this.events.aim(!1),e||this.clock.getDelta())}configure(e){this.sensitivity=V.clamp(e.sensitivity,7e-4,.005),this.audio.setVolume(e.volume);let t=e.quality===`low`?1:e.quality===`medium`?Math.min(devicePixelRatio,1.5):Math.min(devicePixelRatio,2);this.renderer.setPixelRatio(t),this.renderer.shadowMap.enabled=e.quality!==`low`,this.renderer.toneMappingExposure=e.quality===`low`?1:.95,this.resize()}unlockAudio(){this.audio.unlock({rain:this.campaign.weather.includes(`雨`),birds:![`ruin`,`alpine`].includes(this.campaign.theme)})}respawn(e=0,t=`base`){if(this.matchOver||!this.dead||this.tickets[0]<=0)return;this.clearGrenadeCook(),this.clearBandage(),this.clearSupplyAction(),this.clearBuildAction(),this.playerTransport&&(this.playerTransport.playerDriven=!1,this.playerTransport=void 0,this.playerTransportPassenger=!1,this.playerTransportSeat=-1),this.playerPlane&&=(this.playerPlane.playerDriven=!1,void 0),this.parachuting=!1,this.parachute&&=(this.disposeGroup(this.parachute),void 0),this.playerEmplacement&&(this.playerEmplacement.occupied=!1),this.deathSceneToken++,this.playerTank=void 0,this.playerMortar=void 0,this.playerEmplacement=void 0,this.playerMG=void 0,this.playerLadder=void 0,this.groundLevel=0,this.mortarMarker.visible=!1,this.weapon.visible=!0,this.stance=`stand`,this.stamina=1,this.jumpHeight=0,this.jumpVelocity=0,this.landingKick=0,this.braced=!1,this.canBrace=!1,this.holdingBreath=!1,this.breathExhaustedUntil=0,this.selectedLoadout=this.battleLoadouts[e]??this.battleLoadouts[0],this.weaponSlot=`primary`,this.primaryAmmo=[this.selectedLoadout.magazine,this.selectedLoadout.reserve],this.sidearmAmmo=[Ml.magazine,Ml.reserve],this.dead=!1,this.active=!0,this.hp=100,this.lastDamageAt=-99,[this.mag,this.reserve]=this.primaryAmmo,this.grenades=this.selectedLoadout.grenades,this.antiTankGrenades=this.selectedLoadout.antiTankGrenades??0,this.grenadeMode=`frag`,this.events.grenadeMode(this.grenadeMode,this.antiTankGrenades),this.smokeGrenades=1,this.suppression=0,this.events.suppression(0),this.aid=this.selectedLoadout.aid,this.medkitAvailable=this.selectedLoadout.id===`medic`,this.buildCharges=this.selectedLoadout.id===`engineer`?6:0,this.buildKind=`sandbag`,this.mortarAmmo=this.selectedLoadout.id===`mortar`?this.mortar?.ammo??16:0,this.loading=!1,this.aiming=!1,this.buildWeapon();let n=this.objectives.find(e=>e.id===t&&e.owner===`ally`&&this.spawnIsSafe(e.position,`ally`))??this.objectives.filter(e=>e.owner===`ally`&&this.spawnIsSafe(e.position,`ally`)).sort((e,t)=>t.position.z-e.position.z)[0],r=n?.position.x??0,i=(n?.position.z??42)+6;if(this.groundLevel=this.terrainHeight(r,i),this.camera.position.set(r,this.groundLevel+1.72,i),this.pitch=-.04,this.recoil=0,this.resetCameraView(),this.events.health(this.hp,!1),this.events.vehicle(!1,0,!1),this.events.tankSight(!1,!1,!1),this.events.emplacementLead(),this.events.movement(this.stamina,this.stance),this.events.loadout(this.activeLoadout()),this.events.ammo(this.mag,this.reserve,!1),this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,``),t===`vehicle-tank`){let e=this.tanks.find(e=>e.team===`ally`&&e.alive&&!e.playerDriven);e&&this.enterTank(e)}if(t===`vehicle-transport`){let e=this.transports.find(e=>e.team===`ally`&&e.alive&&!e.playerDriven);e&&this.enterTransport(e)}if(t===`vehicle-plane`){let e=this.planes.find(e=>e.team===`ally`&&e.alive&&!e.playerDriven);e&&this.enterPlane(e)}this.canvas.requestPointerLock()}restart(){this.clearGrenadeCook(),this.clearBandage(),this.clearSupplyAction(),this.clearBuildAction(),this.playerTransport&&(this.playerTransport.playerDriven=!1,this.playerTransport=void 0,this.playerTransportPassenger=!1,this.playerTransportSeat=-1),this.playerPlane&&=(this.playerPlane.playerDriven=!1,void 0),this.parachuting=!1,this.parachute&&=(this.disposeGroup(this.parachute),void 0),this.deathSceneToken++,this.kills=0,this.deaths=0,this.objectiveScore=0,this.matchOver=!1,this.paused=!1,this.dead=!0,this.deathHeat.length=0;for(let e of this.artilleryShells)this.scene.remove(e.marker),e.marker.geometry.dispose(),e.marker.material.dispose();this.artilleryShells.length=0,this.nextArtilleryAt=performance.now()/1e3+12;for(let e of this.craters)this.scene.remove(e),e.geometry.dispose(),e.material.dispose();this.craters.length=0;for(let e of this.casings)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.casings.length=0;for(let e of this.medkits)this.scene.remove(e.root),e.root.traverse(e=>{e instanceof Y&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))});this.medkits.length=0;for(let e of this.cannonShells)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.cannonShells.length=0;for(let e of this.planeWrecks)if(this.disposeWreck(e),e.collider){let t=this.vehicleColliders.indexOf(e.collider);t>=0&&this.vehicleColliders.splice(t,1)}this.planeWrecks.length=0;for(let e of this.bailedPilots)e.bot?(e.chute.removeFromParent(),this.disposeGroup(e.chute),e.bot.chuting=!1):this.disposeGroup(e.root);this.bailedPilots.length=0;for(let e of this.fieldStructures)this.clearRubble(e.rubble),e.damageStage=0;for(let e of this.urbanBuildings)this.clearRubble(e.rubble),e.damageStage=0;for(let e of this.fieldStructures)e.hp=360,e.destroyed=!1,e.body.position.set(0,1.3,0),e.body.scale.set(1,1,1),e.roof.position.set(0,3.25,0),e.roof.rotation.set(0,Math.PI/4,0),e.roof.scale.set(1,1,1.15),e.root.children.forEach(e=>e.visible=!0),this.colliders.includes(e.collider)||this.colliders.push(e.collider),this.vehicleColliders.includes(e.collider)||this.vehicleColliders.push(e.collider),this.coverMeshes.includes(e.body)||this.coverMeshes.push(e.body),this.coverMeshes.includes(e.roof)||this.coverMeshes.push(e.roof);for(let e of this.urbanBuildings){e.hp=900,e.destroyed=!1,e.body.position.y=3.2+(e.height-3.2)/2,e.body.scale.set(1,1,1),e.body.rotation.set(0,0,0),e.details.forEach(e=>{e.visible=!0,e instanceof Y&&!this.coverMeshes.includes(e)&&this.coverMeshes.push(e)}),this.coverMeshes.includes(e.body)||this.coverMeshes.push(e.body);for(let t of e.colliders)this.colliders.includes(t)||this.colliders.push(t),this.vehicleColliders.includes(t)||this.vehicleColliders.push(t);e.ladder&&!this.ladders.includes(e.ladder)&&this.ladders.push(e.ladder),e.platform&&!this.platforms.includes(e.platform)&&this.platforms.push(e.platform)}this.constructionRisers.length=0;for(let e of this.fortifications){for(let t of e.meshes){this.scene.remove(t),t.geometry.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach(e=>e.dispose());let e=this.coverMeshes.indexOf(t);e>=0&&this.coverMeshes.splice(e,1)}for(let t of e.colliders){let e=this.colliders.indexOf(t);e>=0&&this.colliders.splice(e,1)}}this.fortifications.length=0,this.mortar&&(this.disposeGroup(this.mortar.root),this.mortar=void 0,this.playerMortar=void 0,this.mortarMarker.visible=!1);for(let e=this.machineGuns.length-1;e>=0;e--){let t=this.machineGuns[e];t.deployable?(this.disposeGroup(t.root),this.machineGuns.splice(e,1)):(t.operator&&(t.operator.machineGun=void 0),t.operator=void 0,t.operatorUntil=0,t.occupied=!1,t.ammo=250,t.heat=0,t.nextShot=0)}this.playerMG=void 0,this.resetModeState();let e=performance.now()/1e3;this.reinforcementWaveAt={ally:e+8,enemy:e+8};for(let t of this.bots)t.kills=0,t.deaths=0,t.objectiveScore=0,this.reinforce(t,e);for(let t of this.tanks)this.reinforceTank(t,e);for(let t of this.transports)this.reinforceTransport(t,e);for(let t of this.planes)this.reinforcePlane(t,e);for(let t of this.emplacements)t.alive=!0,t.occupied=!1,t.hp=t.kind===`aa`?180:240,t.root.rotation.z=0,t.nextShot=e+2;this.playerEmplacement=void 0,this.active=!0}surfaceTexture(e){let n=this.textureCache.get(e);if(n)return n;let r=document.createElement(`canvas`);r.width=r.height=64;let i=r.getContext(`2d`),a=new q(e),o=a.clone().multiplyScalar(.68),s=a.clone().lerp(new q(16777215),.16);i.fillStyle=`#${a.getHexString()}`,i.fillRect(0,0,64,64);let c=(e^2654435769)>>>0,l=()=>(c=c*1664525+1013904223>>>0,c/4294967296);for(let e=0;e<210;e++){i.globalAlpha=.06+l()*.12,i.fillStyle=l()<.72?`#${o.getHexString()}`:`#${s.getHexString()}`;let e=.35+l()*1.35;i.fillRect(l()*64,l()*64,e,e)}i.globalAlpha=.09,i.strokeStyle=`#${o.getHexString()}`,i.lineWidth=.45;for(let e=0;e<7;e++){let e=l()*64;i.beginPath(),i.moveTo(0,e),i.bezierCurveTo(18,e+(l()-.5)*4,44,e+(l()-.5)*4,64,e+(l()-.5)*3),i.stroke()}i.globalAlpha=1;let u=new Di(r);return u.colorSpace=ze,u.wrapS=u.wrapT=t,u.repeat.set(2,2),u.anisotropy=Math.min(4,this.renderer?.capabilities.getMaxAnisotropy?.()??1),this.textureCache.set(e,u),u}mat(e,t=.88){return t>=.62?new $i({color:16777215,map:this.surfaceTexture(e),roughness:t}):new $i({color:e,roughness:t,metalness:t<.4?.18:0})}box(e,t,n,r=this.scene){let i=new Y(new ji(...e),this.mat(n));return i.position.set(...t),i.castShadow=i.receiveShadow=!0,r.add(i),i}disposeGroup(e){this.scene.remove(e),e.traverse(e=>{e instanceof Y&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))})}clearRubble(e){for(let t of e){let e=this.coverMeshes.indexOf(t);e>=0&&this.coverMeshes.splice(e,1),t.removeFromParent(),t.geometry.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach(e=>e.dispose())}e.length=0}cover(e,t,n){let r=this.box(e,t,n);return this.colliders.push({minX:t[0]-e[0]/2,maxX:t[0]+e[0]/2,minZ:t[2]-e[2]/2,maxZ:t[2]+e[2]/2}),this.coverMeshes.push(r),r}battlefieldHalfWidth(){return 28}openPlacement(e,t,n){for(let r=0;r<=10;r++){let i=r*.85,a=Math.max(1,r*8);for(let r=0;r<a;r++){let o=r/a*Math.PI*2,s=e+Math.cos(o)*i,c=t+Math.sin(o)*i;if(!(this.machineGuns.some(e=>e.root.position.distanceToSquared(new U(s,e.root.position.y,c))<(n+1.2)**2)||this.emplacements.some(e=>e.root.position.distanceToSquared(new U(s,e.root.position.y,c))<(n+1.8)**2))&&!this.navBlocked(s,c,n))return new U(s,this.terrainHeight(s,c),c)}}return new U(e,this.terrainHeight(e,t),t)}moveWithCollision(e,t,n,r){let i=(e,t)=>this.colliders.some(n=>e+r>n.minX&&e-r<n.maxX&&t+r>n.minZ&&t-r<n.maxZ),a=this.battlefieldHalfWidth(),o=e.x,s=e.z,c=V.clamp(e.x+t,-a,a);i(c,e.z)||(e.x=c);let l=V.clamp(e.z+n,-58,58);return i(e.x,l)||(e.z=l),Math.abs(e.x-o)+Math.abs(e.z-s)>.001}moveTankWithCollision(e,t,n){let r=this.tanks.find(t=>t.alive&&t.root.position===e),i=this.transports.find(t=>t.alive&&t.root.position===e),a=r??i,o=performance.now()/1e3;r&&o<r.ramSlowUntil&&(t*=.58,n*=.58);let s=a?.root.rotation.y??0,c=1.15,l=i?2.45:1.8,u=Math.abs(Math.cos(s))*c+Math.abs(Math.sin(s))*l,d=Math.abs(Math.sin(s))*c+Math.abs(Math.cos(s))*l,f=(e,t,n)=>t+u>e.minX&&t-u<e.maxX&&n+d>e.minZ&&n-d<e.maxZ;if(r&&Math.hypot(t,n)>.028){let i=this.fieldStructures.find(r=>!r.destroyed&&f(r.collider,e.x+t,e.z+n));if(i){this.damageStructure(i,999),r.ramSlowUntil=o+.65,r.hp=Math.max(1,r.hp-6),r.tracks=Math.max(0,r.tracks-4),this.status=`${r.name}撞塌建筑`,this.statusUntil=o+1.5;let e=this.soundAt(i.root.position);this.audio.explosion(e.volume*.55,e.pan)}}let p=[...this.vehicleColliders,...this.fortifications.filter(e=>e.kind===`hedgehog`).flatMap(e=>e.colliders)],m=(e,t)=>p.some(n=>f(n,e,t)),h=this.battlefieldHalfWidth()-Math.max(u,1.8),g=59-Math.max(d,1.8),_=Math.max(1,Math.ceil(Math.hypot(t,n)/.12)),v=t/_,y=n/_,b=e.clone();for(let t=0;t<_;t++){let t=V.clamp(e.x+v,-h,h);m(t,e.z)||(e.x=t);let n=V.clamp(e.z+y,-g,g);m(e.x,n)||(e.z=n)}e.y=this.terrainHeight(e.x,e.z);let x=e.clone().sub(b);if(r){let e=new U(0,0,-1).applyQuaternion(r.root.quaternion),t=x.dot(e)/.31;for(let e of r.wheels)e.rotateY(t);this.resolveTankInteractions(r,x)}return x.lengthSq()>1e-6}moveVehicleToward(e,t,n,r){let i=t.clone().sub(e).setY(0);if(!i.lengthSq()||(i.normalize(),this.moveTankWithCollision(e,i.x*n,i.z*n)))return!0;let a=new U(-i.z*r,0,i.x*r);return this.moveTankWithCollision(e,a.x*n,a.z*n)?!0:this.moveTankWithCollision(e,-a.x*n,-a.z*n)}resolveTankInteractions(e,t){let n=t.lengthSq()>35e-5,r=t.lengthSq()?t.clone().normalize():new U(0,0,-1).applyQuaternion(e.root.quaternion);for(let t of this.bots){if(!t.alive||t.riding)continue;let i=t.root.position.clone().sub(e.root.position),a=i.clone().applyQuaternion(e.root.quaternion.clone().invert());if(Math.abs(a.x)>1.55||Math.abs(a.z)>2.6)continue;if(n&&r.dot(i.setY(0).normalize())>.15&&t.team!==e.team){this.playerTank===e?this.kill(t,!1,r.clone().multiplyScalar(2.2)):(this.down(t,r.clone().multiplyScalar(2.2)),this.events.combatKill(e.name,e.team,t.name,t.team));continue}let o=new U((a.x>=0?1:-1)*.22,0,0).applyQuaternion(e.root.quaternion);this.moveWithCollision(t.root.position,o.x,o.z,.34)}e.team===`enemy`&&n&&!this.dead&&!this.playerTank&&e.root.position.distanceToSquared(this.camera.position)<2.2**2&&this.hurtPlayer(320,e.root.position,`${e.name} · 履带碾压`);for(let t of this.tanks){if(t===e||!t.alive)continue;let r=e.root.position.clone().sub(t.root.position).length();r>=3.1||r<.001||n&&(e.stalledFor=Math.max(e.stalledFor,.35),t.stalledFor=Math.max(t.stalledFor,.35))}if(n)for(let t=this.fortifications.length-1;t>=0;t--){let n=this.fortifications[t];if(!(n.kind!==`wire`||n.center.distanceToSquared(e.root.position)>=2.8**2)){this.fortifications.splice(t,1);for(let e of n.colliders){let t=this.colliders.indexOf(e);t>=0&&this.colliders.splice(t,1)}for(let e of n.meshes){let t=e.position.clone(),n=this.coverMeshes.indexOf(e);n>=0&&this.coverMeshes.splice(n,1),this.scene.remove(e),e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose());for(let e=0;e<2;e++)this.particle(t,new U((Math.random()-.5)*2,.4+Math.random(),(Math.random()-.5)*2),6117965,.055,.45,2.5)}this.status=`${e.name}碾毁铁丝网`,this.statusUntil=performance.now()/1e3+1.4}}}navBlocked(e,t,n=.4){return Math.abs(e)>this.battlefieldHalfWidth()-n||Math.abs(t)>59-n||this.colliders.some(r=>e+n>r.minX&&e-n<r.maxX&&t+n>r.minZ&&t-n<r.maxZ)}navLineClear(e,t){let n=e.distanceTo(t),r=Math.ceil(n/.55);for(let n=1;n<r;n++){let i=n/r;if(this.navBlocked(V.lerp(e.x,t.x,i),V.lerp(e.y,t.y,i)))return!1}return!0}findBotPath(e,t){let n=1.5,r=this.battlefieldHalfWidth(),i=Math.floor(r*2/n)+1,a=i*79,o=(e,t)=>[V.clamp(Math.round((e+r)/n),0,i-1),V.clamp(Math.round((t+59)/n),0,78)],s=e=>new H(e%i*n-r,Math.floor(e/i)*n-59),c=e=>{if(!this.navBlocked(s(e).x,s(e).y))return e;let t=e%i,n=Math.floor(e/i);for(let e=1;e<8;e++)for(let r=-e;r<=e;r++)for(let a=-e;a<=e;a++){if(Math.max(Math.abs(a),Math.abs(r))!==e)continue;let o=t+a,c=n+r;if(o<0||o>=i||c<0||c>=79)continue;let l=c*i+o,u=s(l);if(!this.navBlocked(u.x,u.y))return l}return e},[l,u]=o(e.x,e.y),[d,f]=o(t.x,t.y),p=c(u*i+l),m=c(f*i+d),h=new Float32Array(a);h.fill(1/0),h[p]=0;let g=new Int32Array(a);g.fill(-1);let _=[p],v=new Set(_),y=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]],b=0;for(;_.length&&b++<a*5;){let e=0,t=1/0;for(let n=0;n<_.length;n++){let r=_[n],i=s(r),a=h[r]+i.distanceTo(s(m));a<t&&(t=a,e=n)}let n=_.splice(e,1)[0];if(v.delete(n),n===m)break;let r=n%i,a=Math.floor(n/i);for(let[e,t,o]of y){let c=r+e,l=a+t;if(c<0||c>=i||l<0||l>=79)continue;let u=l*i+c,d=s(u);if(this.navBlocked(d.x,d.y))continue;if(e&&t){let e=s(a*i+c),t=s(l*i+r);if(this.navBlocked(e.x,e.y)||this.navBlocked(t.x,t.y))continue}let f=h[n]+o;f>=h[u]||(h[u]=f,g[u]=n,v.has(u)||(_.push(u),v.add(u)))}}if(m!==p&&g[m]<0)return[];let x=[t.clone()];for(let e=m;e!==p&&e>=0;e=g[e])x.push(s(e));x.reverse();let S=[],C=e,w=0;for(;w<x.length;){let e=w;for(let t=w;t<Math.min(x.length,w+14);t++)this.navLineClear(C,x[t])&&(e=t);S.push(x[e]),C=x[e],w=e+1}return S}botNavDirection(e,t,n){let r=new H(e.root.position.x,e.root.position.z);if(r.distanceToSquared(t)<16||this.navLineClear(r,t))return e.navPath=void 0,e.navTarget=void 0,t.sub(r);(!e.navTarget||e.navTarget.distanceToSquared(t)>4||!e.navPath?.length||n>=(e.navRefreshAt??0))&&(e.navPath=this.findBotPath(r,t),e.navTarget=t.clone(),e.navIndex=0,e.navRefreshAt=n+1.4+Math.random()*.5);let i=e.navPath?.[e.navIndex??0];return i?r.distanceToSquared(i)<.75**2&&(e.navIndex??0)<e.navPath.length-1?(e.navIndex=(e.navIndex??0)+1,e.navPath[e.navIndex].clone().sub(r)):i.clone().sub(r):t.sub(r)}moveBot(e,t,n,r,i){if(e.vaultUntil)return!0;let a=performance.now()/1e3,o=new H(e.root.position.x+t,e.root.position.z+n),s=this.botMotion.get(e)??{position:new H(e.root.position.x,e.root.position.z),sampledAt:a,stalledFor:0};if(a-s.sampledAt>=.7){let t=new H(e.root.position.x,e.root.position.z);s.stalledFor=t.distanceTo(s.position)<.16?s.stalledFor+a-s.sampledAt:0,s.position.copy(t),s.sampledAt=a}if(this.botMotion.set(e,s),s.stalledFor>1.35){let t=[];for(let n of[1,1.6,2.3,3])for(let r=0;r<16;r++){let i=r/16*Math.PI*2,a=new U(e.root.position.x+Math.cos(i)*n,0,e.root.position.z+Math.sin(i)*n);this.navBlocked(a.x,a.z,.38)||t.push(a)}let n=t.sort((e,t)=>new H(e.x,e.z).distanceToSquared(o)-new H(t.x,t.z).distanceToSquared(o))[0];if(n)return n.y=this.terrainHeight(n.x,n.z),e.vaultFrom=e.root.position.clone(),e.vaultTo=n,e.vaultStartedAt=a,e.vaultUntil=a+.5,e.navPath=void 0,e.navTarget=void 0,e.navRefreshAt=0,s.stalledFor=0,!0}let c=this.botNavDirection(e,o,a);if(!c.lengthSq())return!1;c.normalize();let l=new H;for(let t of this.bots){if(t===e||!t.alive||t.riding)continue;let n=e.root.position.x-t.root.position.x,r=e.root.position.z-t.root.position.z,i=n*n+r*r;i>.01&&i<1.45**2&&l.add(new H(n,r).multiplyScalar((1.45-Math.sqrt(i))/i))}c.addScaledVector(l,.38).normalize();let u=r*i;if(this.moveWithCollision(e.root.position,c.x*u,c.y*u,.34))return e.stuckFor=0,e.root.position.y=this.terrainHeight(e.root.position.x,e.root.position.z),!0;let d=e.root.position.clone().add(new U(c.x*.72,0,c.y*.72)),f=this.colliders.find(e=>d.x>e.minX-.34&&d.x<e.maxX+.34&&d.z>e.minZ-.34&&d.z<e.maxZ+.34);if(f&&this.fortifications.some(e=>(e.kind===`sandbag`||e.kind===`wire`)&&e.colliders.includes(f))){let t=e.root.position.clone().add(new U(c.x*1.65,0,c.y*1.65));if(!this.navBlocked(t.x,t.z,.34)){let n=performance.now()/1e3;return t.y=this.terrainHeight(t.x,t.z),e.vaultFrom=e.root.position.clone(),e.vaultTo=t,e.vaultStartedAt=n,e.vaultUntil=n+.48,e.stuckFor=0,e.navPath=void 0,!0}}let p=Math.atan2(c.y,c.x),m=[e.strafe,-e.strafe,e.strafe*2,-e.strafe*2,3,-3];for(let t of m){let n=p+t*Math.PI/4,r=new H(Math.cos(n),Math.sin(n));if(this.moveWithCollision(e.root.position,r.x*u,r.y*u,.34)){if(e.stuckFor=(e.stuckFor??0)+i,e.root.position.y=this.terrainHeight(e.root.position.x,e.root.position.z),e.stuckFor>.9)for(let t=0;t<12;t++){let n=p+t*Math.PI/6,r=e.root.position.clone().add(new U(Math.cos(n)*1.25,0,Math.sin(n)*1.25));if(this.navBlocked(r.x,r.z,.34))continue;let i=performance.now()/1e3;r.y=this.terrainHeight(r.x,r.z),e.vaultFrom=e.root.position.clone(),e.vaultTo=r,e.vaultStartedAt=i,e.vaultUntil=i+.42,e.navPath=void 0,e.navRefreshAt=0,e.stuckFor=0;break}return!0}}return e.stuckFor=(e.stuckFor??0)+i,e.stuckFor>.45&&(e.navPath=void 0,e.navRefreshAt=0,e.strafe*=-1),!1}updateBotVault(e,t){if(!e.vaultUntil||!e.vaultFrom||!e.vaultTo||!e.vaultStartedAt)return!1;let n=e.vaultUntil-e.vaultStartedAt,r=V.clamp((t-e.vaultStartedAt)/n,0,1);return e.root.position.lerpVectors(e.vaultFrom,e.vaultTo,r),e.root.position.y+=Math.sin(r*Math.PI)*.82,e.root.scale.y=1,e.legs[0].rotation.x=-1.05+r*1.8,e.legs[1].rotation.x=.75-r*1.8,e.weapon.rotation.z=.32,e.muzzle.visible=!1,r<1?!0:(e.vaultFrom=void 0,e.vaultTo=void 0,e.vaultStartedAt=void 0,e.vaultUntil=void 0,e.weapon.rotation.z=0,e.legs.forEach(e=>e.rotation.x=0),!1)}lights(){let e=this.campaign.weather.includes(`雨`),t=e||this.campaign.weather===`阴霾`;this.hemi.intensity=t?1.7:1.5,this.sun.intensity=t?e?2:1.7:3.1,this.scene.add(this.hemi),this.sun.position.set(-38,65,25),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-55,right:55,top:55,bottom:-55}),this.scene.add(this.sun)}terrainHeight(e,t){let n=this.campaign.theme;if(n===`delta`||n===`ruin`||n===`canal`)return 0;let r=V.smoothstep(60-Math.abs(t),0,15),i=V.lerp(.35,1,V.smoothstep(Math.abs(e),5,23)),a=Math.sin(e*.115+t*.035)+Math.cos(t*.09-e*.045)*.72;return n===`loess`?Math.max(0,Math.round((.65+a*.38)*2)/2)*r*i:n===`alpine`?Math.max(0,1.35+a*.82+Math.sin(t*.035)*.5)*r*i:n===`jungle`?Math.max(0,.65+a*.42)*r*i:Math.max(0,.45+a*.3)*r*i}map(){let e=this.campaign.theme,t={delta:[5264716,3158833,6840148],ruin:[5855057,3750198,6445908],canal:[6907475,4605247,7826264],green:[5136456,3423281,6907732],loess:[8416334,5851964,8548183],jungle:[4020290,2701358,5595981],alpine:[5858397,3752253,6776671]}[e],n=e===`delta`||e===`ruin`||e===`canal`;if(n)this.box([110,.3,130],[0,-.18,0],t[0]);else{let e=new zi(110,130,44,52),n=e.getAttribute(`position`);for(let e=0;e<n.count;e++)n.setZ(e,this.terrainHeight(n.getX(e),-n.getY(e)));n.needsUpdate=!0,e.computeVertexNormals();let r=new Y(e,this.mat(t[0]));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,this.scene.add(r)}if(this.box([15,.06,130],[0,.01,0],t[1]),this.box([110,.06,10],[0,.02,-18],t[1]),n?this.urbanMap(t):this.naturalMap(e,t),this.campaignLandmarks(),e===`delta`||e===`canal`||e===`loess`)for(let e of[-2.35,2.35]){this.box([.09,.06,130],[e,.08,0],7830903);for(let t=-60;t<61;t+=2.8)this.box([1.4,.04,.14],[e,.055,t],4141093)}for(let e of[32,2,-33])for(let t=0;t<2;t++)for(let n=0;n<(t?5:7);n++)this.cover([1.45,.42,.55],[(n-(t?2:3))*1.1,.23+t*.42,e],t?6641733:7693901);for(let t=0;t<28;t++)this.box([.4+Math.random(),.15+Math.random()*.6,.4+Math.random()],[-7+Math.random()*14,.1,-55+Math.random()*110],e===`green`||e===`jungle`?3620911:4931637)}urbanMap(e){for(let t of[-1,1]){this.box([3.6,.24,130],[t*9.2,.1,0],7829102);for(let n=0;n<9;n++){let r=new K,i=-54+n*14,a=10+n%3*1.5,o=8+n%4*2.1;r.position.set(t*(15+n%2*2),0,i),this.scene.add(r);let s=n%2?e[2]:e[2]+525828,c=10.5,l=3.2,u=o-l,d=this.box([a,u,c],[0,l+u/2,0],s,r),f=[],p=[],m=(e,t)=>{let n=this.box(e,t,s,r);f.push(n);let a={minX:r.position.x+t[0]-e[0]/2,maxX:r.position.x+t[0]+e[0]/2,minZ:i+t[2]-e[2]/2,maxZ:i+t[2]+e[2]/2};return p.push(a),this.colliders.push(a),this.vehicleColliders.push(a),n},h=-t*a/2,g=t*a/2,_=2.1,v=(c-_)/2;m([.24,l,v],[h,l/2,-6.300000000000001/2]),m([.24,l,v],[h,l/2,6.300000000000001/2]),m([.24,.75,_],[h,l-.375,0]),m([.24,l,c],[g,l/2,0]),m([a,l,.24],[0,l/2,-10.5/2]),m([a,l,.24],[0,l/2,c/2]);let y=-t*(a/2+.03);for(let e=1;e<Math.floor(o/3);e++)for(let t of[-3,0,3])f.push(this.box([.08,1.15,1.25],[y,2+e*2.6,t],2107432,r));f.push(this.box([.1,.7,5.2],[y-t*.04,3.55,0],n%3?5913906:6444600,r)),this.box([1.4,.04,1.8],[h+t*.72,.025,0],4472373,r);let b,x;if(n%3==0){let e=h-t*.14,n=3.65;for(let t of[-.34,.34])f.push(this.box([.07,o+.35,.07],[e,(o+.35)/2,n+t],5521709,r));for(let t=.35;t<=o+.15;t+=.38)f.push(this.box([.07,.055,.78],[e,t,n],6967606,r));b={x:r.position.x+e,z:i+n,y0:.65,y1:o+1.82,face:t*Math.PI/2},x={minX:r.position.x-a/2+.25,maxX:r.position.x+a/2-.25,minZ:i-c/2+.25,maxZ:i+c/2-.25,y:o+.1},this.ladders.push(b),this.platforms.push(x);for(let e of[-1,1])f.push(this.box([a,.08,.08],[0,o+.82,e*(c/2-.18)],5259311,r)),f.push(this.box([.08,.08,c],[e*(a/2-.18),o+.82,0],5259311,r))}let S={root:r,body:d,details:f,colliders:p,ladder:b,platform:x,hp:900,damageStage:0,destroyed:!1,height:o,rubble:[]};for(let e of[d,...f])e.userData.urbanBuilding=S,this.coverMeshes.push(e);this.urbanBuildings.push(S)}}let t=new K;t.position.set(2.2,0,-7),t.rotation.y=.12,this.scene.add(t);let n=this.box([3.1,2.8,7.5],[0,1.5,0],4609096,t);this.box([3.2,.18,7.7],[0,3,0],2436136,t),this.colliders.push({minX:.2,maxX:4.2,minZ:-11.1,maxZ:-2.9}),this.coverMeshes.push(n)}bridgeCanal(e,t=3490634){let n=this.terrainHeight(0,e),r=this.box([55,.06,7.5],[0,n+.015,e],t).material;r.roughness=.22,r.metalness=.12,this.box([6.2,.28,9],[0,n+.14,e],7827556);for(let t of[-1,1]){this.box([.25,.75,9],[t*3.05,n+.48,e],6511955);for(let r=-3.5;r<=3.5;r+=1.75)this.box([.38,1.05,.38],[t*3.05,n+.55,e+r],5065026)}}windmill(e,t){let n=new K;n.position.set(e,0,t),this.scene.add(n);let r=new Y(new X(1.45,2.1,5.4,8),this.mat(7957848));r.position.y=2.7,n.add(r);let i=new Y(new Pi(1.75,1.45,8),this.mat(4209202));i.position.y=6.1,n.add(i);let a=new K;a.position.set(0,4.7,-1.55),n.add(a);for(let e=0;e<4;e++){let t=this.box([.18,4.5,.12],[0,1.85,0],5587500,a);t.rotation.z=e*Math.PI/2}a.rotation.z=.35,this.colliders.push({minX:e-1.8,maxX:e+1.8,minZ:t-1.8,maxZ:t+1.8}),this.vehicleColliders.push(this.colliders[this.colliders.length-1]),this.coverMeshes.push(r,i),n.position.y=this.terrainHeight(e,t)}railLandmark(e,t){let n=this.box([7.5,2.8,4.2],[e,1.4,t],7824975),r=this.box([8.2,.35,5],[e,3,t],4078388);r.rotation.z=.05,this.coverMeshes.push(n,r);let i={minX:e-3.75,maxX:e+3.75,minZ:t-2.1,maxZ:t+2.1};this.colliders.push(i),this.vehicleColliders.push(i);let a=new K;a.position.set(e-10,.65,t-4),a.rotation.y=Math.PI/2,this.scene.add(a);let o=this.box([2.5,1.8,6],[0,.9,0],5786685,a);this.box([2.7,.18,6.2],[0,1.9,0],3487539,a);for(let e of[-2.1,2.1])for(let t of[-.85,.85]){let n=new Y(new X(.38,.38,.18,10),this.mat(2105888));n.position.set(t,-.35,e),n.rotation.z=Math.PI/2,a.add(n)}this.coverMeshes.push(o);let s=this.terrainHeight(e,t);n.position.y+=s,r.position.y+=s,a.position.y+=this.terrainHeight(e-10,t-4)}well(e,t){let n=new K;n.position.set(e,0,t),this.scene.add(n);let r=new Y(new Hi(1,.22,8,18),this.mat(7170140));r.position.y=.55,r.rotation.x=Math.PI/2,n.add(r);for(let e of[-1,1])this.box([.16,2.4,.16],[e*1.05,1.2,0],5126952,n);let i=new Y(new Pi(1.65,.85,4),this.mat(4931635));i.position.y=2.45,i.rotation.y=Math.PI/4,n.add(i),this.colliders.push({minX:e-1.2,maxX:e+1.2,minZ:t-1.2,maxZ:t+1.2}),this.coverMeshes.push(r,i),n.position.y=this.terrainHeight(e,t)}bunker(e,t,n=0){let r=new K;r.position.set(e,0,t),r.rotation.y=n,this.scene.add(r);let i=this.box([5.8,1.8,4.2],[0,.9,0],5527631,r),a=this.box([6.5,.55,4.8],[0,2,0],4540995,r);this.box([3.1,.55,.18],[0,1.25,-2.12],1645852,r);let o={minX:e-3,maxX:e+3,minZ:t-2.2,maxZ:t+2.2};this.colliders.push(o),this.vehicleColliders.push(o),this.coverMeshes.push(i,a),r.position.y=this.terrainHeight(e,t)}bambooGrove(e,t){for(let n=0;n<12;n++){let r=n*2.4,i=.6+n%4*.5,a=4.2+n%3,o=e+Math.sin(r)*i,s=t+Math.cos(r)*i,c=new Y(new X(.055,.08,a,6),this.mat(n%2?5599300:6914636));c.position.set(o,this.terrainHeight(o,s)+a/2,s),c.rotation.z=Math.sin(n)*.035,this.scene.add(c)}}farmField(e,t,n=9,r=7){let i=this.terrainHeight(e,t);this.box([n,.025,r],[e,i+.012,t],6707259);for(let a=-r/2+.6;a<r/2;a+=.7){let r=this.box([n-.5,.09,.16],[e,i+.07,t+a],8416069);r.receiveShadow=!0;for(let r=-n/2+.7;r<n/2;r+=1.1){let n=new Y(new Pi(.07,.62,5),this.mat(8093767));n.position.set(e+r,i+.36,t+a),this.scene.add(n)}}}caveDwelling(e,t,n=0){let r=new K;r.position.set(e,this.terrainHeight(e,t),t),r.rotation.y=n,this.scene.add(r);let i=this.box([6.2,3.1,4.8],[0,1.5,0],8415046,r);for(let e of[-1,1])this.box([2.1,2.35,.28],[e*2,1.15,-2.45],9335632,r);let a=new Y(new Hi(1.05,.27,7,16,Math.PI),this.mat(7494463));a.position.set(0,1.25,-2.6),a.rotation.z=Math.PI,r.add(a),this.box([1.65,1.8,.08],[0,.9,-2.48],2696479,r);let o={minX:e-3.1,maxX:e+3.1,minZ:t-2.4,maxZ:t+2.4};this.colliders.push(o),this.vehicleColliders.push(o),this.coverMeshes.push(i)}logCabin(e,t){let n=new K;n.position.set(e,this.terrainHeight(e,t),t),this.scene.add(n);let r=this.box([5.2,2.5,4.4],[0,1.25,0],5326129,n),i=new Y(new Pi(3.7,1.45,4),this.mat(3422773));i.position.y=3.2,i.rotation.y=Math.PI/4,i.scale.z=1.1,n.add(i);for(let e=.25;e<2.5;e+=.32)for(let t of[-1,1])this.box([5.35,.18,.18],[0,e,t*2.18],6640440,n);let a={minX:e-2.6,maxX:e+2.6,minZ:t-2.2,maxZ:t+2.2};this.colliders.push(a),this.vehicleColliders.push(a),this.coverMeshes.push(r,i)}cityGate(e){for(let t of[-1,1]){let n=this.cover([6.5,5.8,4.5],[t*7.8,2.9,e],6708048);this.box([7.1,.45,5.1],[t*7.8,5.95,e],3619126),this.coverMeshes.push(n)}this.box([9.2,1.1,1.1],[0,5.15,e],5984584)}campaignLandmarks(){if(this.campaign.id===`songhu`)this.bridgeCanal(-20),this.cityGate(25),this.wreckTruck(18,6,.3);else if(this.campaign.id===`nanjing`)this.cityGate(22),this.bunker(-20,-25,Math.PI),this.church(18,-5),this.wreckTruck(-19,5,-.2);else if(this.campaign.id===`taierzhuang`)this.bridgeCanal(24,3820107),this.railLandmark(17,-27),this.stoneWall(-21,6,-9,9);else if(this.campaign.id===`wuhan`)this.windmill(20,-10),this.well(-18,28),this.farmField(-19,-18),this.farmField(18,33,8,6),this.barn(19,13),this.stoneWall(-22,8,-10,12);else if(this.campaign.id===`baituan`){this.railLandmark(16,8),this.bunker(-19,-26),this.caveDwelling(-20,28),this.caveDwelling(20,-10,Math.PI),this.wreckTruck(-18,-5,.15);for(let e of[[-20,-37],[19,30],[-17,45]])this.deadTree(e[0],e[1])}else if(this.campaign.id===`changsha`)this.windmill(-20,26),this.well(18,-22),this.farmField(19,8),this.farmField(-18,-30,8,6),this.barn(-19,7),this.stoneWall(10,30,22,34);else if(this.campaign.id===`burma`){this.bridgeCanal(4,2506553);for(let e of[-38,-18,24,42])this.bambooGrove(e%3?20:-20,e);this.wreckTruck(18,-28,-.35),this.deadTree(-19,13,!0)}else this.campaign.id===`changde`?(this.cityGate(-24),this.bunker(20,26),this.church(-18,8),this.wreckTruck(18,-9,.25)):this.campaign.id===`xiangxi`&&(this.bunker(-19,-26,Math.PI),this.bunker(19,23),this.well(-18,4),this.logCabin(18,-8),this.logCabin(-19,38),this.deadTree(20,41,!0),this.stoneWall(-22,-4,-11,1));this.tent(-18,50,.1),this.tent(18,-50,Math.PI+.1)}fieldRoad(e,t,n,r,i,a){let o=n-e,s=r-t,c=Math.hypot(o,s),l=(e+n)/2,u=(t+r)/2,d=this.box([i,.035,c],[l,this.terrainHeight(l,u)+.025,u],a);d.rotation.y=Math.atan2(o,s)}fieldHut(e,t,n,r){let i=new K;i.position.set(e,this.terrainHeight(e,t),t),this.scene.add(i);let a=this.box([4.6,2.6,5.2],[0,1.3,0],n,i),o=new Y(new Pi(3.8,1.5,4),this.mat(r));o.position.y=3.25,o.rotation.y=Math.PI/4,o.scale.z=1.15,i.add(o),this.box([1.2,1.65,.08],[0,.83,-2.64],2698537,i);for(let e of[-1,1])this.box([.72,.72,.08],[e*1.45,1.45,-2.65],2437166,i);let s={minX:e-2.3,maxX:e+2.3,minZ:t-2.6,maxZ:t+2.6},c={root:i,body:a,roof:o,collider:s,hp:360,damageStage:0,destroyed:!1,rubble:[]};a.userData.structure=c,o.userData.structure=c,this.fieldStructures.push(c),this.colliders.push(s),this.vehicleColliders.push(s),this.coverMeshes.push(a,o)}church(e,t){let n=new K;n.position.set(e,this.terrainHeight(e,t),t),this.scene.add(n);let r=6775901,i=3421490,a=this.box([6.2,4.4,9],[0,2.2,0],r,n),o=this.box([3.1,7,3.2],[0,3.5,-5.1],r,n),s=new Y(new Pi(4.8,2.4,4),this.mat(i));s.position.y=5.6,s.rotation.y=Math.PI/4,s.scale.z=1.45,n.add(s);let c=new Y(new Pi(2.1,3.2,4),this.mat(i));c.position.set(0,8.6,-5.1),c.rotation.y=Math.PI/4,n.add(c),this.box([.14,1.6,.14],[0,10.65,-5.1],2566437,n),this.box([.9,.12,.12],[0,10.8,-5.1],2566437,n);for(let e of[-1,1]){let t=this.box([.9,1.8,.08],[e*1.7,2.5,-4.55],2503994,n);t.material=new $i({color:2702146,emissive:1516328,emissiveIntensity:.35})}let l={minX:e-3.2,maxX:e+3.2,minZ:t-6.7,maxZ:t+4.6};this.colliders.push(l),this.vehicleColliders.push(l),this.coverMeshes.push(a,o,s,c)}barn(e,t){let n=new K;n.position.set(e,this.terrainHeight(e,t),t),this.scene.add(n);let r=this.box([7.2,3.8,8.2],[0,1.9,0],6705466,n),i=new Y(new Pi(5.7,2.5,4),this.mat(4209200));i.position.y=5,i.rotation.y=Math.PI/4,i.scale.z=1.25,n.add(i),this.box([3.1,3.2,.1],[0,1.6,-4.15],3156516,n);for(let e of[-1,1])for(let t=.5;t<3.7;t+=.65)this.box([7.35,.12,.12],[0,t,e*4.1],8414276,n);let a={minX:e-3.6,maxX:e+3.6,minZ:t-4.1,maxZ:t+4.1};this.colliders.push(a),this.vehicleColliders.push(a),this.coverMeshes.push(r,i)}tent(e,t,n=0){let r=new K;r.position.set(e,this.terrainHeight(e,t),t),r.rotation.y=n,this.scene.add(r);for(let e of[-1,1]){let t=this.box([2.2,.08,4.2],[e*.78,1.05,0],e<0?7827547:7104597,r);t.rotation.z=e*-.72,this.coverMeshes.push(t)}let i={minX:e-1.65,maxX:e+1.65,minZ:t-2.15,maxZ:t+2.15};this.colliders.push(i)}wreckTruck(e,t,n=0){let r=new K;r.position.set(e,this.terrainHeight(e,t),t),r.rotation.y=n,r.rotation.z=.05,this.scene.add(r);let i=this.box([2.2,.55,5.4],[0,.75,0],3422518,r),a=this.box([2.1,1.7,1.8],[0,1.45,-1.75],4540739,r);this.box([1.65,.7,.06],[0,1.68,-2.68],2106917,r);for(let e of[-1,1])for(let t of[-1.65,1.55]){let n=new Y(new X(.5,.5,.32,10),this.mat(2105888,.34));n.position.set(e*1.12,.52,t),n.rotation.z=Math.PI/2,r.add(n)}let o={minX:e-1.35,maxX:e+1.35,minZ:t-2.8,maxZ:t+2.8};this.colliders.push(o),this.vehicleColliders.push(o),this.coverMeshes.push(i,a)}stoneWall(e,t,n,r){let i=n-e,a=r-t,o=Math.hypot(i,a),s=Math.ceil(o/4.8),c=Math.atan2(i,a);for(let i=0;i<s;i++){let a=(i+.5)/s,l=V.lerp(e,n,a),u=V.lerp(t,r,a),d=o/s+.12,f=this.box([.62,1.15,d],[l,this.terrainHeight(l,u)+.575,u],i%2?6907485:6118486);f.rotation.y=c,this.coverMeshes.push(f);let p=Math.abs(Math.sin(c))*d/2+.4,m=Math.abs(Math.cos(c))*d/2+.4;this.colliders.push({minX:l-p,maxX:l+p,minZ:u-m,maxZ:u+m})}}hedgerow(e,t,n,r){let i=n-e,a=r-t,o=Math.hypot(i,a),s=Math.ceil(o/3.8),c=Math.atan2(i,a);for(let i=0;i<s;i++){let a=(i+.5)/s,l=V.lerp(e,n,a),u=V.lerp(t,r,a),d=o/s+.5,f=1.8+i%3*.18,p=this.box([1.35,f,d],[l,this.terrainHeight(l,u)+f/2,u],i%2?3492402:4018742);p.rotation.y=c,this.coverMeshes.push(p);let m=Math.abs(Math.sin(c))*d/2+.75,h=Math.abs(Math.cos(c))*d/2+.75;this.colliders.push({minX:l-m,maxX:l+m,minZ:u-h,maxZ:u+h})}}deadTree(e,t,n=!1){let r=n?4.8:3.8,i=new Y(new X(.14,.3,r,6),this.mat(4076585));i.position.set(e,this.terrainHeight(e,t)+(n?.38:r/2),t),i.rotation.z=n?Math.PI/2-.12:(Math.random()-.5)*.2,i.rotation.y=Math.random()*Math.PI,i.castShadow=!0,this.scene.add(i),this.coverMeshes.push(i),this.colliders.push({minX:e-(n?2.4:.32),maxX:e+(n?2.4:.32),minZ:t-.35,maxZ:t+.35})}fieldDefenses(e,t,n){for(let r of[-1,1])for(let i=-2;i<=2;i++){let a=e+i*1.05,o=t+r*3.4,s=this.box([.95,.52,.7],[a,this.terrainHeight(a,o)+.27,o],i%2?n:n+525828);this.coverMeshes.push(s),this.colliders.push({minX:a-.475,maxX:a+.475,minZ:o-.35,maxZ:o+.35})}}fieldTrench(e,t,n,r,i){let a=this.terrainHeight(e,t),o=this.box(n?[r,.035,2.15]:[2.15,.035,r],[e,a+.018,t],3748907);o.receiveShadow=!0;let s=r/2-1.15,c=[-(r/4+.575),r/4+.575];for(let r of[-1,1])for(let o of c){let c=e+(n?o:r*1.35),l=t+(n?r*1.35:o),u=n?s:.72,d=n?.72:s,f=this.box([u,.62,d],[c,a+.28,l],r<0?i:i+460035);f.rotation[n?`z`:`x`]=r*.08,this.coverMeshes.push(f),this.colliders.push({minX:c-u/2,maxX:c+u/2,minZ:l-d/2,maxZ:l+d/2});for(let e=-1;e<=1;e++){let t=c+(n?e*u*.28:-r*.08),i=l+(n?-r*.08:e*d*.28),o=this.box([.055,.48,.055],[t,a+.38,i],4929830);o.rotation.z=r*.08}}for(let i of[-1,1]){let o=e+(n?i*r/2:0),s=t+(n?0:i*r/2);for(let e of[-1,1]){let t=this.box(n?[.72,.44,.7]:[.7,.44,.72],[o+(n?0:e*.62),a+.22,s+(n?e*.62:0)],7692873);this.coverMeshes.push(t)}}}watchtower(e,t){let n=new K,r=this.terrainHeight(e,t);n.position.set(e,r,t),this.scene.add(n);let i=5061416,a=4.25;for(let r of[-1.55,1.55])for(let o of[-1.55,1.55]){let s=this.box([.18,a,.18],[r,a/2,o],i,n);s.rotation.z=r*.025,s.rotation.x=o*-.025,this.colliders.push({minX:e+r-.16,maxX:e+r+.16,minZ:t+o-.16,maxZ:t+o+.16})}let o=this.box([3.8,.18,3.8],[0,a,0],2960421,n);this.coverMeshes.push(o),this.platforms.push({minX:e-1.78,maxX:e+1.78,minZ:t-2.12,maxZ:t+1.78,y:r+a+.1});for(let e of[-1,1])this.box([3.9,.08,.08],[0,5.17,e*1.82],i,n),this.box([.08,.9,.08],[-1.72,4.73,e*1.82],i,n),this.box([.08,.9,.08],[1.72,4.73,e*1.82],i,n),this.box([.08,.08,3.7],[e*1.82,5.17,0],i,n);let s=t-1.96;for(let t of[-.34,.34])this.box([.07,4.6,.07],[e+t,4.6/2,s],i);for(let t=.35;t<=4.4;t+=.38)this.box([.78,.055,.07],[e,t,s],6836281);this.ladders.push({x:e,z:s,y0:r+.65,y1:r+a+1.82,face:0})}naturalMap(e,t){let n=[{x:0,z:58},...[...this.campaign.flags].sort((e,t)=>t.z-e.z),{x:0,z:-58}];for(let t=0;t<n.length-1;t++)this.fieldRoad(n[t].x,n[t].z,n[t+1].x,n[t+1].z,e===`jungle`?3.2:4.2,e===`loess`?9599576:e===`alpine`?6317921:6447182);for(let[t,n]of this.campaign.flags.entries()){this.fieldRoad(0,n.z,n.x,n.z,2.4,e===`loess`?9270355:5855563),this.fieldDefenses(n.x,n.z,e===`jungle`?5001784:7167301);let r=V.clamp(n.x+(t%2?-5.5:5.5),-18,18),i=n.z+(t%2?7.5:-7.5);this.fieldTrench(r,i,t%2==0,9.5,e===`loess`?8415046:e===`jungle`?4542520:6708037)}let r=this.campaign.flags.filter((e,t)=>t%2==1);for(let t of r){let n=t.x>=0?-1:1,r=V.clamp(t.x+n*8,-22,22);this.fieldHut(r,t.z+5.5,e===`loess`?8678733:e===`jungle`?5132603:6972497,e===`alpine`?4146754:4801589),this.fieldHut(r+n*5.5,t.z-2,e===`loess`?7955270:6381133,4209457)}let i=e===`jungle`,a=e===`alpine`,o=i?62:a?42:e===`green`?34:18;for(let e=0;e<o;e++){let t=(e%2?-1:1)*(9+Math.random()*14),n=-59+Math.random()*118;this.tree(t,n,i,a)}let s=a?22:e===`loess`?18:i?12:8;for(let e=0;e<s;e++){let n=(e%2?-1:1)*(8.5+Math.random()*11),r=-57+Math.random()*114,i=.7+Math.random()*1.5,o=new Y(new Ii(i,0),this.mat(a?5594200:t[2]));o.position.set(n,this.terrainHeight(n,r)+i*.55,r),o.scale.y=.65,o.rotation.set(Math.random(),Math.random(),Math.random()),o.castShadow=o.receiveShadow=!0,this.scene.add(o)}if(e===`loess`)for(let e of[-43,-12,19,47])this.box([18,2.2,3.5],[-17,1,e],7823428),this.box([18,1.4,3.5],[17,.65,e+5],9139028);if(e===`green`||e===`alpine`)for(let e of[-24,24])this.cover([5.5,.8,.7],[-4.6,.4,e],5327417),this.cover([4,.8,.7],[5.2,.4,e+3],5327417);if(e===`green`&&(this.hedgerow(-23,-7,-12,-4),this.hedgerow(11,18,23,22)),i)for(let e of[-40,-8,27])this.cover([3.8,.75,.8],[-4.8,.38,e],4541237),this.cover([3.2,.75,.8],[5.1,.38,e+4],4541237);this.watchtower(e===`jungle`?-18:18,this.campaign.flags[Math.floor(this.campaign.flags.length/2)]?.z??0)}tree(e,t,n,r){let i=new K;i.position.set(e,this.terrainHeight(e,t),t),this.scene.add(i);let a=(n?4.5:3.5)+Math.random()*3,o=new Y(new X(.18,.3,a,7),this.mat(n?4470818:5325099));if(o.position.y=a/2,o.castShadow=o.receiveShadow=!0,i.add(o),r)for(let e=0;e<3;e++){let t=new Y(new Pi(1.7-e*.25,2.8,8),this.mat(3164219));t.position.y=a-1+e*1.05,t.castShadow=!0,i.add(t)}else{let e=new Y(new Li(n?2:1.6,1),this.mat(n?2705969:4217402));e.scale.set(1.2,.8,1),e.position.y=a,e.castShadow=!0,i.add(e)}}initWeather(){if(this.campaign.theme===`alpine`){let e=new Float32Array(520*3);for(let t=0;t<520;t++)e.set([-24+Math.random()*48,Math.random()*26,-24+Math.random()*48],t*3);let t=new Er;t.setAttribute(`position`,new fr(e,3)),this.precipitation=new wi(t,new yi({color:15856886,size:.14,transparent:!0,opacity:.88,depthWrite:!1,fog:!1})),this.precipitation.frustumCulled=!1,this.scene.add(this.precipitation),this.snowing=!0,this.rainSpeed=3.4;return}if(!this.campaign.weather.includes(`雨`))return;let e=this.campaign.weather===`雷雨`||this.campaign.weather===`暴雨`,t=e?720:460,n=new Float32Array(t*6);for(let e=0;e<t;e++){let t=-24+Math.random()*48,r=Math.random()*26,i=-24+Math.random()*48,a=e*6;n.set([t,r,i,t,r-.7,i],a)}let r=new Er;r.setAttribute(`position`,new fr(n,3)),this.precipitation=new vi(r,new oi({color:10335432,transparent:!0,opacity:e?.48:.34,fog:!1})),this.precipitation.frustumCulled=!1,this.scene.add(this.precipitation),this.rainSpeed=e?36:27,this.lightningAt=performance.now()/1e3+6+Math.random()*8}updateWeather(e,t){if(!this.precipitation)return;this.precipitation.position.set(this.camera.position.x,this.camera.position.y-8,this.camera.position.z);let n=this.precipitation.geometry.getAttribute(`position`);if(this.snowing){for(let r=0;r<n.count;r++){let i=n.getY(r)-e*this.rainSpeed,a=n.getX(r)+Math.sin(t*.7+r)*e*.35,o=n.getZ(r)+Math.cos(t*.45+r*.7)*e*.18;i<0&&(i+=26,a=-24+Math.random()*48,o=-24+Math.random()*48),n.setXYZ(r,a,i,o)}n.needsUpdate=!0;return}for(let t=0;t<n.count;t+=2){let r=n.getY(t)-e*this.rainSpeed,i=n.getX(t)+e*.8;if(r<0){r+=26,i=-24+Math.random()*48;let e=-24+Math.random()*48;n.setZ(t,e),n.setZ(t+1,e)}n.setX(t,i),n.setX(t+1,i),n.setY(t,r),n.setY(t+1,r-.7)}n.needsUpdate=!0,this.campaign.weather===`雷雨`&&(this.stormFlash=Math.max(0,this.stormFlash-e*5),this.sun.intensity=2+this.stormFlash*7,!(t<this.lightningAt)&&(this.lightningAt=t+7+Math.random()*10,this.stormFlash=1,setTimeout(()=>this.audio.explosion(.28,(Math.random()-.5)*.8),550+Math.random()*500)))}gun(){this.camera.add(this.weapon),this.scene.add(this.camera),this.buildWeapon()}buildWeapon(){this.reloadToken++,this.weapon.traverse(e=>{e instanceof Y&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))}),this.weapon.clear(),this.bolt.clear(),this.weaponMagazine=void 0;let e=this.activeLoadout(),t=e.id,n=e.weapon.includes(`快慢机`),r=!!e.vehicleDamage,i=t===`medic`?6307871:7685407,a=2106660,o=(e,t,n,r=this.weapon)=>{let i=new Y(new X(e,e,t,10),this.mat(a,.28));return i.rotation.x=Math.PI/2,i.position.set(...n),r.add(i),i};if(t===`sidearm`||n)this.box([.2,.22,.65],[0,.02,-.2],a,this.weapon),this.box([.18,.34,.2],[0,-.22,.02],i,this.weapon),o(.04,.45,[0,.03,-.72]),this.box([.22,.06,.48],[0,.16,-.2],3422775,this.weapon),this.weaponMagazine=this.box([.12,n?.52:.32,.14],[0,n?-.34:-.25,-.18],2699052,this.weapon);else if(t===`assault`){this.box([.2,.19,.58],[0,-.02,.12],i,this.weapon),this.box([.18,.18,.58],[0,.02,-.42],a,this.weapon),o(.025,.72,[0,.03,-1.06]);let e=this.box([.42,.1,.16],[-.25,-.04,-.35],3488568,this.weapon);e.rotation.z=-.12,this.weaponMagazine=e}else if(t===`support`){this.box([.22,.2,.72],[0,-.05,.16],i,this.weapon),this.box([.2,.2,.7],[0,.02,-.5],a,this.weapon),o(.035,1.05,[0,.03,-1.35]),this.weaponMagazine=this.box([.2,.32,.34],[0,.26,-.48],3159603,this.weapon);for(let e of[-.12,.12]){let t=o(.014,.62,[e,-.2,-1.67]);t.rotation.z=e<0?-.25:.25}}else if(t===`anti-tank`&&r){this.box([.22,.2,.95],[0,-.04,.18],i,this.weapon),this.box([.16,.16,.9],[0,.02,-.72],a,this.weapon),o(.055,1.65,[0,.04,-1.95]),this.weaponMagazine=this.box([.24,.36,.2],[0,-.2,-.65],3159346,this.weapon),this.box([.12,.1,.3],[0,.18,-1.15],2435881,this.weapon);for(let e of[-.16,.16]){let t=o(.016,.72,[e,-.22,-2.12]);t.rotation.z=e<0?-.28:.28}}else this.box([.2,.19,.88],[0,-.04,.17],i,this.weapon),this.box([.15,.15,.75],[0,0,-.59],i,this.weapon),this.box([.115,.13,.95],[0,.04,-.78],a,this.weapon),o(.027,1,[0,.04,-1.72]),t===`scout`&&(o(.055,.52,[0,.18,-.72]),this.box([.16,.08,.12],[0,.12,-.48],a,this.weapon),this.box([.16,.08,.12],[0,.12,-.96],a,this.weapon));if(e.kind===`bolt`){this.bolt.position.set(.1,.1,-.4),this.weapon.add(this.bolt);let e=o(.035,.3,[0,0,0],this.bolt);e.rotation.x=Math.PI/2}let s=t===`sidearm`||n?-.98:t===`assault`?-1.43:t===`support`?-1.9:r?-2.55:-2.22;if(t!==`sidearm`&&!n&&t!==`assault`&&t!==`support`&&!r){let e=this.box([.045,.11,.48],[0,.12,s-.28],12173498,this.weapon);e.rotation.x=-.08;let t=new Y(new Pi(.065,.24,4),this.mat(13160136,.22));t.rotation.x=-Math.PI/2,t.position.set(0,.12,s-.63),this.weapon.add(t)}this.playerMuzzle=new Y(new Vi(.11,8,6),new Lr({color:16761950})),this.playerMuzzle.position.set(0,.04,s),this.playerMuzzle.scale.set(1,1,2.8),this.playerMuzzle.visible=!1,this.weapon.add(this.playerMuzzle);for(let e of[-.13,.14]){let t=new Y(new Mi(.07,.24,4,8),this.mat(11633506));t.rotation.x=Math.PI/2,t.position.set(e,-.2,e<0?-.72:-.2),this.weapon.add(t)}this.weapon.position.set(.32,-.27,-.65),this.weapon.rotation.set(0,0,0)}switchWeapon(e){this.dead||this.buildAction||this.bandagingUntil||this.supplyAction||this.playerTank||this.playerTransport&&!this.playerTransportPassenger||this.playerPlane||this.playerMortar||this.playerEmplacement||this.playerMG||this.loading||this.weaponSlot===e||(this.weaponSlot===`primary`?this.primaryAmmo=[this.mag,this.reserve]:this.sidearmAmmo=[this.mag,this.reserve],this.braced=!1,this.weaponSlot=e,[this.mag,this.reserve]=e===`primary`?this.primaryAmmo:this.sidearmAmmo,this.aiming=!1,this.events.aim(!1),this.buildWeapon(),this.events.loadout(this.activeLoadout()),this.events.ammo(this.mag,this.reserve,!1))}objective(e,t,n,r=5){let i=this.terrainHeight(t,n),a=new Y(new X(.045,.06,4.8,8),this.mat(4869447));a.position.set(t,i+2.4,n),this.scene.add(a);let o=new Y(new zi(1.8,1.05),new Lr({color:13946296,side:2}));o.position.set(t+.94,i+4.15,n),this.scene.add(o);let s=new Y(new Bi(r-.2,r,48),new Lr({color:13946296,transparent:!0,opacity:.38,side:2}));s.rotation.x=-Math.PI/2,s.position.set(t,i+.035,n),this.scene.add(s),this.objectives.push({id:e,position:new U(t,i,n),radius:r,owner:null,capturing:null,progress:0,ring:s,flag:o}),this.supply(t+3.3,n)}weaponShotOffset(e){let t=this.keys.has(`KeyW`)||this.keys.has(`KeyA`)||this.keys.has(`KeyS`)||this.keys.has(`KeyD`),n=this.stance===`prone`?.55:this.stance===`crouch`?.78:1,r=t?this.jumpHeight?1.85:1.35:1,i=this.braced?.35:1,a=(this.aiming?e.spreadAds:e.spreadHip)*n*r*i+this.suppression*2.2,o=Math.sqrt(Math.random())*Math.tan(V.degToRad(a))/Math.tan(V.degToRad(this.camera.fov*.5)),s=Math.random()*Math.PI*2;return new H(Math.cos(s)*o/this.camera.aspect,Math.sin(s)*o)}supply(e,t){let n=this.terrainHeight(e,t);this.box([1.1,.65,.8],[e,n+.34,t],6047018),this.box([1.16,.08,.86],[e,n+.72,t],7756341);for(let r of[-.38,.38])this.box([.06,.72,.84],[e+r,n+.37,t],2698537);this.ammoCrates.push(new U(e,n,t))}depot(e,t,n){let r=new K,i=this.terrainHeight(t,n);r.position.set(t,i,n),this.scene.add(r);let a=this.box([2.3,1.7,2.1],[0,.86,0],6575163,r);this.box([2.5,.18,2.3],[0,1.78,0],4146237,r);for(let e of[-.72,0,.72])this.box([.12,1.75,2.2],[e,.88,0],3422516,r);let o={id:e,root:r,hitbox:a,position:new U(t,i,n),hp:420,destroyed:!1};a.userData.depot=o,this.depots.push(o)}resetTickets(){this.tickets=[this.maxTickets,this.maxTickets],this.campaign.rule!==`conquest`&&(this.tickets[+(this.campaign.attacker===`ally`)]=1/0)}resetModeState(){this.assaultIndex=0,this.resetTickets(),this.matchTime=this.campaign.rule===`demolition`?960:1080;let e=this.campaign.attacker===`ally`?`enemy`:`ally`;for(let t of this.objectives)t.owner=this.campaign.rule===`conquest`?null:e,t.capturing=null,t.progress=0;if(this.campaign.rule===`conquest`){let e=[...this.objectives].sort((e,t)=>t.position.z-e.position.z);e.length&&(e[0].owner=`ally`,e[e.length-1].owner=`enemy`),e.length>=5&&(e[1].owner=`ally`,e[e.length-2].owner=`enemy`)}for(let e of this.depots)e.hp=420,e.destroyed=!1,e.root.visible=!0,e.root.rotation.set(0,0,0),e.hitbox.material.color.setHex(6575163)}forces(){for(let e=0;e<this.campaign.allies;e++)this.bot(`ally`,-5.5+e%6*2.2,39+Math.floor(e/6)*3-Math.abs(e%6-2.5));for(let e=0;e<this.campaign.enemies;e++)this.bot(`enemy`,-7+e%6*2.8,-34-Math.floor(e/6)*4)}bot(e,t,n){let r=this.bots.filter(t=>t.team===e).length,i=(e===`ally`?this.battleLoadouts:jl)[r%jl.length].id,a=e===`ally`&&r<3,o=e===`ally`&&this.campaign.id===`baituan`,s=new K;s.position.set(t,this.terrainHeight(t,n),n),s.rotation.y=e===`ally`?Math.PI:0,this.scene.add(s);let c=e===`ally`?o?7830898:5204833:9075531,l=new Y(new Mi(.31,.72,5,9),this.mat(c));l.position.y=1.37,l.castShadow=!0,s.add(l);let u=new Y(new Vi(.27,12,9),this.mat(12093800));u.position.y=2.14,s.add(u);let d=e===`ally`?o?7830898:4018505:6840636,f=new Y(new Vi(.32,12,6,0,Math.PI*2,0,Math.PI/2),this.mat(d));if(f.position.y=o?2.29:2.31,o&&f.scale.set(1.05,.38,1.12),s.add(f),o)this.box([.38,.075,.34],[0,2.35,0],d,s),this.box([.29,.035,.12],[0,2.3,-.27],d,s),this.box([.045,.045,.025],[0,2.37,-.183],11873832,s);else if(e===`enemy`){let e=new Y(new X(.35,.37,.045,12),this.mat(d));e.position.y=2.3,s.add(e),this.box([.035,.05,.025],[0,2.39,-.285],14202944,s)}else this.box([.045,.045,.025],[0,2.39,-.292],2117808,s),this.box([.02,.02,.028],[0,2.39,-.307],15263976,s);this.box([.66,.075,.42],[0,1.31,0],3814440,s),this.box([.43,.53,.18],[0,1.45,.29],e===`ally`?4608067:6643780,s);for(let e of[-.22,.22]){let t=this.box([.055,.72,.035],[e,1.51,-.292],4339496,s);t.rotation.z=e*-.16}let p=[-.18,.18].map(t=>{let n=new K;n.position.set(t,1,0);let r=new Y(new Mi(.11,.58,4,7),this.mat(e===`ally`?4146751:5723192));return r.position.y=-.38,n.add(r),this.box([.24,.22,.38],[0,-.79,-.045],2696479,n),s.add(n),n}),m=[];for(let e of[-.38,.38]){let t=new Y(new Mi(.095,.5,4,7),this.mat(c));t.position.set(e,1.45,-.18),t.rotation.x=-.9,s.add(t),m.push(t)}let h=i===`medic`?15065810:i===`support`?13806933:i===`anti-tank`?13135683:i===`scout`?8956025:7310453,g=new Y(new ji(.13,.13,.035),new Lr({color:h}));if(g.position.set(.34,1.6,-.28),s.add(g),i===`medic`){let e=new Y(new ji(.06,.16,.04),new Lr({color:12008500}));e.position.set(.34,1.6,-.305),s.add(e);let t=e.clone();t.geometry=new ji(.16,.06,.04),s.add(t)}let _=new K;s.add(_);let v=o?5584159:e===`enemy`?6243110:4927003,y=2369831,b=-1.28;if(i===`assault`){this.box([.12,.12,.72],[.18,1.36,-.48],y,_),this.box([.14,.15,.42],[.18,1.34,.06],v,_);let t=this.box([.055,.055,.58],[.18,1.36,-1.13],y,_);t.rotation.x=-.03;let n=this.box(o?[.12,.42,.18]:[.16,.4,.14],[o||e===`enemy`?.18:-.02,1.12,-.5],y,_);e===`ally`&&!o&&(n.rotation.z=Math.PI/2),b=-1.44}else if(i===`support`){this.box([.14,.14,1.05],[.18,1.35,-.42],v,_),this.box([.11,.11,.9],[.18,1.36,-1.25],y,_),this.box([.2,.28,.25],[.18,1.61,-.65],y,_);for(let e of[-.09,.09]){let t=this.box([.035,.55,.035],[.18+e,1.03,-1.62],y,_);t.rotation.z=e<0?-.24:.24}b=-1.72}else if(i===`anti-tank`&&e===`enemy`){this.box([.15,.15,1.15],[.18,1.34,-.35],v,_),this.box([.16,.16,1.15],[.18,1.37,-1.42],y,_),this.box([.24,.34,.2],[.18,1.13,-.82],y,_);for(let e of[-.12,.12]){let t=this.box([.035,.7,.035],[.18+e,1.02,-2],y,_);t.rotation.z=e<0?-.27:.27}b=-2.12}else{let e=this.box([.1,.1,1.45],[.18,1.35,-.48],v,_);if(e.rotation.x=-.15,this.box([.065,.065,.82],[.18,1.35,-1.32],y,_),i===`scout`){let e=new Y(new X(.055,.055,.5,8),this.mat(2435624,.3));e.rotation.x=Math.PI/2,e.position.set(.18,1.53,-.72),_.add(e)}b=-1.75}let x=new Lr({color:16761950}),S=new Y(new Vi(.13,8,6),x);S.position.set(.18,1.34,b),S.scale.set(1,1,2.4),S.visible=!1,_.add(S);let C=o?[`李云龙`,`赵刚`,`王铁蛋`,`孙德胜`,`张大彪`,`魏和尚`,`段鹏`,`沈泉`,`邢志国`,`陈铁柱`,`石头`,`柱子`]:[`陈树生`,`姚子青`,`谢晋元`,`杨瑞符`,`雷雄`,`王根英`,`李增援`,`张自忠`,`戴安澜`],w=[`佐藤`,`山田`,`高桥`,`中村`,`小林`,`渡边`,`伊藤`,`加藤`,`吉田`,`山本`,`清水`,`松本`,`井上`,`木村`,`林田`,`藤原`],T=e===`ally`?C[r%C.length]:w[r%w.length],E=a?new Y(new Ri(.13),new Lr({color:8847270,depthTest:!1})):void 0;E&&(E.position.y=2.85,E.renderOrder=7,s.add(E));let D=(e===`ally`?this.battleLoadouts:jl).find(e=>e.id===i),O={root:s,body:l,head:u,weapon:_,muzzle:S,team:e,role:i,name:T,kills:0,deaths:0,objectiveScore:0,hp:100,alive:!0,inSquad:a,squadTag:E,antiTank:i===`anti-tank`&&!(e===`ally`&&this.campaign.id===`baituan`),antiTankGrenades:i===`support`?2:D?.antiTankGrenades??0,nextAidAt:8+Math.random()*8,nextRocket:6+Math.random()*8,nextMortar:5+Math.random()*5,mortarRigUntil:0,lastSeenUntil:0,phase:Math.random()*Math.PI*2,legs:p,arms:m,mag:this.botWeapon(i,e).magazine,reloadUntil:0,bandages:1,bandageUntil:0,coverUntil:0,nextCoverAt:0,reviveUntil:0,nextShot:1+Math.random()*2,shotAt:-10,nextMelee:0,meleeAt:-10,nextGrenade:7+Math.random()*10,throwAt:-10,grenades:1,smokes:1,smokeAt:12+Math.random()*10,suppression:0,nextWireDamage:0,reviveAt:0,respawnAt:0,deathToken:0,strafe:Math.random()<.5?-1:1,chuting:!1};l.userData.bot=O,l.userData.hitZone=`body`,u.userData.bot=O,u.userData.hitZone=`head`,this.bots.push(O)}tank(e){let t=new K;this.scene.add(t);let n=e===`ally`&&this.campaign.id===`baituan`,r=this.tanks.filter(t=>t.team===e).length,i=e===`enemy`?[{name:`九五式轻战车`,maxHp:430,crew:2,gunDamage:160,gunPen:42,color:7695944,armor:{front:12,side:12,rear:10,turret:12,top:9}},{name:`九七式改中战车`,maxHp:650,crew:3,gunDamage:260,gunPen:86,color:7301708,armor:{front:47,side:25,rear:20,turret:47,top:12}},{name:`一式炮战车`,maxHp:500,crew:3,gunDamage:330,gunPen:104,color:6972744,armor:{front:50,side:25,rear:12,turret:16,top:0}}]:n?[{name:`九七式中战车（缴获）`,maxHp:600,crew:3,gunDamage:250,gunPen:86,color:6844514,armor:{front:47,side:25,rear:20,turret:47,top:12}},{name:`九五式轻战车（缴获）`,maxHp:430,crew:2,gunDamage:160,gunPen:42,color:6515550,armor:{front:12,side:12,rear:10,turret:12,top:9}}]:[{name:`维克斯 6 吨轻型坦克`,maxHp:520,crew:2,gunDamage:210,gunPen:52,color:6056024,armor:{front:17,side:13,rear:10,turret:17,top:9}},{name:`T-26 援华轻型坦克`,maxHp:640,crew:3,gunDamage:250,gunPen:70,color:5595216,armor:{front:15,side:15,rear:10,turret:15,top:10}},{name:`M3 斯图亚特（美援）`,maxHp:620,crew:3,gunDamage:200,gunPen:70,color:6123600,armor:{front:44,side:29,rear:25,turret:44,top:13}}],a=i[r%i.length],o=a.color,s=this.box([2.4,.8,4.4],[0,.72,0],o,t),c=[];this.box([2.7,.38,3.5],[0,.3,0],3291187,t);for(let e of[-1.28,1.28]){this.box([.34,.55,4.5],[e,.42,0],2369572,t);for(let n of[-1.65,-.82,0,.82,1.65]){let r=new Y(new X(.31,.31,.18,12),this.mat(3422516,.55));r.rotation.z=Math.PI/2,r.position.set(e,.42,n),t.add(r),c.push(r)}}let l=new K;l.position.y=1.28,t.add(l),this.box([1.65,.62,1.8],[0,.26,-.05],o,l);let u=new K;u.position.y=.28,l.add(u);let d=new Y(new X(.075,.09,2.8,10),this.mat(2698794,.35));d.rotation.x=Math.PI/2,d.position.set(0,0,-2.15),u.add(d);let f=new wn;f.position.set(0,0,-3.58),u.add(f);let p=new Y(new X(.035,.045,1.05,7),this.mat(2369829,.4));p.rotation.x=Math.PI/2,p.position.set(.42,-.12,-1.25),u.add(p);let m=new wn;m.position.set(.42,-.12,-1.8),u.add(m);let h={root:t,turret:l,pitch:u,barrel:d,muzzle:f,coaxMuzzle:m,hitbox:s,wheels:c,team:e,name:a.name,armor:a.armor,gunDamage:a.gunDamage,gunPen:a.gunPen,maxHp:a.maxHp,hp:a.maxHp,tracks:100,engine:100,turretHealth:100,crew:a.crew,crewCapacity:a.crew,crewMen:[],alive:!0,playerDriven:!1,recoilToken:0,ramSlowUntil:0,stalledFor:0,reverseUntil:0,reverseTurn:Math.random()<.5?-1:1,nextShot:3+Math.random()*3,nextMg:0,mgBurst:0,mgPauseUntil:0,nextSmoke:0,lastDamageAt:-99,respawnAt:0};s.userData.tank=h,this.initTankCrew(h),this.tanks.push(h),this.reinforceTank(h,performance.now()/1e3)}initTankCrew(e){for(let t of[`driver`,`gunner`,`commander`,`loader`].slice(0,e.crewCapacity)){let n={role:t,hp:65,alive:!0,respawnAt:0};if(t===`commander`){let t=new K;t.position.set(-.42,.78,-.28),e.turret.add(t);let r=this.box([.36,.44,.25],[0,0,0],e.team===`ally`?5204833:8483911,t),i=new Y(new Vi(.18,10,7),this.mat(12093800));i.position.y=.34,t.add(i);let a=new Y(new Vi(.21,10,5,0,Math.PI*2,0,Math.PI/2),this.mat(e.team===`ally`?4018505:6840636));a.position.y=.46,t.add(a),r.userData.tankCrew={tank:e,crew:n},i.userData.tankCrew={tank:e,crew:n},n.mesh=t,n.hitbox=i}e.crewMen.push(n)}}crewAlive(e,t){let n=e.crewMen.find(e=>e.role===t);return!n||n.alive}damageTankCrew(e,t,n,r,i=!1){if(!e.alive||!t.alive)return;let a=Math.min(t.hp,n);if(t.hp-=n,t.hp>0){r&&this.events.hit(!1,i,a);return}if(t.alive=!1,t.respawnAt=performance.now()/1e3+9,t.mesh&&(t.mesh.visible=!1),e.crew=e.crewMen.filter(e=>e.alive).length,r&&e.team===`enemy`){let e=t.role===`driver`?`驾驶员`:t.role===`gunner`?`炮手`:t.role===`loader`?`装填手`:`车长`;this.events.hit(!0,i,a),this.events.kill(++this.kills,`日军坦克${e}`,i),this.notePlayerKill()}}damageRandomTankCrew(e,t){let n=e.crewMen.filter(e=>e.alive);n.length&&this.damageTankCrew(e,n[Math.floor(Math.random()*n.length)],90,t)}updateTankCrew(e,t){for(let n of e.crewMen)!n.alive&&t>=n.respawnAt&&e.alive&&(n.alive=!0,n.hp=65,n.mesh&&(n.mesh.visible=!0));e.crew=e.crewMen.filter(e=>e.alive).length}transport(e){let t=new K;this.scene.add(t);let n=e===`ally`&&this.campaign.id===`baituan`,r=e===`enemy`?{name:`九四式六轮卡车`,maxHp:280}:n?{name:`改装民用卡车`,maxHp:260}:{name:`CCKW 十轮卡车（援华）`,maxHp:320},i=n?6183498:e===`ally`?5004624:7038789,a=[],o=this.box([2.15,.85,4.8],[0,1,0],i,t);this.box([2,.95,1.55],[0,1.72,1.25],i,t),this.box([2.05,.12,2.5],[0,1.48,-1.2],3883576,t);for(let e of[-1.08,1.08])for(let n of[-1.55,1.45]){let r=new Y(new X(.43,.43,.26,12),this.mat(2106144,.7));r.rotation.z=Math.PI/2,r.position.set(e,.55,n),t.add(r),a.push(r)}for(let e of[-.72,.72])this.box([.12,.62,2.6],[e,1.77,-1.18],3225647,t);let s={root:t,hitbox:o,wheels:a,team:e,name:r.name,maxHp:r.maxHp,hp:r.maxHp,alive:!0,playerDriven:!1,mission:`pickup`,waitUntil:0,nextDrop:0,stalledFor:0,reverseUntil:0,reverseTurn:Math.random()<.5?-1:1,nextSmoke:0,lastDamageAt:-99,respawnAt:0};o.userData.transport=s,this.transports.push(s),this.reinforceTransport(s,performance.now()/1e3)}emplacement(e,t,n,r){let i=this.openPlacement(n,r,1.45);n=i.x,r=i.z;let a=new K;a.position.copy(i),a.rotation.y=e===`ally`?Math.PI:0,this.scene.add(a);let o=e===`ally`?5004624:6906692,s=this.box([1.8,.72,1.3],[0,.58,0],o,a),c=new K;c.position.y=.85,a.add(c),this.box([t===`aa`?1.2:1.9,.78,.12],[0,.15,-.15],o,c);let l=new Y(new X(t===`aa`?.045:.07,t===`aa`?.055:.09,t===`aa`?2:2.8,8),this.mat(2698794,.35));l.rotation.x=Math.PI/2,l.position.set(0,t===`aa`?.42:.22,t===`aa`?-.9:-1.35),c.add(l);for(let e of[-1,1]){let t=new Y(new X(.43,.43,.18,12),this.mat(2435365));t.rotation.z=Math.PI/2,t.position.set(e*.95,.42,.15),a.add(t)}let u=new wn;u.position.set(0,t===`aa`?.42:.22,t===`aa`?-1.95:-2.78),c.add(u);let d={root:a,yaw:c,muzzle:u,hitbox:s,team:e,kind:t,hp:t===`aa`?180:240,alive:!0,occupied:!1,operatorUntil:0,nextShot:2+Math.random()*2,respawnAt:0};s.userData.emplacement=d,this.emplacements.push(d)}plane(e){let t=new K;this.scene.add(t);let n=e===`ally`&&this.campaign.id===`baituan`,r=this.planes.filter(t=>t.team===e).length,i=e===`enemy`?[{name:`零式舰上战斗机`,maxHp:90,bombs:1,color:9081476},{name:`一式战斗机“隼”`,maxHp:150,bombs:3,color:7831662}]:n?[{name:`一式战“隼”（缴获）`,maxHp:150,bombs:2,color:7305834},{name:`九九式轻爆机（缴获）`,maxHp:140,bombs:3,color:6713442}]:[{name:`霍克三型战斗机`,maxHp:95,bombs:1,color:5268826},{name:`伊-16 援华战斗机`,maxHp:140,bombs:2,color:6253144}],a=i[r%i.length],o=a.color,s=r%2?1.1:1,c=this.box([.7*s,.55,3.6*s],[0,0,0],o,t);this.box([7.2*s,.1,1.25],[0,0,-.15],o,t),this.box([2.6*s,.08,.75],[0,.1,1.45*s],o,t),this.box([.1,.9,.7],[0,.4,1.45*s],o,t);let l={root:t,hitbox:c,team:e,name:a.name,maxHp:a.maxHp,hp:a.maxHp,alive:!0,playerDriven:!1,abandoned:!1,speed:30,throttle:.8,angle:e===`ally`?0:Math.PI,bombs:a.bombs,maxBombs:a.bombs,nextBomb:0,bombRearmAt:0,stallWarned:!1,nextAttack:5+Math.random()*5,nextShot:0,respawnAt:0};c.userData.plane=l,this.planes.push(l),this.reinforcePlane(l,performance.now()/1e3)}input(){addEventListener(`keydown`,e=>{this.keys.add(e.code),!e.repeat&&(e.code===`Space`&&this.jump(),e.code===`KeyJ`&&this.toggleBrace(),e.code===`Digit1`&&this.switchWeapon(`primary`),e.code===`Digit2`&&this.switchWeapon(`sidearm`),e.code===`Digit4`&&this.cycleGrenade(),e.code===`KeyR`&&this.reload(),e.code===`KeyG`&&this.beginGrenadeCook(),e.code===`KeyX`&&this.throwSmoke(),e.code===`KeyV`&&this.melee(),e.code===`KeyH`&&this.heal(),e.code===`KeyB`&&(this.playerPlane?this.dropPlaneBomb():this.deployUtility()),e.code===`Digit5`&&this.cycleBuild(),e.code===`KeyF`&&this.repairTank(),e.code===`KeyE`&&this.interact(),e.code===`KeyT`&&this.orderSquadMove(),e.code===`KeyY`&&this.orderSquadFollow(),e.code===`KeyC`&&this.playerTank?this.tankGunnerView=!this.tankGunnerView:e.code===`KeyC`&&!this.jumpHeight&&(this.stance=this.stance===`crouch`?`stand`:`crouch`),e.code===`KeyZ`&&!this.playerTank&&!this.jumpHeight&&(this.stance=this.stance===`prone`?`stand`:`prone`))}),addEventListener(`keyup`,e=>{this.keys.delete(e.code),e.code===`KeyG`&&this.releaseGrenadeCook()}),addEventListener(`mousemove`,e=>{if(!this.active||document.pointerLockElement!==this.canvas||performance.now()<this.pointerLockGraceUntil)return;let t=V.clamp(Number.isFinite(e.movementX)?e.movementX:0,-160,160),n=V.clamp(Number.isFinite(e.movementY)?e.movementY:0,-160,160),r=this.aiming?this.camera.fov/72:1;if(this.dead){this.downedFreeLook=!0,this.yaw-=t*this.sensitivity,this.pitch=V.clamp(this.pitch-n*this.sensitivity,-.85,.85),this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`);return}this.playerPlane?this.planeStickPitch=V.clamp(this.planeStickPitch-n*this.sensitivity*r,-1,.95):(this.yaw-=t*this.sensitivity*r,this.pitch=V.clamp(this.pitch-n*this.sensitivity*r,-1.35,1.35))}),addEventListener(`mousedown`,e=>{if(!(!this.active||this.dead)){if(document.pointerLockElement!==this.canvas){this.canvas.requestPointerLock();return}e.button===0&&(!this.playerTransport||this.playerTransportPassenger)&&(this.firing=!0,this.playerTank?this.firePlayerTank():this.playerMortar?this.fireMortar():this.playerEmplacement?this.fireEmplacement():this.playerMG?this.fireMachineGun():this.fire()),e.button===2&&this.playerTank?(this.tankMgFiring=!0,this.firePlayerTankMg()):e.button===2&&this.playerPlane?this.dropPlaneBomb():e.button===2&&(!this.playerTransport||this.playerTransportPassenger)&&!this.playerMortar&&!this.playerEmplacement&&!this.playerMG&&(this.aiming=!0,this.events.aim(!0))}}),addEventListener(`mouseup`,e=>{e.button===0&&(this.firing=!1),e.button===2&&(this.tankMgFiring=!1,this.aiming=!1,this.events.aim(!1))}),addEventListener(`contextmenu`,e=>e.preventDefault()),addEventListener(`pointerlockchange`,()=>{this.pointerLockGraceUntil=performance.now()+120,document.pointerLockElement!==this.canvas&&(this.releaseGrenadeCook(),this.firing=!1,this.tankMgFiring=!1,this.aiming=!1,this.events.aim(!1))})}fire(){if(this.parachuting)return;if(this.playerPlane){this.firePlayerPlane();return}let e=this.activeLoadout(),t=performance.now();if(this.buildAction||this.bandagingUntil||this.supplyAction||this.loading||!this.mag||t<this.nextPlayerShot)return;this.nextPlayerShot=t+6e4/e.rpm,this.shotAt=t/1e3,this.mag--,this.recoil=e.recoil*(this.braced?.45:this.stance===`prone`?.7:1),this.events.ammo(this.mag,this.reserve,!1),e.kind===`bolt`&&this.cycleBolt(),this.ray.setFromCamera(this.weaponShotOffset(e),this.camera);let n=[...this.bots.filter(e=>e.team===`enemy`&&e.alive).flatMap(e=>[e.body,e.head]),...this.tanks.filter(e=>e.team===`enemy`&&e.alive).flatMap(e=>[e.hitbox,...e.crewMen.filter(e=>e.alive&&e.hitbox).map(e=>e.hitbox)]),...this.transports.filter(e=>e.team===`enemy`&&e.alive).map(e=>e.hitbox),...this.emplacements.filter(e=>e.team===`enemy`&&e.alive).map(e=>e.hitbox),...this.planes.filter(e=>e.team===`enemy`&&e.alive).map(e=>e.hitbox),...this.depots.filter(e=>!e.destroyed).map(e=>e.hitbox),...this.coverMeshes],r=this.ray.intersectObjects(n,!1)[0],i=r?.object.userData.bot,a=r?.object.userData.tankCrew,o=r?.object.userData.tank,s=r?.object.userData.transport,c=r?.object.userData.emplacement,l=r?.object.userData.plane,u=r?.object.userData.depot,d=r?.object.userData.structure,f=r?.object.userData.urbanBuilding,p=this.playerMuzzle.getWorldPosition(new U),m=r?.point??this.ray.ray.at(100,new U);if(this.tracer(p,m,16766586),this.ejectCasing(),this.audio.shot(e.kind),this.alertBots(`ally`,this.camera.position),r&&this.impactFx(m,!!(i||a)),this.suppressBots(p,m),a){this.damageTankCrew(a.tank,a.crew,e.damage*e.headMultiplier,!0,!0);return}if(!i&&!o&&!s&&!c&&!l&&!u&&!d&&!f){if(r&&Math.random()<.3){let e=this.soundAt(m);this.audio.ricochet(e.volume,e.pan)}return}if(this.audio.click(o||s||c||l||u||d||f?520:1250,o||s||c||l||u||d||f?.075:.045),f){this.damageUrbanBuilding(f,e.damage*.08);return}if(d){this.damageStructure(d,e.vehicleDamage?e.vehicleDamage*.7:e.damage*.22);return}if(u){this.damageDepot(u,e.vehicleDamage?e.vehicleDamage*.6:e.damage*.42,!0);return}if(l){this.damagePlane(l,e.vehicleDamage?e.vehicleDamage*.8:e.damage*.55,!0);return}if(c){this.damageEmplacement(c,e.vehicleDamage?e.vehicleDamage*.9:e.damage*.65,!0);return}if(s){this.damageTransport(s,e.vehicleDamage?e.vehicleDamage*.85:Math.max(4,e.damage*.14),!0);return}if(o){this.damageTank(o,e.vehicleDamage??Math.max(2,e.damage*.06),!0,r?.point,e.armorPen,this.ray.ray.direction);return}if(!i)return;let h=r?.object.userData.hitZone===`head`,g=V.clamp(1-Math.max(0,(r?.distance??0)-35)*.003,.72,1),_=e.damage*g*(h?e.headMultiplier:1),v=Math.min(i.hp,_);i.hp-=_;let y=i.hp<=0;this.events.hit(y,h,v),y&&this.kill(i,h,this.ray.ray.direction)}melee(){if(this.parachuting||this.playerEmplacement)return;let e=performance.now()/1e3;if(this.dead||this.buildAction||this.bandagingUntil||this.supplyAction||this.playerTank||this.playerTransport||this.playerMortar||this.playerMG||this.loading||e<this.meleeCooldown)return;this.meleeCooldown=e+.75,this.meleeAt=e,this.aiming=!1,this.events.aim(!1),this.audio.click(1350,.08),this.ray.setFromCamera(new H,this.camera);let t=this.bots.filter(e=>e.alive&&e.team===`enemy`).flatMap(e=>[e.body,e.head]),n=this.ray.intersectObjects(t,!1)[0];if(!n||n.distance>2.7)return;let r=n.object.userData.bot,i=Math.min(r.hp,125);r.hp-=125,this.impactFx(n.point,!0);let a=r.hp<=0;this.events.hit(a,n.object.userData.hitZone===`head`,i),a&&this.kill(r,n.object.userData.hitZone===`head`)}cycleGrenade(){this.dead||this.buildAction||this.grenadeCooking||this.selectedLoadout.id!==`anti-tank`||(this.grenadeMode=this.grenadeMode===`frag`?`anti-tank`:`frag`,this.events.grenadeMode(this.grenadeMode,this.antiTankGrenades),this.status=this.grenadeMode===`anti-tank`?`反坦克手雷已选择`:`破片手雷已选择`,this.statusUntil=performance.now()/1e3+1.3)}beginGrenadeCook(){if(this.grenadeMode===`anti-tank`){this.throwGrenade();return}if(this.grenadeCooking||this.buildAction||this.bandagingUntil||this.supplyAction||this.parachuting||this.playerEmplacement||this.dead||this.playerTank||this.playerTransport&&!this.playerTransportPassenger||this.playerMortar||this.playerMG||!this.grenades)return;this.grenadeCooking=!0,this.grenadeFuse=3.8,this.aiming=!1,this.events.aim(!1),this.weapon.visible=!1;let e=new Y(new X(.045,.055,.27,9),this.mat(4147510,.48));e.rotation.z=.22,e.position.set(.22,-.22,-.48),e.castShadow=!0,this.camera.add(e),this.heldGrenade=e,this.events.grenadeCook(this.grenadeFuse),this.audio.click(1180,.07)}clearGrenadeCook(e=!0){this.grenadeCooking=!1,this.events.grenadeCook();let t=this.heldGrenade;this.heldGrenade=void 0,t&&(t.removeFromParent(),e&&(t.geometry.dispose(),t.material.dispose())),!this.dead&&!this.playerTank&&!this.playerPlane&&!this.playerMortar&&!this.playerEmplacement&&!this.playerMG&&(!this.playerTransport||this.playerTransportPassenger)&&(this.weapon.visible=!0)}releaseGrenadeCook(){if(!this.grenadeCooking)return;let e=Math.max(.05,this.grenadeFuse);this.clearGrenadeCook(),this.throwGrenade(e)}updateGrenadeCook(e,t){if(!this.grenadeCooking||(this.grenadeFuse-=e,this.events.grenadeCook(Math.max(0,this.grenadeFuse)),this.heldGrenade&&(this.heldGrenade.rotation.x+=e*1.7,this.heldGrenade.position.y=-.22+Math.sin(t*8)*.012),this.grenadeFuse>0))return;let n=this.heldGrenade,r=n?.getWorldPosition(new U)??this.camera.position.clone();this.grenades=Math.max(0,this.grenades-1),this.clearGrenadeCook(!1),n&&(n.position.copy(r),n.rotation.set(0,0,0),this.scene.add(n),this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,`手雷在手中爆炸`),this.explode({mesh:n,velocity:new U,detonateAt:t,team:`ally`,playerOwned:!0}))}throwGrenade(e=2.7){if(this.parachuting||this.playerEmplacement)return;let t=this.grenadeMode===`anti-tank`;if(this.dead||this.buildAction||this.playerTank||this.playerTransport&&!this.playerTransportPassenger||this.playerMortar||this.playerMG||(t?!this.antiTankGrenades:!this.grenades))return;let n=new U;this.camera.getWorldDirection(n);let r=t?new Y(new Vi(.11,9,7),this.mat(4803386,.52)):new Y(new X(.035,.045,.26,8),this.mat(4147510,.55));r.castShadow=!0,r.position.copy(this.camera.position).addScaledVector(n,.45),this.scene.add(r),this.grenadesInWorld.push({mesh:r,velocity:n.multiplyScalar(t?10:13).add(new U(0,t?2.7:3.2,0)),detonateAt:performance.now()/1e3+(t?2.15:e),team:`ally`,playerOwned:!0,antiTank:t}),t?this.antiTankGrenades--:this.grenades--,this.events.grenadeMode(this.grenadeMode,this.antiTankGrenades),this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,``)}throwSmoke(){if(this.parachuting||this.playerEmplacement||this.dead||this.buildAction||this.bandagingUntil||this.supplyAction||this.playerTank||this.playerTransport&&!this.playerTransportPassenger||this.playerMortar||this.playerMG||!this.smokeGrenades)return;let e=new U;this.camera.getWorldDirection(e);let t=new Y(new X(.055,.055,.16,8),this.mat(9015431,.65));t.castShadow=!0,t.position.copy(this.camera.position).addScaledVector(e,.45),this.scene.add(t),this.grenadesInWorld.push({mesh:t,velocity:e.multiplyScalar(11).add(new U(0,3,0)),detonateAt:performance.now()/1e3+1.8,team:`ally`,playerOwned:!0,smoke:!0}),this.smokeGrenades--}throwNpcGrenade(e,t,n){let r=e.root.position.clone().add(new U(0,1.65,0)),i=t.clone().setY(0).sub(e.root.position.clone().setY(0)),a=V.clamp(i.length()/12,.9,1.7),o=new U(i.x/a,5.2+a*1.4,i.z/a),s=new Y(new X(.035,.045,.26,8),this.mat(e.team===`ally`?4147510:5327666,.55));s.position.copy(r),s.castShadow=!0,this.scene.add(s),this.grenadesInWorld.push({mesh:s,velocity:o,detonateAt:n+2.35,team:e.team,playerOwned:!1,owner:e}),e.grenades--,e.throwAt=n,e.nextGrenade=n+18,e.nextShot=Math.max(e.nextShot,n+1.1)}updateBotAntiTankGrenade(e,t,n){if(!e.antiTankGrenades||e.inSquad||e.riding||e.suppression>1.05)return!1;let r=this.tanks.filter(t=>t.alive&&t.team!==e.team).sort((t,n)=>e.root.position.distanceToSquared(t.root.position)-e.root.position.distanceToSquared(n.root.position))[0];if(!r)return!1;let i=r.root.position.x-e.root.position.x,a=r.root.position.z-e.root.position.z,o=Math.hypot(i,a);if(o>55)return!1;if(e.root.rotation.y=Math.atan2(i,a)+Math.PI,e.weapon.visible=!0,o>=11&&o<=26&&n>=e.nextGrenade){let t=e.root.position.clone().add(new U(0,1.5,0)),r=V.clamp(o/11,.95,1.65),s=new U(i/r,5.4+r*1.2,a/r),c=new Y(new Vi(.11,9,7),this.mat(4803386,.52));return c.position.copy(t),c.castShadow=!0,this.scene.add(c),this.grenadesInWorld.push({mesh:c,velocity:s,detonateAt:n+2.15,team:e.team,playerOwned:!1,owner:e,antiTank:!0}),e.antiTankGrenades--,e.nextGrenade=n+9+Math.random()*5,e.throwAt=n,e.nextShot=Math.max(e.nextShot,n+1.15),!0}let s=o<10?e.root.position.clone().add(new U(-i,0,-a).normalize().multiplyScalar(5)):r.root.position.clone().add(new U(e.strafe*5,0,4.5).applyQuaternion(r.root.quaternion)),c=s.x-e.root.position.x,l=s.z-e.root.position.z;Math.hypot(c,l)>.5&&this.moveBot(e,c,l,o<10?2.6:1.7,t);let u=Math.sin(n*8+e.phase)*.62;return e.legs[0].rotation.x=u,e.legs[1].rotation.x=-u,e.root.position.y=this.terrainHeight(e.root.position.x,e.root.position.z)+Math.abs(u)*.025,!0}throwNpcSmoke(e,t,n){let r=e.root.position.clone().add(new U(0,1.4,0)),i=t.clone().setY(0).sub(e.root.position.clone().setY(0)).normalize(),a=new Y(new X(.055,.055,.16,8),this.mat(9015431,.65));a.position.copy(r),this.scene.add(a),this.grenadesInWorld.push({mesh:a,velocity:i.multiplyScalar(8).add(new U(0,4.2,0)),detonateAt:n+1.7,team:e.team,playerOwned:!1,owner:e,smoke:!0}),e.smokes--,e.smokeAt=n+22+Math.random()*10,e.throwAt=n,e.nextShot=Math.max(e.nextShot,n+1.1)}heal(){if(this.dead||this.buildAction||this.bandagingUntil||this.supplyAction||this.loading||this.grenadeCooking||this.playerTank||this.playerPlane||this.playerTransport&&!this.playerTransportPassenger||this.playerMortar||this.playerEmplacement||this.playerMG||!this.aid||this.hp>=100)return;let e=performance.now()/1e3;this.bandagingStartedAt=e,this.bandagingUntil=e+2.6,this.firing=!1,this.aiming=!1,this.events.aim(!1),this.weapon.visible=!1;let t=new Y(new X(.055,.055,.24,12),this.mat(14143675,.82));t.rotation.z=Math.PI/2,t.position.set(.12,-.2,-.42),this.camera.add(t),this.heldBandage=t,this.status=`正在包扎 · 受伤会中断`,this.statusUntil=this.bandagingUntil}clearBandage(){this.bandagingUntil=0,this.bandagingStartedAt=0;let e=this.heldBandage;this.heldBandage=void 0,e&&(e.removeFromParent(),e.geometry.dispose(),e.material.dispose()),!this.dead&&!this.grenadeCooking&&!this.playerTank&&!this.playerPlane&&!this.playerMortar&&!this.playerEmplacement&&!this.playerMG&&(!this.playerTransport||this.playerTransportPassenger)&&(this.weapon.visible=!0)}interruptBandage(){this.bandagingUntil&&(this.clearBandage(),this.status=`包扎被打断`,this.statusUntil=performance.now()/1e3+1.4)}updateBandage(e){if(!this.bandagingUntil)return;let t=V.clamp((e-this.bandagingStartedAt)/2.6,0,1);this.heldBandage&&(this.heldBandage.position.x=.12+Math.sin(t*Math.PI*8)*.1,this.heldBandage.position.y=-.2+Math.sin(t*Math.PI*4)*.035,this.heldBandage.rotation.y=t*Math.PI*5),!(e<this.bandagingUntil)&&(this.aid--,this.hp=Math.min(100,this.hp+45),this.clearBandage(),this.status=`包扎完成 +45`,this.statusUntil=e+1.6,this.events.health(this.hp,!1),this.audio.click(1200,.08),this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,this.status))}deployUtility(){this.selectedLoadout.id===`medic`&&this.deployMedkit(),this.selectedLoadout.id===`engineer`&&this.deployFortification(),this.selectedLoadout.id===`mortar`&&this.toggleMortar()}buildLabel(){return this.buildKind===`sandbag`?`沙袋墙`:this.buildKind===`wire`?`铁丝网`:this.buildKind===`hedgehog`?`拒马`:`重机枪`}cycleBuild(){if(this.dead||this.buildAction||this.playerTank||this.playerMortar||this.playerMG||this.selectedLoadout.id!==`engineer`)return;let e=[`sandbag`,`wire`,`hedgehog`,`mg`];this.buildKind=e[(e.indexOf(this.buildKind)+1)%e.length],this.status=`工事：${this.buildLabel()}`,this.statusUntil=performance.now()/1e3+1.4}placeMedkit(e,t,n){let r=new K;r.position.copy(e).setY(this.terrainHeight(e.x,e.z)),this.scene.add(r),this.box([.8,.32,.55],[0,.18,0],t===`ally`?6575420:6445117,r),this.box([.38,.04,.58],[0,.36,0],13223085,r),this.box([.04,.38,.58],[0,.36,0],13223085,r),this.medkits.push({root:r,team:t,expiresAt:n+25,nextHeal:n,uses:4})}deployMedkit(){if(this.dead||this.playerTank||this.selectedLoadout.id!==`medic`||!this.medkitAvailable)return;let e=new U;this.camera.getWorldDirection(e),e.y=0,e.normalize();let t=performance.now()/1e3;this.placeMedkit(this.camera.position.clone().addScaledVector(e,1.2),`ally`,t),this.medkitAvailable=!1,this.status=`医疗箱已部署`,this.statusUntil=t+1.6,this.events.equipment(this.grenades,this.aid,!1,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,this.status)}deployFortification(){let e=this.buildKind===`mg`?3:1;if(this.dead||this.buildAction||this.bandagingUntil||this.supplyAction||this.grenadeCooking||this.playerTank||this.playerPlane||this.playerTransport||this.playerMortar||this.playerEmplacement||this.playerMG||this.selectedLoadout.id!==`engineer`||this.buildCharges<e){this.selectedLoadout.id===`engineer`&&this.buildCharges<e&&(this.status=`建造点数不足，需要 ${e} 点`,this.statusUntil=performance.now()/1e3+1.5);return}let t=new U;this.camera.getWorldDirection(t),t.y=0,t.normalize();let n=this.camera.position.clone().addScaledVector(t,2.4),r=Math.abs(t.z)>=Math.abs(t.x),i=r?2.15:.42,a=r?.42:2.15;if(n.y=this.terrainHeight(n.x,n.z),Math.abs(n.x)+i>this.battlefieldHalfWidth()-.6||Math.abs(n.z)+a>57||this.colliders.some(e=>n.x+i>e.minX&&n.x-i<e.maxX&&n.z+a>e.minZ&&n.z-a<e.maxZ)){this.status=`这里无法构筑`,this.statusUntil=performance.now()/1e3+1.4;return}let o={sandbag:2.2,wire:2.2,hedgehog:1.8,mg:3.4}[this.buildKind],s=performance.now()/1e3;this.buildAction={kind:this.buildKind,center:n,alongX:r,face:this.yaw,cost:e,startedAt:s,completeAt:s+o},this.firing=!1,this.aiming=!1,this.events.aim(!1),this.weapon.visible=!1;let c=new K,l=new Y(new X(.025,.032,.45,7),this.mat(6636326,.65)),u=new Y(new ji(.28,.1,.1),this.mat(3159346,.3));l.rotation.z=-.5,u.position.set(-.1,.18,0),u.rotation.z=-.5,c.add(l,u),c.position.set(.2,-.18,-.42),this.camera.add(c),this.heldTool=c,this.status=`正在构筑${this.buildLabel()} · 移动取消`,this.statusUntil=s+o}clearBuildAction(e){let t=!!(this.buildAction||this.heldTool);this.buildAction=void 0;let n=this.heldTool;this.heldTool=void 0,n&&(n.removeFromParent(),n.traverse(e=>{e instanceof Y&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))})),!this.dead&&!this.bandagingUntil&&!this.supplyAction&&!this.grenadeCooking&&!this.playerTank&&!this.playerPlane&&!this.playerMortar&&!this.playerEmplacement&&!this.playerMG&&(!this.playerTransport||this.playerTransportPassenger)&&(this.weapon.visible=!0),e&&t&&(this.status=e,this.statusUntil=performance.now()/1e3+1.3)}updateBuildAction(e){let t=this.buildAction;if(!t)return;if(this.keys.has(`KeyW`)||this.keys.has(`KeyA`)||this.keys.has(`KeyS`)||this.keys.has(`KeyD`)||this.keys.has(`Space`)){this.clearBuildAction(`建造已取消`);return}let n=t.completeAt-t.startedAt,r=V.clamp((e-t.startedAt)/n,0,1),i=Math.sin(r*Math.PI*n*4);if(this.heldTool&&(this.heldTool.rotation.x=-.35-Math.max(0,i)*.9,this.heldTool.rotation.z=.15+i*.16),e<t.completeAt)return;let{kind:a,center:o,alongX:s,face:c,cost:l}=t,u=s?2.15:.42,d=s?.42:2.15,f=[],p=[],m=[],h=e=>{p.push(e),this.colliders.push(e)},g=e=>{f.push(e),this.coverMeshes.push(e)};if(a===`sandbag`)for(let e=-2;e<=2;e++){let t=o.x+(s?e*.82:0),n=o.z+(s?0:e*.82);g(this.box(s?[.78,.64,.65]:[.65,.64,.78],[t,.32,n],e%2?8548434:7692871)),h({minX:t-(s?.39:.325),maxX:t+(s?.39:.325),minZ:n-(s?.325:.39),maxZ:n+(s?.325:.39)})}if(a===`wire`){for(let e of[-1.9,0,1.9]){let t=o.x+(s?e:0),n=o.z+(s?0:e),r=this.box([.08,1.05,.08],[t,.52,n],4540738);f.push(r)}for(let e of[.28,.58,.86]){let t=this.box(s?[4,.025,.025]:[.025,.025,4],[o.x,e,o.z],2698538);f.push(t)}}if(a===`hedgehog`){for(let e of[-1.25,0,1.25]){let t=o.x+(s?e:0),n=o.z+(s?0:e);for(let e of[0,Math.PI/3,-Math.PI/3]){let r=this.box([.14,1.5,.14],[t,.58,n],4475202);r.rotation.z=e,g(r)}}h({minX:o.x-u,maxX:o.x+u,minZ:o.z-d,maxZ:o.z+d})}if(a===`mg`){let e=this.createMachineGun(o,c);e.root.position.y=o.y+1,this.machineGuns.push(e),m.push(e.root),h({minX:o.x-.65,maxX:o.x+.65,minZ:o.z-.65,maxZ:o.z+.65})}for(let e of f)e.position.y+=o.y;for(let t of m.length?m:f){let n=t.position.y;t.position.y-=1.1,this.constructionRisers.push({object:t,targetY:n,startedAt:e,duration:.85})}for(let e=0;e<7;e++)this.particle(o.clone().add(new U((Math.random()-.5)*3.2,.12+Math.random()*.3,(Math.random()-.5)*3.2)),new U((Math.random()-.5)*2,.5+Math.random()*1.1,(Math.random()-.5)*2),7692871,.08+Math.random()*.08,.55+Math.random()*.35,2.2,.25,.8);this.fortifications.push({kind:a,center:o,team:`ally`,meshes:f,colliders:p}),this.buildCharges-=l;let _=a===`sandbag`?`沙袋墙`:a===`wire`?`铁丝网`:a===`hedgehog`?`拒马`:`重机枪`;this.clearBuildAction(),this.status=`${_}已构筑`,this.statusUntil=e+1.6,this.audio.click(420,.09),this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,this.status)}updateConstructionRisers(e){for(let t=this.constructionRisers.length-1;t>=0;t--){let n=this.constructionRisers[t],r=V.clamp((e-n.startedAt)/n.duration,0,1),i=r*r*(3-2*r);n.object.position.y=n.targetY-1.1*(1-i),r>=1&&this.constructionRisers.splice(t,1)}}toggleMortar(){if(this.dead||this.playerTank||this.playerMortar||this.playerMG||this.selectedLoadout.id!==`mortar`)return;if(this.mortar){if(this.camera.position.distanceToSquared(this.mortar.position)>3.5**2||this.mortar.occupied){this.status=`靠近自己的迫击炮才能回收`,this.statusUntil=performance.now()/1e3+1.5;return}this.mortarAmmo=this.mortar.ammo,this.disposeGroup(this.mortar.root),this.mortar=void 0,this.status=`迫击炮已回收`,this.statusUntil=performance.now()/1e3+1.5;return}let e=new U;this.camera.getWorldDirection(e),e.y=0,e.normalize();let t=this.camera.position.clone().addScaledVector(e,1.8);if(t.y=this.terrainHeight(t.x,t.z),this.colliders.some(e=>t.x+.7>e.minX&&t.x-.7<e.maxX&&t.z+.7>e.minZ&&t.z-.7<e.maxZ)){this.status=`这里无法架设迫击炮`,this.statusUntil=performance.now()/1e3+1.5;return}let n=new K;n.position.copy(t),n.rotation.y=this.yaw,this.scene.add(n);let r=new Y(new X(.3,.34,.09,10),this.mat(3423030,.4));r.position.set(0,.05,-.1),n.add(r);let i=new Y(new X(.056,.064,.82,9),this.mat(2370344,.3));i.position.set(0,.43,.06),i.rotation.x=.62,n.add(i);for(let e of[-.16,.16]){let t=new Y(new X(.018,.018,.48,6),this.mat(3225910,.35));t.position.set(e,.25,.29),t.rotation.z=e<0?.4:-.4,t.rotation.x=-.22,n.add(t)}n.traverse(e=>{e instanceof Y&&(e.castShadow=!0)}),this.mortar={root:n,tube:i,position:t,ammo:this.mortarAmmo,occupied:!1},this.status=`迫击炮已架设，按 E 操作`,this.statusUntil=performance.now()/1e3+1.8,this.audio.click(800,.1)}enterMortar(e){this.playerMortar=e,e.occupied=!0,this.weapon.visible=!1,this.aiming=!1,this.events.aim(!1),this.camera.position.copy(e.position).add(new U(0,1.35,0)),this.status=`迫击炮瞄准中`,this.statusUntil=performance.now()/1e3+1.3}leaveMortar(){let e=this.playerMortar;e&&(e.occupied=!1,this.playerMortar=void 0,this.mortarMarker.visible=!1,this.weapon.visible=!0,this.camera.position.copy(e.position).add(new U(1.2,1.72,0)),this.events.loadout(this.activeLoadout()),this.events.ammo(this.mag,this.reserve,!1))}mortarTarget(){let e=V.clamp(22+(-this.pitch+.15)*30,18,62),t=new U(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),n=this.playerMortar.position.clone().addScaledVector(t,e),r=this.battlefieldHalfWidth()-.8;return n.x=V.clamp(n.x,-r,r),n.z=V.clamp(n.z,-57,57),n.y=this.terrainHeight(n.x,n.z)+.14,n}fireMortar(){let e=this.playerMortar,t=performance.now();if(!e||!e.ammo||t<this.mortarShotAt)return;this.mortarShotAt=t+3200,e.ammo--,this.mortarAmmo=e.ammo;let n=this.mortarTarget(),r=e.root.localToWorld(new U(0,.75,-.22)),i=r.distanceTo(n),a=V.clamp(i/19,1.8,3.5),o=n.clone().sub(r).divideScalar(a);o.y=4.9*a;let s=new Y(new X(.05,.065,.28,8),this.mat(3159857,.35));s.position.copy(r),s.castShadow=!0,this.scene.add(s),this.grenadesInWorld.push({mesh:s,velocity:o,detonateAt:t/1e3+a+1,team:`ally`,playerOwned:!0,mortar:!0}),this.audio.shot(`bolt`,.55),e.tube.rotation.x=.45,setTimeout(()=>{this.mortar===e&&(e.tube.rotation.x=.62)},180)}updatePlayerMortar(e){let t=this.playerMortar;if(!t)return;this.camera.position.copy(t.position).add(new U(0,1.35,0)),this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`);let n=this.mortarTarget();this.mortarMarker.position.copy(n),this.mortarMarker.visible=!0,this.mortarMarker.rotation.z+=e*1.2,this.events.ammo(t.ammo,0,performance.now()<this.mortarShotAt),this.events.loadout({...this.selectedLoadout,weapon:`轻型迫击炮`,mode:`曲射 · ${Math.round(t.position.distanceTo(n))}m`})}createMachineGun(e,t,n=!0){let r=new K;r.position.copy(e).setY(1),r.rotation.y=t,this.scene.add(r);let i=new K,a=new K;i.add(a),r.add(i),this.box([.18,.22,.74],[0,0,-.05],2567466,a),this.box([.9,.55,.06],[0,.04,-.36],4870219,a);let o=new Y(new X(.045,.06,1.3,9),this.mat(2106915,.25));o.rotation.x=Math.PI/2,o.position.z=-.82,a.add(o);let s=new Y(new X(.08,.08,.62,10),this.mat(3423031,.3));s.rotation.x=Math.PI/2,s.position.z=-.62,a.add(s);let c=new Y(new X(.035,.035,1.05,7),this.mat(2699052));c.position.y=-.52,r.add(c);let l=new wn;return l.position.set(0,0,-1.48),a.add(l),r.traverse(e=>{e instanceof Y&&(e.castShadow=!0)}),{root:r,yaw:i,pitch:a,muzzle:l,position:e.clone(),ammo:250,heat:0,occupied:!1,deployable:n,operatorUntil:0,nextShot:0}}enterMachineGun(e){e.operator&&=(e.operator.machineGun=void 0,void 0),this.playerMG=e,e.occupied=!0,this.weapon.visible=!1,this.aiming=!1,this.events.aim(!1),this.camera.position.copy(e.position).add(new U(0,1.45,0)),this.status=`重机枪已就位`,this.statusUntil=performance.now()/1e3+1.2}leaveMachineGun(){let e=this.playerMG;e&&(e.occupied=!1,this.playerMG=void 0,this.weapon.visible=!0,this.camera.position.copy(e.position).add(new U(1.1,1.72,0)),this.events.loadout(this.activeLoadout()),this.events.ammo(this.mag,this.reserve,!1))}fireMachineGun(){let e=this.playerMG,t=performance.now();if(!e||!e.ammo||e.heat>=1||t<this.mgShotAt)return;this.mgShotAt=t+6e4/650,e.ammo--,e.heat=Math.min(1,e.heat+.018),this.ray.setFromCamera(new H((Math.random()-.5)*(.009+e.heat*.014),(Math.random()-.5)*(.009+e.heat*.014)),this.camera);let n=[...this.bots.filter(e=>e.alive&&e.team===`enemy`).flatMap(e=>[e.body,e.head]),...this.tanks.filter(e=>e.alive&&e.team===`enemy`).map(e=>e.hitbox),...this.depots.filter(e=>!e.destroyed).map(e=>e.hitbox),...this.coverMeshes],r=this.ray.intersectObjects(n,!1)[0],i=r?.object.userData.bot,a=r?.object.userData.tank,o=r?.object.userData.depot,s=e.muzzle.getWorldPosition(new U),c=r?.point??this.ray.ray.at(120,new U);this.tracer(s,c,16768898);let l=new Y(new Vi(.11,7,5),new Lr({color:16760149}));if(l.position.copy(s),this.scene.add(l),setTimeout(()=>{this.scene.remove(l),l.geometry.dispose(),l.material.dispose()},45),this.audio.shot(`auto`),i){let e=r?.object.userData.hitZone===`head`,t=e?46:25,n=Math.min(i.hp,t);i.hp-=t;let a=i.hp<=0;this.events.hit(a,e,n),a&&this.kill(i,e)}else a?this.damageTank(a,3,!0):o&&this.damageDepot(o,7,!0)}updatePlayerMachineGun(e){let t=this.playerMG;t&&(this.firing&&this.fireMachineGun(),t.heat=Math.max(0,t.heat-e*(this.firing?.035:.2)),this.camera.position.copy(t.position).add(new U(0,1.45,0)),this.pitch=V.clamp(this.pitch,-.45,.3),this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`),t.yaw.rotation.y=this.yaw-t.root.rotation.y,t.pitch.rotation.x=this.pitch,this.events.ammo(t.ammo,0,t.heat>=1),this.events.loadout({...this.selectedLoadout,weapon:`二四式重机枪`,mode:t.heat>=1?`枪管过热`:`固定火力 · 热量 ${Math.round(t.heat*100)}%`}))}updateMachineGuns(e,t){let n=(e,t)=>{let n=this.bots.filter(e=>e.alive&&!e.drivingTank&&!e.drivingTransport&&!e.piloting&&!e.chuting&&e.team!==t).map(e=>({position:e.root.position,bot:e}));return t===`enemy`&&!this.dead&&!this.playerTank&&!this.playerPlane&&n.push({position:this.camera.position,player:!0}),n.filter(t=>{let n=t.position.x-e.position.x,r=t.position.z-e.position.z,i=Math.hypot(n,r),a=Math.atan2(n,r)+Math.PI,o=Math.atan2(Math.sin(a-e.root.rotation.y),Math.cos(a-e.root.rotation.y));return i<70&&Math.abs(o)<1.05}).sort((t,n)=>e.position.distanceToSquared(t.position)-e.position.distanceToSquared(n.position))[0]};for(let r of this.machineGuns){if(r.occupied)continue;if(r.heat=Math.max(0,r.heat-e*.15),r.operator&&(!r.operator.alive||r.operator.machineGun!==r||t>=r.operatorUntil||!r.ammo)&&(r.operator.machineGun=void 0,r.operator=void 0),!r.operator){let e=this.bots.filter(e=>e.alive&&!e.inSquad&&!e.riding&&!e.drivingTank&&!e.drivingTransport&&!e.piloting&&!e.chuting&&!e.emplacement&&!e.machineGun&&!e.mortarRig&&e.root.position.distanceToSquared(r.position)<14**2).sort((e,t)=>e.root.position.distanceToSquared(r.position)-t.root.position.distanceToSquared(r.position)).find(e=>n(r,e.team));e&&(r.operator=e,r.operatorUntil=t+14+Math.random()*10,e.machineGun=r,e.coverTarget=void 0)}let i=r.operator;if(!i||i.root.position.distanceToSquared(r.position)>2**2)continue;let a=n(r,i.team);if(!a){i.machineGun=void 0,r.operator=void 0;continue}let o=a.position.x-r.position.x,s=a.position.z-r.position.z,c=Math.hypot(o,s),l=Math.atan2(o,s)+Math.PI;if(r.yaw.rotation.y=l-r.root.rotation.y,r.pitch.rotation.x=-V.clamp(Math.atan2(a.position.y+(a.bot?1.2:0)-r.root.position.y,c),-.3,.35),i.root.rotation.y=l,r.heat>=1||t<r.nextShot||!r.ammo)continue;r.nextShot=t+.095,r.ammo--,r.heat=Math.min(1,r.heat+.018);let u=r.muzzle.getWorldPosition(new U),d=a.position.clone().setY(a.player?this.camera.position.y:1.3);d.x+=(Math.random()-.5)*c*.018,d.y+=(Math.random()-.5)*c*.012;let f=d.clone().sub(u),p=f.length();this.ray.set(u,f.normalize()),this.ray.far=p;let m=this.ray.intersectObjects(this.coverMeshes,!1)[0];this.ray.far=1/0;let h=!m||m.distance>=p-.4;m&&!h&&d.copy(m.point),this.tracer(u,d,i.team===`ally`?16768898:16744552);let g=this.soundAt(u);this.audio.shot(`auto`,g.volume,g.pan),this.alertBots(i.team,r.position),!(!h||Math.random()>V.clamp(.76-c*.009,.18,.68))&&(a.bot?(a.bot.hp-=22,a.bot.suppression=Math.min(1.6,a.bot.suppression+.24),a.bot.hp<=0&&(i.kills++,this.down(a.bot,void 0,!1,i))):a.player&&(this.hurtPlayer(8*this.enemyDamage,u,`${i.name} · 运兵车车载机枪`),this.dead&&i.kills++))}}repairTank(){let e=performance.now()/1e3;if(this.dead||this.playerTank||this.playerMG||this.selectedLoadout.id!==`engineer`||e<this.repairAt)return;let t=this.tanks.filter(e=>e.alive&&e.team===`ally`&&(e.hp<e.maxHp||e.tracks<100||e.engine<100||e.turretHealth<100)&&e.root.position.distanceToSquared(this.camera.position)<4.5**2).sort((e,t)=>e.root.position.distanceToSquared(this.camera.position)-t.root.position.distanceToSquared(this.camera.position))[0];t&&(t.hp=Math.min(t.maxHp,t.hp+90),t.tracks=Math.min(100,t.tracks+45),t.engine=Math.min(100,t.engine+35),t.turretHealth=Math.min(100,t.turretHealth+30),this.repairAt=e+3,this.status=`战车维修 · 车体 ${Math.ceil(t.hp)}/${t.maxHp} · 履带 ${Math.ceil(t.tracks)}% · 发动机 ${Math.ceil(t.engine)}%`,this.statusUntil=e+2,this.audio.click(680,.1))}startSupplyAction(e,t,n){if(this.supplyAction||this.bandagingUntil||this.grenadeCooking||this.loading)return;this.supplyAction={kind:e,completeAt:t+.85,medkit:n},this.firing=!1,this.aiming=!1,this.events.aim(!1),this.weapon.visible=!1;let r=e===`ammo`?7558447:13946296,i=new Y(new ji(.3,.18,.22),this.mat(r,.72));i.position.set(.13,-.2,-.4),i.rotation.set(.2,-.2,.12),this.camera.add(i),this.heldSupply=i,this.status=e===`ammo`?`正在取用弹药`:`正在取用绷带`,this.statusUntil=t+.85}clearSupplyAction(){this.supplyAction=void 0;let e=this.heldSupply;this.heldSupply=void 0,e&&(e.removeFromParent(),e.geometry.dispose(),e.material.dispose()),!this.dead&&!this.bandagingUntil&&!this.grenadeCooking&&!this.playerTank&&!this.playerPlane&&!this.playerMortar&&!this.playerEmplacement&&!this.playerMG&&(!this.playerTransport||this.playerTransportPassenger)&&(this.weapon.visible=!0)}updateSupplyAction(e){let t=this.supplyAction;if(!t)return;let n=V.clamp(1-(t.completeAt-e)/.85,0,1);this.heldSupply&&(this.heldSupply.position.y=-.2+Math.sin(n*Math.PI)*.14,this.heldSupply.rotation.y=n*Math.PI),!(e<t.completeAt)&&(t.kind===`medical`?t.medkit&&this.medkits.includes(t.medkit)&&t.medkit.uses>0&&(t.medkit.uses--,this.aid=this.selectedLoadout.aid,this.bandageResupplyAt=e+4,this.status=`绷带已补充 · 医疗箱剩余 ${t.medkit.uses}`):(this.weaponSlot===`primary`?this.primaryAmmo=[this.mag,this.selectedLoadout.reserve]:(this.sidearmAmmo=[this.mag,Ml.reserve],this.primaryAmmo[1]=this.selectedLoadout.reserve),this.sidearmAmmo[1]=Ml.reserve,this.reserve=this.weaponSlot===`primary`?this.selectedLoadout.reserve:Ml.reserve,this.grenades=this.selectedLoadout.grenades,this.smokeGrenades=1,this.antiTankGrenades=this.selectedLoadout.antiTankGrenades??0,this.events.grenadeMode(this.grenadeMode,this.antiTankGrenades),this.selectedLoadout.id===`engineer`&&(this.buildCharges=6),this.selectedLoadout.id===`mortar`&&(this.mortarAmmo=16,this.mortar&&(this.mortar.ammo=16)),this.resupplyAt=e+6,this.status=`弹药与装备已补充`),this.statusUntil=e+1.8,this.clearSupplyAction(),this.audio.click(900,.1),this.events.ammo(this.mag,this.reserve,!1),this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,this.status))}resupply(){let e=performance.now()/1e3,t=this.medkits.find(e=>e.team===`ally`&&e.uses>0&&e.root.position.distanceToSquared(this.camera.position)<3.2**2);if(!(this.dead||this.playerTank||this.playerPlane||this.playerMortar||this.playerEmplacement||this.playerMG||this.playerTransport&&!this.playerTransportPassenger)){if(t&&this.aid<this.selectedLoadout.aid&&e>=this.bandageResupplyAt){this.startSupplyAction(`medical`,e,t);return}e>=this.resupplyAt&&this.ammoCrates.some(e=>e.distanceToSquared(this.camera.position)<3.2**2)&&this.startSupplyAction(`ammo`,e)}}interact(){if(this.dead||this.buildAction||this.supplyAction||this.bandagingUntil||this.grenadeCooking)return;if(this.playerPlane){this.leavePlane();return}if(this.playerTransport){this.leaveTransport();return}if(this.playerTank){this.leaveTank();return}if(this.playerMortar){this.leaveMortar();return}if(this.playerEmplacement){this.leaveEmplacement();return}if(this.playerMG){this.leaveMachineGun();return}if(this.mortar&&!this.mortar.occupied&&this.camera.position.distanceToSquared(this.mortar.position)<2.8**2){this.enterMortar(this.mortar);return}let e=this.machineGuns.filter(e=>!e.occupied&&e.position.distanceToSquared(this.camera.position)<2.8**2).sort((e,t)=>e.position.distanceToSquared(this.camera.position)-t.position.distanceToSquared(this.camera.position))[0];if(e){this.enterMachineGun(e);return}let t=this.emplacements.filter(e=>e.alive&&e.team===`ally`&&!e.occupied).sort((e,t)=>e.root.position.distanceToSquared(this.camera.position)-t.root.position.distanceToSquared(this.camera.position))[0];if(t&&t.root.position.distanceToSquared(this.camera.position)<3.6**2){this.enterEmplacement(t);return}let n=this.planes.find(e=>e.alive&&e.team===`ally`&&!e.playerDriven);if(n&&this.camera.position.z>40){this.enterPlane(n);return}let r=performance.now()/1e3,i=this.selectedLoadout.id===`medic`?this.bots.filter(e=>!e.alive&&e.team===`ally`&&r>=e.reviveAt&&e.root.position.distanceToSquared(this.camera.position)<2.8**2).sort((e,t)=>e.root.position.distanceToSquared(this.camera.position)-t.root.position.distanceToSquared(this.camera.position))[0]:void 0;if(i){this.reviveBot(i,r);return}let a=this.tanks.filter(e=>e.alive&&e.team===`ally`&&!e.playerDriven).sort((e,t)=>e.root.position.distanceToSquared(this.camera.position)-t.root.position.distanceToSquared(this.camera.position))[0];if(a&&a.root.position.distanceToSquared(this.camera.position)<4.5**2){this.enterTank(a);return}let o=this.transports.filter(e=>e.alive&&e.team===`ally`&&!e.playerDriven).sort((e,t)=>e.root.position.distanceToSquared(this.camera.position)-t.root.position.distanceToSquared(this.camera.position))[0];if(o&&o.root.position.distanceToSquared(this.camera.position)<5**2){let e=this.bots.filter(e=>e.alive&&e.riding===o).length;Math.abs(o.root.position.z)<43&&e<6?this.enterTransportPassenger(o):this.enterTransport(o);return}this.resupply()}reviveBot(e,t){this.corpses=this.corpses.filter(t=>t.bot!==e),e.deathToken++,e.alive=!0,e.hp=60,e.suppression=0,e.reviver=void 0,e.squadTag&&(e.squadTag.visible=!0),e.root.position.y=this.terrainHeight(e.root.position.x,e.root.position.z),e.root.rotation.x=0,e.root.rotation.z=0,e.root.scale.set(1,1,1),e.head.rotation.set(0,0,0),e.legs.forEach(e=>e.rotation.set(0,0,0)),e.arms.forEach(e=>e.rotation.set(-.9,0,0)),e.weapon.position.set(0,0,0),e.weapon.rotation.set(0,0,0),e.nextShot=t+1,e.shotAt=-10,e.respawnAt=0;let n=e.team===`ally`?0:1;Number.isFinite(this.tickets[n])&&(this.tickets[n]=Math.min(this.maxTickets,this.tickets[n]+1)),this.audio.click(1100,.1)}dismountTankDriver(e,t=!1,n=!1){let r=e.driver;if(!r)return;e.driver=void 0,r.drivingTank=void 0,r.root.visible=!0,r.body.layers.enable(0),r.head.layers.enable(0);let i=new U(r.strafe*2.1,0,1.1).applyQuaternion(e.root.quaternion);r.root.position.copy(e.root.position).add(i),r.root.position.y=this.terrainHeight(r.root.position.x,r.root.position.z),r.root.rotation.x=0,r.root.scale.set(1,1,1),r.suppression=t?.9:r.suppression,r.nextShot=performance.now()/1e3+.8,n&&(r.hp=0,this.down(r,r.root.position.clone().sub(e.root.position)))}tankDriverSeated(e){return!!(e.driver?.alive&&e.driver.root.position.distanceToSquared(e.root.position)<2.2**2)}dismountTransportDriver(e,t=!1){let n=e.driver;if(!n)return;e.driver=void 0,n.drivingTransport=void 0,n.root.visible=!0,n.body.layers.enable(0),n.head.layers.enable(0);let r=new U(n.strafe*1.8,0,.8).applyQuaternion(e.root.quaternion);n.root.position.copy(e.root.position).add(r),n.root.position.y=this.terrainHeight(n.root.position.x,n.root.position.z),n.root.rotation.x=0,n.root.scale.set(1,1,1),n.nextShot=performance.now()/1e3+.8,t&&(n.hp=0,this.down(n,n.root.position.clone().sub(e.root.position)))}evacuateTransport(e){this.bots.filter(t=>t.alive&&t.riding===e).forEach((t,n)=>this.dismountTransportPassenger(e,t,n,!0))}dismountTransportPassenger(e,t,n,r=!1){t.riding=void 0;let i=new U((n%2?1:-1)*1.75,0,-.8+Math.floor(n/2)*.85).applyQuaternion(e.root.quaternion);t.root.position.copy(e.root.position).add(i),t.root.scale.set(1,1,1),t.legs.forEach(e=>e.rotation.x=0),t.suppression=r?Math.max(t.suppression,.8):t.suppression,t.nextShot=performance.now()/1e3+.5+Math.random()}transportDriverSeated(e){return!!(e.driver?.alive&&e.driver.root.position.distanceToSquared(e.root.position)<2.2**2)}enterTank(e){this.dismountTankDriver(e),this.playerTank=e,e.playerDriven=!0,this.tankMgFiring=!1,this.tankGunnerView=!1,this.weapon.visible=!1,this.aiming=!1,this.yaw=e.root.rotation.y,this.pitch=-.03,this.events.aim(!1),this.events.vehicle(!0,e.hp,performance.now()>=this.tankShotAt,e.name,`左键主炮 · 右键同轴机枪 · C 炮手瞄具`,e.maxHp,1)}leaveTank(){let e=this.playerTank;if(!e)return;e.playerDriven=!1,this.tankMgFiring=!1,this.tankGunnerView=!1,this.playerTank=void 0,this.weapon.visible=!0;let t=new U(2.4,0,0).applyQuaternion(e.root.quaternion);this.camera.position.copy(e.root.position).add(t),this.groundLevel=this.terrainHeight(this.camera.position.x,this.camera.position.z),this.camera.position.y=this.groundLevel+1.72,this.resetCameraView(),this.events.vehicle(!1,0,!1),this.events.tankSight(!1,!1,!1),this.events.loadout(this.activeLoadout()),this.events.ammo(this.mag,this.reserve,!1)}enterTransport(e){this.dismountTransportDriver(e),this.playerTransport=e,this.playerTransportPassenger=!1,this.playerTransportSeat=-1,e.playerDriven=!0,this.weapon.visible=!1,this.aiming=!1,this.yaw=e.root.rotation.y+Math.PI,this.pitch=-.04,this.resetCameraView(70),this.events.aim(!1),this.events.vehicle(!0,e.hp,!0,e.name,`运输载具 · E 下车`,e.maxHp,1)}enterTransportPassenger(e){this.playerTransport=e,this.playerTransportPassenger=!0,this.playerTransportSeat=5,this.weapon.visible=!0,this.aiming=!1,this.yaw=e.root.rotation.y,this.pitch=-.04,this.resetCameraView(),this.events.aim(!1),this.events.vehicle(!1,0,!1),this.events.loadout({...this.activeLoadout(),weapon:`${this.activeLoadout().weapon} · 搭乘卡车`}),this.events.ammo(this.mag,this.reserve,!1)}leaveTransport(){let e=this.playerTransport;if(!e)return;this.playerTransportPassenger||(e.playerDriven=!1),this.playerTransport=void 0,this.playerTransportPassenger=!1,this.playerTransportSeat=-1,this.weapon.visible=!0;let t=new U(2.2,0,0).applyQuaternion(e.root.quaternion);this.camera.position.copy(e.root.position).add(t),this.groundLevel=this.terrainHeight(this.camera.position.x,this.camera.position.z),this.camera.position.y=this.groundLevel+1.72,this.resetCameraView(),this.events.vehicle(!1,0,!1),this.events.loadout(this.activeLoadout()),this.events.ammo(this.mag,this.reserve,!1)}updatePlayerTransport(e){let t=this.playerTransport;if(!t||!t.alive)return;let n=!!this.keys.has(`KeyW`)-+!!this.keys.has(`KeyS`),r=!!this.keys.has(`KeyA`)-+!!this.keys.has(`KeyD`);Math.abs(n)>.01&&(t.root.rotation.y-=r*e*1.05*Math.sign(n));let i=new U(Math.sin(t.root.rotation.y),0,Math.cos(t.root.rotation.y)),a=n*e*(n>0?6.2:3.2);this.moveTankWithCollision(t.root.position,i.x*a,i.z*a);for(let e of t.wheels)e.rotation.x-=a*1.8;let o=t.root.position.clone().setY(2.45),s=new U(Math.sin(this.yaw)*Math.cos(this.pitch),.34-Math.sin(-this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)).normalize();this.ray.set(o,s),this.ray.far=9;let c=this.ray.intersectObjects(this.coverMeshes,!1)[0],l=c?Math.max(2.6,c.distance-.45):8.5;this.ray.far=1/0,this.camera.position.copy(o).addScaledVector(s,l),this.camera.lookAt(o.clone().add(new U(0,.2,0))),this.camera.fov=V.damp(this.camera.fov,70,10,e),this.camera.updateProjectionMatrix();let u=this.bots.filter(e=>e.alive&&e.riding===t).length,d=Math.round(Math.abs(n)*(n>0?54:24));this.events.vehicle(!0,t.hp,!0,t.name,`速度 ${d} km/h · 载员 ${u}/6 · WASD 驾驶 · E 下车`)}updatePlayerTransportPassenger(){let e=this.playerTransport;if(!e||!e.alive)return;let t=new U(this.playerTransportSeat%2?.68:-.68,1.78,-.2-Math.floor(this.playerTransportSeat/2)*.72).applyQuaternion(e.root.quaternion);this.camera.position.copy(e.root.position).add(t),this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`),this.camera.fov!==72&&this.resetCameraView(),this.firing&&this.fire(),this.events.loadout({...this.activeLoadout(),weapon:`${this.activeLoadout().weapon} · 搭乘卡车`})}seatPlanePilot(e){if(e.pilot?.alive)return;let t=this.bots.find(t=>t.alive&&t.team===e.team&&!t.inSquad&&!t.chuting&&!t.riding&&!t.drivingTank&&!t.drivingTransport&&!t.piloting&&!t.emplacement&&!t.machineGun&&!t.mortarRig);t&&(e.pilot=t,t.piloting=e,t.root.position.copy(e.root.position),t.root.visible=!1,t.body.layers.disable(0),t.head.layers.disable(0),t.weapon.visible=!1)}releasePlanePilot(e){let t=e.pilot;t&&(e.pilot=void 0,t.piloting=void 0,t.root.visible=!0,t.body.layers.enable(0),t.head.layers.enable(0),t.weapon.visible=!0,t.root.position.set((Math.random()-.5)*8,0,t.team===`ally`?48:-48),t.nextShot=performance.now()/1e3+1)}enterPlane(e){this.releasePlanePilot(e),this.playerPlane=e,e.playerDriven=!0,e.speed=Math.max(e.speed,26),e.throttle=Math.max(e.throttle,.8),this.weapon.visible=!1,this.aiming=!1,this.yaw=e.root.rotation.y,this.pitch=e.root.rotation.x,this.planeStickPitch=this.pitch,this.events.aim(!1),this.events.vehicle(!0,e.hp,!0,e.name,`左键机枪 · 右键/B 炸弹 ×${e.bombs} · Q/E 方向舵 · E 跳伞`,e.maxHp,e.bombs/e.maxBombs)}leavePlane(){let e=this.playerPlane;e&&(e.playerDriven=!1,e.abandoned=!0,e.nextAttack=performance.now()/1e3,this.playerPlane=void 0,this.parachuting=!0,this.weapon.visible=!1,this.camera.position.copy(e.root.position).add(new U(0,-.8,0)),this.events.vehicle(!1,0,!1),this.deployParachute())}deployParachute(){this.parachute&&this.disposeGroup(this.parachute);let e=new K,t=new Y(new Vi(1.8,18,8,0,Math.PI*2,0,Math.PI/2),new $i({color:14209464,roughness:.9,side:2}));t.scale.y=.42,e.add(t);let n=new oi({color:6117196});for(let t of[0,Math.PI/2,Math.PI,Math.PI*1.5]){let r=new U(Math.sin(t)*1.65,0,Math.cos(t)*1.65),i=new Er().setFromPoints([r,new U(0,-2.6,0)]);e.add(new mi(i,n.clone()))}this.scene.add(e),this.parachute=e}updateParachute(e){if(!this.parachuting)return;let t=new U(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),n=new U(Math.cos(this.yaw),0,-Math.sin(this.yaw)),r=new U;this.keys.has(`KeyW`)&&r.add(t),this.keys.has(`KeyS`)&&r.sub(t),this.keys.has(`KeyD`)&&r.add(n),this.keys.has(`KeyA`)&&r.sub(n),r.lengthSq()&&this.camera.position.addScaledVector(r.normalize(),e*4.2),this.camera.position.y-=e*3.6;let i=this.battlefieldHalfWidth()-.5;this.camera.position.x=V.clamp(this.camera.position.x,-i,i),this.camera.position.z=V.clamp(this.camera.position.z,-58,58),this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`),this.parachute&&this.parachute.position.copy(this.camera.position).add(new U(0,2.6,0));let a=this.terrainHeight(this.camera.position.x,this.camera.position.z);this.camera.position.y>a+1.72||(this.groundLevel=a,this.camera.position.y=a+1.72,this.parachuting=!1,this.parachute&&=(this.disposeGroup(this.parachute),void 0),this.weapon.visible=!0,this.events.loadout(this.activeLoadout()),this.events.ammo(this.mag,this.reserve,!1))}firePlayerPlane(){let e=this.playerPlane,t=performance.now()/1e3;if(!e||!e.alive||t<e.nextShot)return;e.nextShot=t+.095,this.ray.setFromCamera(new H((Math.random()-.5)*.008,(Math.random()-.5)*.008),this.camera);let n=[...this.planes.filter(e=>e.alive&&e.team===`enemy`).map(e=>e.hitbox),...this.bots.filter(e=>e.alive&&e.team===`enemy`).flatMap(e=>[e.body,e.head]),...this.tanks.filter(e=>e.alive&&e.team===`enemy`).map(e=>e.hitbox),...this.transports.filter(e=>e.alive&&e.team===`enemy`).map(e=>e.hitbox),...this.emplacements.filter(e=>e.alive&&e.team===`enemy`).map(e=>e.hitbox),...this.coverMeshes],r=this.ray.intersectObjects(n,!1)[0],i=r?.object.userData.plane,a=r?.object.userData.bot,o=r?.object.userData.tank,s=r?.object.userData.transport,c=r?.object.userData.emplacement,l=e.root.position.clone().add(new U(0,0,-2).applyEuler(e.root.rotation)),u=r?.point??this.ray.ray.at(180,new U);if(this.tracer(l,u,16768899),this.audio.shot(`auto`),i)this.damagePlane(i,12,!0);else if(a){let e=Math.min(a.hp,18);a.hp-=18;let t=a.hp<=0;this.events.hit(t,!1,e),t&&this.kill(a)}else o?this.damageTank(o,3,!0):s?this.damageTransport(s,5,!0):c&&this.damageEmplacement(c,6,!0)}dropPlaneBomb(){let e=this.playerPlane,t=performance.now()/1e3;!e||this.launchPlaneBomb(e,!0,t)}launchPlaneBomb(e,t,n){if(!e.alive||!e.bombs||n<e.nextBomb)return!1;e.bombs--,e.nextBomb=n+1.4,e.bombRearmAt||=n+28;let r=new Y(new Mi(.18,.72,5,8),new $i({color:2698536,roughness:.65,metalness:.35}));r.rotation.z=Math.PI/2,r.position.copy(e.root.position).add(new U(0,-.7,0).applyEuler(e.root.rotation)),this.scene.add(r);let i=new U(0,0,-1).applyEuler(e.root.rotation).multiplyScalar(e.speed*.85).add(new U(0,-4,0));return this.grenadesInWorld.push({mesh:r,velocity:i,detonateAt:n+6,team:e.team,playerOwned:t,bomb:!0}),!0}updatePlayerPlane(e){let t=this.playerPlane;if(!t||!t.alive)return;let n=performance.now()/1e3,r=!!this.keys.has(`KeyW`)-+!!this.keys.has(`KeyS`),i=!!this.keys.has(`KeyA`)-+!!this.keys.has(`KeyD`),a=!!this.keys.has(`KeyQ`)-+!!this.keys.has(`KeyE`);t.throttle=V.clamp(t.throttle+r*.55*e,0,1.12);let o=V.clamp(t.speed/24,.35,1.4),s=V.clamp((t.speed-24*.55)/(24*.4),.12,1),c=i*.95;t.root.rotation.z=V.damp(t.root.rotation.z,c,4.5,e);let l=V.clamp(this.planeStickPitch-this.pitch,-.55,.55),u=l*(2.1*o+.15)*s;this.pitch+=u*Math.cos(t.root.rotation.z)*e,this.yaw+=u*Math.sin(t.root.rotation.z)*1.15*e,this.yaw+=a*.45*o*e,this.pitch=V.clamp(this.pitch,-1.35,1.2),s<.85?(this.pitch=V.damp(this.pitch,-.55,(1-s)*1.6,e),s<.5&&!t.stallWarned&&(t.stallWarned=!0,this.status=`失速！推头俯冲恢复速度`,this.statusUntil=n+2.2)):t.stallWarned=!1,t.root.rotation.set(this.pitch,this.yaw,t.root.rotation.z,`YXZ`);let d=new U(0,0,-1).applyEuler(t.root.rotation),f=d.y,p=13.5*t.throttle*(1-o*.28),m=-10.5*f,h=-(2.2+Math.abs(l)*5.5)*t.speed**2/45**2;t.speed=V.clamp(t.speed+(p+m+h)*e,6,52),t.root.position.addScaledVector(d,t.speed*e),t.root.position.y-=(1-s)*9.5*e,t.root.position.x=V.clamp(t.root.position.x,-105,105),t.root.position.z=V.clamp(t.root.position.z,-105,105),(Math.abs(t.root.position.x)>=104||Math.abs(t.root.position.z)>=104)&&(this.yaw+=Math.PI*e*.55);let g=d.clone().negate();g.y+=.34,g.normalize();let _=t.root.position.clone(),v=12.5;this.ray.set(_,g),this.ray.far=v;let y=this.ray.intersectObjects(this.coverMeshes,!1)[0];if(this.ray.far=1/0,this.camera.position.copy(_).addScaledVector(g,y?Math.max(3,y.distance-.5):v),this.camera.lookAt(_.clone().addScaledVector(d,24)),this.camera.fov=V.damp(this.camera.fov,72+t.speed*.14,6,e),this.camera.updateProjectionMatrix(),this.firing&&this.firePlayerPlane(),t.root.position.y<2.2){this.damagePlane(t,999,!1);return}t.bombs<t.maxBombs&&n>=t.bombRearmAt&&(t.bombs++,t.bombRearmAt=t.bombs<t.maxBombs?n+28:0);let b=s<.5?` · 失速！`:s<.85?` · 临界速度`:``;this.events.vehicle(!0,t.hp,n>=t.nextShot,t.name,`速度 ${Math.round(t.speed*7.2)} km/h · 高度 ${Math.max(0,Math.round(t.root.position.y))}m · 油门 ${Math.round(t.throttle*100)}%${b} · 炸弹 ×${t.bombs} · Q/E 方向舵`)}enterEmplacement(e){e.operator&&=(e.operator.emplacement=void 0,void 0),this.playerEmplacement=e,e.occupied=!0,this.weapon.visible=!1,this.aiming=!1,this.yaw=e.root.rotation.y+e.yaw.rotation.y,this.pitch=e.kind===`aa`?-.22:-.03,this.events.aim(!1),this.events.vehicle(!0,e.hp,performance.now()/1e3>=e.nextShot,e.kind===`aa`?`二〇毫米防空炮`:`三七毫米反坦克炮`,e.kind===`aa`?`防空火力 · E 撤离`:`反装甲火力 · E 撤离`)}leaveEmplacement(){let e=this.playerEmplacement;if(!e)return;e.occupied=!1,this.playerEmplacement=void 0,this.events.emplacementLead(),this.weapon.visible=!0;let t=new U(1.8,0,0).applyQuaternion(e.root.quaternion);this.camera.position.copy(e.root.position).add(t).setY(1.72),this.events.vehicle(!1,0,!1),this.events.loadout(this.activeLoadout()),this.events.ammo(this.mag,this.reserve,!1)}updatePlayerEmplacement(){let e=this.playerEmplacement;if(!e||!e.alive)return;let t=e.kind===`aa`?-.9:-.25,n=e.kind===`aa`?.42:.18;if(this.pitch=V.clamp(this.pitch,t,n),e.kind===`at`){let t=Math.atan2(Math.sin(this.yaw-e.root.rotation.y),Math.cos(this.yaw-e.root.rotation.y));this.yaw=e.root.rotation.y+V.clamp(t,-1,1)}e.yaw.rotation.y=this.yaw-e.root.rotation.y,e.yaw.rotation.x=-this.pitch*(e.kind===`aa`?.65:.25);let r=new U(0,e.kind===`aa`?1.55:1.35,.3).applyQuaternion(e.root.quaternion);if(this.camera.position.copy(e.root.position).add(r),this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`),this.camera.updateMatrixWorld(),e.kind===`aa`){let t=this.planes.filter(t=>t.alive&&t.team!==e.team).sort((t,n)=>e.root.position.distanceToSquared(t.root.position)-e.root.position.distanceToSquared(n.root.position))[0];if(t){let n=e.root.position.distanceTo(t.root.position),r=new U(0,0,-1).applyQuaternion(t.root.quaternion).multiplyScalar(t.speed),i=t.root.position.clone().addScaledVector(r,n/150).project(this.camera);this.events.emplacementLead(i.z<1&&Math.abs(i.x)<1.1&&Math.abs(i.y)<1.1?(i.x*.5+.5)*innerWidth:void 0,i.z<1&&Math.abs(i.x)<1.1&&Math.abs(i.y)<1.1?(1-(i.y*.5+.5))*innerHeight:void 0)}else this.events.emplacementLead()}else this.events.emplacementLead();this.firing&&e.kind===`aa`&&this.fireEmplacement(),this.events.vehicle(!0,e.hp,performance.now()/1e3>=e.nextShot,e.kind===`aa`?`二〇毫米防空炮`:`三七毫米反坦克炮`,e.kind===`aa`?`防空火力 · E 撤离`:`反装甲火力 · E 撤离`)}fireEmplacement(){let e=this.playerEmplacement,t=performance.now()/1e3;if(!e||!e.alive||t<e.nextShot)return;if(e.nextShot=t+(e.kind===`aa`?.22:3.7),this.ray.setFromCamera(new H,this.camera),e.kind===`at`){let t=new U;this.camera.getWorldDirection(t),this.launchCannonShell(e.muzzle.getWorldPosition(new U),t,e.team,!0,220),this.audio.shot(`bolt`);return}let n=[...this.bots.filter(e=>e.alive&&e.team===`enemy`).flatMap(e=>[e.body,e.head]),...this.tanks.filter(e=>e.alive&&e.team===`enemy`).map(e=>e.hitbox),...this.transports.filter(e=>e.alive&&e.team===`enemy`).map(e=>e.hitbox),...this.emplacements.filter(e=>e.alive&&e.team===`enemy`).map(e=>e.hitbox),...this.depots.filter(e=>!e.destroyed).map(e=>e.hitbox),...this.coverMeshes],r=[...this.planes.filter(e=>e.alive&&e.team===`enemy`).map(e=>e.hitbox),...n],i=this.ray.intersectObjects(r,!1)[0],a=i?.object.userData.bot,o=i?.object.userData.tank,s=i?.object.userData.transport,c=i?.object.userData.emplacement,l=i?.object.userData.plane,u=i?.object.userData.depot,d=i?.object.userData.structure,f=i?.point??this.ray.ray.at(150,new U);if(this.tracer(e.muzzle.getWorldPosition(new U),f,16769946),this.audio.shot(`auto`),l)this.damagePlane(l,25,!0);else if(o)this.damageTank(o,8,!0);else if(s)this.damageTransport(s,12,!0);else if(c)this.damageEmplacement(c,14,!0);else if(d)this.damageStructure(d,8);else if(u)this.damageDepot(u,12,!0);else if(a){let e=Math.min(a.hp,24);a.hp-=24;let t=a.hp<=0;this.events.hit(t,i?.object.userData.hitZone===`head`,e),t&&this.kill(a,i?.object.userData.hitZone===`head`)}}launchCannonShell(e,t,n,r,i){let a=this.tanks.filter(e=>e.alive&&e.team===n).sort((t,n)=>t.muzzle.getWorldPosition(new U).distanceToSquared(e)-n.muzzle.getWorldPosition(new U).distanceToSquared(e))[0],o=a&&a.muzzle.getWorldPosition(new U).distanceToSquared(e)<1,s=o?a.gunPen:65;o&&(i=a.gunDamage,this.tankCannonFx(a,e,t),!r&&!this.crewAlive(a,`loader`)&&(a.nextShot+=Math.max(0,a.nextShot-performance.now()/1e3)*.6),!r&&!this.crewAlive(a,`commander`)&&(t=t.clone().add(new U((Math.random()-.5)*.035,(Math.random()-.5)*.018,(Math.random()-.5)*.035)).normalize()));let c=new Y(new Vi(.085,7,5),new Lr({color:n===`ally`?16769440:16742232})),l=o?a.name:`三七毫米反坦克炮`;c.position.copy(e),this.scene.add(c),this.cannonShells.push({mesh:c,velocity:t.clone().normalize().multiplyScalar(82),life:2.4,team:n,playerOwned:r,damage:i,penetration:s,sourceName:l,sourcePosition:e.clone()})}tankCannonFx(e,t,n){let r=new Y(new Vi(.22,9,6),new Lr({color:16760922,transparent:!0,opacity:.92}));r.position.copy(t),r.scale.set(1,1,2.5),this.scene.add(r);let i=new Na(16751157,12,11);i.position.copy(t),this.scene.add(i);for(let e=0;e<9;e++)this.particle(t.clone().addScaledVector(n,.1+Math.random()*.35),n.clone().multiplyScalar(1.2+Math.random()*3).add(new U((Math.random()-.5)*1.8,.2+Math.random()*1.5,(Math.random()-.5)*1.8)),e<3?16751410:7829102,e<3?.055:.13+Math.random()*.08,.3+Math.random()*.45,-.15,.55,e<3?.9:.42);let a=++e.recoilToken,o=performance.now(),s=-2.15,c=()=>{this.scene.remove(r,i),r.geometry.dispose(),r.material.dispose()},l=()=>{if(a!==e.recoilToken){c();return}let t=Math.min((performance.now()-o)/420,1),n=Math.sin(Math.min(1,t*1.6)*Math.PI)*(1-t*.28);e.barrel.position.z=s+n*.48,e.turret.position.z=n*.11,r.material.opacity=Math.max(0,1-t*5),r.scale.multiplyScalar(1+.12*(1-t)),i.intensity=Math.max(0,12*(1-t*7)),t<1?requestAnimationFrame(l):(e.barrel.position.z=s,e.turret.position.z=0,c())};l(),this.playerTank===e&&(this.pitch=V.clamp(this.pitch-.035,-1.45,1.45),this.yaw+=(Math.random()-.5)*.012)}impactCannonShell(e,t,n){let r=n?.object.userData.bot,i=n?.object.userData.tank,a=n?.object.userData.transport,o=n?.object.userData.emplacement,s=n?.object.userData.depot,c=n?.object.userData.structure,l=n?.object.userData.urbanBuilding;r&&r.team!==e.team&&(r.hp-=e.damage*.82,r.hp<=0&&(e.playerOwned?this.kill(r,!1,e.velocity):this.down(r,e.velocity))),i&&i.team!==e.team&&this.damageTank(i,e.damage,e.playerOwned,t,e.penetration,e.velocity,`${e.sourceName} · 主炮炮弹`,e.sourcePosition),a&&a.team!==e.team&&this.damageTransport(a,e.damage*1.08,e.playerOwned),o&&o.team!==e.team&&this.damageEmplacement(o,e.damage,e.playerOwned),s&&e.team===`ally`&&this.damageDepot(s,e.damage,e.playerOwned),c&&this.damageStructure(c,e.damage*2.1),l&&this.damageUrbanBuilding(l,e.damage*2.2);for(let n of this.bots){if(!n.alive||n.team===e.team||n===r)continue;let i=n.root.position.distanceTo(t);i>=3.4||(n.hp-=90*(1-i/3.4),n.hp<=0&&(e.playerOwned?this.kill(n,!1,n.root.position.clone().sub(t)):this.down(n,n.root.position.clone().sub(t))))}let u=!!(i||a||o),d=!!(s||c||l),f=!n||t.y<=.12;this.cannonImpactFx(t,u?`armor`:d?`structure`:f?`ground`:r?`flesh`:`hard`,e.damage),f&&this.crater(t,V.clamp(.72+e.damage/260,1.05,1.75))}cannonImpactFx(e,t,n){let r=V.clamp(n/220,.65,1.35),i=this.soundAt(e);this.audio.explosion(i.volume*(t===`armor`?.48:.72),i.pan);let a=new Y(new Vi(.18,8,6),new Lr({color:t===`armor`?16765562:16751935,transparent:!0,opacity:.85}));a.position.copy(e),this.scene.add(a);let o=t===`armor`?12:t===`structure`?16:t===`ground`?14:7;for(let n=0;n<o;n++){let i=t===`armor`||t===`hard`,a=i?n%3?16758108:6908774:t===`structure`?n%3?6445131:3684662:t===`ground`?this.campaign.theme===`loess`?9072204:5589050:7280404;this.particle(e.clone().add(new U((Math.random()-.5)*.5,Math.random()*.35,(Math.random()-.5)*.5)),new U((Math.random()-.5)*(i?8:5)*r,1+Math.random()*(i?5:7)*r,(Math.random()-.5)*(i?8:5)*r),a,i?.04+Math.random()*.05:.12+Math.random()*.2,.35+Math.random()*.55,i?8:7)}for(let n=0;n<(t===`armor`?3:6);n++)this.particle(e.clone().add(new U((Math.random()-.5)*.6,.2+Math.random()*.5,(Math.random()-.5)*.6)),new U(Math.random()-.5,.8+Math.random()*1.7,Math.random()-.5),3750711,.2+Math.random()*.2,.8+Math.random()*.7,-.1,.8,.46);let s=performance.now(),c=()=>{let e=Math.min((performance.now()-s)/190,1);a.scale.setScalar(.4+e*4*r),a.material.opacity=(1-e)*.85,e<1?requestAnimationFrame(c):(this.scene.remove(a),a.geometry.dispose(),a.material.dispose())};c()}updateCannonShells(e){for(let t=this.cannonShells.length-1;t>=0;t--){let n=this.cannonShells[t],r=n.mesh.position.clone(),i=n.velocity.length()*e,a=n.velocity.clone().normalize(),o=[...this.bots.filter(e=>e.alive&&e.team!==n.team).flatMap(e=>[e.body,e.head]),...this.tanks.filter(e=>e.alive&&e.team!==n.team).map(e=>e.hitbox),...this.transports.filter(e=>e.alive&&e.team!==n.team).map(e=>e.hitbox),...this.emplacements.filter(e=>e.alive&&e.team!==n.team).map(e=>e.hitbox),...n.team===`ally`?this.depots.filter(e=>!e.destroyed).map(e=>e.hitbox):[],...this.coverMeshes];this.ray.set(r,a),this.ray.far=i;let s=this.ray.intersectObjects(o,!1)[0],c=s?.point;if(!c&&n.team===`enemy`&&!this.dead){let e=new fo(r,r.clone().addScaledVector(a,i)).closestPointToPoint(this.camera.position,!0,new U);e.distanceTo(this.camera.position)<.65&&(c=e,this.hurtPlayer(65,r,`${n.sourceName} · 主炮炮弹直击`))}n.mesh.position.addScaledVector(n.velocity,e),n.velocity.y-=e*2.2,n.life-=e;let l=this.terrainHeight(n.mesh.position.x,n.mesh.position.z)+.08;if(!c&&n.mesh.position.y<=l&&(c=n.mesh.position.clone().setY(l)),!c&&n.life>0){this.tracer(r,n.mesh.position,n.team===`ally`?16769956:16741975);continue}this.cannonShells.splice(t,1),this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.impactCannonShell(n,c??n.mesh.position,s)}this.ray.far=1/0}firePlayerTank(){let e=this.playerTank,t=performance.now();if(!e||!e.alive||!e.turretHealth||!this.crewAlive(e,`gunner`)||t<this.tankShotAt)return;let n=this.crewAlive(e,`loader`)?1:1.6,r=1+(1-e.turretHealth/100)*1.4;this.tankShotAt=t+4300*n*r;let i=new U(0,0,-1).applyQuaternion(e.pitch.getWorldQuaternion(new Ot)).normalize();this.launchCannonShell(e.muzzle.getWorldPosition(new U),i,e.team,!0,e.gunDamage),this.audio.shot(`bolt`),this.events.vehicle(!0,e.hp,!1,e.name,`主炮装填中 · 右键同轴机枪 · C 切换视角`,e.maxHp,0)}firePlayerTankMg(){let e=this.playerTank,t=performance.now();if(!e||!e.alive||!e.turretHealth||!this.crewAlive(e,`gunner`)||t<this.tankMgShotAt)return;this.tankMgShotAt=t+105,this.ray.setFromCamera(new H((Math.random()-.5)*.012,(Math.random()-.5)*.009),this.camera);let n=[...this.bots.filter(e=>e.alive&&e.team===`enemy`).flatMap(e=>[e.body,e.head]),...this.transports.filter(e=>e.alive&&e.team===`enemy`).map(e=>e.hitbox),...this.emplacements.filter(e=>e.alive&&e.team===`enemy`).map(e=>e.hitbox),...this.coverMeshes],r=this.ray.intersectObjects(n,!1)[0],i=r?.object.userData.bot,a=r?.object.userData.transport,o=r?.object.userData.emplacement,s=e.coaxMuzzle.getWorldPosition(new U),c=r?.point??this.ray.ray.at(120,new U);if(this.tracer(s,c,16768387),this.audio.shot(`auto`,.58),this.suppressBots(s,c),i){let e=r?.object.userData.hitZone===`head`,t=e?30:18,n=Math.min(i.hp,t);i.hp-=t;let a=i.hp<=0;this.events.hit(a,e,n),a&&this.kill(i,e)}else a?this.damageTransport(a,2,!0):o&&this.damageEmplacement(o,2,!0)}updatePlayerTank(e){let t=this.playerTank;if(!t||!t.alive)return;let n=t.tracks<=0||t.engine<=0||!this.crewAlive(t,`driver`)?0:(.35+t.tracks/100*.65)*(.3+t.engine/100*.7)*(.55+t.crew*.1125),r=!!this.keys.has(`KeyW`)-+!!this.keys.has(`KeyS`),i=!!this.keys.has(`KeyA`)-+!!this.keys.has(`KeyD`);t.root.rotation.y+=i*e*.72*n;let a=new U(-Math.sin(t.root.rotation.y),0,-Math.cos(t.root.rotation.y)),o=r*e*(r>0?4.2:2.4)*n;this.moveTankWithCollision(t.root.position,a.x*o,a.z*o);let s=this.crewAlive(t,`commander`)?1:.75;if(t.turret.rotation.y=V.damp(t.turret.rotation.y,this.yaw-t.root.rotation.y,(1.5+t.turretHealth/20)*s,e),this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`),this.tankGunnerView)this.camera.position.copy(t.turret.localToWorld(new U(0,.48,-.82)));else{let e=t.root.position.clone().setY(2.65),n=new U(Math.sin(this.yaw)*Math.cos(this.pitch),.32-Math.sin(-this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)).normalize();this.ray.set(e,n),this.ray.far=9;let r=this.ray.intersectObjects(this.coverMeshes,!1)[0],i=r?Math.max(2.4,r.distance-.4):8.5;this.camera.position.copy(e).addScaledVector(n,i),this.ray.far=1/0}let c=this.tankGunnerView?30:68;this.camera.fov=V.damp(this.camera.fov,c,10,e),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld();let l=new U;this.camera.getWorldDirection(l),this.ray.set(this.camera.position,l),this.ray.far=160;let u=this.ray.intersectObjects(this.coverMeshes,!1)[0]?.distance??160;this.ray.far=1/0;let d=this.tankGunnerView?3.5*u/(260*130):0,f=V.clamp(this.pitch+d,-.18,.35);t.pitch.rotation.x=V.damp(t.pitch.rotation.x,f,(1.2+t.turretHealth/22)*s,e),this.tankMgFiring&&this.firePlayerTankMg();let p=performance.now()>=this.tankShotAt&&t.turretHealth>0,m=t.muzzle.getWorldPosition(new U),h=new U(0,0,-1).applyQuaternion(t.pitch.getWorldQuaternion(new Ot)),g=m.clone().addScaledVector(h,80).project(this.camera),_=g.z<1&&Math.abs(g.x)<=1.15&&Math.abs(g.y)<=1.15;this.events.tankSight(!0,this.tankGunnerView,p,_?(g.x*.5+.5)*innerWidth:void 0,_?(1-(g.y*.5+.5))*innerHeight:void 0);let v=t.crewMen.filter(e=>!e.alive).map(e=>e.role===`driver`?`驾驶员`:e.role===`gunner`?`炮手`:e.role===`loader`?`装填手`:`车长`).join(`、`);this.events.vehicle(!0,t.hp,p,t.name,`左键主炮 · 右键同轴机枪 · C ${this.tankGunnerView?`车长外视`:`炮手瞄具`} · 距离 ${Math.round(u)}m · ${v?`${v}阵亡`:`乘员 ${t.crew}/${t.crewCapacity}`}`)}updateBrace(){let e=this.weaponSlot===`primary`&&this.selectedLoadout.id===`support`,t=this.braced?this.braceYaw:this.yaw,n=new U(-Math.sin(t),0,-Math.cos(t)),r=this.camera.position.clone().addScaledVector(n,.9);if(this.canBrace=e&&!this.jumpHeight&&(this.stance===`prone`||this.colliders.some(e=>r.x>e.minX-.2&&r.x<e.maxX+.2&&r.z>e.minZ-.2&&r.z<e.maxZ+.2)),this.braced&&!this.canBrace&&(this.braced=!1),this.braced){let e=Math.atan2(Math.sin(this.yaw-this.braceYaw),Math.cos(this.yaw-this.braceYaw));this.yaw=this.braceYaw+V.clamp(e,-.72,.72)}this.events.brace(this.canBrace,this.braced)}toggleBrace(){if(!(this.dead||this.playerTank||this.playerTransport||this.playerPlane||this.playerMortar||this.playerEmplacement||this.playerMG)){if(this.braced){this.braced=!1,this.status=`轻机枪已收起`,this.statusUntil=performance.now()/1e3+1,this.audio.click(540,.07);return}if(!this.canBrace){this.selectedLoadout.id===`support`&&this.weaponSlot===`primary`&&(this.status=`卧倒或靠近齐腰掩体才能架枪`,this.statusUntil=performance.now()/1e3+1.5);return}this.braced=!0,this.braceYaw=this.yaw,this.aiming=!0,this.events.aim(!0),this.status=`ZB-26 已架设`,this.statusUntil=performance.now()/1e3+1.4,this.audio.click(760,.08)}}platformLevel(e){return this.platforms.reduce((t,n)=>e.y>n.y+.2&&e.x>n.minX&&e.x<n.maxX&&e.z>n.minZ&&e.z<n.maxZ?Math.max(t,n.y):t,0)}tryLadder(){if(this.playerLadder||!this.keys.has(`KeyW`)&&!this.keys.has(`KeyS`)||this.jumpHeight||this.jumpVelocity||this.stance===`prone`)return;let e=this.ladders.find(e=>Math.hypot(e.x-this.camera.position.x,e.z-this.camera.position.z)<1.05&&this.camera.position.y>e.y0-.6&&this.camera.position.y<e.y1+1);e&&(this.playerLadder=e,this.braced=!1,this.stance=`stand`,this.jumpHeight=0,this.jumpVelocity=0,this.camera.position.x=e.x,this.camera.position.y=Math.min(this.camera.position.y,e.y1),this.camera.position.z=e.z,this.status=`正在攀爬 · W/S 上下 · Space 跳离`,this.statusUntil=performance.now()/1e3+1.8)}updateLadder(e){let t=this.playerLadder;if(!t)return!1;let n=!!this.keys.has(`KeyW`)-+!!this.keys.has(`KeyS`);if(this.camera.position.set(t.x,V.clamp(this.camera.position.y+n*e*3.1,t.y0,t.y1),t.z),this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`),this.weapon.position.y=-.31+Math.sin(performance.now()*.012)*.025,this.events.movement(this.stamina,`stand`),this.camera.position.y>=t.y1&&n>0){this.playerLadder=void 0;let e=new U(Math.sin(t.face),0,Math.cos(t.face));this.camera.position.addScaledVector(e,.72),this.groundLevel=this.platformLevel(this.camera.position),this.camera.position.y=this.groundLevel+1.72,this.status=`已登上瞭望台`,this.statusUntil=performance.now()/1e3+1.3}else this.camera.position.y<=t.y0&&n<0&&(this.playerLadder=void 0,this.groundLevel=this.terrainHeight(this.camera.position.x,this.camera.position.z),this.camera.position.y=this.groundLevel+1.72);return!0}jump(){if(this.playerLadder){let e=this.playerLadder;this.playerLadder=void 0,this.camera.position.x-=Math.sin(e.face)*.75,this.camera.position.z-=Math.cos(e.face)*.75,this.jumpVelocity=3.6,this.groundLevel=this.terrainHeight(this.camera.position.x,this.camera.position.z);return}this.dead||this.buildAction||this.braced||this.jumpHeight||this.jumpVelocity||this.stance!==`stand`||this.playerTank||this.playerTransport||this.playerPlane||this.playerMortar||this.playerEmplacement||this.playerMG||this.parachuting||(this.jumpVelocity=5.7,this.stamina=Math.max(0,this.stamina-.08),this.staminaRegenAt=performance.now()/1e3+1,this.audio.click(180,.045))}updatePlayer(e,t){if(this.tryLadder(),this.updateLadder(e))return;t-this.lastDamageAt>6&&this.hp<70&&(this.hp=Math.min(70,this.hp+e*4),this.events.health(this.hp,!1));let n=this.fortifications.some(e=>e.kind===`wire`&&e.team!==`ally`&&e.center.distanceToSquared(this.camera.position)<2.3**2);if(n&&t>=this.nextWireDamage&&(this.nextWireDamage=t+.8,this.hurtPlayer(4,this.camera.position,`铁丝网割伤`),this.dead))return;this.updateBrace(),this.braced&&(this.keys.has(`KeyW`)||this.keys.has(`KeyA`)||this.keys.has(`KeyS`)||this.keys.has(`KeyD`)||this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`))&&(this.braced=!1);let r=this.activeLoadout(),i=r.id===`scout`&&this.aiming,a=t<this.breathExhaustedUntil;this.holdingBreath=i&&!a&&this.stamina>.02&&(this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`)),this.breathPhase+=e*(a?4.4:1.65);let o=i?this.holdingBreath?28e-5:a?.008:.0032:0,s=Math.sin(this.breathPhase)*o,c=Math.sin(this.breathPhase*.73+.8)*o*.72,l=!this.braced&&this.stance!==`prone`&&!this.keys.has(`ShiftLeft`)?(this.keys.has(`KeyQ`)?-1:0)+ +!!this.keys.has(`KeyE`):0;this.lean=V.damp(this.lean,l,10,e),this.firing&&r.kind===`auto`&&this.fire(),this.camera.rotation.set(this.pitch+this.recoil+s,this.yaw+c,-this.lean*.075,`YXZ`),this.recoil=V.lerp(this.recoil,0,1-Math.exp(-e*12)),this.playerMuzzle.visible=t-this.shotAt<.045,this.events.breath(i,this.holdingBreath,a);let u=this.aiming?r.id===`scout`?24:52:72;this.camera.fov=V.damp(this.camera.fov,u,14,e),this.camera.updateProjectionMatrix();let d=new U(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),f=new U(Math.cos(this.yaw),0,-Math.sin(this.yaw)),p=new U;this.keys.has(`KeyW`)&&p.add(d),this.keys.has(`KeyS`)&&p.sub(d),this.keys.has(`KeyD`)&&p.add(f),this.keys.has(`KeyA`)&&p.sub(f);let m=p.lengthSq()>0,h=!this.bandagingUntil&&(this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`))&&this.keys.has(`KeyW`)&&this.stance===`stand`&&!this.aiming,g=m&&h&&this.stamina>.01;g?(this.stamina=Math.max(0,this.stamina-e*.23),this.staminaRegenAt=t+1.15):this.holdingBreath?(this.stamina=Math.max(0,this.stamina-e*.3),this.staminaRegenAt=t+1.35,this.stamina<=.02&&(this.holdingBreath=!1,this.breathExhaustedUntil=t+2.5)):t>=this.staminaRegenAt&&(this.stamina=Math.min(1,this.stamina+e*.16));let _=this.stance===`prone`?1.45:this.stance===`crouch`?3.05:4.8,v=(g?7.5:_)*(this.aiming?.68:1)*(this.bandagingUntil?.45:this.supplyAction?.6:1)*(n?.32:1);if(m&&(p.normalize().multiplyScalar(e*v*(this.jumpHeight?.58:1)),this.moveWithCollision(this.camera.position,p.x,p.z,.28),this.movePhase+=e*v*(g?1.35:1),!this.jumpHeight&&t>=this.nextFootstepAt&&(this.audio.footstep(g,this.stance===`prone`?.28:this.stance===`crouch`?.58:1),this.nextFootstepAt=t+(this.stance===`prone`?.62:g?.29:this.stance===`crouch`?.48:.4))),this.jumpHeight||this.jumpVelocity){let t=this.jumpVelocity;this.jumpVelocity-=15.5*e,this.jumpHeight+=this.jumpVelocity*e,this.jumpHeight<=0&&(this.jumpHeight=0,this.jumpVelocity=0,this.landingKick=V.clamp(Math.abs(t)*.018,.055,.11),this.audio.click(115,.075))}this.landingKick=V.damp(this.landingKick,0,11,e),this.groundLevel=Math.max(this.terrainHeight(this.camera.position.x,this.camera.position.z),this.platformLevel(this.camera.position));let y=this.stance===`prone`?.63:this.stance===`crouch`?1.18:1.72;if(this.camera.position.y=V.damp(this.camera.position.y,this.groundLevel+y+this.jumpHeight-this.landingKick,this.jumpHeight?28:14,e),!this.loading){let n=m&&!this.aiming?Math.sin(this.movePhase*2)*.012:0,r=m&&!this.aiming?Math.cos(this.movePhase)*.009:0,i=t-this.meleeAt,a=i>=0&&i<.5?Math.sin(i/.5*Math.PI):0;this.weapon.position.x=V.damp(this.weapon.position.x,(this.aiming?0:.32)+r+this.lean*.08,18,e),this.weapon.position.y=V.damp(this.weapon.position.y,(this.braced?-.2:this.aiming?-.16:-.27)+n+a*.08,18,e),this.weapon.position.z=V.damp(this.weapon.position.z,(this.braced?-.62:this.aiming?-.52:-.65)-a*.72,22,e),this.weapon.rotation.x=V.damp(this.weapon.rotation.x,-a*.18,18,e),this.weapon.rotation.z=V.damp(this.weapon.rotation.z,this.lean*-.06+a*.12,18,e)}this.events.movement(this.stamina,this.stance)}scheduleArtillery(e){let t=Math.random()<.52?`enemy`:`ally`,n=this.campaign.rule===`assault`?this.objectives[this.assaultIndex]:this.objectives[Math.floor(Math.random()*this.objectives.length)];if(!n)return;let r=4+Math.floor(Math.random()*3);for(let i=0;i<r;i++){let r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*(n.radius+5),o=n.position.clone().add(new U(Math.cos(r)*a,.12,Math.sin(r)*a)),s=new Y(new Bi(.55,.72,20),new Lr({color:t===`enemy`?14836815:7514579,transparent:!0,opacity:.58,side:2,depthTest:!1}));s.rotation.x=-Math.PI/2,s.position.copy(o).setY(.04),s.renderOrder=5,this.scene.add(s),this.artilleryShells.push({position:o,team:t,impactAt:e+2.2+i*.48+Math.random()*.28,marker:s})}t===`enemy`&&(this.status=`敌军炮击预警 · ${n.id} 点`,this.statusUntil=e+2.4)}updateArtillery(e){this.nextArtilleryAt||=e+12+Math.random()*6,e>=this.nextArtilleryAt&&(this.scheduleArtillery(e),this.nextArtilleryAt=e+22+Math.random()*14);for(let t=this.artilleryShells.length-1;t>=0;t--){let n=this.artilleryShells[t],r=n.impactAt-e;if(n.marker.scale.setScalar(1+Math.sin(e*9+t)*.18),n.marker.material.opacity=V.clamp(.25+(2.2-r)*.2,.25,.8),r>0)continue;this.artilleryShells.splice(t,1),this.scene.remove(n.marker),n.marker.geometry.dispose(),n.marker.material.dispose();let i=new Y(new Vi(.08,6,4),new Lr({color:2895915}));i.position.copy(n.position),this.scene.add(i),this.tracer(n.position.clone().setY(30),n.position,n.team===`enemy`?16744544:16768416),this.explode({mesh:i,velocity:new U,detonateAt:e,team:n.team,playerOwned:!1})}}explode(e){let t=e.mesh.position.clone(),n=!!e.antiTank,r=!!e.bomb,i=!!e.mortar,a=r?11:i?8:n?4.5:7,o=r?9:i?6.5:n?5:6;this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();for(let o of this.bots){if(!o.alive||o.team===e.team)continue;let s=o.root.position.distanceTo(t);if(!(s>=a)&&(o.hp-=(r?240:i?165:n?95:135)*(1-s/a),o.hp<=0)){let n=o.root.position.clone().sub(t).setY(0).multiplyScalar((r?2.5:i?1.6:1.15)*(1-s/a));e.playerOwned&&o.team===`enemy`?this.kill(o,!1,n):(e.owner&&e.owner.kills++,this.down(o,n,!1,e.owner))}}for(let a of this.tanks){if(!a.alive||a.team===e.team)continue;let s=a.root.position.distanceTo(t);if(s<o){let c=a.alive,l=e.crash?`${e.sourceName??`飞机`} · 坠毁撞击爆炸`:r?`航空炸弹`:i?`迫击炮弹`:n?`${e.owner?.name??`敌军`} · 反坦克手雷`:`${e.owner?.name??`敌军`} · 手榴弹`;this.damageTank(a,(r?260:i?85:n?390:48)*(1-s/o),e.playerOwned,t,void 0,void 0,l,t),c&&!a.alive&&e.owner&&(e.owner.kills++,this.events.combatKill(e.owner.name,e.owner.team,a.name,a.team))}}for(let a of this.transports){if(!a.alive||a.team===e.team)continue;let s=a.root.position.distanceTo(t);s<o&&this.damageTransport(a,(r?360:i?155:n?430:105)*(1-s/o),e.playerOwned)}for(let a of this.emplacements){if(!a.alive||a.team===e.team)continue;let s=a.root.position.distanceTo(t);s<o&&this.damageEmplacement(a,(r?330:i?180:n?380:130)*(1-s/o),e.playerOwned)}for(let e of this.fieldStructures){if(e.destroyed)continue;let i=e.root.position.distanceTo(t),a=r?12:7;i<a&&this.damageStructure(e,(r?650:n?430:175)*(1-i/a))}for(let e of this.urbanBuildings){if(e.destroyed)continue;let n=e.root.position.distanceTo(t),i=r?15:12;n<i&&this.damageUrbanBuilding(e,(r?520:130)*(1-n/i))}if(e.team===`ally`)for(let i of this.depots){if(i.destroyed)continue;let a=i.position.distanceTo(t),o=r?10:7;a<o&&this.damageDepot(i,(r?460:n?340:145)*(1-a/o),e.playerOwned)}let s=r?11:i?8:n?5:7,c=this.camera.position.distanceTo(t);!this.dead&&c<s&&(e.team===`enemy`||e.playerOwned)&&(this.hurtPlayer((r?190:i?145:n?105:120)*(1-c/s),t,e.crash?`${e.sourceName??`飞机`} · 坠毁撞击爆炸`:r?`航空炸弹爆炸`:i?`迫击炮弹爆炸`:n?`反坦克手雷爆炸`:`破片手雷爆炸`),this.dead&&e.owner&&e.owner.kills++),this.blastCorpses(t,a*1.2,r?7:i?4.8:n?3.8:4.2),this.explosionFx(t),this.crater(t,r?2.1:i?1.45:n?1.4:1.15)}explosionFx(e){let t=this.soundAt(e);this.audio.explosion(t.volume,t.pan);for(let t=0;t<12;t++)this.particle(e.clone().add(new U((Math.random()-.5)*1.5,Math.random(),(Math.random()-.5)*1.5)),new U((Math.random()-.5)*5,2+Math.random()*7,(Math.random()-.5)*5),t<5?16752959:5589050,.08+Math.random()*.16,.7+Math.random()*.65,8);for(let t=0;t<7;t++)this.particle(e.clone().setY(e.y+.5+Math.random()),new U((Math.random()-.5)*1.3,1.2+Math.random()*1.8,(Math.random()-.5)*1.3),3421747,.28+Math.random()*.25,2+Math.random()*1.3,-.2,1.2,.48);let n=new Y(new Vi(1,12,8),new Lr({color:16753467,transparent:!0,opacity:.85}));n.position.copy(e),this.scene.add(n);let r=new Na(16743204,18,18);r.position.copy(e),this.scene.add(r);let i=performance.now(),a=()=>{let e=Math.min((performance.now()-i)/360,1);n.scale.setScalar(.25+e*5),n.material.opacity=(1-e)*.85,r.intensity=(1-e)*18,e<1?requestAnimationFrame(a):(this.scene.remove(n,r),n.geometry.dispose(),n.material.dispose())};a()}crater(e,t=1.25){if(e.y>2.2)return;let n=new Y(new Ni(t*(.82+Math.random()*.32),18),new Lr({color:Math.random()<.35?2170136:3156e3,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));if(n.position.set(e.x,.022,e.z),n.rotation.set(-Math.PI/2,0,Math.random()*Math.PI),this.scene.add(n),this.craters.push(n),this.craters.length<=42)return;let r=this.craters.shift();this.scene.remove(r),r.geometry.dispose(),r.material.dispose()}updateGrenades(e,t){let n=!1;for(let r=this.grenadesInWorld.length-1;r>=0;r--){let i=this.grenadesInWorld[r];if(t>=i.detonateAt){this.grenadesInWorld.splice(r,1),i.smoke?this.deploySmoke(i.mesh.position.clone(),t):this.explode(i),i.smoke&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose());continue}i.velocity.y-=9.8*e,i.mesh.position.addScaledVector(i.velocity,e);let a=this.terrainHeight(i.mesh.position.x,i.mesh.position.z)+.13;if(i.mesh.position.y<a){let e=Math.abs(i.velocity.y);if(i.mesh.position.y=a,i.bomb||i.mortar)i.detonateAt=t;else if(i.velocity.y=e*.34,i.velocity.x*=.68,i.velocity.z*=.68,e>1.1&&t>=(i.lastBounceAt??0)){i.lastBounceAt=t+.12;let e=this.soundAt(i.mesh.position);this.audio.click(560+Math.random()*120,e.volume*.16)}}i.mesh.rotation.x+=e*(i.bomb?2.5:7),i.mesh.rotation.z+=e*(i.bomb?1.4:4),!i.smoke&&i.team===`enemy`&&!this.dead&&i.mesh.position.distanceToSquared(this.camera.position)<(i.mortar?12:8)**2&&(n=!0)}this.events.grenadeWarning(n)}deploySmoke(e,t){e.y=.6;let n=new K;n.position.copy(e),this.scene.add(n);for(let e=0;e<18;e++){let t=new Y(new Li(.7+Math.random()*.65,1),new Lr({color:e%3?10922659:8752004,transparent:!0,opacity:.34,depthWrite:!1})),r=Math.random()*Math.PI*2,i=Math.random()*3.8;t.position.set(Math.cos(r)*i,Math.random()*2.8,Math.sin(r)*i),t.scale.set(.2,.2,.2),n.add(t)}this.smokeClouds.push({root:n,position:e,bornAt:t,expiresAt:t+17})}updateSmoke(e,t){for(let n=this.smokeClouds.length-1;n>=0;n--){let r=this.smokeClouds[n],i=t-r.bornAt,a=r.expiresAt-t;if(a<=0){this.smokeClouds.splice(n,1),this.disposeGroup(r.root);continue}let o=Math.min(1,i/2.2)*Math.min(1,a/2.5);r.root.children.forEach((t,n)=>{t.scale.lerp(new U(1+n%3*.16,.8+n%2*.25,1.1),e*2.2),t.position.y+=e*(.035+n%4*.008);let r=t.material;r.opacity=o*.36}),r.root.position.x+=e*.08}}smokeBlocks(e,t){let n=new fo(e,t),r=new U;return this.smokeClouds.some(e=>(n.closestPointToPoint(e.position,!0,r),r.distanceToSquared(e.position)<4.8**2))}nearMiss(e,t){if(this.dead)return;let n=new fo(e,t).closestPointToPoint(this.camera.position,!0,new U),r=n.distanceTo(this.camera.position);if(r>3.2)return;this.suppression=Math.min(1,this.suppression+(3.2-r)*.09+.08),this.events.suppression(this.suppression);let i=performance.now()/1e3;if(r>=2||i<this.nextWhizzAt)return;let a=n.clone().sub(this.camera.position),o=new U(1,0,0).applyQuaternion(this.camera.quaternion),s=a.lengthSq()?V.clamp(o.dot(a.normalize()),-1,1):0;this.nextWhizzAt=i+.18,this.audio.whizz(s)}suppressBots(e,t){let n=new fo(e,t),r=new U;for(let e of this.bots){if(!e.alive||e.team!==`enemy`)continue;let t=e.root.position.clone().add(new U(0,1.3,0));n.closestPointToPoint(t,!0,r);let i=r.distanceTo(t);i<3.2&&(e.suppression=Math.min(1.6,e.suppression+.18+(3.2-i)*.06))}}updateSuppression(e){this.suppression&&(this.suppression=Math.max(0,this.suppression-e*.16),this.events.suppression(this.suppression))}updateMedkits(e){for(let t=this.medkits.length-1;t>=0;t--){let n=this.medkits[t];if(e>=n.expiresAt){this.medkits.splice(t,1),this.scene.remove(n.root),n.root.traverse(e=>{e instanceof Y&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))});continue}if(!(e<n.nextHeal)){n.nextHeal=e+1;for(let e of this.bots)e.alive&&e.team===n.team&&e.hp<100&&e.root.position.distanceToSquared(n.root.position)<5**2&&(e.hp=Math.min(100,e.hp+12));n.team===`ally`&&!this.dead&&!this.playerTank&&this.hp<100&&this.camera.position.distanceToSquared(n.root.position)<5**2&&(this.hp=Math.min(100,this.hp+8),this.events.health(this.hp,!1))}}}updateEquipment(e){if(this.parachuting||this.playerPlane||this.playerTransport){this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,``);return}if(this.playerLadder){this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,`W/S 上下攀爬 · Space 跳离`);return}if(!this.dead&&this.ladders.some(e=>Math.hypot(e.x-this.camera.position.x,e.z-this.camera.position.z)<1.25&&this.camera.position.y>e.y0-.6&&this.camera.position.y<e.y1+1)){this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,`靠近梯子并按 W/S 攀爬`);return}let t=!this.dead&&this.camera.position.z>40?this.planes.find(e=>e.alive&&e.team===`ally`&&!e.playerDriven):void 0;if(t){this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,`按 E 从机场驾驶${t.name}`);return}if(this.playerEmplacement){this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,``);return}let n=this.transports.find(e=>e.alive&&e.team===`ally`&&!e.playerDriven&&e.root.position.distanceToSquared(this.camera.position)<5**2);if(n){let e=Math.abs(n.root.position.z)<43,t=this.bots.filter(e=>e.alive&&e.riding===n).length<6;this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,e&&t?`按 E 搭乘运兵车 · 车斗内可射击`:`按 E 驾驶友军运兵车`);return}let r=this.emplacements.find(e=>e.alive&&e.team===`ally`&&!e.occupied&&e.root.position.distanceToSquared(this.camera.position)<3.6**2);if(r){this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,`按 E 操作友军${r.kind===`aa`?`防空炮`:`反坦克炮`}`);return}if(this.selectedLoadout.id===`engineer`&&this.tanks.some(e=>e.alive&&e.team===`ally`&&(e.tracks<100||e.engine<100||e.turretHealth<100)&&e.root.position.distanceToSquared(this.camera.position)<4.5**2)){this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,e<this.repairAt?`维修工具冷却中`:`按 F 维修坦克受损部件`);return}let i=!this.dead&&this.ammoCrates.some(e=>e.distanceToSquared(this.camera.position)<3.2**2),a=!this.dead&&this.aid<this.selectedLoadout.aid&&this.medkits.some(e=>e.team===`ally`&&e.uses>0&&e.root.position.distanceToSquared(this.camera.position)<3.2**2),o=!this.dead&&!this.playerMortar&&!!(this.mortar&&!this.mortar.occupied&&this.camera.position.distanceToSquared(this.mortar.position)<2.8**2),s=!this.dead&&!this.playerMG&&this.machineGuns.some(e=>!e.occupied&&e.position.distanceToSquared(this.camera.position)<2.8**2),c=!this.dead&&!this.playerTank&&this.tanks.some(e=>e.alive&&e.team===`ally`&&!e.playerDriven&&e.root.position.distanceToSquared(this.camera.position)<4.5**2),l=!this.dead&&!this.playerTank&&this.selectedLoadout.id===`engineer`&&this.tanks.some(e=>e.alive&&e.team===`ally`&&e.hp<520&&e.root.position.distanceToSquared(this.camera.position)<4.5**2),u=!this.dead&&!this.playerTank&&this.selectedLoadout.id===`medic`&&this.bots.some(t=>!t.alive&&t.team===`ally`&&e>=t.reviveAt&&t.root.position.distanceToSquared(this.camera.position)<2.8**2),d=this.playerTank?`按 E 离开坦克`:this.playerMortar?`左键发射 · 鼠标调整落点 · E 离开`:this.playerMG?`左键持续射击 · E 离开重机枪`:e<this.statusUntil?this.status:u?`按 E 救起友军`:l?e<this.repairAt?`维修工具冷却中`:`按 F 维修友军坦克`:o?`按 E 操作迫击炮`:s?`按 E 操作重机枪`:c?`按 E 进入友军坦克`:a?e<this.bandageResupplyAt?`医疗箱整理中`:`按 E 补充绷带`:i?e<this.resupplyAt?`补给整理中`:`按 E 补充弹药`:this.hp<100&&this.aid?`按 H 使用绷带`:``;this.events.equipment(this.grenades,this.aid,this.medkitAvailable,this.buildCharges,this.buildLabel(),this.mortarAmmo,!!this.mortar,d)}updateTactical(e){if(e<this.tacticalAt)return;this.tacticalAt=e+.1;let t=this.playerTank?.root.position??this.playerTransport?.root.position??this.playerEmplacement?.root.position??this.camera.position,n=e=>e*(this.battlefieldHalfWidth()>12?.46:1),r=[...this.tanks.filter(e=>e.alive).map(e=>[n(e.root.position.x),e.root.position.z,e.team]),...this.transports.filter(e=>e.alive).map(e=>[n(e.root.position.x),e.root.position.z,e.team]),...this.emplacements.filter(e=>e.alive).map(e=>[n(e.root.position.x),e.root.position.z,e.team]),...this.planes.filter(e=>e.alive).map(e=>[n(e.root.position.x),e.root.position.z,e.team])];this.events.tactical({player:[n(t.x),t.z,this.yaw],infantry:this.bots.filter(e=>e.alive&&!e.drivingTank&&!e.drivingTransport&&!e.piloting&&!e.chuting).map(e=>[n(e.root.position.x),e.root.position.z,e.team]),tanks:r,flags:this.objectives.map((e,t)=>[e.id,n(e.position.x),e.position.z,e.owner,this.campaign.rule!==`assault`||t===this.assaultIndex]),depots:this.depots.map(e=>[e.id,n(e.position.x),e.position.z,e.destroyed])});let i=e=>this.battleLoadouts.find(t=>t.id===e)?.name??`步枪兵`,a=e=>this.bots.filter(t=>t.team===e).map(e=>({name:e.name,role:i(e.role),kills:e.kills,deaths:e.deaths,score:e.kills*100+e.objectiveScore,alive:e.alive})).sort((e,t)=>t.score-e.score||e.deaths-t.deaths);this.events.scoreboard([{name:`札克利`,role:this.selectedLoadout.name,kills:this.kills,deaths:this.deaths,score:this.kills*100+this.objectiveScore,player:!0,alive:!this.dead},...a(`ally`)],a(`enemy`))}orderSquadMove(){if(this.dead)return;let e=new U;this.camera.getWorldDirection(e);let t=e.y<-.05?Math.min(80,this.camera.position.y/-e.y):55,n=this.battlefieldHalfWidth()-.7;this.squadTarget.copy(this.camera.position).addScaledVector(e,t),this.squadTarget.set(V.clamp(this.squadTarget.x,-n,n),0,V.clamp(this.squadTarget.z,-58,58)),this.squadMode=`move`,this.squadMarker.position.copy(this.squadTarget).setY(2.8),this.squadMarker.visible=!0,this.status=`小队：向标记位置进攻`,this.statusUntil=performance.now()/1e3+1.8}orderSquadFollow(){this.dead||(this.squadMode=`follow`,this.squadMarker.visible=!1,this.status=`小队：跟我走`,this.statusUntil=performance.now()/1e3+1.8)}playerDeathScene(){let e=++this.deathSceneToken,t=performance.now(),n=this.camera.position.clone(),r=this.camera.quaternion.clone(),i=this.lastDamageSource?.clone(),a=(Math.random()<.5?-1:1)*(.42+Math.random()*.28);this.downedFreeLook=!1,this.weapon.visible=!1,this.events.downed(this.kills,this.deaths,this.lastDamageCause,this.lastDamageAmount);let o=()=>{if(e!==this.deathSceneToken||!this.dead||this.matchOver)return;let s=Math.min((performance.now()-t)/4200,1),c=V.smoothstep(s,0,.28);if(this.camera.position.copy(n),this.camera.position.y=V.lerp(n.y,this.terrainHeight(n.x,n.z)+.34,c),this.downedFreeLook)this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`);else if(this.camera.quaternion.copy(r),i&&s>.3){let e=V.smoothstep(s,.3,.58),t=new Ot;this.camera.lookAt(i.clone().setY(Math.max(i.y,1))),t.copy(this.camera.quaternion),this.camera.quaternion.copy(r).slerp(t,e),this.camera.rotation.z+=a*(1-e)}else this.camera.rotation.z+=a*c;s<1&&requestAnimationFrame(o)};o()}noteDeath(e,t){let n=performance.now()/1e3;this.deathHeat.push({position:e.clone().setY(0),team:t,at:n}),this.deathHeat=this.deathHeat.filter(e=>n-e.at<25).slice(-50)}hurtPlayer(e,t,n=`枪弹伤害`){if(this.dead)return;if(this.playerTank){let r=this.playerTank,i=t?r.root.position.clone().sub(t).normalize():new U(0,0,-1).applyQuaternion(r.root.quaternion),a=r.root.position.clone().addScaledVector(i,-1.15).setY(r.root.position.y+1.05),o=n.includes(`主炮`)||n.includes(`坦克炮`)?65:n.includes(`反坦克`)?48:void 0;this.logCombat(`crew_protected`,{vehicle:r.name,cause:n,incomingDamage:Math.round(e),result:o?`装甲穿透计算`:e<60?`装甲阻挡`:`爆炸冲击车体`}),this.damageTank(r,e,!1,a,o,i,n,t);return}let r=Math.min(this.hp,Math.max(0,Math.round(e))),i=t?Math.round(t.distanceTo(this.camera.position)):0;if(t&&n===`枪弹伤害`){let e=[...this.planes.filter(e=>e.alive&&e.team===`enemy`),...this.tanks.filter(e=>e.alive&&e.team===`enemy`),...this.transports.filter(e=>e.alive&&e.team===`enemy`)].sort((e,n)=>e.root.position.distanceToSquared(t)-n.root.position.distanceToSquared(t))[0];e&&e.root.position.distanceToSquared(t)<8**2&&(n=`${e.name} · ${`speed`in e?`航空机枪扫射`:`同轴/车载机枪`}`)}if(this.logCombat(`player_damage`,{cause:n,damage:r,hpBefore:this.hp,distance:i,vehicle:this.playerTransport?.name??this.playerPlane?.name??null,source:t?[Number(t.x.toFixed(2)),Number(t.y.toFixed(2)),Number(t.z.toFixed(2))]:null}),this.lastDamageCause=`${n}${t?` · ${i} 米`:``}`,this.lastDamageAmount=r,this.lastDamageSource=t?.clone(),this.interruptBandage(),this.clearBuildAction(`建造被打断`),this.lastDamageAt=performance.now()/1e3,this.hp=Math.max(0,this.hp-r),this.events.health(this.hp),this.audio.hurt(V.clamp(e/55,.35,1)),t){let n=Math.atan2(t.x-this.camera.position.x,t.z-this.camera.position.z),r=this.yaw+Math.PI,i=Math.atan2(Math.sin(n-r),Math.cos(n-r));this.events.damageDirection(-i,V.clamp(.42+e/90,.5,1))}!this.hp&&this.playerTransport&&(this.playerTransportPassenger||(this.playerTransport.playerDriven=!1),this.playerTransport=void 0,this.playerTransportPassenger=!1,this.playerTransportSeat=-1,this.weapon.visible=!0,this.events.vehicle(!1,0,!1)),!this.hp&&this.playerPlane&&(this.playerPlane.playerDriven=!1,this.playerPlane=void 0,this.weapon.visible=!0,this.events.vehicle(!1,0,!1)),!this.hp&&this.parachuting&&(this.parachuting=!1,this.parachute&&=(this.disposeGroup(this.parachute),void 0)),!this.hp&&this.playerEmplacement&&(this.playerEmplacement.occupied=!1,this.playerEmplacement=void 0,this.weapon.visible=!0,this.events.vehicle(!1,0,!1)),this.hp||(this.reloadToken++,this.loading=!1,this.noteDeath(this.camera.position,`ally`),this.clearGrenadeCook(),this.clearSupplyAction(),this.playerMortar&&(this.playerMortar.occupied=!1,this.playerMortar=void 0,this.mortarMarker.visible=!1),this.playerMG&&=(this.playerMG.occupied=!1,void 0),this.dead=!0,this.playerReviver=void 0,this.playerReviveStartedAt=0,this.giveUpStartedAt=0,this.playerDeathScene())}updatePlayerDowned(e){if(!this.dead||this.giveUpStartedAt===1/0)return;let t=this.keys.has(`Space`);t&&!this.giveUpStartedAt&&(this.giveUpStartedAt=e),t||(this.giveUpStartedAt=0),this.playerReviver?.alive||(this.playerReviver=this.bots.filter(e=>e.alive&&e.team===`ally`&&e.role===`medic`&&!e.riding&&!e.drivingTank&&!e.drivingTransport&&!e.piloting).sort((e,t)=>e.root.position.distanceToSquared(this.camera.position)-t.root.position.distanceToSquared(this.camera.position))[0]);let n=this.playerReviver,r=!!(n&&n.root.position.distanceToSquared(this.camera.position)<1.7**2);r&&!this.playerReviveStartedAt&&(this.playerReviveStartedAt=e),r||(this.playerReviveStartedAt=0);let i=this.playerReviveStartedAt?V.clamp((e-this.playerReviveStartedAt)/2.6,0,1):0,a=this.giveUpStartedAt?V.clamp((e-this.giveUpStartedAt)/1.8,0,1):0;if(this.events.downedState(n?`${n.name}${r?`正在救治`:`正在赶来`}`:`附近没有医疗兵`,i,a),i>=1){this.dead=!1,this.hp=55,this.deathSceneToken++,this.playerReviver=void 0,this.playerReviveStartedAt=0,this.giveUpStartedAt=0,this.camera.position.y=this.terrainHeight(this.camera.position.x,this.camera.position.z)+1.72,this.pitch=-.08,this.resetCameraView(),this.weapon.visible=!0,this.events.health(this.hp,!1),this.events.revived();return}a<1||(this.deaths++,this.tickets[0]=Math.max(0,this.tickets[0]-1),this.playerReviver=void 0,this.giveUpStartedAt=1/0,this.events.death(this.kills,this.deaths,this.lastDamageCause,this.lastDamageAmount))}soundAt(e){let t=e.distanceTo(this.camera.position);return{volume:V.clamp(1-t/85,.08,.85),pan:V.clamp((e.x-this.camera.position.x)/24,-1,1)}}particle(e,t,n,r,i,a=0,o=0,s=1){let c=new Y(new Vi(r,5,4),new Lr({color:n,transparent:!0,opacity:s,depthWrite:s>.8}));c.position.copy(e),this.scene.add(c),this.particles.push({mesh:c,velocity:t,age:0,life:i,gravity:a,grow:o})}impactFx(e,t=!1){if(t){for(let t=0;t<6;t++)this.particle(e,new U((Math.random()-.5)*3,Math.random()*2.2,(Math.random()-.5)*3),7280404,.07+Math.random()*.08,.45+Math.random()*.25,5);let t=new Y(new Ni(.24+Math.random()*.2,10),new Lr({color:4789009,transparent:!0,opacity:.72,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.rotation.z=Math.random()*Math.PI,t.position.set(e.x,.025,e.z),this.scene.add(t),this.particles.push({mesh:t,velocity:new U,age:0,life:18,gravity:0,grow:.006});return}for(let t=0;t<4;t++)this.particle(e,new U((Math.random()-.5)*2.2,.8+Math.random()*2.3,(Math.random()-.5)*2.2),t<2?16762221:6444868,t<2?.035:.07,.28+Math.random()*.35,5)}ejectCasing(){let e=this.activeLoadout().id===`sidearm`||this.activeLoadout().weapon.includes(`快慢机`),t=new Y(new X(e?.009:.011,e?.009:.011,e?.038:.052,6),this.mat(12886349,.5)),n=new U(1,0,0).applyQuaternion(this.camera.quaternion),r=new U(0,1,0),i=new U;if(this.camera.getWorldDirection(i),t.position.copy(this.camera.position).addScaledVector(n,.28).addScaledVector(r,-.08).addScaledVector(i,.25),t.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),this.scene.add(t),this.casings.push({mesh:t,velocity:n.multiplyScalar(1+Math.random()*1.4).addScaledVector(r,1.6+Math.random()).addScaledVector(i,(Math.random()-.5)*.5),angular:new U((Math.random()-.5)*24,(Math.random()-.5)*24,(Math.random()-.5)*24),age:0,bounced:!1}),this.casings.length>26){let e=this.casings.shift();this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose()}}updateCasings(e){for(let t=this.casings.length-1;t>=0;t--){let n=this.casings[t];if(n.age+=e,n.age>=4){this.casings.splice(t,1),this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose();continue}if(n.velocity.y-=9.8*e,n.mesh.position.addScaledVector(n.velocity,e),n.mesh.rotation.x+=n.angular.x*e,n.mesh.rotation.y+=n.angular.y*e,n.mesh.rotation.z+=n.angular.z*e,n.mesh.position.y>.035)continue;if(n.mesh.position.y=.035,!n.bounced){n.bounced=!0,n.velocity.y=Math.abs(n.velocity.y)*.28,n.velocity.x*=.55,n.velocity.z*=.55,n.angular.multiplyScalar(.55);continue}n.velocity.y=0;let r=Math.exp(-8*e);n.velocity.x*=r,n.velocity.z*=r,n.angular.multiplyScalar(r)}}blastCorpses(e,t,n){for(let r of this.corpses){let i=r.bot.root.position.clone().sub(e),a=i.length();if(a>=t)continue;i.y=Math.max(.25,i.y+.5),i.normalize();let o=n*(1-a/t);r.velocity.addScaledVector(i,o),r.velocity.y+=o*.55,r.angular.add(new U((Math.random()-.5)*o*2,(Math.random()-.5)*o,(Math.random()-.5)*o*2)),r.settled=!1}}updateCorpses(e){for(let t=this.corpses.length-1;t>=0;t--){let n=this.corpses[t],r=n.bot;if(r.alive||!r.root.visible){this.corpses.splice(t,1);continue}if(n.settled)continue;n.velocity.y-=9.8*e,this.moveWithCollision(r.root.position,n.velocity.x*e,n.velocity.z*e,.3),r.root.position.y+=n.velocity.y*e,r.root.rotation.x+=n.angular.x*e,r.root.rotation.y+=n.angular.y*e,r.root.rotation.z+=n.angular.z*e;let i=Math.exp(-1.8*e);if(n.velocity.x*=i,n.velocity.z*=i,n.angular.multiplyScalar(Math.exp(-2.8*e)),!(r.root.position.y>n.floor)){if(r.root.position.y=n.floor,n.velocity.y<-1.4){n.velocity.y*=-.2,n.velocity.x*=.72,n.velocity.z*=.72,n.angular.multiplyScalar(.68);for(let e=0;e<2;e++)this.particle(r.root.position.clone().setY(.06),new U((Math.random()-.5)*.8,.25+Math.random()*.45,(Math.random()-.5)*.8),6708040,.05,.35,1.4)}else n.velocity.y=0;n.velocity.lengthSq()<.025&&n.angular.lengthSq()<.035&&(n.settled=!0)}}}updateParticles(e){for(let t=this.particles.length-1;t>=0;t--){let n=this.particles[t];if(n.age+=e,n.age>=n.life){this.particles.splice(t,1),this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose();continue}n.velocity.y-=n.gravity*e,n.mesh.position.addScaledVector(n.velocity,e),n.grow&&n.mesh.scale.addScalar(n.grow*e);let r=n.mesh.material;r.opacity=Math.max(0,(1-n.age/n.life)*Math.min(1,r.opacity+e*5))}}tracer(e,t,n){let r=new Er().setFromPoints([e,t]),i=new oi({color:n,transparent:!0,opacity:.72}),a=new mi(r,i);a.frustumCulled=!1,this.scene.add(a);let o=performance.now(),s=()=>{let e=Math.min((performance.now()-o)/110,1);i.opacity=(1-e)*.72,e<1?requestAnimationFrame(s):(this.scene.remove(a),r.dispose(),i.dispose())};s()}coverHit(e,t){let n=t.clone().sub(e),r=n.length();if(!r)return;this.ray.set(e,n.normalize()),this.ray.far=r;let i=this.ray.intersectObjects(this.coverMeshes,!1)[0];return this.ray.far=1/0,i&&i.distance<r-.08?i:void 0}cycleBolt(){let e=performance.now(),t=this.reloadToken,n=()=>{if(t!==this.reloadToken)return;let r=Math.min((performance.now()-e)/430,1),i=V.smoothstep(r,.02,.24)*(1-V.smoothstep(r,.72,.96)),a=V.smoothstep(r,.18,.46)*(1-V.smoothstep(r,.56,.86));this.bolt.position.z=-.4+a*.25,this.bolt.rotation.z=i*1.05,r<1?requestAnimationFrame(n):this.audio.click(1050,.06)};n()}reload(){let e=this.activeLoadout(),t=e.magazine;if(this.buildAction||this.bandagingUntil||this.supplyAction||this.playerTank||this.playerMortar||this.playerMG||this.loading||this.mag===t||!this.reserve)return;this.loading=!0;let n=++this.reloadToken,r=performance.now(),i=e.reload*1e3,a=this.weaponMagazine,o=a?.position.clone(),s=a?.rotation.clone(),c=e.kind===`bolt`&&!a,l=-1;this.audio.click(520,.07),this.events.ammo(this.mag,this.reserve,!0);let u=()=>{if(n!==this.reloadToken)return;let d=Math.min((performance.now()-r)/i,1),f=Math.sin(d*Math.PI),p=c?.42:a?.24:.18;if(this.weapon.position.set(.32,-.27-f*(c?.3:.46),-.65),this.weapon.rotation.set(f*(c?-.08:.12),0,-f*p),c){let e=V.smoothstep(d,.04,.18)*(1-V.smoothstep(d,.8,.96));this.bolt.rotation.z=e*1.05,this.bolt.position.z=-.4+e*.24;let n=Math.max(1,Math.min(t-this.mag,this.reserve)),r=Math.min(n-1,Math.floor(V.clamp((d-.2)/.52,0,.999)*n));d>.2&&d<.75&&r!==l&&(l=r,this.audio.click(720+l*45,.035))}if(a&&o&&s){let t=V.smoothstep(d,.1,.32),n=V.smoothstep(d,.48,.72),r=e.id===`support`?1:-1;a.position.copy(o),a.position.y+=r*(.3*t-.3*n),a.position.x+=(t-n)*.08,a.rotation.copy(s),a.rotation.z+=r*(t-n)*.22,a.visible=!(d>.34&&d<.48),d>.72&&(this.bolt.position.z=-.4+Math.sin((d-.72)/.28*Math.PI)*.18)}if(d<1){requestAnimationFrame(u);return}let m=Math.min(t-this.mag,this.reserve);this.mag+=m,this.reserve-=m,this.loading=!1,this.weapon.position.set(.32,-.27,-.65),this.weapon.rotation.set(0,0,0),this.bolt.position.set(.1,.1,-.4),this.bolt.rotation.set(0,0,0),a&&o&&s&&(a.position.copy(o),a.rotation.copy(s),a.visible=!0),this.audio.click(820,.08),this.events.ammo(this.mag,this.reserve,!1)};u()}notePlayerKill(){let e=performance.now()/1e3;this.multiKills=e-this.lastPlayerKillAt<=6?this.multiKills+1:1,this.lastPlayerKillAt=e;let t=this.multiKills===2?`双杀`:this.multiKills===3?`三杀`:this.multiKills===4?`四杀`:this.multiKills>=5?`灭队`:``;t&&this.events.achievement(t,this.multiKills)}kill(e,t=!1,n){this.down(e,n,t),this.events.kill(++this.kills,`日军步兵`,t),this.notePlayerKill(),this.events.combatKill(`你`,`ally`,e.name,e.team,t)}down(e,t=new U,n=!1,r){if(e.riding=void 0,!e.alive)return;if(e.drivingTank&&this.dismountTankDriver(e.drivingTank),e.drivingTransport&&this.dismountTransportDriver(e.drivingTransport),e.piloting&&(e.piloting.pilot=void 0,e.piloting.abandoned=!0,e.piloting=void 0,e.root.visible=!0,e.body.layers.enable(0),e.head.layers.enable(0),e.weapon.visible=!0),e.chuting){let t=this.bailedPilots.findIndex(t=>t.bot===e);if(t>=0){let e=this.bailedPilots[t];e.chute.removeFromParent(),this.disposeGroup(e.chute),this.bailedPilots.splice(t,1)}e.chuting=!1}e.emplacement&&=(e.emplacement.operator=void 0,void 0),e.machineGun&&=(e.machineGun.operator=void 0,void 0),e.mortarRig&&(this.disposeGroup(e.mortarRig.root),e.mortarRig=void 0,e.mortarRigUntil=0);let i=performance.now()/1e3,a=Math.random()<.5?-1:1,o=Math.random()<.56;e.reviveTarget&&(e.reviveTarget.reviver=void 0,e.reviveTarget.respawnAt=Math.min(e.reviveTarget.respawnAt,i+1.5),e.reviveTarget=void 0,e.reviveUntil=0);let s=t.clone();s.y=0;let c=V.clamp(s.length(),.8,n?5.5:4.2);s.lengthSq()<.01&&s.set((Math.random()-.5)*.35,0,e.team===`ally`?-.35:.35),s.normalize(),e.deathToken++,e.alive=!1,this.noteDeath(e.root.position,e.team),e.squadTag&&(e.squadTag.visible=!1),e.deaths++,this.tickets[e.team===`ally`?0:1]=Math.max(0,this.tickets[e.team===`ally`?0:1]-1),e.reviveAt=i+.8,e.respawnAt=i+1.5,this.impactFx(e.root.position.clone().add(new U(0,n?2.12:1.45,0)),!0),r&&this.events.combatKill(r.name,r.team,e.name,e.team,n),e.root.rotation.x=o?a*.18:a*.9,e.root.rotation.z=o?a*.82:a*.28,e.head.rotation.set(n?1.15:.55,a*.28,a*.5),e.arms[0].rotation.set(.28,0,-a*.85),e.arms[1].rotation.set(-1.7,0,a*.7),e.legs[0].rotation.x=.8,e.legs[1].rotation.x=-.58,e.weapon.rotation.set(.85,a*.28,a*.5),e.weapon.position.set(a*.28,-.3,.2),this.corpses=this.corpses.filter(t=>t.bot!==e),this.corpses.push({bot:e,velocity:s.multiplyScalar(c*(n?1.25:1)).setY(.75+c*.35+(n?1.1:0)),angular:new U((Math.random()-.5)*4.5,a*(1.2+Math.random()*2.8),(Math.random()-.5)*4.5),floor:this.terrainHeight(e.root.position.x,e.root.position.z)-.27,settled:!1})}wreckVehicle(e,t,n){let r=new $i({color:1973272,roughness:.92,metalness:.12});e.userData.wreckMaterial=r,e.traverse(e=>{e instanceof Y&&(e.userData.liveMaterial=e.material,e.material=r)});let i={minX:e.position.x-t,maxX:e.position.x+t,minZ:e.position.z-n,maxZ:e.position.z+n};return this.colliders.push(i),this.vehicleColliders.push(i),i}restoreVehicle(e,t){if(t){let e=this.colliders.indexOf(t);e>=0&&this.colliders.splice(e,1);let n=this.vehicleColliders.indexOf(t);n>=0&&this.vehicleColliders.splice(n,1)}e.traverse(e=>{!(e instanceof Y)||!e.userData.liveMaterial||(e.material=e.userData.liveMaterial,delete e.userData.liveMaterial)}),e.userData.wreckMaterial?.dispose(),delete e.userData.wreckMaterial}updateVehicleWreck(e,t,n){if(t<n)return n;let r=e.position.clone().add(new U((Math.random()-.5)*.8,1.2+Math.random()*.8,(Math.random()-.5)*1.4));return this.particle(r,new U((Math.random()-.5)*.35,.65+Math.random()*.65,(Math.random()-.5)*.35),Math.random()<.18?11684644:2434852,.22+Math.random()*.22,1.4+Math.random(),-.08,1.1,.42),t+.12}damageTank(e,t,n,r,i,a,o,s){if(!e.alive)return;o&&(e.lastDamageCause=o,e.lastDamageSource=s?.clone()),e.lastDamageAt=performance.now()/1e3;let c=i,l=n||this.playerTank===e,u=`侧面装甲`,d=1,f=e.armor.side,p=new U(1,0,0);if(r){let o=e.root.worldToLocal(r.clone()),s=Math.abs(o.x)>Math.abs(o.z),m=r.y-e.root.position.y;if(m>1.65?(u=`炮塔`,f=e.armor.turret,p.set(s?Math.sign(o.x):0,0,s?0:Math.sign(o.z)),d=1.18):s&&m<.82?(u=`履带`,f=e.armor.side,p.set(Math.sign(o.x),0,0),d=.82):s?(u=`侧面装甲`,f=e.armor.side,p.set(Math.sign(o.x),0,0)):o.z<0?(u=`正面装甲`,f=e.armor.front,p.set(0,0,-1),d=.74):(u=`发动机舱`,f=e.armor.rear,p.set(0,0,1),d=1.42),c){let o=(a??this.ray.ray.direction).clone().normalize().transformDirection(e.root.matrixWorld.clone().invert()),s=Math.max(.34,Math.abs(o.dot(p))),m=Math.round(f/s);if(!(c*(.88+Math.random()*.24)>m)){i&&(e.hp-=t*.05),l&&(this.status=`${u} · 未穿透（等效 ${m}mm）`,this.statusUntil=performance.now()/1e3+1.8),n&&this.events.hit(!1);let a=this.soundAt(r);this.audio.ricochet(a.volume,a.pan);for(let e=0;e<8;e++)this.particle(r,new U((Math.random()-.5)*5,1+Math.random()*4,(Math.random()-.5)*5),16757853,.045,.22,6);return}d=i?.8+Math.random()*.45:1,l&&(this.status=`${u} · 穿透（等效 ${m}mm）`,this.statusUntil=performance.now()/1e3+1.8);let h=Math.random();i&&h<.38?this.damageRandomTankCrew(e,n):i&&h<.56&&(u===`侧面装甲`||u===`发动机舱`)?(e.engine=0,l&&(this.status+=` · 发动机损毁`)):i&&h<.68&&u!==`正面装甲`?(t+=280,l&&(this.status+=` · 弹药殉爆`),Math.random()<.3&&(t+=e.hp)):!i&&Math.random()<.3&&this.damageRandomTankCrew(e,n)}if(!c&&t<60){n&&(this.status=`${u} · 跳弹（轻武器无法击穿 ${f}mm 装甲）`,this.statusUntil=performance.now()/1e3+1.8,this.events.hit(!1));let e=this.soundAt(r);this.audio.ricochet(e.volume,e.pan);for(let e=0;e<5;e++)this.particle(r,new U((Math.random()-.5)*3,.6+Math.random()*2.4,(Math.random()-.5)*3),16757853,.035,.2,5);return}u===`履带`&&(e.tracks=Math.max(0,e.tracks-t*.55)),u===`发动机舱`&&(e.engine=Math.max(0,e.engine-t*.5)),u===`炮塔`&&(e.turretHealth=Math.max(0,e.turretHealth-t*.42)),!c&&t>120&&(u===`侧面装甲`||u===`炮塔`)&&Math.random()<.3&&this.damageRandomTankCrew(e,n)}if(!c&&t<60)return;if(e.hp-=t*d,this.playerTank===e&&this.logCombat(`vehicle_damage`,{vehicle:e.name,cause:o??e.lastDamageCause??`未知攻击`,damage:Math.round(t*d),hp:Math.max(0,Math.round(e.hp)),zone:u}),n&&r){let t=u===`履带`&&!e.tracks?` · 履带摧毁`:u===`发动机舱`&&!e.engine?` · 发动机熄火`:u===`炮塔`&&!e.turretHealth?` · 炮塔瘫痪`:e.crew<e.crewCapacity?` · 乘员 ${e.crew}/${e.crewCapacity}`:``;c||(this.status=`${u} · ${d<.8?`未完全击穿`:d>1.2?`弱点击穿`:`有效命中`}`),this.status+=t,this.statusUntil=performance.now()/1e3+1.8}let m=e.hp<=0;n&&this.events.hit(m,!1,Math.min(t*d,Math.max(0,e.hp+t*d))),m&&(this.dismountTankDriver(e,!1,!0),e.alive=!1,e.respawnAt=performance.now()/1e3+20,this.tickets[e.team===`ally`?0:1]=Math.max(0,this.tickets[e.team===`ally`?0:1]-5),e.root.rotation.x+=(Math.random()-.5)*.15,e.root.rotation.z=e.team===`ally`?.14:-.14,e.wreckCollider=this.wreckVehicle(e.root,1.45,2.35),this.explosionFx(e.root.position.clone().setY(1)),n&&e.team===`enemy`&&(this.events.kill(++this.kills,e.name),this.notePlayerKill()),this.playerTank===e&&(e.playerDriven=!1,this.playerTank=void 0,this.weapon.visible=!0,this.events.vehicle(!1,0,!1),this.hurtPlayer(999,e.lastDamageSource??e.root.position,e.lastDamageCause??`${e.name} · 车体爆炸`)))}damageTransport(e,t,n){if(!e.alive)return;e.lastDamageAt=performance.now()/1e3;let r=Math.min(e.hp,t);e.hp-=t;let i=e.hp<=0;if(n&&this.events.hit(i,!1,r),i&&(this.dismountTransportDriver(e,!0),e.alive=!1,e.respawnAt=performance.now()/1e3+28,this.tickets[e.team===`ally`?0:1]=Math.max(0,this.tickets[e.team===`ally`?0:1]-3),e.root.rotation.x+=(Math.random()-.5)*.12,e.root.rotation.z=e.team===`ally`?.22:-.22,e.wreckCollider=this.wreckVehicle(e.root,1.3,2.55),this.explosionFx(e.root.position.clone().setY(1)),n&&e.team===`enemy`&&(this.events.kill(++this.kills,`日军运兵车`),this.notePlayerKill()),this.playerTransport===e)){let t=this.playerTransportPassenger;e.playerDriven=!1,this.playerTransport=void 0,this.playerTransportPassenger=!1,this.playerTransportSeat=-1,this.weapon.visible=!0,this.events.vehicle(!1,0,!1),this.events.loadout(this.activeLoadout()),this.camera.position.copy(e.root.position).add(new U(2.2,1.72,0).applyQuaternion(e.root.quaternion)),this.hurtPlayer(t?85:999,e.root.position)}}damageEmplacement(e,t,n){if(!e.alive)return;let r=Math.min(e.hp,t);e.hp-=t;let i=e.hp<=0;n&&this.events.hit(i,!1,r),i&&(e.operator&&=(e.operator.emplacement=void 0,void 0),e.alive=!1,e.occupied=!1,e.respawnAt=performance.now()/1e3+24,e.root.rotation.z=e.team===`ally`?.55:-.55,this.explosionFx(e.root.position.clone().setY(.8)),n&&e.team===`enemy`&&(this.events.kill(++this.kills,e.kind===`aa`?`日军防空炮`:`日军反坦克炮`),this.notePlayerKill()),this.playerEmplacement===e&&(this.playerEmplacement=void 0,this.events.emplacementLead(),this.weapon.visible=!0,this.events.vehicle(!1,0,!1),this.hurtPlayer(999)))}createPlaneWreck(e,t){let n=e=>{let t=e instanceof Y?new Y(e.geometry.clone(),Array.isArray(e.material)?e.material.map(e=>e.clone()):e.material.clone()):new K;return t.position.copy(e.position),t.quaternion.copy(e.quaternion),t.scale.copy(e.scale),t.visible=e.visible,t.castShadow=e.castShadow,t.receiveShadow=e.receiveShadow,t.renderOrder=e.renderOrder,t.layers.mask=e.layers.mask,e.children.forEach(e=>t.add(n(e))),t},r=n(e.root);r.visible=!0,this.scene.add(r);let i=new U(0,0,-1).applyQuaternion(e.root.quaternion).multiplyScalar(e.speed*.6);i.y=Math.min(i.y,2),this.planeWrecks.push({root:r,velocity:i,rollVelocity:(Math.random()<.5?-1:1)*(1.6+Math.random()*2.5),state:`fall`,smokeAt:0,restUntil:0,team:e.team,playerOwned:t,name:e.name})}disposeWreck(e){this.scene.remove(e.root),e.root.traverse(e=>{e instanceof Y&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))})}updatePlaneWrecks(e,t){for(let n=this.planeWrecks.length-1;n>=0;n--){let r=this.planeWrecks[n];if(r.state===`fall`){if(r.velocity.y-=8.5*e,r.root.position.addScaledVector(r.velocity,e),r.root.rotation.x=V.damp(r.root.rotation.x,.9,.6,e),r.root.rotation.z+=r.rollVelocity*e,r.root.rotation.y+=r.rollVelocity*.06*e,t>=r.smokeAt&&(r.smokeAt=t+.055,this.particle(r.root.position.clone(),new U(Math.random()-.5,.5+Math.random(),Math.random()-.5),Math.random()<.28?16742952:2698024,.24+Math.random()*.35,1+Math.random()*.7,-.05,.8,.34)),r.root.position.y>.55)continue;r.state=`rest`,r.root.position.y=.45,r.root.rotation.set((Math.random()-.5)*.3,r.root.rotation.y,(Math.random()-.5)*.8),r.restUntil=t+24,r.smokeAt=t,r.root.traverse(e=>{e instanceof Y&&((Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()),e.material=this.mat(1907737,.95))});let n=r.root.position.clone().setY(.6),i=new Y(new Vi(.08,6,4),this.mat(2237215));i.position.copy(n),this.scene.add(i),this.explode({mesh:i,velocity:new U,detonateAt:t,team:r.team,playerOwned:r.playerOwned,bomb:!0,crash:!0,sourceName:r.name}),r.collider={minX:n.x-2.2,maxX:n.x+2.2,minZ:n.z-2.2,maxZ:n.z+2.2},this.vehicleColliders.push(r.collider)}else{if(t>=r.smokeAt&&t<r.restUntil-6&&(r.smokeAt=t+.16,this.particle(r.root.position.clone().add(new U((Math.random()-.5)*2,.7,(Math.random()-.5)*2)),new U((Math.random()-.5)*.4,.7+Math.random()*.8,(Math.random()-.5)*.4),3158575,.3+Math.random()*.25,1.3+Math.random(),-.08,.7,.4)),t<r.restUntil)continue;if(r.collider){let e=this.vehicleColliders.indexOf(r.collider);e>=0&&this.vehicleColliders.splice(e,1)}this.disposeWreck(r),this.planeWrecks.splice(n,1)}}}bailOutPilot(e){if(!e.alive||e.playerDriven||e.abandoned)return;e.abandoned=!0,e.nextAttack=performance.now()/1e3;let t=e.pilot,n=t?.root??new K;if(n.position.copy(e.root.position).add(new U(0,-1.2,0)),!t){this.scene.add(n),this.box([.38,.72,.28],[0,0,0],e.team===`ally`?5203544:8483911,n);let t=new Y(new Vi(.18,10,7),this.mat(12093800));t.position.y=.53,t.castShadow=!0,n.add(t)}t&&(e.pilot=void 0,t.piloting=void 0,t.chuting=!0,t.root.visible=!0,t.body.layers.enable(0),t.head.layers.enable(0),t.weapon.visible=!1,t.suppression=Math.max(t.suppression,.7));let r=new K,i=new Y(new Vi(1.35,16,7,0,Math.PI*2,0,Math.PI/2),this.mat(e.team===`ally`?14209464:13157032,.96));i.scale.y=.38,i.position.y=2.4,i.castShadow=!0,r.add(i);for(let e of[-.78,.78])for(let t of[-.5,.5]){let n=this.box([.018,2.05,.018],[e*.5,1.28,t*.5],7432536,r);n.rotation.z=-e*.25,n.rotation.x=t*.22}n.add(r);let a=new U(0,0,-1).applyQuaternion(e.root.quaternion).multiplyScalar(e.speed*.18);a.y=-2,this.bailedPilots.push({root:n,chute:r,team:e.team,velocity:a,landedAt:0,bot:t})}updateBailedPilots(e,t){for(let n=this.bailedPilots.length-1;n>=0;n--){let r=this.bailedPilots[n];if(!r.landedAt){if(r.velocity.x=V.damp(r.velocity.x,0,.7,e),r.velocity.z=V.damp(r.velocity.z,0,.7,e),r.velocity.y=V.damp(r.velocity.y,-3.4,1.5,e),r.root.position.addScaledVector(r.velocity,e),r.root.position.x=V.clamp(r.root.position.x,-72,72),r.root.position.z=V.clamp(r.root.position.z,-62,62),r.chute.rotation.z=Math.sin(t*2.4+n)*.08,r.chute.rotation.x=Math.cos(t*1.8+n)*.045,r.root.position.y>.65)continue;r.root.position.y=r.bot?0:.65,r.landedAt=t,r.bot?(r.chute.removeFromParent(),this.disposeGroup(r.chute),r.bot.chuting=!1,r.bot.weapon.visible=!0,r.bot.root.scale.set(1,1,1),r.bot.nextShot=t+1.2):r.chute.visible=!1}if(r.bot){this.bailedPilots.splice(n,1);continue}t-r.landedAt<10||(this.disposeGroup(r.root),this.bailedPilots.splice(n,1))}}damagePlane(e,t,n,r,i){if(!r&&this.playerPlane===e&&!n){let t=this.planes.filter(t=>t.alive&&t.team===`enemy`&&t!==e).sort((t,n)=>t.root.position.distanceToSquared(e.root.position)-n.root.position.distanceToSquared(e.root.position))[0],n=this.emplacements.filter(e=>e.alive&&e.team===`enemy`&&e.kind===`aa`).sort((t,n)=>t.root.position.distanceToSquared(e.root.position)-n.root.position.distanceToSquared(e.root.position))[0];(t?.root.position.distanceToSquared(e.root.position)??1/0)<(n?.root.position.distanceToSquared(e.root.position)??1/0)?(r=`${t.name} · 航空机枪`,i=t.root.position):n&&(r=`日军二〇毫米防空炮 · 高射炮弹`,i=n.root.position)}if(!e.alive)return;r&&(e.lastDamageCause=r,e.lastDamageSource=i?.clone());let a=Math.min(e.hp,t);e.hp-=t,e.hp>0&&e.hp<e.maxHp*.32&&this.bailOutPilot(e);let o=e.hp<=0;if(n&&this.events.hit(o,!1,a),o){if(e.pilot){let t=e.pilot;e.pilot=void 0,t.piloting=void 0,t.root.visible=!0,t.body.layers.enable(0),t.head.layers.enable(0),t.weapon.visible=!0,this.down(t)}this.createPlaneWreck(e,n),e.alive=!1,e.playerDriven=!1,e.root.visible=!1,e.respawnAt=performance.now()/1e3+30,this.tickets[e.team===`ally`?0:1]=Math.max(0,this.tickets[e.team===`ally`?0:1]-4),this.explosionFx(e.root.position.clone()),n&&e.team===`enemy`&&(this.events.kill(++this.kills,e.name),this.notePlayerKill()),this.playerPlane===e&&(this.playerPlane=void 0,this.weapon.visible=!0,this.events.vehicle(!1,0,!1),this.hurtPlayer(999,e.lastDamageSource??e.root.position,e.lastDamageCause??`${e.name} · 机体被摧毁`))}}damageStructure(e,t){if(e.destroyed)return;e.hp-=t;let n=e.hp<=120?2:+(e.hp<=240);if(n>e.damageStage){e.damageStage=n,e.roof.rotation.z=n*.075,e.roof.position.y=3.25-n*.12;let t=e.root.position.clone().add(new U(0,1.7,0));for(let e=0;e<5+n*2;e++)this.particle(t.clone().add(new U((Math.random()-.5)*3.5,Math.random()*1.6,(Math.random()-.5)*3.5)),new U((Math.random()-.5)*1.8,.4+Math.random()*1.8,(Math.random()-.5)*1.8),7430991,.08+Math.random()*.12,.7+Math.random()*.5,3.5)}if(e.hp>0)return;e.destroyed=!0;let r=(e,t)=>{let n=e.indexOf(t);n>=0&&e.splice(n,1)};r(this.colliders,e.collider),r(this.vehicleColliders,e.collider),r(this.coverMeshes,e.roof),e.root.children.forEach(t=>{t!==e.body&&t!==e.roof&&(t.visible=!1)}),e.body.position.y=.32,e.body.scale.y=.24,e.roof.position.set(.55,.78,.2),e.roof.rotation.set(.22,Math.PI/4,.82),e.roof.scale.set(1,.3,1.15);for(let t=0;t<6;t++){let n=this.box([.45+Math.random()*.85,.22+Math.random()*.38,.45+Math.random()*.9],[(Math.random()-.5)*3.6,.12+Math.random()*.18,(Math.random()-.5)*4],t%3?6642248:4143665,e.root);n.rotation.set(Math.random()*.25,Math.random()*Math.PI,Math.random()*.25),e.rubble.push(n),this.coverMeshes.push(n)}let i=e.root.position.clone().add(new U(0,1.1,0));for(let e=0;e<14;e++){let t=new Y(new ji(.18+Math.random()*.42,.12+Math.random()*.25,.2+Math.random()*.5),this.mat(e%3?7168591:4209457));t.position.copy(i),t.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),this.scene.add(t),this.particles.push({mesh:t,velocity:new U((Math.random()-.5)*7,2+Math.random()*6,(Math.random()-.5)*7),age:0,life:3+Math.random()*2,gravity:8,grow:0})}this.explosionFx(i)}damageUrbanBuilding(e,t){if(e.destroyed)return;e.hp-=t;let n=e.hp<=300?2:+(e.hp<=600);if(n>e.damageStage){e.damageStage=n,e.body.rotation.z=(e.root.position.x<0?-1:1)*n*.006,e.details.forEach((e,t)=>{t%(n===1?4:2)==0&&(e.visible=!1)});let t=e.root.position.clone().setY(e.height*.55);for(let r=0;r<8+n*3;r++)this.particle(t.clone().add(new U((Math.random()-.5)*5,(Math.random()-.5)*e.height*.7,(Math.random()-.5)*7)),new U((Math.random()-.5)*2.5,.5+Math.random()*2,(Math.random()-.5)*2.5),6445389,.1+Math.random()*.16,.9+Math.random()*.7,4)}if(e.hp>0)return;e.destroyed=!0;let r=this.coverMeshes.indexOf(e.body);r>=0&&this.coverMeshes.splice(r,1);for(let t of e.colliders){let e=this.colliders.indexOf(t);e>=0&&this.colliders.splice(e,1);let n=this.vehicleColliders.indexOf(t);n>=0&&this.vehicleColliders.splice(n,1)}if(e.ladder){let t=this.ladders.indexOf(e.ladder);t>=0&&this.ladders.splice(t,1),this.playerLadder===e.ladder&&(this.playerLadder=void 0)}if(e.platform){let t=this.platforms.indexOf(e.platform);t>=0&&this.platforms.splice(t,1)}e.details.forEach(e=>{if(e.visible=!1,e instanceof Y){let t=this.coverMeshes.indexOf(e);t>=0&&this.coverMeshes.splice(t,1)}}),e.body.position.y=.58,e.body.scale.y=.1,e.body.rotation.z=(Math.random()<.5?-1:1)*.035;for(let t=0;t<9;t++){let n=this.box([.65+Math.random()*1.4,.28+Math.random()*.48,.65+Math.random()*1.5],[(Math.random()-.5)*7,.15+Math.random()*.25,(Math.random()-.5)*8],t%4?6116683:3618354,e.root);n.rotation.set(Math.random()*.3,Math.random()*Math.PI,Math.random()*.3),e.rubble.push(n),this.coverMeshes.push(n)}let i=e.root.position.clone().setY(2);for(let e=0;e<24;e++){let t=new Y(new ji(.25+Math.random()*.8,.18+Math.random()*.5,.25+Math.random()*.8),this.mat(e%4?6314061:3749684));t.position.copy(i).add(new U((Math.random()-.5)*5,Math.random()*4,(Math.random()-.5)*7)),t.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),this.scene.add(t),this.particles.push({mesh:t,velocity:new U((Math.random()-.5)*6,2+Math.random()*7,(Math.random()-.5)*6),age:0,life:4+Math.random()*2,gravity:8,grow:0})}this.explosionFx(i)}damageDepot(e,t,n){if(e.destroyed||(e.hp-=t,n&&this.events.hit(e.hp<=0),e.hp>0))return;e.destroyed=!0,e.root.rotation.z=.12,e.hitbox.material.color.setHex(3157545),this.explosionFx(e.position.clone().setY(1));let r=this.campaign.attacker??`ally`,i=r===`ally`?0:1;this.tickets[i]=Math.min(999,this.tickets[i]+35),this.status=`补给库 ${e.id} 已摧毁`,this.statusUntil=performance.now()/1e3+2.2,this.depots.every(e=>e.destroyed)&&this.finish(r)}finish(e){this.matchOver||(this.matchOver=!0,this.active=!1,document.exitPointerLock(),this.events.end(e===`ally`,this.kills,this.deaths,this.kills*100+this.objectiveScore))}reinforceTank(e,t){this.dismountTankDriver(e),this.restoreVehicle(e.root,e.wreckCollider),e.wreckCollider=void 0;let n=(this.tanks.filter(t=>t.team===e.team).indexOf(e)-1)*3.6;e.nextSmoke=t,e.lastDamageAt=-99,e.ramSlowUntil=0,e.stalledFor=0,e.reverseUntil=0;let r=e.team===`ally`?50:-50;e.alive=!0,e.playerDriven=!1,e.hp=e.maxHp,e.tracks=100,e.engine=100,e.turretHealth=100,e.crew=e.crewCapacity,e.nextShot=t+3+Math.random()*3,e.nextMg=t+1,e.mgBurst=0,e.mgPauseUntil=0,e.root.visible=!0,e.root.rotation.set(0,e.team===`ally`?0:Math.PI,0),e.recoilToken++,e.barrel.position.z=-2.15,e.turret.position.z=0,e.turret.rotation.set(0,0,0),e.pitch.rotation.set(0,0,0),e.root.position.set(n,this.terrainHeight(n,r),r);for(let t of e.crewMen)t.alive=!0,t.hp=65,t.respawnAt=0,t.mesh&&(t.mesh.visible=!0)}reinforceTransport(e,t){this.dismountTransportDriver(e),this.restoreVehicle(e.root,e.wreckCollider),e.wreckCollider=void 0,e.mission=`pickup`,e.waitUntil=t+10,e.nextDrop=t,e.stalledFor=0,e.reverseUntil=0,e.nextSmoke=t,e.lastDamageAt=-99;let n=e.team===`ally`?5:-5,r=e.team===`ally`?54:-54;e.alive=!0,e.playerDriven=!1,e.hp=e.maxHp,e.root.visible=!0,e.root.rotation.set(0,e.team===`ally`?Math.PI:0,0),e.root.position.set(n,this.terrainHeight(n,r),r)}reinforcePlane(e,t){let n=this.planes.filter(t=>t.team===e.team).indexOf(e);e.alive=!0,e.playerDriven=!1,e.abandoned=!1,e.hp=e.maxHp,e.speed=30,e.throttle=.8,e.stallWarned=!1,e.bombs=e.maxBombs,e.nextBomb=t,e.bombRearmAt=0,e.root.visible=!0,e.angle=(e.team===`ally`?0:Math.PI/2)+n*Math.PI,e.nextAttack=t+5+Math.random()*5,e.nextShot=t,e.root.rotation.set(0,0,0),this.seatPlanePilot(e)}spawnIsSafe(e,t){let n=performance.now()/1e3,r=this.bots.some(n=>n.alive&&!n.piloting&&!n.chuting&&n.team!==t&&n.root.position.distanceToSquared(e)<16**2),i=this.deathHeat.filter(r=>r.team===t&&n-r.at<25&&r.position.distanceToSquared(e)<24**2).length;return!r&&i<3}reinforcementSpawn(e,t){let n=this.bots.filter(t=>t.alive&&t.team!==e),r=performance.now()/1e3,i=new U(0,0,e===`ally`?48:-48),a=this.campaign.rule===`assault`?this.objectives[Math.min(this.assaultIndex,this.objectives.length-1)]?.position:this.objectives.filter(t=>t.owner!==e).sort((e,t)=>i.distanceToSquared(e.position)-i.distanceToSquared(t.position))[0]?.position,o=[i,...this.objectives.filter(t=>t.owner===e).map(e=>e.position)].map(t=>{let o=n.map(e=>e.root.position.distanceTo(t)),s=Math.min(...o,999),c=o.filter(e=>e<45).length,l=this.deathHeat.filter(n=>n.team===e&&r-n.at<25&&n.position.distanceTo(t)<24).length;return{position:t,score:Math.random()*25-(a?.distanceTo(t)??0)*.85-c*16-l*32-(s<16?280:s<30?100:0)+(t===i?14:0)}}).sort((e,t)=>t.score-e.score)[0]?.position,s=t%6,c=Math.floor(t/6),l=e===`ally`?1:-1;return o?new U(o.x+(s-2.5)*1.15,0,o.z+l*(3+c*1.8)):new U(-5.5+s*2.2,0,l*(48+c*2.4))}reinforce(e,t){this.corpses=this.corpses.filter(t=>t.bot!==e),this.botMotion.delete(e),e.deathToken++,e.nextRocket=t+5+Math.random()*7,e.nextMortar=t+4+Math.random()*5,e.reviveTarget&&(e.reviveTarget.reviver=void 0),e.drivingTank&&=(e.drivingTank.driver=void 0,void 0),e.drivingTransport&&=(e.drivingTransport.driver=void 0,void 0),e.piloting&&=(e.piloting.pilot=void 0,void 0),e.emplacement&&=(e.emplacement.operator=void 0,void 0),e.machineGun&&=(e.machineGun.operator=void 0,void 0),e.mortarRig&&(this.disposeGroup(e.mortarRig.root),e.mortarRig=void 0,e.mortarRigUntil=0);let n=(e.team===`ally`?this.battleLoadouts:jl).find(t=>t.id===e.role);e.alive=!0,e.hp=100,e.chuting=!1,e.root.visible=!0,e.body.layers.enable(0),e.head.layers.enable(0),e.squadTag&&(e.squadTag.visible=!0),e.mag=this.botWeapon(e.role,e.team).magazine,e.reloadUntil=0,e.bandages=1,e.bandageUntil=0,e.coverTarget=void 0,e.coverUntil=0,e.nextCoverAt=t+2,e.reviveTarget=void 0,e.reviveUntil=0,e.reviver=void 0,e.lastSeen=void 0,e.lastSeenUntil=0,e.shotAt=-10,e.meleeAt=-10,e.nextMelee=t+1,e.throwAt=-10,e.grenades=1,e.antiTankGrenades=e.role===`support`?2:n?.antiTankGrenades??0,e.smokes=1,e.suppression=0,e.nextWireDamage=0,e.smokeAt=t+12+Math.random()*10,e.nextAidAt=t+7+Math.random()*5,e.reviveAt=0,e.respawnAt=0,e.nextGrenade=t+7+Math.random()*10,e.nextShot=t+1+Math.random()*2,e.strafe*=-1,e.stuckFor=0,e.navPath=void 0,e.navTarget=void 0,e.navRefreshAt=0,e.vaultFrom=void 0,e.vaultTo=void 0,e.vaultStartedAt=void 0,e.vaultUntil=void 0,e.root.rotation.set(0,e.team===`ally`?Math.PI:0,0),e.root.scale.set(1,1,1),e.head.rotation.set(0,0,0),e.body.rotation.set(0,0,0),e.legs.forEach(e=>e.rotation.set(0,0,0)),e.arms.forEach(e=>e.rotation.set(-.9,0,0));let r=this.bots.filter(t=>t.team===e.team).indexOf(e),i=r%6,a=this.transports.find(t=>t.team===e.team&&t.alive),o=this.reinforcementSpawn(e.team,r);if(e.riding=a&&Math.abs(a.root.position.z)>=43&&!(this.playerTransport===a&&this.playerTransportPassenger)&&this.bots.filter(e=>e.riding===a).length<6?a:void 0,a&&Math.abs(a.root.position.z)<43){let t=a.root.position.x+(i%3-1)*.8,n=a.root.position.z+(e.team===`ally`?2.8:-2.8)+Math.floor(i/3)*(e.team===`ally`?.8:-.8);e.root.position.set(t,this.terrainHeight(t,n),n)}else e.root.position.copy(o),e.root.position.y=this.terrainHeight(o.x,o.z);e.weapon.position.set(0,0,0),e.weapon.rotation.set(0,0,0),e.muzzle.visible=!1}deployNpcMortar(e,t,n){let r=new K,i=t.clone().sub(e.root.position).setY(0).normalize();r.position.copy(e.root.position).addScaledVector(i,.8),r.rotation.y=Math.atan2(i.x,i.z)+Math.PI,this.scene.add(r);let a=new Y(new X(.3,.34,.08,9),this.mat(3423030,.4));a.position.y=.05,r.add(a);let o=new Y(new X(.052,.064,.78,9),this.mat(2370344,.3));o.position.set(0,.43,-.02),o.rotation.x=.62,r.add(o);for(let e of[-.16,.16]){let t=new Y(new X(.018,.018,.46,6),this.mat(3225910,.35));t.position.set(e,.24,.25),t.rotation.z=e<0?.4:-.4,t.rotation.x=-.22,r.add(t)}r.traverse(e=>{e instanceof Y&&(e.castShadow=!0)}),e.mortarRig={root:r,tube:o},e.mortarRigUntil=n+14+Math.random()*10}fireNpcMortar(e,t){if(e.role!==`mortar`||e.riding||e.suppression>1.05||t<e.nextMortar)return!1;let n=[...this.bots.filter(t=>t.alive&&!t.drivingTank&&!t.drivingTransport&&!t.piloting&&!t.chuting&&t.team!==e.team).map(e=>e.root.position),...e.team===`enemy`&&!this.dead&&!this.playerPlane&&!this.parachuting?[this.camera.position]:[]].filter(t=>{let n=e.root.position.distanceTo(t);return n>=24&&n<=78}).sort((t,n)=>{let r=t=>this.bots.filter(n=>n.alive&&n.team!==e.team&&n.root.position.distanceToSquared(t)<9**2).length;return r(n)-r(t)||e.root.position.distanceToSquared(t)-e.root.position.distanceToSquared(n)})[0];if(n||=this.objectives.filter(t=>t.owner!==e.team&&e.root.position.distanceTo(t.position)>=24&&e.root.position.distanceTo(t.position)<=78).sort((t,n)=>e.root.position.distanceToSquared(t.position)-e.root.position.distanceToSquared(n.position))[0]?.position,!n||this.bots.some(t=>t.alive&&t.team===e.team&&t.root.position.distanceToSquared(n)<10**2))return e.nextMortar=t+1.5,!1;e.mortarRig||this.deployNpcMortar(e,n,t);let r=n.clone().add(new U((Math.random()-.5)*8,0,(Math.random()-.5)*8));r.y=this.terrainHeight(r.x,r.z);let i=e.mortarRig.root.position.clone().add(new U(0,.78,0)),a=i.distanceTo(r),o=V.clamp(a/19,1.8,3.5),s=r.clone().sub(i).divideScalar(o);s.y=4.9*o;let c=new Y(new X(.05,.065,.28,8),this.mat(3159857,.35));return c.position.copy(i),c.castShadow=!0,this.scene.add(c),this.grenadesInWorld.push({mesh:c,velocity:s,detonateAt:t+o+1,team:e.team,playerOwned:!1,owner:e,mortar:!0}),e.nextMortar=t+4.2+Math.random()*2.3,e.throwAt=t,e.nextShot=Math.max(e.nextShot,t+1),e.root.rotation.y=Math.atan2(r.x-i.x,r.z-i.z)+Math.PI,e.mortarRig.tube.rotation.x=.46,setTimeout(()=>{e.mortarRig&&(e.mortarRig.tube.rotation.x=.62)},180),this.audio.shot(`bolt`,.28),!0}fireNpcTransportPassenger(e,t,n,r){if(e.reloadUntil){if(r<e.reloadUntil){let t=1-(e.reloadUntil-r)/n.reload,i=Math.sin(V.clamp(t,0,1)*Math.PI);e.weapon.position.y=-.3*i,e.weapon.rotation.z=-.38*i,e.muzzle.visible=!1;return}e.mag=n.magazine,e.reloadUntil=0,e.weapon.position.y=0,e.weapon.rotation.z=0}if(!e.mag){e.reloadUntil=r+n.reload*(.95+Math.random()*.15);return}let i=r-e.shotAt,a=i<.18?Math.sin(i/.18*Math.PI):0;e.weapon.position.z=a*.12,e.weapon.rotation.x=a*.08,e.muzzle.visible=i<.055;let o=this.bots.filter(t=>t.alive&&!t.drivingTank&&!t.drivingTransport&&!t.piloting&&!t.chuting&&t.team!==e.team),s=e.team===`enemy`&&!this.dead,c=o.sort((t,n)=>e.root.position.distanceToSquared(t.root.position)-e.root.position.distanceToSquared(n.root.position))[0],l=c?e.root.position.distanceToSquared(c.root.position):1/0,u=(s?e.root.position.distanceToSquared(this.camera.position):1/0)<l,d=u?this.camera.position:c?.root.position;if(!d)return;let f=e.root.position.distanceTo(d);if(f>n.range||(e.root.rotation.y=Math.atan2(d.x-e.root.position.x,d.z-e.root.position.z)+Math.PI,r<e.nextShot))return;e.nextShot=r+V.lerp(n.interval[0],n.interval[1],Math.random())*1.35,e.shotAt=r,e.mag--;let p=e.muzzle.getWorldPosition(new U),m=d.clone().setY(u?this.camera.position.y:1.35),h=V.clamp((.58-f*.011)*n.accuracy*(1-Math.min(.6,e.suppression*.35)),.06,.62),g=Math.random()<h;g||(m.x+=(Math.random()-.5)*4.5,m.y+=(Math.random()-.5)*2.8);let _=p.distanceTo(m);this.ray.set(p,m.clone().sub(p).normalize()),this.ray.far=_;let v=this.ray.intersectObjects(this.coverMeshes,!1)[0];this.ray.far=1/0,v&&(m.copy(v.point),g=!1),this.smokeBlocks(p,m)&&(g=!1),this.tracer(p,m,e.team===`ally`?16768387:16747368);let y=this.soundAt(t.root.position);if(this.audio.shot(n.kind,y.volume,y.pan),this.alertBots(e.team,t.root.position),c&&(c.suppression=Math.min(1.6,c.suppression+n.suppression)),!g)return;let b=V.lerp(n.damage[0],n.damage[1],Math.random())*.85;u?(this.hurtPlayer(b*.36*this.enemyDamage,p,`${e.name}的${n.kind===`auto`?`自动武器`:n.kind===`semi`?`半自动步枪`:`步枪`}`),this.dead&&e.kills++):c&&(c.hp-=b,c.hp<=0&&(e.kills++,this.down(c,void 0,!1,e)))}botWeapon(e,t){let n={rifleman:{range:38,distance:20,interval:[1.15,1.85],damage:[28,40],accuracy:1,suppression:.16,kind:`bolt`,magazine:5,reload:3.2},assault:{range:24,distance:12,interval:[.2,.38],damage:[9,15],accuracy:.72,suppression:.2,kind:`auto`,magazine:32,reload:2.8},support:{range:36,distance:22,interval:[.17,.3],damage:[11,17],accuracy:.82,suppression:.3,kind:`auto`,magazine:20,reload:3.2},scout:{range:54,distance:34,interval:[1.7,2.45],damage:[58,78],accuracy:1.3,suppression:.12,kind:`bolt`,magazine:5,reload:3.4},medic:{range:34,distance:18,interval:[1.3,2],damage:[25,36],accuracy:.92,suppression:.14,kind:`bolt`,magazine:5,reload:3.3},"anti-tank":{range:23,distance:14,interval:[.72,1.12],damage:[17,25],accuracy:.82,suppression:.13,kind:`semi`,magazine:10,reload:2.2},engineer:{range:31,distance:18,interval:[1.45,2.2],damage:[27,38],accuracy:.9,suppression:.14,kind:`bolt`,magazine:5,reload:3.5},mortar:{range:31,distance:19,interval:[1.4,2.15],damage:[27,38],accuracy:.9,suppression:.14,kind:`bolt`,magazine:5,reload:3.5}}[e]??{range:34,distance:18,interval:[1.2,1.8],damage:[26,38],accuracy:1,suppression:.15,kind:`bolt`,magazine:5,reload:3.2};if(t===`enemy`){let t={rifleman:{...n,interval:[1.1,1.75],damage:[27,39],magazine:5,reload:3.1},assault:{...n,interval:[.21,.4],damage:[8,14],magazine:30,reload:2.6},support:{...n,interval:[.18,.31],damage:[10,16],magazine:30,reload:3.2},scout:{...n,interval:[1.7,2.4],damage:[56,75],magazine:5,reload:3.4},medic:{...n,interval:[1.2,1.9],damage:[26,37],magazine:5,reload:3.1},"anti-tank":{...n,range:36,distance:23,interval:[.95,1.45],damage:[38,56],accuracy:1.05,suppression:.24,kind:`semi`,magazine:7,reload:4.2},engineer:{...n,interval:[1.35,2.05],damage:[24,35],magazine:5,reload:3.3},mortar:{...n,interval:[1.35,2.05],damage:[24,35],magazine:5,reload:3.3}}[e];if(t)return t}if(t!==`ally`||this.campaign.id!==`baituan`)return n;let r=this.battleLoadouts.find(t=>t.id===e);if(!r)return n;let i=60/r.rpm;return{...n,interval:[i*1.05,i*1.55],damage:[r.damage*.38,r.damage*.52],kind:r.kind,magazine:r.magazine,reload:r.reload}}botThreat(e){let t=this.bots.filter(t=>t.alive&&!t.drivingTank&&!t.drivingTransport&&!t.piloting&&!t.chuting&&t.team!==e.team).map(e=>e.root.position);return e.team===`enemy`&&!this.dead&&!this.playerPlane&&!this.parachuting&&t.push(this.camera.position),t.sort((t,n)=>e.root.position.distanceToSquared(t)-e.root.position.distanceToSquared(n))[0]}botCanSee(e,t){let n=e.root.position.clone().add(new U(0,1.58,0)),r=t.clone().sub(n),i=r.length();if(i<.1||this.smokeBlocks(n,t))return!1;this.ray.set(n,r.normalize()),this.ray.far=i;let a=this.ray.intersectObjects(this.coverMeshes,!1)[0];return this.ray.far=1/0,!a||a.distance>=i-.45}alertBots(e,t){let n=performance.now()/1e3;for(let r of this.bots)!r.alive||r.team===e||r.root.position.distanceToSquared(t)>65**2||(r.lastSeen=t.clone().setY(0),r.lastSeenUntil=Math.max(r.lastSeenUntil,n+3.5))}findBotCover(e,t){let n,r=1/0;for(let i of this.colliders){let a=new H((i.minX+i.maxX)/2,(i.minZ+i.maxZ)/2),o=a.clone().sub(new H(t.x,t.z));if(o.lengthSq()<.01)continue;o.normalize();let s=(i.maxX-i.minX)/2,c=(i.maxZ-i.minZ)/2,l=Math.abs(o.x)*s+Math.abs(o.y)*c+.62,u=new U(a.x+o.x*l,0,a.y+o.y*l),d=e.root.position.distanceTo(u);if(d<1.1||d>16||Math.abs(u.x)>this.battlefieldHalfWidth()-.5||Math.abs(u.z)>57||this.colliders.some(e=>e!==i&&u.x>e.minX-.3&&u.x<e.maxX+.3&&u.z>e.minZ-.3&&u.z<e.maxZ+.3))continue;let f=t.distanceTo(u),p=d-Math.min(f,24)*.08;p<r&&(r=p,n=u)}return n}updateMedicRescue(e,t,n){if(e.role!==`medic`)return!1;let r=e.reviveTarget;if(r&&(r.alive||r.team!==e.team||r.reviver!==e)&&(r=void 0,e.reviveTarget=void 0,e.reviveUntil=0),!r&&e.suppression<1.05&&(r=this.bots.filter(t=>!t.alive&&t.team===e.team&&n>=t.reviveAt&&!t.reviver&&t.root.position.distanceToSquared(e.root.position)<22**2).sort((t,n)=>t.root.position.distanceToSquared(e.root.position)-n.root.position.distanceToSquared(e.root.position))[0],r&&(e.reviveTarget=r,r.reviver=e,r.respawnAt=Math.max(r.respawnAt,n+11),e.reviveUntil=0)),!r)return!1;let i=r.root.position.x-e.root.position.x,a=r.root.position.z-e.root.position.z,o=Math.hypot(i,a);if(e.root.rotation.y=Math.atan2(i,a)+Math.PI,e.muzzle.visible=!1,o>1.35){e.smokes&&e.suppression>.65&&n>=e.smokeAt&&this.throwNpcSmoke(e,r.root.position,n),this.moveBot(e,i,a,3.15*(1-Math.min(.4,e.suppression*.22)),t);let o=Math.sin(n*8.5+e.phase)*.68;return e.legs[0].rotation.x=o,e.legs[1].rotation.x=-o,e.weapon.rotation.z=.35,!0}e.reviveUntil||=n+1.65;let s=1-(e.reviveUntil-n)/1.65,c=Math.sin(V.clamp(s,0,1)*Math.PI*4);return e.root.scale.y=V.damp(e.root.scale.y,.58,10,t),e.weapon.position.set(-.2,-.38,.08),e.weapon.rotation.z=-.7,e.arms[0].rotation.x=-.3+c*.18,e.arms[1].rotation.x=-.45-c*.18,n<e.reviveUntil?!0:(this.reviveBot(r,n),e.reviveTarget=void 0,e.reviveUntil=0,e.nextAidAt=Math.max(e.nextAidAt,n+5),e.nextShot=n+.7,!0)}updateBots(e,t){for(let e of[`ally`,`enemy`]){if(this.reinforcementWaveAt[e]||(this.reinforcementWaveAt[e]=t+6),t<this.reinforcementWaveAt[e])continue;let n=e===`ally`?0:1;if(this.tickets[n]>0)for(let n of this.bots)n.team===e&&!n.alive&&t>=n.respawnAt&&this.reinforce(n,t);this.reinforcementWaveAt[e]=t+6}let n=this.camera.position,r=this.bots.filter(e=>e.team===`enemy`&&e.alive&&!e.drivingTank&&!e.drivingTransport&&!e.piloting&&!e.chuting),i=this.bots.filter(e=>e.team===`ally`&&e.alive&&!e.drivingTank&&!e.drivingTransport&&!e.piloting&&!e.chuting);for(let a of this.bots){if(!a.alive||a.chuting)continue;if(this.dead&&a===this.playerReviver){let n=this.camera.position.x-a.root.position.x,r=this.camera.position.z-a.root.position.z,i=Math.hypot(n,r);if(a.root.rotation.y=Math.atan2(n,r)+Math.PI,i>1.45){this.moveBot(a,n,r,3.35,e);let i=Math.sin(t*9+a.phase)*.7;a.legs[0].rotation.x=i,a.legs[1].rotation.x=-i,a.root.scale.y=1}else a.root.scale.y=V.damp(a.root.scale.y,.58,10,e),a.weapon.position.y=-.35,a.weapon.rotation.z=-.65;continue}if(this.updateBotVault(a,t))continue;a.root.rotation.x=V.damp(a.root.rotation.x,0,9,e);let o=this.botWeapon(a.role,a.team);if(a.piloting){let e=a.piloting;if(!e.alive||e.playerDriven||e.pilot!==a)e.pilot===a&&(e.pilot=void 0),a.piloting=void 0,a.root.visible=!0,a.body.layers.enable(0),a.head.layers.enable(0),a.weapon.visible=!0;else{a.root.position.copy(e.root.position),a.root.visible=!1,a.body.layers.disable(0),a.head.layers.disable(0),a.weapon.visible=!1;continue}}if(a.drivingTank){let n=a.drivingTank;if(!n.alive||n.playerDriven||n.driver!==a)n.driver===a&&(n.driver=void 0),a.drivingTank=void 0,a.root.visible=!0,a.body.layers.enable(0),a.head.layers.enable(0);else{let r=n.root.position.x-a.root.position.x,i=n.root.position.z-a.root.position.z;if(Math.hypot(r,i)>1.45){a.root.visible=!0,a.body.layers.enable(0),a.head.layers.enable(0),this.moveBot(a,r,i,3,e),a.root.rotation.y=Math.atan2(r,i)+Math.PI;let n=Math.sin(t*9+a.phase)*.72;a.legs[0].rotation.x=n,a.legs[1].rotation.x=-n,a.weapon.visible=!0}else a.root.position.copy(n.root.position),a.root.visible=!1,a.body.layers.disable(0),a.head.layers.disable(0);continue}}if(a.drivingTransport){let n=a.drivingTransport;if(!n.alive||n.playerDriven||n.driver!==a)n.driver===a&&(n.driver=void 0),a.drivingTransport=void 0,a.root.visible=!0,a.body.layers.enable(0),a.head.layers.enable(0);else{let r=n.root.position.x-a.root.position.x,i=n.root.position.z-a.root.position.z;if(Math.hypot(r,i)>1.4){a.root.visible=!0,a.body.layers.enable(0),a.head.layers.enable(0),this.moveBot(a,r,i,3,e),a.root.rotation.y=Math.atan2(r,i)+Math.PI;let n=Math.sin(t*9+a.phase)*.72;a.legs[0].rotation.x=n,a.legs[1].rotation.x=-n,a.weapon.visible=!0}else a.root.position.copy(n.root.position),a.root.visible=!1,a.body.layers.disable(0),a.head.layers.disable(0);continue}}if(a.emplacement){let n=a.emplacement;if(!n.alive||n.occupied||n.operator!==a)n.operator===a&&(n.operator=void 0),a.emplacement=void 0;else{let r=n.root.position.clone().add(new U(n.kind===`aa`?.72:.62,0,n.kind===`aa`?.45:.72).applyQuaternion(n.root.quaternion)),i=r.x-a.root.position.x,o=r.z-a.root.position.z,s=Math.hypot(i,o);if(a.suppression=Math.max(0,a.suppression-e*.35),s>.8){this.moveBot(a,i,o,2.8,e),a.root.rotation.y=Math.atan2(i,o)+Math.PI,a.root.scale.y=V.damp(a.root.scale.y,1,9,e);let n=Math.sin(t*8+a.phase)*.65;a.legs[0].rotation.x=n,a.legs[1].rotation.x=-n,a.weapon.visible=!0;continue}a.root.position.copy(r),a.root.rotation.y=n.root.rotation.y+n.yaw.rotation.y+Math.PI,a.root.scale.y=.72,a.legs[0].rotation.x=-.75,a.legs[1].rotation.x=-.75,a.weapon.visible=!1;continue}}if(a.machineGun){let n=a.machineGun;if(n.occupied||n.operator!==a||!n.ammo)n.operator===a&&(n.operator=void 0),a.machineGun=void 0;else{let r=n.position.clone().add(new U(0,0,.78).applyQuaternion(n.root.quaternion)),i=r.x-a.root.position.x,o=r.z-a.root.position.z;if(Math.hypot(i,o)>.7){this.moveBot(a,i,o,2.7,e),a.root.rotation.y=Math.atan2(i,o)+Math.PI;let n=Math.sin(t*8+a.phase)*.62;a.legs[0].rotation.x=n,a.legs[1].rotation.x=-n,a.weapon.visible=!0;continue}a.root.position.copy(r),a.root.rotation.y=n.root.rotation.y+n.yaw.rotation.y+Math.PI,a.root.scale.y=.72,a.legs[0].rotation.x=-.72,a.legs[1].rotation.x=-.72,a.weapon.visible=!1;continue}}if(a.mortarRig){let n=(a.team===`ally`?r:i).some(e=>e.root.position.distanceToSquared(a.root.position)<14**2)||a.team===`enemy`&&!this.dead&&this.camera.position.distanceToSquared(a.root.position)<14**2;if(t>=a.mortarRigUntil||n||a.suppression>1.2)this.disposeGroup(a.mortarRig.root),a.mortarRig=void 0,a.mortarRigUntil=0,a.nextMortar=Math.max(a.nextMortar,t+8);else{let n=a.mortarRig.root.position.clone().add(new U(0,0,.75).applyQuaternion(a.mortarRig.root.quaternion));a.root.position.copy(n),a.root.rotation.y=a.mortarRig.root.rotation.y,a.root.scale.y=.58,a.legs[0].rotation.x=-.85,a.legs[1].rotation.x=-.85,a.weapon.visible=!1,a.suppression=Math.max(0,a.suppression-e*.22),this.fireNpcMortar(a,t);continue}}if(a.weapon.visible=!0,a.riding){let n=a.riding,r=this.bots.filter(e=>e.alive&&e.riding===n).indexOf(a);if(n.alive){let i=this.playerTransport===n&&this.playerTransportPassenger&&r>=this.playerTransportSeat?r+1:r,s=new U(i%2?.62:-.62,1.72,-.25-Math.floor(i/2)*.72).applyQuaternion(n.root.quaternion);a.root.position.copy(n.root.position).add(s),a.root.rotation.y=n.root.rotation.y,a.root.scale.y=1,a.legs.forEach(e=>e.rotation.x=-.9),a.suppression=Math.max(0,a.suppression-e*.4),this.fireNpcTransportPassenger(a,n,o,t);continue}else if(a.riding=void 0,a.hp-=90,a.root.position.copy(n.root.position).add(new U((r%2?1:-1)*1.2,0,-1)),a.hp<=0){this.down(a);continue}}if(a.suppression=Math.max(0,a.suppression-e*.28),this.updateMedicRescue(a,e,t))continue;let s=this.botThreat(a),c=a.suppression>.78||a.hp<52||a.mag<=Math.ceil(o.magazine*.35)||!!a.reloadUntil;!a.coverTarget&&s&&c&&t>=a.nextCoverAt&&(a.coverTarget=this.findBotCover(a,s),a.coverUntil=a.coverTarget?t+4.5+Math.random()*2.5:0,a.nextCoverAt=t+7+Math.random()*3),a.coverTarget&&t>=a.coverUntil&&(a.coverTarget=void 0);let l=!1;if(a.coverTarget){let n=a.coverTarget.x-a.root.position.x,r=a.coverTarget.z-a.root.position.z;if(Math.hypot(n,r)>.72){this.moveBot(a,n,r,2.7*(1-Math.min(.35,a.suppression*.18)),e),a.root.rotation.y=Math.atan2(n,r)+Math.PI;let i=Math.sin(t*9+a.phase)*.72;a.legs[0].rotation.x=i,a.legs[1].rotation.x=-i,a.root.position.y=this.terrainHeight(a.root.position.x,a.root.position.z)+Math.abs(i)*.035,a.weapon.rotation.z=.18,a.muzzle.visible=!1;continue}l=!0,a.root.position.y=this.terrainHeight(a.root.position.x,a.root.position.z),a.root.scale.y=V.damp(a.root.scale.y,.58,10,e),!a.reloadUntil&&a.mag<=Math.ceil(o.magazine*.35)&&(a.mag=0,a.reloadUntil=t+o.reload*(.95+Math.random()*.15))}if(a.bandageUntil)if(t>=a.bandageUntil)a.bandageUntil=0,a.bandages--,a.hp=Math.min(100,a.hp+45),a.weapon.position.set(0,0,0),a.weapon.rotation.set(0,0,0),a.nextShot=t+.45;else{let e=1-(a.bandageUntil-t)/2.2,n=Math.sin(V.clamp(e,0,1)*Math.PI*5);a.weapon.position.set(-.18,-.42+n*.05,.12),a.weapon.rotation.set(.35,0,-.65),a.arms[0].rotation.x=-.25+n*.2,a.arms[1].rotation.x=-.35-n*.2,a.muzzle.visible=!1;continue}let u=(a.team===`ally`?r:i).some(e=>e.root.position.distanceToSquared(a.root.position)<12**2)||a.team===`enemy`&&!this.dead&&this.camera.position.distanceToSquared(a.root.position)<12**2;if(a.hp<50&&a.bandages&&a.suppression<.8&&(!u||l)){a.bandageUntil=t+2.2,a.nextShot=Math.max(a.nextShot,a.bandageUntil+.35);continue}if(a.role===`medic`&&t>=a.nextAidAt&&this.bots.some(e=>e.alive&&e.team===a.team&&e.hp<72&&e.root.position.distanceToSquared(a.root.position)<13**2)&&(this.placeMedkit(a.root.position.clone().add(new U((Math.random()-.5)*.8,0,(Math.random()-.5)*.8)),a.team,t),a.nextAidAt=t+30,a.throwAt=t,a.nextShot=Math.max(a.nextShot,t+.8)),this.fireNpcMortar(a,t)||this.updateBotAntiTankGrenade(a,e,t))continue;let d=this.fortifications.some(e=>e.kind===`wire`&&e.team!==a.team&&e.center.distanceToSquared(a.root.position)<2.3**2);if(d&&t>=a.nextWireDamage&&(a.nextWireDamage=t+.8,a.hp-=4,a.hp<=0)){this.kill(a);continue}let f=a.team===`ally`?r:i,p=a.team===`enemy`&&!this.dead&&!this.playerPlane&&!this.parachuting&&this.botCanSee(a,n),m,h,g,_=p?n:a.root.position,v=p,y=v?a.root.position.distanceToSquared(n):1/0;for(let e of f){let t=e.root.position.clone().add(new U(0,1.35,0)),n=a.root.position.distanceToSquared(e.root.position);n<y&&this.botCanSee(a,t)&&(y=n,m=e,_=e.root.position,v=!1)}for(let e of this.transports){if(!e.alive||e.team===a.team)continue;let t=e.root.position.clone().setY(1),n=a.root.position.distanceToSquared(e.root.position);n<y&&this.botCanSee(a,t)&&(y=n,m=void 0,h=e,_=e.root.position,v=!1)}(m||h||v)&&(a.lastSeen=_.clone(),a.lastSeenUntil=t+4.2);let b=o.distance;if(!m&&!h&&!v)if(a.inSquad&&!this.dead)m=void 0,h=void 0,v=!1,_=this.squadMode===`follow`?n:this.squadTarget,b=this.squadMode===`follow`?8:6;else if(a.lastSeen&&t<a.lastSeenUntil)_=a.lastSeen,b=1.2;else{a.lastSeen=void 0,g=this.campaign.rule===`demolition`&&a.team===this.campaign.attacker?this.depots.filter(e=>!e.destroyed).sort((e,t)=>a.root.position.distanceToSquared(e.position)-a.root.position.distanceToSquared(t.position))[0]:void 0;let e=this.campaign.rule===`assault`?this.objectives[this.assaultIndex]:this.objectives.filter(e=>e.owner!==a.team).sort((e,t)=>a.root.position.distanceToSquared(e.position)-a.root.position.distanceToSquared(t.position))[0];g?(m=void 0,h=void 0,_=g.position,v=!1):e&&(m=void 0,h=void 0,_=e.position,v=!1)}let x=_.x-a.root.position.x,S=_.z-a.root.position.z,C=Math.hypot(x,S),w=!l&&C>b,T=a.suppression>1.28&&!a.coverTarget&&!a.riding;a.root.rotation.y=Math.atan2(x,S)+Math.PI;let E=l||a.suppression>1.15?.56:a.suppression>.65?.78:1;if(a.root.scale.y=V.damp(a.root.scale.y,T?1:E,8,e),T&&(a.root.rotation.x=V.damp(a.root.rotation.x,-1.37,12,e)),a.smokes&&a.suppression>1&&t>=a.smokeAt&&C>5&&C<34&&this.throwNpcSmoke(a,_,t),(m||h||v||g)&&a.grenades&&C>10&&C<28&&t>=a.nextGrenade&&this.throwNpcGrenade(a,_,t),w){let t=(a.team===`ally`?1.35:1.05)*(d?.32:1)*(1-Math.min(.55,a.suppression*.32))*(T?.28:1);this.moveBot(a,x,S,t,e)}else C>8&&this.moveWithCollision(a.root.position,Math.cos(a.root.rotation.y)*a.strafe*.28*e,-Math.sin(a.root.rotation.y)*a.strafe*.28*e,.34);a.root.position.x=V.clamp(a.root.position.x,-this.battlefieldHalfWidth(),this.battlefieldHalfWidth());let D=w&&!T?Math.sin(t*7+a.phase)*.55:0,O=this.terrainHeight(a.root.position.x,a.root.position.z);a.legs[0].rotation.x=D,a.legs[1].rotation.x=-D,a.root.position.y=O+(T?.06:w?Math.abs(Math.sin(t*7+a.phase))*.025:0);let ee=t-a.shotAt,k=ee<.18?Math.sin(ee/.18*Math.PI):0,te=t-a.throwAt,ne=te<.65?Math.sin(te/.65*Math.PI):0,A=t-a.meleeAt,re=A<.48?Math.sin(A/.48*Math.PI):0;if(a.weapon.position.z=k*.12-re*.62,a.weapon.position.y=re*.08,a.weapon.rotation.x=k*.08-re*.52,a.weapon.rotation.z=ne*-.75,a.arms[0].rotation.x=-.9-re*.72,a.arms[1].rotation.x=-.9-re*.72,a.muzzle.visible=ee<.055,C<2.6&&(m||v&&!this.playerTank&&!this.playerPlane&&!this.playerEmplacement&&!this.playerMortar&&!this.playerMG)){t>=a.nextMelee&&(a.nextMelee=t+1.05,a.meleeAt=t,a.nextShot=Math.max(a.nextShot,t+.7),this.audio.click(980,this.soundAt(a.root.position).volume*.12),m?(m.hp-=68,m.hp<=0&&(a.kills++,this.down(m,m.root.position.clone().sub(a.root.position),!1,a))):(this.hurtPlayer(42*this.enemyDamage,a.root.position,`${a.name}的刺刀`),this.dead&&a.kills++));continue}if(a.reloadUntil){if(t<a.reloadUntil){let e=1-(a.reloadUntil-t)/o.reload,n=Math.sin(V.clamp(e,0,1)*Math.PI);a.weapon.position.y=-.32*n,a.weapon.position.x=-.12*n,a.weapon.rotation.z=-.42*n,a.arms[0].rotation.x=-.9+n*.62,a.muzzle.visible=!1;continue}a.mag=o.magazine,a.reloadUntil=0,a.weapon.position.set(0,0,0),a.weapon.rotation.set(0,0,0),a.nextShot=Math.max(a.nextShot,t+.22)}if(l&&a.suppression<.35&&a.hp>=50&&a.mag>Math.ceil(o.magazine*.35)&&(a.coverTarget=void 0,a.coverUntil=0,l=!1),!a.mag){a.reloadUntil=t+o.reload*(.95+Math.random()*.15),a.muzzle.visible=!1;continue}if(T&&a.suppression>1.42){a.muzzle.visible=!1;continue}if(C>o.range||t<a.nextShot||!m&&!h&&!v&&!g)continue;a.nextShot=t+V.lerp(o.interval[0],o.interval[1],Math.random())*(a.team===`enemy`?this.enemyFireRate:1),a.shotAt=t,a.mag--;let ie=V.clamp((.72-C*.012)*o.accuracy*(1-Math.min(.65,a.suppression*.42))*(a.team===`enemy`?this.enemyAccuracy:1),.05,.82),j=Math.random()<=ie,ae=a.muzzle.getWorldPosition(new U),oe=m?m.root.position.clone().add(new U(0,1.35,0)):h?h.root.position.clone().add(new U(0,1,0)):g?g.position.clone().add(new U(0,1,0)):this.camera.position.clone();j||(oe.x+=(Math.random()-.5)*3.5,oe.y+=(Math.random()-.5)*2.5);let se=oe.clone().sub(ae),ce=se.length();this.ray.set(ae,se.normalize());let le=this.ray.intersectObjects(this.coverMeshes,!1)[0];le&&le.distance<ce&&(oe.copy(le.point),j=!1),this.smokeBlocks(ae,oe)&&(j=!1),a.team===`enemy`&&this.nearMiss(ae,oe),this.tracer(ae,oe,a.team===`ally`?16768387:16747368);let ue=this.soundAt(a.root.position);if(this.audio.shot(o.kind,ue.volume,ue.pan),this.alertBots(a.team,a.root.position),m&&(m.suppression=Math.min(1.6,m.suppression+o.suppression)),!j)continue;let de=V.lerp(o.damage[0],o.damage[1],Math.random());if(m){m.hp-=de,m.hp<=0&&(a.kills++,this.down(m,void 0,!1,a));continue}if(h){this.damageTransport(h,de*.28,!1);continue}if(g){this.damageDepot(g,de*.55,!1);continue}if(this.hurtPlayer(de*.36*this.enemyDamage,a.root.position,`${a.name}的${o.kind===`auto`?`自动武器`:o.kind===`semi`?`半自动步枪`:`步枪`}`),this.dead){a.kills++;return}}}updateVehicleDamage(e,t){for(let n of this.tanks)if(n.alive){if((n.hp<n.maxHp*.7||n.engine<65)&&t>=n.nextSmoke){n.nextSmoke=t+.28+Math.random()*.18;let e=Math.max(1-n.hp/n.maxHp,1-n.engine/100);this.particle(n.root.position.clone().add(new U(0,1.35,0)),new U((Math.random()-.5)*.35,.7+Math.random()*.5,(Math.random()-.5)*.35),e>.62?2500644:5066825,.18+e*.22,1.8+e,-.08,.8,.35+e*.35)}if(n.hp<n.maxHp*.32&&Math.random()<e*4.5){let e=n.root.position.clone().add(new U((Math.random()-.5)*1.4,.8+Math.random()*.8,(Math.random()-.5)*1.8));this.particle(e,new U((Math.random()-.5)*2.2,1.2+Math.random()*2.5,(Math.random()-.5)*2.2),Math.random()<.58?16743208:3881782,.055+Math.random()*.09,.35+Math.random()*.45,5)}!n.playerDriven&&t-n.lastDamageAt>10&&n.hp>0&&(n.hp<n.maxHp||n.tracks<100||n.engine<100||n.turretHealth<100)&&(n.hp=Math.min(n.maxHp,n.hp+e*3),n.tracks=Math.min(100,n.tracks+e*1.5),n.engine=Math.min(100,n.engine+e*1.2),n.turretHealth=Math.min(100,n.turretHealth+e))}for(let e of this.transports){if(!e.alive||e.hp>=e.maxHp*.57||t<e.nextSmoke)continue;e.nextSmoke=t+.32+Math.random()*.2;let n=1-e.hp/e.maxHp;this.particle(e.root.position.clone().add(new U(0,1.25,0)),new U((Math.random()-.5)*.3,.65+Math.random()*.45,(Math.random()-.5)*.3),n>.65?2697767:5592912,.18+n*.18,1.7+n,-.06,.7,.32+n*.4)}}updateBotAntiTank(e){for(let t of this.bots){if(!t.alive||!t.antiTank||t.riding||e<t.nextRocket||e-t.throwAt<1.4)continue;let n=this.tanks.filter(e=>e.alive&&e.team!==t.team).sort((e,n)=>t.root.position.distanceToSquared(e.root.position)-t.root.position.distanceToSquared(n.root.position))[0];if(!n)continue;let r=t.root.position.distanceTo(n.root.position);if(r<12||r>52)continue;let i=t.root.position.clone().add(new U(0,1.55,0)),a=n.root.position.clone().add(new U(0,1,0)).sub(i);a.x+=(Math.random()-.5)*r*.022,a.y+=(Math.random()-.5)*r*.012,a.z+=(Math.random()-.5)*r*.022;let o=a.normalize();this.ray.set(i,o),this.ray.far=r+4;let s=this.ray.intersectObjects([...this.coverMeshes,n.hitbox],!1)[0];this.ray.far=1/0;let c=s?.point??i.clone().addScaledVector(o,r+4);if(this.tracer(i.clone().addScaledVector(o,.65),c,t.team===`ally`?16768899:16747368),s?.object===n.hitbox){let e=n.alive;this.impactFx(s.point),this.damageTank(n,125,!1,s.point,48,o,`${t.name} · 反坦克武器`,i),e&&!n.alive&&(t.kills++,this.events.combatKill(t.name,t.team,n.name,n.team))}else s&&this.impactFx(s.point);t.nextRocket=e+4.5+Math.random()*3,t.shotAt=e,t.root.rotation.y=Math.atan2(o.x,o.z)+Math.PI;let l=this.soundAt(t.root.position);this.audio.shot(`bolt`,l.volume,l.pan),this.alertBots(t.team,t.root.position)}}updateTanks(e,t){this.updateVehicleDamage(e,t),this.updateBotAntiTank(t);for(let n of this.tanks){if(this.updateTankCrew(n,t),n.playerDriven)continue;if(!n.alive){n.nextSmoke=this.updateVehicleWreck(n.root,t,n.nextSmoke),t>=n.respawnAt&&this.tickets[n.team===`ally`?0:1]>0&&this.reinforceTank(n,t);continue}if(n.driver&&(!n.driver.alive||n.driver.drivingTank!==n)&&(n.driver=void 0),n.driver&&n.hp<n.maxHp*.25){this.dismountTankDriver(n,!0);continue}if(!n.driver&&n.hp>=n.maxHp*.4){let e=this.bots.filter(e=>e.alive&&e.team===n.team&&!e.inSquad&&!e.riding&&!e.drivingTank&&!e.drivingTransport&&!e.piloting&&!e.chuting&&!e.emplacement&&!e.machineGun&&!e.mortarRig&&e.root.position.distanceToSquared(n.root.position)<22**2).sort((e,t)=>e.root.position.distanceToSquared(n.root.position)-t.root.position.distanceToSquared(n.root.position))[0];e&&(n.driver=e,e.drivingTank=n,e.coverTarget=void 0)}if(!this.tankDriverSeated(n))continue;let r,i,a,o=!1,s,c=1/0;for(let e of this.bots){if(!e.alive||e.drivingTank||e.drivingTransport||e.team===n.team)continue;let t=n.root.position.distanceToSquared(e.root.position);t<c&&(c=t,r=e,i=void 0,a=void 0,o=!1,s=e.root.position)}for(let e of this.tanks){if(!e.alive||e.team===n.team)continue;let t=n.root.position.distanceToSquared(e.root.position);t<c&&(c=t,r=void 0,i=e,a=void 0,o=!1,s=e.root.position)}for(let e of this.transports){if(!e.alive||e.team===n.team)continue;let t=n.root.position.distanceToSquared(e.root.position);t<c&&(c=t,r=void 0,i=void 0,a=e,o=!1,s=e.root.position)}if(n.team===`enemy`&&!this.dead){let e=n.root.position.distanceToSquared(this.camera.position);e<c&&(c=e,r=void 0,i=void 0,a=void 0,o=!0,s=this.camera.position)}if(this.campaign.rule===`demolition`&&n.team===this.campaign.attacker){let e=this.depots.filter(e=>!e.destroyed).sort((e,t)=>n.root.position.distanceToSquared(e.position)-n.root.position.distanceToSquared(t.position))[0],t=e?n.root.position.distanceToSquared(e.position):1/0;e&&t<c&&(c=t,r=void 0,i=void 0,a=void 0,o=!1,s=e.position)}let l=s&&c<58**2;if(l||(s=(this.campaign.rule===`assault`?this.objectives[this.assaultIndex]:this.objectives.filter(e=>e.owner!==n.team).sort((e,t)=>n.root.position.distanceToSquared(e.position)-n.root.position.distanceToSquared(t.position))[0])?.position),!s)continue;let u=s.x-n.root.position.x,d=s.z-n.root.position.z,f=Math.hypot(u,d),p=Math.atan2(u,d)+Math.PI,m=l?34:3.5,h=n.tracks<=0||n.engine<=0||!this.crewAlive(n,`driver`)?0:(.35+n.tracks/100*.65)*(.3+n.engine/100*.7)*(.55+n.crew*.1125);if(t<n.reverseUntil&&h>0){n.root.rotation.y+=n.reverseTurn*e*.7;let t=new U(-Math.sin(n.root.rotation.y),0,-Math.cos(n.root.rotation.y));this.moveTankWithCollision(n.root.position,-t.x*e*1.25*h,-t.z*e*1.25*h);continue}if(f>m&&h>0?(n.root.rotation.y=p,n.stalledFor=this.moveVehicleToward(n.root.position,s,e*1.65*h,n.reverseTurn)?Math.max(0,n.stalledFor-e*2):n.stalledFor+e,n.stalledFor>1.1&&(n.stalledFor=0,n.reverseUntil=t+1.2+Math.random()*.5,n.reverseTurn*=-1)):n.stalledFor=0,!(!n.turretHealth||!this.crewAlive(n,`gunner`))&&l){n.turret.rotation.y=p-n.root.rotation.y;let c=o?this.camera.position.y:i||a?s.y+1:s.y+1.2,l=n.root.position.y+1.56;if(n.pitch.rotation.x=V.damp(n.pitch.rotation.x,V.clamp(Math.atan2(c-l,Math.max(1,f)),-.18,.35),4,e),(r||o)&&f<52&&t>=n.nextMg&&t>=n.mgPauseUntil){n.mgBurst||=5+Math.floor(Math.random()*5),n.nextMg=t+.115;let e=n.coaxMuzzle.getWorldPosition(new U),i=s.clone().setY(o?this.camera.position.y:1.3);i.x+=(Math.random()-.5)*f*.022,i.y+=(Math.random()-.5)*f*.014;let a=this.coverHit(e,i),c=!!a;a&&i.copy(a.point),this.tracer(e,i,n.team===`ally`?16768387:16744552);let l=this.soundAt(n.root.position);this.audio.shot(`auto`,l.volume*.7,l.pan),!c&&Math.random()<V.clamp(.78-f*.012,.18,.66)&&(r?(r.hp-=16,r.hp<=0&&this.down(r)):this.hurtPlayer(7*this.enemyDamage,e)),--n.mgBurst||(n.mgPauseUntil=t+.6+Math.random()*.6)}if(f<58&&t>=n.nextShot){n.nextShot=t+4.3+Math.random()*1.8;let e=n.muzzle.getWorldPosition(new U),r=s.clone().setY(c),i=V.clamp(.85-f*.008,.42,.78);Math.random()>i&&(r.x+=(Math.random()-.5)*6,r.z+=(Math.random()-.5)*5),this.launchCannonShell(e,r.sub(e).normalize(),n.team,!1,175);let a=this.soundAt(n.root.position);this.audio.shot(`bolt`,a.volume,a.pan)}}}}updateTransports(e,t){for(let n of this.transports){if(n.playerDriven)continue;if(!n.alive){n.nextSmoke=this.updateVehicleWreck(n.root,t,n.nextSmoke),t>=n.respawnAt&&this.tickets[n.team===`ally`?0:1]>0&&this.reinforceTransport(n,t);continue}if(n.driver&&(!n.driver.alive||n.driver.drivingTransport!==n)&&(n.driver=void 0),n.driver&&n.hp<n.maxHp*.3){this.dismountTransportDriver(n),this.evacuateTransport(n);continue}if(!n.driver&&n.hp>=n.maxHp*.4){let e=this.bots.filter(e=>e.alive&&e.team===n.team&&!e.inSquad&&!e.riding&&!e.drivingTank&&!e.drivingTransport&&!e.piloting&&!e.chuting&&!e.emplacement&&!e.machineGun&&!e.mortarRig&&e.root.position.distanceToSquared(n.root.position)<22**2).sort((e,t)=>e.root.position.distanceToSquared(n.root.position)-t.root.position.distanceToSquared(n.root.position))[0];e&&(n.driver=e,e.drivingTransport=n,e.coverTarget=void 0)}if(!this.transportDriverSeated(n))continue;let r=this.campaign.rule===`assault`?this.objectives[this.assaultIndex]:this.objectives.filter(e=>e.owner!==n.team).sort((e,t)=>n.root.position.distanceToSquared(e.position)-n.root.position.distanceToSquared(t.position))[0];if(!r)continue;let i=new U(n.team===`ally`?5:-5,0,n.team===`ally`?45:-45),a=i.clone().sub(r.position).setY(0).normalize(),o=r.position.clone().addScaledVector(a,12),s=this.bots.filter(e=>e.alive&&e.riding===n);if(n.mission===`pickup`&&n.root.position.distanceToSquared(i)<8**2){let e=Math.max(0,6-s.length),r=this.bots.filter(e=>e.alive&&e.team===n.team&&!e.inSquad&&!e.riding&&!e.drivingTank&&!e.drivingTransport&&!e.piloting&&!e.chuting&&!e.emplacement&&!e.machineGun&&!e.mortarRig&&e.root.position.distanceToSquared(n.root.position)<9**2).sort((e,t)=>e.root.position.distanceToSquared(n.root.position)-t.root.position.distanceToSquared(n.root.position)).slice(0,e);r.forEach(e=>{e.riding=n,e.coverTarget=void 0,e.bandageUntil=0});let i=s.length+r.length;if(i>=4||i&&t>=n.waitUntil)n.mission=`transit`,n.waitUntil=0;else{t>=n.waitUntil&&(n.waitUntil=t+5);continue}}if(n.mission===`transit`&&n.root.position.distanceToSquared(o)<8**2&&(n.mission=`unload`,n.waitUntil=t+8,n.nextDrop=t),n.mission===`unload`){s.length&&t>=n.nextDrop&&(this.dismountTransportPassenger(n,s[s.length-1],s.length-1),n.nextDrop=t+.4),(!s.length||t>=n.waitUntil)&&(this.evacuateTransport(n),n.mission=`return`);continue}if(n.mission===`return`&&n.root.position.distanceToSquared(i)<8**2){n.mission=`pickup`,n.waitUntil=t+10;continue}let c=n.mission===`transit`?o:i,l=c.x-n.root.position.x,u=c.z-n.root.position.z;if(Math.hypot(l,u)<1.2)continue;if(t<n.reverseUntil){n.root.rotation.y+=n.reverseTurn*e*.85;let t=new U(Math.sin(n.root.rotation.y),0,Math.cos(n.root.rotation.y)),r=e*1.8;this.moveTankWithCollision(n.root.position,-t.x*r,-t.z*r);for(let e of n.wheels)e.rotation.x+=r*2.5;continue}n.root.rotation.y=Math.atan2(l,u);let d=e*(n.mission===`transit`?2.35:2.7);n.stalledFor=this.moveVehicleToward(n.root.position,c,d,n.reverseTurn)?Math.max(0,n.stalledFor-e*2):n.stalledFor+e,n.stalledFor>1.1&&(n.stalledFor=0,n.reverseUntil=t+1.2+Math.random()*.6,n.reverseTurn*=-1);for(let e of n.wheels)e.rotation.x-=d*2.5}}updateEmplacements(e){for(let t of this.emplacements){if(!t.alive)if(e>=t.respawnAt&&this.tickets[t.team===`ally`?0:1]>0)t.alive=!0,t.occupied=!1,t.operator=void 0,t.operatorUntil=0,t.hp=t.kind===`aa`?180:240,t.root.rotation.z=0;else continue;if(!t.occupied){if(t.operator&&(!t.operator.alive||t.operator.emplacement!==t)&&(t.operator=void 0),t.operator&&e>=t.operatorUntil&&(t.operator.emplacement=void 0,t.operator=void 0),!(t.kind===`aa`?this.planes.some(e=>e.alive&&!e.abandoned&&e.team!==t.team&&e.root.position.distanceToSquared(t.root.position)<95**2):this.tanks.some(e=>e.alive&&e.team!==t.team&&e.root.position.distanceToSquared(t.root.position)<70**2)||this.transports.some(e=>e.alive&&e.team!==t.team&&e.root.position.distanceToSquared(t.root.position)<65**2))){t.operator&&=(t.operator.emplacement=void 0,void 0);continue}if(!t.operator){let n=this.bots.filter(e=>e.alive&&e.team===t.team&&!e.inSquad&&!e.riding&&!e.drivingTank&&!e.drivingTransport&&!e.piloting&&!e.chuting&&!e.emplacement&&!e.machineGun&&!e.mortarRig&&e.root.position.distanceToSquared(t.root.position)<18**2).sort((e,n)=>e.root.position.distanceToSquared(t.root.position)-n.root.position.distanceToSquared(t.root.position))[0];n&&(t.operator=n,t.operatorUntil=e+14+Math.random()*10,n.emplacement=t,n.coverTarget=void 0,n.bandageUntil=0)}if(!(!t.operator||t.operator.root.position.distanceToSquared(t.root.position)>2.2**2)&&!(e<t.nextShot))if(t.kind===`aa`){let n=this.planes.filter(e=>e.alive&&e.team!==t.team).sort((e,n)=>t.root.position.distanceToSquared(e.root.position)-t.root.position.distanceToSquared(n.root.position))[0];if(!n||t.root.position.distanceToSquared(n.root.position)>95**2)continue;let r=n.root.position.clone().sub(t.root.position),i=r.length();t.yaw.rotation.y=Math.atan2(r.x,r.z)+Math.PI-t.root.rotation.y,t.nextShot=e+.34;let a=n.root.position.clone().add(new U((Math.random()-.5)*3,(Math.random()-.5)*2,(Math.random()-.5)*3));this.tracer(t.muzzle.getWorldPosition(new U),a,t.team===`ally`?16768899:16747368);let o=this.soundAt(t.root.position);this.audio.shot(`auto`,o.volume,o.pan),Math.random()<V.clamp(1-i/130,.22,.68)&&this.damagePlane(n,18,!1)}else{let n=[...this.tanks.filter(e=>e.alive&&e.team!==t.team).map(e=>({position:e.root.position,tank:e})),...this.transports.filter(e=>e.alive&&e.team!==t.team).map(e=>({position:e.root.position,transport:e}))];n.sort((e,n)=>t.root.position.distanceToSquared(e.position)-t.root.position.distanceToSquared(n.position));let r=n[0];if(!r||t.root.position.distanceToSquared(r.position)>65**2)continue;let i=r.position.clone().sub(t.root.position),a=i.length();t.yaw.rotation.y=Math.atan2(i.x,i.z)+Math.PI-t.root.rotation.y,t.nextShot=e+4+Math.random()*1.5;let o=t.muzzle.getWorldPosition(new U),s=r.position.clone().setY(1),c=V.clamp(.88-a*.009,.35,.8);Math.random()>c&&(s.x+=(Math.random()-.5)*5,s.z+=(Math.random()-.5)*5),this.launchCannonShell(o,s.sub(o).normalize(),t.team,!1,205);let l=this.soundAt(t.root.position);this.audio.shot(`bolt`,l.volume,l.pan)}}}}updatePlanes(e,t){for(let n of this.planes){if(n.bombs<n.maxBombs&&t>=n.bombRearmAt&&(n.bombs++,n.bombRearmAt=n.bombs<n.maxBombs?t+28:0),!n.alive){t>=n.respawnAt&&this.tickets[n.team===`ally`?0:1]>0&&this.reinforcePlane(n,t);continue}if(n.playerDriven||!n.pilot&&!n.abandoned&&(this.seatPlanePilot(n),!n.pilot))continue;if(n.abandoned){let r=new U(0,0,-1).applyQuaternion(n.root.quaternion);n.speed=Math.max(12,n.speed-e*4),n.root.position.addScaledVector(r,n.speed*e*.45),n.root.position.y-=e*(4.5+(1-n.hp/n.maxHp)*4),n.root.rotation.x=V.damp(n.root.rotation.x,.48,1.1,e),n.root.rotation.z+=e*(n.team===`ally`?.76:-.76),t>=n.nextAttack&&(n.nextAttack=t+.08,this.particle(n.root.position.clone(),new U((Math.random()-.5)*.5,.4+Math.random()*.6,(Math.random()-.5)*.5),Math.random()<.2?16739112:2698024,.22+Math.random()*.25,.8+Math.random()*.5,-.04,.65,.3)),n.root.position.y<=this.terrainHeight(n.root.position.x,n.root.position.z)+.7&&this.damagePlane(n,999,!1);continue}n.angle+=e*(n.team===`ally`?.16:-.16);let r=Math.sin(n.angle)*54,i=Math.cos(n.angle)*54,a=17+Math.sin(n.angle*2)*2,o=n.angle+(n.team===`ally`?-Math.PI/2:Math.PI/2);n.root.position.set(r,a,i),n.root.rotation.y=o,n.root.rotation.z=n.team===`ally`?-.12:.12;let s=this.planes.filter(e=>e.alive&&e.team!==n.team).sort((e,t)=>n.root.position.distanceToSquared(e.root.position)-n.root.position.distanceToSquared(t.root.position))[0];if(s&&t>=n.nextShot){let e=n.root.position.distanceTo(s.root.position),r=new U(0,0,-1).applyEuler(n.root.rotation),i=new U(0,0,-1).applyEuler(s.root.rotation),a=s.root.position.clone().addScaledVector(i,V.clamp(e/140,0,.85)*s.speed),o=a.clone().sub(n.root.position).normalize(),c=r.dot(o);if(e<105&&c>.42){n.nextShot=t+.42;let i=n.root.position.clone().addScaledVector(r,2),o=a.clone().add(new U((Math.random()-.5)*2.5,(Math.random()-.5)*1.5,(Math.random()-.5)*2.5));for(let e=0;e<3;e++)this.tracer(i.clone().addScaledVector(r,e*.22),o.clone().add(new U((Math.random()-.5)*1.4,Math.random()-.5,(Math.random()-.5)*1.4)),n.team===`ally`?16768899:16744552);let c=this.soundAt(i);this.audio.shot(`auto`,c.volume,c.pan);let l=V.clamp(.74-e*.006,.18,.62)*(n.team===`enemy`?this.enemyAccuracy:1);if(Math.random()<l){let e=s.alive;this.damagePlane(s,25,!1),e&&!s.alive&&this.events.combatKill(n.team===`ally`?`中国空军`:`日本陆航`,n.team,s.team===`ally`?`霍克三型战斗机`:`日军战斗机`,s.team)}}}if(n.bombs&&t>=n.nextBomb){let e=n.root.position.clone().add(new U(0,0,-1).applyEuler(n.root.rotation).multiplyScalar(n.speed*.85*1.55)).setY(0),r=[...this.tanks.filter(e=>e.alive&&e.team!==n.team).map(e=>e.root.position),...this.transports.filter(e=>e.alive&&e.team!==n.team).map(e=>e.root.position),...this.emplacements.filter(e=>e.alive&&e.team!==n.team).map(e=>e.root.position),...this.bots.filter(e=>e.alive&&!e.drivingTank&&!e.drivingTransport&&!e.piloting&&!e.chuting&&e.team!==n.team).map(e=>e.root.position),...n.team===`enemy`&&!this.dead&&!this.playerPlane?[this.camera.position]:[]].sort((t,n)=>e.distanceToSquared(t)-e.distanceToSquared(n))[0];r&&e.distanceToSquared(r)<13**2&&(this.launchPlaneBomb(n,!1,t),n.nextBomb=t+12+Math.random()*8)}if(t<n.nextAttack)continue;n.nextAttack=t+5+Math.random()*4;let c=this.bots.filter(e=>e.alive&&!e.drivingTank&&!e.drivingTransport&&!e.piloting&&!e.chuting&&e.team!==n.team),l=c[Math.floor(Math.random()*c.length)],u=n.team===`enemy`&&!this.dead&&!this.playerPlane&&!this.parachuting&&(!l||Math.random()<.45),d=u?this.camera.position.clone():l?.root.position.clone().add(new U(0,1.2,0));if(!d)continue;let f=n.root.position.clone(),p=Math.random()<.48;p||(d.x+=(Math.random()-.5)*7,d.z+=(Math.random()-.5)*7);let m=this.coverHit(f,d);m&&(d.copy(m.point),p=!1);for(let e=0;e<4;e++)setTimeout(()=>this.tracer(f.clone().add(new U(0,0,-e*.35)),d.clone().add(new U((Math.random()-.5)*2,0,(Math.random()-.5)*2)),n.team===`ally`?16768899:16744552),e*70);let h=this.soundAt(f);this.audio.shot(`auto`,h.volume,h.pan),p&&(u?this.hurtPlayer(22,f):l&&(l.hp-=55,l.hp<=0&&this.down(l)))}}awardCapture(e,t){for(let n of this.bots)n.alive&&n.team===t&&n.root.position.distanceToSquared(e.position)<e.radius**2&&(n.objectiveScore+=150);t!==`ally`||this.dead||(this.playerTank?.root.position??this.playerTransport?.root.position??this.playerEmplacement?.root.position??this.camera.position).distanceToSquared(e.position)>=e.radius**2||(this.objectiveScore+=150,this.events.objectiveScore(150,`占领 ${e.id} 点`,this.kills*100+this.objectiveScore))}updateObjectives(e){this.matchTime=Math.max(0,this.matchTime-e);let t=0,n=0,r=``,i=this.campaign.attacker??`ally`;for(let a=0;a<this.objectives.length;a++){let o=this.objectives[a],s=this.campaign.rule!==`assault`||a===this.assaultIndex,c=0,l=0;for(let e of this.bots)e.alive&&!e.riding&&!e.drivingTank&&!e.drivingTransport&&!e.piloting&&!e.chuting&&e.root.position.distanceToSquared(o.position)<o.radius**2&&(e.team===`ally`?c++:l++);for(let e of this.tanks)e.alive&&e.root.position.distanceToSquared(o.position)<o.radius**2&&(e.team===`ally`?c++:l++);!this.dead&&!this.playerTank&&this.camera.position.distanceToSquared(o.position)<o.radius**2&&c++;let u=c&&!l?`ally`:l&&!c?`enemy`:null;if(this.campaign.rule===`assault`&&u!==i&&(u=null),s&&u&&u!==o.owner){if(o.capturing===u?o.progress=Math.min(1,o.progress+e*(.12+Math.min(3,u===`ally`?c:l)*.045)):(o.progress=Math.max(0,o.progress-e*.8),o.progress||(o.capturing=u)),o.progress>=1&&(o.owner=u,o.capturing=null,o.progress=0,this.awardCapture(o,u),this.campaign.rule===`assault`)){this.assaultIndex++;let e=i===`ally`?0:1;if(this.tickets[e]=Math.min(999,this.tickets[e]+40),this.assaultIndex>=this.objectives.length){this.finish(i);return}this.status=`下一目标：${this.objectives[this.assaultIndex].id} 点`,this.statusUntil=performance.now()/1e3+2.2}}else o.progress=Math.max(0,o.progress-e*.06),o.progress||(o.capturing=null);let d=this.campaign.rule===`assault`&&a>this.assaultIndex?5001291:o.owner===`ally`?5602984:o.owner===`enemy`?10832958:13946296;o.ring.material.color.setHex(d),o.flag.material.color.setHex(d),o.flag.position.y=4.15-o.progress*1.2,o.owner===`ally`&&t++,o.owner===`enemy`&&n++,!this.dead&&s&&this.camera.position.distanceToSquared(o.position)<o.radius**2&&(r=this.campaign.rule===`assault`&&i===`enemy`?`防守 ${o.id} 点`:o.owner===`ally`?``:`${o.id}点 ${Math.round(o.progress*100)}%`)}let a=t-n;this.campaign.rule===`conquest`&&(a>0&&(this.tickets[1]=Math.max(0,this.tickets[1]-e*a*.12)),a<0&&(this.tickets[0]=Math.max(0,this.tickets[0]+e*a*.12))),this.campaign.rule===`demolition`&&!r&&(r=`补给库剩余 ${this.depots.filter(e=>!e.destroyed).length} / ${this.depots.length}`);let o=this.objectives.map((e,t)=>`${this.campaign.rule===`assault`&&t>this.assaultIndex?`×`:e.owner===`ally`?`◆`:e.owner===`enemy`?`◇`:`○`}${e.id}`).join(`　`),s=this.objectives.filter(e=>e.owner===`ally`&&this.spawnIsSafe(e.position,`ally`)).map(e=>e.id);if(this.tanks.some(e=>e.team===`ally`&&e.alive&&!e.playerDriven)&&s.push(`vehicle-tank`),this.transports.some(e=>e.team===`ally`&&e.alive&&!e.playerDriven)&&s.push(`vehicle-transport`),this.planes.some(e=>e.team===`ally`&&e.alive&&!e.playerDriven)&&s.push(`vehicle-plane`),this.events.battle([Math.ceil(this.tickets[0]),Math.ceil(this.tickets[1])],o,r,s,Math.ceil(this.matchTime)),!this.matchOver&&(this.tickets[0]<=0||this.tickets[1]<=0)&&this.finish(this.tickets[0]>0?`ally`:`enemy`),!this.matchOver&&this.matchTime<=0){if(this.campaign.rule===`assault`||this.campaign.rule===`demolition`){let e=this.campaign.attacker??`ally`;this.finish(e===`ally`?`enemy`:`ally`);return}if(this.tickets[0]!==this.tickets[1]){this.finish(this.tickets[0]>this.tickets[1]?`ally`:`enemy`);return}this.finish(t>=n?`ally`:`enemy`)}}update(e,t){if(!this.active||this.matchOver||this.paused){this.audio.stopEngine();return}if(this.playerTank){let e=this.keys.has(`KeyW`)||this.keys.has(`KeyS`)?1:this.keys.has(`KeyA`)||this.keys.has(`KeyD`)?.65:.18,t=Math.max(1-this.playerTank.engine/100,1-this.playerTank.hp/this.playerTank.maxHp);this.audio.engine(e,t)}else this.audio.stopEngine();if((this.parachuting||this.playerTransportPassenger||this.playerMortar||this.playerEmplacement||this.playerMG)&&this.camera.fov!==72&&this.resetCameraView(),this.updateGrenadeCook(e,t),this.updateConstructionRisers(t),this.dead||(this.updateBandage(t),this.updateSupplyAction(t),this.updateBuildAction(t)),this.dead)this.updatePlayerDowned(t);else if(this.parachuting)this.updateParachute(e);else if(this.playerPlane){let t=this.playerPlane;t.root.position.y<2.25&&this.hurtPlayer(999,t.root.position,`${t.name} · 驾驶失事坠毁`),this.dead||this.updatePlayerPlane(e)}else this.playerTank?this.updatePlayerTank(e):this.playerTransportPassenger?this.updatePlayerTransportPassenger():this.playerTransport?this.updatePlayerTransport(e):this.playerMortar?this.updatePlayerMortar(e):this.playerEmplacement?this.updatePlayerEmplacement():this.playerMG?this.updatePlayerMachineGun(e):this.updatePlayer(e,t);if(this.updateBots(e,t),this.matchOver||(this.updateTanks(e,t),this.updateTransports(e,t),this.updateEmplacements(t),this.updateMachineGuns(e,t),this.updatePlanes(e,t),this.updatePlaneWrecks(e,t),this.updateBailedPilots(e,t),this.matchOver)||(this.updateObjectives(e),this.matchOver))return;this.updateGrenades(e,t),this.updateCannonShells(e),this.updateArtillery(t),this.updateSmoke(e,t),this.updateSuppression(e),this.updateMedkits(t),this.updateEquipment(t),this.updateTactical(t),this.updateWeather(e,t),this.updateCorpses(e),this.updateParticles(e),this.updateCasings(e),this.squadMarker.visible&&(this.squadMarker.rotation.y+=e*2.2,this.squadMarker.position.y=2.8+Math.sin(t*3)*.22);let n=this.bots.filter(e=>e.inSquad);this.events.squad(n.filter(e=>e.alive).length,n.length,this.squadMode===`follow`?`跟随中`:`进攻标记位置`)}resetCameraView(e=72){this.camera.fov=e,this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`),this.camera.updateProjectionMatrix()}resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight,!1)}loop=()=>{requestAnimationFrame(this.loop);let e=Math.min(this.clock.getDelta(),.05);this.update(e,performance.now()/1e3),this.renderer.render(this.scene,this.camera)}},Ll=Number(localStorage.getItem(`battlefield1937_campaign`)??0),Rl=Number.isInteger(Ll)&&Ll>=0&&Ll<e.length?Ll:0,zl=e[Rl],Bl=Pl(zl.id),Vl={};try{Vl=JSON.parse(localStorage.getItem(`battlefield1937_results`)??`{}`)}catch{localStorage.removeItem(`battlefield1937_results`)}var Hl={quality:`high`,volume:.8,sensitivity:.0022},Ul={...Hl};try{let e=JSON.parse(localStorage.getItem(`battlefield1937_settings`)??`{}`);(e.quality===`low`||e.quality===`medium`||e.quality===`high`)&&(Ul.quality=e.quality),typeof e.volume==`number`&&(Ul.volume=Math.max(0,Math.min(1,e.volume))),typeof e.sensitivity==`number`&&(Ul.sensitivity=Math.max(7e-4,Math.min(.005,e.sensitivity)))}catch{localStorage.removeItem(`battlefield1937_settings`)}var Wl={difficulty:`veteran`,size:`standard`};try{let e=JSON.parse(localStorage.getItem(`battlefield1937_battle`)??`{}`);(e.difficulty===`recruit`||e.difficulty===`veteran`||e.difficulty===`elite`)&&(Wl.difficulty=e.difficulty),(e.size===`standard`||e.size===`reinforced`||e.size===`epic`)&&(Wl.size=e.size)}catch{localStorage.removeItem(`battlefield1937_battle`)}if(document.querySelector(`#app`).innerHTML=`
<canvas id="game" aria-label="战地1937实时战场"></canvas>
<main id="menu" class="menu">
  <header><p>中国人民抗日战争 1937-1945</p><h1>战地<span>1937</span></h1></header>
  <nav><button id="start" class="primary"><b>进入战场</b><small>${zl.name} - ${zl.battlefield}</small></button><div class="battle-options"><span>BOT 难度</span><div><button data-difficulty="recruit">新兵</button><button data-difficulty="veteran">老兵</button><button data-difficulty="elite">精英</button></div><span>兵力规模</span><div><button data-size="standard">标准 11v11</button><button data-size="reinforced">加强 16v16</button><button data-size="epic">史诗 22v22</button></div></div><button id="campaignSelect"><b>选择战役</b><small>${zl.year} · ${zl.location}</small></button><button id="warArchive"><b>战争档案</b><small>已完成 ${Object.keys(Vl).length} / ${e.length}</small></button><button disabled><b>游戏设置</b><small>开发中</small></button></nav>
  <section class="chronicle" id="chronicle"><div class="chronicle-head"><p>战争全景</p><h2>从淞沪烽火，到湘西反攻</h2></div><div class="campaigns">${e.map((e,t)=>{let n=Vl[e.id];return`<button class="campaign-card ${t===Rl?`selected`:``} ${n?n.won?`won`:`lost`:``}" data-campaign="${t}" aria-pressed="${t===Rl}"><time>${e.year}</time><h3>${e.name}</h3><p>${e.location} / ${e.battlefield}</p><span>${n?`${n.won?`胜利`:`战败`} · ${n.score===void 0?`击杀 ${n.kills}`:`得分 ${n.score}`}`:e.mode}</span></button>`}).join(``)}</div></section>
  <footer>WASD 移动　空格跳跃　鼠标瞄准　左键射击　1/2 切换武器　J 架枪　V 刺刀　Q/E 侧倾　R 装填　Shift 疾跑　Tab 战况</footer>
</main>
<section id="hud" class="hud hidden"><div class="objective"><small>当前任务</small><strong>${zl.objective}</strong><span>${zl.name} / ${zl.location} / ${zl.date}</span></div><div class="compass"><strong><i id="allyTickets">${zl.tickets}</i> 中国军队　<span id="flags">${zl.flags.map(e=>`○${e.id}`).join(`　`)}</span>　日军 <b id="enemyTickets">${zl.tickets}</b></strong><small><span id="matchTime">18:00</span>　·　<span id="heading">北 000°</span></small></div><canvas id="minimap" class="minimap" width="210" height="270"></canvas><div id="capture" class="capture hidden"></div><div id="killfeed" class="killfeed"></div><div class="squad"><small>前线作战小队</small><span id="squadState">小队 3 / 3</span><span id="squadOrder">跟随中</span><span class="squad-help">[T] 标记进攻　[Y] 跟随我　[C] 蹲伏　[Z] 卧倒</span><i id="health"></i><i id="stamina" class="stamina"></i><span id="stance" class="stance">站立</span></div><div class="ammo"><small id="weaponName">中正式步骑枪</small><strong id="ammo">05 / 50</strong><span id="mode">栓动　7.92×57mm</span></div><div id="tankStatus" class="tank-status hidden"><strong id="vehicleIntegrity"></strong><i class="vehicle-health"><b id="vehicleHealthFill"></b></i><small id="vehicleSystems"></small><i class="vehicle-ready"><b id="vehicleReadyFill"></b></i></div><div id="equipment" class="equipment">手雷 [G] ×2</div><div id="grenadeType" class="grenade-type hidden"></div><div id="braceState" class="brace-state hidden"></div><div id="breathState" class="breath-state hidden"></div><div id="actionPrompt" class="action-prompt hidden"></div><div id="grenadeCook" class="grenade-cook hidden"></div><div id="grenadeWarning" class="grenade-warning hidden">⚠ 手雷</div><div class="crosshair" aria-hidden="true"><i></i><i></i><i></i><i></i><b></b></div><div id="tankSight" class="tank-sight hidden"><i></i><b></b><span>37</span></div><div id="tankPip" class="tank-pip hidden"></div><div id="leadPip" class="lead-pip hidden"></div><div id="hit" class="hit">×</div><div id="damageNumber" class="damage-number"></div><div id="achievement" class="achievement"></div><div id="damage" class="damage"></div><div id="damageDirection" class="damage-direction"></div><div id="feed" class="feed"></div></section>
<section id="scoreboard" class="scoreboard hidden" role="dialog" aria-label="战场记分板" aria-modal="false"><div class="scoreboard-head"><div><small>${zl.name} · ${zl.battlefield}</small><h2>战场记分板</h2></div><span>按住 TAB 查看</span></div><div class="score-columns"><article><h3><i></i>中国军队</h3><table><thead><tr><th scope="col">姓名</th><th scope="col">击杀</th><th scope="col">阵亡</th><th scope="col">得分</th><th scope="col">状态</th></tr></thead><tbody id="allyScores"></tbody></table></article><article class="enemy-score"><h3><i></i>日军</h3><table><thead><tr><th scope="col">姓名</th><th scope="col">击杀</th><th scope="col">阵亡</th><th scope="col">得分</th><th scope="col">状态</th></tr></thead><tbody id="enemyScores"></tbody></table></article></div></section>
<section id="death" class="death deploy hidden"><div><p>${zl.name} · 中国军队</p><h2 id="deployTitle">部署</h2><span id="stats"></span><div class="deploy-layout"><canvas id="deployMap" width="210" height="270"></canvas><div><div id="classGrid" class="class-grid">${Bl.map((e,t)=>`<button class="class-card ${t===0?`selected`:``}" data-class="${t}"><b>${e.name}</b><small>${e.weapon}</small><i>${e.role}</i></button>`).join(``)}</div><div class="spawn-grid"><button class="spawn selected" data-spawn="base">主基地</button>${zl.flags.map(e=>`<button class="spawn" data-spawn="${e.id}" disabled>${e.id} 点</button>`).join(``)}<button class="spawn vehicle-spawn" data-spawn="vehicle-tank" disabled>▣ 维克斯坦克</button><button class="spawn vehicle-spawn" data-spawn="vehicle-transport" disabled>▰ 运兵卡车</button><button class="spawn vehicle-spawn" data-spawn="vehicle-plane" disabled>✈ 霍克战斗机</button></div></div></div><button id="respawn">投入战斗</button></div></section>
<section id="end" class="death hidden"><div><p>${zl.name} · ${zl.mode}</p><h2 id="endTitle">胜利</h2><blockquote id="endText"></blockquote><span id="endStats"></span><button id="restart">${Rl<e.length-1?`继续战争 · ${e[Rl+1].name}`:`查看战争档案`}</button></div></section>`,zl.id===`baituan`){let e=document.querySelectorAll(`.vehicle-spawn`);e[0].textContent=`▣ 九七式中战车（缴获）`,e[1].textContent=`▰ 改装民用卡车`,e[2].textContent=`✈ 一式战“隼”（缴获）`,document.querySelector(`#death p`).textContent=`${zl.name} · 八路军`,document.querySelector(`.score-columns article h3`).innerHTML=`<i></i>八路军`,document.querySelector(`.compass strong`).childNodes[1].textContent=` 八路军　`}document.querySelector(`#app`).insertAdjacentHTML(`beforeend`,`<section id="pause" class="pause-menu hidden" role="dialog" aria-modal="true" aria-labelledby="pauseTitle"><div><p>${zl.name} · ${zl.battlefield}</p><h2 id="pauseTitle">战斗暂停</h2><span>单机战场模拟已冻结</span><button id="resumeBattle" class="primary">继续战斗</button><button id="restartBattle">重新部署本场会战</button><button id="leaveBattle">撤回主菜单</button></div></section>`),document.querySelector(`#app`).insertAdjacentHTML(`beforeend`,`<section id="downed" class="downed-scene hidden" aria-live="assertive"><div><small>倒地 · 战场仍在继续</small><strong>等待救治</strong><span id="downedStats"></span><div id="downedAction" class="downed-action"></div><blockquote id="deathQuote"></blockquote></div></section>`),document.querySelector(`#app`).insertAdjacentHTML(`beforeend`,`<section id="settingsDialog" class="settings-dialog hidden" role="dialog" aria-modal="true" aria-labelledby="settingsTitle"><div class="settings-panel"><header><p>系统配置</p><h2 id="settingsTitle">游戏设置</h2><button id="closeSettings" type="button" aria-label="关闭游戏设置">关闭</button></header><div class="settings-fields"><label><span><b>画面质量</b><small>调整分辨率比例与动态阴影</small></span><select id="quality"><option value="high">高</option><option value="medium">中</option><option value="low">低</option></select></label><label><span><b>主音量</b><small>枪声、爆炸与载具音效</small></span><input id="volume" type="range" min="0" max="100" step="1"><output id="volumeValue" for="volume"></output></label><label><span><b>鼠标灵敏度</b><small>步兵与载具观察速度</small></span><input id="sensitivity" type="range" min="1" max="100" step="1"><output id="sensitivityValue" for="sensitivity"></output></label></div><footer><button id="resetSettings" type="button">恢复默认</button><button id="saveSettings" class="primary" type="button">保存并返回</button></footer></div></section>`);var Gl=document.querySelectorAll(`#menu nav > button`)[3];Gl.disabled=!1,Gl.id=`openSettings`,Gl.querySelector(`small`).textContent=`画质 · 音量 · 操控`;var $=e=>document.querySelector(e);document.querySelector(`.objective span`).textContent+=` / ${zl.weather}`;var Kl=$(`#hud`),ql=$(`#menu`),Jl=$(`#pause`),Yl=$(`#downed`),Xl=$(`#downedStats`),Zl=$(`#downedAction`),Ql=$(`#deathQuote`),$l=$(`#ammo`),eu=$(`#mode`),tu=$(`#heading`),nu=$(`#matchTime`),ru=$(`#weaponName`),iu=$(`#tankStatus`),au=$(`#vehicleIntegrity`),ou=$(`#vehicleSystems`),su=$(`#vehicleHealthFill`),cu=$(`#vehicleReadyFill`),lu=$(`#equipment`),uu=$(`#grenadeType`),du=$(`#grenadeCook`),fu=$(`#braceState`),pu=$(`#breathState`),mu=$(`#actionPrompt`),hu=$(`#grenadeWarning`),gu=$(`#squadState`),_u=$(`#squadOrder`),vu=$(`#hit`),yu=$(`#damageNumber`),bu=$(`#achievement`),xu=$(`#damage`),Su=$(`#damageDirection`),Cu=$(`#feed`),wu=$(`#killfeed`),Tu=$(`#tankSight`),Eu=$(`#tankPip`),Du=$(`#leadPip`),Ou=$(`#health`),ku=$(`#stamina`),Au=$(`#stance`),ju=$(`#scoreboard`),Mu=$(`#allyScores`),Nu=$(`#enemyScores`),Pu=$(`#death`),Fu=$(`#deployTitle`),Iu=$(`#stats`),Lu=$(`#respawn`),Ru=$(`#end`),zu=$(`#endTitle`),Bu=$(`#endText`),Vu=$(`#endStats`),Hu=$(`#allyTickets`),Uu=$(`#enemyTickets`),Wu=$(`#flags`),Gu=$(`#capture`),Ku=$(`#minimap`),qu=$(`#deployMap`),Ju=[`一寸山河一寸血，战场不会因一个人的倒下而停下。`,`阵地仍在争夺，下一批增援已经在路上。`,`活着的人继续前进，倒下的人留在这片土地上。`,`这不是任务失败，只是这名士兵的战斗结束了。`],Yu=0,Xu=0,Zu=`base`,Qu=Bl[0],$u=e=>{Fu.textContent=e?`阵亡`:`部署`,e||(Iu.textContent=`选择兵种与投入位置`,Lu.disabled=!1,Lu.textContent=`投入战斗`),Pu.classList.remove(`hidden`)},ed=(e,t)=>{let n=e.getContext(`2d`),r=e.width,i=e.height,a=(e,t)=>[r/2+e/14*r*.42,(t+60)/120*i];n.fillStyle=`#111711`,n.fillRect(0,0,r,i),n.fillStyle=`#303531`,n.fillRect(r*.31,0,r*.38,i),n.strokeStyle=`rgba(190,174,130,.2)`,n.lineWidth=1;for(let e=-40;e<=40;e+=20){let[,t]=a(0,e);n.beginPath(),n.moveTo(0,t),n.lineTo(r,t),n.stroke()}for(let[e,r,i,o,s]of t.flags){let[t,c]=a(r,i);n.globalAlpha=s?1:.35,n.fillStyle=o===`ally`?`#79a9d5`:o===`enemy`?`#d06b5a`:`#b9b5a5`,n.beginPath(),n.arc(t,c,9,0,Math.PI*2),n.fill(),s&&(n.strokeStyle=`#ffe09a`,n.lineWidth=2,n.stroke()),n.fillStyle=`#111`,n.font=`bold 10px sans-serif`,n.textAlign=`center`,n.fillText(e,t,c+3.5),n.globalAlpha=1}for(let[e,r,i,o]of t.depots){let[t,s]=a(r,i);n.fillStyle=o?`#55564f`:`#d39b52`,n.fillRect(t-6,s-6,12,12),n.fillStyle=`#161713`,n.font=`bold 8px sans-serif`,n.textAlign=`center`,n.fillText(e,t,s+3)}let[o,s,c]=t.player;for(let[e,r,i]of t.infantry){if(i===`enemy`&&Math.hypot(e-o,r-s)>28)continue;let[t,c]=a(e,r);n.fillStyle=i===`ally`?`#8cc0e9`:`#e47a67`,n.fillRect(t-2,c-2,4,4)}for(let[e,r,i]of t.tanks){if(i===`enemy`&&Math.hypot(e-o,r-s)>45)continue;let[t,c]=a(e,r);n.strokeStyle=i===`ally`?`#8cc0e9`:`#e47a67`,n.lineWidth=2,n.strokeRect(t-4,c-6,8,12)}let[l,u]=a(o,s);n.save(),n.translate(l,u),n.rotate(-c),n.fillStyle=`#fff4b5`,n.beginPath(),n.moveTo(0,-8),n.lineTo(-5,6),n.lineTo(5,6),n.closePath(),n.fill(),n.restore()},td=new Il($(`#game`),{ammo(e,t,n){$l.textContent=`${String(e).padStart(2,`0`)} / ${String(t).padStart(2,`0`)}`,eu.textContent=n?`装填中`:Qu.mode},equipment(e,t,n,r,i,a,o,s){let c=Bl[Xu].id;lu.textContent=`手雷 [G] ×${e}　烟雾 [X]　绷带 [H] ×${t}${c===`medic`?`　医疗箱 [B] ${n?`可用`:`已部署`}`:c===`engineer`?`　${i} [B] ×${r}　[5] 切换　维修 [F]`:c===`mortar`?`　迫击炮 [B] ${o?`已架设`:`背负`}　炮弹 ×${a}`:``}`,mu.textContent=s,mu.classList.toggle(`hidden`,!s)},grenadeMode(e,t){uu.textContent=e===`anti-tank`?`反坦克手雷 ×${t} · [4] 切换`:`破片手雷 · [4] 切换`,uu.classList.toggle(`hidden`,Bl[Xu].id!==`anti-tank`),uu.classList.toggle(`anti-tank`,e===`anti-tank`)},grenadeCook(e){du.textContent=e===void 0?``:`引信 ${e.toFixed(1)} 秒 · 松开 G 投掷`,du.classList.toggle(`hidden`,e===void 0),du.classList.toggle(`danger`,e!==void 0&&e<1.2)},brace(e,t){fu.textContent=t?`▙ 已架枪`:`[J] 架枪`,fu.classList.toggle(`hidden`,!e&&!t),fu.classList.toggle(`active`,t)},breath(e,t,n){pu.textContent=n?`呼吸紊乱`:t?`屏息中`:`[Shift] 屏息`,pu.classList.toggle(`hidden`,!e),pu.classList.toggle(`holding`,t),pu.classList.toggle(`exhausted`,n)},grenadeWarning(e){hu.classList.toggle(`hidden`,!e)},suppression(e){Kl.style.setProperty(`--suppression`,String(e)),Kl.classList.toggle(`suppressed`,e>.04)},damageDirection(e,t){Su.style.setProperty(`--damage-angle`,`${e}rad`),Su.style.setProperty(`--damage-strength`,String(t)),Su.classList.remove(`show`),Su.offsetWidth,Su.classList.add(`show`)},downed(e,t,n,r){ju.classList.add(`hidden`),Kl.classList.add(`hidden`),Xl.innerHTML=`<b>击杀来源</b><em>${n}</em><i>致命伤害 -${r}</i><small>本次作战　击杀 ${e}　阵亡 ${t}</small>`,Ql.textContent=Ju[Math.floor(Math.random()*Ju.length)],Yl.classList.remove(`hidden`)},downedState(e,t,n){Zl.innerHTML=`<span>${e}</span><i style="--revive:${t*100}%"></i><b style="--giveup:${n*100}%">长按空格放弃治疗</b>`},revived(){Yl.classList.add(`hidden`),Pu.classList.add(`hidden`),Kl.classList.remove(`hidden`)},vehicle(e,t,n,r=`维克斯 6 吨轻型坦克`,i=`37mm 主炮`,a=100,o=+!!n){if(Kl.classList.toggle(`in-vehicle`,e),iu.classList.toggle(`hidden`,!e),e){fu.classList.add(`hidden`),pu.classList.add(`hidden`);let e=r.includes(`卡车`),s=r.includes(`战斗机`)||r.includes(`隼`)||r.includes(`伊-16`)||r.includes(`轻爆机`);ru.textContent=r,$l.textContent=e?`WASD`:n?`READY`:`装填中`,eu.textContent=i,au.textContent=`${s?`机体`:r.includes(`炮`)?`炮位`:`车体`} ${Math.max(0,Math.ceil(t))} / ${a}`,ou.textContent=i,su.style.width=`${Math.max(0,Math.min(100,t/a*100))}%`,cu.style.width=`${Math.max(0,Math.min(100,o*100))}%`,iu.classList.toggle(`critical`,t/a<.3),iu.classList.toggle(`loading`,!n)}},tankSight(e,t,n,r,i){Kl.classList.toggle(`tank-gunner`,e&&t),Tu.classList.toggle(`hidden`,!e),Tu.classList.toggle(`loading`,!n),Eu.classList.toggle(`hidden`,!e||r===void 0||i===void 0),r!==void 0&&i!==void 0&&(Eu.style.left=`${r}px`,Eu.style.top=`${i}px`)},emplacementLead(e,t){Du.classList.toggle(`hidden`,e===void 0||t===void 0),e!==void 0&&t!==void 0&&(Du.style.left=`${e}px`,Du.style.top=`${t}px`)},movement(e,t){ku.style.setProperty(`--stamina`,`${e*100}%`),Au.textContent=t===`stand`?`站立`:t===`crouch`?`蹲伏`:`卧倒`},tactical(e){ed(Ku,e),ed(qu,e);let t=(e.player[2]*180/Math.PI%360+360)%360;tu.textContent=`${[`北`,`东北`,`东`,`东南`,`南`,`西南`,`西`,`西北`][Math.round(t/45)%8]} ${String(Math.round(t)).padStart(3,`0`)}°`},scoreboard(e,t){let n=e=>e.map(e=>`<tr class="${e.player?`player-row`:``} ${e.alive?``:`dead-row`}"><th scope="row">${e.name}<small>${e.player?`你 · `:``}${e.role??``}</small></th><td>${e.kills}</td><td>${e.deaths}</td><td>${e.score}</td><td><span>${e.alive?`作战中`:`等待增援`}</span></td></tr>`).join(``);Mu.innerHTML=n(e),Nu.innerHTML=n(t)},loadout(e){Qu=e,ru.textContent=e.weapon,eu.textContent=e.mode},aim(e){Kl.classList.toggle(`aiming`,e)},squad(e,t,n){gu.textContent=`小队 ${e} / ${t}`,_u.textContent=n},hit(e,t=!1,n=0){vu.textContent=t?`◆`:e?`✕`:`×`,vu.className=`hit show ${e?`kill`:``} ${t?`headshot`:``}`,setTimeout(()=>vu.className=`hit`,220),n>0&&(yu.textContent=`-${Math.max(1,Math.round(n))}`,yu.className=`damage-number show ${e?`fatal`:``}`,yu.offsetWidth,setTimeout(()=>yu.className=`damage-number`,560))},achievement(e,t){bu.innerHTML=`<strong>${e}</strong><small>${t} 连杀</small>`,bu.classList.remove(`show`),bu.offsetWidth,bu.classList.add(`show`),setTimeout(()=>bu.classList.remove(`show`),1600)},health(e,t=!0){Ou.style.setProperty(`--hp`,`${e}%`),t&&(xu.classList.remove(`flash`),requestAnimationFrame(()=>xu.classList.add(`flash`)))},kill(e,t=`日军步兵`,n=!1){Cu.textContent=`${n?`爆头　`:`击杀　`}${t}　+${t.includes(`战车`)?300:n?125:100}\n本次作战 ${e} 人`},objectiveScore(e,t,n){Cu.textContent=`${t}　+${e}\n当前得分 ${n}`,Cu.classList.remove(`objective-score`),Cu.offsetWidth,Cu.classList.add(`objective-score`)},combatKill(e,t,n,r,i=!1){let a=document.createElement(`div`);for(a.innerHTML=`<b class="${t}">${e}</b><i>${i?`☠`:`✕`}</i><b class="${r}">${n}</b>`,wu.prepend(a);wu.children.length>6;)wu.lastElementChild?.remove();window.setTimeout(()=>a.classList.add(`fade`),5200),window.setTimeout(()=>a.remove(),6200)},death(e,t,n,r){Yl.classList.add(`hidden`),ju.classList.add(`hidden`),Kl.classList.add(`hidden`),Fu.textContent=`阵亡`,Iu.textContent=`受到 ${n} · 致命伤害 -${r}　|　击杀 ${e}　阵亡 ${t}`,Pu.classList.remove(`hidden`),Lu.disabled=!0;let i=5;Lu.textContent=`增援抵达 ${i}`,clearInterval(Yu),Yu=window.setInterval(()=>{i--,Lu.textContent=i>0?`增援抵达 ${i}`:`重新部署`,i<=0&&(clearInterval(Yu),Lu.disabled=!1)},1e3)},battle(e,t,n,r,i){let a=e=>Number.isFinite(e)?String(e):`∞`;Hu.textContent=a(e[0]),Uu.textContent=a(e[1]),Wu.textContent=t,nu.textContent=`${String(Math.floor(i/60)).padStart(2,`0`)}:${String(i%60).padStart(2,`0`)}`,nu.classList.toggle(`urgent`,i<=60),Gu.textContent=n?`正在争夺 ${n}`:``,Gu.classList.toggle(`hidden`,!n),document.querySelectorAll(`.spawn`).forEach(e=>{e.dataset.spawn!==`base`&&(e.disabled=!r.includes(e.dataset.spawn),e.disabled&&e.dataset.spawn===Zu&&(Zu=`base`,document.querySelectorAll(`.spawn`).forEach(e=>e.classList.toggle(`selected`,e.getAttribute(`data-spawn`)===`base`))))})},end(t,n,r,i){clearInterval(Yu),Vl[zl.id]={won:t,kills:n,deaths:r,score:i,completedAt:Date.now()},localStorage.setItem(`battlefield1937_results`,JSON.stringify(Vl));let a=document.querySelector(`.campaign-card[data-campaign="${Rl}"]`);a?.classList.remove(`won`,`lost`),a?.classList.add(t?`won`:`lost`);let o=a?.querySelector(`span`);o&&(o.textContent=`${t?`胜利`:`战败`} · 得分 ${i}`);let s=document.querySelector(`#warArchive small`);s&&(s.textContent=`已完成 ${Object.keys(Vl).length} / ${e.length}`),Yl.classList.add(`hidden`),ju.classList.add(`hidden`),Pu.classList.add(`hidden`),Kl.classList.add(`hidden`),zu.textContent=t?`胜利`:`战败`,zu.className=t?`win`:`lose`,Bu.textContent=t?`${zl.battlefield}仍在我军控制之下。部队将转赴下一处战场。`:`${zl.battlefield}失守，但战争尚未结束，部队转入下一道防线。`,Vu.textContent=`得分 ${i}　击杀 ${n}　阵亡 ${r}　战争进度 ${Rl+1} / ${e.length}`,Ru.classList.remove(`hidden`)}},zl);td.configureBattle(Wl),td.configure(Ul);var nd=()=>({standard:330,reinforced:430,epic:540})[Wl.size],rd=()=>{document.querySelectorAll(`[data-difficulty]`).forEach(e=>e.classList.toggle(`selected`,e.dataset.difficulty===Wl.difficulty)),document.querySelectorAll(`[data-size]`).forEach(e=>e.classList.toggle(`selected`,e.dataset.size===Wl.size)),Hu.textContent=String(nd()),Uu.textContent=String(nd())};document.querySelectorAll(`[data-difficulty]`).forEach(e=>e.addEventListener(`click`,()=>{Wl={...Wl,difficulty:e.dataset.difficulty},localStorage.setItem(`battlefield1937_battle`,JSON.stringify(Wl)),td.configureBattle(Wl),rd()})),document.querySelectorAll(`[data-size]`).forEach(e=>e.addEventListener(`click`,()=>{Wl={...Wl,size:e.dataset.size},localStorage.setItem(`battlefield1937_battle`,JSON.stringify(Wl)),td.configureBattle(Wl),rd()})),rd();var id=$(`#settingsDialog`),ad=$(`#quality`),od=$(`#volume`),sd=$(`#sensitivity`),cd=$(`#volumeValue`),ld=$(`#sensitivityValue`),ud=()=>Math.round(1+(Ul.sensitivity-7e-4)/.0043*99),dd=()=>{ad.value=Ul.quality,od.value=String(Math.round(Ul.volume*100)),sd.value=String(ud()),cd.value=`${od.value}%`,ld.value=sd.value},fd=(e=!1)=>{Ul={quality:ad.value,volume:Number(od.value)/100,sensitivity:7e-4+(Number(sd.value)-1)/99*.0043},cd.value=`${od.value}%`,ld.value=sd.value,td.configure(Ul),e&&localStorage.setItem(`battlefield1937_settings`,JSON.stringify(Ul))},pd=()=>{dd(),id.classList.remove(`hidden`),ql.setAttribute(`inert`,``),$(`#closeSettings`).focus()},md=(e=!0)=>{e&&fd(!0),id.classList.add(`hidden`),ql.removeAttribute(`inert`),Gl.focus()};Gl.addEventListener(`click`,pd),ad.addEventListener(`change`,()=>fd()),od.addEventListener(`input`,()=>fd()),sd.addEventListener(`input`,()=>fd()),$(`#closeSettings`).addEventListener(`click`,()=>md()),$(`#saveSettings`).addEventListener(`click`,()=>md()),$(`#resetSettings`).addEventListener(`click`,()=>{Ul={...Hl},dd(),fd()}),id.addEventListener(`click`,e=>{e.target===id&&md()}),addEventListener(`keydown`,e=>{e.code===`Escape`&&!id.classList.contains(`hidden`)&&(e.preventDefault(),md())}),$(`#start`).addEventListener(`click`,()=>{td.unlockAudio(),ql.classList.add(`leaving`),setTimeout(()=>{ql.classList.add(`hidden`),td.start(),$u(!1)},260)}),Lu.addEventListener(`click`,()=>{Pu.classList.add(`hidden`),Kl.classList.remove(`hidden`),td.respawn(Xu,Zu)}),document.querySelectorAll(`.class-card`).forEach(e=>e.addEventListener(`click`,()=>{Xu=Number(e.dataset.class),document.querySelectorAll(`.class-card`).forEach(t=>t.classList.toggle(`selected`,t===e))})),document.querySelectorAll(`.spawn`).forEach(e=>e.addEventListener(`click`,()=>{Zu=e.dataset.spawn,document.querySelectorAll(`.spawn`).forEach(t=>t.classList.toggle(`selected`,t===e))})),document.querySelectorAll(`.campaign-card`).forEach(e=>e.addEventListener(`click`,()=>{let t=Number(e.dataset.campaign);if(t===Rl){$(`#start`).focus();return}localStorage.setItem(`battlefield1937_campaign`,String(t)),location.reload()})),$(`#campaignSelect`).addEventListener(`click`,()=>{document.querySelector(`.campaign-card.selected`)?.focus(),$(`#chronicle`).scrollIntoView({behavior:matchMedia(`(prefers-reduced-motion: reduce)`).matches?`auto`:`smooth`,block:`center`})}),$(`#warArchive`).addEventListener(`click`,()=>{$(`#chronicle`).scrollIntoView({behavior:matchMedia(`(prefers-reduced-motion: reduce)`).matches?`auto`:`smooth`,block:`center`}),document.querySelector(`.campaign-card.won, .campaign-card.lost, .campaign-card.selected`)?.focus()}),$(`#restart`).addEventListener(`click`,()=>{if(Rl<e.length-1){localStorage.setItem(`battlefield1937_campaign`,String(Rl+1)),location.reload();return}Ru.classList.add(`hidden`),ql.classList.remove(`hidden`),document.body.classList.remove(`playing`),$(`#chronicle`).scrollIntoView({block:`center`})}),$(`#resumeBattle`).addEventListener(`click`,()=>{Jl.classList.add(`hidden`),td.setPaused(!1),$(`#game`).requestPointerLock()}),$(`#restartBattle`).addEventListener(`click`,()=>{Jl.classList.add(`hidden`),Kl.classList.add(`hidden`),td.restart(),$u(!1)}),$(`#leaveBattle`).addEventListener(`click`,()=>location.reload()),addEventListener(`pointerlockchange`,()=>{document.pointerLockElement||Kl.classList.contains(`hidden`)||!Pu.classList.contains(`hidden`)||!Ru.classList.contains(`hidden`)||!Jl.classList.contains(`hidden`)||(ju.classList.add(`hidden`),td.setPaused(!0),Jl.classList.remove(`hidden`),$(`#resumeBattle`).focus())}),addEventListener(`keydown`,e=>{e.code!==`Tab`||Kl.classList.contains(`hidden`)||(e.preventDefault(),ju.classList.remove(`hidden`))}),addEventListener(`keyup`,e=>{e.code===`Tab`&&(e.preventDefault(),ju.classList.add(`hidden`))});