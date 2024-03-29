//
const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;

openNavMenu.addEventListener("click", toggleNav);
closeNavMenu.addEventListener("click", toggleNav);
//close the navmenu by clicking outside
menuOverlay.addEventListener("click", toggleNav);


function toggleNav() {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
}
navMenu.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
       //prevent Default anchor click behavior
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        //if menuItemhasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
            collapseSubMenu();
        }else{
        //collapse existing expanded menuItemhasChildren
        if (navMenu.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
        }
        //expand  new menuItemHasChildren
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
}
});
function collapseSubMenu() {
    navMenu.querySelector(".menu-item-has-children.active .sub-menu").removeAttribute("style");
    navMenu.querySelector(".menu-item-has-children.active").classList.remove("active");
}
function resizeFix(){
    //if navmenu is open, close it
    if(navMenu.classList.contains("open")){
        toggleNav();
    }
    //if menuItemHaschildren is expanded, collapse it
    if (navMenu.querySelector(".menu-item-has-children.active")) {
        collapseSubMenu();
    }
}

window.addEventListener("resize", function(){
    if(this.innerWidth > mediaSize){
        resizeFix();
    }
})


const questions = document.querySelectorAll(".question-answer");

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})