// toggle dropdown
let dropDownBtn = document.querySelectorAll('.dropdown-btn');

dropDownBtn.forEach((Element)=>{
    Element.addEventListener("click",()=>{
        let content = Element.nextElementSibling;
        content.classList.toggle("toggle")
        
        const collection = Element.children;
        collection[0].classList.toggle("toogle__arrow");
    })
})


// navbar open/close

let Navabar = document.getElementById('sidebar');
let menuIcon = document.getElementById('menu__icon');

menuIcon.addEventListener("click", ()=>{
    Navabar.classList.toggle("sidebar__toggle");
    setTimeout( () => {
        menuIcon.getAttribute("src")==="./images/nav-icon.png"? menuIcon.setAttribute("src","./images/close.png") : menuIcon.setAttribute("src","./images/nav-icon.png");
    }, 200)
})


// code for modal open/close

let Modal = document.getElementById('modal-login');
let ModalClose = document.getElementById('modal__close');

let loginBtn1 = document.getElementById('login-btn');
let loginBtn2 = document.getElementById('join-btn');


loginBtn1.addEventListener("click", () => {
    Modal.classList.toggle("modal-active");
})

loginBtn2.addEventListener("click", () => {
    Modal.classList.toggle("modal-active");
})

ModalClose.addEventListener("click", () => {
    Modal.classList.remove("modal-active")
})


let modalTitle=document.getElementById('modal-title');
let modalBtn=document.getElementById('text-toggle');
let modalBtn2= document.getElementById('modal-btn-text');

modalBtn.addEventListener("click", () => {
    
    if(modalBtn.innerHTML=="Login")
    {
        modalBtn2.innerText="Don't have an account?";
        modalBtn.innerText="Register";
        modalTitle.innerText="Register";
    }else
    {
        modalBtn2.innerText="Already have an account?";
        modalBtn.innerText="Login";
        modalTitle.innerText="Login";
    }
})
console.log(modalBtn2.innerText);
