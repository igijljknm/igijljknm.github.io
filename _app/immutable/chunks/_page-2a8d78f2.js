import{_ as i}from"./preload-helper-41c905a7.js";const n=(e,o)=>{const t=e[o];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((s,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+o)))})};async function a({params:e}){const o=await n(Object.assign({"../../../lib/posts/blogs.svx":()=>i(()=>import("./blogs-314016db.js"),["./blogs-314016db.js","./index-c75120f7.js"],import.meta.url),"../../../lib/posts/post.svx":()=>i(()=>import("./post-b9930210.js"),["./post-b9930210.js","./index-c75120f7.js"],import.meta.url),"../../../lib/posts/start.svx":()=>i(()=>import("./start-92a23252.js"),["./start-92a23252.js","./index-c75120f7.js"],import.meta.url)}),`../../../lib/posts/${e.path}.svx`),{title:t,date:s,keywords:r}=o.metadata;return{content:o.default,title:t,date:s,keywords:r}}const u=Object.freeze(Object.defineProperty({__proto__:null,load:a},Symbol.toStringTag,{value:"Module"}));export{u as _,a as l};