import * as helperFunction from './helper_functions.js';
import * as typeWriter from './typewriter.js';
const openNavBtn = document.getElementById('open-sidebar');
const closeNavBtn = document.getElementById('close-sidebar');
const cursor = document.querySelector('.cursor');
const heroBtn = document.getElementById("hero-btn");


openNavBtn.addEventListener('click', ()=>{
    helperFunction.slideSidenavIn();
    cursor.style.visibility='hidden';
    
   
})

closeNavBtn.addEventListener('click', ()=>{
    helperFunction.slideSideNavOut();
    cursor.style.visibility = "visible";
    


})

addEventListener('DOMContentLoaded', ()=>{
    typeWriter.typeWriter()
})

if (document.body.animate) {
  heroBtn.addEventListener("click", helperFunction.pop);
}

// window.addEventListener('scroll', ()=> {
//     mainHeader.style.opacity='0.01'
//     mainHeader.style.transform='translateY(-80px)'
// })
let scrollPosition = 0;

window.addEventListener("scroll", () => {
  if ((document.body.getBoundingClientRect()).top > scrollPosition) {
    helperFunction.scrollHeaderDOWN();
  } else{
      helperFunction.scrollHeaderUP()
  }
  scrollPosition = (document.body.getBoundingClientRect()).top
});
