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