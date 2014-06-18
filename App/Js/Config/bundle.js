﻿/*!
 AngularJS v1.3.0-beta.4
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,U,s){'use strict';function A(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-beta.4/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function cb(b){if(null==b||Ba(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:C(b)||M(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(F(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else if(cb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Tb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Zc(b,
a,c){for(var d=Tb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Ub(b){return function(a,c){b(c,a)}}function db(){for(var b=ja.length,a;b;){b--;a=ja[b].charCodeAt(0);if(57==a)return ja[b]="A",ja.join("");if(90==a)ja[b]="0";else return ja[b]=String.fromCharCode(a+1),ja.join("")}ja.unshift("0");return ja.join("")}function Vb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function t(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});Vb(b,a);return b}function Q(b){return parseInt(b,
10)}function Wb(b,a){return t(new (t(function(){},{prototype:b})),a)}function z(){}function Ca(b){return b}function Y(b){return function(){return b}}function E(b){return"undefined"===typeof b}function w(b){return"undefined"!==typeof b}function W(b){return null!=b&&"object"===typeof b}function C(b){return"string"===typeof b}function zb(b){return"number"===typeof b}function pa(b){return"[object Date]"===va.call(b)}function M(b){return"[object Array]"===va.call(b)}function F(b){return"function"===typeof b}
function eb(b){return"[object RegExp]"===va.call(b)}function Ba(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function $c(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function ad(b,a,c){var d=[];r(b,function(b,f,h){d.push(a.call(c,b,f,h))});return d}function fb(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Da(b,a){var c=fb(b,a);0<=c&&b.splice(c,1);return a}function $(b,a){if(Ba(b)||b&&b.$evalAsync&&b.$watch)throw Na("cpws");
if(a){if(b===a)throw Na("cpi");if(M(b))for(var c=a.length=0;c<b.length;c++)a.push($(b[c]));else{c=a.$$hashKey;r(a,function(b,c){delete a[c]});for(var d in b)a[d]=$(b[d]);Vb(a,c)}}else(a=b)&&(M(b)?a=$(b,[]):pa(b)?a=new Date(b.getTime()):eb(b)?a=RegExp(b.source):W(b)&&(a=$(b,{})));return a}function Xb(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function wa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;
var c=typeof b,d;if(c==typeof a&&"object"==c)if(M(b)){if(!M(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!wa(b[d],a[d]))return!1;return!0}}else{if(pa(b))return pa(a)&&b.getTime()==a.getTime();if(eb(b)&&eb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ba(b)||Ba(a)||M(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!F(b[d])){if(!wa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!F(a[d]))return!1;
return!0}return!1}function Yb(){return U.securityPolicy&&U.securityPolicy.isActive||U.querySelector&&!(!U.querySelector("[ng-csp]")&&!U.querySelector("[data-ng-csp]"))}function gb(b,a){var c=2<arguments.length?xa.call(arguments,2):[];return!F(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(xa.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function bd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=
s:Ba(a)?c="$WINDOW":a&&U===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function qa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,bd,a?"  ":null)}function Zb(b){return C(b)?JSON.parse(b):b}function Oa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=P(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ga(b){b=v(b).clone();try{b.empty()}catch(a){}var c=v("<div>").append(b).html();try{return 3===b[0].nodeType?P(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+P(b)})}catch(d){return P(c)}}function $b(b){try{return decodeURIComponent(b)}catch(a){}}function ac(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.split("="),d=$b(c[0]),w(d)&&(b=w(c[1])?$b(c[1]):!0,a[d]?M(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function bc(b){var a=[];r(b,function(b,d){M(b)?r(b,function(b){a.push(ya(d,!0)+(!0===b?"":"="+ya(b,!0)))}):a.push(ya(d,!0)+(!0===b?"":"="+ya(b,!0)))});return a.length?a.join("&"):""}function Ab(b){return ya(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ya(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function cd(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,h=["ng:app","ng-app","x-ng-app","data-ng-app"],g=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(h,function(a){h[a]=!0;c(U.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+
a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=g.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&h[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function cc(b,a){var c=function(){b=v(b);if(b.injector()){var c=b[0]===U?"document":ga(b);throw Na("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=dc(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(R&&!d.test(R.name))return c();R.name=R.name.replace(d,"");Pa.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function hb(b,a){a=a||"_";return b.replace(dd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Bb(b,a,c){if(!b)throw Na("areq",a||"?",c||"required");return b}function Qa(b,a,c){c&&M(b)&&(b=b[b.length-1]);Bb(F(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function za(b,a){if("hasOwnProperty"===b)throw Na("badname",a);}function ec(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,h=0;h<f;h++)d=a[h],b&&(b=(e=b)[d]);return!c&&F(b)?gb(e,b):b}function Cb(b){var a=b[0];b=b[b.length-1];if(a===b)return v(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return v(c)}function ed(b){var a=A("$injector"),c=A("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||A;return b.module||
(b.module=function(){var b={};return function(e,f,h){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};h&&l(h);return n}())}}())}function fd(b){t(b,{bootstrap:cc,copy:$,extend:t,equals:wa,element:v,forEach:r,injector:dc,noop:z,bind:gb,toJson:qa,fromJson:Zb,identity:Ca,isUndefined:E,isDefined:w,isString:C,isFunction:F,isObject:W,isNumber:zb,isElement:$c,isArray:M,
version:gd,isDate:pa,lowercase:P,uppercase:Ea,callbacks:{counter:0},$$minErr:A,$$csp:Yb});Ra=ed(R);try{Ra("ngLocale")}catch(a){Ra("ngLocale",[]).provider("$locale",hd)}Ra("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:id});a.provider("$compile",fc).directive({a:jd,input:gc,textarea:gc,form:kd,script:ld,select:md,style:nd,option:od,ngBind:pd,ngBindHtml:qd,ngBindTemplate:rd,ngClass:sd,ngClassEven:td,ngClassOdd:ud,ngCloak:vd,ngController:wd,ngForm:xd,ngHide:yd,ngIf:zd,ngInclude:Ad,
ngInit:Bd,ngNonBindable:Cd,ngPluralize:Dd,ngRepeat:Ed,ngShow:Fd,ngStyle:Gd,ngSwitch:Hd,ngSwitchWhen:Id,ngSwitchDefault:Jd,ngOptions:Kd,ngTransclude:Ld,ngModel:Md,ngList:Nd,ngChange:Od,required:hc,ngRequired:hc,ngValue:Pd}).directive({ngInclude:Qd}).directive(Db).directive(ic);a.provider({$anchorScroll:Rd,$animate:Sd,$browser:Td,$cacheFactory:Ud,$controller:Vd,$document:Wd,$exceptionHandler:Xd,$filter:jc,$interpolate:Yd,$interval:Zd,$http:$d,$httpBackend:ae,$location:be,$log:ce,$parse:de,$rootScope:ee,
$q:fe,$sce:ge,$sceDelegate:he,$sniffer:ie,$templateCache:je,$timeout:ke,$window:le,$$rAF:me,$$asyncCallback:ne})}])}function Sa(b){return b.replace(oe,function(a,b,d,e){return e?d.toUpperCase():d}).replace(pe,"Moz$1")}function Eb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,k,l,n,q,p,u;if(!d||null!=b)for(;e.length;)for(k=e.shift(),l=0,n=k.length;l<n;l++)for(q=v(k[l]),m?q.triggerHandler("$destroy"):m=!m,p=0,q=(u=q.children()).length;p<q;p++)e.push(Fa(u[p]));return f.apply(this,arguments)}
var f=Fa.fn[b],f=f.$original||f;e.$original=f;Fa.fn[b]=e}function O(b){if(b instanceof O)return b;C(b)&&(b=aa(b));if(!(this instanceof O)){if(C(b)&&"<"!=b.charAt(0))throw Fb("nosel");return new O(b)}if(C(b)){var a=U.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);Gb(this,a.childNodes);v(U.createDocumentFragment()).append(this)}else Gb(this,b)}function Hb(b){return b.cloneNode(!0)}function Ga(b){kc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ga(b[a])}function lc(b,
a,c,d){if(w(d))throw Fb("offargs");var e=ka(b,"events");ka(b,"handle")&&(E(a)?r(e,function(a,c){Ta(b,c,a);delete e[c]}):r(a.split(" "),function(a){E(c)?(Ta(b,a,e[a]),delete e[a]):Da(e[a]||[],c)}))}function kc(b,a){var c=b[ib],d=Ua[c];d&&(a?delete Ua[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),lc(b)),delete Ua[c],b[ib]=s))}function ka(b,a,c){var d=b[ib],d=Ua[d||-1];if(w(c))d||(b[ib]=d=++qe,d=Ua[d]={}),d[a]=c;else return d&&d[a]}function mc(b,a,c){var d=ka(b,"data"),e=w(c),f=!e&&
w(a),h=f&&!W(a);d||h||ka(b,"data",d={});if(e)d[a]=c;else if(f){if(h)return d&&d[a];t(d,a)}else return d}function Ib(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function jb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+aa(a)+" "," ")))})}function kb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ");r(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Gb(b,a){if(a){a=a.nodeName||!w(a.length)||Ba(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function nc(b,a){return lb(b,"$"+(a||"ngController")+"Controller")}function lb(b,a,c){b=v(b);9==b[0].nodeType&&(b=b.find("html"));for(a=M(a)?a:[a];b.length;){for(var d=b[0],e=0,f=a.length;e<f;e++)if((c=b.data(a[e]))!==s)return c;b=v(d.parentNode||11===d.nodeType&&d.host)}}function oc(b){for(var a=
0,c=b.childNodes;a<c.length;a++)Ga(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function pc(b,a){var c=mb[a.toLowerCase()];return c&&qc[b.nodeName]&&c}function re(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||U);if(E(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=
function(){return c.defaultPrevented||!1===c.returnValue};var h=Xb(a[e||c.type]||[]);r(h,function(a){a.call(b,c)});8>=V?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ha(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===s&&(c=b.$$hashKey=db()):c=b;return a+":"+c}function Va(b){r(b,this.put,this)}function rc(b){var a,c;"function"==
typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(se,""),c=c.match(te),r(c[1].split(ue),function(b){b.replace(ve,function(b,c,d){a.push(d)})})),b.$inject=a):M(b)?(c=b.length-1,Qa(b[c],"fn"),a=b.slice(0,c)):Qa(b,"fn",!0);return a}function dc(b){function a(a){return function(b,c){if(W(b))r(b,Ub(a));else return a(b,c)}}function c(a,b){za(a,"service");if(F(b)||M(b))b=n.instantiate(b);if(!b.$get)throw Wa("pget",a);return l[a+g]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],
c,d,f,g;r(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(C(a))for(c=Ra(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,g=d.length;f<g;f++){var h=d[f],m=n.get(h[0]);m[h[1]].apply(m,h[2])}else F(a)?b.push(n.invoke(a)):M(a)?b.push(n.invoke(a)):Qa(a,"module")}catch(l){throw M(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),Wa("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===
h)throw Wa("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=h,a[d]=b(d)}catch(e){throw a[d]===h&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],g=rc(a),h,m,k;m=0;for(h=g.length;m<h;m++){k=g[m];if("string"!==typeof k)throw Wa("itkn",k);f.push(e&&e.hasOwnProperty(k)?e[k]:c(k))}a.$inject||(a=a[h]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(M(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return W(e)||F(e)?e:c},get:c,
annotate:rc,has:function(b){return l.hasOwnProperty(b+g)||a.hasOwnProperty(b)}}}var h={},g="Provider",m=[],k=new Va,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,Y(b))}),constant:a(function(a,b){za(a,"constant");l[a]=b;q[a]=b}),decorator:function(a,b){var c=n.get(a+g),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw Wa("unpr",
m.join(" <- "));}),q={},p=q.$injector=f(q,function(a){a=n.get(a+g);return p.invoke(a.$get,a)});r(e(b),function(a){p.invoke(a||z)});return p}function Rd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;r(a,function(a){b||"a"!==P(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=h.getElementById(b))?d.scrollIntoView():(d=e(h.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):
a.scrollTo(0,0)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function ne(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function we(b,a,c,d){function e(a){try{a.apply(null,xa.call(arguments,1))}finally{if(u--,0===u)for(;I.length;)try{I.pop()()}catch(b){c.error(b)}}}function f(a,b){(function nb(){r(D,function(a){a()});y=b(nb,a)})()}function h(){x=null;H!=g.url()&&(H=g.url(),
r(ca,function(a){a(g.url())}))}var g=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,q=b.clearTimeout,p={};g.isMock=!1;var u=0,I=[];g.$$completeOutstandingRequest=e;g.$$incOutstandingRequestCount=function(){u++};g.notifyWhenNoOutstandingRequests=function(a){r(D,function(a){a()});0===u?a():I.push(a)};var D=[],y;g.addPollFn=function(a){E(y)&&f(100,n);D.push(a);return a};var H=k.href,J=a.find("base"),x=null;g.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(H!=
a)return H=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),J.attr("href",J.attr("href"))):(x=a,c?k.replace(a):k.href=a),g}else return x||k.href.replace(/%27/g,"'")};var ca=[],S=!1;g.onUrlChange=function(a){if(!S){if(d.history)v(b).on("popstate",h);if(d.hashchange)v(b).on("hashchange",h);else g.addPollFn(h);S=!0}ca.push(a);return a};g.baseHref=function(){var a=J.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var N={},Z="",da=g.baseHref();g.cookies=function(a,b){var d,
e,f,g;if(a)b===s?m.cookie=escape(a)+"=;path="+da+";expires=Thu, 01 Jan 1970 00:00:00 GMT":C(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+da).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==Z)for(Z=m.cookie,d=Z.split("; "),N={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=unescape(e.substring(0,g)),N[a]===s&&(N[a]=unescape(e.substring(g+1))));return N}};g.defer=function(a,b){var c;u++;c=n(function(){delete p[c];
e(a)},b||0);p[c]=!0;return c};g.defer.cancel=function(a){return p[a]?(delete p[a],q(a),e(z),!0):!1}}function Td(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new we(b,d,a,c)}]}function Ud(){this.$get=function(){function b(b,d){function e(a){a!=n&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw A("$cacheFactory")("iid",b);var h=0,g=t({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,q=null;
return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!E(b))return a in m||h++,m[a]=b,h>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete l[a]}delete m[a];h--},removeAll:function(){m={};h=0;l={};n=q=null},destroy:function(){l=g=m=null;delete a[b]},info:function(){return t({},g,{size:h})}}}var a={};
b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function je(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function fc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,f=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,h=/^<\s*(tr|th|td|thead|tbody|tfoot)(\s+[^>]*)?>/i,g=/^(on[a-z]+|formaction)$/;this.directive=function k(a,e){za(a,"directive");C(a)?(Bb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+
d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);F(g)?g={compile:Y(g)}:!g.compile&&g.link&&(g.compile=Y(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(h){d(h)}});return e}])),c[a].push(e)):r(a,Ub(k));return this};this.aHrefSanitizationWhitelist=function(b){return w(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(b){return w(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,n,q,p,u,I,D,y,H,J,x){function ca(a,b,c,d,e){a instanceof v||(a=v(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=v(b).wrap("<span></span>").parent()[0])});var f=N(a,b,a,c,d,e);S(a,"ng-scope");return function(b,
c,d){Bb(b,"scope");var e=c?Ia.clone.call(a):a;r(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var g=e.length;d<g;d++){var h=e[d].nodeType;1!==h&&9!==h||e.eq(d).data("$scope",b)}c&&c(e,b);f&&f(b,e,e);return e}}function S(a,b){try{a.addClass(b)}catch(c){}}function N(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,n,p,q,u;f=c.length;var ba=Array(f);for(p=0;p<f;p++)ba[p]=c[p];u=p=0;for(q=h.length;p<q;u++)k=ba[u],c=h[p++],f=h[p++],l=v(k),c?(c.scope?(n=a.$new(),l.data("$scope",n)):n=a,(l=c.transclude)||
!e&&b?c(f,n,k,d,Z(a,l||b)):c(f,n,k,d,e)):f&&f(a,k.childNodes,s,e)}for(var h=[],k,l,n,p,q=0;q<a.length;q++)k=new Jb,l=da(a[q],[],k,0===q?d:s,e),(f=l.length?Xa(l,a[q],k,b,c,null,[],[],f):null)&&f.scope&&S(v(a[q]),"ng-scope"),k=f&&f.terminal||!(n=a[q].childNodes)||!n.length?null:N(n,f?f.transclude:b),h.push(f,k),p=p||f||k,f=null;return p?g:null}function Z(a,b){return function(c,d,e){var f=!1;c||(c=a.$new(),f=c.$$transcluded=!0);d=b(c,d,e);if(f)d.on("$destroy",gb(c,c.$destroy));return d}}function da(a,
b,c,d,g){var h=c.$attr,k;switch(a.nodeType){case 1:w(b,la(Ja(a).toLowerCase()),"E",d,g);var l,n,p;k=a.attributes;for(var q=0,u=k&&k.length;q<u;q++){var I=!1,D=!1;l=k[q];if(!V||8<=V||l.specified){n=l.name;p=la(n);ma.test(p)&&(n=hb(p.substr(6),"-"));var H=p.replace(/(Start|End)$/,"");p===H+"Start"&&(I=n,D=n.substr(0,n.length-5)+"end",n=n.substr(0,n.length-6));p=la(n.toLowerCase());h[p]=n;c[p]=l=aa(l.value);pc(a,p)&&(c[p]=!0);ha(a,b,l,p);w(b,p,"A",d,g,I,D)}}a=a.className;if(C(a)&&""!==a)for(;k=f.exec(a);)p=
la(k[2]),w(b,p,"C",d,g)&&(c[p]=aa(k[3])),a=a.substr(k.index+k[0].length);break;case 3:O(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))p=la(k[1]),w(b,p,"M",d,g)&&(c[p]=aa(k[2]))}catch(x){}}b.sort(A);return b}function B(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return v(d)}function K(a,b,c){return function(d,e,f,g,h){e=B(e[0],
b,c);return a(d,e,f,g,h)}}function Xa(a,c,d,e,f,g,h,k,p){function q(a,b,c,d){if(a){c&&(a=K(a,c,d));a.require=G.require;if(N===G||G.$$isolateScope)a=sc(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=K(b,c,d));b.require=G.require;if(N===G||G.$$isolateScope)b=sc(b,{isolateScope:!0});k.push(b)}}function D(a,b,c){var d,e="data",f=!1;if(C(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),f=f||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!f)throw ia("ctreq",
a,ha);}else M(a)&&(d=[],r(a,function(a){d.push(D(a,b,c))}));return d}function H(a,e,f,g,p){function q(a,b){var c;2>arguments.length&&(b=a,a=s);Ka&&(c=da);return p(a,b,c)}var x,ba,y,B,ca,K,da={},w;x=c===f?d:Xb(d,new Jb(v(f),d.$attr));ba=x.$$element;if(N){var xe=/^\s*([@=&])(\??)\s*(\w*)\s*$/;g=v(f);K=e.$new(!0);Z&&Z===N.$$originalDirective?g.data("$isolateScope",K):g.data("$isolateScopeNoTemplate",K);S(g,"ng-isolate-scope");r(N.scope,function(a,c){var d=a.match(xe)||[],f=d[3]||c,g="?"==d[2],d=d[1],
h,k,n,p;K.$$isolateBindings[c]=d+f;switch(d){case "@":x.$observe(f,function(a){K[c]=a});x.$$observers[f].$$scope=e;x[f]&&(K[c]=b(x[f])(e));break;case "=":if(g&&!x[f])break;k=u(x[f]);p=k.literal?wa:function(a,b){return a===b};n=k.assign||function(){h=K[c]=k(e);throw ia("nonassign",x[f],N.name);};h=K[c]=k(e);K.$watch(function(){var a=k(e);p(a,K[c])||(p(a,h)?n(e,a=K[c]):K[c]=a);return h=a},null,k.literal);break;case "&":k=u(x[f]);K[c]=function(a){return k(e,a)};break;default:throw ia("iscp",N.name,c,
a);}})}w=p&&q;J&&r(J,function(a){var b={$scope:a===N||a.$$isolateScope?K:e,$element:ba,$attrs:x,$transclude:w},c;ca=a.controller;"@"==ca&&(ca=x[a.name]);c=I(ca,b);da[a.name]=c;Ka||ba.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(y=h.length;g<y;g++)try{B=h[g],B(B.isolateScope?K:e,ba,x,B.require&&D(B.require,ba,da),w)}catch(t){n(t,ga(ba))}g=e;N&&(N.template||null===N.templateUrl)&&(g=K);a&&a(g,f.childNodes,s,p);for(g=k.length-1;0<=g;g--)try{B=k[g],B(B.isolateScope?
K:e,ba,x,B.require&&D(B.require,ba,da),w)}catch(L){n(L,ga(ba))}}p=p||{};for(var x=-Number.MAX_VALUE,y,J=p.controllerDirectives,N=p.newIsolateScopeDirective,Z=p.templateDirective,w=p.nonTlbTranscludeDirective,Xa=!1,Ka=p.hasElementTranscludeDirective,L=d.$$element=v(c),G,ha,t,A=e,O,ma=0,Q=a.length;ma<Q;ma++){G=a[ma];var T=G.$$start,V=G.$$end;T&&(L=B(c,T,V));t=s;if(x>G.priority)break;if(t=G.scope)y=y||G,G.templateUrl||(R("new/isolated scope",N,G,L),W(t)&&(N=G));ha=G.name;!G.templateUrl&&G.controller&&
(t=G.controller,J=J||{},R("'"+ha+"' controller",J[ha],G,L),J[ha]=G);if(t=G.transclude)Xa=!0,G.$$tlb||(R("transclusion",w,G,L),w=G),"element"==t?(Ka=!0,x=G.priority,t=B(c,T,V),L=d.$$element=v(U.createComment(" "+ha+": "+d[ha]+" ")),c=L[0],ob(f,v(xa.call(t,0)),c),A=ca(t,e,x,g&&g.name,{nonTlbTranscludeDirective:w})):(t=v(Hb(c)).contents(),L.empty(),A=ca(t,e));if(G.template)if(R("template",Z,G,L),Z=G,t=F(G.template)?G.template(L,d):G.template,t=tc(t),G.replace){g=G;t=E(t);c=t[0];if(1!=t.length||1!==c.nodeType)throw ia("tplrt",
ha,"");ob(f,L,c);Q={$attr:{}};t=da(c,[],Q);var X=a.splice(ma+1,a.length-(ma+1));N&&nb(t);a=a.concat(t).concat(X);z(d,Q);Q=a.length}else L.html(t);if(G.templateUrl)R("template",Z,G,L),Z=G,G.replace&&(g=G),H=P(a.splice(ma,a.length-ma),L,d,f,A,h,k,{controllerDirectives:J,newIsolateScopeDirective:N,templateDirective:Z,nonTlbTranscludeDirective:w}),Q=a.length;else if(G.compile)try{O=G.compile(L,d,A),F(O)?q(null,O,T,V):O&&q(O.pre,O.post,T,V)}catch(Y){n(Y,ga(L))}G.terminal&&(H.terminal=!0,x=Math.max(x,G.priority))}H.scope=
y&&!0===y.scope;H.transclude=Xa&&A;p.hasElementTranscludeDirective=Ka;return H}function nb(a){for(var b=0,c=a.length;b<c;b++)a[b]=Wb(a[b],{$$isolateScope:!0})}function w(b,e,f,g,h,l,p){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var q;e=a.get(e+d);for(var u=0,I=e.length;u<I;u++)try{q=e[u],(g===s||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(l&&(q=Wb(q,{$$start:l,$$end:p})),b.push(q),h=q)}catch(x){n(x)}}return h}function z(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&
(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(S(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function E(a){var b;a=aa(a);if(b=h.exec(a)){b=b[1].toLowerCase();a=v("<table>"+a+"</table>");if(/(thead|tbody|tfoot)/.test(b))return a.children(b);a=a.children("tbody");return"tr"===b?a.children("tr"):a.children("tr").contents()}return v("<div>"+
a+"</div>").contents()}function P(a,b,c,d,e,f,g,h){var k=[],l,n,u=b[0],I=a.shift(),x=t({},I,{templateUrl:null,transclude:null,replace:null,$$originalDirective:I}),D=F(I.templateUrl)?I.templateUrl(b,c):I.templateUrl;b.empty();q.get(H.getTrustedResourceUrl(D),{cache:p}).success(function(p){var q,H;p=tc(p);if(I.replace){p=E(p);q=p[0];if(1!=p.length||1!==q.nodeType)throw ia("tplrt",I.name,D);p={$attr:{}};ob(d,b,q);var y=da(q,[],p);W(I.scope)&&nb(y);a=y.concat(a);z(c,p)}else q=u,b.html(p);a.unshift(x);
l=Xa(a,q,c,e,b,I,f,g,h);r(d,function(a,c){a==q&&(d[c]=b[0])});for(n=N(b[0].childNodes,e);k.length;){p=k.shift();H=k.shift();var B=k.shift(),J=k.shift(),y=b[0];if(H!==u){var K=H.className;h.hasElementTranscludeDirective&&I.replace||(y=Hb(q));ob(B,v(H),y);S(v(y),K)}H=l.transclude?Z(p,l.transclude):J;l(n,p,y,d,H)}k=null}).error(function(a,b,c,d){throw ia("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):l(n,b,c,d,e)}}function A(a,b){var c=b.priority-a.priority;
return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function R(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,ga(d));}function O(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:Y(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);S(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function Ka(a,b){if("srcdoc"==b)return H.HTML;var c=Ja(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return H.RESOURCE_URL}
function ha(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===Ja(a))throw ia("selmulti",ga(a));c.push({priority:100,compile:function(){return{pre:function(c,d,h){d=h.$$observers||(h.$$observers={});if(g.test(e))throw ia("nodomevents");if(f=b(h[e],!0,Ka(a,e)))h[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)})}}}})}}function ob(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=
0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);c[v.expando]=d[v.expando];d=1;for(e=b.length;d<e;d++)f=b[d],v(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function sc(a,b){return t(function(){return a.apply(null,arguments)},a,b)}var Jb=function(a,b){this.$$element=a;this.$attr=b||{}};Jb.prototype={$normalize:la,$addClass:function(a){a&&0<
a.length&&J.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&J.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=uc(a,b),d=uc(b,a);0===c.length?J.removeClass(this.$$element,d):0===d.length?J.addClass(this.$$element,c):J.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=pc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=hb(a,"-"));e=Ja(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&
"src"===a)this[a]=b=x(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){n(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);D.$evalAsync(function(){e.$$inter||b(c[a])});return function(){Da(e,b)}}};var Q=b.startSymbol(),T=b.endSymbol(),tc="{{"==Q||"}}"==T?Ca:function(a){return a.replace(/\{\{/g,Q).replace(/}}/g,T)},ma=/^ngAttr[A-Z]/;return ca}]}
function la(b){return Sa(b.replace(ye,""))}function uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var h=d[f],g=0;g<e.length;g++)if(h==e[g])continue a;c+=(0<c.length?" ":"")+h}return c}function Vd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){za(a,"controller");W(a)?t(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var h,g,m;C(e)&&(h=e.match(a),g=h[1],m=h[3],e=b.hasOwnProperty(g)?b[g]:ec(f.$scope,g,!0)||ec(d,
g,!0),Qa(e,g,!0));h=c.instantiate(e,f);if(m){if(!f||"object"!=typeof f.$scope)throw A("$controller")("noscp",g||e.name,m);f.$scope[m]=h}return h}}]}function Wd(){this.$get=["$window",function(b){return v(b.document)}]}function Xd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function vc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=P(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function wc(b){var a=
W(b)?b:s;return function(c){a||(a=vc(b));return c?a[P(c)]||null:a}}function xc(b,a,c){if(F(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function $d(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){C(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Zb(d)));return d}],transformRequest:[function(a){return W(a)&&"[object File]"!==va.call(a)&&"[object Blob]"!==va.call(a)?qa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:$(d),put:$(d),patch:$(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],h=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,q){function p(a){function c(a){var b=t({},a,{data:xc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},f=function(a){function b(a){var c;
r(a,function(b,d){F(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=t({},a.headers),f,g,c=t({},c.common,c[P(a.method)]);b(c);b(d);a:for(f in c){a=P(f);for(g in d)if(P(g)===a)continue a;d[f]=c[f]}return d}(a);t(d,a);d.headers=f;d.method=Ea(d.method);(a=Kb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var g=[function(a){f=a.headers;var b=xc(a.data,wc(f),a.transformRequest);E(a.data)&&r(f,function(a,b){"content-type"===P(b)&&delete f[b]});
E(a.withCredentials)&&!E(e.withCredentials)&&(a.withCredentials=e.withCredentials);return u(a,b,f).then(c,c)},s],h=n.when(d);for(r(y,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();var k=g.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};
return h}function u(b,c,f){function h(a,b,c,e){y&&(200<=a&&300>a?y.put(s,[a,b,vc(c),e]):y.remove(s));k(b,a,c,e);d.$$phase||d.$apply()}function k(a,c,d,e){c=Math.max(c,0);(200<=c&&300>c?q.resolve:q.reject)({data:a,status:c,headers:wc(d),config:b,statusText:e})}function m(){var a=fb(p.pendingRequests,b);-1!==a&&p.pendingRequests.splice(a,1)}var q=n.defer(),u=q.promise,y,r,s=I(b.url,b.params);p.pendingRequests.push(b);u.then(m,m);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(y=W(b.cache)?b.cache:
W(e.cache)?e.cache:D);if(y)if(r=y.get(s),w(r)){if(r.then)return r.then(m,m),r;M(r)?k(r[1],r[0],$(r[2]),r[3]):k(r,200,{},"OK")}else y.put(s,u);E(r)&&a(b.method,s,c,h,f,b.timeout,b.withCredentials,b.responseType);return u}function I(a,b){if(!b)return a;var c=[];Zc(b,function(a,b){null===a||E(a)||(M(a)||(a=[a]),r(a,function(a){W(a)&&(a=qa(a));c.push(ya(b)+"="+ya(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var D=c("$http"),y=[];r(f,function(a){y.unshift(C(a)?q.get(a):q.invoke(a))});
r(h,function(a,b){var c=C(a)?q.get(a):q.invoke(a);y.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});p.pendingRequests=[];(function(a){r(arguments,function(a){p[a]=function(b,c){return p(t(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){p[a]=function(b,c,d){return p(t(d||{},{method:a,url:b,data:c}))}})})("post","put");p.defaults=e;return p}]}function ze(b){if(8>=V&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!R.XMLHttpRequest))return new R.ActiveXObject("Microsoft.XMLHTTP");if(R.XMLHttpRequest)return new R.XMLHttpRequest;throw A("$httpBackend")("noxhr");}function ae(){this.$get=["$browser","$window","$document",function(b,a,c){return Ae(b,ze,b.defer,a.angular.callbacks,c[0])}]}function Ae(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),h=null;f.type="text/javascript";f.src=a;f.async=!0;h=function(a){Ta(f,"load",h);Ta(f,"error",h);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};pb(f,"load",h);pb(f,"error",h);e.body.appendChild(f);return h}var h=-1;return function(e,m,k,l,n,q,p,u){function I(){y=h;J&&J();x&&x.abort()}function D(a,d,e,f,g){S&&c.cancel(S);J=x=null;0===d&&(d=e?200:"file"==ra(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(z)}var y;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==P(e)){var H="_"+(d.counter++).toString(36);d[H]=function(a){d[H].data=
a;d[H].called=!0};var J=f(m.replace("JSON_CALLBACK","angular.callbacks."+H),H,function(a,b){D(l,a,d[H].data,"",b);d[H]=z})}else{var x=a(e);x.open(e,m,!0);r(n,function(a,b){w(a)&&x.setRequestHeader(b,a)});x.onreadystatechange=function(){if(x&&4==x.readyState){var a=null,b=null;y!==h&&(a=x.getAllResponseHeaders(),b="response"in x?x.response:x.responseText);D(l,y||x.status,b,a,x.statusText||"")}};p&&(x.withCredentials=!0);if(u)try{x.responseType=u}catch(s){if("json"!==u)throw s;}x.send(k||null)}if(0<
q)var S=c(I,q);else q&&q.then&&q.then(I)}}function Yd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,k,l){for(var n,q,p=0,u=[],I=f.length,D=!1,y=[];p<I;)-1!=(n=f.indexOf(b,p))&&-1!=(q=f.indexOf(a,n+h))?(p!=n&&u.push(f.substring(p,n)),u.push(p=c(D=f.substring(n+h,q))),p.exp=D,p=q+g,D=!0):(p!=I&&u.push(f.substring(p)),p=I);(I=u.length)||(u.push(""),I=
1);if(l&&1<u.length)throw yc("noconcat",f);if(!k||D)return y.length=I,p=function(a){try{for(var b=0,c=I,g;b<c;b++)"function"==typeof(g=u[b])&&(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null===g||E(g)?g="":"string"!=typeof g&&(g=qa(g))),y[b]=g;return y.join("")}catch(h){a=yc("interr",f,h.toString()),d(a)}},p.exp=f,p.parts=u,p}var h=b.length,g=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Zd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,
h,g,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),q=n.promise,p=0,u=w(m)&&!m;g=w(g)?g:0;q.then(null,null,d);q.$$intervalId=k(function(){n.notify(p++);0<g&&p>=g&&(n.resolve(p),l(q.$$intervalId),delete e[q.$$intervalId]);u||b.$apply()},h);e[q.$$intervalId]=n;return q}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function hd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",
GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function zc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=Ab(b[a]);return b.join("/")}function Ac(b,a,c){b=ra(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=Q(b.port)||Be[b.protocol]||null}
function Bc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ra(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=ac(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function na(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ya(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Lb(b){return b.substr(0,Ya(b).lastIndexOf("/")+1)}function Cc(b,a){this.$$html5=!0;a=a||
"";var c=Lb(b);Ac(b,this,b);this.$$parse=function(a){var e=na(c,a);if(!C(e))throw Mb("ipthprfx",a,c);Bc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=bc(this.$$search),b=this.$$hash?"#"+Ab(this.$$hash):"";this.$$url=zc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=na(b,d))!==s)return d=e,(e=na(a,e))!==s?c+(na("/",e)||e):b+d;if((e=na(c,d))!==s)return c+e;if(c==d+"/")return c}}function Nb(b,a){var c=
Lb(b);Ac(b,this,b);this.$$parse=function(d){var e=na(b,d)||na(c,d),e="#"==e.charAt(0)?na(a,e):this.$$html5?e:"";if(!C(e))throw Mb("ihshprfx",d,a);Bc(e,this,b);d=this.$$path;var f=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=bc(this.$$search),e=this.$$hash?"#"+Ab(this.$$hash):"";this.$$url=zc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Ya(b)==
Ya(a))return a}}function Dc(b,a){this.$$html5=!0;Nb.apply(this,arguments);var c=Lb(b);this.$$rewrite=function(d){var e;if(b==Ya(d))return d;if(e=na(c,d))return b+a+e;if(c===d+"/")return c}}function qb(b){return function(){return this[b]}}function Ec(b,a){return function(c){if(E(c))return this[b];this[b]=a(c);this.$$compose();return this}}function be(){var b="",a=!1;this.hashPrefix=function(a){return w(a)?(b=a,this):b};this.html5Mode=function(b){return w(b)?(a=b,this):a};this.$get=["$rootScope","$browser",
"$sniffer","$rootElement",function(c,d,e,f){function h(a){c.$broadcast("$locationChangeSuccess",g.absUrl(),a)}var g,m=d.baseHref(),k=d.url();a?(m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/"),e=e.history?Cc:Dc):(m=Ya(k),e=Nb);g=new e(m,"#"+b);g.$$parse(g.$$rewrite(k));f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=v(a.target);"a"!==P(b[0].nodeName);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href");W(e)&&"[object SVGAnimatedString]"===e.toString()&&
(e=ra(e.animVal).href);var h=g.$$rewrite(e);e&&(!b.attr("target")&&h&&!a.isDefaultPrevented())&&(a.preventDefault(),h!=d.url()&&(g.$$parse(h),c.$apply(),R.angular["ff-684208-preventDefault"]=!0))}});g.absUrl()!=k&&d.url(g.absUrl(),!0);d.onUrlChange(function(a){g.absUrl()!=a&&(c.$evalAsync(function(){var b=g.absUrl();g.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(g.$$parse(b),d.url(b)):h(b)}),c.$$phase||c.$digest())});var l=0;c.$watch(function(){var a=d.url(),b=g.$$replace;
l&&a==g.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",g.absUrl(),a).defaultPrevented?g.$$parse(a):(d.url(g.absUrl(),b),h(a))}));g.$$replace=!1;return l});return g}]}function ce(){var b=!0,a=this;this.debugEnabled=function(a){return w(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}
function e(a){var b=c.console||{},e=b[a]||b.log||z;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ea(b,a){if("constructor"===b)throw Aa("isecfld",a);return b}function Za(b,a){if(b){if(b.constructor===b)throw Aa("isecfn",a);if(b.document&&
b.location&&b.alert&&b.setInterval)throw Aa("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Aa("isecdom",a);}return b}function rb(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,h=0;1<a.length;h++){f=ea(a.shift(),d);var g=b[f];g||(g={},b[f]=g);b=g;b.then&&e.unwrapPromises&&(sa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}f=ea(a.shift(),d);return b[f]=c}function Fc(b,a,c,d,e,f,h){ea(b,f);ea(a,f);ea(c,f);ea(d,f);ea(e,f);return h.unwrapPromises?
function(g,h){var k=h&&h.hasOwnProperty(b)?h:g,l;if(null==k)return k;(k=k[b])&&k.then&&(sa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(sa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(sa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d)return k;if(null==k)return s;(k=k[d])&&k.then&&(sa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=
a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(sa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);return k}:function(f,h){var k=h&&h.hasOwnProperty(b)?h:f;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function Ce(b,a){ea(b,a);return function(a,d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function De(b,a,c){ea(b,c);ea(a,
c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function Gc(b,a,c){if(Ob.hasOwnProperty(b))return Ob[b];var d=b.split("."),e=d.length,f;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)f=6>e?Fc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,h;do h=Fc(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=s,b=h;while(g<e);return h};else{var h="var p;\n";r(d,function(b,d){ea(b,c);h+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+
b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var h=h+"return s;",g=new Function("s","k","pw",h);g.toString=Y(h);f=a.unwrapPromises?function(a,b){return g(a,b,sa)}:g}else f=De(d[0],d[1],c);else f=Ce(d[0],c);"hasOwnProperty"!==b&&(Ob[b]=f);return f}function de(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=
function(b){return w(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return w(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;sa=function(b){a.logPromiseWarnings&&!Hc.hasOwnProperty(b)&&(Hc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];
e=new Pb(a);e=(new $a(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return z}}}]}function fe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Ee(function(a){b.$evalAsync(a)},a)}]}function Ee(b,a){function c(a){return a}function d(a){return h(a)}var e=function(){var h=[],k,l;return l={resolve:function(a){if(h){var c=h;h=s;k=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(g(a))},
notify:function(a){if(h){var c=h;h.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,g){var l=e(),I=function(d){try{l.resolve((F(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},D=function(b){try{l.resolve((F(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},y=function(b){try{l.notify((F(g)?g:c)(b))}catch(d){a(d)}};h?h.push([I,D,y]):k.then(I,D,y);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):
d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&F(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&F(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},h=function(a){var b=e();b.reject(a);return b.promise},g=function(c){return{then:function(f,g){var h=e();b(function(){try{h.resolve((F(g)?
g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:h,when:function(g,k,l,n){var q=e(),p,u=function(b){try{return(F(k)?k:c)(b)}catch(d){return a(d),h(d)}},I=function(b){try{return(F(l)?l:d)(b)}catch(c){return a(c),h(c)}},D=function(b){try{return(F(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(g).then(function(a){p||(p=!0,q.resolve(f(a).then(u,I,D)))},function(a){p||(p=!0,q.resolve(I(a)))},function(a){p||q.notify(D(a))})});return q.promise},all:function(a){var b=e(),c=0,d=M(a)?
[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function me(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:
function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function ee(){var b=10,a=A("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,h){function g(){this.$id=db();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=
[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(q.$$phase)throw a("inprog",q.$$phase);q.$$phase=b}function k(a,b){var c=f(a);Qa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}g.prototype={constructor:g,$new:function(a){a?(a=new g,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=
new a,a.$id=db());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!F(b)){var h=k(b||z,"listener");g.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var m=g.fn;
g.fn=function(a,b,c){m.call(this,a,b,c);Da(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Da(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,h=1<b.length,k=0,m=f(a),l=[],n={},q=!0,r=0;return this.$watch(function(){d=m(c);var a,b;if(W(d))if(cb(d))for(e!==l&&(e=l,r=e.length=0,k++),a=d.length,r!==a&&(k++,e.length=r=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==d[b]||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},r=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?
e[b]!==d[b]&&(k++,e[b]=d[b]):(r++,e[b]=d[b],k++));if(r>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,k++);return k},function(){q?(q=!1,b(d,d,c)):b(d,g,c);if(h)if(W(d))if(cb(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)Qb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,l=this.$$postDigestQueue,r,x,s=b,S,N=[],w,t,B;m("$digest");c=null;do{x=!1;for(S=this;k.length;){try{B=k.shift(),
B.scope.$eval(B.expression)}catch(v){q.$$phase=null,e(v)}c=null}a:do{if(h=S.$$watchers)for(r=h.length;r--;)try{if(d=h[r])if((f=d.get(S))!==(g=d.last)&&!(d.eq?wa(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))x=!0,c=d,d.last=d.eq?$(f):f,d.fn(f,g===n?f:g,S),5>s&&(w=4-s,N[w]||(N[w]=[]),t=F(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,t+="; newVal: "+qa(f)+"; oldVal: "+qa(g),N[w].push(t));else if(d===c){x=!1;break a}}catch(C){q.$$phase=null,e(C)}if(!(h=S.$$childHead||S!==this&&
S.$$nextSibling))for(;S!==this&&!(h=S.$$nextSibling);)S=S.$parent}while(S=h);if((x||k.length)&&!s--)throw q.$$phase=null,a("infdig",b,qa(N));}while(x||k.length);for(q.$$phase=null;l.length;)try{l.shift()()}catch(z){e(z)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==q){r(this.$$listenerCount,gb(null,l,this));a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&
(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);for(var b in this)Qb.call(this,b)&&(this[b]=null);this.$$destroyed=!0}}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){q.$$phase||q.$$asyncQueue.length||h.defer(function(){q.$$asyncQueue.length&&q.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),
this.$eval(a)}catch(b){e(b)}finally{q.$$phase=null;try{q.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[fb(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},
k=[h].concat(xa.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(xa.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,
g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var q=new g;return q}]}function id(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file|blob):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!V||
8<=V)if(f=ra(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Fe(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw ta("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(eb(b))return RegExp("^"+b.source+"$");throw ta("imatcher");}function Ic(b){var a=[];w(b)&&r(b,function(b){a.push(Fe(b))});return a}function he(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];
this.resourceUrlWhitelist=function(a){arguments.length&&(b=Ic(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Ic(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ta("unsafe");};c.has("$sanitize")&&
(e=c.get("$sanitize"));var f=d(),h={};h[fa.HTML]=d(f);h[fa.CSS]=d(f);h[fa.URL]=d(f);h[fa.JS]=d(f);h[fa.RESOURCE_URL]=d(h[fa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ta("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw ta("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var f=h.hasOwnProperty(c)?h[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var f=
ra(d.toString()),l,n,q=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Kb(f):b[l].exec(f.href)){q=!0;break}if(q)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Kb(f):a[l].exec(f.href)){q=!1;break}if(q)return d;throw ta("insecurl",d.toString());}if(c===fa.HTML)return e(d);throw ta("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function ge(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,
c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ta("iequirks");var e=$(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ca);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,h=e.getTrusted,g=e.trustAs;r(fa,function(a,b){var c=P(b);e[Sa("parse_as_"+c)]=function(b){return f(a,b)};e[Sa("get_trusted_"+c)]=function(b){return h(a,
b)};e[Sa("trust_as_"+c)]=function(b){return g(a,b)}});return e}]}function ie(){this.$get=["$window","$document",function(b,a){var c={},d=Q((/android (\d+)/.exec(P((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},h=f.documentMode,g,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,n=!1;if(k){for(var q in k)if(l=m.exec(q)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||g+"Transition"in
k);n=!!("animation"in k||g+"Animation"in k);!d||l&&n||(l=C(f.body.style.webkitTransition),n=C(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!h||7<h),hasEvent:function(a){if("input"==a&&9==V)return!1;if(E(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Yb(),vendorPrefix:g,transitions:l,animations:n,android:d,msie:V,msieDocumentMode:h}}]}function ke(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",
function(b,a,c,d){function e(e,g,m){var k=c.defer(),l=k.promise,n=w(m)&&!m;g=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},g);l.$$timeoutId=g;f[g]=k;return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ra(b,a){var c=b;V&&(T.setAttribute("href",c),c=T.href);T.setAttribute("href",c);return{href:T.href,protocol:T.protocol?
T.protocol.replace(/:$/,""):"",host:T.host,search:T.search?T.search.replace(/^\?/,""):"",hash:T.hash?T.hash.replace(/^#/,""):"",hostname:T.hostname,port:T.port,pathname:"/"===T.pathname.charAt(0)?T.pathname:"/"+T.pathname}}function Kb(b){b=C(b)?ra(b):b;return b.protocol===Jc.protocol&&b.host===Jc.host}function le(){this.$get=Y(R)}function jc(b){function a(d,e){if(W(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
c)}}];a("currency",Kc);a("date",Lc);a("filter",Ge);a("json",He);a("limitTo",Ie);a("lowercase",Je);a("number",Mc);a("orderBy",Nc);a("uppercase",Ke)}function Ge(){return function(b,a,c){if(!M(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Pa.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Qb.call(a,d)&&c(a[d],b[d]))return!0;
return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a=
{$:a};case "object":for(var h in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(h);break;case "function":e.push(a);break;default:return b}d=[];for(h=0;h<b.length;h++){var g=b[h];e.check(g)&&d.push(g)}return d}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){E(d)&&(d=a.CURRENCY_SYM);return Oc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Mc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Oc(b,a.PATTERNS[0],
a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Oc(b,a,c,d,e){if(null==b||!isFinite(b)||W(b))return"";var f=0>b;b=Math.abs(b);var h=b+"",g="",m=[],k=!1;if(-1!==h.indexOf("e")){var l=h.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?h="0":(g=h,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(g=b.toFixed(e));else{h=(h.split(Pc)[1]||"").length;E(e)&&(e=Math.min(Math.max(a.minFrac,h),a.maxFrac));h=Math.pow(10,e);b=Math.round(b*h)/h;b=(""+b).split(Pc);h=b[0];b=b[1]||"";var l=0,n=a.lgSize,q=a.gSize;if(h.length>=n+q)for(l=h.length-
n,k=0;k<l;k++)0===(l-k)%q&&0!==k&&(g+=c),g+=h.charAt(k);for(k=l;k<h.length;k++)0===(h.length-k)%n&&0!==k&&(g+=c),g+=h.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(g+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(g);m.push(f?a.negSuf:a.posSuf);return m.join("")}function sb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function X(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return sb(e,a,d)}}
function tb(b,a){return function(c,d){var e=c["get"+b](),f=Ea(a?"SHORT"+b:b);return d[f][e]}}function Qc(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Rc(b){return function(a){var c=Qc(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return sb(a,b)}}function Lc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,h=0,g=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&
(f=Q(b[9]+b[10]),h=Q(b[9]+b[11]));g.call(a,Q(b[1]),Q(b[2])-1,Q(b[3]));f=Q(b[4]||0)-f;h=Q(b[5]||0)-h;g=Q(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,h,g,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",h=[],g,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;C(c)&&(c=Le.test(c)?Q(c):a(c));zb(c)&&(c=new Date(c));if(!pa(c))return c;for(;e;)(m=Me.exec(e))?(h=h.concat(xa.call(m,1)),e=
h.pop()):(h.push(e),e=null);r(h,function(a){g=Ne[a];f+=g?g(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function He(){return function(b){return qa(b,!0)}}function Ie(){return function(b,a){if(!M(b)&&!C(b))return b;a=Q(a);if(C(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Nc(b){return function(a,c,d){function e(a,
b){return Oa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!M(a)||!c)return a;c=M(c)?c:[c];c=ad(c,function(a){var c=!1,d=a||Ca;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var h=[],g=0;g<a.length;g++)h.push(a[g]);
return h.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function ua(b){F(b)&&(b={link:b});b.restrict=b.restrict||"AC";return Y(b)}function Sc(b,a,c,d){function e(a,c){c=c?"-"+hb(c,"-"):"";d.removeClass(b,(a?ub:vb)+c);d.addClass(b,(a?vb:ub)+c)}var f=this,h=b.parent().controller("form")||wb,g=0,m=f.$error={},k=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;h.$addControl(f);b.addClass(La);e(!0);f.$addControl=function(a){za(a.$name,
"input");k.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(m,function(b,c){f.$setValidity(c,!0,a)});Da(k,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Da(d,c),d.length||(g--,g||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),h.$setValidity(a,!0,f)));else{g||e(b);if(d){if(-1!=fb(d,c))return}else m[a]=d=[],g++,e(!1,a),h.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,La);d.addClass(b,
xb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.removeClass(b,xb);d.addClass(b,La);f.$dirty=!1;f.$pristine=!0;r(k,function(a){a.$setPristine()})}}function oa(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Oe(b,a,c){var d=c.prop("validity");W(d)&&b.$parsers.push(function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)})}function ab(b,a,c,d,e,f){var h=a.prop("validity");if(!e.android){var g=!1;a.on("compositionstart",
function(a){g=!0});a.on("compositionend",function(){g=!1;m()})}var m=function(){if(!g){var e=a.val();Oa(c.ngTrim||"T")&&(e=aa(e));if(d.$viewValue!==e||h&&""===e&&!h.valueMissing)b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",m);else{var k,l=function(){k||(k=f.defer(function(){m();k=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||l()});if(e.hasEvent("paste"))a.on("paste cut",l)}a.on("change",m);d.$render=
function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var n=c.ngPattern;n&&((e=n.match(/^\/(.*)\/([gim]*)$/))?(n=RegExp(e[1],e[2]),e=function(a){return oa(d,"pattern",d.$isEmpty(a)||n.test(a),a)}):e=function(c){var e=b.$eval(n);if(!e||!e.test)throw A("ngPattern")("noregexp",n,e,ga(a));return oa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var q=Q(c.ngMinlength);e=function(a){return oa(d,"minlength",d.$isEmpty(a)||a.length>=q,a)};d.$parsers.push(e);
d.$formatters.push(e)}if(c.ngMaxlength){var p=Q(c.ngMaxlength);e=function(a){return oa(d,"maxlength",d.$isEmpty(a)||a.length<=p,a)};d.$parsers.push(e);d.$formatters.push(e)}}function yb(b,a){return function(c){var d;return pa(c)?c:C(c)&&(b.lastIndex=0,c=b.exec(c))?(c.shift(),d={yyyy:0,MM:1,dd:1,HH:0,mm:0},r(c,function(b,c){c<a.length&&(d[a[c]]=+b)}),new Date(d.yyyy,d.MM-1,d.dd,d.HH,d.mm)):NaN}}function bb(b,a,c,d){return function(e,f,h,g,m,k,l){ab(e,f,h,g,m,k);g.$parsers.push(function(d){if(g.$isEmpty(d))return g.$setValidity(b,
!0),null;if(a.test(d))return g.$setValidity(b,!0),c(d);g.$setValidity(b,!1);return s});g.$formatters.push(function(a){return pa(a)?l("date")(a,d):""});h.min&&(e=function(a){var b=g.$isEmpty(a)||c(a)>=c(h.min);g.$setValidity("min",b);return b?a:s},g.$parsers.push(e),g.$formatters.push(e));h.max&&(e=function(a){var b=g.$isEmpty(a)||c(a)<=c(h.max);g.$setValidity("max",b);return b?a:s},g.$parsers.push(e),g.$formatters.push(e))}}function Rb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,
d,e){function f(b){if(!0===a||c.$index%2===a){var d=h(b||"");g?wa(b,g)||e.$updateClass(d,h(g)):e.$addClass(d)}g=$(b)}function h(a){if(M(a))return a.join(" ");if(W(a)){var b=[];r(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var g;c.$watch(e[b],f,!0);e.$observe("class",function(a){f(c.$eval(e[b]))});"ngClass"!==b&&c.$watch("$index",function(d,f){var g=d&1;if(g!==f&1){var n=h(c.$eval(e[b]));g===a?e.$addClass(n):e.$removeClass(n)}})}}}}var P=function(b){return C(b)?b.toLowerCase():b},Qb=
Object.prototype.hasOwnProperty,Ea=function(b){return C(b)?b.toUpperCase():b},V,v,Fa,xa=[].slice,Pe=[].push,va=Object.prototype.toString,Na=A("ng"),Pa=R.angular||(R.angular={}),Ra,Ja,ja=["0","0","0"];V=Q((/msie (\d+)/.exec(P(navigator.userAgent))||[])[1]);isNaN(V)&&(V=Q((/trident\/.*; rv:(\d+)/.exec(P(navigator.userAgent))||[])[1]));z.$inject=[];Ca.$inject=[];var aa=function(){return String.prototype.trim?function(b){return C(b)?b.trim():b}:function(b){return C(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,
""):b}}();Ja=9>V?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ea(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var dd=/[A-Z]/g,gd={full:"1.3.0-beta.4",major:1,minor:3,dot:0,codeName:"inconspicuous-deception"},Ua=O.cache={},ib=O.expando="ng-"+(new Date).getTime(),qe=1,pb=R.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Ta=R.document.removeEventListener?function(b,
a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};O._data=function(b){return this.cache[b[this.expando]]||{}};var oe=/([\:\-\_]+(.))/g,pe=/^moz([A-Z])/,Fb=A("jqLite"),Ia=O.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===U.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),O(R).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?v(this[b]):v(this[this.length+
b])},length:0,push:Pe,sort:[].sort,splice:[].splice},mb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){mb[P(b)]=b});var qc={};r("input select option textarea button form details".split(" "),function(b){qc[Ea(b)]=!0});r({data:mc,inheritedData:lb,scope:function(b){return v(b).data("$scope")||lb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return v(b).data("$isolateScope")||v(b).data("$isolateScopeNoTemplate")},controller:nc,injector:function(b){return lb(b,
"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ib,css:function(b,a,c){a=Sa(a);if(w(c))b.style[a]=c;else{var d;8>=V&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=V&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=P(a);if(mb[d])if(w(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||z).specified?d:s;else if(w(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,
2),null===b?s:b},prop:function(b,a,c){if(w(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(E(d))return e?b[e]:"";b[e]=d}var a=[];9>V?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(E(a)){if("SELECT"===Ja(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(E(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<
d.length;c++)Ga(d[c]);b.innerHTML=a},empty:oc},function(b,a){O.prototype[a]=function(a,d){var e,f;if(b!==oc&&(2==b.length&&b!==Ib&&b!==nc?a:d)===s){if(W(a)){for(e=0;e<this.length;e++)if(b===mc)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;f=e===s?Math.min(this.length,1):this.length;for(var h=0;h<f;h++){var g=b(this[h],a,d);e=e?e+g:g}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});r({removeData:kc,dealoc:Ga,on:function a(c,d,e,f){if(w(f))throw Fb("onargs");var h=
ka(c,"events"),g=ka(c,"handle");h||ka(c,"events",h={});g||ka(c,"handle",g=re(c,h));r(d.split(" "),function(d){var f=h[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=U.body.contains||U.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};h[d]=[];a(c,{mouseleave:"mouseout",
mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||g(a,d)})}else pb(c,d,g),h[d]=[];f=h[d]}f.push(e)})},off:lc,one:function(a,c,d){a=v(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ga(a);r(new O(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||
a.childNodes||[]},append:function(a,c){r(new O(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new O(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=v(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ga(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new O(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:kb,removeClass:jb,
toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;E(f)&&(f=!Ib(a,c));(f?kb:jb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Hb,triggerHandler:function(a,c,d){c=(ka(a,"events")||{})[c];d=d||[];var e=[{preventDefault:z,stopPropagation:z}];
r(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){O.prototype[c]=function(c,e,f){for(var h,g=0;g<this.length;g++)E(h)?(h=a(this[g],c,e,f),w(h)&&(h=v(h))):Gb(h,a(this[g],c,e,f));return w(h)?h:this};O.prototype.bind=O.prototype.on;O.prototype.unbind=O.prototype.off});Va.prototype={put:function(a,c){this[Ha(a)]=c},get:function(a){return this[Ha(a)]},remove:function(a){var c=this[a=Ha(a)];delete this[a];return c}};var te=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,ue=/,/,ve=/^\s*(_?)(\S+?)\1\s*$/,se=
/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Wa=A("$injector"),Qe=A("$animate"),Sd=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Qe("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,h,g){h?h.after(a):(c&&c[0]||
(c=h.parent()),c.append(a));g&&d(g)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,g){this.enter(a,c,d,g)},addClass:function(a,c,h){c=C(c)?c:M(c)?c.join(" "):"";r(a,function(a){kb(a,c)});h&&d(h)},removeClass:function(a,c,h){c=C(c)?c:M(c)?c.join(" "):"";r(a,function(a){jb(a,c)});h&&d(h)},setClass:function(a,c,h,g){r(a,function(a){kb(a,c);jb(a,h)});g&&d(g)},enabled:z}}]}],ia=A("$compile");fc.$inject=["$provide","$$sanitizeUriProvider"];var ye=/^(x[\:\-_]|data[\:\-_])/i,yc=A("$interpolate"),
Re=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Be={http:80,https:443,ftp:21},Mb=A("$location");Dc.prototype=Nb.prototype=Cc.prototype={$$html5:!1,$$replace:!1,absUrl:qb("$$absUrl"),url:function(a,c){if(E(a))return this.$$url;var d=Re.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:qb("$$protocol"),host:qb("$$host"),port:qb("$$port"),path:Ec("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(C(a))this.$$search=ac(a);else if(W(a))this.$$search=a;else throw Mb("isrcharg");break;default:E(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Ec("$$hash",Ca),replace:function(){this.$$replace=!0;return this}};var Aa=A("$parse"),Hc={},sa,Ma={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:z,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return w(d)?w(e)?d+e:d:w(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=
e(a,c);return(w(d)?d:0)-(w(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":z,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Se={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Pb=function(a){this.options=a};Pb.prototype={constructor:Pb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;
for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&
a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),f=Ma[this.ch],h=Ma[d],g=Ma[e];g?(this.tokens.push({index:this.index,text:e,fn:g}),this.index+=3):h?(this.tokens.push({index:this.index,text:d,fn:h}),this.index+=2):f?(this.tokens.push({index:this.index,text:this.ch,fn:f,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+
1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},
throwError:function(a,c,d){d=d||this.index;c=w(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Aa("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=P(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-
1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,h,g;this.index<this.text.length;){g=this.text.charAt(this.index);if("."===g||this.isIdent(g)||this.isNumber(g))"."===g&&(e=this.index),c+=g;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){g=this.text.charAt(f);if("("===g){h=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(g))f++;
else break}d={index:d,text:c};if(Ma.hasOwnProperty(c))d.fn=Ma[c],d.json=Ma[c];else{var m=Gc(c,this.options,this.text);d.fn=t(function(a,c){return m(a,c)},{assign:function(d,e){return rb(d,c,e,a.text,a.options)}})}this.tokens.push(d);h&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:h,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var h=this.text.charAt(this.index),e=e+h;if(f)"u"===h?(h=this.text.substring(this.index+
1,this.index+5),h.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+h+"]"),this.index+=4,d+=String.fromCharCode(parseInt(h,16))):d=(f=Se[h])?d+f:d+h,f=!1;else if("\\"===h)f=!0;else{if(h===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=h}this.index++}this.throwError("Unterminated quote",c)}};var $a=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};$a.ZERO=function(){return 0};$a.prototype={constructor:$a,parse:function(a,
c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=
this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw Aa("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===
this.tokens.length)throw Aa("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],h=f.text;if(h===a||h===c||h===d||h===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return t(function(d,e){return a(d,
e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return t(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return t(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var h=a[f];h&&(e=h(c,d))}return e}},filterChain:function(){for(var a=
this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,g){g=[g];for(var m=0;m<d.length;m++)g.push(d[m](a,e));return c.apply(a,g)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+
this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=
this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=
this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn($a.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Gc(d,this.options,this.text);return t(function(c,d,g){return e(g||a(c,d))},{assign:function(e,h,g){return rb(a(e,g),d,h,c.text,c.options)}})},objectIndex:function(a){var c=
this,d=this.expression();this.consume("]");return t(function(e,f){var h=a(e,f),g=d(e,f),m;if(!h)return s;(h=Za(h[g],c.text))&&(h.then&&c.options.unwrapPromises)&&(m=h,"$$v"in h||(m.$$v=s,m.then(function(a){m.$$v=a})),h=h.$$v);return h},{assign:function(e,f,h){var g=d(e,h);return Za(a(e,h),c.text)[g]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,h){for(var g=[],m=c?c(f,h):
f,k=0;k<d.length;k++)g.push(d[k](f,h));k=a(f,h,m)||z;Za(m,e.text);Za(k,e.text);g=k.apply?k.apply(m,g):k(g[0],g[1],g[2],g[3],g[4]);return Za(g,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return t(function(c,d){for(var h=[],g=0;g<a.length;g++)h.push(a[g](c,d));return h},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return t(function(c,d){for(var e={},m=0;m<a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Ob={},ta=A("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},T=U.createElement("a"),Jc=ra(R.location.href,!0);jc.$inject=["$provide"];Kc.$inject=["$locale"];Mc.$inject=["$locale"];
var Pc=".",Ne={yyyy:X("FullYear",4),yy:X("FullYear",2,0,!0),y:X("FullYear",1),MMMM:tb("Month"),MMM:tb("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:tb("Day"),EEE:tb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(sb(Math[0<
a?"floor":"ceil"](a/60),2)+sb(Math.abs(a%60),2))},ww:Rc(2),w:Rc(1)},Me=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Le=/^\-?\d+$/;Lc.$inject=["$locale"];var Je=Y(P),Ke=Y(Ea);Nc.$inject=["$parse"];var jd=Y({restrict:"E",compile:function(a,c){8>=V&&(c.href||c.name||c.$set("href",""),a.append(U.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===va.call(c.prop("href"))?"xlink:href":"href";c.on("click",
function(a){c.attr(f)||a.preventDefault()})}}}),Db={};r(mb,function(a,c){if("multiple"!=a){var d=la("ng-"+c);Db[d]=function(){return{priority:100,link:function(a,f,h){a.$watch(h[d],function(a){h.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=la("ng-"+a);Db[c]=function(){return{priority:99,link:function(d,e,f){var h=a,g=a;"href"===a&&"[object SVGAnimatedString]"===va.call(e.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",h=null);f.$observe(c,function(a){a&&(f.$set(g,a),V&&h&&
e.prop(h,f[g]))})}}}});var wb={$addControl:z,$removeControl:z,$setValidity:z,$setDirty:z,$setPristine:z};Sc.$inject=["$element","$attrs","$scope","$animate"];var Tc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Sc,compile:function(){return{pre:function(a,e,f,h){if(!f.action){var g=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};pb(e[0],"submit",g);e.on("$destroy",function(){c(function(){Ta(e[0],"submit",g)},0,!1)})}var m=e.parent().controller("form"),
k=f.name||f.ngForm;k&&rb(a,k,h,k);if(m)e.on("$destroy",function(){m.$removeControl(h);k&&rb(a,k,s,k);t(h,wb)})}}}}}]},kd=Tc(),xd=Tc(!0),Te=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Ue=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Ve=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Uc=/^(\d{4})-(\d{2})-(\d{2})$/,Vc=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)$/,Sb=/^(\d{4})-W(\d\d)$/,Wc=/^(\d{4})-(\d\d)$/,Xc=/^(\d\d):(\d\d)$/,Yc={text:ab,date:bb("date",Uc,yb(Uc,
["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":bb("datetimelocal",Vc,yb(Vc,["yyyy","MM","dd","HH","mm"]),"yyyy-MM-ddTHH:mm"),time:bb("time",Xc,yb(Xc,["HH","mm"]),"HH:mm"),week:bb("week",Sb,function(a){if(pa(a))return a;if(C(a)){Sb.lastIndex=0;var c=Sb.exec(a);if(c){a=+c[1];var d=+c[2],c=Qc(a),d=7*(d-1);return new Date(a,0,c.getDate()+d)}}return NaN},"yyyy-Www"),month:bb("month",Wc,yb(Wc,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,h){ab(a,c,d,e,f,h);e.$parsers.push(function(a){var c=e.$isEmpty(a);
if(c||Ve.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Oe(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return oa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return oa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return oa(e,
"number",e.$isEmpty(a)||zb(a),a)})},url:function(a,c,d,e,f,h){ab(a,c,d,e,f,h);a=function(a){return oa(e,"url",e.$isEmpty(a)||Te.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,h){ab(a,c,d,e,f,h);a=function(a){return oa(e,"email",e.$isEmpty(a)||Ue.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){E(d.name)&&c.attr("name",db());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=
d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,h=d.ngFalseValue;C(f)||(f=!0);C(h)||(h=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:h})},hidden:z,button:z,submit:z,reset:z,file:z},gc=["$browser","$sniffer","$filter",function(a,c,d){return{restrict:"E",
require:"?ngModel",link:function(e,f,h,g){g&&(Yc[P(h.type)]||Yc.text)(e,f,h,g,c,a,d)}}}],vb="ng-valid",ub="ng-invalid",La="ng-pristine",xb="ng-dirty",We=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,h){function g(a,c){c=c?"-"+hb(c,"-"):"";h.removeClass(e,(a?ub:vb)+c);h.addClass(e,(a?vb:ub)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=
!1;this.$name=d.name;var m=f(d.ngModel),k=m.assign;if(!k)throw A("ngModel")("nonassign",d.ngModel,ga(e));this.$render=z;this.$isEmpty=function(a){return E(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||wb,n=0,q=this.$error={};e.addClass(La);g(!0);this.$setValidity=function(a,c){q[a]!==!c&&(c?(q[a]&&n--,n||(g(!0),this.$valid=!0,this.$invalid=!1)):(g(!1),this.$invalid=!0,this.$valid=!1,n++),q[a]=!c,g(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;
this.$pristine=!0;h.removeClass(e,xb);h.addClass(e,La)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,h.removeClass(e,La),h.addClass(e,xb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,k(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=m(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==
c&&(p.$viewValue=c,p.$render())}return c})}],Md=function(){return{require:["ngModel","^?form"],controller:We,link:function(a,c,d,e){var f=e[0],h=e[1]||wb;h.$addControl(f);a.$on("$destroy",function(){h.$removeControl(f)})}}},Od=Y({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),hc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Nd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!E(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return M(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Xe=/^(true|false|\d+)$/,Pd=function(){return{priority:100,
compile:function(a,c){return Xe.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},pd=ua(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),rd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],qd=["$sce","$parse",
function(a,c){return function(d,e,f){e.addClass("ng-binding").data("$binding",f.ngBindHtml);var h=c(f.ngBindHtml);d.$watch(function(){return(h(d)||"").toString()},function(c){e.html(a.getTrustedHtml(h(d))||"")})}}],sd=Rb("",!0),ud=Rb("Odd",0),td=Rb("Even",1),vd=ua({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),wd=[function(){return{scope:!0,controller:"@",priority:500}}],ic={};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=la("ng-"+a);ic[c]=["$parse",function(d){return{compile:function(e,f){var h=d(f[c]);return function(c,d,e){d.on(P(a),function(a){c.$apply(function(){h(c,{$event:a})})})}}}}]});var zd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,h){var g,m,k;c.$watch(e.ngIf,function(f){Oa(f)?m||(m=c.$new(),h(m,function(c){c[c.length++]=U.createComment(" end ngIf: "+e.ngIf+" ");g={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),
k=null),m&&(m.$destroy(),m=null),g&&(k=Cb(g.clone),a.leave(k,function(){k=null}),g=null))})}}}],Ad=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Pa.noop,compile:function(h,g){var m=g.ngInclude||g.src,k=g.onload||"",l=g.autoscroll;return function(g,h,p,r,s){var t=0,y,v,J,x=function(){v&&(v.remove(),v=null);y&&(y.$destroy(),y=null);J&&(e.leave(J,function(){v=null}),v=J,J=null)};g.$watch(f.parseAsResourceUrl(m),
function(f){var m=function(){!w(l)||l&&!g.$eval(l)||d()},p=++t;f?(a.get(f,{cache:c}).success(function(a){if(p===t){var c=g.$new();r.template=a;a=s(c,function(a){x();e.enter(a,null,h,m)});y=c;J=a;y.$emit("$includeContentLoaded");g.$eval(k)}}).error(function(){p===t&&x()}),g.$emit("$includeContentRequested")):(x(),r.template=null)})}}}}],Qd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],Bd=ua({priority:450,
compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Cd=ua({terminal:!0,priority:1E3}),Dd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,h){var g=h.count,m=h.$attr.when&&f.attr(h.$attr.when),k=h.offset||0,l=e.$eval(m)||{},n={},q=c.startSymbol(),p=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(h,function(a,c){s.test(c)&&(l[P(c.replace("when","").replace("Minus","-"))]=f.attr(h.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,q+g+"-"+k+p))});e.$watch(function(){var c=
parseFloat(e.$eval(g));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,f,!0)},function(a){f.text(a)})}}}],Ed=["$parse","$animate",function(a,c){var d=A("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,h,g,m){var k=h.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,q,p,s,t,w,y={$id:Ha};if(!l)throw d("iexp",k);h=l[1];g=l[2];(l=l[3])?(n=a(l),q=function(a,c,d){w&&(y[w]=a);y[t]=c;y.$index=d;return n(e,
y)}):(p=function(a,c){return Ha(c)},s=function(a){return a});l=h.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",h);t=l[3]||l[1];w=l[2];var H={};e.$watchCollection(g,function(a){var g,h,l=f[0],n,y={},C,B,K,z,E,L,A=[];if(cb(a))E=a,n=q||p;else{n=q||s;E=[];for(K in a)a.hasOwnProperty(K)&&"$"!=K.charAt(0)&&E.push(K);E.sort()}C=E.length;h=A.length=E.length;for(g=0;g<h;g++)if(K=a===E?g:E[g],z=a[K],z=n(K,z,g),za(z,"`track by` id"),H.hasOwnProperty(z))L=H[z],delete H[z],y[z]=
L,A[g]=L;else{if(y.hasOwnProperty(z))throw r(A,function(a){a&&a.scope&&(H[a.id]=a)}),d("dupes",k,z);A[g]={id:z};y[z]=!1}for(K in H)H.hasOwnProperty(K)&&(L=H[K],g=Cb(L.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),L.scope.$destroy());g=0;for(h=E.length;g<h;g++){K=a===E?g:E[g];z=a[K];L=A[g];A[g-1]&&(l=A[g-1].clone[A[g-1].clone.length-1]);if(L.scope){B=L.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);L.clone[0]!=n&&c.move(Cb(L.clone),null,v(l));l=L.clone[L.clone.length-1]}else B=e.$new();
B[t]=z;w&&(B[w]=K);B.$index=g;B.$first=0===g;B.$last=g===C-1;B.$middle=!(B.$first||B.$last);B.$odd=!(B.$even=0===(g&1));L.scope||m(B,function(a){a[a.length++]=U.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,v(l));l=a;L.scope=B;L.clone=a;y[L.id]=L})}H=y})}}}],Fd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Oa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Oa(c)?"addClass":"removeClass"](d,
"ng-hide")})}}],Gd=ua(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Hd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var h,g,m,k=[];c.$watch(e.ngSwitch||e.on,function(d){var n,q=k.length;if(0<q){if(m){for(n=0;n<q;n++)m[n].remove();m=null}m=[];for(n=0;n<q;n++){var p=g[n];k[n].$destroy();m[n]=p;a.leave(p,function(){m.splice(n,1);0===m.length&&(m=null)})}}g=
[];k=[];if(h=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(h,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;g.push(c);a.enter(c,e.parent(),e)})})})}}}],Id=ua({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Jd=ua({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||
[];e.cases["?"].push({transclude:f,element:c})}}),Ld=ua({link:function(a,c,d,e,f){if(!f)throw A("ngTransclude")("orphan",ga(c));f(function(a){c.empty();c.append(a)})}}),ld=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ye=A("ngOptions"),Kd=Y({terminal:!0}),md=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:z};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){za(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ha(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",
!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=z})}],link:function(e,h,g,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(A.parent()&&A.remove(),c.val(a),""===a&&C.prop("selected",!0)):E(a)&&C?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){A.parent()&&A.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Va(d.$viewValue);r(c.find("option"),
function(c){c.selected=w(a.get(c.value))})};a.$watch(function(){wa(e,d.$viewValue)||(e=$(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,t,u;t=g.$modelValue;u=x(e)||[];var C=n?Tb(u):u,E,B,D;B={};s=!1;var F,J;if(p)if(v&&M(t))for(s=new Va([]),D=0;D<t.length;D++)B[m]=t[D],s.put(v(e,B),t[D]);else s=new Va(t);for(D=0;E=C.length,
D<E;D++){k=D;if(n){k=C[D];if("$"===k.charAt(0))continue;B[n]=k}B[m]=u[k];d=q(e,B)||"";(k=a[d])||(k=a[d]=[],c.push(d));p?d=w(s.remove(v?v(e,B):r(e,B))):(v?(d={},d[m]=t,d=v(e,d)===v(e,B)):d=t===r(e,B),s=s||d);F=l(e,B);F=w(F)?F:"";k.push({id:v?v(e,B):n?C[D]:D,label:F,selected:d})}p||(z||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));B=0;for(C=c.length;B<C;B++){d=c[B];k=a[d];A.length<=B?(t={element:H.clone().attr("label",d),label:k.label},u=[t],A.push(u),
f.append(t.element)):(u=A[B],t=u[0],t.label!=d&&t.element.attr("label",t.label=d));F=null;D=0;for(E=k.length;D<E;D++)s=k[D],(d=u[D+1])?(F=d.element,d.label!==s.label&&F.text(d.label=s.label),d.id!==s.id&&F.val(d.id=s.id),d.selected!==s.selected&&F.prop("selected",d.selected=s.selected)):(""===s.id&&z?J=z:(J=y.clone()).val(s.id).attr("selected",s.selected).text(s.label),u.push({element:J,label:s.label,id:s.id,selected:s.selected}),F?F.after(J):t.element.append(J),F=J);for(D++;u.length>D;)u.pop().element.remove()}for(;A.length>
B;)A.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Ye("iexp",t,ga(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],q=c(k[3]||""),r=c(k[2]?k[1]:m),x=c(k[7]),v=k[8]?c(k[8]):null,A=[[{element:f,label:""}]];z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=x(e)||[],d={},h,k,l,q,t,w,u;if(p)for(k=[],q=0,w=A.length;q<w;q++)for(a=A[q],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(v)for(u=0;u<c.length&&
(d[m]=c[u],v(e,d)!=h);u++);else d[m]=c[h];k.push(r(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(v)for(u=0;u<c.length;u++){if(d[m]=c[u],v(e,d)==h){k=r(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=r(e,d);1<A[0].length&&A[0][1].id!==h&&(A[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var q=m[0];m=m[1];var p=g.multiple,t=g.ngOptions,z=!1,C,y=v(U.createElement("option")),H=v(U.createElement("optgroup")),A=y.clone();g=0;for(var x=h.children(),F=x.length;g<F;g++)if(""===
x[g].value){C=z=x.eq(g);break}q.init(m,z,A);p&&(m.$isEmpty=function(a){return!a||0===a.length});t?n(e,h,m):p?l(e,h,m):k(e,h,m,q)}}}}],od=["$interpolate",function(a){var c={addOption:z,removeOption:z};return{restrict:"E",priority:100,compile:function(d,e){if(E(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",
a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],nd=Y({restrict:"E",terminal:!1});R.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Fa=R.jQuery)?(v=Fa,t(Fa.fn,{scope:Ia.scope,isolateScope:Ia.isolateScope,controller:Ia.controller,injector:Ia.injector,inheritedData:Ia.inheritedData}),Eb("remove",!0,!0,!1),Eb("empty",!1,!1,!1),Eb("html",!1,!1,!0)):v=O,Pa.element=v,fd(Pa),v(U).ready(function(){cd(U,
cc)}))})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
/*!
 AngularJS v1.3.0-beta.7
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e,A){'use strict';function x(s,g,k){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,b,c,f,w){function y(){p&&(p.remove(),p=null);h&&(h.$destroy(),h=null);l&&(k.leave(l,function(){p=null}),p=l,l=null)}function v(){var c=s.current&&s.current.locals;if(e.isDefined(c&&c.$template)){var c=a.$new(),d=s.current;l=w(c,function(d){k.enter(d,null,l||b,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()});y()});h=d.scope=c;h.$emit("$viewContentLoaded");h.$eval(u)}else y()}
var h,l,p,t=c.autoscroll,u=c.onload||"";a.$on("$routeChangeSuccess",v);v()}}}function z(e,g,k){return{restrict:"ECA",priority:-400,link:function(a,b){var c=k.current,f=c.locals;b.html(f.$template);var w=e(b.contents());c.controller&&(f.$scope=a,f=g(c.controller,f),c.controllerAs&&(a[c.controllerAs]=f),b.data("$ngControllerController",f),b.children().data("$ngControllerController",f));w(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,b){return e.extend(new (e.extend(function(){},
{prototype:a})),b)}function g(a,e){var c=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},k=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,c,b){a="?"===b?b:null;b="*"===b?b:null;k.push({name:c,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(b&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",c?"i":"");return f}var k={};this.when=function(a,b){k[a]=e.extend({reloadOnSearch:!0},b,a&&g(a,b));if(a){var c=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";k[c]=e.extend({redirectTo:a},g(c,b))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,b,c,f,g,n,v,h){function l(){var d=p(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u)m.params=d.params,e.copy(m.params,c),a.$broadcast("$routeUpdate",m);else if(d||m)u=!1,a.$broadcast("$routeChangeStart",
d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?b.path(t(d.redirectTo,d.params)).search(d.params).replace():b.url(d.redirectTo(d.pathParams,b.path(),b.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),b,c;e.forEach(a,function(d,b){a[b]=e.isString(d)?g.get(d):g.invoke(d,null,null,b)});e.isDefined(b=d.template)?e.isFunction(b)&&(b=b(d.params)):e.isDefined(c=d.templateUrl)&&(e.isFunction(c)&&(c=c(d.params)),c=h.getTrustedResourceUrl(c),e.isDefined(c)&&(d.loadedTemplateUrl=
c,b=n.get(c,{cache:v}).then(function(a){return a.data})));e.isDefined(b)&&(a.$template=b);return f.all(a)}}).then(function(b){d==r.current&&(d&&(d.locals=b,e.copy(d.params,c)),a.$broadcast("$routeChangeSuccess",d,m))},function(b){d==r.current&&a.$broadcast("$routeChangeError",d,m,b)})}function p(){var a,c;e.forEach(k,function(f,k){var q;if(q=!c){var g=b.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var h=1,p=g.length;h<p;++h){var n=q[h-1],r="string"==typeof g[h]?decodeURIComponent(g[h]):
g[h];n&&r&&(l[n.name]=r)}q=l}else q=null;else q=null;q=a=q}q&&(c=s(f,{params:e.extend({},b.search(),a),pathParams:a}),c.$$route=f)});return c||k[null]&&s(k[null],{params:{},pathParams:{}})}function t(a,b){var c=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var u=!1,r={routes:k,reload:function(){u=!0;a.$evalAsync(l)}};a.$on("$locationChangeSuccess",l);return r}]});n.provider("$routeParams",
function(){this.$get=function(){return{}}});n.directive("ngView",x);n.directive("ngView",z);x.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);

/*!
    localForage -- Offline Storage, Improved
    Version 0.1.0
    http://mozilla.github.io/localForage
    (c) 2013-2014 Mozilla, Apache License 2.0
*/
!function(){var a,b,c,d;!function(){var e={},f={};a=function(a,b,c){e[a]={deps:b,callback:c}},d=c=b=function(a){function c(b){if("."!==b.charAt(0))return b;for(var c=b.split("/"),d=a.split("/").slice(0,-1),e=0,f=c.length;f>e;e++){var g=c[e];if(".."===g)d.pop();else{if("."===g)continue;d.push(g)}}return d.join("/")}if(d._eak_seen=e,f[a])return f[a];if(f[a]={},!e[a])throw new Error("Could not find module "+a);for(var g,h=e[a],i=h.deps,j=h.callback,k=[],l=0,m=i.length;m>l;l++)k.push("exports"===i[l]?g={}:b(c(i[l])));var n=j.apply(this,k);return f[a]=g||n}}(),a("promise/all",["./utils","exports"],function(a,b){"use strict";function c(a){var b=this;if(!d(a))throw new TypeError("You must pass an array to all.");return new b(function(b,c){function d(a){return function(b){f(a,b)}}function f(a,c){h[a]=c,0===--i&&b(h)}var g,h=[],i=a.length;0===i&&b([]);for(var j=0;j<a.length;j++)g=a[j],g&&e(g.then)?g.then(d(j),c):f(j,g)})}var d=a.isArray,e=a.isFunction;b.all=c}),a("promise/asap",["exports"],function(a){"use strict";function b(){return function(){process.nextTick(e)}}function c(){var a=0,b=new i(e),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function d(){return function(){j.setTimeout(e,1)}}function e(){for(var a=0;a<k.length;a++){var b=k[a],c=b[0],d=b[1];c(d)}k=[]}function f(a,b){var c=k.push([a,b]);1===c&&g()}var g,h="undefined"!=typeof window?window:{},i=h.MutationObserver||h.WebKitMutationObserver,j="undefined"!=typeof global?global:this,k=[];g="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?b():i?c():d(),a.asap=f}),a("promise/cast",["exports"],function(a){"use strict";function b(a){if(a&&"object"==typeof a&&a.constructor===this)return a;var b=this;return new b(function(b){b(a)})}a.cast=b}),a("promise/config",["exports"],function(a){"use strict";function b(a,b){return 2!==arguments.length?c[a]:void(c[a]=b)}var c={instrument:!1};a.config=c,a.configure=b}),a("promise/polyfill",["./promise","./utils","exports"],function(a,b,c){"use strict";function d(){var a="Promise"in window&&"cast"in window.Promise&&"resolve"in window.Promise&&"reject"in window.Promise&&"all"in window.Promise&&"race"in window.Promise&&function(){var a;return new window.Promise(function(b){a=b}),f(a)}();a||(window.Promise=e)}var e=a.Promise,f=b.isFunction;c.polyfill=d}),a("promise/promise",["./config","./utils","./cast","./all","./race","./resolve","./reject","./asap","exports"],function(a,b,c,d,e,f,g,h,i){"use strict";function j(a){if(!w(a))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof j))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._subscribers=[],k(a,this)}function k(a,b){function c(a){p(b,a)}function d(a){r(b,a)}try{a(c,d)}catch(e){d(e)}}function l(a,b,c,d){var e,f,g,h,i=w(c);if(i)try{e=c(d),g=!0}catch(j){h=!0,f=j}else e=d,g=!0;o(b,e)||(i&&g?p(b,e):h?r(b,f):a===F?p(b,e):a===G&&r(b,e))}function m(a,b,c,d){var e=a._subscribers,f=e.length;e[f]=b,e[f+F]=c,e[f+G]=d}function n(a,b){for(var c,d,e=a._subscribers,f=a._detail,g=0;g<e.length;g+=3)c=e[g],d=e[g+b],l(b,c,d,f);a._subscribers=null}function o(a,b){var c,d=null;try{if(a===b)throw new TypeError("A promises callback cannot return that same promise.");if(v(b)&&(d=b.then,w(d)))return d.call(b,function(d){return c?!0:(c=!0,void(b!==d?p(a,d):q(a,d)))},function(b){return c?!0:(c=!0,void r(a,b))}),!0}catch(e){return c?!0:(r(a,e),!0)}return!1}function p(a,b){a===b?q(a,b):o(a,b)||q(a,b)}function q(a,b){a._state===D&&(a._state=E,a._detail=b,u.async(s,a))}function r(a,b){a._state===D&&(a._state=E,a._detail=b,u.async(t,a))}function s(a){n(a,a._state=F)}function t(a){n(a,a._state=G)}var u=a.config,v=(a.configure,b.objectOrFunction),w=b.isFunction,x=(b.now,c.cast),y=d.all,z=e.race,A=f.resolve,B=g.reject,C=h.asap;u.async=C;var D=void 0,E=0,F=1,G=2;j.prototype={constructor:j,_state:void 0,_detail:void 0,_subscribers:void 0,then:function(a,b){var c=this,d=new this.constructor(function(){});if(this._state){var e=arguments;u.async(function(){l(c._state,d,e[c._state-1],c._detail)})}else m(this,d,a,b);return d},"catch":function(a){return this.then(null,a)}},j.all=y,j.cast=x,j.race=z,j.resolve=A,j.reject=B,i.Promise=j}),a("promise/race",["./utils","exports"],function(a,b){"use strict";function c(a){var b=this;if(!d(a))throw new TypeError("You must pass an array to race.");return new b(function(b,c){for(var d,e=0;e<a.length;e++)d=a[e],d&&"function"==typeof d.then?d.then(b,c):b(d)})}var d=a.isArray;b.race=c}),a("promise/reject",["exports"],function(a){"use strict";function b(a){var b=this;return new b(function(b,c){c(a)})}a.reject=b}),a("promise/resolve",["exports"],function(a){"use strict";function b(a){var b=this;return new b(function(b){b(a)})}a.resolve=b}),a("promise/utils",["exports"],function(a){"use strict";function b(a){return c(a)||"object"==typeof a&&null!==a}function c(a){return"function"==typeof a}function d(a){return"[object Array]"===Object.prototype.toString.call(a)}var e=Date.now||function(){return(new Date).getTime()};a.objectOrFunction=b,a.isFunction=c,a.isArray=d,a.now=e}),b("promise/polyfill").polyfill()}(),function(){"use strict";function a(a){if(a)for(var b in j)void 0!==a[b]&&(j[b]=a[b]);return new h(function(a,b){var c=k.open(j.name,j.version);c.onerror=function(){b(c.error.name)},c.onupgradeneeded=function(){c.result.createObjectStore(j.storeName)},c.onsuccess=function(){i=c.result,a()}})}function b(a,b){var c=this;return new h(function(d,e){c.ready().then(function(){var c=i.transaction(j.storeName,"readonly").objectStore(j.storeName),f=c.get(a);f.onsuccess=function(){var a=f.result;void 0===a&&(a=null),b&&b(a),d(a)},f.onerror=function(){e(f.error.name)}})})}function c(a,b,c){var d=this;return new h(function(e,f){d.ready().then(function(){var d=i.transaction(j.storeName,"readwrite").objectStore(j.storeName);void 0===b&&(b=null);var g=d.put(b,a);g.onsuccess=function(){c&&c(b),e(b)},g.onerror=function(){f(g.error.name)}})})}function d(a,b){var c=this;return new h(function(d,e){c.ready().then(function(){var c=i.transaction(j.storeName,"readwrite").objectStore(j.storeName),f=c["delete"](a);f.onsuccess=function(){b&&b(),d()},f.onerror=function(){e(f.error.name)}})})}function e(a){var b=this;return new h(function(c,d){b.ready().then(function(){var b=i.transaction(j.storeName,"readwrite").objectStore(j.storeName),e=b.clear();e.onsuccess=function(){a&&a(),c()},e.onerror=function(){d(e.error.name)}})})}function f(a){var b=this;return new h(function(c,d){b.ready().then(function(){var b=i.transaction(j.storeName,"readonly").objectStore(j.storeName),e=b.count();e.onsuccess=function(){a&&a(e.result),c(e.result)},e.onerror=function(){d(e.error.name)}})})}function g(a,b){var c=this;return new h(function(d,e){return 0>a?(b&&b(null),void d(null)):void c.ready().then(function(){var c=i.transaction(j.storeName,"readonly").objectStore(j.storeName),f=!1,g=c.openCursor();g.onsuccess=function(){var c=g.result;return c?void(0===a?(b&&b(c.key),d(c.key)):f?(b&&b(c.key),d(c.key)):(f=!0,c.advance(a))):(b&&b(null),void d(null))},g.onerror=function(){e(g.error.name)}})})}var h=window.Promise,i=null,j={name:"localforage",storeName:"keyvaluepairs",version:1},k=k||window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB||window.OIndexedDB||window.msIndexedDB;if(k){var l={_driver:"asyncStorage",_initStorage:a,getItem:b,setItem:c,removeItem:d,clear:e,length:f,key:g};"function"==typeof define&&define.amd?define("asyncStorage",function(){return l}):"undefined"!=typeof module&&module.exports?module.exports=l:this.asyncStorage=l}}.call(this),function(){"use strict";function a(a){if(a)for(var b in l)void 0!==a[b]&&(l[b]=a[b]);return k=l.name+"/",m.resolve()}function b(a){var b=this;return new m(function(c){b.ready().then(function(){n.clear(),a&&a(),c()})})}function c(a,b){var c=this;return new m(function(d,e){c.ready().then(function(){try{var c=n.getItem(k+a);c&&(c=g(c)),b&&b(c),d(c)}catch(f){e(f)}})})}function d(a,b){var c=this;return new m(function(d){c.ready().then(function(){var c=n.key(a);c&&(c=c.substring(k.length)),b&&b(c),d(c)})})}function e(a){var b=this;return new m(function(c){b.ready().then(function(){var b=n.length;a&&a(b),c(b)})})}function f(a,b){var c=this;return new m(function(d){c.ready().then(function(){n.removeItem(k+a),b&&b(),d()})})}function g(a){if(a.substring(0,q)!==p)return JSON.parse(a);for(var b=a.substring(C),c=a.substring(q,C),d=new ArrayBuffer(2*b.length),e=new Uint16Array(d),f=b.length-1;f>=0;f--)e[f]=b.charCodeAt(f);switch(c){case r:return d;case s:return new Blob([d]);case t:return new Int8Array(d);case u:return new Uint8Array(d);case v:return new Uint8ClampedArray(d);case w:return new Int16Array(d);case y:return new Uint16Array(d);case x:return new Int32Array(d);case z:return new Uint32Array(d);case A:return new Float32Array(d);case B:return new Float64Array(d);default:throw new Error("Unkown type: "+c)}}function h(a){var b="",c=new Uint16Array(a);try{b=String.fromCharCode.apply(null,c)}catch(d){for(var e=0;e<c.length;e++)b+=String.fromCharCode(c[e])}return b}function i(a,b){var c="";if(a&&(c=a.toString()),a&&("[object ArrayBuffer]"===a.toString()||a.buffer&&"[object ArrayBuffer]"===a.buffer.toString())){var d,e=p;a instanceof ArrayBuffer?(d=a,e+=r):(d=a.buffer,"[object Int8Array]"===c?e+=t:"[object Uint8Array]"===c?e+=u:"[object Uint8ClampedArray]"===c?e+=v:"[object Int16Array]"===c?e+=w:"[object Uint16Array]"===c?e+=y:"[object Int32Array]"===c?e+=x:"[object Uint32Array]"===c?e+=z:"[object Float32Array]"===c?e+=A:"[object Float64Array]"===c?e+=B:b(new Error("Failed to get type for BinaryArray")));var f=h(d);b(null,e+f)}else if("[object Blob]"===c){var g=new FileReader;g.onload=function(){var a=h(this.result);b(null,p+s+a)},g.readAsArrayBuffer(a)}else try{b(null,JSON.stringify(a))}catch(i){console.error("Couldn't convert value into a JSON string: ",a),b(i)}}function j(a,b,c){var d=this;return new m(function(e,f){d.ready().then(function(){void 0===b&&(b=null);var d=b;i(b,function(b,g){b?f(b):(n.setItem(k+a,g),c&&c(d),e(d))})})})}var k="",l={name:"localforage"},m=window.Promise,n=null;try{n=window.localStorage}catch(o){return}var p="__lfsc__:",q=p.length,r="arbf",s="blob",t="si08",u="ui08",v="uic8",w="si16",x="si32",y="ur16",z="ui32",A="fl32",B="fl64",C=q+r.length,D={_driver:"localStorageWrapper",_initStorage:a,getItem:c,setItem:j,removeItem:f,clear:b,length:e,key:d};"function"==typeof define&&define.amd?define("localStorageWrapper",function(){return D}):"undefined"!=typeof module&&module.exports?module.exports=D:this.localStorageWrapper=D}.call(this),function(){"use strict";function a(a){if(a)for(var b in o)void 0!==a[b]&&(o[b]="string"!=typeof a[b]?a[b].toString():a[b]);return new m(function(a){n=window.openDatabase(o.name,o.version,o.description,l),n.transaction(function(b){b.executeSql("CREATE TABLE IF NOT EXISTS "+o.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],function(){a()},null)})})}function b(a,b){var c=this;return new m(function(d){c.ready().then(function(){n.transaction(function(c){c.executeSql("SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var e=c.rows.length?c.rows.item(0).value:null;e&&(e=i(e)),b&&b(e),d(e)},null)})})})}function c(a,b,c){var d=this;return new m(function(e,f){d.ready().then(function(){void 0===b&&(b=null);var d=b;j(b,function(b,g){b?f(b):n.transaction(function(b){b.executeSql("INSERT OR REPLACE INTO "+o.storeName+" (key, value) VALUES (?, ?)",[a,g],function(){c&&c(d),e(d)},null)})})})})}function d(a,b){var c=this;return new m(function(d){c.ready().then(function(){n.transaction(function(c){c.executeSql("DELETE FROM "+o.storeName+" WHERE key = ?",[a],function(){b&&b(),d()},null)})})})}function e(a){var b=this;return new m(function(c){b.ready().then(function(){n.transaction(function(b){b.executeSql("DELETE FROM "+o.storeName,[],function(){a&&a(),c()},null)})})})}function f(a){var b=this;return new m(function(c){b.ready().then(function(){n.transaction(function(b){b.executeSql("SELECT COUNT(key) as c FROM "+o.storeName,[],function(b,d){var e=d.rows.item(0).c;a&&a(e),c(e)},null)})})})}function g(a,b){var c=this;return new m(function(d){c.ready().then(function(){n.transaction(function(c){c.executeSql("SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var e=c.rows.length?c.rows.item(0).key:null;b&&b(e),d(e)},null)})})})}function h(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=k[c[b]>>2],d+=k[(3&c[b])<<4|c[b+1]>>4],d+=k[(15&c[b+1])<<2|c[b+2]>>6],d+=k[63&c[b+2]];return c.length%3===2?d=d.substring(0,d.length-1)+"=":c.length%3===1&&(d=d.substring(0,d.length-2)+"=="),d}function i(a){if(a.substring(0,q)!==p)return JSON.parse(a);var b,c,d,e,f,g=a.substring(C),h=a.substring(q,C),i=.75*g.length,j=g.length,l=0;"="===g[g.length-1]&&(i--,"="===g[g.length-2]&&i--);var m=new ArrayBuffer(i),n=new Uint8Array(m);for(b=0;j>b;b+=4)c=k.indexOf(g[b]),d=k.indexOf(g[b+1]),e=k.indexOf(g[b+2]),f=k.indexOf(g[b+3]),n[l++]=c<<2|d>>4,n[l++]=(15&d)<<4|e>>2,n[l++]=(3&e)<<6|63&f;switch(h){case r:return m;case s:return new Blob([m]);case t:return new Int8Array(m);case u:return new Uint8Array(m);case v:return new Uint8ClampedArray(m);case w:return new Int16Array(m);case y:return new Uint16Array(m);case x:return new Int32Array(m);case z:return new Uint32Array(m);case A:return new Float32Array(m);case B:return new Float64Array(m);default:throw new Error("Unkown type: "+h)}}function j(a,b){var c="";if(a&&(c=a.toString()),a&&("[object ArrayBuffer]"===a.toString()||a.buffer&&"[object ArrayBuffer]"===a.buffer.toString())){var d,e=p;a instanceof ArrayBuffer?(d=a,e+=r):(d=a.buffer,"[object Int8Array]"===c?e+=t:"[object Uint8Array]"===c?e+=u:"[object Uint8ClampedArray]"===c?e+=v:"[object Int16Array]"===c?e+=w:"[object Uint16Array]"===c?e+=y:"[object Int32Array]"===c?e+=x:"[object Uint32Array]"===c?e+=z:"[object Float32Array]"===c?e+=A:"[object Float64Array]"===c?e+=B:b(new Error("Failed to get type for BinaryArray")));var f=h(d);b(null,e+f)}else if("[object Blob]"===c){var g=new FileReader;g.onload=function(){var a=h(this.result);b(null,p+s+a)},g.readAsArrayBuffer(a)}else try{b(null,JSON.stringify(a))}catch(i){console.error("Couldn't convert value into a JSON string: ",a),b(i)}}var k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=4980736,m=window.Promise,n=null,o={description:"",name:"localforage",storeName:"keyvaluepairs",version:"1.0"},p="__lfsc__:",q=p.length,r="arbf",s="blob",t="si08",u="ui08",v="uic8",w="si16",x="si32",y="ur16",z="ui32",A="fl32",B="fl64",C=q+r.length;if(window.openDatabase){var D={_driver:"webSQLStorage",_initStorage:a,getItem:b,setItem:c,removeItem:d,clear:e,length:f,key:g};"function"==typeof define&&define.amd?define("webSQLStorage",function(){return D}):"undefined"!=typeof module&&module.exports?module.exports=D:this.webSQLStorage=D}}.call(this),function(){"use strict";var a=window.Promise,b=1,c=2,d=3,e=d;"function"==typeof define&&define.amd?e=b:"undefined"!=typeof module&&module.exports&&(e=c);var f,g=g||window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB||window.OIndexedDB||window.msIndexedDB,h=this,i={INDEXEDDB:"asyncStorage",LOCALSTORAGE:"localStorageWrapper",WEBSQL:"webSQLStorage",driver:function(){return this._driver||null},_ready:a.reject(new Error("setDriver() wasn't called")),setDriver:function(d,f){return this._ready=new a(function(a,j){if(!g&&d===i.INDEXEDDB||!window.openDatabase&&d===i.WEBSQL)return f&&f(i),void j(i);if(e===b)require([d],function(b){i._extend(b),i._initStorage(window.localForageConfig).then(function(){f&&f(i),a(i)})});else if(e===c){var k;switch(d){case i.INDEXEDDB:k=require("localforage/src/drivers/indexeddb");break;case i.LOCALSTORAGE:k=require("localforage/src/drivers/localstorage");break;case i.WEBSQL:k=require("localforage/src/drivers/websql")}i._extend(k),i._initStorage(window.localForageConfig).then(function(){f&&f(i),a(i)})}else i._extend(h[d]),i._initStorage(window.localForageConfig).then(function(){f&&f(i),a(i)})}),i._ready},ready:function(){return this._ready},_extend:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b])}};f=g?i.INDEXEDDB:window.openDatabase?i.WEBSQL:i.LOCALSTORAGE,i.setDriver(f),e===b?define(function(){return i}):e===c?module.exports=i:this.localforage=i}.call(this);
/**
 * copyright: Olivier Combe (https://github.com/ocombe/angular-localForage)
 */

(function (window, angular, undefined) {
    'use strict';

    var angularLocalForage = angular.module('LocalForageModule', ['ng']);
    angularLocalForage.provider('$localForage', function () {
        window.localForageConfig = {
            name: 'lf' // default prefix
        };

        // Send signals for each of the following actions ?
        this.notify = {
            setItem: false,
            removeItem: false
        };

        // Setter for the prefix
        this.setPrefix = function (prefix) {
            if (angular.isDefined(prefix) && prefix !== window.localForageConfig.name) {
                window.localForageConfig.name = prefix;
                localforage._initStorage(window.localForageConfig);
            }
        };

        // Setter for the storage driver
        var setDriver = function (driver) {
            return localforage.setDriver(driver);
        };

        this.setDriver = setDriver;

        // Getter for the storage driver
        var driver = function () {
            return localforage.driver();
        };

        // Setter for notification config, itemSet & itemRemove should be booleans
        this.setNotify = function (itemSet, itemRemove) {
            this.notify = {
                setItem: itemSet,
                removeItem: itemRemove
            };
        };

        this.config = function (config) {
            if (angular.isObject(config)) {
                window.localForageConfig = config;
                if (angular.isDefined(config.driver)) {
                    return setDriver(config.driver);
                } else {
                    return localforage._initStorage(config);
                }
            }
        }

        this.$get = ['$rootScope', '$q', '$parse', function ($rootScope, $q, $parse) {
            var notify = this.notify;
            var watchers = {};

            var prefix = function () {
                return driver() === 'localStorageWrapper' ? 'lfp.' : '';
            }

            var onError = function (data, args, fct, deferred) {
                if (data === 'InvalidStateError' && driver() === 'asyncStorage') {
                    setDriver('localStorageWrapper').then(function () {
                        fct(args).then(function (item) {
                            deferred.resolve(item);
                        }, function (data) {
                            deferred.reject(data);
                        });
                    }, function () {
                        deferred.reject(data);
                    });
                } else {
                    deferred.reject(data);
                }
            }

            // Directly adds a value to storage
            var setItem = function (key, value) {
                var deferred = $q.defer(),
					args = arguments;
                localforage.setItem(prefix() + key, value).then(function success() {
                    if (notify.setItem) {
                        $rootScope.$broadcast('LocalForageModule.setItem', { key: key, newvalue: value, driver: localforage.driver() });
                    }
                    deferred.resolve();
                }, function error(data) {
                    onError(data, args, setItem, deferred);
                });

                return deferred.promise;
            };

            // Directly get a value from storage
            var getItem = function (key) {
                var deferred = $q.defer(),
					args = arguments;
                localforage.getItem(prefix() + key).then(function success(item) {
                    deferred.resolve(item);
                }, function error(data) {
                    onError(data, args, getItem, deferred);
                });
                return deferred.promise;
            };

            // Remove an item from storage
            var removeItem = function (key) {
                var promise = localforage.removeItem(prefix() + key);
                if (notify.setItem) {
                    return promise.then(function (value) {
                        $rootScope.$broadcast('LocalForageModule.removeItem', { key: key, driver: localforage.driver() });
                    });
                } else {
                    return promise;
                }
            };

            // Remove all data for this app from storage (we could use localforage.clear(); but we don't want to remove things without the prefix
            var clear = function () {
                var deferred = $q.defer(),
					args = arguments,
					promises = [];
                getKeys().then(function success(keys) {
                    angular.forEach(keys, function (key) {
                        promises.push(removeItem(key));
                    });

                    $q.all(promises).then(function () {
                        deferred.resolve();
                    });
                }, function error(data) {
                    onError(data, args, clearAll, deferred);
                });
                return deferred.promise;
            }

            // Return the key for item at position n
            var key = function (n) {
                var deferred = $q.defer(),
					args = arguments;
                localforage.key(n).then(function success(key) {
                    deferred.resolve(key);
                }, function error(data) {
                    onError(data, args, key, deferred);
                });
                return deferred.promise;
            };

            var length = function () {
                var deferred = $q.defer(),
					args = arguments; // using $q to avoid using $apply
                localforage.length().then(function success(length) {
                    deferred.resolve(length);
                }, function error(data) {
                    onError(data, args, length, deferred);
                });
                return deferred.promise;
            }

            // Return the list of keys stored for this application
            var getKeys = function () {
                var deferred = $q.defer(),
					args = arguments;
                length().then(function success(length) {
                    var promises = [],
						keys = [],
                        p = prefix();
                    for (var i = 0; i < length; i++) {
                        promises.push(key(i).then(function (key) {
                            if (key.indexOf(p) === 0) {
                                keys.push(key.substr(p.length, key.length));
                            }
                        }));
                    }

                    $q.all(promises).then(function () {
                        deferred.resolve(keys);
                    });
                }, function error(data) {
                    onError(data, args, getKeys, deferred);
                });
                return deferred.promise;
            }

            /**
			 * Bind - let's you directly bind a LocalForage value to a $scope variable
			 * @param {Angular $scope} $scope - the current scope you want the variable available in
			 * @param {String} key - the name of the variable you are binding
			 * @param {String} key - the name of the variable you are binding OR {Object} opts - key and custom options like default value or unique store name
			 * Here are the available options you can set:
			 * * defaultValue: the default value
			 * * storeName: add a custom store key value instead of using the scope variable name
			 * @returns {*} - returns whatever the stored value is
			 */
            var bind = function ($scope, opts) {
                if (angular.isString(opts)) {
                    opts = {
                        key: opts
                    }
                } else if (!angular.isObject(opts) || angular.isUndefined(opts.key)) {
                    throw "You must defined a key to bind";
                }
                var defaultOpts = {
                    defaultValue: '',
                    storeName: ''
                };
                // If no defined options we use defaults otherwise extend defaults
                opts = angular.extend(defaultOpts, opts || {});

                // Set the storeName key for the LocalForage entry
                // use user defined in specified
                var storeName = opts.storeName || opts.key,
					model = $parse(opts.key);

                return getItem(storeName).then(function (item) {
                    if (item) { // If it does exist assign it to the $scope value
                        model.assign($scope, item);
                    } else if (opts.defaultValue) { // If a value doesn't already exist store it as is
                        setItem(storeName, opts.defaultValue);
                    }

                    // Register a listener for changes on the $scope value
                    // to update the localForage value
                    if (angular.isDefined(watchers[opts.key])) {
                        watchers[opts.key]();
                    }

                    watchers[opts.key] = $scope.$watch($parse(opts.key), function (val) {
                        if (angular.isDefined(val)) {
                            setItem(storeName, val);
                        }
                    }, true);
                });
            }

            /**
			 * Unbind - let's you unbind a variable from localForage while removing the value from both
			 * the localForage and the local variable and sets it to null
			 * @param $scope - the scope the variable was initially set in
			 * @param key - the name of the variable you are unbinding
			 * @param storeName - (optional) if you used a custom storeName you will have to specify it here as well
			 */
            var unbind = function ($scope, key, storeName) {
                storeName = storeName || key;
                $parse(key).assign($scope, null);
                if (angular.isDefined(watchers[key])) {
                    watchers[key](); // unwatch
                    delete watchers[key];
                }
                removeItem(storeName);
            }

            return {
                setDriver: setDriver,
                driver: driver,
                getDriver: driver, // deprecated
                setItem: setItem,
                set: setItem, // deprecated
                getItem: getItem,
                get: getItem, // deprecated
                remove: removeItem,
                removeItem: removeItem, // deprecated
                clear: clear,
                clearAll: clear, // deprecated
                key: key,
                getKeyAt: key, // deprecated
                getKeys: getKeys,
                length: length,
                getLength: length, // deprecated
                bind: bind,
                unbind: unbind
            };
        }]
    });

    angularLocalForage.directive('localForage', ['$localForage', function ($localForage) {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {
                var opts = $scope.$eval($attrs.localForage);
                if (angular.isObject(opts) && angular.isDefined(opts.key) && angular.isDefined(opts.storeName)) {
                    $localForage.bind($scope, opts);
                } else {
                    $localForage.bind($scope, $attrs.localForage);
                }
            }
        }
    }]);
})(window, window.angular);
/* https://github.com/ttsvetko/HTML5-Desktop-Notifications */ 
(function (e) { function m(t, n) { var r; return e.Notification ? r = new e.Notification(t, { icon: c(n.icon) ? n.icon : n.icon.x32, body: n.body || u, tag: n.tag || u }) : e.webkitNotifications ? (r = e.webkitNotifications.createNotification(n.icon, t, n.body), r.show()) : navigator.mozNotification ? (r = navigator.mozNotification.createNotification(t, n.body, n.icon), r.show()) : e.external && e.external.msIsSiteMode() && (e.external.msSiteModeClearIconOverlay(), e.external.msSiteModeSetIconOverlay(c(n.icon) ? n.icon : n.icon.x16, t), e.external.msSiteModeActivate(), r = { ieVerification: f + 1 }), r } function g(t) { return { close: function () { t && (t.close ? t.close() : e.external && e.external.msIsSiteMode() && t.ieVerification === f && e.external.msSiteModeClearIconOverlay()) } } } function y(t) { if (!a) return; var n = l(t) ? t : d; e.webkitNotifications && e.webkitNotifications.checkPermission ? e.webkitNotifications.requestPermission(n) : e.Notification && e.Notification.requestPermission && e.Notification.requestPermission(n) } function b() { var r; if (!a) return; return e.Notification && e.Notification.permissionLevel ? r = e.Notification.permissionLevel() : e.webkitNotifications && e.webkitNotifications.checkPermission ? r = i[e.webkitNotifications.checkPermission()] : navigator.mozNotification ? r = n : e.Notification && e.Notification.permission ? r = e.Notification.permission : e.external && e.external.msIsSiteMode() !== undefined && (r = e.external.msIsSiteMode() ? n : t), r } function w(e) { return e && h(e) && p(v, e), v } function E() { return v.pageVisibility ? document.hidden || document.msHidden || document.mozHidden || document.webkitHidden : !0 } function S(t, r) { var i, s; return a && E() && c(t) && r && (c(r.icon) || h(r.icon)) && b() === n && (i = m(t, r)), s = g(i), v.autoClose && i && !i.ieVerification && i.addEventListener && i.addEventListener("show", function () { var t = s; e.setTimeout(function () { t.close() }, v.autoClose) }), s } var t = "default", n = "granted", r = "denied", i = [n, t, r], s = { pageVisibility: !1, autoClose: 0 }, o = {}, u = "", a = function () { var t = !1; try { t = !!(e.Notification || e.webkitNotifications || navigator.mozNotification || e.external && e.external.msIsSiteMode() !== undefined) } catch (n) { } return t }(), f = Math.floor(Math.random() * 10 + 1), l = function (e) { return e && e.constructor === Function }, c = function (e) { return e && e.constructor === String }, h = function (e) { return e && e.constructor === Object }, p = function (e, t) { var n, r; for (n in t) { r = t[n]; if (!(n in e) || e[n] !== r && (!(n in o) || o[n] !== r)) e[n] = r } return e }, d = function () { }, v = s; e.notify = { PERMISSION_DEFAULT: t, PERMISSION_GRANTED: n, PERMISSION_DENIED: r, isSupported: a, config: w, createNotification: S, permissionLevel: b, requestPermission: y }, l(Object.seal) && Object.seal(e.notify) })(window);
"use strict";

// Declare app level module which depends on filters, and services
var app = angular.module('AgileTasker', [
    'ngRoute',
    'LocalForageModule',
    'app.filters',
    'app.services',
    'app.directives',
    'app.controllers'
])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'Partials/timer.html'
    });
    $routeProvider.when('/about', {
        templateUrl: 'Partials/about.html'
    });
    $routeProvider.when('/history', {
        templateUrl: 'Partials/history.html'
    });
    $routeProvider.when('/settings', {
        templateUrl: 'Partials/settings.html'
    });
    $routeProvider.otherwise({ redirectTo: '/' });
}]);
'use strict';

