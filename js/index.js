import * as helperFunction from './helper_functions.js';
import * as typeWriter from './typewriter.js';
const sideBar = document.querySelector('.side-bar');
const openNavBtn = document.getElementById('open-sidebar');
const textSpan = document.getElementById('typing');
const closeNavBtn = document.getElementById('close-sidebar');
const cursor = document.querySelector('.cursor');


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