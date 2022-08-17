import{u as c,o as f,e as _,b as o,g as e,w as l,F as w,H as g,a as r,n as V,m as b,i as k}from"./app.34ca1ca6.js";import{J as v}from"./AuthenticationCard.d1214215.js";import{_ as x}from"./AuthenticationCardLogo.2fe2ff04.js";import{_ as y}from"./Button.6dc80177.js";import{_ as i,a as m}from"./InputError.acd87b17.js";import{_ as n}from"./Label.30d60e3b.js";import"./_plugin-vue_export-helper.cdc0426e.js";const P=["onSubmit"],$={class:"mt-4"},h={class:"mt-4"},C={class:"flex items-center justify-end mt-4"},F=k(" Reset Password "),J={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,a)=>(f(),_(w,null,[o(e(g),{title:"Reset Password"}),o(v,null,{logo:l(()=>[o(x)]),default:l(()=>[r("form",{onSubmit:b(u,["prevent"])},[r("div",null,[o(n,{for:"email",value:"Email"}),o(i,{id:"email",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=t=>e(s).email=t),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),r("div",$,[o(n,{for:"password",value:"Password"}),o(i,{id:"password",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>e(s).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),r("div",h,[o(n,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>e(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),r("div",C,[o(y,{class:V({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:l(()=>[F]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{J as default};
