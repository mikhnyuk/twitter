import{u as _,o as c,e as f,b as e,g as a,w as m,F as g,H as w,a as r,f as h,L as v,n as y,m as V,i as u}from"./app.cd3ed65b.js";import{J as k}from"./AuthenticationCard.ff21b494.js";import{_ as x}from"./AuthenticationCardLogo.fc704274.js";import{_ as b}from"./Button.e101e754.js";import{_ as n,a as i}from"./InputError.49a7c179.js";import{_ as U}from"./Checkbox.27b6fb20.js";import{_ as l}from"./Label.833d6e50.js";import"./_plugin-vue_export-helper.cdc0426e.js";const $=["onSubmit"],P={class:"mt-4"},q={class:"mt-4"},C={class:"mt-4"},F={class:"mt-4"},N={key:0,class:"mt-4"},A={class:"flex items-center"},B={class:"ml-2"},R=u(" I agree to the "),S=["href"],T=u(" and "),j=["href"],E={class:"flex items-center justify-end mt-4"},H=u(" Already registered? "),J=u(" Register "),W={__name:"Register",setup(L){const s=_({name:"",email:"",username:"",password:"",password_confirmation:"",terms:!1}),p=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(d,t)=>(c(),f(g,null,[e(a(w),{title:"Register"}),e(k,null,{logo:m(()=>[e(x)]),default:m(()=>[r("form",{onSubmit:V(p,["prevent"])},[r("div",null,[e(l,{for:"name",value:"Name"}),e(n,{id:"name",modelValue:a(s).name,"onUpdate:modelValue":t[0]||(t[0]=o=>a(s).name=o),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(i,{class:"mt-2",message:a(s).errors.name},null,8,["message"])]),r("div",P,[e(l,{for:"email",value:"Email"}),e(n,{id:"email",modelValue:a(s).email,"onUpdate:modelValue":t[1]||(t[1]=o=>a(s).email=o),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),e(i,{class:"mt-2",message:a(s).errors.email},null,8,["message"])]),r("div",q,[e(l,{for:"username",value:"Username"}),e(n,{id:"username",modelValue:a(s).username,"onUpdate:modelValue":t[2]||(t[2]=o=>a(s).username=o),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),e(i,{class:"mt-2",message:a(s).errors.username},null,8,["message"])]),r("div",C,[e(l,{for:"password",value:"Password"}),e(n,{id:"password",modelValue:a(s).password,"onUpdate:modelValue":t[3]||(t[3]=o=>a(s).password=o),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),r("div",F,[e(l,{for:"password_confirmation",value:"Confirm Password"}),e(n,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":t[4]||(t[4]=o=>a(s).password_confirmation=o),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(i,{class:"mt-2",message:a(s).errors.password_confirmation},null,8,["message"])]),d.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(c(),f("div",N,[e(l,{for:"terms"},{default:m(()=>[r("div",A,[e(U,{id:"terms",checked:a(s).terms,"onUpdate:checked":t[5]||(t[5]=o=>a(s).terms=o),name:"terms"},null,8,["checked"]),r("div",B,[R,r("a",{target:"_blank",href:d.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service",8,S),T,r("a",{target:"_blank",href:d.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy",8,j)])])]),_:1})])):h("",!0),r("div",E,[e(a(v),{href:d.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 dark:text-neutral-200 hover:text-gray-900 dark:hover:text-neutral-50"},{default:m(()=>[H]),_:1},8,["href"]),e(b,{class:y(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:m(()=>[J]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{W as default};
