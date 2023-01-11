// toggle dropdown
let dropDownBtn = document.querySelectorAll(".dropdown-btn");

dropDownBtn.forEach((Element) => {
  Element.addEventListener("click", () => {
    let content = Element.nextElementSibling;
    content.classList.toggle("toggle");

    const collection = Element.children;
    collection[0].classList.toggle("toogle__arrow");
  });
});

// navbar open/close

let Navabar = document.getElementById("sidebar");
let menuIcon = document.getElementById("menu__icon");
let swiper1 = document.querySelectorAll(".swiper");

menuIcon.addEventListener("click", () => {
  Navabar.classList.toggle("sidebar__toggle");
  setTimeout(() => {
    if (menuIcon.getAttribute("src") === "./images/nav-icon.webp") {
      menuIcon.setAttribute("src", "./images/close.webp");
      swiper1[0].style.zIndex = "-1";
      swiper1[1].style.zIndex = "-1";
    } else {
      menuIcon.setAttribute("src", "./images/nav-icon.webp");
      swiper1[0].style.zIndex = "1";
      swiper1[1].style.zIndex = "1";
    }
  }, 200);
});

// code for modal open/close

let Modal = document.getElementById("modal-login");
let ModalClose = document.getElementById("modal__close");
let cardBtns = document.querySelectorAll(".card__btn");

// set drop down modal active on any login button clicked of entire page

cardBtns.forEach((Element) => {
  Element.addEventListener("click", () => {
    Modal.classList.toggle("modal-active");
  });
});

ModalClose.addEventListener("click", () => {
  Modal.classList.remove("modal-active");
});

let modalTitle = document.getElementById("modal-title");
let modalBtn = document.getElementById("text-toggle");
let modalBtn2 = document.getElementById("modal-btn-text");

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
});

// swipper js code

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,
  loop: false,

  navigation: {
    nextEl: ".next_btn_card",
    prevEl: ".prev_btn_card",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 3,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 2,
    },
    1125: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 3,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 50,
      slidesPerGroup: 5,
    },
  },
});

// swiper init code for testimonials section

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,
  loop: true,
  allowTouchMove: true,

  navigation: {
    nextEl: ".next_btn",
    prevEl: ".prev_btn",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
  },
});

// script of Q&A section

let QAN = document.querySelectorAll(".q__and__a");
QAN.forEach((Element) => {
  // given line close the all collaps
  Element.addEventListener("click", () => {
    Element.classList.toggle("active");
    let Icon_arraow = Element.querySelector(".down");

    // given line change icon of q&a <section></section>
    Icon_arraow.getAttribute("name") == "chevron-down-outline"
      ? Icon_arraow.setAttribute("name", "close")
      : Icon_arraow.setAttribute("name", "chevron-down-outline");
  });
});

// script for theme changer

let themeToggler = document.getElementById("theme__toggler");
let themeTogglerBtn = document.getElementById("theme__toggler__btn");
let descSection = document.querySelector(".community__desc p.title");
let heroImage = document.getElementsByClassName("hero__img");
let logo = document.getElementById("header_logo");
let appMockupImage = document.getElementById("app__mockup");

themeTogglerBtn.addEventListener("click", () => {
  if (themeToggler.getAttribute("href") == "./css/light.css") {
    themeToggler.setAttribute("href", "./css/dark.css");
    themeTogglerBtn.firstElementChild.setAttribute("name", "sunny-outline");
    heroImage[0].setAttribute("src", "./images/hero_image_dark.webp");
    descSection.style.background = "none";
    appMockupImage.setAttribute("src", "./images/iphone_dark.webp");
  } else {
    themeToggler.setAttribute("href", "./css/light.css");
    themeTogglerBtn.firstElementChild.setAttribute("name", "moon-outline");
    heroImage[0].setAttribute("src", "./images/hero_image.webp");
    descSection.style.background = "url('../images/bg.webp') no-repeat";
    descSection.style.backgroundPosition = "center center";
    appMockupImage.setAttribute("src", "./images/iphone_light.webp");
  }
});

// coder for page title
setInterval(() => {
  if (document.title == "Coder Community") {
    document.title = "1 new message";
  } else {
    document.title = "Coder Community";
  }
}, 1000);

// script for preloader
// let preloader = document.getElementById("preloader");

// window.addEventListener("load", () => {
//   preloader.style.display = "none";
// });

// script for live session image changes
let meetingImage = document.getElementById("meeting_img");

if (document.body.clientWidth <= 700) {
  meetingImage.setAttribute("src", "../images/meeting_app.webp");
}

window.addEventListener("resize", () => {
  if (document.body.clientWidth <= 700) {
    meetingImage.setAttribute("src", "../images/meeting_app.webp");
  } else {
    meetingImage.setAttribute("src", "../images/meeting_web.webp");
  }
});

// animation on scroll script

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("animation__play");
//     } else {
//       entry.target.classList.remove("animation__play");
//     }
//   });
// });

// const animationPauseElement = document.querySelectorAll(".animation__pause");
// animationPauseElement.forEach((el) => observer.observe(el));
