const entry=document.getElementById('entry');
const page=document.getElementById('page');
const video=document.getElementById('introVideo');
const skip=document.getElementById('skip');
let entered=false;
function enterSite(){
  if(entered)return;
  entered=true;
  entry.style.transition='opacity .8s ease';
  entry.style.opacity='0';
  page.classList.add('show');
  setTimeout(()=>entry.remove(),850);
}
video.addEventListener('ended',enterSite);
skip.addEventListener('click',enterSite);
setTimeout(enterSite,9000);

document.getElementById('copyUid').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText('5177803934')}catch(e){}
  const t=document.getElementById('toast');
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),1800);
});

document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click',()=>{
    document.querySelectorAll('nav a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
  });
});
