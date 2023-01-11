let BottomBarLinks = [
  {
    pageName: "Home",
    icon: "home-outline",
    link: "#",
  },
  {
    pageName: "explore groups",
    icon: "navigate-circle-outline",
    link: "#",
  },
  {
    pageName: "events",
    icon: "calendar-outline",
    link: "#",
  },
  {
    pageName: "settings",
    icon: "settings-outline",
    link: "#",
  },
];

let BottomBar = document.querySelector(".bottom_navbar");
let counter = 0;

BottomBarLinks.forEach((Element) => {
  counter += 1;

  if (counter == 1) {
    BottomBar.innerHTML += `
            <a href=${Element.link} aria-label=${Element.pageName} class="active"><ion-icon name=${Element.icon}></ion-icon><span class="nav__text">${Element.pageName}</span></a>
        `;
  } else {
    BottomBar.innerHTML += `
        <a href=${Element.link} aria-label=${Element.pageName}><ion-icon name=${Element.icon}></ion-icon><span class="nav__text">${Element.pageName}</span></a>
        `;
  }
});
