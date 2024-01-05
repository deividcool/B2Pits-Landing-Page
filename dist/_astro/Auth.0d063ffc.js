import{w as N,a as S,b as F}from"./runtime-dom.esm-bundler.83a7702c.js";import{t as d}from"./translate.44434bcc.js";import{s as v}from"./store.ac37cfed.js";import{u as M,L as I}from"./Loading.617f30db.js";/* empty css                        */import{l as g}from"./index.a61567a3.js";import{_ as O}from"./_plugin-vue_export-helper.c27b6911.js";import{u as C}from"./index.1a895777.js";import{i as A,r as h,f,w as V,o as z,a as l,c as n,b as a,t as r,j as w,e as c,q,l as U,p as P,k as E,s as G}from"./runtime-core.esm-bundler.10e5df62.js";import"./index.d9178191.js";const J={__name:"Auth",setup(u,{expose:t}){t();const o=C(v),e=A({email:"",password:""}),m=h(!1),_={email:[{type:"email",required:!0}],password:[{type:"string",required:!0,min:8}]},{pass:s,isFinished:b,errorFields:T}=M(e,_),j=f(()=>{if(o.value.auth==="sign_in")return d("login");if(o.value.auth==="sign_up")return d("register");if(o.value.auth==="recover_password")return d("recover")}),p=h(!1),y=h(!1),x=()=>{v.set({type:o.value.type,auth:o.value.auth,link:null,show:!1})},H=f(()=>o.value.type==="sign_up"&&!y.value?!1:!p.value&&b.value&&s.value),k=f(()=>({email:e.email,password:e.password,type:o.value.type})),L=()=>{p.value=!0,fetch("/api/auth",{method:"POST",body:JSON.stringify(k.value),headers:{"Content-Type":"application/json"}}).then(i=>i.json()).then(i=>{i.status==="ok"?(e.email="",e.name="",x()):g.error(d(`${o.value.type}_error`))}).catch(i=>{console.log("error",i),g.error(d(`${o.value.type}_error`))}).finally(()=>{p.value=!1})};V(o,i=>{i.auth==="recover_password"?e.password="xxx-xxx-xxx-xxx-xxx":e.password=""},{immediate:!1}),z(()=>{m.value=!0});const D={$showDialog:o,form:e,showForm:m,rules:_,pass:s,isFinished:b,errorFields:T,label:j,loading:p,agreeTos:y,hide:x,canSubmit:H,formData:k,submit:L,ref:h,watch:V,reactive:A,computed:f,onMounted:z,get t(){return d},get useStore(){return C},get showDialog(){return v},get useAsyncValidator(){return M},Loading:I,get toast(){return g}};return Object.defineProperty(D,"__isScriptSetup",{enumerable:!1,value:!0}),D}},B=u=>(P("data-v-f6a8a267"),u=u(),E(),u),Q=["onSubmit"],K={class:"pb-4"},R={class:"subtitle"},W={class:"input-group"},X={class:"peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"},Y={key:0,class:"input-group"},Z=["autocomplete"],$={class:"peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"},ee={class:"flex w-full justify-between gap-4"},ae={key:0,class:"inline-flex items-center"},te={class:"relative -ml-4 flex cursor-pointer items-center rounded-full p-3",for:"tac","data-ripple-dark":"true"},oe=B(()=>a("div",{class:"pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor","stroke-width":"1"},[a("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})])],-1)),se={class:"mt-px cursor-pointer select-none text-xs",for:"tac"},re={class:"flex content-start justify-end"},le=["disabled"],ne={class:"-mr-1 h-5 w-5",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve",style:{"enable-background":"new 0 0 12 12"},viewBox:"0 0 12 12"},ie=B(()=>a("g",{class:"-translate-x-[20%] transition-transform duration-300 group-hover:translate-x-0"},[a("path",{d:"M9.2 6.4 6.4 9.1c-.1.1-.1.4 0 .5s.4.1.5 0l3.4-3.4c.1-.1.1-.4 0-.5L7 2.4c-.1-.1-.4-.1-.5 0-.1.1-.1.4 0 .5l2.7 2.7c.4.4.4.4 0 .8z",fill:"currentColor",stroke:"currentColor","stroke-width":"0.5"}),a("g",null,[a("path",{class:"origin-right -translate-x-[8%] scale-x-0 transition-transform duration-300 group-hover:scale-x-75",d:"M9.6 5.6H1.9c-.2 0-.3.2-.3.4s.2.4.4.4h7.7c.2 0 .4-.2.4-.4s-.3-.4-.5-.4z",fill:"currentColor",stroke:"currentColor","stroke-width":"0.5"})])],-1)),ce=[ie],de={key:1,class:"grid gap-2"},ue=G('<button type="button" class="btn-square surface-overlay mr-auto" data-v-f6a8a267><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="h-6 w-6" data-v-f6a8a267><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z" data-v-f6a8a267></path><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z" data-v-f6a8a267></path><path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z" data-v-f6a8a267></path><path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z" data-v-f6a8a267></path><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z" data-v-f6a8a267></path></svg>Google </button><button type="button" class="btn-square surface-overlay mr-auto" data-v-f6a8a267><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="h-6 w-6" data-v-f6a8a267><rect width="118.35" height="118.35" x="4.83" y="4.83" fill="#3d5a98" rx="6.53" ry="6.53" data-v-f6a8a267></rect><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z" data-v-f6a8a267></path></svg>Facebook </button>',2),pe=[ue],he={class:"grid gap-2 text-sm"},fe={key:0},me=["data-replace"],_e={key:1},ve=["data-replace"],ge={key:2},we=["data-replace"];function be(u,t,o,e,m,_){return l(),n("div",null,[e.showForm?(l(),n("form",{key:0,onSubmit:N(e.submit,["prevent"]),class:"grid gap-4"},[a("div",K,[a("h2",R,r(e.t(`${e.$showDialog.auth}`)),1)]),a("div",W,[w(a("input",{type:"email",name:"email",autocomplete:"username",placeholder:" ",class:"peer","onUpdate:modelValue":t[0]||(t[0]=s=>e.form.email=s)},null,512),[[S,e.form.email]]),a("label",X,r(e.t("email"))+" *",1)]),e.$showDialog.auth!=="recover_password"?(l(),n("div",Y,[w(a("input",{type:"password",name:"password",autocomplete:e.$showDialog.auth==="sign_in"?"current-password":"new-password",placeholder:" ",class:"peer","onUpdate:modelValue":t[1]||(t[1]=s=>e.form.password=s)},null,8,Z),[[S,e.form.password]]),a("label",$,r(e.t("password"))+" *",1)])):c("",!0),a("div",ee,[a("div",null,[e.$showDialog.auth==="sign_up"?(l(),n("div",ae,[a("label",te,[w(a("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>e.agreeTos=s),id:"tac",type:"checkbox",name:"terms-and-conditions",class:"before:content[''] border-blue-gray-800 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10"},null,512),[[F,e.agreeTos]]),oe]),a("label",se,r(e.t("terms-and-conditions")),1)])):c("",!0)]),a("div",re,[a("button",{class:"btn surface-primary group mb-auto ml-auto",type:"submit",disabled:!e.canSubmit},[a("span",null,r(e.t(e.label)),1),(l(),n("svg",ne,ce))],8,le)])]),e.$showDialog.auth!=="recover_password"?(l(),n("div",de,pe)):c("",!0),a("div",he,[e.$showDialog.auth==="sign_in"?(l(),n("div",fe,[a("button",{class:"btn-replace font-semibold",type:"button","data-replace":e.t("forgot_password"),onClick:t[3]||(t[3]=s=>e.showDialog.set({type:"auth",auth:"recover_password",link:"auth",show:!0}))},[a("span",null,r(e.t("forgot_password")),1)],8,me)])):c("",!0),e.$showDialog.auth!=="sign_in"?(l(),n("div",_e,[q(r(e.t("already_an_account"))+" ",1),a("button",{class:"btn-replace font-semibold",type:"button","data-replace":e.t("sign_in"),onClick:t[4]||(t[4]=s=>e.showDialog.set({type:"auth",auth:"sign_in",link:"auth",show:!0}))},[a("span",null,r(e.t("sign_in")),1)],8,ve)])):c("",!0),e.$showDialog.auth==="sign_in"?(l(),n("div",ge,[q(r(e.t("no_account"))+" ",1),a("button",{class:"btn-replace font-semibold",type:"button","data-replace":e.t("sign_up"),onClick:t[5]||(t[5]=s=>e.showDialog.set({type:"auth",auth:"sign_up",link:"auth",show:!0}))},[a("span",null,r(e.t("sign_up")),1)],8,we)])):c("",!0)]),U(e.Loading,{loading:e.loading},null,8,["loading"])],40,Q)):c("",!0)])}const qe=O(J,[["render",be],["__scopeId","data-v-f6a8a267"]]);export{qe as default};