const intro = document.getElementById("intro");
const video = document.getElementById("introVideo");
const enterBtn = document.getElementById("enterBtn");
const skipBtn = document.getElementById("skipBtn");

function enterSite(){
  intro.classList.add("hide");
  setTimeout(()=>intro.remove(),750);
  document.body.classList.add("entered");
}
enterBtn.addEventListener("click", enterSite);
skipBtn.addEventListener("click", enterSite);
video.addEventListener("ended", ()=> {
  // يبقى زر الدخول ظاهرًا بدل الانتقال التلقائي
});

document.getElementById("copyUid").addEventListener("click", async (e)=>{
  try{
    await navigator.clipboard.writeText("5177803934");
    e.target.textContent="تم النسخ ✓";
    setTimeout(()=>e.target.textContent="نسخ",1500);
  }catch{
    e.target.textContent="5177803934";
  }
});
