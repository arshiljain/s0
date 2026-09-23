////////////////////////////////////////////
;(function (packageFunction) {
  /* istanbul ignore next */
  var p = window.AmazonUIPageJS || window.P;
  /* istanbul ignore next */
  var attribute = p._namespace || p.attributeErrors;
  /* istanbul ignore next */
  var namespacedP = attribute ? attribute("AmazonHomepageBuzzWebComponents", "") : p;

  /* istanbul ignore next */
  if (namespacedP.guardFatal) {
    namespacedP.guardFatal(packageFunction)(namespacedP, window);
  } else {
    namespacedP.execute(function () {
      packageFunction(namespacedP, window);
    });
  }
}(function(P, window, undefined){
// BEGIN ASSET AmazonHomepageBuzzWebComponents - 1.0
/////////////////////////
// BEGIN FILE js/homepage-wc.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
var HomepageWC=(function(a){"use strict";typeof globalThis=="undefined"&&typeof window!="undefined"&&(window.globalThis=window);var st,at,rt,nt,ot,lt;if(window.__HP_WC_DEFINED__)return window.HomepageWC||{};window.__HP_WC_DEFINED__=!0;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=globalThis,ye=ue.ShadowRoot&&(ue.ShadyCSS===void 0||ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Oe=Symbol(),Le=new WeakMap;let bt=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ye&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Le.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Le.set(t,e))}return e}toString(){return this.cssText}};const mt=n=>new bt(typeof n=="string"?n:n+"",void 0,Oe),yt=(n,e)=>{if(ye)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=ue.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,n.appendChild(s)}},Be=ye?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return mt(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_t,defineProperty:vt,getOwnPropertyDescriptor:$t,getOwnPropertyNames:Ct,getOwnPropertySymbols:Ht,getPrototypeOf:At}=Object,L=globalThis,je=L.trustedTypes,xt=je?je.emptyScript:"",_e=L.reactiveElementPolyfillSupport,K=(n,e)=>n,ge={toAttribute(n,e){switch(e){case Boolean:n=n?xt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch(s){t=null}}return t}},ve=(n,e)=>!_t(n,e),Re={attribute:!0,type:String,converter:ge,reflect:!1,useDefault:!1,hasChanged:ve};(st=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(at=L.litPropertyMetadata)!=null||(L.litPropertyMetadata=new WeakMap);let W=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),((t=this.l)!=null?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Re){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&vt(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){var o;const{get:i,set:r}=(o=$t(this.prototype,e))!=null?o:{get(){return this[t]},set(d){this[t]=d}};return{get:i,set(d){const p=i==null?void 0:i.call(this);r==null||r.call(this,d),this.requestUpdate(e,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return(t=this.elementProperties.get(e))!=null?t:Re}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;const e=At(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){const t=this.properties,s=[...Ct(t),...Ht(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(Be(i))}else e!==void 0&&t.push(Be(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$EO)!=null?t:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var t;const e=(t=this.shadowRoot)!=null?t:this.attachShadow(this.constructor.shadowRootOptions);return yt(e,this.constructor.elementStyles),e}connectedCallback(){var e,t;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var r;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:ge).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){var r,o,d;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const p=s.getPropertyOptions(i),u=typeof p.converter=="function"?{fromAttribute:p.converter}:((r=p.converter)==null?void 0:r.fromAttribute)!==void 0?p.converter:ge;this._$Em=i;const g=u.fromAttribute(t,p.type);this[i]=(d=g!=null?g:(o=this._$Ej)==null?void 0:o.get(i))!=null?d:g,this._$Em=null}}requestUpdate(e,t,s,i=!1,r){var o,d;if(e!==void 0){const p=this.constructor;if(i===!1&&(r=this[e]),s!=null||(s=p.getPropertyOptions(e)),!(((o=s.hasChanged)!=null?o:ve)(r,t)||s.useDefault&&s.reflect&&r===((d=this._$Ej)==null?void 0:d.get(e))&&!this.hasAttribute(p._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:r},o){var d,p,u;s&&!((d=this._$Ej)!=null?d:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,(p=o!=null?o:t)!=null?p:this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&((u=this._$Eq)!=null?u:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s,i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((s=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,d]of this._$Ep)this[o]=d;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,d]of r){const{wrapped:p}=d,u=this[o];p!==!0||this._$AL.has(o)||u===void 0||this.C(o,void 0,d,u)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[K("elementProperties")]=new Map,W[K("finalized")]=new Map,_e==null||_e({ReactiveElement:W}),((rt=L.reactiveElementVersions)!=null?rt:L.reactiveElementVersions=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,Ve=n=>n,fe=J.trustedTypes,De=fe?fe.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ne="$lit$",B=`lit$${Math.random().toFixed(9).slice(2)}$`,Me="?"+B,wt=`<${Me}>`,j=document,ee=()=>j.createComment(""),te=n=>n===null||typeof n!="object"&&typeof n!="function",$e=Array.isArray,St=n=>$e(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Ce=`[ 	
\f\r]`,ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ue=/-->/g,Fe=/>/g,R=RegExp(`>|${Ce}(?:([^\\s"'>=/]+)(${Ce}*=${Ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qe=/'/g,Ze=/"/g,Xe=/^(?:script|style|textarea|title)$/i,Pt=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),h=Pt(1),V=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),Ye=new WeakMap,D=j.createTreeWalker(j,129);function We(n,e){if(!$e(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return De!==void 0?De.createHTML(e):e}const kt=(n,e)=>{const t=n.length-1,s=[];let i,r=e===2?"<svg>":e===3?"<math>":"",o=ie;for(let d=0;d<t;d++){const p=n[d];let u,g,f=-1,v=0;for(;v<p.length&&(o.lastIndex=v,g=o.exec(p),g!==null);)v=o.lastIndex,o===ie?g[1]==="!--"?o=Ue:g[1]!==void 0?o=Fe:g[2]!==void 0?(Xe.test(g[2])&&(i=RegExp("</"+g[2],"g")),o=R):g[3]!==void 0&&(o=R):o===R?g[0]===">"?(o=i!=null?i:ie,f=-1):g[1]===void 0?f=-2:(f=o.lastIndex-g[2].length,u=g[1],o=g[3]===void 0?R:g[3]==='"'?Ze:qe):o===Ze||o===qe?o=R:o===Ue||o===Fe?o=ie:(o=R,i=void 0);const y=o===R&&n[d+1].startsWith("/>")?" ":"";r+=o===ie?p+wt:f>=0?(s.push(u),p.slice(0,f)+Ne+p.slice(f)+B+y):p+B+(f===-2?d:y)}return[We(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class se{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,o=0;const d=e.length-1,p=this.parts,[u,g]=kt(e,t);if(this.el=se.createElement(u,s),D.currentNode=this.el.content,t===2||t===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=D.nextNode())!==null&&p.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Ne)){const v=g[o++],y=i.getAttribute(f).split(B),P=/([.?@])?(.*)/.exec(v);p.push({type:1,index:r,name:P[2],strings:y,ctor:P[1]==="."?It:P[1]==="?"?zt:P[1]==="@"?Tt:be}),i.removeAttribute(f)}else f.startsWith(B)&&(p.push({type:6,index:r}),i.removeAttribute(f));if(Xe.test(i.tagName)){const f=i.textContent.split(B),v=f.length-1;if(v>0){i.textContent=fe?fe.emptyScript:"";for(let y=0;y<v;y++)i.append(f[y],ee()),D.nextNode(),p.push({type:2,index:++r});i.append(f[v],ee())}}}else if(i.nodeType===8)if(i.data===Me)p.push({type:2,index:r});else{let f=-1;for(;(f=i.data.indexOf(B,f+1))!==-1;)p.push({type:7,index:r}),f+=B.length-1}r++}}static createElement(e,t){const s=j.createElement("template");return s.innerHTML=e,s}}function G(n,e,t=n,s){var o,d,p;if(e===V)return e;let i=s!==void 0?(o=t._$Co)==null?void 0:o[s]:t._$Cl;const r=te(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((d=i==null?void 0:i._$AO)==null||d.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,t,s)),s!==void 0?((p=t._$Co)!=null?p:t._$Co=[])[s]=i:t._$Cl=i),i!==void 0&&(e=G(n,i._$AS(n,e.values),i,s)),e}class Et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var u;const{el:{content:t},parts:s}=this._$AD,i=((u=e==null?void 0:e.creationScope)!=null?u:j).importNode(t,!0);D.currentNode=i;let r=D.nextNode(),o=0,d=0,p=s[0];for(;p!==void 0;){if(o===p.index){let g;p.type===2?g=new ae(r,r.nextSibling,this,e):p.type===1?g=new p.ctor(r,p.name,p.strings,this,e):p.type===6&&(g=new Ot(r,this,e)),this._$AV.push(g),p=s[++d]}o!==(p==null?void 0:p.index)&&(r=D.nextNode(),o++)}return D.currentNode=j,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class ae{get _$AU(){var e,t;return(t=(e=this._$AM)==null?void 0:e._$AU)!=null?t:this._$Cv}constructor(e,t,s,i){var r;this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(r=i==null?void 0:i.isConnected)!=null?r:!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),te(e)?e===c||e==null||e===""?(this._$AH!==c&&this._$AR(),this._$AH=c):e!==this._$AH&&e!==V&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):St(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==c&&te(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=se.createElement(We(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(t);else{const o=new Et(i,this),d=o.u(this.options);o.p(t),this.T(d),this._$AH=o}}_$AC(e){let t=Ye.get(e.strings);return t===void 0&&Ye.set(e.strings,t=new se(e)),t}k(e){$e(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new ae(this.O(ee()),this.O(ee()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=Ve(e).nextSibling;Ve(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class be{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(e,t=this,s,i){const r=this.strings;let o=!1;if(r===void 0)e=G(this,e,t,0),o=!te(e)||e!==this._$AH&&e!==V,o&&(this._$AH=e);else{const d=e;let p,u;for(e=r[0],p=0;p<r.length-1;p++)u=G(this,d[s+p],t,p),u===V&&(u=this._$AH[p]),o||(o=!te(u)||u!==this._$AH[p]),u===c?e=c:e!==c&&(e+=(u!=null?u:"")+r[p+1]),this._$AH[p]=u}o&&!i&&this.j(e)}j(e){e===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class It extends be{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===c?void 0:e}}class zt extends be{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==c)}}class Tt extends be{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){var o;if((e=(o=G(this,e,t,0))!=null?o:c)===V)return;const s=this._$AH,i=e===c&&s!==c||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)==null?void 0:t.host)!=null?s:this.element,e):this._$AH.handleEvent(e)}}class Ot{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const He=J.litHtmlPolyfillSupport;He==null||He(se,ae),((nt=J.litHtmlVersions)!=null?nt:J.litHtmlVersions=[]).push("3.3.3");const Lt=(n,e,t)=>{var r,o;const s=(r=t==null?void 0:t.renderBefore)!=null?r:e;let i=s._$litPart$;if(i===void 0){const d=(o=t==null?void 0:t.renderBefore)!=null?o:null;s._$litPart$=i=new ae(e.insertBefore(ee(),d),d,void 0,t!=null?t:{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis;let b=class extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,s;const e=super.createRenderRoot();return(s=(t=this.renderOptions).renderBefore)!=null||(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Lt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return V}};b._$litElement$=!0,b.finalized=!0,(ot=N.litElementHydrateSupport)==null||ot.call(N,{LitElement:b});const Ae=N.litElementPolyfillSupport;Ae==null||Ae({LitElement:b}),((lt=N.litElementVersions)!=null?lt:N.litElementVersions=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:ve},jt=(n=Bt,e,t)=>{const{kind:s,metadata:i}=t;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(t.name,n),s==="accessor"){const{name:o}=t;return{set(d){const p=e.get.call(this);e.set.call(this,d),this.requestUpdate(o,p,n,!0,d)},init(d){return d!==void 0&&this.C(o,void 0,n,d),d}}}if(s==="setter"){const{name:o}=t;return function(d){const p=this[o];e.call(this,d),this.requestUpdate(o,p,n,!0,d)}}throw Error("Unsupported decorator location: "+s)};function l(n){return(e,t)=>typeof t=="object"?jt(n,e,t):((s,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(n){return l({...n,state:!0,attribute:!1})}function re(n){const e=[];return n.textBold&&e.push("a-text-bold"),n.textCapitalize&&e.push("a-text-caps"),n.textEmphasis&&e.push("a-text-italic"),n.textNowrap&&e.push("a-nowrap"),n.textQuote&&e.push("a-text-quote"),n.textStrikethrough&&e.push("a-text-strike"),n.textNormal&&e.push("a-text-normal"),e}function xe(n,e,t){if(n){for(const s of Array.from(n.attributes))(s.name.startsWith("aria-")||s.name.startsWith("data-"))&&n.removeAttribute(s.name);for(const[s,i]of Object.entries(e))i&&n.setAttribute(`aria-${s}`,i);for(const[s,i]of Object.entries(t))i&&n.setAttribute(`data-${s}`,i)}}var Rt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,A=(n,e,t,s)=>{for(var i=s>1?void 0:s?Vt(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Rt(e,t,i),i};const Dt=`
  hp-aui-abbreviation { display: inline; }
`;a.HpAuiAbbreviation=class extends b{constructor(){super(...arguments),this.text="",this.abbreviationTitle="",this.textSize="",this.textColor="",this.textPosition="",this.textBold=!1,this.textCapitalize=!1,this.textEmphasis=!1,this.textNowrap=!1,this.textQuote=!1,this.textStrikethrough=!1,this.textNormal=!1,this.cssClass="",this.innerId=""}createRenderRoot(){return this}connectedCallback(){if(!a.HpAuiAbbreviation._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-aui-abbreviation"),e.textContent=Dt,document.head.appendChild(e),a.HpAuiAbbreviation._stylesInjected=!0}super.connectedCallback()}_buildClasses(){const e=[];return this.textSize&&e.push(`a-size-${this.textSize}`),this.textColor&&e.push(`a-color-${this.textColor}`),this.textPosition&&e.push(`a-${this.textPosition}`),e.push(...re(this)),this.cssClass&&e.push(this.cssClass),e.join(" ")}render(){const e=this._buildClasses();return h`<abbr class=${e||c} id=${this.innerId||c} title=${this.abbreviationTitle||c}>${this.text}</abbr>`}},a.HpAuiAbbreviation._stylesInjected=!1,A([l()],a.HpAuiAbbreviation.prototype,"text",2),A([l()],a.HpAuiAbbreviation.prototype,"abbreviationTitle",2),A([l()],a.HpAuiAbbreviation.prototype,"textSize",2),A([l()],a.HpAuiAbbreviation.prototype,"textColor",2),A([l()],a.HpAuiAbbreviation.prototype,"textPosition",2),A([l({type:Boolean})],a.HpAuiAbbreviation.prototype,"textBold",2),A([l({type:Boolean})],a.HpAuiAbbreviation.prototype,"textCapitalize",2),A([l({type:Boolean})],a.HpAuiAbbreviation.prototype,"textEmphasis",2),A([l({type:Boolean})],a.HpAuiAbbreviation.prototype,"textNowrap",2),A([l({type:Boolean})],a.HpAuiAbbreviation.prototype,"textQuote",2),A([l({type:Boolean})],a.HpAuiAbbreviation.prototype,"textStrikethrough",2),A([l({type:Boolean})],a.HpAuiAbbreviation.prototype,"textNormal",2),A([l()],a.HpAuiAbbreviation.prototype,"cssClass",2),A([l({attribute:"inner-id"})],a.HpAuiAbbreviation.prototype,"innerId",2),a.HpAuiAbbreviation=A([m("hp-aui-abbreviation")],a.HpAuiAbbreviation);var Nt=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,_=(n,e,t,s)=>{for(var i=s>1?void 0:s?Mt(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Nt(e,t,i),i};const Ut=`
  hp-aui-heading {
    display: block;
  }
`;a.HpAuiHeading=class extends b{constructor(){super(...arguments),this.headingLevel=1,this.textSize="",this.textColor="",this.textAlign="",this.spacing="",this.spacingTop="",this.textBold=!1,this.textCapitalize=!1,this.textEmphasis=!1,this.textNowrap=!1,this.textQuote=!1,this.textStrikethrough=!1,this.textNormal=!1,this.textDirection="",this.text="",this.cssClass="",this.innerId="",this.role="",this.aria={},this.data={}}createRenderRoot(){return this}connectedCallback(){if(!a.HpAuiHeading._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-aui-heading"),e.textContent=Ut,document.head.appendChild(e),a.HpAuiHeading._stylesInjected=!0}super.connectedCallback()}updated(){xe(this.querySelector("h1, h2, h3, h4, h5, h6"),this.aria,this.data)}_buildClasses(){const e=[];return this.textSize&&e.push(`a-size-${this.textSize}`),this.textColor&&e.push(`a-color-${this.textColor}`),this.textAlign&&e.push(`a-text-${this.textAlign}`),this.spacing&&e.push(`a-spacing-${this.spacing}`),this.spacingTop&&e.push(`a-spacing-top-${this.spacingTop}`),e.push(...re(this)),this.cssClass&&e.push(this.cssClass),e.join(" ")}render(){const e=this._buildClasses(),t=this.textDirection||c;switch(this.headingLevel){case 1:return h`<h1 class=${e||c} id=${this.innerId||c} role=${this.role||c} dir=${t}>${this.text}</h1>`;case 2:return h`<h2 class=${e||c} id=${this.innerId||c} role=${this.role||c} dir=${t}>${this.text}</h2>`;case 3:return h`<h3 class=${e||c} id=${this.innerId||c} role=${this.role||c} dir=${t}>${this.text}</h3>`;case 4:return h`<h4 class=${e||c} id=${this.innerId||c} role=${this.role||c} dir=${t}>${this.text}</h4>`;case 5:return h`<h5 class=${e||c} id=${this.innerId||c} role=${this.role||c} dir=${t}>${this.text}</h5>`;case 6:return h`<h6 class=${e||c} id=${this.innerId||c} role=${this.role||c} dir=${t}>${this.text}</h6>`;default:return h`<h1 class=${e||c} id=${this.innerId||c} role=${this.role||c} dir=${t}>${this.text}</h1>`}}},a.HpAuiHeading._stylesInjected=!1,_([l({type:Number})],a.HpAuiHeading.prototype,"headingLevel",2),_([l()],a.HpAuiHeading.prototype,"textSize",2),_([l()],a.HpAuiHeading.prototype,"textColor",2),_([l()],a.HpAuiHeading.prototype,"textAlign",2),_([l()],a.HpAuiHeading.prototype,"spacing",2),_([l()],a.HpAuiHeading.prototype,"spacingTop",2),_([l({type:Boolean})],a.HpAuiHeading.prototype,"textBold",2),_([l({type:Boolean})],a.HpAuiHeading.prototype,"textCapitalize",2),_([l({type:Boolean})],a.HpAuiHeading.prototype,"textEmphasis",2),_([l({type:Boolean})],a.HpAuiHeading.prototype,"textNowrap",2),_([l({type:Boolean})],a.HpAuiHeading.prototype,"textQuote",2),_([l({type:Boolean})],a.HpAuiHeading.prototype,"textStrikethrough",2),_([l({type:Boolean})],a.HpAuiHeading.prototype,"textNormal",2),_([l()],a.HpAuiHeading.prototype,"textDirection",2),_([l()],a.HpAuiHeading.prototype,"text",2),_([l()],a.HpAuiHeading.prototype,"cssClass",2),_([l({attribute:"inner-id"})],a.HpAuiHeading.prototype,"innerId",2),_([l()],a.HpAuiHeading.prototype,"role",2),_([l({type:Object})],a.HpAuiHeading.prototype,"aria",2),_([l({type:Object})],a.HpAuiHeading.prototype,"data",2),a.HpAuiHeading=_([m("hp-aui-heading")],a.HpAuiHeading);var Ft=Object.getOwnPropertyDescriptor,qt=(n,e,t,s)=>{for(var i=s>1?void 0:s?Ft(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=o(i)||i);return i};const Zt=`
  hp-aui-letter-space { display: inline; }
  hp-aui-letter-space .a-letter-space { padding-left: 4px; }
`;a.HpAuiLetterSpace=class extends b{createRenderRoot(){return this}connectedCallback(){if(!a.HpAuiLetterSpace._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-aui-letter-space"),e.textContent=Zt,document.head.appendChild(e),a.HpAuiLetterSpace._stylesInjected=!0}super.connectedCallback()}render(){return h`<span class="a-letter-space"></span>`}},a.HpAuiLetterSpace._stylesInjected=!1,a.HpAuiLetterSpace=qt([m("hp-aui-letter-space")],a.HpAuiLetterSpace);var Xt=Object.getOwnPropertyDescriptor,Yt=(n,e,t,s)=>{for(var i=s>1?void 0:s?Xt(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=o(i)||i);return i};a.HpAuiLineBreak=class extends b{createRenderRoot(){return this}render(){return h`<br />`}},a.HpAuiLineBreak=Yt([m("hp-aui-line-break")],a.HpAuiLineBreak);var Wt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,$=(n,e,t,s)=>{for(var i=s>1?void 0:s?Gt(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Wt(e,t,i),i};const Qt=`
  hp-aui-paragraph { display: block; }
`;a.HpAuiParagraph=class extends b{constructor(){super(...arguments),this.text="",this.textSize="",this.textColor="",this.textAlign="",this.spacing="",this.spacingTop="",this.textBold=!1,this.textCapitalize=!1,this.textEmphasis=!1,this.textNowrap=!1,this.textQuote=!1,this.textStrikethrough=!1,this.textNormal=!1,this.textDirection="",this.cssClass="",this.innerId="",this.role="",this.aria={},this.data={}}createRenderRoot(){return this}connectedCallback(){if(!a.HpAuiParagraph._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-aui-paragraph"),e.textContent=Qt,document.head.appendChild(e),a.HpAuiParagraph._stylesInjected=!0}super.connectedCallback()}updated(){xe(this.querySelector("p"),this.aria,this.data)}render(){const e=this._buildClasses();return h`<p class=${e||c} id=${this.innerId||c} role=${this.role||c} dir=${this.textDirection||c}>${this.text}</p>`}_buildClasses(){const e=[];return this.textSize&&e.push(`a-size-${this.textSize}`),this.textColor&&e.push(`a-color-${this.textColor}`),this.textAlign&&e.push(`a-text-${this.textAlign}`),this.spacing&&e.push(`a-spacing-${this.spacing}`),this.spacingTop&&e.push(`a-spacing-top-${this.spacingTop}`),e.push(...re(this)),this.cssClass&&e.push(this.cssClass),e.join(" ")}},a.HpAuiParagraph._stylesInjected=!1,$([l()],a.HpAuiParagraph.prototype,"text",2),$([l()],a.HpAuiParagraph.prototype,"textSize",2),$([l()],a.HpAuiParagraph.prototype,"textColor",2),$([l()],a.HpAuiParagraph.prototype,"textAlign",2),$([l()],a.HpAuiParagraph.prototype,"spacing",2),$([l()],a.HpAuiParagraph.prototype,"spacingTop",2),$([l({type:Boolean})],a.HpAuiParagraph.prototype,"textBold",2),$([l({type:Boolean})],a.HpAuiParagraph.prototype,"textCapitalize",2),$([l({type:Boolean})],a.HpAuiParagraph.prototype,"textEmphasis",2),$([l({type:Boolean})],a.HpAuiParagraph.prototype,"textNowrap",2),$([l({type:Boolean})],a.HpAuiParagraph.prototype,"textQuote",2),$([l({type:Boolean})],a.HpAuiParagraph.prototype,"textStrikethrough",2),$([l({type:Boolean})],a.HpAuiParagraph.prototype,"textNormal",2),$([l()],a.HpAuiParagraph.prototype,"textDirection",2),$([l()],a.HpAuiParagraph.prototype,"cssClass",2),$([l({attribute:"inner-id"})],a.HpAuiParagraph.prototype,"innerId",2),$([l()],a.HpAuiParagraph.prototype,"role",2),$([l({type:Object})],a.HpAuiParagraph.prototype,"aria",2),$([l({type:Object})],a.HpAuiParagraph.prototype,"data",2),a.HpAuiParagraph=$([m("hp-aui-paragraph")],a.HpAuiParagraph);var Kt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,H=(n,e,t,s)=>{for(var i=s>1?void 0:s?Jt(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Kt(e,t,i),i};const ei=`
  hp-aui-text { display: inline; }
`;a.HpAuiText=class extends b{constructor(){super(...arguments),this.text="",this.textSize="",this.textColor="",this.textPosition="",this.textBold=!1,this.textCapitalize=!1,this.textEmphasis=!1,this.textNowrap=!1,this.textQuote=!1,this.textStrikethrough=!1,this.textNormal=!1,this.textDirection="",this.cssClass="",this.innerId="",this.role="",this.aria={},this.data={}}createRenderRoot(){return this}connectedCallback(){if(!a.HpAuiText._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-aui-text"),e.textContent=ei,document.head.appendChild(e),a.HpAuiText._stylesInjected=!0}super.connectedCallback()}updated(){xe(this.querySelector("span"),this.aria,this.data)}render(){const e=this._buildClasses();return h`<span class=${e||c} id=${this.innerId||c} role=${this.role||c} dir=${this.textDirection||c}>${this.text}</span>`}_buildClasses(){const e=[];return this.textSize&&e.push(`a-size-${this.textSize}`),this.textColor&&e.push(`a-color-${this.textColor}`),this.textPosition&&e.push(`a-${this.textPosition}`),e.push(...re(this)),this.cssClass&&e.push(this.cssClass),e.join(" ")}},a.HpAuiText._stylesInjected=!1,H([l()],a.HpAuiText.prototype,"text",2),H([l()],a.HpAuiText.prototype,"textSize",2),H([l()],a.HpAuiText.prototype,"textColor",2),H([l()],a.HpAuiText.prototype,"textPosition",2),H([l({type:Boolean})],a.HpAuiText.prototype,"textBold",2),H([l({type:Boolean})],a.HpAuiText.prototype,"textCapitalize",2),H([l({type:Boolean})],a.HpAuiText.prototype,"textEmphasis",2),H([l({type:Boolean})],a.HpAuiText.prototype,"textNowrap",2),H([l({type:Boolean})],a.HpAuiText.prototype,"textQuote",2),H([l({type:Boolean})],a.HpAuiText.prototype,"textStrikethrough",2),H([l({type:Boolean})],a.HpAuiText.prototype,"textNormal",2),H([l()],a.HpAuiText.prototype,"textDirection",2),H([l()],a.HpAuiText.prototype,"cssClass",2),H([l({attribute:"inner-id"})],a.HpAuiText.prototype,"innerId",2),H([l()],a.HpAuiText.prototype,"role",2),H([l({type:Object})],a.HpAuiText.prototype,"aria",2),H([l({type:Object})],a.HpAuiText.prototype,"data",2),a.HpAuiText=H([m("hp-aui-text")],a.HpAuiText);function we(n){const e=window.P;e&&e.when("A","a-truncate").execute((t,s)=>{var i;(i=s.get(n))==null||i.update()})}var ti=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,C=(n,e,t,s)=>{for(var i=s>1?void 0:s?ii(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&ti(e,t,i),i};const si=`
  hp-aui-truncate { display: block; }
`;a.HpAuiTruncate=class extends b{constructor(){super(...arguments),this.text="",this.maxRows=5,this.overflowMarker="…",this.wordBreak="Normal",this.name="",this.manualUpdate=!1,this.specialCharacterList="",this.textSize="",this.textBold=!1,this.textCapitalize=!1,this.textEmphasis=!1,this.textNowrap=!1,this.textQuote=!1,this.textStrikethrough=!1,this.textNormal=!1,this.textDirection="",this.cssClass="",this.innerId=""}createRenderRoot(){return this}connectedCallback(){if(!a.HpAuiTruncate._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-aui-truncate"),e.textContent=si,document.head.appendChild(e),a.HpAuiTruncate._stylesInjected=!0}super.connectedCallback()}updated(e){super.updated(e);const t=this.querySelector(".a-truncate");t&&we(t)}render(){const e=this._buildClasses(),s=this.maxRows===0?0:this.maxRows*1.3;return h`
      <span class="a-truncate ${e}"
            id=${this.innerId||c}
            data-a-word-break=${this.wordBreak}
            data-a-max-rows=${this.maxRows}
            data-a-overflow-marker=${this.overflowMarker||c}
            data-a-truncate-name=${this.name||c}
            data-a-special-character-list=${this.specialCharacterList||c}
            data-a-manual-update=${this.manualUpdate?"true":c}
            style="line-height: 1.3em !important; max-height: ${s}em;"
            dir=${this.textDirection||c}>
        <span class="a-truncate-full">${this.text}</span>
        <span class="a-truncate-cut a-hidden" aria-hidden="true"></span>
      </span>
    `}_buildClasses(){const e=[];return this.textSize&&e.push(`a-size-${this.textSize}`),this.cssClass&&e.push(this.cssClass),e.push(...re(this)),e.join(" ")}},a.HpAuiTruncate._stylesInjected=!1,C([l()],a.HpAuiTruncate.prototype,"text",2),C([l({type:Number})],a.HpAuiTruncate.prototype,"maxRows",2),C([l()],a.HpAuiTruncate.prototype,"overflowMarker",2),C([l()],a.HpAuiTruncate.prototype,"wordBreak",2),C([l()],a.HpAuiTruncate.prototype,"name",2),C([l({type:Boolean})],a.HpAuiTruncate.prototype,"manualUpdate",2),C([l()],a.HpAuiTruncate.prototype,"specialCharacterList",2),C([l()],a.HpAuiTruncate.prototype,"textSize",2),C([l({type:Boolean})],a.HpAuiTruncate.prototype,"textBold",2),C([l({type:Boolean})],a.HpAuiTruncate.prototype,"textCapitalize",2),C([l({type:Boolean})],a.HpAuiTruncate.prototype,"textEmphasis",2),C([l({type:Boolean})],a.HpAuiTruncate.prototype,"textNowrap",2),C([l({type:Boolean})],a.HpAuiTruncate.prototype,"textQuote",2),C([l({type:Boolean})],a.HpAuiTruncate.prototype,"textStrikethrough",2),C([l({type:Boolean})],a.HpAuiTruncate.prototype,"textNormal",2),C([l()],a.HpAuiTruncate.prototype,"textDirection",2),C([l()],a.HpAuiTruncate.prototype,"cssClass",2),C([l({attribute:"inner-id"})],a.HpAuiTruncate.prototype,"innerId",2),a.HpAuiTruncate=C([m("hp-aui-truncate")],a.HpAuiTruncate);var ai=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,w=(n,e,t,s)=>{for(var i=s>1?void 0:s?ri(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&ai(e,t,i),i};const Ge={mini:"mini",small:"s",base:"b","base-plus":"base_plus",medium:"m","medium-plus":"medium_plus",large:"l","extra-large":"xl","extra-extra-large":"xxl"},ni=new Set(["mini","small","base"]),oi=`
  hp-aui-price {
    display: inline-block;
  }
`;a.HpAuiPrice=class extends b{constructor(){super(...arguments),this.currencySymbol="",this.currencySymbolPosition="left",this.wholeValue="",this.fractionalValue="",this.decimalSeparator="",this.priceSize="large",this.priceColor="",this.strikethrough=!1,this.altText="",this.cssClass="",this.innerId="",this.rtl=!1}createRenderRoot(){return this}connectedCallback(){if(!a.HpAuiPrice._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-aui-price"),e.textContent=oi,document.head.appendChild(e),a.HpAuiPrice._stylesInjected=!0}super.connectedCallback()}_buildOffscreenText(){if(this.altText)return this.altText;const e=this.currencySymbolPosition==="left"?this.currencySymbol:"",t=this.currencySymbolPosition==="right"?this.currencySymbol:"";return`${e}${this.wholeValue}${this.decimalSeparator}${this.fractionalValue}${t}`}_isCompact(){return ni.has(this.priceSize)}_renderCompact(){const e=Ge[this.priceSize],t=["a-price","a-text-price"];this.cssClass&&t.push(this.cssClass);const s=this.currencySymbolPosition==="left"?this.currencySymbol:"",i=this.currencySymbolPosition==="right"?this.currencySymbol:"",r=`${s}${this.wholeValue}${this.decimalSeparator}${this.fractionalValue}${i}`;return h`<span
      id=${this.innerId||c}
      class=${t.join(" ")}
      data-a-size=${e}
      data-a-strike=${this.strikethrough?"true":c}
      data-a-color=${this.priceColor||c}
    ><span class="a-offscreen">${this._buildOffscreenText()}</span><span aria-hidden="true">${r}</span></span>`}_renderStructured(){const e=Ge[this.priceSize],t=["a-price"];this.cssClass&&t.push(this.cssClass);const s=this.priceColor||"base",i=this.currencySymbolPosition==="left",r=this.currencySymbolPosition==="right",o=this.fractionalValue!=="";return this.rtl?h`<span
        id=${this.innerId||c}
        class=${t.join(" ")}
        data-a-size=${e}
        data-a-color=${s}
      ><span class="a-offscreen">${this._buildOffscreenText()}</span><span aria-hidden="true" dir="ltr">${i?h`‎<span class="a-price-symbol" dir="rtl">${this.currencySymbol}</span>‎`:c}<span class="a-price-whole">${this.wholeValue}${o?h`<span class="a-price-decimal">${this.decimalSeparator}</span>`:c}</span>${o?h`<span class="a-price-fraction">${this.fractionalValue}</span>`:c}${r?h`‎<span class="a-price-symbol" dir="rtl">${this.currencySymbol}</span>‎`:c}</span></span>`:h`<span
      id=${this.innerId||c}
      class=${t.join(" ")}
      data-a-size=${e}
      data-a-color=${s}
    ><span class="a-offscreen">${this._buildOffscreenText()}</span><span aria-hidden="true">${i?h`<span class="a-price-symbol">${this.currencySymbol}</span>`:c}<span class="a-price-whole">${this.wholeValue}${o?h`<span class="a-price-decimal">${this.decimalSeparator}</span>`:c}</span>${o?h`<span class="a-price-fraction">${this.fractionalValue}</span>`:c}${r?h`<span class="a-price-symbol">${this.currencySymbol}</span>`:c}</span></span>`}render(){return this._isCompact()?this._renderCompact():this._renderStructured()}},a.HpAuiPrice._stylesInjected=!1,w([l()],a.HpAuiPrice.prototype,"currencySymbol",2),w([l()],a.HpAuiPrice.prototype,"currencySymbolPosition",2),w([l()],a.HpAuiPrice.prototype,"wholeValue",2),w([l()],a.HpAuiPrice.prototype,"fractionalValue",2),w([l()],a.HpAuiPrice.prototype,"decimalSeparator",2),w([l()],a.HpAuiPrice.prototype,"priceSize",2),w([l()],a.HpAuiPrice.prototype,"priceColor",2),w([l({type:Boolean})],a.HpAuiPrice.prototype,"strikethrough",2),w([l()],a.HpAuiPrice.prototype,"altText",2),w([l()],a.HpAuiPrice.prototype,"cssClass",2),w([l({attribute:"inner-id"})],a.HpAuiPrice.prototype,"innerId",2),w([l({type:Boolean})],a.HpAuiPrice.prototype,"rtl",2),a.HpAuiPrice=w([m("hp-aui-price")],a.HpAuiPrice);var li=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,ne=(n,e,t,s)=>{for(var i=s>1?void 0:s?ci(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&li(e,t,i),i};const hi={medium:"m",large:"l","extra-large":"xl","extra-extra-large":"xxl"},pi=`
  hp-aui-price-dash {
    display: inline-block;
  }
`;a.HpAuiPriceDash=class extends b{constructor(){super(...arguments),this.cssClass="",this.innerId="",this.dashSize="large",this.priceColor=""}createRenderRoot(){return this}connectedCallback(){if(!a.HpAuiPriceDash._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-aui-price-dash"),e.textContent=pi,document.head.appendChild(e),a.HpAuiPriceDash._stylesInjected=!0}super.connectedCallback()}_buildClasses(){const e=["a-price-dash"];return this.cssClass&&e.push(this.cssClass),e.join(" ")}render(){const e=hi[this.dashSize];return h`<span
      id=${this.innerId||c}
      aria-hidden="true"
      class=${this._buildClasses()}
      data-a-size=${e}
      data-a-color=${this.priceColor||c}
    >&#45;</span>`}},a.HpAuiPriceDash._stylesInjected=!1,ne([l()],a.HpAuiPriceDash.prototype,"cssClass",2),ne([l({attribute:"inner-id"})],a.HpAuiPriceDash.prototype,"innerId",2),ne([l()],a.HpAuiPriceDash.prototype,"dashSize",2),ne([l()],a.HpAuiPriceDash.prototype,"priceColor",2),a.HpAuiPriceDash=ne([m("hp-aui-price-dash")],a.HpAuiPriceDash);var di=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,Se=(n,e,t,s)=>{for(var i=s>1?void 0:s?ui(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&di(e,t,i),i};const gi=`
  hp-aui-price-range {
    display: inline-block;
  }
`;a.HpAuiPriceRange=class extends b{constructor(){super(...arguments),this.cssClass="",this.innerId="",this._children=[]}createRenderRoot(){return this}connectedCallback(){if(!a.HpAuiPriceRange._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-aui-price-range"),e.textContent=gi,document.head.appendChild(e),a.HpAuiPriceRange._stylesInjected=!0}this._children=Array.from(this.childNodes),super.connectedCallback()}_buildClasses(){const e=["a-price-range"];return this.cssClass&&e.push(this.cssClass),e.join(" ")}render(){return h`<span
      id=${this.innerId||c}
      class=${this._buildClasses()}
    ></span>`}updated(){const e=this.querySelector("span.a-price-range");e&&this._children.length&&(this._children.forEach(t=>e.appendChild(t)),this._children=[])}},a.HpAuiPriceRange._stylesInjected=!1,Se([l()],a.HpAuiPriceRange.prototype,"cssClass",2),Se([l({attribute:"inner-id"})],a.HpAuiPriceRange.prototype,"innerId",2),a.HpAuiPriceRange=Se([m("hp-aui-price-range")],a.HpAuiPriceRange);var fi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,z=(n,e,t,s)=>{for(var i=s>1?void 0:s?bi(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&fi(e,t,i),i};const Qe={dpi15:65,dpi20:60},Pe=[{scale:1.5,pq:Qe.dpi15},{scale:2,pq:Qe.dpi20}],mi="https://m.media-amazon.com/",yi="homepage-web-components";a.AmazonImage=class extends b{constructor(){super(...arguments),this.media=null,this.alt="",this.width=0,this.height=0,this.scalingType="ScaleToFit",this.imgStyle="",this.loading="eager",this.weblabId=""}createRenderRoot(){return this}_buildUrl(e,t,s){const i=Math.round(this.width*e),r=Math.round(this.height*e);let o;switch(this.scalingType){case"CenterCropSquare":o=`_UC${i},${r}_CACC,${i},${r}`;break;case"ScaleToRectangle":o=`_SR${i},${r}`;break;default:o=`_SF${i},${r}`}const d=this.media.extension,p=d==="png";let u;s?u=`_FM${s}`:p?u="_FMpng":u="";const g=!s&&p?"":`_PQ${t}`,f=this.weblabId?`_AIweblab${this.weblabId}`:"";return`${mi}${this.media.route}/${this.media.mediaPath}._AC${f}${u}${o}${g}_.${d}?aicid=${yi}`}_buildSrcset(e){return Pe.map(t=>`${this._buildUrl(t.scale,t.pq,e)} ${t.scale}x`).join(", ")}render(){var r,o;if(!((r=this.media)!=null&&r.mediaPath)||!((o=this.media)!=null&&o.route)||!this.width||!this.height)return c;const e=this._buildUrl(Pe[0].scale,Pe[0].pq),t=this._buildSrcset(),s=this._buildSrcset("avif"),i=this.scalingType!=="ScaleToFit";return h`
      <picture>
        <source type="image/avif" srcset=${s} />
        <source type="image/jpeg" srcset=${t} />
        <img
          class="a-amazon-image"
          loading=${this.loading}
          width=${i?this.width:c}
          height=${i?this.height:c}
          src=${e}
          srcset=${t}
          alt=${this.alt}
          style=${this.imgStyle||c}
        />
      </picture>
    `}},z([l({type:Object})],a.AmazonImage.prototype,"media",2),z([l()],a.AmazonImage.prototype,"alt",2),z([l({type:Number})],a.AmazonImage.prototype,"width",2),z([l({type:Number})],a.AmazonImage.prototype,"height",2),z([l({attribute:"scaling-type"})],a.AmazonImage.prototype,"scalingType",2),z([l({attribute:"img-style"})],a.AmazonImage.prototype,"imgStyle",2),z([l()],a.AmazonImage.prototype,"loading",2),z([l({attribute:"weblab-id"})],a.AmazonImage.prototype,"weblabId",2),a.AmazonImage=z([m("amazon-image")],a.AmazonImage);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i={ATTRIBUTE:1},vi=n=>(...e)=>({_$litDirective$:n,values:e});class $i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke=vi(class extends $i{constructor(n){var e;if(super(n),n.type!==_i.ATTRIBUTE||n.name!=="class"||((e=n.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,[e]){var s,i;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((s=this.nt)!=null&&s.has(r))&&this.st.add(r);return this.render(e)}const t=n.element.classList;for(const r of this.st)r in e||(t.remove(r),this.st.delete(r));for(const r in e){const o=!!e[r];o===this.st.has(r)||(i=this.nt)!=null&&i.has(r)||(o?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return V}});var Ci=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,U=(n,e,t,s)=>{for(var i=s>1?void 0:s?Hi(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Ci(e,t,i),i};const Ai=`
  hp-asin-image {
    display: block;
    width: 100%;
    height: 100%;
    padding: 6px;
  }
  hp-asin-image .asin-image-inner {
    display: block;
    width: 100%;
    height: 100%;
  }
  hp-asin-image .asin-image-inner img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  hp-asin-image .asin-image-inner.shadow img {
    filter: drop-shadow(0px 1px 2px color-mix(in srgb, var(--shadow-base, #000) 25%, rgba(0, 0, 0, 0.45)))
      drop-shadow(
        7px 9px 5px
          color-mix(
            in srgb,
            var(--shadow-base, #000) 25%,
            rgba(0, 0, 0, 0.45)
          )
      );
  }
`;a.HpAsinImage=class extends b{constructor(){super(...arguments),this.src="",this.alt="",this.useShadow=!1,this.media=null,this.width=0,this.height=0}createRenderRoot(){return this}connectedCallback(){if(!a.HpAsinImage._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-asin-image"),e.textContent=Ai,document.head.appendChild(e),a.HpAsinImage._stylesInjected=!0}super.connectedCallback()}render(){var s;const e={"asin-image-inner":!0,shadow:this.useShadow},t=!this.alt;return(s=this.media)!=null&&s.mediaPath?h`<div class=${Ke(e)}>
        <amazon-image
          .media=${this.media}
          alt=${this.alt}
          width=${this.width}
          height=${this.height}
          img-style="width:100%;height:100%;object-fit:contain"
          role=${t?"presentation":c}
          weblab-id="1420460"
        ></amazon-image>
      </div>`:h`<div class=${Ke(e)}>
      <img
        src=${this.src}
        alt=${this.alt}
        role=${t?"presentation":c}
      />
    </div>`}},a.HpAsinImage._stylesInjected=!1,U([l()],a.HpAsinImage.prototype,"src",2),U([l()],a.HpAsinImage.prototype,"alt",2),U([l({type:Boolean})],a.HpAsinImage.prototype,"useShadow",2),U([l({type:Object})],a.HpAsinImage.prototype,"media",2),U([l({type:Number})],a.HpAsinImage.prototype,"width",2),U([l({type:Number})],a.HpAsinImage.prototype,"height",2),a.HpAsinImage=U([m("hp-asin-image")],a.HpAsinImage);var xi=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,me=(n,e,t,s)=>{for(var i=s>1?void 0:s?wi(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&xi(e,t,i),i};const Si=`
  hp-aspect {
    display: flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
    min-width: 0;
  }
  hp-aspect .hp-aspect__label {
    font-size: 16px;
    line-height: 20px;
    color: var(--rio-color-link-default, #2162a1);
    overflow: hidden;
    text-overflow: ellipsis;
  }
  hp-aspect .hp-aspect__count {
    font-size: 14px;
    line-height: 20px;
    color: var(--rio-color-font-secondary, #565959);
    flex-shrink: 0;
  }
  hp-aspect .hp-aspect__icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Je=h`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.223 13.3296L16.2459 6.24144L16.242 5.24204L15.2426 5.23818L8.15447 5.26109C7.88753 5.26195 7.63117 5.36883 7.44181 5.55819C7.25244 5.74756 7.14557 6.00392 7.1447 6.27086C7.14384 6.53781 7.24906 6.79348 7.43721 6.98163C7.62535 7.16977 7.88102 7.27499 8.14797 7.27413L12.8191 7.25194L4.93291 15.1381C4.74431 15.3267 4.63788 15.582 4.63702 15.8479C4.63616 16.1137 4.74095 16.3684 4.92833 16.5557C5.11571 16.7431 5.37034 16.8479 5.6362 16.8471C5.90205 16.8462 6.15736 16.7398 6.34596 16.5512L14.2321 8.66499L14.2099 13.3361C14.209 13.4684 14.2342 13.5995 14.2842 13.7217C14.3342 13.8439 14.408 13.9548 14.5012 14.0481C14.5945 14.1414 14.7054 14.2151 14.8276 14.2651C14.9498 14.3151 15.0809 14.3403 15.2132 14.3394C15.3455 14.3395 15.4768 14.3134 15.5993 14.2626C15.7218 14.2118 15.8332 14.1373 15.9271 14.0435C16.021 13.9496 16.0954 13.8382 16.1462 13.7157C16.197 13.5931 16.2231 13.4619 16.223 13.3296Z" fill="#067D62"/>
</svg>
`,Pi=h`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10 16L4 8H16L10 16Z" fill="#CC0C39"/></svg>`,ki=h`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M4 9H16V11H4V9Z" fill="#565959"/></svg>`;a.HpAspect=class extends b{constructor(){super(...arguments),this.label="",this.count="",this.sentiment="positive"}createRenderRoot(){return this}connectedCallback(){if(!a.HpAspect._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-aspect"),e.textContent=Si,document.head.appendChild(e),a.HpAspect._stylesInjected=!0}super.connectedCallback()}_getIcon(){switch(this.sentiment){case"positive":return Je;case"negative":return Pi;case"neutral":return ki;default:return Je}}render(){return h`<span class="hp-aspect__icon" aria-hidden="true">${this._getIcon()}</span><span class="hp-aspect__label">${this.label}</span>${this.count?h`<span class="hp-aspect__count">(${this.count})</span>`:c}`}},a.HpAspect._stylesInjected=!1,me([l()],a.HpAspect.prototype,"label",2),me([l()],a.HpAspect.prototype,"count",2),me([l()],a.HpAspect.prototype,"sentiment",2),a.HpAspect=me([m("hp-aspect")],a.HpAspect);const k={fromAttribute:n=>n?JSON.parse(n):null,toAttribute:n=>n?JSON.stringify(n):null};var Ei=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,ke=(n,e,t,s)=>{for(var i=s>1?void 0:s?Ii(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Ei(e,t,i),i};const zi=`
  hp-aspect-container {
    display: block;
    width: 100%;
  }
  hp-aspect-container .hp-aspect-container__grid {
    display: grid;
    gap: 4px;
  }
  hp-aspect-container .hp-aspect-container__grid--single {
    grid-template-columns: 1fr;
  }
  hp-aspect-container .hp-aspect-container__grid--multi {
    grid-template-columns: 1fr auto 1fr;
  }
  hp-aspect-container .hp-aspect-container__divider {
    width: 1px;
    height: 20px;
    background-color: var(--rio-color-font-secondary, #565959);
    opacity: 0.3;
    align-self: center;
  }
`;a.HpAspectContainer=class extends b{constructor(){super(...arguments),this.aspects=[],this.columns="auto"}createRenderRoot(){return this}connectedCallback(){if(!a.HpAspectContainer._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-aspect-container"),e.textContent=zi,document.head.appendChild(e),a.HpAspectContainer._stylesInjected=!0}super.connectedCallback()}_renderAspect(e,t){return h`<hp-aspect
      label=${e.label}
      count=${t?"":e.count}
      sentiment=${e.sentiment}
    ></hp-aspect>`}render(){if(!this.aspects||this.aspects.length===0)return c;const e=this.columns==="2"||this.columns==="auto"&&this.aspects.length>1,t=e;if(!e)return h`
        <div class="hp-aspect-container__grid hp-aspect-container__grid--single">
          ${this.aspects.map(i=>this._renderAspect(i,t))}
        </div>
      `;const s=[];for(let i=0;i<this.aspects.length;i+=2){const r=this.aspects[i],o=this.aspects[i+1];s.push(this._renderAspect(r,t)),o&&(s.push(h`<div class="hp-aspect-container__divider"></div>`),s.push(this._renderAspect(o,t)))}return h`
      <div class="hp-aspect-container__grid hp-aspect-container__grid--multi">
        ${s}
      </div>
    `}},a.HpAspectContainer._stylesInjected=!1,ke([l({converter:k})],a.HpAspectContainer.prototype,"aspects",2),ke([l()],a.HpAspectContainer.prototype,"columns",2),a.HpAspectContainer=ke([m("hp-aspect-container")],a.HpAspectContainer);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=n=>n!=null?n:c;var Ti=Object.defineProperty,Oi=Object.getOwnPropertyDescriptor,F=(n,e,t,s)=>{for(var i=s>1?void 0:s?Oi(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Ti(e,t,i),i};const Li=`
  hp-background-image {
    display: block;
    position: absolute;
    inset: 0;

    overflow: hidden;
  }
  hp-background-image img,
  hp-background-image amazon-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;a.HpBackgroundImage=class extends b{constructor(){super(...arguments),this.src="",this.media=null,this.alt="",this.width=0,this.height=0,this.loading="eager"}createRenderRoot(){return this}connectedCallback(){if(!a.HpBackgroundImage._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-background-image"),e.textContent=Li,document.head.appendChild(e),a.HpBackgroundImage._stylesInjected=!0}super.connectedCallback()}render(){var e;if((e=this.media)!=null&&e.mediaPath&&this.width>0&&this.height>0)return h`
        <amazon-image
          .media=${this.media}
          alt=${this.alt}
          width=${this.width}
          height=${this.height}
          loading=${this.loading}
          img-style="width:100%;height:100%;object-fit:cover"
          role=${et(this.alt?void 0:"presentation")}
          weblab-id="1420460"
        ></amazon-image>
      `;if(this.src){const t=!this.alt;return h`
        <img
          class="bg-image"
          src=${this.src}
          alt=${this.alt}
          loading=${this.loading}
          role=${et(t?"presentation":void 0)}
        />
      `}return c}},a.HpBackgroundImage._stylesInjected=!1,F([l()],a.HpBackgroundImage.prototype,"src",2),F([l({type:Object})],a.HpBackgroundImage.prototype,"media",2),F([l()],a.HpBackgroundImage.prototype,"alt",2),F([l({type:Number})],a.HpBackgroundImage.prototype,"width",2),F([l({type:Number})],a.HpBackgroundImage.prototype,"height",2),F([l()],a.HpBackgroundImage.prototype,"loading",2),a.HpBackgroundImage=F([m("hp-background-image")],a.HpBackgroundImage);var Bi=Object.defineProperty,ji=Object.getOwnPropertyDescriptor,E=(n,e,t,s)=>{for(var i=s>1?void 0:s?ji(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Bi(e,t,i),i};a.HpLucidWrapper=class extends b{constructor(){super(...arguments),this.csaType="",this.itemId="",this.role=null}createRenderRoot(){return this}willUpdate(e){this.cssClass&&this.classList.add(...this.cssClass.split(/\s+/).filter(Boolean)),super.willUpdate(e)}render(){return h``}},E([l({attribute:"data-csa-c-type",reflect:!0})],a.HpLucidWrapper.prototype,"csaType",2),E([l({attribute:"data-csa-c-item-id",reflect:!0})],a.HpLucidWrapper.prototype,"itemId",2),E([l({attribute:"data-csa-c-pos",reflect:!0})],a.HpLucidWrapper.prototype,"pos",2),E([l({attribute:"data-csa-c-posx",reflect:!0})],a.HpLucidWrapper.prototype,"posx",2),E([l({attribute:"data-csa-c-posy",reflect:!0})],a.HpLucidWrapper.prototype,"posy",2),E([l({attribute:"data-csa-c-owner",reflect:!0})],a.HpLucidWrapper.prototype,"owner",2),E([l({attribute:"data-csa-c-item-type",reflect:!0})],a.HpLucidWrapper.prototype,"itemType",2),E([l({attribute:"data-csa-c-parent-element-id",reflect:!0})],a.HpLucidWrapper.prototype,"parentId",2),E([l({reflect:!0})],a.HpLucidWrapper.prototype,"role",2),E([l({attribute:"css-class"})],a.HpLucidWrapper.prototype,"cssClass",2),a.HpLucidWrapper=E([m("hp-lucid-wrapper")],a.HpLucidWrapper);var Ri=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,S=(n,e,t,s)=>{for(var i=s>1?void 0:s?Vi(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Ri(e,t,i),i};const Di=`
  hp-block-x-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
    justify-content: center;
    padding: 4px;
    width: 100%;
    height: 100%;
    background-color: white;
  }
  hp-block-x-text[full-bleed] {
    padding: 0;
  }
  hp-block-x-text .hp-block-x-text__link {
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }
  hp-block-x-text .hp-block-x-text__title {
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: var(--rio-color-font-primary, #0f1111);
    word-break: break-word;
    width: 100%;
  }
  hp-block-x-text .hp-block-x-text__body {
    font-size: 14px;
    line-height: 18px;
    color: var(--rio-color-font-primary, #0f1111);
    word-break: break-word;
    width: 100%;
  }
`;a.HpBlockXText=class extends b{constructor(){super(...arguments),this.disclosureSize="small",this.heading="",this.body="",this.maxLines=3,this.aspects=[],this.aspectsColumns="auto",this.price=null,this.disclosure="",this.url="",this.lucidItemId="",this.posY="",this.fullBleed=!1}createRenderRoot(){return this}connectedCallback(){if(!a.HpBlockXText._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-block-x-text"),e.textContent=Di,document.head.appendChild(e),a.HpBlockXText._stylesInjected=!0}super.connectedCallback()}_renderTitle(){return this.heading?h`<div class="hp-block-x-text__title">${this.heading}</div>`:c}_renderBody(){const e=`-webkit-line-clamp:${this.maxLines};display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden`,t=this.body;return h`<div class="hp-block-x-text__body" style=${e}>${t}</div>`}_renderAspects(){return!this.aspects||this.aspects.length===0?c:h`<hp-aspect-container .aspects=${this.aspects} columns=${this.aspectsColumns}></hp-aspect-container>`}_renderPrice(){var e,t,s,i,r;return this.price?h`<hp-aui-price
      currencySymbol=${(e=this.price.currencySymbol)!=null?e:""}
      currencySymbolPosition=${(t=this.price.currencySymbolPosition)!=null?t:"left"}
      wholeValue=${this.price.wholeValue}
      fractionalValue=${(s=this.price.fractionalValue)!=null?s:""}
      decimalSeparator=${(i=this.price.decimalSeparator)!=null?i:""}
      priceSize=${(r=this.price.priceSize)!=null?r:"large"}
    ></hp-aui-price>`:c}_renderFooter(){return this.disclosure?h`<hp-aui-text text=${this.disclosure} textSize=${this.disclosureSize} textColor="secondary"></hp-aui-text>`:c}render(){if(!this.body)return c;const e=h`
      ${this._renderTitle()}
      ${this._renderPrice()}
      ${this._renderBody()}
      ${this._renderAspects()}
      ${this._renderFooter()}
    `;return this.url?h`
        <hp-lucid-wrapper
          data-csa-c-type="item"
          data-csa-c-item-type="link"
          data-csa-c-item-id=${this.lucidItemId}
          data-csa-c-posy=${this.posY}
        >
          <a class="hp-block-x-text__link a-link-normal" href=${this.url}>${e}</a>
        </hp-lucid-wrapper>
      `:e}},a.HpBlockXText._stylesInjected=!1,S([l({attribute:"disclosure-size"})],a.HpBlockXText.prototype,"disclosureSize",2),S([l()],a.HpBlockXText.prototype,"heading",2),S([l()],a.HpBlockXText.prototype,"body",2),S([l({type:Number,attribute:"max-lines"})],a.HpBlockXText.prototype,"maxLines",2),S([l({converter:k})],a.HpBlockXText.prototype,"aspects",2),S([l({attribute:"aspects-columns"})],a.HpBlockXText.prototype,"aspectsColumns",2),S([l({converter:k})],a.HpBlockXText.prototype,"price",2),S([l()],a.HpBlockXText.prototype,"disclosure",2),S([l()],a.HpBlockXText.prototype,"url",2),S([l({attribute:"lucid-item-id"})],a.HpBlockXText.prototype,"lucidItemId",2),S([l({attribute:"pos-y"})],a.HpBlockXText.prototype,"posY",2),S([l({type:Boolean,attribute:"full-bleed",reflect:!0})],a.HpBlockXText.prototype,"fullBleed",2),a.HpBlockXText=S([m("hp-block-x-text")],a.HpBlockXText);var Ni=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,oe=(n,e,t,s)=>{for(var i=s>1?void 0:s?Mi(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Ni(e,t,i),i};const Ui=`
  hp-header {
    display: block;
  }
  hp-header .header {
    padding: 8px 12px;
  }
  hp-header .title {
    font-size: 16px;
    font-weight: bold;
    color: #0f1111;
    margin: 0;
  }
  hp-header .subtitle {
    font-size: 13px;
    color: #565959;
    margin: 4px 0 0;
  }
  hp-header .action-link {
    font-size: 13px;
    color: #007185;
    text-decoration: none;
    margin-top: 4px;
    display: inline-block;
  }
`;a.HpHeader=class extends b{constructor(){super(...arguments),this.title="",this.subtitle="",this.actionText="",this.actionUrl=""}createRenderRoot(){return this}connectedCallback(){if(!a.HpHeader._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-header"),e.textContent=Ui,document.head.appendChild(e),a.HpHeader._stylesInjected=!0}super.connectedCallback()}render(){return h`
      <div class="header">
        <h2 class="title">${this.title}</h2>
        ${this.subtitle?h`<p class="subtitle">${this.subtitle}</p>`:c}
        ${this.actionText&&this.actionUrl?h`<a class="action-link" href=${this.actionUrl}>${this.actionText}</a>`:c}
      </div>
    `}},a.HpHeader._stylesInjected=!1,oe([l()],a.HpHeader.prototype,"title",2),oe([l()],a.HpHeader.prototype,"subtitle",2),oe([l()],a.HpHeader.prototype,"actionText",2),oe([l()],a.HpHeader.prototype,"actionUrl",2),a.HpHeader=oe([m("hp-header")],a.HpHeader);var Fi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,Ee=(n,e,t,s)=>{for(var i=s>1?void 0:s?qi(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Fi(e,t,i),i};const Zi=`
  hp-highlight {
    display: inline-block;
  }
  hp-highlight .highlight {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background: rgba(16, 16, 16, 0.53);
    box-shadow: 0px 2px 5px rgba(15, 17, 17, 0.14902);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  hp-highlight .highlight::after {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
  }
  hp-highlight a.highlight {
    text-decoration: none;
  }
`;a.HpHighlight=class extends b{constructor(){super(...arguments),this.url="",this.label=""}createRenderRoot(){return this}connectedCallback(){if(!a.HpHighlight._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-highlight"),e.textContent=Zi,document.head.appendChild(e),a.HpHighlight._stylesInjected=!0}super.connectedCallback()}render(){return this.url?h`<a class="highlight" href=${this.url} aria-label=${this.label}></a>`:h`<span class="highlight"></span>`}},a.HpHighlight._stylesInjected=!1,Ee([l()],a.HpHighlight.prototype,"url",2),Ee([l()],a.HpHighlight.prototype,"label",2),a.HpHighlight=Ee([m("hp-highlight")],a.HpHighlight);var Xi=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,q=(n,e,t,s)=>{for(var i=s>1?void 0:s?Yi(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Xi(e,t,i),i};const Wi=h`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="15" fill="#0F1111" fill-opacity="0.6"/><path d="M22.5 13.654L9.5 6.13398C9.34842 6.04647 9.17653 6.00027 9.0015 6C8.82647 5.99974 8.65444 6.04541 8.5026 6.13247C8.35076 6.21953 8.22442 6.34491 8.13622 6.49609C8.04803 6.64728 8.00105 6.81896 8 6.99398V22.054C8.00105 22.229 8.04803 22.4007 8.13622 22.5519C8.22442 22.7031 8.35076 22.8284 8.5026 22.9155C8.65444 23.0026 8.82647 23.0482 9.0015 23.048C9.17653 23.0477 9.34842 23.0015 9.5 22.914L22.5 15.394C22.6539 15.3068 22.7819 15.1803 22.871 15.0274C22.96 14.8746 23.0069 14.7009 23.0069 14.524C23.0069 14.3471 22.96 14.1734 22.871 14.0205C22.7819 13.8677 22.6539 13.7412 22.5 13.654Z" fill="white"/></svg>`,Gi=h`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="15" fill="#0F1111" fill-opacity="0.6"/><path d="M12 7H10C9.44772 7 9 7.44772 9 8V22C9 22.5523 9.44772 23 10 23H12C12.5523 23 13 22.5523 13 22V8C13 7.44772 12.5523 7 12 7Z" fill="white"/><path d="M20 7H18C17.4477 7 17 7.44772 17 8V22C17 22.5523 17.4477 23 18 23H20C20.5523 23 21 22.5523 21 22V8C21 7.44772 20.5523 7 20 7Z" fill="white"/></svg>`,Qi=h`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="15" fill="#0F1111" fill-opacity="0.6"/><path d="M13 8.66998C12.7651 8.67233 12.5385 8.75729 12.36 8.90998L8.75 12H7C6.73478 12 6.48043 12.1053 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13V17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18H8.75L12.35 21.08C12.5271 21.2363 12.7538 21.3249 12.99 21.33C13.2552 21.33 13.5096 21.2246 13.6971 21.0371C13.8846 20.8496 13.99 20.5952 13.99 20.33V9.66998C13.99 9.40649 13.886 9.15364 13.7007 8.96639C13.5153 8.77914 13.2635 8.67262 13 8.66998ZM12 18.15L10.05 16.48L9.49 16H8V14H9.49L10.05 13.52L12 11.85V18.15Z" fill="white"/><path d="M17.0996 8.19C16.8344 8.19 16.58 8.29536 16.3925 8.4829C16.205 8.67043 16.0996 8.92479 16.0996 9.19C16.0996 9.45522 16.205 9.70957 16.3925 9.89711C16.58 10.0846 16.8344 10.19 17.0996 10.19C18.3753 10.19 19.5987 10.6968 20.5008 11.5988C21.4028 12.5009 21.9096 13.7243 21.9096 15C21.9096 16.2757 21.4028 17.4991 20.5008 18.4012C19.5987 19.3032 18.3753 19.81 17.0996 19.81C16.8344 19.81 16.58 19.9154 16.3925 20.1029C16.205 20.2904 16.0996 20.5448 16.0996 20.81C16.0996 21.0752 16.205 21.3296 16.3925 21.5171C16.58 21.7046 16.8344 21.81 17.0996 21.81C18.9057 21.81 20.6379 21.0925 21.915 19.8154C23.1921 18.5383 23.9096 16.8061 23.9096 15C23.9096 13.1939 23.1921 11.4617 21.915 10.1846C20.6379 8.90748 18.9057 8.19 17.0996 8.19Z" fill="white"/><path d="M17.0596 16.49C16.7944 16.49 16.54 16.5953 16.3525 16.7829C16.1649 16.9704 16.0596 17.2248 16.0596 17.49C16.0596 17.7552 16.1649 18.0096 16.3525 18.1971C16.54 18.3846 16.7944 18.49 17.0596 18.49C17.9878 18.49 18.8781 18.1212 19.5344 17.4649C20.1908 16.8085 20.5596 15.9182 20.5596 14.99C20.5596 14.0617 20.1908 13.1715 19.5344 12.5151C18.8781 11.8587 17.9878 11.49 17.0596 11.49C16.7944 11.49 16.54 11.5953 16.3525 11.7829C16.1649 11.9704 16.0596 12.2248 16.0596 12.49C16.0596 12.7552 16.1649 13.0096 16.3525 13.1971C16.54 13.3846 16.7944 13.49 17.0596 13.49C17.4574 13.49 17.8389 13.648 18.1202 13.9293C18.4015 14.2106 18.5596 14.5922 18.5596 14.99C18.5596 15.3878 18.4015 15.7693 18.1202 16.0507C17.8389 16.332 17.4574 16.49 17.0596 16.49Z" fill="white"/></svg>`,Ki=h`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="15" fill="#0F1111" fill-opacity="0.6"/><path d="M13 8.66998C12.7651 8.67233 12.5385 8.75729 12.36 8.90998L8.75 12H7C6.73478 12 6.48043 12.1053 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13V17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18H8.75L12.35 21.08C12.5271 21.2363 12.7538 21.3249 12.99 21.33C13.2552 21.33 13.5096 21.2246 13.6971 21.0371C13.8846 20.8496 13.99 20.5952 13.99 20.33V9.66998C13.99 9.40649 13.886 9.15364 13.7007 8.96639C13.5153 8.77914 13.2635 8.67262 13 8.66998ZM12 18.15L10.05 16.48L9.49 16H8V14H9.49L10.05 13.52L12 11.85V18.15Z" fill="white"/><path d="M21.4099 15L23.7099 12.71C23.8982 12.5217 24.004 12.2663 24.004 12C24.004 11.7337 23.8982 11.4783 23.7099 11.29C23.5216 11.1017 23.2662 10.9959 22.9999 10.9959C22.7336 10.9959 22.4782 11.1017 22.2899 11.29L19.9999 13.59L17.7099 11.29C17.5216 11.1017 17.2662 10.9959 16.9999 10.9959C16.7336 10.9959 16.4782 11.1017 16.2899 11.29C16.1016 11.4783 15.9958 11.7337 15.9958 12C15.9958 12.2663 16.1016 12.5217 16.2899 12.71L18.5899 15L16.2899 17.29C16.1962 17.383 16.1218 17.4936 16.071 17.6154C16.0203 17.7373 15.9941 17.868 15.9941 18C15.9941 18.132 16.0203 18.2627 16.071 18.3846C16.1218 18.5064 16.1962 18.617 16.2899 18.71C16.3829 18.8037 16.4935 18.8781 16.6154 18.9289C16.7372 18.9797 16.8679 19.0058 16.9999 19.0058C17.132 19.0058 17.2627 18.9797 17.3845 18.9289C17.5064 18.8781 17.617 18.8037 17.7099 18.71L19.9999 16.41L22.2899 18.71C22.3829 18.8037 22.4935 18.8781 22.6154 18.9289C22.7372 18.9797 22.8679 19.0058 22.9999 19.0058C23.132 19.0058 23.2627 18.9797 23.3845 18.9289C23.5064 18.8781 23.617 18.8037 23.7099 18.71C23.8037 18.617 23.8781 18.5064 23.9288 18.3846C23.9796 18.2627 24.0057 18.132 24.0057 18C24.0057 17.868 23.9796 17.7373 23.9288 17.6154C23.8781 17.4936 23.8037 17.383 23.7099 17.29L21.4099 15Z" fill="white"/></svg>`,Ji=h`<svg width="30" height="30" viewBox="7 7 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.6" cx="22" cy="22" r="15" fill="#0F1111"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31 14H13C12.4696 14 11.9609 14.2107 11.5858 14.5858C11.2107 14.9609 11 15.4696 11 16V28C11 28.5304 11.2107 29.0391 11.5858 29.4142C11.9609 29.7893 12.4696 30 13 30H31C31.5304 30 32.0391 29.7893 32.4142 29.4142C32.7893 29.0391 33 28.5304 33 28V16C33 15.4696 32.7893 14.9609 32.4142 14.5858C32.0391 14.2107 31.5304 14 31 14ZM21 20V20.49C21 20.6226 20.9473 20.7498 20.8536 20.8436C20.7598 20.9373 20.6326 20.99 20.5 20.99H19.5C19.3682 20.9874 19.2425 20.9339 19.1493 20.8407C19.0561 20.7475 19.0026 20.6218 19 20.49V20H17V24H19V23.5C19 23.3674 19.0527 23.2402 19.1464 23.1464C19.2402 23.0527 19.3674 23 19.5 23H20.5C20.6318 23.0026 20.7575 23.0561 20.8507 23.1493C20.9439 23.2425 20.9974 23.3682 21 23.5V24C21 24.5304 20.7893 25.0391 20.4142 25.4142C20.0391 25.7893 19.5304 26 19 26H17C16.4696 26 15.9609 25.7893 15.5858 25.4142C15.2107 25.0391 15 24.5304 15 24V20C15 19.4696 15.2107 18.9609 15.5858 18.5858C15.9609 18.2107 16.4696 18 17 18H19C19.5304 18 20.0391 18.2107 20.4142 18.5858C20.7893 18.9609 21 19.4696 21 20ZM29 20V20.49C29 20.6226 28.9473 20.7498 28.8536 20.8436C28.7598 20.9373 28.6326 20.99 28.5 20.99H27.5C27.3682 20.9874 27.2425 20.9339 27.1493 20.8407C27.0561 20.7475 27.0026 20.6218 27 20.49V20H25V24H27V23.5C27 23.3674 27.0527 23.2402 27.1464 23.1464C27.2402 23.0527 27.3674 23 27.5 23H28.5C28.6318 23.0026 28.7575 23.0561 28.8507 23.1493C28.9439 23.2425 28.9974 23.3682 29 23.5V24C29 24.5304 28.7893 25.0391 28.4142 25.4142C28.0391 25.7893 27.5304 26 27 26H25C24.4696 26 23.9609 25.7893 23.5858 25.4142C23.2107 25.0391 23 24.5304 23 24V20C23 19.4696 23.2107 18.9609 23.5858 18.5858C23.9609 18.2107 24.4696 18 25 18H27C27.5304 18 28.0391 18.2107 28.4142 18.5858C28.7893 18.9609 29 19.4696 29 20Z" fill="#3DB7CC"/></svg>`,es=h`<svg width="30" height="30" viewBox="7 7 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.6" cx="22" cy="22" r="15" fill="#0F1111"/><path d="M31 16V28H13V16H31ZM31 14H13C12.4696 14 11.9609 14.2107 11.5858 14.5858C11.2107 14.9609 11 15.4696 11 16V28C11 28.5304 11.2107 29.0391 11.5858 29.4142C11.9609 29.7893 12.4696 30 13 30H31C31.5304 30 32.0391 29.7893 32.4142 29.4142C32.7893 29.0391 33 28.5304 33 28V16C33 15.4696 32.7893 14.9609 32.4142 14.5858C32.0391 14.2107 31.5304 14 31 14Z" fill="white"/><path d="M19 18H17C16.4696 18 15.9609 18.2107 15.5858 18.5858C15.2107 18.9609 15 19.4696 15 20V24C15 24.5304 15.2107 25.0391 15.5858 25.4142C15.9609 25.7893 16.4696 26 17 26H19C19.5304 26 20.0391 25.7893 20.4142 25.4142C20.7893 25.0391 21 24.5304 21 24V23.5C20.9974 23.3682 20.9439 23.2425 20.8507 23.1493C20.7575 23.0561 20.6318 23.0026 20.5 23H19.5C19.3674 23 19.2402 23.0527 19.1464 23.1464C19.0527 23.2402 19 23.3674 19 23.5V24H17V20H19V20.5C19.0026 20.6318 19.0561 20.7575 19.1493 20.8507C19.2425 20.9439 19.3682 20.9974 19.5 21H20.5C20.6326 21 20.7598 20.9473 20.8536 20.8536C20.9473 20.7598 21 20.6326 21 20.5V20C21 19.4696 20.7893 18.9609 20.4142 18.5858C20.0391 18.2107 19.5304 18 19 18Z" fill="white"/><path d="M27 18H25C24.4696 18 23.9609 18.2107 23.5858 18.5858C23.2107 18.9609 23 19.4696 23 20V24C23 24.5304 23.2107 25.0391 23.5858 25.4142C23.9609 25.7893 24.4696 26 25 26H27C27.5304 26 28.0391 25.7893 28.4142 25.4142C28.7893 25.0391 29 24.5304 29 24V23.5C28.9974 23.3682 28.9439 23.2425 28.8507 23.1493C28.7575 23.0561 28.6318 23.0026 28.5 23H27.5C27.3674 23 27.2402 23.0527 27.1464 23.1464C27.0527 23.2402 27 23.3674 27 23.5V24H25V20H27V20.5C27.0026 20.6318 27.0561 20.7575 27.1493 20.8507C27.2425 20.9439 27.3682 20.9974 27.5 21H28.5C28.6326 21 28.7598 20.9473 28.8536 20.8536C28.9473 20.7598 29 20.6326 29 20.5V20C29 19.4696 28.7893 18.9609 28.4142 18.5858C28.0391 18.2107 27.5304 18 27 18Z" fill="white"/></svg>`,ts=`
  hp-video-controls {
    display: flex;
    gap: 8px;
    align-items: flex-end;
    height: 100%;
    padding: 0px;
  }
  hp-video-controls .control-btn {
    width: 30px;
    height: 30px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
  }
`;a.HpVideoControls=class extends b{constructor(){super(...arguments),this.videoId="",this.showCaptions=!1,this.showMute=!1,this._playing=!1,this._muted=!0,this._captionsOn=!1,this._videoEl=null,this._onPlay=()=>{this._playing=!0},this._onPause=()=>{this._playing=!1},this._onEnded=()=>{this._playing=!1},this._onVideoReadyHandler=e=>{const t=e.detail;(t==null?void 0:t.videoId)===this.videoId&&this._bindVideo()}}createRenderRoot(){return this}connectedCallback(){if(!a.HpVideoControls._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-video-controls"),e.textContent=ts,document.head.appendChild(e),a.HpVideoControls._stylesInjected=!0}super.connectedCallback(),document.addEventListener("video-ready",this._onVideoReadyHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("video-ready",this._onVideoReadyHandler),this._unbindVideo()}updated(e){e.has("videoId")&&this.videoId&&this._bindVideo()}_unbindVideo(){this._videoEl&&(this._videoEl.removeEventListener("play",this._onPlay),this._videoEl.removeEventListener("pause",this._onPause),this._videoEl.removeEventListener("ended",this._onEnded),this._videoEl=null)}_bindVideo(){const e=document.getElementById(this.videoId);!e||e===this._videoEl||(this._unbindVideo(),this._videoEl=e,this._muted=e.muted,this._playing=!e.paused,e.addEventListener("play",this._onPlay),e.addEventListener("pause",this._onPause),e.addEventListener("ended",this._onEnded))}_togglePlayPause(e){e.preventDefault(),e.stopPropagation(),this._videoEl||this._bindVideo(),this._videoEl&&(this._videoEl.paused?this._videoEl.play():this._videoEl.pause())}_toggleMute(e){e.preventDefault(),e.stopPropagation(),this._videoEl||this._bindVideo(),this._videoEl&&(this._muted=!this._muted,this._videoEl.muted=this._muted)}_toggleCaptions(e){e.preventDefault(),e.stopPropagation(),this._captionsOn=!this._captionsOn,this.dispatchEvent(new CustomEvent("captions-toggle",{detail:{on:this._captionsOn},bubbles:!0}))}render(){return h`
      <button
        class="control-btn"
        aria-label=${this._playing?"Pause":"Play"}
        @click=${this._togglePlayPause}
      >
        ${this._playing?Gi:Wi}
      </button>
      ${this.showMute?h`<button
            class="control-btn"
            aria-label=${this._muted?"Unmute":"Mute"}
            @click=${this._toggleMute}
          >
            ${this._muted?Ki:Qi}
          </button>`:c}
      ${this.showCaptions?h`<button
            class="control-btn"
            aria-label=${this._captionsOn?"Hide captions":"Show captions"}
            @click=${this._toggleCaptions}
          >
            ${this._captionsOn?Ji:es}
          </button>`:c}
    `}},a.HpVideoControls._stylesInjected=!1,q([l({attribute:"video-id"})],a.HpVideoControls.prototype,"videoId",2),q([l({type:Boolean,attribute:"show-captions"})],a.HpVideoControls.prototype,"showCaptions",2),q([l({type:Boolean,attribute:"show-mute"})],a.HpVideoControls.prototype,"showMute",2),q([M()],a.HpVideoControls.prototype,"_playing",2),q([M()],a.HpVideoControls.prototype,"_muted",2),q([M()],a.HpVideoControls.prototype,"_captionsOn",2),a.HpVideoControls=q([m("hp-video-controls")],a.HpVideoControls);var is=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,x=(n,e,t,s)=>{for(var i=s>1?void 0:s?ss(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&is(e,t,i),i};const as=`
  hp-lazy-video {
    display: block;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
  hp-lazy-video[variant="fullbleed"] {
    position: absolute;
    inset: 0;
  }
  hp-lazy-video .video-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  hp-lazy-video .poster {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  hp-lazy-video .poster[hidden] {
    display: none;
  }
  hp-lazy-video video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  hp-lazy-video .cta-link {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }
  hp-lazy-video .controls-overlay {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 12px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  hp-lazy-video .captions-text {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 14px;
    line-height: 1.3;
    padding: 4px 8px;
    border-radius: 4px;
    max-width: 280px;
    align-self: center;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  hp-lazy-video video::cue {
    visibility: hidden;
  }
`;a.HpLazyVideo=class extends b{constructor(){super(...arguments),this.src="",this.poster="",this.href="",this.alt="",this.captions="",this.videoId="",this.variant="contained",this.showMute=!0,this.showCaptions=!1,this._videoLoaded=!1,this._playing=!1,this._captionText="",this._captionsOn=!1,this._observer=null,this._videoEl=null}createRenderRoot(){return this}connectedCallback(){if(!a.HpLazyVideo._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-lazy-video"),e.textContent=as,document.head.appendChild(e),a.HpLazyVideo._stylesInjected=!0}super.connectedCallback(),this._setupObserver()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._observer)==null||e.disconnect(),this._observer=null}_setupObserver(){this._observer=new IntersectionObserver(e=>{var t,s;(t=e[0])!=null&&t.isIntersecting&&!this._videoLoaded&&(this._videoLoaded=!0,(s=this._observer)==null||s.disconnect())},{rootMargin:"200px"}),this._observer.observe(this)}_onVideoReady(e){this._videoEl!==e.target&&(this._videoEl=e.target,this._videoEl.addEventListener("ended",()=>{this._playing=!1,this.dispatchEvent(new CustomEvent("video-ended",{bubbles:!0}))}),this._videoEl.addEventListener("pause",()=>{this._playing=!1,this.dispatchEvent(new CustomEvent("video-pause",{bubbles:!0}))}),this._videoEl.addEventListener("play",()=>{this._playing=!0,this.dispatchEvent(new CustomEvent("video-play",{bubbles:!0}))}),this._setupCaptionListener(),this.dispatchEvent(new CustomEvent("video-ready",{bubbles:!0,detail:{videoId:this.videoId}})))}_canAutoPlay(){return!matchMedia("(prefers-reduced-motion: reduce)").matches}play(){var e;this._canAutoPlay()&&((e=this._videoEl)==null||e.play())}pause(){var e;(e=this._videoEl)==null||e.pause()}resume(){var e;this._canAutoPlay()&&(e=this._videoEl)!=null&&e.paused&&this._videoEl.play()}_setupCaptionListener(){if(!this._videoEl)return;const e=this._videoEl.textTracks[0];e&&(e.mode="hidden",e.addEventListener("cuechange",()=>{var s,i;const t=(s=e.activeCues)==null?void 0:s[0];this._captionText=(i=t==null?void 0:t.text)!=null?i:""}))}_onCaptionsToggle(e){this._captionsOn=e.detail.on}render(){return h`
      <div class="video-wrapper">
        <a class="cta-link" href=${this.href||c} aria-label=${this.alt||c}>
          ${this.poster?h`<img
                class="poster"
                src=${this.poster}
                alt=${this.alt}
                ?hidden=${this._videoLoaded&&this._playing}
              />`:c}
          ${this._videoLoaded?h`<video
                id=${this.videoId||c}
                muted
                playsinline
                preload="auto"
                poster=${this.poster||c}
                src=${this.src}
                @loadeddata=${this._onVideoReady}
              >
                ${this.captions?h`<track kind="captions" src=${this.captions} />`:c}
              </video>`:c}
        </a>
        ${this._videoLoaded&&this.variant==="contained"?h`<div class="controls-overlay">
              ${this._captionsOn&&this._captionText?h`<div class="captions-text">${this._captionText}</div>`:c}
              <hp-video-controls
                video-id=${this.videoId||c}
                ?show-mute=${this.showMute}
                ?show-captions=${this.showCaptions}
                @captions-toggle=${this._onCaptionsToggle}
              ></hp-video-controls>
            </div>`:c}
      </div>
    `}},a.HpLazyVideo._stylesInjected=!1,x([l()],a.HpLazyVideo.prototype,"src",2),x([l()],a.HpLazyVideo.prototype,"poster",2),x([l()],a.HpLazyVideo.prototype,"href",2),x([l()],a.HpLazyVideo.prototype,"alt",2),x([l()],a.HpLazyVideo.prototype,"captions",2),x([l({attribute:"video-id"})],a.HpLazyVideo.prototype,"videoId",2),x([l({reflect:!0})],a.HpLazyVideo.prototype,"variant",2),x([l({type:Boolean,attribute:"show-mute"})],a.HpLazyVideo.prototype,"showMute",2),x([l({type:Boolean,attribute:"show-captions"})],a.HpLazyVideo.prototype,"showCaptions",2),x([M()],a.HpLazyVideo.prototype,"_videoLoaded",2),x([M()],a.HpLazyVideo.prototype,"_playing",2),x([M()],a.HpLazyVideo.prototype,"_captionText",2),x([M()],a.HpLazyVideo.prototype,"_captionsOn",2),a.HpLazyVideo=x([m("hp-lazy-video")],a.HpLazyVideo);var rs=Object.defineProperty,ns=Object.getOwnPropertyDescriptor,I=(n,e,t,s)=>{for(var i=s>1?void 0:s?ns(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&rs(e,t,i),i};const os=`
  hp-price-badge {
    display: inline-block;
  }

  hp-price-badge .hp-price-badge__container {
    border-radius: 12px;
    background: var(--Grey-Cloud, #FFF);
    box-shadow: 0 0 14px 0 rgba(15, 17, 17, 0.26);
    padding: 4px 8px;
  }

  hp-price-badge .hp-price-badge__container--anchor-topRight {
    border-radius: 12px 0 12px 12px;
  }

  hp-price-badge .hp-price-badge__container--anchor-topLeft {
    border-radius: 0 12px 12px 12px;
  }

  hp-price-badge .hp-price-badge__container--anchor-bottomRight {
    border-radius: 12px 12px 0 12px;
  }

  hp-price-badge .hp-price-badge__container--anchor-bottomLeft {
    border-radius: 12px 12px 12px 0;
  }

  /*
   * cqi-based scaling: override AUI fixed font sizes so the price badge
   * scales fluidly with its container's inline size.
   *
   * Derivation:
   *   AUI defines fixed rem sizes for .a-price at each data-a-size level:
   *     mini=1.2rem, s=1.3rem, b=1.5rem, base_plus=1.6rem, m=1.8rem,
   *     medium_plus=1.8rem, l=2.2rem, xl=2.4rem, xxl=3.8rem
   *
   *   We anchor "large" (2.2rem) at 8cqi, giving a conversion factor of
   *   8 / 2.2 ≈ 3.636. Each size is computed as: AUI_rem × 3.636, rounded
   *   to one decimal place.
   *
   *   Sub-element sizes (.a-price-fraction, .a-price-symbol) follow the same
   *   approach using their AUI rem values:
   *     base_plus/medium_plus: 1rem → 3.6cqi
   *     m (symbol only):       1.1rem → 4.0cqi
   *     l:                     1.3rem → 4.7cqi
   *     xl:                    1.5rem → 5.5cqi
   *     xxl:                   1.5rem → 5.5cqi
   *
   *   Sizes mini/s/b have no explicit sub-element rules in AUI (fraction and
   *   symbol inherit the parent font-size), so no override is needed.
   */
  hp-price-badge .a-price[data-a-size="mini"] {
    font-size: 4.4cqi;
  }
  hp-price-badge .a-price[data-a-size="s"] {
    font-size: 4.7cqi;
  }
  hp-price-badge .a-price[data-a-size="b"] {
    font-size: 5.5cqi;
  }
  hp-price-badge .a-price[data-a-size="base_plus"] {
    font-size: 5.8cqi;
  }
  hp-price-badge .a-price[data-a-size="base_plus"] .a-price-fraction,
  hp-price-badge .a-price[data-a-size="base_plus"] .a-price-symbol {
    font-size: 3.6cqi;
  }
  hp-price-badge .a-price[data-a-size="m"] {
    font-size: 6.5cqi;
  }
  hp-price-badge .a-price[data-a-size="m"] .a-price-symbol {
    font-size: 4cqi;
  }
  hp-price-badge .a-price[data-a-size="medium_plus"] {
    font-size: 6.5cqi;
  }
  hp-price-badge .a-price[data-a-size="medium_plus"] .a-price-fraction,
  hp-price-badge .a-price[data-a-size="medium_plus"] .a-price-symbol {
    font-size: 3.6cqi;
  }
  hp-price-badge .a-price[data-a-size="l"] {
    font-size: 8cqi;
  }
  hp-price-badge .a-price[data-a-size="l"] .a-price-fraction,
  hp-price-badge .a-price[data-a-size="l"] .a-price-symbol {
    font-size: 4.7cqi;
  }
  hp-price-badge .a-price[data-a-size="xl"] {
    font-size: 8.7cqi;
  }
  hp-price-badge .a-price[data-a-size="xl"] .a-price-fraction,
  hp-price-badge .a-price[data-a-size="xl"] .a-price-symbol {
    font-size: 5.5cqi;
  }
  hp-price-badge .a-price[data-a-size="xxl"] {
    font-size: 13.8cqi;
  }
  hp-price-badge .a-price[data-a-size="xxl"] .a-price-fraction,
  hp-price-badge .a-price[data-a-size="xxl"] .a-price-symbol {
    font-size: 5.5cqi;
  }
`;a.HpPriceBadge=class extends b{constructor(){super(...arguments),this.currencySymbol="",this.currencySymbolPosition="left",this.wholeValue="",this.fractionalValue="",this.decimalSeparator="",this.priceSize="large",this.priceColor="",this.strikethrough=!1,this.altText="",this.anchor="topRight"}createRenderRoot(){return this}connectedCallback(){if(!a.HpPriceBadge._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-price-badge"),e.textContent=os,document.head.appendChild(e),a.HpPriceBadge._stylesInjected=!0}super.connectedCallback()}render(){return h`<div class="hp-price-badge__container hp-price-badge__container--anchor-${this.anchor}">
      <hp-aui-price
        .currencySymbol=${this.currencySymbol}
        .currencySymbolPosition=${this.currencySymbolPosition}
        .wholeValue=${this.wholeValue}
        .fractionalValue=${this.fractionalValue}
        .decimalSeparator=${this.decimalSeparator}
        .priceSize=${this.priceSize}
        .priceColor=${this.priceColor}
        .strikethrough=${this.strikethrough}
        .altText=${this.altText}
      ></hp-aui-price>
    </div>`}},a.HpPriceBadge._stylesInjected=!1,I([l()],a.HpPriceBadge.prototype,"currencySymbol",2),I([l()],a.HpPriceBadge.prototype,"currencySymbolPosition",2),I([l()],a.HpPriceBadge.prototype,"wholeValue",2),I([l()],a.HpPriceBadge.prototype,"fractionalValue",2),I([l()],a.HpPriceBadge.prototype,"decimalSeparator",2),I([l()],a.HpPriceBadge.prototype,"priceSize",2),I([l()],a.HpPriceBadge.prototype,"priceColor",2),I([l({type:Boolean})],a.HpPriceBadge.prototype,"strikethrough",2),I([l()],a.HpPriceBadge.prototype,"altText",2),I([l()],a.HpPriceBadge.prototype,"anchor",2),a.HpPriceBadge=I([m("hp-price-badge")],a.HpPriceBadge);const tt="hp-focus-indicator",it=`
  .hp-focus-indicator::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    pointer-events: none;
    box-shadow: inset 0 0 0 3px #2162a1, inset 0 0 0 6px #fff;
    border-radius: 12px;
  }
  .hp-focus-indicator:focus-visible::after {
    visibility: visible;
  }
  .hp-focus-indicator:focus-visible {
    outline: none;
  }
`;var ls=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,Z=(n,e,t,s)=>{for(var i=s>1?void 0:s?cs(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&ls(e,t,i),i};const hs=new Set(["h","f","s_xs","s_s","s_m","s_l","s_lg"]),ps=`
  hp-block-x {
    display: block;
    position: relative;
    height: 100%;
    container-type: inline-size;

    --hp-block-x-rem-multiplier: 1;
    --hp-block-x-zone-s-xs-default: calc(2.510526rem * var(--hp-block-x-rem-multiplier));
    --hp-block-x-zone-s-s-default: calc(4.293103rem * var(--hp-block-x-rem-multiplier));
    --hp-block-x-zone-s-m-default: calc(5.84482rem * var(--hp-block-x-rem-multiplier));
    --hp-block-x-zone-s-l-default: calc(8.89655rem * var(--hp-block-x-rem-multiplier));
    --hp-block-x-zone-s-lg-default: calc(12.10344rem * var(--hp-block-x-rem-multiplier));
  }

  @supports (container-type: inline-size) {
    hp-block-x {
      --hp-block-x-zone-s-xs-default: 18.59649cqi;
      --hp-block-x-zone-s-s-default: 31.80077cqi;
      --hp-block-x-zone-s-m-default: 43.29502cqi;
      --hp-block-x-zone-s-l-default: 65.90038cqi;
      --hp-block-x-zone-s-lg-default: 89.65517cqi;
    }
  }
  hp-block-x .block-x-container {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    padding: 12px;
  }
  /* Ratio-driven height: derive height from width instead of filling the parent.
     aspect-ratio is width/height, so height = width * ratio ⇒ 1 / ratio.
     The container keeps height:100% and fills the ratio-sized host. */
  hp-block-x[data-min-height-ratio] {
    height: auto;
    aspect-ratio: 1 / var(--hp-block-x-min-height-ratio);
  }
  hp-block-x .block-x-zone {
    position: relative;
    min-width: 0;
    overflow: hidden;
  }
  hp-block-x .block-x-zone--flex {
    flex: 1 1 0%;
  }
  hp-block-x .block-x-zone--fixed {
    flex: 0 0 auto;
  }
  hp-block-x .block-x-zone--bordered {
    border: 1px solid rgba(0, 113, 133, 0.4);
    border-radius: 4px;
  }
  hp-block-x .block-x-asin-grid {
    display: grid;
    gap: 8px;
    height: 100%;
  }
  hp-block-x .block-x-asin-row {
    display: flex;
    flex-direction: row;
    gap: 8px;
    height: 100%;
    overflow-x: auto;
  }
  hp-block-x .block-x-asin-row > * {
    flex: 1 1 0;
    min-width: 0;
  }
  hp-block-x .block-x-asin-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
  }
  hp-block-x .block-x-asin-list > * {
    flex: 1 1 0;
    min-height: 0;
  }
  hp-block-x .block-x-asin-masonry {
    display: flex;
    flex-direction: row;
    gap: 8px;
    height: 100%;
  }
  hp-block-x .block-x-asin-masonry > .block-x-masonry-col {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  hp-block-x .block-x-asin-masonry > .block-x-masonry-col > * {
    flex: 1 1 0;
    min-height: 0;
  }
  hp-block-x .block-x-title {
    margin: 0;
    padding: 0 12px;
  }
  hp-block-x .block-x-slot {
    height: 100%;
  }
  hp-block-x .block-x-legal-disclaimer {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  hp-block-x .block-x-background-color {
    position: absolute;
    inset: 0;
    z-index: -1;
  }
  hp-block-x .block-x-background-link {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: block;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  hp-block-x .block-x-zone--passthrough {
    pointer-events: none;
  }
`,ds={h:"auto",s_xs:"var(--hp-block-x-zone-s-xs, var(--hp-block-x-zone-s-xs-default))",s_s:"var(--hp-block-x-zone-s-s, var(--hp-block-x-zone-s-s-default))",s_m:"var(--hp-block-x-zone-s-m, var(--hp-block-x-zone-s-m-default))",s_l:"var(--hp-block-x-zone-s-l, var(--hp-block-x-zone-s-l-default))",s_lg:"var(--hp-block-x-zone-s-lg, var(--hp-block-x-zone-s-lg-default))",f:""};a.HpBlockX=class extends b{constructor(){super(...arguments),this.layout="",this.background=null,this.zones=null,this.metadata=null,this.gap="8px",this.zonesBorder=!1,this._slottedChildren=new Map,this._childrenCollected=!1,this._slotObserver=null,this._videoId=`hp-video-${++a.HpBlockX._videoIdCounter}`}createRenderRoot(){return this}connectedCallback(){if(!a.HpBlockX._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-block-x"),e.textContent=ps+it,document.head.appendChild(e),a.HpBlockX._stylesInjected=!0}super.connectedCallback()}willUpdate(e){!this._childrenCollected&&this.zones&&(this._childrenCollected=!0,this._initSlotRegistry(),this._slottedChildren.size>0&&(this._collectSlottedChildren(),this._observeSlotChildren())),e.has("metadata")&&(this._applyMinHeightRatio(),this._applyRemMultiplier()),super.willUpdate(e)}_applyMinHeightRatio(){var t;const e=(t=this.metadata)==null?void 0:t.minHeightRatio;typeof e=="number"&&Number.isFinite(e)&&e>0?(this.setAttribute("data-min-height-ratio",String(e)),this.style.setProperty("--hp-block-x-min-height-ratio",String(e))):(this.removeAttribute("data-min-height-ratio"),this.style.removeProperty("--hp-block-x-min-height-ratio"))}_applyRemMultiplier(){var t;const e=(t=this.metadata)==null?void 0:t.remMultiplier;typeof e=="number"&&Number.isFinite(e)&&e>0?this.style.setProperty("--hp-block-x-rem-multiplier",String(e)):this.style.removeProperty("--hp-block-x-rem-multiplier")}disconnectedCallback(){var e;(e=this._slotObserver)==null||e.disconnect(),this._slotObserver=null,super.disconnectedCallback()}updated(e){super.updated(e);for(const t of this.querySelectorAll(".a-truncate"))we(t)}render(){var i;const e=this._parseLayout();if(!e)return c;const t=(i=this.zones)!=null?i:[],s=`gap:${this.gap}`;return h`
      <div class="block-x-container" style=${s}>
        ${this._renderBackground()}
        ${this._renderFullbleedVideo(t)}
        ${e.map((r,o)=>{var d;return this._renderZone(r,(d=t[o])!=null?d:a.HpBlockX._SPACER_ZONE)})}
      </div>
    `}_parseLayout(){if(!this.layout)return null;const e=this.layout.trim().split("-");for(const t of e)if(!hs.has(t))return console.warn(`[hp-block-x] Invalid zone size token: "${t}" in layout "${this.layout}".`),null;return e}_renderBackground(){var s,i,r,o,d,p,u;if((s=this.background)!=null&&s.color)return h`<div
        class="block-x-background-color"
        style="background-color:${this.background.color}"
      ></div>`;if(!((i=this.background)!=null&&i.image))return c;const e=this.background.image,t=h`<hp-background-image
      src=${(r=e.src)!=null?r:""}
      .media=${(o=e.media)!=null?o:null}
      alt=${(d=e.alt)!=null?d:""}
      width=${(p=e.width)!=null?p:0}
      height=${(u=e.height)!=null?u:0}
    ></hp-background-image>`;return e.actionUrl&&e.alt?h`<a
        class="block-x-background-link a-link-normal ${tt}"
        href=${e.actionUrl}
        aria-label=${e.alt}
      >${t}</a>`:t}_renderZone(e,t){const s=e==="f",i=t.type==="spacer",r=`block-x-zone ${s?"block-x-zone--flex":"block-x-zone--fixed"}${this.zonesBorder?" block-x-zone--bordered":""}${i?" block-x-zone--passthrough":""}`,o=s?"":`height:${ds[e]}`;return h`
      <div class=${r} style=${o}>
        ${this._renderZoneContent(t)}
      </div>
    `}_renderZoneContent(e){switch(e.type){case"header":return this._renderHeaderZone(e.props);case"asin-grid":return this._renderAsinGridZone(e.props);case"asin-row":return this._renderAsinRowZone(e.props);case"asin-list":return this._renderAsinListZone(e.props);case"asin-masonry":return this._renderAsinMasonryZone(e.props);case"title":return this._renderTitleZone(e.props);case"text-summary":return this._renderTextSummaryZone(e.props);case"slot":return this._renderSlotZone(e.props);case"video":return this._renderVideoZone(e.props);case"legal-disclaimer":return this._renderLegalDisclaimerZone(e.props);case"spacer":return h`<div></div>`;default:return c}}_renderHeaderZone(e){var t,s,i,r,o;if(e.slot){const d=(t=this._slottedChildren.get(e.slot))!=null?t:[];return h`<div data-slot=${e.slot}>${d.map(p=>p)}</div>`}return h`<hp-header
      title=${(s=e.title)!=null?s:""}
      subtitle=${(i=e.subtitle)!=null?i:""}
      actionText=${(r=e.actionText)!=null?r:""}
      actionUrl=${(o=e.actionUrl)!=null?o:""}
    ></hp-header>`}_renderAsinGridZone(e){var i,r;const t=(i=e.columns)!=null?i:4,s=(r=this._slottedChildren.get(e.slot))!=null?r:[];return h`<div
      class="block-x-asin-grid"
      data-slot=${e.slot}
      style="grid-template-columns:repeat(${t}, 1fr)"
    >${s.map(o=>o)}</div>`}_renderAsinRowZone(e){var s;const t=(s=this._slottedChildren.get(e.slot))!=null?s:[];return h`<div class="block-x-asin-row" data-slot=${e.slot}>${t.map(i=>i)}</div>`}_renderAsinListZone(e){var s;const t=(s=this._slottedChildren.get(e.slot))!=null?s:[];return h`<div class="block-x-asin-list" data-slot=${e.slot}>${t.map(i=>i)}</div>`}_renderAsinMasonryZone(e){var r,o;const t=(r=this._slottedChildren.get(e.slot))!=null?r:[],s=(o=e.cadence)!=null&&o.length?e.cadence:[1],i=this._distributeToColumns(t,s);return h`<div class="block-x-asin-masonry" data-slot=${e.slot}>
      ${i.map(d=>h`<div class="block-x-masonry-col">${d.map(p=>p)}</div>`)}
    </div>`}_distributeToColumns(e,t){const s=[];let i=0,r=0;for(;i<e.length;){const o=t[r%t.length],d=Number.isInteger(o)&&o>0?o:1;s.push(e.slice(i,i+d)),i+=d,r++}return s}_renderTitleZone(e){var s;switch((s=e.level)!=null?s:2){case 1:return h`<h1 class="block-x-title">${e.text}</h1>`;case 2:return h`<h2 class="block-x-title">${e.text}</h2>`;case 3:return h`<h3 class="block-x-title">${e.text}</h3>`;case 4:return h`<h4 class="block-x-title">${e.text}</h4>`;case 5:return h`<h5 class="block-x-title">${e.text}</h5>`;case 6:return h`<h6 class="block-x-title">${e.text}</h6>`;default:return h`<h2 class="block-x-title">${e.text}</h2>`}}_renderLegalDisclaimerZone(e){return e.text?h`<hp-aui-text
      .text=${e.text}
      .textSize=${"mini"}
      .textColor=${e.fontColorInverse?"inverse":"base"}
      .textNowrap=${!0}
      .cssClass=${"block-x-legal-disclaimer"}
    ></hp-aui-text>`:c}_renderTextSummaryZone(e){var t,s,i,r,o,d,p,u,g,f,v;return h`<hp-block-x-text
      disclosure-size=${(t=e.disclosureSize)!=null?t:"small"}
      heading=${(s=e.heading)!=null?s:""}
      body=${e.body}
      max-lines=${(i=e.maxLines)!=null?i:3}
      .aspects=${(r=e.aspects)!=null?r:[]}
      .price=${(o=e.price)!=null?o:null}
      disclosure=${(d=e.disclosure)!=null?d:""}
      url=${(p=e.url)!=null?p:""}
      lucid-item-id=${(u=e.lucidItemId)!=null?u:""}
      pos-y=${(g=e.posY)!=null?g:""}
      aspects-columns=${(f=e.aspectsColumns)!=null?f:"auto"}
      ?full-bleed=${(v=e.fullBleed)!=null?v:!1}
    ></hp-block-x-text>`}_renderSlotZone(e){var s;const t=(s=this._slottedChildren.get(e.name))!=null?s:[];return h`<div class="block-x-slot" data-slot=${e.name}>${t.map(i=>i)}</div>`}_getVideoId(e){return e.videoId||this._videoId}_renderFullbleedVideo(e){var r,o,d;const t=e.find(p=>p.type==="video"&&p.props.variant==="fullbleed");if(!t)return c;const s=t.props,i=this._getVideoId(s);return h`<hp-lazy-video
      variant="fullbleed"
      video-id=${i}
      src=${s.src}
      poster=${(r=s.poster)!=null?r:c}
      href=${s.href||c}
      alt=${(o=s.alt)!=null?o:""}
      captions=${(d=s.captions)!=null?d:c}
    ></hp-lazy-video>`}_renderVideoZone(e){var s,i,r,o,d,p,u;const t=this._getVideoId(e);return e.variant==="fullbleed"?h`<hp-video-controls
        video-id=${t}
        ?show-mute=${(s=e.showMute)!=null?s:!0}
        ?show-captions=${!!e.captions&&((i=e.showCaptions)!=null?i:!1)}
      ></hp-video-controls>`:h`<hp-lazy-video
      variant="contained"
      video-id=${t}
      src=${e.src}
      poster=${(r=e.poster)!=null?r:c}
      href=${e.href||c}
      alt=${(o=e.alt)!=null?o:""}
      captions=${(d=e.captions)!=null?d:c}
      ?show-mute=${(p=e.showMute)!=null?p:!0}
      ?show-captions=${(u=e.showCaptions)!=null?u:!1}
    ></hp-lazy-video>`}_initSlotRegistry(){if(this.zones)for(const e of this.zones)switch(e.type){case"asin-grid":case"asin-row":case"asin-list":case"asin-masonry":this._slottedChildren.set(e.props.slot,null);break;case"slot":this._slottedChildren.set(e.props.name,null);break;case"header":e.props.slot&&this._slottedChildren.set(e.props.slot,null);break}}_collectSlottedChildren(){const e=[];for(const t of Array.from(this.children)){const s=t.getAttribute("slot");s&&this._slottedChildren.has(s)&&e.push(t)}for(const t of e){const s=t.getAttribute("slot"),i=this._slottedChildren.get(s),r=i!=null?i:[];r.push(t),this._slottedChildren.set(s,r),t.remove()}}_allSlotsFilled(){return[...this._slottedChildren.values()].every(e=>e!==null)}_observeSlotChildren(){this._allSlotsFilled()||(this._slotObserver=new MutationObserver(e=>{let t=!1;for(const s of e)for(const i of Array.from(s.addedNodes))if(i instanceof Element){const r=i.getAttribute("slot");r&&this._slottedChildren.has(r)&&(t=!0)}t&&(this._collectSlottedChildren(),this._allSlotsFilled()&&(this._slotObserver.disconnect(),this._slotObserver=null),this.requestUpdate())}),this._slotObserver.observe(this,{childList:!0}))}},a.HpBlockX._stylesInjected=!1,a.HpBlockX._videoIdCounter=0,a.HpBlockX._SPACER_ZONE={type:"spacer"},Z([l()],a.HpBlockX.prototype,"layout",2),Z([l({converter:k})],a.HpBlockX.prototype,"background",2),Z([l({converter:k})],a.HpBlockX.prototype,"zones",2),Z([l({converter:k})],a.HpBlockX.prototype,"metadata",2),Z([l()],a.HpBlockX.prototype,"gap",2),Z([l({type:Boolean,attribute:"zones-border"})],a.HpBlockX.prototype,"zonesBorder",2),a.HpBlockX=Z([m("hp-block-x")],a.HpBlockX);function us(n){return n?"theming-card-background enableColorSequence":""}const gs=new Set([]);var fs=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,Q=(n,e,t,s)=>{for(var i=s>1?void 0:s?bs(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&fs(e,t,i),i};const ms={top:{x:50,y:0},bottom:{x:50,y:100},left:{x:0,y:50},right:{x:100,y:50},topLeft:{x:0,y:0},topRight:{x:100,y:0},middleLeft:{x:0,y:50},middleRight:{x:100,y:50},bottomLeft:{x:0,y:100},bottomRight:{x:100,y:100},center:{x:50,y:50}},ys={"asin-image":{flex:!0},highlight:{flex:!1},header:{flex:!1},slot:{flex:!1},"price-badge":{flex:!1}};function _s(n){let e="left",t=0;n.left!=null?(e="left",t=n.left):n.x!=null?(e="left",t=n.x):n.right!=null&&(e="right",t=n.right);let s="top",i=0;return n.top!=null?(s="top",i=n.top):n.y!=null?(s="top",i=n.y):n.bottom!=null&&(s="bottom",i=n.bottom),{hProp:e,hValue:t,vProp:s,vValue:i}}const vs=`
  hp-canvas-x {
    display: block;
    position: relative;
  }
  hp-canvas-x[flex] {
    width: 100%;
    height: 100%;
  }
  hp-canvas-x .canvas-container {
    position: relative;
    overflow: hidden;
  }
  hp-canvas-x .canvas-container--flex {
    width: 100%;
    height: 100%;
  }
  hp-canvas-x .canvas-placeholder {
    width: 100%;
  }
  hp-canvas-x .bounding-box {
    position: absolute;
    box-sizing: border-box;
  }
  hp-canvas-x .bounding-box--asin {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  hp-canvas-x .bounding-box__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  hp-canvas-x .bounding-box > .feature-overlay {
    z-index: 1;
  }
  hp-canvas-x .canvas-image-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    display: block;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  hp-canvas-x .canvas-image-link > .canvas-image {
    position: static;
    width: 100%;
    height: 100%;
  }
  hp-canvas-x .feature-overlay {
    position: absolute;
    pointer-events: none;
  }
  hp-canvas-x .feature-overlay a {
    pointer-events: auto;
  }
`;a.HpCanvasX=class extends b{constructor(){super(...arguments),this.canvas=null,this.boundingBoxes=[],this.features=[],this.flex=!0,this.enableColorSequence=!1,this._slottedChildren=new Map,this._childrenCollected=!1,this._slotObserver=null}createRenderRoot(){return this}connectedCallback(){if(!a.HpCanvasX._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-canvas-x"),e.textContent=vs+it,document.head.appendChild(e),a.HpCanvasX._stylesInjected=!0}super.connectedCallback()}willUpdate(e){this._childrenCollected||(this._childrenCollected=!0,this._initSlotRegistry(),this._slottedChildren.size>0&&(this._collectSlottedChildren(),this._observeSlotChildren())),super.willUpdate(e)}disconnectedCallback(){var e;(e=this._slotObserver)==null||e.disconnect(),this._slotObserver=null,super.disconnectedCallback()}render(){var i;if(!this.canvas)return c;this.canvas.backgroundColor&&this.setAttribute("data-background-color",this.canvas.backgroundColor),(i=this.canvas.image)!=null&&i.src&&this.setAttribute("data-background-image-url",this.canvas.image.src);const e=this.canvas.backgroundColor?`background-color:${this.canvas.backgroundColor};--shadow-base:${this.canvas.backgroundColor}`:"",t=this.flex?"canvas-container canvas-container--flex":"canvas-container",s=us(this.enableColorSequence);return h`
      <div class="${t} ${s}" style=${e}>
        ${this._renderSizingElement()}
        ${this._renderImage()}
        ${this._renderRootFeatures()}
        ${this._renderBoundingBoxes()}
      </div>
    `}_renderSizingElement(){if(this.flex||!this.canvas||!this.canvas.size||!this.canvas.size.width||!this.canvas.size.height)return c;const e=this.canvas.size.height/this.canvas.size.width*100;return h`<div class="canvas-placeholder" style="padding-bottom:${e}%"></div>`}_renderImage(){var i,r,o,d,p,u;if(!((i=this.canvas)!=null&&i.image))return c;const e=this.canvas.image,t=!e.alt,s=h`<hp-background-image
      src=${(r=e.src)!=null?r:""}
      .media=${(o=e.media)!=null?o:null}
      alt=${(d=e.alt)!=null?d:""}
      width=${(p=e.width)!=null?p:0}
      height=${(u=e.height)!=null?u:0}
      role=${t?"presentation":c}
    ></hp-background-image>`;return e.actionUrl&&e.alt?h`<a
        class="canvas-image-link a-link-normal ${tt}"
        href=${e.actionUrl}
        aria-label=${e.alt}
      >${s}</a>`:s}_renderBoundingBoxes(){if(!this.boundingBoxes.length)return c;let e=0;return this.boundingBoxes.map(t=>{var ce,he,pe;const s=t.coordinates.x,i=t.coordinates.y,r=t.size.width,o=t.size.height,d=(ce=t.depthLevel)!=null?ce:1,p=["bounding-box",t.type==="asin"?"bounding-box--asin":""].filter(Boolean).join(" "),u=`left:${s}%;top:${i}%;width:${r}%;height:${o}%;z-index:${d}`,f=this.features.filter(X=>X.parentId===t.id).map(X=>this._renderFeature({feature:X,style:this._resolveFeatureStyle(X,!1),parentHasAriaLabel:!!t.ariaLabel})),v=t.url?h`<a
            class="bounding-box__link"
            href=${t.url}
            aria-label=${(he=t.ariaLabel)!=null?he:""}
          ></a>`:c,y=t.type==="asin",P=y?(pe=t.metadata)==null?void 0:pe.itemId:void 0,le=y?++e:void 0;return h`
        <div
          class=${p}
          style=${u}
          data-box-id=${t.id}
          data-box-type=${t.type}
          data-csa-c-type=${y?"item":c}
          data-csa-c-item-id=${y?P!=null?P:"":c}
          data-csa-c-item-type=${y?"asin":c}
          data-csa-c-posx=${y?le:c}
          data-csa-c-owner=${y?"Homepage":c}
        >${v}${f}</div>
      `})}_renderRootFeatures(){if(!this.features.length||!this.canvas)return c;const e=this.features.filter(t=>!t.parentId);return e.length?e.map(t=>this._renderFeature({feature:t,style:this._resolveFeatureStyle(t,!0)})):c}_renderFeature({feature:e,style:t,parentHasAriaLabel:s=!1}){const i=s&&!gs.has(e.type);return h`<div class="feature-overlay" style=${t} aria-hidden=${i?"true":c}>${this._renderFeatureContent(e)}</div>`}_resolveFeatureStyle(e,t){var u;if((u=ys[e.type])!=null&&u.flex&&!t)return"left:0;top:0;width:100%;height:100%";if("anchor"in e.position){if(t)switch(e.position.anchor){case"top":return"left:12px;right:12px;top:12px";case"bottom":return"left:12px;right:12px;bottom:12px";case"center":return`left:12px;right:12px;top:50%;transform:translateY(-50%)${e.offset?` translate(${e.offset.x}px,${e.offset.y}px)`:""}`;default:return"left:12px;right:12px;top:12px"}const{x:g,y:f}=ms[e.position.anchor],v=`translate(-${g}%,-${f}%)`,y=e.offset?`translate(${e.offset.x}px,${e.offset.y}px)`:"";return`left:${g}%;top:${f}%;transform:${v}${y?" "+y:""}`}const{hProp:s,hValue:i,vProp:r,vValue:o}=_s(e.position.relative),d=`${s}:${i}%;${r}:${o}%`;if(e.centerOnPoint===!0){const v=`translate(${s==="left"?"-50%":"50%"},${r==="top"?"-50%":"50%"})`,y=e.offset?` translate(${e.offset.x}px,${e.offset.y}px)`:"";return`${d};transform:${v}${y}`}const p=e.offset?`translate(${e.offset.x}px,${e.offset.y}px)`:"";return p?`${d};transform:${p}`:d}_renderFeatureContent(e){var s,i,r,o,d,p,u,g,f,v,y,P,le,ce,he,pe,X,ct,ht,pt,dt,ut,gt,ft;const t=(s=e.metadata)!=null?s:{};switch(e.type){case"highlight":{const O=(i=t.url)!=null?i:"",Y=(r=t.ariaLabel)!=null?r:"";return h`<hp-highlight url=${O} label=${Y}></hp-highlight>`}case"header":return h`<hp-header
          title=${(o=t.title)!=null?o:""}
          subtitle=${(d=t.subtitle)!=null?d:""}
          actionText=${(p=t.actionText)!=null?p:""}
          actionUrl=${(u=t.actionUrl)!=null?u:""}
        ></hp-header>`;case"slot":{const O=t.slotName;if(!O)return c;const Y=(g=this._slottedChildren.get(O))!=null?g:[];return h`<div class="slot-container" data-slot=${O}>${Y.map(de=>de)}</div>`}case"asin-image":{const O=(f=t.src)!=null?f:"",Y=(v=t.media)!=null?v:null,de=e.parentId?"":(y=t.alt)!=null?y:"",Ie=(P=t.useShadow)!=null?P:!1,ze=(le=t.width)!=null?le:0,Te=(ce=t.height)!=null?ce:0;return h`<hp-asin-image
          src=${O}
          .media=${Y}
          alt=${de}
          ?useShadow=${Ie}
          width=${ze}
          height=${Te}
        ></hp-asin-image>`}case"price-badge":{const O=(he=t.currencySymbol)!=null?he:"",Y=(pe=t.currencySymbolPosition)!=null?pe:"left",de=(X=t.wholeValue)!=null?X:"",Ie=(ct=t.fractionalValue)!=null?ct:"",ze=(ht=t.decimalSeparator)!=null?ht:"",Te=(pt=t.priceSize)!=null?pt:"large",As=(dt=t.priceColor)!=null?dt:"",xs=(ut=t.strikethrough)!=null?ut:!1,ws=(gt=t.altText)!=null?gt:"",Ss=(ft=t.anchor)!=null?ft:"topRight";return h`<hp-price-badge
          .currencySymbol=${O}
          .currencySymbolPosition=${Y}
          .wholeValue=${de}
          .fractionalValue=${Ie}
          .decimalSeparator=${ze}
          .priceSize=${Te}
          .priceColor=${As}
          ?strikethrough=${xs}
          .altText=${ws}
          .anchor=${Ss}
        ></hp-price-badge>`}default:return c}}_initSlotRegistry(){var e;for(const t of this.features)if(t.type==="slot"){const s=(e=t.metadata)==null?void 0:e.slotName;s&&this._slottedChildren.set(s,null)}}_collectSlottedChildren(){const e=[];for(const t of Array.from(this.children)){const s=t.getAttribute("slot");s&&this._slottedChildren.has(s)&&e.push(t)}for(const t of e){const s=t.getAttribute("slot"),i=this._slottedChildren.get(s),r=i!=null?i:[];r.push(t),this._slottedChildren.set(s,r),t.remove()}}_allSlotsFilled(){return[...this._slottedChildren.values()].every(e=>e!==null)}_observeSlotChildren(){this._allSlotsFilled()||(this._slotObserver=new MutationObserver(e=>{let t=!1;for(const s of e)for(const i of Array.from(s.addedNodes))if(i instanceof Element){const r=i.getAttribute("slot");r&&this._slottedChildren.has(r)&&(t=!0)}t&&(this._collectSlottedChildren(),this._allSlotsFilled()&&(this._slotObserver.disconnect(),this._slotObserver=null),this.requestUpdate())}),this._slotObserver.observe(this,{childList:!0}))}},a.HpCanvasX._stylesInjected=!1,Q([l({converter:k})],a.HpCanvasX.prototype,"canvas",2),Q([l({converter:k})],a.HpCanvasX.prototype,"boundingBoxes",2),Q([l({converter:k})],a.HpCanvasX.prototype,"features",2),Q([l({type:Boolean,reflect:!0})],a.HpCanvasX.prototype,"flex",2),Q([l({attribute:"data-enable-color-sequence",converter:{fromAttribute:n=>n==="true"}})],a.HpCanvasX.prototype,"enableColorSequence",2),a.HpCanvasX=Q([m("hp-canvas-x")],a.HpCanvasX);var $s=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,T=(n,e,t,s)=>{for(var i=s>1?void 0:s?Cs(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&$s(e,t,i),i};const Hs=`
  hp-stripe {
    display: block;
    margin: 0 16px;
    padding: 8px 0;
  }

  hp-stripe .stripe {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    text-decoration: none;
    overflow: hidden;
    gap: 12px;
    padding: 0 12px;
    min-height: 46px;
    position: relative;
  }

  hp-stripe .stripe:focus-visible {
    outline: 3px solid transparent;
  }

  hp-stripe .stripe:focus-visible::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 3px #2162a1, inset 0 0 0 6px #fff;
    pointer-events: none;
  }

  hp-stripe .stripe-text-container {
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
    padding: 8px 0;
    gap: 4px;
  }

  @media (max-width: 430px) {
    hp-stripe .stripe-text-container {
      flex: 1
    }
  }

  hp-stripe .stripe-headline {
    font-family: "Amazon Ember Modern Display", "Amazon Ember", Arial, sans-serif;
    font-weight: 700;
    font-size: calc(1.125rem * var(--hp-stripe-rem-multiplier, 1));
    line-height: 1.11;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
  }

  hp-stripe .stripe-legalline {
    font-family: "Amazon Ember Modern Display", "Amazon Ember", Arial, sans-serif;
    font-weight: 400;
    font-size: calc(0.75rem * var(--hp-stripe-rem-multiplier, 1));
    line-height: 1.33;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
  }

  hp-stripe .stripe-media-container {
    width: 126px;
    flex-shrink: 0;
    overflow: hidden;
    position: relative;
    align-self: stretch;
  }

  hp-stripe .stripe-media-container img,
  hp-stripe .stripe-media-container video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: transparent;
  }

  @media (min-width: 720px) {

    hp-stripe .stripe {
      height: 56px;
    }

    hp-stripe .stripe-headline {
      -webkit-line-clamp: 1;
      line-clamp: 1;
    }
  }
`;return a.HpStripe=class extends b{constructor(){super(...arguments),this.backgroundColor="",this.destinationUrl="",this.fontColorInverse=!1,this.headline="",this.image=null,this.legalLine="",this.video=null,this.remMultiplier=1}createRenderRoot(){return this}connectedCallback(){if(!a.HpStripe._stylesInjected){const e=document.createElement("style");e.setAttribute("data-hp-component","hp-stripe"),e.textContent=Hs,document.head.appendChild(e),a.HpStripe._stylesInjected=!0}super.connectedCallback()}_renderMedia(){var e,t,s;if(this.image)return h`<amazon-image
      .media=${this.image.media}
      alt=${(e=this.image.alt)!=null?e:""}
      width=${(t=this.image.width)!=null?t:0}
      height=${(s=this.image.height)!=null?s:0}
      weblab-id="1420460"
    ></amazon-image>`;if(this.video){const i=!(matchMedia!=null&&matchMedia("(prefers-reduced-motion: reduce)").matches);return h`<video src=${this.video.src} poster=${this.video.poster||c} muted ?autoplay=${i} loop playsinline></video>`}return c}render(){return!this.headline||!this.destinationUrl||!this.image&&!this.video||!this.backgroundColor?c:h`<hp-lucid-wrapper
      data-csa-c-type="item"
      data-csa-c-item-type="stripe"
      data-csa-c-owner="Homepage"
    ><a class="stripe" href=${this.destinationUrl} style=${`background-color:${this.backgroundColor}`} data-is-mobile>
        <div class="stripe-text-container" style=${`--hp-stripe-rem-multiplier:${this.remMultiplier};color:${this.fontColorInverse?"#FFFFFF":"#0F1111"}`}>
          <span class="stripe-headline">${this.headline}</span>
          ${this.legalLine?h`<span class="stripe-legalline">${this.legalLine}</span>`:c}
        </div>
        <div class="stripe-media-container">${this._renderMedia()}</div>
      </a></hp-lucid-wrapper>`}},a.HpStripe._stylesInjected=!1,T([l({attribute:"backgroundcolor"})],a.HpStripe.prototype,"backgroundColor",2),T([l({attribute:"destinationurl"})],a.HpStripe.prototype,"destinationUrl",2),T([l({type:Boolean,attribute:"fontcolorinverse"})],a.HpStripe.prototype,"fontColorInverse",2),T([l()],a.HpStripe.prototype,"headline",2),T([l({converter:k})],a.HpStripe.prototype,"image",2),T([l({attribute:"legalline"})],a.HpStripe.prototype,"legalLine",2),T([l({converter:k})],a.HpStripe.prototype,"video",2),T([l({type:Number,attribute:"remmultiplier"})],a.HpStripe.prototype,"remMultiplier",2),a.HpStripe=T([m("hp-stripe")],a.HpStripe),a.truncate=we,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),a})({});
/////////////////////////
// END FILE js/homepage-wc.js
/////////////////////////
// END ASSET AmazonHomepageBuzzWebComponents - 1.0
}));
////////////////////////////////////////////