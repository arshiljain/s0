import{r as f,j as n}from"./jsx-runtime.4acc1c87.js";import{s as x}from"./styled-components.browser.esm.ca7eda9a.js";const g=x.span`
  display: inline-block;
  padding: calc(3px * var(--badge-scale, 1)) calc(8px * var(--badge-scale, 1));
  font-size: calc(14px * var(--badge-scale, 1));
  line-height: calc(17px * var(--badge-scale, 1));
  font-family:
    ${t=>t.$fontFamily?`${t.$fontFamily}, `:""}Helvetica,
    Arial, sans-serif;
  font-weight: ${t=>t.$fontWeight};
  background-color: ${t=>t.$backgroundColor};
  color: ${t=>t.$labelColor};
  border-radius: calc(8px * var(--badge-scale, 1));
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`,m=new Set,h=({text:t,config:e,colorScheme:c,badge:o,className:r,"data-testid":d})=>{let l,i;c==="custom"?(l=(o==null?void 0:o.custom_background_color)||"#000000",i=(o==null?void 0:o.custom_label_color)||"#FFFFFF"):c==="alternative"?(l=e.alternative_background_color,i=e.alternative_label_color):(l=e.default_background_color,i=e.default_label_color);const s=(o==null?void 0:o.custom_font_weight)||e.font_weight,a=(o==null?void 0:o.custom_font_family)||e.font_family;return f.useEffect(()=>{if(a&&a!=="default"&&!m.has(a)){m.add(a);const p=document.createElement("link");p.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(a)}&display=swap`,p.rel="stylesheet",document.head.appendChild(p)}},[a]),n.jsx(g,{className:r,"data-testid":d,$backgroundColor:l,$fontFamily:a!=="default"?a:void 0,$fontWeight:s,$labelColor:i,children:t})},v=f.createContext(0),u=x.div`
  position: absolute;
  top: calc(8px * var(--badge-scale, 1));
  ${t=>t.$position==="top-right"?"right: calc(8px * var(--badge-scale, 1));":"left: calc(8px * var(--badge-scale, 1));"}

  max-width: calc(100% - 16px * var(--badge-scale, 1));
  display: flex;
  flex-flow: ${t=>t.$position==="top-right"?"row-reverse":"row"}
    wrap;
  gap: calc(6px * var(--badge-scale, 1));
  z-index: 2;
`,y=({badges:t,badgeConfig:e,"data-testid":c})=>{const o=f.useContext(v);if(!t||t.length===0||!e)return null;const{position:r}=e,d=r==="top-right"?"top-left":"top-right",l=t.find(s=>s.coming_soon),i=t.filter(s=>!s.coming_soon);return n.jsxs(n.Fragment,{children:[l&&n.jsx("div",{"data-testid":"coming-soon-overlay",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgb(0 0 0 / 0.60)",zIndex:1,pointerEvents:"none"}}),i.length>0&&n.jsx(u,{$position:r,"data-testid":c,style:{"--badge-scale":o},children:i.map((s,a)=>n.jsx(h,{text:s.text.default,config:e,colorScheme:s.color_scheme,badge:s,"data-testid":`thumbnail-badge-${a}`},a))}),l&&n.jsx(u,{$position:d,"data-testid":"coming-soon-badge",style:{"--badge-scale":o},children:n.jsx(h,{text:l.text.default,config:{...e,position:d},colorScheme:"custom",badge:l,"data-testid":"coming-soon-badge-text"})})]})};export{y as T,v as a,h as b};
//# sourceMappingURL=ThumbnailBadges.8c991641.js.map