/* Controllers */
angular.module('app.controllers', [])

.controller('TimerCtrl', ['$scope', '$localForage', 'UserSettings', 'Notification', function ($scope, $localForage, UserSettings, Notification) {
    //#region Models
    $scope.isPlaying = false;

    $scope.settings = {
        options: [{ value: 15, label: 15 }, { value: 20, label: 20 }, { value: 25, label: 25 }, { value: 30, label: 30 }],
        currentTime: "",
        selectedTime: {},
        taskTextBox: ""
    };

    $scope.settings.selectedTime = $scope.settings.options[2];
    $scope.settings.currentTime = $scope.settings.options[2].value + ":00";

    // Bind userSettings service to local storage
    $scope.userSettings = UserSettings;
    $localForage.bind($scope, {
        key: 'userSettings',
        defaultValue: UserSettings,
        storeName: 'StorageSettings'
    });
    //#endregion

    //#region Globals
    var startTime = new Date().toLocaleTimeString();
    var endTime = new Date().toLocaleTimeString();
    var timerInterval = 0;
    var timerDate = new Date();
    timerDate.setMinutes($scope.settings.selectedTime.value);
    timerDate.setSeconds(0);
    //#endregion

    //#region Click Events
    $scope.startTimer = startTimer;
    $scope.stopTimer = stopTimer;
    $scope.clearList = clearHistory;
    $scope.toggleSound = toggleSound;
    //#endregion

    function startTimer() {
        resetTimer();
        timerInterval = setInterval(intervalTimer, 1000);
        startTime = new Date().toLocaleTimeString();
        $scope.isPlaying = true;

        if (notify.permissionLevel() === notify.PERMISSION_DEFAULT) {
            notify.requestPermission();
        }
    }

    function stopTimer() {
        resetTimer();
        $scope.isPlaying = '';
        document.title = 'Agile Tasker';
    };

    function clearHistory() {
        $scope.userSettings.taskHistory = [];
    };

    function toggleSound() {
        $scope.userSettings.sound.play = !$scope.userSettings.sound.play;
        if ($scope.userSettings.sound.play === true) {
            Notification.playAudio();
        }
    };

    //#region Timmer Helper Functons
    function intervalTimer() {
        if (timeIsUp()) {
            $scope.stopTimer();
            endTime = new Date().toLocaleTimeString();
            console.log($scope.userSettings.sound.play);
            Notification.notify($scope.userSettings.sound.play);
            saveTaskToHistory();
        } else {
            timerDate.setSeconds(timerDate.getSeconds() - 1);
            $scope.settings.currentTime = getCurrentTime(timerDate);
            document.title = $scope.settings.currentTime;
        }
        $scope.$apply();
    }

    function timeIsUp() {
        return (timerDate.getMinutes() === 0 && timerDate.getSeconds() === 0);
    }

    function resetTimer() {
        clearInterval(timerInterval);
        $scope.settings.currentTime = $scope.settings.selectedTime.value + ":" + "00";
        timerDate.setMinutes($scope.settings.selectedTime.value);  // $scope.settings.selectedTime.value
        timerDate.setSeconds(0);                                   // Test Switch 
    }

    function getCurrentTime(currentTime) {
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        return minutes + ':' + seconds;
    }

    function saveTaskToHistory() {
        var _text = "Unknown";
        if ($scope.settings.taskTextBox !== "") {
            _text = $scope.settings.taskTextBox;
        }

        $scope.userSettings.taskHistory.push({ start: startTime, stop: endTime, text: _text });
        $scope.settings.taskTextBox = "";
    }
    //#endregion
}])
'use strict';

