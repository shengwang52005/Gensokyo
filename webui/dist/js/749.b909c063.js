"use strict";(globalThis["webpackChunkfrontend"]=globalThis["webpackChunkfrontend"]||[]).push([[749],{90136:(e,o,n)=>{n.d(o,{Z:()=>i});var a=n(59835),l=n(65987);const t=(0,a.h)("div",{class:"q-space"}),i=(0,l.L)({name:"QSpace",setup(){return()=>t}})},85300:(e,o)=>{function n(e,o,n,a,l,t){let i=0,u=0,s=0,r=0;const c=(1<<a)-1;while(s<e.length){const d=e[s]-l;i+=n;while(i>=a){if(i-=a,o[r++]=u+(d>>i)+t,r===o.length)return;u=0}u+=d<<a-i&c,s++}i&&(o[r++]=u+t)}function a(e){return(new TextEncoder).encode(e)}function l(e){"string"===typeof e&&(e=a(e));const o=new Uint16Array(Math.ceil(4*e.length/7)+1);return n(e,o,8,14,0,19968),o[o.length-1]=e.length%7+15616,o}function t(e){const o=new Uint16Array(e.length);for(let n=0;n<e.length;n++)o[n]=e.charCodeAt(n);return o}function i(e){"string"===typeof e&&(e=t(e));const o=e.length-1,a=e[o]-15616||7,l=new Uint8Array(7*Math.floor((o-1)/4)+a);return n(e,l,14,8,19968,0),l}o.Jx=o.cv=void 0,o.cv=l,o.Jx=i},87707:(e,o,n)=>{n.d(o,{Z:()=>c});var a=n(59835),l=n(60499),t=n(73512),i=function(e,o,n,a){function l(e){return e instanceof n?e:new n((function(o){o(e)}))}return new(n||(n=Promise))((function(n,t){function i(e){try{s(a.next(e))}catch(o){t(o)}}function u(e){try{s(a["throw"](e))}catch(o){t(o)}}function s(e){e.done?n(e.value):l(e.value).then(i,u)}s((a=a.apply(e,o||[])).next())}))};const u=(0,a.aZ)({__name:"ConfigFileEditor",props:{modelValue:{},language:{},theme:{}},emits:["update:modelValue"],setup(e,{emit:o}){const n=(0,l.iH)(),u=e,s=o;let r,c=!1;return(0,a.bv)((()=>{n.value?(r=t.editor.create(n.value,{value:u.modelValue,language:u.language,theme:u.theme,fontFamily:"Roboto Mono"}),r.onDidChangeModelContent((()=>i(this,void 0,void 0,(function*(){c=!0;const e=r.getValue();s("update:modelValue",e),yield(0,a.Y3)(),c=!1}))))):console.error("Editor DOM element is not available.")})),(0,a.YP)((()=>u.modelValue),(e=>{c||r.setValue(e)})),(e,o)=>((0,a.wg)(),(0,a.iD)("div",{ref_key:"dom",ref:n,class:"editor"},null,512))}});var s=n(11639);const r=(0,s.Z)(u,[["__scopeId","data-v-6e989e7a"]]),c=r},18490:(e,o,n)=>{n.r(o),n.d(o,{default:()=>P});var a,l=n(59835),t=n(60499),i=n(19302),u=n(87707),s=n(34136),r=n(85300);(function(e){e.RE=/^qdvc:(?<device>(?:[a-zA-Z0-9+/=]|[\u3D00-\u3D08\u4E00-\u8DFF])+)(?:,(?<session>(?:[a-zA-Z0-9+/=]|[\u3D00-\u3D08\u4E00-\u8DFF])+))?$/;const o=e=>/^[a-zA-Z0-9+/=]+$/.test(e);e.decodeBase64=(e,o=!1)=>o?window.atob(e):Uint8Array.from(window.atob(e),(e=>e.charCodeAt(0))),e.encodeBase64=e=>window.btoa(e instanceof Uint8Array?String.fromCharCode(...e):e);const n=(e,o=!1)=>o?(new TextDecoder).decode(r.Jx(e)):r.Jx(e),a=e=>String.fromCharCode(...r.cv(e)),l=(a,l=!1)=>o(a)?e.decodeBase64(a,l):n(a,l);function t(o){const n=e.RE.exec(o);if(!n)return null;const{device:a,session:t}=n.groups;return{device:l(a,!0),session:t?l(t,!1):void 0}}function i(o,n){const{device:l,session:t}=o;return"base64"===n?`qdvc:${e.encodeBase64(l)}${t?`,${e.encodeBase64(t)}`:""}`:`qdvc:${a(l)}${t?`,${a(t)}`:""}`}e.parse=t,e.stringify=i})(a||(a={}));var c=function(e,o,n,a){function l(e){return e instanceof n?e:new n((function(o){o(e)}))}return new(n||(n=Promise))((function(n,t){function i(e){try{s(a.next(e))}catch(o){t(o)}}function u(e){try{s(a["throw"](e))}catch(o){t(o)}}function s(e){e.done?n(e.value):l(e.value).then(i,u)}s((a=a.apply(e,o||[])).next())}))};const d=(0,l._)("div",{class:"text-h5"},"编辑设备信息文件",-1),v={class:"column"},p=(0,l._)("div",{class:"text-body"},[(0,l._)("a",{href:"https://qdvc.ilharp.cc/"},"QDVC"),(0,l.Uk)(" 导入导出 ")],-1),m={class:"q-gutter-md"},f=(0,l._)("div",{class:"text-h6"},"导出 QDVC",-1),g={style:{"max-height":"30vh","font-family":"monospace"}},h=(0,l._)("div",{class:"text-h6"},"导入 QDVC",-1),y={style:{"max-height":"30vh","font-family":"monospace"}},w=(0,l.aZ)({__name:"AccountDeviceEditorView",props:{uin:{}},setup(e){const o=(0,i.Z)(),n=e,r=(0,t.iH)(),w=(0,t.iH)(!0),b=(0,t.iH)(!1),V=(0,t.iH)(!1),C=(0,t.iH)(""),B=(0,t.iH)(!1),W=(0,t.iH)("base64");function _(){return c(this,void 0,void 0,(function*(){try{w.value=!0;const{data:e}=yield s.api.accountDeviceReadApiUinDeviceGet(n.uin);r.value=JSON.stringify(e,null,2)}catch(e){r.value=void 0}finally{w.value=!1}}))}function q(){return c(this,void 0,void 0,(function*(){if(r.value)try{w.value=!0,r.value=JSON.stringify(yield s.api.accountDeviceWriteApiUinDevicePatch(n.uin,JSON.parse(r.value)).then((e=>e.data)),null,2),o.notify({message:"设备信息修改成功",color:"positive"})}catch(e){o.notify({message:`设备信息修改失败: ${e.message}`,color:"negative"})}finally{w.value=!1}}))}function D(){return c(this,void 0,void 0,(function*(){try{w.value=!0,yield s.api.accountConfigDeleteApiUinConfigDelete(n.uin),yield _(),o.notify({message:"设备信息删除成功",color:"positive"})}catch(e){o.notify({message:"设备信息删除失败",color:"negative"})}finally{w.value=!1}}))}function k(){return c(this,void 0,void 0,(function*(){navigator.clipboard&&(yield navigator.clipboard.writeText(C.value),o.notify({message:"已复制到剪贴板",color:"positive"}))}))}function x(){return c(this,void 0,void 0,(function*(){const e=a.parse(C.value);if(e)try{B.value=!0,e.device&&(yield s.api.accountDeviceWriteApiUinDevicePatch(n.uin,JSON.parse(e.device))),e.session&&(yield s.api.accountSessionWriteApiUinSessionPatch(n.uin,{base64_content:a.encodeBase64(e.session)})),o.notify({message:"设备信息导入成功",color:"positive"})}catch(l){o.notify({message:`设备信息导入失败: ${l.message}`,color:"negative"})}finally{B.value=!1}}))}return(0,l.bv)(_),(0,l.YP)(b,(e=>c(this,void 0,void 0,(function*(){if(e)try{C.value="";const e=yield s.api.accountDeviceReadApiUinDeviceGet(n.uin).then((({data:e})=>JSON.stringify(e))),o=yield s.api.accountSessionReadApiUinSessionGet(n.uin).then((({data:e})=>a.decodeBase64(e.base64_content,!1))).catch((()=>{}));C.value=a.stringify({device:e,session:o},W.value)}catch(l){o.notify({message:`设备信息导入失败: ${l.message}`,color:"negative"})}else C.value=""})))),(0,l.YP)(W,(e=>{const o=a.parse(C.value);C.value=o?a.stringify(o,e):""})),(e,n)=>{const i=(0,l.up)("q-btn"),s=(0,l.up)("q-space"),c=(0,l.up)("q-card-section"),S=(0,l.up)("q-separator"),A=(0,l.up)("q-input"),Q=(0,l.up)("q-btn-toggle"),U=(0,l.up)("q-card-actions"),Z=(0,l.up)("q-card"),F=(0,l.up)("q-dialog"),$=(0,l.up)("q-inner-loading"),E=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(E,{class:"row q-pa-md justify-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"shadow col-12",style:{height:"calc(100vh - 5rem)"}},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"row items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{onClick:e.$router.back,flat:"",label:"返回",color:"grey",icon:"arrow_back"},null,8,["onClick"]),d,(0,l.Wm)(s),(0,l._)("div",v,[p,(0,l._)("div",m,[(0,l.Wm)(i,{class:"q-ml-md",onClick:n[0]||(n[0]=e=>V.value=!0),flat:"",round:"",color:"primary",icon:"login"}),(0,l.Wm)(i,{class:"q-ml-md",onClick:n[1]||(n[1]=e=>b.value=!0),flat:"",round:"",color:"secondary",icon:"logout"})])])])),_:1}),(0,l.Wm)(F,{modelValue:b.value,"onUpdate:modelValue":n[4]||(n[4]=e=>b.value=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[f])),_:1}),(0,l.Wm)(S),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l._)("div",g,[(0,l.Wm)(A,{modelValue:C.value,"onUpdate:modelValue":n[2]||(n[2]=e=>C.value=e),loading:C.value.length<=0,readonly:"",type:"textarea",label:"QDVC分享连接"},null,8,["modelValue","loading"])])])),_:1}),(0,l.Wm)(U,{class:"row justify-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{modelValue:W.value,"onUpdate:modelValue":n[3]||(n[3]=e=>W.value=e),"toggle-color":"secondary",flat:"",options:[{label:"Base64",value:"base64"},{label:"Base16384",value:"base16384"}]},null,8,["modelValue"]),(0,l.Wm)(i,{onClick:k,flat:"",label:"复制到剪贴板",color:"primary",icon:"content_copy"})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(F,{modelValue:V.value,"onUpdate:modelValue":n[6]||(n[6]=e=>V.value=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[h])),_:1}),(0,l.Wm)(S),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l._)("div",y,[(0,l.Wm)(A,{modelValue:C.value,"onUpdate:modelValue":n[5]||(n[5]=e=>C.value=e),loading:B.value,disable:B.value,rules:[e=>(0,t.SU)(a).RE.test(e)||"不是有效的 QDVC 链接"],type:"textarea",label:"QDVC分享连接"},null,8,["modelValue","loading","disable","rules"])])])),_:1}),(0,l.Wm)(U,{class:"row justify-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{onClick:x,flat:"",label:"应用 QDVC 配置",color:"primary",icon:"login"})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(S),(0,l.Wm)(U,{class:"q-gutter-md q-mx-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{flat:"",onClick:q,color:"primary",label:"提交修改",icon:"save"}),(0,l.Wm)(i,{flat:"",onClick:_,color:"secondary",label:"重新加载配置文件",icon:"refresh"}),(0,l.Wm)(i,{flat:"",onClick:D,color:"negative",label:"删除并重新生成配置文件",icon:"delete"})])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>["undefined"!==typeof r.value?((0,l.wg)(),(0,l.j4)(u.Z,{key:0,modelValue:r.value,"onUpdate:modelValue":n[7]||(n[7]=e=>r.value=e),language:"json",style:{height:"70vh"},theme:(0,t.SU)(o).dark.isActive?"vs-dark":"vs"},null,8,["modelValue","theme"])):(0,l.kq)("",!0),(0,l.Wm)($,{showing:w.value},null,8,["showing"])])),_:1})])),_:1})])),_:1})}}});var b=n(69885),V=n(44458),C=n(63190),B=n(68879),W=n(90136),_=n(32074),q=n(50926),D=n(66611),k=n(11821),x=n(65987),S=n(22026);const A=(0,x.L)({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:o}){const n=(0,l.Fl)((()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter((o=>!0===e[o])).map((e=>`q-btn-group--${e}`)).join(" ");return"q-btn-group row no-wrap"+(0!==o.length?" "+o:"")+(!0===e.spread?" q-btn-group--spread":" inline")}));return()=>(0,l.h)("div",{class:n.value},(0,S.KR)(o.default))}});var Q=n(99256),U=n(36073);const Z=(0,x.L)({name:"QBtnToggle",props:{...Q.Fz,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every((e=>("label"in e||"icon"in e||"slot"in e)&&"value"in e))},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:o,emit:n}){const a=(0,l.Fl)((()=>void 0!==e.options.find((o=>o.value===e.modelValue)))),t=(0,l.Fl)((()=>({type:"hidden",name:e.name,value:e.modelValue}))),i=(0,Q.eX)(t),u=(0,l.Fl)((()=>(0,U._V)(e))),s=(0,l.Fl)((()=>({rounded:e.rounded,dense:e.dense,...u.value}))),r=(0,l.Fl)((()=>e.options.map(((o,n)=>{const{attrs:a,value:l,slot:t,...i}=o;return{slot:t,props:{key:n,"aria-pressed":l===e.modelValue?"true":"false",...a,...i,...s.value,disable:!0===e.disable||!0===i.disable,color:l===e.modelValue?d(i,"toggleColor"):d(i,"color"),textColor:l===e.modelValue?d(i,"toggleTextColor"):d(i,"textColor"),noCaps:!0===d(i,"noCaps"),noWrap:!0===d(i,"noWrap"),size:d(i,"size"),padding:d(i,"padding"),ripple:d(i,"ripple"),stack:!0===d(i,"stack"),stretch:!0===d(i,"stretch"),onClick(e){c(l,o,e)}}}}))));function c(o,a,l){!0!==e.readonly&&(e.modelValue===o?!0===e.clearable&&(n("update:modelValue",null,null),n("clear")):n("update:modelValue",o,a),n("click",l))}function d(o,n){return void 0===o[n]?e[n]:o[n]}function v(){const n=r.value.map((e=>(0,l.h)(B.Z,e.props,void 0!==e.slot?o[e.slot]:void 0)));return void 0!==e.name&&!0!==e.disable&&!0===a.value&&i(n,"push"),(0,S.vs)(o.default,n)}return()=>(0,l.h)(A,{class:"q-btn-toggle",...u.value,rounded:e.rounded,stretch:e.stretch,glossy:e.glossy,spread:e.spread},v)}});var F=n(60854),$=n(69984),E=n.n($);const J=w,P=J;E()(w,"components",{QPage:b.Z,QCard:V.Z,QCardSection:C.Z,QBtn:B.Z,QSpace:W.Z,QDialog:_.Z,QSeparator:q.Z,QInput:D.Z,QCardActions:k.Z,QBtnToggle:Z,QInnerLoading:F.Z})}}]);