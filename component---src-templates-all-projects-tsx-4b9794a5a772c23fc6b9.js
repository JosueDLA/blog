(self.webpackChunkjosuedla=self.webpackChunkjosuedla||[]).push([[535],{1792:function(e,t,r){"use strict";r.d(t,{Le:function(){return o},vU:function(){return i},Wn:function(){return c},v6:function(){return l},Bx:function(){return s},t:function(){return m},Ds:function(){return u}});var n=r(9),a=r(9929),o=n.ZP.article.withConfig({displayName:"ProjectCard__ProjectCardWrapper",componentId:"sc-18zdks6-0"})(["display:grid;gap:2rem;width:100%;grid-template-columns:repeat(auto-fit,20rem);padding-bottom:4rem;justify-content:space-evenly;@media (max-width:360px){grid-template-columns:repeat(auto-fill,minmax(100%,1fr));}"]),i=n.ZP.h3.withConfig({displayName:"ProjectCard__ProjectTitle",componentId:"sc-18zdks6-1"})(["margin:0;font-size:1.8em;line-height:1.5em;text-align:center;"]),c=n.ZP.p.withConfig({displayName:"ProjectCard__ProjectDescription",componentId:"sc-18zdks6-2"})(["font-size:1em;line-height:1.5em;margin-top:1em;"]),l=n.ZP.div.withConfig({displayName:"ProjectCard__ProjectTags",componentId:"sc-18zdks6-3"})(["display:flex;align-self:center;.tag{background:rgba(255,255,255,0.5);color:var(--text-primary);text-decoration:none;transition:all,0.5s;border-radius:0.3rem;margin-right:0.5em;line-height:1.5em;font-size:0.75em;padding:0 0.5em;cursor:pointer;}"]),d=(0,n.iv)(["display:inline-block;padding:0.5rem;background:var(--accent-primary);border:1px solid var(--accent-primary);text-align:center;font-size:1rem;text-decoration:none;color:var(--text-primary);cursor:pointer;margin:0;width:30%;"," &:hover{background:transparent;}&:active{background:var(--accent-primary);}"],a.k),s=n.ZP.div.withConfig({displayName:"ProjectCard__GroupButton",componentId:"sc-18zdks6-4"})(["display:flex;align-items:center;justify-content:center;padding:1rem 0;.left{"," border-radius:0.3rem 0 0 0.3rem;border-right:1px solid black;}.right{"," border-radius:0 0.3rem 0.3rem 0;border-left:1px solid black;}"],d,d),m=n.ZP.article.withConfig({displayName:"ProjectCard",componentId:"sc-18zdks6-5"})(["position:relative;display:flex;width:90%;max-width:18rem;background-color:red;margin:auto;background:var(--bg-secondary);border:10px solid var(--bg-secondary);color:white;border-radius:1em;box-shadow:0px 1rem 1.5rem rgba(0,0,0,0.5);overflow:hidden;.project-img{width:100%;height:100%;opacity:1;}"]),u=n.ZP.div.withConfig({displayName:"ProjectCard__ProjectContent",componentId:"sc-18zdks6-6"})(['position:absolute;text-align:center;display:flex;flex-direction:column;justify-content:flex-end;height:100%;padding:1rem 1rem;bottom:0;transition:all,0.5s;&:hover{transform:rotate(0);color:var(--text-primary);}&:before,&:after{content:"";transform:scale(0);transform-origin:top left;border-radius:50%;position:absolute;left:-50%;top:-50%;z-index:-5;transition:all,0.5s;transition-timing-function:ease-in-out;}&:before{background:var(--bg-secondary);width:250%;height:250%;opacity:0.5;}&:after{background:var(--bg-secondary);width:200%;height:200%;opacity:0.5;}&:hover:before,&:hover:after{transform:scale(1);}&:hover '," .tag{background:var(--accent-primary);color:white;}"],l)},3992:function(e,t,r){"use strict";var n=r(9756),a=r(7294),o=r(5444),i=r(3403);t.Z=function(e){var t=e.demo,r=e.slug,c=e.title,l=e.children,d=(0,n.Z)(e,["demo","slug","title","children"]);return t?a.createElement(i.M,Object.assign({href:""+t,target:"_blank","aria-label":c,rel:"noreferrer"},d),l):a.createElement(o.Link,Object.assign({to:"/projects/"+r},d),l)}},7646:function(e,t,r){"use strict";r.r(t);var n=r(1804),a=r.n(n),o=r(7294),i=r(5444),c=r(3403),l=r(1870),d=r(1792),s=r(3992),m=r(264),u=r(6954),f=r(1203),g=r(643);t.default=function(e){var t=e.pageContext,r=e.data,n=e.location,p=d.Le,h=d.vU,b=d.Wn,v=d.v6,y=d.Bx,k=d.t,x=d.Ds,w=t.currentPage,C=t.numPages,P=1===w?(n.pathname+"/").replace("//","/"):(n.pathname+"/").replace("/"+w,"/").replace("//","/"),j=(P+"tags/").replace("//","/"),E=1===w,_=w===C,Z=w-1==1?""+P:""+P+(w-1),z=""+P+(w+1),N=r.allMdx.edges;return o.createElement(f.Z,null,o.createElement(g.Z,{title:"Projects",location:n}),o.createElement("main",{id:"projects-main",className:"container"},o.createElement(u.Jh,null,"Projects"),o.createElement(p,{style:{padding:"2rem 0"}},N.map((function(e){return o.createElement(k,{key:e.node.frontmatter.slug},o.createElement(l.G,{image:(0,l.e)(e.node.frontmatter.thumbnail),alt:"test"}),o.createElement(x,null,o.createElement(h,null,e.node.frontmatter.title),o.createElement(b,null,e.node.frontmatter.excerpt),o.createElement(v,null,e.node.frontmatter.tags.map((function(e,t){return o.createElement(i.Link,{key:t,className:"tag",to:""+j+a()(e.toLowerCase())},e)}))),o.createElement(y,null,o.createElement(s.Z,{demo:e.node.frontmatter.demo,slug:e.node.frontmatter.slug,title:e.node.frontmatter.title,className:"left"},"Demo"),o.createElement(c.M,{className:"right",href:e.node.frontmatter.code,target:"_blank","aria-label":"Readme Creator Code",rel:"noreferrer"},"Code"))))}))),o.createElement("div",{style:{flexGrow:1}}),o.createElement(m.ZP,{isFirst:E,isLast:_,previousPage:Z,nextPage:z})))}},3403:function(e,t,r){"use strict";var n=r(5318);t.M=void 0;var a=n(r(7154)),o=n(r(7316)),i=n(r(7294)),c=n(r(5697)),l=i.default.forwardRef((function(e,t){var r=e.children,n=(0,o.default)(e,["children"]);return i.default.createElement("a",(0,a.default)({ref:t},n,{onClick:function(e){"function"==typeof n.onClick&&n.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),n.target&&"_self"!==n.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:n.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=n.href)}}):t&&(document.location=n.href),!1}}),r)}));t.M=l,l.propTypes={href:c.default.string,target:c.default.string,onClick:c.default.func}}}]);
//# sourceMappingURL=component---src-templates-all-projects-tsx-4b9794a5a772c23fc6b9.js.map