/* Directives */
angular.module('app.directives', [])

.directive('history',function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        template: '<a href="">' +
                    'Test' +
                  '</a>',
        link: function (scope, element, attrs) {
            // DOM manipulation/events here!
        }
    };
})

.directive('appVersion', ['version', function (version) {
      return function(scope, elm, attrs) {
          elm.text(version);
      };
}])

.directive('clock', ['$timeout', 'dateFilter', function ($timeout, dateFilter) { // http://jsdo.it/can.i.do.web/zHbM
    return function (scope, element, attrs) {
        var timeoutId; // timeoutId, so that we can cancel the time updates

        // schedule update in one second
        function updateLater() {
            // save the timeoutId for canceling
            timeoutId = $timeout(function () {
                element.text(dateFilter(new Date(), 'shortTime'));
                updateLater(); // schedule another update
            }, 1000);
        }

        // listen on DOM destroy (removal) event, and cancel the next UI update
        // to prevent updating time ofter the DOM element was removed.
        element.bind('$destroy', function () {
            $timeout.cancel(timeoutId);
        });

        updateLater(); // kick off the UI update process.
    }
}]);
'use strict';

/* Filters */
angular.module('app.filters', []).

filter('interpolateVersion', ['version', function (version) {
    return function (text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    };
}]);
'use strict';

