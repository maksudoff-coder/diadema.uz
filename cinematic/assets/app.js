var G_=Object.defineProperty;var W_=(r,t,e)=>t in r?G_(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Ft=(r,t,e)=>W_(r,typeof t!="symbol"?t+"":t,e);function Gi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function jd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Rs={duration:.5,overwrite:!1,delay:0},xh,pn,Re,oi=1e8,we=1/oi,lh=Math.PI*2,X_=lh/4,Y_=0,tp=Math.sqrt,q_=Math.cos,Z_=Math.sin,Je=function(t){return typeof t=="string"},Fe=function(t){return typeof t=="function"},Xi=function(t){return typeof t=="number"},il=function(t){return typeof t>"u"},Pi=function(t){return typeof t=="object"},kn=function(t){return t!==!1},yh=function(){return typeof window<"u"},Za=function(t){return Fe(t)||Je(t)},ep=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mn=Array.isArray,ch=/(?:-?\.?\d|\.)+/gi,Mh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Wr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sh=/[+-]=-?[.\d]+/,np=/[^,'"\[\]\s]+/gi,$_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,De,Ci,hh,bh,$n={},Qa={},ip,rp=function(t){return(Qa=Gr(t,$n))&&gn},rl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Zo=function(t,e){return!e&&console.warn(t)},sp=function(t,e){return t&&($n[t]=e)&&Qa&&(Qa[t]=e)||$n},$o=function(){return 0},J_={suppressEvents:!0,isStart:!0,kill:!1},$a={suppressEvents:!0,kill:!1},K_={suppressEvents:!0},wh={},mr=[],uh={},op,Bn={},nh={},Yd=30,Ja=[],Th="",Eh=function(t){var e=t[0],n,i;if(Pi(e)||Fe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ja.length;i--&&!Ja[i].targetTest(e););n=Ja[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Rh(t[i],n)))||t.splice(i,1);return t},gr=function(t){return t._gsap||Eh(ai(t))[0]._gsap},Ah=function(t,e,n){return(n=t[e])&&Fe(n)?t[e]():il(n)&&t.getAttribute&&t.getAttribute(e)||n},Tn=function(t,e){return(t=t.split(",")).forEach(e)||t},Be=function(t){return Math.round(t*1e5)/1e5||0},nn=function(t){return Math.round(t*1e7)/1e7||0},Xr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Q_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ja=function(){var t=mr.length,e=mr.slice(0),n,i;for(uh={},mr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ap=function(t,e,n,i){mr.length&&!pn&&ja(),t.render(e,n,i||pn&&e<0&&(t._initted||t._startAt)),mr.length&&!pn&&ja()},lp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(np).length<2?e:Je(t)?t.trim():t},cp=function(t){return t},li=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},j_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Gr=function(t,e){for(var n in e)t[n]=e[n];return t},qd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Pi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},tl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Xo=function(t){var e=t.parent||De,n=t.keyframes?j_(mn(t.keyframes)):li;if(kn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},t0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},hp=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},sl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},_r=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},kr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},e0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},fh=function(t,e,n,i){return t._startAt&&(pn?t._startAt.revert($a):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},n0=function r(t){return!t||t._ts&&r(t.parent)},Zd=function(t){return t._repeat?Ps(t._tTime,t=t.duration()+t._rDelay)*t:0},Ps=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},el=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ol=function(t){return t._end=nn(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},al=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=nn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ol(t),n._dirty||kr(n,t)),t},up=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=el(t.rawTime(),e),(!e._dur||Qo(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),kr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},Ri=function(t,e,n,i){return e.parent&&_r(e),e._start=nn((Xi(n)?n:n||t!==De?si(t,n,e):t._time)+e._delay),e._end=nn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),hp(t,e,"_first","_last",t._sort?"_start":0),dh(e)||(t._recent=e),i||up(t,e),t._ts<0&&al(t,t._tTime),t},fp=function(t,e){return($n.ScrollTrigger||rl("scrollTrigger",e))&&$n.ScrollTrigger.create(e,t)},dp=function(t,e,n,i,s){if(Dh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!pn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&op!==zn.frame)return mr.push(t),t._lazy=[s,i],1},i0=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},dh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},r0=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&i0(t)&&!(!t._initted&&dh(t))||(t._ts<0||t._dp._ts<0)&&!dh(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=Qo(0,t._tDur,e),h=Ps(l,a),t._yoyo&&h&1&&(o=1-o),h!==Ps(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||pn||i||t._zTime===we||!e&&t._zTime){if(!t._initted&&dp(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&fh(t,e,n,!0),t._onUpdate&&!n&&Zn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Zn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&_r(t,1),!n&&!pn&&(Zn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},s0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Is=function(t,e,n,i){var s=t._repeat,o=nn(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:nn(o*(s+1)+t._rDelay*s):o,a>0&&!i&&al(t,t._tTime=t._tDur*a),t.parent&&ol(t),n||kr(t.parent,t),t},$d=function(t){return t instanceof ln?kr(t):Is(t,t._dur)},o0={_start:0,endTime:$o,totalDuration:$o},si=function r(t,e,n){var i=t.labels,s=t._recent||o0,o=t.duration()>=oi?s.endTime(!1):t._dur,a,l,c;return Je(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(mn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Yo=function(t,e,n){var i=Xi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=kn(l.vars.inherit)&&l.parent;o.immediateRender=kn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ve(e[0],o,e[s+1])},vr=function(t,e){return t||t===0?e(t):e},Qo=function(t,e,n){return n<t?t:n>e?e:n},cn=function(t,e){return!Je(t)||!(e=$_.exec(t))?"":e[1]},a0=function(t,e,n){return vr(n,function(i){return Qo(t,e,i)})},ph=[].slice,pp=function(t,e){return t&&Pi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Pi(t[0]))&&!t.nodeType&&t!==Ci},l0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Je(i)&&!e||pp(i,1)?(s=n).push.apply(s,ai(i)):n.push(i)})||n},ai=function(t,e,n){return Re&&!e&&Re.selector?Re.selector(t):Je(t)&&!n&&(hh||!Ds())?ph.call((e||bh).querySelectorAll(t),0):mn(t)?l0(t,n):pp(t)?ph.call(t,0):t?[t]:[]},mh=function(t){return t=ai(t)[0]||Zo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ai(e,n.querySelectorAll?n:n===t?Zo("Invalid scope")||bh.createElement("div"):t)}},mp=function(t){return t.sort(function(){return .5-Math.random()})},gp=function(t){if(Fe(t))return t;var e=Pi(t)?t:{each:t},n=Vr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return Je(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,u,g){var _=(g||e).length,p=o[_],m,x,y,v,R,E,w,C,S;if(!p){if(S=e.grid==="auto"?0:(e.grid||[1,oi])[1],!S){for(w=-oi;w<(w=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(p=o[_]=[],m=l?Math.min(S,_)*h-.5:i%S,x=S===oi?0:l?_*f/S-.5:i/S|0,w=0,C=oi,E=0;E<_;E++)y=E%S-m,v=x-(E/S|0),p[E]=R=c?Math.abs(c==="y"?v:y):tp(y*y+v*v),R>w&&(w=R),R<C&&(C=R);i==="random"&&mp(p),p.max=w-C,p.min=C,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=cn(e.amount||e.each)||0,n=n&&_<0?Tp(n):n}return _=(p[d]-p.min)/p.max||0,nn(p.b+(n?n(_):_)*p.v)+p.u}},gh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=nn(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Xi(n)?0:cn(n))}},_p=function(t,e){var n=mn(t),i,s;return!n&&Pi(t)&&(i=n=t.radius||oi,t.values?(t=ai(t.values),(s=!Xi(t[0]))&&(i*=i)):t=gh(t.increment)),vr(e,n?Fe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=oi,h=0,f=t.length,d,u;f--;)s?(d=t[f].x-a,u=t[f].y-l,d=d*d+u*u):d=Math.abs(t[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?t[h]:o,s||h===o||Xi(o)?h:h+cn(o)}:gh(t))},vp=function(t,e,n,i){return vr(mn(t)?!e:n===!0?!!(n=0):!i,function(){return mn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},c0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},h0=function(t,e){return function(n){return t(parseFloat(n))+(e||cn(n))}},u0=function(t,e,n){return yp(t,e,0,1,n)},xp=function(t,e,n){return vr(n,function(i){return t[~~e(i)]})},f0=function r(t,e,n){var i=e-t;return mn(t)?xp(t,r(0,t.length),e):vr(n,function(s){return(i+(s-t)%i)%i+t})},d0=function r(t,e,n){var i=e-t,s=i*2;return mn(t)?xp(t,r(0,t.length-1),e):vr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Ls=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?np:ch),n+=t.substr(e,i-e)+vp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},yp=function(t,e,n,i,s){var o=e-t,a=i-n;return vr(s,function(l){return n+((l-t)/o*a||0)})},p0=function r(t,e,n,i){var s=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!s){var o=Je(t),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(mn(t)&&!mn(e)){for(h=[],f=t.length,d=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else i||(t=Gr(mn(t)?[]:{},t));if(!h){for(l in e)Ph.call(a,t,l,"get",e[l]);s=function(g){return Nh(g,a)||(o?t.p:t)}}}return vr(n,s)},Jd=function(t,e,n){var i=t.labels,s=oi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Zn=function(t,e,n){var i=t.vars,s=i[e],o=Re,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&mr.length&&ja(),a&&(Re=a),h=l?s.apply(c,l):s.call(c),Re=o,h},Go=function(t){return _r(t),t.scrollTrigger&&t.scrollTrigger.kill(!!pn),t.progress()<1&&Zn(t,"onInterrupt"),t},Cs,Mp=[],Sp=function(t){if(t)if(t=!t.name&&t.default||t,yh()||t.headless){var e=t.name,n=Fe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:$o,render:Nh,add:Ph,kill:P0,modifier:R0,rawVars:0},o={targetTest:0,get:0,getSetter:ll,aliases:{},register:0};if(Ds(),t!==i){if(Bn[e])return;li(i,li(tl(t,s),o)),Gr(i.prototype,Gr(s,tl(t,o))),Bn[i.prop=e]=i,t.targetTest&&(Ja.push(i),wh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}sp(e,i),t.register&&t.register(gn,i,En)}else Mp.push(t)},Se=255,Wo={aqua:[0,Se,Se],lime:[0,Se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Se],navy:[0,0,128],white:[Se,Se,Se],olive:[128,128,0],yellow:[Se,Se,0],orange:[Se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Se,0,0],pink:[Se,192,203],cyan:[0,Se,Se],transparent:[Se,Se,Se,0]},ih=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Se+.5|0},bp=function(t,e,n){var i=t?Xi(t)?[t>>16,t>>8&Se,t&Se]:0:Wo.black,s,o,a,l,c,h,f,d,u,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Wo[t])i=Wo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Se,i&Se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Se,t&Se]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(ch),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=ih(l+1/3,s,o),i[1]=ih(l,s,o),i[2]=ih(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Mh),n&&i.length<4&&(i[3]=1),i}else i=t.match(ch)||Wo.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Se,o=i[1]/Se,a=i[2]/Se,f=Math.max(s,o,a),d=Math.min(s,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===s?(o-a)/u+(o<a?6:0):f===o?(a-s)/u+2:(s-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},wp=function(t){var e=[],n=[],i=-1;return t.split(Wi).forEach(function(s){var o=s.match(Wr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Kd=function(t,e,n){var i="",s=(t+i).match(Wi),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return t;if(s=s.map(function(d){return(d=bp(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=wp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Wi,"1").split(Wr),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Wi),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Wi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Wo)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),m0=/hsl[a]?\(/,Ch=function(t){var e=t.join(" "),n;if(Wi.lastIndex=0,Wi.test(e))return n=m0.test(e),t[1]=Kd(t[1],n),t[0]=Kd(t[0],n,wp(t[1])),!0},Jo,zn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,d,u,g=function _(p){var m=r()-i,x=p===!0,y,v,R,E;if((m>t||m<0)&&(n+=m-e),i+=m,R=i-n,y=R-o,(y>0||x)&&(E=++f.frame,d=R-f.time*1e3,f.time=R=R/1e3,o+=y+(y>=s?4:s-y),v=1),x||(l=c(_)),v)for(u=0;u<a.length;u++)a[u](R,d,E,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){ip&&(!hh&&yh()&&(Ci=hh=window,bh=Ci.document||{},$n.gsap=gn,(Ci.gsapVersions||(Ci.gsapVersions=[])).push(gn.version),rp(Qa||Ci.GreenSockGlobals||!Ci.gsap&&Ci||{}),Mp.forEach(Sp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Jo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Jo=0,c=$o},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,x){var y=m?function(v,R,E,w){p(v,R,E,w),f.remove(y)}:p;return f.remove(p),a[x?"unshift":"push"](y),Ds(),y},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&u>=m&&u--},_listeners:a},f}(),Ds=function(){return!Jo&&zn.wake()},oe={},g0=/^[\d.\-M][\d.\-,\s]/,_0=/["']/g,v0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(_0,"").trim():+c,i=l.substr(a+1).trim();return e},x0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},y0=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[v0(e[1])]:x0(t).split(",").map(lp)):oe._CE&&g0.test(t)?oe._CE("",t):n},Tp=function(t){return function(e){return 1-t(1-e)}},Ep=function r(t,e){for(var n=t._first,i;n;)n instanceof ln?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Vr=function(t,e){return t&&(Fe(t)?t:oe[t]||y0(t))||e},Yr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Tn(t,function(a){oe[a]=$n[a]=s,oe[o=a.toLowerCase()]=n;for(var l in s)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=s[l]}),s},Ap=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},rh=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/lh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Z_((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Ap(a);return s=lh/s,l.config=function(c,h){return r(t,c,h)},l},sh=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Ap(n);return i.config=function(s){return r(t,s)},i};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Yr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Yr("Elastic",rh("in"),rh("out"),rh());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Yr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Yr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Yr("Circ",function(r){return-(tp(1-r*r)-1)});Yr("Sine",function(r){return r===1?1:-q_(r*X_)+1});Yr("Back",sh("in"),sh("out"),sh());oe.SteppedEase=oe.steps=$n.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-we;return function(a){return((i*Qo(0,o,a)|0)+s)*n}}};Rs.ease=oe["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Th+=r+","+r+"Params,"});var Rh=function(t,e){this.id=Y_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ah,this.set=e?e.getSetter:ll},Ko=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Is(this,+e.duration,1,1),this.data=e.data,Re&&(this._ctx=Re,Re.data.push(this)),Jo||zn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Is(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ds(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(al(this,n),!s._dp||s.parent||up(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===we||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ap(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Zd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Zd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ps(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?el(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts,this.totalTime(Qo(-Math.abs(this._delay),this._tDur,s),i!==!1),ol(this),e0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ds(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==we&&(this._tTime-=we)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ri(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?el(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=K_);var i=pn;return pn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,$d(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,$d(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(si(this,n),kn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,kn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-we)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Fe(n)?n:cp,a=function(){var c=i.then;i.then=null,Fe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Go(this)},r}();li(Ko.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});var ln=function(r){jd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kn(n.sortChildren),De&&Ri(n.parent||De,Gi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&fp(Gi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Yo(0,arguments,this),this},e.from=function(i,s,o){return Yo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Yo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Xo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ve(i,s,si(this,o),1),this},e.call=function(i,s,o){return Ri(this,Ve.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ve(i,o,si(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Xo(o).immediateRender=kn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,Xo(a).immediateRender=kn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:nn(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,u,g,_,p,m,x,y,v,R,E,w;if(this!==De&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,v=this._start,y=this._ts,m=!y,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=nn(h%p),h===l?(_=this._repeat,d=c):(_=~~(h/p),_&&_===h/p&&(d=c,_--),d>c&&(d=c)),R=Ps(this._tTime,p),!a&&this._tTime&&R!==_&&this._tTime-R*p-this._dur<=0&&(R=_),E&&_&1&&(d=c-d,w=1),_!==R&&!this._lock){var C=E&&R&1,S=C===(E&&_&1);if(_<R&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(w?0:nn(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Zn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Ep(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=s0(this,nn(a),nn(d)),x&&(h-=d-(d=x._start))),this._tTime=h,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!_&&(Zn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(g=u._next,(u._act||d>=u._start)&&u._ts&&x!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,s,o),d!==this._time||!this._ts&&!m){x=0,g&&(h+=this._zTime=-we);break}}u=g}else{u=this._last;for(var M=i<0?i:d;u;){if(g=u._prev,(u._act||M<=u._end)&&u._ts&&x!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(M-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(M-u._start)*u._ts,s,o||pn&&(u._initted||u._startAt)),d!==this._time||!this._ts&&!m){x=0,g&&(h+=this._zTime=M?-we:we);break}}u=g}}if(x&&!s&&(this.pause(),x.render(d>=a?0:-we)._zTime=d>=a?1:-1,this._ts))return this._start=v,ol(this),this.render(i,s,o);this._onUpdate&&!s&&Zn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&_r(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Zn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Xi(s)||(s=si(this,s,i)),!(i instanceof Ko)){if(mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Je(i))return this.addLabel(i,s);if(Fe(i))i=Ve.delayedCall(0,i);else return this}return this!==i?Ri(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-oi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ve?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Je(i)?this.removeLabel(i):Fe(i)?this.killTweensOf(i):(sl(this,i),i===this._recent&&(this._recent=this._last),kr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=nn(zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=si(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ve.delayedCall(0,s||$o,o);return a.data="isPause",this._hasPause=1,Ri(this,a,si(this,i))},e.removePause=function(i){var s=this._first;for(i=si(this,i);s;)s._start===i&&s.data==="isPause"&&_r(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)pr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ai(i),l=this._first,c=Xi(s),h;l;)l instanceof Ve?Q_(l._targets,a)&&(c?(!pr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=si(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,g=Ve.to(o,li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||we,onStart:function(){if(o.pause(),!u){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Is(g,p,0,1).render(g._time,!0,!0),u=1}h&&h.apply(g,f||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,li({startAt:{time:si(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Jd(this,si(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Jd(this,si(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return kr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),kr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=oi,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ri(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Is(o,o===De&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(De._ts&&(ap(De,el(i,De)),op=zn.frame),zn.frame>=Yd){Yd+=Vn.autoSleep||120;var s=De._first;if((!s||!s._ts)&&Vn.autoSleep&&zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||zn.sleep()}}},t}(Ko);li(ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var M0=function(t,e,n,i,s,o,a){var l=new En(this._pt,t,e,0,1,Uh,null,s),c=0,h=0,f,d,u,g,_,p,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ls(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),d=n.match(eh)||[];f=eh.exec(i);)g=f[0],_=i.substring(c,f.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),g!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?Xr(p,g)-p:parseFloat(g)-p,m:u&&u<4?Math.round:0},c=eh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Sh.test(i)||m)&&(l.e=0),this._pt=l,l},Ph=function(t,e,n,i,s,o,a,l,c,h){Fe(i)&&(i=i(s||0,t,o));var f=t[e],d=n!=="get"?n:Fe(f)?c?t[e.indexOf("set")||!Fe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,u=Fe(f)?c?E0:Pp:Lh,g;if(Je(i)&&(~i.indexOf("random(")&&(i=Ls(i)),i.charAt(1)==="="&&(g=Xr(d,i)+(cn(d)||0),(g||g===0)&&(i=g))),!h||d!==i||_h)return!isNaN(d*i)&&i!==""?(g=new En(this._pt,t,e,+d||0,i-(d||0),typeof f=="boolean"?C0:Ip,0,u),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&rl(e,i),M0.call(this,t,e,d,i,u,l||Vn.stringFilter,c))},S0=function(t,e,n,i,s){if(Fe(t)&&(t=qo(t,s,e,n,i)),!Pi(t)||t.style&&t.nodeType||mn(t)||ep(t))return Je(t)?qo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=qo(t[a],s,e,n,i);return o},Ih=function(t,e,n,i,s,o){var a,l,c,h;if(Bn[t]&&(a=new Bn[t]).init(s,a.rawVars?e[t]:S0(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new En(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Cs))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},pr,_h,Dh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,u=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,x=m&&m.data==="nested"?m.vars.targets:p,y=t._overwrite==="auto"&&!xh,v=t.timeline,R,E,w,C,S,M,P,U,B,k,Z,H,J;if(v&&(!d||!s)&&(s="none"),t._ease=Vr(s,Rs.ease),t._yEase=f?Tp(Vr(f===!0?s:f,Rs.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(U=p[0]?gr(p[0]).harness:0,H=U&&i[U.prop],R=tl(i,wh),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&g?$a:J_),_._lazy=0),o){if(_r(t._startAt=Ve.set(p,li({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&kn(l),startAt:null,delay:0,onUpdate:c&&function(){return Zn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn||!a&&!u)&&t._startAt.revert($a),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),w=li({overwrite:!1,data:"isFromStart",lazy:a&&!_&&kn(l),immediateRender:a,stagger:0,parent:m},R),H&&(w[U.prop]=H),_r(t._startAt=Ve.set(p,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn?t._startAt.revert($a):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,we,we);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&kn(l)||l&&!g,E=0;E<p.length;E++){if(S=p[E],P=S._gsap||Eh(p)[E]._gsap,t._ptLookup[E]=k={},uh[P.id]&&mr.length&&ja(),Z=x===p?E:x.indexOf(S),U&&(B=new U).init(S,H||R,t,Z,x)!==!1&&(t._pt=C=new En(t._pt,S,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(G){k[G]=C}),B.priority&&(M=1)),!U||H)for(w in R)Bn[w]&&(B=Ih(w,R,t,Z,S,x))?B.priority&&(M=1):k[w]=C=Ph.call(t,S,w,"get",R[w],Z,x,0,i.stringFilter);t._op&&t._op[E]&&t.kill(S,t._op[E]),y&&t._pt&&(pr=t,De.killTweensOf(S,k,t.globalTime(e)),J=!t.parent,pr=0),t._pt&&l&&(uh[P.id]=1)}M&&Oh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!J,d&&e<=0&&v.render(oi,!0,!0)},b0=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,d,u;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,u=t._targets.length;u--;){if(h=d[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return _h=1,t.vars[e]="+=0",Dh(t,a),_h=0,l?Zo(e+" not eligible for reset"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Be(n)+cn(f.e)),f.b&&(f.b=h.s+cn(f.b))},w0=function(t,e){var n=t[0]?gr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Gr({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},T0=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(mn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},qo=function(t,e,n,i,s){return Fe(t)?t.call(e,n,i,s):Je(t)&&~t.indexOf("random(")?Ls(t):t},Cp=Th+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Rp={};Tn(Cp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Rp[r]=1});var Ve=function(r){jd(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Xo(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,x=i.parent||De,y=(mn(n)||ep(n)?Xi(n[0]):"length"in i)?[n]:ai(n),v,R,E,w,C,S,M,P;if(a._targets=y.length?Eh(y):Zo("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,g||d||Za(c)||Za(h)){if(i=a.vars,v=a.timeline=new ln({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=Gi(a),v._start=0,d||Za(c)||Za(h)){if(w=y.length,M=d&&gp(d),Pi(d))for(C in d)~Cp.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(R=0;R<w;R++)E=tl(i,Rp),E.stagger=0,m&&(E.yoyoEase=m),P&&Gr(E,P),S=y[R],E.duration=+qo(c,Gi(a),R,S,y),E.delay=(+qo(h,Gi(a),R,S,y)||0)-a._delay,!d&&w===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),v.to(S,E,M?M(R,S,y):0),v._ease=oe.none;v.duration()?c=h=0:a.timeline=0}else if(g){Xo(li(v.vars.defaults,{ease:"none"})),v._ease=Vr(g.ease||i.ease||"none");var U=0,B,k,Z;if(mn(g))g.forEach(function(H){return v.to(y,H,">")}),v.duration();else{E={};for(C in g)C==="ease"||C==="easeEach"||T0(C,g[C],E,g.easeEach);for(C in E)for(B=E[C].sort(function(H,J){return H.t-J.t}),U=0,R=0;R<B.length;R++)k=B[R],Z={ease:k.e,duration:(k.t-(R?B[R-1].t:0))/100*c},Z[C]=k.v,v.to(y,Z,U),U+=Z.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return u===!0&&!xh&&(pr=Gi(a),De.killTweensOf(y),pr=0),Ri(x,Gi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===nn(x._time)&&kn(f)&&n0(Gi(a))&&x.data!=="nested")&&(a._tTime=-we,a.render(Math.max(0,-h)||0)),p&&fp(Gi(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-we&&!h?l:i<we?0:i,d,u,g,_,p,m,x,y,v;if(!c)r0(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=f,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(d=nn(f%_),f===l?(g=this._repeat,d=c):(g=~~(f/_),g&&g===nn(f/_)&&(d=c,g--),d>c&&(d=c)),m=this._yoyo&&g&1,m&&(v=this._yEase,d=c-d),p=Ps(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(y&&this._yEase&&Ep(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(nn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(dp(this,h?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(d/c),this._from&&(this.ratio=x=1-x),d&&!a&&!s&&!g&&(Zn(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(x,u.d),u=u._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&fh(this,i,s,o),Zn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Zn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&fh(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&_r(this,1),!s&&!(h&&!a)&&(f||a||m)&&(Zn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Jo||zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Dh(this,c),h=this._ease(c/this._dur),b0(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(al(this,0),this.parent||hp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Go(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,pr&&pr.vars.overwrite!==!0)._first||Go(this),this.parent&&o!==this.timeline.totalDuration()&&Is(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ai(i):a,c=this._ptLookup,h=this._pt,f,d,u,g,_,p,m;if((!s||s==="all")&&t0(a,l))return s==="all"&&(this._pt=0),Go(this);for(f=this._op=this._op||[],s!=="all"&&(Je(s)&&(_={},Tn(s,function(x){return _[x]=1}),s=_),s=w0(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(f[m]=s,g=d,u={}):(u=f[m]=f[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&sl(this,p,"_pt"),delete d[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&Go(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Yo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Yo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return De.killTweensOf(i,s,o)},t}(Ko);li(Ve.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(r){Ve[r]=function(){var t=new ln,e=ph.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Lh=function(t,e,n){return t[e]=n},Pp=function(t,e,n){return t[e](n)},E0=function(t,e,n,i){return t[e](i.fp,n)},A0=function(t,e,n){return t.setAttribute(e,n)},ll=function(t,e){return Fe(t[e])?Pp:il(t[e])&&t.setAttribute?A0:Lh},Ip=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},C0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Uh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Nh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},R0=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},P0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?sl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},I0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Oh=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},En=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Ip,this.d=l||this,this.set=c||Lh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=I0,this.m=n,this.mt=s,this.tween=i},r}();Tn(Th+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return wh[r]=1});$n.TweenMax=$n.TweenLite=Ve;$n.TimelineLite=$n.TimelineMax=ln;De=new ln({sortChildren:!1,defaults:Rs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=Ch;var Hr=[],Ka={},D0=[],Qd=0,L0=0,oh=function(t){return(Ka[t]||D0).map(function(e){return e()})},vh=function(){var t=Date.now(),e=[];t-Qd>2&&(oh("matchMediaInit"),Hr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ci.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),oh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Qd=t,oh("matchMedia"))},Dp=function(){function r(e,n){this.selector=n&&mh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=L0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Fe(n)&&(s=i,i=n,n=Fe);var o=this,a=function(){var c=Re,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=mh(s)),Re=o,f=i.apply(o,arguments),Fe(f)&&o._r.push(f),Re=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Fe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Re;Re=null,n(this),Re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ve&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof ln?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ve)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Hr.length;o--;)Hr[o].id===this.id&&Hr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),U0=function(){function r(e){this.contexts=[],this.scope=e,Re&&Re.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Pi(n)||(n={matches:n});var o=new Dp(0,s||this.scope),a=o.conditions={},l,c,h;Re&&!o.selector&&(o.selector=Re.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ci.matchMedia(n[c]),l&&(Hr.indexOf(o)<0&&Hr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(vh):l.addEventListener("change",vh)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),nl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Sp(i)})},timeline:function(t){return new ln(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,n,i){Je(t)&&(t=ai(t)[0]);var s=gr(t||{}).get,o=n?cp:lp;return n==="native"&&(n=""),t&&(e?o((Bn[e]&&Bn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Bn[a]&&Bn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ai(t),t.length>1){var i=t.map(function(h){return gn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var o=Bn[e],a=gr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;Cs._pt=0,f.init(t,n?h+n:h,Cs,0,[t]),f.render(1,f),Cs._pt&&Nh(1,Cs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=gn.to(t,Gr((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Vr(t.ease,Rs.ease)),qd(Rs,t||{})},config:function(t){return qd(Vn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Bn[a]&&!$n[a]&&Zo(e+" effect requires "+a+" plugin.")}),nh[e]=function(a,l,c){return n(ai(a),li(l||{},s),c)},o&&(ln.prototype[e]=function(a,l,c){return this.add(nh[e](a,Pi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=Vr(e)},parseEase:function(t,e){return arguments.length?Vr(t,e):oe},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new ln(t),i,s;for(n.smoothChildTiming=kn(t.smoothChildTiming),De.remove(n),n._dp=0,n._time=n._tTime=De._time,i=De._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ve&&i.vars.onComplete===i._targets[0]))&&Ri(n,i,i._start-i._delay),i=s;return Ri(De,n,0),n},context:function(t,e){return t?new Dp(t,e):Re},matchMedia:function(t){return new U0(t)},matchMediaRefresh:function(){return Hr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||vh()},addEventListener:function(t,e){var n=Ka[t]||(Ka[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ka[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:f0,wrapYoyo:d0,distribute:gp,random:vp,snap:_p,normalize:u0,getUnit:cn,clamp:a0,splitColor:bp,toArray:ai,selector:mh,mapRange:yp,pipe:c0,unitize:h0,interpolate:p0,shuffle:mp},install:rp,effects:nh,ticker:zn,updateRoot:ln.updateRoot,plugins:Bn,globalTimeline:De,core:{PropTween:En,globals:sp,Tween:Ve,Timeline:ln,Animation:Ko,getCache:gr,_removeLinkedListItem:sl,reverting:function(){return pn},context:function(t){return t&&Re&&(Re.data.push(t),t._ctx=Re),Re},suppressOverwrites:function(t){return xh=t}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return nl[r]=Ve[r]});zn.add(ln.updateRoot);Cs=nl.to({},{duration:0});var N0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},O0=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=N0(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},ah=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Je(s)&&(l={},Tn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}O0(a,s)}}}},gn=nl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ah("roundProps",gh),ah("modifiers"),ah("snap",_p))||nl;Ve.version=ln.version=gn.version="3.12.5";ip=1;yh()&&Ds();var F0=oe.Power0,B0=oe.Power1,z0=oe.Power2,k0=oe.Power3,V0=oe.Power4,H0=oe.Linear,G0=oe.Quad,W0=oe.Cubic,X0=oe.Quart,Y0=oe.Quint,q0=oe.Strong,Z0=oe.Elastic,$0=oe.Back,J0=oe.SteppedEase,K0=oe.Bounce,Q0=oe.Sine,j0=oe.Expo,tv=oe.Circ;var Lp,xr,Ns,Gh,Jr,ev,Up,Wh,nv=function(){return typeof window<"u"},qi={},$r=180/Math.PI,Os=Math.PI/180,Us=Math.atan2,Np=1e8,Xh=/([A-Z])/g,iv=/(left|right|width|margin|padding|x)/i,rv=/[\s,\(]\S/,Ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},sv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ov=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},av=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Hp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Gp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},lv=function(t,e,n){return t.style[e]=n},cv=function(t,e,n){return t.style.setProperty(e,n)},hv=function(t,e,n){return t._gsap[e]=n},uv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},fv=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},dv=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Le="transform",Hn=Le+"Origin",pv=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in qi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ii[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Yi(i,a)}):this.tfm[t]=o.x?o[t]:Yi(i,t),t===Hn&&(this.tfm.zOrigin=o.zOrigin);else return Ii.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Le)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Hn,e,"")),t=Le}(s||e)&&this.props.push(t,e,s[t])},Wp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},mv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Xh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Wh(),(!s||!s.isStart)&&!n[Le]&&(Wp(n),i.zOrigin&&n[Hn]&&(n[Hn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Xp=function(t,e){var n={target:t,props:[],revert:mv,save:pv};return t._gsap||gn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Yp,kh=function(t,e){var n=xr.createElementNS?xr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):xr.createElement(t);return n&&n.style?n:xr.createElement(t)},Di=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Xh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Fs(e)||e,1)||""},Op="O,Moz,ms,Ms,Webkit".split(","),Fs=function(t,e,n){var i=e||Jr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Op[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Op[o]:"")+t},Vh=function(){nv()&&window.document&&(Lp=window,xr=Lp.document,Ns=xr.documentElement,Jr=kh("div")||{style:{}},ev=kh("div"),Le=Fs(Le),Hn=Le+"Origin",Jr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Yp=!!Fs("perspective"),Wh=gn.core.reverting,Gh=1)},Fh=function r(t){var e=kh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Ns.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ns.removeChild(e),this.style.cssText=s,o},Fp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},qp=function(t){var e;try{e=t.getBBox()}catch{e=Fh.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Fh||(e=Fh.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Fp(t,["x","cx","x1"])||0,y:+Fp(t,["y","cy","y1"])||0,width:0,height:0}:e},Zp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&qp(t))},Kr=function(t,e){if(e){var n=t.style,i;e in qi&&e!==Hn&&(e=Le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Xh,"-$1").toLowerCase())):n.removeAttribute(e)}},yr=function(t,e,n,i,s,o){var a=new En(t._pt,e,n,0,1,o?Gp:Hp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Bp={deg:1,rad:1,turn:1},gv={grid:1,flex:1},Mr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Jr.style,l=iv.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",u=i==="%",g,_,p,m;if(i===o||!s||Bp[i]||Bp[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),m=t.getCTM&&Zp(t),(u||o==="%")&&(qi[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[h],Be(u?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===xr||!_.appendChild)&&(_=xr.body),p=_._gsap,p&&u&&p.width&&l&&p.time===zn.time&&!p.uncache)return Be(s/p.width*f);if(u&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=f+i,g=t[h],x?t.style[e]=x:Kr(t,e)}else(u||o==="%")&&!gv[Di(_,"display")]&&(a.position=Di(t,"position")),_===t&&(a.position="static"),_.appendChild(Jr),g=Jr[h],_.removeChild(Jr),a.position="absolute";return l&&u&&(p=gr(_),p.time=zn.time,p.width=_[h]),Be(d?g*s/f:g&&s?f/g*s:0)},Yi=function(t,e,n,i){var s;return Gh||Vh(),e in Ii&&e!=="transform"&&(e=Ii[e],~e.indexOf(",")&&(e=e.split(",")[0])),qi[e]&&e!=="transform"?(s=ea(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:hl(Di(t,Hn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=cl[e]&&cl[e](t,e,n)||Di(t,e)||Ah(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Mr(t,e,s,n)+n:s},_v=function(t,e,n,i){if(!n||n==="none"){var s=Fs(e,t,1),o=s&&Di(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Di(t,"borderTopColor"))}var a=new En(this._pt,t.style,e,0,1,Uh),l=0,c=0,h,f,d,u,g,_,p,m,x,y,v,R;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=Di(t,e)||i,_?t.style[e]=_:Kr(t,e)),h=[n,i],Ch(h),n=h[0],i=h[1],d=n.match(Wr)||[],R=i.match(Wr)||[],R.length){for(;f=Wr.exec(i);)p=f[0],x=i.substring(l,f.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(u=parseFloat(_)||0,v=_.substr((u+"").length),p.charAt(1)==="="&&(p=Xr(u,p)+v),m=parseFloat(p),y=p.substr((m+"").length),l=Wr.lastIndex-y.length,y||(y=y||Vn.units[e]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(u=Mr(t,e,_,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:u,c:m-u,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Gp:Hp;return Sh.test(i)&&(a.e=0),this._pt=a,a},zp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=zp[n]||n,e[1]=zp[i]||i,e.join(" ")},xv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],qi[a]&&(l=1,a=a==="transformOrigin"?Hn:Le),Kr(n,a);l&&(Kr(n,Le),o&&(o.svg&&n.removeAttribute("transform"),ea(n,1),o.uncache=1,Wp(i)))}},cl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new En(t._pt,e,n,0,0,xv);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},ta=[1,0,0,1,0,0],$p={},Jp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},kp=function(t){var e=Di(t,Le);return Jp(e)?ta:e.substr(7).match(Mh).map(Be)},Yh=function(t,e){var n=t._gsap||gr(t),i=t.style,s=kp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ta:s):(s===ta&&!t.offsetParent&&t!==Ns&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Ns.appendChild(t)),s=kp(t),l?i.display=l:Kr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ns.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Hh=function(t,e,n,i,s,o){var a=t._gsap,l=s||Yh(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],g=l[1],_=l[2],p=l[3],m=l[4],x=l[5],y=e.split(" "),v=parseFloat(y[0])||0,R=parseFloat(y[1])||0,E,w,C,S;n?l!==ta&&(w=u*p-g*_)&&(C=v*(p/w)+R*(-_/w)+(_*x-p*m)/w,S=v*(-g/w)+R*(u/w)-(u*x-g*m)/w,v=C,R=S):(E=qp(t),v=E.x+(~y[0].indexOf("%")?v/100*E.width:v),R=E.y+(~(y[1]||y[0]).indexOf("%")?R/100*E.height:R)),i||i!==!1&&a.smooth?(m=v-c,x=R-h,a.xOffset=f+(m*u+x*_)-m,a.yOffset=d+(m*g+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=R,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Hn]="0px 0px",o&&(yr(o,a,"xOrigin",c,v),yr(o,a,"yOrigin",h,R),yr(o,a,"xOffset",f,a.xOffset),yr(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+R)},ea=function(t,e){var n=t._gsap||new Rh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Di(t,Hn)||"0",h,f,d,u,g,_,p,m,x,y,v,R,E,w,C,S,M,P,U,B,k,Z,H,J,G,it,I,dt,Dt,Kt,q,et;return h=f=d=_=p=m=x=y=v=0,u=g=1,n.svg=!!(t.getCTM&&Zp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),i.scale=i.rotate=i.translate="none"),w=Yh(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",J=""):J=!e&&t.getAttribute("data-svg-origin"),Hh(t,J||c,!!J||n.originIsAbsolute,n.smooth!==!1,w)),R=n.xOrigin||0,E=n.yOrigin||0,w!==ta&&(P=w[0],U=w[1],B=w[2],k=w[3],h=Z=w[4],f=H=w[5],w.length===6?(u=Math.sqrt(P*P+U*U),g=Math.sqrt(k*k+B*B),_=P||U?Us(U,P)*$r:0,x=B||k?Us(B,k)*$r+_:0,x&&(g*=Math.abs(Math.cos(x*Os))),n.svg&&(h-=R-(R*P+E*B),f-=E-(R*U+E*k))):(et=w[6],Kt=w[7],I=w[8],dt=w[9],Dt=w[10],q=w[11],h=w[12],f=w[13],d=w[14],C=Us(et,Dt),p=C*$r,C&&(S=Math.cos(-C),M=Math.sin(-C),J=Z*S+I*M,G=H*S+dt*M,it=et*S+Dt*M,I=Z*-M+I*S,dt=H*-M+dt*S,Dt=et*-M+Dt*S,q=Kt*-M+q*S,Z=J,H=G,et=it),C=Us(-B,Dt),m=C*$r,C&&(S=Math.cos(-C),M=Math.sin(-C),J=P*S-I*M,G=U*S-dt*M,it=B*S-Dt*M,q=k*M+q*S,P=J,U=G,B=it),C=Us(U,P),_=C*$r,C&&(S=Math.cos(C),M=Math.sin(C),J=P*S+U*M,G=Z*S+H*M,U=U*S-P*M,H=H*S-Z*M,P=J,Z=G),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),u=Be(Math.sqrt(P*P+U*U+B*B)),g=Be(Math.sqrt(H*H+et*et)),C=Us(Z,H),x=Math.abs(C)>2e-4?C*$r:0,v=q?1/(q<0?-q:q):0),n.svg&&(J=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Jp(Di(t,Le)),J&&t.setAttribute("transform",J))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(u*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Be(u),n.scaleY=Be(g),n.rotation=Be(_)+a,n.rotationX=Be(p)+a,n.rotationY=Be(m)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Hn]=hl(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?Mv:Yp?Kp:yv,n.uncache=0,n},hl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Bh=function(t,e,n){var i=cn(e);return Be(parseFloat(e)+parseFloat(Mr(t,"x",n+"px",i)))+i},yv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Kp(t,e)},qr="0deg",jo="0px",Zr=") ",Kp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,u=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,x=n.target,y=n.zOrigin,v="",R=m==="auto"&&t&&t!==1||m===!0;if(y&&(f!==qr||h!==qr)){var E=parseFloat(h)*Os,w=Math.sin(E),C=Math.cos(E),S;E=parseFloat(f)*Os,S=Math.cos(E),o=Bh(x,o,w*S*-y),a=Bh(x,a,-Math.sin(E)*-y),l=Bh(x,l,C*S*-y+y)}p!==jo&&(v+="perspective("+p+Zr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(R||o!==jo||a!==jo||l!==jo)&&(v+=l!==jo||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Zr),c!==qr&&(v+="rotate("+c+Zr),h!==qr&&(v+="rotateY("+h+Zr),f!==qr&&(v+="rotateX("+f+Zr),(d!==qr||u!==qr)&&(v+="skew("+d+", "+u+Zr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Zr),x.style[Le]=v||"translate(0, 0)"},Mv=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,u=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,x=n.forceCSS,y=parseFloat(o),v=parseFloat(a),R,E,w,C,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Os,c*=Os,R=Math.cos(l)*f,E=Math.sin(l)*f,w=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=Os,S=Math.tan(c-h),S=Math.sqrt(1+S*S),w*=S,C*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),R*=S,E*=S)),R=Be(R),E=Be(E),w=Be(w),C=Be(C)):(R=f,C=d,E=w=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=Mr(u,"x",o,"px"),v=Mr(u,"y",a,"px")),(g||_||p||m)&&(y=Be(y+g-(g*R+_*w)+p),v=Be(v+_-(g*E+_*C)+m)),(i||s)&&(S=u.getBBox(),y=Be(y+i/100*S.width),v=Be(v+s/100*S.height)),S="matrix("+R+","+E+","+w+","+C+","+y+","+v+")",u.setAttribute("transform",S),x&&(u.style[Le]=S)},Sv=function(t,e,n,i,s){var o=360,a=Je(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?$r:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Np)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Np)%o-~~(c/o)*o)),t._pt=d=new En(t._pt,e,n,i,c,sv),d.e=h,d.u="deg",t._props.push(n),d},Vp=function(t,e){for(var n in e)t[n]=e[n];return t},bv=function(t,e,n){var i=Vp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,u,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Le]=e,a=ea(n,1),Kr(n,Le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Le],o[Le]=e,a=ea(n,1),o[Le]=c);for(l in qi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(u=cn(c),g=cn(h),f=u!==g?Mr(n,l,c,g):parseFloat(c),d=parseFloat(h),t._pt=new En(t._pt,a,l,f,d-f,zh),t._pt.u=g||0,t._props.push(l));Vp(a,i)};Tn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});cl[t>1?"border"+r:r]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(g){return Yi(a,g,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(g,_){return u[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,u,f)}});var qh={name:"css",register:Vh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,d,u,g,_,p,m,x,y,v,R,E,w,C;Gh||Vh(),this.styles=this.styles||Xp(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Bn[_]&&Ih(_,e,n,i,t,s)))){if(u=typeof h,g=cl[_],u==="function"&&(h=h.call(n,i,t,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Ls(h)),g)g(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Wi.lastIndex=0,Wi.test(c)||(p=cn(c),m=cn(h)),m?p!==m&&(c=Mr(t,_,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Je(c)&&~c.indexOf("random(")&&(c=Ls(c)),cn(c+"")||c==="auto"||(c+=Vn.units[_]||cn(Yi(t,_))||""),(c+"").charAt(1)==="="&&(c=Yi(t,_))):c=Yi(t,_),d=parseFloat(c),x=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),f=parseFloat(h),_ in Ii&&(_==="autoAlpha"&&(d===1&&Yi(t,"visibility")==="hidden"&&f&&(d=0),C.push("visibility",0,a.visibility),yr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ii[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in qi,y){if(this.styles.save(_),v||(R=t._gsap,R.renderTransform&&!e.parseTransform||ea(t,e.parseTransform),E=e.smoothOrigin!==!1&&R.smooth,v=this._pt=new En(this._pt,a,Le,0,1,R.renderTransform,R,0,-1),v.dep=1),_==="scale")this._pt=new En(this._pt,R,"scaleY",R.scaleY,(x?Xr(R.scaleY,x+f):f)-R.scaleY||0,zh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Hn,0,a[Hn]),h=vv(h),R.svg?Hh(t,h,0,E,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==R.zOrigin&&yr(this,R,"zOrigin",R.zOrigin,m),yr(this,a,_,hl(c),hl(h)));continue}else if(_==="svgOrigin"){Hh(t,h,1,E,0,this);continue}else if(_ in $p){Sv(this,R,_,d,x?Xr(d,x+h):h);continue}else if(_==="smoothOrigin"){yr(this,R,"smooth",R.smooth,h);continue}else if(_==="force3D"){R[_]=h;continue}else if(_==="transform"){bv(this,h,t);continue}}else _ in a||(_=Fs(_)||_);if(y||(f||f===0)&&(d||d===0)&&!rv.test(h)&&_ in a)p=(c+"").substr((d+"").length),f||(f=0),m=cn(h)||(_ in Vn.units?Vn.units[_]:p),p!==m&&(d=Mr(t,_,c,m)),this._pt=new En(this._pt,y?R:a,_,d,(x?Xr(d,x+f):f)-d,!y&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?av:zh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=ov);else if(_ in a)_v.call(this,t,_,c,x?x+h:h);else if(_ in t)this.add(t,_,c||t[_],x?x+h:h,i,s);else if(_!=="parseTransform"){rl(_,h);continue}y||(_ in a?C.push(_,0,a[_]):C.push(_,1,c||t[_])),o.push(_)}}w&&Oh(this)},render:function(t,e){if(e.tween._time||!Wh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Yi,aliases:Ii,getSetter:function(t,e,n){var i=Ii[e];return i&&i.indexOf(",")<0&&(e=i),e in qi&&e!==Hn&&(t._gsap.x||Yi(t,"x"))?n&&Up===n?e==="scale"?uv:hv:(Up=n||{})&&(e==="scale"?fv:dv):t.style&&!il(t.style[e])?lv:~e.indexOf("-")?cv:ll(t,e)},core:{_removeProperty:Kr,_getMatrix:Yh}};gn.utils.checkPrefix=Fs;gn.core.getStyleSaver=Xp;(function(r,t,e,n){var i=Tn(r+","+t+","+e,function(s){qi[s]=1});Tn(t,function(s){Vn.units[s]="deg",$p[s]=1}),Ii[i[13]]=r+","+t,Tn(n,function(s){var o=s.split(":");Ii[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});gn.registerPlugin(qh);var We=gn.registerPlugin(qh)||gn,Jw=We.core.Tween;function Qp(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function wv(r,t,e){return t&&Qp(r.prototype,t),e&&Qp(r,e),r}var hn,dl,Tv,Jn,Sr,br,zs,tm,Qr,ia,em,Zi,gi,nm,im=function(){return hn||typeof window<"u"&&(hn=window.gsap)&&hn.registerPlugin&&hn},rm=1,Bs=[],re=[],_i=[],ra=Date.now,Zh=function(t,e){return e},Ev=function(){var t=ia.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,_i),re=n,_i=i,Zh=function(o,a){return e[o](a)}},Ji=function(t,e){return~_i.indexOf(t)&&_i[_i.indexOf(t)+1][e]},sa=function(t){return!!~em.indexOf(t)},Cn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},An=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ul="scrollLeft",fl="scrollTop",$h=function(){return Zi&&Zi.isPressed||re.cache++},pl=function(t,e){var n=function i(s){if(s||s===0){rm&&(Jn.history.scrollRestoration="manual");var o=Zi&&Zi.isPressed;s=i.v=Math.round(s)||(Zi&&Zi.iOS?1:0),t(s),i.cacheID=re.cache,o&&Zh("ss",s)}else(e||re.cache!==i.cacheID||Zh("ref"))&&(i.cacheID=re.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},_n={s:ul,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:pl(function(r){return arguments.length?Jn.scrollTo(r,Xe.sc()):Jn.pageXOffset||Sr[ul]||br[ul]||zs[ul]||0})},Xe={s:fl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:_n,sc:pl(function(r){return arguments.length?Jn.scrollTo(_n.sc(),r):Jn.pageYOffset||Sr[fl]||br[fl]||zs[fl]||0})},Rn=function(t,e){return(e&&e._ctx&&e._ctx.selector||hn.utils.toArray)(t)[0]||(typeof t=="string"&&hn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},$i=function(t,e){var n=e.s,i=e.sc;sa(t)&&(t=Sr.scrollingElement||br);var s=re.indexOf(t),o=i===Xe.sc?1:2;!~s&&(s=re.push(t)-1),re[s+o]||Cn(t,"scroll",$h);var a=re[s+o],l=a||(re[s+o]=pl(Ji(t,n),!0)||(sa(t)?i:pl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=hn.getProperty(t,"scrollBehavior")==="smooth"),l},ml=function(t,e,n){var i=t,s=t,o=ra(),a=o,l=e||50,c=Math.max(500,l*3),h=function(g,_){var p=ra();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,p=s,m=ra();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:h,reset:f,getVelocity:d}},na=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},jp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},sm=function(){ia=hn.core.globals().ScrollTrigger,ia&&ia.core&&Ev()},om=function(t){return hn=t||im(),!dl&&hn&&typeof document<"u"&&document.body&&(Jn=window,Sr=document,br=Sr.documentElement,zs=Sr.body,em=[Jn,Sr,br,zs],Tv=hn.utils.clamp,nm=hn.core.context||function(){},Qr="onpointerenter"in zs?"pointer":"mouse",tm=ze.isTouch=Jn.matchMedia&&Jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,gi=ze.eventTypes=("ontouchstart"in br?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in br?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return rm=0},500),sm(),dl=1),dl};_n.op=Xe;re.cache=0;var ze=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){dl||om(hn)||console.warn("Please gsap.registerPlugin(Observer)"),ia||sm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,u=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,x=n.onDrag,y=n.onPress,v=n.onRelease,R=n.onRight,E=n.onLeft,w=n.onUp,C=n.onDown,S=n.onChangeX,M=n.onChangeY,P=n.onChange,U=n.onToggleX,B=n.onToggleY,k=n.onHover,Z=n.onHoverEnd,H=n.onMove,J=n.ignoreCheck,G=n.isNormalizer,it=n.onGestureStart,I=n.onGestureEnd,dt=n.onWheel,Dt=n.onEnable,Kt=n.onDisable,q=n.onClick,et=n.scrollSpeed,xt=n.capture,st=n.allowClicks,Tt=n.lockAxis,Rt=n.onLockAxis;this.target=a=Rn(a)||br,this.vars=n,u&&(u=hn.utils.toArray(u)),i=i||1e-9,s=s||0,g=g||1,et=et||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Jn.getComputedStyle(zs).lineHeight)||22);var Ht,Qt,kt,Et,N,de,zt,V=this,Y=0,nt=0,rt=n.passive||!h,A=$i(a,_n),b=$i(a,Xe),z=A(),j=b(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&gi[0]==="pointerdown",K=sa(a),at=a.ownerDocument||Sr,ht=[0,0,0],mt=[0,0,0],Xt=0,ot=function(){return Xt=ra()},ft=function(Pt,te){return(V.event=Pt)&&u&&~u.indexOf(Pt.target)||te&&Q&&Pt.pointerType!=="touch"||J&&J(Pt,te)},Ot=function(){V._vx.reset(),V._vy.reset(),Qt.pause(),f&&f(V)},Nt=function(){var Pt=V.deltaX=jp(ht),te=V.deltaY=jp(mt),yt=Math.abs(Pt)>=i,qt=Math.abs(te)>=i;P&&(yt||qt)&&P(V,Pt,te,ht,mt),yt&&(R&&V.deltaX>0&&R(V),E&&V.deltaX<0&&E(V),S&&S(V),U&&V.deltaX<0!=Y<0&&U(V),Y=V.deltaX,ht[0]=ht[1]=ht[2]=0),qt&&(C&&V.deltaY>0&&C(V),w&&V.deltaY<0&&w(V),M&&M(V),B&&V.deltaY<0!=nt<0&&B(V),nt=V.deltaY,mt[0]=mt[1]=mt[2]=0),(Et||kt)&&(H&&H(V),kt&&(x(V),kt=!1),Et=!1),de&&!(de=!1)&&Rt&&Rt(V),N&&(dt(V),N=!1),Ht=0},bt=function(Pt,te,yt){ht[yt]+=Pt,mt[yt]+=te,V._vx.update(Pt),V._vy.update(te),c?Ht||(Ht=requestAnimationFrame(Nt)):Nt()},jt=function(Pt,te){Tt&&!zt&&(V.axis=zt=Math.abs(Pt)>Math.abs(te)?"x":"y",de=!0),zt!=="y"&&(ht[2]+=Pt,V._vx.update(Pt,!0)),zt!=="x"&&(mt[2]+=te,V._vy.update(te,!0)),c?Ht||(Ht=requestAnimationFrame(Nt)):Nt()},Vt=function(Pt){if(!ft(Pt,1)){Pt=na(Pt,h);var te=Pt.clientX,yt=Pt.clientY,qt=te-V.x,It=yt-V.y,Yt=V.isDragging;V.x=te,V.y=yt,(Yt||Math.abs(V.startX-te)>=s||Math.abs(V.startY-yt)>=s)&&(x&&(kt=!0),Yt||(V.isDragging=!0),jt(qt,It),Yt||p&&p(V))}},ce=V.onPress=function(St){ft(St,1)||St&&St.button||(V.axis=zt=null,Qt.pause(),V.isPressed=!0,St=na(St),Y=nt=0,V.startX=V.x=St.clientX,V.startY=V.y=St.clientY,V._vx.reset(),V._vy.reset(),Cn(G?a:at,gi[1],Vt,rt,!0),V.deltaX=V.deltaY=0,y&&y(V))},L=V.onRelease=function(St){if(!ft(St,1)){An(G?a:at,gi[1],Vt,!0);var Pt=!isNaN(V.y-V.startY),te=V.isDragging,yt=te&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),qt=na(St);!yt&&Pt&&(V._vx.reset(),V._vy.reset(),h&&st&&hn.delayedCall(.08,function(){if(ra()-Xt>300&&!St.defaultPrevented){if(St.target.click)St.target.click();else if(at.createEvent){var It=at.createEvent("MouseEvents");It.initMouseEvent("click",!0,!0,Jn,1,qt.screenX,qt.screenY,qt.clientX,qt.clientY,!1,!1,!1,!1,0,null),St.target.dispatchEvent(It)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,f&&te&&!G&&Qt.restart(!0),m&&te&&m(V),v&&v(V,yt)}},gt=function(Pt){return Pt.touches&&Pt.touches.length>1&&(V.isGesturing=!0)&&it(Pt,V.isDragging)},$=function(){return(V.isGesturing=!1)||I(V)},tt=function(Pt){if(!ft(Pt)){var te=A(),yt=b();bt((te-z)*et,(yt-j)*et,1),z=te,j=yt,f&&Qt.restart(!0)}},pt=function(Pt){if(!ft(Pt)){Pt=na(Pt,h),dt&&(N=!0);var te=(Pt.deltaMode===1?l:Pt.deltaMode===2?Jn.innerHeight:1)*g;bt(Pt.deltaX*te,Pt.deltaY*te,0),f&&!G&&Qt.restart(!0)}},_t=function(Pt){if(!ft(Pt)){var te=Pt.clientX,yt=Pt.clientY,qt=te-V.x,It=yt-V.y;V.x=te,V.y=yt,Et=!0,f&&Qt.restart(!0),(qt||It)&&jt(qt,It)}},Gt=function(Pt){V.event=Pt,k(V)},ue=function(Pt){V.event=Pt,Z(V)},Oe=function(Pt){return ft(Pt)||na(Pt,h)&&q(V)};Qt=V._dc=hn.delayedCall(d||.25,Ot).pause(),V.deltaX=V.deltaY=0,V._vx=ml(0,50,!0),V._vy=ml(0,50,!0),V.scrollX=A,V.scrollY=b,V.isDragging=V.isGesturing=V.isPressed=!1,nm(this),V.enable=function(St){return V.isEnabled||(Cn(K?at:a,"scroll",$h),o.indexOf("scroll")>=0&&Cn(K?at:a,"scroll",tt,rt,xt),o.indexOf("wheel")>=0&&Cn(a,"wheel",pt,rt,xt),(o.indexOf("touch")>=0&&tm||o.indexOf("pointer")>=0)&&(Cn(a,gi[0],ce,rt,xt),Cn(at,gi[2],L),Cn(at,gi[3],L),st&&Cn(a,"click",ot,!0,!0),q&&Cn(a,"click",Oe),it&&Cn(at,"gesturestart",gt),I&&Cn(at,"gestureend",$),k&&Cn(a,Qr+"enter",Gt),Z&&Cn(a,Qr+"leave",ue),H&&Cn(a,Qr+"move",_t)),V.isEnabled=!0,St&&St.type&&ce(St),Dt&&Dt(V)),V},V.disable=function(){V.isEnabled&&(Bs.filter(function(St){return St!==V&&sa(St.target)}).length||An(K?at:a,"scroll",$h),V.isPressed&&(V._vx.reset(),V._vy.reset(),An(G?a:at,gi[1],Vt,!0)),An(K?at:a,"scroll",tt,xt),An(a,"wheel",pt,xt),An(a,gi[0],ce,xt),An(at,gi[2],L),An(at,gi[3],L),An(a,"click",ot,!0),An(a,"click",Oe),An(at,"gesturestart",gt),An(at,"gestureend",$),An(a,Qr+"enter",Gt),An(a,Qr+"leave",ue),An(a,Qr+"move",_t),V.isEnabled=V.isPressed=V.isDragging=!1,Kt&&Kt(V))},V.kill=V.revert=function(){V.disable();var St=Bs.indexOf(V);St>=0&&Bs.splice(St,1),Zi===V&&(Zi=0)},Bs.push(V),G&&sa(a)&&(Zi=V),V.enable(_)},wv(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();ze.version="3.12.5";ze.create=function(r){return new ze(r)};ze.register=om;ze.getAll=function(){return Bs.slice()};ze.getById=function(r){return Bs.filter(function(t){return t.vars.id===r})[0]};im()&&hn.registerPlugin(ze);var At,Hs,ae,Ue,vi,Ae,wm,Il,va,fa,aa,gl,vn,Nl,iu,In,am,lm,Gs,Tm,Jh,Em,Pn,ru,Am,Cm,wr,su,hu,Ws,uu,Dl,ou,Kh,_l=1,xn=Date.now,Qh=xn(),ui=0,la=0,cm=function(t,e,n){var i=Qn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},hm=function(t,e){return e&&(!Qn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Av=function r(){return la&&requestAnimationFrame(r)},um=function(){return Nl=1},fm=function(){return Nl=0},Li=function(t){return t},ca=function(t){return Math.round(t*1e5)/1e5||0},Rm=function(){return typeof window<"u"},Pm=function(){return At||Rm()&&(At=window.gsap)&&At.registerPlugin&&At},rs=function(t){return!!~wm.indexOf(t)},Im=function(t){return(t==="Height"?uu:ae["inner"+t])||vi["client"+t]||Ae["client"+t]},Dm=function(t){return Ji(t,"getBoundingClientRect")||(rs(t)?function(){return Pl.width=ae.innerWidth,Pl.height=uu,Pl}:function(){return Ki(t)})},Cv=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Ji(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Im(s):t["client"+s])||0}},Rv=function(t,e){return!e||~_i.indexOf(t)?Dm(t):function(){return Pl}},Ui=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Ji(t,n))?o()-Dm(t)()[s]:rs(t)?(vi[n]||Ae[n])-Im(i):t[n]-t["offset"+i])},vl=function(t,e){for(var n=0;n<Gs.length;n+=3)(!e||~e.indexOf(Gs[n+1]))&&t(Gs[n],Gs[n+1],Gs[n+2])},Qn=function(t){return typeof t=="string"},Ln=function(t){return typeof t=="function"},ha=function(t){return typeof t=="number"},jr=function(t){return typeof t=="object"},oa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},jh=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},ks=Math.abs,Lm="left",Um="top",fu="right",du="bottom",es="width",ns="height",da="Right",pa="Left",ma="Top",ga="Bottom",Ye="padding",ci="margin",Ys="Width",pu="Height",Ke="px",hi=function(t){return ae.getComputedStyle(t)},Pv=function(t){var e=hi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},dm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ki=function(t,e){var n=e&&hi(t)[iu]!=="matrix(1, 0, 0, 1, 0, 0)"&&At.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ll=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Nm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Iv=function(t){return function(e){return At.utils.snap(Nm(t),e)}},mu=function(t){var e=At.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Dv=function(t){return function(e,n){return mu(Nm(t))(e,n.direction)}},xl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},sn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},rn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},yl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},pm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ml={toggleActions:"play",anticipatePin:0},Ul={top:0,left:0,center:.5,bottom:1,right:1},El=function(t,e){if(Qn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Ul?Ul[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Sl=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,d=s.indent,u=s.fontWeight,g=Ue.createElement("div"),_=rs(n)||Ji(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?Ae:n,x=t.indexOf("start")!==-1,y=x?c:h,v="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(v+=(i===Xe?fu:du)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Al(g,0,i,x),g},Al=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ys]=1,s["border"+a+Ys]=0,s[n.p]=e+"px",At.set(t,s)},se=[],au={},xa,mm=function(){return xn()-ui>34&&(xa||(xa=requestAnimationFrame(Qi)))},Vs=function(){(!Pn||!Pn.isPressed||Pn.startX>Ae.clientWidth)&&(re.cache++,Pn?xa||(xa=requestAnimationFrame(Qi)):Qi(),ui||os("scrollStart"),ui=xn())},tu=function(){Cm=ae.innerWidth,Am=ae.innerHeight},ua=function(){re.cache++,!vn&&!Em&&!Ue.fullscreenElement&&!Ue.webkitFullscreenElement&&(!ru||Cm!==ae.innerWidth||Math.abs(ae.innerHeight-Am)>ae.innerHeight*.25)&&Il.restart(!0)},ss={},Lv=[],Om=function r(){return rn($t,"scrollEnd",r)||ts(!0)},os=function(t){return ss[t]&&ss[t].map(function(e){return e()})||Lv},Kn=[],Fm=function(t){for(var e=0;e<Kn.length;e+=5)(!t||Kn[e+4]&&Kn[e+4].query===t)&&(Kn[e].style.cssText=Kn[e+1],Kn[e].getBBox&&Kn[e].setAttribute("transform",Kn[e+2]||""),Kn[e+3].uncache=1)},gu=function(t,e){var n;for(In=0;In<se.length;In++)n=se[In],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Dl=!0,e&&Fm(e),e||os("revert")},Bm=function(t,e){re.cache++,(e||!Dn)&&re.forEach(function(n){return Ln(n)&&n.cacheID++&&(n.rec=0)}),Qn(t)&&(ae.history.scrollRestoration=hu=t)},Dn,is=0,gm,Uv=function(){if(gm!==is){var t=gm=is;requestAnimationFrame(function(){return t===is&&ts(!0)})}},zm=function(){Ae.appendChild(Ws),uu=!Pn&&Ws.offsetHeight||ae.innerHeight,Ae.removeChild(Ws)},_m=function(t){return va(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ts=function(t,e){if(ui&&!t&&!Dl){sn($t,"scrollEnd",Om);return}zm(),Dn=$t.isRefreshing=!0,re.forEach(function(i){return Ln(i)&&++i.cacheID&&(i.rec=i())});var n=os("refreshInit");Tm&&$t.sort(),e||gu(),re.forEach(function(i){Ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),se.slice(0).forEach(function(i){return i.refresh()}),Dl=!1,se.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),ou=1,_m(!0),se.forEach(function(i){var s=Ui(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),_m(!1),ou=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),re.forEach(function(i){Ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Bm(hu,1),Il.pause(),is++,Dn=2,Qi(2),se.forEach(function(i){return Ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Dn=$t.isRefreshing=!1,os("refresh")},lu=0,Cl=1,_a,Qi=function(t){if(t===2||!Dn&&!Dl){$t.isUpdating=!0,_a&&_a.update(0);var e=se.length,n=xn(),i=n-Qh>=50,s=e&&se[0].scroll();if(Cl=lu>s?-1:1,Dn||(lu=s),i&&(ui&&!Nl&&n-ui>200&&(ui=0,os("scrollEnd")),aa=Qh,Qh=n),Cl<0){for(In=e;In-- >0;)se[In]&&se[In].update(0,i);Cl=1}else for(In=0;In<e;In++)se[In]&&se[In].update(0,i);$t.isUpdating=!1}xa=0},cu=[Lm,Um,du,fu,ci+ga,ci+da,ci+ma,ci+pa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Rl=cu.concat([es,ns,"boxSizing","max"+Ys,"max"+pu,"position",ci,Ye,Ye+ma,Ye+da,Ye+ga,Ye+pa]),Nv=function(t,e,n){Xs(n);var i=t._gsap;if(i.spacerIsNative)Xs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},eu=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=cu.length,o=e.style,a=t.style,l;s--;)l=cu[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[du]=a[fu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[es]=Ll(t,_n)+Ke,o[ns]=Ll(t,Xe)+Ke,o[Ye]=a[ci]=a[Um]=a[Lm]="0",Xs(i),a[es]=a["max"+Ys]=n[es],a[ns]=a["max"+pu]=n[ns],a[Ye]=n[Ye],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Ov=/([A-Z])/g,Xs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||At.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Ov,"-$1").toLowerCase())}},bl=function(t){for(var e=Rl.length,n=t.style,i=[],s=0;s<e;s++)i.push(Rl[s],n[Rl[s]]);return i.t=t,i},Fv=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Pl={left:0,top:0},vm=function(t,e,n,i,s,o,a,l,c,h,f,d,u,g){Ln(t)&&(t=t(l)),Qn(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?El("0"+t.substr(3),n):0));var _=u?u.time():0,p,m,x;if(u&&u.seek(0),isNaN(t)||(t=+t),ha(t))u&&(t=At.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,t)),a&&Al(a,n,i,!0);else{Ln(e)&&(e=e(l));var y=(t||"0").split(" "),v,R,E,w;x=Rn(e,l)||Ae,v=Ki(x)||{},(!v||!v.left&&!v.top)&&hi(x).display==="none"&&(w=x.style.display,x.style.display="block",v=Ki(x),w?x.style.display=w:x.style.removeProperty("display")),R=El(y[0],v[i.d]),E=El(y[1]||"0",n),t=v[i.p]-c[i.p]-h+R+s-E,a&&Al(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var C=t+n,S=o._isStart;p="scroll"+i.d2,Al(o,C,i,S&&C>20||!S&&(f?Math.max(Ae[p],vi[p]):o.parentNode[p])<=C+1),f&&(c=Ki(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ke))}return u&&x&&(p=Ki(x),u.seek(d),m=Ki(x),u._caScrollDist=p[i.p]-m[i.p],t=t/u._caScrollDist*d),u&&u.seek(_),u?t:Math.round(t)},Bv=/(webkit|moz|length|cssText|inset)/i,xm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Ae){t._stOrig=s.cssText,a=hi(t);for(o in a)!+o&&!Bv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;At.core.getCache(t).uncache=1,e.appendChild(t)}},km=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},wl=function(t,e,n){var i={};i[e.p]="+="+n,At.set(t,i)},ym=function(t,e){var n=$i(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,g={};c=c||n();var _=km(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){re.cache++,o.tween&&Qi()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=At.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},sn(t,"wheel",n.wheelHandler),$t.isTouch&&sn(t,"touchmove",n.wheelHandler),s},$t=function(){function r(e,n){Hs||r.register(At)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),su(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!la){this.update=this.refresh=this.kill=Li;return}n=dm(Qn(n)||ha(n)||n.nodeType?{trigger:n}:n,Ml);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,d=s.trigger,u=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,y=s.once,v=s.snap,R=s.pinReparent,E=s.pinSpacer,w=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?_n:Xe,P=!f&&f!==0,U=Rn(n.scroller||ae),B=At.core.getCache(U),k=rs(U),Z=("pinType"in n?n.pinType:Ji(U,"pinType")||k&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],J=P&&n.toggleActions.split(" "),G="markers"in n?n.markers:Ml.markers,it=k?0:parseFloat(hi(U)["border"+M.p2+Ys])||0,I=this,dt=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Dt=Cv(U,k,M),Kt=Rv(U,k),q=0,et=0,xt=0,st=$i(U,M),Tt,Rt,Ht,Qt,kt,Et,N,de,zt,V,Y,nt,rt,A,b,z,j,Q,K,at,ht,mt,Xt,ot,ft,Ot,Nt,bt,jt,Vt,ce,L,gt,$,tt,pt,_t,Gt,ue;if(I._startClamp=I._endClamp=!1,I._dir=M,p*=45,I.scroller=U,I.scroll=w?w.time.bind(w):st,Qt=st(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(Tm=1,n.refreshPriority===-9999&&(_a=I)),B.tweenScroll=B.tweenScroll||{top:ym(U,Xe),left:ym(U,_n)},I.tweenTo=Tt=B.tweenScroll[M.p],I.scrubDuration=function(yt){gt=ha(yt)&&yt,gt?L?L.duration(yt):L=At.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:gt,paused:!0,onComplete:function(){return m&&m(I)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(f),Vt=0,l||(l=i.vars.id)),v&&((!jr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Ae.style&&At.set(k?[Ae,vi]:U,{scrollBehavior:"auto"}),re.forEach(function(yt){return Ln(yt)&&yt.target===(k?Ue.scrollingElement||vi:U)&&(yt.smooth=!1)}),Ht=Ln(v.snapTo)?v.snapTo:v.snapTo==="labels"?Iv(i):v.snapTo==="labelsDirectional"?Dv(i):v.directional!==!1?function(yt,qt){return mu(v.snapTo)(yt,xn()-et<500?0:qt.direction)}:At.utils.snap(v.snapTo),$=v.duration||{min:.1,max:2},$=jr($)?fa($.min,$.max):fa($,$),tt=At.delayedCall(v.delay||gt/2||.1,function(){var yt=st(),qt=xn()-et<500,It=Tt.tween;if((qt||Math.abs(I.getVelocity())<10)&&!It&&!Nl&&q!==yt){var Yt=(yt-Et)/A,ke=i&&!P?i.totalProgress():Yt,ie=qt?0:(ke-ce)/(xn()-aa)*1e3||0,be=At.utils.clamp(-Yt,1-Yt,ks(ie/2)*ie/.185),$e=Yt+(v.inertia===!1?0:be),ye,Me,pe=v,Yn=pe.onStart,Te=pe.onInterrupt,wn=pe.onComplete;if(ye=Ht($e,I),ha(ye)||(ye=$e),Me=Math.round(Et+ye*A),yt<=N&&yt>=Et&&Me!==yt){if(It&&!It._initted&&It.data<=ks(Me-yt))return;v.inertia===!1&&(be=ye-Yt),Tt(Me,{duration:$(ks(Math.max(ks($e-ke),ks(ye-ke))*.185/ie/.05||0)),ease:v.ease||"power3",data:ks(Me-yt),onInterrupt:function(){return tt.restart(!0)&&Te&&Te(I)},onComplete:function(){I.update(),q=st(),i&&(L?L.resetTo("totalProgress",ye,i._tTime/i._tDur):i.progress(ye)),Vt=ce=i&&!P?i.totalProgress():I.progress,x&&x(I),wn&&wn(I)}},yt,be*A,Me-yt-be*A),Yn&&Yn(I,Tt.tween)}}else I.isActive&&q!==yt&&tt.restart(!0)}).pause()),l&&(au[l]=I),d=I.trigger=Rn(d||u!==!0&&u),ue=d&&d._gsap&&d._gsap.stRevert,ue&&(ue=ue(I)),u=u===!0?d:Rn(u),Qn(a)&&(a={targets:d,className:a}),u&&(g===!1||g===ci||(g=!g&&u.parentNode&&u.parentNode.style&&hi(u.parentNode).display==="flex"?!1:Ye),I.pin=u,Rt=At.core.getCache(u),Rt.spacer?b=Rt.pinState:(E&&(E=Rn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Rt.spacerIsNative=!!E,E&&(Rt.spacerState=bl(E))),Rt.spacer=Q=E||Ue.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Rt.pinState=b=bl(u)),n.force3D!==!1&&At.set(u,{force3D:!0}),I.spacer=Q=Rt.spacer,jt=hi(u),ot=jt[g+M.os2],at=At.getProperty(u),ht=At.quickSetter(u,M.a,Ke),eu(u,Q,jt),j=bl(u)),G){nt=jr(G)?dm(G,pm):pm,V=Sl("scroller-start",l,U,M,nt,0),Y=Sl("scroller-end",l,U,M,nt,0,V),K=V["offset"+M.op.d2];var Oe=Rn(Ji(U,"content")||U);de=this.markerStart=Sl("start",l,Oe,M,nt,K,0,w),zt=this.markerEnd=Sl("end",l,Oe,M,nt,K,0,w),w&&(Gt=At.quickSetter([de,zt],M.a,Ke)),!Z&&!(_i.length&&Ji(U,"fixedMarkers")===!0)&&(Pv(k?Ae:U),At.set([V,Y],{force3D:!0}),Ot=At.quickSetter(V,M.a,Ke),bt=At.quickSetter(Y,M.a,Ke))}if(w){var St=w.vars.onUpdate,Pt=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){I.update(0,0,1),St&&St.apply(w,Pt||[])})}if(I.previous=function(){return se[se.indexOf(I)-1]},I.next=function(){return se[se.indexOf(I)+1]},I.revert=function(yt,qt){if(!qt)return I.kill(!0);var It=yt!==!1||!I.enabled,Yt=vn;It!==I.isReverted&&(It&&(pt=Math.max(st(),I.scroll.rec||0),xt=I.progress,_t=i&&i.progress()),de&&[de,zt,V,Y].forEach(function(ke){return ke.style.display=It?"none":"block"}),It&&(vn=I,I.update(It)),u&&(!R||!I.isActive)&&(It?Nv(u,Q,b):eu(u,Q,hi(u),ft)),It||I.update(It),vn=Yt,I.isReverted=It)},I.refresh=function(yt,qt,It,Yt){if(!((vn||!I.enabled)&&!qt)){if(u&&yt&&ui){sn(r,"scrollEnd",Om);return}!Dn&&dt&&dt(I),vn=I,Tt.tween&&!It&&(Tt.tween.kill(),Tt.tween=0),L&&L.pause(),_&&i&&i.revert({kill:!1}).invalidate(),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var ke=Dt(),ie=Kt(),be=w?w.duration():Ui(U,M),$e=A<=.01,ye=0,Me=Yt||0,pe=jr(It)?It.end:n.end,Yn=n.endTrigger||d,Te=jr(It)?It.start:n.start||(n.start===0||!d?0:u?"0 0":"0 100%"),wn=I.pinnedContainer=n.pinnedContainer&&Rn(n.pinnedContainer,I),T=d&&Math.max(0,se.indexOf(I))||0,O=T,W,X,F,lt,ct,vt,wt,Wt,Zt,Ct,Jt,fe,me;for(G&&jr(It)&&(fe=At.getProperty(V,M.p),me=At.getProperty(Y,M.p));O--;)vt=se[O],vt.end||vt.refresh(0,1)||(vn=I),wt=vt.pin,wt&&(wt===d||wt===u||wt===wn)&&!vt.isReverted&&(Ct||(Ct=[]),Ct.unshift(vt),vt.revert(!0,!0)),vt!==se[O]&&(T--,O--);for(Ln(Te)&&(Te=Te(I)),Te=cm(Te,"start",I),Et=vm(Te,d,ke,M,st(),de,V,I,ie,it,Z,be,w,I._startClamp&&"_startClamp")||(u?-.001:0),Ln(pe)&&(pe=pe(I)),Qn(pe)&&!pe.indexOf("+=")&&(~pe.indexOf(" ")?pe=(Qn(Te)?Te.split(" ")[0]:"")+pe:(ye=El(pe.substr(2),ke),pe=Qn(Te)?Te:(w?At.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Et):Et)+ye,Yn=d)),pe=cm(pe,"end",I),N=Math.max(Et,vm(pe||(Yn?"100% 0":be),Yn,ke,M,st()+ye,zt,Y,I,ie,it,Z,be,w,I._endClamp&&"_endClamp"))||-.001,ye=0,O=T;O--;)vt=se[O],wt=vt.pin,wt&&vt.start-vt._pinPush<=Et&&!w&&vt.end>0&&(W=vt.end-(I._startClamp?Math.max(0,vt.start):vt.start),(wt===d&&vt.start-vt._pinPush<Et||wt===wn)&&isNaN(Te)&&(ye+=W*(1-vt.progress)),wt===u&&(Me+=W));if(Et+=ye,N+=ye,I._startClamp&&(I._startClamp+=ye),I._endClamp&&!Dn&&(I._endClamp=N||-.001,N=Math.min(N,Ui(U,M))),A=N-Et||(Et-=.01)&&.001,$e&&(xt=At.utils.clamp(0,1,At.utils.normalize(Et,N,pt))),I._pinPush=Me,de&&ye&&(W={},W[M.a]="+="+ye,wn&&(W[M.p]="-="+st()),At.set([de,zt],W)),u&&!(ou&&I.end>=Ui(U,M)))W=hi(u),lt=M===Xe,F=st(),mt=parseFloat(at(M.a))+Me,!be&&N>1&&(Jt=(k?Ue.scrollingElement||vi:U).style,Jt={style:Jt,value:Jt["overflow"+M.a.toUpperCase()]},k&&hi(Ae)["overflow"+M.a.toUpperCase()]!=="scroll"&&(Jt.style["overflow"+M.a.toUpperCase()]="scroll")),eu(u,Q,W),j=bl(u),X=Ki(u,!0),Wt=Z&&$i(U,lt?_n:Xe)(),g?(ft=[g+M.os2,A+Me+Ke],ft.t=Q,O=g===Ye?Ll(u,M)+A+Me:0,O&&(ft.push(M.d,O+Ke),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=O+Ke)),Xs(ft),wn&&se.forEach(function(Ge){Ge.pin===wn&&Ge.vars.pinSpacing!==!1&&(Ge._subPinOffset=!0)}),Z&&st(pt)):(O=Ll(u,M),O&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=O+Ke)),Z&&(ct={top:X.top+(lt?F-Et:Wt)+Ke,left:X.left+(lt?Wt:F-Et)+Ke,boxSizing:"border-box",position:"fixed"},ct[es]=ct["max"+Ys]=Math.ceil(X.width)+Ke,ct[ns]=ct["max"+pu]=Math.ceil(X.height)+Ke,ct[ci]=ct[ci+ma]=ct[ci+da]=ct[ci+ga]=ct[ci+pa]="0",ct[Ye]=W[Ye],ct[Ye+ma]=W[Ye+ma],ct[Ye+da]=W[Ye+da],ct[Ye+ga]=W[Ye+ga],ct[Ye+pa]=W[Ye+pa],z=Fv(b,ct,R),Dn&&st(0)),i?(Zt=i._initted,Jh(1),i.render(i.duration(),!0,!0),Xt=at(M.a)-mt+A+Me,Nt=Math.abs(A-Xt)>1,Z&&Nt&&z.splice(z.length-2,2),i.render(0,!0,!0),Zt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Jh(0)):Xt=A,Jt&&(Jt.value?Jt.style["overflow"+M.a.toUpperCase()]=Jt.value:Jt.style.removeProperty("overflow-"+M.a));else if(d&&st()&&!w)for(X=d.parentNode;X&&X!==Ae;)X._pinOffset&&(Et-=X._pinOffset,N-=X._pinOffset),X=X.parentNode;Ct&&Ct.forEach(function(Ge){return Ge.revert(!1,!0)}),I.start=Et,I.end=N,Qt=kt=Dn?pt:st(),!w&&!Dn&&(Qt<pt&&st(pt),I.scroll.rec=0),I.revert(!1,!0),et=xn(),tt&&(q=-1,tt.restart(!0)),vn=0,i&&P&&(i._initted||_t)&&i.progress()!==_t&&i.progress(_t||0,!0).render(i.time(),!0,!0),($e||xt!==I.progress||w||_)&&(i&&!P&&i.totalProgress(w&&Et<-.001&&!xt?At.utils.normalize(Et,N,0):xt,!0),I.progress=$e||(Qt-Et)/A===xt?0:xt),u&&g&&(Q._pinOffset=Math.round(I.progress*Xt)),L&&L.invalidate(),isNaN(fe)||(fe-=At.getProperty(V,M.p),me-=At.getProperty(Y,M.p),wl(V,M,fe),wl(de,M,fe-(Yt||0)),wl(Y,M,me),wl(zt,M,me-(Yt||0))),$e&&!Dn&&I.update(),h&&!Dn&&!rt&&(rt=!0,h(I),rt=!1)}},I.getVelocity=function(){return(st()-kt)/(xn()-aa)*1e3||0},I.endAnimation=function(){oa(I.callbackAnimation),i&&(L?L.progress(1):i.paused()?P||oa(i,I.direction<0,1):oa(i,i.reversed()))},I.labelToScroll=function(yt){return i&&i.labels&&(Et||I.refresh()||Et)+i.labels[yt]/i.duration()*A||0},I.getTrailing=function(yt){var qt=se.indexOf(I),It=I.direction>0?se.slice(0,qt).reverse():se.slice(qt+1);return(Qn(yt)?It.filter(function(Yt){return Yt.vars.preventOverlaps===yt}):It).filter(function(Yt){return I.direction>0?Yt.end<=Et:Yt.start>=N})},I.update=function(yt,qt,It){if(!(w&&!It&&!yt)){var Yt=Dn===!0?pt:I.scroll(),ke=yt?0:(Yt-Et)/A,ie=ke<0?0:ke>1?1:ke||0,be=I.progress,$e,ye,Me,pe,Yn,Te,wn,T;if(qt&&(kt=Qt,Qt=w?st():Yt,v&&(ce=Vt,Vt=i&&!P?i.totalProgress():ie)),p&&u&&!vn&&!_l&&ui&&(!ie&&Et<Yt+(Yt-kt)/(xn()-aa)*p?ie=1e-4:ie===1&&N>Yt+(Yt-kt)/(xn()-aa)*p&&(ie=.9999)),ie!==be&&I.enabled){if($e=I.isActive=!!ie&&ie<1,ye=!!be&&be<1,Te=$e!==ye,Yn=Te||!!ie!=!!be,I.direction=ie>be?1:-1,I.progress=ie,Yn&&!vn&&(Me=ie&&!be?0:ie===1?1:be===1?2:3,P&&(pe=!Te&&J[Me+1]!=="none"&&J[Me+1]||J[Me],T=i&&(pe==="complete"||pe==="reset"||pe in i))),S&&(Te||T)&&(T||f||!i)&&(Ln(S)?S(I):I.getTrailing(S).forEach(function(F){return F.endAnimation()})),P||(L&&!vn&&!_l?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",ie,i._tTime/i._tDur):(L.vars.totalProgress=ie,L.invalidate().restart())):i&&i.totalProgress(ie,!!(vn&&(et||yt)))),u){if(yt&&g&&(Q.style[g+M.os2]=ot),!Z)ht(ca(mt+Xt*ie));else if(Yn){if(wn=!yt&&ie>be&&N+1>Yt&&Yt+1>=Ui(U,M),R)if(!yt&&($e||wn)){var O=Ki(u,!0),W=Yt-Et;xm(u,Ae,O.top+(M===Xe?W:0)+Ke,O.left+(M===Xe?0:W)+Ke)}else xm(u,Q);Xs($e||wn?z:j),Nt&&ie<1&&$e||ht(mt+(ie===1&&!wn?Xt:0))}}v&&!Tt.tween&&!vn&&!_l&&tt.restart(!0),a&&(Te||y&&ie&&(ie<1||!Kh))&&va(a.targets).forEach(function(F){return F.classList[$e||y?"add":"remove"](a.className)}),o&&!P&&!yt&&o(I),Yn&&!vn?(P&&(T&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():pe==="restart"?i.restart(!0):i[pe]()),o&&o(I)),(Te||!Kh)&&(c&&Te&&jh(I,c),H[Me]&&jh(I,H[Me]),y&&(ie===1?I.kill(!1,1):H[Me]=0),Te||(Me=ie===1?1:3,H[Me]&&jh(I,H[Me]))),C&&!$e&&Math.abs(I.getVelocity())>(ha(C)?C:2500)&&(oa(I.callbackAnimation),L?L.progress(1):oa(i,pe==="reverse"?1:!ie,1))):P&&o&&!vn&&o(I)}if(bt){var X=w?Yt/w.duration()*(w._caScrollDist||0):Yt;Ot(X+(V._isFlipped?1:0)),bt(X)}Gt&&Gt(-Yt/w.duration()*(w._caScrollDist||0))}},I.enable=function(yt,qt){I.enabled||(I.enabled=!0,sn(U,"resize",ua),k||sn(U,"scroll",Vs),dt&&sn(r,"refreshInit",dt),yt!==!1&&(I.progress=xt=0,Qt=kt=q=st()),qt!==!1&&I.refresh())},I.getTween=function(yt){return yt&&Tt?Tt.tween:L},I.setPositions=function(yt,qt,It,Yt){if(w){var ke=w.scrollTrigger,ie=w.duration(),be=ke.end-ke.start;yt=ke.start+be*yt/ie,qt=ke.start+be*qt/ie}I.refresh(!1,!1,{start:hm(yt,It&&!!I._startClamp),end:hm(qt,It&&!!I._endClamp)},Yt),I.update()},I.adjustPinSpacing=function(yt){if(ft&&yt){var qt=ft.indexOf(M.d)+1;ft[qt]=parseFloat(ft[qt])+yt+Ke,ft[1]=parseFloat(ft[1])+yt+Ke,Xs(ft)}},I.disable=function(yt,qt){if(I.enabled&&(yt!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,qt||L&&L.pause(),pt=0,Rt&&(Rt.uncache=1),dt&&rn(r,"refreshInit",dt),tt&&(tt.pause(),Tt.tween&&Tt.tween.kill()&&(Tt.tween=0)),!k)){for(var It=se.length;It--;)if(se[It].scroller===U&&se[It]!==I)return;rn(U,"resize",ua),k||rn(U,"scroll",Vs)}},I.kill=function(yt,qt){I.disable(yt,qt),L&&!qt&&L.kill(),l&&delete au[l];var It=se.indexOf(I);It>=0&&se.splice(It,1),It===In&&Cl>0&&In--,It=0,se.forEach(function(Yt){return Yt.scroller===I.scroller&&(It=1)}),It||Dn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,yt&&i.revert({kill:!1}),qt||i.kill()),de&&[de,zt,V,Y].forEach(function(Yt){return Yt.parentNode&&Yt.parentNode.removeChild(Yt)}),_a===I&&(_a=0),u&&(Rt&&(Rt.uncache=1),It=0,se.forEach(function(Yt){return Yt.pin===u&&It++}),It||(Rt.spacer=0)),n.onKill&&n.onKill(I)},se.push(I),I.enable(!1,!1),ue&&ue(I),i&&i.add&&!A){var te=I.update;I.update=function(){I.update=te,Et||N||I.refresh()},At.delayedCall(.01,I.update),A=.01,Et=N=0}else I.refresh();u&&Uv()},r.register=function(n){return Hs||(At=n||Pm(),Rm()&&window.document&&r.enable(),Hs=la),Hs},r.defaults=function(n){if(n)for(var i in n)Ml[i]=n[i];return Ml},r.disable=function(n,i){la=0,se.forEach(function(o){return o[i?"kill":"disable"](n)}),rn(ae,"wheel",Vs),rn(Ue,"scroll",Vs),clearInterval(gl),rn(Ue,"touchcancel",Li),rn(Ae,"touchstart",Li),xl(rn,Ue,"pointerdown,touchstart,mousedown",um),xl(rn,Ue,"pointerup,touchend,mouseup",fm),Il.kill(),vl(rn);for(var s=0;s<re.length;s+=3)yl(rn,re[s],re[s+1]),yl(rn,re[s],re[s+2])},r.enable=function(){if(ae=window,Ue=document,vi=Ue.documentElement,Ae=Ue.body,At&&(va=At.utils.toArray,fa=At.utils.clamp,su=At.core.context||Li,Jh=At.core.suppressOverwrites||Li,hu=ae.history.scrollRestoration||"auto",lu=ae.pageYOffset,At.core.globals("ScrollTrigger",r),Ae)){la=1,Ws=document.createElement("div"),Ws.style.height="100vh",Ws.style.position="absolute",zm(),Av(),ze.register(At),r.isTouch=ze.isTouch,wr=ze.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ru=ze.isTouch===1,sn(ae,"wheel",Vs),wm=[ae,Ue,vi,Ae],At.matchMedia?(r.matchMedia=function(l){var c=At.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},At.addEventListener("matchMediaInit",function(){return gu()}),At.addEventListener("matchMediaRevert",function(){return Fm()}),At.addEventListener("matchMedia",function(){ts(0,1),os("matchMedia")}),At.matchMedia("(orientation: portrait)",function(){return tu(),tu})):console.warn("Requires GSAP 3.11.0 or later"),tu(),sn(Ue,"scroll",Vs);var n=Ae.style,i=n.borderTopStyle,s=At.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Ki(Ae),Xe.m=Math.round(o.top+Xe.sc())||0,_n.m=Math.round(o.left+_n.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),gl=setInterval(mm,250),At.delayedCall(.5,function(){return _l=0}),sn(Ue,"touchcancel",Li),sn(Ae,"touchstart",Li),xl(sn,Ue,"pointerdown,touchstart,mousedown",um),xl(sn,Ue,"pointerup,touchend,mouseup",fm),iu=At.utils.checkPrefix("transform"),Rl.push(iu),Hs=xn(),Il=At.delayedCall(.2,ts).pause(),Gs=[Ue,"visibilitychange",function(){var l=ae.innerWidth,c=ae.innerHeight;Ue.hidden?(am=l,lm=c):(am!==l||lm!==c)&&ua()},Ue,"DOMContentLoaded",ts,ae,"load",ts,ae,"resize",ua],vl(sn),se.forEach(function(l){return l.enable(0,1)}),a=0;a<re.length;a+=3)yl(rn,re[a],re[a+1]),yl(rn,re[a],re[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Kh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(gl)||(gl=i)&&setInterval(mm,i),"ignoreMobileResize"in n&&(ru=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(vl(rn)||vl(sn,n.autoRefreshEvents||"none"),Em=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Rn(n),o=re.indexOf(s),a=rs(s);~o&&re.splice(o,a?6:2),i&&(a?_i.unshift(ae,i,Ae,i,vi,i):_i.unshift(s,i))},r.clearMatchMedia=function(n){se.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Qn(n)?Rn(n):n).getBoundingClientRect(),a=o[s?es:ns]*i||0;return s?o.right-a>0&&o.left+a<ae.innerWidth:o.bottom-a>0&&o.top+a<ae.innerHeight},r.positionInViewport=function(n,i,s){Qn(n)&&(n=Rn(n));var o=n.getBoundingClientRect(),a=o[s?es:ns],l=i==null?a/2:i in Ul?Ul[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ae.innerWidth:(o.top+l)/ae.innerHeight},r.killAll=function(n){if(se.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ss.killAll||[];ss={},i.forEach(function(s){return s()})}},r}();$t.version="3.12.5";$t.saveStyles=function(r){return r?va(r).forEach(function(t){if(t&&t.style){var e=Kn.indexOf(t);e>=0&&Kn.splice(e,5),Kn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),At.core.getCache(t),su())}}):Kn};$t.revert=function(r,t){return gu(!r,t)};$t.create=function(r,t){return new $t(r,t)};$t.refresh=function(r){return r?ua():(Hs||$t.register())&&ts(!0)};$t.update=function(r){return++re.cache&&Qi(r===!0?2:0)};$t.clearScrollMemory=Bm;$t.maxScroll=function(r,t){return Ui(r,t?_n:Xe)};$t.getScrollFunc=function(r,t){return $i(Rn(r),t?_n:Xe)};$t.getById=function(r){return au[r]};$t.getAll=function(){return se.filter(function(r){return r.vars.id!=="ScrollSmoother"})};$t.isScrolling=function(){return!!ui};$t.snapDirectional=mu;$t.addEventListener=function(r,t){var e=ss[r]||(ss[r]=[]);~e.indexOf(t)||e.push(t)};$t.removeEventListener=function(r,t){var e=ss[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};$t.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var f=[],d=[],u=At.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(g){f.length||u.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Ln(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Ln(s)&&(s=s(),sn($t,"refresh",function(){return s=t.batchMax()})),va(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push($t.create(c))}),e};var Mm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},nu=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(ze.isTouch?" pinch-zoom":""):"none",t===vi&&r(Ae,e)},Tl={auto:1,scroll:1},zv=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||At.core.getCache(s),a=xn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ae&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Tl[(l=hi(s)).overflowY]||Tl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!rs(s)&&(Tl[(l=hi(s)).overflowY]||Tl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Vm=function(t,e,n,i){return ze.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&zv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&sn(Ue,ze.eventTypes[0],bm,!1,!0)},onDisable:function(){return rn(Ue,ze.eventTypes[0],bm,!0)}})},kv=/(input|label|select|textarea)/i,Sm,bm=function(t){var e=kv.test(t.target.tagName);(e||Sm)&&(t._gsapAllow=!0,Sm=e)},Vv=function(t){jr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Rn(t.target)||vi,h=At.core.globals().ScrollSmoother,f=h&&h.get(),d=wr&&(t.content&&Rn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),u=$i(c,Xe),g=$i(c,_n),_=1,p=(ze.isTouch&&ae.visualViewport?ae.visualViewport.scale*ae.visualViewport.width:ae.outerWidth)/ae.innerWidth,m=0,x=Ln(i)?function(){return i(a)}:function(){return i||2.8},y,v,R=Vm(c,t.type,!0,s),E=function(){return v=!1},w=Li,C=Li,S=function(){l=Ui(c,Xe),C=fa(wr?1:0,l),n&&(w=fa(0,Ui(c,_n))),y=is},M=function(){d._gsap.y=ca(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},P=function(){if(v){requestAnimationFrame(E);var G=ca(a.deltaY/2),it=C(u.v-G);if(d&&it!==u.v+u.offset){u.offset=it-u.v;var I=ca((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",d._gsap.y=I+"px",u.cacheID=re.cache,Qi()}return!0}u.offset&&M(),v=!0},U,B,k,Z,H=function(){S(),U.isActive()&&U.vars.scrollY>l&&(u()>l?U.progress(1)&&u(l):U.resetTo("scrollY",l))};return d&&At.set(d,{y:"+=0"}),t.ignoreCheck=function(J){return wr&&J.type==="touchmove"&&P(J)||_>1.05&&J.type!=="touchstart"||a.isGesturing||J.touches&&J.touches.length>1},t.onPress=function(){v=!1;var J=_;_=ca((ae.visualViewport&&ae.visualViewport.scale||1)/p),U.pause(),J!==_&&nu(c,_>1.01?!0:n?!1:"x"),B=g(),k=u(),S(),y=is},t.onRelease=t.onGestureStart=function(J,G){if(u.offset&&M(),!G)Z.restart(!0);else{re.cache++;var it=x(),I,dt;n&&(I=g(),dt=I+it*.05*-J.velocityX/.227,it*=Mm(g,I,dt,Ui(c,_n)),U.vars.scrollX=w(dt)),I=u(),dt=I+it*.05*-J.velocityY/.227,it*=Mm(u,I,dt,Ui(c,Xe)),U.vars.scrollY=C(dt),U.invalidate().duration(it).play(.01),(wr&&U.vars.scrollY>=l||I>=l-1)&&At.to({},{onUpdate:H,duration:it})}o&&o(J)},t.onWheel=function(){U._ts&&U.pause(),xn()-m>1e3&&(y=0,m=xn())},t.onChange=function(J,G,it,I,dt){if(is!==y&&S(),G&&n&&g(w(I[2]===G?B+(J.startX-J.x):g()+G-I[1])),it){u.offset&&M();var Dt=dt[2]===it,Kt=Dt?k+J.startY-J.y:u()+it-dt[1],q=C(Kt);Dt&&Kt!==q&&(k+=q-Kt),u(q)}(it||G)&&Qi()},t.onEnable=function(){nu(c,n?!1:"x"),$t.addEventListener("refresh",H),sn(ae,"resize",H),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=g.smooth=!1),R.enable()},t.onDisable=function(){nu(c,!0),rn(ae,"resize",H),$t.removeEventListener("refresh",H),R.kill()},t.lockAxis=t.lockAxis!==!1,a=new ze(t),a.iOS=wr,wr&&!u()&&u(1),wr&&At.ticker.add(Li),Z=a._dc,U=At.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:km(u,u(),function(){return U.pause()})},onUpdate:Qi,onComplete:Z.vars.onComplete}),a};$t.sort=function(r){return se.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};$t.observe=function(r){return new ze(r)};$t.normalizeScroll=function(r){if(typeof r>"u")return Pn;if(r===!0&&Pn)return Pn.enable();if(r===!1){Pn&&Pn.kill(),Pn=r;return}var t=r instanceof ze?r:Vv(r);return Pn&&Pn.target===t.target&&Pn.kill(),rs(t.target)&&(Pn=t),t};$t.core={_getVelocityProp:ml,_inputObserver:Vm,_scrollers:re,_proxies:_i,bridge:{ss:function(){ui||os("scrollStart"),ui=xn()},ref:function(){return vn}}};Pm()&&At.registerPlugin($t);var Hv="1.1.18";function Gm(r,t,e){return Math.max(r,Math.min(t,e))}function Gv(r,t,e){return(1-e)*r+e*t}function Wv(r,t,e,n){return Gv(r,t,1-Math.exp(-e*n))}function Xv(r,t){return(r%t+t)%t}var Yv=class{constructor(){Ft(this,"isRunning",!1);Ft(this,"value",0);Ft(this,"from",0);Ft(this,"to",0);Ft(this,"currentTime",0);Ft(this,"lerp");Ft(this,"duration");Ft(this,"easing");Ft(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=Gm(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Wv(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function qv(r,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(i,n)},t)}}var Zv=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Ft(this,"width",0);Ft(this,"height",0);Ft(this,"scrollHeight",0);Ft(this,"scrollWidth",0);Ft(this,"debouncedResize");Ft(this,"wrapperResizeObserver");Ft(this,"contentResizeObserver");Ft(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ft(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ft(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=qv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Wm=class{constructor(){Ft(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?.push(t)||(this.events[r]=[t]),()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},Hm=100/6,Tr={passive:!1},$v=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Ft(this,"touchStart",{x:0,y:0});Ft(this,"lastDelta",{x:0,y:0});Ft(this,"window",{width:0,height:0});Ft(this,"emitter",new Wm);Ft(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ft(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ft(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ft(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=n===1?Hm:n===2?this.window.width:1,s=n===1?Hm:n===2?this.window.height:1;t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Ft(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Tr),this.element.addEventListener("touchstart",this.onTouchStart,Tr),this.element.addEventListener("touchmove",this.onTouchMove,Tr),this.element.addEventListener("touchend",this.onTouchEnd,Tr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Tr),this.element.removeEventListener("touchstart",this.onTouchStart,Tr),this.element.removeEventListener("touchmove",this.onTouchMove,Tr),this.element.removeEventListener("touchend",this.onTouchEnd,Tr)}},Xm=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l=R=>Math.min(1,1.001-Math.pow(2,-10*R)),lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d="vertical",touchMultiplier:u=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:m,overscroll:x=!0,autoRaf:y=!1,__experimental__naiveDimensions:v=!1}={}){Ft(this,"_isScrolling",!1);Ft(this,"_isStopped",!1);Ft(this,"_isLocked",!1);Ft(this,"_preventNextNativeScrollEvent",!1);Ft(this,"_resetVelocityTimeout",null);Ft(this,"__rafID",null);Ft(this,"isTouching");Ft(this,"time",0);Ft(this,"userData",{});Ft(this,"lastVelocity",0);Ft(this,"velocity",0);Ft(this,"direction",0);Ft(this,"options");Ft(this,"targetScroll");Ft(this,"animatedScroll");Ft(this,"animate",new Yv);Ft(this,"emitter",new Wm);Ft(this,"dimensions");Ft(this,"virtualScroll");Ft(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ft(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent;if(c.find(p=>p instanceof HTMLElement&&(typeof h=="function"&&h?.(p)||p.hasAttribute?.("data-lenis-prevent")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();let u=i&&this.options.syncTouch,_=i&&n.type==="touchend"&&Math.abs(d)>5;_&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ft(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ft(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Hv,(!r||r===document.documentElement||r===document.body)&&(r=window),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:u,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:m,overscroll:x,autoRaf:y,__experimental__naiveDimensions:v},this.dimensions=new Zv(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new $v(e,{touchMultiplier:u,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}setScroll(r){this.isHorizontal?this.rootElement.scrollLeft=r:this.rootElement.scrollTop=r}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:h=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?d=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(d=r),d){if(this.options.wrapper!==window){let g=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?g.left:g.top}let u=d.getBoundingClientRect();r=(this.isHorizontal?u.left:u.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=t,r=Math.round(r),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):r=Gm(0,r,this.limit),r===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={};return}h||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(d,u)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),h&&(this.targetScroll=d),u||this.emit(),u&&(this.reset(),this.emit(),l?.(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?Xv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};var xd="170";var Jv=0,Ym=1,Kv=2;var n_=1,yd=2,rr=3,Ur=0,Sn=1,Wn=2,di=0,ho=1,Nr=2,qm=3,Zm=4,Qv=5,ps=100,jv=101,tx=102,ex=103,nx=104,ix=200,rx=201,sx=202,ox=203,Ju=204,Ku=205,ax=206,lx=207,cx=208,hx=209,ux=210,fx=211,dx=212,px=213,mx=214,Qu=0,ju=1,tf=2,mo=3,ef=4,nf=5,rf=6,sf=7,i_=0,gx=1,_x=2,Lr=0,Md=1,Sd=2,bd=3,Xa=4,vx=5,wd=6,Td=7;var r_=300,go=301,_o=302,of=303,af=304,Hc=306,La=1e3,_s=1001,lf=1002,Xn=1003,xx=1004;var Ol=1005;var Oi=1006,_u=1007;var vs=1008;var cr=1009,s_=1010,o_=1011,Ua=1012,Ed=1013,xs=1014,or=1015,ii=1016,Ad=1017,Cd=1018,vo=1020,a_=35902,l_=1021,c_=1022,Si=1023,h_=1024,u_=1025,uo=1026,xo=1027,f_=1028,Rd=1029,d_=1030,Pd=1031;var Id=1033,cc=33776,hc=33777,uc=33778,fc=33779,cf=35840,hf=35841,uf=35842,ff=35843,df=36196,pf=37492,mf=37496,gf=37808,_f=37809,vf=37810,xf=37811,yf=37812,Mf=37813,Sf=37814,bf=37815,wf=37816,Tf=37817,Ef=37818,Af=37819,Cf=37820,Rf=37821,dc=36492,Pf=36494,If=36495,p_=36283,Df=36284,Lf=36285,Uf=36286;var pc=2300,Nf=2301,vu=2302,$m=2400,Jm=2401,Km=2402;var yx=3200,Dd=3201;var m_=0,Mx=1,Dr="",Gn="srgb",Lo="srgb-linear",Gc="linear",ve="srgb";var qs=7680;var Qm=519,Sx=512,bx=513,wx=514,g_=515,Tx=516,Ex=517,Ax=518,Cx=519,jm=35044;var tg="300 es",ar=2e3,mc=2001,Or=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eg=1234567,Aa=Math.PI/180,yo=180/Math.PI;function Ts(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function Qe(r,t,e){return Math.max(t,Math.min(e,r))}function Ld(r,t){return(r%t+t)%t}function Rx(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Px(r,t,e){return r!==t?(e-r)/(t-r):0}function Ca(r,t,e){return(1-e)*r+e*t}function Ix(r,t,e,n){return Ca(r,t,1-Math.exp(-e*n))}function Dx(r,t=1){return t-Math.abs(Ld(r,t*2)-t)}function Lx(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Ux(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Nx(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Ox(r,t){return r+Math.random()*(t-r)}function Fx(r){return r*(.5-Math.random())}function Bx(r){r!==void 0&&(eg=r);let t=eg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zx(r){return r*Aa}function kx(r){return r*yo}function Vx(r){return(r&r-1)===0&&r!==0}function Hx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Gx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Wx(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),d=o((t-n)/2),u=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*f,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*f,a*c);break;case"ZXZ":r.set(l*f,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*u,a*c);break;case"YXY":r.set(l*u,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ao(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Un(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var __={DEG2RAD:Aa,RAD2DEG:yo,generateUUID:Ts,clamp:Qe,euclideanModulo:Ld,mapLinear:Rx,inverseLerp:Px,lerp:Ca,damp:Ix,pingpong:Dx,smoothstep:Lx,smootherstep:Ux,randInt:Nx,randFloat:Ox,randFloatSpread:Fx,seededRandom:Bx,degToRad:zx,radToDeg:kx,isPowerOfTwo:Vx,ceilPowerOfTwo:Hx,floorPowerOfTwo:Gx,setQuaternionFromProperEuler:Wx,normalize:Un,denormalize:ao},ut=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],_=i[0],p=i[3],m=i[6],x=i[1],y=i[4],v=i[7],R=i[2],E=i[5],w=i[8];return s[0]=o*_+a*x+l*R,s[3]=o*p+a*y+l*E,s[6]=o*m+a*v+l*w,s[1]=c*_+h*x+f*R,s[4]=c*p+h*y+f*E,s[7]=c*m+h*v+f*w,s[2]=d*_+u*x+g*R,s[5]=d*p+u*y+g*E,s[8]=d*m+u*v+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*s,u=c*s-o*l,g=e*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xu.makeScale(t,e)),this}rotate(t){return this.premultiply(xu.makeRotation(-t)),this}translate(t,e){return this.premultiply(xu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xu=new ee;function v_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function gc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Xx(){let r=gc("canvas");return r.style.display="block",r}var ng={};function Ta(r){r in ng||(ng[r]=!0,console.warn(r))}function Yx(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function qx(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zx(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var le={enabled:!0,workingColorSpace:Lo,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(r.r=fo(r.r),r.g=fo(r.g),r.b=fo(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Dr?Gc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function lr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function fo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ig=[.64,.33,.3,.6,.15,.06],rg=[.2126,.7152,.0722],sg=[.3127,.329],og=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ag=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[Lo]:{primaries:ig,whitePoint:sg,transfer:Gc,toXYZ:og,fromXYZ:ag,luminanceCoefficients:rg,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:ig,whitePoint:sg,transfer:ve,toXYZ:og,fromXYZ:ag,luminanceCoefficients:rg,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}});var Zs,Of=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zs===void 0&&(Zs=gc("canvas")),Zs.width=t.width,Zs.height=t.height;let n=Zs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=gc("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=lr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(lr(e[n]/255)*255):e[n]=lr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$x=0,_c=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(yu(i[o].image)):s.push(yu(i[o]))}else s=yu(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function yu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Of.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jx=0,ei=class r extends Or{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=_s,i=_s,s=Oi,o=vs,a=Si,l=cr,c=r.DEFAULT_ANISOTROPY,h=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Ts(),this.name="",this.source=new _c(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==r_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case La:t.x=t.x-Math.floor(t.x);break;case _s:t.x=t.x<0?0:1;break;case lf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case La:t.y=t.y-Math.floor(t.y);break;case _s:t.y=t.y<0?0:1;break;case lf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=r_;ei.DEFAULT_ANISOTROPY=1;var xe=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(u+1)/2,R=(m+1)/2,E=(h+d)/4,w=(f+_)/4,C=(g+p)/4;return y>v&&y>R?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=w/n):v>R?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=C/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=w/s,i=C/s),this.set(n,i,s,e),this}let x=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ff=class extends Or{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new ei(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new _c(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Ff{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},vc=class extends ei{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bf=class extends ei{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=s[o+0],u=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==d||c!==u||h!==g){let p=1-a,m=l*d+c*u+h*g+f*_,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let R=Math.sqrt(y),E=Math.atan2(R,m*x);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R}let v=a*x;if(l=l*p+d*v,c=c*p+u*v,h=h*p+g*v,f=f*p+_*v,p===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=R,c*=R,h*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],d=s[o+1],u=s[o+2],g=s[o+3];return t[e]=a*g+h*f+l*u-c*d,t[e+1]=l*g+h*d+c*f-a*u,t[e+2]=c*g+h*u+a*d-l*f,t[e+3]=h*g-a*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),d=l(n/2),u=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(s+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(s-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mu.copy(this).projectOnVector(t),this.sub(Mu)}reflect(t){return this.sub(Mu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mu=new D,lg=new Fr,ys=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xi):xi.fromBufferAttribute(s,o),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fl.copy(n.boundingBox)),Fl.applyMatrix4(t.matrixWorld),this.union(Fl)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ya),Bl.subVectors(this.max,ya),$s.subVectors(t.a,ya),Js.subVectors(t.b,ya),Ks.subVectors(t.c,ya),Er.subVectors(Js,$s),Ar.subVectors(Ks,Js),as.subVectors($s,Ks);let e=[0,-Er.z,Er.y,0,-Ar.z,Ar.y,0,-as.z,as.y,Er.z,0,-Er.x,Ar.z,0,-Ar.x,as.z,0,-as.x,-Er.y,Er.x,0,-Ar.y,Ar.x,0,-as.y,as.x,0];return!Su(e,$s,Js,Ks,Bl)||(e=[1,0,0,0,1,0,0,0,1],!Su(e,$s,Js,Ks,Bl))?!1:(zl.crossVectors(Er,Ar),e=[zl.x,zl.y,zl.z],Su(e,$s,Js,Ks,Bl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ji=[new D,new D,new D,new D,new D,new D,new D,new D],xi=new D,Fl=new ys,$s=new D,Js=new D,Ks=new D,Er=new D,Ar=new D,as=new D,ya=new D,Bl=new D,zl=new D,ls=new D;function Su(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ls.fromArray(r,s);let a=i.x*Math.abs(ls.x)+i.y*Math.abs(ls.y)+i.z*Math.abs(ls.z),l=t.dot(ls),c=e.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Kx=new ys,Ma=new D,bu=new D,Mo=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kx.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ma.subVectors(t,this.center);let e=Ma.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ma,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ma.copy(t.center).add(bu)),this.expandByPoint(Ma.copy(t.center).sub(bu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},tr=new D,wu=new D,kl=new D,Cr=new D,Tu=new D,Vl=new D,Eu=new D,xc=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=tr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tr.copy(this.origin).addScaledVector(this.direction,e),tr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wu.copy(t).add(e).multiplyScalar(.5),kl.copy(e).sub(t).normalize(),Cr.copy(this.origin).sub(wu);let s=t.distanceTo(e)*.5,o=-this.direction.dot(kl),a=Cr.dot(this.direction),l=-Cr.dot(kl),c=Cr.lengthSq(),h=Math.abs(1-o*o),f,d,u,g;if(h>0)if(f=o*l-a,d=o*a-l,g=s*h,f>=0)if(d>=-g)if(d<=g){let _=1/h;f*=_,d*=_,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),u=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(wu).addScaledVector(kl,d),u}intersectSphere(t,e){tr.subVectors(t.center,this.origin);let n=tr.dot(this.direction),i=tr.dot(tr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,tr)!==null}intersectTriangle(t,e,n,i,s){Tu.subVectors(e,t),Vl.subVectors(n,t),Eu.crossVectors(Tu,Vl);let o=this.direction.dot(Eu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cr.subVectors(this.origin,t);let l=a*this.direction.dot(Vl.crossVectors(Cr,Vl));if(l<0)return null;let c=a*this.direction.dot(Tu.cross(Cr));if(c<0||l+c>o)return null;let h=-a*Cr.dot(Eu);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class r{constructor(t,e,n,i,s,o,a,l,c,h,f,d,u,g,_,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,d,u,g,_,p)}set(t,e,n,i,s,o,a,l,c,h,f,d,u,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Qs.setFromMatrixColumn(t,0).length(),s=1/Qs.setFromMatrixColumn(t,1).length(),o=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let d=o*h,u=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,u=l*f,g=c*h,_=c*f;e[0]=d+_*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,u=l*f,g=c*h,_=c*f;e[0]=d-_*a,e[4]=-o*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,u=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=g*c-u,e[8]=d*c+_,e[1]=l*f,e[5]=_*c+d,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*f,e[8]=g*f+u,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*f+g,e[10]=d-_*f}else if(t.order==="XZY"){let d=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+_,e[5]=o*h,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*h,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qx,t,jx)}lookAt(t,e,n){let i=this.elements;return jn.subVectors(t,e),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Rr.crossVectors(n,jn),Rr.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Rr.crossVectors(n,jn)),Rr.normalize(),Hl.crossVectors(jn,Rr),i[0]=Rr.x,i[4]=Hl.x,i[8]=jn.x,i[1]=Rr.y,i[5]=Hl.y,i[9]=jn.y,i[2]=Rr.z,i[6]=Hl.z,i[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],y=n[7],v=n[11],R=n[15],E=i[0],w=i[4],C=i[8],S=i[12],M=i[1],P=i[5],U=i[9],B=i[13],k=i[2],Z=i[6],H=i[10],J=i[14],G=i[3],it=i[7],I=i[11],dt=i[15];return s[0]=o*E+a*M+l*k+c*G,s[4]=o*w+a*P+l*Z+c*it,s[8]=o*C+a*U+l*H+c*I,s[12]=o*S+a*B+l*J+c*dt,s[1]=h*E+f*M+d*k+u*G,s[5]=h*w+f*P+d*Z+u*it,s[9]=h*C+f*U+d*H+u*I,s[13]=h*S+f*B+d*J+u*dt,s[2]=g*E+_*M+p*k+m*G,s[6]=g*w+_*P+p*Z+m*it,s[10]=g*C+_*U+p*H+m*I,s[14]=g*S+_*B+p*J+m*dt,s[3]=x*E+y*M+v*k+R*G,s[7]=x*w+y*P+v*Z+R*it,s[11]=x*C+y*U+v*H+R*I,s[15]=x*S+y*B+v*J+R*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*u-n*l*u)+_*(+e*l*u-e*c*d+s*o*d-i*o*u+i*c*h-s*l*h)+p*(+e*c*f-e*a*u-s*o*f+n*o*u+s*a*h-n*c*h)+m*(-i*a*h-e*l*f+e*a*d+i*o*f-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],g=t[12],_=t[13],p=t[14],m=t[15],x=f*p*c-_*d*c+_*l*u-a*p*u-f*l*m+a*d*m,y=g*d*c-h*p*c-g*l*u+o*p*u+h*l*m-o*d*m,v=h*_*c-g*f*c+g*a*u-o*_*u-h*a*m+o*f*m,R=g*f*l-h*_*l-g*a*d+o*_*d+h*a*p-o*f*p,E=e*x+n*y+i*v+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=x*w,t[1]=(_*d*s-f*p*s-_*i*u+n*p*u+f*i*m-n*d*m)*w,t[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*w,t[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*u-n*l*u)*w,t[4]=y*w,t[5]=(h*p*s-g*d*s+g*i*u-e*p*u-h*i*m+e*d*m)*w,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*m-e*l*m)*w,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*u+e*l*u)*w,t[8]=v*w,t[9]=(g*f*s-h*_*s-g*n*u+e*_*u+h*n*m-e*f*m)*w,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*m+e*a*m)*w,t[11]=(h*a*s-o*f*s-h*n*c+e*f*c+o*n*u-e*a*u)*w,t[12]=R*w,t[13]=(h*_*i-g*f*i+g*n*d-e*_*d-h*n*p+e*f*p)*w,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*w,t[15]=(o*f*i-h*a*i+h*n*l-e*f*l-o*n*d+e*a*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,d=s*c,u=s*h,g=s*f,_=o*h,p=o*f,m=a*f,x=l*c,y=l*h,v=l*f,R=n.x,E=n.y,w=n.z;return i[0]=(1-(_+m))*R,i[1]=(u+v)*R,i[2]=(g-y)*R,i[3]=0,i[4]=(u-v)*E,i[5]=(1-(d+m))*E,i[6]=(p+x)*E,i[7]=0,i[8]=(g+y)*w,i[9]=(p-x)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Qs.set(i[0],i[1],i[2]).length(),o=Qs.set(i[4],i[5],i[6]).length(),a=Qs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],yi.copy(this);let c=1/s,h=1/o,f=1/a;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=f,yi.elements[9]*=f,yi.elements[10]*=f,e.setFromRotationMatrix(yi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=ar){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),u,g;if(a===ar)u=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===mc)u=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=ar){let l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(o-s),d=(e+t)*c,u=(n+i)*h,g,_;if(a===ar)g=(o+s)*f,_=-2*f;else if(a===mc)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qs=new D,yi=new Ie,Qx=new D(0,0,0),jx=new D(1,1,1),Rr=new D,Hl=new D,jn=new D,cg=new Ie,hg=new Fr,Fi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hg.setFromEuler(this),this.setFromQuaternion(hg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fi.DEFAULT_ORDER="XYZ";var yc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ty=0,ug=new D,js=new Fr,er=new Ie,Gl=new D,Sa=new D,ey=new D,ny=new Fr,fg=new D(1,0,0),dg=new D(0,1,0),pg=new D(0,0,1),mg={type:"added"},iy={type:"removed"},to={type:"childadded",child:null},Au={type:"childremoved",child:null},bn=class r extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new D,e=new Fi,n=new Fr,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ee}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(fg,t)}rotateY(t){return this.rotateOnAxis(dg,t)}rotateZ(t){return this.rotateOnAxis(pg,t)}translateOnAxis(t,e){return ug.copy(t).applyQuaternion(this.quaternion),this.position.add(ug.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fg,t)}translateY(t){return this.translateOnAxis(dg,t)}translateZ(t){return this.translateOnAxis(pg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gl.copy(t):Gl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(Sa,Gl,this.up):er.lookAt(Gl,Sa,this.up),this.quaternion.setFromRotationMatrix(er),i&&(er.extractRotation(i.matrixWorld),js.setFromRotationMatrix(er),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mg),to.child=t,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(iy),Au.child=t,this.dispatchEvent(Au),Au.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),er.multiply(t.parent.matrixWorld)),t.applyMatrix4(er),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mg),to.child=t,this.dispatchEvent(to),to.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,t,ey),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,ny,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};bn.DEFAULT_UP=new D(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=new D,nr=new D,Cu=new D,ir=new D,eo=new D,no=new D,gg=new D,Ru=new D,Pu=new D,Iu=new D,Du=new xe,Lu=new xe,Uu=new xe,ms=class r{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Mi.subVectors(t,e),i.cross(Mi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Mi.subVectors(i,e),nr.subVectors(n,e),Cu.subVectors(t,e);let o=Mi.dot(Mi),a=Mi.dot(nr),l=Mi.dot(Cu),c=nr.dot(nr),h=nr.dot(Cu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ir.x),l.addScaledVector(o,ir.y),l.addScaledVector(a,ir.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Du.setScalar(0),Lu.setScalar(0),Uu.setScalar(0),Du.fromBufferAttribute(t,e),Lu.fromBufferAttribute(t,n),Uu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Du,s.x),o.addScaledVector(Lu,s.y),o.addScaledVector(Uu,s.z),o}static isFrontFacing(t,e,n,i){return Mi.subVectors(n,e),nr.subVectors(t,e),Mi.cross(nr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Mi.cross(nr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;eo.subVectors(i,n),no.subVectors(s,n),Ru.subVectors(t,n);let l=eo.dot(Ru),c=no.dot(Ru);if(l<=0&&c<=0)return e.copy(n);Pu.subVectors(t,i);let h=eo.dot(Pu),f=no.dot(Pu);if(h>=0&&f<=h)return e.copy(i);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(eo,o);Iu.subVectors(t,s);let u=eo.dot(Iu),g=no.dot(Iu);if(g>=0&&u<=g)return e.copy(s);let _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(no,a);let p=h*g-u*f;if(p<=0&&f-h>=0&&u-g>=0)return gg.subVectors(s,i),a=(f-h)/(f-h+(u-g)),e.copy(i).addScaledVector(gg,a);let m=1/(p+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(eo,o).addScaledVector(no,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},x_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function Nu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=Ld(t,1),e=Qe(e,0,1),n=Qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Nu(o,s,t+1/3),this.g=Nu(o,s,t),this.b=Nu(o,s,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=Gn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Gn){let n=x_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gn){return le.fromWorkingColorSpace(Mn.copy(this),t),Math.round(Qe(Mn.r*255,0,255))*65536+Math.round(Qe(Mn.g*255,0,255))*256+Math.round(Qe(Mn.b*255,0,255))}getHexString(t=Gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Mn.copy(this),e);let n=Mn.r,i=Mn.g,s=Mn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=Gn){le.fromWorkingColorSpace(Mn.copy(this),t);let e=Mn.r,n=Mn.g,i=Mn.b;return t!==Gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pr),this.setHSL(Pr.h+t,Pr.s+e,Pr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pr),t.getHSL(Wl);let n=Ca(Pr.h,Wl.h,e),i=Ca(Pr.s,Wl.s,e),s=Ca(Pr.l,Wl.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Ut;Ut.NAMES=x_;var ry=0,Br=class extends Or{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Ts(),this.name="",this.blending=ho,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ju,this.blendDst=Ku,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(n.blending=this.blending),this.side!==Ur&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ju&&(n.blendSrc=this.blendSrc),this.blendDst!==Ku&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},bi=class extends Br{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=i_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var qe=new D,Xl=new ut,an=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jm,this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xl.fromBufferAttribute(this,e),Xl.applyMatrix3(t),this.setXY(e,Xl.x,Xl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ao(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ao(e,this.array)),e}setX(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ao(e,this.array)),e}setY(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ao(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ao(e,this.array)),e}setW(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),n=Un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),n=Un(n,this.array),i=Un(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),n=Un(n,this.array),i=Un(i,this.array),s=Un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jm&&(t.usage=this.usage),t}};var Mc=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Sc=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}},sy=0,fi=new Ie,Ou=new bn,io=new D,ti=new ys,ba=new ys,on=new D,He=class r extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(v_(t)?Sc:Mc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,n){return fi.makeTranslation(t,e,n),this.applyMatrix4(fi),this}scale(t,e,n){return fi.makeScale(t,e,n),this.applyMatrix4(fi),this}lookAt(t){return Ou.lookAt(t),Ou.updateMatrix(),this.applyMatrix4(Ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ba.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(ti.min,ba.min),ti.expandByPoint(on),on.addVectors(ti.max,ba.max),ti.expandByPoint(on)):(ti.expandByPoint(ba.min),ti.expandByPoint(ba.max))}ti.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)on.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(on));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(io.fromBufferAttribute(t,c),on.add(io)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new D,l[C]=new D;let c=new D,h=new D,f=new D,d=new ut,u=new ut,g=new ut,_=new D,p=new D;function m(C,S,M){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,C),u.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(c),f.sub(c),u.sub(d),g.sub(d);let P=1/(u.x*g.y-g.x*u.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(P),p.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(_),a[S].add(_),a[M].add(_),l[C].add(p),l[S].add(p),l[M].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,S=x.length;C<S;++C){let M=x[C],P=M.start,U=M.count;for(let B=P,k=P+U;B<k;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let y=new D,v=new D,R=new D,E=new D;function w(C){R.fromBufferAttribute(i,C),E.copy(R);let S=a[C];y.copy(S),y.sub(R.multiplyScalar(R.dot(S))).normalize(),v.crossVectors(E,S);let P=v.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,S=x.length;C<S;++C){let M=x[C],P=M.start,U=M.count;for(let B=P,k=P+U;B<k;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,f=new D;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[u++]}return new an(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],f=s[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_g=new Ie,cs=new xc,Yl=new Mo,vg=new D,ql=new D,Zl=new D,$l=new D,Fu=new D,Jl=new D,xg=new D,Kl=new D,Bt=class extends bn{constructor(t=new He,e=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Jl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(Fu.fromBufferAttribute(f,t),o?Jl.addScaledVector(Fu,h):Jl.addScaledVector(Fu.sub(e),h))}e.add(Jl)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yl.copy(n.boundingSphere),Yl.applyMatrix4(s),cs.copy(t.ray).recast(t.near),!(Yl.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Yl,vg)===null||cs.origin.distanceToSquared(vg)>(t.far-t.near)**2))&&(_g.copy(s).invert(),cs.copy(t.ray).applyMatrix4(_g),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],x=Math.max(p.start,u.start),y=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let v=x,R=y;v<R;v+=3){let E=a.getX(v),w=a.getX(v+1),C=a.getX(v+2);i=Ql(this,m,t,n,c,h,f,E,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){let x=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);i=Ql(this,o,t,n,c,h,f,x,y,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],x=Math.max(p.start,u.start),y=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let v=x,R=y;v<R;v+=3){let E=v,w=v+1,C=v+2;i=Ql(this,m,t,n,c,h,f,E,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){let x=p,y=p+1,v=p+2;i=Ql(this,o,t,n,c,h,f,x,y,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function oy(r,t,e,n,i,s,o,a){let l;if(t.side===Sn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Ur,a),l===null)return null;Kl.copy(a),Kl.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Kl);return c<e.near||c>e.far?null:{distance:c,point:Kl.clone(),object:r}}function Ql(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,ql),r.getVertexPosition(l,Zl),r.getVertexPosition(c,$l);let h=oy(r,t,e,n,ql,Zl,$l,xg);if(h){let f=new D;ms.getBarycoord(xg,ql,Zl,$l,f),i&&(h.uv=ms.getInterpolatedAttribute(i,a,l,c,f,new ut)),s&&(h.uv1=ms.getInterpolatedAttribute(s,a,l,c,f,new ut)),o&&(h.normal=ms.getInterpolatedAttribute(o,a,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};ms.getNormal(ql,Zl,$l,d.normal),h.face=d,h.barycoord=f}return h}var Bi=class r extends He{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(f,2));function g(_,p,m,x,y,v,R,E,w,C,S){let M=v/w,P=R/C,U=v/2,B=R/2,k=E/2,Z=w+1,H=C+1,J=0,G=0,it=new D;for(let I=0;I<H;I++){let dt=I*P-B;for(let Dt=0;Dt<Z;Dt++){let Kt=Dt*M-U;it[_]=Kt*x,it[p]=dt*y,it[m]=k,c.push(it.x,it.y,it.z),it[_]=0,it[p]=0,it[m]=E>0?1:-1,h.push(it.x,it.y,it.z),f.push(Dt/w),f.push(1-I/C),J+=1}}for(let I=0;I<C;I++)for(let dt=0;dt<w;dt++){let Dt=d+dt+Z*I,Kt=d+dt+Z*(I+1),q=d+(dt+1)+Z*(I+1),et=d+(dt+1)+Z*I;l.push(Dt,Kt,et),l.push(Kt,q,et),G+=6}a.addGroup(u,G,S),u+=G,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function So(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Nn(r){let t={};for(let e=0;e<r.length;e++){let n=So(r[e]);for(let i in n)t[i]=n[i]}return t}function ay(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function y_(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var ki={clone:So,merge:Nn},ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ce=class extends Br{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ly,this.fragmentShader=cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=So(t.uniforms),this.uniformsGroups=ay(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},bc=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ar}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ir=new D,yg=new ut,Mg=new ut,un=class extends bc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ir.x,Ir.y).multiplyScalar(-t/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ir.x,Ir.y).multiplyScalar(-t/Ir.z)}getViewSize(t,e){return this.getViewBounds(t,yg,Mg),e.subVectors(Mg,yg)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ro=-90,so=1,zf=class extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new un(ro,so,t,e);i.layers=this.layers,this.add(i);let s=new un(ro,so,t,e);s.layers=this.layers,this.add(s);let o=new un(ro,so,t,e);o.layers=this.layers,this.add(o);let a=new un(ro,so,t,e);a.layers=this.layers,this.add(a);let l=new un(ro,so,t,e);l.layers=this.layers,this.add(l);let c=new un(ro,so,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===ar)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},wc=class extends ei{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:go,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},kf=class extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bi(5,5,5),s=new Ce({name:"CubemapFromEquirect",uniforms:So(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:di});s.uniforms.tEquirect.value=e;let o=new Bt(i,s),a=e.minFilter;return e.minFilter===vs&&(e.minFilter=Oi),new zf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},Bu=new D,hy=new D,uy=new ee,sr=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Bu.subVectors(n,e).cross(hy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Bu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||uy.getNormalMatrix(t),i=this.coplanarPoint(Bu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},hs=new Mo,jl=new D,Na=class{constructor(t=new sr,e=new sr,n=new sr,i=new sr,s=new sr,o=new sr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ar){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],u=i[8],g=i[9],_=i[10],p=i[11],m=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,p-u,v-m).normalize(),n[1].setComponents(l+s,d+c,p+u,v+m).normalize(),n[2].setComponents(l+o,d+h,p+g,v+x).normalize(),n[3].setComponents(l-o,d-h,p-g,v-x).normalize(),n[4].setComponents(l-a,d-f,p-_,v-y).normalize(),e===ar)n[5].setComponents(l+a,d+f,p+_,v+y).normalize();else if(e===mc)n[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(jl.x=i.normal.x>0?t.max.x:t.min.x,jl.y=i.normal.y>0?t.max.y:t.min.y,jl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(jl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function M_(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function fy(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],_=f[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let _=f[u];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var bo=class r extends He{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,d=e/l,u=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let x=m*d-o;for(let y=0;y<c;y++){let v=y*f-s;g.push(v,-x,0),_.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let y=x+c*m,v=x+c*(m+1),R=x+1+c*(m+1),E=x+1+c*m;u.push(y,v,E),u.push(v,R,E)}this.setIndex(u),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},dy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
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
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
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
#endif`,yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,My=`#ifdef USE_BATCHING
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
#endif`,Sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,by=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ty=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ey=`#ifdef USE_IRIDESCENCE
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
#endif`,Ay=`#ifdef USE_BUMPMAP
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
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Oy=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Fy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,By=`vec3 transformedNormal = objectNormal;
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
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,Zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,Jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tM=`#ifdef USE_GRADIENTMAP
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
}`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rM=`uniform bool receiveShadow;
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
#endif`,sM=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hM=`PhysicalMaterial material;
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
#endif`,uM=`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,fM=`
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
#endif`,dM=`#if defined( RE_IndirectDiffuse )
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
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SM=`#if defined( USE_POINTS_UV )
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
#endif`,bM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
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
#endif`,RM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NM=`#ifdef USE_NORMALMAP
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
#endif`,OM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KM=`float getShadowMask() {
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
}`,QM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jM=`#ifdef USE_SKINNING
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
#endif`,tS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eS=`#ifdef USE_SKINNING
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
#endif`,nS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oS=`#ifdef USE_TRANSMISSION
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
#endif`,aS=`#ifdef USE_TRANSMISSION
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dS=`uniform sampler2D t2D;
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`#include <common>
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
}`,xS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yS=`#define DISTANCE
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
}`,MS=`#define DISTANCE
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
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`uniform float scale;
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
}`,TS=`uniform vec3 diffuse;
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
}`,ES=`#include <common>
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
}`,AS=`uniform vec3 diffuse;
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
}`,CS=`#define LAMBERT
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
}`,RS=`#define LAMBERT
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
}`,PS=`#define MATCAP
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
}`,IS=`#define MATCAP
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
}`,DS=`#define NORMAL
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
}`,LS=`#define NORMAL
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
}`,US=`#define PHONG
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
}`,NS=`#define PHONG
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
}`,OS=`#define STANDARD
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
}`,FS=`#define STANDARD
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
}`,BS=`#define TOON
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
}`,zS=`#define TOON
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
}`,kS=`uniform float size;
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
}`,VS=`uniform vec3 diffuse;
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
}`,HS=`#include <common>
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
}`,GS=`uniform vec3 color;
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
}`,WS=`uniform float rotation;
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
}`,XS=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:dy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:_y,alphatest_pars_fragment:vy,aomap_fragment:xy,aomap_pars_fragment:yy,batching_pars_vertex:My,batching_vertex:Sy,begin_vertex:by,beginnormal_vertex:wy,bsdfs:Ty,iridescence_fragment:Ey,bumpmap_pars_fragment:Ay,clipping_planes_fragment:Cy,clipping_planes_pars_fragment:Ry,clipping_planes_pars_vertex:Py,clipping_planes_vertex:Iy,color_fragment:Dy,color_pars_fragment:Ly,color_pars_vertex:Uy,color_vertex:Ny,common:Oy,cube_uv_reflection_fragment:Fy,defaultnormal_vertex:By,displacementmap_pars_vertex:zy,displacementmap_vertex:ky,emissivemap_fragment:Vy,emissivemap_pars_fragment:Hy,colorspace_fragment:Gy,colorspace_pars_fragment:Wy,envmap_fragment:Xy,envmap_common_pars_fragment:Yy,envmap_pars_fragment:qy,envmap_pars_vertex:Zy,envmap_physical_pars_fragment:sM,envmap_vertex:$y,fog_vertex:Jy,fog_pars_vertex:Ky,fog_fragment:Qy,fog_pars_fragment:jy,gradientmap_pars_fragment:tM,lightmap_pars_fragment:eM,lights_lambert_fragment:nM,lights_lambert_pars_fragment:iM,lights_pars_begin:rM,lights_toon_fragment:oM,lights_toon_pars_fragment:aM,lights_phong_fragment:lM,lights_phong_pars_fragment:cM,lights_physical_fragment:hM,lights_physical_pars_fragment:uM,lights_fragment_begin:fM,lights_fragment_maps:dM,lights_fragment_end:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:_M,logdepthbuf_vertex:vM,map_fragment:xM,map_pars_fragment:yM,map_particle_fragment:MM,map_particle_pars_fragment:SM,metalnessmap_fragment:bM,metalnessmap_pars_fragment:wM,morphinstance_vertex:TM,morphcolor_vertex:EM,morphnormal_vertex:AM,morphtarget_pars_vertex:CM,morphtarget_vertex:RM,normal_fragment_begin:PM,normal_fragment_maps:IM,normal_pars_fragment:DM,normal_pars_vertex:LM,normal_vertex:UM,normalmap_pars_fragment:NM,clearcoat_normal_fragment_begin:OM,clearcoat_normal_fragment_maps:FM,clearcoat_pars_fragment:BM,iridescence_pars_fragment:zM,opaque_fragment:kM,packing:VM,premultiplied_alpha_fragment:HM,project_vertex:GM,dithering_fragment:WM,dithering_pars_fragment:XM,roughnessmap_fragment:YM,roughnessmap_pars_fragment:qM,shadowmap_pars_fragment:ZM,shadowmap_pars_vertex:$M,shadowmap_vertex:JM,shadowmask_pars_fragment:KM,skinbase_vertex:QM,skinning_pars_vertex:jM,skinning_vertex:tS,skinnormal_vertex:eS,specularmap_fragment:nS,specularmap_pars_fragment:iS,tonemapping_fragment:rS,tonemapping_pars_fragment:sS,transmission_fragment:oS,transmission_pars_fragment:aS,uv_pars_fragment:lS,uv_pars_vertex:cS,uv_vertex:hS,worldpos_vertex:uS,background_vert:fS,background_frag:dS,backgroundCube_vert:pS,backgroundCube_frag:mS,cube_vert:gS,cube_frag:_S,depth_vert:vS,depth_frag:xS,distanceRGBA_vert:yS,distanceRGBA_frag:MS,equirect_vert:SS,equirect_frag:bS,linedashed_vert:wS,linedashed_frag:TS,meshbasic_vert:ES,meshbasic_frag:AS,meshlambert_vert:CS,meshlambert_frag:RS,meshmatcap_vert:PS,meshmatcap_frag:IS,meshnormal_vert:DS,meshnormal_frag:LS,meshphong_vert:US,meshphong_frag:NS,meshphysical_vert:OS,meshphysical_frag:FS,meshtoon_vert:BS,meshtoon_frag:zS,points_vert:kS,points_frag:VS,shadow_vert:HS,shadow_frag:GS,sprite_vert:WS,sprite_frag:XS},Mt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Ni={basic:{uniforms:Nn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Nn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Nn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Nn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Nn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Nn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Nn([Mt.points,Mt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Nn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Nn([Mt.common,Mt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Nn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Nn([Mt.sprite,Mt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Nn([Mt.common,Mt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Nn([Mt.lights,Mt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Ni.physical={uniforms:Nn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var tc={r:0,b:0,g:0},us=new Fi,YS=new Ie;function qS(r,t,e,n,i,s,o){let a=new Ut(0),l=s===!0?0:1,c,h,f=null,d=0,u=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1,v=g(x);v===null?m(a,l):v&&v.isColor&&(m(v,1),y=!0);let R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(x,y){let v=g(y);v&&(v.isCubeTexture||v.mapping===Hc)?(h===void 0&&(h=new Bt(new Bi(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:So(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),us.copy(y.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(YS.makeRotationFromEuler(us)),h.material.toneMapped=le.getTransfer(v.colorSpace)!==ve,(f!==v||d!==v.version||u!==r.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,u=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Bt(new bo(2,2),new Ce({name:"BackgroundMaterial",uniforms:So(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,u=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,y){x.getRGB(tc,y_(r)),n.buffers.color.setClear(tc.r,tc.g,tc.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:_,addToRenderList:p}}function ZS(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(M,P,U,B,k){let Z=!1,H=f(B,U,P);s!==H&&(s=H,c(s.object)),Z=u(M,B,U,k),Z&&g(M,B,U,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(M,P,U,B),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function f(M,P,U){let B=U.wireframe===!0,k=n[M.id];k===void 0&&(k={},n[M.id]=k);let Z=k[P.id];Z===void 0&&(Z={},k[P.id]=Z);let H=Z[B];return H===void 0&&(H=d(l()),Z[B]=H),H}function d(M){let P=[],U=[],B=[];for(let k=0;k<e;k++)P[k]=0,U[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:B,object:M,attributes:{},index:null}}function u(M,P,U,B){let k=s.attributes,Z=P.attributes,H=0,J=U.getAttributes();for(let G in J)if(J[G].location>=0){let I=k[G],dt=Z[G];if(dt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),I===void 0||I.attribute!==dt||dt&&I.data!==dt.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function g(M,P,U,B){let k={},Z=P.attributes,H=0,J=U.getAttributes();for(let G in J)if(J[G].location>=0){let I=Z[G];I===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(I=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(I=M.instanceColor));let dt={};dt.attribute=I,I&&I.data&&(dt.data=I.data),k[G]=dt,H++}s.attributes=k,s.attributesNum=H,s.index=B}function _(){let M=s.newAttributes;for(let P=0,U=M.length;P<U;P++)M[P]=0}function p(M){m(M,0)}function m(M,P){let U=s.newAttributes,B=s.enabledAttributes,k=s.attributeDivisors;U[M]=1,B[M]===0&&(r.enableVertexAttribArray(M),B[M]=1),k[M]!==P&&(r.vertexAttribDivisor(M,P),k[M]=P)}function x(){let M=s.newAttributes,P=s.enabledAttributes;for(let U=0,B=P.length;U<B;U++)P[U]!==M[U]&&(r.disableVertexAttribArray(U),P[U]=0)}function y(M,P,U,B,k,Z,H){H===!0?r.vertexAttribIPointer(M,P,U,k,Z):r.vertexAttribPointer(M,P,U,B,k,Z)}function v(M,P,U,B){_();let k=B.attributes,Z=U.getAttributes(),H=P.defaultAttributeValues;for(let J in Z){let G=Z[J];if(G.location>=0){let it=k[J];if(it===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){let I=it.normalized,dt=it.itemSize,Dt=t.get(it);if(Dt===void 0)continue;let Kt=Dt.buffer,q=Dt.type,et=Dt.bytesPerElement,xt=q===r.INT||q===r.UNSIGNED_INT||it.gpuType===Ed;if(it.isInterleavedBufferAttribute){let st=it.data,Tt=st.stride,Rt=it.offset;if(st.isInstancedInterleavedBuffer){for(let Ht=0;Ht<G.locationSize;Ht++)m(G.location+Ht,st.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ht=0;Ht<G.locationSize;Ht++)p(G.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let Ht=0;Ht<G.locationSize;Ht++)y(G.location+Ht,dt/G.locationSize,q,I,Tt*et,(Rt+dt/G.locationSize*Ht)*et,xt)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)m(G.location+st,it.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<G.locationSize;st++)p(G.location+st);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let st=0;st<G.locationSize;st++)y(G.location+st,dt/G.locationSize,q,I,dt*et,dt/G.locationSize*st*et,xt)}}else if(H!==void 0){let I=H[J];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(G.location,I);break;case 3:r.vertexAttrib3fv(G.location,I);break;case 4:r.vertexAttrib4fv(G.location,I);break;default:r.vertexAttrib1fv(G.location,I)}}}}x()}function R(){C();for(let M in n){let P=n[M];for(let U in P){let B=P[U];for(let k in B)h(B[k].object),delete B[k];delete P[U]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let U in P){let B=P[U];for(let k in B)h(B[k].object),delete B[k];delete P[U]}delete n[M.id]}function w(M){for(let P in n){let U=n[P];if(U[M.id]===void 0)continue;let B=U[M.id];for(let k in B)h(B[k].object),delete B[k];delete U[M.id]}}function C(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function $S(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let g=0;g<f;g++)u+=h[g];e.update(u,n,1)}function l(c,h,f,d){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function JS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Si&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==cr&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==or&&!C)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:R,maxSamples:E}}function KS(r){let t=this,e=null,n=0,i=!1,s=!1,o=new sr,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{let x=s?0:n,y=x*4,v=m.clippingState||null;l.value=v,v=h(g,d,y,u);for(let R=0;R!==y;++R)v[R]=e[R];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,g){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=u+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=u;y!==_;++y,v+=4)o.copy(f[y]).applyMatrix4(x,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function QS(r){let t=new WeakMap;function e(o,a){return a===of?o.mapping=go:a===af&&(o.mapping=_o),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===of||a===af)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new kf(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Oa=class extends bc{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},lo=4,Sg=[.125,.215,.35,.446,.526,.582],gs=20,zu=new Oa,bg=new Ut,ku=null,Vu=0,Hu=0,Gu=!1,ds=(1+Math.sqrt(5))/2,oo=1/ds,wg=[new D(-ds,oo,0),new D(ds,oo,0),new D(-oo,0,ds),new D(oo,0,ds),new D(0,ds,-oo),new D(0,ds,oo),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],wo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ku=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ku,Vu,Hu),this._renderer.xr.enabled=Gu,t.scissorTest=!1,ec(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===go||t.mapping===_o?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ku=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:ii,format:Si,colorSpace:Lo,depthBuffer:!1},i=Tg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tg(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jS(s)),this._blurMaterial=tb(s,t,e)}return i}_compileMaterial(t){let e=new Bt(this._lodPlanes[0],t);this._renderer.compile(e,zu)}_sceneToCubeUV(t,e,n,i){let a=new un(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(bg),h.toneMapping=Lr,h.autoClear=!1;let u=new bi({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new Bt(new Bi,u),_=!1,p=t.background;p?p.isColor&&(u.color.copy(p),t.background=null,_=!0):(u.color.copy(bg),_=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let y=this._cubeSize;ec(i,x*y,m>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===go||t.mapping===_o;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eg());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;ec(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,zu)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wg[(i-s-1)%wg.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Bt(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*gs-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):gs;p>gs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gs}`);let m=[],x=0;for(let w=0;w<gs;++w){let C=w/_,S=Math.exp(-C*C/2);m.push(S),w===0?x+=S:w<p&&(x+=2*S)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let v=this._sizeLods[i],R=3*v*(i>y-lo?i-y+lo:0),E=4*(this._cubeSize-v);ec(e,R,E,3*v,2*v),l.setRenderTarget(e),l.render(f,zu)}};function jS(r){let t=[],e=[],n=[],i=r,s=r-lo+1+Sg.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-lo?l=Sg[o-r+lo-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*u),y=new Float32Array(p*g*u),v=new Float32Array(m*g*u);for(let E=0;E<u;E++){let w=E%3*2/3-1,C=E>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];x.set(S,_*g*E),y.set(d,p*g*E);let M=[E,E,E,E,E,E];v.set(M,m*g*E)}let R=new He;R.setAttribute("position",new an(x,_)),R.setAttribute("uv",new an(y,p)),R.setAttribute("faceIndex",new an(v,m)),t.push(R),i>lo&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Tg(r,t,e){let n=new dn(r,t,e);return n.texture.mapping=Hc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ec(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function tb(r,t,e){let n=new Float32Array(gs),i=new D(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ud(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Eg(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ud(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ag(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ud(){return`

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
	`}function eb(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===of||l===af,h=l===go||l===_o;if(c||h){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new wo(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&i(u)?(e===null&&(e=new wo(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function nb(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ta("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ib(r,t,e,n){let i={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];let u=s.get(d);u&&(t.remove(u),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let g in d)t.update(d[g],r.ARRAY_BUFFER);let u=f.morphAttributes;for(let g in u){let _=u[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(f){let d=[],u=f.index,g=f.attributes.position,_=0;if(u!==null){let x=u.array;_=u.version;for(let y=0,v=x.length;y<v;y+=3){let R=x[y+0],E=x[y+1],w=x[y+2];d.push(R,E,E,w,w,R)}}else if(g!==void 0){let x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){let R=y+0,E=y+1,w=y+2;d.push(R,E,E,w,w,R)}}else return;let p=new(v_(d)?Sc:Mc)(d,1);p.version=_;let m=s.get(f);m&&t.remove(m),s.set(f,p)}function h(f){let d=s.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function rb(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),e.update(u,n,1)}function c(d,u,g){g!==0&&(r.drawElementsInstanced(n,u,s,d*o,g),e.update(u,n,g))}function h(d,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=u[m];e.update(p,n,1)}function f(d,u,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,u[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,s,d,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=u[x]*_[x];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function sb(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ob(r,t,e){let n=new WeakMap,i=new xe;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let S=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],y=0;u===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*R*4*f),w=new vc(E,v,R,f);w.type=or,w.needsUpdate=!0;let C=y*4;for(let M=0;M<f;M++){let P=p[M],U=m[M],B=x[M],k=v*R*4*M;for(let Z=0;Z<P.count;Z++){let H=Z*C;u===!0&&(i.fromBufferAttribute(P,Z),E[k+H+0]=i.x,E[k+H+1]=i.y,E[k+H+2]=i.z,E[k+H+3]=0),g===!0&&(i.fromBufferAttribute(U,Z),E[k+H+4]=i.x,E[k+H+5]=i.y,E[k+H+6]=i.z,E[k+H+7]=0),_===!0&&(i.fromBufferAttribute(B,Z),E[k+H+8]=i.x,E[k+H+9]=i.y,E[k+H+10]=i.z,E[k+H+11]=B.itemSize===4?i.w:1)}}d={count:f,texture:w,size:new ut(v,R)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function ab(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Tc=class extends ei{constructor(t,e,n,i,s,o,a,l,c,h=uo){if(h!==uo&&h!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===uo&&(n=xs),n===void 0&&h===xo&&(n=vo),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xn,this.minFilter=l!==void 0?l:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},S_=new ei,Cg=new Tc(1,1),b_=new vc,w_=new Bf,T_=new wc,Rg=[],Pg=[],Ig=new Float32Array(16),Dg=new Float32Array(9),Lg=new Float32Array(4);function Uo(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Rg[i];if(s===void 0&&(s=new Float32Array(i),Rg[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function je(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function tn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Wc(r,t){let e=Pg[t];e===void 0&&(e=new Int32Array(t),Pg[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function lb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function cb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2fv(this.addr,t),tn(e,t)}}function hb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;r.uniform3fv(this.addr,t),tn(e,t)}}function ub(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4fv(this.addr,t),tn(e,t)}}function fb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(je(e,n))return;Lg.set(n),r.uniformMatrix2fv(this.addr,!1,Lg),tn(e,n)}}function db(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(je(e,n))return;Dg.set(n),r.uniformMatrix3fv(this.addr,!1,Dg),tn(e,n)}}function pb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(je(e,n))return;Ig.set(n),r.uniformMatrix4fv(this.addr,!1,Ig),tn(e,n)}}function mb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function gb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2iv(this.addr,t),tn(e,t)}}function _b(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;r.uniform3iv(this.addr,t),tn(e,t)}}function vb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4iv(this.addr,t),tn(e,t)}}function xb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function yb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2uiv(this.addr,t),tn(e,t)}}function Mb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;r.uniform3uiv(this.addr,t),tn(e,t)}}function Sb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4uiv(this.addr,t),tn(e,t)}}function bb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Cg.compareFunction=g_,s=Cg):s=S_,e.setTexture2D(t||s,i)}function wb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||w_,i)}function Tb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||T_,i)}function Eb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||b_,i)}function Ab(r){switch(r){case 5126:return lb;case 35664:return cb;case 35665:return hb;case 35666:return ub;case 35674:return fb;case 35675:return db;case 35676:return pb;case 5124:case 35670:return mb;case 35667:case 35671:return gb;case 35668:case 35672:return _b;case 35669:case 35673:return vb;case 5125:return xb;case 36294:return yb;case 36295:return Mb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return Eb}}function Cb(r,t){r.uniform1fv(this.addr,t)}function Rb(r,t){let e=Uo(t,this.size,2);r.uniform2fv(this.addr,e)}function Pb(r,t){let e=Uo(t,this.size,3);r.uniform3fv(this.addr,e)}function Ib(r,t){let e=Uo(t,this.size,4);r.uniform4fv(this.addr,e)}function Db(r,t){let e=Uo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Lb(r,t){let e=Uo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Ub(r,t){let e=Uo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Nb(r,t){r.uniform1iv(this.addr,t)}function Ob(r,t){r.uniform2iv(this.addr,t)}function Fb(r,t){r.uniform3iv(this.addr,t)}function Bb(r,t){r.uniform4iv(this.addr,t)}function zb(r,t){r.uniform1uiv(this.addr,t)}function kb(r,t){r.uniform2uiv(this.addr,t)}function Vb(r,t){r.uniform3uiv(this.addr,t)}function Hb(r,t){r.uniform4uiv(this.addr,t)}function Gb(r,t,e){let n=this.cache,i=t.length,s=Wc(e,i);je(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||S_,s[o])}function Wb(r,t,e){let n=this.cache,i=t.length,s=Wc(e,i);je(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||w_,s[o])}function Xb(r,t,e){let n=this.cache,i=t.length,s=Wc(e,i);je(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||T_,s[o])}function Yb(r,t,e){let n=this.cache,i=t.length,s=Wc(e,i);je(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||b_,s[o])}function qb(r){switch(r){case 5126:return Cb;case 35664:return Rb;case 35665:return Pb;case 35666:return Ib;case 35674:return Db;case 35675:return Lb;case 35676:return Ub;case 5124:case 35670:return Nb;case 35667:case 35671:return Ob;case 35668:case 35672:return Fb;case 35669:case 35673:return Bb;case 5125:return zb;case 36294:return kb;case 36295:return Vb;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return Yb}}var Vf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ab(e.type)}},Hf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qb(e.type)}},Gf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Wu=/(\w+)(\])?(\[|\.)?/g;function Ug(r,t){r.seq.push(t),r.map[t.id]=t}function Zb(r,t,e){let n=r.name,i=n.length;for(Wu.lastIndex=0;;){let s=Wu.exec(n),o=Wu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ug(e,c===void 0?new Vf(a,r,t):new Hf(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new Gf(a),Ug(e,f)),e=f}}}var po=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Zb(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Ng(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var $b=37297,Jb=0;function Kb(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Og=new ee;function Qb(r){le._getMatrix(Og,le.workingColorSpace,r);let t=`mat3( ${Og.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(r)){case Gc:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Fg(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Kb(r.getShaderSource(t),o)}else return i}function jb(r,t){let e=Qb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function t1(r,t){let e;switch(t){case Md:e="Linear";break;case Sd:e="Reinhard";break;case bd:e="Cineon";break;case Xa:e="ACESFilmic";break;case wd:e="AgX";break;case Td:e="Neutral";break;case vx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nc=new D;function e1(){le.getLuminanceCoefficients(nc);let r=nc.x.toFixed(4),t=nc.y.toFixed(4),e=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function i1(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function r1(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ea(r){return r!==""}function Bg(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zg(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var s1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wf(r){return r.replace(s1,a1)}var o1=new Map;function a1(r,t){let e=ne[t];if(e===void 0){let n=o1.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wf(e)}var l1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kg(r){return r.replace(l1,c1)}function c1(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vg(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function h1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===n_?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===yd?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===rr&&(t="SHADOWMAP_TYPE_VSM"),t}function u1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case go:case _o:t="ENVMAP_TYPE_CUBE";break;case Hc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function f1(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case _o:t="ENVMAP_MODE_REFRACTION";break}return t}function d1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case i_:t="ENVMAP_BLENDING_MULTIPLY";break;case gx:t="ENVMAP_BLENDING_MIX";break;case _x:t="ENVMAP_BLENDING_ADD";break}return t}function p1(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function m1(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=h1(e),c=u1(e),h=f1(e),f=d1(e),d=p1(e),u=n1(e),g=i1(s),_=i.createProgram(),p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ea).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ea).join(`
`),m.length>0&&(m+=`
`)):(p=[Vg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),m=[Vg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Lr?"#define TONE_MAPPING":"",e.toneMapping!==Lr?ne.tonemapping_pars_fragment:"",e.toneMapping!==Lr?t1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,jb("linearToOutputTexel",e.outputColorSpace),e1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ea).join(`
`)),o=Wf(o),o=Bg(o,e),o=zg(o,e),a=Wf(a),a=Bg(a,e),a=zg(a,e),o=kg(o),a=kg(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=x+p+o,v=x+m+a,R=Ng(i,i.VERTEX_SHADER,y),E=Ng(i,i.FRAGMENT_SHADER,v);i.attachShader(_,R),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(P){if(r.debug.checkShaderErrors){let U=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(R).trim(),k=i.getShaderInfoLog(E).trim(),Z=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,R,E);else{let J=Fg(i,R,"vertex"),G=Fg(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+J+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||k==="")&&(H=!1);H&&(P.diagnostics={runnable:Z,programLog:U,vertexShader:{log:B,prefix:p},fragmentShader:{log:k,prefix:m}})}i.deleteShader(R),i.deleteShader(E),C=new po(i,_),S=r1(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,$b)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jb++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=E,this}var g1=0,Xf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yf(t),e.set(t,n)),n}},Yf=class{constructor(t){this.id=g1++,this.code=t,this.usedTimes=0}};function _1(r,t,e,n,i,s,o){let a=new yc,l=new Xf,c=new Set,h=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures,u=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,M,P,U,B){let k=U.fog,Z=B.geometry,H=S.isMeshStandardMaterial?U.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),G=J&&J.mapping===Hc?J.image.height:null,it=g[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let I=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,dt=I!==void 0?I.length:0,Dt=0;Z.morphAttributes.position!==void 0&&(Dt=1),Z.morphAttributes.normal!==void 0&&(Dt=2),Z.morphAttributes.color!==void 0&&(Dt=3);let Kt,q,et,xt;if(it){let St=Ni[it];Kt=St.vertexShader,q=St.fragmentShader}else Kt=S.vertexShader,q=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),xt=l.getFragmentShaderID(S);let st=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),Rt=B.isInstancedMesh===!0,Ht=B.isBatchedMesh===!0,Qt=!!S.map,kt=!!S.matcap,Et=!!J,N=!!S.aoMap,de=!!S.lightMap,zt=!!S.bumpMap,V=!!S.normalMap,Y=!!S.displacementMap,nt=!!S.emissiveMap,rt=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,z=S.clearcoat>0,j=S.dispersion>0,Q=S.iridescence>0,K=S.sheen>0,at=S.transmission>0,ht=b&&!!S.anisotropyMap,mt=z&&!!S.clearcoatMap,Xt=z&&!!S.clearcoatNormalMap,ot=z&&!!S.clearcoatRoughnessMap,ft=Q&&!!S.iridescenceMap,Ot=Q&&!!S.iridescenceThicknessMap,Nt=K&&!!S.sheenColorMap,bt=K&&!!S.sheenRoughnessMap,jt=!!S.specularMap,Vt=!!S.specularColorMap,ce=!!S.specularIntensityMap,L=at&&!!S.transmissionMap,gt=at&&!!S.thicknessMap,$=!!S.gradientMap,tt=!!S.alphaMap,pt=S.alphaTest>0,_t=!!S.alphaHash,Gt=!!S.extensions,ue=Lr;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ue=r.toneMapping);let Oe={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:Kt,fragmentShader:q,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:xt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Ht,batchingColor:Ht&&B._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&B.instanceColor!==null,instancingMorph:Rt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Lo,alphaToCoverage:!!S.alphaToCoverage,map:Qt,matcap:kt,envMap:Et,envMapMode:Et&&J.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:de,bumpMap:zt,normalMap:V,displacementMap:d&&Y,emissiveMap:nt,normalMapObjectSpace:V&&S.normalMapType===Mx,normalMapTangentSpace:V&&S.normalMapType===m_,metalnessMap:rt,roughnessMap:A,anisotropy:b,anisotropyMap:ht,clearcoat:z,clearcoatMap:mt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:ot,dispersion:j,iridescence:Q,iridescenceMap:ft,iridescenceThicknessMap:Ot,sheen:K,sheenColorMap:Nt,sheenRoughnessMap:bt,specularMap:jt,specularColorMap:Vt,specularIntensityMap:ce,transmission:at,transmissionMap:L,thicknessMap:gt,gradientMap:$,opaque:S.transparent===!1&&S.blending===ho&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:pt,alphaHash:_t,combine:S.combine,mapUv:Qt&&_(S.map.channel),aoMapUv:N&&_(S.aoMap.channel),lightMapUv:de&&_(S.lightMap.channel),bumpMapUv:zt&&_(S.bumpMap.channel),normalMapUv:V&&_(S.normalMap.channel),displacementMapUv:Y&&_(S.displacementMap.channel),emissiveMapUv:nt&&_(S.emissiveMap.channel),metalnessMapUv:rt&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:ht&&_(S.anisotropyMap.channel),clearcoatMapUv:mt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(S.sheenRoughnessMap.channel),specularMapUv:jt&&_(S.specularMap.channel),specularColorMapUv:Vt&&_(S.specularColorMap.channel),specularIntensityMapUv:ce&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:gt&&_(S.thicknessMap.channel),alphaMapUv:tt&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(V||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(Qt||tt),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Tt,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:Qt&&S.map.isVideoTexture===!0&&le.getTransfer(S.map.colorSpace)===ve,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&le.getTransfer(S.emissiveMap.colorSpace)===ve,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wn,flipSided:S.side===Sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Gt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&S.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function m(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let M=g[S.type],P;if(M){let U=Ni[M];P=ki.clone(U.uniforms)}else P=S.uniforms;return P}function R(S,M){let P;for(let U=0,B=h.length;U<B;U++){let k=h[U];if(k.cacheKey===M){P=k,++P.usedTimes;break}}return P===void 0&&(P=new m1(r,M,S,s),h.push(P)),P}function E(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:R,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:C}}function v1(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function x1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Hg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Gg(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,d,u,g,_,p){let m=r[t];return m===void 0?(m={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},r[t]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=u,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),t++,m}function a(f,d,u,g,_,p){let m=o(f,d,u,g,_,p);u.transmission>0?n.push(m):u.transparent===!0?i.push(m):e.push(m)}function l(f,d,u,g,_,p){let m=o(f,d,u,g,_,p);u.transmission>0?n.unshift(m):u.transparent===!0?i.unshift(m):e.unshift(m)}function c(f,d){e.length>1&&e.sort(f||x1),n.length>1&&n.sort(d||Hg),i.length>1&&i.sort(d||Hg)}function h(){for(let f=t,d=r.length;f<d;f++){let u=r[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function y1(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Gg,r.set(n,[o])):i>=s.length?(o=new Gg,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function M1(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ut};break;case"SpotLight":e={position:new D,direction:new D,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function S1(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var b1=0;function w1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function T1(r){let t=new M1,e=S1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let i=new D,s=new Ie,o=new Ie;function a(c){let h=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,g=0,_=0,p=0,m=0,x=0,y=0,v=0,R=0,E=0,w=0;c.sort(w1);for(let S=0,M=c.length;S<M;S++){let P=c[S],U=P.color,B=P.intensity,k=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*B,f+=U.g*B,d+=U.b*B;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],B);w++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,G=e.get(P);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=Z,n.directionalShadowMatrix[u]=P.shadow.matrix,x++}n.directional[u]=H,u++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(U).multiplyScalar(B),H.distance=k,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[_]=H;let J=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,J.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=J.matrix,P.castShadow){let G=e.get(P);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=Z,v++}_++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(U).multiplyScalar(B),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=H,p++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let J=P.shadow,G=e.get(P);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=H,g++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(B),H.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[m]=H,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==u||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==w)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,C.directionalLength=u,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=w,n.version=b1++)}function l(c,h){let f=0,d=0,u=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let y=c[m];if(y.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),f++}else if(y.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),u++}else if(y.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Wg(r){let t=new T1(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function E1(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Wg(r),t.set(i,[a])):s>=o.length?(a=new Wg(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Fa=class extends Br{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qf=class extends Br{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},A1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C1=`uniform sampler2D shadow_pass;
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
}`;function R1(r,t,e){let n=new Na,i=new ut,s=new ut,o=new xe,a=new Fa({depthPacking:Dd}),l=new qf,c={},h=e.maxTextureSize,f={[Ur]:Sn,[Sn]:Ur,[Wn]:Wn},d=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:A1,fragmentShader:C1}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new He;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Bt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n_;let m=this.type;this.render=function(E,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let S=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),U=r.state;U.setBlending(di),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let B=m!==rr&&this.type===rr,k=m===rr&&this.type!==rr;for(let Z=0,H=E.length;Z<H;Z++){let J=E[Z],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let it=G.getFrameExtents();if(i.multiply(it),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/it.x),i.x=s.x*it.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/it.y),i.y=s.y*it.y,G.mapSize.y=s.y)),G.map===null||B===!0||k===!0){let dt=this.type!==rr?{minFilter:Xn,magFilter:Xn}:{};G.map!==null&&G.map.dispose(),G.map=new dn(i.x,i.y,dt),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();let I=G.getViewportCount();for(let dt=0;dt<I;dt++){let Dt=G.getViewport(dt);o.set(s.x*Dt.x,s.y*Dt.y,s.x*Dt.z,s.y*Dt.w),U.viewport(o),G.updateMatrices(J,dt),n=G.getFrustum(),v(w,C,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===rr&&x(G,C),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(S,M,P)};function x(E,w){let C=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new dn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,C,d,_,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,C,u,_,null)}function y(E,w,C,S){let M=null,P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let U=M.uuid,B=w.uuid,k=c[U];k===void 0&&(k={},c[U]=k);let Z=k[B];Z===void 0&&(Z=M.clone(),k[B]=Z,w.addEventListener("dispose",R)),M=Z}if(M.visible=w.visible,M.wireframe=w.wireframe,S===rr?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let U=r.properties.get(M);U.light=C}return M}function v(E,w,C,S,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===rr)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let B=t.update(E),k=E.material;if(Array.isArray(k)){let Z=B.groups;for(let H=0,J=Z.length;H<J;H++){let G=Z[H],it=k[G.materialIndex];if(it&&it.visible){let I=y(E,it,S,M);E.onBeforeShadow(r,E,w,C,B,I,G),r.renderBufferDirect(C,null,B,I,E,G),E.onAfterShadow(r,E,w,C,B,I,G)}}}else if(k.visible){let Z=y(E,k,S,M);E.onBeforeShadow(r,E,w,C,B,Z,null),r.renderBufferDirect(C,null,B,Z,E,null),E.onAfterShadow(r,E,w,C,B,Z,null)}}let U=E.children;for(let B=0,k=U.length;B<k;B++)v(U[B],w,C,S,M)}function R(E){E.target.removeEventListener("dispose",R);for(let C in c){let S=c[C],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var P1={[Qu]:ju,[tf]:rf,[ef]:sf,[mo]:nf,[ju]:Qu,[rf]:tf,[sf]:ef,[nf]:mo};function I1(r,t){function e(){let L=!1,gt=new xe,$=null,tt=new xe(0,0,0,0);return{setMask:function(pt){$!==pt&&!L&&(r.colorMask(pt,pt,pt,pt),$=pt)},setLocked:function(pt){L=pt},setClear:function(pt,_t,Gt,ue,Oe){Oe===!0&&(pt*=ue,_t*=ue,Gt*=ue),gt.set(pt,_t,Gt,ue),tt.equals(gt)===!1&&(r.clearColor(pt,_t,Gt,ue),tt.copy(gt))},reset:function(){L=!1,$=null,tt.set(-1,0,0,0)}}}function n(){let L=!1,gt=!1,$=null,tt=null,pt=null;return{setReversed:function(_t){if(gt!==_t){let Gt=t.get("EXT_clip_control");gt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);let ue=pt;pt=null,this.setClear(ue)}gt=_t},getReversed:function(){return gt},setTest:function(_t){_t?st(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(_t){$!==_t&&!L&&(r.depthMask(_t),$=_t)},setFunc:function(_t){if(gt&&(_t=P1[_t]),tt!==_t){switch(_t){case Qu:r.depthFunc(r.NEVER);break;case ju:r.depthFunc(r.ALWAYS);break;case tf:r.depthFunc(r.LESS);break;case mo:r.depthFunc(r.LEQUAL);break;case ef:r.depthFunc(r.EQUAL);break;case nf:r.depthFunc(r.GEQUAL);break;case rf:r.depthFunc(r.GREATER);break;case sf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}tt=_t}},setLocked:function(_t){L=_t},setClear:function(_t){pt!==_t&&(gt&&(_t=1-_t),r.clearDepth(_t),pt=_t)},reset:function(){L=!1,$=null,tt=null,pt=null,gt=!1}}}function i(){let L=!1,gt=null,$=null,tt=null,pt=null,_t=null,Gt=null,ue=null,Oe=null;return{setTest:function(St){L||(St?st(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(St){gt!==St&&!L&&(r.stencilMask(St),gt=St)},setFunc:function(St,Pt,te){($!==St||tt!==Pt||pt!==te)&&(r.stencilFunc(St,Pt,te),$=St,tt=Pt,pt=te)},setOp:function(St,Pt,te){(_t!==St||Gt!==Pt||ue!==te)&&(r.stencilOp(St,Pt,te),_t=St,Gt=Pt,ue=te)},setLocked:function(St){L=St},setClear:function(St){Oe!==St&&(r.clearStencil(St),Oe=St)},reset:function(){L=!1,gt=null,$=null,tt=null,pt=null,_t=null,Gt=null,ue=null,Oe=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,u=[],g=null,_=!1,p=null,m=null,x=null,y=null,v=null,R=null,E=null,w=new Ut(0,0,0),C=0,S=!1,M=null,P=null,U=null,B=null,k=null,Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=J>=2);let it=null,I={},dt=r.getParameter(r.SCISSOR_BOX),Dt=r.getParameter(r.VIEWPORT),Kt=new xe().fromArray(dt),q=new xe().fromArray(Dt);function et(L,gt,$,tt){let pt=new Uint8Array(4),_t=r.createTexture();r.bindTexture(L,_t),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<$;Gt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(gt,0,r.RGBA,1,1,tt,0,r.RGBA,r.UNSIGNED_BYTE,pt):r.texImage2D(gt+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pt);return _t}let xt={};xt[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(r.DEPTH_TEST),o.setFunc(mo),zt(!1),V(Ym),st(r.CULL_FACE),N(di);function st(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Tt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Rt(L,gt){return f[L]!==gt?(r.bindFramebuffer(L,gt),f[L]=gt,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=gt),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ht(L,gt){let $=u,tt=!1;if(L){$=d.get(gt),$===void 0&&($=[],d.set(gt,$));let pt=L.textures;if($.length!==pt.length||$[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Gt=pt.length;_t<Gt;_t++)$[_t]=r.COLOR_ATTACHMENT0+_t;$.length=pt.length,tt=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,tt=!0);tt&&r.drawBuffers($)}function Qt(L){return g!==L?(r.useProgram(L),g=L,!0):!1}let kt={[ps]:r.FUNC_ADD,[jv]:r.FUNC_SUBTRACT,[tx]:r.FUNC_REVERSE_SUBTRACT};kt[ex]=r.MIN,kt[nx]=r.MAX;let Et={[ix]:r.ZERO,[rx]:r.ONE,[sx]:r.SRC_COLOR,[Ju]:r.SRC_ALPHA,[ux]:r.SRC_ALPHA_SATURATE,[cx]:r.DST_COLOR,[ax]:r.DST_ALPHA,[ox]:r.ONE_MINUS_SRC_COLOR,[Ku]:r.ONE_MINUS_SRC_ALPHA,[hx]:r.ONE_MINUS_DST_COLOR,[lx]:r.ONE_MINUS_DST_ALPHA,[fx]:r.CONSTANT_COLOR,[dx]:r.ONE_MINUS_CONSTANT_COLOR,[px]:r.CONSTANT_ALPHA,[mx]:r.ONE_MINUS_CONSTANT_ALPHA};function N(L,gt,$,tt,pt,_t,Gt,ue,Oe,St){if(L===di){_===!0&&(Tt(r.BLEND),_=!1);return}if(_===!1&&(st(r.BLEND),_=!0),L!==Qv){if(L!==p||St!==S){if((m!==ps||v!==ps)&&(r.blendEquation(r.FUNC_ADD),m=ps,v=ps),St)switch(L){case ho:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nr:r.blendFunc(r.ONE,r.ONE);break;case qm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ho:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case qm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,y=null,R=null,E=null,w.set(0,0,0),C=0,p=L,S=St}return}pt=pt||gt,_t=_t||$,Gt=Gt||tt,(gt!==m||pt!==v)&&(r.blendEquationSeparate(kt[gt],kt[pt]),m=gt,v=pt),($!==x||tt!==y||_t!==R||Gt!==E)&&(r.blendFuncSeparate(Et[$],Et[tt],Et[_t],Et[Gt]),x=$,y=tt,R=_t,E=Gt),(ue.equals(w)===!1||Oe!==C)&&(r.blendColor(ue.r,ue.g,ue.b,Oe),w.copy(ue),C=Oe),p=L,S=!1}function de(L,gt){L.side===Wn?Tt(r.CULL_FACE):st(r.CULL_FACE);let $=L.side===Sn;gt&&($=!$),zt($),L.blending===ho&&L.transparent===!1?N(di):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let tt=L.stencilWrite;a.setTest(tt),tt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),nt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function zt(L){M!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),M=L)}function V(L){L!==Jv?(st(r.CULL_FACE),L!==P&&(L===Ym?r.cullFace(r.BACK):L===Kv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),P=L}function Y(L){L!==U&&(H&&r.lineWidth(L),U=L)}function nt(L,gt,$){L?(st(r.POLYGON_OFFSET_FILL),(B!==gt||k!==$)&&(r.polygonOffset(gt,$),B=gt,k=$)):Tt(r.POLYGON_OFFSET_FILL)}function rt(L){L?st(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function A(L){L===void 0&&(L=r.TEXTURE0+Z-1),it!==L&&(r.activeTexture(L),it=L)}function b(L,gt,$){$===void 0&&(it===null?$=r.TEXTURE0+Z-1:$=it);let tt=I[$];tt===void 0&&(tt={type:void 0,texture:void 0},I[$]=tt),(tt.type!==L||tt.texture!==gt)&&(it!==$&&(r.activeTexture($),it=$),r.bindTexture(L,gt||xt[L]),tt.type=L,tt.texture=gt)}function z(){let L=I[it];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(L){Kt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Kt.copy(L))}function bt(L){q.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function jt(L,gt){let $=c.get(gt);$===void 0&&($=new WeakMap,c.set(gt,$));let tt=$.get(L);tt===void 0&&(tt=r.getUniformBlockIndex(gt,L.name),$.set(L,tt))}function Vt(L,gt){let tt=c.get(gt).get(L);l.get(gt)!==tt&&(r.uniformBlockBinding(gt,tt,L.__bindingPointIndex),l.set(gt,tt))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},it=null,I={},f={},d=new WeakMap,u=[],g=null,_=!1,p=null,m=null,x=null,y=null,v=null,R=null,E=null,w=new Ut(0,0,0),C=0,S=!1,M=null,P=null,U=null,B=null,k=null,Kt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:Tt,bindFramebuffer:Rt,drawBuffers:Ht,useProgram:Qt,setBlending:N,setMaterial:de,setFlipSided:zt,setCullFace:V,setLineWidth:Y,setPolygonOffset:nt,setScissorTest:rt,activeTexture:A,bindTexture:b,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:ft,texImage3D:Ot,updateUBOMapping:jt,uniformBlockBinding:Vt,texStorage2D:Xt,texStorage3D:ot,texSubImage2D:K,texSubImage3D:at,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:Nt,viewport:bt,reset:ce}}function Xg(r,t,e,n){let i=D1(n);switch(e){case l_:return r*t;case h_:return r*t;case u_:return r*t*2;case f_:return r*t/i.components*i.byteLength;case Rd:return r*t/i.components*i.byteLength;case d_:return r*t*2/i.components*i.byteLength;case Pd:return r*t*2/i.components*i.byteLength;case c_:return r*t*3/i.components*i.byteLength;case Si:return r*t*4/i.components*i.byteLength;case Id:return r*t*4/i.components*i.byteLength;case cc:case hc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case uc:case fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hf:case ff:return Math.max(r,16)*Math.max(t,8)/4;case cf:case uf:return Math.max(r,8)*Math.max(t,8)/2;case df:case pf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case mf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _f:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case vf:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case xf:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case yf:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Mf:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Sf:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case bf:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case wf:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Tf:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ef:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Af:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Cf:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Rf:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case dc:case Pf:case If:return Math.ceil(r/4)*Math.ceil(t/4)*16;case p_:case Df:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Lf:case Uf:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function D1(r){switch(r){case cr:case s_:return{byteLength:1,components:1};case Ua:case o_:case ii:return{byteLength:2,components:1};case Ad:case Cd:return{byteLength:2,components:4};case xs:case Ed:case or:return{byteLength:4,components:1};case a_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function L1(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return u?new OffscreenCanvas(A,b):gc("canvas")}function _(A,b,z){let j=1,Q=rt(A);if((Q.width>z||Q.height>z)&&(j=z/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let K=Math.floor(j*Q.width),at=Math.floor(j*Q.height);f===void 0&&(f=g(K,at));let ht=b?g(K,at):f;return ht.width=K,ht.height=at,ht.getContext("2d").drawImage(A,0,0,K,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+at+")."),ht}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function p(A){return A.generateMipmaps}function m(A){r.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(A,b,z,j,Q=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=b;if(b===r.RED&&(z===r.FLOAT&&(K=r.R32F),z===r.HALF_FLOAT&&(K=r.R16F),z===r.UNSIGNED_BYTE&&(K=r.R8)),b===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.R8UI),z===r.UNSIGNED_SHORT&&(K=r.R16UI),z===r.UNSIGNED_INT&&(K=r.R32UI),z===r.BYTE&&(K=r.R8I),z===r.SHORT&&(K=r.R16I),z===r.INT&&(K=r.R32I)),b===r.RG&&(z===r.FLOAT&&(K=r.RG32F),z===r.HALF_FLOAT&&(K=r.RG16F),z===r.UNSIGNED_BYTE&&(K=r.RG8)),b===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RG8UI),z===r.UNSIGNED_SHORT&&(K=r.RG16UI),z===r.UNSIGNED_INT&&(K=r.RG32UI),z===r.BYTE&&(K=r.RG8I),z===r.SHORT&&(K=r.RG16I),z===r.INT&&(K=r.RG32I)),b===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RGB8UI),z===r.UNSIGNED_SHORT&&(K=r.RGB16UI),z===r.UNSIGNED_INT&&(K=r.RGB32UI),z===r.BYTE&&(K=r.RGB8I),z===r.SHORT&&(K=r.RGB16I),z===r.INT&&(K=r.RGB32I)),b===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),z===r.UNSIGNED_INT&&(K=r.RGBA32UI),z===r.BYTE&&(K=r.RGBA8I),z===r.SHORT&&(K=r.RGBA16I),z===r.INT&&(K=r.RGBA32I)),b===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),b===r.RGBA){let at=Q?Gc:le.getTransfer(j);z===r.FLOAT&&(K=r.RGBA32F),z===r.HALF_FLOAT&&(K=r.RGBA16F),z===r.UNSIGNED_BYTE&&(K=at===ve?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(A,b){let z;return A?b===null||b===xs||b===vo?z=r.DEPTH24_STENCIL8:b===or?z=r.DEPTH32F_STENCIL8:b===Ua&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===xs||b===vo?z=r.DEPTH_COMPONENT24:b===or?z=r.DEPTH_COMPONENT32F:b===Ua&&(z=r.DEPTH_COMPONENT16),z}function R(A,b){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xn&&A.minFilter!==Oi?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function E(A){let b=A.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&h.delete(b)}function w(A){let b=A.target;b.removeEventListener("dispose",w),M(b)}function C(A){let b=n.get(A);if(b.__webglInit===void 0)return;let z=A.source,j=d.get(z);if(j){let Q=j[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(A),Object.keys(j).length===0&&d.delete(z)}n.remove(A)}function S(A){let b=n.get(A);r.deleteTexture(b.__webglTexture);let z=A.source,j=d.get(z);delete j[b.__cacheKey],o.memory.textures--}function M(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let Q=0;Q<b.__webglFramebuffer[j].length;Q++)r.deleteFramebuffer(b.__webglFramebuffer[j][Q]);else r.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)r.deleteFramebuffer(b.__webglFramebuffer[j]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=A.textures;for(let j=0,Q=z.length;j<Q;j++){let K=n.get(z[j]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(A)}let P=0;function U(){P=0}function B(){let A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function k(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function Z(A,b){let z=n.get(A);if(A.isVideoTexture&&Y(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){let j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,A,b);return}}e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+b)}function H(A,b){let z=n.get(A);if(A.version>0&&z.__version!==A.version){q(z,A,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+b)}function J(A,b){let z=n.get(A);if(A.version>0&&z.__version!==A.version){q(z,A,b);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+b)}function G(A,b){let z=n.get(A);if(A.version>0&&z.__version!==A.version){et(z,A,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+b)}let it={[La]:r.REPEAT,[_s]:r.CLAMP_TO_EDGE,[lf]:r.MIRRORED_REPEAT},I={[Xn]:r.NEAREST,[xx]:r.NEAREST_MIPMAP_NEAREST,[Ol]:r.NEAREST_MIPMAP_LINEAR,[Oi]:r.LINEAR,[_u]:r.LINEAR_MIPMAP_NEAREST,[vs]:r.LINEAR_MIPMAP_LINEAR},dt={[Sx]:r.NEVER,[Cx]:r.ALWAYS,[bx]:r.LESS,[g_]:r.LEQUAL,[wx]:r.EQUAL,[Ax]:r.GEQUAL,[Tx]:r.GREATER,[Ex]:r.NOTEQUAL};function Dt(A,b){if(b.type===or&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Oi||b.magFilter===_u||b.magFilter===Ol||b.magFilter===vs||b.minFilter===Oi||b.minFilter===_u||b.minFilter===Ol||b.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,it[b.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,it[b.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,it[b.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,I[b.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,I[b.minFilter]),b.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,dt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xn||b.minFilter!==Ol&&b.minFilter!==vs||b.type===or&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Kt(A,b){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",E));let j=b.source,Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));let K=k(b);if(K!==A.__cacheKey){Q[K]===void 0&&(Q[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[K].usedTimes++;let at=Q[A.__cacheKey];at!==void 0&&(Q[A.__cacheKey].usedTimes--,at.usedTimes===0&&S(b)),A.__cacheKey=K,A.__webglTexture=Q[K].texture}return z}function q(A,b,z){let j=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=r.TEXTURE_3D);let Q=Kt(A,b),K=b.source;e.bindTexture(j,A.__webglTexture,r.TEXTURE0+z);let at=n.get(K);if(K.version!==at.__version||Q===!0){e.activeTexture(r.TEXTURE0+z);let ht=le.getPrimaries(le.workingColorSpace),mt=b.colorSpace===Dr?null:le.getPrimaries(b.colorSpace),Xt=b.colorSpace===Dr||ht===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let ot=_(b.image,!1,i.maxTextureSize);ot=nt(b,ot);let ft=s.convert(b.format,b.colorSpace),Ot=s.convert(b.type),Nt=y(b.internalFormat,ft,Ot,b.colorSpace,b.isVideoTexture);Dt(j,b);let bt,jt=b.mipmaps,Vt=b.isVideoTexture!==!0,ce=at.__version===void 0||Q===!0,L=K.dataReady,gt=R(b,ot);if(b.isDepthTexture)Nt=v(b.format===xo,b.type),ce&&(Vt?e.texStorage2D(r.TEXTURE_2D,1,Nt,ot.width,ot.height):e.texImage2D(r.TEXTURE_2D,0,Nt,ot.width,ot.height,0,ft,Ot,null));else if(b.isDataTexture)if(jt.length>0){Vt&&ce&&e.texStorage2D(r.TEXTURE_2D,gt,Nt,jt[0].width,jt[0].height);for(let $=0,tt=jt.length;$<tt;$++)bt=jt[$],Vt?L&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,bt.width,bt.height,ft,Ot,bt.data):e.texImage2D(r.TEXTURE_2D,$,Nt,bt.width,bt.height,0,ft,Ot,bt.data);b.generateMipmaps=!1}else Vt?(ce&&e.texStorage2D(r.TEXTURE_2D,gt,Nt,ot.width,ot.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot.width,ot.height,ft,Ot,ot.data)):e.texImage2D(r.TEXTURE_2D,0,Nt,ot.width,ot.height,0,ft,Ot,ot.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Vt&&ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,Nt,jt[0].width,jt[0].height,ot.depth);for(let $=0,tt=jt.length;$<tt;$++)if(bt=jt[$],b.format!==Si)if(ft!==null)if(Vt){if(L)if(b.layerUpdates.size>0){let pt=Xg(bt.width,bt.height,b.format,b.type);for(let _t of b.layerUpdates){let Gt=bt.data.subarray(_t*pt/bt.data.BYTES_PER_ELEMENT,(_t+1)*pt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,_t,bt.width,bt.height,1,ft,Gt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,bt.width,bt.height,ot.depth,ft,bt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Nt,bt.width,bt.height,ot.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,bt.width,bt.height,ot.depth,ft,Ot,bt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,Nt,bt.width,bt.height,ot.depth,0,ft,Ot,bt.data)}else{Vt&&ce&&e.texStorage2D(r.TEXTURE_2D,gt,Nt,jt[0].width,jt[0].height);for(let $=0,tt=jt.length;$<tt;$++)bt=jt[$],b.format!==Si?ft!==null?Vt?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,bt.width,bt.height,ft,bt.data):e.compressedTexImage2D(r.TEXTURE_2D,$,Nt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?L&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,bt.width,bt.height,ft,Ot,bt.data):e.texImage2D(r.TEXTURE_2D,$,Nt,bt.width,bt.height,0,ft,Ot,bt.data)}else if(b.isDataArrayTexture)if(Vt){if(ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,Nt,ot.width,ot.height,ot.depth),L)if(b.layerUpdates.size>0){let $=Xg(ot.width,ot.height,b.format,b.type);for(let tt of b.layerUpdates){let pt=ot.data.subarray(tt*$/ot.data.BYTES_PER_ELEMENT,(tt+1)*$/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,ot.width,ot.height,1,ft,Ot,pt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,ft,Ot,ot.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,ot.width,ot.height,ot.depth,0,ft,Ot,ot.data);else if(b.isData3DTexture)Vt?(ce&&e.texStorage3D(r.TEXTURE_3D,gt,Nt,ot.width,ot.height,ot.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,ft,Ot,ot.data)):e.texImage3D(r.TEXTURE_3D,0,Nt,ot.width,ot.height,ot.depth,0,ft,Ot,ot.data);else if(b.isFramebufferTexture){if(ce)if(Vt)e.texStorage2D(r.TEXTURE_2D,gt,Nt,ot.width,ot.height);else{let $=ot.width,tt=ot.height;for(let pt=0;pt<gt;pt++)e.texImage2D(r.TEXTURE_2D,pt,Nt,$,tt,0,ft,Ot,null),$>>=1,tt>>=1}}else if(jt.length>0){if(Vt&&ce){let $=rt(jt[0]);e.texStorage2D(r.TEXTURE_2D,gt,Nt,$.width,$.height)}for(let $=0,tt=jt.length;$<tt;$++)bt=jt[$],Vt?L&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,ft,Ot,bt):e.texImage2D(r.TEXTURE_2D,$,Nt,ft,Ot,bt);b.generateMipmaps=!1}else if(Vt){if(ce){let $=rt(ot);e.texStorage2D(r.TEXTURE_2D,gt,Nt,$.width,$.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,Ot,ot)}else e.texImage2D(r.TEXTURE_2D,0,Nt,ft,Ot,ot);p(b)&&m(j),at.__version=K.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function et(A,b,z){if(b.image.length!==6)return;let j=Kt(A,b),Q=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+z);let K=n.get(Q);if(Q.version!==K.__version||j===!0){e.activeTexture(r.TEXTURE0+z);let at=le.getPrimaries(le.workingColorSpace),ht=b.colorSpace===Dr?null:le.getPrimaries(b.colorSpace),mt=b.colorSpace===Dr||at===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Xt=b.isCompressedTexture||b.image[0].isCompressedTexture,ot=b.image[0]&&b.image[0].isDataTexture,ft=[];for(let tt=0;tt<6;tt++)!Xt&&!ot?ft[tt]=_(b.image[tt],!0,i.maxCubemapSize):ft[tt]=ot?b.image[tt].image:b.image[tt],ft[tt]=nt(b,ft[tt]);let Ot=ft[0],Nt=s.convert(b.format,b.colorSpace),bt=s.convert(b.type),jt=y(b.internalFormat,Nt,bt,b.colorSpace),Vt=b.isVideoTexture!==!0,ce=K.__version===void 0||j===!0,L=Q.dataReady,gt=R(b,Ot);Dt(r.TEXTURE_CUBE_MAP,b);let $;if(Xt){Vt&&ce&&e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,jt,Ot.width,Ot.height);for(let tt=0;tt<6;tt++){$=ft[tt].mipmaps;for(let pt=0;pt<$.length;pt++){let _t=$[pt];b.format!==Si?Nt!==null?Vt?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,_t.width,_t.height,Nt,_t.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,jt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,_t.width,_t.height,Nt,bt,_t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,jt,_t.width,_t.height,0,Nt,bt,_t.data)}}}else{if($=b.mipmaps,Vt&&ce){$.length>0&&gt++;let tt=rt(ft[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,gt,jt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ot){Vt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ft[tt].width,ft[tt].height,Nt,bt,ft[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,jt,ft[tt].width,ft[tt].height,0,Nt,bt,ft[tt].data);for(let pt=0;pt<$.length;pt++){let Gt=$[pt].image[tt].image;Vt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,Gt.width,Gt.height,Nt,bt,Gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,jt,Gt.width,Gt.height,0,Nt,bt,Gt.data)}}else{Vt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Nt,bt,ft[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,jt,Nt,bt,ft[tt]);for(let pt=0;pt<$.length;pt++){let _t=$[pt];Vt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,Nt,bt,_t.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,jt,Nt,bt,_t.image[tt])}}}p(b)&&m(r.TEXTURE_CUBE_MAP),K.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function xt(A,b,z,j,Q,K){let at=s.convert(z.format,z.colorSpace),ht=s.convert(z.type),mt=y(z.internalFormat,at,ht,z.colorSpace),Xt=n.get(b),ot=n.get(z);if(ot.__renderTarget=b,!Xt.__hasExternalTextures){let ft=Math.max(1,b.width>>K),Ot=Math.max(1,b.height>>K);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,mt,ft,Ot,b.depth,0,at,ht,null):e.texImage2D(Q,K,mt,ft,Ot,0,at,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),V(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,Q,ot.__webglTexture,0,zt(b)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,Q,ot.__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(A,b,z){if(r.bindRenderbuffer(r.RENDERBUFFER,A),b.depthBuffer){let j=b.depthTexture,Q=j&&j.isDepthTexture?j.type:null,K=v(b.stencilBuffer,Q),at=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=zt(b);V(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,K,b.width,b.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,K,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,K,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,at,r.RENDERBUFFER,A)}else{let j=b.textures;for(let Q=0;Q<j.length;Q++){let K=j[Q],at=s.convert(K.format,K.colorSpace),ht=s.convert(K.type),mt=y(K.internalFormat,at,ht,K.colorSpace),Xt=zt(b);z&&V(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,mt,b.width,b.height):V(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,mt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,mt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Tt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z(b.depthTexture,0);let Q=j.__webglTexture,K=zt(b);if(b.depthTexture.format===uo)V(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(b.depthTexture.format===xo)V(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Rt(A){let b=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let j=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=j}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Tt(b.__webglFramebuffer,A)}else if(z){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=r.createRenderbuffer(),st(b.__webglDepthbuffer[j],A,!1);else{let Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),st(b.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Q)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(A,b,z){let j=n.get(A);b!==void 0&&xt(j.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Rt(A)}function Qt(A){let b=A.texture,z=n.get(A),j=n.get(b);A.addEventListener("dispose",w);let Q=A.textures,K=A.isWebGLCubeRenderTarget===!0,at=Q.length>1;if(at||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=b.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ht]=[];for(let mt=0;mt<b.mipmaps.length;mt++)z.__webglFramebuffer[ht][mt]=r.createFramebuffer()}else z.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)z.__webglFramebuffer[ht]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(at)for(let ht=0,mt=Q.length;ht<mt;ht++){let Xt=n.get(Q[ht]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&V(A)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){let mt=Q[ht];z.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ht]);let Xt=s.convert(mt.format,mt.colorSpace),ot=s.convert(mt.type),ft=y(mt.internalFormat,Xt,ot,mt.colorSpace,A.isXRRenderTarget===!0),Ot=zt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot,ft,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,z.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),st(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Dt(r.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)xt(z.__webglFramebuffer[ht][mt],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else xt(z.__webglFramebuffer[ht],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(b)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let ht=0,mt=Q.length;ht<mt;ht++){let Xt=Q[ht],ot=n.get(Xt);e.bindTexture(r.TEXTURE_2D,ot.__webglTexture),Dt(r.TEXTURE_2D,Xt),xt(z.__webglFramebuffer,A,Xt,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),p(Xt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,j.__webglTexture),Dt(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)xt(z.__webglFramebuffer[mt],A,b,r.COLOR_ATTACHMENT0,ht,mt);else xt(z.__webglFramebuffer,A,b,r.COLOR_ATTACHMENT0,ht,0);p(b)&&m(ht),e.unbindTexture()}A.depthBuffer&&Rt(A)}function kt(A){let b=A.textures;for(let z=0,j=b.length;z<j;z++){let Q=b[z];if(p(Q)){let K=x(A),at=n.get(Q).__webglTexture;e.bindTexture(K,at),m(K),e.unbindTexture()}}}let Et=[],N=[];function de(A){if(A.samples>0){if(V(A)===!1){let b=A.textures,z=A.width,j=A.height,Q=r.COLOR_BUFFER_BIT,K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=n.get(A),ht=b.length>1;if(ht)for(let mt=0;mt<b.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let mt=0;mt<b.length;mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,at.__webglColorRenderbuffer[mt]);let Xt=n.get(b[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xt,0)}r.blitFramebuffer(0,0,z,j,0,0,z,j,Q,r.NEAREST),l===!0&&(Et.length=0,N.length=0,Et.push(r.COLOR_ATTACHMENT0+mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Et.push(K),N.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let mt=0;mt<b.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,at.__webglColorRenderbuffer[mt]);let Xt=n.get(b[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,Xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function zt(A){return Math.min(i.maxSamples,A.samples)}function V(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Y(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function nt(A,b){let z=A.colorSpace,j=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Lo&&z!==Dr&&(le.getTransfer(z)===ve?(j!==Si||Q!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function rt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=Ht,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=V}function U1(r,t){function e(n,i=Dr){let s,o=le.getTransfer(i);if(n===cr)return r.UNSIGNED_BYTE;if(n===Ad)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Cd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===a_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===s_)return r.BYTE;if(n===o_)return r.SHORT;if(n===Ua)return r.UNSIGNED_SHORT;if(n===Ed)return r.INT;if(n===xs)return r.UNSIGNED_INT;if(n===or)return r.FLOAT;if(n===ii)return r.HALF_FLOAT;if(n===l_)return r.ALPHA;if(n===c_)return r.RGB;if(n===Si)return r.RGBA;if(n===h_)return r.LUMINANCE;if(n===u_)return r.LUMINANCE_ALPHA;if(n===uo)return r.DEPTH_COMPONENT;if(n===xo)return r.DEPTH_STENCIL;if(n===f_)return r.RED;if(n===Rd)return r.RED_INTEGER;if(n===d_)return r.RG;if(n===Pd)return r.RG_INTEGER;if(n===Id)return r.RGBA_INTEGER;if(n===cc||n===hc||n===uc||n===fc)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===cc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===cc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cf||n===hf||n===uf||n===ff)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===cf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ff)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===df||n===pf||n===mf)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===df||n===pf)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gf||n===_f||n===vf||n===xf||n===yf||n===Mf||n===Sf||n===bf||n===wf||n===Tf||n===Ef||n===Af||n===Cf||n===Rf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===gf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_f)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ef)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Af)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dc||n===Pf||n===If)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===dc)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===If)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===p_||n===Df||n===Lf||n===Uf)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===dc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Df)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Zf=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fn=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},N1={type:"move"},Ra=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},O1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F1=`
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

}`,$f=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new ei,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ce({vertexShader:O1,fragmentShader:F1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new bo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jf=class extends Or{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null,_=new $f,p=e.getContextAttributes(),m=null,x=null,y=[],v=[],R=new ut,E=null,w=new un;w.viewport=new xe;let C=new un;C.viewport=new xe;let S=[w,C],M=new Zf,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=y[q];return et===void 0&&(et=new Ra,y[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=y[q];return et===void 0&&(et=new Ra,y[q]=et),et.getGripSpace()},this.getHand=function(q){let et=y[q];return et===void 0&&(et=new Ra,y[q]=et),et.getHandSpace()};function B(q){let et=v.indexOf(q.inputSource);if(et===-1)return;let xt=y[et];xt!==void 0&&(xt.update(q.inputSource,q.frame,c||o),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Z);for(let q=0;q<y.length;q++){let et=v[q];et!==null&&(v[q]=null,y[q].disconnect(et))}P=null,U=null,_.reset(),t.setRenderTarget(m),u=null,d=null,f=null,i=null,x=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){let et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new dn(u.framebufferWidth,u.framebufferHeight,{format:Si,type:cr,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,xt=null,st=null;p.depth&&(st=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?xo:uo,xt=p.stencil?vo:xs);let Tt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};f=new XRWebGLBinding(i,e),d=f.createProjectionLayer(Tt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new dn(d.textureWidth,d.textureHeight,{format:Si,type:cr,depthTexture:new Tc(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(q){for(let et=0;et<q.removed.length;et++){let xt=q.removed[et],st=v.indexOf(xt);st>=0&&(v[st]=null,y[st].disconnect(xt))}for(let et=0;et<q.added.length;et++){let xt=q.added[et],st=v.indexOf(xt);if(st===-1){for(let Rt=0;Rt<y.length;Rt++)if(Rt>=v.length){v.push(xt),st=Rt;break}else if(v[Rt]===null){v[Rt]=xt,st=Rt;break}if(st===-1)break}let Tt=y[st];Tt&&Tt.connect(xt)}}let H=new D,J=new D;function G(q,et,xt){H.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(xt.matrixWorld);let st=H.distanceTo(J),Tt=et.projectionMatrix.elements,Rt=xt.projectionMatrix.elements,Ht=Tt[14]/(Tt[10]-1),Qt=Tt[14]/(Tt[10]+1),kt=(Tt[9]+1)/Tt[5],Et=(Tt[9]-1)/Tt[5],N=(Tt[8]-1)/Tt[0],de=(Rt[8]+1)/Rt[0],zt=Ht*N,V=Ht*de,Y=st/(-N+de),nt=Y*-N;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(nt),q.translateZ(Y),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let rt=Ht+Y,A=Qt+Y,b=zt-nt,z=V+(st-nt),j=kt*Qt/A*rt,Q=Et*Qt/A*rt;q.projectionMatrix.makePerspective(b,z,j,Q,rt,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let et=q.near,xt=q.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),M.near=C.near=w.near=et,M.far=C.far=w.far=xt,(P!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,U=M.far),w.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,M.layers.mask=w.layers.mask|C.layers.mask;let st=q.parent,Tt=M.cameras;it(M,st);for(let Rt=0;Rt<Tt.length;Rt++)it(Tt[Rt],st);Tt.length===2?G(M,w,C):M.projectionMatrix.copy(w.projectionMatrix),I(q,M,st)};function I(q,et,xt){xt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=yo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let dt=null;function Dt(q,et){if(h=et.getViewerPose(c||o),g=et,h!==null){let xt=h.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let st=!1;xt.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Rt=0;Rt<xt.length;Rt++){let Ht=xt[Rt],Qt=null;if(u!==null)Qt=u.getViewport(Ht);else{let Et=f.getViewSubImage(d,Ht);Qt=Et.viewport,Rt===0&&(t.setRenderTargetTextures(x,Et.colorTexture,d.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(x))}let kt=S[Rt];kt===void 0&&(kt=new un,kt.layers.enable(Rt),kt.viewport=new xe,S[Rt]=kt),kt.matrix.fromArray(Ht.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ht.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Rt===0&&(M.matrix.copy(kt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(kt)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Rt=f.getDepthInformation(xt[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,i.renderState)}}for(let xt=0;xt<y.length;xt++){let st=v[xt],Tt=y[xt];st!==null&&Tt!==void 0&&Tt.update(st,et,c||o)}dt&&dt(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let Kt=new M_;Kt.setAnimationLoop(Dt),this.setAnimationLoop=function(q){dt=q},this.dispose=function(){}}},fs=new Fi,B1=new Ie;function z1(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,y_(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=t.get(m),y=x.envMap,v=x.envMapRotation;y&&(p.envMap.value=y,fs.copy(v),fs.x*=-1,fs.y*=-1,fs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),p.envMapRotation.value.setFromMatrix4(B1.makeRotationFromEuler(fs)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k1(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){let v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(g(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",p));let R=y.program;n.updateUBOMapping(x,R);let E=t.render.frame;s[x.id]!==E&&(d(x),s[x.id]=E)}function h(x){let y=f();x.__bindingPointIndex=y;let v=r.createBuffer(),R=x.__size,E=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,R,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let y=i[x.id],v=x.uniforms,R=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,w=v.length;E<w;E++){let C=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,M=C.length;S<M;S++){let P=C[S];if(u(P,E,S,R)===!0){let U=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],k=0;for(let Z=0;Z<B.length;Z++){let H=B[Z],J=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,U+k,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,k),k+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(x,y,v,R){let E=x.value,w=y+"_"+v;if(R[w]===void 0)return typeof E=="number"||typeof E=="boolean"?R[w]=E:R[w]=E.clone(),!0;{let C=R[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return R[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(x){let y=x.uniforms,v=0,R=16;for(let w=0,C=y.length;w<C;w++){let S=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,P=S.length;M<P;M++){let U=S[M],B=Array.isArray(U.value)?U.value:[U.value];for(let k=0,Z=B.length;k<Z;k++){let H=B[k],J=_(H),G=v%R,it=G%J.boundary,I=G+it;v+=it,I!==0&&R-I<J.storage&&(v+=R-I),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=J.storage}}}let E=v%R;return E>0&&(v+=R-E),x.__size=v,x.__cache={},this}function _(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){let y=x.target;y.removeEventListener("dispose",p);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(let x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}var Ec=class{constructor(t={}){let{canvas:e=Xx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),_=new Int32Array(4),p=null,m=null,x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Lr,this.toneMappingExposure=1;let v=this,R=!1,E=0,w=0,C=null,S=-1,M=null,P=new xe,U=new xe,B=null,k=new Ut(0),Z=0,H=e.width,J=e.height,G=1,it=null,I=null,dt=new xe(0,0,H,J),Dt=new xe(0,0,H,J),Kt=!1,q=new Na,et=!1,xt=!1,st=new Ie,Tt=new Ie,Rt=new D,Ht=new xe,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function Et(){return C===null?G:1}let N=n;function de(T,O){return e.getContext(T,O)}try{let T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xd}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),N===null){let O="webgl2";if(N=de(O,T),N===null)throw de(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let zt,V,Y,nt,rt,A,b,z,j,Q,K,at,ht,mt,Xt,ot,ft,Ot,Nt,bt,jt,Vt,ce,L;function gt(){zt=new nb(N),zt.init(),Vt=new U1(N,zt),V=new JS(N,zt,t,Vt),Y=new I1(N,zt),V.reverseDepthBuffer&&d&&Y.buffers.depth.setReversed(!0),nt=new sb(N),rt=new v1,A=new L1(N,zt,Y,rt,V,Vt,nt),b=new QS(v),z=new eb(v),j=new fy(N),ce=new ZS(N,j),Q=new ib(N,j,nt,ce),K=new ab(N,Q,j,nt),Nt=new ob(N,V,A),ot=new KS(rt),at=new _1(v,b,z,zt,V,ce,ot),ht=new z1(v,rt),mt=new y1,Xt=new E1(zt),Ot=new qS(v,b,z,Y,K,u,l),ft=new R1(v,K,V),L=new k1(N,nt,V,Y),bt=new $S(N,zt,nt),jt=new rb(N,zt,nt),nt.programs=at.programs,v.capabilities=V,v.extensions=zt,v.properties=rt,v.renderLists=mt,v.shadowMap=ft,v.state=Y,v.info=nt}gt();let $=new Jf(v,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let T=zt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=zt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(H,J,!1))},this.getSize=function(T){return T.set(H,J)},this.setSize=function(T,O,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,J=O,e.width=Math.floor(T*G),e.height=Math.floor(O*G),W===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(H*G,J*G).floor()},this.setDrawingBufferSize=function(T,O,W){H=T,J=O,G=W,e.width=Math.floor(T*W),e.height=Math.floor(O*W),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(dt)},this.setViewport=function(T,O,W,X){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,O,W,X),Y.viewport(P.copy(dt).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(Dt)},this.setScissor=function(T,O,W,X){T.isVector4?Dt.set(T.x,T.y,T.z,T.w):Dt.set(T,O,W,X),Y.scissor(U.copy(Dt).multiplyScalar(G).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(T){Y.setScissorTest(Kt=T)},this.setOpaqueSort=function(T){it=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(T=!0,O=!0,W=!0){let X=0;if(T){let F=!1;if(C!==null){let lt=C.texture.format;F=lt===Id||lt===Pd||lt===Rd}if(F){let lt=C.texture.type,ct=lt===cr||lt===xs||lt===Ua||lt===vo||lt===Ad||lt===Cd,vt=Ot.getClearColor(),wt=Ot.getClearAlpha(),Wt=vt.r,Zt=vt.g,Ct=vt.b;ct?(g[0]=Wt,g[1]=Zt,g[2]=Ct,g[3]=wt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Wt,_[1]=Zt,_[2]=Ct,_[3]=wt,N.clearBufferiv(N.COLOR,0,_))}else X|=N.COLOR_BUFFER_BIT}O&&(X|=N.DEPTH_BUFFER_BIT),W&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),mt.dispose(),Xt.dispose(),rt.dispose(),b.dispose(),z.dispose(),K.dispose(),ce.dispose(),L.dispose(),at.dispose(),$.dispose(),$.removeEventListener("sessionstart",yt),$.removeEventListener("sessionend",qt),It.stop()};function tt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let T=nt.autoReset,O=ft.enabled,W=ft.autoUpdate,X=ft.needsUpdate,F=ft.type;gt(),nt.autoReset=T,ft.enabled=O,ft.autoUpdate=W,ft.needsUpdate=X,ft.type=F}function _t(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Gt(T){let O=T.target;O.removeEventListener("dispose",Gt),ue(O)}function ue(T){Oe(T),rt.remove(T)}function Oe(T){let O=rt.get(T).programs;O!==void 0&&(O.forEach(function(W){at.releaseProgram(W)}),T.isShaderMaterial&&at.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,W,X,F,lt){O===null&&(O=Qt);let ct=F.isMesh&&F.matrixWorld.determinant()<0,vt=Yn(T,O,W,X,F);Y.setMaterial(X,ct);let wt=W.index,Wt=1;if(X.wireframe===!0){if(wt=Q.getWireframeAttribute(W),wt===void 0)return;Wt=2}let Zt=W.drawRange,Ct=W.attributes.position,Jt=Zt.start*Wt,fe=(Zt.start+Zt.count)*Wt;lt!==null&&(Jt=Math.max(Jt,lt.start*Wt),fe=Math.min(fe,(lt.start+lt.count)*Wt)),wt!==null?(Jt=Math.max(Jt,0),fe=Math.min(fe,wt.count)):Ct!=null&&(Jt=Math.max(Jt,0),fe=Math.min(fe,Ct.count));let me=fe-Jt;if(me<0||me===1/0)return;ce.setup(F,X,vt,W,wt);let Ge,ge=bt;if(wt!==null&&(Ge=j.get(wt),ge=jt,ge.setIndex(Ge)),F.isMesh)X.wireframe===!0?(Y.setLineWidth(X.wireframeLinewidth*Et()),ge.setMode(N.LINES)):ge.setMode(N.TRIANGLES);else if(F.isLine){let Lt=X.linewidth;Lt===void 0&&(Lt=1),Y.setLineWidth(Lt*Et()),F.isLineSegments?ge.setMode(N.LINES):F.isLineLoop?ge.setMode(N.LINE_LOOP):ge.setMode(N.LINE_STRIP)}else F.isPoints?ge.setMode(N.POINTS):F.isSprite&&ge.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ge.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))ge.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Lt=F._multiDrawStarts,Hi=F._multiDrawCounts,_e=F._multiDrawCount,mi=wt?j.get(wt).bytesPerElement:1,As=rt.get(X).currentProgram.getUniforms();for(let qn=0;qn<_e;qn++)As.setValue(N,"_gl_DrawID",qn),ge.render(Lt[qn]/mi,Hi[qn])}else if(F.isInstancedMesh)ge.renderInstances(Jt,me,F.count);else if(W.isInstancedBufferGeometry){let Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Hi=Math.min(W.instanceCount,Lt);ge.renderInstances(Jt,me,Hi)}else ge.render(Jt,me)};function St(T,O,W){T.transparent===!0&&T.side===Wn&&T.forceSinglePass===!1?(T.side=Sn,T.needsUpdate=!0,ye(T,O,W),T.side=Ur,T.needsUpdate=!0,ye(T,O,W),T.side=Wn):ye(T,O,W)}this.compile=function(T,O,W=null){W===null&&(W=T),m=Xt.get(W),m.init(O),y.push(m),W.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),T!==W&&T.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();let X=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let lt=F.material;if(lt)if(Array.isArray(lt))for(let ct=0;ct<lt.length;ct++){let vt=lt[ct];St(vt,W,F),X.add(vt)}else St(lt,W,F),X.add(lt)}),y.pop(),m=null,X},this.compileAsync=function(T,O,W=null){let X=this.compile(T,O,W);return new Promise(F=>{function lt(){if(X.forEach(function(ct){rt.get(ct).currentProgram.isReady()&&X.delete(ct)}),X.size===0){F(T);return}setTimeout(lt,10)}zt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Pt=null;function te(T){Pt&&Pt(T)}function yt(){It.stop()}function qt(){It.start()}let It=new M_;It.setAnimationLoop(te),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(T){Pt=T,$.setAnimationLoop(T),T===null?It.stop():It.start()},$.addEventListener("sessionstart",yt),$.addEventListener("sessionend",qt),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,C),m=Xt.get(T,y.length),m.init(O),y.push(m),Tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(Tt),xt=this.localClippingEnabled,et=ot.init(this.clippingPlanes,xt),p=mt.get(T,x.length),p.init(),x.push(p),$.enabled===!0&&$.isPresenting===!0){let lt=v.xr.getDepthSensingMesh();lt!==null&&Yt(lt,O,-1/0,v.sortObjects)}Yt(T,O,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(it,I),kt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,kt&&Ot.addToRenderList(p,T),this.info.render.frame++,et===!0&&ot.beginShadows();let W=m.state.shadowsArray;ft.render(W,T,O),et===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=p.opaque,F=p.transmissive;if(m.setupLights(),O.isArrayCamera){let lt=O.cameras;if(F.length>0)for(let ct=0,vt=lt.length;ct<vt;ct++){let wt=lt[ct];ie(X,F,T,wt)}kt&&Ot.render(T);for(let ct=0,vt=lt.length;ct<vt;ct++){let wt=lt[ct];ke(p,T,wt,wt.viewport)}}else F.length>0&&ie(X,F,T,O),kt&&Ot.render(T),ke(p,T,O);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,O),ce.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],et===!0&&ot.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function Yt(T,O,W,X){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){X&&Ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Tt);let ct=K.update(T),vt=T.material;vt.visible&&p.push(T,ct,vt,W,Ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){let ct=K.update(T),vt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ht.copy(T.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ht.copy(ct.boundingSphere.center)),Ht.applyMatrix4(T.matrixWorld).applyMatrix4(Tt)),Array.isArray(vt)){let wt=ct.groups;for(let Wt=0,Zt=wt.length;Wt<Zt;Wt++){let Ct=wt[Wt],Jt=vt[Ct.materialIndex];Jt&&Jt.visible&&p.push(T,ct,Jt,W,Ht.z,Ct)}}else vt.visible&&p.push(T,ct,vt,W,Ht.z,null)}}let lt=T.children;for(let ct=0,vt=lt.length;ct<vt;ct++)Yt(lt[ct],O,W,X)}function ke(T,O,W,X){let F=T.opaque,lt=T.transmissive,ct=T.transparent;m.setupLightsView(W),et===!0&&ot.setGlobalState(v.clippingPlanes,W),X&&Y.viewport(P.copy(X)),F.length>0&&be(F,O,W),lt.length>0&&be(lt,O,W),ct.length>0&&be(ct,O,W),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function ie(T,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new dn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?ii:cr,minFilter:vs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let lt=m.state.transmissionRenderTarget[X.id],ct=X.viewport||P;lt.setSize(ct.z,ct.w);let vt=v.getRenderTarget();v.setRenderTarget(lt),v.getClearColor(k),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),kt&&Ot.render(W);let wt=v.toneMapping;v.toneMapping=Lr;let Wt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),et===!0&&ot.setGlobalState(v.clippingPlanes,X),be(T,W,X),A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ct=0,Jt=O.length;Ct<Jt;Ct++){let fe=O[Ct],me=fe.object,Ge=fe.geometry,ge=fe.material,Lt=fe.group;if(ge.side===Wn&&me.layers.test(X.layers)){let Hi=ge.side;ge.side=Sn,ge.needsUpdate=!0,$e(me,W,X,Ge,ge,Lt),ge.side=Hi,ge.needsUpdate=!0,Zt=!0}}Zt===!0&&(A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt))}v.setRenderTarget(vt),v.setClearColor(k,Z),Wt!==void 0&&(X.viewport=Wt),v.toneMapping=wt}function be(T,O,W){let X=O.isScene===!0?O.overrideMaterial:null;for(let F=0,lt=T.length;F<lt;F++){let ct=T[F],vt=ct.object,wt=ct.geometry,Wt=X===null?ct.material:X,Zt=ct.group;vt.layers.test(W.layers)&&$e(vt,O,W,wt,Wt,Zt)}}function $e(T,O,W,X,F,lt){T.onBeforeRender(v,O,W,X,F,lt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(v,O,W,X,T,lt),F.transparent===!0&&F.side===Wn&&F.forceSinglePass===!1?(F.side=Sn,F.needsUpdate=!0,v.renderBufferDirect(W,O,X,F,T,lt),F.side=Ur,F.needsUpdate=!0,v.renderBufferDirect(W,O,X,F,T,lt),F.side=Wn):v.renderBufferDirect(W,O,X,F,T,lt),T.onAfterRender(v,O,W,X,F,lt)}function ye(T,O,W){O.isScene!==!0&&(O=Qt);let X=rt.get(T),F=m.state.lights,lt=m.state.shadowsArray,ct=F.state.version,vt=at.getParameters(T,F.state,lt,O,W),wt=at.getProgramCacheKey(vt),Wt=X.programs;X.environment=T.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(T.isMeshStandardMaterial?z:b).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Wt===void 0&&(T.addEventListener("dispose",Gt),Wt=new Map,X.programs=Wt);let Zt=Wt.get(wt);if(Zt!==void 0){if(X.currentProgram===Zt&&X.lightsStateVersion===ct)return pe(T,vt),Zt}else vt.uniforms=at.getUniforms(T),T.onBeforeCompile(vt,v),Zt=at.acquireProgram(vt,wt),Wt.set(wt,Zt),X.uniforms=vt.uniforms;let Ct=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ct.clippingPlanes=ot.uniform),pe(T,vt),X.needsLights=wn(T),X.lightsStateVersion=ct,X.needsLights&&(Ct.ambientLightColor.value=F.state.ambient,Ct.lightProbe.value=F.state.probe,Ct.directionalLights.value=F.state.directional,Ct.directionalLightShadows.value=F.state.directionalShadow,Ct.spotLights.value=F.state.spot,Ct.spotLightShadows.value=F.state.spotShadow,Ct.rectAreaLights.value=F.state.rectArea,Ct.ltc_1.value=F.state.rectAreaLTC1,Ct.ltc_2.value=F.state.rectAreaLTC2,Ct.pointLights.value=F.state.point,Ct.pointLightShadows.value=F.state.pointShadow,Ct.hemisphereLights.value=F.state.hemi,Ct.directionalShadowMap.value=F.state.directionalShadowMap,Ct.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ct.spotShadowMap.value=F.state.spotShadowMap,Ct.spotLightMatrix.value=F.state.spotLightMatrix,Ct.spotLightMap.value=F.state.spotLightMap,Ct.pointShadowMap.value=F.state.pointShadowMap,Ct.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=Zt,X.uniformsList=null,Zt}function Me(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=po.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function pe(T,O){let W=rt.get(T);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Yn(T,O,W,X,F){O.isScene!==!0&&(O=Qt),A.resetTextureUnits();let lt=O.fog,ct=X.isMeshStandardMaterial?O.environment:null,vt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Lo,wt=(X.isMeshStandardMaterial?z:b).get(X.envMap||ct),Wt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Zt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ct=!!W.morphAttributes.position,Jt=!!W.morphAttributes.normal,fe=!!W.morphAttributes.color,me=Lr;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(me=v.toneMapping);let Ge=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ge=Ge!==void 0?Ge.length:0,Lt=rt.get(X),Hi=m.state.lights;if(et===!0&&(xt===!0||T!==M)){let ri=T===M&&X.id===S;ot.setState(X,T,ri)}let _e=!1;X.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Hi.state.version||Lt.outputColorSpace!==vt||F.isBatchedMesh&&Lt.batching===!1||!F.isBatchedMesh&&Lt.batching===!0||F.isBatchedMesh&&Lt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Lt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Lt.instancing===!1||!F.isInstancedMesh&&Lt.instancing===!0||F.isSkinnedMesh&&Lt.skinning===!1||!F.isSkinnedMesh&&Lt.skinning===!0||F.isInstancedMesh&&Lt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Lt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Lt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Lt.instancingMorph===!1&&F.morphTexture!==null||Lt.envMap!==wt||X.fog===!0&&Lt.fog!==lt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ot.numPlanes||Lt.numIntersection!==ot.numIntersection)||Lt.vertexAlphas!==Wt||Lt.vertexTangents!==Zt||Lt.morphTargets!==Ct||Lt.morphNormals!==Jt||Lt.morphColors!==fe||Lt.toneMapping!==me||Lt.morphTargetsCount!==ge)&&(_e=!0):(_e=!0,Lt.__version=X.version);let mi=Lt.currentProgram;_e===!0&&(mi=ye(X,O,F));let As=!1,qn=!1,Vo=!1,Ee=mi.getUniforms(),Ai=Lt.uniforms;if(Y.useProgram(mi.program)&&(As=!0,qn=!0,Vo=!0),X.id!==S&&(S=X.id,qn=!0),As||M!==T){Y.buffers.depth.getReversed()?(st.copy(T.projectionMatrix),qx(st),Zx(st),Ee.setValue(N,"projectionMatrix",st)):Ee.setValue(N,"projectionMatrix",T.projectionMatrix),Ee.setValue(N,"viewMatrix",T.matrixWorldInverse);let fr=Ee.map.cameraPosition;fr!==void 0&&fr.setValue(N,Rt.setFromMatrixPosition(T.matrixWorld)),V.logarithmicDepthBuffer&&Ee.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ee.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,qn=!0,Vo=!0)}if(F.isSkinnedMesh){Ee.setOptional(N,F,"bindMatrix"),Ee.setOptional(N,F,"bindMatrixInverse");let ri=F.skeleton;ri&&(ri.boneTexture===null&&ri.computeBoneTexture(),Ee.setValue(N,"boneTexture",ri.boneTexture,A))}F.isBatchedMesh&&(Ee.setOptional(N,F,"batchingTexture"),Ee.setValue(N,"batchingTexture",F._matricesTexture,A),Ee.setOptional(N,F,"batchingIdTexture"),Ee.setValue(N,"batchingIdTexture",F._indirectTexture,A),Ee.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&Ee.setValue(N,"batchingColorTexture",F._colorsTexture,A));let Ho=W.morphAttributes;if((Ho.position!==void 0||Ho.normal!==void 0||Ho.color!==void 0)&&Nt.update(F,W,mi),(qn||Lt.receiveShadow!==F.receiveShadow)&&(Lt.receiveShadow=F.receiveShadow,Ee.setValue(N,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ai.envMap.value=wt,Ai.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Ai.envMapIntensity.value=O.environmentIntensity),qn&&(Ee.setValue(N,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&Te(Ai,Vo),lt&&X.fog===!0&&ht.refreshFogUniforms(Ai,lt),ht.refreshMaterialUniforms(Ai,X,G,J,m.state.transmissionRenderTarget[T.id]),po.upload(N,Me(Lt),Ai,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(po.upload(N,Me(Lt),Ai,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ee.setValue(N,"center",F.center),Ee.setValue(N,"modelViewMatrix",F.modelViewMatrix),Ee.setValue(N,"normalMatrix",F.normalMatrix),Ee.setValue(N,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let ri=X.uniformsGroups;for(let fr=0,dr=ri.length;fr<dr;fr++){let Xd=ri[fr];L.update(Xd,mi),L.bind(Xd,mi)}}return mi}function Te(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function wn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,O,W){rt.get(T.texture).__webglTexture=O,rt.get(T.depthTexture).__webglTexture=W;let X=rt.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){let W=rt.get(T);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,W=0){C=T,E=O,w=W;let X=!0,F=null,lt=!1,ct=!1;if(T){let wt=rt.get(T);if(wt.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(wt.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(wt.__hasExternalTextures)A.rebindTextures(T,rt.get(T.texture).__webglTexture,rt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ct=T.depthTexture;if(wt.__boundDepthTexture!==Ct){if(Ct!==null&&rt.has(Ct)&&(T.width!==Ct.image.width||T.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}let Wt=T.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(ct=!0);let Zt=rt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[O])?F=Zt[O][W]:F=Zt[O],lt=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?F=rt.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?F=Zt[W]:F=Zt,P.copy(T.viewport),U.copy(T.scissor),B=T.scissorTest}else P.copy(dt).multiplyScalar(G).floor(),U.copy(Dt).multiplyScalar(G).floor(),B=Kt;if(Y.bindFramebuffer(N.FRAMEBUFFER,F)&&X&&Y.drawBuffers(T,F),Y.viewport(P),Y.scissor(U),Y.setScissorTest(B),lt){let wt=rt.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,wt.__webglTexture,W)}else if(ct){let wt=rt.get(T.texture),Wt=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,wt.__webglTexture,W||0,Wt)}S=-1},this.readRenderTargetPixels=function(T,O,W,X,F,lt,ct){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ct!==void 0&&(vt=vt[ct]),vt){Y.bindFramebuffer(N.FRAMEBUFFER,vt);try{let wt=T.texture,Wt=wt.format,Zt=wt.type;if(!V.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-X&&W>=0&&W<=T.height-F&&N.readPixels(O,W,X,F,Vt.convert(Wt),Vt.convert(Zt),lt)}finally{let wt=C!==null?rt.get(C).__webglFramebuffer:null;Y.bindFramebuffer(N.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(T,O,W,X,F,lt,ct){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ct!==void 0&&(vt=vt[ct]),vt){let wt=T.texture,Wt=wt.format,Zt=wt.type;if(!V.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-X&&W>=0&&W<=T.height-F){Y.bindFramebuffer(N.FRAMEBUFFER,vt);let Ct=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ct),N.bufferData(N.PIXEL_PACK_BUFFER,lt.byteLength,N.STREAM_READ),N.readPixels(O,W,X,F,Vt.convert(Wt),Vt.convert(Zt),0);let Jt=C!==null?rt.get(C).__webglFramebuffer:null;Y.bindFramebuffer(N.FRAMEBUFFER,Jt);let fe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Yx(N,fe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ct),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,lt),N.deleteBuffer(Ct),N.deleteSync(fe),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,W=0){T.isTexture!==!0&&(Ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);let X=Math.pow(2,-W),F=Math.floor(T.image.width*X),lt=Math.floor(T.image.height*X),ct=O!==null?O.x:0,vt=O!==null?O.y:0;A.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,ct,vt,F,lt),Y.unbindTexture()},this.copyTextureToTexture=function(T,O,W=null,X=null,F=0){T.isTexture!==!0&&(Ta("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],O=arguments[2],F=arguments[3]||0,W=null);let lt,ct,vt,wt,Wt,Zt,Ct,Jt,fe,me=T.isCompressedTexture?T.mipmaps[F]:T.image;W!==null?(lt=W.max.x-W.min.x,ct=W.max.y-W.min.y,vt=W.isBox3?W.max.z-W.min.z:1,wt=W.min.x,Wt=W.min.y,Zt=W.isBox3?W.min.z:0):(lt=me.width,ct=me.height,vt=me.depth||1,wt=0,Wt=0,Zt=0),X!==null?(Ct=X.x,Jt=X.y,fe=X.z):(Ct=0,Jt=0,fe=0);let Ge=Vt.convert(O.format),ge=Vt.convert(O.type),Lt;O.isData3DTexture?(A.setTexture3D(O,0),Lt=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Lt=N.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Lt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let Hi=N.getParameter(N.UNPACK_ROW_LENGTH),_e=N.getParameter(N.UNPACK_IMAGE_HEIGHT),mi=N.getParameter(N.UNPACK_SKIP_PIXELS),As=N.getParameter(N.UNPACK_SKIP_ROWS),qn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,me.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,me.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Wt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Zt);let Vo=T.isDataArrayTexture||T.isData3DTexture,Ee=O.isDataArrayTexture||O.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Ai=rt.get(T),Ho=rt.get(O),ri=rt.get(Ai.__renderTarget),fr=rt.get(Ho.__renderTarget);Y.bindFramebuffer(N.READ_FRAMEBUFFER,ri.__webglFramebuffer),Y.bindFramebuffer(N.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let dr=0;dr<vt;dr++)Vo&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,rt.get(T).__webglTexture,F,Zt+dr),T.isDepthTexture?(Ee&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,rt.get(O).__webglTexture,F,fe+dr),N.blitFramebuffer(wt,Wt,lt,ct,Ct,Jt,lt,ct,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ee?N.copyTexSubImage3D(Lt,F,Ct,Jt,fe+dr,wt,Wt,lt,ct):N.copyTexSubImage2D(Lt,F,Ct,Jt,fe+dr,wt,Wt,lt,ct);Y.bindFramebuffer(N.READ_FRAMEBUFFER,null),Y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ee?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Lt,F,Ct,Jt,fe,lt,ct,vt,Ge,ge,me.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(Lt,F,Ct,Jt,fe,lt,ct,vt,Ge,me.data):N.texSubImage3D(Lt,F,Ct,Jt,fe,lt,ct,vt,Ge,ge,me):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,Ct,Jt,lt,ct,Ge,ge,me.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,Ct,Jt,me.width,me.height,Ge,me.data):N.texSubImage2D(N.TEXTURE_2D,F,Ct,Jt,lt,ct,Ge,ge,me);N.pixelStorei(N.UNPACK_ROW_LENGTH,Hi),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_e),N.pixelStorei(N.UNPACK_SKIP_PIXELS,mi),N.pixelStorei(N.UNPACK_SKIP_ROWS,As),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qn),F===0&&O.generateMipmaps&&N.generateMipmap(Lt),Y.unbindTexture()},this.copyTextureToTexture3D=function(T,O,W=null,X=null,F=0){return T.isTexture!==!0&&(Ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],O=arguments[3],F=arguments[4]||0),Ta('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,W,X,F)},this.initRenderTarget=function(T){rt.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Y.unbindTexture()},this.resetState=function(){E=0,w=0,C=null,Y.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}},Ac=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var To=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Kf=class extends Br{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Yg=new Ie,Qf=new xc,ic=new Mo,rc=new D,Eo=class extends bn{constructor(t=new He,e=new Kf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(i),ic.radius+=s,t.ray.intersectsSphere(ic)===!1)return;Yg.copy(i).invert(),Qf.copy(t.ray).applyMatrix4(Yg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let g=d,_=u;g<_;g++){let p=c.getX(g);rc.fromBufferAttribute(f,p),qg(rc,p,l,i,t,e,this)}}else{let d=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let g=d,_=u;g<_;g++)rc.fromBufferAttribute(f,g),qg(rc,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function qg(r,t,e,n,i,s,o){let a=Qf.distanceSqToPoint(r);if(a<e){let l=new D;Qf.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ao=class extends ei{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,u=(o-h)/d;return(i+u)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new ut:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,i=[],s=[],o=[],a=new D,l=new Ie;for(let u=0;u<=t;u++){let g=u/t;i[u]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Qe(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(i[u],s[u])}if(e===!0){let u=Math.acos(Qe(s[0].dot(s[t]),-1,1));u/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(u=-u);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],u*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ba=class extends pi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},jf=class extends Ba{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Nd(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,i(o,a,d,u)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var sc=new D,Xu=new Nd,Yu=new Nd,qu=new Nd,Ms=class extends pi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(sc.subVectors(i[0],i[1]).add(i[0]),c=sc);let f=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(sc.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=sc),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Xu.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,_,p),Yu.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,_,p),qu.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Xu.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Yu.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),qu.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Xu.calc(l),Yu.calc(l),qu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zg(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function V1(r,t){let e=1-r;return e*e*t}function H1(r,t){return 2*(1-r)*r*t}function G1(r,t){return r*r*t}function Pa(r,t,e,n){return V1(r,t)+H1(r,e)+G1(r,n)}function W1(r,t){let e=1-r;return e*e*e*t}function X1(r,t){let e=1-r;return 3*e*e*r*t}function Y1(r,t){return 3*(1-r)*r*r*t}function q1(r,t){return r*r*r*t}function Ia(r,t,e,n,i){return W1(r,t)+X1(r,e)+Y1(r,n)+q1(r,i)}var Cc=class extends pi{constructor(t=new ut,e=new ut,n=new ut,i=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ut){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ia(t,i.x,s.x,o.x,a.x),Ia(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},td=class extends pi{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ia(t,i.x,s.x,o.x,a.x),Ia(t,i.y,s.y,o.y,a.y),Ia(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rc=class extends pi{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ed=class extends pi{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pc=class extends pi{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Pa(t,i.x,s.x,o.x),Pa(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ic=class extends pi{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Pa(t,i.x,s.x,o.x),Pa(t,i.y,s.y,o.y),Pa(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Co=class extends pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Zg(a,l.x,c.x,h.x,f.x),Zg(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ut().fromArray(i))}return this}},nd=Object.freeze({__proto__:null,ArcCurve:jf,CatmullRomCurve3:Ms,CubicBezierCurve:Cc,CubicBezierCurve3:td,EllipseCurve:Ba,LineCurve:Rc,LineCurve3:ed,QuadraticBezierCurve:Pc,QuadraticBezierCurve3:Ic,SplineCurve:Co}),id=class extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new nd[i.type]().fromJSON(i))}return this}},Dc=class extends id{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Rc(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Pc(this.currentPoint.clone(),new ut(t,e),new ut(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new Cc(this.currentPoint.clone(),new ut(t,e),new ut(n,i),new ut(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Co(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new Ba(t,e,n,i,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ro=class r extends He{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Qe(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,f=new D,d=new ut,u=new D,g=new D,_=new D,p=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,u.x=m*1,u.y=-p,u.z=m*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,u.x=m*1,u.y=-p,u.z=m*0,g.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(g)}for(let x=0;x<=e;x++){let y=n+x*h*i,v=Math.sin(y),R=Math.cos(y);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*v,f.y=t[E].y,f.z=t[E].x*R,o.push(f.x,f.y,f.z),d.x=x/e,d.y=E/(t.length-1),a.push(d.x,d.y);let w=l[3*E+0]*v,C=l[3*E+1],S=l[3*E+0]*R;c.push(w,C,S)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){let v=y+x*t.length,R=v,E=v+t.length,w=v+t.length+1,C=v+1;s.push(R,E,C),s.push(w,C,E)}this.setIndex(s),this.setAttribute("position",new he(o,3)),this.setAttribute("uv",new he(a,2)),this.setAttribute("normal",new he(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var Lc=class r extends He{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new D,h=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*i;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},zi=class r extends He{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],f=[],d=[],u=[],g=0,_=[],p=n/2,m=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new he(f,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(u,2));function x(){let v=new D,R=new D,E=0,w=(e-t)/n;for(let C=0;C<=s;C++){let S=[],M=C/s,P=M*(e-t)+t;for(let U=0;U<=i;U++){let B=U/i,k=B*l+a,Z=Math.sin(k),H=Math.cos(k);R.x=P*Z,R.y=-M*n+p,R.z=P*H,f.push(R.x,R.y,R.z),v.set(Z,w,H).normalize(),d.push(v.x,v.y,v.z),u.push(B,1-M),S.push(g++)}_.push(S)}for(let C=0;C<i;C++)for(let S=0;S<s;S++){let M=_[S][C],P=_[S+1][C],U=_[S+1][C+1],B=_[S][C+1];(t>0||S!==0)&&(h.push(M,P,B),E+=3),(e>0||S!==s-1)&&(h.push(P,U,B),E+=3)}c.addGroup(m,E,0),m+=E}function y(v){let R=g,E=new ut,w=new D,C=0,S=v===!0?t:e,M=v===!0?1:-1;for(let U=1;U<=i;U++)f.push(0,p*M,0),d.push(0,M,0),u.push(.5,.5),g++;let P=g;for(let U=0;U<=i;U++){let k=U/i*l+a,Z=Math.cos(k),H=Math.sin(k);w.x=S*H,w.y=p*M,w.z=S*Z,f.push(w.x,w.y,w.z),d.push(0,M,0),E.x=Z*.5+.5,E.y=H*.5*M+.5,u.push(E.x,E.y),g++}for(let U=0;U<i;U++){let B=R+U,k=P+U;v===!0?h.push(k,k+1,B):h.push(k+1,k,B),C+=3}c.addGroup(m,C,v===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Uc=class r extends zi{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rd=class r extends He{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new he(s,3)),this.setAttribute("normal",new he(s.slice(),3)),this.setAttribute("uv",new he(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let y=new D,v=new D,R=new D;for(let E=0;E<e.length;E+=3)u(e[E+0],y),u(e[E+1],v),u(e[E+2],R),l(y,v,R,x)}function l(x,y,v,R){let E=R+1,w=[];for(let C=0;C<=E;C++){w[C]=[];let S=x.clone().lerp(v,C/E),M=y.clone().lerp(v,C/E),P=E-C;for(let U=0;U<=P;U++)U===0&&C===E?w[C][U]=S:w[C][U]=S.clone().lerp(M,U/P)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){let M=Math.floor(S/2);S%2===0?(d(w[C][M+1]),d(w[C+1][M]),d(w[C][M])):(d(w[C][M+1]),d(w[C+1][M+1]),d(w[C+1][M]))}}function c(x){let y=new D;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(x),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){let x=new D;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];let v=p(x)/2/Math.PI+.5,R=m(x)/Math.PI+.5;o.push(v,1-R)}g(),f()}function f(){for(let x=0;x<o.length;x+=6){let y=o[x+0],v=o[x+2],R=o[x+4],E=Math.max(y,v,R),w=Math.min(y,v,R);E>.9&&w<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function u(x,y){let v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){let x=new D,y=new D,v=new D,R=new D,E=new ut,w=new ut,C=new ut;for(let S=0,M=0;S<s.length;S+=9,M+=6){x.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),E.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),R.copy(x).add(y).add(v).divideScalar(3);let P=p(R);_(E,M+0,x,P),_(w,M+2,y,P),_(C,M+4,v,P)}}function _(x,y,v,R){R<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=R/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var za=class extends Dc{constructor(t){super(t),this.uuid=Ts(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Dc().fromJSON(i))}return this}},Z1={triangulate:function(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=E_(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,f,d,u;if(n&&(s=j1(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)f=r[g],d=r[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return ka(s,o,e,a,l,u,0),o}};function E_(r,t,e,n,i){let s,o;if(i===hw(r,t,e,n)>0)for(s=t;s<e;s+=n)o=$g(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=$g(s,r[s],r[s+1],o);return o&&Xc(o,o.next)&&(Ha(o),o=o.next),o}function Ss(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Xc(e,e.next)||Ne(e.prev,e,e.next)===0)){if(Ha(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ka(r,t,e,n,i,s,o){if(!r)return;!o&&s&&rw(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?J1(r,n,i,s):$1(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Ha(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=K1(Ss(r),t,e),ka(r,t,e,n,i,s,2)):o===2&&Q1(r,t,e,n,i,s):ka(Ss(r),t,e,n,i,s,1);break}}}function $1(r){let t=r.prev,e=r,n=r.next;if(Ne(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,u=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&co(i,a,s,l,o,c,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function J1(r,t,e,n){let i=r.prev,s=r,o=r.next;if(Ne(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,f=s.y,d=o.y,u=a<l?a<c?a:c:l<c?l:c,g=h<f?h<d?h:d:f<d?f:d,_=a>l?a>c?a:c:l>c?l:c,p=h>f?h>d?h:d:f>d?f:d,m=sd(u,g,t,e,n),x=sd(_,p,t,e,n),y=r.prevZ,v=r.nextZ;for(;y&&y.z>=m&&v&&v.z<=x;){if(y.x>=u&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&co(a,h,l,f,c,d,y.x,y.y)&&Ne(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&co(a,h,l,f,c,d,v.x,v.y)&&Ne(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=u&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&co(a,h,l,f,c,d,y.x,y.y)&&Ne(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&co(a,h,l,f,c,d,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function K1(r,t,e){let n=r;do{let i=n.prev,s=n.next.next;!Xc(i,s)&&A_(i,n,n.next,s)&&Va(i,s)&&Va(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ha(n),Ha(n.next),n=r=s),n=n.next}while(n!==r);return Ss(n)}function Q1(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&aw(o,a)){let l=C_(o,a);o=Ss(o,o.next),l=Ss(l,l.next),ka(o,t,e,n,i,s,0),ka(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function j1(r,t,e,n){let i=[],s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=E_(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(ow(c));for(i.sort(tw),s=0;s<i.length;s++)e=ew(i[s],e);return e}function tw(r,t){return r.x-t.x}function ew(r,t){let e=nw(r,t);if(!e)return t;let n=C_(e,r);return Ss(n,n.next),Ss(e,e.next)}function nw(r,t){let e=t,n=-1/0,i,s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,f;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&co(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(s-e.x),Va(e,r)&&(f<h||f===h&&(e.x>i.x||e.x===i.x&&iw(i,e)))&&(i=e,h=f)),e=e.next;while(e!==a);return i}function iw(r,t){return Ne(r.prev,r,t.prev)<0&&Ne(t.next,r,r.next)<0}function rw(r,t,e,n){let i=r;do i.z===0&&(i.z=sd(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,sw(i)}function sw(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function sd(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function ow(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function co(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function aw(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!lw(r,t)&&(Va(r,t)&&Va(t,r)&&cw(r,t)&&(Ne(r.prev,r,t.prev)||Ne(r,t.prev,t))||Xc(r,t)&&Ne(r.prev,r,r.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Xc(r,t){return r.x===t.x&&r.y===t.y}function A_(r,t,e,n){let i=ac(Ne(r,t,e)),s=ac(Ne(r,t,n)),o=ac(Ne(e,n,r)),a=ac(Ne(e,n,t));return!!(i!==s&&o!==a||i===0&&oc(r,e,t)||s===0&&oc(r,n,t)||o===0&&oc(e,r,n)||a===0&&oc(e,t,n))}function oc(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function ac(r){return r>0?1:r<0?-1:0}function lw(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&A_(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Va(r,t){return Ne(r.prev,r,r.next)<0?Ne(r,t,r.next)>=0&&Ne(r,r.prev,t)>=0:Ne(r,t,r.prev)<0||Ne(r,r.next,t)<0}function cw(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function C_(r,t){let e=new od(r.i,r.x,r.y),n=new od(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function $g(r,t,e,n){let i=new od(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ha(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function od(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hw(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var Da=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Jg(t),Kg(n,t);let o=t.length;e.forEach(Jg);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Kg(n,e[l]);let a=Z1.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Jg(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Kg(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Nc=class r extends rd{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Oc=class r extends He{constructor(t=new za([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new he(i,3)),this.setAttribute("normal",new he(s,3)),this.setAttribute("uv",new he(o,2));function c(h){let f=i.length/3,d=h.extractPoints(e),u=d.shape,g=d.holes;Da.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=g.length;p<m;p++){let x=g[p];Da.isClockWise(x)===!0&&(g[p]=x.reverse())}let _=Da.triangulateShape(u,g);for(let p=0,m=g.length;p<m;p++){let x=g[p];u=u.concat(x)}for(let p=0,m=u.length;p<m;p++){let x=u[p];i.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let p=0,m=_.length;p<m;p++){let x=_[p],y=x[0]+f,v=x[1]+f,R=x[2]+f;n.push(y,v,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return uw(e,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let o=e[t.shapes[i]];n.push(o)}return new r(n,t.curveSegments)}};function uw(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){let i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}var wi=class r extends He{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new D,f=new D,d=new D;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){let _=g/i*s,p=u/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){let _=(i+1)*u+g-1,p=(i+1)*(u-1)+g-1,m=(i+1)*(u-1)+g,x=(i+1)*u+g;o.push(_,p,x),o.push(p,m,x)}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Fc=class r extends He{constructor(t=new Ic(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new ut,h=new D,f=[],d=[],u=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new he(f,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(u,2));function _(){for(let y=0;y<e;y++)p(y);p(s===!1?e:0),x(),m()}function p(y){h=t.getPointAt(y/e,h);let v=o.normals[y],R=o.binormals[y];for(let E=0;E<=i;E++){let w=E/i*Math.PI*2,C=Math.sin(w),S=-Math.cos(w);l.x=S*v.x+C*R.x,l.y=S*v.y+C*R.y,l.z=S*v.z+C*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=e;y++)for(let v=1;v<=i;v++){let R=(i+1)*(y-1)+(v-1),E=(i+1)*y+(v-1),w=(i+1)*y+v,C=(i+1)*(y-1)+v;g.push(R,E,C),g.push(E,w,C)}}function x(){for(let y=0;y<=e;y++)for(let v=0;v<=i;v++)c.x=y/e,c.y=v/i,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new nd[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Bc=class extends Ce{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ni=class extends Br{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=m_,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},hr=class extends ni{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function lc(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function fw(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Po=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ad=class extends Po{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$m,endingEnd:$m}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jm:s=t,a=2*e-n;break;case Km:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jm:o=t,l=2*n-e;break;case Km:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,x=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-u)*p+(1.5+u)*_+.5*g,v=u*p-u*_;for(let R=0;R!==a;++R)s[R]=m*o[h+R]+x*o[c+R]+y*o[l+R]+v*o[f+R];return s}},ld=class extends Po{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*h;return s}},cd=class extends Po{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ti=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lc(e,this.TimeBufferType),this.values=lc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lc(t.times,Array),values:lc(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new cd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ld(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ad(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case pc:e=this.InterpolantFactoryMethodDiscrete;break;case Nf:e=this.InterpolantFactoryMethodLinear;break;case vu:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pc;case this.InterpolantFactoryMethodLinear:return Nf;case this.InterpolantFactoryMethodSmooth:return vu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&fw(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vu,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let _=e[f+g];if(_!==e[d+g]||_!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Nf;var bs=class extends Ti{constructor(t,e,n){super(t,e,n)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=pc;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var hd=class extends Ti{};hd.prototype.ValueTypeName="color";var ud=class extends Ti{};ud.prototype.ValueTypeName="number";var fd=class extends Po{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Fr.slerpFlat(s,0,o,c-a,o,c,l);return s}},zc=class extends Ti{InterpolantFactoryMethodLinear(t){return new fd(this.times,this.values,this.getValueSize(),t)}};zc.prototype.ValueTypeName="quaternion";zc.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends Ti{constructor(t,e,n){super(t,e,n)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=pc;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var dd=class extends Ti{};dd.prototype.ValueTypeName="vector";var pd=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],g=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}},dw=new pd,md=class{constructor(t){this.manager=t!==void 0?t:dw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};md.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ga=class extends bn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},kc=class extends Ga{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Zu=new Ie,Qg=new D,jg=new D,Vc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qg.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qg),jg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jg),e.updateMatrixWorld(),Zu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},gd=class extends Vc{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=yo*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Wa=class extends Ga{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new gd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},t_=new Ie,wa=new D,$u=new D,_d=class extends Vc{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),wa.setFromMatrixPosition(t.matrixWorld),n.position.copy(wa),$u.copy(n.position),$u.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($u),n.updateMatrixWorld(),i.makeTranslation(-wa.x,-wa.y,-wa.z),t_.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(t_)}},Io=class extends Ga{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _d}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var Do=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=e_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=e_();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function e_(){return performance.now()}var Od="\\[\\]\\.:\\/",pw=new RegExp("["+Od+"]","g"),Fd="[^"+Od+"]",mw="[^"+Od.replace("\\.","")+"]",gw=/((?:WC+[\/:])*)/.source.replace("WC",Fd),_w=/(WCOD+)?/.source.replace("WCOD",mw),vw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fd),xw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fd),yw=new RegExp("^"+gw+_w+vw+xw+"$"),Mw=["material","materials","bones","map"],vd=class{constructor(t,e,n){let i=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pw,"")}static parseTrackName(t){let e=yw.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Mw.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=vd;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lT=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xd);var Yc=class extends To{constructor(){super();let t=new Bi;t.deleteAttribute("uv");let e=new ni({side:Sn}),n=new ni,i=new Io(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Bt(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Bt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Bt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Bt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Bt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Bt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let f=new Bt(t,n);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let d=new Bt(t,No(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let u=new Bt(t,No(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);let g=new Bt(t,No(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new Bt(t,No(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let p=new Bt(t,No(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new Bt(t,No(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function No(r){let t=new bi;return t.color.setScalar(r),t}var qc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var On=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Sw=new Oa(-1,1,1,-1,0,1),Bd=class extends He{constructor(){super(),this.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new he([0,2,0,0,2,0],2))}},bw=new Bd,Vi=class{constructor(t){this._mesh=new Bt(bw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Sw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Oo=class extends On{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ki.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Vi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ya=class extends On{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Zc=class extends On{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var $c=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ut);this._width=n.width,this._height=n.height,e=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ii}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Oo(qc),this.copyPass.material.blending=di,this.clock=new Do}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ya!==void 0&&(o instanceof Ya?n=!0:o instanceof Zc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Jc=class extends On{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ut}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var P_={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ut(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Fo=class r extends On{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ut(t.x,t.y):new ut(256,256),this.clearColor=new Ut(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(s,o,{type:ii}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let d=new dn(s,o,{type:ii});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new dn(s,o,{type:ii});u.texture.name="UnrealBloomPass.v"+f,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}let a=P_;this.highPassUniforms=ki.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ut(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=qc;this.copyUniforms=ki.clone(h.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Nr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ut,this.oldClearAlpha=1,this.basic=new bi,this.fsQuad=new Vi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ut(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Fo.BlurDirectionX=new ut(1,0);Fo.BlurDirectionY=new ut(0,1);var I_={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var Kc=class extends On{constructor(t,e,n){super(),this.scene=t,this.camera=e;let i=n.focus!==void 0?n.focus:1,s=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new dn(1,1,{minFilter:Xn,magFilter:Xn,type:ii}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Fa,this.materialDepth.depthPacking=Dd,this.materialDepth.blending=di;let a=I_,l=ki.clone(a.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=i,l.aspect.value=e.aspect,l.aperture.value=s,l.maxblur.value=o,l.nearClip.value=e.near,l.farClip.value=e.far,this.materialBokeh=new Ce({defines:Object.assign({},a.defines),uniforms:l,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=l,this.fsQuad=new Vi(this.materialBokeh),this._oldClearColor=new Ut}render(t,e,n){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);let i=t.getClearAlpha(),s=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(i),t.autoClear=s}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}};var D_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Qc=class extends On{constructor(){super();let t=D_;this.uniforms=ki.clone(t.uniforms),this.material=new Bc({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Vi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===ve&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Md?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Sd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Td&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var L_={ball:[[.118,1.18],[.2,1.1],[.4,.92],[.6,.64],[.76,.34],[.85,.1],[.865,0]],aline:[[.118,1.18],[.17,1.06],[.28,.82],[.41,.52],[.53,.22],[.58,0]],mermaid:[[.118,1.18],[.145,1.02],[.152,.8],[.138,.56],[.17,.4],[.34,.17],[.5,0]],column:[[.118,1.18],[.148,.95],[.165,.55],[.2,0]]},zd={ivory:"#f4ebdc",snow:"#fbfaf6",champagne:"#ead2ac",blush:"#f0cdc4",pearl:"#e2e0e6",gold:"#d8bb84"};function kd(r,t=48){return new Co(r.map(([n,i])=>new ut(n,i))).getPoints(t)}function ww(r,{pleats:t=14,train:e=.5}={}){let n=kd(L_[r]||L_.ball),i=new Ro(n,160),s=i.attributes.position,o=new D,a=1.18;for(let l=0;l<s.count;l++){o.fromBufferAttribute(s,l);let c=Math.hypot(o.x,o.z);if(c<1e-4)continue;let h=Math.atan2(o.z,o.x),f=1-o.y/a,d=1+Math.sin(h*t+Math.sin(h*3)*.6)*.035*f*f,u=Math.max(0,-Math.sin(h)),g=e*Math.pow(u,2.2)*Math.pow(f,4),_=c*d+g;o.x=Math.cos(h)*_,o.z=Math.sin(h)*_,f>.92&&(o.y-=g*.02),s.setXYZ(l,o.x,Math.max(0,o.y),o.z)}return i.computeVertexNormals(),i}function Tw(){let r=kd([[.118,1.16],[.112,1.22],[.128,1.32],[.155,1.42],[.158,1.48],[.14,1.52]],24);return new Ro(r,96)}function Ew(){let r=kd([[.001,1.8],[.045,1.79],[.05,1.7],[.14,1.63],[.165,1.56],[.155,1.44],[.12,1.25],[.112,1.16]],40);return new Ro(r,64)}var zr=null;function U_(){if(zr)return zr;let r=document.createElement("canvas");r.width=r.height=256;let t=r.getContext("2d");t.clearRect(0,0,256,256),t.strokeStyle="#fff",t.fillStyle="#fff";let e=(n,i,s)=>{for(let o=0;o<6;o++){t.beginPath();let a=o/6*Math.PI*2;t.ellipse(n+Math.cos(a)*s*.55,i+Math.sin(a)*s*.55,s*.42,s*.2,a,0,Math.PI*2),t.lineWidth=2.2,t.stroke()}t.beginPath(),t.arc(n,i,s*.18,0,Math.PI*2),t.fill()};for(let n=0;n<=256;n+=64)for(let i=0;i<=256;i+=64)e(i+n/64%2*32,n,22);t.lineWidth=1;for(let n=0;n<256;n+=8)t.globalAlpha=.35,t.beginPath(),t.moveTo(n,0),t.lineTo(n+128,256),t.stroke(),t.beginPath(),t.moveTo(n,0),t.lineTo(n-128,256),t.stroke();return t.globalAlpha=1,zr=new Ao(r),zr.wrapS=zr.wrapT=La,zr.repeat.set(10,5),zr.anisotropy=4,zr}var Aw={satin:{roughness:.3,sheen:1,sheenRoughness:.25,clearcoat:.35,clearcoatRoughness:.4,opacity:1,lace:!1},mikado:{roughness:.48,sheen:.7,sheenRoughness:.45,clearcoat:.12,clearcoatRoughness:.6,opacity:1,lace:!1},tulle:{roughness:.9,sheen:.5,sheenRoughness:.8,clearcoat:0,clearcoatRoughness:1,opacity:.78,lace:!1},lace:{roughness:.55,sheen:.9,sheenRoughness:.4,clearcoat:.1,clearcoatRoughness:.6,opacity:1,lace:!0}},Cw=`
  uniform float uTime; uniform float uPixel;
  attribute float aSeed;
  varying float vTw;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vTw = pow(0.5 + 0.5 * sin(uTime * (1.5 + aSeed * 3.0) + aSeed * 40.0), 6.0);
    gl_PointSize = (2.0 + 5.0 * vTw) * uPixel / -mv.z;
    gl_Position = projectionMatrix * mv;
  }`,Rw=`
  uniform vec3 uColor; uniform float uOpacity;
  varying float vTw;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float star = max(0.0, 1.0 - d * 2.0);
    star += max(0.0, 1.0 - abs(c.x) * 14.0) * max(0.0, 1.0 - abs(c.y) * 2.2) * 0.6;
    star += max(0.0, 1.0 - abs(c.y) * 14.0) * max(0.0, 1.0 - abs(c.x) * 2.2) * 0.6;
    gl_FragColor = vec4(uColor * (0.7 + vTw * 2.2), star * (0.15 + vTw * 0.85) * uOpacity);
  }`,jc={uTime:{value:0},uPixel:{value:200}};function Pw(r,t){let e=r.attributes.position,n=r.index,i=n.count/3,s=new Float32Array(t*3),o=new Float32Array(t),a=new D,l=new D,c=new D;for(let d=0;d<t;d++){let u=Math.floor(Math.random()*i)*3;a.fromBufferAttribute(e,n.getX(u)),l.fromBufferAttribute(e,n.getX(u+1)),c.fromBufferAttribute(e,n.getX(u+2));let g=Math.random(),_=Math.random();g+_>1&&(g=1-g,_=1-_);let p=a.clone().addScaledVector(l.clone().sub(a),g).addScaledVector(c.clone().sub(a),_);p.multiplyScalar(1.006),s.set([p.x,p.y,p.z],d*3),o[d]=Math.random()}let h=new He;h.setAttribute("position",new an(s,3)),h.setAttribute("aSeed",new an(o,1));let f=new Ce({uniforms:{...jc,uColor:{value:new Ut("#fff4dc")},uOpacity:{value:1}},vertexShader:Cw,fragmentShader:Rw,transparent:!0,depthWrite:!1,blending:Nr});return new Eo(h,f)}function Vd(r={}){let t={style:"ball",fabric:"satin",color:"ivory",crystals:!0,sparkleCount:2200,train:.55,...r},e=new fn,n=new hr({color:zd[t.color],side:Wn,sheenColor:new Ut("#fff6ea")}),i=new hr({color:"#ffffff",map:U_(),alphaMap:U_(),transparent:!0,alphaTest:.25,roughness:.6,sheen:1,sheenColor:new Ut("#ffffff"),side:Wn,depthWrite:!1}),s=new ni({color:"#efe6da",roughness:.75}),o=new ni({color:"#c9a35f",metalness:1,roughness:.28}),a=new Bt(Ew(),s),l=new Bt(Tw(),n),c=new Bt(new wi(.121,.012,12,96),o);c.rotation.x=Math.PI/2,c.position.y=1.18;let h=new Bt(new zi(.03,.03,.12,24),o);h.position.y=1.85;let f=new Bt(void 0,n),d=new Bt(void 0,i);d.scale.setScalar(1.012);let u=null;[a,l,f,c,h].forEach(x=>{x.castShadow=!0,x.receiveShadow=!0,e.add(x)}),e.add(d);function g(){f.geometry?.dispose(),f.geometry=ww(t.style,{train:t.style==="column"?.25:t.train}),d.geometry=f.geometry,u&&(e.remove(u),u.geometry.dispose()),u=Pw(f.geometry,t.sparkleCount),u.visible=t.crystals,e.add(u)}function _(){let x=Aw[t.fabric];n.color.set(zd[t.color]),n.roughness=x.roughness,n.sheen=x.sheen,n.sheenRoughness=x.sheenRoughness,n.clearcoat=x.clearcoat,n.clearcoatRoughness=x.clearcoatRoughness,n.transparent=x.opacity<1,n.opacity=x.opacity,n.depthWrite=x.opacity===1,n.needsUpdate=!0,d.visible=x.lace,i.color.set(zd[t.color]).offsetHSL(0,0,.06)}function p(x){let y=x.style&&x.style!==t.style;Object.assign(t,x),y&&g(),_(),u&&(u.visible=t.crystals)}g(),_();let m=new Bt(new zi(.012,.012,.2,12),o);return m.position.y=1.9,e.add(m),{group:e,set:p,state:t,materials:{fabricMat:n,laceMat:i}}}var Iw=new Ut("#ffcf8f").multiplyScalar(2.4);function N_(r,{quality:t="high"}={}){let e=t==="low",n=new Ec({canvas:r,antialias:!e,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.25:1.75)),n.setSize(window.innerWidth,window.innerHeight,!1),n.toneMapping=Xa,n.toneMappingExposure=.95,n.shadowMap.enabled=!e,n.shadowMap.type=yd;let i=new To,s=new Ut("#0e0a09");i.background=s,i.fog=new Ac("#0e0a09",.045);let o=new wo(n);i.environment=o.fromScene(new Yc,.04).texture,i.environmentIntensity=.4;let a=new un(42,window.innerWidth/window.innerHeight,.1,90);i.add(new kc("#ffe9d2","#1a1110",.35));let l=[];function c(Y,nt,rt,A=16){let b=new Wa("#ffe2bd",A,14,Math.PI/7,.6,1.6);return b.position.set(Y,6.5,nt),b.target.position.copy(rt),b.castShadow=!e&&l.length<4,b.shadow.mapSize.set(1024,1024),b.shadow.bias=-4e-4,i.add(b,b.target),l.push(b),b}let h=new Bt(new Lc(60,96),new hr({color:"#17110f",roughness:.22,metalness:.35,clearcoat:.6,clearcoatRoughness:.2}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,i.add(h);let f=new bi({color:Iw,toneMapped:!1});for(let Y of[-3.4,3.4]){let nt=new Bt(new Bi(.025,.004,44),f);nt.position.set(Y,.003,-10),i.add(nt)}let d=new ni({color:"#b8915a",metalness:1,roughness:.3}),u=new fn,g=3.2,_=2.4;function p(Y,nt=1){let rt=new fn,A=new Bt(new wi(g,.07,16,96,Math.PI),d);A.position.y=_;let b=new Bt(new wi(g-.14,.012,8,128,Math.PI),f);b.position.y=_,rt.add(A,b);for(let z of[-g,g]){let j=new Bt(new zi(.07,.09,_,24),d);j.position.set(z,_/2,0);let Q=new Bt(new Bi(.02,_,.02),f);Q.position.set(z-Math.sign(z)*.14,_/2,0);let K=new Bt(new zi(.16,.2,.12,24),d);K.position.set(z,.06,0),rt.add(j,Q,K)}return rt.position.z=Y,rt.scale.setScalar(nt),u.add(rt),rt}[6,1.5,-3,-7.5,-12,-16.5].forEach(Y=>p(Y));let m=p(-21.5,1.35);i.add(u);let x=new bo(46,9,220,1);{let Y=x.attributes.position;for(let nt=0;nt<Y.count;nt++)Y.setZ(nt,Math.sin(Y.getX(nt)*3.1)*.12+Math.sin(Y.getX(nt)*1.3)*.08);x.computeVertexNormals()}let y=new ni({color:"#3a2422",roughness:.65,metalness:.05,side:Wn});for(let Y of[-6.2,6.2]){let nt=new Bt(x,y);nt.rotation.y=Math.sign(Y)*-Math.PI/2,nt.position.set(Y,4.5,-8),i.add(nt)}let v=new hr({color:"#f1e9df",roughness:.18,clearcoat:1,clearcoatRoughness:.15});function R(Y=1.05){let nt=new fn,rt=new Bt(new zi(Y,Y*1.04,.2,96),v);rt.position.y=.1,rt.receiveShadow=!0,rt.castShadow=!0;let A=new Bt(new wi(Y*1.045,.012,8,160),f);return A.rotation.x=Math.PI/2,A.position.y=.2,nt.add(rt,A),nt}let w=[{pos:[-1.95,-1],style:"ball",color:"ivory",fabric:"satin",ry:.7},{pos:[1.95,-5.4],style:"mermaid",color:"champagne",fabric:"lace",ry:-.6},{pos:[-1.95,-9.8],style:"aline",color:"blush",fabric:"tulle",ry:.6},{pos:[1.95,-14.2],style:"column",color:"pearl",fabric:"mikado",ry:-.5}].map(Y=>{let nt=new fn,rt=Vd({style:Y.style,color:Y.color,fabric:Y.fabric,sparkleCount:e?600:1400});return rt.group.position.y=.2,rt.group.rotation.y=Y.ry,nt.add(R(Y.style==="ball"?1.05:.8),rt.group),nt.position.set(Y.pos[0],0,Y.pos[1]),i.add(nt),c(Y.pos[0]*.4,Y.pos[1]+1.2,new D(Y.pos[0],1,Y.pos[1]),16),{...Y,holder:nt,gown:rt,focus:new D(Y.pos[0],1.15,Y.pos[1])}}),C=new fn;{let Y=new Bt(new wi(.9,.035,24,160),d);C.add(Y);let nt=new hr({color:"#ffffff",roughness:0,transmission:1,thickness:.4,ior:2.2,iridescence:1,envMapIntensity:3}),rt=new bi({color:new Ut("#fff1d6").multiplyScalar(3),toneMapped:!1}),A=15;for(let b=0;b<A;b++){let z=Math.PI*.12+b/(A-1)*Math.PI*.76,j=.18+Math.pow(Math.sin(b/(A-1)*Math.PI),2.4)*.62,Q=new Bt(new Uc(.03,j,12),d),K=Math.cos(z)*.9,at=Math.sin(z)*.9;Q.position.set(K,j/2,at),C.add(Q);let ht=new Bt(new Nc(b===(A-1)/2?.11:.05),b%2?rt:nt);if(ht.position.set(K,j+.03,at),C.add(ht),b<A-1){let mt=z+Math.PI*.76/(A-1)/2,Xt=new Bt(new wi(.07,.008,8,32),d);Xt.position.set(Math.cos(mt)*.9,.12,Math.sin(mt)*.9),Xt.lookAt(0,.12,0),C.add(Xt)}}C.rotation.y=-Math.PI/2}let S=new fn;S.add(C),S.position.set(0,2.15,2.4),S.rotation.x=.28,i.add(S);let M=new Io("#ffd9a0",6,6,1.5);M.position.set(0,2.8,3.6),i.add(M);let P=new fn,U=new Ao(document.createElement("canvas"));function B(){let Y=U.image;Y.width=512,Y.height=768;let nt=Y.getContext("2d"),rt=nt.createLinearGradient(0,0,0,768);rt.addColorStop(0,"#f3dcd3"),rt.addColorStop(.55,"#efe3d2"),rt.addColorStop(1,"#d8bb84"),nt.fillStyle=rt,nt.fillRect(0,0,512,768),nt.fillStyle="rgba(176,138,78,.85)",nt.textAlign="center",nt.font='italic 300px "Cormorant Garamond", Georgia, serif',nt.fillText("DN",256,470),nt.font="500 26px Jost, sans-serif",nt.fillStyle="rgba(74,59,53,.8)",nt.fillText("DINARA  NISHANOVA",256,600),U.colorSpace=Gn,U.needsUpdate=!0}B(),(document.fonts?.ready||Promise.resolve()).then(B);{let Y=new za,nt=1.1,rt=1.7;Y.moveTo(-nt,0),Y.lineTo(-nt,rt),Y.absarc(0,rt,nt,Math.PI,0,!0),Y.lineTo(nt,0),Y.lineTo(-nt,0);let A=new Oc(Y,48);A.computeBoundingBox();let b=A.attributes.uv,z=A.attributes.position;for(let at=0;at<b.count;at++)b.setXY(at,(z.getX(at)+nt)/(2*nt),z.getY(at)/(rt+nt));let j=new Bt(A,new ni({map:U,roughness:.6,emissive:"#ffffff",emissiveMap:U,emissiveIntensity:.25})),Q=Y.getPoints(64).map(at=>new D(at.x*1.06,at.y*1.04-.02,.02)),K=new Bt(new Fc(new Ms(Q,!0),200,.018,8,!0),f);P.add(j,K),P.position.set(-4.4,.6,-17.5),P.rotation.y=.75,i.add(P),c(-3.2,-16,new D(-4.4,1.8,-17.5),10)}let k=new fn;k.add(R(1.3));let Z=Vd({style:"ball",color:"ivory",fabric:"satin",sparkleCount:e?1200:3200,train:.7});Z.group.position.y=.2,k.add(Z.group),k.position.set(0,0,-25),i.add(k);let H=new Bt(new wi(2.3,.015,8,200),f);H.position.set(0,5.2,-25),H.rotation.x=Math.PI/2,i.add(H),c(0,-22.5,new D(0,1,-25),24);let J=new Wa("#f6c9b8",14,12,Math.PI/6,.7,1.5);J.position.set(0,5,-29),J.target.position.set(0,1,-25),i.add(J,J.target);let G=e?900:2600,it=new He,I=new Float32Array(G*3),dt=new Float32Array(G);for(let Y=0;Y<G;Y++)I[Y*3]=(Math.random()-.5)*16,I[Y*3+1]=Math.random()*8,I[Y*3+2]=12-Math.random()*44,dt[Y]=Math.random();it.setAttribute("position",new an(I,3)),it.setAttribute("aSeed",new an(dt,1));let Dt={uTime:{value:0},uPixel:{value:300},uBoost:{value:1}},Kt=new Eo(it,new Ce({uniforms:Dt,transparent:!0,depthWrite:!1,blending:Nr,vertexShader:`
      uniform float uTime; uniform float uPixel;
      attribute float aSeed;
      varying float vA;
      void main() {
        vec3 p = position;
        p.y = mod(p.y + uTime * (0.08 + aSeed * 0.18), 8.0);
        p.x += sin(uTime * 0.4 + aSeed * 30.0) * 0.35;
        p.z += cos(uTime * 0.3 + aSeed * 20.0) * 0.35;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vA = (0.35 + 0.65 * pow(0.5 + 0.5 * sin(uTime * (1.0 + aSeed * 2.0) + aSeed * 50.0), 3.0))
           * smoothstep(0.0, 1.0, p.y) * smoothstep(8.0, 6.5, p.y);
        gl_PointSize = (1.0 + aSeed * 2.6) * uPixel / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uBoost;
      varying float vA;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(vec3(1.0, 0.82, 0.55) * 2.2, a * a * vA * uBoost);
      }`}));Kt.frustumCulled=!1,i.add(Kt);let q=new $c(n);q.addPass(new Jc(i,a));let et=new Kc(i,a,{focus:6,aperture:.0012,maxblur:.006});et.enabled=!e,q.addPass(et);let xt=new Fo(new ut(window.innerWidth,window.innerHeight),.6,.5,.95);q.addPass(xt),q.addPass(new Qc);let st=new Oo({uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:1.05},uGrain:{value:.045},uAberration:{value:.0016}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain, uAberration;
      varying vec2 vUv;
      float rand(vec2 c){ return fract(sin(dot(c, vec2(12.9898,78.233))) * 43758.5453); }
      void main() {
        vec2 dir = vUv - 0.5;
        float d = length(dir);
        vec3 col;
        col.r = texture2D(tDiffuse, vUv + dir * uAberration * d * 4.0).r;
        col.g = texture2D(tDiffuse, vUv).g;
        col.b = texture2D(tDiffuse, vUv - dir * uAberration * d * 4.0).b;
        col *= smoothstep(0.85 * uVignette, 0.2, d * uVignette);        // soft vignette
        col = mix(col, col * vec3(1.04, 0.99, 0.93), 0.6);              // warm film grade
        col += (rand(vUv * 1000.0 + fract(uTime)) - 0.5) * uGrain;     // grain
        gl_FragColor = vec4(col, 1.0);
      }`});q.addPass(st);let Tt=[[[0,1.75,9.5],[0,2.15,2.4]],[[.2,1.55,4.2],[0,1.4,-4]],[[.9,1.45,1.6],w[0].focus],[[-.9,1.45,-2.6],w[1].focus],[[.9,1.45,-7.2],w[2].focus],[[-.9,1.45,-11.8],w[3].focus],[[.6,1.6,-14.6],[-2.9,1.65,-17.2]],[[0,1.45,-20.2],[0,1.15,-25]],[[3.6,4.6,-19],[0,.9,-25.5]]].map(([Y,nt])=>[new D(...Y),nt.isVector3?nt.clone():new D(...nt)]),Rt=new Ms(Tt.map(Y=>Y[0]),!1,"centripetal",.5),Ht=new Ms(Tt.map(Y=>Y[1]),!1,"centripetal",.5),Qt=Tt.length-1,kt=new D,Et={x:0,y:0,sx:0,sy:0};window.addEventListener("pointermove",Y=>{Et.x=Y.clientX/window.innerWidth*2-1,Et.y=Y.clientY/window.innerHeight*2-1},{passive:!0});function N(Y,nt=0){let rt=__.clamp(Y/Qt,0,1);Rt.getPoint(rt,a.position),Ht.getPoint(rt,kt),Et.sx+=(Et.x-Et.sx)*.04,Et.sy+=(Et.y-Et.sy)*.04,a.position.x+=Et.sx*.18,a.position.y-=Et.sy*.1,a.position.z+=nt,a.position.y+=nt*.12,a.lookAt(kt),et.uniforms.focus.value=a.position.distanceTo(kt)}function de(){let Y=window.innerWidth,nt=window.innerHeight;a.aspect=Y/nt,a.fov=Y/nt<.8?58:42,Y/nt<.8?a.setViewOffset(Y,nt,0,nt*.17,Y,nt):a.clearViewOffset(),a.updateProjectionMatrix(),n.setSize(Y,nt,!1),q.setSize(Y,nt);let rt=nt*n.getPixelRatio()*.5;Dt.uPixel.value=rt*.08,jc.uPixel.value=rt*.014}window.addEventListener("resize",de),de();let zt=new Do;function V(){let Y=zt.getElapsedTime();Dt.uTime.value=Y,jc.uTime.value=Y,st.uniforms.uTime.value=Y,C.rotation.y=-Math.PI/2+Math.sin(Y*.4)*.25,S.position.y=2.15+Math.sin(Y*.8)*.05,H.rotation.z=Y*.1,w.forEach((nt,rt)=>{nt.gown.group.rotation.y=nt.ry+Math.sin(Y*.25+rt)*.12}),q.render()}return{renderer:n,scene:i,camera:a,composer:q,bloom:xt,bokeh:et,film:st,particleUniforms:Dt,tiaraHolder:S,hero:Z,podium:k,segs:Qt,placeCamera:N,render:V,resize:de}}We.registerPlugin($t);var th={phone:"998900000000",telegram:"diademauz"},Fn=(r,t=document)=>t.querySelector(r),ur=(r,t=document)=>[...t.querySelectorAll(r)],B_=matchMedia("(prefers-reduced-motion: reduce)").matches,Dw=matchMedia("(max-width: 768px)").matches,Lw=Dw||(navigator.hardwareConcurrency||8)<=4,Hd=Fn("#loader"),Wd=Fn("#loaderBar");Wd.style.width="35%";function Uw(){Wd.style.width="100%",setTimeout(()=>{Hd.style.opacity="0",Hd.style.pointerEvents="none"},350),setTimeout(()=>Hd.remove(),1400),zw()}var Ze=null;try{let r=document.createElement("canvas");if(!(r.getContext("webgl2")||r.getContext("webgl")))throw new Error("no webgl");Ze=N_(Fn("#webgl"),{quality:Lw?"low":"high"}),Wd.style.width="70%"}catch(r){console.warn("[diadema] WebGL unavailable, using static background",r),document.documentElement.classList.add("no-webgl")}var zo=B_?null:new Xm({lerp:.08,smoothWheel:!0,wheelMultiplier:.9});zo&&(zo.on("scroll",$t.update),We.ticker.add(r=>zo.raf(r*1e3)),We.ticker.lagSmoothing(0),ur('a[href^="#"]').forEach(r=>r.addEventListener("click",t=>{let e=Fn(r.getAttribute("href"));e&&(t.preventDefault(),zo.scrollTo(e,{duration:2.4,easing:n=>1-Math.pow(1-n,4)}))})));var Nw=r=>zo?zo.scrollTo(r,{duration:2.4}):r.scrollIntoView({behavior:"smooth"}),qa={k:0},z_={dolly:0},Bo=null;function O_(){Bo?.scrollTrigger?.kill(),Bo?.kill();let r=$t.maxScroll(window),t=ur("[data-k]").map(n=>{let i=n.getBoundingClientRect(),s=i.top+window.scrollY+i.height/2-window.innerHeight/2;return{k:Number(n.dataset.k),s:We.utils.clamp(0,r,s)}}).sort((n,i)=>n.s-i.s);Bo=We.timeline({defaults:{ease:"sine.inOut"},scrollTrigger:{start:0,end:r,scrub:B_?!0:1.4}});let e=0;qa.k=t[0].k,Bo.set(qa,{k:t[0].k},0);for(let n of t)Bo.to(qa,{k:n.k,duration:Math.max(n.s-e,.001)},e),e=n.s;Bo.to({},{duration:Math.max(r-e,.001)},e)}function Ow(){Ze&&(We.to(Ze.tiaraHolder.position,{y:3.6,z:.5,ease:"none",scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:1}}),We.to(Ze.tiaraHolder.scale,{x:.6,y:.6,z:.6,ease:"none",scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:1}}),We.to("#hero .container-c",{yPercent:-25,opacity:0,ease:"none",scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:!0}}),$t.create({trigger:"#atelier",start:"top 60%",end:"bottom 40%",onToggle:r=>{We.to(Ze.bloom,{strength:r.isActive?.75:.6,duration:1.2}),We.to(Ze.bokeh.uniforms.aperture,{value:r.isActive?4e-4:.0012,duration:1.2}),V_=r.isActive}}),We.to(Ze.particleUniforms.uBoost,{value:1.8,ease:"none",scrollTrigger:{trigger:"#vip",start:"top bottom",end:"center center",scrub:!0}}),We.to(Ze.film.uniforms.uVignette,{value:1.25,ease:"none",scrollTrigger:{trigger:"#vip",start:"top bottom",end:"center center",scrub:!0}}))}var Fw=Fn("#chapter"),Bw=Fn("#progress");ur("[data-chapter]").forEach(r=>$t.create({trigger:r,start:"top center",end:"bottom center",onToggle:t=>{t.isActive&&(Fw.textContent=r.dataset.chapter)}}));$t.create({start:0,end:"max",onUpdate:r=>We.set(Bw,{scaleX:r.progress})});var k_=new IntersectionObserver(r=>r.forEach(t=>{t.isIntersecting&&(t.target.classList.add("in"),ur(".count",t.target).forEach(e=>We.to({v:0},{v:Number(e.dataset.to),duration:2.2,ease:"power3.out",onUpdate(){e.textContent=Math.round(this.targets()[0].v).toLocaleString("ru-RU")}})),k_.unobserve(t.target))}),{threshold:.2});ur(".reveal").forEach(r=>k_.observe(r));function zw(){We.from(".hero-line",{y:60,opacity:0,filter:"blur(10px)",duration:1.6,ease:"power3.out",stagger:.12,delay:.2}),Ze&&We.fromTo(z_,{dolly:5},{dolly:0,duration:3.4,ease:"power3.out"})}var V_=!1,ko={style:"ball",fabric:"satin",color:"ivory",crystals:!0},F_={style:{ball:"Malika",aline:"A-siluet",mermaid:"Rusalka",column:"Minimal"},fabric:{satin:"Atlas",mikado:"Mikado",tulle:"Tyul",lace:"Kruzheva"}},Gd="Ivory",kw=()=>`${F_.style[ko.style]} \xB7 ${F_.fabric[ko.fabric]} \xB7 ${Gd}${ko.crystals?" \xB7 kristallar":""}`;ur("#customizer [data-group]").forEach(r=>r.addEventListener("click",t=>{let e=t.target.closest("[data-value]");e&&(ur("[data-value]",r).forEach(n=>n.setAttribute("aria-pressed",String(n===e))),ko[r.dataset.group]=e.dataset.value,r.dataset.group==="color"&&(Gd=e.dataset.name,Fn("#colorName").textContent=Gd),Ze?.hero.set({[r.dataset.group]:e.dataset.value}),Ze&&We.fromTo(Ze.hero.group.scale,{x:.97,y:.97,z:.97},{x:1,y:1,z:1,duration:.8,ease:"elastic.out(1, 0.5)"}))}));Fn("#crystals").addEventListener("change",r=>{ko.crystals=r.target.checked,Ze?.hero.set({crystals:ko.crystals})});Fn("#bookDesign").addEventListener("click",()=>{Fn("#vDesign").value=kw(),Nw(Fn("#vip")),setTimeout(()=>Fn("#vName").focus({preventScroll:!0}),2200)});var en={angle:0,vel:0,dragging:!1,lastX:0,idle:0},Es=Fn("#stage");Es.addEventListener("pointerdown",r=>{en.dragging=!0,en.lastX=r.clientX,en.idle=0,Es.setPointerCapture(r.pointerId)});Es.addEventListener("pointermove",r=>{if(!en.dragging)return;let t=r.clientX-en.lastX;en.lastX=r.clientX,en.vel=t*.008,en.angle+=en.vel});var H_=()=>{en.dragging=!1};Es.addEventListener("pointerup",H_);Es.addEventListener("pointercancel",H_);Es.addEventListener("keydown",r=>{r.key==="ArrowLeft"&&(en.vel=-.08),r.key==="ArrowRight"&&(en.vel=.08)});Es.tabIndex=0;ur('[data-link="telegram"]').forEach(r=>{r.href=`https://t.me/${th.telegram}`});ur('[data-link="phone"]').forEach(r=>{r.href=`tel:+${th.phone}`});var Ei=Fn("#vipForm");Ei.date.min=new Date().toISOString().slice(0,10);Ei.addEventListener("submit",r=>{r.preventDefault();let t=Ei.name.value.trim(),e=Ei.phone.value.trim(),n=t.length>1&&e.replace(/\D/g,"").length>=9;if(Fn("#vErr").classList.toggle("hidden",n),!n)return;let i=["\u2728 Diadema \u2014 VIP so'rov",`Ism: ${t}`,`Telefon: ${e}`,Ei.date.value&&`To'y sanasi: ${Ei.date.value.split("-").reverse().join(".")}`,`Xizmat: ${Ei.pkg.value}`,Ei.design.value&&`Obraz: ${Ei.design.value}`,Ei.note.value.trim()&&`Izoh: ${Ei.note.value.trim()}`].filter(Boolean).join(`
`),s=r.submitter?.value==="whatsapp"?`https://wa.me/${th.phone}?text=${encodeURIComponent(i)}`:`https://t.me/${th.telegram}?text=${encodeURIComponent(i)}`;navigator.clipboard?.writeText(i).catch(()=>{}),window.open(s,"_blank","noopener")});if(Ze){let r=!0;document.addEventListener("visibilitychange",()=>{r=!document.hidden}),We.ticker.add(()=>{r&&(en.dragging||(en.vel*=.94,en.idle+=1,en.angle+=en.vel+(en.idle>90&&V_?.0035:0)),Ze.hero.group.rotation.y=en.angle,Ze.placeCamera(qa.k,z_.dolly),Ze.render())})}function Vw(){O_(),Ow(),$t.refresh();let r;window.addEventListener("resize",()=>{clearTimeout(r),r=setTimeout(()=>{O_(),$t.refresh()},200)}),Ze&&(Ze.placeCamera(qa.k),Ze.render()),requestAnimationFrame(Uw)}Promise.race([document.fonts?.ready??Promise.resolve(),new Promise(r=>setTimeout(r,2500))]).then(Vw);
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
