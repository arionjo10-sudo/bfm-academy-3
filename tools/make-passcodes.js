#!/usr/bin/env node
/* Generates Academy Director access codes.
   Usage:  node tools/make-passcodes.js [how-many]     (default 10)
   - Prints the lines to paste over ADMIN_KEYS in js/app.js (hashes only, safe to publish).
   - Writes staff-passcodes.txt (the real codes). Hand each code to ONE person, then delete the file.
   Never put the plain codes in the website files. */
const crypto=require('crypto'),fs=require('fs');
const N=Math.max(1,Math.min(40,+process.argv[2]||10)),ITER=150000;
const AB='ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // 31 characters, no 0/O/1/I/L
function code(){let s='';while(s.length<10){const b=crypto.randomBytes(1)[0];if(b<248)s+=AB[b%31];}return s.slice(0,5)+'-'+s.slice(5);}
const keys=[],lines=[];
for(let i=1;i<=N;i++){
  const c=code(),salt=crypto.randomBytes(16);
  const h=crypto.pbkdf2Sync(c.replace('-',''),salt,ITER,32,'sha256').toString('hex');
  keys.push({n:i,s:salt.toString('hex'),h});lines.push('Director access code '+i+':  '+c);
}
fs.writeFileSync('staff-passcodes.txt','BFM Academy - Director access codes\nGive each code to ONE person. Keep this file private, then delete it.\n\n'+lines.join('\n')+'\n');
console.log('const ADMIN_ITER='+ITER+';\nconst ADMIN_KEYS='+JSON.stringify(keys)+';');
