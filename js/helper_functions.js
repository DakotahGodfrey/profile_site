
export function slideSidenavIn() {
    const sideBar = document.getElementById('side-bar')
    const lightBox = document.querySelector(".light-box");
    const openNavBtn =document.getElementById('open-sidebar')

    sideBar.style.transition =
      "transform .9s .3s ease-out, visibility .9s .3s linear";
    sideBar.classList.add('active');

     openNavBtn.style.visibility = "hidden";
    
     lightBox.style.transition = "visibility 1s 0.6s ease-out";
     lightBox.style.visibility = "visible";

     lightBox.addEventListener('click', () => {
         if(sideBar.classList.contains('active')){
             sideBar.classList.remove('active')
             lightBox.style.visibility='hidden'
             openNavBtn.style.visibility='visible'
         }
     })
}

export function slideSideNavOut(){
    const sideBar = document.getElementById('side-bar')
    const openNavBtn = document.getElementById('open-sidebar')
    const lightBox = document.querySelector('.light-box')

    sideBar.classList.remove('active');
    openNavBtn.style.visibility = "visible";
    lightBox.style.transition = "none";
    lightBox.style.visibility = "hidden";

}

