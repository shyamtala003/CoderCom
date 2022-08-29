// toggle dropdown
let dropDownBtn= document.querySelectorAll('.dropdown-btn');

dropDownBtn.forEach((Element)=>{
    Element.addEventListener("click",()=>{
        let content = Element.nextElementSibling;
        content.classList.toggle("toggle")
        
        const collection = Element.children;
        collection[0].classList.toggle("toogle__arrow");
    })
})


// navbar open/close

let Navabar=document.getElementById('sidebar');
let menuIcon=document.getElementById('menu__icon');

menuIcon.addEventListener("click",()=>{
    Navabar.classList.toggle("sidebar__toggle");
    menuIcon.getAttribute("name")==="menu-outline"? menuIcon.setAttribute("name","close-outline") : menuIcon.setAttribute("name","menu-outline");
})