;/*FB_PKG_DELIM*/

__d("LexicalReactExtension",["cr:13735"],(function(t,n,r,o,a,i){a.exports=n("cr:13735")}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<3f3bc068fcd1bd0ce3ea2a85132b79eb>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionComposer.prod",["Lexical","LexicalExtensionGetExtensionDependencyFromEditor","LexicalExtensionLexicalBuilder","LexicalReactExtension","LexicalReactProviderExtension","react"],(function $module_LexicalExtensionComposer_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";var _require_closure_react;var o=_require_closure_react||(_require_closure_react=require("react")),c=_require_closure_react;exports.LexicalExtensionComposer=function(_ref){var s=_ref.extension,x=_ref.children,u=_ref.contentEditable;var a=o.useMemo(function(){return require("LexicalExtensionLexicalBuilder").LexicalBuilder.fromExtensions([require("LexicalReactProviderExtension").ReactProviderExtension,require("Lexical").configExtension(require("LexicalReactExtension").ReactExtension,void 0===u?{}:{contentEditable:u}),s]).buildEditor();},[u,s]);o.useEffect(function(){var e=!1;return queueMicrotask(function(){e=!0;}),function(){e&&a.dispose();};},[a]);var E=require("LexicalExtensionGetExtensionDependencyFromEditor").getExtensionDependencyFromEditor(a,require("LexicalReactExtension").ReactExtension).output.Component;
return c.jsx(E,{children:x});};}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<c63f7513a4cd09dbe6d609a50b856f03>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalReactExtension.prod",["Lexical","LexicalComposerContext","LexicalContentEditable","LexicalErrorBoundary","LexicalReactProviderExtension","ReactDOM","react"],(function $module_LexicalReactExtension_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";var _require_closure_react;var i=_require_closure_react||(_require_closure_react=require("react")),a=_require_closure_react;function s(_ref){var e=_ref.contentEditable,r=_ref.children;
return a.jsxs(a.Fragment,{children:[e,r]});}var l={EditorChildrenComponent:s,ErrorBoundary:require("LexicalErrorBoundary").LexicalErrorBoundary,contentEditable:a.jsx(require("LexicalContentEditable").ContentEditable,{}),decorators:[]},d={build:function build(e,r,t){t.getPeer(require("LexicalReactProviderExtension").ReactProviderExtension.name)||function(e){var n=new URL("https://lexical.dev/docs/error"),t=new URLSearchParams();t.append("code",e);for(var _len=arguments.length,r=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){r[_key-1]=arguments[_key];}for(var _e of r)t.append("v",_e);throw n.search=t.toString(),Error("Minified Lexical error #"+e+"; visit "+n.toString()+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");}(321,[].concat(Array.from(t.getDirectDependentNames())).join(" "));var s=[e,{getTheme:function getTheme(){return e._config.theme;}}],l=function(e,r){var n=r[0],t=e.decorators.map(function(e){return"function"==typeof e?a.jsx(e,{context:r}):e;});return function(s){var _s$EditorChildrenComp=s.EditorChildrenComponent,l=_s$EditorChildrenComp===void 0?e.EditorChildrenComponent:_s$EditorChildrenComp,_s$ErrorBoundary=s.ErrorBoundary,d=_s$ErrorBoundary===void 0?e.ErrorBoundary:_s$ErrorBoundary,_s$contentEditable=s.contentEditable,u=_s$contentEditable===void 0?e.contentEditable:_s$contentEditable,x=s.children,E=function(e,r){var _i$useMemo=i.useMemo(function(){return[function(r){return e.registerDecoratorListener(r);},function(){return e.getDecorators();}];},[e]),n=_i$useMemo[0],t=_i$useMemo[1],o=i.useSyncExternalStore(n,t,t),s=function(e){var _i$useMemo2=i.useMemo(function(){return[e.registerRootListener.bind(e),e.getRootElement.bind(e)];},[e]),r=_i$useMemo2[0],n=_i$useMemo2[1];return i.useSyncExternalStore(r,n,n);}(e);return i.useMemo(function(){var n=function n(r){return e._onError(r);},t=[];for(var _s in o){var _l=e.getElementByKey(_s);if(null!==_l){var _e2=a.jsx(r,{onError:n,children:a.jsx(i.Suspense,{fallback:null,children:o[_s]})});t.push(require("ReactDOM").createPortal(_e2,_l,_s));}}return t;},[r,o,e,s]);}(n,d),f=i.useMemo(function(){return t.map(function(e,r){return a.jsx(d,{onError:function onError(e){n._onError(e);},children:a.jsx(i.Suspense,{fallback:null,children:e})},r);});},[d]);
return a.jsx(require("LexicalComposerContext").LexicalComposerContext.Provider,{value:r,children:a.jsxs(l,{context:r,contentEditable:u,children:[x,f,E]})});};}(r,s);return{Component:l,context:s};},config:l,mergeConfig:function mergeConfig(e,r){var n=require("Lexical").shallowMergeConfig(e,r);return r.decorators&&(n.decorators=r.decorators.length>0?[].concat(Array.from(e.decorators),Array.from(r.decorators)):e.decorators),n;},name:"@lexical/react/React",peerDependencies:[["@lexical/react/ReactProvider"]]};exports.DefaultEditorChildrenComponent=s,exports.ReactExtension=d;}),null);