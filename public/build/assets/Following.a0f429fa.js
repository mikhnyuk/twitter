import{o as i,e as u,b as t,g as a,w as r,F as c,H as d,a as s,L as l,t as o}from"./app.bb5f82c9.js";import{a as f,r as m,b as h}from"./Index.c2fa36ee.js";import{r as g,_ as p}from"./Index.ca8f01f6.js";import"./ApplicationLogo.7eb9ef13.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x={class:"max-w-[37.5rem] md:min-w-[37.5rem] border-x-[0.5px] dark:border-neutral-600"},b={class:"sticky flex items-center gap-8 top-0 px-4 py-2 bg-white dark:bg-neutral-900"},w={class:"text-xs text-gray-500 font-normal"},k={class:"laptop:block hidden px-8 space-y-1"},_={class:"sticky top-0 py-3 bg-white dark:bg-neutral-900 z-20"},y={class:"flex items-center gap-4 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 focus-within:bg-neutral-50 dark:focus-within:bg-neutral-800 group focus-within:ring-1 ring-sky-500 rounded-full"},$=s("input",{type:"text",placeholder:"Search Twitter",class:"text-base p-0 placeholder:text-base border-none focus:ring-0 focus:outline-none bg-transparent"},null,-1),N={__name:"Following",props:{user:Object,following:Object},setup(e){return(n,v)=>(i(),u(c,null,[t(a(d),{title:`${e.user.data.name} @(${e.user.data.username})`},null,8,["title"]),t(f,null,{default:r(()=>[s("div",x,[s("section",b,[t(a(l),{href:n.route("show-user-profile",e.user.data.username)},{default:r(()=>[t(a(g),{class:"w-4 h-4"})]),_:1},8,["href"]),t(a(l),{href:n.route("show-user-profile",e.user.data.username),class:"text-lg font-bold flex flex-col"},{default:r(()=>[s("span",null,o(e.user.data.name),1),s("span",w,"@"+o(e.user.data.username),1)]),_:1},8,["href"])]),t(p,{class:"md:w-[37.5rem]",user:e.user,users:e.following,page:"following"},null,8,["user","users"])]),s("div",k,[s("section",_,[s("div",y,[t(a(m),{class:"w-5 h-5 text-neutral-500 dark:text-neutral-200 group-focus-within:text-sky-500"}),$])]),t(h)])]),_:1})],64))}};export{N as default};
