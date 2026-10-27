/* ================= App: state and logic ================= */
(function(){
'use strict';
const KEY='bfm-leadership-academy-v1';
const VERIFY_BASE=window.BFM_VERIFY_BASE||'https://claude.ai/artifact/D2YzujYED7oYMnJ5z6FLn3';
const defaults=()=>({admSeenKeys:{},cal:null,calAt:0,msgs:[],chat:[],admSeen:0,reg:{},lastQ:{},prof:{name:'',ministry:'',role:'',enrolled:''},enrolledA:false,enrolledT:false,bm:{},lnotes:{},lesAt:{},annSeen:{},evSeen:[],evBase:0,pub:{announcements:[],events:[]},preview:false,admin:false,issued:[],les:{},ref:{},quiz:{},proj:{},enr:{},comp:{},certs:{},events:[],notes:[],unl:{},welcomed:false,grades:{},skips:{},access:{},denied:{},seenRemoved:0,reqs:{},settings:{theme:'system',large:false}});
let S=defaults();
try{const r=localStorage.getItem(KEY);if(r){const p=JSON.parse(r),d=defaults();S=Object.assign(d,p);S.prof=Object.assign(d.prof,p.prof||{});if(p.name&&!S.prof.name)S.prof.name=p.name;delete S.name;}}catch(e){}
/* Director access codes: only salted PBKDF2 hashes live here, never the codes. Make new ones with tools/make-passcodes.js */
const ADMIN_ITER=150000;
const ADMIN_KEYS=[{"n":1,"s":"3da3f581c36f19d9151d852e56ce5a78","h":"1461c0c6cb36bd401713c92810b93844fe8367b652559c5aa98b79043362babe"},{"n":2,"s":"619677a564c490f1e945a4cf70bc3b9a","h":"4160fa2c6bf83e6ce41d31a1e3e7e7cf96e120e9612036b6094093f00506bb31"},{"n":3,"s":"03bd23f232ee05b5caa58d366595ce03","h":"892e1e689dbd1792a03c037575d41233a62f98247d6c06e8ceaabf62e45d8457"},{"n":4,"s":"5695bff22941e22e0100c0fc13f64db4","h":"912d615bf37ba95874f4f985010ec19fcdd48287c111e38bf6f2c95ef1ec4f3e"},{"n":5,"s":"a4415274f7b2d7d0b58a12bdef338eeb","h":"8cf606e6f3ccb2a002d6dce925707c75336583df8652b99ac7cd43c66f8fa95e"},{"n":6,"s":"99efec78d8e555fa207b52316de44bc1","h":"7ae4d616ad684faf345921e8f6db1c61d2181673a45617d0960a92d03a4bc071"},{"n":7,"s":"62939eb6f19d9bf8f0cba18fa8f96b8f","h":"6696c7cb4aedda4243a9e8efcde275c12b578bbef4bc5feaad08f2fadfcb8489"},{"n":8,"s":"28793c1e3dcd0473912e37ddc8a3dd62","h":"4c238886f677beacad75d8503ab344735a5319cd2c1bbff0f1e043dac57e95a1"},{"n":9,"s":"e3eee1bfd9c44077ade014961222549b","h":"0e0d1e789e648fc478348eac05780d060fe36ef1adbea71e15fadc4c427c43e7"},{"n":10,"s":"b4264be42963afae571d2d2f05946db9","h":"8b4a4d4d6fb62997128ce743ea2253aeed16b83df86ab4e7707a27e6abb93a58"}];
var ADM_EXP=0,ADM_LAST=Date.now(),ADM_SLOT=0;
const SESSKEY='bfm-adm-sess';
(function(){let ok=false;try{const x=JSON.parse(sessionStorage.getItem(SESSKEY)||'null');if(x&&x.exp>Date.now()){ok=true;ADM_EXP=x.exp;ADM_SLOT=x.n||0;}}catch(e){}if(!ok)S.admin=false;})();
S.preview=!!S.admin;
var KEYNAME=KEY;
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}if(typeof pushSoon==='function')pushSoon();};
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byId={};COURSES.forEach(c=>byId[c.id]=c);
/* clean up progress for courses that were merged or removed, and register students who had already started a class */
(function(){
  try{
    S.reg=S.reg||{};S.lastQ=S.lastQ||{};
    ['enr','comp','quiz','proj','skips','grades','lastQ'].forEach(m=>{if(S[m]&&typeof S[m]==='object')Object.keys(S[m]).forEach(k=>{if(!byId[k])delete S[m][k];});});
    ['les','ref','lesAt','bm','lnotes'].forEach(m=>{if(S[m]&&typeof S[m]==='object')Object.keys(S[m]).forEach(k=>{if(!byId[String(k).split('.')[0]])delete S[m][k];});});
    ['N','B','V'].forEach(t=>{
      if(S.reg[t])return;
      const cs=COURSES.filter(c=>c.track===t);
      const hit=cs.find(c=>S.enr[c.id]||S.quiz[c.id]||cs.length&&c.lessons.some((_,i)=>S.les[c.id+'.'+i]));
      if(hit)S.reg[t]=S.enr[hit.id]||(S.prof&&S.prof.enrolled)||new Date().toISOString().slice(0,10);
    });
  }catch(e){}
})();
const trackOf=id=>TRACKS.find(t=>t.id===id);
const tc=t=>'--tc:var(--brand)';
const isCls=t=>t==='N'||t==='B'||t==='V'||t==='D';
const OPT=t=>t==='A'||t==='T';
const optOpen=t=>t==='A'?!!(S.enrolledA||S.access.A):!!(S.enrolledT||S.access.T);
const FLAT=t=>t==='1'||t==='2'||t==='A'||t==='T'||t==='N'||t==='B'||t==='V'||t==='D';
const fmtH=n=>String(Math.round(n*10)/10);
const pad=n=>String(n).padStart(2,'0');
const isoToday=()=>{const d=new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());};
const fmtDate=s=>{if(!s)return '';const p=String(s).split('-');if(p.length<3)return s;return new Date(+p[0],+p[1]-1,+p[2]).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});};
const fmtStamp=s=>{try{return new Date(s).toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'});}catch(e){return '';}};

/* ---------- course math ---------- */
const lk=(c,i)=>c.id+'.'+i;
const lessonsDone=c=>c.lessons.filter((_,i)=>S.les[lk(c,i)]).length;
const passNeed=c=>Math.ceil(c.quiz.length*(c.pass||0.6));
const passPct=c=>Math.round((c.pass||0.6)*100);
const quizPassed=c=>!!(S.quiz[c.id]&&S.quiz[c.id].passed);
const projDone=c=>!!(S.proj[c.id]&&S.proj[c.id].done);
const courseDone=c=>lessonsDone(c)===c.lessons.length&&quizPassed(c)&&projDone(c);
const coursePct=c=>Math.round((lessonsDone(c)+(quizPassed(c)?1:0)+(projDone(c)?1:0))/(c.lessons.length+2)*100);
const hoursOf=c=>c.lessons.length*1.5+0.5+c.proj.h;
const earned=c=>lessonsDone(c)*1.5+(quizPassed(c)?0.5:0)+(projDone(c)?c.proj.h:0);
const creditsOf=c=>Math.max(0.5,Math.round(hoursOf(c)/4)/2);
const started=c=>lessonsDone(c)>0||!!S.quiz[c.id]||!!(S.proj[c.id]&&(S.proj[c.id].done||(S.proj[c.id].notes||'').length>0));
const gradePct=c=>Math.round(0.6*((S.quiz[c.id]||{}).best||0)+40);
const letter=p=>p>=90?'A':p>=80?'B':p>=70?'C':p>=60?'D':'F';
const done=id=>courseDone(byId[id]);
const waived=c=>!!S.skips[c.id];
const satisfied=c=>courseDone(c)||waived(c);
const eff=c=>courseDone(c)||waived(c)?100:coursePct(c);
const COUNTED=COURSES.filter(c=>!OPT(c.track));
const coresOf=t=>COURSES.filter(c=>c.track===t&&c.grp==='core');
const specsOf=t=>COURSES.filter(c=>c.track===t&&c.grp==='spec');
const keysOf=t=>Array.from(new Set(specsOf(t).map(c=>c.key)));
const pairOf=(t,k)=>specsOf(t).filter(c=>c.key===k);
const specFull=k=>(SPECS.find(s=>s.k===k)||{}).f||k;
const specName=k=>(SPECS.find(s=>s.k===k)||{}).n||k;

function prereqs(c){
  if(isCls(c.track)||c.track==='T'){const cs=COURSES.filter(x=>x.track===c.track),i=cs.indexOf(c);return i>0?[cs[i-1]]:[];}
  if(c.track==='1'){
    return [];
  }
  if(c.track==='3'){
    if(c.grp==='core'){const cs=coresOf(c.track),i=cs.indexOf(c);return i>0?[cs[i-1]]:[];}
    if(c.part===1){let p=coresOf(c.track).slice();return p;}
    return [pairOf(c.track,c.key)[0]];
  }
  return [];
}
function trackComplete(t){
  if(FLAT(t))return COURSES.filter(c=>c.track===t).every(satisfied);
  return coresOf(t).every(satisfied)&&keysOf(t).some(k=>pairOf(t,k).every(satisfied));
}
function trackPct(t){
  const cs=COURSES.filter(c=>c.track===t);
  if(FLAT(t))return Math.round(cs.reduce((a,c)=>a+eff(c),0)/cs.length);
  const cores=coresOf(t),best=Math.max.apply(null,keysOf(t).map(k=>pairOf(t,k).reduce((a,c)=>a+eff(c),0)));
  return Math.round((cores.reduce((a,c)=>a+eff(c),0)+best/Math.max(1,pairOf(t,keysOf(t)[0]).length))/(cores.length+1));
}
const CLS4=['V','N','B','D'];
/* anyone serving in a position (not a church member or ministry member) is asked 'Would you like to skip this class?' and the Academy approves it */
const hasPosition=()=>{const r=roleOf(S.prof);return !!r&&r!=='Church Member'&&r!=='Ministry Member';};
const classesDone=()=>CLS4.every(t=>COURSES.filter(c=>c.track===t).every(satisfied));
const LEADTRK=t=>t==='1'||t==='2'||t==='3';
const classesMet=()=>S.preview||classesDone()||COURSES.some(c=>LEADTRK(c.track)&&started(c));
function lockMsg(c){
  if(S.preview)return '';
  if(S.access['u:'+c.id])return '';
  if(LEADTRK(c.track)&&!classesMet())return 'Finish the four BFM classes first';
  if(c.track==='3'&&c.grp==='spec'&&S.cal&&S.cal!==c.key)return 'Permission needed to take a different ministry';
  if(c.track==='D'&&!S.access.D)return 'Permission needed from the Academy Director';
  if(isCls(c.track)&&c.track!=='D'&&!S.reg[c.track])return 'Register for this class first';
  if(c.track==='2'&&!trackComplete('1'))return 'Complete Track 1 first';
  if(c.track==='3'&&!trackComplete('2'))return 'Complete Track 2 first';
  if(OPT(c.track)&&!optOpen(c.track))return 'Request permission to start';
  const m=prereqs(c).find(p=>!satisfied(p));
  return m?'Finish '+m.code+' first':'';
}
const trackLock=t=>{if(isCls(t)&&t!=='D')return '';return lockMsg(COURSES.find(c=>c.track===t));};
const engaged=c=>started(c)||!!S.enr[c.id];
const cStatus=c=>courseDone(c)?'complete':waived(c)?'waived':lockMsg(c)?'locked':coursePct(c)>0?'progress':S.enr[c.id]?'enrolled':'open';
const tStatus=t=>trackLock(t)?'locked':trackComplete(t)?'complete':trackPct(t)>0?'progress':'open';
const quizOpen=c=>S.preview||lessonsDone(c)===c.lessons.length;
const projOpen=c=>S.preview||quizPassed(c);
const totals=()=>{
  const dc=COURSES.filter(courseDone);
  const ins=COURSES.reduce((a,c)=>a+earned(c),0);
  const ev=S.events.reduce((a,e)=>a+(+e.hours||0),0);
  const cr=dc.reduce((a,c)=>a+creditsOf(c),0);
  const avg=dc.length?Math.round(dc.reduce((a,c)=>a+gradePct(c),0)/dc.length):0;
  const dn=dc.filter(c=>!OPT(c.track));
  return {done:dn.length,doneAll:dc.length,ins,ev,total:ins+ev,cr,avg};
};

/* ---------- notifications ---------- */
function note(type,msg){
  S.notes.unshift({id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),type,msg,at:new Date().toISOString(),read:false});
  if(S.notes.length>100)S.notes.length=100;
}
const unread=()=>S.notes.filter(n=>!n.read).length;
function registerClass(t){
  if(!isCls(t)||t==='D'||S.reg[t]||S.preview)return false;
  S.reg[t]=isoToday();note('enroll','Registered for '+trackOf(t).title+'.');
  S.reqs['reg_'+t]={type:'reg',id:t,reason:'Registered for '+trackOf(t).title+' on '+fmtDate(S.reg[t])+'.',role:roleOf(S.prof),at:Date.now()};
  save();if(typeof pushNow==='function')pushNow();return true;
}
function enroll(cid){
  const c=byId[cid];
  if(!c||S.enr[cid]||S.preview)return;
  S.enr[cid]=isoToday();note('enroll','Enrolled in '+c.code+', '+c.title+'.');save();
}

/* ---------- certificates ---------- */
const B32='0123456789ABCDEFGHJKMNPQRSTVWXYZ';
function hash32(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function rand5(){let s='';for(let i=0;i<5;i++)s+=B32[Math.floor(Math.random()*32)];return s;}
function certCheck(k,n,d,r){const h=hash32([k,n,d,r].join('|'));let s='';for(let i=0;i<3;i++)s+=B32[(h>>>(i*5))&31];return s;}
function trackHours(t){return COURSES.filter(c=>c.track===t&&courseDone(c)).reduce((a,c)=>a+hoursOf(c),0);}
function trackCredits(t){return COURSES.filter(c=>c.track===t&&courseDone(c)).reduce((a,c)=>a+creditsOf(c),0);}
function issueCert(t){
  const name=(S.prof.name||'').trim()||'Student',date=isoToday(),r=rand5();
  const id='BFM-'+t.id+'-'+date.slice(2,4)+'-'+r+'-'+certCheck(t.id,name,date,r);
  S.certs[t.id]={id,date,name,hours:trackHours(t.id),credits:trackCredits(t.id),pv:!!S.preview};
  note('cert','Certificate earned: '+t.cred+'. ID '+id+'.');
}
const b64u=s=>btoa(unescape(encodeURIComponent(s))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
function unb64u(s){s=s.replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';return decodeURIComponent(escape(atob(s)));}
function certPayload(cert,tid){return b64u(JSON.stringify({i:cert.id,n:cert.name,k:tid,d:cert.date,h:Math.round(cert.hours*10)/10,s:cert.signer||undefined,st:cert.signerTitle||undefined}));}
const verifyUrl=(cert,tid)=>VERIFY_BASE+'#verify-'+certPayload(cert,tid);
function checkPayload(tok){
  try{
    const o=JSON.parse(unb64u(tok));
    const m=/^BFM-([123ABDNTV])-(\d\d)-([0-9A-Z]{5})-([0-9A-Z]{3})$/.exec(o.i||'');
    if(!m)return {ok:false,o,why:'The certificate ID is not in the expected format.'};
    const good=m[1]===o.k&&certCheck(o.k,o.n,o.d,m[3])===m[4]&&String(o.d||'').slice(2,4)===m[2];
    return {ok:good,o,why:good?'':'The details do not match this certificate ID.'};
  }catch(e){return {ok:false,o:null,why:'This verification code could not be read.'};}
}

/* ---------- sync: completions, unlocks, certificates ---------- */
function sync(){
  COURSES.forEach(c=>{
    const d=courseDone(c);
    if(d&&!S.comp[c.id]){
      S.comp[c.id]={date:isoToday()};
      const g=gradePct(c);
      note('complete','Course complete: '+c.code+', '+c.title+'. Grade '+letter(g)+' ('+g+'%).');
    }else if(!d&&S.comp[c.id])delete S.comp[c.id];
  });
  [['2','1','Track 2: Ministry Leadership is now unlocked.'],['3','2','Track 3: Ministry Specializations is now unlocked.'],['A','1','Track A: Administrative Church Leadership is open to everyone. Request permission to start.'],['T','1','BFM Teacher Certification is open to everyone who wants to teach a class. Request permission to start.']].forEach(a=>{
    if(!S.unl[a[0]]&&trackComplete(a[1])){S.unl[a[0]]=true;note('unlock',a[2]);}
  });
  TRACKS.forEach(t=>{if(trackComplete(t.id)&&!S.certs[t.id])issueCert(t);});
  save();
}

/* ---------- leadership readiness ---------- */
const TARGET=(function(){
  const t=[0,0,0,0,0,0,0],add=(c,m)=>c.w.forEach((x,i)=>t[i]+=x*(m||1));
  COURSES.filter(c=>c.track==='1').forEach(c=>add(c));
  ['2','3'].forEach(tr=>{
    coresOf(tr).forEach(c=>add(c));
    const ks=keysOf(tr);
    ks.forEach(k=>pairOf(tr,k).forEach(c=>add(c,1/ks.length)));
  });
  return t;
})();
function readiness(){
  const pts=[0,0,0,0,0,0,0];
  COURSES.forEach(c=>{
    const f=coursePct(c)/100;if(!f)return;
    const q=courseDone(c)?gradePct(c)/100:1;
    c.w.forEach((w,i)=>pts[i]+=w*f*q);
  });
  pts[6]+=S.events.reduce((a,e)=>a+(+e.hours||0),0)*0.25;
  const vals=COMPS.map((k,i)=>Math.min(100,Math.round(100*pts[i]/TARGET[i])));
  return {vals,overall:Math.round(vals.reduce((a,b)=>a+b,0)/vals.length)};
}
function nextUp(){
  const cands=COURSES.filter(c=>!OPT(c.track)&&!lockMsg(c)&&!satisfied(c));
  if(!cands.length)return null;
  const c=cands.find(x=>coursePct(x)>0)||cands[0];
  const i=c.lessons.findIndex((_,j)=>!S.les[lk(c,j)]);
  if(i>=0)return {c,go:'lesson:'+c.id+':'+i,what:'Lesson '+(i+1)+' of '+c.lessons.length+': '+c.lessons[i].t,label:'Lesson '+(i+1)};
  if(!quizPassed(c))return {c,go:'quiz:'+c.id,what:'Course assessment',label:'Assessment'};
  return {c,go:'project:'+c.id,what:'Course project: '+c.proj.t,label:'Project'};
}
function director(){
  const r=readiness(),nx=nextUp();
  const weak=r.vals.map((v,i)=>({v,n:COMPS[i].n})).sort((a,b)=>a.v-b.v)[0];
  let status,next,go;
  const p=t=>trackPct(t);
  if(trackComplete('3')){
    status='Ready for Ministry Specialization';
    if(trackComplete('A')){next='Discuss a ministry leadership appointment with your pastor.';go='';}
    else{next='Discuss a ministry leadership appointment, or add Administrative Church Leadership (Track A).';go='track:A';}
  }else if(p('3')>0){status='Preparing for a Ministry Specialization';next='Finish Track 3: Ministry Specializations.';go='track:3';}
  else if(trackComplete('2')){status='Ready for Ministry Leadership';next='Ministry Specializations (Track 3).';go='track:3';}
  else if(p('2')>0){status='Growing in Ministry Leadership';next='Finish Track 2: Ministry Leadership.';go='track:2';}
  else if(trackComplete('1')){status='Ready to begin Ministry Leadership training';next='Ministry Leadership (Track 2).';go='track:2';}
  else if(p('1')>0){status='Building Foundations';next='Finish Track 1: Foundations of Leadership and Volunteering.';go='track:1';}
  else{status='Not yet started';next='Begin Track 1: Foundations of Leadership and Volunteering.';go='track:1';}
  return {r,status,next,go,weak,nx};
}

/* first-run housekeeping */
if(!S.prof.enrolled)S.prof.enrolled=isoToday();
if(!S.welcomed){S.welcomed=true;note('welcome','Welcome to the BFM Academy. Add your name, ministry, and role in your profile before you finish a track so your certificate carries the right name.');}
sync();

/* ================= App: views ================= */
const IC={
 lock:'<rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
 check:'<path d="M5 12.5l4.5 4.5L19 7"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 back:'<path d="M19 12H5M11 6l-6 6 6 6"/>',quiz:'<path d="M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
 proj:'<path d="M4 20h4L19 9l-4-4L4 16v4zM13 7l4 4"/>',book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5zM4 19a2 2 0 0 1 2-2h13"/>',
 bell:'<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15L6 16zM10 21h4"/>',
 cal:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
 award:'<circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5"/>',
 down:'<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',play:'<path d="M7 5l12 7-12 7V5z"/>',
 trash:'<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"/>',plus:'<path d="M12 5v14M5 12h14"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',
 ext:'<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',flame:'<path d="M12 3c1 3 4 5 4 9a4 4 0 0 1-8 0c0-2 1-3 2-4-.2 1.6.5 2.4 1.2 2.6C11 8 11 5.5 12 3z"/>'
};
const ic=n=>'<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">'+IC[n]+'</svg>';

let QZ=null,RESET=false,VFR=null,NEWN={},ADMSG='',V={n:'home',a:[]};
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};

const pill=st=>{
  const m={locked:['Locked',ic('lock')],complete:['Complete',ic('check')],progress:['In progress','<span class="dot"></span>'],open:['Open','<span class="dot"></span>'],enrolled:['Enrolled',ic('check')],waived:['Waived',ic('check')]}[st];
  return '<span class="pill '+st+'">'+m[1]+m[0]+'</span>';
};
const bar=p=>'<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+p+'"><i style="width:'+p+'%"></i></div>';
const crumbs=l=>'<nav class="crumbs" aria-label="Breadcrumb">'+l.map(c=>c.go?'<button data-go="'+c.go+'">'+esc(c.t)+'</button>':'<span>'+esc(c.t)+'</span>').join('<span class="sep">/</span>')+'</nav>';
const cta=c=>courseDone(c)?'Review':engaged(c)?'Continue':'View course';

function step(c){
  const i=c.lessons.findIndex((_,j)=>!S.les[lk(c,j)]);
  if(i>=0)return {go:'lesson:'+c.id+':'+i,what:'Lesson '+(i+1)+' of '+c.lessons.length+': '+c.lessons[i].t,short:'Lesson '+(i+1)};
  if(!quizPassed(c))return {go:'quiz:'+c.id,what:'Course assessment',short:'Assessment'};
  if(!projDone(c))return {go:'project:'+c.id,what:'Course project: '+c.proj.t,short:'Project'};
  return null;
}

function courseCard(c){
  const st=cStatus(c),lm=lockMsg(c);
  return '<button class="course '+(lm?'locked':'')+'" style="'+tc(c.track)+'" data-go="course:'+c.id+'">'+
    '<div class="row"><span class="code">'+c.code+'</span>'+pill(st)+'</div>'+
    '<h3>'+esc(c.title)+'</h3>'+
    '<p class="meta">'+c.lessons.length+(c.lessons.length===1?' lesson':' lessons')+' · about '+fmtH(hoursOf(c))+' hrs</p>'+
    bar(coursePct(c))+
    (lm?'<p class="lockline">'+ic('lock')+esc(lm)+'</p>':'<p class="cta-line">'+cta(c)+ic('arrow')+'</p>')+'</button>';
}

/* ---------- home ---------- */
function home(){
  const nx=nextUp(),d=director();
  const pathPct=Math.round((trackPct('1')+trackPct('2')+trackPct('3'))/3);
  const circ=2*Math.PI*52,dash=(pathPct/100*circ).toFixed(1);
  const T=totals();
  const anyStart=COURSES.some(started);
  const first=(S.prof.name||'').trim().split(/\s+/)[0];
  const nextCard=nx?
    '<div class="card next" style="'+tc(nx.c.track)+'"><p class="eyebrow lab">'+(anyStart?'Pick up where you left off':'Your first class')+'</p>'+
    '<h3>'+nx.c.code+' · '+esc(nx.c.title)+'</h3><p class="muted">'+(anyStart?esc(nx.what):'Open the course to read about it and enroll.')+'</p>'+
    '<button class="btn" data-go="'+(anyStart?nx.go:'course:'+nx.c.id)+'">'+ic('play')+(anyStart?'Continue':'View class')+'</button></div>':
    '<div class="card next"><h3>Every available course is complete.</h3><p class="muted">Check your transcript for your credentials.</p><button class="btn" data-go="transcript">View transcript'+ic('arrow')+'</button></div>';
  const prompt=!(S.prof.name||'').trim()?'<div class="card prompt"><p><b>Set up your student profile.</b> Add your name, ministry, and role so your transcript and certificates carry them.</p><button class="btn ghost" data-go="profile">Open profile'+ic('arrow')+'</button></div>':'';
  const tile=t=>{
    const st=tStatus(t.id),lm=trackLock(t.id),cs=COURSES.filter(c=>c.track===t.id);
    const nDone=cs.filter(courseDone).length;
    return '<button class="tile '+(lm?'locked ':'')+(t.optional?'opt':'')+'" style="'+tc(t.id)+'" data-go="track:'+t.id+'">'+
      '<div class="row"><span class="eyebrow lab">'+t.label+(t.optional?' · Optional':'')+'</span>'+pill(st)+'</div>'+
      '<h3>'+esc(t.title)+'</h3><p>'+esc(t.desc)+'</p>'+bar(trackPct(t.id))+
      (lm?'<p class="lockline">'+ic('lock')+esc(lm)+'</p>':'<p class="meta">'+nDone+' of '+cs.length+' courses complete</p>')+'</button>';
  };
  const tiles='<div class="sec-h" id="classes"><h2>Classes</h2><span class="meta">Start here. Each course unlocks after the one before it.</span></div><div class="tiles" style="margin-bottom:36px">'+TRACKS.filter(t=>t.cls).map(tile).join('')+'</div>'+
    '<div class="sec-h"><h2>Leadership tracks</h2><span class="meta">Each track unlocks the next.</span></div><div class="tiles tiles3" style="margin-bottom:36px">'+TRACKS.filter(t=>!t.cls&&!t.optional).map(tile).join('')+'</div>'+
    (TRACKS.some(t=>!t.cls&&t.optional)?'<details class="catd optd"><summary><span class="cat-t"><span class="eyebrow lab">Optional</span><h2>Optional programs</h2></span><span class="cat-m"><span class="meta">Not required for the pathway. Ask the Academy Director to start one.</span></span></summary><div class="catd-b"><div class="tiles tiles2" style="margin-bottom:0">'+TRACKS.filter(t=>!t.cls&&t.optional).map(tile).join('')+'</div></div></details>':'');
  const heroBtn=(nx?(anyStart?'<button class="btn big" data-go="'+nx.go+'">'+ic('play')+'Continue</button>':'<button class="btn big" data-act="scroll-classes">'+ic('play')+'Start learning</button>'):'<button class="btn big" data-go="transcript">View transcript</button>')+'<button class="btn ghost big" data-go="catalog">Browse courses</button>';
  return '<section class="herox"><p class="eyebrow lab">'+(first?'Welcome to BFM Academy, '+esc(first):'Welcome to BFM Academy')+'</p>'+
    '<h1>Leaders who<br class="dbr"> reach, teach, &amp;<br class="dbr"> equip</h1>'+
    '<p class="lede">At BFM, our leadership is committed to building lives through the Word of God, reaching hearts, teaching truth, and equipping every person to walk boldly in their calling.</p>'+
    '<div class="btnrow" style="justify-content:center">'+heroBtn+'</div></section>'+
    '<section class="dash"><div class="hero-l">'+nextCard+prompt+'</div>'+
    '<aside class="card prog" aria-label="Your progress"><div class="ringrow">'+
    '<svg class="ring" viewBox="0 0 120 120" role="img" aria-label="Leadership pathway '+pathPct+' percent complete"><circle class="bg" cx="60" cy="60" r="52"/><circle class="fg" cx="60" cy="60" r="52" stroke-dasharray="'+dash+' '+circ.toFixed(1)+'" transform="rotate(-90 60 60)"/><text x="60" y="60">'+pathPct+'%</text></svg>'+
    '<div><h3>Leadership pathway</h3><p class="meta">Average of Tracks 1, 2, and 3. Track A and Teacher Certification are optional and tracked on their own.</p></div></div>'+
    '<div class="stats"><div class="stat"><b>'+T.done+'</b><span>courses done</span></div><div class="stat"><b>'+fmtH(T.total)+'</b><span>hours</span></div><div class="stat"><b>'+fmtH(T.cr)+'</b><span>credits</span></div></div>'+
    '</aside></section>'+
    '<button class="snap" data-go="readiness"><div><p class="eyebrow">Leadership readiness</p><p class="snap-s">'+esc(d.status)+'</p><p class="meta">Recommended next step: '+esc(d.next)+'</p></div><div class="snap-n"><b>'+d.r.overall+'%</b>'+bar(d.r.overall)+'</div></button>'+
    homeExtras()+tiles;
}

function catalog(){
  return '<div class="thead"><p class="eyebrow">Course catalog</p><h1>Catalog</h1><p class="lede">'+COUNTED.length+' courses across '+(TRACKS.length-1)+' classes and tracks, plus the '+(COURSES.length-COUNTED.length)+' optional courses in Track A (Administrative) and Teacher Certification. Open one to see its courses, then pick a course.</p></div>'+
  startedSection()+
  '<div class="cat"><p class="grp-h">Classes</p>'+TRACKS.map(t=>{
    const cs=COURSES.filter(c=>c.track===t.id),nd=cs.filter(courseDone).length;
    return (t.id==='1'?'<p class="grp-h">Leadership tracks</p>':'')+'<details class="catd" style="'+tc(t.id)+'"><summary><span class="cat-t"><span class="eyebrow lab">'+t.label+(t.optional?' · Optional':'')+'</span><h2>'+esc(t.title)+'</h2></span><span class="cat-m"><span class="meta">'+nd+' of '+cs.length+' complete</span>'+pill(tStatus(t.id))+'</span></summary>'+
      '<div class="catd-b"><p class="muted" style="margin-bottom:16px;max-width:70ch">'+esc(t.desc)+'</p><div class="grid">'+cs.map(courseCard).join('')+'</div>'+
      '<p style="margin-top:16px"><button class="btn ghost sm" data-go="track:'+t.id+'">Open '+esc(t.label)+ic('arrow')+'</button></p></div></details>';
  }).join('')+'</div>';
}

function trackView(id){
  const t=trackOf(id),cs=COURSES.filter(c=>c.track===id),st=tStatus(id),lm=trackLock(id);
  let body='';
  if(id==='3'&&/^Finish the four/.test(lm||'')){
    body=lockedTrack(id,lm,cs);
  }else if(id==='3'){
    const card=k=>pairOf(id,k).map(courseCard).join('');
    if(S.cal&&!S.preview&&keysOf(id).includes(S.cal)){
      const others=keysOf(id).filter(k=>k!==S.cal);
      body='<div class="sec-h"><h2>Your ministry</h2><span class="meta">'+esc(specFull(S.cal))+'</span></div><div class="grid" style="margin-bottom:34px">'+card(S.cal)+'</div>'+
        '<details class="catd"><summary><span class="cat-t"><span class="eyebrow lab">Locked</span><h2>Other ministries</h2></span><span class="cat-m"><span class="meta">Director permission needed</span></span></summary><div class="catd-b"><p class="muted" style="margin-bottom:16px;max-width:70ch">You chose '+esc(specFull(S.cal))+'. To take the course for another ministry, open it and send a request to the Academy Director.</p><div class="grid">'+others.map(card).join('')+'</div></div></details>';
    }else{
      body='<div class="card regbox"><div><b>'+(S.preview?'All ministries (director preview)':'Choose the ministry you are called to')+'</b><p class="note">'+(S.preview?'Everything is open while you preview.':'Pick the one ministry you feel called to serve in. Only that ministry opens for you. If you later feel called to another, you can ask the Academy Director for permission.')+'</p></div></div>'+
      '<div class="grid specgrid">'+keysOf(id).map(k=>'<div class="spec2">'+card(k)+(S.preview?'':'<button class="btn sm ghost" data-act="choose-cal" data-k="'+k+'" aria-label="This is my ministry: '+esc(specFull(k))+'">'+ic('check')+'This is my ministry</button>')+'</div>').join('')+'</div>';
    }
  }else{
    body='<div class="sec-h"><h2>Courses</h2><span class="meta">'+(t.cls||id==='T'?'Take them in order. Each opens when you finish the one before it.':id==='1'?'Take them in any order.':'Take them in any order.')+'</span></div>'+(lm&&!t.cls?lockedTrack(id,lm,cs):'<div class="grid">'+cs.map(courseCard).join('')+'</div>');
  }
  if(id==='1')body+='<div class="sec-h" style="margin-top:34px"><h2>Volunteer training packets</h2><span class="meta">Two general packets for every volunteer, even if you have not found a ministry yet. Printed, nothing to complete. Each ministry also has its own packet on its ministry page.</span></div>'+packetList();
  if(id==='3')body+='<div class="sec-h" style="margin-top:34px"><h2>More manuals</h2></div>'+extraManuals();
  let enrollBox='';
  if(OPT(id))enrollBox=trackOptReq(id);
  if(id==='D')enrollBox=skipClassReq(id)+classDReq();
  else if(t.cls){
    enrollBox=skipClassReq(id)+(S.reg[id]?'<p class="meta" style="margin:0 0 18px">'+ic('check')+' Registered for this class on '+esc(fmtDate(S.reg[id]))+'.</p>':
      '<div class="card regbox"><div><b>Register to start this class</b><p class="note">Lessons, assessments, projects, study guides, and your answer review are open only to students who are registered for the class.</p></div><button class="btn" data-act="reg-class" data-t="'+id+'">'+ic('check')+'Register for this class</button></div>');
  }
  const cert=S.certs[id];
  return crumbs([{t:'Campus',go:'home'},{t:(t.cls?t.short:t.label)}])+
  '<div class="thead" style="'+tc(id)+'"><p class="eyebrow lab">'+t.label+(t.optional?' · Optional, based on interest':'')+' · '+cs.length+' courses</p><h1>'+esc(t.title)+'</h1><p class="lede">'+esc(t.desc)+'</p><div>'+pill(st)+'</div>'+bar(trackPct(id))+'</div>'+
  '<div class="rules"><div class="card"><h3>How it unlocks</h3><p>'+esc(t.unlock)+(lm?' <b>Right now: '+esc(lm)+'.</b>':'')+'</p></div>'+
  '<div class="card"><h3>To finish this '+(t.cls?'class':'track')+'</h3><p>'+esc(t.finish)+'</p></div>'+
  '<div class="card"><h3>You earn</h3><p>'+esc(t.cred)+'</p>'+(cert?'<p style="margin-top:8px"><button class="btn ghost" data-go="cert:'+id+'">'+ic('award')+'View certificate</button></p>':'')+'</div></div>'+enrollBox+body;
}

function classGate(){
  const rows=CLS4.map(t=>{
    const T=trackOf(t),cs=COURSES.filter(c=>c.track===t);
    const done=cs.every(courseDone),wv=!done&&cs.every(satisfied),n=cs.filter(satisfied).length;
    const stt=done?'<span class="chip live"><i></i>Complete</span>':wv?'<span class="chip">Skipped</span>':(n||cs.some(started))?'<span class="chip">In progress</span>':'<span class="chip">Not started</span>';
    return '<li class="arow"><div class="arow-m"><span class="avt">'+ic(done||wv?'check':'book')+'</span><div><b>'+esc(T.short)+'</b><small>'+cs.length+' courses'+(t==='D'?' · needs the director’s permission':'')+'</small></div></div><div class="arow-r">'+stt+(done||wv?'':'<button class="btn sm" data-go="track:'+t+'">Open</button>')+'</div></li>';
  }).join('');
  const role=roleOf(S.prof);
  return '<div class="card lockbar classgate"><div>'+ic('lock')+'<b>Finish the four BFM classes first.</b><p class="note">The leadership tracks (Track 1, 2 and 3) open after the four basic BFM classes. If you already serve as a deacon, assistant, ministry director, minister, pastor or in another position, set your role in your profile. Each class page then asks “Would you like to skip this class?” and the Academy approves it. If you were already saved or baptized, you can ask to skip those two classes on their pages.</p></div>'+(role?'':'<button class="btn sm" data-go="profile">Set my role'+ic('arrow')+'</button>')+'</div><ul class="alist card-l" style="margin:12px 0 18px">'+rows+'</ul>';
}
function lockedTrack(id,lm,cs){
  if(/^Finish the four/.test(lm))return classGate()+'<details class="catd"><summary><span class="cat-t"><span class="eyebrow lab">Preview</span><h2>See the '+cs.length+' courses in this track</h2></span></summary><div class="catd-b"><div class="grid">'+cs.map(courseCard).join('')+'</div></div></details>';
  const m=/Track (\d)/.exec(lm),go=m?'<button class="btn sm" data-go="track:'+m[1]+'">Go to Track '+m[1]+ic('arrow')+'</button>':'';
  return '<div class="card lockbar"><div>'+ic('lock')+'<b>'+esc(lm)+'.</b><p class="note">All '+cs.length+' courses in this track open together when the track before it is finished.</p></div>'+go+'</div>'+
  '<details class="catd"><summary><span class="cat-t"><span class="eyebrow lab">Preview</span><h2>See the '+cs.length+' courses in this track</h2></span></summary><div class="catd-b"><div class="grid">'+cs.map(courseCard).join('')+'</div></div></details>';
}

/* ---------- course launcher ---------- */
function courseView(id){
  const c=byId[id],t=trackOf(c.track),lm=lockMsg(c),st=cStatus(c),nx=step(c),T=hoursOf(c);
  const nextI=c.lessons.findIndex((_,i)=>!S.les[lk(c,i)]);
  const rows=c.lessons.map((l,i)=>{
    const ok=!!S.les[lk(c,i)];
    return '<button class="row-btn" style="'+tc(c.track)+'" data-go="lesson:'+c.id+':'+i+'"'+(lm?' disabled':'')+'><span class="st '+(ok?'ok':'')+'">'+(ok?ic('check'):lm?ic('lock'):'')+'</span>'+
      '<span class="txt"><b>Lesson '+(i+1)+': '+esc(l.t)+(i===nextI&&!lm&&!courseDone(c)&&engaged(c)?' <em class="nextbadge">Next</em>':'')+'</b><small>'+esc(l.ref.join(' · '))+'</small></span>'+ic('arrow')+'</button>';
  }).join('');
  const qd=S.quiz[c.id],qo=!lm&&quizOpen(c),po=!lm&&projOpen(c);
  const pass=passNeed(c);
  const quizRow='<button class="row-btn" style="'+tc(c.track)+'" data-go="quiz:'+c.id+'"'+(qo?'':' disabled')+'><span class="st '+(qd&&qd.passed?'ok':'')+'">'+(qd&&qd.passed?ic('check'):qo?ic('quiz'):ic('lock'))+'</span>'+
    '<span class="txt"><b>Assessment</b><small>'+c.quiz.length+' questions · pass mark '+pass+' of '+c.quiz.length+(qd?' · best score '+qd.best+'%':'')+(qo?'':' · finish all lessons first')+'</small></span>'+ic('arrow')+'</button>';
  const pd=S.proj[c.id];
  const projRow='<button class="row-btn" style="'+tc(c.track)+'" data-go="project:'+c.id+'"'+(po?'':' disabled')+'><span class="st '+(pd&&pd.done?'ok':'')+'">'+(pd&&pd.done?ic('check'):po?ic('proj'):ic('lock'))+'</span>'+
    '<span class="txt"><b>Project: '+esc(c.proj.t)+'</b><small>About '+c.proj.h+' hours'+(po?'':' · pass the assessment first')+'</small></span>'+ic('arrow')+'</button>';
  let action;
  if(waived(c)&&!courseDone(c))action='<div class="banner" style="margin:0">'+ic('check')+'This course was waived by the Academy. You do not need to take it.</div>';
  else if(lm&&isCls(c.track)&&c.track!=='D'&&!S.reg[c.track])action='<p class="lockline">'+ic('lock')+'Register for this class to open its courses.</p><div class="btnrow"><button class="btn big" data-act="reg-class" data-t="'+c.track+'">'+ic('check')+'Register for this class</button></div>';
  else if(lm)action='<p class="lockline">'+ic('lock')+'This course is locked. '+esc(lm)+'.</p>';
  else if(courseDone(c)){
    const g=gradePct(c);
    action='<div class="banner" style="margin:0">'+ic('check')+'Completed '+esc(fmtDate((S.comp[c.id]||{}).date))+' · Grade '+letter(g)+' ('+g+'%)</div>'+
      '<div class="btnrow"><button class="btn ghost" data-go="lesson:'+c.id+':0">Review course</button><button class="btn ghost" data-go="transcript">View transcript</button></div>';
  }else{
    const eg=engaged(c);
    const fi=c.lessons.findIndex((_,i)=>!S.les[lk(c,i)]);
    const nlab=fi>=0?'Next lesson':/^quiz/.test(nx.go)?'Take the assessment':/^project/.test(nx.go)?'Go to the project':'Continue';
    action='<div class="btnrow">'+(eg?'<button class="btn big" data-go="'+(fi>=0?'lesson:'+c.id+':'+fi:nx.go)+'">'+ic('play')+nlab+'</button>':
      '<button class="btn big" data-act="enroll-course" data-c="'+c.id+'">'+ic('check')+'Enroll in this course</button>')+'</div>'+
      '<p class="meta">'+(eg?'Up next: ':'First up: ')+esc(fi>=0?'Lesson '+(fi+1)+', '+c.lessons[fi].t:nx.what)+'</p>';
  }
  if(t.cls&&!lm)action+='<div class="btnrow" style="margin-top:10px"><button class="btn ghost" data-go="review:'+c.id+'">'+ic('quiz')+'Review my work and answers</button></div>';
  return crumbs([{t:'Campus',go:'home'},{t:(t.cls?t.short:t.label),go:'track:'+t.id},{t:c.code}])+
  '<section class="launch" style="'+tc(c.track)+'"><div class="launch-l"><p class="code">'+c.code+' · '+esc(t.short)+'</p><h1>'+esc(c.title)+'</h1><p class="lede">'+esc(c.goal)+'</p>'+
  '<div class="chips"><span class="chip">'+c.lessons.length+(c.lessons.length===1?' lesson':' lessons')+'</span><span class="chip">1 assessment</span><span class="chip">1 project</span><span class="chip">'+fmtH(T)+' hours</span><span class="chip">'+fmtH(creditsOf(c))+' credit'+(creditsOf(c)===1?'':'s')+'</span></div></div>'+
  '<div class="card launch-r"><div class="sec-h" style="margin:0"><span class="eyebrow">Your progress</span>'+pill(st)+'</div>'+
  '<p class="big-n">'+coursePct(c)+'%</p>'+bar(coursePct(c))+
  (S.enr[c.id]?'<p class="meta">Enrolled '+esc(fmtDate(S.enr[c.id]))+'</p>':'')+action+'</div></section>'+
  '<div class="extras manualx">'+manualCard(c)+'</div>'+courseExtras(c)+
  '<details class="outline" open><summary><span>Course outline</span><small>'+c.lessons.length+(c.lessons.length===1?' lesson':' lessons')+' · assessment · project</small></summary><div class="syl">'+rows+quizRow+projRow+'</div></details>';
}

/* ---------- review my work (classes only) ---------- */
function reviewView(cid){
  const c=byId[cid],t=trackOf(c.track);
  const lock=(msg)=>'<div class="card rvlock">'+ic('lock')+'<span>'+esc(msg)+'</span></div>';
  const les=c.lessons.map((l,i)=>{
    const k=lk(c,i),ans=S.ref[k]||[];
    if(!S.les[k]&&!S.preview)return '<section class="rvsec"><h3>Lesson '+(i+1)+': '+esc(l.t)+'</h3>'+lock('Finish this lesson to review your answers.')+'</section>';
    return '<section class="rvsec"><h3>Lesson '+(i+1)+': '+esc(l.t)+'</h3>'+l.rq.map((q,qi)=>'<div class="rvq"><p class="rvqq">'+esc(q)+'</p><p class="rvans">'+(ans[qi]?esc(ans[qi]):'<i>No answer saved.</i>')+'</p></div>').join('')+
      '<div class="btnrow"><button class="btn ghost sm" data-go="lesson:'+cid+':'+i+'">Open lesson</button></div></section>';
  }).join('');
  const lq=S.lastQ[cid];
  let quiz;
  if(lq&&lq.pick){
    quiz='<p class="meta">Last attempt: '+lq.correct+' of '+c.quiz.length+' ('+lq.pct+'%)'+(lq.date?' on '+esc(fmtDate(lq.date)):'')+'. Best score '+((S.quiz[cid]||{}).best||lq.pct)+'%.</p>'+c.quiz.map((q,qi)=>{
      const pi=lq.pick[qi],good=pi===0;
      return '<div class="rvq"><p class="rvqq">'+(qi+1)+'. '+esc(q.q)+'</p><p class="rvans '+(good?'ok':'no')+'">Your answer: '+(pi===undefined||pi===null?'<i>none</i>':esc(q.o[pi]))+' '+(good?'(correct)':'(not quite)')+'</p>'+(good?'':'<p class="rvans ok">Correct answer: '+esc(q.o[0])+'</p>')+'</div>';
    }).join('');
  }else quiz=lock('Take the assessment to see your answers and the correct answers. They are shown only after you have taken it.');
  const pd=S.proj[cid];
  const proj=(pd&&pd.done)?'<ul class="rvl">'+c.proj.d.map(d=>'<li>'+esc(d)+'</li>').join('')+'</ul><p class="rvqq">Your summary</p><p class="rvans">'+esc(pd.notes)+'</p><p class="meta">Reviewed by '+esc(pd.mentor)+(pd.date?' · submitted '+esc(fmtDate(pd.date)):'')+'</p>':lock('Submit the project to review it here.');
  return crumbs([{t:'Campus',go:'home'},{t:t.short,go:'track:'+t.id},{t:c.code,go:'course:'+cid},{t:'Review'}])+
  '<div class="thead" style="'+tc(c.track)+'"><p class="code">'+c.code+' · Review my work</p><h1>'+esc(c.title)+'</h1><p class="lede">Your written answers, assessment answers with the correct ones, and your project. Each part opens after you have completed it.</p></div>'+
  '<div class="qs rv"><h2>Lessons</h2>'+les+'<section class="rvsec"><h2>Assessment</h2>'+quiz+'</section><section class="rvsec"><h2>Project: '+esc(c.proj.t)+'</h2>'+proj+'</section><div class="btnrow"><button class="btn" data-go="course:'+cid+'">Back to course'+ic('arrow')+'</button></div></div>';
}

/* ---------- lesson ---------- */
function lessonView(cid,i){
  const c=byId[cid],t=trackOf(c.track),l=c.lessons[i],n=c.lessons.length,k=lk(c,i);
  const ans=S.ref[k]||[],ok=!!S.les[k];
  const refsOk=l.rq.every((_,q)=>(ans[q]||'').trim().length>=10);
  const rail=c.lessons.map((x,j)=>'<button data-go="lesson:'+cid+':'+j+'" aria-current="'+(j===i)+'">'+(S.les[lk(c,j)]?'<span class="ok">'+ic('check')+'</span>':'<span style="width:1.1em"></span>')+'<span>'+esc(x.t)+'</span></button>').join('');
  const nextGo=i<n-1?'lesson:'+cid+':'+(i+1):quizPassed(c)?(projDone(c)?'course:'+cid:'project:'+cid):'quiz:'+cid;
  const nextLabel=i<n-1?'Next lesson':quizPassed(c)?(projDone(c)?'Back to course':'Go to project'):'Take the assessment';
  return crumbs([{t:'Campus',go:'home'},{t:(t.cls?t.short:t.label),go:'track:'+t.id},{t:c.code,go:'course:'+cid},{t:'Lesson '+(i+1)}])+
  '<div class="lesson" style="'+tc(c.track)+'"><article class="read">'+
  '<header style="display:flex;flex-direction:column;gap:12px"><p class="eyebrow lab">'+c.code+' · Lesson '+(i+1)+' of '+n+'</p><h1 style="font-size:clamp(28px,4.6vw,44px)">'+esc(l.t)+'</h1>'+bmBtn(cid,i)+'</header>'+
  '<nav class="lsteps" aria-label="Your steps in this lesson"><b>Your steps</b><ol><li>Read the key ideas and the Scripture.</li><li>Try the "Putting it to work" ideas.</li><li class="'+(refsOk?'done':'')+'">Answer '+(l.rq.length===1?'the reflection question':l.rq.length===2?'both reflection questions':'all '+l.rq.length+' reflection questions')+' ('+l.rq.filter((_,q)=>(ans[q]||'').trim().length>=10).length+' answered).</li><li class="'+(ok?'done':'')+'">Mark the lesson complete.</li></ol></nav>'+
  '<section><div><span class="sl">Lesson</span><h2>Key ideas</h2></div><ul class="ideas">'+l.key.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></section>'+
  '<section><div><span class="sl">Biblical foundation</span><h2>What Scripture says</h2></div><div class="refs">'+l.ref.map(r=>'<span>'+esc(r)+'</span>').join('')+'</div><p>'+esc(l.bib)+'</p>'+l.ref.filter(r=>bibleText(r)).map(r=>'<details class="passage"><summary>Read '+esc(r)+'</summary><p>'+esc(bibleText(r))+'</p><small>King James Version</small></details>').join('')+'<p class="note">Read each passage in your own Bible too, in the translation your church uses, before you move on.</p></section>'+
  '<section><div><span class="sl">Practical foundation</span><h2>Putting it to work</h2></div><ul class="todo">'+l.pra.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></section>'+
  '<section><div><span class="sl">Reflection questions</span><h2>Write your answers</h2></div>'+
  l.rq.map((q,qi)=>'<div class="rq"><label for="rq'+qi+'">'+esc(q)+'</label><textarea id="rq'+qi+'" data-ref="'+cid+':'+i+':'+qi+'" placeholder="Write a few honest sentences.">'+esc(ans[qi]||'')+'</textarea></div>').join('')+'</section>'+
  lessonNote(cid,i)+'<section class="activity"><div><span class="sl">Activity</span><h2>Do this week</h2></div><div class="card"><p>'+esc(l.act)+'</p></div></section>'+
  '<footer class="lfoot">'+
  (ok?'<div class="banner" style="margin:0">'+ic('check')+'Lesson complete.</div><div class="btnrow"><button class="btn" data-go="'+nextGo+'">'+esc(nextLabel)+ic('arrow')+'</button><button class="btn ghost" data-act="undo-lesson" data-c="'+cid+'" data-i="'+i+'">Mark as not complete</button></div>':
  '<div><button class="btn" id="donebtn" data-act="done-lesson" data-c="'+cid+'" data-i="'+i+'"'+(refsOk?'':' disabled')+'>'+ic('check')+'Mark lesson complete</button></div><p class="note" id="gate" aria-live="polite">'+(refsOk?'':'Answer each reflection question with at least a sentence to complete this lesson.')+'</p>')+
  '<div class="lnav">'+(i>0?'<button class="btn ghost" data-go="lesson:'+cid+':'+(i-1)+'">'+ic('back')+'Previous</button>':'<button class="btn ghost" data-go="course:'+cid+'">'+ic('back')+'Course</button>')+
  (i<n-1?'<button class="btn ghost" data-go="lesson:'+cid+':'+(i+1)+'">Next lesson'+ic('arrow')+'</button>':'<button class="btn ghost" data-go="course:'+cid+'">Back to course'+ic('arrow')+'</button>')+'</div></footer>'+
  '</article><aside class="rail" aria-label="Lessons in this course"><h3>In this course</h3>'+rail+'</aside></div>';
}

/* ---------- quiz ---------- */
const qCountText=(n,N)=>n===N?'All '+N+' answered. Ready to submit.':n+' of '+N+' answered';
function quizView(cid){
  const c=byId[cid],t=trackOf(c.track);
  if(!QZ||QZ.cid!==cid)QZ={cid,perm:c.quiz.map(()=>shuffle([0,1,2,3])),pick:{},sub:false,res:null};
  const pass=passNeed(c);
  const qs=c.quiz.map((q,qi)=>{
    const opts=QZ.perm[qi].map(oi=>{
      const checked=QZ.pick[qi]===oi;
      let cls='opt';
      if(QZ.sub){if(oi===0)cls+=' right';else if(checked)cls+=' wrong';}
      return '<label class="'+cls+'"><input type="radio" name="q'+qi+'" value="'+oi+'" data-q="'+qi+'"'+(checked?' checked':'')+(QZ.sub?' disabled':'')+'><span>'+esc(q.o[oi])+'</span></label>';
    }).join('');
    let v='';
    if(QZ.sub){const good=QZ.pick[qi]===0;v='<p class="verdict '+(good?'ok':'no')+'">'+(good?ic('check')+'Correct':'Not quite. The right answer is highlighted.')+'</p>';}
    return '<fieldset><legend>'+(qi+1)+'. '+esc(q.q)+'</legend>'+opts+v+'</fieldset>';
  }).join('');
  let foot;
  if(QZ.sub){
    const r=QZ.res;
    foot='<div class="result"><p class="big">'+r.correct+' / '+c.quiz.length+'</p><p class="'+(r.passed?'verdict ok':'verdict no')+'">'+(r.passed?ic('check')+'Passed':'Below the pass mark of '+pass+'. Review the lessons and try again.')+'</p>'+
      '<div class="btnrow">'+(r.passed?'<button class="btn" data-go="project:'+cid+'">Go to project'+ic('arrow')+'</button>':'')+
      '<button class="btn ghost" data-act="retake">Retake assessment</button><button class="btn ghost" data-go="course:'+cid+'">Back to course</button></div></div>';
  }else{
    const all=c.quiz.every((_,qi)=>QZ.pick[qi]!==undefined);
    const nA=c.quiz.filter((_,qi)=>QZ.pick[qi]!==undefined).length;
    foot='<div class="qfoot"><button class="btn" id="subq" data-act="submit-quiz"'+(all?'':' disabled')+'>Submit answers</button><span class="qcount" id="qcount" aria-live="polite">'+qCountText(nA,c.quiz.length)+'</span></div>';
  }
  return crumbs([{t:'Campus',go:'home'},{t:(t.cls?t.short:t.label),go:'track:'+t.id},{t:c.code,go:'course:'+cid},{t:'Assessment'}])+
  '<div class="thead" style="'+tc(c.track)+'"><p class="code">'+c.code+'</p><h1>Assessment</h1><p class="lede">'+esc(c.title)+'. '+c.quiz.length+' questions, pass mark '+pass+' of '+c.quiz.length+'. You may retake it.</p></div>'+
  '<div class="qs">'+qs+foot+'</div>';
}

/* ---------- project ---------- */
function projState(cid){
  const c=byId[cid];
  if(!S.proj[cid])S.proj[cid]={d:c.proj.d.map(()=>false),notes:'',mentor:'',done:false,date:''};
  return S.proj[cid];
}
const projReady=(c,p)=>p.d.every(Boolean)&&p.notes.trim().length>=20&&p.mentor.trim().length>=2;
function projectView(cid){
  const c=byId[cid],t=trackOf(c.track),p=projState(cid);
  const dis=p.done?' disabled':'';
  return crumbs([{t:'Campus',go:'home'},{t:(t.cls?t.short:t.label),go:'track:'+t.id},{t:c.code,go:'course:'+cid},{t:'Project'}])+
  '<div class="thead" style="'+tc(c.track)+'"><p class="code">'+c.code+' · Course project</p><h1>'+esc(c.proj.t)+'</h1><p class="lede">'+esc(c.proj.b)+'</p><p class="meta">About '+c.proj.h+' hours</p></div>'+
  '<div class="qs" style="'+tc(c.track)+'"><section><h2 style="margin-bottom:6px">Deliverables</h2><p class="note">Check each one when it is finished.</p>'+
  c.proj.d.map((d,i)=>'<label class="chk"><input type="checkbox" data-pd="'+cid+':'+i+'"'+(p.d[i]?' checked':'')+dis+'><span>'+esc(d)+'</span></label>').join('')+'</section>'+
  '<div class="field"><label for="pn">Project summary</label><textarea id="pn" data-pn="'+cid+'"'+dis+' placeholder="What did you build or plan? What did you learn?">'+esc(p.notes)+'</textarea></div>'+
  '<div class="field"><label for="pm">Mentor or pastor who reviewed this project</label><input type="text" id="pm" data-pm="'+cid+'"'+dis+' value="'+esc(p.mentor)+'" placeholder="Name"></div>'+
  (p.done?'<div class="banner" style="margin:0">'+ic('check')+'Project submitted'+(p.date?' on '+esc(fmtDate(p.date)):'')+'.</div><div class="btnrow"><button class="btn" data-go="course:'+cid+'">Back to course'+ic('arrow')+'</button><button class="btn ghost" data-act="reopen-project" data-c="'+cid+'">Reopen to edit</button></div>':
  '<div><button class="btn" id="subp" data-act="submit-project" data-c="'+cid+'"'+(projReady(c,p)?'':' disabled')+'>Submit project</button></div><p class="note" id="pgate" aria-live="polite">'+(projReady(c,p)?'':'Check every deliverable, write at least a couple of sentences, and name your reviewer to submit.')+'</p>')+
  '</div>';
}

/* ---------- transcript ---------- */
function infoLines(){
  const p=S.prof;
  return [['Name',p.name||'Not entered'],[minsOf(p).length>1?'Ministries':'Ministry',minsText(p)||'Not assigned'],['Leadership role',roleOf(p)||'Not entered'],['Enrolled',fmtDate(p.enrolled)]];
}
function transcript(){
  const dc=COURSES.filter(courseDone).sort((a,b)=>((S.comp[a.id]||{}).date||'').localeCompare((S.comp[b.id]||{}).date||'')||0);
  const ip=COURSES.filter(c=>!courseDone(c)&&engaged(c));
  const T=totals();
  const info='<div class="card infocard">'+infoLines().map(x=>'<div><span class="eyebrow">'+x[0]+'</span><p><b>'+esc(x[1])+'</b></p></div>').join('')+'<div class="infoedit"><button class="btn ghost" data-go="profile">Edit profile</button></div></div>';
  const stats='<div class="statgrid">'+[[T.done+' of '+COUNTED.length,'courses completed'],[fmtH(T.ins),'instructional hours'],[fmtH(T.ev),'seminar and event hours'],[fmtH(T.cr),'academy credits'],[T.done?T.avg+'%':'—','average grade']].map(x=>'<div class="card stat"><b>'+x[0]+'</b><span>'+x[1]+'</span></div>').join('')+'</div>';
  const cred=TRACKS.map(t=>{
    const e=!!S.certs[t.id];
    return (e?'<button class="cred earned" data-go="cert:'+t.id+'"':'<div class="cred"')+' style="'+tc(t.id)+'"><span style="color:'+(e?'var(--good)':'var(--muted)')+'">'+(e?ic('award'):'<span class="dot" style="display:inline-block"></span>')+'</span><div><b>'+esc(t.cred)+'</b><small>'+(e?'Earned '+esc(fmtDate(S.certs[t.id].date))+' · View certificate':'Not yet earned')+' · '+esc(t.label)+'</small></div>'+(e?'</button>':'</div>');
  }).join('');
  const tbl=dc.length?'<div class="tscroll"><table><thead><tr><th>Code</th><th>Course</th><th>Completed</th><th>Grade</th><th>Hours</th><th>Credits</th></tr></thead><tbody>'+
    dc.map(c=>{const g=gradePct(c);return '<tr><td><span class="code" style="'+tc(c.track)+'">'+c.code+'</span></td><td>'+esc(c.title)+(OPT(c.track)?' <span class="muted">(optional, not counted)</span>':'')+'</td><td>'+esc(fmtDate((S.comp[c.id]||{}).date))+'</td><td><b>'+letter(g)+'</b> <span class="muted">'+g+'%</span></td><td>'+fmtH(hoursOf(c))+'</td><td>'+fmtH(creditsOf(c))+'</td></tr>';}).join('')+
    '<tr class="tot"><td></td><td><b>Total</b></td><td></td><td>'+T.avg+'% avg</td><td><b>'+fmtH(T.ins-ip.reduce((a,c)=>a+earned(c),0))+'</b></td><td><b>'+fmtH(T.cr)+'</b></td></tr></tbody></table></div>':
    '<div class="card"><p>No completed courses yet. Finish a course and it appears here with its completion date and grade.</p><p style="margin-top:12px"><button class="btn" data-go="'+(nextUp()?nextUp().go:'catalog')+'">'+ic('play')+'Start learning</button></p></div>';
  const prog=ip.length?'<div class="sec-h" style="margin-top:32px"><h2>In progress</h2></div><div class="grid">'+ip.map(courseCard).join('')+'</div>':'';
  const evs=S.events.length?'<div class="sec-h" style="margin-top:32px"><h2>Conferences and seminars</h2><button class="btn ghost" data-go="profile">Manage</button></div><div class="tscroll"><table><thead><tr><th>Date</th><th>Event</th><th>Type</th><th>Hours</th></tr></thead><tbody>'+
    S.events.slice().sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(e=>'<tr><td>'+esc(fmtDate(e.date))+'</td><td>'+esc(e.title)+'</td><td>'+esc(e.type)+'</td><td>'+fmtH(+e.hours||0)+'</td></tr>').join('')+'</tbody></table></div>':'';
  return '<div class="thead"><p class="eyebrow">Academic record</p><h1>Transcript</h1><p class="lede">Your official record: every completed course with its date and grade, plus your hours and credits.</p></div>'+
  info+stats+
  '<div class="btnrow" style="margin:0 0 36px"><button class="btn" data-act="pdf-transcript">'+ic('down')+'Download transcript PDF</button><button class="btn ghost" data-go="verify">'+ic('shield')+'Verify a certificate</button></div>'+
  '<div class="sec-h"><h2>Certificates</h2></div><div class="creds">'+cred+'</div>'+
  '<div class="sec-h"><h2>Courses completed</h2></div>'+tbl+waivedTbl()+prog+evs;
}

/* ---------- profile ---------- */
const MINISTRIES=['Youth','Children’s','Men’s','Women’s','Outreach','Media & Communications','Praise & Worship','Prayer','Hospitality','Usher','Administration & Finance','Pastoral Care','Other'];
const ROLES=['Church Member','Ministry Member','Assistant Ministry Director','Ministry Director','Deacon','Clergy','Minister','Pastor','Administrative','Other'];
/* older role and ministry names are carried over to the current lists */
const ROLE_OLD={'Student, not yet serving as a leader':'Church Member','Ministry team member':'Ministry Member','Ministry leader':'Ministry Director','Assistant department leader':'Assistant Ministry Director','Department leader':'Ministry Director','Pastor or elder':'Pastor','Administrative or finance team':'Administrative'};
const MIN_OLD={'Worship':'Praise & Worship'};
/* the role as written (the custom role when Other was chosen) */
const roleOf=p=>{p=p||{};const r=p.role==='Other'?(p.roleOther||'Other'):(p.role||'');return ROLE_OLD[r]||r;};
/* split a stored role into the list choice and the custom text */
const roleSplit=p=>{const r=roleOf(p);if(!r)return {sel:'',other:''};return ROLES.indexOf(r)>=0&&r!=='Other'?{sel:r,other:''}:{sel:'Other',other:r==='Other'?'':r};};
const EVTYPES=['Conference','Seminar','Workshop','Retreat','Training','Other'];
function sel(id,opts,val,blank){
  const list=opts.slice();if(val&&list.indexOf(val)<0)list.unshift(val);
  return '<select id="'+id+'"><option value="">'+esc(blank)+'</option>'+list.map(o=>'<option'+(o===val?' selected':'')+'>'+esc(o)+'</option>').join('')+'</select>';
}
function profile(){
  const p=S.prof;
  const evt=S.events.length?'<div class="tscroll"><table><thead><tr><th>Date</th><th>Event</th><th>Type</th><th>Hours</th><th><span class="sr">Remove</span></th></tr></thead><tbody>'+
    S.events.slice().sort((a,b)=>String(b.date).localeCompare(String(a.date))).map(e=>'<tr><td>'+esc(fmtDate(e.date))+'</td><td>'+esc(e.title)+'</td><td>'+esc(e.type)+'</td><td>'+fmtH(+e.hours||0)+'</td><td><button class="icon-btn" data-act="del-event" data-id="'+esc(e.id)+'" aria-label="Remove '+esc(e.title)+'">'+ic('trash')+'</button></td></tr>').join('')+'</tbody></table></div>':
    '<div class="card"><p class="muted">No events logged yet. Add conferences, seminars, and trainings you attend. Their hours count toward your total and your Practical Experience score.</p></div>';
  return '<div class="thead"><p class="eyebrow">Student profile</p><h1>Academy Information</h1><p class="lede">Add your details and a picture, then press Save profile. Your name is printed on your transcript and certificates.</p></div>'+
  '<div id="pcardw">'+profCard(S.prof,true)+'</div>'+
  profileForm()+
  '<div class="sec-h" style="margin-top:40px"><h2>Conferences and seminars</h2><span class="meta">'+fmtH(totals().ev)+' hours logged</span></div>'+
  '<form class="card formgrid evform" data-form="event" onsubmit="return false">'+
  '<div class="field"><label for="ev-title">Event name</label><input type="text" id="ev-title" placeholder="e.g. Leadership Summit"></div>'+
  '<div class="field"><label for="ev-type">Type</label>'+sel('ev-type',EVTYPES,'Conference','')+'</div>'+
  '<div class="field"><label for="ev-date">Date</label><input type="date" id="ev-date" value="'+isoToday()+'"></div>'+
  '<div class="field"><label for="ev-hours">Hours</label><input type="number" id="ev-hours" min="0.5" max="80" step="0.5" value="2"></div>'+
  '<div class="field evbtn"><button class="btn" type="button" data-act="add-event">'+ic('plus')+'Add event</button></div></form>'+
  '<p class="note" id="evmsg" aria-live="polite" style="margin:8px 0 16px"></p>'+evt+
  settingsHtml();
}

/* ---------- notifications ---------- */
const NLAB={enroll:'Enrollment',complete:'Course complete',failed:'Assessment',cert:'Certificate',unlock:'Unlocked',welcome:'Welcome',review:'Instructor'};
function notifications(){
  const un=Object.keys(NEWN).length;
  const items=S.notes.length?'<ul class="nlist">'+S.notes.map(n=>{
    const m=/BFM-([123ABDNTV])-/.exec(n.msg||'');
    return '<li class="note-i '+n.type+(NEWN[n.id]?' unread':'')+'"><span class="nbadge">'+esc(NLAB[n.type]||'Notice')+'</span><div class="nbody"><p>'+esc(n.msg)+'</p><small>'+esc(fmtStamp(n.at))+'</small></div>'+
      (n.type==='cert'&&m&&S.certs[m[1]]?'<button class="btn ghost sm" data-go="cert:'+m[1]+'">View</button>':'')+'</li>';
  }).join('')+'</ul>':'<div class="card"><p class="muted">Nothing here yet. You will see enrollments, completed courses, assessments you did not pass, and certificates.</p></div>';
  return '<div class="thead"><p class="eyebrow">Notifications</p><h1>Notifications</h1><p class="lede">'+(un?un+' new since you last looked.':'You are all caught up.')+'</p></div>'+items;
}

/* ---------- admin ---------- */

/* ---------- readiness ---------- */
function readinessView(){
  const d=director(),r=d.r;
  const rows=COMPS.map((c,i)=>'<li class="rd"><div class="rd-h"><span>'+esc(c.n)+'</span><b>'+r.vals[i]+'%</b></div>'+bar(r.vals[i])+'</li>').join('');
  const p1=trackPct('1')>0||COURSES.some(started);
  return '<div class="thead"><p class="eyebrow">Leadership readiness</p><h1>Leadership Readiness</h1><p class="lede">Seven areas the Academy looks for before a leader is given more responsibility. Every area starts at 0% and grows as you finish courses.</p></div>'+
  '<section class="director card"><div class="dir-l"><p class="eyebrow">'+(S.admin?'Academy Director view':'Your readiness summary')+'</p><h2 class="dir-s">'+esc(d.status)+'</h2>'+
  '<p><b>Recommended next step:</b> '+esc(d.next)+'</p>'+
  (p1?'<p class="muted"><b>Focus area:</b> '+esc(d.weak.n)+' ('+d.weak.v+'%)</p>':'')+
  (d.go?'<div class="btnrow"><button class="btn" data-go="'+d.go+'">Go there'+ic('arrow')+'</button></div>':'')+'</div>'+
  '<div class="dir-n"><b>'+r.overall+'%</b><span>overall readiness</span></div></section>'+
  '<h2 style="margin:36px 0 14px">Readiness by area</h2><ul class="rds">'+rows+'</ul>'+
  '<p class="note" style="margin-top:20px;max-width:70ch">Each course builds one or more of these areas. A score rises as you finish related courses and is weighted by your assessment grades. Conferences and seminars add to Practical Experience. 100% means you completed the standard pathway through Track 3 with strong grades.</p>';
}

/* ---------- certificates ---------- */
function qrSvg(text){
  if(typeof qrcode==='undefined')return '';
  try{
    const q=qrcode(0,'M');q.addData(text);q.make();
    const n=q.getModuleCount();let d='';
    for(let r=0;r<n;r++)for(let c=0;c<n;c++)if(q.isDark(r,c))d+='M'+(c+4)+' '+(r+4)+'h1v1h-1z';
    return '<svg class="qr" viewBox="0 0 '+(n+8)+' '+(n+8)+'" role="img" aria-label="QR code for certificate verification" shape-rendering="crispEdges"><rect width="100%" height="100%" fill="#fff"/><path d="'+d+'" fill="#000"/></svg>';
  }catch(e){return '';}
}
const fmtLong=s=>{const p=String(s||'').split('-');if(p.length<3)return s||'';return new Date(+p[0],+p[1]-1,+p[2]).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});};
function stdTotals(t){
  let h=0,cr=0;
  if(FLAT(t))COURSES.filter(c=>c.track===t).forEach(c=>{h+=hoursOf(c);cr+=creditsOf(c);});
  else{
    coresOf(t).forEach(c=>{h+=hoursOf(c);cr+=creditsOf(c);});
    const ks=keysOf(t);let ah=0,ac=0;
    ks.forEach(k=>pairOf(t,k).forEach(c=>{ah+=hoursOf(c);ac+=creditsOf(c);}));
    h+=ah/ks.length;cr+=ac/ks.length;
  }
  return {h:Math.round(h*2)/2,cr:Math.round(cr*2)/2};
}
function certCard(c,tid){
  const t=trackOf(tid),url=verifyUrl(c,tid);
  const sig=c.signer?
    '<div class="sig"><span class="sig-s">'+esc(c.signer)+'</span><i></i><b>'+esc(c.signer)+'</b><small>'+esc(c.signerTitle||'')+'</small></div>':
    '<div class="sig"><span class="sig-s">&nbsp;</span><i></i><b>Academy Director</b><small>BFM Academy</small></div>';
  return '<article class="certificate" aria-label="'+esc(t.cred)+'"><span class="orn o1"></span><span class="orn o2"></span><span class="orn o3"></span><span class="orn o4"></span>'+
  '<div class="seal" aria-hidden="true"><b>BFM</b><small>Academy</small></div>'+
  '<p class="cert-org">Bushwick Family Ministries &nbsp;·&nbsp; BFM Academy</p>'+
  '<p class="cert-k">Certificate of Completion</p>'+
  '<p class="cert-s">This certificate is proudly presented to</p><h1 class="cert-n">'+esc(c.name)+'</h1>'+
  '<p class="cert-s">for successfully completing all requirements of the</p>'+
  '<h2 class="cert-t">'+esc(t.cred)+'</h2><p class="cert-s">'+esc(t.label)+': '+esc(t.title)+'</p>'+
  '<div class="cert-f">'+sig+
  '<div class="sig"><span class="sig-d">'+esc(fmtLong(c.date))+'</span><i></i><b>Date</b><small>'+fmtH(c.hours)+' hours · '+fmtH(c.credits)+' credits</small></div>'+
  '<div class="cert-q">'+qrSvg(url)+'<small>Scan to verify</small></div></div>'+
  '<p class="cert-id">Certificate ID <span class="mono">'+esc(c.id)+'</span></p></article>';
}
function certView(tid){
  const t=trackOf(tid),c=S.certs[tid];
  if(!t)return home();
  if(!c)return crumbs([{t:'Campus',go:'home'},{t:'Transcript',go:'transcript'},{t:'Certificate'}])+'<div class="thead"><h1>Certificate</h1><p class="lede">You have not earned the '+esc(t.cred)+' yet. Complete '+esc(t.label)+' to receive it.</p><div><button class="btn" data-go="track:'+tid+'">Go to '+esc(t.label)+'</button></div></div>';
  const url=verifyUrl(c,tid),stale=(S.prof.name||'').trim()&&(S.prof.name||'').trim()!==c.name;
  return crumbs([{t:'Campus',go:'home'},{t:'Transcript',go:'transcript'},{t:'Certificate'}])+
  '<div class="certwrap" data-t="'+tid+'">'+certCard(c,tid)+
  '<div class="btnrow" style="margin-top:20px"><button class="btn" data-act="pdf-cert" data-t="'+tid+'">'+ic('down')+'Download certificate PDF</button><button class="btn ghost" data-go="verify:'+certPayload(c,tid)+'">'+ic('shield')+'Open verification page</button>'+(stale?'<button class="btn ghost" data-act="cert-name" data-t="'+tid+'">Update name to '+esc(S.prof.name.trim())+'</button>':'')+'</div>'+
  '<p class="note" style="margin-top:12px;word-break:break-all">Verification link: '+esc(url)+'</p></div>';
}
function icertView(i){
  const r=S.issued[+i];
  if(!r)return adminView();
  return crumbs([{t:'Campus',go:'home'},{t:'Admin',go:'admin'},{t:'Issued certificate'}])+
  '<div class="certwrap" data-t="'+r.tid+'">'+certCard(r.c,r.tid)+
  '<div class="btnrow" style="margin-top:20px"><button class="btn" data-act="pdf-icert" data-i="'+i+'">'+ic('down')+'Download certificate PDF</button><button class="btn ghost" data-go="verify:'+certPayload(r.c,r.tid)+'">'+ic('shield')+'Open verification page</button><button class="btn ghost" data-go="admin">Back to Admin</button></div>'+
  '<p class="note" style="margin-top:12px;word-break:break-all">Verification link: '+esc(verifyUrl(r.c,r.tid))+'</p></div>';
}
function verifyView(tok){
  let res=tok?checkPayload(tok):null;
  if(!S.admin&&res){
    /* students may only see their own certificates, never details of anyone else's */
    const mine=res.o&&Object.keys(S.certs).some(k=>S.certs[k].id===res.o.i);
    if(!mine)res={ok:false,why:'This certificate is not in your own records. For privacy, only the Academy Director can verify certificates that belong to other people.',o:null};
  }
  const o=res&&res.o;
  let out='';
  if(res){
    const t=o&&trackOf(o.k),local=o&&S.certs[o.k]&&S.certs[o.k].id===o.i;
    out='<div class="card vres '+(res.ok?'good':'bad')+'"><p class="vhead">'+(res.ok?ic('check')+'Details are consistent':ic('x')+'Could not verify')+'</p>'+
      (o?'<dl class="vdl"><div><dt>Name</dt><dd>'+esc(o.n)+'</dd></div><div><dt>Credential</dt><dd>'+esc(t?t.cred:'Unknown')+'</dd></div><div><dt>Date</dt><dd>'+esc(fmtDate(o.d))+'</dd></div>'+(o.s?'<div><dt>Signed by</dt><dd>'+esc(o.s)+(o.st?', '+esc(o.st):'')+'</dd></div>':'')+'<div><dt>Hours</dt><dd>'+esc(o.h)+'</dd></div><div><dt>Certificate ID</dt><dd class="mono">'+esc(o.i)+'</dd></div></dl>':'')+
      (res.ok?'':'<p>'+esc(res.why)+'</p>')+(local?'<p class="verdict ok">'+ic('check')+'This certificate is in this browser’s own records.</p>':'')+
      '<p class="note">This confirms the ID matches the name, credential, and date printed on the certificate.'+(S.admin?' Use the Records tab to check it against the Academy records.':'')+'</p></div>';
  }
  let manual='';
  if(VFR){
    const m=VFR.m,loc=Object.keys(S.certs).map(k=>({k,c:S.certs[k]})).find(x=>x.c.id===VFR.id);
    manual='<div class="card vres '+(loc?'good':m?'':'bad')+'"><p class="vhead">'+(loc?ic('check')+(S.admin?'Found in this browser’s records':'Found in your records'):m?(S.admin?'Format is valid':'Not in your records'):ic('x')+'Not a valid certificate ID')+'</p>'+
      (loc?'<p>'+esc(loc.c.name)+' · '+esc(trackOf(loc.k).cred)+' · '+esc(fmtDate(loc.c.date))+'</p>':m?(S.admin?'<p>This browser has no record of that ID. Check the Records tab for shared records.</p>':'<p>This ID is not in your own records. For privacy, only the Academy Director can verify certificates that belong to other people.</p>'):'<p>IDs look like BFM-2-26-K7M4Q-9XT.</p>')+'</div>';
  }
  return crumbs([{t:'Campus',go:'home'},{t:'Verify certificate'}])+
  '<div class="thead"><p class="eyebrow">Certificate verification</p><h1>Verify a Certificate</h1><p class="lede">'+(S.admin?'Every certificate has a unique ID and a QR code. Scan the code, or enter the ID below.':'Check that one of your own certificates is genuine. You can only see your own records here. Certificates that belong to other people can only be verified by the Academy Director.')+'</p></div>'+
  out+
  '<form class="card formgrid vform" onsubmit="return false"><div class="field" style="grid-column:1/-1"><label for="vf-id">Certificate ID</label><input type="text" id="vf-id" autocomplete="off" autocapitalize="characters" placeholder="BFM-2-26-K7M4Q-9XT" value="'+esc(VFR?VFR.id:'')+'"></div><div class="field"><button class="btn" type="button" data-act="verify-id">Check ID</button></div></form>'+manual;
}

/* ---------- router ---------- */
let NOPEN=false,NNEW={};
function npopHtml(){
  if(S.admin)return npopAdminHtml();
  const L=S.notes.slice(0,5);
  return '<div class="np-h"><b>Notifications</b><small>'+(S.notes.length?'Recent':'')+'</small></div>'+
    (L.length?L.map(n=>'<div class="np-i'+(NNEW[n.id]?' new':'')+'"><span>'+esc(NLAB[n.type]||'Notice')+'</span><p>'+esc(n.msg)+'</p><small>'+esc(fmtStamp(n.at))+'</small></div>').join(''):'<p class="np-e">Nothing yet. Enrollments, completed courses, and certificates show up here.</p>')+
    '<button class="np-f" data-go="notifications">View all notifications</button>';
}
function renderNav(){
  const n=V.n;
  const cur=n==='home'?'home':(n==='readiness'||(S.admin&&(n==='admin'||n==='icert')))?'readiness':(n==='transcript'||n==='cert'||n==='verify')?'transcript':(['catalog','track','course','lesson','quiz','project','guide','review','manual'].includes(n)?'catalog':'');
  const items=S.admin?[['home','Campus AD'],['catalog','Catalog'],['readiness','Admin'],['transcript','Records']]:[['home','Campus'],['catalog','Catalog'],['readiness','Readiness'],['transcript','Transcript']];
  $('#nav').innerHTML=items.map(x=>'<button data-go="'+x[0]+'"'+(cur===x[0]&&!['profile','notifications'].includes(n)?' aria-current="page"':'')+'>'+x[1]+'</button>').join('')+'<a class="navext" href="https://www.bushwickfamcogop.org/" target="_blank" rel="noopener noreferrer">BFM Website'+ic('ext')+'</a>';
  const BI={home:'<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',catalog:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5zM4 19a2 2 0 0 1 2-2h13"/>',readiness:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',transcript:'<path d="M7 3h8l4 4v14H7zM15 3v4h4M10 12h6M10 16h6"/>',profile:'<circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4 4-6 8-6s7.2 2 8 6"/>'};
  const bn=$('#bnav');
  if(bn&&bn.innerHTML!==undefined){const pc=n==='profile';bn.innerHTML=items.concat([['profile',S.admin?'Profile':'Profile']]).map(x=>{const on=x[0]==='profile'?pc:(cur===x[0]&&!['profile','notifications'].includes(n));return '<button data-go="'+x[0]+'"'+(on?' aria-current="page"':'')+'><svg class="ic" viewBox="0 0 24 24" aria-hidden="true">'+BI[x[0]]+'</svg><span>'+x[1]+'</span></button>';}).join('');}
  const u=S.admin?admUnread():unread();
  $('#bell').innerHTML=ic('bell')+(u?'<span class="badge">'+(u>9?'9+':u)+'</span>':'');
  $('#bell').setAttribute('aria-label','Notifications'+(u?', '+u+' unread':''));
  const np=$('#npop');if(np){np.innerHTML=npopHtml();np.hidden=!NOPEN;}
  $('#bell').setAttribute('aria-expanded',NOPEN?'true':'false');
  const nm=(S.prof.name||'').trim(),ini=nm?nm.split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase():'';
  applySettings();
  if(typeof renderFoot==='function')renderFoot();
  $('#avatar').innerHTML=S.admin?'<b class="av-ad">AD</b>':S.prof.pic?'<img class="av-img" alt="" src="'+esc(S.prof.pic)+'">':'<svg class="ic" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><circle cx="12" cy="8.5" r="4.2"/><path d="M3.8 21c.6-4.4 4-6.6 8.2-6.6s7.6 2.2 8.2 6.6z"/></svg>';
  $('#avatar').setAttribute('aria-label',S.admin?'Academy Director profile':'Profile'+(nm?': '+nm:''));
  $('#prev').checked=!!S.preview;
  const pw=$('#prevwrap');if(pw)pw.hidden=true;
  const bw=$('.bellwrap');if(bw)bw.hidden=false;
  if(typeof drawChat==='function')drawChat();
}
function resolve(){
  let n=V.n,a=V.a;
  if(n==='manual'){const mc=manualCourse(a[0]);if(!mc||!MANUALS[a[0]]||!MTPL[a[0]])n='home';else if(manLock(a[0])){n='course';a=[mc.id];}}
  if(['lesson','quiz','project','guide','review'].includes(n)){
    const c=byId[a[0]];
    if(!c)n='home';
    else if(n==='review'&&(!isCls(c.track)||lockMsg(c))){n='course';a=[a[0]];}
    else if(lockMsg(c)||(n==='quiz'&&!quizOpen(c))||(n==='project'&&!projOpen(c))){n='course';a=[a[0]];}
  }
  if(['course','track'].includes(n)&&!(n==='course'?byId[a[0]]:trackOf(a[0])))n='home';
  V={n,a};
  return V;
}
function viewHtml(){
  const v=resolve(),n=v.n,a=v.a;
  if(S.admin){
    if(n==='home')return adminCampus();
    if(n==='catalog')return adminCatalog();
    if(n==='readiness')return adminHub();
    if(n==='transcript')return recordsView(a);
  }
  if(n==='home')return home();
  if(n==='saved')return savedView();
  if(n==='news')return newsView();
  if(n==='catalog')return catalog();
  if(n==='track')return trackView(a[0]);
  if(n==='course')return courseView(a[0]);
  if(n==='lesson')return lessonView(a[0],Math.max(0,Math.min(+a[1]||0,byId[a[0]].lessons.length-1)));
  if(n==='quiz')return quizView(a[0]);
  if(n==='review')return reviewView(a[0]);
  if(n==='project')return projectView(a[0]);
  if(n==='transcript')return transcript();
  if(n==='profile')return S.admin?adminView(['profile']):profile();
  if(n==='notifications')return notifications();
  if(n==='readiness')return readinessView();
  if(n==='cert')return certView(a[0]);
  if(n==='verify')return verifyView(a[0]);
  if(n==='admin')return adminView(a);
  if(n==='guide')return guideView(a[0],a[1]);
  if(n==='manual')return manualView(a[0]);
  if(n==='resources')return resourcesView();
  if(n==='faq')return faqView();
  if(n==='privacy')return privacyView();
  if(n==='mycerts')return myCertsView();
  if(n==='icert')return S.admin?icertView(a[0]):home();
  return home();
}
function render(){
  let h=viewHtml();
  if(V.n!=='home'){
    /* go back one level: the last linked breadcrumb is the parent page */
    let go='home',lab=S.admin?'Campus AD':'Campus';
    const cm=h.match(/<nav class="crumbs"[^]*?<\/nav>/);
    if(cm){const ls=[...cm[0].matchAll(/<button data-go="([^"]+)">([^<]*)<\/button>/g)];if(ls.length){const l=ls[ls.length-1];go=l[1];lab=l[2];}}
    if(lab==='Campus'&&S.admin)lab='Campus AD';
    h='<div class="backrow"><button class="backbtn" data-go="'+go+'">'+ic('arrow')+'Back to '+lab+'</button></div>'+h;
  }
  $('#app').innerHTML=h;
  renderNav();
  afterRender();
}
/* ================= App: admin tools, requests, profile extras, study guides ================= */

/* ---------- settings ---------- */
const STG0={theme:'system',size:100,dys:false,hc:false,calm:false,ls:0,goal:0};
function stg(){const s=S.settings||{},o=Object.assign({},STG0,s);if(s.large&&!s.size)o.size=112;return o;}
function applySettings(){
  try{
    const st=stg(),r=document.documentElement;
    if(r&&r.setAttribute){
      if(st.theme==='light'||st.theme==='dark')r.setAttribute('data-theme',st.theme);else r.removeAttribute('data-theme');
      const flag=(n,on)=>on?r.setAttribute(n,'1'):r.removeAttribute(n);
      flag('data-dys',st.dys);flag('data-hc',st.hc);flag('data-calm',st.calm);
      if(st.ls)r.setAttribute('data-ls',String(st.ls));else r.removeAttribute('data-ls');
    }
    if(document.body&&document.body.style)document.body.style.zoom=st.size===100?'':String(st.size/100);
  }catch(e){}
}
function settingsHtml(admin){
  const st=stg();
  const seg=(k,v,l,cur)=>'<button type="button" class="seg'+(String(cur)===String(v)?' on':'')+'" data-act="set-opt" data-k="'+k+'" data-v="'+v+'" aria-pressed="'+(String(cur)===String(v))+'">'+l+'</button>';
  const onoff=(k,cur)=>seg(k,'0','Off',cur?'1':'0')+seg(k,'1','On',cur?'1':'0');
  const row=(t,p,ctl,lab)=>'<div class="setrow"><div><b>'+t+'</b><p class="note">'+p+'</p></div><div class="segs" role="group" aria-label="'+(lab||t)+'">'+ctl+'</div></div>';
  return (typeof tourCard==='function'?tourCard():'')+'<div class="sec-h" style="margin-top:44px"><h2>Settings</h2><span class="meta">Saved on this device.</span></div>'+
  '<div class="card settings">'+
  '<p class="setgrp">Text and display</p>'+
  row('Appearance','Light, dark, or follow your device.',seg('theme','system','Auto',st.theme)+seg('theme','light','Light',st.theme)+seg('theme','dark','Dark',st.theme),'Theme')+
  '<div class="setrow"><div><b>Text size</b><p class="note">Drag to make everything bigger or smaller.</p></div><div class="sizectl"><span class="sz-a" aria-hidden="true">A</span><input type="range" id="set-size" min="90" max="150" step="5" value="'+st.size+'" aria-label="Text size"><span class="sz-b" aria-hidden="true">A</span><output id="sz-out">'+st.size+'%</output><button type="button" class="btn ghost sm" data-act="set-size-reset">Reset</button></div></div>'+
  row('Dyslexia-friendly font','Switches to Lexend with wider letter and word spacing.',onoff('dys',st.dys))+
  row('Line spacing','More space between lines makes long lessons easier to read.',seg('ls','0','Normal',st.ls)+seg('ls','1','Relaxed',st.ls)+seg('ls','2','Extra',st.ls))+
  row('High contrast','Darker text and stronger borders.',onoff('hc',st.hc))+
  row('Reduce motion','Turns off animations and smooth scrolling.',onoff('calm',st.calm))+
  (admin?'':'<p class="setgrp">Study helpers</p>'+
  row('Weekly study goal','Pick how many lessons you want to finish each week. We will show your progress and send a gentle reminder.',seg('goal','0','Off',st.goal)+seg('goal','1','1',st.goal)+seg('goal','2','2',st.goal)+seg('goal','3','3',st.goal)+seg('goal','5','5',st.goal),'Lessons per week')+
  '<div class="setrow"><div><b>Bookmarks and notes</b><p class="note">Every lesson you bookmarked and every private note you wrote.</p></div><button class="btn ghost sm" data-go="saved">'+ic('bookmark')+'Open</button></div>'+
  '<div class="setrow"><div><b>Study guides</b><p class="note">Open any course and use Study guide to download or print it.</p></div><button class="btn ghost sm" data-go="catalog">Browse courses</button></div>')+
  '</div>'+
  (admin?'':
  '<div class="danger"><h3>Reset progress</h3><p class="note">This erases lessons, answers, scores, projects, certificates, events, and notifications saved in this browser. Your profile, bookmarks, and notes stay.</p>'+
  (RESET?'<div class="btnrow"><button class="btn" data-act="reset2">Yes, erase everything</button><button class="btn ghost" data-act="reset0">Cancel</button></div>':'<button class="btn ghost" data-act="reset1">Reset progress</button>')+'</div>'+
  '<div class="danger"><h3>Delete my profile</h3><p class="note">Removes your profile, picture, progress, and certificates from this browser'+(DB?' and your saved record from the Academy':'')+'. This cannot be undone.</p>'+
  (DELP?'<div class="btnrow"><button class="btn" data-act="del-prof2">Yes, delete my profile</button><button class="btn ghost" data-act="del-prof0">Cancel</button></div>':'<button class="btn ghost" data-act="del-prof1">Delete profile</button>')+'</div>');
}
var DELP=false;

/* ---------- profile ---------- */
function profileForm(){
  const p=S.prof;
  const pic=p.pic?'<img class="pf-pic" alt="Your profile picture" src="'+esc(p.pic)+'">':'<span class="pf-pic empty"><svg class="ic" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><circle cx="12" cy="8.5" r="4.2"/><path d="M3.8 21c.6-4.4 4-6.6 8.2-6.6s7.6 2.2 8.2 6.6z"/></svg></span>';
  return '<form class="card pform" data-form="prof" onsubmit="return false">'+
  '<div class="picrow">'+pic+'<div><b>Profile picture</b><p class="note">It shows in the top bar and on your student profile. A square photo works best.</p>'+
  '<div class="btnrow"><label class="btn ghost sm filebtn" for="pf-pic">'+ic('plus')+(p.pic?'Choose a new picture':'Add a picture')+'</label><input type="file" id="pf-pic" accept="image/*" class="sr">'+(p.pic?'<button type="button" class="btn ghost sm" data-act="pic-edit">'+ic('edit')+'Crop and resize</button><button type="button" class="btn ghost sm" data-act="pic-remove">Remove</button>':'')+'</div><p class="note" id="picmsg" aria-live="polite"></p></div></div>'+
  '<div class="formgrid" style="padding:0;border:0;background:none;box-shadow:none">'+
  '<div class="field"><label for="pf-name">Full name</label><input type="text" id="pf-name" autocomplete="name" value="'+esc(p.name)+'" placeholder="As it should appear on your certificate"></div>'+
  '<div class="field"><label for="pf-role">Leadership role</label>'+sel('pf-role',ROLES,roleSplit(p).sel,'Not entered')+'<input type="text" id="pf-role-other" class="roleother" placeholder="Type your role" maxlength="60" value="'+esc(roleSplit(p).other)+'"'+(roleSplit(p).sel==='Other'?'':' hidden')+' aria-label="Your role"></div>'+
  '<div class="field"><label for="pf-enrolled">Enrollment date</label><input type="date" id="pf-enrolled" value="'+esc(p.enrolled)+'"></div>'+
  minBlock()+
  '<div class="field" style="grid-column:1/-1"><label for="pf-facts">Fun facts and interests</label><textarea id="pf-facts" rows="3" maxlength="400" placeholder="For example: I love hiking, cooking for my family, and playing the drums.">'+esc(p.facts||'')+'</textarea></div>'+
  '<div class="field" style="grid-column:1/-1"><label for="pf-scripture">Favorite scripture</label><textarea id="pf-scripture" rows="2" maxlength="300" placeholder="For example: Philippians 4:13, I can do all things through Christ who strengthens me.">'+esc(p.scripture||'')+'</textarea></div></div>'+
  '<div class="btnrow" style="margin-top:6px"><button type="button" class="btn big" data-act="save-profile">'+ic('check')+'Save profile</button></div><p class="note" id="pfmsg" aria-live="polite"></p></form>';
}
function readPic(file){
  return new Promise((res,rej)=>{
    const fr=new FileReader();
    fr.onload=()=>{const im=new Image();im.onload=()=>{
      const s=192,cv=document.createElement('canvas');cv.width=cv.height=s;const x=cv.getContext('2d');
      const m=Math.min(im.width,im.height),sx=(im.width-m)/2,sy=(im.height-m)/2;
      x.drawImage(im,sx,sy,m,m,0,0,s,s);res(cv.toDataURL('image/jpeg',0.85));};im.onerror=rej;im.src=fr.result;};
    fr.onerror=rej;fr.readAsDataURL(file);
  });
}
function extChange(t){
  if(t.id==='admmin'){ADMM=t.value;const r=$('#admres');if(r)r.innerHTML=studentCards();return true;}
  if(t.id==='pf-pic'){
    const f=t.files&&t.files[0],msg=$('#picmsg');
    if(!f)return true;
    if(f.size>10*1024*1024){if(msg)msg.textContent='That picture is too large. Choose one under 10 MB.';return true;}
    workCopy(f).then(u=>openCropper(u,true)).catch(()=>{const m=$('#picmsg');if(m)m.textContent='That file could not be read as a picture.';});
    t.value='';
    return true;
  }
  return false;
}

/* ---------- shared records (database) ---------- */
var DB=null,UID='',PUSHT=null,LASTPUSH='',SHARED_ERR='';
var ADM={in:{},out:{},err:'',ready:false,watching:false};
function inboxDoc(force){
  const prog={},work={};
  COURSES.forEach(c=>{
    const has=engaged(c)||waived(c);
    if(!has)return;
    prog[c.id]=coursePct(c);
    const w={};
    c.lessons.forEach((l,i)=>{
      const k=lk(c,i),a=S.ref[k];
      if((a&&a.some(x=>x))||S.les[k]){w.l=w.l||{};w.l[i]={r:(a||[]).map(x=>String(x||'').slice(0,1500)),ok:!!S.les[k]};}
    });
    if(S.quiz[c.id])w.q={best:S.quiz[c.id].best||0,passed:!!S.quiz[c.id].passed};
    const p=S.proj[c.id];
    if(p)w.p={d:p.d,notes:String(p.notes||'').slice(0,3000),mentor:p.mentor||'',done:!!p.done,date:p.date||''};
    if(Object.keys(w).length)work[c.id]=w;
  });
  const comp={},cg={},crt={};Object.keys(S.comp).forEach(k=>{comp[k]=S.comp[k].date;const c=byId[k];if(c)cg[k]=gradePct(c);});
  Object.keys(S.certs||{}).forEach(k=>{const x=S.certs[k];crt[k]={id:x.id,date:x.date,name:x.name,hours:x.hours,credits:x.credits};});
  let rd=null;try{const x=readiness();rd={o:x.overall,v:x.vals,s:director().status};}catch(e){}
  const ev=(S.events||[]).slice(0,60).map(e=>({date:e.date,title:String(e.title||'').slice(0,120),type:e.type||'',hours:+e.hours||0}));
  return {uid:UID||'local',cg,crt,ev,rd,prof:{name:S.prof.name||'',ministry:S.prof.ministry||'',ministries:minsOf(S.prof),role:roleOf(S.prof),enrolled:S.prof.enrolled||'',pic:S.prof.pic||'',facts:String(S.prof.facts||'').slice(0,400),scripture:String(S.prof.scripture||'').slice(0,300)},enr:S.enr,prog,work,comp,reqs:S.reqs,cal:S.cal||'',calAt:S.calAt||0,msgs:(S.msgs||[]).slice(-40),at:Date.now()};
}
function pushSoon(){
  if(!DB||!UID)return;
  clearTimeout(PUSHT);PUSHT=setTimeout(pushNow,1800);
}
function pushNow(){
  if(!DB||!UID||S.admin)return;
  const has=(S.prof.name||'').trim()||Object.keys(S.enr).length||Object.keys(S.les).length;
  if(!has)return;
  const d=inboxDoc(),sig=JSON.stringify(Object.assign({},d,{at:0}));
  if(sig===LASTPUSH)return;
  LASTPUSH=sig;
  try{DB.doc('inbox/'+UID).set(d).then(()=>{SHARED_ERR='';},e=>{SHARED_ERR=(e&&e.code)||'error';LASTPUSH='';});}catch(e){SHARED_ERR='error';LASTPUSH='';}
}
function applyOutbox(o){
  o=o||{};
  let changed=false;
  if(o.removedAt&&o.removedAt>(S.seenRemoved||0)){
    const keep={settings:S.settings,seenRemoved:o.removedAt};
    S=defaults();Object.assign(S,keep);S.welcomed=true;LASTPUSH='';
    toast('Your profile was removed by an administrator.');
    save();render();return;
  }
  const old=S.grades||{};
  const g=o.grades||{};
  Object.keys(g).forEach(cid=>{
    if(!old[cid]||old[cid].at!==g[cid].at){const c=byId[cid];if(c){note('review','Instructor feedback on '+c.code+': '+(g[cid].score!=null?g[cid].score+'%':'reviewed')+'.');changed=true;}}
  });
  const oldSk=Object.keys(S.skips||{}).length,oldAcc=Object.assign({},S.access||{});
  S.grades=g;S.skips=o.skips||{};S.access=o.access||{};S.denied=o.denied||{};
  Object.keys(S.reg||{}).forEach(t=>{
    const q=(S.reqs||{})['reg_'+t];
    if(q&&((S.denied||{})['reg_'+t]||0)>=q.at&&!S.access['r:'+t]){delete S.reg[t];const tr=trackOf(t);note('review','Your registration for '+(tr?tr.title:'the class')+' was not approved. Please contact the Academy Director.');changed=true;}
  });
  Object.keys(S.access).forEach(k=>{if(k.indexOf('r:')===0&&!oldAcc[k]){const tr=trackOf(k.slice(2));if(tr){note('enroll','Your registration for '+tr.title+' was confirmed by the Academy Director.');changed=true;}}});
  if(S.access.A&&!S.enrolledA){S.enrolledA=true;note('enroll','Permission granted. You can now start Track A: Administrative Church Leadership.');changed=true;}
  if(S.access.T&&!S.enrolledT){S.enrolledT=true;note('enroll','Permission granted. You can now start the BFM Teacher Certification.');changed=true;}
  if(typeof hubReplies==='function'&&hubReplies(o))changed=true;
  if(o.cal&&o.cal.at>(S.calAt||0)){S.cal=o.cal.k||null;S.calAt=o.cal.at;note('review',o.cal.k?'Your ministry was set to '+specFull(o.cal.k)+'.':'Your ministry choice was reset. You can choose again.');changed=true;}
  Object.keys(S.access).forEach(k=>{
    if(oldAcc[k])return;
    if(k==='D'){note('enroll','Permission granted. You can now start the BFM Discipleship Class.');changed=true;}
    else if(k==='T'||k==='A')changed=true;
    else if(k.indexOf('u:')===0){const uc=byId[k.slice(2)];if(uc){note('enroll','An administrator unlocked '+uc.code+', '+uc.title+', for you.');changed=true;}}
  });
  if(Object.keys(S.skips).length>oldSk){note('review','An administrator waived a course for you.');changed=true;}
  if(o.prof&&o.prof.at>(S.prof.editAt||0)){
    {const oldM=S.prof.ministry;['name','ministry','role','enrolled'].forEach(k=>{if(o.prof[k]!=null)S.prof[k]=o.prof[k];});if(o.prof.ministry!=null&&o.prof.ministry!==oldM)S.prof.ministries=o.prof.ministry?[o.prof.ministry]:[];}
    S.prof.editAt=o.prof.at;changed=true;
  }
  sync();
  softRefresh();
}
function softRefresh(){
  try{const a=document.activeElement;if(a&&a.closest&&a.closest('#app')&&/INPUT|TEXTAREA|SELECT/.test(a.tagName))return;}catch(e){}
  render();
}
async function initShared(){
  try{
    const cl=window.claude;if(!cl||!cl.use)return;
    const db=await cl.use('db'),us=await cl.use('user');
    if(!db||!us||!us.id)return;
    UID=await us.id();if(!UID)return;
    DB=db;
    if(typeof pubWatch==='function')pubWatch();
    DB.doc('outbox/'+UID).onSnapshot(sn=>applyOutbox(sn.exists?sn.data():null),()=>{});
    pushSoon();
    if(S.admin)watchAdmin();
  }catch(e){}
}
function watchAdmin(){
  if(!DB||ADM.watching)return;
  ADM.watching=true;
  const fin=()=>{ADM.ready=true;try{renderNav();}catch(e){}if(V.n==='admin')softRefresh();};
  try{
    DB.collection('inbox').onSnapshot(sn=>{ADM.in={};sn.docs.forEach(d=>{ADM.in[d.id]=d.data();});ADM.err='';fin();},e=>{ADM.err=(e&&e.code)||'error';fin();});
    DB.collection('outbox').onSnapshot(sn=>{ADM.out={};sn.docs.forEach(d=>{ADM.out[d.id]=d.data();});fin();},()=>{});
  }catch(e){ADM.err='error';}
}

/* ---------- requests (student side) ---------- */
function reqStatus(key){
  if(key==='access_A'&&(S.access.A||S.enrolledA))return 'approved';
  if(key==='access_T'&&(S.access.T||S.enrolledT))return 'approved';
  if(key==='access_D'&&S.access.D)return 'approved';
  if(key.indexOf('unlock_')===0&&S.access['u:'+key.slice(7)])return 'approved';
  if(key.indexOf('skipclass_')===0&&COURSES.filter(c=>c.track===key.slice(10)).every(c=>S.skips[c.id]))return 'approved';
  if(key.indexOf('skip_')===0&&S.skips[key.slice(5)])return 'approved';
  const r=S.reqs[key];
  if(S.denied[key]&&(!r||S.denied[key]>=r.at))return 'declined';
  return r?'pending':'none';
}
function reqForm(key,title,help,btn){
  const st=reqStatus(key),r=S.reqs[key];
  if(st==='approved')return '';
  const role=roleOf(S.prof);
  let h='<div class="card reqcard"><h3>'+esc(title)+'</h3>';
  if(st==='pending')return h+'<p><b>Request sent'+(r?' on '+esc(fmtDate(new Date(r.at).toISOString().slice(0,10))):'')+'.</b> An administrator will review it. You will get a notification when it is answered.</p></div>';
  if(st==='declined')h+='<p class="lockline" style="margin:0 0 6px">Your last request was not approved. You can send a new one with more detail.</p>';
  h+='<p class="muted">'+esc(help)+'</p><p class="note">Your position: <b>'+esc(role||'not entered yet')+'</b>'+(role?'':' <button class="linkbtn" data-go="profile">Add it in your profile</button>')+'</p>'+
  '<div class="field"><label for="rq-reason">Reason</label><textarea id="rq-reason" placeholder="Tell the administrators why, in a couple of sentences."></textarea></div>'+
  '<div class="btnrow"><button class="btn" data-act="send-req" data-k="'+esc(key)+'">'+esc(btn)+'</button></div><p class="note" id="rqmsg" aria-live="polite"></p></div>';
  return h;
}
function trackOptReq(id){
  if(S.preview)return '';
  if(id==='T'){
    if(S.enrolledT||S.access.T)return '<div class="card" style="margin-bottom:28px"><p><b>You have permission to take the Teacher Certification.</b> Work through the five courses in order. They are optional and do not count toward your required course total. Finish them to earn the BFM Certified Teacher certificate.</p></div>';
    return '<div style="margin-bottom:28px">'+reqForm('access_T','Permission needed to start the Teacher Certification','The Teacher Certification is open to everyone who feels called to teach, but the Academy Director approves each person before they begin. Tell us which class you would like to teach (Sunday school, discipleship, water baptism, new believers, or new members).','Request permission')+'</div>';
  }
  return trackAReq();
}
function trackAReq(){
  if(S.preview)return '';
  if(S.enrolledA||S.access.A)return '<div class="card" style="margin-bottom:28px"><p><b>You have permission to take Track A.</b> Work through the fifteen courses at your own pace. They are optional and do not count toward your required course total.</p></div>';
  return '<div style="margin-bottom:28px">'+reqForm('access_A','Permission needed to start Track A','Track A is open to everyone, but the Academy Director approves each person before they begin. It is optional and meant for people who want to serve with finances and administration.','Request permission')+'</div>';
}
function skipClassReq(t){
  if(S.preview||!CLS4.includes(t))return '';
  if(COURSES.filter(c=>c.track===t).every(satisfied))return '';
  const key='skipclass_'+t,T=trackOf(t);
  if(hasPosition()){
    S.skipNo=S.skipNo||{};
    const st=reqStatus(key),r=S.reqs[key],role=roleOf(S.prof);
    if(st==='pending')return '<div class="card reqcard" style="margin-bottom:22px"><h3>Would you like to skip this class?</h3><p><b>Awaiting approval from the Academy.</b> You asked to skip the '+esc(T.title)+(r?' on '+esc(fmtDate(new Date(r.at).toISOString().slice(0,10))):'')+'. You will get a notification when it is answered. Until then, the class stays open for you to take.</p></div>';
    if(S.skipNo[t])return '<p class="meta" style="margin:0 0 18px">'+ic('check')+' You chose to take this class. <button class="linkbtn" data-act="skip-ask" data-t="'+t+'">Ask to skip it instead</button></p>';
    return '<div class="card reqcard" style="margin-bottom:22px"><h3>Would you like to skip this class?</h3>'+(st==='declined'?'<p class="lockline" style="margin:0 0 6px">Your last request was not approved by the Academy.</p>':'')+'<p class="muted">Because you serve as <b>'+esc(role)+'</b>, you can ask the Academy to let you skip the '+esc(T.title)+'. If you say yes, it shows “Awaiting approval from the Academy” until the director answers. If you say no, you take the class.</p><div class="btnrow"><button class="btn" data-act="skip-yes" data-t="'+t+'">Yes, ask to skip</button><button class="btn ghost" data-act="skip-no" data-t="'+t+'">No, I will take it</button></div></div>';
  }
  if(t!=='V'&&t!=='B')return '';
  const v=t==='V';
  return '<details class="reqmore" style="margin-bottom:22px"'+(S.reqs[key]?' open':'')+'><summary><span><b>'+(v?'Already gave your life to Jesus?':'Already baptized in water?')+'</b><small>You can ask to skip this class.</small></span><svg class="ic chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></summary>'+
    reqForm(key,'Request to skip the '+T.title,v?'If you gave your life to Jesus before you joined BFM and have been walking with him, ask to skip this class. Say when and where, and who can confirm it.':'If you have already been baptized in water, ask to skip this class. Say when and where, and your pastor can confirm it.','Request to skip this class')+'</details>';
}
function classDReq(){
  if(S.preview)return '';
  if(S.access.D)return '<p class="meta" style="margin:0 0 18px">'+ic('check')+' You have permission to take this class.</p>';
  return '<div style="margin-bottom:28px">'+reqForm('access_D','Permission needed to start the BFM Discipleship Class','This class opens by permission from the Academy Director. Tell us a little about why you would like to take it.','Request permission')+'</div>';
}
function courseExtras(c){
  let h='',more='';
  const g=S.grades[c.id];
  if(g)h+='<div class="card gradecard"><p class="eyebrow">Instructor feedback</p><p class="big-n" style="font-size:36px;margin:4px 0">'+(g.score!=null?esc(g.score)+'%':'Reviewed')+'</p>'+(g.feedback?'<p>'+esc(g.feedback)+'</p>':'')+'<p class="note">'+esc(g.by||'Academy')+(g.at?' · '+esc(fmtDate(new Date(g.at).toISOString().slice(0,10))):'')+'</p></div>';
  const lm=lockMsg(c);
  if(!lm){
    h+='<div class="card guidebar"><div><b>Study guide</b><p class="note">Every lesson, scripture reference, key idea, and reflection question, ready to read offline.</p></div><div class="btnrow"><button class="btn ghost sm" data-act="pdf-guide" data-c="'+c.id+'">'+ic('down')+'Download PDF</button><button class="btn ghost sm" data-act="print-guide" data-c="'+c.id+'">Print</button><button class="btn ghost sm" data-go="guide:'+c.id+'">View</button></div></div>';
  }
  if(c.track==='D'&&lm&&!S.preview)h+=reqForm('access_D','Permission needed to start the BFM Discipleship Class','This class opens by permission from the Academy Director. Tell us a little about why you would like to take it, and you will get a notification when it is answered.','Request permission');
  else if(lm&&!S.preview&&!/^Register/.test(lm)&&!OPT(c.track)&&!courseDone(c))more+=reqForm('unlock_'+c.id,'Request to unlock this course','If you need this course opened sooner, ask the Academy Director to unlock it for you.','Request unlock');
  if(!courseDone(c)&&!waived(c)){
    if(c.track==='A'&&lm)h+=reqForm('access_A','Permission needed to start Track A','Track A is open to everyone, but the Academy Director approves each person before they begin.','Request permission');
    else if(c.track==='T'&&lm)h+=reqForm('access_T','Permission needed to start the Teacher Certification','The Teacher Certification is open to everyone who wants to teach, but the Academy Director approves each person before they begin.','Request permission');
    else if(c.track==='T'||c.exam){}
    else if(!lm||true)more+=reqForm('skip_'+c.id,'Request to skip this course','If your position or past training already covers this material, ask the Academy to waive it. Waived courses count as met for unlocking what comes next, but they carry no grade or credit.','Request to skip');
  }
  if(more)h+='<details class="reqmore"'+(/Request sent|not approved/.test(more)?' open':'')+'><summary><span><b>Need to skip or unlock this course?</b><small>Send a request to the Academy Director.</small></span><svg class="ic chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></summary>'+more+'</details>';
  return h?'<div class="extras">'+h+'</div>':'';
}
function waivedTbl(){
  const ws=COURSES.filter(c=>waived(c)&&!courseDone(c));
  if(!ws.length)return '';
  return '<div class="sec-h" style="margin-top:32px"><h2>Waived courses</h2><span class="meta">Approved by the Academy. No grade or credit.</span></div><div class="tscroll"><table><thead><tr><th>Code</th><th>Course</th></tr></thead><tbody>'+ws.map(c=>'<tr><td><span class="code">'+c.code+'</span></td><td>'+esc(c.title)+'</td></tr>').join('')+'</tbody></table></div>';
}

/* ---------- admin: shared operations ---------- */
function outOf(uid){
  if(uid==='local'||!DB)return {grades:S.grades,skips:S.skips,access:S.access,denied:S.denied,prof:null};
  return ADM.out[uid]||{};
}
function adminUpdate(uid,fn){
  if(uid==='local'||!DB){
    const o={grades:S.grades,skips:S.skips,access:S.access,denied:S.denied};
    fn(o);
    S.grades=o.grades;S.skips=o.skips;S.access=o.access;S.denied=o.denied;
    if(o.prof){{const oldM=S.prof.ministry;['name','ministry','role','enrolled'].forEach(k=>{if(o.prof[k]!=null)S.prof[k]=o.prof[k];});if(o.prof.ministry!=null&&o.prof.ministry!==oldM)S.prof.ministries=o.prof.ministry?[o.prof.ministry]:[];}}
    if(S.access.A)S.enrolledA=true;
    if(S.access.T)S.enrolledT=true;
    save();sync();refresh();return;
  }
  const o=JSON.parse(JSON.stringify(ADM.out[uid]||{}));
  fn(o);ADM.out[uid]=o;
  try{DB.doc('outbox/'+uid).set(o).then(()=>{},e=>toast('Could not save ('+((e&&e.code)||'error')+'). Only the artifact owner or an editor can write student records.'));}catch(e){}
  refresh();
}
function roster(){
  let list=[];
  if(DB)Object.keys(ADM.in).forEach(id=>{if(id!==UID)list.push({uid:id,d:ADM.in[id]});});
  list.sort((a,b)=>String((a.d.prof||{}).name||'~').localeCompare(String((b.d.prof||{}).name||'~')));
  return list;
}
const nameOf=r=>((r.d.prof||{}).name||'').trim()||'(no name yet)';
const eu=s=>encodeURIComponent(s);
function pendingReqs(){
  const out=[];
  roster().forEach(r=>{
    const o=outOf(r.uid),reqs=r.d.reqs||{};
    Object.keys(reqs).forEach(k=>{
      const q=reqs[k];
      if(k==='access_A'&&((o.access||{}).A))return;
      if(k==='access_T'&&((o.access||{}).T))return;
      if(k==='access_D'&&((o.access||{}).D))return;
      if(k.indexOf('unlock_')===0&&((o.access||{})['u:'+k.slice(7)]))return;
      if(k.indexOf('skipclass_')===0&&COURSES.filter(c=>c.track===k.slice(10)).every(c=>(o.skips||{})[c.id]))return;
      if(k.indexOf('skip_')===0&&(o.skips||{})[k.slice(5)])return;
      if(k.indexOf('reg_')===0&&((o.access||{})['r:'+k.slice(4)]))return;
      if(((o.denied||{})[k]||0)>=q.at)return;
      out.push({uid:r.uid,name:nameOf(r),k,q});
    });
  });
  return out.sort((a,b)=>b.q.at-a.q.at);
}
const pubCourses=r=>Object.keys(r.d.prog||{});
var DELA='';
function studentDetail(uid){
  const r=roster().find(x=>x.uid===uid);
  if(!r)return '<div class="card"><p>That student was not found.</p><p style="margin-top:12px"><button class="btn" data-go="admin:students">Back to students</button></p></div>';
  const p=r.d.prof||{},prog=r.d.prog||{},w=r.d.work||{};
  const rows=Object.keys(prog).map(id=>byId[id]).filter(Boolean).map(c=>{
    const pr=prog[c.id],has=w[c.id]&&(w[c.id].p||w[c.id].l);
    return '<tr><td><span class="code">'+c.code+'</span></td><td>'+esc(c.title)+'</td><td>'+pr+'%</td><td>'+(has?'<button class="btn ghost sm" data-go="admin:review:'+eu(uid)+':'+c.id+'">Review work</button>':'')+'</td></tr>';
  }).join('');
  return '<p style="margin-bottom:14px"><button class="btn ghost sm" data-go="admin:students">'+ic('back')+'All students</button></p>'+
  profCard(Object.assign({},p,{name:nameOf(r)==='(no name yet)'?'':nameOf(r)}),false)+
  '<form class="card formgrid" onsubmit="return false" data-uid="'+esc(uid)+'">'+
  '<div class="field"><label for="ae-name">Full name</label><input type="text" id="ae-name" value="'+esc(p.name||'')+'"></div>'+
  '<div class="field"><label for="ae-ministry">Ministry</label>'+sel('ae-ministry',MINISTRIES.filter(x=>x!=='Other'),minsOf(p)[0]||'','Not assigned')+'</div>'+
  '<div class="field"><label for="ae-role">Leadership role</label>'+sel('ae-role',ROLES,roleSplit(p).sel,'Not entered')+'<input type="text" id="ae-role-other" class="roleother" placeholder="Type the role" maxlength="60" value="'+esc(roleSplit(p).other)+'"'+(roleSplit(p).sel==='Other'?'':' hidden')+' aria-label="Other role"></div>'+
  '<div class="field"><label for="ae-enrolled">Enrollment date</label><input type="date" id="ae-enrolled" value="'+esc(p.enrolled||'')+'"></div>'+
  '<div class="field"><button class="btn" type="button" data-act="adm-save-prof" data-u="'+esc(eu(uid))+'">Save changes</button></div></form>'+
  '<p class="note" id="aemsg" aria-live="polite"></p>'+
  '<div class="sec-h" style="margin-top:28px"><h2>Courses started</h2></div>'+
  (rows?'<div class="tscroll"><table><thead><tr><th>Code</th><th>Course</th><th>Progress</th><th><span class="sr">Review</span></th></tr></thead><tbody>'+rows+'</tbody></table></div>':'<div class="card"><p class="muted">No courses started yet.</p></div>')+
  calBox(uid)+unlockBox(uid)+
  '<div class="danger"><h3>Delete this profile</h3><p class="note">Removes the student’s saved record. Their own device is cleared the next time they open the Academy.</p>'+
  (DELA===uid?'<div class="btnrow"><button class="btn" data-act="adm-del2" data-u="'+esc(eu(uid))+'">Yes, delete '+esc(nameOf(r))+'</button><button class="btn ghost" data-act="adm-del0">Cancel</button></div>':'<button class="btn ghost" data-act="adm-del1" data-u="'+esc(eu(uid))+'">Delete profile</button>')+'</div>';
}
function calBox(uid){
  const oc=outOf(uid).cal,inb=ADM.in[uid]||{};const cur=(uid==='local'||!DB)?(S.cal||''):((oc&&oc.at>=(inb.calAt||0))?oc.k:(inb.cal||''));
  return '<div class="sec-h" style="margin-top:28px"><h2>Ministry calling</h2><span class="meta">Track 3 opens only this ministry for the student.</span></div><div class="card"><div class="field"><label for="ae-cal">Ministry</label><select id="ae-cal"><option value="">Not chosen (student picks)</option>'+SPECS.map(s=>'<option value="'+s.k+'"'+(cur===s.k?' selected':'')+'>'+esc(s.f)+'</option>').join('')+'</select></div><div class="btnrow"><button class="btn" data-act="adm-cal" data-u="'+esc(eu(uid))+'">Save ministry</button></div></div>';
}
function unlockBox(uid){
  const acc=(outOf(uid).access)||{};
  const keys=Object.keys(acc).filter(k=>k==='D'||k==='T'||k==='A'||(k.indexOf('u:')===0&&byId[k.slice(2)]));
  const label=k=>k==='D'?'BFM Discipleship Class (permission)':k==='T'?'BFM Teacher Certification (permission)':k==='A'?'Track A: Administrative (permission)':byId[k.slice(2)].code+' \u00B7 '+byId[k.slice(2)].title;
  const opts='<option value="">Choose a course</option><option value="@D">BFM Discipleship Class (permission to start)</option><option value="@T">BFM Teacher Certification (permission to start)</option><option value="@A">Track A: Administrative (permission to start)</option>'+COURSES.map(c=>'<option value="'+c.id+'">'+esc(c.code+' \u00B7 '+c.title)+'</option>').join('');
  return '<div class="sec-h" style="margin-top:28px"><h2>Unlock courses</h2><span class="meta">Opens a locked course for this student only.</span></div>'+
  '<div class="card"><div class="field"><label for="ae-unlock">Course to unlock</label><select id="ae-unlock">'+opts+'</select></div><div class="btnrow"><button class="btn" data-act="adm-unlock" data-u="'+esc(eu(uid))+'">'+ic('check')+'Unlock for this student</button></div>'+
  (keys.length?'<p class="rq-w" style="margin-top:14px"><b>Unlocked for them</b></p><ul class="rvl">'+keys.map(k=>'<li>'+esc(label(k))+' <button class="linkbtn" data-act="adm-relock" data-u="'+esc(eu(uid))+'" data-c="'+esc(k==='D'?'@D':k.slice(2))+'">Lock again</button></li>').join('')+'</ul>':'<p class="note" style="margin-top:10px">Nothing has been unlocked by hand.</p>')+'</div>';
}
function reviewDetail(uid,cid){
  const r=roster().find(x=>x.uid===uid),c=byId[cid];
  if(!r||!c)return '<div class="card"><p>That work was not found.</p><p style="margin-top:12px"><button class="btn" data-go="admin:review">Back to review</button></p></div>';
  const x=(r.d.work||{})[cid]||{},o=outOf(uid),g=(o.grades||{})[cid]||{};
  const ls=c.lessons.map((l,i)=>{
    const d=(x.l||{})[i];
    return '<section class="card" style="margin-bottom:14px"><h3>Lesson '+(i+1)+': '+esc(l.t)+' '+(d&&d.ok?'<span class="pill complete">'+ic('check')+'Complete</span>':'')+'</h3>'+
    l.rq.map((q,qi)=>'<p class="note" style="margin-top:10px"><b>'+esc(q)+'</b></p><p class="ans">'+(d&&d.r&&d.r[qi]?esc(d.r[qi]):'<span class="muted">No answer yet.</span>')+'</p>').join('')+'</section>';
  }).join('');
  const p=x.p,q=x.q;
  const proj=p?'<section class="card" style="margin-bottom:14px"><h3>Project: '+esc(c.proj.t)+' '+(p.done?'<span class="pill complete">'+ic('check')+'Submitted '+esc(fmtDate(p.date))+'</span>':'<span class="pill progress">In progress</span>')+'</h3>'+
    '<ul class="todo" style="margin-top:8px">'+c.proj.d.map((d,i)=>'<li>'+(p.d&&p.d[i]?'[x] ':'[ ] ')+esc(d)+'</li>').join('')+'</ul>'+
    '<p class="note" style="margin-top:10px"><b>Student summary</b></p><p class="ans">'+(p.notes?esc(p.notes):'<span class="muted">Nothing written yet.</span>')+'</p><p class="note">Reviewed by mentor: <b>'+esc(p.mentor||'not entered')+'</b></p></section>':'<div class="card" style="margin-bottom:14px"><p class="muted">No project work yet.</p></div>';
  return '<p style="margin-bottom:14px"><button class="btn ghost sm" data-go="admin:review">'+ic('back')+'All work</button> <button class="btn ghost sm" data-go="admin:student:'+eu(uid)+'">Student profile</button></p>'+
  '<h2>'+esc(nameOf(r))+'</h2><p class="muted" style="margin-bottom:16px"><span class="code">'+c.code+'</span> '+esc(c.title)+(q?' · Assessment best '+q.best+'%'+(q.passed?' (passed)':''):'')+'</p>'+
  proj+ls+
  '<form class="card" onsubmit="return false" style="display:flex;flex-direction:column;gap:12px;max-width:640px;margin-top:20px"><h3>Grade this work</h3>'+
  '<div class="field"><label for="gr-score">Score (0 to 100)</label><input type="number" id="gr-score" min="0" max="100" step="1" value="'+(g.score!=null?esc(g.score):'')+'"></div>'+
  '<div class="field"><label for="gr-fb">Feedback for the student</label><textarea id="gr-fb" placeholder="What went well, and what to work on.">'+esc(g.feedback||'')+'</textarea></div>'+
  '<div class="btnrow"><button class="btn" type="button" data-act="save-grade" data-u="'+esc(eu(uid))+'" data-c="'+cid+'">Save grade</button></div><p class="note" id="grmsg" aria-live="polite">'+(g.at?'Last saved '+esc(fmtDate(new Date(g.at).toISOString().slice(0,10)))+'.':'')+'</p></form>';
}

/* ---------- study guides ---------- */
var AUTOP=false;
/* open the print screen straight away, without leaving the current page */
function printNow(make){
  try{
    let r=document.getElementById('printroot');
    if(!r){r=document.createElement('div');r.id='printroot';document.body.appendChild(r);}
    r.innerHTML=make();
    document.body.classList.add('printing');
    const done=()=>{document.body.classList.remove('printing');r.innerHTML='';window.removeEventListener('afterprint',done);};
    window.addEventListener('afterprint',done);
    setTimeout(()=>{try{window.print();}catch(e){done();toast('Printing is not available here. Use Download PDF.');}},80);
  }catch(e){toast('Printing is not available here. Use Download PDF.');}
}
function afterRender(){
  try{renderAnn();}catch(e){}
  if(typeof tourMaybe==='function'&&typeof setTimeout==='function')setTimeout(tourMaybe,1100);
  if(typeof updReadbar==='function')setTimeout(updReadbar,0);
  if(PFFOCUS){const e=$(PFFOCUS);if(e&&e.focus)try{e.focus({preventScroll:true});}catch(x){}PFFOCUS='';}
  if(V.n==='admin'&&!S.admin){const i=$('#ad-code');if(i&&i.focus)try{i.focus({preventScroll:true});}catch(e){}}
  if((V.n==='guide'||V.n==='manual')&&AUTOP){
    AUTOP=false;
    setTimeout(()=>{try{window.print();}catch(e){toast('Printing is not available here. Use Download PDF.');}},400);
  }
}
async function makeGuidePdf(cid,only){
  const c=byId[cid];if(!c||lockMsg(c))return;
  const doc=newDoc('portrait');
  if(!doc){toast('The PDF tool did not load. Check your connection and try again.');return;}
  try{
    buildGuide(doc,c,only==null||only===''?null:+only);
    const nm=c.code.replace(/\s+/g,'-')+(only==null||only===''?'':'-Lesson-'+(+only+1));
    await saveFile((c.track==='3'?'BFM-Study-Guide-'+c.key+(only==null||only===''?'':'-Lesson-'+(+only+1)):'BFM-Study-Guide-'+nm)+'.pdf',doc.output('blob'));
  }catch(e){toast('Could not build the study guide.');}
}

/* ---------- actions ---------- */
function wipeLocal(){
  const st=S.settings;
  if(DB&&UID){try{DB.doc('inbox/'+UID).delete();}catch(e){}}
  S=defaults();S.settings=st;S.welcomed=false;LASTPUSH='';DELP=false;
  try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}
  sync();
}
function extAct(k,d,b){
  if(admAct(k,d))return true;
  if(k==='save-profile'){
    const nm=($('#pf-name').value||'').trim(),msg=$('#pfmsg');
    if(nm.length<2){if(msg)msg.textContent='Enter your full name to save your profile.';return true;}
    pfCapture();S.prof.name=nm;
    const ps=$('#pf-min-sel');if(ps&&ps.value&&ps.value!=='Other'){const a=minsOf(S.prof).slice();if(a.indexOf(ps.value)<0)a.push(ps.value);pfSetMins(a);}
    S.prof.enrolled=S.prof.enrolled||isoToday();PFM='';
    save();pushNow();refresh();window.scrollTo(0,0);toast('Profile saved.');return true;
  }
  if(k==='set-theme'){S.settings.theme=d.v;save();applySettings();refresh();return true;}
  if(k==='set-opt'){
    const n=d.k,v=d.v;
    S.settings=Object.assign({},stg(),S.settings);delete S.settings.large;
    S.settings[n]=(n==='dys'||n==='hc'||n==='calm')?v==='1':(n==='theme'?v:+v);
    save();applySettings();refresh();return true;
  }
  if(k==='set-size-reset'){S.settings=Object.assign({},stg(),S.settings);delete S.settings.large;S.settings.size=100;save();applySettings();refresh();return true;}
  if(k==='del-prof1'){DELP=true;refresh();return true;}
  if(k==='del-prof0'){DELP=false;refresh();return true;}
  if(k==='del-prof2'){wipeLocal();go('home');toast('Your profile was deleted.');return true;}
  if(k==='choose-cal'){
    if(S.preview){toast('Turn off instructor preview to choose a ministry.');return true;}
    if(!SPECS.some(s=>s.k===d.k))return true;
    S.cal=d.k;S.calAt=Date.now();note('enroll','You chose '+specFull(d.k)+' as your ministry.');save();pushNow();refresh();toast('Your ministry is set to '+specFull(d.k)+'.');return true;
  }
  if(k==='adm-cal'){
    const uid=decodeURIComponent(d.u),sel=$('#ae-cal');
    adminUpdate(uid,o=>{o.cal={k:(sel&&sel.value)||'',at:Date.now()};});
    toast('Ministry saved.');return true;
  }
  if(k==='skip-yes'||k==='skip-no'||k==='skip-ask'){
    const t=d.t;S.skipNo=S.skipNo||{};
    if(k==='skip-yes'){delete S.skipNo[t];S.reqs['skipclass_'+t]={type:'skipclass',id:t,reason:'Serves as '+(roleOf(S.prof)||'a leader')+' and asked to skip this class.',role:roleOf(S.prof),at:Date.now()};note('enroll','Request sent: '+reqLabel('skipclass_'+t)+'.');pushNow();toast('Sent. Awaiting approval from the Academy.');}
    else if(k==='skip-no')S.skipNo[t]=1;
    else delete S.skipNo[t];
    save();refresh();return true;
  }
  if(k==='send-req'){
    const key=d.k,r=($('#rq-reason').value||'').trim(),msg=$('#rqmsg');
    if(r.length<10){if(msg)msg.textContent='Add a short reason (at least a sentence) so the administrators can decide.';return true;}
    S.reqs[key]={type:key.split('_')[0],id:key.split('_').slice(1).join('_'),reason:r.slice(0,600),role:roleOf(S.prof),at:Date.now()};
    note('enroll','Request sent: '+reqLabel(key)+'.');
    save();pushNow();refresh();toast('Request sent.');return true;
  }
  if(k==='pdf-guide'){makeGuidePdf(d.c,d.i);return true;}
  if(k==='print-guide'){printNow(()=>guideView(d.c,d.i));return true;}
  if(k==='print-now'){try{window.print();}catch(e){toast('Printing is not available here. Use Download PDF.');}return true;}
  /* admin */
  if(k==='adm-save-prof'){
    const uid=decodeURIComponent(d.u),nm=($('#ae-name').value||'').trim(),msg=$('#aemsg');
    if(nm.length<2){if(msg)msg.textContent='Enter a name.';return true;}
    adminUpdate(uid,o=>{o.prof={name:nm,ministry:$('#ae-ministry').value||'',role:(()=>{const v=$('#ae-role').value||'';return v==='Other'?(($('#ae-role-other').value||'').trim()||'Other'):v;})(),enrolled:$('#ae-enrolled').value||'',at:Date.now()};});
    toast('Profile updated.');return true;
  }
  if(k==='adm-del1'){DELA=decodeURIComponent(d.u);refresh();return true;}
  if(k==='adm-del0'){DELA='';refresh();return true;}
  if(k==='adm-del2'){
    const uid=decodeURIComponent(d.u);DELA='';
    if(uid==='local'||!DB){wipeLocal();go('admin',['students']);toast('Profile deleted.');return true;}
    const o=JSON.parse(JSON.stringify(ADM.out[uid]||{}));o.removedAt=Date.now();
    try{DB.doc('outbox/'+uid).set(o);DB.doc('inbox/'+uid).delete();}catch(e){}
    delete ADM.in[uid];ADM.out[uid]=o;
    go('admin',['students']);toast('Profile deleted.');return true;
  }
  if(k==='save-grade'){
    const uid=decodeURIComponent(d.u),sc=parseFloat($('#gr-score').value),fb=($('#gr-fb').value||'').trim(),msg=$('#grmsg');
    if(!(sc>=0&&sc<=100)){if(msg)msg.textContent='Enter a score from 0 to 100.';return true;}
    adminUpdate(uid,o=>{o.grades=o.grades||{};o.grades[d.c]={score:Math.round(sc),feedback:fb.slice(0,1200),by:(S.prof.name||'').trim()||'Academy Director',at:Date.now()};});
    toast('Grade saved.');return true;
  }
  if(k==='adm-unlock'||k==='adm-relock'){
    const uid=decodeURIComponent(d.u),sel=$('#ae-unlock'),v=k==='adm-unlock'?(sel&&sel.value):d.c;
    if(!v){toast('Choose a course first.');return true;}
    adminUpdate(uid,o=>{
      o.access=o.access||{};const key=v==='@D'?'D':v==='@T'?'T':v==='@A'?'A':'u:'+v;
      if(k==='adm-unlock')o.access[key]={at:Date.now(),by:'admin'};else delete o.access[key];
    });
    toast(k==='adm-unlock'?'Unlocked for this student.':'Locked again.');return true;
  }
  if(k==='req-approve'||k==='req-decline'){
    const uid=decodeURIComponent(d.u),key=d.k;
    adminUpdate(uid,o=>{
      o.skips=o.skips||{};o.access=o.access||{};o.denied=o.denied||{};
      if(k==='req-approve'){
        if(key.indexOf('skipclass_')===0)COURSES.filter(c=>c.track===key.slice(10)).forEach(c=>{o.skips[c.id]={at:Date.now()};});else if(key==='access_A')o.access.A={at:Date.now()};else if(key==='access_T')o.access.T={at:Date.now()};else if(key==='access_D')o.access.D={at:Date.now()};else if(key.indexOf('unlock_')===0)o.access['u:'+key.slice(7)]={at:Date.now()};else if(key.indexOf('reg_')===0)o.access['r:'+key.slice(4)]={at:Date.now()};else o.skips[key.slice(5)]={at:Date.now()};
        delete o.denied[key];
      }else o.denied[key]=Date.now();
    });
    toast(k==='req-approve'?'Approved.':'Declined.');return true;
  }
  return false;
}
applySettings();
initShared();
const LOGO_B64='data:image/png;base64,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';
/* ================= App: dashboard extras, footer, resources, study guide layout ================= */

const isoOf=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());

/* ---------- search ---------- */
var SEARCHQ='';
function searchResults(){
  const q=SEARCHQ.trim().toLowerCase();
  if(q.length<2)return '';
  const words=q.split(/\s+/);
  const hit=COURSES.filter(c=>{
    const t=trackOf(c.track),hay=(c.code+' '+c.title+' '+c.goal+' '+t.title+' '+t.short+' '+c.lessons.map(l=>l.t).join(' ')).toLowerCase();
    return words.every(w=>hay.indexOf(w)>=0);
  });
  if(!hit.length)return '<div class="card"><p class="muted">No courses match "'+esc(SEARCHQ.trim())+'". Try a shorter word, like "prayer" or "finance".</p></div>';
  return '<p class="meta" style="margin:12px 0">'+hit.length+' course'+(hit.length===1?'':'s')+' found</p><div class="grid">'+hit.slice(0,12).map(courseCard).join('')+'</div>'+(hit.length>12?'<p class="meta" style="margin-top:10px">Showing the first 12. Add a word to narrow it down.</p>':'');
}
function updSearch(){const r=$('#sres');if(r)r.innerHTML=searchResults();}
function extInput(t){
  if(typeof pubInput==='function'&&pubInput(t))return true;
  if(t.id==='ad-code'){const f=fmtCode(t.value);if(f!==t.value)t.value=f;return true;}
  if(t.id==='admq'){ADMQ=t.value;const r=$('#admres');if(r)r.innerHTML=studentCards();return true;}
  if(t.id==='csearch'){SEARCHQ=t.value;updSearch();return true;}
  return false;
}

/* ---------- dashboard sections ---------- */
const WEB_URL='https://www.bushwickfamcogop.org/',EVENTS_URL='https://www.bushwickfamcogop.org/events-calendar';
function startedSection(){
  const cs=COURSES.filter(c=>!courseDone(c)&&!waived(c)&&engaged(c)&&!(lockMsg(c)));
  let body;
  if(!cs.length){
    body='<div class="card"><p class="muted">You have not enrolled in a course yet. Pick a class below, open a course, and press Enroll. It will show up here.</p></div>';
  }else{
    body='<div class="grid startgrid">'+cs.map(c=>{
      const t=trackOf(c.track);
      return '<div class="startitem"><p class="startlab" title="'+esc(t.title)+'">'+esc(t.cls?t.short:t.label)+' · '+esc(t.title)+'</p>'+courseCard(c)+'</div>';
    }).join('')+'</div>';
  }
  return '<div class="sec-h"><h2>Started courses</h2><span class="meta">Courses you enrolled in or began.</span></div>'+body;
}
function footHtml(){
  const up=upcoming().slice(0,3);
  const nc=TRACKS.filter(t=>S.certs[t.id]).length;
  const ext='target="_blank" rel="noopener noreferrer"';
  return '<div class="fcol"><h4>Quick access</h4><ul>'+
    '<li><button data-go="resources">'+ic('down')+'Study guides and resources</button></li>'+
    (S.admin?'<li><button data-go="admin:review">'+ic('clip')+'Review and grade</button></li><li><button data-go="transcript">'+ic('report')+'Student records</button></li>':
    '<li><button data-go="saved">'+ic('bookmark')+'Bookmarks and notes'+(nSaved()?' ('+nSaved()+')':'')+'</button></li>'+
    '<li><button data-go="mycerts">'+ic('award')+'My certificates'+(nc?' ('+nc+')':'')+'</button></li>')+
    '<li><a href="'+WEB_URL+'" '+ext+'>'+ic('ext')+'BFM website</a></li></ul></div>'+
    '<div class="fcol"><h4>Events</h4>'+
    (up.length?'<ul class="fev">'+up.map(e=>'<li><b>'+esc(e.title)+'</b><span>'+esc(fmtDate(e.date))+(e.time?' \u00B7 '+esc(e.time):'')+'</span></li>').join('')+'</ul><button class="fbtn" data-go="news">All events and announcements</button> ':'<p class="fnone">No events so far.</p>')+
    '<a class="fbtn" href="'+EVENTS_URL+'" '+ext+'>See upcoming events'+ic('ext')+'</a></div>'+
    '<div class="fcol"><h4>Links</h4><ul>'+
    '<li><a href="'+WEB_URL+'" '+ext+'>BFM website</a></li>'+
    '<li><a href="'+EVENTS_URL+'" '+ext+'>Events calendar</a></li>'+
    '<li><button data-go="verify">Verify a certificate</button></li>'+
    '<li><button data-go="'+(S.admin?'admin:faq':'faq')+'">FAQs</button></li>'+
    tourLinks()+
    '<li><button data-go="'+(S.admin?'admin:privacy':'privacy')+'">Privacy</button></li>'+
    '<li><button data-go="admin">Staff</button></li></ul></div>';
}
function renderFoot(){const f=$('#foot-dyn');if(f)f.innerHTML=footHtml();}
function homeExtras(){
  return annBanner()+goalBanner()+'<div class="sec-h"><h2>Find a course</h2></div>'+
    '<div class="searchbox"><label class="sr" for="csearch">Search courses</label><input type="search" id="csearch" autocomplete="off" placeholder="Search courses by name, code, or topic" value="'+esc(SEARCHQ)+'"><div id="sres" aria-live="polite">'+searchResults()+'</div></div>'+
    startedSection();
}

/* ---------- resources and certificates pages ---------- */
function manualLib(){
  const list=(title,keys)=>'<details class="catd"><summary><span class="cat-t"><span class="eyebrow lab">'+esc(title)+'</span><h2>'+esc(title)+'</h2></span><span class="cat-m"><span class="meta">'+keys.length+' documents</span></span></summary><div class="catd-b"><ul class="reslist">'+keys.map(k=>{
    const lm=manLock(k),pk=manIsPacket(k);
    return '<li><div><b>'+esc(manName(k))+(pk?'':' Manual')+'</b>'+(lm?'<small>'+ic('lock')+esc(lm)+'</small>':'<small>'+(pk?(MTPL[k].general?'For every volunteer, whatever the ministry':'Foundation, roles, FAQs, and volunteer agreement'):'Cover, contents, welcome statement, and seven sections')+'</small>')+'</div>'+(lm?'':'<div class="btnrow"><button class="btn ghost sm" data-act="pdf-manual" data-k="'+k+'">'+ic('down')+'PDF</button><button class="btn ghost sm" data-act="print-manual" data-k="'+k+'">Print</button><button class="btn ghost sm" data-go="manual:'+k+'">View</button></div>')+'</li>';
  }).join('')+'</ul></div></details>';
  return '<section class="resgrp"><p class="grp-h">Volunteer training packets</p><div class="cat">'+list('Volunteer Training Packets',PACKET_KEYS.filter(k=>MTPL[k].general))+'</div></section><section class="resgrp"><p class="grp-h">Individual ministries</p><div class="cat">'+list('Ministry Manuals',MANUAL_ORDER)+list('Ministry Volunteer Packets',MINISTRY_PACKETS)+'</div></section>';
}
function resourcesView(){
  const grp=(title,list)=>'<section class="resgrp"><p class="grp-h">'+title+'</p><div class="cat">'+list.map(t=>{
    const cs=COURSES.filter(c=>c.track===t.id),man=t.id==='3';
    return '<details class="catd"><summary><span class="cat-t"><span class="eyebrow lab">'+esc(t.label)+'</span><h2>'+esc(t.title)+'</h2></span><span class="cat-m"><span class="meta">'+(man?cs.length+' ministries':cs.length+' guides')+'</span></span></summary><div class="catd-b"><ul class="reslist">'+
    cs.map(c=>{
      const lm=lockMsg(c),nm=man?specFull(c.key):c.title;
      const row=(label,act,go,ctl)=>'<li><div>'+(man?'':'<span class="code">'+c.code+'</span>')+'<b>'+esc(label)+'</b>'+(lm?'<small>'+ic('lock')+esc(lm)+'</small>':'')+'</div>'+
        (lm?'':'<div class="btnrow"><button class="btn ghost sm" data-act="pdf-'+ctl+'" data-'+act+'>'+ic('down')+'PDF</button><button class="btn ghost sm" data-act="print-'+ctl+'" data-'+act+'>Print</button><button class="btn ghost sm" data-go="'+go+'">View</button></div>')+'</li>';
      const g=row(man?nm+' study guide':nm,'c="'+c.id+'"','guide:'+c.id,'guide');
      return g;
    }).join('')+'</ul></div></details>';
  }).join('')+'</div></section>';
  return '<div class="thead"><p class="eyebrow">Resources</p><h1>Study guides</h1><p class="lede">Download or print a study guide for any course you can open. Each one has the lessons, Scripture, key ideas, reflection questions with writing lines, and the project checklist. Below the study guides you will also find the Ministry Manuals and the volunteer training packets, which follow the same BFM template.</p></div>'+
  grp('Classes',TRACKS.filter(t=>t.cls))+grp('Leadership tracks',TRACKS.filter(t=>!t.cls))+manualLib();
}
function myCertsView(){
  const got=TRACKS.filter(t=>S.certs[t.id]);
  const list=got.length?got.map(t=>{
    const c=S.certs[t.id];
    return '<div class="card certrow"><div><p class="eyebrow lab">'+esc(t.label)+'</p><h3>'+esc(t.cred)+'</h3><p class="note">Earned '+esc(fmtDate(c.date))+' · ID '+esc(c.id)+'</p></div><div class="btnrow"><button class="btn sm" data-go="cert:'+t.id+'">'+ic('award')+'View</button><button class="btn ghost sm" data-act="pdf-cert" data-t="'+t.id+'">'+ic('down')+'Download PDF</button></div></div>';
  }).join(''):'<div class="card"><p class="muted">No certificates yet. You earn one each time you finish every course in a class or track.</p></div>';
  return '<div class="thead"><p class="eyebrow">Credentials</p><h1>My certificates</h1><p class="lede">Every certificate you have earned, with a verification ID and QR code.</p></div>'+list+
    '<p style="margin-top:20px"><button class="btn ghost" data-go="transcript">Open transcript</button></p>';
}

/* ---------- study guide: cover letter ---------- */
function letterParas(c){
  const t=trackOf(c.track),n=c.lessons.length,m3=c.track==='3';
  return [
    m3?'Welcome to the '+minName(c)+'. We are glad you are here. This study guide goes with your ministry specialization. It is meant to be read, written in, and carried with you.':'Welcome to '+c.title+'. We are glad you are here. This study guide goes with the '+c.code+' course in the '+t.title+'. It is meant to be read, written in, and carried with you.',
    'Our goal for this course is simple: '+c.goal,
    'Over the next '+n+' lesson'+(n===1?'':'s')+' you will find Scripture to read, key ideas to hold onto, practical steps to try this week, and reflection questions with space to write your answers. Take your time. The aim is not to finish quickly but to grow.',
    'Keep your own Bible open beside this guide and read every passage. Write honest answers, do the practice steps, and bring your notes to your class leader or pastor. When you finish the lessons you will take the course assessment and complete the project, and your progress will be saved in BFM Academy.',
    'We are praying for you as you study. May the Word of God take root in your heart and bear fruit in your life.'
  ];
}

/* ---------- manual branding: ministry / program name ---------- */
const guideWord=c=>'Study guide';
function minName(c){
  if(c.track==='3'){return c.grp==='spec'?specFull(c.key):'Ministry Specialization';}
  if(c.track==='2')return 'Ministry Leadership';
  if(c.track==='1')return 'Foundations of Leadership and Volunteering';
  if(c.track==='A')return 'Administrative Church Leadership';
  if(c.track==='T')return 'Teacher Certification';
  const t=trackOf(c.track);return t.title||t.short;
}
/* ---------- study guide: on-screen / print view ---------- */
function letterHtml(c){
  const oi=null;
  return '<section class="gletter"><p class="glab">A letter to the student</p><p class="gdate">'+esc(fmtLong(isoToday()))+'</p><p>Dear '+esc((S.prof.name||'').trim()||'Student')+',</p>'+
    letterParas(c).map(p=>'<p>'+esc(p)+'</p>').join('')+'<p class="gsigoff">In Christ,<br><b>The BFM Academy Team</b><br><span>Bushwick Family Ministries &middot; Reach. Teach. Equip.</span></p></section>';
}
function guideView(cid,only){
  const c=byId[cid];if(!c)return home();
  const t=trackOf(c.track),oi=(only!==undefined&&only!=='')?+only:null;
  const ls=c.lessons.map((l,i)=>({l,i})).filter(x=>oi===null||x.i===oi);
  const lines=n=>'<div class="gl">'+Array(n).fill('<i></i>').join('')+'</div>';
  const body=ls.map((x,k)=>'<section class="gsec'+(k===0?' first':'')+'">'+
    '<p class="glab">Lesson '+(x.i+1)+' of '+c.lessons.length+'</p><h2>'+esc(x.l.t)+'</h2>'+
    '<div class="gscr"><span>Scripture</span><b>'+x.l.ref.map(esc).join('&nbsp;&nbsp;|&nbsp;&nbsp;')+'</b></div>'+
    '<p class="gsum">'+esc(x.l.bib)+'</p>'+
    '<h3>Key ideas</h3><ol class="gkey">'+x.l.key.map(k=>'<li>'+esc(k)+'</li>').join('')+'</ol>'+
    '<h3>Putting it into practice</h3><ul class="gprac">'+x.l.pra.map(k=>'<li>'+esc(k)+'</li>').join('')+'</ul>'+
    '<h3>Reflection</h3>'+x.l.rq.map((q,qi)=>'<div class="gq"><p><b>'+(qi+1)+'.</b> '+esc(q)+'</p>'+lines(3)+'</div>').join('')+
    '<h3>Activity</h3><div class="gact">'+esc(x.l.act)+'</div></section>').join('');
  const toc=oi===null?'<div class="gtoc"><h3>In this guide</h3><ol>'+c.lessons.map(l=>'<li>'+esc(l.t)+'</li>').join('')+'<li>Course project: '+esc(c.proj.t)+'</li></ol></div>':'';
  const proj=oi===null?'<section class="gsec"><p class="glab">Course project</p><h2>'+esc(c.proj.t)+'</h2><p class="gsum">'+esc(c.proj.b)+'</p><h3>Deliverables</h3><ul class="gprac">'+c.proj.d.map(d=>'<li>'+esc(d)+'</li>').join('')+'</ul><div class="gsign"><span>Reviewed by</span><span>Date</span></div><h3>Notes</h3>'+lines(6)+'</section>':'';
  return crumbs([{t:'Campus',go:'home'},{t:(t.cls?t.short:t.label),go:'track:'+t.id},{t:c.track==='3'?minName(c):c.code,go:'course:'+cid},{t:guideWord(c)}])+
  '<div class="card noprint guidebar" style="margin-bottom:20px"><div><b>'+(oi===null?'Course study guide':'Lesson study guide')+'</b><p class="note">If the print window does not open here, download the PDF and print it from your PDF viewer.</p></div><div class="btnrow"><button class="btn sm" data-act="pdf-guide" data-c="'+cid+'"'+(oi===null?'':' data-i="'+oi+'"')+'>'+ic('down')+'Download PDF</button><button class="btn ghost sm" data-act="print-now">Print</button></div></div>'+
  '<article class="guide">'+ptabOpen+gcoverHtml()+'<div class="gminbar"><b>'+esc(minName(c))+'</b><span>BFM Academy &middot; '+guideWord(c)+'</span></div><div class="gpage">'+
  '<header class="ghead">'+(c.track==='3'?'':'<p class="gcode">'+esc(c.code)+' · '+esc(t.short)+'</p>')+'<h1>'+esc(c.track==='3'?minName(c):c.title)+'</h1><p class="glede">'+esc(c.goal)+'</p>'+
  '<div class="ginfo"><span>Student: <u>'+(S.prof.name?esc(S.prof.name):'&nbsp;'.repeat(26))+'</u></span><span>Date: <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></span></div></header>'+
  toc+(oi===null?letterHtml(c):'')+body+proj+'</div>'+ptabMid(minName(c))+'</article>';
}

/* ---------- study guide: PDF ---------- */
function buildGuide(doc,c,only){
  const W=612,ML=66,CW=W-2*ML,TOP=86,BOT=722;
  const GOLD=[198,167,94],GD=[122,97,37],INK=[28,28,28],GR=[105,105,105],LT=[251,247,236],RULE=[200,200,200];
  const t=trackOf(c.track),single=only!=null;
  let y=0,pg=1;const start={};
  const F=(f,st,sz,col)=>{doc.setFont(f,st);doc.setFontSize(sz);doc.setTextColor(col[0],col[1],col[2]);};
  const caps=(s,x,yy,o)=>doc.text(pt(s).toUpperCase(),x,yy,Object.assign({charSpace:1.1},o||{}));
  const runHead=()=>{
    F('helvetica','bold',7.5,GR);caps('BFM Academy  |  Study guide',ML,46);
    F('helvetica','normal',7.5,GR);doc.text(pt(c.track==='3'?minName(c):c.code+'  '+c.title).slice(0,70),W-ML,46,{align:'right'});
    doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);doc.setLineWidth(1);doc.line(ML,54,W-ML,54);
  };
  const newPage=()=>{doc.addPage();pg++;runHead();y=TOP;};
  const need=h=>{if(y+h>BOT)newPage();};
  const wrap=(s,w,f,st,sz)=>{doc.setFont(f,st);doc.setFontSize(sz);return doc.splitTextToSize(pt(s),w);};
  const para=(s,o)=>{
    o=Object.assign({f:'times',st:'normal',sz:11,col:INK,lh:1.5,x:ML,w:CW,after:8},o||{});
    const ln=wrap(s,o.w,o.f,o.st,o.sz);F(o.f,o.st,o.sz,o.col);
    ln.forEach(l=>{need(o.sz*o.lh);doc.text(l,o.x,y);y+=o.sz*o.lh;});y+=o.after;
  };
  const h3=(s,ex)=>{need(30+(ex||24));y+=6;F('helvetica','bold',8.5,GD);caps(s,ML,y);doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);doc.setLineWidth(0.8);doc.line(ML,y+5,W-ML,y+5);y+=20;};
  const rules=n=>{for(let i=0;i<n;i++){need(22);doc.setDrawColor(RULE[0],RULE[1],RULE[2]);doc.setLineWidth(0.6);doc.line(ML,y,W-ML,y);y+=22;}y+=2;};
  const box=(label,lines,fill,sz,bf,bs)=>{
    const h=(label?16:0)+lines.length*sz*1.45+16;need(h);
    doc.setFillColor(fill[0],fill[1],fill[2]);doc.rect(ML,y-12,CW,h,'F');
    doc.setFillColor(GOLD[0],GOLD[1],GOLD[2]);doc.rect(ML,y-12,3.5,h,'F');
    let yy=y+2;
    if(label){F('helvetica','bold',7.5,GD);caps(label,ML+14,yy);yy+=15;}
    F(bf,bs,sz,INK);lines.forEach(l=>{doc.text(l.text,ML+14,yy);yy+=sz*1.45;});
    y+=h+6;
  };
  const numbered=list=>list.forEach((x,i)=>{
    const ln=wrap(x,CW-26,'times','normal',11);need(ln.length*15.5+3);
    F('helvetica','bold',10,GD);doc.text(String(i+1),ML+6,y);
    F('times','normal',11,INK);ln.forEach(l=>{doc.text(l,ML+26,y);y+=15.5;});y+=3;
  });
  const checks=list=>list.forEach(x=>{
    const ln=wrap(x,CW-26,'times','normal',11);need(ln.length*15.5+3);
    doc.setDrawColor(GD[0],GD[1],GD[2]);doc.setLineWidth(0.9);doc.rect(ML+4,y-8.5,9,9);
    F('times','normal',11,INK);ln.forEach(l=>{doc.text(l,ML+26,y);y+=15.5;});y+=3;
  });
  const title=(label,s,sz)=>{
    const ln=wrap(s,CW,'helvetica','bold',sz);need(24+ln.length*sz*1.2);
    F('helvetica','bold',8.5,GD);caps(label,ML,y);y+=sz+4;
    F('helvetica','bold',sz,[17,17,17]);ln.forEach(l=>{doc.text(l,ML,y);y+=sz*1.2;});y+=8;
  };
  doc.setProperties({title:guideWord(c)+': '+(c.track==='3'?minName(c):c.code+' '+c.title),author:'BFM Academy',subject:'Bushwick Family Ministries, Church of God of Prophecy: '+minName(c)});

  /* first page */
  doc.setFillColor(10,10,10);doc.rect(0,0,W,single?78:132,'F');
  doc.setFillColor(GOLD[0],GOLD[1],GOLD[2]);doc.rect(0,single?78:132,W,4,'F');
  let lx=ML;
  try{const ls=single?46:78;doc.addImage(LOGO_B64,'PNG',ML,(single?78:132)/2-ls/2,ls,ls);lx=ML+ls+16;}catch(e){lx=ML;}
  {const bh=single?78:132,my=bh/2;
   F('helvetica','bold',single?15:23,[255,255,255]);doc.text('BUSHWICK FAMILY MINISTRIES',lx,my+(single?-2:-4),{charSpace:single?1.2:1.8});
   F('helvetica','normal',single?8:10.5,GOLD);doc.text('CHURCH OF GOD OF PROPHECY',lx,my+(single?13:20),{charSpace:single?2:2.6});}
  let tocY=0;
  if(single){
    y=116;
    F('helvetica','bold',11,[17,17,17]);caps(minName(c),ML,y);y+=16;
    F('helvetica','bold',8.5,GD);caps(c.track==='3'?'BFM Academy  |  Study guide':c.code+'  |  '+t.short+'  |  '+c.title,ML,y);y+=26;
  }else{
    y=196;
    const m3=c.track==='3';
    F('helvetica','bold',13,[17,17,17]);caps(minName(c),ML,y,{charSpace:1.8});y+=8;
    doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);doc.setLineWidth(1.5);doc.line(ML,y,ML+60,y);y+=18;
    F('helvetica','bold',9,GD);caps(m3?'BFM Academy study guide':'BFM Academy study guide   |   '+c.code+'   |   '+t.short,ML,y);y+=14;
    const tl=wrap(m3?minName(c):c.title,CW,'helvetica','bold',27);F('helvetica','bold',27,[17,17,17]);tl.forEach(l=>{y+=27*1.12;doc.text(l,ML,y);});y+=30;
    para(c.goal,{f:'times',st:'italic',sz:13,col:GR,lh:1.45,after:14});
    doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);doc.setLineWidth(1.5);doc.line(ML,y,ML+60,y);y+=28;
    F('helvetica','bold',7.5,GR);caps('Student',ML,y);caps('Date',ML+270,y);
    F('times','normal',12,INK);
    if(S.prof.name)doc.text(pt(S.prof.name),ML,y+16);
    doc.setDrawColor(RULE[0],RULE[1],RULE[2]);doc.setLineWidth(0.7);doc.line(ML,y+20,ML+240,y+20);doc.line(ML+270,y+20,W-ML,y+20);
    y+=48;
    F('helvetica','bold',8,GR);caps('About '+fmtH(hoursOf(c))+' hours  |  '+c.lessons.length+(c.lessons.length===1?' lesson':' lessons')+'  |  1 assessment  |  1 project',ML,y);y+=30;
    h3('In this guide');tocY=y;
    y+=(c.lessons.length+1)*22+12;
    newPage();
    /* cover letter */
    try{doc.addImage(LOGO_B64,'PNG',ML,y-6,54,54);}catch(e){}
    F('helvetica','bold',8.5,GD);caps('A letter to the student',ML+70,y+14,{charSpace:1.6});
    F('helvetica','bold',16,[17,17,17]);doc.text('BFM Academy',ML+70,y+36);
    y+=84;
    doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);doc.setLineWidth(1.5);doc.line(ML,y-14,W-ML,y-14);
    para(fmtLong(isoToday()),{f:'times',st:'italic',sz:11,col:GR,after:16});
    para('Dear '+(((S.prof.name||'').trim())||'Student')+',',{sz:12,after:10,lh:1.55});
    letterParas(c).forEach(p=>para(p,{sz:11.5,lh:1.62,after:12}));
    y+=6;
    para('In Christ,',{sz:12,after:26});
    F('times','italic',20,GD);doc.text('The BFM Academy Team',ML,y);
    doc.setDrawColor(RULE[0],RULE[1],RULE[2]);doc.setLineWidth(0.7);doc.line(ML,y+8,ML+240,y+8);
    F('helvetica','normal',8.5,GR);doc.text('Bushwick Family Ministries  |  Reach. Teach. Equip.',ML,y+22);
    newPage();
  }
  /* lessons */
  c.lessons.forEach((l,i)=>{
    if(single&&only!==i)return;
    if(!single&&i>0)newPage();
    start[i]=pg;
    title('Lesson '+(i+1)+' of '+c.lessons.length,l.t,20);
    const refs=wrap(l.ref.join('   |   '),CW-28,'helvetica','bold',10);
    F('helvetica','bold',10,INK);
    box('Scripture',refs.map(r=>({text:r})),LT,10,'helvetica','bold');
    para(l.bib,{lh:1.55,after:6});
    h3('Key ideas');numbered(l.key);
    h3('Putting it into practice');checks(l.pra);
    h3('Reflection',70);
    l.rq.forEach((q,qi)=>{
      const ln=wrap((qi+1)+'.  '+q,CW,'times','bold',11);need(ln.length*16+3*22+8);
      F('times','bold',11,INK);ln.forEach(x=>{doc.text(x,ML,y);y+=16;});y+=2;rules(3);
    });
    h3('Activity',58);
    const al=wrap(l.act,CW-28,'times','normal',11);F('times','normal',11,INK);
    box('This week',al.map(x=>({text:x})),[245,245,245],11,'times','normal');
    if(y+130<BOT){h3('My notes');rules(3);}
  });
  if(!single){
    newPage();start.proj=pg;
    title('Course project',c.proj.t,20);
    para(c.proj.b,{lh:1.55});
    h3('Deliverables');checks(c.proj.d);
    h3('Sign-off');y+=18;
    doc.setDrawColor(RULE[0],RULE[1],RULE[2]);doc.setLineWidth(0.7);doc.line(ML,y,ML+240,y);doc.line(ML+270,y,W-ML,y);y+=13;
    F('helvetica','bold',7.5,GR);caps('Reviewed by (mentor or pastor)',ML,y);caps('Date',ML+270,y);y+=14;
    h3('Notes');rules(5);
    /* contents with page numbers on page 1 */
    doc.setPage(1);
    c.lessons.forEach((l,i)=>{
      const yy=tocY+i*22;
      F('helvetica','bold',9,GD);doc.text(String(i+1),ML+4,yy);
      F('times','normal',11.5,INK);const tx=pt(l.t).slice(0,70);doc.text(tx,ML+24,yy);
      const pn=String(start[i]);F('times','normal',11.5,INK);doc.text(pn,W-ML,yy,{align:'right'});
      const x1=ML+24+doc.getTextWidth(tx)+6,x2=W-ML-doc.getTextWidth(pn)-6;
      if(x2>x1){doc.setDrawColor(170,170,170);doc.setLineWidth(0.6);try{doc.setLineDashPattern([1,2.5],0);}catch(e){}doc.line(x1,yy,x2,yy);try{doc.setLineDashPattern([],0);}catch(e){}}
    });
    const yy=tocY+c.lessons.length*22;
    F('helvetica','bold',9,GD);doc.text('P',ML+4,yy);
    F('times','normal',11.5,INK);const tp=pt('Course project: '+c.proj.t).slice(0,70);doc.text(tp,ML+24,yy);
    doc.text(String(start.proj),W-ML,yy,{align:'right'});
  }
  pdfFooter(doc,minName(c));
}
/* ================= Staff portal: login, overview, students, review, requests, activity, certificates ================= */
Object.assign(IC,{
 eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 eyeoff:'<path d="M3 3l18 18M10.6 6.1A9.8 9.8 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3.2 3.9M6.6 6.7C3.9 8.4 2 12 2 12s3.5 7 10 7c1.6 0 3-.4 4.3-1M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
 users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.3c2.2.7 3.5 2.6 3.5 5.7"/>',
 inbox:'<path d="M3 13l3-8h12l3 8v6H3z"/><path d="M3 13h5l1 3h6l1-3h5"/>',
 clip:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM8.5 12h7M8.5 16h5"/>',
 chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
 grid:'<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/>',
 spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>'
});
var ADMQ='',ADMM='',ADMF='',LOGINTRY=0,LOGINBUSY=false;
const ini=n=>{const p=String(n||'').replace(/\(.*?\)/g,'').trim().split(/\s+/).filter(Boolean);return ((p[0]||'?')[0]+(p.length>1?p[p.length-1][0]:'')).toUpperCase();};
const avatar=(n,cls)=>'<span class="avt '+(cls||'')+'" aria-hidden="true">'+esc(ini(n))+'</span>';
function agoTxt(ts){
  const m=Math.max(0,Math.round((Date.now()-ts)/60000));
  if(m<1)return 'just now';if(m<60)return m+' min ago';
  const h=Math.round(m/60);if(h<24)return h+' hr ago';
  const d=Math.round(h/24);return d+(d===1?' day':' days')+' ago';
}
function reqLabel(k){
  if(k==='access_A')return 'Start Track A (Administrative)';
  if(k==='access_T')return 'Start the Teacher Certification';
  if(k==='access_D')return 'Start the BFM Discipleship Class';
  if(k.indexOf('unlock_')===0){const uc=byId[k.slice(7)];return 'Unlock '+(uc?uc.code+' \u00B7 '+uc.title:k);}
  if(k.indexOf('reg_')===0){const rt=trackOf(k.slice(4));return 'Registered for '+(rt?rt.title:'a class');}
  if(k.indexOf('skipclass_')===0){const st=trackOf(k.slice(10));return 'Skip the '+(st?st.title:'class');}
  const c=byId[k.slice(5)];return 'Skip '+(c?c.code+' \u00B7 '+c.title:k);
}
function workItems(){
  const items=[];
  roster().forEach(r=>{
    const w=r.d.work||{},o=outOf(r.uid);
    Object.keys(w).forEach(cid=>{
      const c=byId[cid];if(!c)return;
      const x=w[cid],sub=!!(x.p&&x.p.done),gr=(o.grades||{})[cid];
      if(!sub&&!x.l)return;
      items.push({r,c,sub,gr,need:sub&&!gr});
    });
  });
  items.sort((a,b)=>(b.need-a.need)||nameOf(a.r).localeCompare(nameOf(b.r)));
  return items;
}
const doneOf=r=>Object.keys(r.d.comp||{}).filter(k=>byId[k]&&!OPT(byId[k].track)).length;
const greet=()=>{const h=new Date().getHours();return h<12?'Good morning':h<18?'Good afternoon':'Good evening';};
const empty=(icon,t,p,btn)=>'<div class="empty"><span class="empty-ic">'+ic(icon)+'</span><h3>'+t+'</h3><p class="muted">'+p+'</p>'+(btn||'')+'</div>';

/* ---------- staff login ---------- */
function adminLogin(){
  return '<div class="stafflogin">'+
  '<section class="sl-hero"><img src="'+LOGO_B64+'" alt="" class="sl-logo"><p class="eyebrow sl-eye">BFM Academy &middot; Staff portal</p><h1>Welcome back, Director.</h1>'+
  '<p class="sl-lede">Sign in to guide your students, review their work and care for your Academy.</p>'+
  '</section>'+
  '<form class="sl-card" id="slcard" onsubmit="return false" autocomplete="off">'+
  '<span class="sl-lock">'+ic('lock')+'</span><h2>Unlock the staff tools</h2><p class="muted">Enter your personal access code. Each director has their own.</p>'+
  '<div class="field"><label for="ad-code">Director access code</label><div class="pwrap"><input type="password" id="ad-code" autocomplete="off" placeholder="XXXXX-XXXXX" maxlength="11" autocapitalize="characters" spellcheck="false" autofocus><button type="button" class="eyebtn" data-act="adm-eye" aria-label="Show code" aria-pressed="false">'+ic('eye')+'</button></div></div>'+
  ((window.BFM_BACKEND&&window.BFM_BACKEND.needsDirector)?'<div class="field"><label for="ad-fb">Shared records password</label><input type="password" id="ad-fb" autocomplete="off" placeholder="Needed to see student messages and requests" spellcheck="false"></div>':'')+
  '<button class="btn big sl-go" type="button" data-act="admin-login">Unlock staff tools</button>'+
  '<p class="sl-err" id="admsg" role="alert" aria-live="assertive">'+esc(ADMSG)+'</p>'+
  '<p class="sl-foot">Access codes are personal and secret. Please do not share yours.</p>'+
  '<button type="button" class="linkbtn" style="margin:0" data-go="home">'+ic('back')+' Back to campus</button></form></div>';
}
const hexB=h=>new Uint8Array(h.match(/../g).map(x=>parseInt(x,16)));
const toHex=b=>Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,'0')).join('');
async function codeSlot(code){
  const cr=(window.crypto||globalThis.crypto);if(!cr||!cr.subtle)return -1;
  const enc=new TextEncoder(),key=await cr.subtle.importKey('raw',enc.encode(code),'PBKDF2',false,['deriveBits']);
  const hs=await Promise.all(ADMIN_KEYS.map(async k=>toHex(await cr.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:hexB(k.s),iterations:ADMIN_ITER},key,256))));
  let hit=0;ADMIN_KEYS.forEach((k,i)=>{let d=0;for(let c=0;c<64;c++)d|=k.h.charCodeAt(c)^hs[i].charCodeAt(c);if(d===0)hit=k.n;});
  return hit;
}
const fmtCode=v=>{v=String(v||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,10);return v.length>5?v.slice(0,5)+'-'+v.slice(5):v;};
function lockState(){try{return JSON.parse(localStorage.getItem('bfm-adm-lock')||'{}');}catch(e){return {};}}
function setLock(o){try{localStorage.setItem('bfm-adm-lock',JSON.stringify(o));}catch(e){}}
function admLock(msg){
  S.admin=false;S.preview=false;ADM_EXP=0;ADM_SLOT=0;
  try{if(window.BFM_BACKEND)window.BFM_BACKEND.signOutDirector();}catch(e){}
  try{sessionStorage.removeItem(SESSKEY);}catch(e){}
  save();renderNav();
  if(V.n==='admin'||V.n==='profile'||V.n==='icert')go('home');else refresh();
  toast(msg||'You are logged out.');
}
async function admLogin(){
  if(LOGINBUSY)return;
  const inp=$('#ad-code'),card=$('#slcard'),msg=$('#admsg'),btn=$('.sl-go');
  const say=m=>{ADMSG=m;if(msg)msg.textContent=m;};
  const fail=m=>{say(m);if(card){card.classList.remove('shake');void card.offsetWidth;card.classList.add('shake');}if(inp&&inp.focus){inp.focus();if(inp.select)inp.select();}};
  const lk=lockState(),now=Date.now();
  if(lk.until&&lk.until>now){fail('Too many tries. Wait '+Math.ceil((lk.until-now)/1000)+' seconds and try again.');return;}
  const v=String((inp&&inp.value)||'').toUpperCase().replace(/[^A-Z0-9]/g,'');
  if(v.length!==10){fail('Enter your 10-character access code.');return;}
  LOGINBUSY=true;if(btn){btn.disabled=true;btn.textContent='Checking...';}
  let slot=0;try{slot=await codeSlot(v);}catch(e){slot=-1;}
  LOGINBUSY=false;if(btn){btn.disabled=false;btn.textContent='Unlock staff tools';}
  let fbNote='';
  if(slot>0&&window.BFM_BACKEND&&window.BFM_BACKEND.needsDirector){
    const fb=$('#ad-fb'),pw=String((fb&&fb.value)||'');
    if(!pw)fbNote='No shared records password was entered, so student messages and requests will not load.';
    else{try{await window.BFM_BACKEND.signInDirector(pw);}catch(e){fbNote='The shared records password was not accepted, so student messages and requests will not load.';}}
  }
  if(slot>0){
    setLock({});ADMSG='';if(msg)msg.textContent='';
    ADM_EXP=Date.now()+4*3600e3;ADM_LAST=Date.now();ADM_SLOT=slot;
    try{sessionStorage.setItem(SESSKEY,JSON.stringify({exp:ADM_EXP,n:slot}));}catch(e){}
    if(card)card.classList.add('ok');
    if(btn){btn.innerHTML=ic('check')+' Welcome back';btn.disabled=true;}
    const wrap=card&&card.parentNode;
    setTimeout(()=>{if(wrap&&wrap.classList)wrap.classList.add('leaving');},450);
    setTimeout(()=>{
      S.admin=true;S.preview=true;save();watchAdmin();ADMENTER=true;
      renderNav();go('admin',['overview']);toast(fbNote||'Welcome back, Director.');
    },950);
  }else if(slot<0){fail('This browser cannot check access codes securely. Try a current browser.');}
  else{
    const n=(lk.n||0)+1,o={n};
    if(n>=5){o.until=Date.now()+Math.min(900,30*Math.pow(2,n-5))*1000;}
    setLock(o);
    fail(n>=5?'Too many tries. Please wait before trying again.':'That access code is not correct.');
  }
}
{const t=setInterval(()=>{
  if(!S.admin)return;
  const n=Date.now();
  if(ADM_EXP&&n>ADM_EXP)admLock('Your staff session ended. Please sign in again.');
  else if(n-ADM_LAST>30*60e3)admLock('Locked after 30 minutes of no activity.');
},30000);if(t&&t.unref)t.unref();}
if(typeof document!=='undefined'&&document.addEventListener){['click','keydown'].forEach(ev=>document.addEventListener(ev,()=>{ADM_LAST=Date.now();},true));}

/* ---------- shell ---------- */
function syncChip(){
  if(DB&&ADM.err)return '<span class="chip bad"><i></i>No access to records</span>';
  return '<span class="chip live"><i></i>Live</span>';
}
function admNav(tab){
  const nReq=pendingReqs().length,nWork=workItems().filter(i=>i.need).length;
  let nMsg=0;roster().forEach(r=>{const o_=outOf(r.uid),rp=o_.replies||{},mh=o_.mhide||{};(r.d.msgs||[]).forEach(m=>{if(!rp[m.id]&&!mh[m.id])nMsg++;});});
  const T=[['overview','grid','Overview',0],['students','users','Students',0],['review','clip','Review & grade',nWork],['requests','inbox','Requests',nReq],['messages','chat','Messages',nMsg],['activity','chart','Course activity',0],['reports','report','Reports',0],['announcements','mega','Announcements',0],['events','cal','Events',0],['certs','award','Certificates',0]];
  const cur=tab==='student'?'students':tab;
  return '<nav class="admnav" aria-label="Staff sections">'+T.map(t=>'<button data-go="admin:'+t[0]+'" '+(cur===t[0]?'aria-current="page"':'')+'>'+ic(t[1])+'<span>'+t[2].replace('&','&amp;')+'</span>'+(t[3]?'<span class="cnt">'+t[3]+'</span>':'')+'</button>').join('')+'</nav>';
}
let ADMENTER=false;
const logoutBar=()=>'<div class="logoutbar"><button class="btn ghost" data-act="admin-logout">'+ic('lock')+'Log out</button></div>';
function admShell(tab,title,lede,body,extra){
  const ent=ADMENTER?' adm-enter':'';ADMENTER=false;
  return '<div class="adm'+ent+'">'+
  '<header class="admtop"><div class="admtop-l"><p class="eyebrow lab">Staff portal</p><h1>'+title+'</h1>'+(lede?'<p class="lede">'+lede+'</p>':'')+'</div>'+
  '<div class="admtop-r">'+syncChip()+(extra||'')+'</div></header>'+
  admNav(tab)+admNotice()+body+'</div>';
}
function admNotice(){
  if(DB&&ADM.err)return '<div class="anote bad"><b>Student records are not available to you.</b> Only the artifact owner and invited editors can read them ('+esc(ADM.err)+').</div>';
  return '';
}
function adminView(a){
  a=a||[];
  if(!S.admin)return crumbs([{t:'Campus',go:'home'},{t:'Staff login'}])+adminLogin();
  const tab=a[0]||'overview';
  const hub=hubAdminTab(tab);if(hub)return hub;
  if(tab==='profile')return admShell(tab,'Academy Director','Your staff account.',adminProfile());
  if(tab==='certs')return admShell(tab,'Certificates','Issue a certificate for any track and keep a record of what you have issued.',certsPanel());
  if(tab==='student')return admShell(tab,'Student profile','Profile details, coursework, and account tools.',studentDetail(decodeURIComponent(a[1]||'')));
  if(tab==='review'&&a[1]&&a[2])return admShell('review','Review work','Read the student’s answers and project, then enter a grade.',reviewDetail(decodeURIComponent(a[1]),a[2]));
  if(tab==='review')return admShell(tab,'Review &amp; grade','Projects and written work from your students.',reviewList());
  if(tab==='requests')return admShell(tab,'Requests','Approve or decline requests to skip a course or to start Track A.',requestList());
  if(tab==='reports')return admShell(tab,'Grading reports','Monthly, quarterly, and yearly summaries of graded work. Download them as a PDF, Excel or CSV.',reportsView());
  if(tab==='announcements')return admShell(tab,'Announcements','Post news for every student as an inline banner or a floating pop-up. Set when it shows and when it ends.',annAdmin());
  if(tab==='events')return admShell(tab,'Events','Add Academy events. Students see the next ones in the footer and on the Announcements and events page.',evAdmin());
  if(tab==='activity')return admShell(tab,'Course activity','See who has started each course.',activityList());
  if(tab==='students')return admShell(tab,'Students','Everyone who has joined the Academy.',studentList());
  return overview();
}

/* ---------- overview ---------- */
function feed(){
  const out=[];
  roster().forEach(r=>{
    const nm=nameOf(r),o=outOf(r.uid),w=r.d.work||{};
    Object.keys(r.d.reqs||{}).forEach(k=>{const q=r.d.reqs[k];out.push({t:q.at,i:'inbox',x:'<b>'+esc(nm)+'</b> requested: '+esc(reqLabel(k))});});
    Object.keys(w).forEach(cid=>{const p=w[cid].p;if(p&&p.done&&p.date&&byId[cid]){const t=Date.parse(p.date);if(t)out.push({t,i:'clip',x:'<b>'+esc(nm)+'</b> submitted the project for '+esc(byId[cid].code)});}});
    Object.keys(o.grades||{}).forEach(cid=>{const g=o.grades[cid];if(g.at&&byId[cid])out.push({t:g.at,i:'check',x:'You graded <b>'+esc(nm)+'</b> on '+esc(byId[cid].code)+' ('+esc(g.score)+'%)'});});
    Object.keys(r.d.comp||{}).forEach(cid=>{const d=r.d.comp[cid];const t=typeof d==='string'?Date.parse(d):(d&&d.date?Date.parse(d.date):0);if(t&&byId[cid])out.push({t,i:'award',x:'<b>'+esc(nm)+'</b> completed '+esc(byId[cid].code)});});
  });
  return out.sort((a,b)=>b.t-a.t).slice(0,6);
}
function overview(){
  const R=roster(),P=pendingReqs(),W=workItems(),need=W.filter(i=>i.need);
  const stat=(go,icon,n,label,hot)=>'<button class="astat'+(hot?' hot':'')+'" data-go="'+go+'"><span class="astat-i">'+ic(icon)+'</span><b>'+n+'</b><span>'+label+'</span></button>';
  const stats='<div class="astats">'+
    stat('admin:students','users',R.length,R.length===1?'Student':'Students',0)+
    stat('admin:review','clip',need.length,'Need grading',need.length>0)+
    stat('admin:requests','inbox',P.length,P.length===1?'Pending request':'Pending requests',P.length>0)+
    stat('admin:certs','award',S.issued.length,'Certificates issued',0)+'</div>';
  const reqRows=P.slice(0,4).map(p=>'<li class="arow"><div class="arow-m">'+avatar(p.name)+'<div><b>'+esc(p.name)+'</b><small>'+esc(reqLabel(p.k))+' &middot; '+agoTxt(p.q.at)+'</small>'+(p.q.reason?'<q>'+esc(p.q.reason.length>110?p.q.reason.slice(0,110)+'\u2026':p.q.reason)+'</q>':'')+'</div></div>'+
    '<div class="btnrow"><button class="btn sm" data-act="req-approve" data-u="'+esc(eu(p.uid))+'" data-k="'+esc(p.k)+'">Approve</button><button class="btn ghost sm" data-act="req-decline" data-u="'+esc(eu(p.uid))+'" data-k="'+esc(p.k)+'">Decline</button></div></li>').join('');
  const workRows=need.slice(0,4).map(i=>'<li class="arow"><div class="arow-m">'+avatar(nameOf(i.r))+'<div><b>'+esc(nameOf(i.r))+'</b><small>Submitted <span class="code">'+i.c.code+'</span> '+esc(i.c.title)+'</small></div></div><button class="btn sm" data-go="admin:review:'+eu(i.r.uid)+':'+i.c.id+'">Review</button></li>').join('');
  const attn=(reqRows||workRows)?'<ul class="alist">'+reqRows+workRows+'</ul>'+((P.length>4||need.length>4)?'<p class="more"><button class="linkbtn" data-go="admin:'+(P.length>4?'requests':'review')+'">See everything waiting'+ic('arrow')+'</button></p>':''):
    empty('check','You are all caught up','No requests or projects are waiting on you right now.');
  const by={};R.forEach(r=>Object.keys(r.d.prog||{}).forEach(cid=>{if(byId[cid])by[cid]=(by[cid]||0)+1;}));
  const top=Object.keys(by).sort((a,b)=>by[b]-by[a]).slice(0,5),mx=top.length?by[top[0]]:1;
  const pop=top.length?'<ul class="apop">'+top.map(id=>'<li><span><span class="code">'+byId[id].code+'</span> '+esc(byId[id].title)+'</span><span class="apop-b"><i style="width:'+Math.max(8,Math.round(by[id]/mx*100))+'%"></i></span><b>'+by[id]+'</b></li>').join('')+'</ul>':'<p class="muted">Courses will show up here as students start them.</p>';
  const recent=R.filter(r=>(r.d.prof||{}).name).sort((a,b)=>String((b.d.prof||{}).enrolled||'').localeCompare(String((a.d.prof||{}).enrolled||''))).slice(0,4);
  const rec=recent.length?'<ul class="alist">'+recent.map(r=>'<li class="arow"><div class="arow-m">'+avatar(nameOf(r))+'<div><b>'+esc(nameOf(r))+'</b><small>'+esc(minsText(r.d.prof)||'No ministry yet')+(((r.d.prof||{}).enrolled)?' &middot; joined '+esc(fmtDate(r.d.prof.enrolled)):'')+'</small></div></div><button class="btn ghost sm" data-go="admin:student:'+eu(r.uid)+'">Open</button></li>').join('')+'</ul>':'<p class="muted">New students will appear here after they save a profile.</p>';
  return admShell('overview','Welcome back, Director.',greet()+'. Here is what needs you today.',
    stats+
    '<div class="agrid"><section class="acard"><div class="acard-h"><h2>Needs your attention</h2>'+((P.length+need.length)?'<span class="chip hotc">'+(P.length+need.length)+' waiting</span>':'')+'</div>'+attn+'</section>'+
    '<aside class="aside"><section class="acard"><div class="acard-h"><h2>Most started courses</h2></div>'+pop+'</section></aside></div>'+
    '<section class="acard" style="margin-top:20px"><div class="acard-h"><h2>Recent activity</h2></div>'+(feed().length?'<ul class="alist">'+feed().map(f=>'<li class="arow"><div class="arow-m"><span class="avt">'+ic(f.i)+'</span><div><span>'+f.x+'</span><small>'+agoTxt(f.t)+'</small></div></div></li>').join('')+'</ul>':'<p class="muted">Activity from your students will appear here.</p>')+'</section>'+
    '<section class="acard" style="margin-top:20px"><div class="acard-h"><h2>Recently joined</h2><button class="linkbtn" style="margin:0" data-go="admin:students">All students'+ic('arrow')+'</button></div>'+rec+'</section>'+logoutBar());
}

/* ---------- students ---------- */
function studentCards(){
  const q=ADMQ.trim().toLowerCase(),m=ADMM;
  const R=roster().filter(r=>{
    const p=r.d.prof||{};
    if(m&&minsOf(p).indexOf(m)<0)return false;
    return !q||[nameOf(r),minsText(p),roleOf(p)].join(' ').toLowerCase().includes(q);
  });
  if(!R.length)return roster().length?empty('search','No students match','Try a different name or clear the filters.','<button class="btn ghost" data-act="adm-clear">Clear filters</button>'):empty('users','No students yet',DB?'A student appears here after they save a profile or start a course.':'Student records appear here when this page is connected to shared records. Open the published page while signed in to claude.ai.');
  const reqBy={};pendingReqs().forEach(p=>reqBy[p.uid]=(reqBy[p.uid]||0)+1);
  const needBy={};workItems().forEach(i=>{if(i.need)needBy[i.r.uid]=(needBy[i.r.uid]||0)+1;});
  return '<p class="meta" style="margin:0 0 12px">'+R.length+' student'+(R.length===1?'':'s')+'</p><div class="sgrid">'+R.map(r=>{
    const p=r.d.prof||{},nd=doneOf(r),st=Object.keys(r.d.prog||{}).length,pct=COUNTED.length?Math.round(nd/COUNTED.length*100):0;
    return '<button class="scard" data-go="admin:student:'+eu(r.uid)+'"><div class="scard-h">'+avatarP(p,nameOf(r),'lg')+'<div><b>'+esc(nameOf(r))+'</b><small>'+esc(roleOf(p)||'Role not entered')+'</small></div></div>'+
      '<p class="scard-m">'+esc(minsText(p)||'No ministry assigned')+(p.enrolled?' &middot; joined '+esc(fmtDate(p.enrolled)):'')+'</p>'+
      bar(pct)+'<div class="scard-f"><span>'+st+' started &middot; '+nd+' done</span><span class="flags">'+(needBy[r.uid]?'<span class="chip hotc">'+needBy[r.uid]+' to grade</span>':'')+(reqBy[r.uid]?'<span class="chip hotc">'+reqBy[r.uid]+' request'+(reqBy[r.uid]===1?'':'s')+'</span>':'')+'</span></div></button>';
  }).join('')+'</div>';
}
function studentList(){
  const mins=[...new Set(roster().reduce((a,r)=>a.concat(minsOf(r.d.prof)),[]))].sort();
  return '<div class="toolbar"><div class="tsearch">'+ic('search')+'<input type="search" id="admq" placeholder="Search by name, ministry, or role" value="'+esc(ADMQ)+'" aria-label="Search students" autocomplete="off"></div>'+
    '<select id="admmin" aria-label="Filter by ministry"><option value="">All ministries</option>'+mins.map(x=>'<option'+(x===ADMM?' selected':'')+'>'+esc(x)+'</option>').join('')+'</select><button class="btn ghost" data-act="adm-csv">'+ic('down')+'Export CSV</button></div>'+
    '<div id="admres">'+studentCards()+'</div>';
}

/* ---------- review ---------- */
function reviewList(){
  const W=workItems(),nNeed=W.filter(i=>i.need).length,nGr=W.filter(i=>i.gr).length;
  const f=ADMF||(nNeed?'need':'all');
  const chip=(v,l,n)=>'<button class="fchip" data-act="adm-rf" data-v="'+v+'" aria-pressed="'+(f===v)+'">'+l+' <span>'+n+'</span></button>';
  const items=W.filter(i=>f==='all'||(f==='need'&&i.need)||(f==='graded'&&i.gr));
  const list=items.length?'<ul class="alist card-l">'+items.map(i=>'<li class="arow"><div class="arow-m">'+avatar(nameOf(i.r))+'<div><b>'+esc(nameOf(i.r))+'</b><small><span class="code">'+i.c.code+'</span> '+esc(i.c.title)+'</small></div></div>'+
    '<div class="arow-r">'+(i.gr?'<span class="pill complete">'+ic('check')+'Graded '+esc(i.gr.score)+'%</span>':i.sub?'<span class="chip hotc">Needs grading</span>':'<span class="pill progress">In progress</span>')+
    '<button class="btn '+(i.need?'':'ghost ')+'sm" data-go="admin:review:'+eu(i.r.uid)+':'+i.c.id+'">'+(i.gr?'Open':'Review')+'</button></div></li>').join('')+'</ul>':
    (W.length?empty('check',f==='need'?'Nothing needs grading':'Nothing here yet',f==='need'?'Every submitted project has a grade. Nice work.':'Switch the filter to see other work.','<button class="btn ghost" data-act="adm-rf" data-v="all">Show all work</button>'):empty('clip','Nothing to review yet','Written answers and projects appear here as students work.'));
  return '<div class="fchips">'+chip('need','Needs grading',nNeed)+chip('graded','Graded',nGr)+chip('all','All work',W.length)+'</div>'+list;
}

/* ---------- requests ---------- */
function requestList(){
  const P=pendingReqs();
  if(!P.length)return empty('inbox','You are all caught up','There are no pending requests. New ones will appear here.');
  return '<div class="rgrid">'+P.map(p=>'<article class="acard rq"><div class="rq-h">'+avatar(p.name,'lg')+'<div><b>'+esc(p.name)+'</b><small>'+(p.q.role?esc(roleOf({role:p.q.role}))+' &middot; ':'')+agoTxt(p.q.at)+'</small></div></div>'+
    '<p class="rq-w">'+ic(p.k.indexOf('access_')===0?'shield':p.k.indexOf('reg_')===0?'check':'play')+'<span>'+esc(reqLabel(p.k))+'</span></p>'+
    '<blockquote>'+(p.q.reason?esc(p.q.reason):'<span class="muted">No reason given.</span>')+'</blockquote>'+
    '<div class="btnrow"><button class="btn" data-act="req-approve" data-u="'+esc(eu(p.uid))+'" data-k="'+esc(p.k)+'">'+ic('check')+(p.k.indexOf('reg_')===0?'Confirm':'Approve')+'</button><button class="btn ghost" data-act="req-decline" data-u="'+esc(eu(p.uid))+'" data-k="'+esc(p.k)+'">Decline</button></div></article>').join('')+'</div>';
}

/* ---------- activity ---------- */
function activityList(){
  const R=roster(),by={};
  R.forEach(r=>{const prog=r.d.prog||{};Object.keys(prog).forEach(cid=>{(by[cid]=by[cid]||[]).push({r,pct:prog[cid],done:!!(r.d.comp||{})[cid]});});});
  const ids=Object.keys(by).filter(id=>byId[id]);
  if(!ids.length)return empty('chart','No one has started a course yet','When students enroll and begin lessons, you will see them here, grouped by class and track.');
  return TRACKS.map(t=>{
    const cs=COURSES.filter(c=>c.track===t.id&&by[c.id]);
    if(!cs.length)return '';
    return '<details class="catd" open><summary><span class="cat-t"><span class="eyebrow lab">'+t.label+'</span><h2>'+esc(t.title)+'</h2></span><span class="cat-m"><span class="meta">'+cs.length+' course'+(cs.length===1?'':'s')+' started</span></span></summary><div class="catd-b">'+
      cs.map(c=>'<div class="acard" style="margin-bottom:12px"><div class="sec-h" style="margin:0 0 8px"><h3><span class="code">'+c.code+'</span> '+esc(c.title)+'</h3><span class="meta">'+by[c.id].length+' started \u00B7 '+by[c.id].filter(x=>x.done).length+' completed</span></div>'+
        '<ul class="actl">'+by[c.id].sort((a,b)=>b.pct-a.pct).map(x=>'<li><span class="arow-m" style="gap:10px">'+avatar(nameOf(x.r))+esc(nameOf(x.r))+'</span><span>'+(x.done?'<span class="pill complete">'+ic('check')+'Complete</span>':x.pct+'%')+'</span></li>').join('')+'</ul></div>').join('')+
    '</div></details>';
  }).join('');
}

/* ---------- certificates ---------- */
function certsPanel(){
  const hist=S.issued.length?'<div class="tscroll"><table><thead><tr><th>Issued to</th><th>Credential</th><th>Date</th><th>Signed by</th><th><span class="sr">Actions</span></th></tr></thead><tbody>'+
    S.issued.map((r,i)=>({r,i})).reverse().map(x=>'<tr><td><b>'+esc(x.r.c.name)+'</b></td><td>'+esc(trackOf(x.r.tid).cred)+'</td><td>'+esc(fmtDate(x.r.c.date))+'</td><td>'+esc(x.r.c.signer)+'</td><td style="white-space:nowrap"><button class="btn ghost sm" data-go="icert:'+x.i+'">Open</button> <button class="icon-btn" data-act="del-issued" data-i="'+x.i+'" aria-label="Remove certificate for '+esc(x.r.c.name)+'">'+ic('trash')+'</button></td></tr>').join('')+'</tbody></table></div>':
    empty('award','No certificates yet','Certificates you generate will be listed here.');
  return '<section class="acard"><div class="acard-h"><h2>Generate a certificate</h2></div>'+
  '<form class="formgrid" onsubmit="return false">'+
  '<div class="field"><label for="g-track">Track</label><select id="g-track">'+TRACKS.map(t=>'<option value="'+t.id+'">'+esc(t.label+': '+t.cred)+'</option>').join('')+'</select></div>'+
  '<div class="field"><label for="g-name">Recipient name</label><input type="text" id="g-name" autocomplete="off" placeholder="Full name as it should print"></div>'+
  '<div class="field"><label for="g-signer">Signed by</label><input type="text" id="g-signer" autocomplete="off" placeholder="Name of the person signing"></div>'+
  '<div class="field"><label for="g-title">Signer title</label><input type="text" id="g-title" autocomplete="off" value="Academy Director"></div>'+
  '<div class="field"><label for="g-date">Date</label><input type="date" id="g-date" value="'+isoToday()+'"></div>'+
  '<div class="field"><button class="btn" type="button" data-act="gen-cert">'+ic('award')+'Generate certificate</button></div></form>'+
  '<p class="note" id="gmsg" aria-live="polite" style="margin-top:10px">'+esc(ADMSG)+'</p></section>'+
  '<div class="sec-h" style="margin-top:32px"><h2>Issued certificates</h2></div>'+hist+
  '<p class="note" style="margin-top:18px">Tip: turn on <b>Instructor preview</b> in the header to open every track and course as a student would.</p>';
}

/* ---------- staff actions ---------- */
function admAct(k,d){
  if(pubAct(k,d))return true;
  if(recAct(k,d))return true;
  if(profAct(k,d))return true;
  if(k==='admin-login'){admLogin();return true;}
  if(k==='adm-eye'){
    const i=$('#ad-code');if(!i)return true;
    const show=i.type==='password';i.type=show?'text':'password';
    const b=$('.eyebtn');if(b&&b.setAttribute){b.innerHTML=ic(show?'eyeoff':'eye');b.setAttribute('aria-pressed',String(show));b.setAttribute('aria-label',show?'Hide code':'Show code');}
    if(i.focus)i.focus();return true;
  }
  if(k==='adm-rf'){ADMF=d.v;refresh();return true;}
  if(k==='adm-csv'){exportCsv();return true;}
  if(k==='adm-xlsx'){exportXlsx();return true;}
  if(k==='adm-clear'){ADMQ='';ADMM='';refresh();return true;}
  return false;
}

function adminProfile(){
  return '<div class="admprof"><div class="admprof-h"><span class="avt xl">AD</span><div><h2>Academy Director</h2><p class="muted">Staff account &middot; BFM Academy'+(ADM_SLOT?' &middot; Access code '+ADM_SLOT:'')+'</p><p style="margin-top:8px">'+syncChip()+'</p></div></div>'+
  '<p class="note" style="margin-top:14px">Anyone with the staff passcode signs in as the Academy Director. Each director signs in with a personal access code. This account has no personal name or email, and it never appears in the student list.</p>'+
  '<div class="btnrow" style="margin-top:16px"><button class="btn" data-go="admin:overview">'+ic('grid')+'Open staff portal</button></div></div>'+settingsHtml(true)+logoutBar();
}

/* ---------- professional Excel export (logo, banner, styled table) ---------- */
async function xlsxSave(file,sheetName,title,subtitle,cols,rows,summary){
  const EJ=window.ExcelJS;
  if(!EJ)return false;
  const wb=new EJ.Workbook();wb.creator='BFM Academy';wb.created=new Date();
  const ws=wb.addWorksheet(sheetName,{views:[{state:'frozen',ySplit:6,showGridLines:false}],pageSetup:{orientation:'landscape',fitToPage:true,fitToWidth:1,fitToHeight:0,paperSize:1,margins:{left:.4,right:.4,top:.6,bottom:.6,header:.3,footer:.3}},headerFooter:{oddFooter:'&LBushwick Family Ministries &CPage &P of &N &RBFM Academy'}});
  const n=cols.length,GOLD='FFC6A75E',BLK='FF111111',lastC=String.fromCharCode(64+Math.min(n,26));
  ws.columns=cols.map(c=>({width:c.w||16}));
  [1,2,3].forEach(r=>{ws.getRow(r).height=r===1?30:r===2?22:20;for(let c=1;c<=n;c++)ws.getCell(r,c).fill={type:'pattern',pattern:'solid',fgColor:{argb:BLK}};});
  ws.mergeCells('C1:'+lastC+'1');ws.mergeCells('C2:'+lastC+'2');ws.mergeCells('C3:'+lastC+'3');
  const t=ws.getCell('C1');t.value='BFM ACADEMY';t.font={name:'Calibri',size:20,bold:true,color:{argb:'FFFFFFFF'}};t.alignment={vertical:'middle'};
  const t2=ws.getCell('C2');t2.value=title;t2.font={name:'Calibri',size:13,bold:true,color:{argb:GOLD}};t2.alignment={vertical:'middle'};
  const t3=ws.getCell('C3');t3.value='Bushwick Family Ministries · Reach. Teach. Equip.';t3.font={name:'Calibri',size:10,italic:true,color:{argb:'FFC9C9C9'}};t3.alignment={vertical:'middle'};
  try{const id=wb.addImage({base64:LOGO_B64.replace(/^data:image\/\w+;base64,/,''),extension:'png'});ws.addImage(id,{tl:{col:0.15,row:0.1},ext:{width:78,height:78}});}catch(e){}
  ws.mergeCells('A4:'+lastC+'4');const s=ws.getCell('A4');s.value=subtitle+' · Generated '+new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});s.font={name:'Calibri',size:10,color:{argb:'FF555555'}};s.alignment={vertical:'middle',indent:1};ws.getRow(4).height=22;
  const bottom=ws.getRow(4);for(let c=1;c<=n;c++)ws.getCell(4,c).border={bottom:{style:'medium',color:{argb:GOLD}}};
  let r0=5;
  (summary||[]).forEach(()=>{});
  ws.getRow(5).height=8;
  const hr=ws.getRow(6);hr.height=26;
  cols.forEach((c,i)=>{const x=hr.getCell(i+1);x.value=c.h;x.font={name:'Calibri',size:11,bold:true,color:{argb:GOLD}};x.fill={type:'pattern',pattern:'solid',fgColor:{argb:BLK}};x.alignment={vertical:'middle',horizontal:c.num?'center':'left',indent:c.num?0:1,wrapText:true};x.border={bottom:{style:'thin',color:{argb:GOLD}}};});
  rows.forEach((row,ri)=>{
    const rr=ws.getRow(7+ri);
    row.forEach((v,i)=>{const c=cols[i],x=rr.getCell(i+1);x.value=v;x.font={name:'Calibri',size:11,bold:i===0&&!c.num};
      x.alignment={vertical:'top',horizontal:c.num?'center':'left',indent:c.num?0:1,wrapText:!!c.wrap};
      if(c.fmt)x.numFmt=c.fmt;
      x.fill={type:'pattern',pattern:'solid',fgColor:{argb:ri%2?'FFF7F3E8':'FFFFFFFF'}};x.border={bottom:{style:'hair',color:{argb:'FFBBBBBB'}}};});
  });
  const end=7+rows.length;
  if(rows.length)ws.autoFilter={from:{row:6,column:1},to:{row:6,column:n}};
  (summary||[]).forEach((sm,i)=>{const rr=ws.getRow(end+1+i);rr.getCell(1).value=sm[0];rr.getCell(1).font={bold:true,name:'Calibri',size:11,color:{argb:'FF7A6125'}};rr.getCell(2).value=sm[1];rr.getCell(2).font={bold:true,name:'Calibri',size:11};rr.getCell(2).alignment={horizontal:'left'};});
  const f=ws.getRow(end+1+(summary||[]).length+1);f.getCell(1).value='Confidential: student records are for BFM Academy staff only.';f.getCell(1).font={name:'Calibri',size:9,italic:true,color:{argb:'FF777777'}};
  ws.pageSetup.printTitlesRow='6:6';
  const buf=await wb.xlsx.writeBuffer();
  await saveFile(file,new Blob([buf],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}));
  return true;
}
async function exportXlsx(){
  const R=roster();
  if(!R.length){toast('There are no students to export yet.');return;}
  const rows=R.map(r=>{const p=r.d.prof||{},nd=doneOf(r);return [nameOf(r),minsText(p),roleOf(p),p.enrolled||'',Object.keys(r.d.prog||{}).length,nd,COUNTED.length?nd/COUNTED.length:0];});
  const ok=await xlsxSave('BFM-Academy-Students-'+isoToday()+'.xlsx','Students','Student roster and progress',R.length+' students',
    [{h:'Name',w:30},{h:'Ministry',w:28,wrap:1},{h:'Role',w:26},{h:'Enrolled',w:14},{h:'Courses started',w:16,num:1},{h:'Courses completed',w:18,num:1},{h:'Percent complete',w:17,num:1,fmt:'0%'}],rows,
    [['Total students',R.length],['Average completion',Math.round(rows.reduce((a,r)=>a+r[6],0)/rows.length*100)+'%']]);
  if(!ok){toast('Excel is not available right now. Saving a CSV instead.');exportCsv();}
}
function csvCell(v){v=String(v==null?'':v);return /[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v;}
function exportCsv(){
  const R=roster();
  if(!R.length){toast('There are no students to export yet.');return;}
  const rows=[['Name','Ministry','Role','Enrolled','Courses started','Courses completed','Percent complete']];
  R.forEach(r=>{const p=r.d.prof||{},nd=doneOf(r);rows.push([nameOf(r),minsText(p),roleOf(p),p.enrolled||'',Object.keys(r.d.prog||{}).length,nd,COUNTED.length?Math.round(nd/COUNTED.length*100)+'%':'0%']);});
  const csv='\ufeff'+rows.map(r=>r.map(csvCell).join(',')).join('\r\n');
  saveFile('BFM-Academy-Students-'+isoToday()+'.csv',new Blob([csv],{type:'text/csv'}));
}
/* ================= Round 4: study helpers, course tools, announcements, events, grading reports ================= */
Object.assign(IC,{
 mega:'<path d="M3 11v2a2 2 0 0 0 2 2h1l4 4V5L6 9H5a2 2 0 0 0-2 2zM15 8a5 5 0 0 1 0 8M18 5a9 9 0 0 1 0 14"/>',
 pin:'<path d="M12 17v5M9 3h6l-1 6 3 3H7l3-3z"/>',
 bookmark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
 note:'<path d="M5 3h10l4 4v14H5zM14 3v5h5M8 13h8M8 17h5"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
 map:'<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
 edit:'<path d="M4 20h4L19 9l-4-4L4 16zM13 7l4 4"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 report:'<path d="M5 3h14v18H5zM9 17v-4M12 17V8M15 17v-6"/>'
});

/* ---------- shared public content (announcements + events) ---------- */
var PUB={announcements:[],events:[]},ANEDIT='',EVEDIT='',NT=null,PUBLIVE=false;
(function(){const p=S.pub||{};PUB.announcements=Array.isArray(p.announcements)?p.announcements:[];PUB.events=Array.isArray(p.events)?p.events:[];})();
function pubWatch(){
  if(!DB||PUBLIVE)return;
  PUBLIVE=true;
  ['announcements','events'].forEach(key=>{
    try{DB.doc('pub/'+key).onSnapshot(sn=>{
      PUB[key]=sn.exists&&sn.data()&&Array.isArray(sn.data().items)?sn.data().items:[];
      S.pub=S.pub||{};S.pub[key]=PUB[key];
      try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}
      if(typeof renderFoot==='function')renderFoot();
      try{renderAnn();}catch(e){}
      if(V.n==='home'||V.n==='news'||(V.n==='admin'&&/^(announcements|events)$/.test((V.a||[])[0]||'')))softRefresh();
    },()=>{});}catch(e){}
  });
}
function pubSet(key,items,msg){
  PUB[key]=items;S.pub=S.pub||{};S.pub[key]=items;save();
  if(DB){
    try{Promise.resolve(DB.doc('pub/'+key).set({items,at:Date.now()})).then(()=>toast(msg)).catch(()=>toast('Could not publish. Only the artifact owner and invited editors can post.'));}catch(e){toast('Could not publish.');}
  }else toast(msg+' (this device only)');
  refresh();renderFoot();
}
const nid=()=>'x'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const ANICONS=[['mega','Megaphone'],['bell','Bell'],['cal','Calendar'],['award','Award'],['spark','Sparkle'],['flame','Flame'],['users','People'],['book','Book'],['shield','Shield'],['target','Target'],['pin','Pin'],['clock','Clock'],['map','Location'],['chat','Chat']];
const ANPAL=[['Gold','#C6A75E','#111111','#111111'],['Black','#111111','#F3E9C8','#C6A75E'],['White','#FFFFFF','#111111','#C6A75E'],['Green','#1F6B45','#FFFFFF','#F3E9C8'],['Blue','#1D4E89','#FFFFFF','#F3E9C8'],['Red','#9B2226','#FFFFFF','#F3E9C8'],['Purple','#5B3A8C','#FFFFFF','#F3E9C8']];
const okHex=v=>/^#[0-9a-fA-F]{6}$/.test(v||'')?v:'';
const annT=s=>{if(!s)return 0;const t=Date.parse(s);return isNaN(t)?0:t;};
const annStart=a=>a.start?annT(a.start):(a.at||0);
const annEnd=a=>{if(a.end)return annT(a.end)||Infinity;if(a.exp){const p=String(a.exp).split('-');return new Date(+p[0],+p[1]-1,+p[2],23,59,59).getTime();}return Infinity;};
const annState=(a,now)=>{now=now||Date.now();if(a.archived)return 'archived';if(annStart(a)>now)return 'scheduled';if(annEnd(a)<now)return 'ended';return 'live';};
const annKind=a=>a.kind==='floating'?'floating':'inline';
const liveAnn=kind=>PUB.announcements.filter(a=>annState(a)==='live'&&(!kind||annKind(a)===kind)).sort((a,b)=>(!!b.pin-!!a.pin)||(b.at||0)-(a.at||0));
const archAnn=()=>PUB.announcements.filter(a=>{const s=annState(a);return s==='archived'||s==='ended';}).sort((a,b)=>(annEnd(b)===Infinity?(b.archivedAt||b.at||0):annEnd(b))-(annEnd(a)===Infinity?(a.archivedAt||a.at||0):annEnd(a)));
const upcoming=()=>PUB.events.filter(e=>String(e.date)>=isoToday()).sort((a,b)=>String(a.date).localeCompare(String(b.date))||String(a.time||'').localeCompare(String(b.time||'')));

const fmtDT=t=>{try{return new Date(t).toLocaleString('en-US',{month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit'});}catch(e){return '';}};
const ANIDX={inline:0,floating:0};
const annStyle=a=>{const bg=okHex(a.bg),fg=okHex(a.fg),ac=okHex(a.accent);return (bg||fg||ac)?' style="'+(bg?'--ab:'+bg+';':'')+(fg?'--af:'+fg+';':'')+(ac?'--aa:'+ac+';':'')+'"':'';};
function annNavHtml(kind,i,n){
  return '<div class="annnav"><button type="button" class="annarr" data-act="ann-nav" data-k="'+kind+'" data-d="-1" aria-label="Previous announcement">'+ic('back')+'</button><span class="annct" aria-live="polite">'+(i+1)+' of '+n+'</span><button type="button" class="annarr" data-act="ann-nav" data-k="'+kind+'" data-d="1" aria-label="Next announcement">'+ic('arrow')+'</button>'+(kind==='floating'?'<button type="button" class="annall" data-act="ann-closeall">Close all</button>':'')+'</div>';
}
function annCard(a,o){
  o=o||{};
  const cust=okHex(a.bg)||okHex(a.fg)||okHex(a.accent);
  const till=a.end?' · until '+esc(fmtDT(annT(a.end))):(a.exp?' · until '+esc(fmtDate(a.exp)):'');
  return '<article class="annc'+(a.pin?' pinned':'')+(cust?' cust':'')+'"'+annStyle(a)+'><span class="annc-i">'+ic(a.icon||(a.pin?'pin':'mega'))+'</span><div class="annc-b"><h3>'+esc(a.title)+'</h3><p>'+esc(a.body||'')+'</p><small>Posted '+esc(agoTxt(a.at||Date.now()))+till+'</small>'+(o.nav||'')+'</div>'+
    (o.dismiss?'<button class="icon-btn annx" data-act="ann-dismiss" data-id="'+esc(a.id)+'" aria-label="Dismiss announcement">'+ic('x')+'</button>':'')+'</article>';
}
function annBanner(){
  if(S.admin)return '';
  const L=liveAnn('inline').filter(a=>!S.annSeen[a.id]);
  if(!L.length)return '';
  const i=Math.max(0,Math.min(ANIDX.inline,L.length-1));ANIDX.inline=i;
  return '<section class="annwrap" aria-label="Announcements">'+annCard(L[i],{dismiss:true,nav:L.length>1?annNavHtml('inline',i,L.length):''})+'</section>';
}
/* new events since the student's first visit */
function evBase(){if(!S.evBase){S.evBase=Date.now();save();}return S.evBase;}
function newEvents(){
  if(S.admin)return [];
  const b=evBase(),seen=S.evSeen||[];
  return upcoming().filter(e=>(e.at||0)>b&&seen.indexOf(e.id)<0);
}
function floatItems(){
  const out=[];if(S.admin)return out;
  const ne=newEvents();
  if(ne.length)out.push({id:'ev:new',type:'events',list:ne});
  liveAnn('floating').filter(a=>!S.annSeen[a.id]).forEach(a=>out.push(a));
  return out;
}
function evPop(it,nav){
  return '<article class="annc cust evpop" style="--ab:#111111;--af:#FFFFFF;--aa:#C6A75E"><span class="annc-i">'+ic('cal')+'</span><div class="annc-b"><h3>'+(it.list.length>1?it.list.length+' new events':'New event')+'</h3><ul class="evpop-l">'+it.list.slice(0,3).map(e=>'<li><b>'+esc(e.title)+'</b><span>'+esc(fmtDate(e.date))+(e.time?' · '+esc(e.time):'')+(e.place?' · '+esc(e.place):'')+'</span></li>').join('')+'</ul>'+(it.list.length>3?'<small>and '+(it.list.length-3)+' more</small>':'')+
    '<div class="btnrow" style="margin-top:8px"><button type="button" class="btn sm" data-act="ev-go-foot">'+ic('cal')+'See the events calendar</button></div>'+(nav||'')+'</div><button class="icon-btn annx" data-act="ann-dismiss" data-id="ev:new" aria-label="Dismiss new events">'+ic('x')+'</button></article>';
}
function annHost(){
  let e=$('#annfloat');
  if(!e&&document.createElement&&document.body){e=document.createElement('div');e.id='annfloat';e.setAttribute('role','region');e.setAttribute('aria-label','Pop-up announcements');document.body.appendChild(e);}
  return e;
}
function renderAnn(){
  const el=annHost();if(!el)return;
  const busy=(typeof TOUR!=='undefined'&&TOUR);
  const L=(S.admin||busy)?[]:floatItems();
  if(!L.length){el.innerHTML='';el.className='';return;}
  const i=Math.max(0,Math.min(ANIDX.floating,L.length-1));ANIDX.floating=i;
  const it=L[i],nav=L.length>1?annNavHtml('floating',i,L.length):'';
  el.className='on';
  el.innerHTML='<div class="annfl">'+(it.type==='events'?evPop(it,nav):annCard(it,{dismiss:true,nav}))+'</div>';
}
let ANSIG='';
function annTick(){
  const sig=PUB.announcements.map(a=>a.id+annState(a)).join('|');
  if(sig!==ANSIG){const first=ANSIG==='';ANSIG=sig;if(!first){try{renderAnn();}catch(e){}if(V.n==='home'||V.n==='news'||(V.n==='admin'&&/^announcements$/.test((V.a||[])[0]||'')))softRefresh();}}
}
if(typeof setInterval==='function'){const t=setInterval(annTick,20000);if(t&&t.unref)t.unref();}
function evCard(e){
  const p=String(e.date).split('-'),d=new Date(+p[0],+p[1]-1,+p[2]);
  return '<article class="evc"><div class="evc-d"><b>'+d.getDate()+'</b><span>'+d.toLocaleDateString('en-US',{month:'short'})+'</span></div><div class="evc-b"><h3>'+esc(e.title)+'</h3>'+
    '<p class="evc-m">'+(e.time?ic('clock')+esc(e.time)+' ':'')+(e.place?ic('map')+esc(e.place):'')+'</p>'+(e.desc?'<p>'+esc(e.desc)+'</p>':'')+
    (e.link&&/^https?:\/\//i.test(e.link)?'<a class="fbtn dk" href="'+esc(e.link)+'" target="_blank" rel="noopener noreferrer">More details'+ic('ext')+'</a>':'')+'</div></article>';
}
function newsView(){
  const A=liveAnn(),AR=archAnn(),E=upcoming();
  return '<div class="thead"><p class="eyebrow">Announcements and events</p><h1>What is happening</h1><p class="lede">News from the Academy Director and upcoming events at Bushwick Family Ministries.</p></div>'+
    '<div class="sec-h"><h2>Announcements</h2></div>'+(A.length?'<div class="annwrap">'+A.map(a=>annCard(a)).join('')+'</div>':'<div class="empty"><span class="empty-ic">'+ic('mega')+'</span><h3>No announcements right now</h3><p class="muted">When the director posts something, it shows up here and on your home page.</p></div>')+
    (AR.length?'<details class="annarch"><summary><span><b>Past announcements</b><small>'+AR.length+' archived</small></span><svg class="ic chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></summary><div class="annwrap">'+AR.slice(0,30).map(a=>annCard(a)).join('')+'</div></details>':'')+
    '<div class="sec-h" style="margin-top:36px"><h2>Upcoming events</h2><a class="linkbtn" style="margin:0" href="'+EVENTS_URL+'" target="_blank" rel="noopener noreferrer">Full church calendar</a></div>'+
    (E.length?'<div class="evgrid">'+E.map(evCard).join('')+'</div>':'<div class="empty"><span class="empty-ic">'+ic('cal')+'</span><h3>No events so far</h3><p class="muted">Academy events will appear here once they are scheduled.</p></div>');
}

/* ---------- study helpers ---------- */
function weekStartIso(){const d=new Date();d.setDate(d.getDate()-((d.getDay()+6)%7));return isoOf(d);}
function weekCount(){const ws=weekStartIso();return Object.keys(S.lesAt||{}).filter(k=>S.les[k]&&S.lesAt[k]>=ws).length;}
function goalBanner(){
  const g=stg().goal;
  if(S.admin||!g)return '';
  const n=weekCount(),left=Math.max(0,g-n),day=(new Date().getDay()+6)%7,nx=nextUp();
  const pct=Math.min(100,Math.round(n/g*100));
  let msg,cls='';
  if(!left){msg='<b>Weekly goal met.</b> '+n+' of '+g+' lessons done this week. Well done.';cls=' met';}
  else if(day>=3){msg='<b>Gentle reminder:</b> '+left+' more lesson'+(left===1?'':'s')+' to reach your goal of '+g+' this week. A short lesson today keeps you on track.';cls=' nudge';}
  else msg='<b>This week’s goal:</b> '+n+' of '+g+' lessons. '+left+' to go.';
  return '<section class="goalb'+cls+'" aria-label="Weekly study goal"><span class="goalb-i">'+ic(left?'target':'check')+'</span><div class="goalb-b"><p>'+msg+'</p><div class="bar"><i style="width:'+pct+'%"></i></div></div>'+
    (left&&nx?'<button class="btn sm" data-go="'+nx.go+'">'+ic('play')+'Study now</button>':'')+'<button class="btn ghost sm" data-go="saved">'+ic('bookmark')+'Bookmarks</button></section>';
}

/* ---------- course tools: bookmarks and private notes ---------- */
const nSaved=()=>Object.keys(S.bm||{}).length+Object.keys(S.lnotes||{}).filter(k=>(S.lnotes[k]||'').trim()).length;
function bmBtn(cid,i){
  const on=!!(S.bm||{})[cid+'.'+i];
  return '<button type="button" class="bmbtn" data-act="bm-toggle" data-c="'+cid+'" data-i="'+i+'" aria-pressed="'+on+'">'+ic('bookmark')+'<span>'+(on?'Bookmarked':'Bookmark this lesson')+'</span></button>';
}
function lessonNote(cid,i){
  const v=(S.lnotes||{})[cid+'.'+i]||'';
  return '<section class="lnote"><div><span class="sl">Private</span><h2>My notes</h2></div><label class="sr" for="lnote">My notes for this lesson</label><textarea id="lnote" data-note="'+cid+':'+i+'" placeholder="Write anything you want to remember. Only you can see this.">'+esc(v)+'</textarea><p class="note">Saved automatically on this device. Your instructors cannot see your notes.</p></section>';
}
function parseK(k){const i=k.lastIndexOf('.'),c=byId[k.slice(0,i)],n=+k.slice(i+1);return c&&c.lessons[n]?{c,n,l:c.lessons[n],k}:null;}
function savedView(){
  const bms=Object.keys(S.bm||{}).map(parseK).filter(Boolean);
  const nts=Object.keys(S.lnotes||{}).filter(k=>(S.lnotes[k]||'').trim()).map(parseK).filter(Boolean);
  const open=x=>'<button class="btn ghost sm" data-go="lesson:'+x.c.id+':'+x.n+'">Open lesson'+ic('arrow')+'</button>';
  return '<div class="thead"><p class="eyebrow">My study tools</p><h1>Bookmarks &amp; notes</h1><p class="lede">Lessons you saved for later and the private notes you wrote. These stay on this device and are not shared with staff.</p></div>'+
    '<div class="sec-h"><h2>Bookmarked lessons</h2><span class="meta">'+bms.length+'</span></div>'+
    (bms.length?'<ul class="alist card-l">'+bms.map(x=>'<li class="arow"><div class="arow-m"><span class="avt">'+ic('bookmark')+'</span><div><b>'+esc(x.l.t)+'</b><small><span class="code">'+x.c.code+'</span> '+esc(x.c.title)+' · Lesson '+(x.n+1)+'</small></div></div><div class="btnrow">'+open(x)+'<button class="icon-btn" data-act="bm-remove" data-k="'+esc(x.k)+'" aria-label="Remove bookmark">'+ic('trash')+'</button></div></li>').join('')+'</ul>':
      '<div class="empty"><span class="empty-ic">'+ic('bookmark')+'</span><h3>No bookmarks yet</h3><p class="muted">Open any lesson and press Bookmark this lesson to save it here.</p><button class="btn" data-go="catalog">Browse courses</button></div>')+
    '<div class="sec-h" style="margin-top:36px"><h2>My notes</h2>'+(nts.length?'<button class="btn ghost sm" data-act="notes-dl">'+ic('down')+'Download my notes</button>':'<span class="meta">0</span>')+'</div>'+
    (nts.length?'<div class="notegrid">'+nts.map(x=>'<article class="acard"><p class="code">'+x.c.code+' · Lesson '+(x.n+1)+'</p><h3>'+esc(x.l.t)+'</h3><p class="ans">'+esc(S.lnotes[x.k])+'</p><div class="btnrow" style="margin-top:10px">'+open(x)+'</div></article>').join('')+'</div>':
      '<div class="empty"><span class="empty-ic">'+ic('note')+'</span><h3>No notes yet</h3><p class="muted">Each lesson has a My notes box under the reflection questions.</p></div>');
}
function notesText(){
  const L=Object.keys(S.lnotes||{}).filter(k=>(S.lnotes[k]||'').trim()).map(parseK).filter(Boolean);
  return 'BFM Academy - My lesson notes\r\n'+(S.prof.name?S.prof.name+'\r\n':'')+'Saved '+fmtDate(isoToday())+'\r\n\r\n'+L.map(x=>x.c.code+' - '+x.c.title+'\r\nLesson '+(x.n+1)+': '+x.l.t+'\r\n'+S.lnotes[x.k].trim()+'\r\n').join('\r\n----------------------------------------\r\n\r\n');
}

/* ---------- input hook ---------- */
function pubInput(t){
  if(t.id==='set-size'){
    const v=Math.max(90,Math.min(150,+t.value||100));
    S.settings=Object.assign({},stg(),S.settings);delete S.settings.large;S.settings.size=v;
    applySettings();const o=$('#sz-out');if(o)o.textContent=v+'%';
    clearTimeout(NT);NT=setTimeout(save,400);return true;
  }
  if(t.dataset&&t.dataset.note){
    const k=t.dataset.note.split(':').join('.');
    if(!S.lnotes)S.lnotes={};
    if((t.value||'').trim())S.lnotes[k]=t.value;else delete S.lnotes[k];
    clearTimeout(NT);NT=setTimeout(save,400);return true;
  }
  return false;
}

/* ---------- staff: announcements ---------- */
let ANPREV=null;
const toLocalIn=t=>{const d=new Date(t),z=n=>String(n).padStart(2,'0');return d.getFullYear()+'-'+z(d.getMonth()+1)+'-'+z(d.getDate())+'T'+z(d.getHours())+':'+z(d.getMinutes());};
function annDraft(a){
  a=a||{};
  return {title:a.title||'',body:a.body||'',kind:annKind(a),icon:a.icon||'mega',bg:okHex(a.bg)||'#111111',fg:okHex(a.fg)||'#FFFFFF',accent:okHex(a.accent)||'#C6A75E',
    start:a.start||(a.id?toLocalIn(annStart(a)):toLocalIn(Date.now())),end:a.end||(a.exp?a.exp+'T23:59':''),pin:!!a.pin};
}
function annRead(){
  const g=id=>{const e=$('#'+id);return e?e.value:'';};
  return {title:(g('an-title')||'').trim(),body:(g('an-body')||'').trim(),kind:g('an-kind')==='floating'?'floating':'inline',icon:g('an-icon')||'mega',bg:g('an-bg'),fg:g('an-fg'),accent:g('an-accent'),start:g('an-start'),end:g('an-end'),pin:!!($('#an-pin')&&$('#an-pin').checked)};
}
function annCheck(d){
  if(d.title.length<3)return 'Add a short title.';
  if(d.body.length<3)return 'Add a message.';
  if(d.end&&d.start&&annT(d.end)<=annT(d.start))return 'The end must be after the start.';
  return '';
}
function annPreview(){
  const p=ANPREV,a=Object.assign({},p,{at:Date.now(),id:'prev'});
  return '<section class="acard annprev"><div class="acard-h"><h2>Preview</h2><span class="chip">Not posted yet</span></div>'+
    '<p class="note" style="margin-bottom:12px">'+(p.kind==='floating'?'This is a floating pop-up. It sits on top of the page near the top of the screen until the student closes it.':'This is an inline banner. It sits at the top of the student’s home page.')+(p.pin?' It is pinned, so it stays first.':'')+'</p>'+
    '<div class="annwrap annprev-w'+(p.kind==='floating'?' annprev-f':'')+'">'+annCard(a,{dismiss:false})+'</div>'+
    '<p class="note" style="margin-top:10px">Shows '+esc(fmtDT(annT(p.start)||Date.now()))+(p.end?' until '+esc(fmtDT(annT(p.end))):' with no end time')+'.</p>'+
    '<div class="btnrow" style="margin-top:16px"><button class="btn" type="button" data-act="ann-save">'+ic('mega')+(ANEDIT?'Save changes':'Post announcement')+'</button><button class="btn ghost" type="button" data-act="ann-back">'+ic('edit')+'Back to edit</button></div></section>';
}
function annRow(a,arch){
  const st=annState(a),kind=annKind(a)==='floating'?'Floating':'Inline';
  const chip=st==='live'?'<span class="chip live"><i></i>Live</span>':st==='scheduled'?'<span class="chip">Starts '+esc(fmtDT(annStart(a)))+'</span>':st==='ended'?'<span class="chip">Ended</span>':'<span class="chip">Archived</span>';
  const when=a.end?' · ends '+esc(fmtDT(annT(a.end))):(a.exp?' · hides after '+esc(fmtDate(a.exp)):'');
  return '<li class="arow"><div class="arow-m"><span class="avt"'+(okHex(a.accent)?' style="background:'+a.accent+';color:'+(okHex(a.bg)||'#111')+'"':'')+'>'+ic(a.icon||(a.pin?'pin':'mega'))+'</span><div><b>'+esc(a.title)+'</b><small>'+esc((a.body||'').slice(0,110))+((a.body||'').length>110?'…':'')+'</small><small>'+kind+' · '+esc(agoTxt(a.at||0))+when+'</small></div></div><div class="arow-r">'+chip+
    (arch?'<button class="btn ghost sm" data-act="ann-restore" data-id="'+esc(a.id)+'">Restore</button>':'<button class="icon-btn" data-act="ann-arch" data-id="'+esc(a.id)+'" aria-label="Archive" title="Archive">'+ic('inbox')+'</button>')+
    '<button class="icon-btn" data-act="ann-edit" data-id="'+esc(a.id)+'" aria-label="Edit">'+ic('edit')+'</button><button class="icon-btn" data-act="ann-del" data-id="'+esc(a.id)+'" aria-label="Delete">'+ic('trash')+'</button></div></li>';
}
function annAdmin(){
  if(ANPREV&&ANPREV.show)return annPreview();
  const d=ANPREV||annDraft(ANEDIT&&PUB.announcements.find(a=>a.id===ANEDIT));
  const active=PUB.announcements.filter(a=>{const s=annState(a);return s==='live'||s==='scheduled';}).sort((a,b)=>(b.at||0)-(a.at||0));
  const arch=archAnn();
  const cp=(id,lab,val)=>'<div class="field annc-f"><label for="'+id+'">'+lab+'</label><input type="color" id="'+id+'" value="'+esc(val)+'"></div>';
  return '<section class="acard"><div class="acard-h"><h2>'+(ANEDIT?'Edit announcement':'New announcement')+'</h2></div>'+
    '<form class="pform" onsubmit="return false"><div class="field"><label for="an-title">Title</label><input type="text" id="an-title" maxlength="90" placeholder="For example: Graduation night is Friday" value="'+esc(d.title)+'"></div>'+
    '<div class="field"><label for="an-body">Message</label><textarea id="an-body" maxlength="600" placeholder="What should students know?">'+esc(d.body)+'</textarea></div>'+
    '<div class="formgrid"><div class="field"><label for="an-kind">How it shows</label><select id="an-kind"><option value="inline"'+(d.kind==='inline'?' selected':'')+'>Inline banner (top of the home page)</option><option value="floating"'+(d.kind==='floating'?' selected':'')+'>Floating pop-up (on top of any page)</option></select></div>'+
    '<div class="field"><label for="an-icon">Icon</label><select id="an-icon">'+ANICONS.map(x=>'<option value="'+x[0]+'"'+(d.icon===x[0]?' selected':'')+'>'+x[1]+'</option>').join('')+'</select></div>'+
    '<div class="field"><label for="an-start">Starts</label><input type="datetime-local" id="an-start" value="'+esc(d.start)+'"></div>'+
    '<div class="field"><label for="an-end">Ends (optional)</label><input type="datetime-local" id="an-end" value="'+esc(d.end)+'"></div></div>'+
    '<div class="field"><label>Colors</label><div class="annpal">'+ANPAL.map((x,i)=>'<button type="button" class="annsw" data-act="ann-pal" data-i="'+i+'" style="background:'+x[1]+';color:'+x[2]+'" aria-label="'+x[0]+' colors">'+x[0]+'</button>').join('')+'</div>'+
    '<div class="annc-row">'+cp('an-bg','Background',d.bg)+cp('an-fg','Text color',d.fg)+cp('an-accent','Icon and accent',d.accent)+'</div></div>'+
    '<div class="field"><label class="chk"><input type="checkbox" id="an-pin"'+(d.pin?' checked':'')+'> Pin to the top</label></div>'+
    '<div class="btnrow"><button class="btn" type="button" data-act="ann-preview">'+ic('eye')+'Preview</button>'+((ANEDIT||ANPREV)?'<button class="btn ghost" type="button" data-act="ann-cancel">Cancel</button>':'')+'</div><p class="note" id="anmsg" aria-live="polite"></p></form></section>'+
    '<div class="sec-h" style="margin-top:28px"><h2>Posted announcements</h2><span class="meta">'+active.length+'</span></div>'+
    (active.length?'<ul class="alist card-l">'+active.map(a=>annRow(a,false)).join('')+'</ul>':
      '<div class="empty"><span class="empty-ic">'+ic('mega')+'</span><h3>Nothing posted yet</h3><p class="muted">Announcements you post show to students on the schedule you set.</p></div>')+
    '<div class="sec-h" style="margin-top:28px"><h2>Archived</h2><span class="meta">'+arch.length+'</span></div>'+
    (arch.length?'<ul class="alist card-l">'+arch.map(a=>annRow(a,true)).join('')+'</ul>':'<p class="muted" style="margin:0">Ended and archived announcements are kept here. Restore one to show it again.</p>');
}
/* ---------- staff: events ---------- */
function evAdmin(){
  const ed=EVEDIT&&PUB.events.find(a=>a.id===EVEDIT)||null,today=isoToday();
  const up=upcoming(),past=PUB.events.filter(e=>String(e.date)<today).sort((a,b)=>String(b.date).localeCompare(String(a.date)));
  const row=(e,old)=>'<li class="arow'+(old?' old':'')+'"><div class="arow-m"><span class="avt">'+ic('cal')+'</span><div><b>'+esc(e.title)+'</b><small>'+esc(fmtDate(e.date))+(e.time?' · '+esc(e.time):'')+(e.place?' · '+esc(e.place):'')+'</small></div></div><div class="arow-r"><button class="icon-btn" data-act="ev-edit" data-id="'+esc(e.id)+'" aria-label="Edit">'+ic('edit')+'</button><button class="icon-btn" data-act="ev-del" data-id="'+esc(e.id)+'" aria-label="Delete">'+ic('trash')+'</button></div></li>';
  return '<section class="acard"><div class="acard-h"><h2>'+(ed?'Edit event':'Add an event')+'</h2></div>'+
    '<form class="pform" onsubmit="return false"><div class="formgrid"><div class="field"><label for="ev-t">Event name</label><input type="text" id="ev-t" maxlength="90" value="'+esc(ed?ed.title:'')+'" placeholder="Water baptism service"></div>'+
    '<div class="field"><label for="ev-d">Date</label><input type="date" id="ev-d" value="'+esc(ed?ed.date:today)+'"></div>'+
    '<div class="field"><label for="ev-tm">Time</label><input type="text" id="ev-tm" maxlength="30" value="'+esc(ed?ed.time||'':'')+'" placeholder="7:00 PM"></div>'+
    '<div class="field"><label for="ev-p">Location</label><input type="text" id="ev-p" maxlength="90" value="'+esc(ed?ed.place||'':'')+'" placeholder="Main sanctuary"></div></div>'+
    '<div class="field"><label for="ev-ds">Details (optional)</label><textarea id="ev-ds" maxlength="400" placeholder="Who should come and what to bring.">'+esc(ed?ed.desc||'':'')+'</textarea></div>'+
    '<div class="field"><label for="ev-l">Link (optional)</label><input type="text" id="ev-l" maxlength="200" value="'+esc(ed?ed.link||'':'')+'" placeholder="https://"></div>'+
    '<div class="btnrow"><button class="btn" type="button" data-act="ev-save">'+ic('cal')+(ed?'Save changes':'Add event')+'</button>'+(ed?'<button class="btn ghost" type="button" data-act="ev-cancel">Cancel</button>':'')+'</div><p class="note" id="evamsg" aria-live="polite"></p></form></section>'+
    '<div class="sec-h" style="margin-top:28px"><h2>Upcoming events</h2><span class="meta">'+up.length+'</span></div>'+
    (up.length?'<ul class="alist card-l">'+up.map(e=>row(e)).join('')+'</ul>':'<div class="empty"><span class="empty-ic">'+ic('cal')+'</span><h3>No upcoming events</h3><p class="muted">Add one above. It shows in every student’s footer and on the Announcements and events page.</p></div>')+
    (past.length?'<div class="sec-h" style="margin-top:28px"><h2>Past events</h2><span class="meta">'+past.length+'</span></div><ul class="alist card-l">'+past.map(e=>row(e,true)).join('')+'</ul>':'');
}

/* ---------- staff: grading reports ---------- */
var RP={kind:'month',y:new Date().getFullYear(),n:new Date().getMonth()};
const MN=['January','February','March','April','May','June','July','August','September','October','November','December'];
function rpRange(){
  const y=RP.y;
  if(RP.kind==='year')return {a:new Date(y,0,1),b:new Date(y+1,0,1),label:String(y),short:String(y)};
  if(RP.kind==='quarter'){const q=Math.max(0,Math.min(3,RP.n));return {a:new Date(y,q*3,1),b:new Date(y,q*3+3,1),label:'Q'+(q+1)+' '+y+' ('+MN[q*3].slice(0,3)+' - '+MN[q*3+2].slice(0,3)+')',short:'Q'+(q+1)+'-'+y};}
  const m=Math.max(0,Math.min(11,RP.n));return {a:new Date(y,m,1),b:new Date(y,m+1,1),label:MN[m]+' '+y,short:MN[m].slice(0,3)+'-'+y};
}
function rpStep(dir){
  if(RP.kind==='year')RP.y+=dir;
  else if(RP.kind==='quarter'){RP.n+=dir;if(RP.n<0){RP.n=3;RP.y--;}else if(RP.n>3){RP.n=0;RP.y++;}}
  else{RP.n+=dir;if(RP.n<0){RP.n=11;RP.y--;}else if(RP.n>11){RP.n=0;RP.y++;}}
}
function rpKind(k){
  const now=new Date();
  RP.kind=k;RP.y=now.getFullYear();RP.n=k==='quarter'?Math.floor(now.getMonth()/3):now.getMonth();
}
const inR=(t,r)=>t>=r.a.getTime()&&t<r.b.getTime();
const isoMs=s=>{if(!s)return 0;const p=String(s).split('-');return p.length<3?0:new Date(+p[0],+p[1]-1,+p[2]).getTime();};
function rpData(){
  const r=rpRange(),grades=[],R=roster();let completions=0,submitted=0,joined=0,reqs=0;
  R.forEach(st=>{
    const o=outOf(st.uid),nm=nameOf(st),w=st.d.work||{};
    Object.keys(o.grades||{}).forEach(cid=>{const g=o.grades[cid];if(g&&g.at&&byId[cid]&&inR(g.at,r))grades.push({at:g.at,st:nm,c:byId[cid],score:+g.score,fb:g.feedback||''});});
    Object.keys(st.d.comp||{}).forEach(cid=>{if(byId[cid]&&!OPT(byId[cid].track)&&inR(isoMs(typeof st.d.comp[cid]==='string'?st.d.comp[cid]:(st.d.comp[cid]||{}).date),r))completions++;});
    Object.keys(w).forEach(cid=>{const p=w[cid].p;if(p&&p.done&&byId[cid]&&inR(isoMs(p.date),r))submitted++;});
    if(inR(isoMs((st.d.prof||{}).enrolled),r))joined++;
    Object.keys(st.d.reqs||{}).forEach(k=>{if(inR(st.d.reqs[k].at||0,r))reqs++;});
  });
  grades.sort((a,b)=>a.at-b.at);
  const n=grades.length,avg=n?Math.round(grades.reduce((s,g)=>s+g.score,0)/n):0,pass=n?Math.round(grades.filter(g=>g.score>=70).length/n*100):0;
  const bk=[['90-100',g=>g>=90],['80-89',g=>g>=80&&g<90],['70-79',g=>g>=70&&g<80],['Below 70',g=>g<70]].map(b=>({l:b[0],n:grades.filter(g=>b[1](g.score)).length}));
  const byC={},byS={};
  grades.forEach(g=>{(byC[g.c.id]=byC[g.c.id]||{c:g.c,s:[]}).s.push(g.score);(byS[g.st]=byS[g.st]||{s:[]}).s.push(g.score);});
  const avgOf=a=>Math.round(a.reduce((x,y)=>x+y,0)/a.length);
  const courses=Object.values(byC).map(x=>({c:x.c,n:x.s.length,avg:avgOf(x.s)})).sort((a,b)=>b.n-a.n);
  const students=Object.keys(byS).map(k=>({name:k,n:byS[k].s.length,avg:avgOf(byS[k].s)})).sort((a,b)=>b.n-a.n||a.name.localeCompare(b.name));
  const pending=workItems().filter(i=>i.need).length;
  /* breakdown over time */
  let parts=[];
  if(RP.kind==='year')parts=MN.map((m,i)=>({l:m.slice(0,3),a:new Date(RP.y,i,1),b:new Date(RP.y,i+1,1)}));
  else if(RP.kind==='quarter')parts=[0,1,2].map(i=>{const m=Math.max(0,Math.min(3,RP.n))*3+i;return {l:MN[m],a:new Date(RP.y,m,1),b:new Date(RP.y,m+1,1)};});
  else{const m=r.a,days=new Date(m.getFullYear(),m.getMonth()+1,0).getDate();for(let w=0;w<5;w++){const d1=w*7+1,d2=Math.min(days,d1+6);if(d1>days)break;parts.push({l:'Days '+d1+'-'+d2,a:new Date(m.getFullYear(),m.getMonth(),d1),b:new Date(m.getFullYear(),m.getMonth(),d2+1)});}}
  parts.forEach(p=>{p.n=grades.filter(g=>g.at>=p.a.getTime()&&g.at<p.b.getTime()).length;});
  return {r,grades,n,avg,pass,bk,courses,students,pending,completions,submitted,joined,reqs,parts};
}
function reportsView(){
  const D=rpData(),mx=Math.max(1,...D.parts.map(p=>p.n)),mb=Math.max(1,...D.bk.map(b=>b.n));
  const kinds=[['month','Monthly'],['quarter','Quarterly'],['year','Yearly']];
  const stat=(n,l)=>'<div class="astat static"><b>'+n+'</b><span>'+l+'</span></div>';
  return '<div class="rpbar"><div class="fchips" style="margin:0">'+kinds.map(k=>'<button class="fchip" data-act="rp-kind" data-v="'+k[0]+'" aria-pressed="'+(RP.kind===k[0])+'">'+k[1]+'</button>').join('')+'</div>'+
    '<div class="rpnav"><button class="icon-btn" data-act="rp-step" data-v="-1" aria-label="Previous period">'+ic('back')+'</button><b>'+esc(D.r.label)+'</b><button class="icon-btn" data-act="rp-step" data-v="1" aria-label="Next period">'+ic('arrow')+'</button></div>'+
    '<div class="btnrow"><button class="btn" data-act="rp-pdf">'+ic('down')+'Download PDF</button><button class="btn ghost" data-act="rp-xlsx">'+ic('down')+'Excel</button><button class="btn ghost" data-act="rp-csv">'+ic('down')+'CSV</button></div></div>'+
    '<div class="astats">'+stat(D.n,'Assignments graded')+stat(D.n?D.avg+'%':'—','Average score')+stat(D.n?D.pass+'%':'—','Scored 70% or higher')+stat(D.pending,'Waiting to be graded')+'</div>'+
    '<div class="astats" style="margin-top:14px">'+stat(D.submitted,'Projects submitted')+stat(D.completions,'Courses completed')+stat(D.joined,'New students')+stat(D.reqs,'Requests received')+'</div>'+
    (D.n?'<div class="agrid" style="margin-top:20px"><section class="acard"><div class="acard-h"><h2>Grades over time</h2></div><div class="rpchart" role="img" aria-label="Graded work per period">'+D.parts.map(p=>'<div class="rpcol"><b>'+p.n+'</b><i style="height:'+Math.max(4,Math.round(p.n/mx*100))+'px"></i><span>'+esc(p.l)+'</span></div>').join('')+'</div></section>'+
    '<section class="acard"><div class="acard-h"><h2>Score ranges</h2></div><ul class="apop">'+D.bk.map(b=>'<li style="grid-template-columns:70px 1fr 28px"><span>'+b.l+'</span><span class="apop-b"><i style="width:'+Math.round(b.n/mb*100)+'%"></i></span><b>'+b.n+'</b></li>').join('')+'</ul></section></div>'+
    '<div class="sec-h" style="margin-top:28px"><h2>By course</h2></div><div class="tscroll"><table><thead><tr><th>Course</th><th>Graded</th><th>Average</th></tr></thead><tbody>'+D.courses.map(c=>'<tr><td><span class="code">'+c.c.code+'</span> '+esc(c.c.title)+'</td><td>'+c.n+'</td><td>'+c.avg+'%</td></tr>').join('')+'</tbody></table></div>'+
    '<div class="sec-h" style="margin-top:28px"><h2>By student</h2></div><div class="tscroll"><table><thead><tr><th>Student</th><th>Graded</th><th>Average</th></tr></thead><tbody>'+D.students.map(s=>'<tr><td><b>'+esc(s.name)+'</b></td><td>'+s.n+'</td><td>'+s.avg+'%</td></tr>').join('')+'</tbody></table></div>'+
    '<div class="sec-h" style="margin-top:28px"><h2>All grades in this period</h2></div><div class="tscroll"><table><thead><tr><th>Date</th><th>Student</th><th>Course</th><th>Score</th><th>Feedback</th></tr></thead><tbody>'+D.grades.slice().reverse().map(g=>'<tr><td>'+esc(fmtDate(isoOf(new Date(g.at))))+'</td><td><b>'+esc(g.st)+'</b></td><td><span class="code">'+g.c.code+'</span> '+esc(g.c.title)+'</td><td>'+g.score+'%</td><td style="max-width:300px">'+esc(g.fb.slice(0,140))+'</td></tr>').join('')+'</tbody></table></div>':
    '<div class="empty" style="margin-top:20px"><span class="empty-ic">'+ic('report')+'</span><h3>No grades in '+esc(D.r.label)+'</h3><p class="muted">'+(roster().length?'Pick another period, or grade some work from Review &amp; grade.':'Student records appear here when this page is connected to shared records. Open the published page while signed in to claude.ai.')+'</p></div>');
}
function reportCsv(){
  const D=rpData(),rows=[['Date','Student','Course code','Course','Score','Feedback']];
  D.grades.forEach(g=>rows.push([isoOf(new Date(g.at)),g.st,g.c.code,g.c.title,g.score,g.fb]));
  return '﻿'+rows.map(r=>r.map(csvCell).join(',')).join('\r\n');
}
async function reportPdf(){
  const D=rpData(),doc=newDoc('portrait');
  if(!doc){toast('The PDF tool did not load. Check your connection and try again.');return;}
  const W=612,H=792,M=48,G=[198,167,94];let y=0,pg=1;
  const foot=()=>{doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(110);doc.text('BFM Academy - Grading report - '+pt(D.r.label),M,H-26);doc.text('Page '+pg,W-M,H-26,{align:'right'});};
  const newPage=()=>{foot();doc.addPage();pg++;y=M;};
  const need=h=>{if(y+h>H-50)newPage();};
  doc.setFillColor(10,10,10);doc.rect(0,0,W,110,'F');doc.setFillColor(...G);doc.rect(0,110,W,4,'F');
  let tx=M;try{doc.addImage(LOGO_B64,'PNG',M,24,64,64);tx=M+80;}catch(e){}
  doc.setTextColor(...G);doc.setFont('helvetica','bold');doc.setFontSize(9);doc.text('BFM ACADEMY  -  BUSHWICK FAMILY MINISTRIES',tx,40,{charSpace:1.4});
  doc.setTextColor(255);doc.setFontSize(24);doc.text('Grading report',tx,70);
  doc.setFont('helvetica','normal');doc.setFontSize(12);doc.setTextColor(220);doc.text(pt((RP.kind==='month'?'Monthly':RP.kind==='quarter'?'Quarterly':'Yearly')+' - '+D.r.label),tx,92);
  y=140;doc.setTextColor(60);doc.setFontSize(9);doc.text('Prepared '+pt(fmtDate(isoToday()))+' by the Academy Director',M,y);y+=24;
  const tiles=[[D.n,'Assignments graded'],[D.n?D.avg+'%':'-','Average score'],[D.n?D.pass+'%':'-','Scored 70%+'],[D.pending,'Waiting to be graded'],[D.submitted,'Projects submitted'],[D.completions,'Courses completed'],[D.joined,'New students'],[D.reqs,'Requests received']];
  const tw=(W-2*M-30)/4;
  tiles.forEach((t,i)=>{const x=M+(i%4)*(tw+10),yy=y+Math.floor(i/4)*62;doc.setDrawColor(210);doc.setFillColor(250,248,242);doc.roundedRect(x,yy,tw,52,5,5,'FD');doc.setTextColor(10);doc.setFont('helvetica','bold');doc.setFontSize(18);doc.text(pt(String(t[0])),x+10,yy+25);doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(90);doc.text(pt(t[1]),x+10,yy+41);});
  y+=136;
  const h2=t=>{need(40);doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(122,97,37);doc.text(pt(t.toUpperCase()),M,y,{charSpace:1});doc.setDrawColor(...G);doc.setLineWidth(1);doc.line(M,y+5,W-M,y+5);y+=22;};
  const table=(cols,rows)=>{
    const head=()=>{doc.setFillColor(240,236,224);doc.rect(M,y-11,W-2*M,16,'F');doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(60);let x=M+4;cols.forEach(c=>{doc.text(pt(c.t),x,y);x+=c.w;});y+=14;};
    need(40);head();
    rows.forEach(r=>{
      doc.setFont('helvetica','normal');doc.setFontSize(9);
      const cells=cols.map((c,i)=>doc.splitTextToSize(pt(String(r[i]==null?'':r[i])),c.w-8).slice(0,3));
      const h=Math.max(...cells.map(c=>c.length))*11+6;
      if(y+h>H-50){newPage();head();}
      doc.setTextColor(20);let x=M+4;cells.forEach((c,i)=>{doc.text(c,x,y);x+=cols[i].w;});
      doc.setDrawColor(228);doc.setLineWidth(.5);doc.line(M,y+h-9,W-M,y+h-9);y+=h;
    });y+=10;
  };
  if(!D.n){doc.setFont('helvetica','normal');doc.setFontSize(11);doc.setTextColor(60);doc.text('No work was graded in this period.',M,y);}
  else{
    h2('Score ranges');D.bk.forEach(b=>{need(18);doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(40);doc.text(b.l,M,y);doc.setFillColor(235);doc.rect(M+70,y-8,260,9,'F');doc.setFillColor(...G);doc.rect(M+70,y-8,260*b.n/Math.max(1,D.n),9,'F');doc.text(String(b.n),M+340,y);y+=16;});y+=8;
    h2('Graded work over time');D.parts.forEach(p=>{need(18);doc.setFontSize(9);doc.setTextColor(40);doc.text(pt(p.l),M,y);doc.setFillColor(235);doc.rect(M+70,y-8,260,9,'F');doc.setFillColor(...G);doc.rect(M+70,y-8,260*p.n/Math.max(1,D.n),9,'F');doc.text(String(p.n),M+340,y);y+=16;});y+=8;
    h2('By course');table([{t:'Course',w:380},{t:'Graded',w:60},{t:'Average',w:60}],D.courses.map(c=>[c.c.code+' '+c.c.title,c.n,c.avg+'%']));
    h2('By student');table([{t:'Student',w:380},{t:'Graded',w:60},{t:'Average',w:60}],D.students.map(s=>[s.name,s.n,s.avg+'%']));
    h2('All grades in this period');table([{t:'Date',w:62},{t:'Student',w:100},{t:'Course',w:150},{t:'Score',w:40},{t:'Feedback',w:150}],D.grades.slice().reverse().map(g=>[fmtDate(isoOf(new Date(g.at))),g.st,g.c.code+' '+g.c.title,g.score+'%',g.fb.slice(0,120)]));
  }
  foot();
  try{await saveFile('BFM-Grading-Report-'+D.r.short+'.pdf',doc.output('blob'));}catch(e){toast('Could not build the report.');}
}

/* ---------- staff action handlers ---------- */
function pubAct(k,d){
  if(!k)return false;
  if(hubAct(k,d))return true;
  if(manualAct(k,d))return true;
  if(k==='ann-dismiss'){
    if(d.id==='ev:new'){S.evSeen=(S.evSeen||[]).concat(newEvents().map(e=>e.id));}else S.annSeen[d.id]=true;
    save();renderAnn();refresh();return true;
  }
  if(k==='ann-nav'){const n=d.k==='floating'?floatItems().length:liveAnn('inline').filter(a=>!S.annSeen[a.id]).length;if(n){ANIDX[d.k]=((ANIDX[d.k]||0)+(+d.d)+n)%n;}if(d.k==='floating')renderAnn();else refresh();return true;}
  if(k==='ann-closeall'){floatItems().forEach(it=>{if(it.type==='events')S.evSeen=(S.evSeen||[]).concat(it.list.map(e=>e.id));else S.annSeen[it.id]=true;});ANIDX.floating=0;save();renderAnn();return true;}
  if(k==='ev-go-foot'){
    S.evSeen=(S.evSeen||[]).concat(newEvents().map(e=>e.id));save();renderAnn();
    const f=$('#foot-dyn');
    if(f){try{f.scrollIntoView({behavior:'smooth',block:'end'});}catch(e){}if(f.classList){f.classList.add('footflash');setTimeout(()=>f.classList.remove('footflash'),2600);}}
    return true;
  }
  if(k==='bm-toggle'){
    const key=d.c+'.'+d.i;if(!S.bm)S.bm={};
    const on=!S.bm[key];if(on)S.bm[key]=1;else delete S.bm[key];save();
    const b=document.querySelector('.bmbtn');if(b&&b.setAttribute){b.setAttribute('aria-pressed',String(on));const sp=b.querySelector&&b.querySelector('span');if(sp)sp.textContent=on?'Bookmarked':'Bookmark this lesson';}
    toast(on?'Lesson bookmarked.':'Bookmark removed.');renderFoot();return true;
  }
  if(k==='bm-remove'){delete S.bm[d.k];save();refresh();renderFoot();return true;}
  if(k==='notes-dl'){saveFile('BFM-Academy-My-Notes.txt',new Blob([notesText()],{type:'text/plain'}));return true;}
  if(!S.admin)return false;
  if(k==='ann-pal'){const x=ANPAL[+d.i];if(x){const set=(id,v)=>{const e=$('#'+id);if(e)e.value=v;};set('an-bg',x[1]);set('an-fg',x[2]);set('an-accent',x[3]);}return true;}
  if(k==='ann-preview'){
    const dr=annRead(),msg=$('#anmsg'),er=annCheck(dr);
    if(er){if(msg)msg.textContent=er;return true;}
    ANPREV=Object.assign(dr,{show:true});refresh();return true;
  }
  if(k==='ann-back'){if(ANPREV)ANPREV.show=false;refresh();return true;}
  if(k==='ann-save'){
    let dr;const msg=$('#anmsg');
    if(ANPREV&&ANPREV.show)dr=ANPREV;
    else{dr=annRead();const er=annCheck(dr);if(er){if(msg)msg.textContent=er;return true;}}
    ANPREV=null;
    const f={title:dr.title,body:dr.body,kind:dr.kind,icon:dr.icon,bg:okHex(dr.bg),fg:okHex(dr.fg),accent:okHex(dr.accent),start:dr.start||toLocalIn(Date.now()),end:dr.end||'',pin:!!dr.pin};
    let items=PUB.announcements.slice();
    if(ANEDIT){items=items.map(a=>a.id===ANEDIT?Object.assign({},a,f,{exp:'',archived:false}):a);}
    else items.unshift(Object.assign({id:nid(),at:Date.now()},f));
    const edit=ANEDIT;ANEDIT='';pubSet('announcements',items,edit?'Announcement updated.':(annT(f.start)>Date.now()?'Announcement scheduled.':'Announcement posted.'));return true;
  }
  if(k==='ann-edit'){ANEDIT=d.id;ANPREV=null;refresh();window.scrollTo(0,0);return true;}
  if(k==='ann-cancel'){ANEDIT='';ANPREV=null;refresh();return true;}
  if(k==='ann-arch'){pubSet('announcements',PUB.announcements.map(a=>a.id===d.id?Object.assign({},a,{archived:true,archivedAt:Date.now()}):a),'Archived.');return true;}
  if(k==='ann-restore'){pubSet('announcements',PUB.announcements.map(a=>a.id===d.id?Object.assign({},a,{archived:false,archivedAt:0,end:'',exp:'',start:toLocalIn(Date.now())}):a),'Restored. It is live again.');return true;}
  if(k==='ann-del'){pubSet('announcements',PUB.announcements.filter(a=>a.id!==d.id),'Announcement removed.');return true;}
  if(k==='ev-save'){
    const t=($('#ev-t').value||'').trim(),dt=$('#ev-d').value||'',msg=$('#evamsg');
    if(t.length<3){if(msg)msg.textContent='Add the event name.';return true;}
    if(!dt){if(msg)msg.textContent='Pick a date.';return true;}
    let link=($('#ev-l').value||'').trim();if(link&&!/^https?:\/\//i.test(link))link='https://'+link;
    const o={title:t,date:dt,time:($('#ev-tm').value||'').trim(),place:($('#ev-p').value||'').trim(),desc:($('#ev-ds').value||'').trim(),link};
    let items=PUB.events.slice();
    if(EVEDIT)items=items.map(e=>e.id===EVEDIT?Object.assign({},e,o):e);else items.push(Object.assign({id:nid(),at:Date.now()},o));
    const edit=EVEDIT;EVEDIT='';pubSet('events',items,edit?'Event updated.':'Event added.');return true;
  }
  if(k==='ev-edit'){EVEDIT=d.id;refresh();return true;}
  if(k==='ev-cancel'){EVEDIT='';refresh();return true;}
  if(k==='ev-del'){pubSet('events',PUB.events.filter(e=>e.id!==d.id),'Event removed.');return true;}
  if(k==='rp-kind'){rpKind(d.v);refresh();return true;}
  if(k==='rp-step'){rpStep(+d.v);refresh();return true;}
  if(k==='rp-pdf'){reportPdf();return true;}
  if(k==='rp-xlsx'){(async()=>{const D=rpData(),rg=rpRange();
      const rows=D.grades.map(g=>[isoOf(new Date(g.at)),g.st,g.c.code,g.c.title,g.score,g.fb]);
      const ok=await xlsxSave('BFM-Grading-Report-'+rg.short+'.xlsx','Grades','Grading report: '+D.r.label,D.n+' graded item'+(D.n===1?'':'s'),
        [{h:'Date',w:13},{h:'Student',w:28},{h:'Course code',w:14},{h:'Course',w:38,wrap:1},{h:'Score',w:10,num:1},{h:'Feedback',w:60,wrap:1}],rows,
        [['Graded items',D.n],['Average score',D.n?D.avg+'%':'-'],['Passing (70+)',D.n?D.pass+'%':'-']]);
      if(!ok){toast('Excel is not available right now. Saving a CSV instead.');saveFile('BFM-Grading-Report-'+rg.short+'.csv',new Blob([reportCsv()],{type:'text/csv'}));}})();return true;}
  if(k==='rp-csv'){saveFile('BFM-Grading-Report-'+rpRange().short+'.csv',new Blob([reportCsv()],{type:'text/csv'}));return true;}
  return false;
}
/* ================= Help: FAQs, Privacy, chat with the director, director notifications ================= */
Object.assign(IC,{
 chat:'<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12.5h5"/>',
 help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01"/>',
 send:'<path d="M3 11l18-8-8 18-2-8z"/>',
 lockk:'<rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'
});

/* ---------- FAQ content (different questions for students and directors) ---------- */
const FAQ_S=[
 {q:'How do I add or crop my profile picture?',a:'Open your profile and press "Add a picture". Drag the picture to move it, use the sliders to zoom and brighten, rotate or flip it, then press "Use this picture". To change it later, press "Crop and resize". You can also add more than one ministry, a fun fact, or an interest, and your favorite scripture. They all appear on your student profile card.',k:'profile picture,photo,picture,crop,resize,avatar,more than one ministry,fun fact,interests,scripture,favorite'},
 {q:'How do I register for a class?',a:'Open Campus, choose a class (New Believers, New Members or Water Baptism) and press "Register for this class". Its courses open right away, and your registration is sent to the Academy Director under Requests to confirm. Registration is required before you can open lessons, assessments, projects, or study guides.',k:'register,registration,sign up,join,enroll,enrol,class'},
 {q:'Why is the BFM Discipleship Class locked?',a:'The Discipleship Class opens by permission from the Academy Director. Open the class, press "Request permission" and tell us a little about why you would like to take it. You will get a notification when it is approved.',k:'discipleship,dsc,permission,locked class,salvation and new life'},
 {q:'In what order do I take the tracks?',a:'Start with the four BFM classes: New Believers, New Members, Water Baptism, and Discipleship. They open the leadership tracks. If you already serve as a deacon, assistant, ministry director, minister, pastor, or in another position, set your role in your profile. Each class then asks “Would you like to skip this class?” and the Academy approves your answer. Then take Track 1 (Foundations of Leadership and Volunteering). Finish it to open Track 2 (Ministry Leadership, general spiritual leadership). Finish Track 2 to open Track 3 (Ministry Specializations). Track A (Administrative) and the Teacher Certification are optional and need the director’s permission.',k:'track,order,which first,start,next,sequence'},
 {q:'Why are the leadership tracks locked, and how do I skip the classes?',a:'Tracks 1, 2 and 3 open after you finish the four basic BFM classes. Leaders already serving in a position (deacon, assistant ministry director, ministry director, minister, clergy, pastor, administrative) are asked “Would you like to skip this class?” on each class page once their role is in the profile. If they answer yes, it shows “Awaiting approval from the Academy” until the director approves. If you were already saved or baptized, open the New Believers or Water Baptism class page and use "Request to skip". The director reviews it and you get a notification.',k:'locked,leadership,skip classes,basic classes,four classes,new believers,leader tracks,unlock track'},
 {q:'Why is a course locked, and how do I unlock it?',a:'Each course shows what it needs, such as finishing the course before it or the track before it. If you need it opened sooner, open the course and press "Request unlock". The director will review your request and you will be notified.',k:'unlock,locked,lock,open course,access,cannot open,can’t open'},
 {q:'How do I choose my ministry in Track 3?',a:'Open Track 3 and press "This is my ministry" under the ministry you feel called to serve in. Only that ministry’s course opens for you. Every other ministry stays locked.',k:'track 3,ministry,calling,called,choose,specialization,specialisation'},
 {q:'Can I take a different ministry later?',a:'Yes, with permission. After you choose your ministry, open any other ministry course and press "Request unlock". The director can approve it, or can reset your ministry choice.',k:'another ministry,different ministry,switch,change ministry,second ministry'},
 {q:'How do assessments work?',a:'After you finish every lesson in a course, the assessment opens. The pass mark is 60% (the class and teacher final tests need 70%). You can retake it as many times as you like, and your best score is kept. After you submit, the correct answers are shown.',k:'assessment,quiz,test,pass,score,retake,fail,failed'},
 {q:'Why can’t I mark a lesson complete?',a:'Each reflection question needs a written answer of at least 10 characters before the "Mark lesson complete" button turns on. Write a few honest sentences for each question.',k:'mark complete,reflection,lesson complete,disabled,button,cannot finish,can’t finish'},
 {q:'How do I review my answers?',a:'In any class course, press "Review my work and answers". Your written answers open lesson by lesson once you have completed each lesson. Your assessment answers and the correct answers open after you have taken the assessment. Your project opens after you submit it.',k:'review,answers,my work,correct answer,see answers'},
 {q:'How do course projects work?',a:'After you pass the assessment, the project opens. Check each deliverable when it is finished, write a short summary (at least a couple of sentences) and enter the name of the mentor or pastor who reviewed it, then press Submit project.',k:'project,deliverable,mentor,submit project,summary'},
 {q:'How do I get a certificate?',a:'You earn a certificate when you finish every course in a class or track. Open "My certificates" in the footer to view or download it as a PDF. Each certificate has an ID and QR code, and anyone can check it on the Verify a certificate page.',k:'certificate,certificates,credential,verify,qr'},
 {q:'How do I download a study guide or Ministry Manual?',a:'Open "Study guides and resources" in the footer. Every course has a study guide. The Ministry Manuals and the volunteer training packets are listed at the bottom of that page too, and each one opens from its course page when that course is open. Use PDF to download or Print to print. If printing is blocked on your device, download the PDF and print it from your PDF viewer.',k:'study guide,manual,pdf,download,print,resources'},
 {q:'Where is my progress saved?',a:'Your progress, answers, and profile are saved in this browser on this device. Clearing your browser data erases them. When the Academy’s shared records are turned on, a copy is also kept so your directors can review your work.',k:'progress,saved,lost,device,browser,clear,data,sync,phone'},
 {q:'I already took a course elsewhere. Can I skip it?',a:'Open the course and use "Request to skip this course". Explain your position or past training. If the director approves, the course counts as met for unlocking what comes next, with no grade or credit.',k:'skip,waive,already completed,already took,already taken'},
 {q:'How do I change text size, dark mode, or the dyslexia-friendly font?',a:'Open your profile (the round button at the top right) and scroll to Settings. You can change appearance, text size, the dyslexia-friendly font, line spacing, high contrast, and reduced motion.',k:'text size,font,dyslexia,dark mode,contrast,settings,accessibility,bigger,larger'},
 {q:'How do bookmarks and notes work?',a:'Inside a lesson, use the bookmark button to save it and the notes box to write private notes. Open "Bookmarks and notes" in the footer to see everything you saved. You can download your notes as a text file.',k:'bookmark,notes,note,saved lessons'},
 {q:'How does the weekly study goal work?',a:'In Settings, pick how many lessons you want to finish each week. Your home page shows your progress and a gentle reminder when you are behind.',k:'goal,weekly,reminder,study goal'},
 {q:'What is the final test in the Water Baptism Class?',a:'The Water Baptism Class ends with a final test that covers the whole class. You review the key points, take a 15-question test, and need 70% to pass. You can retake it as many times as you like and your best score is kept. After you pass, you meet with your pastor or class leader to sign off, and then your class certificate is issued. The other classes do not have a final test.',k:'final test,final exam,class test,70,exam,end of class'},
 {q:'How do I become a certified teacher?',a:'The BFM Teacher Certification is for anyone who wants to teach a class such as Sunday school, discipleship, water baptism preparation, new believers, or new members. It is optional and needs the director’s permission, which you can request from the Teacher Certification page. It has five courses, a teaching practicum with a mentor, and a final exam (70% to pass), and ends with the BFM Certified Teacher certificate.',k:'teacher,teach,certification,certified teacher,sunday school,teaching,class leader,practicum'},
 {q:'What are the volunteer training packets?',a:'They are printed packets that go along with Track 1. There are two general packets, the Volunteer Orientation Packet and the Volunteer Safety & Safeguarding Packet, for anyone who is not sure yet which ministry they belong in. Every ministry also has its own packet. Each one has a welcome statement, a foundational section, a roles and responsibilities section, and additional materials (FAQs and a volunteer agreement). They are not courses, so there is nothing to complete and nothing is locked. Find them at the bottom of the Track 1 page and in Study guides and resources, then view, download, or print them.',k:'volunteer,packet,training,orientation,safety,safeguarding,agreement,roles,ministry,track 1'},
 {q:'What is in a Ministry Manual?',a:'Every manual follows the BFM template. Page 1 is a cover with the logo, the full church name, and the ministry name. Page 2 is the table of contents, and page 3 is the welcome statement. Then come seven sections with titled subsections: the BFM foundation, the ministry foundation, standards, and character qualities, culture, servanthood, and balance, safety and care, and safeguarding and compliance.',k:'manual,template,sections,Ministry Manual,cover,table of contents,welcome'},
 {q:'Where is the guided tour?',a:'Open the footer at the bottom of any page and press Guided tour, or find it on your Profile page. It takes about a minute and shows where everything is. You can skip it at any time.',k:'tour,guided tour,tutorial,walkthrough,show me around,how it works,replay'},
 {q:'What is Track A?',a:'Track A is optional administrative training for people who want to serve with finances and administration. It needs the director’s permission, which you can request from the Track A page.',k:'track a,administrative,finance,admin training'},
 {q:'How do I contact the director?',a:'Type your question in this chat. If the FAQs do not answer it, press "Send to the director" and your message goes to the director. Their reply appears here and you get a notification.',k:'contact,director,speak,message,email,pastor,talk,question,human'}
];
const FAQ_A=[
 {q:'Where is the director tour?',a:'Open the footer and press Director tour, or find it on your staff Profile page. It walks through the staff sections, grading, requests, messages, announcements, and events. You can skip it at any time.',k:'tour,guided tour,tutorial,walkthrough,director tour,staff tour,replay'},
 {q:'How do I sign in to the staff portal?',a:'Use the "Staff" link in the footer and enter your personal Director access code. Each director has a different code. Sessions last 4 hours, lock after 30 idle minutes, and five wrong tries cause a waiting period.',k:'sign in,login,log in,code,passcode,password,staff'},
 {q:'Why don’t I see any students?',a:'Student records live in the Academy’s shared records. Only the artifact owner and invited editors can read them, so you need edit access to the Academy page. If you have access and the list is still empty, no student has opened the Academy yet.',k:'students,roster,empty,no students,not showing,records,access'},
 {q:'How do I approve or decline requests?',a:'Open the Requests tab (or use the buttons on the Overview). Approving a skip request waives the course, approving an unlock request opens that course for the student, and approving a Discipleship or Track A request opens that class. The student is notified.',k:'request,requests,approve,decline,permission'},
 {q:'How do I unlock a course for a student on my own?',a:'Open the student from the Students tab, find "Unlock courses", choose the course (or Discipleship Class permission) and press Unlock. You can lock it again from the same list.',k:'unlock,lock,course,open,permission,give access'},
 {q:'How do I set or reset a student’s ministry?',a:'On the student’s page, use "Ministry calling" to choose their Track 3 ministry. Choose "Not chosen" to let them pick again.',k:'ministry,calling,track 3,change ministry,reset'},
 {q:'How do I grade work?',a:'Open Review & grade, pick a student’s work, read their answers and project, then enter a score and feedback. The student sees it on their course page.',k:'grade,grading,review,feedback,score'},
 {q:'How do reports work?',a:'The Reports tab builds monthly, quarterly, and yearly summaries of graded work. Choose a period and download it as a PDF, an Excel file or a CSV.',k:'report,reports,monthly,quarterly,yearly,csv,pdf,export'},
 {q:'How do I post announcements and events?',a:'Use the Announcements and Events tabs. Pick Inline banner (top of the home page) or Floating pop-up (on top of any page). Choose an icon and colors, set a start and end date and time, and Preview it. When several are showing, students step through them with arrows (1 of 3). Ended announcements move to Archived, and you can archive or restore any of them. Adding an event also shows students a New events pop-up that points to the events calendar in the footer.',k:'announcement,announcements,event,events,news,post'},
 {q:'How do I answer student messages?',a:'Open the Messages tab. Each student message shows with a reply box. Your reply appears in the student’s chat and they get a notification.',k:'message,messages,reply,chat,answer,student question'},
 {q:'What does the notification bell tell me?',a:'The bell shows new requests, student messages, projects waiting to be graded, course completions, and new students. New items are highlighted until you open the bell.',k:'notification,notifications,bell,alert,alerts'},
 {q:'How do I add, replace, or remove a director code?',a:'Run tools/make-passcodes.js (see the README), paste the printed key list over ADMIN_KEYS in the app, give each person one code, and delete the codes file. Only salted hashes are kept in the app.',k:'add director,revoke,new code,generate,passcode,remove director,replace code'},
 {q:'How do I delete a student?',a:'Open the student’s page and use "Delete profile" at the bottom. Their saved record is removed and their device is cleared the next time they open the Academy.',k:'delete,remove,student,profile,erase'},
 {q:'Can students get into the staff portal?',a:'Not without a personal code, and codes are never stored in the app. The real protection of student records is the Academy’s access rules, so only share edit access with people who should see student data.',k:'security,students access,hack,safe,protect,secure'},
 {q:'How do I issue a certificate by hand?',a:'Open the Certificates tab, choose the student and track, and issue it. A record of everything you issued is kept there.',k:'certificate,issue,certificates,manual'}
];

/* ---------- FAQ and Privacy pages ---------- */
const faqList=l=>'<div class="faqs">'+l.map(x=>'<details class="faq"><summary>'+esc(x.q)+'</summary><p>'+esc(x.a)+'</p></details>').join('')+'</div>';
function faqView(){
  if(S.admin)return admShell('faq','FAQs for directors','Quick answers about running the Academy.',faqList(FAQ_A)+'<p class="note" style="margin-top:16px">Students have their own FAQs and a chat. Their questions are different from these.</p>');
  return crumbs([{t:'Campus',go:'home'},{t:'FAQs'}])+'<div class="thead"><p class="eyebrow">Help</p><h1>Frequently asked questions</h1><p class="lede">Quick answers for students. Still stuck? Use the chat button in the corner and we will point you to the director.</p></div>'+faqList(FAQ_S)+
    '<p style="margin-top:22px"><button class="btn" data-act="chat-open">'+ic('chat')+'Ask in the chat</button> <button class="btn ghost" data-go="privacy">Privacy</button></p>';
}
function privacyView(){
  const sec=(h,items)=>'<section class="prv"><h3>'+h+'</h3><ul>'+items.map(i=>'<li>'+i+'</li>').join('')+'</ul></section>';
  if(S.admin)return admShell('privacy','Privacy for directors','How to handle student information.',
    sec('What you can see',['Student names, ministry, role, enrollment date, course progress, written lesson answers, project summaries, requests and chat messages.','Each student’s profile picture, fun facts and interests, and favorite scripture, if the student added them. The picture is a small copy of the cropped version.'])+
    sec('Your responsibilities',['Treat everything students write as confidential. Reflections and messages can include personal or spiritual matters.','Never share your personal Director access code. Each code is tied to one person.','Lock the staff tools when you step away. Sessions end after 4 hours or 30 idle minutes.','Share edit access to the Academy only with people who should see student records.','Export reports and CSV files only when needed, keep them private, and delete them when you are done.'])+
    sec('Where data lives',['Student records are held in the Academy’s shared records and are readable only by the artifact owner and invited editors.','Your own director settings and notification state are stored in this browser only.','Deleting a student removes their saved record. Reports you already downloaded are not affected.'])+
    sec('Messages',['Student chat messages go only to directors. Reply with care and avoid putting sensitive details in replies.']));
  return crumbs([{t:'Campus',go:'home'},{t:'Privacy'}])+'<div class="thead"><p class="eyebrow">Help</p><h1>Privacy</h1><p class="lede">What BFM Academy keeps about you, where it lives, and who can see it.</p></div>'+
    sec('What we keep',['Your name, ministries, role, and enrollment date, plus your profile picture, fun facts and interests, and favorite scripture if you add them.','Your course progress, written answers, assessment scores, project summaries, bookmarks, private notes, and certificates.','Your requests to the director and any chat messages you send to the director.'])+
    sec('Where it is kept',['On this device, in your browser. Clearing your browser data erases it.','When the Academy’s shared records are on, a copy of your name, ministries, role, profile picture, interests, favorite scripture, progress, answers, project, requests, and messages is kept so the director can review your work and reply to you.','Your profile picture and bookmarks stay on your device. Private notes stay on your device.'])+
    sec('Who can see it',['The Academy Directors (staff with a personal access code and edit access to the Academy) can see the shared copy.','Other students cannot see your information.','Anyone you give a certificate or its verify link to can see the name, credential and date on it.'])+
    sec('Your choices',['You can delete your profile and all progress any time from Settings on your profile page. If shared records are on, your saved copy is removed too.','You can ask the director to correct your name or ministry.'])+
    sec('Good to know',['BFM Academy does not use advertising or tracking cookies.','PDFs are built on your device.','Pages load fonts from Google Fonts and the PDF and QR tools from the jsDelivr CDN, which means those services can see that your device visited.','Chat answers come from the FAQs. A message is only sent to the director when you press "Send to the director".']);
}

/* ---------- Director notifications (bell) ---------- */
var ASEEN={};
function admNotes(){
  const out=[],now=Date.now(),recent=t=>t&&now-t<14*864e5;
  roster().forEach(r=>{
    const nm=nameOf(r),o=outOf(r.uid),w=r.d.work||{},u=r.uid,eu_=eu(u);
    Object.keys(r.d.reqs||{}).forEach(k=>{
      const q=r.d.reqs[k];
      if(((o.denied||{})[k]||0)>=q.at)return;
      if(k==='access_A'&&(o.access||{}).A)return;
      if(k==='access_T'&&(o.access||{}).T)return;
      if(k==='access_D'&&(o.access||{}).D)return;
      if(k.indexOf('unlock_')===0&&(o.access||{})['u:'+k.slice(7)])return;
      if(k.indexOf('skip_')===0&&(o.skips||{})[k.slice(5)])return;
      out.push({key:'req:'+u+':'+k+':'+q.at,t:q.at,lab:'Request',x:'<b>'+esc(nm)+'</b> asked to: '+esc(reqLabel(k)),go:'admin:requests'});
    });
    (r.d.msgs||[]).forEach(m=>{
      if(((o.replies||{})[m.id])||(o.mhide||{})[m.id])return;
      out.push({key:'msg:'+u+':'+m.id,t:m.at,lab:'Message',x:'<b>'+esc(nm)+'</b>: '+esc(String(m.text).slice(0,90)),go:'admin:messages'});
    });
    Object.keys(w).forEach(cid=>{
      const p=w[cid].p,c=byId[cid];
      if(!c||!p||!p.done||(o.grades||{})[cid])return;
      const t=Date.parse(p.date)||0;
      out.push({key:'work:'+u+':'+cid+':'+p.date,t:t||now,lab:'To grade',x:'<b>'+esc(nm)+'</b> submitted the project for '+esc(c.code),go:'admin:review:'+eu_+':'+cid});
    });
    Object.keys(r.d.comp||{}).forEach(cid=>{
      const t=Date.parse(r.d.comp[cid])||0,c=byId[cid];
      if(c&&recent(t))out.push({key:'done:'+u+':'+cid,t,lab:'Completed',x:'<b>'+esc(nm)+'</b> completed '+esc(c.code),go:'admin:student:'+eu_});
    });
    const jt=Date.parse((r.d.prof||{}).enrolled)||0;
    if(recent(jt))out.push({key:'join:'+u,t:jt,lab:'New student',x:'<b>'+esc(nm)+'</b> joined the Academy',go:'admin:student:'+eu_});
  });
  if(DB&&ADM.err)out.push({key:'sys:err',t:now,lab:'Access',x:'Student records are not available to you. Ask the Academy owner for edit access.',go:'admin:overview'});
  return out.sort((a,b)=>b.t-a.t).slice(0,25);
}
function admUnread(){
  if(!S.admin)return 0;
  const seen=S.admSeenKeys||{};
  return admNotes().filter(i=>!seen[i.key]).length;
}
function admMarkSeen(){
  ASEEN=Object.assign({},S.admSeenKeys||{});
  const m={};admNotes().forEach(i=>{m[i.key]=1;});
  S.admSeenKeys=m;save();
}
function npopAdminHtml(){
  const L=admNotes();
  return '<div class="np-h"><b>Director notifications</b><small>'+(L.length?'Latest':'')+'</small></div>'+
    (L.length?L.slice(0,8).map(n=>'<button class="np-i np-b'+(ASEEN[n.key]?'':' new')+'" data-go="'+esc(n.go)+'"><span>'+esc(n.lab)+'</span><p>'+n.x+'</p><small>'+agoTxt(n.t)+'</small></button>').join(''):'<p class="np-e">All caught up. New requests, student messages, projects to grade, completions and new students show up here.</p>')+
    '<button class="np-f" data-go="admin:requests">Open requests</button>';
}

/* ---------- Admin messages tab ---------- */
var ARMD=null,ARMT=0;
/* two-tap confirm (browser dialogs are blocked inside shared pages): first tap arms, second tap deletes */
function armDel(key,btn){
  if(ARMD===key){ARMD=null;clearTimeout(ARMT);return true;}
  ARMD=key;clearTimeout(ARMT);
  const lab=btn&&btn.querySelector?btn.querySelector('span')||btn:null;
  toast('Tap again to delete. Students keep their own copy.');
  ARMT=setTimeout(()=>{ARMD=null;},4000);return false;
}
function messagesAdmin(){
  const rows=[];let nHid=0;
  roster().forEach(r=>{
    const o=outOf(r.uid),rep=o.replies||{},mh=o.mhide||{};
    (r.d.msgs||[]).forEach(m=>{if(mh[m.id]){nHid++;return;}rows.push({r,m,rep:rep[m.id]});});
  });
  rows.sort((a,b)=>(!!a.rep-!!b.rep)||b.m.at-a.m.at);
  if(!rows.length)return empty('inbox','No messages','When a student sends a question from the chat, it will show up here with a box to reply.'+(nHid?' '+nHid+' deleted message'+(nHid>1?'s are':' is')+' hidden from this list.':''));
  const nAns=rows.filter(x=>x.rep).length;
  return (nAns?'<div class="msgbar"><span>'+nAns+' answered message'+(nAns>1?'s':'')+'</span><button class="btn ghost sm" data-act="msg-clear">'+ic('x')+'Clear answered</button></div>':'')+
  '<ul class="msgl">'+rows.map(x=>{
    const nm=nameOf(x.r),id=x.m.id;
    return '<li class="card msgc"><div class="msgtop"><div class="arow-m">'+avatar(nm)+'<div><b>'+esc(nm)+'</b><small>'+esc(agoTxt(x.m.at))+(x.rep?' &middot; answered':' &middot; waiting for your reply')+'</small></div></div>'+
      '<button class="btn ghost sm msgdel" data-act="msg-del" data-u="'+esc(eu(x.r.uid))+'" data-m="'+esc(id)+'" aria-label="Delete this message">'+ic('x')+'Delete</button></div>'+
      '<p class="msgq">'+esc(x.m.text)+'</p>'+
      (x.rep?'<p class="msga"><b>Your reply:</b> '+esc(x.rep.text)+'</p>':
      '<div class="field"><label for="rp-'+esc(id)+'">Reply</label><textarea id="rp-'+esc(id)+'" placeholder="Write your reply."></textarea></div><div class="btnrow msgsend"><button class="btn sm" data-act="msg-reply" data-u="'+esc(eu(x.r.uid))+'" data-m="'+esc(id)+'">'+ic('send')+'Send reply</button></div>')+'</li>';
  }).join('')+'</ul>';
}
function hubAdminTab(tab){
  if(tab==='messages')return admShell(tab,'Messages','Questions students sent from the chat. Reply here and they will be notified.',messagesAdmin());
  if(tab==='faq')return faqView();
  if(tab==='privacy')return privacyView();
  return null;
}

/* ---------- Student chat ---------- */
var CHATOPEN=false,CHATQ=null;
const STOP='the a an and or to of in on is it i my me do how can what why when where does for with this that you your are be at as we our'.split(' ');
function faqAnswer(text){
  const t=' '+String(text).toLowerCase().replace(/[^a-z0-9’' ]+/g,' ')+' ';
  let best=null,bs=0;
  FAQ_S.forEach(f=>{
    let s=0;
    f.k.split(',').forEach(kw=>{kw=kw.trim().toLowerCase();if(kw&&t.indexOf(kw)>=0)s+=Math.max(1,Math.min(3,Math.floor(kw.length/4)));});
    const qw=f.q.toLowerCase().replace(/[^a-z0-9 ]+/g,' ').split(' ').filter(w=>w.length>3&&STOP.indexOf(w)<0);
    qw.forEach(w=>{if(t.indexOf(' '+w)>=0)s+=1;});
    if(s>bs){bs=s;best=f;}
  });
  return bs>=2?best:null;
}
const chatPush=(from,text,extra)=>{S.chat=S.chat||[];S.chat.push(Object.assign({from,text,at:Date.now()},extra||{}));if(S.chat.length>80)S.chat=S.chat.slice(-80);};
function chatSend(){
  const el=$('#chat-in');if(!el)return;
  const text=String(el.value||'').trim();
  if(text.length<2)return;
  el.value='';
  chatAsk(text);
}
function chatAsk(text){
  chatPush('me',text);
  const f=faqAnswer(text);
  if(f)chatPush('bot',f.a,{faq:f.q,ask:text,canSend:true});
  else chatPush('bot','I could not find an answer to that in the FAQs. Would you like me to send your question to the Academy Director?',{ask:text,canSend:true});
  save();drawChat();
}
function chatToDirector(i){
  const m=(S.chat||[])[+i];if(!m||!m.ask||m.sent)return;
  S.msgs=S.msgs||[];
  const id=Date.now().toString(36)+Math.random().toString(36).slice(2,6);
  S.msgs.push({id,text:String(m.ask).slice(0,600),at:Date.now()});
  m.sent=true;
  chatPush('bot',DB?'Done. I sent your question to the Academy Director. Their reply will show up here, and you will get a notification.':'I saved your question. It will reach the director once the Academy’s shared records are on. Their reply will show up here.');
  note('enroll','Message sent to the director.');
  save();pushNow();drawChat();
}
function hubReplies(o){
  const rep=o.replies||{};let ch=false;
  Object.keys(rep).forEach(id=>{
    S.repSeen=S.repSeen||{};
    if(S.repSeen[id]||(S.chat||[]).some(c=>c.rid===id))return;
    S.repSeen[id]=1;
    const msg=(S.msgs||[]).find(m=>m.id===id);
    chatPush('dir',rep[id].text,{rid:id,q:msg?msg.text:'',unseen:true});
    note('review','The director replied to your message.');ch=true;
  });
  return ch;
}
function chatUnseen(){return(S.chat||[]).filter(c=>c.from==='dir'&&c.unseen).length;}
const QUICK=['How do I register for a class?','Why is a course locked?','How do I get my certificate?','How do I contact the director?'];
function chatHtml(){
  const L=S.chat||[];
  const msgs=L.length?L.map((c,i)=>{
    if(c.from==='me')return '<div class="cm me"><p>'+esc(c.text)+'</p></div>';
    const who=c.from==='dir'?'<span class="cm-w">Academy Director</span>':'';
    const act=(c.canSend&&!c.sent)?'<div class="cm-a"><button class="btn ghost sm" data-act="chat-dir" data-i="'+i+'">'+ic('send')+'Send to the director</button><button class="btn ghost sm" data-act="chat-end">Ask something else</button></div>':'';
    return '<div class="cm '+(c.from==='dir'?'dir':'bot')+'">'+who+'<p>'+esc(c.text)+'</p>'+act+'</div>';
  }).join(''):'<div class="cm bot"><p>Hi, I am the BFM Academy helper. Ask me a question and I will look for an answer in the FAQs. If I cannot help, I can send your question to the Academy Director.</p></div><div class="cm-q">'+QUICK.map(q=>'<button class="btn ghost sm" data-act="chat-quick" data-q="'+esc(q)+'">'+esc(q)+'</button>').join('')+'</div>';
  return '<div class="chat-h"><img src="'+LOGO_B64+'" alt=""><div><b>BFM Academy Help</b><small>FAQs and the director</small></div><button class="chat-end" data-act="chat-end" aria-label="End chat and start over">End chat</button><button class="chat-x" data-act="chat-close" aria-label="Close chat">'+ic('x')+'</button></div>'+
    '<div class="chat-b" id="chat-b" aria-live="polite">'+msgs+'</div>'+
    '<div class="chat-f"><input type="text" id="chat-in" maxlength="400" placeholder="Type your question" autocomplete="off"><button class="btn sm" data-act="chat-send" aria-label="Send">'+ic('send')+'</button></div>'+
    '<div class="chat-l"><button class="linkbtn" data-go="faq">Browse all FAQs</button><button class="linkbtn" data-go="privacy">Privacy</button></div>';
}
var QAOPEN=false,QAKEY='';
const QA=[['admin:announcements','mega','Post an announcement'],['admin:events','cal','Add an event'],['admin:reports','report','Grading reports'],['admin:certs','award','Issue a certificate'],['admin:students','search','Find a student'],['admin:messages','inbox','Student messages'],['admin:activity','chart','Course activity'],['profile','shield','Profile and settings'],['home','book','Student campus']];
function qaHtml(){
  return '<section class="qpop" role="dialog" aria-label="Quick actions"><p class="qpop-h">Quick actions</p>'+
    QA.map(x=>'<button data-go="'+x[0]+'">'+ic(x[1])+'<span>'+x[2]+'</span></button>').join('')+
    '<button data-act="adm-xlsx">'+ic('down')+'<span>Export students (Excel)</span></button><button data-act="adm-csv">'+ic('down')+'<span>Export students (CSV)</span></button></section>';
}
function drawChat(){
  const w=$('#chatwrap');if(!w)return;
  if(S.admin){
    const on=true;
    const key=V.n+':'+(V.a||[]).join(':');if(key!==QAKEY){QAKEY=key;QAOPEN=false;}
    if(!on){w.innerHTML='';w.hidden=true;return;}
    w.hidden=false;
    w.innerHTML=(QAOPEN?qaHtml():'')+'<button class="chatfab qafab" data-act="qa-toggle" aria-label="'+(QAOPEN?'Close quick actions':'Open quick actions')+'" aria-expanded="'+(QAOPEN?'true':'false')+'" title="Quick actions"><img src="'+LOGO_B64+'" alt=""></button>';
    return;
  }
  w.hidden=false;
  const u=chatUnseen();
  w.innerHTML=(CHATOPEN?'<section class="chat" role="dialog" aria-label="Help chat">'+chatHtml()+'</section>':'')+
    '<button class="chatfab" data-act="chat-toggle" aria-label="'+(CHATOPEN?'Close help chat':'Open help chat')+'" aria-expanded="'+(CHATOPEN?'true':'false')+'"><img src="'+LOGO_B64+'" alt="">'+(u&&!CHATOPEN?'<span class="badge">'+u+'</span>':'')+'</button>';
  const b=$('#chat-b');if(b&&CHATOPEN)b.scrollTop=b.scrollHeight||0;
}
function hubAct(k,d){
  if(k==='qa-toggle'){QAOPEN=!QAOPEN;drawChat();return true;}
  if(k==='chat-toggle'||k==='chat-open'){CHATOPEN=k==='chat-open'?true:!CHATOPEN;if(CHATOPEN){(S.chat||[]).forEach(c=>{c.unseen=false;});save();}drawChat();const i=$('#chat-in');if(CHATOPEN&&i&&i.focus)i.focus();return true;}
  if(k==='chat-close'){CHATOPEN=false;drawChat();return true;}
  if(k==='chat-end'){S.chat=[];save();drawChat();const i=$('#chat-in');if(i&&i.focus)i.focus();toast('Chat ended. Ask a new question.');return true;}
  if(k==='chat-send'){chatSend();return true;}
  if(k==='chat-quick'){chatAsk(d.q);return true;}
  if(k==='chat-dir'){chatToDirector(d.i);return true;}
  if(k==='msg-reply'){
    const uid=decodeURIComponent(d.u),el=$('#rp-'+d.m),txt=String((el&&el.value)||'').trim();
    if(txt.length<2){toast('Write a reply first.');return true;}
    adminUpdate(uid,o=>{o.replies=o.replies||{};o.replies[d.m]={text:txt.slice(0,1200),at:Date.now()};});
    toast('Reply sent.');return true;
  }
  if(k==='msg-del'){
    const uid=decodeURIComponent(d.u);
    if(!armDel('m:'+d.m,d.btn))return true;
    adminUpdate(uid,o=>{o.mhide=o.mhide||{};o.mhide[d.m]=Date.now();});
    toast('Message deleted.');return true;
  }
  if(k==='msg-clear'){
    const n=roster().reduce((a,r)=>a+(r.d.msgs||[]).filter(m=>((outOf(r.uid).replies)||{})[m.id]&&!((outOf(r.uid).mhide)||{})[m.id]).length,0);
    if(!n||!armDel('clear',d.btn))return true;
    roster().forEach(r=>{const o0=outOf(r.uid),rp=o0.replies||{},hit=(r.d.msgs||[]).filter(m=>rp[m.id]&&!(o0.mhide||{})[m.id]);if(hit.length)adminUpdate(r.uid,o=>{o.mhide=o.mhide||{};hit.forEach(m=>{o.mhide[m.id]=Date.now();});});});
    toast('Answered messages cleared.');return true;
  }
  return false;
}
document.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&e.target&&e.target.id==='chat-in'){e.preventDefault();chatSend();}
  if(e.key==='Escape'&&(CHATOPEN||QAOPEN)){CHATOPEN=false;QAOPEN=false;drawChat();}
});

document.addEventListener('click',e=>{
  if(!QAOPEN||!e.target||!e.target.closest)return;
  if(e.target.closest('.qpop button')){setTimeout(()=>{QAOPEN=false;drawChat();},0);}
  else if(!e.target.closest('#chatwrap')){QAOPEN=false;drawChat();}
});
/* ================= Ministry Manuals: a separate document for every Track 3 ministry ================= */
const COPY_LINE='Copyright © 2026 Bushwick Family Ministries. All rights reserved.';
const specCourse=k=>COURSES.find(x=>x.track==='3'&&x.grp==='spec'&&x.key===k);
const manualCourse=k=>{const t=MTPL[k];if(!t)return null;if(t.lock==='pkt')return byId['ldr-101'];if(t.spec)return specCourse(t.spec);if(t.course)return byId[t.course];if(t.lock==='A')return COURSES.find(x=>x.track==='A');return COURSES.find(x=>x.track==='3'&&x.grp==='spec');};
const manName=k=>(MTPL[k]||{}).name||k;
const manKind=k=>(MTPL[k]||{}).kind||'Ministry Manual';
const manIsPacket=k=>manKind(k)==='Volunteer Training Packet';
/* a manual is open when the course it belongs to is open (Pastoral Aid/Care opens with Track 3) */
function manLock(k){
  const t=MTPL[k];if(!t||S.preview)return '';
  if(t.lock==='t2')return trackComplete('2')?'':'Complete Track 2 first';
  if(t.lock==='pkt')return '';
  const c=manualCourse(k);return c?lockMsg(c):'';
}
const manualsOf=c=>{
  if(c.track==='3'&&c.grp==='spec')return MKEYS.filter(k=>MTPL[k].spec===c.key);
  if(c.track==='A'&&c===COURSES.find(x=>x.track==='A'))return ['admin'];
  return MKEYS.filter(k=>MTPL[k].course===c.id);
};

/* the manual as data: front matter and Sections 1 to 7 of the BFM template (shared by the screen preview, print and PDF) */
const CQ=[['Consistency','Showing up the same way every time, so people can count on the ministry.'],['Accountability','Welcoming correction and answering to the leaders God has placed over us.'],['Reliability','Doing what we said we would do, on time and prepared.'],['Trustworthiness','Handling people, money, and information with honesty.'],['Communication','Speaking clearly, kindly, and early.'],['Faithfulness','Staying steady in the small things and in hard seasons.'],['Prayer','Praying for the team, the people we serve, and our leaders.'],['Giver','Giving our time, talents, and treasure with a cheerful heart.']];
const TEACHER_X=['Prepare every lesson in prayer and in advance.','Teach the Bible accurately and at the students’ level.','Know each student by name and notice who is missing.','Follow the approved curriculum and ask before changing it.','Work as a team and welcome feedback from leaders.'];
function manualDoc(k){
  const ss=MTPL[k].general?generalDoc(k):MTPL[k].of?packetDoc(MTPL[k].of):manualDocRaw(k);
  ss.forEach(s=>{let i=0;s.b.forEach(x=>{if(x.h){i++;x.no=s.n?s.n+'.'+i:'';}});});
  
  return ss;
}
const EARLY_MIN=['deacon','admin','pastoral','media','communications','usher'];
const ARRIVE_LINE=k=>k==='cined'?'Sunday school runs from 9:45 to 10:20 AM. Teachers arrive by 9:30 AM, 15 minutes before Sunday school begins.':EARLY_MIN.includes(k)?'Sunday service begins at 10:30 AM. Leaders and volunteers arrive 45 minutes to 1 hour before service, between 9:30 and 9:45 AM.':'Arrive at least 15 minutes before the service or meeting begins.';
const MANUAL_FAQ=[['How much time does this ask of me?','Most volunteers give a few hours each week. Your leader will agree on a schedule with you.'],['What if I cannot serve one week?','Tell your leader as early as you can so the team can cover your place.'],['Who do I go to with a problem?','Start with your ministry leader. If needed, they will bring in the pastor.'],['Can I try other ministries?','Yes. Talk with your leader and the pastor first, so your commitments stay balanced.'],['What do I do in an emergency?','Call 911 first, then tell your leader and the pastor right away.'],['Do I need to be a member to serve?','Ask your ministry leader and the pastor about the requirements for this ministry.']];
function generalDoc(k){
  const t=MTPL[k],F=BFM_FOUND,safety=t.variant==='safety';
  const faq=MANUAL_FAQ.concat([['What time should I arrive?','Sunday service begins at 10:30 AM. Your ministry leader will tell you when your team arrives. Deacons, administration, pastoral aid, media and communications, and ushers and hospitality arrive 45 minutes to 1 hour before service. Christian education teachers arrive by 9:30 AM, before Sunday school at 9:45 AM.']]).concat([['What if I do not know which ministry I belong in?','You can still serve as a volunteer. Talk with the pastor about where help is needed, and keep praying about your calling. You can join a ministry team at any time.']]).concat(safety?[['What should I do if I am worried about someone’s safety?','Tell your leader and the pastor right away. Follow the church’s reporting policy and the law, and write down what you saw the same day.'],['Why do volunteers need screening?','Screening protects the people we serve and the people who serve. Everyone completes it before serving.']]:[]);
  const roleMeans=[
    ['Volunteer','A volunteer is a screened and trained member who gives time and talent to serve people and support the ministry.',['Serve faithfully and arrive on time.','Follow the direction of your leader.','Care for every person with patience and respect.'].concat(safety?['Know the emergency exits, the check-in rules, and who to call.','Never be alone with a child or a vulnerable person.']:['Ask questions and keep learning.'])],
    ['Assistant Director','An assistant director supports the director, helps the team stay organized, and is ready to lead when the director is away.',['Help schedule and prepare the team.','Encourage, train, and check in with volunteers.','Step in to lead when the director is absent.'].concat(safety?['Make sure every volunteer is screened and trained.','Help write and file incident reports.']:['Share what you see with the director.'])],
    ['Director','A director carries the vision for the ministry, answers to the pastor, and is responsible for the health of the team.',['Cast the vision and set the schedule.','Recruit, train, and care for volunteers.','Report to the pastor on a regular schedule.'].concat(safety?['Keep screening, training, and safety records up to date.','Report every concern to the pastor right away.']:['Keep the ministry in line with church policies.'])]];
  const roleBlocks=[];roleMeans.forEach(r=>{roleBlocks.push({h2:r[0]},{p:r[1]},{bul:r[2]});});
  return [
    {t:'Welcome Statement',n:'',welcome:true,b:[{p:'Dear volunteer,'},{p:'Welcome to the Bushwick Family Ministries volunteer team. Thank you for saying yes to serve.'},{p:safety?'This packet teaches the basics of keeping people safe, so that every person who comes through our doors is protected and cared for.':'This packet welcomes you into the BFM family. It explains who we are, what we believe, and how we serve, so you can begin with confidence.'},{p:'You do not need to know which ministry you belong in to begin. You can start as a volunteer right now, serve where there is a need, and keep listening for God’s calling. You are not here by accident. God has gifted you, the church needs you, and we will walk beside you.'},{scr:['Mark 10:45','1 Peter 4:10']},{p:'In Christ’s service,'},{sign:'Pastor'}]},
    {t:'Foundational Section',n:'1',b:[
      {h:'Church Vision Statement'},{p:F.vision},{quote:{ref:F.visionRef,text:F.visionText}},{h2:'Church mission'},{p:F.mission},{p:F.missionText},
      {h:'Core Values'},{p:'These values shape everything we do as a church family.'},{num:F.values}]},
    {t:'Roles & Responsibilities',n:'2',b:[
      {h:'Organizational Chart for Roles of Church'},{p:'Every ministry in the church uses the same three roles. Each person answers to the leader above them, and every director answers to the pastor.'},{org:{chain:['Pastor','Director','Assistant Director','Volunteer']}},
      {h:'What It Means to Be in Each Role'}].concat(roleBlocks)},
    {t:'Additional Materials',n:'',b:[
      {h:'FAQs'},{pairs:faq},
      {h:'Volunteer Agreement'},{p:'As a volunteer with Bushwick Family Ministries, I agree to the following.'},
      {check:['I will serve with a clear testimony and a servant’s heart.','I will complete screening, references, and the background check before I serve.','I will complete the required training and renew it when asked.','I will follow the church’s policies, including the safeguarding and reporting policies.','I will protect the privacy of the people I serve.','I will arrive on time, and tell my leader early if I cannot serve.','I will follow the direction of my ministry leader and the pastor.','I will never be alone with a child or a vulnerable person.','I will support the church with my prayers, my presence, and my giving.']},
      {keep:240},{p:'I have read this packet, I understand it, and I agree to serve according to it. This agreement may be reviewed each year.'},{sign:'Volunteer'},{sign:'Ministry leader'},{sign:'Pastor'},
      {pagebreak:true},{h:'New Volunteer Information Form'},{p:'Check off each Track 1 module as you complete it, then fill in your personal information and give this form to your ministry leader.'},{h2:'Track 1 module checklist'},{mods:COURSES.filter(c=>c.track==='1').map(c=>c.code+': '+c.title)},{h2:'Personal information'},{fields:[['First name','Last name'],['Home phone','Cell phone'],['Email address'],['Birthdate']]},{note:{t:'Important Note',items:[['New volunteer training timeline','1 to 3 months'],['Probation period','4 months'],['Shadowing','Volunteers will be required to shadow a section of ministry at least 1 to 2 random Sundays in the year.']]}}]}
  ];
}
function packetDoc(k){
  /* a ministry packet is the general template with the ministry's own welcome, wording, and name */
  const m=MANUALS[k],t=MTPL[k],nm=t.name,ss=generalDoc('volorient');
  ss[0].b=[{p:'Dear volunteer,'},{p:'Welcome to the '+nm+' of Bushwick Family Ministries. Thank you for saying yes to serve.'},{p:m.purpose},{p:'This packet gives you the church’s vision and core values, explains the roles on the team, answers common questions, and includes the volunteer agreement. Read it slowly, ask questions, and keep it close. You are not here by accident. God has gifted you, the church needs you, and we will walk beside you.'},{scr:m.refs},{p:'In Christ’s service,'},{sign:'Ministry leader'},{sign:'Pastor'}];
  const intro=ss[2].b.find(x=>x.p&&/^Every ministry in the church/.test(x.p));
  if(intro)intro.p='The '+nm+' uses the same three roles as every ministry in the church. Each person answers to the leader above them, and every director answers to the pastor.';
  ss[3].b.forEach(x=>{
    if(x.pairs)x.pairs=x.pairs.filter(r=>!/do not know which ministry/.test(r[0])).map(r=>/^What time should I arrive/.test(r[0])?[r[0],ARRIVE_LINE(k)]:r);
    if(x.p&&/^As a volunteer with/.test(x.p))x.p='As a volunteer with the '+nm+' of Bushwick Family Ministries, I agree to the following.';
  });
  return ss;
}
function scrQ(pair){return {quote:{ref:pair[0],text:bibleText(pair[0]),align:pair[1]}};}
function manualDocRaw(k){
  const m=MANUALS[k],t=MTPL[k],nm=t.name,F=BFM_FOUND,packet=manIsPacket(k);
  const kindLow=packet?'packet':'manual';
  const std=MANUAL_BASE_STANDARDS.concat(m.standards);
  const S=SCR[k],LD=LEAD_M[k],kidMin=['children','youth','nursery'].includes(k);
  const expBlocks=[];
  t.exp.forEach(g=>{
    expBlocks.push({h2:g+' expectations'});
    if(g==='Volunteer')expBlocks.push({check:std});
    else if(g==='Teacher')expBlocks.push({check:TEACHER_X});
    else expBlocks.push({p:LD[0]},{bul:LD[1]});
  });
  const cqFor=name=>{const c=CQ_SCR[name];return scrQ(c);};
  const cq=[{h2:'Character and integrity'},{bul:m.integ},cqFor('Character and integrity')];
  CQ.forEach(c=>{
    cq.push({h2:c[0]});
    if(c[0]==='Consistency')cq.push({p:c[1]},{bul:m.consist});
    else if(c[0]==='Communication')cq.push({p:m.commIntro},{bul:m.comm});
    else cq.push({p:c[1]+' In '+nm+', this means '+({Accountability:'every team member knows who they report to and meets with that leader regularly.',Reliability:'every task has a name beside it and every shift is covered.',Trustworthiness:'screened, honest people only, and strict privacy for everyone served.',Faithfulness:'serving steadily through busy and quiet seasons.',Prayer:'opening and closing every service in prayer and praying for each other by name.',Giver:'giving time and talent freely and supporting the church with tithes and offerings.'})[c[0]]});
    cq.push(cqFor(c[0]));
  });
  const goals=[];
  m.values.forEach((v,i)=>{const j=v.indexOf(':'),head=j>0?v.slice(0,j):'Goal '+(i+1),rest=j>0?v.slice(j+1).trim():v;goals.push({h2:head},{p:rest},scrQ(S.values[i]));});
  const healthy=[{p:'A healthy ministry is known by its fruit. These are the qualities we look for in '+nm+'. Each one is tied to Scripture, so that the whole team can see why it matters and how to live it out.'}];
  m.fruit.forEach((f,i)=>{healthy.push({h2:'Healthy quality '+(i+1)},{p:f},scrQ(S.fruit[i]));});
  const dutyBlocks=[{h:'Sunday and service duties'},{p:'Every church adjusts this to its own schedule. Here is the usual flow, so every team member knows what to expect.'},...(k==='cined'||EARLY_MIN.includes(k)?[{p:ARRIVE_LINE(k)}]:[]),{pairs:m.flow},{h2:'Before every service or meeting'},{check:m.before},{h2:'After every service or meeting'},{check:m.after}];
  if(t.teach)dutyBlocks.push({h:'Teachings'},{p:t.teach});
  const culture=[{p:m.overview},{h:'What it is not'},{bul:m.isnot}].concat(dutyBlocks);
  if(k==='usher')culture.push({h:'Welcoming guests and new members'},{bul:['Greet every person warmly within the first minute.','Learn names and use them.','Walk first-time guests to where they need to go.','Invite them to return, and follow up within the week.']});
  culture.push({h:'Prayer in our ministry'},{bul:['Open and close every service or meeting in prayer.','Keep a prayer list and pray for each other by name.','Pray for the people we serve and for the community.','Celebrate answered prayers together.']},{h:'Helping people grow'},{p:'Culture is not only what we do. It is how people grow. As you serve, you will meet people at different points in their walk with God. Help each volunteer and member take the next step in their relationship with Jesus, in whatever area they are focused on, and let that lead you into the next section, on servanthood.'},{h:'Healthy ministry qualities'});
  culture.push(...healthy);
  const serveSub=(title,desc,items,spirit,practical)=>{const r=[{h:title},{p:desc}];items.forEach(x=>r.push(scrQ(x)));r.push({h2:'Spiritual application'},{bul:spirit},{h2:'Practical application'},{bul:practical});return r;};
  const serv=[{h:'What Jesus meant by servanthood'},{p:SERV_INTRO[0]},{p:SERV_INTRO[1]},{p:'In '+nm+', we serve with towels, not trophies: quietly, gladly, and without needing credit.'}];
  SERV_SCR.jesus.forEach(x=>serv.push(scrQ(x)));
  serv.push({h2:'Spiritual application'},{bul:['Ask Jesus to give you his heart for people before you begin to serve.','Check your motives: serve to bless people and honor God, not to be seen.','Thank God for the chance to serve, and trust him with the results.']},{h2:'Practical application'},{bul:['Look for the need no one else sees.','Say yes to the small tasks.','Serve people, not the spotlight.']});
  const rest=serveSub('Life led by Christ','Our service flows from our walk with Jesus. A leader who is not being led will not lead well. Keep a daily habit of prayer and Scripture, and let the Holy Spirit shape your character before your calendar.',SERV_SCR.life,['Remain in Jesus each day through prayer, Scripture, and worship.','Surrender your plans and let the Holy Spirit lead.','Confess sin quickly and receive forgiveness.'],['Set a daily time and place for prayer and the Word.','Worship and fellowship with the church every week.','Ask a trusted believer to check in on your walk with God.'])
   .concat(serveSub('Balance of ministry and life','God does not ask you to burn out. Protect your family, your health, your work, and your rest. A balanced servant lasts longer and serves better.',SERV_SCR.balance,['Come to Jesus with your weariness and receive his rest.','Trust that God can use others to do what you cannot.','Honor the Sabbath as a gift from God.'],['Say no kindly when you are overloaded.','Take a rest day every week and protect time with your family.','Ask for help and share the load with the team.']))
   .concat(serveSub('Prayer and fasting','Prayer is how we hear God and how we carry the people we serve. Set aside regular times to pray alone, and join the church when it prays and fasts together.',SERV_SCR.prayer,['Pray in private first, before you serve in public.','Let fasting turn your heart toward God and toward people in need.','Pray for your team, your leaders, and the people you serve by name.'],['Pray each morning before you serve.','Join the church’s times of prayer and fasting.','Ask others to pray for specific needs on your team.']));
  const serviceSafety=[{h:'Emergency procedures'},{pairs:[['Medical emergency','Call 911 first, then the pastor. Stay with the person and follow the trained first aider.'],['Fire or evacuation','Move everyone to the nearest safe exit and meet at the gathering point. Take attendance.'],['Severe weather','Move to the safest interior space and wait for the all-clear from a leader.'],['Missing person','Alert the leader right away, secure the exits, and follow the church’s search plan.'],['Unfamiliar person or threat','Stay calm, keep people together, and call the leader or 911.']]},{h:'Incident reports'},{num:['Make sure the person is safe and receives care.','Tell the ministry leader as soon as possible.','Write down what happened, when, where, and who was there.','Give the report to the pastor within 24 hours.','Contact the family or person the same day when needed.']}];
  const safety=[{h:'First aid'},{bul:['Know where the first aid kit, fire extinguisher, and exits are.','Keep a list of people trained in first aid and CPR.','Call 911 first in an emergency, then the pastor.','Record every injury, however small, and tell the parent or family the same day.']},{h:'Background checks and screening'},{p:'Everyone who serves completes the church’s application, references, and background check before serving. This protects the people we serve and the people who serve. See the Safeguarding & Compliance section.'},{h:'Safety practices for this ministry'},{check:m.safety}].concat(kidMin?serviceSafety:[]).concat([{h:'Rooms, equipment, and supplies'},{bul:['Keep exits clear and rooms tidy.','Report broken equipment right away and do not use it.','Lock rooms and storage when not in use.','Keep chemicals, tools, and medicine out of reach of children.']}]);
  return [
    {t:'Welcome Statement',lab:'Front matter',n:'',welcome:true,b:[{p:(packet?'Dear volunteer,':'Dear '+nm+' team member,')},{p:(packet?'Welcome to the Bushwick Family Ministries volunteer team.':'Welcome to the '+nm+' of Bushwick Family Ministries.')+' Thank you for saying yes to serve.'},{p:m.purpose},{p:'This '+kindLow+' puts in one place what our church believes, what '+(packet?'volunteering at BFM':'this ministry')+' is for, how we serve, and how we keep people safe. Read it slowly, ask questions, and keep it close. You are not here by accident. God has gifted you, the church needs you, and we will walk beside you.'},{scr:m.refs},{p:'In Christ’s service,'},{sign:'Ministry leader'},{sign:'Pastor'}]},
    {t:'BFM Foundation',n:'1',b:[{h:'Church statement'},{p:F.statement},{h:'Vision'},{p:F.vision},{quote:{ref:F.visionRef,text:F.visionText}},{h:'Mission'},{p:F.mission},{p:F.missionText},{h:'Core values'},{num:F.values},{h:'Our story and calling'},{p:'Bushwick Family Ministries is a church family in Brooklyn, New York, and a congregation of the Church of God of Prophecy. God has placed us in this neighborhood to love our neighbors, to teach the Word, and to equip every person to serve.'},{p:'Everything in this '+kindLow+' flows from that calling. When you serve in '+nm+', you are not just filling a position. You are taking part in what God is doing in our church and in our community.'}]},
    {t:nm+' Foundation',n:'2',b:[{h:'Ministry slogan'},{p:'“'+t.slogan+'”'},{h:'Ministry mission'},{p:m.purpose},scrQ(S.mission),{h:'Ministry vision'},{p:'We see '+nm+' as a place where every person is known, cared for, and growing in Christ, and where the whole team serves with joy and excellence.'},scrQ(S.vision),{h:'Ministry goals and core values'},{p:'These are the goals and core values we hold in '+nm+'. Each one is tied to Scripture, so you can see where it comes from and how to live it.'}].concat(goals).concat([{h:'Who we serve'},{p:m.who},{h:'Team structure and roles'},{p:'Every team member has a place. Knowing who does what keeps the work calm and the people cared for.'},{pairs:m.roles.map(r=>[r[0],r[1]])},{h:'Meeting rhythm'},{p:'A steady rhythm builds trust. This is the usual pattern for '+nm+'. Your leader will confirm the dates and times.'},{pairs:m.rhythm},{h:'Joining the team'},{num:['Pray about where God is calling you to serve.','Talk with the ministry leader and fill out the volunteer application.','Complete screening, references, and the background check.','Read this '+kindLow+' and complete the required training.','Serve alongside an experienced team member for a few weeks.','Meet with your leader to talk about how it is going.']}])},
    {t:'Standards & Expectations / Character Qualities',n:'3',b:[{h:'Standards and expectations'}].concat(expBlocks).concat([{h:'Conduct and appearance'},{bul:['Dress modestly and neatly, in a way that does not distract from the ministry.','Speak with kindness. Avoid gossip, crude humor, and complaining.','Keep your phone away from your hands while you are serving.','Be sober, honest, and respectful in public and in private.']},{h:'Attendance and punctuality'},{bul:[ARRIVE_LINE(k),'Tell your leader early if you cannot serve, and help find a replacement.','Attend team meetings and trainings.','Communicate about vacations and busy seasons ahead of time.']},{h:'Character qualities'}]).concat(cq)},
    {t:'Culture',n:'4',b:[{h:t.cult}].concat(culture)},
    {t:'Servanthood',n:'5',b:serv.concat(rest).concat([{h:'My personal growth plan'},{p:'Write down one goal for each area, and share it with your leader.'},{lines:4}])},
    {t:'Safety & Care',n:'6',b:safety},
    {t:'Safeguarding & Compliance',n:'7',keep:260,b:[{h:'Background checks'},{p:'Background checks tie directly to the Safety & Care section. They are renewed whenever leadership asks, following the pastor’s direction and the church’s insurance and legal requirements.'},{bul:['Complete the application and screening before you serve.','Provide references and follow up with them.','Renew your background checks whenever leadership asks.']},{h:'Keeping a safe environment for '+t.safeFor},{bul:['Follow the written check-in and pickup policy.','Keep two screened adults in every room, with doors open or windows visible.','Never be alone with a child or a single person you serve.','Use only approved spaces, vehicles, and activities.','Report any concern to the pastor right away and follow the church’s reporting policy and the law.']},{h:'Communication and safety'},{bul:['Use approved channels and include a second adult when messaging minors.','Never share private information or photos without permission.','Document concerns the same day.']},{h:'Training and renewal'},{p:'You will more than likely be in training or serving before your orientation is completed. Orientation continues while you serve, so keep going until every part is done.'},{check:['Complete orientation. It may still be in progress while you begin to train or serve.','Complete safeguarding and compliance training, and renew it every 6 months. Renewal covers first aid, safety, fire hazards, and safety training.','Renew your background checks whenever leadership asks.','Attend leadership and ministry trainings.','Attend team meetings.']},{h:'Record keeping'},{bul:['Keep attendance and incident records in the approved place.','Store private records securely and share them only with people who need them.','Never keep private records on personal devices or accounts.']},{h:'Reporting'},{p:m.report},{h2:'Monthly Reports'},{p:'Monthly reports should be completed and submitted on the last Sunday of the month, and no later than the 5th of the next month.'},{h2:'Quarterly Reports'},{p:'Quarterly meeting reports should be submitted at the end of the quarter. Example: if the quarter is January, February, and March, submit it by the end of March, or by the 5th of the next month.'},{h2:'Reporting guidelines'},{bul:['Submit monthly reports on the last Sunday of the month, and no later than the 5th of the next month. Submit quarterly reports at the end of the quarter, or by the 5th of the next month, so the pastor and the church can review them.','Write the report yourself, or with your assistant, and sign it before you turn it in.','Include attendance and participation, activities held, and how the ministry is growing.','Include income, spending, and any budget requests, with receipts attached.','List needs, prayer requests, and plans for the next quarter.','Report safety or safeguarding concerns right away, and do not wait for the next report.','If you cannot meet the deadline, tell the pastor early and give a new date.','Keep a copy of every report in the approved file.']},{h:'Review and approval'},{p:MANUAL_BASE_NOTE},{sign:'Ministry leader'},{sign:'Pastor'}]},
    {t:'Frequently Asked Questions',n:'8',b:[{h:'Questions about '+nm},{p:'These are the questions new team members ask most. If your question is not here, ask your ministry leader.'},{pairs:FAQ_M[k]}]}
  ];
}

/* ---------- screen preview (matches the PDF) ---------- */
const gcoverHtml=()=>'<div class="gcover"><img class="glogo" src="'+LOGO_B64+'" alt=""><div><p class="gbrand">Bushwick Family Ministries</p><p class="gchurch">Church of God of Prophecy</p></div></div>';
const ptabOpen='<table class="ptab"><tbody><tr><td>',ptabMid=(name)=>'</td></tr></tbody><tfoot><tr><td>'+gfootHtml(name)+'</td></tr></tfoot></table>';
const gfootHtml=name=>'<footer class="gfoot"><img src="'+LOGO_B64+'" alt=""><div><p>Bushwick Family Ministries &nbsp;|&nbsp; Church of God of Prophecy &nbsp;|&nbsp; '+esc(name)+'</p><p class="gcopy">'+esc(COPY_LINE)+'</p></div></footer>';
function blockHtml(x){
  const li=a=>a.map(i=>'<li>'+esc(i)+'</li>').join('');
  if(x.p!=null)return '<p class="gsum">'+esc(x.p)+'</p>';
  if(x.h)return '<h3>'+esc(x.h)+'</h3>';
  if(x.org&&x.org.chain)return '<div class="orgc">'+x.org.chain.map((n,i)=>(i?'<i class="org-v"></i>':'')+'<div class="org-b'+(i===0?' org-top':i===1?' org-lead':'')+'">'+esc(n)+'</div>').join('')+'</div>';
  if(x.org)return '<div class="orgc"><div class="org-b org-top">'+esc(x.org.top)+'</div><i class="org-v"></i><div class="org-b org-lead">'+esc(x.org.lead)+'</div><div class="org-team">'+x.org.team.map(n=>'<div class="org-b">'+esc(n)+'</div>').join('')+'</div></div>';
  if(x.h2)return '<h4 class="gh4">'+esc(x.h2)+'</h4>';
  if(x.bul)return '<ul class="gbul">'+li(x.bul)+'</ul>';
  if(x.num)return '<ol class="gkey">'+li(x.num)+'</ol>';
  if(x.check)return '<ul class="gprac">'+li(x.check)+'</ul>';
  if(x.pairs)return '<ul class="gbul gpb">'+x.pairs.map(r=>'<li><b>'+esc(r[0])+(/[?.:!]$/.test(r[0])?'':':')+'</b> '+esc(r[1])+'</li>').join('')+'</ul>';
  if(x.quote)return '<blockquote class="gquote"><span>Scripture</span><b>'+esc(x.quote.ref)+'</b><p>'+esc(x.quote.text)+'</p>'+(x.quote.align?'<div class="galign"><span>How it connects</span><p>'+esc(x.quote.align)+'</p></div>':'')+'</blockquote>';
  if(x.mods)return '<ul class="gmods">'+x.mods.map(i=>'<li><span>'+esc(i)+'</span><i>Date completed</i></li>').join('')+'</ul>';
  if(x.fields)return '<div class="gfields">'+x.fields.map(r=>'<div class="gfrow'+(r.length>1?' two':'')+'">'+r.map(f=>'<div><i></i><span>'+esc(f)+'</span></div>').join('')+'</div>').join('')+'</div>';
  if(x.note)return '<div class="gnote"><b>'+esc(x.note.t)+'</b><ul class="gbul gpb">'+x.note.items.map(r=>'<li><b>'+esc(r[0])+':</b> '+esc(r[1])+'</li>').join('')+'</ul></div>';
  if(x.scr)return '<div class="gscr"><span>Scripture</span><b>'+x.scr.map(esc).join('&nbsp;&nbsp;|&nbsp;&nbsp;')+'</b></div>';
  if(x.lines)return '<div class="gl">'+Array(x.lines).fill('<i></i>').join('')+'</div>';
  if(x.sign)return '<div class="gsign"><span>'+esc(x.sign)+'</span><span>Date</span></div>';
  return '';
}
const groupBlocks=b=>{const gs=[];let cur=null;b.forEach(x=>{if(x.h||!cur){cur=[x];gs.push(cur);}else cur.push(x);});return gs;};
function manualView(k){
  const sp={f:manName(k)},m=MANUALS[k],c=manualCourse(k),kd=manKind(k),pk=manIsPacket(k);
  if(!MTPL[k]||!m||!c)return home();
  const ss=manualDoc(k);
  const parent=pk?{t:'Foundations of Leadership',go:'track:1'}:MTPL[k].lock==='A'?{t:'Track A',go:'track:A'}:{t:'Ministry Specializations',go:'track:3'};
  return crumbs([{t:'Campus',go:'home'},parent].concat(pk?[]:[{t:sp.f,go:'course:'+c.id}]).concat([{t:kd}]))+
  '<div class="card noprint guidebar" style="margin-bottom:20px"><div><b>'+kd+'</b><p class="note">This preview matches the PDF. If the print window does not open here, download the PDF and print it from your PDF viewer.</p></div><div class="btnrow"><button class="btn sm" data-act="pdf-manual" data-k="'+k+'">'+ic('down')+'Download PDF</button><button class="btn ghost sm" data-act="print-manual" data-k="'+k+'">Print</button><button class="btn ghost sm" data-go="'+(pk?'track:1':'course:'+c.id)+'">'+(pk?'Back to Track 1':'Back to the course')+'</button></div></div>'+
  '<article class="guide gman">'+ptabOpen+
  '<section class="mcover"><div class="mc-band"><img class="mc-logo" src="'+LOGO_B64+'" alt=""><p class="mc-church">Bushwick Family Ministries</p><p class="mc-sub">Church of God of Prophecy</p></div><p class="mc-kind">'+esc(kd)+'</p><h1 class="mc-name">'+esc(MTPL[k].cover||sp.f)+'</h1><p class="mc-tag">'+(pk?'A training packet for volunteers':'A working manual for leaders and team members')+'</p><p class="mc-acad">BFM Academy</p></section>'+
  (()=>{const secH=ss.map((s,i)=>'<section class="gsec'+(s.welcome?' welcome':'')+(i>0&&ss[i-1].welcome?' afterw':'')+'"><h2>'+esc(s.t)+'</h2>'+groupBlocks(s.b).map(g=>'<div class="gblk">'+g.map(blockHtml).join('')+'</div>').join('')+'</section>');
  const tocH='<section class="mtoc"><p class="glab">Contents</p><h2>Table of Contents</h2><ol class="mtoc-l">'+ss.map(s=>'<li><span class="mt-s">'+(s.n?'<b>'+s.n+'</b> ':'')+esc(s.t)+'</span>'+(s.b.some(x=>x.h)?'<ol>'+s.b.filter(x=>x.h).map(x=>'<li>'+(x.no?'<b class="gno">'+x.no+'</b>':'')+'<span>'+esc(x.h)+'</span></li>').join('')+'</ol>':'')+'</li>').join('')+'</ol></section>';
  const wf=pk&&ss[0].welcome;
  return (wf?'<div class="gpage">'+secH[0]+'</div>'+tocH+'<div class="gpage">'+secH.slice(1).join('')+'</div>':tocH+'<div class="gpage">'+secH.join('')+'</div>')+ptabMid(sp.f)+'</article>';})();
}

/* ---------- PDF footer shared by study guides and manuals ---------- */
function pdfFooter(doc,name,from){
  const W=612,ML=66,GR=[105,105,105];
  const n=doc.getNumberOfPages();
  for(let i=from||1;i<=n;i++){
    doc.setPage(i);
    doc.setDrawColor(200,200,200);doc.setLineWidth(0.6);doc.line(ML,742,W-ML,742);
    try{doc.addImage(LOGO_B64,'PNG',ML,747,24,24,'bfmlogo');}catch(e){}
    doc.setFont('helvetica','normal');doc.setFontSize(7.5);doc.setTextColor(GR[0],GR[1],GR[2]);
    doc.text(pt('Bushwick Family Ministries  |  Church of God of Prophecy  |  '+name),ML+32,756);
    doc.setFontSize(7);doc.text(pt(COPY_LINE),ML+32,767);
    doc.setFontSize(7.5);doc.text('Page '+i+' of '+n,W-ML,756,{align:'right'});
  }
}

/* ---------- PDF ---------- */
function buildManual(doc,k){
  const sp={f:manName(k)},m=MANUALS[k],ss=manualDoc(k),kd=manKind(k),pk=manIsPacket(k);
  const W=612,ML=66,CW=W-2*ML,TOP=86,BOT=722;
  const mid=W/2;
  const GOLD=[198,167,94],GD=[122,97,37],INK=[28,28,28],GR=[105,105,105],LT=[251,247,236],RULE=[200,200,200];
  let y=0,pg=1;const start={};
  const F=(f,st,sz,col)=>{doc.setFont(f,st);doc.setFontSize(sz);doc.setTextColor(col[0],col[1],col[2]);};
  const caps=(s,x,yy,o)=>doc.text(pt(s).toUpperCase(),x,yy,Object.assign({charSpace:1.1},o||{}));
  const runHead=()=>{
    F('helvetica','bold',7.5,GR);caps('BFM Academy  |  '+kd,ML,46);
    F('helvetica','normal',7.5,GR);doc.text(pt(sp.f),W-ML,46,{align:'right'});
    doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);doc.setLineWidth(1);doc.line(ML,54,W-ML,54);
  };
  const newPage=()=>{doc.addPage();pg++;runHead();y=TOP;};
  const need=h=>{if(dry)return;if(y+h>BOT)newPage();};
  const wrap=(s,w,f,st,sz)=>{doc.setFont(f,st);doc.setFontSize(sz);return doc.splitTextToSize(pt(s),w);};
  const para=(s,o)=>{
    o=Object.assign({f:'times',st:'normal',sz:11.5,col:INK,lh:1.62,x:ML,w:CW,after:12},o||{});
    const ln=wrap(s,o.w,o.f,o.st,o.sz);F(o.f,o.st,o.sz,o.col);
    if(ln.length*o.sz*o.lh<BOT-TOP-40)need(ln.length*o.sz*o.lh);
    ln.forEach(l=>{need(o.sz*o.lh);F(o.f,o.st,o.sz,o.col);doc.text(l,o.x,y);y+=o.sz*o.lh;});y+=o.after;
  };
  const h3=(s,ex)=>{need(30+(ex||24));y+=6;F('helvetica','bold',8.5,GD);caps(s,ML,y);doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);doc.setLineWidth(0.8);doc.line(ML,y+5,W-ML,y+5);y+=20;};
  const rules=n=>{for(let i=0;i<n;i++){need(26);doc.setDrawColor(RULE[0],RULE[1],RULE[2]);doc.setLineWidth(0.6);doc.line(ML,y,W-ML,y);y+=26;}y+=4;};
  const numbered=list=>list.forEach((x,i)=>{
    const ln=wrap(x,CW-26,'times','normal',11.5);need(ln.length*17.5+5);
    F('helvetica','bold',10,GD);doc.text(String(i+1),ML+6,y);
    F('times','normal',11.5,INK);ln.forEach(l=>{doc.text(l,ML+26,y);y+=17.5;});y+=5;
  });
  const bullets=list=>list.forEach(x=>{
    const ln=wrap(x,CW-26,'times','normal',11.5);need(ln.length*17.5+5);
    doc.setFillColor(GD[0],GD[1],GD[2]);doc.circle(ML+8,y-3.5,1.7,'F');
    F('times','normal',11.5,INK);ln.forEach(l=>{doc.text(l,ML+26,y);y+=17.5;});y+=5;
  });
  const checks=list=>list.forEach(x=>{
    const ln=wrap(x,CW-26,'times','normal',11.5);need(ln.length*17.5+5);
    doc.setDrawColor(GD[0],GD[1],GD[2]);doc.setLineWidth(0.9);doc.rect(ML+4,y-8.5,9,9);
    F('times','normal',11.5,INK);ln.forEach(l=>{doc.text(l,ML+26,y);y+=17.5;});y+=5;
  });
  const dot=()=>{doc.setFillColor(GD[0],GD[1],GD[2]);doc.circle(ML+8,y-3.5,1.7,'F');};
  const pairBullet=(lead,text,x0,w)=>{
    const sep=/[?:.]$/.test(lead)?' ':': ',ls=pt(lead)+(text?sep:'');
    doc.setFont('helvetica','bold');doc.setFontSize(10.5);const lw=doc.getTextWidth(ls);
    doc.setFont('times','normal');doc.setFontSize(11.5);const tw=text?doc.getTextWidth(pt(text)):0;
    if(!text||lw+tw<=w-26){need(23);dot();F('helvetica','bold',10.5,INK);doc.text(pt(lead),x0+26,y);
      if(text){F('times','normal',11.5,INK);doc.text(pt(text),x0+26+lw,y);}y+=22.5;return;}
    const ll=wrap(lead,w-26,'helvetica','bold',10.5),tl=wrap(text,w-26,'times','normal',11.5);
    need(ll.length*15+tl.length*17.5+8);dot();F('helvetica','bold',10.5,INK);ll.forEach(l=>{doc.text(l,x0+26,y);y+=15;});
    F('times','normal',11.5,INK);tl.forEach(l=>{doc.text(l,x0+26,y);y+=17.5;});y+=7;
  };
  const pairs=list=>list.forEach(r=>pairBullet(r[0],r[1],ML,CW));
  const quote=q=>{
    const ls=wrap(q.text,CW-44,'times','italic',11.5),al=q.align?wrap(q.align,CW-44,'times','normal',11):[],h=16+ls.length*17+22+8+(al.length?24+al.length*15:0);need(h);
    doc.setFillColor(LT[0],LT[1],LT[2]);doc.rect(ML,y-12,CW,h,'F');doc.setFillColor(GOLD[0],GOLD[1],GOLD[2]);doc.rect(ML,y-12,3.5,h,'F');
    F('helvetica','bold',7.5,GD);caps(q.ref,ML+16,y+2);F('times','italic',11.5,INK);let yy=y+20;ls.forEach(l=>{doc.text(l,ML+16,yy);yy+=17;});if(al.length){yy+=6;F('helvetica','bold',7.5,GD);caps('How it connects',ML+16,yy);yy+=15;F('times','normal',11,INK);al.forEach(l=>{doc.text(l,ML+16,yy);yy+=15;});}y+=h+8;
  };
  const mods=list=>{
    need(60);F('helvetica','bold',7.5,GR);caps('Module',ML+26,y);caps('Date completed',W-ML-92,y);y+=22;
    list.forEach(s=>{const ln=wrap(s,CW-26-110,'times','normal',11.5),h=Math.max(26,ln.length*16+10);need(h);
      doc.setDrawColor(GD[0],GD[1],GD[2]);doc.setLineWidth(0.9);doc.rect(ML+4,y-8.5,9,9);
      F('times','normal',11.5,INK);ln.forEach((l,j)=>doc.text(l,ML+26,y+j*16));
      doc.setDrawColor(RULE[0],RULE[1],RULE[2]);doc.setLineWidth(0.7);doc.line(W-ML-92,y+1,W-ML,y+1);y+=h;});
    y+=4;
  };
  const fields=rows=>{rows.forEach(r=>{
    need(44);const cw=(CW-(r.length-1)*26)/r.length;
    r.forEach((lb,j)=>{const x=ML+j*(cw+26);doc.setDrawColor(INK[0],INK[1],INK[2]);doc.setLineWidth(0.7);doc.line(x,y+12,x+cw,y+12);F('helvetica','bold',7.5,GR);caps(lb,x,y+25);});
    y+=44;
  });y+=12;};
  const note=n=>{
    const hh=list=>{const save=y;let h=0;return h;};
    let h=16+22;n.items.forEach(r=>{const t=pt(r[0])+(r[1]?': '+pt(r[1]):'');doc.setFont('times','normal');doc.setFontSize(11.5);h+=wrap(t,CW-60,'times','normal',11.5).length*17.5+6;});h+=6;
    need(h);doc.setFillColor(LT[0],LT[1],LT[2]);doc.rect(ML,y-12,CW,h,'F');doc.setFillColor(GOLD[0],GOLD[1],GOLD[2]);doc.rect(ML,y-12,3.5,h,'F');
    F('helvetica','bold',8,GD);caps(n.t,ML+16,y+2);y+=24;
    n.items.forEach(r=>{const lead=pt(r[0]),txt=r[1]||'';const sep=/[?:.]$/.test(lead)?' ':': ';
      doc.setFont('helvetica','bold');doc.setFontSize(10.5);const lw=doc.getTextWidth(lead+(txt?sep:''));
      doc.setFillColor(GD[0],GD[1],GD[2]);doc.circle(ML+20,y-3.5,1.7,'F');
      const ln=wrap(txt,CW-60-lw,'times','normal',11.5);
      F('helvetica','bold',10.5,INK);doc.text(lead+(txt?sep:''),ML+32,y);
      if(!ln.length){y+=23.5;return;}
      // first text line beside the lead, rest below
      F('times','normal',11.5,INK);
      const first=doc.splitTextToSize(pt(txt),CW-60-lw)[0],rest=pt(txt).slice(first.length).trim();
      doc.text(first,ML+32+lw,y);y+=17.5;
      if(rest){wrap(rest,CW-60,'times','normal',11.5).forEach(l=>{doc.text(l,ML+32,y);y+=17.5;});}
      y+=6;});
    y+=14;
  };
  const scripture=refs=>{
    const ls=wrap(refs.join('   |   '),CW-28,'helvetica','bold',10);
    const h=16+ls.length*14.5+16;need(h);
    doc.setFillColor(LT[0],LT[1],LT[2]);doc.rect(ML,y-12,CW,h,'F');doc.setFillColor(GOLD[0],GOLD[1],GOLD[2]);doc.rect(ML,y-12,3.5,h,'F');
    F('helvetica','bold',7.5,GD);caps('Scripture',ML+14,y+2);F('helvetica','bold',10,INK);let yy=y+17;ls.forEach(r=>{doc.text(r,ML+14,yy);yy+=14.5;});y+=h+6;
  };
  const sign=label=>{need(46);doc.setDrawColor(RULE[0],RULE[1],RULE[2]);doc.setLineWidth(0.7);y+=14;doc.line(ML,y,ML+240,y);doc.line(ML+270,y,W-ML,y);y+=13;F('helvetica','bold',7.5,GR);caps(label,ML,y);caps('Date',ML+270,y);y+=24;};
  const title=(label,s,sz)=>{
    const ln=wrap(s,CW,'helvetica','bold',sz);need(24+ln.length*sz*1.2);
    F('helvetica','bold',8.5,GD);caps(label,ML,y);y+=sz+4;
    F('helvetica','bold',sz,[17,17,17]);ln.forEach(l=>{doc.text(l,ML,y);y+=sz*1.2;});y+=8;
  };
  doc.setProperties({title:kd+': '+sp.f,author:'BFM Academy',subject:'Bushwick Family Ministries, Church of God of Prophecy: '+sp.f});
  const cs=(txt,yy,gap)=>{const t=pt(txt).toUpperCase();const w=doc.getTextWidth(t)+gap*(t.length-1);doc.text(t,mid-w/2,yy,{charSpace:gap});};
  const subs=[];let curSec=0,dry=false;
  const h3n=(s,no)=>{need(80);y+=14;if(!dry)subs[curSec].push({h:s,no:no,pg:pg});F('helvetica','bold',9,GD);caps(s,ML,y);doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);doc.setLineWidth(0.8);doc.line(ML,y+6,W-ML,y+6);y+=26;};
  const orgChain=o=>{
    const bh=34,gp=18,n=o.chain.length,H=n*bh+(n-1)*gp+14;need(H);
    o.chain.forEach((nm2,i)=>{const yt=y-4+i*(bh+gp),fill=i===0?[10,10,10]:i===1?[198,167,94]:[255,255,255],tc=i===0?[255,255,255]:[17,17,17],w=180+Math.max(0,1-i)*0;
      if(i){doc.setDrawColor(GD[0],GD[1],GD[2]);doc.setLineWidth(1.2);doc.line(mid,yt-gp,mid,yt);}
      doc.setFillColor(fill[0],fill[1],fill[2]);doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);doc.setLineWidth(1);doc.roundedRect(mid-100,yt,200,bh,4,4,'FD');
      F('helvetica','bold',10,tc);doc.text(pt(nm2),mid,yt+bh/2+3.5,{align:'center'});});
    y+=H;
  };
  const orgChart=o=>{if(o.chain)return orgChain(o);
    const bw=(CW-36)/2,bh=34,rows=Math.ceil(o.team.length/2),H=bh+18+bh+16+rows*(bh+14)+12;need(H);
    const box=(x,yt,w,txt,fill,tc)=>{doc.setFillColor(fill[0],fill[1],fill[2]);doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);doc.setLineWidth(1);doc.roundedRect(x,yt,w,bh,4,4,'FD');F('helvetica','bold',9.5,tc);const ls=doc.splitTextToSize(pt(txt),w-14);const t0=yt+bh/2-(ls.length-1)*5.5+3.2;ls.forEach((l,j)=>doc.text(l,x+w/2,t0+j*11,{align:'center'}));};
    let yt=y-4;box(mid-85,yt,170,o.top,[10,10,10],[255,255,255]);
    const yl=yt+bh+18;doc.setDrawColor(GD[0],GD[1],GD[2]);doc.setLineWidth(1.2);doc.line(mid,yt+bh,mid,yl);
    box(mid-110,yl,220,o.lead,[198,167,94],[17,17,17]);
    const y0=yl+bh+16,yEnd=y0+(rows-1)*(bh+14)+bh/2;
    doc.setDrawColor(GD[0],GD[1],GD[2]);doc.setLineWidth(1.2);if(rows)doc.line(mid,yl+bh,mid,yEnd);
    o.team.forEach((n,j)=>{const r=Math.floor(j/2),left=j%2===0,yb=y0+r*(bh+14);
      doc.setDrawColor(GD[0],GD[1],GD[2]);doc.setLineWidth(1.2);doc.line(mid,yb+bh/2,left?mid-18:mid+18,yb+bh/2);
      box(left?ML:mid+18,yb,bw,n,[255,255,255],[17,17,17]);});
    y=y0+rows*(bh+14)+10;
  };
  const h4=s=>{need(54);y+=10;doc.setFillColor(GD[0],GD[1],GD[2]);doc.rect(ML,y-7,3,9,'F');F('helvetica','bold',10.5,INK);doc.text(pt(s),ML+10,y);y+=17;};
  /* page 1: cover */
  doc.setFillColor(10,10,10);doc.rect(0,0,W,300,'F');
  doc.setFillColor(GOLD[0],GOLD[1],GOLD[2]);doc.rect(0,300,W,5,'F');
  try{doc.addImage(LOGO_B64,'PNG',mid-52,46,104,104,'bfmlogo');}catch(e){}
  F('helvetica','bold',24,[255,255,255]);cs('Bushwick Family Ministries',198,1.6);
  F('helvetica','normal',11,GOLD);cs('Church of God of Prophecy',224,3);
  doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);doc.setLineWidth(0.8);doc.line(mid-40,248,mid+40,248);
  F('helvetica','normal',9,[200,200,200]);cs('Reach. Teach. Equip.',272,3);
  y=392;F('helvetica','bold',12,GD);cs(kd,y,3);y+=16;
  doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);doc.setLineWidth(1.5);doc.line(mid-30,y,mid+30,y);
  const cname=MTPL[k].cover||sp.f;let fs=32,cl=[];
  for(;fs>=24;fs-=2){doc.setFont('helvetica','bold');doc.setFontSize(fs);cl=doc.splitTextToSize(pt(cname),CW);
    if(cl.length<=2&&cname.split(' ').every(w=>doc.getTextWidth(pt(w))<=CW))break;}
  y+=22+fs*0.8;F('helvetica','bold',fs,[17,17,17]);cl.forEach(l=>{doc.text(l,mid,y,{align:'center'});y+=fs*1.15;});
  y+=6;F('times','italic',13,GR);doc.text(pk?'A training packet for volunteers':'A working manual for leaders and team members',mid,y,{align:'center'});
  F('helvetica','bold',9,GD);cs('BFM Academy',690,3);
  F('helvetica','normal',7.5,GR);doc.text(pt(COPY_LINE),mid,708,{align:'center'});
  /* page 2: table of contents (filled in after the pages are known) */
  let tocY=0,tocPage=2;const welcomeFirst=pk&&ss[0].welcome;
  const tocPageMake=()=>{doc.addPage();pg++;runHead();y=TOP;title('Contents','Table of Contents',22);tocY=y;tocPage=pg;};
  if(!welcomeFirst)tocPageMake();
  const drawBlock=x=>{
    if(x.p!=null)para(x.p);
    else if(x.h)h3n(x.h,x.no);
    else if(x.h2)h4(x.h2);
    else if(x.pagebreak){if(!dry&&y>TOP+5)newPage();}
    else if(x.keep)need(x.keep);
    else if(x.org)orgChart(x.org);
    else if(x.bul)bullets(x.bul);
    else if(x.num)numbered(x.num);
    else if(x.check)checks(x.check);
    else if(x.pairs)pairs(x.pairs);
    else if(x.scr)scripture(x.scr);
    else if(x.quote)quote(x.quote);
    else if(x.mods)mods(x.mods);
    else if(x.fields)fields(x.fields);
    else if(x.note)note(x.note);
    else if(x.lines)rules(x.lines);
    else if(x.sign)sign(x.sign);
  };
  const dryRun=fn=>{
    const y0=y,keep={};['text','rect','line','circle','roundedRect','addImage'].forEach(m=>{keep[m]=doc[m];doc[m]=()=>doc;});
    dry=true;try{fn();}finally{dry=false;Object.keys(keep).forEach(m=>{doc[m]=keep[m];});}
    const h=y-y0;y=y0;return h;
  };
  const groupsOf=b=>{const gs=[];let cur=null;b.forEach(x=>{if(x.keep)return;if(x.h2&&cur&&cur.length===1&&cur[0].h){cur.push(x);}else if(x.h||x.h2||!cur){cur=[x];gs.push(cur);}else cur.push(x);});return gs;};
  /* page 3: welcome statement, then the sections flow one after another */
  ss.forEach((s,i)=>{
    if(i===0||ss[i-1].welcome||s.welcome){doc.addPage();pg++;runHead();y=TOP;}else{y+=30;const g0=groupsOf(s.b)[0]||[],h0=dryRun(()=>g0.forEach(drawBlock));
      if(y+90+Math.min(h0,300)>BOT)newPage();}
    start[i]=pg;curSec=i;subs[i]=[];
    title('',s.t,28);
    doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);doc.setLineWidth(1.5);doc.line(ML,y-6,ML+70,y-6);y+=22;
    groupsOf(s.b).forEach(g=>{
      const h=dryRun(()=>g.forEach(drawBlock));
      if(h>BOT-y&&h<=BOT-TOP-24)newPage();
      g.forEach(drawBlock);
    });
    if(welcomeFirst&&i===0)tocPageMake();
  });
  doc.setPage(tocPage);
  const nSec=ss.length,secH=24,avail=BOT-tocY;
  const oneCol=subs.reduce((a,l)=>a+l.length,0)<=16;const rowsOf=l=>oneCol?l.length:Math.ceil(l.length/2);
  const nRows=subs.reduce((a,l)=>a+rowsOf(l),0);
  const subH=Math.max(9.6,Math.min(15,(avail-nSec*(secH+12))/Math.max(1,nRows))),fz=Math.min(10.5,subH-2.2);
  const leader=(x1,x2,yy)=>{F('times','normal',9,[170,170,170]);for(let x=x1;x<x2;x+=4.2)doc.text('.',x,yy);};
  const colW=oneCol?CW-28:(CW-28-20)/2;
  let ty=tocY;
  ss.forEach((s,i)=>{
    ty+=6;
    if(s.n){doc.setFillColor(GD[0],GD[1],GD[2]);doc.roundedRect(ML,ty-12,18,18,3,3,'F');F('helvetica','bold',10.5,[255,255,255]);doc.text(String(s.n).replace(/\.$/,''),ML+9,ty+0.5,{align:'center'});}
    F('helvetica','bold',12.5,INK);const tw=doc.splitTextToSize(pt(s.t),CW-90)[0],x0=ML+(s.n?28:0);doc.text(tw,x0,ty);
    F('helvetica','bold',11,INK);const pgs=String(start[i]);doc.text(pgs,W-ML,ty,{align:'right'});
    F('helvetica','bold',12.5,INK);leader(x0+doc.getTextWidth(tw)+8,W-ML-doc.getTextWidth(pgs)-12,ty);
    doc.setDrawColor(GOLD[0],GOLD[1],GOLD[2]);doc.setLineWidth(0.6);doc.line(ML,ty+6,W-ML,ty+6);
    ty+=secH-4;
    const R=rowsOf(subs[i]);
    subs[i].forEach((x,j)=>{
      const col=(!oneCol&&j>=R)?1:0,r=col?j-R:j,cx=ML+28+col*(colW+20),yy=ty+r*subH;
      F('helvetica','bold',8,GD);if(x.no)doc.text(x.no,cx,yy);
      F('times','normal',fz,INK);const nm=doc.splitTextToSize(pt(x.h),colW-40)[0],nx=cx+24;doc.text(nm,nx,yy);
      F('times','normal',fz,GR);const p2=String(x.pg);doc.text(p2,cx+colW,yy,{align:'right'});
      leader(nx+doc.getTextWidth(nm)+5,cx+colW-doc.getTextWidth(p2)-8,yy);
    });
    ty+=R*subH+6;
  });
  pdfFooter(doc,sp.f,2);
}
async function makeManualPdf(k){
  const c=manualCourse(k);if(!c||!MANUALS[k]||manLock(k))return;
  const doc=newDoc('portrait');
  if(!doc){toast('The PDF tool did not load. Check your connection and try again.');return;}
  try{buildManual(doc,k);await saveFile((manIsPacket(k)?'BFM-Volunteer-Packet-':'BFM-Ministry-Manual-')+k+'.pdf',doc.output('blob'));}
  catch(e){toast('Could not build the Ministry Manual.');}
}
function manualCard(c){
  return manualsOf(c).filter(k=>MANUALS[k]&&!manLock(k)).map(k=>packetRow(k)+manualCardOne(k)).join('');
}
function packetRow(k){
  const p='p-'+k;if(!MTPL[p])return '';
  return '<div class="card guidebar manualbar"><div><b>'+esc(manName(p))+'</b><p class="note">A printed packet for every volunteer on the team: foundation, roles, FAQs, and a volunteer agreement.</p></div><div class="btnrow"><button class="btn sm" data-go="manual:'+p+'">'+ic('book')+'View packet</button><button class="btn ghost sm" data-act="pdf-manual" data-k="'+p+'">'+ic('down')+'Download PDF</button><button class="btn ghost sm" data-act="print-manual" data-k="'+p+'">Print</button></div></div>';
}
function manualCardOne(k){
  return [k].map(k=>{
    const pk=manIsPacket(k),kd=manKind(k);
    return '<div class="card guidebar manualbar"><div><b>'+esc(manName(k))+(pk?'':' Manual')+'</b><p class="note">'+'A separate manual in the BFM template: cover, contents, welcome statement, and seven sections from the BFM foundation to safeguarding. Open it any time.'+'</p></div><div class="btnrow"><button class="btn sm" data-go="manual:'+k+'">'+ic('book')+'Open '+(pk?'Packet':'Manual')+'</button><button class="btn ghost sm" data-act="pdf-manual" data-k="'+k+'">'+ic('down')+'Download PDF</button><button class="btn ghost sm" data-act="print-manual" data-k="'+k+'">Print</button></div></div>';
  }).join('');
}
function packetList(){
  return '<ul class="reslist">'+PACKET_KEYS.filter(k=>MTPL[k].general).map(k=>'<li><div><b>'+esc(manName(k))+'</b><small>'+(MTPL[k].general?'For every volunteer, whatever the ministry':'Foundation, roles, FAQs, and volunteer agreement')+'</small></div><div class="btnrow"><button class="btn ghost sm" data-act="pdf-manual" data-k="'+k+'">'+ic('down')+'PDF</button><button class="btn ghost sm" data-act="print-manual" data-k="'+k+'">Print</button><button class="btn ghost sm" data-go="manual:'+k+'">View</button></div></li>').join('')+'</ul>';
}
function extraManuals(){
  /* manuals that do not belong to one Track 3 course: shown on the Track 3 page */
  return MKEYS.filter(k=>MTPL[k].lock==='t2').map(k=>{
    const lm=manLock(k);
    return '<div class="card guidebar manualbar"><div><b>'+esc(manName(k))+' Manual</b><p class="note">'+(lm?esc(lm)+'.':'This ministry is not a Track 3 course. Its manual opens with Track 3 for anyone who will serve alongside the pastor.')+'</p></div>'+(lm?'':'<div class="btnrow"><button class="btn sm" data-go="manual:'+k+'">'+ic('book')+'Open Manual</button><button class="btn ghost sm" data-act="pdf-manual" data-k="'+k+'">'+ic('down')+'Download PDF</button></div>')+'</div>';
  }).join('');
}
function manualAct(k,d){
  if(k==='pdf-manual'){makeManualPdf(d.k);return true;}
  if(k==='print-manual'){printNow(()=>manualView(d.k));return true;}
  return false;
}

/* ================= Academy Director: teacher / admin pages ================= */
let RECTAB='transcripts',RECQ='';
const tview=(eye,title,lede,body)=>'<div class="adm'+(ADMENTER?' adm-enter':'')+'"><header class="admtop"><div class="admtop-l"><p class="eyebrow lab">'+eye+'</p><h1>'+title+'</h1>'+(lede?'<p class="lede">'+lede+'</p>':'')+'</div><div class="admtop-r">'+syncChip()+'</div></header>'+(ADMENTER=false,'')+body+'</div>';
const stu=(r,cid)=>!!((r.d.prog||{})[cid]!==undefined||(r.d.comp||{})[cid]);
function trackStats(tid){
  const R=roster(),cs=COURSES.filter(c=>c.track===tid);
  const started=R.filter(r=>cs.some(c=>stu(r,c.id))).length;
  const done=R.filter(r=>cs.length&&cs.every(c=>(r.d.comp||{})[c.id])).length;
  const avg=R.length&&cs.length?Math.round(R.reduce((a,r)=>a+cs.filter(c=>(r.d.comp||{})[c.id]).length/cs.length,0)/R.length*100):0;
  return {n:cs.length,started,done,avg};
}
const aq=(go,icon,t,p,n)=>'<button class="aqt" data-go="'+go+'"><span class="avt">'+ic(icon)+'</span><span><b>'+t+'</b><small>'+p+'</small></span>'+(n?'<span class="cnt">'+n+'</span>':'')+'</button>';

/* Campus AD */
function adminCampus(){
  const R=roster(),req=pendingReqs().length,work=workItems().filter(i=>i.need).length;
  let nMsg=0;R.forEach(r=>{const o_=outOf(r.uid),rp=o_.replies||{},mh=o_.mhide||{};(r.d.msgs||[]).forEach(m=>{if(!rp[m.id]&&!mh[m.id])nMsg++;});});
  const active=R.filter(r=>Object.keys(r.d.prog||{}).length).length;
  const stats='<div class="astats">'+
    [['admin:students','users',R.length,'students enrolled'],['admin:activity','chart',active,'learning now'],['admin:review','clip',work,'projects to grade',work],['admin:requests','inbox',req,'requests waiting',req]].map(x=>'<button class="astat'+(x[4]?' hot':'')+'" data-go="'+x[0]+'"><span class="astat-i">'+ic(x[1])+'</span><b>'+x[2]+'</b><span>'+x[3]+'</span></button>').join('')+'</div>';
  const tools='<div class="sec-h" style="margin-top:30px"><h2>Academy Director tools</h2></div><div class="aqgrid">'+
    aq('admin:review','clip','Review &amp; grade','Read answers and projects, enter grades',work)+
    aq('admin:students','users','Students','Profiles, ministry calling and permissions')+
    aq('admin:requests','inbox','Requests','Skip-a-course and Track A permissions',req)+
    aq('admin:messages','chat','Messages','Questions sent from the help chat',nMsg)+
    aq('admin:announcements','mega','Announcements','Post news and preview it first')+
    aq('admin:events','cal','Events','Add seminars, services and deadlines')+'</div>';
  const rows=TRACKS.map(t=>{const s=trackStats(t.id);return '<button class="trow" style="'+tc(t.id)+'" data-go="track:'+t.id+'"><span class="trow-n"><span class="eyebrow lab">'+t.label+(t.optional?' · Optional':'')+'</span><b>'+esc(t.title)+'</b></span><span class="trow-s"><span><b>'+s.started+'</b> started</span><span><b>'+s.done+'</b> finished</span></span><span class="trow-b">'+bar(s.avg)+'<small>'+s.avg+'% average completion</small></span></button>';}).join('');
  const up=upcoming().slice(0,3);
  const evs=up.length?'<ul class="alist">'+up.map(e=>'<li class="arow"><div class="arow-m"><span class="avt">'+ic('cal')+'</span><div><b>'+esc(e.title)+'</b><small>'+esc(fmtDate(e.date))+(e.time?' · '+esc(e.time):'')+'</small></div></div></li>').join('')+'</ul>':empty('cal','No events coming up','Add one from Events.');
  const live=PUB.announcements.filter(a=>!(a.exp&&a.exp<isoToday())).slice(0,3);
  const ann=live.length?'<ul class="alist">'+live.map(a=>'<li class="arow"><div class="arow-m"><span class="avt">'+ic(a.pin?'pin':'mega')+'</span><div><b>'+esc(a.title)+'</b><small>'+esc(agoTxt(a.at||0))+'</small></div></div></li>').join('')+'</ul>':empty('mega','Nothing live','Post an announcement for your students.');
  return tview('Campus AD',greet()+', Director.','Your classroom at a glance: who is learning, what needs grading, and where each track stands.',
    stats+tools+
    '<div class="sec-h" style="margin-top:30px"><h2>Your classes and tracks</h2><span class="meta">Open one to see its courses.</span></div><div class="trows">'+rows+'</div>'+
    '<div class="agrid" style="margin-top:28px"><section class="acard"><div class="acard-h"><h2>Live announcements</h2><button class="linkbtn" style="margin:0" data-go="admin:announcements">Manage'+ic('arrow')+'</button></div>'+ann+'</section>'+
    '<section class="acard"><div class="acard-h"><h2>Coming up</h2><button class="linkbtn" style="margin:0" data-go="admin:events">Manage'+ic('arrow')+'</button></div>'+evs+'</section></div>');
}

/* Catalog (teacher view) */
function manDir(){
  const rows=PACKET_KEYS.concat(MANUAL_ORDER).map(k=>'<tr><td>'+esc(manName(k))+'</td><td>'+esc(manKind(k))+'</td><td style="white-space:nowrap"><button class="btn ghost sm" data-go="manual:'+k+'">View</button> <button class="btn ghost sm" data-act="pdf-manual" data-k="'+k+'">PDF</button></td></tr>').join('');
  return '<details class="catd"><summary><span class="cat-t"><span class="eyebrow lab">Documents</span><h2>Manuals and packets</h2></span><span class="cat-m"><span class="meta">'+(PACKET_KEYS.length+MANUAL_ORDER.length)+' documents</span></span></summary><div class="catd-b"><div class="tscroll"><table><thead><tr><th>Document</th><th>Type</th><th><span class="sr">Tools</span></th></tr></thead><tbody>'+rows+'</tbody></table></div></div></details>';
}
function adminCatalog(){
  const R=roster();
  const grp=t=>{
    const cs=COURSES.filter(c=>c.track===t.id);
    const rows=cs.map(c=>{
      const n=R.filter(r=>(r.d.prog||{})[c.id]!==undefined).length,d=R.filter(r=>(r.d.comp||{})[c.id]).length;
      const gs=R.map(r=>(r.d.cg||{})[c.id]).filter(x=>typeof x==='number'),avg=gs.length?Math.round(gs.reduce((a,b)=>a+b,0)/gs.length)+'%':'—';
      const mans=manualsOf(c);
      return '<tr><td><span class="code" style="'+tc(c.track)+'">'+c.code+'</span></td><td>'+esc(c.title)+'</td><td>'+n+'</td><td>'+d+'</td><td>'+avg+'</td><td style="white-space:nowrap"><button class="btn ghost sm" data-go="course:'+c.id+'">Open</button> <button class="btn ghost sm" data-go="guide:'+c.id+'">Guide</button>'+mans.map(k=>' <button class="btn ghost sm" data-go="manual:'+k+'">'+(manIsPacket(k)?'Packet':mans.length>1?esc(manName(k).replace(' Ministry','')):'Manual')+'</button>').join('')+'</td></tr>';
    }).join('');
    return '<details class="catd" style="'+tc(t.id)+'"><summary><span class="cat-t"><span class="eyebrow lab">'+t.label+(t.optional?' · Optional':'')+'</span><h2>'+esc(t.title)+'</h2></span><span class="cat-m"><span class="meta">'+cs.length+' courses</span></span></summary><div class="catd-b"><div class="tscroll"><table><thead><tr><th>Code</th><th>Course</th><th>Enrolled</th><th>Completed</th><th>Avg grade</th><th><span class="sr">Tools</span></th></tr></thead><tbody>'+rows+'</tbody></table></div></div></details>';
  };
  return tview('Course catalog','Catalog','All '+COURSES.length+' courses with how many students are enrolled, how many finished, and the average grade. Open a course, its study guide or its Ministry Manual.','<div class="cat">'+TRACKS.map(grp).join('')+manDir()+'</div>');
}

/* Admin (replaces Readiness) */
function adminHub(){
  const R=roster(),total=R.length;
  const byMin={};R.forEach(r=>{const ms=minsOf(r.d.prof);(ms.length?ms:['Not assigned']).forEach(m=>{byMin[m]=(byMin[m]||0)+1;});});
  const mrows=Object.keys(byMin).sort((a,b)=>byMin[b]-byMin[a]).map(m=>'<li><span>'+esc(m)+'</span><span class="apop-b"><i style="width:'+Math.max(8,Math.round(byMin[m]/total*100))+'%"></i></span><b>'+byMin[m]+'</b></li>').join('');
  const cal=R.filter(r=>((outOf(r.uid).cal&&outOf(r.uid).cal.k)||(r.d.cal))).length;
  const gated=[['D','BFM Discipleship Class','Opens by your permission'],['A','Track A: Administrative Church Leadership','Opens by your permission'],['T','BFM Teacher Certification','Opens by your permission']];
  const unl=gated.map(g=>{const n=R.filter(r=>((outOf(r.uid).access)||{})[g[0]]).length;return '<li class="arow"><div class="arow-m"><span class="avt">'+ic('lock')+'</span><div><b>'+g[1]+'</b><small>'+g[2]+' · '+n+' student'+(n===1?'':'s')+' unlocked</small></div></div></li>';}).join('');
  const done=R.reduce((a,r)=>a+doneOf(r),0),avgDone=total&&COUNTED.length?Math.round(done/total/COUNTED.length*100):0;
  const sess=ADM_SLOT?'Access code '+ADM_SLOT:'Signed in';
  return tview('Administration','Academy Admin','Program health, catalog controls and the people and access behind BFM Academy.',
    '<div class="astats"><div class="astat"><span class="astat-i">'+ic('users')+'</span><b>'+total+'</b><span>students</span></div><div class="astat"><span class="astat-i">'+ic('book')+'</span><b>'+COURSES.length+'</b><span>courses in catalog</span></div><div class="astat"><span class="astat-i">'+ic('check')+'</span><b>'+avgDone+'%</b><span>average completion</span></div><div class="astat"><span class="astat-i">'+ic('award')+'</span><b>'+cal+'</b><span>ministries assigned</span></div></div>'+
    '<div class="agrid" style="margin-top:24px"><section class="acard"><div class="acard-h"><h2>Catalog controls</h2></div><ul class="alist">'+unl+'</ul><p class="note" style="margin-top:12px">Unlock a class or set a student’s ministry from their profile.</p><div class="btnrow" style="margin-top:12px"><button class="btn ghost" data-go="admin:students">'+ic('users')+'Open students</button><button class="btn ghost" data-go="catalog">'+ic('book')+'Open catalog</button></div></section>'+
    '<aside class="aside"><section class="acard"><div class="acard-h"><h2>Students by ministry</h2></div>'+(mrows?'<ul class="apop">'+mrows+'</ul>':empty('users','No students yet','Students appear after they join.'))+'</section></aside></div>'+
    '<section class="acard" style="margin-top:20px"><div class="acard-h"><h2>Admin tools</h2></div><div class="aqgrid">'+
    aq('admin:reports','report','Grading reports','Monthly, quarterly, and yearly summaries')+aq('admin:activity','chart','Course activity','Who started which course')+aq('transcript','award','Records','Transcripts, certificates, issue and verify')+aq('admin:profile','shield','Director profile &amp; settings','Your account and Academy settings')+'</div></section>'+
    '<section class="acard" style="margin-top:20px"><div class="acard-h"><h2>Access and security</h2>'+syncChip()+'</div><p class="note">'+esc(sess)+'. Sessions end after four hours, or after 30 minutes of no activity. Student records are visible only to signed-in directors.</p><p class="note" style="margin-top:8px">Instructor preview lets you open every track as a student would; use the switch in the header.</p></section>');
}

/* Records (replaces Transcript) */
function earnedBy(r){return Object.keys(r.d.crt||{}).map(k=>({k,c:r.d.crt[k]})).filter(x=>trackOf(x.k));}
function recStats(r){
  const cs=Object.keys(r.d.comp||{}).map(k=>byId[k]).filter(c=>c&&!OPT(c.track));
  const gs=cs.map(c=>(r.d.cg||{})[c.id]).filter(x=>typeof x==='number');
  return {n:cs.length,avg:gs.length?Math.round(gs.reduce((a,b)=>a+b,0)/gs.length):0,hg:gs.length>0,hrs:cs.reduce((a,c)=>a+hoursOf(c),0),evh:(r.d.ev||[]).reduce((a,e)=>a+(+e.hours||0),0),cr:cs.reduce((a,c)=>a+creditsOf(c),0)};
}
function recordsView(a){
  const tab=RECTAB,R=roster();
  const T=[['transcripts','Transcripts'],['certificates','Certificates'],['issue','Issue certificate'],['verify','Verify']];
  const tabs='<div class="rectabs" role="tablist">'+T.map(t=>'<button role="tab" aria-selected="'+(tab===t[0])+'" class="rtab'+(tab===t[0]?' on':'')+'" data-act="rec-tab" data-t="'+t[0]+'">'+t[1]+'</button>').join('')+'</div>';
  let body='';
  if(tab==='transcripts'){
    const q=RECQ.trim().toLowerCase(),L=R.filter(r=>!q||(nameOf(r)+' '+minsText(r.d.prof)).toLowerCase().includes(q));
    body='<div class="toolbar"><div class="tsearch">'+ic('search')+'<input type="search" id="rec-q" placeholder="Search by name or ministry" value="'+esc(RECQ)+'" aria-label="Search students" autocomplete="off"></div></div>'+
    (L.length?'<div class="tscroll"><table><thead><tr><th>Student</th><th>Ministry</th><th>Courses done</th><th>Avg grade</th><th>Credits</th><th><span class="sr">Actions</span></th></tr></thead><tbody>'+L.map(r=>{const s=recStats(r);return '<tr><td><b>'+esc(nameOf(r))+'</b></td><td>'+esc(minsText(r.d.prof)||'Not assigned')+'</td><td>'+s.n+' of '+COUNTED.length+'</td><td>'+(s.hg?s.avg+'%':'—')+'</td><td>'+fmtH(s.cr)+'</td><td style="white-space:nowrap"><button class="btn ghost sm" data-act="rec-view" data-u="'+esc(eu(r.uid))+'">'+(RECOPEN===r.uid?'Hide':'View')+'</button> <button class="btn ghost sm" data-act="rec-pdf" data-u="'+esc(eu(r.uid))+'">'+ic('down')+'PDF</button></td></tr>'+(RECOPEN===r.uid?'<tr><td colspan="6">'+recDetail(r)+'</td></tr>':'');}).join('')+'</tbody></table></div>':
    empty('users',R.length?'No students match':'No student transcripts yet','A transcript appears here once a student joins and starts coursework.'));
  }else if(tab==='certificates'){
    const all=[];R.forEach(r=>earnedBy(r).forEach(x=>all.push({r,x})));
    body=(all.length?'<div class="tscroll"><table><thead><tr><th>Student</th><th>Credential</th><th>Earned</th><th>Certificate ID</th><th><span class="sr">Actions</span></th></tr></thead><tbody>'+all.map(o=>'<tr><td><b>'+esc(o.x.c.name||nameOf(o.r))+'</b></td><td>'+esc(trackOf(o.x.k).cred)+'</td><td>'+esc(fmtDate(o.x.c.date))+'</td><td class="mono">'+esc(o.x.c.id)+'</td><td style="white-space:nowrap"><button class="btn ghost sm" data-act="rec-cert" data-u="'+esc(eu(o.r.uid))+'" data-t="'+o.x.k+'">'+ic('down')+'PDF</button> <button class="btn ghost sm" data-go="verify:'+certPayload(o.x.c,o.x.k)+'">Verify</button></td></tr>').join('')+'</tbody></table></div>':empty('award','No earned certificates yet','When a student finishes every course in a class or track, the certificate they earned is listed here.'))+
    '<div class="sec-h" style="margin-top:30px"><h2>Issued by you</h2><span class="meta">'+S.issued.length+'</span></div>'+(S.issued.length?'<ul class="alist">'+S.issued.map((r,i)=>({r,i})).reverse().map(x=>'<li class="arow"><div class="arow-m"><span class="avt">'+ic('award')+'</span><div><b>'+esc(x.r.c.name)+'</b><small>'+esc(trackOf(x.r.tid).cred)+' · '+esc(fmtDate(x.r.c.date))+'</small></div></div><div class="arow-r"><button class="btn ghost sm" data-go="icert:'+x.i+'">Open</button></div></li>').join('')+'</ul>':'<p class="note">Nothing issued yet. Use Issue certificate.</p>');
  }else if(tab==='issue'){
    body=certsPanel();
  }else{
    const tok=(a&&a[0])||'';body=verifyBody(tok);
  }
  return tview('Records','Student Records','Every student’s transcript and certificates in one place, plus tools to issue and verify certificates.',tabs+body);
}
let RECOPEN='';
const waivedOf=uid=>{const sk=(outOf(uid).skips)||{};return Object.keys(sk).map(k=>byId[k]).filter(c=>c&&!((roster().find(x=>x.uid===uid)||{d:{}}).d.comp||{})[c.id]);};
function recDetail(r){
  const cs=Object.keys(r.d.comp||{}).map(k=>byId[k]).filter(Boolean).sort((a,b)=>String(r.d.comp[a.id]).localeCompare(String(r.d.comp[b.id])));
  const ev=(r.d.ev||[]),wv=waivedOf(r.uid);
  const extra=(wv.length?'<p class="meta" style="margin-top:12px"><b>Waived:</b> '+wv.map(c=>c.code).join(', ')+'</p>':'')+(ev.length?'<p class="meta" style="margin-top:12px"><b>Conferences and seminars</b> ('+fmtH(recStats(r).evh)+' hrs)</p><table class="mini"><tbody>'+ev.slice().sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(e=>'<tr><td>'+esc(fmtDate(e.date))+'</td><td>'+esc(e.title)+'</td><td>'+esc(e.type)+'</td><td>'+fmtH(e.hours)+' hrs</td></tr>').join('')+'</tbody></table>':'');
  if(!cs.length)return '<p class="muted">No completed courses yet.</p>'+extra;
  return '<table class="mini"><thead><tr><th>Code</th><th>Course</th><th>Completed</th><th>Grade</th></tr></thead><tbody>'+cs.map(c=>{const g=(r.d.cg||{})[c.id];return '<tr><td>'+c.code+'</td><td>'+esc(c.title)+'</td><td>'+esc(fmtDate(r.d.comp[c.id]))+'</td><td>'+(typeof g==='number'?letter(g)+' '+g+'%':'—')+'</td></tr>';}).join('')+'</tbody></table>'+extra;
}
function certOnRecord(id){
  if(!id)return null;
  for(const r of roster()){const x=earnedBy(r).find(y=>y.c.id===id);if(x)return {who:x.c.name||nameOf(r),cred:trackOf(x.k).cred,date:x.c.date,src:'Earned by a student in the Academy records'};}
  const q=S.issued.find(y=>y.c.id===id);
  return q?{who:q.c.name,cred:trackOf(q.tid).cred,date:q.c.date,src:'Issued by the Academy Director'}:null;
}
function verifyBody(tok){
  const h=verifyView(tok);
  const i=h.indexOf('<div class="thead">'),j=h.indexOf('</div>',i);
  let id=VFR&&VFR.id||'';
  if(!id&&tok){try{const c=checkPayload(tok);id=(c&&c.o&&c.o.i)||'';}catch(e){}}
  const rec=id?certOnRecord(id):null;
  const card=id?'<div class="card vres '+(rec?'good':'bad')+'"><p class="vhead">'+(rec?ic('check')+'Found in the Academy records':ic('x')+'Not found in the Academy records')+'</p>'+(rec?'<p><b>'+esc(rec.who)+'</b> · '+esc(rec.cred)+' · '+esc(fmtDate(rec.date))+'</p><p class="note">'+esc(rec.src)+'.</p>':'<p>No student record or issued certificate has this ID. It may belong to a student who has not opened the Academy since certificates were synced.</p>')+'</div>':'';
  return h.slice(j+6)+card;
}
function buildStudentTranscript(doc,r){
  const W=612,M=48,p=r.d.prof||{},s=recStats(r);let y=0;
  doc.setFillColor(NAVY[0],NAVY[1],NAVY[2]);doc.rect(0,0,W,86,'F');
  let tx=M;try{doc.addImage(LOGO_B64,'PNG',M,13,60,60);tx=M+74;}catch(e){}
  doc.setTextColor(255,255,255);doc.setFont('helvetica','bold');doc.setFontSize(20);doc.text('BFM ACADEMY',tx,42);
  doc.setFont('helvetica','normal');doc.setFontSize(11);doc.text('Academic Transcript',tx,62);
  doc.setFontSize(9);doc.text('Bushwick Family Ministries',W-M,42,{align:'right'});doc.text('Issued '+pt(fmtDate(isoToday())),W-M,58,{align:'right'});
  y=114;doc.setTextColor(20,24,40);
  [['STUDENT',p.name||'Not entered'],[minsOf(p).length>1?'MINISTRIES':'MINISTRY',minsText(p)||'Not assigned'],['LEADERSHIP ROLE',roleOf(p)||'Not entered'],['ENROLLED',fmtDate(p.enrolled)]].forEach((x,i)=>{const cx=M+(i%2)*270,cy=y+Math.floor(i/2)*36;
    doc.setFont('helvetica','bold');doc.setFontSize(7.5);doc.setTextColor(95,105,130);doc.text(x[0],cx,cy);
    doc.setFont('helvetica','normal');doc.setFontSize(11);doc.setTextColor(20,24,40);doc.text(doc.splitTextToSize(pt(x[1]),250)[0],cx,cy+14);});
  y+=84;
  doc.setDrawColor(210,216,232);doc.setFillColor(240,243,250);doc.rect(M,y,W-2*M,50,'FD');
  [[s.n+' / '+COUNTED.length,'COURSES'],[fmtH(s.hrs),'INSTR. HOURS'],[fmtH(s.evh),'EVENT HOURS'],[fmtH(s.cr),'CREDITS'],[s.hg?s.avg+'%':'-','AVG GRADE']].forEach((x,i)=>{const cx=M+14+i*((W-2*M-28)/5);
    doc.setFont('helvetica','bold');doc.setFontSize(15);doc.setTextColor(20,24,40);doc.text(x[0],cx,y+24);doc.setFontSize(7);doc.setTextColor(95,105,130);doc.text(x[1],cx,y+38);});
  y+=76;
  doc.setFont('helvetica','bold');doc.setFontSize(10);doc.setTextColor(NAVY[0],NAVY[1],NAVY[2]);doc.text('COURSES COMPLETED',M,y);doc.line(M,y+5,W-M,y+5);y+=22;
  const cols=[M,M+62,M+330,M+410,M+470];
  const th=()=>{doc.setFont('helvetica','bold');doc.setFontSize(7.5);doc.setTextColor(95,105,130);['CODE','COURSE','COMPLETED','GRADE','CREDITS'].forEach((h,i)=>doc.text(h,cols[i],y));y+=12;};
  th();
  const cs=Object.keys(r.d.comp||{}).map(k=>byId[k]).filter(Boolean);
  if(!cs.length){doc.setFont('helvetica','italic');doc.setFontSize(10);doc.text('No courses completed yet.',M,y);}
  cs.forEach(c=>{
    const ln=doc.splitTextToSize(pt(c.title),255),h=Math.max(1,ln.length)*12+6;
    if(y+h>740){doc.addPage();y=60;th();}
    const g=(r.d.cg||{})[c.id];
    doc.setFont('helvetica','bold');doc.setFontSize(9);doc.setTextColor(20,24,40);doc.text(c.code,cols[0],y);
    doc.setFont('helvetica','normal');doc.text(ln,cols[1],y);doc.text(pt(fmtDate(r.d.comp[c.id])),cols[2],y);
    doc.text(typeof g==='number'?letter(g)+'  '+g+'%':'-',cols[3],y);doc.text(fmtH(creditsOf(c)),cols[4],y);
    y+=h;doc.setDrawColor(228,232,242);doc.setLineWidth(0.5);doc.line(M,y-9,W-M,y-9);
  });
  y+=16;
  const head=t=>{if(y+80>720){doc.addPage();y=60;}doc.setFont('helvetica','bold');doc.setFontSize(10);doc.setTextColor(NAVY[0],NAVY[1],NAVY[2]);doc.text(t,M,y);doc.setDrawColor(NAVY[0],NAVY[1],NAVY[2]);doc.setLineWidth(1);doc.line(M,y+5,W-M,y+5);y+=22;};
  const ensure=h=>{if(y+h>720){doc.addPage();y=60;}};
  const wv=waivedOf(r.uid);
  if(wv.length){head('WAIVED COURSES (APPROVED BY THE ACADEMY, NO GRADE OR CREDIT)');wv.forEach(c=>{ensure(16);doc.setFont('helvetica','bold');doc.setFontSize(9);doc.setTextColor(20,24,40);doc.text(c.code,M,y);doc.setFont('helvetica','normal');doc.text(doc.splitTextToSize(pt(c.title),420)[0],M+62,y);y+=15;});y+=10;}
  head('CERTIFICATES EARNED');
  const ce=earnedBy(r);
  if(!ce.length){doc.setFont('helvetica','italic');doc.setFontSize(10);doc.setTextColor(95,105,130);doc.text('None yet.',M,y);y+=20;}
  ce.forEach(x=>{ensure(30);doc.setFont('helvetica','bold');doc.setFontSize(10);doc.setTextColor(20,24,40);doc.text(pt(trackOf(x.k).cred),M,y);doc.setFont('helvetica','normal');doc.setFontSize(9);doc.text('Earned '+pt(fmtDate(x.c.date))+'   ID '+x.c.id,M,y+13);y+=30;});
  y+=6;
  const ev=(r.d.ev||[]);
  if(ev.length){head('CONFERENCES AND SEMINARS');
    ev.slice().sort((a,b)=>String(a.date).localeCompare(String(b.date))).forEach(e=>{ensure(18);doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(20,24,40);
      doc.text(pt(fmtDate(e.date)),M,y);doc.text(doc.splitTextToSize(pt(e.title),270)[0],M+80,y);doc.text(pt(e.type),M+370,y);doc.text(fmtH(e.hours)+' hrs',M+450,y);y+=15;});
    y+=10;}
  if(r.d.rd&&r.d.rd.v){head('LEADERSHIP READINESS');ensure(170);
    doc.setFont('helvetica','bold');doc.setFontSize(10);doc.setTextColor(20,24,40);doc.text('Overall '+r.d.rd.o+'%  -  '+pt(r.d.rd.s||''),M,y);y+=16;
    COMPS.forEach((c,i)=>{const v=r.d.rd.v[i]||0;doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(20,24,40);doc.text(pt(c.n),M,y);
      doc.setFillColor(228,232,242);doc.rect(M+170,y-7,240,7,'F');if(v>0){doc.setFillColor(198,167,94);doc.rect(M+170,y-7,240*v/100,7,'F');}
      doc.text(v+'%',M+420,y);y+=15;});
    y+=10;}
  ensure(60);y+=12;
  doc.setDrawColor(20,24,40);doc.setLineWidth(0.6);doc.line(M,y+20,M+200,y+20);doc.line(W-M-200,y+20,W-M,y+20);
  doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(95,105,130);doc.text('Academy Director',M,y+32);doc.text('Date',W-M-200,y+32);
  const n=doc.getNumberOfPages();
  for(let i=1;i<=n;i++){doc.setPage(i);doc.setFont('helvetica','normal');doc.setFontSize(7.5);doc.setTextColor(120,128,150);
    doc.text('1 credit = about 8 instructional hours.',M,758,{maxWidth:W-2*M-70});
    doc.text('Page '+i+' of '+n,W-M,758,{align:'right'});}
}
async function recPdf(uid){
  const r=roster().find(x=>x.uid===uid);if(!r)return;
  const doc=newDoc('portrait');if(!doc){toast('The PDF tool did not load. Check your connection and try again.');return;}
  try{buildStudentTranscript(doc,r);await saveFile('BFM-Transcript-'+(nameOf(r).replace(/[^A-Za-z0-9]+/g,'-').replace(/^-|-$/g,'')||'student')+'.pdf',doc.output('blob'));}catch(e){toast('Could not build the PDF.');}
}
function recAct(k,d){
  if(!S.admin)return false;
  if(k==='rec-tab'){RECTAB=d.t;refresh();return true;}
  if(k==='rec-view'){const u=decodeURIComponent(d.u);RECOPEN=RECOPEN===u?'':u;refresh();return true;}
  if(k==='rec-pdf'){recPdf(decodeURIComponent(d.u));return true;}
  if(k==='rec-cert'){const r=roster().find(x=>x.uid===decodeURIComponent(d.u));if(r&&r.d.crt&&r.d.crt[d.t])makePdf('cert',d.t,r.d.crt[d.t]);return true;}
  return false;
}
document.addEventListener('input',e=>{if(e.target&&e.target.id==='rec-q'){RECQ=e.target.value;const pos=e.target.selectionStart;refresh();const n=$('#rec-q');if(n&&n.focus){n.focus();try{n.setSelectionRange(pos,pos);}catch(x){}}}});
/* ================= Student profile: picture editor, ministries, interests, scripture ================= */
const minsOf=p=>{p=p||{};const a=(Array.isArray(p.ministries)&&p.ministries.filter(Boolean).length?p.ministries.filter(Boolean):(p.ministry?[p.ministry]:[])).map(m=>MIN_OLD[m]||m);return a.filter((m,i)=>a.indexOf(m)===i);};
const minsText=p=>minsOf(p).join(', ');
const avatarP=(p,n,cls)=>p&&p.pic?'<span class="avt '+(cls||'')+' has-img" aria-hidden="true"><img alt="" src="'+esc(p.pic)+'"></span>':avatar(n,cls);
let PFM='',PFFOCUS='';

/* the student profile card: picture, "Name, Role", ministries, interests, favorite scripture */
function profCard(p,own){
  p=p||{};
  const nm=(p.name||'').trim(),role=roleOf(p),mins=minsOf(p);
  const pic=p.pic?'<img class="pcard-img" alt="'+(own?'Your profile picture':'Profile picture of '+esc(nm||'the student'))+'" src="'+esc(p.pic)+'">':'<span class="pcard-img ph" aria-hidden="true">'+(nm?esc(ini(nm)):'<svg class="ic" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="8.5" r="4.2"/><path d="M3.8 21c.6-4.4 4-6.6 8.2-6.6s7.6 2.2 8.2 6.6z"/></svg>')+'</span>';
  const hint=t=>own?'<p class="pcard-hint">'+t+'</p>':'';
  const facts=(p.facts||'').trim(),scr=(p.scripture||'').trim();
  return '<section class="pcard" aria-label="Student profile">'+
    '<div class="pcard-av">'+pic+'</div><div class="pcard-b">'+
    '<h2 class="pcard-n">'+(nm?esc(nm):'<span class="muted">Your name</span>')+(role?'<span class="pcard-r">, '+esc(role)+'</span>':'')+'</h2>'+
    (mins.length?'<ul class="pcard-m" aria-label="Ministries">'+mins.map(m=>'<li>'+esc(m)+'</li>').join('')+'</ul>':hint('Add your ministry below.'))+
    (facts?'<div class="pcard-sec"><h3>Fun facts and interests</h3><p>'+esc(facts).replace(/\n/g,'<br>')+'</p></div>':hint('Share a fun fact or an interest.'))+
    (scr?'<blockquote class="pcard-s"><h3>Favorite scripture</h3><p>'+esc(scr).replace(/\n/g,'<br>')+'</p></blockquote>':hint('Add a favorite scripture.'))+
    '</div></section>';
}

/* ministries block inside the profile form */
function minBlock(){
  const have=minsOf(S.prof),left=MINISTRIES.filter(m=>m==='Other'||have.indexOf(m)<0);
  const chips=have.length?'<ul class="minchips" aria-label="Your ministries">'+have.map(m=>'<li><span>'+esc(m)+'</span><button type="button" class="chipx" data-act="pf-min-del" data-m="'+esc(m)+'" aria-label="Remove '+esc(m)+'">'+ic('x')+'</button></li>').join('')+'</ul>':'';
  let ctl='';
  if(PFM==='ask'&&left.length)ctl='<div class="minask" role="group" aria-label="Another ministry?"><p><b>Are you part of another ministry?</b></p><div class="btnrow"><button type="button" class="btn sm" data-act="pf-ask-yes">Yes, add another</button><button type="button" class="btn ghost sm" data-act="pf-ask-no">No, that is all</button></div></div>';
  else if((!have.length||PFM==='pick')&&left.length)ctl='<div class="minpick"><label class="sr" for="pf-min-sel">Choose a ministry</label><select id="pf-min-sel"><option value="">'+(have.length?'Choose another ministry':'Choose your ministry')+'</option>'+left.map(m=>'<option>'+esc(m)+'</option>').join('')+'</select><input type="text" id="pf-min-other" class="minother" placeholder="Type the ministry name" maxlength="60" hidden aria-label="Ministry name"><button type="button" class="btn" data-act="pf-min-add">'+ic('plus')+'Add ministry</button></div>';
  else if(left.length)ctl='<button type="button" class="linkbtn" data-act="pf-ask-yes">'+ic('plus')+' Add another ministry</button>';
  return '<div class="field minblock" style="grid-column:1/-1"><span class="flabel" id="pf-min-l">Ministries</span>'+(have.length?'':'<p class="note">Choose the ministry you serve in. You can add more after.</p>')+chips+ctl+'</div>';
}
/* copy typed values into the saved profile without leaving the page */
function pfCapture(){
  const g=id=>{const e=$(id);return e&&typeof e.value==='string'?e.value:null;};
  const n=g('#pf-name');if(n!==null)S.prof.name=n;
  const r=g('#pf-role');if(r!==null){S.prof.role=r;const ro=g('#pf-role-other');if(r==='Other'&&ro!==null)S.prof.roleOther=ro.trim();else S.prof.roleOther='';}
  const d=g('#pf-enrolled');if(d!==null&&d)S.prof.enrolled=d;
  const f=g('#pf-facts');if(f!==null)S.prof.facts=f;
  const s=g('#pf-scripture');if(s!==null)S.prof.scripture=s;
}
function pfSetMins(a){S.prof.ministries=a;S.prof.ministry=a[0]||'';}
function pfLive(){const w=$('#pcardw');if(w)w.innerHTML=profCard(S.prof,true);}
document.addEventListener('input',e=>{const t=e.target;if(t&&/^pf-(name|facts|scripture|role-other)$/.test(t.id||'')){pfCapture();pfLive();clearTimeout(pfLive.t);pfLive.t=setTimeout(save,500);}});
document.addEventListener('change',e=>{
  const t=e.target;if(!t)return;
  if(t.id==='pf-role'){const o=$('#pf-role-other');if(o){o.hidden=t.value!=='Other';if(t.value==='Other'&&o.focus)o.focus();}pfCapture();pfLive();save();}
  if(t.id==='pf-min-sel'){const o=$('#pf-min-other');if(o){o.hidden=t.value!=='Other';if(t.value==='Other'&&o.focus)o.focus();}}
  if(t.id==='ae-role'){const o=$('#ae-role-other');if(o){o.hidden=t.value!=='Other';if(t.value==='Other'&&o.focus)o.focus();}}
});

function profAct(k,d){
  if(k==='pf-min-add'){
    const s=$('#pf-min-sel');let v=s&&s.value;const m=$('#pfmsg');
    if(!v){if(m)m.textContent='Choose a ministry from the list first.';return true;}
    if(v==='Other'){const o=$('#pf-min-other');v=((o&&o.value)||'').trim();if(v.length<2){if(m)m.textContent='Type the name of your ministry.';if(o&&o.focus)o.focus();return true;}}
    pfCapture();const a=minsOf(S.prof).slice();if(!a.some(x=>x.toLowerCase()===v.toLowerCase()))a.push(v);pfSetMins(a);PFM='ask';PFFOCUS='.minask .btn';save();pushNow();refresh();return true;
  }
  if(k==='pf-ask-yes'){pfCapture();PFM='pick';PFFOCUS='#pf-min-sel';save();refresh();return true;}
  if(k==='pf-ask-no'){pfCapture();PFM='';save();refresh();toast('Ministries saved.');return true;}
  if(k==='pf-min-del'){pfCapture();pfSetMins(minsOf(S.prof).filter(x=>x!==d.m));PFM='';save();pushNow();refresh();return true;}
  if(k==='pic-edit'){const src=S.prof.picSrc||S.prof.pic;if(src)openCropper(src,false);return true;}
  if(k==='pic-remove'){pfCapture();delete S.prof.pic;delete S.prof.picSrc;save();pushNow();refresh();toast('Picture removed.');return true;}
  if(k==='crop-save'){cropSave();return true;}
  if(k==='crop-cancel'){cropClose();return true;}
  if(k==='crop-rot'){if(CROP){CROP.rot=(CROP.rot+(+d.v)+360)%360;cropDraw();}return true;}
  if(k==='crop-flip'){if(CROP){CROP.flip=!CROP.flip;cropDraw();}return true;}
  if(k==='crop-reset'){if(CROP){Object.assign(CROP,{z:1,ox:0,oy:0,rot:0,flip:false,br:1});cropSync();cropDraw();}return true;}
  return false;
}

/* ---------- picture editor: move, zoom, rotate, flip, brightness ---------- */
let CROP=null;
function loadImg(src){return new Promise((res,rej)=>{const im=new Image();im.onload=()=>res(im);im.onerror=rej;im.src=src;});}
async function workCopy(file){
  const url=await new Promise((res,rej)=>{const fr=new FileReader();fr.onload=()=>res(fr.result);fr.onerror=rej;fr.readAsDataURL(file);});
  const im=await loadImg(url),k=Math.min(1,640/Math.max(im.width,im.height));
  const cv=document.createElement('canvas');cv.width=Math.round(im.width*k);cv.height=Math.round(im.height*k);
  const x=cv.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,cv.width,cv.height);x.drawImage(im,0,0,cv.width,cv.height);
  return cv.toDataURL('image/jpeg',0.88);
}
async function openCropper(src,isNew){
  let im;try{im=await loadImg(src);}catch(e){const m=$('#picmsg');if(m)m.textContent='That file could not be read as a picture.';return;}
  CROP={img:im,src,isNew:!!isNew,z:1,ox:0,oy:0,rot:0,flip:false,br:1,prevFocus:document.activeElement};
  let m=document.getElementById('cropmodal');if(m)m.remove();
  m=document.createElement('div');m.id='cropmodal';m.className='modal';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');m.setAttribute('aria-labelledby','cr-t');
  m.innerHTML='<div class="modal-card"><h2 id="cr-t">Edit your picture</h2><p class="note">Drag the picture to move it. Use the sliders to zoom and brighten. Only the circle is kept.</p>'+
    '<div class="cr-stage"><canvas id="cr-cv" width="300" height="300" tabindex="0" aria-label="Picture preview. Use the arrow keys to move it, and plus or minus to zoom."></canvas><div class="cr-ring" aria-hidden="true"></div></div>'+
    '<div class="cr-ctl"><label for="cr-zoom">Zoom</label><input type="range" id="cr-zoom" min="1" max="4" step="0.01" value="1"></div>'+
    '<div class="cr-ctl"><label for="cr-br">Brightness</label><input type="range" id="cr-br" min="0.6" max="1.4" step="0.01" value="1"></div>'+
    '<div class="btnrow cr-tools"><button type="button" class="btn ghost sm" data-act="crop-rot" data-v="-90">Rotate left</button><button type="button" class="btn ghost sm" data-act="crop-rot" data-v="90">Rotate right</button><button type="button" class="btn ghost sm" data-act="crop-flip">Flip</button><button type="button" class="btn ghost sm" data-act="crop-reset">Reset</button></div>'+
    '<div class="btnrow cr-go"><button type="button" class="btn" data-act="crop-save">'+ic('check')+'Use this picture</button><button type="button" class="btn ghost" data-act="crop-cancel">Cancel</button></div></div>';
  document.body.appendChild(m);document.body.classList.add('modal-open');
  const cv=m.querySelector('#cr-cv'),z=m.querySelector('#cr-zoom'),b=m.querySelector('#cr-br');
  z.addEventListener('input',()=>{CROP.z=+z.value;cropDraw();});b.addEventListener('input',()=>{CROP.br=+b.value;cropDraw();});
  let drag=null;
  cv.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY,ox:CROP.ox,oy:CROP.oy};try{cv.setPointerCapture(e.pointerId);}catch(x){}cv.classList.add('grab');});
  cv.addEventListener('pointermove',e=>{if(!drag)return;const r=cv.getBoundingClientRect();CROP.ox=drag.ox+(e.clientX-drag.x)/r.width;CROP.oy=drag.oy+(e.clientY-drag.y)/r.height;cropDraw();});
  const up=()=>{drag=null;cv.classList.remove('grab');};cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
  cv.addEventListener('wheel',e=>{e.preventDefault();CROP.z=Math.max(1,Math.min(4,CROP.z+(e.deltaY<0?.08:-.08)));cropSync();cropDraw();},{passive:false});
  m.addEventListener('keydown',e=>{
    if(e.key==='Escape'){e.preventDefault();cropClose();return;}
    if(e.key==='Tab'){const f=[...m.querySelectorAll('button,input,canvas')];const i=f.indexOf(document.activeElement);if(e.shiftKey&&i<=0){e.preventDefault();f[f.length-1].focus();}else if(!e.shiftKey&&i===f.length-1){e.preventDefault();f[0].focus();}}
    if(e.target===cv){const s=.03;let h=true;if(e.key==='ArrowLeft')CROP.ox-=s;else if(e.key==='ArrowRight')CROP.ox+=s;else if(e.key==='ArrowUp')CROP.oy-=s;else if(e.key==='ArrowDown')CROP.oy+=s;else if(e.key==='+'||e.key==='=')CROP.z=Math.min(4,CROP.z+.1);else if(e.key==='-')CROP.z=Math.max(1,CROP.z-.1);else h=false;if(h){e.preventDefault();cropSync();cropDraw();}}
  });
  requestAnimationFrame(()=>m.classList.add('in'));
  cropDraw();setTimeout(()=>cv.focus(),50);
}
function cropSync(){const z=document.getElementById('cr-zoom'),b=document.getElementById('cr-br');if(z)z.value=CROP.z;if(b)b.value=CROP.br;}
function cropRender(ctx,size){
  const C=CROP,im=C.img,w=im.width,h=im.height,sw=C.rot%180!==0,rw=sw?h:w,rh=sw?w:h,sc=size/Math.min(rw,rh)*C.z;
  const mx=Math.max(0,(rw*sc-size)/2)/size,my=Math.max(0,(rh*sc-size)/2)/size;
  C.ox=Math.max(-mx,Math.min(mx,C.ox));C.oy=Math.max(-my,Math.min(my,C.oy));
  ctx.fillStyle='#fff';ctx.fillRect(0,0,size,size);ctx.save();
  ctx.translate(size/2+C.ox*size,size/2+C.oy*size);ctx.rotate(C.rot*Math.PI/180);ctx.scale(C.flip?-sc:sc,sc);
  try{ctx.filter='brightness('+C.br+')';}catch(e){}
  ctx.drawImage(im,-w/2,-h/2);ctx.restore();
}
function cropDraw(){const cv=document.getElementById('cr-cv');if(!cv||!CROP)return;cropRender(cv.getContext('2d'),cv.width);}
function cropClose(){
  const m=document.getElementById('cropmodal');const pf=CROP&&CROP.prevFocus;CROP=null;
  document.body.classList.remove('modal-open');
  if(m){m.classList.remove('in');setTimeout(()=>m.remove(),180);}
  try{if(pf&&pf.focus)pf.focus();}catch(e){}
}
function cropSave(){
  if(!CROP)return;
  const cv=document.createElement('canvas');cv.width=cv.height=256;cropRender(cv.getContext('2d'),256);
  pfCapture();S.prof.pic=cv.toDataURL('image/jpeg',0.9);
  if(CROP.isNew||!S.prof.picSrc)S.prof.picSrc=CROP.src;
  save();pushNow();cropClose();refresh();toast('Picture updated.');
}
/* ---------- guided tours (students and directors) ---------- */
const TOUR_S=[
 {t:'Welcome to BFM Academy',b:'This short tour visits every part of the Academy and shows what to do in each one. You can skip it at any time, and you can replay it later from the footer or your Profile page.',go:'home'},
 {t:'Start here',b:'Press Start learning (or Continue once you have begun). It always takes you to your next step, so you never have to guess what comes next.',go:'home',sel:'.herox .btnrow'},
 {t:'Your progress',b:'This ring shows how far you are on the Leadership pathway. Under it are the courses you have finished, your hours, and your credits.',go:'home',sel:'.prog'},
 {t:'Classes',b:'Classes are for new believers, new members, and baptism. Register for a class and its courses open right away, one after the other.',go:'home',sel:'#classes'},
 {t:'Leadership tracks',b:'Tracks 1, 2, and 3 grow you as a leader. Each track opens when the one before it is finished. Optional programs are in their own section below.',go:'home',sel:'.tiles3'},
 {t:'The main menu',b:'Campus is home. Catalog lists every course. Readiness shows how ready you are to lead. Transcript keeps your grades and certificates. On a phone this menu is at the bottom of the screen.',go:'home',sel:'#nav|#bnav'},
 {t:'Catalog',b:'Every class and track is listed here. The leadership tracks open after the four BFM classes (leaders already serving skip them). Open one to see its courses, then pick a course. On Campus you can also search by name, code, or topic.',go:'catalog',sel:'.thead'},
 {t:'Inside a track',b:'A track page lists its courses and what you earn when you finish. A locked course tells you exactly what to finish first.',go:'track:1',sel:'.grid'},
 {t:'A course page',b:'Here you see your progress and the next step. Press the main button to start the next lesson.',go:'course:ldr-101',sel:'section.launch'},
 {t:'Lessons, assessment, project',b:'Each lesson has key ideas, the Scripture text, practical steps, reflection questions, and a private notes box. When all lessons are done, take the short assessment, then finish the project with your pastor or class leader.',go:'course:ldr-101',sel:'details.outline'},
 {t:'Readiness',b:'This page shows how ready you are to lead and gives you a recommended next step.',go:'readiness',sel:'section.director'},
 {t:'Transcript',b:'Your hours, credits, grades, and certificates are kept here. You can download or print your transcript.',go:'transcript',sel:'.statgrid'},
 {t:'My certificates',b:'Every certificate you earn is saved here. Anyone can check one with its ID using Verify a certificate in the footer.',go:'mycerts',sel:'.thead'},
 {t:'Study guides and manuals',b:'Download or print a study guide for any course you can open. You will also find Ministry Manuals and volunteer training packets here.',go:'resources',sel:'.resgrp'},
 {t:'Bookmarks and notes',b:'Bookmark any lesson to come back to it. Your private notes for each lesson are collected here, and only you can see them.',go:'saved',sel:'.thead'},
 {t:'Announcements and events',b:'News from your director shows as a banner at the top of Campus or as a pop-up you can close with the X. When there are several, use the arrows to see each one. New events also pop up and point you to the events calendar in the footer. Past announcements are kept here.',go:'news',sel:'.annwrap'},
 {t:'Notifications',b:'The bell tells you when your director replies, approves a request, or posts news.',go:'home',sel:'#bell'},
 {t:'Your profile and settings',b:'Add your name, ministry, role, and photo, and choose the ministry you feel called to serve in. You can also make the text larger, turn on dark mode, or switch to the dyslexia-friendly font.',go:'profile',sel:'form.pform'},
 {t:'FAQs',b:'Quick answers to the questions students ask most, like how to unlock a course or get a certificate.',go:'faq',sel:'.faqs'},
 {t:'The help button',b:'This button opens the helper. It answers from the FAQs, and it can send your question to the Academy Director.',go:'home',sel:'.chatfab'},
 {t:'You are ready',b:'To replay this tour, open the footer and press Guided tour, or find it on your Profile page. Now press Start learning and take your first step.',go:'home',sel:'#foot-dyn'}
];
const TOUR_D=[
 {t:'Welcome to the staff portal',b:'This tour visits every staff section and shows what each one is for. Skip it any time. You can replay it from the footer or the staff Profile page.',go:'admin:overview'},
 {t:'Overview',b:'Start here each time. It shows what needs your attention: work to grade, requests to answer, and messages from students.',go:'admin:overview',sel:'.admtop'},
 {t:'Staff sections',b:'Every staff tool lives in this bar. The number beside a section tells you how many items are waiting.',go:'admin:overview',sel:'.admnav'},
 {t:'Students',b:'Everyone who joined the Academy. Open a student to see their profile and coursework, reset their ministry choice, or manage their account.',go:'admin:students',sel:'.admnav button[data-go="admin:students"]'},
 {t:'Review and grade',b:'Read a student’s written answers and project, then enter a grade. Students see your grade, and their certificate, once the work is complete.',go:'admin:review',sel:'.admnav button[data-go="admin:review"]'},
 {t:'Requests',b:'Approve or decline requests to skip a course, register for a class, start Track A, or begin Teacher Certification.',go:'admin:requests',sel:'.admnav button[data-go="admin:requests"]'},
 {t:'Messages',b:'Questions students send from the help chat arrive here. Write a reply and the student sees it in their chat and notifications.',go:'admin:messages',sel:'.admnav button[data-go="admin:messages"]'},
 {t:'Course activity',b:'See who has started each course and how far they have gotten.',go:'admin:activity',sel:'.admnav button[data-go="admin:activity"]'},
 {t:'Reports',b:'Download monthly, quarterly, and yearly grading reports as a PDF, Excel or CSV.',go:'admin:reports',sel:'.admnav button[data-go="admin:reports"]'},
 {t:'Announcements',b:'Post news for every student as an inline banner or a floating pop-up. Pick the icon and colors, set when it starts and ends, preview it, and archive it later. Several can show at once with arrows.',go:'admin:announcements',sel:'.admnav button[data-go="admin:announcements"]'},
 {t:'Events and calendar dates',b:'Add events here, such as water baptism services, classes, and your 6-month safety and safeguarding renewal dates. Students see the next ones in the footer, and a New events pop-up points them to the calendar when you add one.',go:'admin:events',sel:'.admnav button[data-go="admin:events"]'},
 {t:'Certificates',b:'Issue a certificate for any track and keep a record of what you have issued. Anyone can verify a certificate with its ID.',go:'admin:certs',sel:'.admnav button[data-go="admin:certs"]'},
 {t:'Your staff account',b:'This is your staff account and where you log out. Keep your access code private, and log out on shared devices.',go:'admin:profile',sel:'.admtop'},
 {t:'Staff FAQs',b:'Answers to the questions directors ask most, like approving requests, resetting a ministry, or running reports.',go:'admin:faq',sel:'.faqs'},
 {t:'See it as a student',b:'Press Campus AD to see the Academy the way a student does. Press Admin any time to come back here.',go:'admin:overview',sel:'#nav|#bnav'},
 {t:'You are ready',b:'To replay this tour, use Guided tour in the footer or on your staff Profile page.',go:'admin:overview',sel:'#foot-dyn'}
];
let TOUR=null,TOURPROMPTED=false,TOURTMR=null;
const tourSteps=k=>k==='d'?TOUR_D:TOUR_S;
const tourOk=()=>typeof document.createElement==='function'&&typeof document.body==='object'&&document.body&&typeof document.body.appendChild==='function';
function tourSeen(k){return !!(S.tour&&S.tour[k]);}
function tourMark(k){S.tour=S.tour||{};S.tour[k]=Date.now();save();}
function tourFind(sel){
  if(!sel)return null;
  for(const p of sel.split('|')){
    const e=document.querySelector(p);
    if(e&&e.getBoundingClientRect){const r=e.getBoundingClientRect();if(r.width>0&&r.height>0&&e.getClientRects().length)return e;}
  }
  return null;
}
function tourEl(){
  let r=document.getElementById('tour');
  if(r)return r;
  r=document.createElement('div');r.id='tour';r.className='tour';
  r.innerHTML='<div class="tour-shade"></div><div class="tour-hl" aria-hidden="true"></div><section class="tour-card" role="dialog" aria-labelledby="tour-t" aria-describedby="tour-b"><div class="tour-top"><span class="tour-n" id="tour-n"></span><button type="button" class="tour-skip" data-tour="skip">Skip tour</button></div><div class="tour-bar" aria-hidden="true"><i id="tour-p"></i></div><h2 id="tour-t"></h2><p id="tour-b"></p><div class="tour-btns"><button type="button" class="btn ghost sm" id="tour-back" data-tour="back">Back</button><button type="button" class="btn sm" id="tour-next" data-tour="next">Next</button></div></section><div class="tour-live" aria-live="polite" id="tour-live"></div>';
  document.body.appendChild(r);
  return r;
}
function tourStart(k){
  if(!tourOk())return;
  tourPromptClose();
  if(k==='d'&&!S.admin)k='s';
  TOUR={k,i:0};
  try{renderAnn();}catch(e){}
  tourEl();document.body.classList.add('tour-on');
  tourShow(0);
}
function tourRoute(){return [V.n].concat(V.a||[]).join(':');}
function tourShow(i){
  const steps=tourSteps(TOUR.k);
  if(i<0)i=0;
  if(i>=steps.length){tourEnd(true);return;}
  TOUR.i=i;
  const s=steps[i],root=tourEl();
  root.querySelector('#tour-n').textContent=(TOUR.k==='d'?'Director tour · ':'Student tour · ')+(i+1)+' of '+steps.length;
  root.querySelector('#tour-p').style.width=Math.round((i+1)/steps.length*100)+'%';
  root.querySelector('#tour-t').textContent=s.t;
  root.querySelector('#tour-b').textContent=s.b;
  const nx=root.querySelector('#tour-next'),bk=root.querySelector('#tour-back');
  nx.textContent=i===steps.length-1?'Finish':'Next';bk.hidden=i===0;
  root.querySelector('#tour-live').textContent='Step '+(i+1)+' of '+steps.length+'. '+s.t;
  if(TOURTMR){clearTimeout(TOURTMR);TOURTMR=null;}
  root.classList.add('moving');
  const run=()=>tourWait(s.sel,()=>tourPlace(true));
  if(s.go&&tourRoute()!==s.go){const p=s.go.split(':');go(p[0],p.slice(1));TOURTMR=setTimeout(run,220);}
  else run();
  if(nx.focus)try{nx.focus({preventScroll:true});}catch(e){}
}
/* wait for the page to draw the target, then place the tour */
function tourWait(sel,cb){
  let n=0;
  const t=()=>{if(!TOUR)return;if(!sel||tourFind(sel)||n>=25){TOURTMR=null;cb();return;}n++;TOURTMR=setTimeout(t,80);};
  t();
}
function tourPlace(scroll){
  if(!TOUR)return;
  const root=document.getElementById('tour');if(!root)return;
  const s=tourSteps(TOUR.k)[TOUR.i];
  const el=tourFind(s.sel),small=(window.innerWidth||1200)<=720;
  if(el&&scroll){
    const fixed=el.closest&&el.closest('#bnav,.chatwrap'),r0=el.getBoundingClientRect(),vh0=window.innerHeight||800;
    const want=Math.max(0,(window.scrollY||0)+r0.top-(small?70:110));
    if(!fixed&&(r0.top<60||r0.bottom>vh0-16||r0.top>vh0*0.5)&&Math.abs(want-(window.scrollY||0))>4)window.scrollTo({top:want,behavior:'smooth'});
  }
  /* follow the target until the scrolling settles, then reveal the card */
  let last='',n=0;
  const tick=()=>{
    if(!TOUR)return;
    tourReflow();
    const e=tourFind(s.sel),r=e?e.getBoundingClientRect():null,key=r?Math.round(r.top)+','+Math.round(r.left)+','+Math.round(r.height):'';
    if(!e||key===last||n>=20){TOURTMR=null;root.classList.remove('moving');return;}
    last=key;n++;TOURTMR=setTimeout(tick,70);
  };
  tick();
}
function tourReflow(){
  if(!TOUR)return;
  const root=document.getElementById('tour');if(!root)return;
  const s=tourSteps(TOUR.k)[TOUR.i],card=root.querySelector('.tour-card'),hl=root.querySelector('.tour-hl');
  const e2=tourFind(s.sel);
  const vw=window.innerWidth||document.documentElement.clientWidth,vh=window.innerHeight||document.documentElement.clientHeight,small=vw<=720;
  if(!e2){hl.classList.remove('on');root.classList.remove('ontop');root.classList.add('center');card.style.cssText='';return;}
  root.classList.remove('center');
  const r=e2.getBoundingClientRect(),pad=8;
  const top=Math.max(4,r.top-pad),left=Math.max(4,r.left-pad),w=Math.min(vw-8,r.width+pad*2),h=Math.min(vh-8,r.height+pad*2);
  hl.classList.add('on');
  const ontop=small&&r.top>vh*0.4,ch=card.offsetHeight||220;
  root.classList.toggle('ontop',ontop);
  let hh=h,ct=0;
  if(small){
    if(!ontop){const avail=vh-(84+ch+14)-top;if(hh>avail&&avail>=100)hh=avail;}
    hl.style.cssText='top:'+top+'px;left:'+left+'px;width:'+w+'px;height:'+hh+'px';card.style.cssText='';return;
  }
  const cw=Math.min(380,vw-32);
  ct=r.bottom+pad+14;
  if(ct+ch>vh-16){
    const above=r.top-pad-14-ch;
    if(above>=16)ct=above;
    else{const avail=vh-ch-16-14-top;if(avail>=140){hh=avail;ct=top+hh+14;}else ct=Math.max(16,vh-ch-16);}
  }
  hl.style.cssText='top:'+top+'px;left:'+left+'px;width:'+w+'px;height:'+hh+'px';
  let cl=r.left+r.width/2-cw/2;cl=Math.max(16,Math.min(vw-cw-16,cl));
  card.style.cssText='top:'+ct+'px;left:'+cl+'px;width:'+cw+'px';
}
function tourEnd(done){
  const k=TOUR?TOUR.k:'s';
  if(TOURTMR){clearTimeout(TOURTMR);TOURTMR=null;}
  TOUR=null;
  try{renderAnn();}catch(e){}
  const r=document.getElementById('tour');if(r&&r.remove)r.remove();
  if(document.body&&document.body.classList)document.body.classList.remove('tour-on');
  tourMark(k);
  if(done){go(k==='d'?'admin':'home');}
  toast(done?'Tour finished. Replay it any time from the footer or your Profile page.':'Tour skipped. You can replay it from the footer or your Profile page.');
}
function tourPromptClose(){const p=document.getElementById('tourask');if(p&&p.remove)p.remove();}
function tourPrompt(k){
  if(!tourOk()||TOUR||document.getElementById('tourask'))return;
  TOURPROMPTED=true;
  const p=document.createElement('section');p.id='tourask';p.className='tourask';p.setAttribute('role','dialog');p.setAttribute('aria-label','Guided tour');
  p.innerHTML='<div class="tourask-i"><b>'+(k==='d'?'New to the staff portal?':'New to BFM Academy?')+'</b><p>'+(k==='d'?'Take a one-minute tour of the staff tools.':'Take a one-minute tour to see where everything is.')+'</p><p class="note">You can replay it any time from the footer or your Profile page.</p></div><div class="tourask-b"><button type="button" class="btn sm" data-tour="start-'+k+'">Start the tour</button><button type="button" class="btn ghost sm" data-tour="dismiss-'+k+'">Skip</button></div>';
  document.body.appendChild(p);
}
/* once, when a person first arrives */
function tourMaybe(){
  if(!tourOk()||TOUR||TOURPROMPTED)return;
  if(S.admin){if(V.n==='admin'&&!tourSeen('d'))tourPrompt('d');return;}
  if(V.n==='home'&&!tourSeen('s')){
    if(COURSES.some(started)){tourMark('s');return;}
    tourPrompt('s');
  }
}
if(typeof document.addEventListener==='function'){
  document.addEventListener('click',e=>{
    const b=e.target&&e.target.closest?e.target.closest('[data-tour]'):null;if(!b)return;
    const a=b.dataset.tour;
    if(a==='next'&&TOUR)tourShow(TOUR.i+1);
    else if(a==='back'&&TOUR)tourShow(TOUR.i-1);
    else if(a==='skip')tourEnd(false);
    else if(a==='start'||a==='start-s'||a==='start-d')tourStart(a==='start-d'?'d':a==='start-s'?'s':(S.admin&&V.n==='admin'?'d':'s'));
    else if(/^dismiss-/.test(a)){tourPromptClose();tourMark(a.slice(8));toast('Tour skipped. You can replay it from the footer or your Profile page.');}
  });
  document.addEventListener('keydown',e=>{
    if(!TOUR)return;
    if(e.key==='Escape'){e.preventDefault();tourEnd(false);}
    else if(e.key==='Tab'){
      const c=document.querySelector('#tour .tour-card');if(!c)return;
      const f=[...c.querySelectorAll('button')].filter(x=>!x.hidden&&!x.disabled);if(!f.length)return;
      const first=f[0],last=f[f.length-1],act=document.activeElement;
      if(e.shiftKey&&(act===first||!c.contains(act))){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&(act===last||!c.contains(act))){e.preventDefault();first.focus();}
    }
    else if(e.key==='ArrowRight'){e.preventDefault();tourShow(TOUR.i+1);}
    else if(e.key==='ArrowLeft'){e.preventDefault();tourShow(TOUR.i-1);}
  });
}
if(typeof window.addEventListener==='function'){
  window.addEventListener('resize',()=>{if(TOUR)tourReflow();});
  window.addEventListener('scroll',()=>{if(TOUR&&!TOURTMR)tourReflow();},{passive:true});
}
const tourLinks=()=>(S.admin?'<li><button data-tour="start-s">Student tour</button></li><li><button data-tour="start-d">Director tour</button></li>':'<li><button data-tour="start-s">Guided tour</button></li>');
const tourCard=()=>'<div class="sec-h" style="margin-top:44px"><h2>Guided tour</h2><span class="meta">A one-minute walk through the Academy.</span></div><div class="card"><p class="note" style="margin:0 0 12px">'+(S.admin?'Replay the tour for students, or the one for directors.':'Replay the tour any time to see where everything is and what to do first.')+'</p><div class="btnrow"><button class="btn" data-tour="start-s">'+ic('play')+(S.admin?'Student tour':'Take the tour')+'</button>'+(S.admin?'<button class="btn ghost" data-tour="start-d">Director tour</button>':'')+'</div></div>';

/* ================= App: navigation, events, PDFs ================= */
let tmr=null,tt=null;
function toast(m){
  const e=$('#toast');if(!e)return;
  e.innerHTML=ic('check')+'<span></span>';const sp=e.querySelector&&e.querySelector('span');if(sp)sp.textContent=m;else e.textContent=m;if(e.classList)e.classList.add('show');
  e.onclick=()=>{if(e.classList)e.classList.remove('show');};
  clearTimeout(tt);tt=setTimeout(()=>{if(e.classList)e.classList.remove('show');},3800);
}
function refresh(){
  const el=$('#app');if(el&&el.classList)el.classList.remove('enter');
  render();
}
function go(n,a){
  a=a||[];NOPEN=false;
  if(n==='quiz')QZ=null;
  if(n==='notifications'){NEWN={};S.notes.forEach(x=>{if(!x.read)NEWN[x.id]=1;x.read=true;});save();}
  if(n!=='admin')ADMSG='';
  if(n!=='profile')RESET=false;
  if(['lesson','quiz','project'].includes(n)){const c=byId[a[0]];if(c&&!lockMsg(c))enroll(c.id);}
  if(tmr){clearTimeout(tmr);tmr=null;}
  const el=$('#app'),cl=el&&el.classList;
  const reduce=stg().calm||(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const swap=()=>{
    tmr=null;V={n,a};render();window.scrollTo(0,0);
    if(cl){cl.remove('leaving');cl.remove('enter');void el.offsetWidth;cl.add('enter');}
  };
  if(!cl||reduce)swap();
  else{cl.add('leaving');tmr=setTimeout(swap,110);}
}
/* record progress, announce anything new */
function commit(){
  const top=S.notes[0]?S.notes[0].id:'';
  sync();
  if(S.notes[0]&&S.notes[0].id!==top&&S.notes[0].type!=='welcome')toast(S.notes[0].msg);
}

/* ---------- downloads and PDF ---------- */
async function saveFile(name,blob){
  let dl=null;
  try{const cl=window.claude||(typeof claude!=='undefined'?claude:null);dl=cl&&cl.use?await cl.use('downloads'):null;}catch(e){}
  if(!dl){
    try{const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000);toast('Downloaded '+name);}
    catch(e){toast('Could not save the file.');}
    return;
  }
  try{await dl.save({filename:name,data:blob});toast('Ready: '+name);}
  catch(e){if(e&&e.code==='declined')return;toast('Could not save the file ('+((e&&e.code)||'error')+').');}
}
const pt=s=>String(s==null?'':s).replace(/[’‘]/g,"'").replace(/[“”]/g,'"').replace(/[–—]/g,'-').replace(/[^\x20-\x7E\u00A0-\u00FF]/g,'');
const HEX={'1':[198,167,94],'2':[198,167,94],'3':[198,167,94],'A':[198,167,94],'T':[198,167,94],'N':[198,167,94],'B':[198,167,94],'V':[198,167,94],'D':[198,167,94]};
const NAVY=[10,10,10];
function newDoc(orient){
  const J=window.jspdf&&window.jspdf.jsPDF;
  if(!J)return null;
  return new J({unit:'pt',format:'letter',orientation:orient||'portrait'});
}
function qrRects(doc,text,x,y,size){
  if(typeof qrcode==='undefined')return;
  const q=qrcode(0,'M');q.addData(text);q.make();
  const n=q.getModuleCount(),cell=size/(n+8);
  doc.setFillColor(255,255,255);doc.rect(x,y,size,size,'F');
  doc.setFillColor(0,0,0);
  for(let r=0;r<n;r++)for(let c=0;c<n;c++)if(q.isDark(r,c))doc.rect(x+(c+4)*cell,y+(r+4)*cell,cell+0.15,cell+0.15,'F');
}
function buildTranscript(doc){
  const W=612,M=48,T=totals(),r=readiness();
  let y=0;
  const band=()=>{doc.setFillColor(NAVY[0],NAVY[1],NAVY[2]);doc.rect(0,0,W,86,'F');
    let tx=M;try{doc.addImage(LOGO_B64,'PNG',M,13,60,60);tx=M+74;}catch(e){}
    doc.setTextColor(255,255,255);doc.setFont('helvetica','bold');doc.setFontSize(20);doc.text('BFM ACADEMY',tx,42);
    doc.setFont('helvetica','normal');doc.setFontSize(11);doc.text('Official Academic Transcript',tx,62);
    doc.setFontSize(9);doc.text('Bushwick Family Ministries',W-M,42,{align:'right'});doc.text('Issued '+fmtDate(isoToday()),W-M,58,{align:'right'});};
  band();y=114;
  doc.setTextColor(20,24,40);
  const p=S.prof,info=[['STUDENT',p.name||'Not entered'],[minsOf(p).length>1?'MINISTRIES':'MINISTRY',minsText(p)||'Not assigned'],['LEADERSHIP ROLE',roleOf(p)||'Not entered'],['ENROLLED',fmtDate(p.enrolled)]];
  info.forEach((x,i)=>{const cx=M+(i%2)*270,cy=y+Math.floor(i/2)*36;
    doc.setFont('helvetica','bold');doc.setFontSize(7.5);doc.setTextColor(95,105,130);doc.text(x[0],cx,cy);
    doc.setFont('helvetica','normal');doc.setFontSize(11);doc.setTextColor(20,24,40);doc.text(doc.splitTextToSize(pt(x[1]),250)[0],cx,cy+14);});
  y+=84;
  const sm=[[T.done+' / '+COUNTED.length,'COURSES'],[fmtH(T.ins),'INSTR. HOURS'],[fmtH(T.ev),'EVENT HOURS'],[fmtH(T.cr),'CREDITS'],[T.done?T.avg+'%':'-','AVG GRADE']];
  doc.setDrawColor(210,216,232);doc.setFillColor(240,243,250);doc.rect(M,y,W-2*M,50,'FD');
  sm.forEach((x,i)=>{const cx=M+14+i*((W-2*M-28)/5);
    doc.setFont('helvetica','bold');doc.setFontSize(15);doc.setTextColor(20,24,40);doc.text(x[0],cx,y+24);
    doc.setFontSize(7);doc.setTextColor(95,105,130);doc.text(x[1],cx,y+38);});
  y+=76;
  const head=(t)=>{doc.setFont('helvetica','bold');doc.setFontSize(10);doc.setTextColor(NAVY[0],NAVY[1],NAVY[2]);doc.text(t,M,y);doc.setDrawColor(NAVY[0],NAVY[1],NAVY[2]);doc.setLineWidth(1);doc.line(M,y+5,W-M,y+5);y+=22;};
  const ensure=(h)=>{if(y+h>720){doc.addPage();y=60;}};
  head('COURSES COMPLETED');
  const cols=[M,M+62,M+300,M+372,M+420,M+466];
  const th=()=>{doc.setFont('helvetica','bold');doc.setFontSize(7.5);doc.setTextColor(95,105,130);['CODE','COURSE','COMPLETED','GRADE','HOURS','CREDITS'].forEach((h,i)=>doc.text(h,cols[i],y));y+=12;};
  th();
  const dc=COURSES.filter(courseDone);
  if(!dc.length){doc.setFont('helvetica','italic');doc.setFontSize(10);doc.setTextColor(95,105,130);doc.text('No courses completed yet.',M,y);y+=20;}
  dc.forEach(c=>{
    const ln=doc.splitTextToSize(pt(c.title),230),h=Math.max(1,ln.length)*12+6;
    ensure(h+14);if(y===60)th();
    const g=gradePct(c);
    doc.setFont('helvetica','bold');doc.setFontSize(9);doc.setTextColor(20,24,40);doc.text(c.code,cols[0],y);
    doc.setFont('helvetica','normal');doc.text(ln,cols[1],y);
    doc.text(pt(fmtDate((S.comp[c.id]||{}).date)),cols[2],y);
    doc.setFont('helvetica','bold');doc.text(letter(g)+'  '+g+'%',cols[3],y);
    doc.setFont('helvetica','normal');doc.text(fmtH(hoursOf(c)),cols[4],y);doc.text(fmtH(creditsOf(c)),cols[5],y);
    y+=h;doc.setDrawColor(228,232,242);doc.setLineWidth(0.5);doc.line(M,y-9,W-M,y-9);
  });
  y+=16;
  ensure(120);head('CERTIFICATES EARNED');
  const cs=TRACKS.filter(t=>S.certs[t.id]);
  if(!cs.length){doc.setFont('helvetica','italic');doc.setFontSize(10);doc.setTextColor(95,105,130);doc.text('None yet.',M,y);y+=20;}
  cs.forEach(t=>{ensure(30);const c=S.certs[t.id];
    doc.setFont('helvetica','bold');doc.setFontSize(10);doc.setTextColor(20,24,40);doc.text(pt(t.cred),M,y);
    doc.setFont('helvetica','normal');doc.setFontSize(9);doc.text('Earned '+pt(fmtDate(c.date))+'   ID '+c.id,M,y+13);y+=30;});
  y+=6;
  if(S.events.length){
    ensure(80);head('CONFERENCES AND SEMINARS');
    S.events.slice().sort((a,b)=>String(a.date).localeCompare(String(b.date))).forEach(e=>{ensure(18);
      doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(20,24,40);
      doc.text(pt(fmtDate(e.date)),M,y);doc.text(doc.splitTextToSize(pt(e.title),270)[0],M+80,y);doc.text(pt(e.type),M+370,y);doc.text(fmtH(+e.hours||0)+' hrs',M+450,y);y+=15;});
    y+=10;
  }
  ensure(190);head('LEADERSHIP READINESS');
  doc.setFont('helvetica','bold');doc.setFontSize(10);doc.setTextColor(20,24,40);doc.text('Overall '+r.overall+'%  -  '+pt(director().status),M,y);y+=16;
  COMPS.forEach((c,i)=>{
    doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(20,24,40);doc.text(pt(c.n),M,y);
    doc.setFillColor(228,232,242);doc.rect(M+170,y-7,240,7,'F');
    if(r.vals[i]>0){doc.setFillColor(198,167,94);doc.rect(M+170,y-7,240*r.vals[i]/100,7,'F');}
    doc.text(r.vals[i]+'%',M+420,y);y+=15;});
  y+=22;ensure(60);
  doc.setDrawColor(20,24,40);doc.setLineWidth(0.6);doc.line(M,y+20,M+200,y+20);doc.line(W-M-200,y+20,W-M,y+20);
  doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(95,105,130);doc.text('Academy Director',M,y+32);doc.text('Date',W-M-200,y+32);
  const n=doc.getNumberOfPages();
  for(let i=1;i<=n;i++){doc.setPage(i);doc.setFont('helvetica','normal');doc.setFontSize(7.5);doc.setTextColor(120,128,150);
    doc.text('1 credit = about 8 instructional hours. Certificate IDs can be checked on the Academy verification page.',M,758,{maxWidth:W-2*M-70});
    doc.text('Page '+i+' of '+n,W-M,758,{align:'right'});}
}
function buildCert(doc,tid,c){
  const t=trackOf(tid),W=792,H=612,url=verifyUrl(c,tid),G=HEX[tid],GI=[122,97,37],INK=[20,24,40],GR=[95,105,130];
  const cs=(n)=>{try{doc.setCharSpace(n);}catch(e){}};
  doc.setDrawColor(G[0],G[1],G[2]);doc.setLineWidth(3.5);doc.rect(24,24,W-48,H-48);
  doc.setLineWidth(0.75);doc.rect(34,34,W-68,H-68);
  doc.setFillColor(G[0],G[1],G[2]);[[34,34],[W-34,34],[34,H-34],[W-34,H-34]].forEach(p=>doc.rect(p[0]-5,p[1]-5,10,10,'F'));
  try{doc.addImage(LOGO_B64,'PNG',W/2-34,48,68,68);}catch(e){doc.setFillColor(G[0],G[1],G[2]);doc.circle(W/2,84,28,'F');doc.setTextColor(10,10,10);doc.setFont('helvetica','bold');doc.setFontSize(15);doc.text('BFM',W/2,86,{align:'center'});}
  doc.setTextColor(GR[0],GR[1],GR[2]);doc.setFont('helvetica','bold');doc.setFontSize(8.5);cs(1.6);
  doc.text('BUSHWICK FAMILY MINISTRIES   -   BFM ACADEMY',W/2,134,{align:'center'});cs(0);
  doc.setTextColor(10,10,10);doc.setFont('helvetica','bold');doc.setFontSize(27);cs(3);doc.text('CERTIFICATE OF COMPLETION',W/2,170,{align:'center'});cs(0);
  doc.setDrawColor(G[0],G[1],G[2]);doc.setLineWidth(1.2);doc.line(W/2-40,184,W/2+40,184);
  doc.setTextColor(60,68,92);doc.setFont('helvetica','normal');doc.setFontSize(11);doc.text('This certificate is proudly presented to',W/2,212,{align:'center'});
  doc.setTextColor(INK[0],INK[1],INK[2]);doc.setFont('times','bolditalic');let fs=42;doc.setFontSize(fs);
  const nm=pt(c.name);while(doc.getTextWidth(nm)>W-220&&fs>18){fs-=2;doc.setFontSize(fs);}
  doc.text(nm,W/2,262,{align:'center'});
  doc.setDrawColor(G[0],G[1],G[2]);doc.setLineWidth(0.8);doc.line(W/2-210,276,W/2+210,276);
  doc.setFont('helvetica','normal');doc.setFontSize(11);doc.setTextColor(60,68,92);doc.text('for successfully completing all requirements of the',W/2,302,{align:'center'});
  doc.setFont('helvetica','bold');doc.setFontSize(22);doc.setTextColor(GI[0],GI[1],GI[2]);doc.text(pt(t.cred),W/2,334,{align:'center'});
  doc.setFont('helvetica','normal');doc.setFontSize(11);doc.setTextColor(60,68,92);doc.text(pt(t.label+': '+t.title),W/2,354,{align:'center'});
  /* signature, date, QR */
  const sy=450;
  doc.setDrawColor(INK[0],INK[1],INK[2]);doc.setLineWidth(0.6);
  doc.line(96,sy,296,sy);doc.line(352,sy,512,sy);
  if(c.signer){doc.setFont('times','italic');doc.setFontSize(24);doc.setTextColor(INK[0],INK[1],INK[2]);doc.text(doc.splitTextToSize(pt(c.signer),200)[0],196,sy-8,{align:'center'});}
  doc.setFont('helvetica','bold');doc.setFontSize(10);doc.setTextColor(INK[0],INK[1],INK[2]);doc.text(pt(c.signer||'Academy Director'),196,sy+15,{align:'center'});
  doc.setFont('helvetica','normal');doc.setFontSize(8.5);doc.setTextColor(GR[0],GR[1],GR[2]);doc.text(pt(c.signerTitle||'BFM Academy'),196,sy+28,{align:'center'});
  doc.setFont('helvetica','normal');doc.setFontSize(13);doc.setTextColor(INK[0],INK[1],INK[2]);doc.text(pt(fmtLong(c.date)),432,sy-8,{align:'center'});
  doc.setFont('helvetica','bold');doc.setFontSize(10);doc.text('Date',432,sy+15,{align:'center'});
  doc.setFont('helvetica','normal');doc.setFontSize(8.5);doc.setTextColor(GR[0],GR[1],GR[2]);doc.text(fmtH(c.hours)+' hours  -  '+fmtH(c.credits)+' credits',432,sy+28,{align:'center'});
  qrRects(doc,url,W-176,sy-42,80);
  doc.setFontSize(7.5);doc.text('Scan to verify',W-136,sy+50,{align:'center'});
  doc.setFont('courier','bold');doc.setFontSize(9);doc.setTextColor(INK[0],INK[1],INK[2]);doc.text('Certificate ID  '+c.id,W/2,540,{align:'center'});
  doc.setFont('helvetica','normal');doc.setFontSize(6);doc.setTextColor(130,138,160);doc.text('Verify: '+url,W/2,556,{align:'center',maxWidth:W-150});
}
async function makePdf(kind,tid,cc){
  const doc=newDoc(kind==='cert'?'landscape':'portrait');
  if(!doc){toast('The PDF tool did not load. Check your connection and try again.');return;}
  try{
    if(kind==='cert')buildCert(doc,tid,cc||S.certs[tid]);else buildTranscript(doc);
    const nm=((kind==='cert'&&cc?cc.name:(S.prof.name||'student')).trim().replace(/[^A-Za-z0-9]+/g,'-').replace(/^-|-$/g,'')||'student');
    const file=kind==='cert'?'BFM-Certificate-'+tid+'-'+nm+'.pdf':'BFM-Transcript-'+nm+'.pdf';
    await saveFile(file,doc.output('blob'));
  }catch(e){toast('Could not build the PDF.');}
}

/* ---------- events ---------- */
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&NOPEN){NOPEN=false;renderNav();}
  if(e.key==='Enter'&&e.target&&(e.target.id==='ad-code'||e.target.id==='ad-fb')){e.preventDefault();admLogin();}
});
function updReadbar(){
  if(typeof document.getElementById!=='function')return;
  const rb=document.getElementById('readbar');if(!rb)return;
  const on=!!(V&&V.n==='lesson');rb.classList.toggle('on',on);
  if(on){const h=document.documentElement,max=Math.max(h.scrollHeight,document.body.scrollHeight)-(window.innerHeight||h.clientHeight);rb.firstElementChild.style.width=(max>0?Math.min(100,Math.max(0,(window.scrollY||0)/max*100)):0)+'%';}
}
if(typeof window.addEventListener==='function')window.addEventListener('scroll',()=>{const t=document.querySelector('.top');if(t&&t.classList)t.classList.toggle('scrolled',(window.scrollY||0)>6);updReadbar();},{passive:true});
document.addEventListener('click',e=>{
  if(NOPEN&&!e.target.closest('.bellwrap')){NOPEN=false;renderNav();}
  const g=e.target.closest('[data-go]');
  if(g&&!g.disabled){const p=g.dataset.go.split(':');go(p[0],p.slice(1));return;}
  const b=e.target.closest('[data-act]');
  if(!b||b.disabled)return;
  const d=b.dataset,k=d.act;
  if(extAct(k,d,b))return;
  if(k==='done-lesson'){S.les[d.c+'.'+d.i]=true;(S.lesAt=S.lesAt||{})[d.c+'.'+d.i]=isoToday();commit();refresh();}
  else if(k==='undo-lesson'){delete S.les[d.c+'.'+d.i];commit();refresh();}
  else if(k==='enroll-course'){const c=byId[d.c];if(c&&!lockMsg(c)){enroll(c.id);refresh();toast(S.preview?'Turn off instructor preview to enroll.':'Enrolled in '+c.code+'.');}}
  else if(k==='scroll-classes'){const el=document.getElementById('classes');if(el&&el.scrollIntoView)el.scrollIntoView({behavior:'smooth',block:'start'});}
  else if(k==='toggle-notes'){
    NOPEN=!NOPEN;
    if(NOPEN){if(S.admin)admMarkSeen();else{NNEW={};S.notes.forEach(x=>{if(!x.read)NNEW[x.id]=1;x.read=true;});save();}}
    renderNav();return;
  }
  else if(k==='enroll-a'){S.enrolledA=true;note('enroll','Enrolled in Track A: Administrative Church Leadership.');save();refresh();toast('Enrolled in Track A.');}
  else if(k==='reg-class'){if(S.preview)toast('Turn off instructor preview to register.');else if(registerClass(d.t)){refresh();toast('You are registered. Your courses are open, and your registration was sent to the Academy Director.');}}
  else if(k==='retake'){QZ=null;refresh();window.scrollTo(0,0);}
  else if(k==='submit-quiz'){
    const c=byId[QZ.cid];
    const correct=c.quiz.filter((_,qi)=>QZ.pick[qi]===0).length;
    const need=passNeed(c);
    const pct=Math.round(correct/c.quiz.length*100),passed=correct>=need;
    const prev=S.quiz[c.id]||{best:0,passed:false,attempts:0};
    S.lastQ[c.id]={pick:c.quiz.map((_,qi)=>QZ.pick[qi]),correct,pct,date:isoToday()};
    S.quiz[c.id]={best:Math.max(prev.best,pct),passed:prev.passed||passed,attempts:prev.attempts+1,date:isoToday()};
    if(!passed){note('failed','Assessment not passed: '+c.code+', '+c.title+'. You scored '+correct+' of '+c.quiz.length+'. The pass mark is '+need+'. Review the lessons and retake it.');toast('Not passed this time. You may retake it.');save();}
    else commit();
    QZ.sub=true;QZ.res={correct,passed};refresh();window.scrollTo(0,0);
  }
  else if(k==='submit-project'){const p=S.proj[d.c];p.done=true;p.date=isoToday();commit();refresh();window.scrollTo(0,0);}
  else if(k==='reopen-project'){S.proj[d.c].done=false;commit();refresh();}
  else if(k==='reset1'){RESET=true;refresh();}
  else if(k==='reset0'){RESET=false;refresh();}
  else if(k==='reset2'){
    const f=defaults();f.prof=S.prof;f.settings=S.settings;f.skips=S.skips;f.access=S.access;f.enrolledA=S.enrolledA;f.enrolledT=S.enrolledT;f.grades=S.grades;f.seenRemoved=S.seenRemoved;f.bm=S.bm;f.lnotes=S.lnotes;f.annSeen=S.annSeen;f.pub=S.pub;f.preview=S.preview;f.admin=S.admin;f.issued=S.issued;f.welcomed=true;S=f;RESET=false;QZ=null;sync();refresh();toast('Progress reset.');
  }
  else if(k==='admin-logout'){admLock('Staff tools are locked.');}
  else if(k==='add-event'){
    const title=($('#ev-title').value||'').trim(),hours=parseFloat($('#ev-hours').value),date=$('#ev-date').value||isoToday(),type=$('#ev-type').value||'Other';
    const msg=$('#evmsg');
    if(title.length<2){if(msg)msg.textContent='Enter the event name.';return;}
    if(!(hours>0)||hours>80){if(msg)msg.textContent='Enter the hours attended, between 0.5 and 80.';return;}
    S.events.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),title,type,date,hours});
    save();refresh();toast('Event added.');
  }
  else if(k==='del-event'){S.events=S.events.filter(x=>x.id!==d.id);save();refresh();}
  else if(k==='cert-name'){
    const c=S.certs[d.t],nm=(S.prof.name||'').trim();
    if(c&&nm){const parts=c.id.split('-');c.name=nm;c.id='BFM-'+d.t+'-'+parts[2]+'-'+parts[3]+'-'+certCheck(d.t,nm,c.date,parts[3]);save();refresh();toast('Certificate updated.');}
  }
  else if(k==='verify-id'){
    const v=($('#vf-id').value||'').trim().toUpperCase();
    VFR={id:v,m:/^BFM-[123ABDNTV]-\d\d-[0-9A-Z]{5}-[0-9A-Z]{3}$/.test(v)};refresh();
  }
  else if(k==='pdf-transcript'){makePdf('transcript');}
  else if(k==='pdf-cert'){makePdf('cert',d.t);}
  else if(k==='pdf-icert'){const r=S.issued[+d.i];if(r)makePdf('cert',r.tid,r.c);}
  else if(k==='del-issued'){S.issued.splice(+d.i,1);save();refresh();}
  else if(k==='gen-cert'){
    const tid=$('#g-track').value,name=($('#g-name').value||'').trim(),signer=($('#g-signer').value||'').trim(),title=($('#g-title').value||'').trim(),date=$('#g-date').value||isoToday();
    const msg=$('#gmsg'),say=m=>{ADMSG=m;if(msg)msg.textContent=m;};
    if(name.length<2)return say('Enter the recipient name.');
    if(signer.length<2)return say('Enter the name of the person signing.');
    const r5=rand5(),std=stdTotals(tid);
    const cert={id:'BFM-'+tid+'-'+date.slice(2,4)+'-'+r5+'-'+certCheck(tid,name,date,r5),date,name,hours:std.h,credits:std.cr,signer,signerTitle:title};
    S.issued.push({tid,c:cert});ADMSG='';save();go('icert',[String(S.issued.length-1)]);
  }
});
document.addEventListener('input',e=>{
  const t=e.target;
  if(extInput(t))return;
  if(t.id==='pf-name'){S.prof.name=t.value;save();renderNav();return;}
  if(t.dataset&&t.dataset.ref){
    const [cid,i,q]=t.dataset.ref.split(':'),k=cid+'.'+i;
    const arr=S.ref[k]||(S.ref[k]=[]);arr[+q]=t.value;save();
    const l=byId[cid].lessons[+i];
    const ok=l.rq.every((_,qi)=>(arr[qi]||'').trim().length>=10);
    const btn=$('#donebtn'),gate=$('#gate');
    if(btn)btn.disabled=!ok;
    if(gate)gate.textContent=ok?'':'Answer each reflection question with at least a sentence to complete this lesson.';
    return;
  }
  if(t.dataset&&(t.dataset.pn||t.dataset.pm)){
    const cid=t.dataset.pn||t.dataset.pm,p=S.proj[cid];
    if(t.dataset.pn)p.notes=t.value;else p.mentor=t.value;
    save();projGate(cid);
  }
});
function projGate(cid){
  const c=byId[cid],p=S.proj[cid],ok=projReady(c,p),b=$('#subp'),g=$('#pgate');
  if(b)b.disabled=!ok;
  if(g)g.textContent=ok?'':'Check every deliverable, write at least a couple of sentences, and name your reviewer to submit.';
}
document.addEventListener('change',e=>{
  const t=e.target;
  if(extChange(t))return;
  if(t.id==='prev'){if(!S.admin){t.checked=false;return;}S.preview=t.checked;save();refresh();return;}
  if(t.id==='pf-enrolled'){if(t.value)S.prof.enrolled=t.value;save();return;}
  if(t.dataset&&t.dataset.q!==undefined&&QZ){
    QZ.pick[+t.dataset.q]=+t.value;
    const c=byId[QZ.cid],b=$('#subq');
    if(b)b.disabled=!c.quiz.every((_,qi)=>QZ.pick[qi]!==undefined);
    const qc=$('#qcount');if(qc){const n=c.quiz.filter((_,qi)=>QZ.pick[qi]!==undefined).length;qc.textContent=qCountText(n,c.quiz.length);if(qc.classList)qc.classList[n===c.quiz.length?'add':'remove']('done');}
    return;
  }
  if(t.dataset&&t.dataset.pd){
    const [cid,i]=t.dataset.pd.split(':');
    S.proj[cid].d[+i]=t.checked;save();projGate(cid);
  }
});
function fromHash(){
  let h='';try{h=(typeof location!=='undefined'&&location.hash||'').replace(/^#/,'');}catch(e){}
  if(h.indexOf('verify-')===0){go('verify',[h.slice(7)]);return true;}
  return false;
}
if(typeof window.addEventListener==='function')window.addEventListener('hashchange',fromHash);
render();fromHash();
})();