/* Services */
angular.module('app.services', []).value('version', '1.5.3')

.factory('UserSettings', ['$localForage', function ($localForage) {
    _userSettings = {
        sound: { play: true },
        taskHistory: []
    }
    return _userSettings;
}])

.factory('Notification', [function () {

    var audio = new Audio();
    audio.src = Modernizr.audio.ogg ? 'Content/Audio/chime.ogg' :
                Modernizr.audio.mp3 ? 'Content/Audio/chime.mp3' :
                                      'Content/Audio/chime.m4a';

    function nativeNotification() {
        if (notify.permissionLevel() === notify.PERMISSION_DEFAULT) {
            notify.requestPermission();
        } else if (notify.permissionLevel() === notify.PERMISSION_GRANTED) {
            notify.createNotification('Agile Task Complete', {
                body: 'Time to take a break!',
                icon: 'Content/Images/icon.png'
            });
        } else if (notify.permissionLevel() === notify.PERMISSION_DENIED) {
            alert("Agile Task Complete");
        } else {
            alert("Agile Task Complete");
        }
    }

    function toggleAudio(playSound) {
        if (playSound === true) {
            audio.pause();
            audio.currentTime = 0;
            audio.play();
        }
    }

    function vibrationNotification() {
        // enable vibration support
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

        if (navigator.vibrate) {
            navigator.vibrate([500, 200, 500]);
        }
    }

    return {
        notify: function (playSound) {
            vibrationNotification();
            setTimeout(function () { nativeNotification(); toggleAudio(playSound); }, 1600);
            // Set timeout because html5 Vibrate API does not take a callback ( Alert stops vibration ) :(
        },

        playAudio: function () {
            audio.pause();
            audio.currentTime = 0;
            audio.play();
        }
    }
}]);
