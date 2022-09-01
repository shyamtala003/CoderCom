// toggle dropdown
let dropDownBtn = document.querySelectorAll('.dropdown-btn');

dropDownBtn.forEach((Element) => {
    Element.addEventListener("click", () => {
        let content = Element.nextElementSibling;
        content.classList.toggle("toggle")

        const collection = Element.children;
        collection[0].classList.toggle("toogle__arrow");
    })
})


// navbar open/close

let Navabar = document.getElementById('sidebar');
let menuIcon = document.getElementById('menu__icon');

menuIcon.addEventListener("click", () => {
    Navabar.classList.toggle("sidebar__toggle");
    setTimeout(() => {
        menuIcon.getAttribute("src") === "./images/nav-icon.png" ? menuIcon.setAttribute("src", "./images/close.png") : menuIcon.setAttribute("src", "./images/nav-icon.png");
    }, 200)
})


// code for modal open/close

let Modal = document.getElementById('modal-login');
let ModalClose = document.getElementById('modal__close');
let cardBtns=document.querySelectorAll(".card__btn")

// set drop down modal active on any login button clicked of entire page

cardBtns.forEach((Element)=>{
    Element.addEventListener("click", () => {
        Modal.classList.toggle("modal-active");
    })
})

ModalClose.addEventListener("click", () => {
    Modal.classList.remove("modal-active")
})


let modalTitle = document.getElementById('modal-title');
let modalBtn = document.getElementById('text-toggle');
let modalBtn2 = document.getElementById('modal-btn-text');

modalBtn.addEventListener("click", () => {

    if (modalBtn.innerHTML == "Login") {
        modalBtn2.innerText = "Don't have an account?";
        modalBtn.innerText = "Register";
        modalTitle.innerText = "Register";
    } else {
        modalBtn2.innerText = "Already have an account?";
        modalBtn.innerText = "Login";
        modalTitle.innerText = "Login";
    }
})
console.log(modalBtn2.innerText);






// swipper js code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1
          },
        500: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2
          },
        700: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3
          },
        800: {
            slidesPerView: 2,
            spaceBetween: 40,
            slidesPerGroup: 2
          },
        1125: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3
          },
        1400: {
          slidesPerView: 5,
          spaceBetween: 50,
          slidesPerGroup: 5
        },
        
    }
});


