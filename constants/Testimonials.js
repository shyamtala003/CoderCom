let card = [{
        name: "Hitesh Choudhary",
        profession: "Co-founder LCO",
        image: "./images/hitesh_sir_1.png",
        testimonialDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in labore facere dolores, autem placeat iusto. Porro, voluptas quo? Non quasi cum aperiam ratione accusamus sit, praesentium sint ex ipsam?",
    },
    {
        name: "Patrick Akil",
        profession: "Software Engineer",
        image: "./images/beyond_coding.png",
        testimonialDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in labore facere dolores, autem placeat iusto. Porro, voluptas quo? Non quasi cum aperiam ratione accusamus sit, praesentium sint ex ipsam?",
    },
    {
        name: "Kevin Powell",
        profession: "CSS Evangelist",
        image: "./images/webdev.png",
        testimonialDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in labore facere dolores, autem placeat iusto. Porro, voluptas quo? Non quasi cum aperiam ratione accusamus sit, praesentium sint ex ipsam?",
    },
    {
        name: "Jessica Chan",
        profession: "Web Developer",
        image: "./images/wes_bos.png",
        testimonialDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in labore facere dolores, autem placeat iusto. Porro, voluptas quo? Non quasi cum aperiam ratione accusamus sit, praesentium sint ex ipsam?",
    },

];


let cardWrapper = document.querySelectorAll(".swiper-wrapper");
cardWrapper = cardWrapper[1];

card.forEach((Element) => {
    cardWrapper.innerHTML +=
        `   
    <div class="swiper-slide">
    <div class="testimonial__card">
    <div class="testimonial__image">
    <img src=${Element.image} alt="">
    </div>
    <div class="testimonial__cotent">
    <img src="./images/“.png" alt="">
    <p class="testimonial__desc">${Element.testimonialDesc}</p>
    <p class="name">${Element.name}</p>
    <p class="profession">${Element.profession}</p>
    </div>
    </div>
    </div>`;
})