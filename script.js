const intro=document.getElementById('intro');
const video=document.getElementById('introVideo');
const website=document.getElementById('website');
const skip=document.getElementById('skipIntro');
let entered=false;
function enterSite(){
  if(entered)return; entered=true;
  intro.style.transition='opacity .8s ease'; intro.style.opacity='0';
  setTimeout(()=>{intro.remove(); website.classList.add('show'); reveal();},800);
}
video.addEventListener('ended',enterSite);
skip.addEventListener('click',enterSite);
setTimeout(enterSite,9000);

const copy=document.getElementById('copyUid');
copy.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText('5177803934')}catch(e){
    const ta=document.createElement('textarea');ta.value='5177803934';document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();
  }
  const toast=document.getElementById('toast');toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1700);
});

function reveal(){
  const items=document.querySelectorAll('.reveal');
  const obs=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.08});
  items.forEach(x=>obs.observe(x));
}

const links=[...document.querySelectorAll('.nav-links a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
window.addEventListener('scroll',()=>{
  let current=sections[0];
  sections.forEach(s=>{if(window.scrollY+180>=s.offsetTop)current=s});
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current.id));
});

document.getElementById('menuBtn').addEventListener('click',()=>{
  const nav=document.querySelector('.nav-links');
  nav.style.display=nav.style.display==='flex'?'none':'flex';
  nav.style.position='absolute';nav.style.top='80px';nav.style.left='3%';nav.style.right='3%';nav.style.height='auto';nav.style.padding='18px';nav.style.border='1px solid #333';nav.style.borderRadius='16px';nav.style.background='rgba(0,0,0,.96)';nav.style.flexDirection='column';
});
