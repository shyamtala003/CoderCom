let mainPages = [{
        pageName: "Home",
        icon: "home-outline",
        link: "#"
    },
    {
        pageName: "explore groups",
        icon: "navigate-circle-outline",
        link: "#"
    },
    {
        pageName: "events",
        icon: "calendar-outline",
        link: "#"
    },
    {
        pageName: "settings",
        icon: "settings-outline",
        link: "#"
    }
]

let navbarLinks = document.querySelectorAll(".side__navbar");
let mainLinks = navbarLinks[0];

mainPages.forEach(Element => {
    mainLinks.innerHTML += `
    <a href=${Element.link}>
        <li>
            <ion-icon name=${Element.icon}></ion-icon> ${Element.pageName}
        </li>
    </a>
    `;
})