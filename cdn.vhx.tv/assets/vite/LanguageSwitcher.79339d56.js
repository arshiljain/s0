import{j as s}from"./jsx-runtime.4acc1c87.js";import{P as o}from"./index.7e6a3bff.js";import"./index.7b5373c1.js";import{s as n}from"./styled-components.browser.esm.ca7eda9a.js";import{d as i}from"./deviceSizes.35787731.js";import{g as p,d,D as r,h as c,s as g}from"./intl.helpers.31b5f70f.js";import{I as m}from"./provider.12c5cbb8.js";import{F as u}from"./message.52ec6282.js";const h=n.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  label {
    color: #bebebe;
  }
  @media ${i.mobile} {
    display: block;

    label {
      margin-top: 1rem;
    }
  }
`,x=n.select`
  margin-left: 8px;
  border-radius: 3px;
  height: 30px;
  width: 100px;
  padding: 0 5px;
`,l=t=>{const e=p();return s.jsx(m,{locale:e,messages:d(e),textComponent:"span",children:s.jsxs(h,{"data-testid":"language-switcher",children:[s.jsx(u,{id:"site.language",defaultMessage:"Language",children:a=>s.jsxs("label",{htmlFor:"language-switcher",children:[a,":"]})}),s.jsx(x,{id:"language-switcher",defaultValue:e.toLowerCase().slice(0,2),onChange:w,children:f(t)})]})})},f=t=>{const e=t.supportedLocales;return e.indexOf(r)===-1&&e.push(r),e.sort().map(a=>s.jsx("option",{value:a,children:L(a)},a))},L=t=>{let e=c(t);return e.split("")[0].toUpperCase()+e.slice(1,e.length)},w=t=>{const e=t.target.value;g(e),window.location.pathname=window.location.pathname};l.propTypes={supportedLocales:o.arrayOf(o.string).isRequired};l.defaultProps={supportedLocales:[]};export{l as L};
//# sourceMappingURL=LanguageSwitcher.79339d56.js.map
