import{_ as c,b as D,a as p,d as j,f as wn}from"./tslib.es6-7f0e734f.0d83a38f.js";import{r as k,R as $}from"./jsx-runtime.4acc1c87.js";import{M as Cn,A as x,s as A,$ as Rn}from"./styled-components.browser.esm.ca7eda9a.js";import{f as O,s as w,b as M,y as an,i as on,g as ln,w as zn,v as dn,a as sn,d as cn,r as m}from"./colors.esm.ccaf0239.js";function fn(n,t,e,r){var a=n.name;a==null||a.replace("Component","");var i=function(l){var o=l.theme,d=D(l,["theme"]),h=k.useContext(Cn);return o=o||h,n(c({theme:o},d))};return k.forwardRef(function(l,o){return i(c({forwardRef:o},l))})}var un=function(n){var t=n.theme.name;return t==="dark"&&x(Y||(Y=p([`
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  `],[`
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  `])))},Y,Fn={COLOR:"light",SIZE:"desktop"};function s(n,t){if(t===void 0&&(t=500),n.type==="SIZE"){var e="desktop",r=n.modes[e];if(typeof r=="string")return r;if(typeof r=="function")return r(t)}if(n.type==="COLOR")return function(a){var i=a.theme,l;typeof i=="string"&&(l=i),typeof(i==null?void 0:i.name)=="string"&&(l=i.name);var o=Sn(n,l);if(typeof o=="string")return o;if(typeof o=="function")return o(t)}}function Sn(n,t){var e=n.modes[t],r=typeof e=="function"||typeof e=="string";return r||(console.warn("Invalid Theme: "+t),n.default&&(t=n.default),n.default||(t=Fn[n.type]),e=n.modes[t]),e}function C(n,t){var e=t===void 0?{min:0,max:1e3}:t,r=e.min,a=r===void 0?0:r,i=e.max,l=i===void 0?1e3:i;return Math.min(Math.max(n,a),l)}var R=function(n){return s(Ln,n)},Ln={default:"light",type:"COLOR",modes:{dark:En,light:Bn}};function En(n){return O(C(900+n/10))}function Bn(n){return w(C((n+200)/4-175))}R.primary=R(500);R.secondary=R(1e3);var jn=M(500),Dn=M(500),An={default:"light",type:"COLOR",modes:{dark:jn,light:Dn}},Mn=s(An),Tn=O(50),Nn=O(700),In={default:"light",type:"COLOR",modes:{dark:Tn,light:Nn}},Kn=s(In),Un=w(700),_n=w(700),Hn={default:"light",type:"COLOR",modes:{dark:Un,light:_n}},Wn=s(Hn),Yn={primary:Mn,secondary:Kn,tertiary:Wn},Zn="conic-gradient(#e65050,#764cb4,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050)",qn="conic-gradient(#e65050,#764cb4,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050)",Pn={default:"light",type:"COLOR",modes:{dark:Zn,light:qn}},Xn=s(Pn),Gn="conic-gradient(#fa4343,#503873,#73d2f6,#10b5fc,#8bcf0d,#ffc34e,#fb8920,#fa4343)",Vn="conic-gradient(#fa4343,#503873,#73d2f6,#10b5fc,#8bcf0d,#ffc34e,#fb8920,#fa4343)",Jn={default:"light",type:"COLOR",modes:{dark:Gn,light:Vn}},Qn=s(Jn),nt={sm:Xn,xl:Qn},tt="linear-gradient(to right,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050,#764cb4)",et="linear-gradient(to right,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050,#764cb4)",rt={default:"light",type:"COLOR",modes:{dark:tt,light:et}},at=s(rt),it="linear-gradient(to right,#73D2F6,#10B5FC,#8BCF0D,#FFC34E,#FB8920,#FA4343,#9F3D5C,#503873)",ot="linear-gradient(to right,#73D2F6,#10B5FC,#8BCF0D,#FFC34E,#FB8920,#FA4343,#9F3D5C,#503873)",lt={default:"light",type:"COLOR",modes:{dark:it,light:ot}},dt=s(lt),st={sm:at,xl:dt},ct={conic:nt,linear:st},ft="#FF4D4D",ut="#FF4D4D",vt={default:"light",type:"COLOR",modes:{dark:ft,light:ut}},pt=s(vt),ht=an(500),gt=an(500),mt={default:"light",type:"COLOR",modes:{dark:ht,light:gt}},bt=s(mt),yt=on(500),kt=on(500),$t={default:"light",type:"COLOR",modes:{dark:yt,light:kt}},xt=s($t),Ot=ln(500),wt=ln(500),Ct={default:"light",type:"COLOR",modes:{dark:Ot,light:wt}},Rt=s(Ct),zt={caution:bt,negative:xt,positive:Rt},Ft=O(680),St=w(100),Lt={default:"light",type:"COLOR",modes:{dark:Ft,light:St}},Et=s(Lt),b=function(n){return s(Bt,n)},Bt={default:"light",type:"COLOR",modes:{dark:jt,light:Dt}};function jt(n){return O(C(-1*(n/5-1e3)))}function Dt(n){return n>=300?zn:w(C(-1*(n/2-150)))}b.primary=b(400);b.secondary=b(600);b.tertiary=b(800);function At(n,t){if(t===void 0&&(t=2),t===0)return Math.round(n);var e=Math.pow(10,t);return Math.round(n*e)/e}var z=function(n){return s(Mt,n)},Mt={default:"light",type:"COLOR",modes:{dark:Tt,light:Nt}};function Tt(n){return O(C(n/2.5))}function Nt(n){return w(C(At(n/-1.667+900,0)))}z.primary=z(0);z.secondary=z(600);var It="linear-gradient(to right,#00AA59,#00B191,#0098C8)",Kt="linear-gradient(to right,#00BE4C,#00B285,#0095D5)",Ut={default:"light",type:"COLOR",modes:{dark:It,light:Kt}},_t=s(Ut),Ht="linear-gradient(to right,#00AA59,#00B191,#0098C8)",Wt="linear-gradient(to right,#00B655,#00B285,#00A9D5)",Yt={default:"light",type:"COLOR",modes:{dark:Ht,light:Wt}},Zt=s(Yt),qt=dn(400),Pt=dn(400),Xt={default:"light",type:"COLOR",modes:{dark:qt,light:Pt}},Gt=s(Xt),Vt={New:Gt,sm:_t,xl:Zt},Jt={background:R,format:Yn,rainbow:ct,livestream:pt,status:zt,stroke:Et,surface:b,text:z,upsell:Vt},Qt=function(n){return s(ne,n)},ne={default:"light",type:"COLOR",modes:{dark:te,light:ee}};function te(n){var t=.15+n/7500,e=.75+n/1e3;return x(Z||(Z=p([`
    border: `,"px solid rgba(255, 255, 255, ",`);
    box-shadow: `,", ",`;
  `],[`
    border: `,"px solid rgba(255, 255, 255, ",`);
    box-shadow: `,", ",`;
  `])),e,t,pn(n),vn(n))}function ee(n){var t=1+n/2e3;return x(q||(q=p([`
    border: `,"px solid ",`;
    box-shadow: `,", ",`;
  `],[`
    border: `,"px solid ",`;
    box-shadow: `,", ",`;
  `])),t,sn(cn,.025),pn(n),vn(n))}function vn(n){return hn({blur:10+n/500,spread:.5+n/2e3,opacity:n/1e5+n/7500})}function pn(n){return hn({offsetY:10,blur:6+n/500,spread:-5+n/2e3,opacity:n/2e4+n/9e3})}function hn(n){var t=n.offsetX,e=t===void 0?0:t,r=n.offsetY,a=r===void 0?0:r,i=n.blur,l=i===void 0?3:i,o=n.spread,d=o===void 0?1:o,h=n.color,y=h===void 0?cn:h,g=n.opacity,L=g===void 0?.2:g;return`
  `.concat(e,`px
  `).concat(a,`px
  `).concat(l,`px
  `).concat(d,`px
  `).concat(sn(y,L),`
`)}var Z,q,re=function(n){return"".concat(n*.25/50,"rem")},ae=function(n){return re(n)},ie=function(n){return s(oe,n)},oe={default:"desktop",type:"SIZE",modes:{desktop:le}};function le(n){n=n+100;var t=1.4,e=Math.pow(t,n/100),r=8.5+3*e/1.618,a=Math.round(r*1)/1,i=Math.max(a,10);return i}var de={size:ie},gn={color:Jt,edge:Qt,space:ae,typography:de},mn=A.span(X||(X=p([`
  display: inline;
  font-size: `,`;
  letter-spacing: 0.0125rem;
  line-height: 1.25;
  border: 0;
  color: `,`;
  `,`;
`],[`
  display: inline;
  font-size: `,`;
  letter-spacing: 0.0125rem;
  line-height: 1.25;
  border: 0;
  color: `,`;
  `,`;
`])),function(n){return m(gn.typography.size(n.size))},bn,un),P=A.input(G||(G=p([`
  background: transparent;
  display: inline;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  letter-spacing: 0.0125rem;
  line-height: 1.25;
  font-size: `,`;
  color: `,`;
  `,`;
`],[`
  background: transparent;
  display: inline;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  letter-spacing: 0.0125rem;
  line-height: 1.25;
  font-size: `,`;
  color: `,`;
  `,`;
`])),function(n){return m(gn.typography.size(n.size))},bn,un);function bn(n){var t=n.format,e=n.status,r=n.theme;return r.formats[e||t]}var X,G;function se(n){if(n===void 0&&(n=null),!n)return[null];var t=!0,e=!0,r=V({style:n,layout:t}),a=V({style:n,display:e});return[r,a]}function V(n){var t=n.style,e=n.layout,r=e===void 0?!1:e,a=n.display,i=a===void 0?!1:a,l={},o={};if(Object.keys(t).map(function(d){return ce.includes(d)?l[d]=t[d]:o[d]=t[d]}),r)return c({},l);if(i)return c({},o);console.warn("Style split type not provided!")}var ce=["alignSelf","bottom","display","flex","flexBasis","float","height","left","margin","marginBottom","marginLeft","marginRight","marginTop","maxHeight","maxWidth","minHeight","minWidth","position","right","top","width","flexGrow","flexShrink","gridArea","gridColumn","gridColumnEnd","gridColumnStart","gridRow","gridRowEnd","gridRowStart","justifySelf","placeSelf"];function fe(n){return n==null?void 0:n.getBoundingClientRect()}var Oe={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},ue=A.div(en||(en=p([`
  `,`
`],[`
  `,`
`])),function(n){var t=n.parent,e=n.focused,r=n.variant,a=n.radius,i=a===void 0?6:a,l=n.distance,o=l===void 0?4:l,d=n.isKeyboardOnly,h=d===void 0?!1:d,y=r==="underline"&&x(Q||(Q=p([`
        border-radius: 0;
        border-top-color: rgba(0, 0, 0, 0) !important;
        border-left-color: rgba(0, 0, 0, 0) !important;
        border-right-color: rgba(0, 0, 0, 0) !important;
      `],[`
        border-radius: 0;
        border-top-color: rgba(0, 0, 0, 0) !important;
        border-left-color: rgba(0, 0, 0, 0) !important;
        border-right-color: rgba(0, 0, 0, 0) !important;
      `]))),g=h?":focus-visible":":focus";return x(tn||(tn=p([`
      z-index: 1;
      top: `,`;
      left: `,`;
      position: absolute;
      width: calc(100% + `,`);
      height: calc(100% + `,`);
      pointer-events: none;
      border-radius: `,`;
      border: `," solid ",`;
      opacity: 0;
      transition: 150ms ease-in-out;

      `,"",` > &,
      `,"",` ~ &,
      `,"",` ~ div > & {
        opacity: 1;
      }

      `,`

      `,`;
    `],[`
      z-index: 1;
      top: `,`;
      left: `,`;
      position: absolute;
      width: calc(100% + `,`);
      height: calc(100% + `,`);
      pointer-events: none;
      border-radius: `,`;
      border: `," solid ",`;
      opacity: 0;
      transition: 150ms ease-in-out;

      `,"",` > &,
      `,"",` ~ &,
      `,"",` ~ div > & {
        opacity: 1;
      }

      `,`

      `,`;
    `])),m(o*-1),m(o*-1),m(o*2),m(o*2),m(i),m(2),M(500),t,g,t,g,t,g,e&&x(nn||(nn=p([`
        opacity: 1;
      `],[`
        opacity: 1;
      `]))),y)}),J="'Helvetica Neue', Helvetica, Arial, sans-serif;";Rn(rn||(rn=p([`

  :root {
    color-scheme: `,`
  }

  html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: `,`;
    min-height: 100%;
    color: `,`;
    background: `,`;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
    overflow-x: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit
  }

  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, figure, p, pre, ul, li {
    margin: 0;
    padding: 0;
  }

  input {
    font-family: `,`;
  }

  button {
    background: transparent;
    border-color: transparent;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`],[`

  :root {
    color-scheme: `,`
  }

  html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: `,`;
    min-height: 100%;
    color: `,`;
    background: `,`;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
    overflow-x: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit
  }

  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, figure, p, pre, ul, li {
    margin: 0;
    padding: 0;
  }

  input {
    font-family: `,`;
  }

  button {
    background: transparent;
    border-color: transparent;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`])),function(n){var t=n.theme;return t.name},J,function(n){var t=n.theme;return t.content.color2},function(n){var t=n.theme;return t.content.background},J);var Q,nn,tn,en,rn,ve=fn(pe);function pe(n){var t=n.children,e=n.className,r=n.element,a=r===void 0?"span":r,i=n.format,l=i===void 0?"soft":i,o=n.forwardRef,d=n.onBlur,h=n.onChange,y=n.onFocus,g=n.onKeyUp,L=n.placeholder,T=n.size,yn=n.style,N=D(n,["children","className","element","format","forwardRef","onBlur","onChange","onFocus","onKeyUp","placeholder","size","style"]),I=j(k.useReducer(he,{text:t,width:0,focus:!1}),2),E=I[0],F=I[1],S=E.text,B=E.width,K=E.focus,U=k.useRef(null),v=k.useRef(null),_=j(se(yn),2),kn=_[0],H=_[1];k.useEffect(function(){var f=fe(U.current).width;B!==f&&F(["widthSet",f])},[S,B]);function W(f){var u;y&&y(f),F(["focusSet",!0]),(u=v==null?void 0:v.current)===null||u===void 0||u.focus()}function $n(f){var u;d&&d(f),F(["focusSet",!1]),(u=v==null?void 0:v.current)===null||u===void 0||u.blur()}function xn(f){h&&h(f),F(["textSet",f.target.value])}function On(f){var u;g&&g(f),f.key==="Enter"&&((u=v==null?void 0:v.current)===null||u===void 0||u.blur())}return $.createElement("div",{style:c({position:"relative",display:"inline-block"},kn),className:e},$.createElement(mn,c({as:a,children:S.length>0?S:L,className:e,format:l,onClick:W,ref:U,size:T},N,{style:c(c({},H),{opacity:K?0:1,margin:0})})),$.createElement(P,c({className:e,defaultValue:S,format:l,onBlur:$n,onChange:xn,onFocus:W,onKeyUp:On,ref:me(o,v),size:T,type:"text"},N,{style:c(c({},H),{width:B,opacity:K?1:0,margin:0})})),$.createElement(ue,{parent:P}))}function he(n,t){var e=j(t,2),r=e[0],a=e[1];switch(r){case"textSet":return c(c({},n),{text:ge(a)});case"widthSet":return c(c({},n),{width:a});case"focusSet":return c(c({},n),{focus:a})}}var ge=function(n){return n.replace(/ /g," ")};function me(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return function(e){var r,a;try{for(var i=wn(n),l=i.next();!l.done;l=i.next()){var o=l.value;typeof o=="function"?o(e):o&&(o.current=e)}}catch(d){r={error:d}}finally{try{l&&!l.done&&(a=i.return)&&a.call(i)}finally{if(r)throw r.error}}}}var we=fn(be);function be(n){var t=n.contentEditable,e=n.element,r=e===void 0?"span":e,a=n.format,i=a===void 0?"soft":a,l=n.size,o=l===void 0?300:l,d=D(n,["contentEditable","element","format","size"]);return t?$.createElement(ve,c({format:i,size:o},d)):$.createElement(mn,c({as:r,format:i,size:o},d))}export{ue as F,we as T,un as a,Oe as b,gn as c,fe as g,se as u,fn as w};
//# sourceMappingURL=Text.esm.e1369d6c.js.map
