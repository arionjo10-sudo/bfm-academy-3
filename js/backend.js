/* ================= Shared records outside Claude (VS Code / your own web hosting) =================
   Messages, notifications, approvals, announcements and events need one shared place that the
   students' browsers and the director's browser can both reach. Inside Claude that place is built in.
   Everywhere else this file connects the app to a free Firebase Realtime Database.
   It stays OFF until js/config.js is filled in. Setup steps: SETUP-SHARED-RECORDS.md                  */
(function(){
  'use strict';
  const cfg=window.BFM_CONFIG||{};
  if(window.claude||!cfg.databaseURL||!cfg.apiKey)return;
  const DBU=String(cfg.databaseURL).replace(/\/+$/,''),KEY=cfg.apiKey;
  const LS='bfm-fb-auth',SS='bfm-fb-director';
  const now=()=>Date.now();
  const jget=(s,k)=>{try{return JSON.parse(s.getItem(k)||'null');}catch(e){return null;}};
  const jset=(s,k,v)=>{try{if(v==null)s.removeItem(k);else s.setItem(k,JSON.stringify(v));}catch(e){}};
  let anon=jget(localStorage,LS),dir=jget(sessionStorage,SS),anonP=null;
  const pack=j=>({id:j.localId||j.user_id,refresh:j.refreshToken||j.refresh_token,idt:j.idToken||j.id_token,exp:now()+(Math.max(120,+(j.expiresIn||j.expires_in)||3600)-60)*1000});
  const post=async(url,opt)=>{const r=await fetch(url,opt),j=await r.json().catch(()=>({}));if(!r.ok)throw Object.assign(new Error('auth'),{code:(j.error&&(j.error.message||j.error))||'auth'});return j;};
  const idp=(path,body)=>post('https://identitytoolkit.googleapis.com/v1/accounts:'+path+'?key='+KEY,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
  const renew=a=>post('https://securetoken.googleapis.com/v1/token?key='+KEY,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:'grant_type=refresh_token&refresh_token='+encodeURIComponent(a.refresh)}).then(pack);
  async function getAnon(){
    if(anon&&anon.exp>now())return anon;
    if(anonP)return anonP;
    anonP=(async()=>{
      try{
        if(anon&&anon.refresh){try{anon=await renew(anon);jset(localStorage,LS,anon);return anon;}catch(e){}}
        anon=pack(await idp('signUp',{returnSecureToken:true}));jset(localStorage,LS,anon);return anon;
      }finally{anonP=null;}
    })();
    return anonP;
  }
  async function getDir(){
    if(!dir)return null;
    if(dir.exp>now())return dir;
    try{dir=await renew(dir);jset(sessionStorage,SS,dir);return dir;}catch(e){dir=null;jset(sessionStorage,SS,null);return null;}
  }
  const tok=async()=>{const d=await getDir();return (d||await getAnon()).idt;};
  async function req(method,path,body){
    const t=await tok();
    const r=await fetch(DBU+'/'+path+'.json?auth='+encodeURIComponent(t),{method,headers:{'Content-Type':'application/json'},body:body==null?undefined:JSON.stringify(body)});
    if(r.status===401||r.status===403)throw Object.assign(new Error('permission-denied'),{code:'permission-denied'});
    if(!r.ok)throw Object.assign(new Error('network'),{code:'unavailable'});
    return r.text();
  }
  const parse=v=>{try{return v&&v.j!=null?JSON.parse(v.j):null;}catch(e){return null;}};
  const W=[];let timer=null,busy=false;
  async function pollOne(w){
    try{
      const raw=await req('GET',w.path);
      if(raw===w.last&&w.ok)return;
      w.last=raw;w.ok=true;
      const v=JSON.parse(raw);
      if(w.col){const ids=v?Object.keys(v):[];w.cb({size:ids.length,docs:ids.map(id=>({id,exists:true,data:()=>parse(v[id])}))});}
      else w.cb({exists:!!(v&&v.j!=null),id:w.path.split('/').pop(),data:()=>parse(v)});
    }catch(e){if(w.err)try{w.err({code:e.code||'unavailable'});}catch(x){}}
  }
  async function pollAll(){
    if(busy||document.hidden)return;busy=true;
    try{for(const w of W.slice())await pollOne(w);}finally{busy=false;}
  }
  function watch(path,col,cb,err){
    const w={path,col,cb,err,last:null,ok:false};W.push(w);
    if(!timer)timer=setInterval(pollAll,6000);
    pollOne(w);
    return ()=>{const i=W.indexOf(w);if(i>=0)W.splice(i,1);};
  }
  const poke=()=>setTimeout(()=>{W.forEach(w=>{w.ok=false;});pollAll();},400);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)poke();});
  const DB={
    doc:path=>({
      set:d=>req('PUT',path,{j:JSON.stringify(d),at:now()}).then(r=>{poke();return r;}),
      delete:()=>req('DELETE',path).then(r=>{poke();return r;}),
      get:async()=>{const v=JSON.parse(await req('GET',path));return {exists:!!(v&&v.j!=null),id:path.split('/').pop(),data:()=>parse(v)};},
      onSnapshot:(cb,err)=>watch(path,false,cb,err)
    }),
    collection:name=>({onSnapshot:(cb,err)=>watch(name,true,cb,err)})
  };
  window.claude={use:async name=>name==='db'?DB:name==='user'?{id:async()=>(await getAnon()).id}:null};
  window.BFM_BACKEND={
    on:true,
    needsDirector:!!cfg.directorEmail,
    signInDirector:async pw=>{const j=await idp('signInWithPassword',{email:cfg.directorEmail,password:pw,returnSecureToken:true});dir=pack(j);jset(sessionStorage,SS,dir);poke();return true;},
    signOutDirector:()=>{dir=null;jset(sessionStorage,SS,null);}
  };
})();
