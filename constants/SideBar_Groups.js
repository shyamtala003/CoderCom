let sideBarGroups = [
  {
    groupName: "Javascript Community",
    tags: ["General", "Angular", "React js", "Backend with JS"],
    GroupType: "public",
  },
  {
    groupName: "Python Community",
    tags: ["General", "WebDev Py", "Machine Learning Py"],
    GroupType: "public",
  },
  {
    groupName: "Java Community",
    groupDesc: "Learn and help from each other. It doesn't matter from wh...",
    groupCoverImage: "./images/cards/s3.webp",
    numOfPeople: 112,
    tags: ["General"],
    GroupType: "public",
  },
  {
    groupName: "C/CPP Community",
    groupDesc: "Learn and help from each other. It doesn't matter from wh...",
    groupCoverImage: "./images/cards/s4.webp",
    numOfPeople: 112,
    tags: ["General", "C Programing", "CPP"],
    GroupType: "public",
  },
  {
    groupName: "System Design Com...",
    groupDesc: "Learn and help from each other. It doesn't matter from wh...",
    groupCoverImage: "./images/cards/s5.webp",
    numOfPeople: 43,
    tags: ["General"],
    GroupType: "public",
  },
  {
    groupName: "Mobile developer...",
    groupDesc: "Learn and help from each other. It doesn't matter from wh...",
    groupCoverImage: "./images/cards/s6.webp",
    numOfPeople: 89,
    tags: ["General", "react native", "flutter", "ios", "android"],
    GroupType: "public",
  },
  {
    groupName: "Front-End Community",
    groupDesc: "Learn and help from each other. It doesn't matter from wh...",
    groupCoverImage: "./images/cards/s7.webp",
    numOfPeople: 1289,
    tags: ["General", "HTML & CSS", "Tailwind", "Bootstrap", "Material"],
    GroupType: "public",
  },
  {
    groupName: "Data Structure & Al...",
    groupDesc: "Learn and help from each other. It doesn't matter from wh...",
    groupCoverImage: "./images/cards/s8.webp",
    numOfPeople: 89,
    tags: [
      "General",
      "DSA With Python",
      "DSA with Java",
      "DSA With JavaScript",
    ],
    GroupType: "public",
  },
  {
    groupName: "Database Community",
    groupDesc: "Learn and help from each other. It doesn't matter from wh...",
    groupCoverImage: "./images/cards/s9.webp",
    numOfPeople: 34,
    tags: ["General", "Sql", "NoSql"],
    GroupType: "public",
  },
  {
    groupName: "DevOps Community",
    groupDesc: "Learn and help from each other. It doesn't matter from wh...",
    groupCoverImage: "./images/cards/s10.webp",
    numOfPeople: 34,
    tags: ["General", "Linux", "Docker", "Ansible", "Kubernetes"],
    GroupType: "public",
  },
  {
    groupName: "Cloud Community",
    groupDesc: "Learn and help from each other. It doesn't matter from wh...",
    groupCoverImage: "./images/cards/s11.webp",
    numOfPeople: 32,
    tags: ["General", "Azure", "Aws", "GCP"],
    GroupType: "public",
  },
  {
    groupName: "Campus Tech...",
    groupDesc: "Learn and help from each other. It doesn't matter from wh...",
    groupCoverImage: "./images/cards/s12.webp",
    numOfPeople: 12,
    tags: ["General", "Batch-2"],
    GroupType: "private",
  },
  {
    groupName: "Software Testing..",
    groupDesc: "Learn and help from each other. It doesn't matter from wh...",
    groupCoverImage: "./images/cards/s13.webp",
    numOfPeople: 43,
    tags: ["General", "JavaScript -QA", "Cypress", "Manual Testing"],
    GroupType: "public",
  },
  {
    groupName: "Backend devs...",
    groupDesc: "Learn and help from each other. It doesn't matter from wh...",
    groupCoverImage: "./images/cards/s14.webp",
    numOfPeople: 435,
    tags: ["General", "JS Backend", "JAVA Backend", "PHP"],
    GroupType: "public",
  },
  {
    groupName: "Javascript paid..",
    groupDesc: "Learn and help from each other. It doesn't matter from wh...",
    groupCoverImage: "./images/cards/s15.webp",
    numOfPeople: 435,
    tags: ["General", "Chat"],
    GroupType: "private",
  },
];

let GroupSidebar = document.querySelectorAll(".side__navbar");
GroupSidebar = GroupSidebar[1];

sideBarGroups.forEach((Element) => {
  if (Element.GroupType == "public") {
    var li = document.createElement("li");
    li.classList.add("dropdown-btn");
    var textCon = document.createTextNode(Element.groupName);
    var IonIcon = document.createElement("ion-icon");
    IonIcon.setAttribute("name", "caret-forward-outline");
    li.appendChild(IonIcon);
    li.appendChild(textCon);
    GroupSidebar.appendChild(li);

    var dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");

    Element.tags.forEach((tagName) => {
      var link = document.createElement("a");
      link.setAttribute("href", "#");
      var linkText = document.createTextNode(`# ${tagName}`);
      link.appendChild(linkText);
      dropdownContent.appendChild(link);
    });

    GroupSidebar.appendChild(dropdownContent);
  } else {
    var li = document.createElement("li");
    li.classList.add("dropdown-btn");
    var textCon = document.createTextNode(Element.groupName);
    var IonIcon = document.createElement("ion-icon");
    IonIcon.setAttribute("name", "caret-forward-outline");
    var IonIcon2 = document.createElement("ion-icon");
    IonIcon2.setAttribute("name", "lock-closed");
    li.appendChild(IonIcon);
    li.appendChild(IonIcon2);
    li.appendChild(textCon);
    GroupSidebar.appendChild(li);

    var dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");

    Element.tags.forEach((tagName) => {
      var link = document.createElement("a");
      link.setAttribute("href", "#");
      var linkText = document.createTextNode(`# ${tagName}`);
      link.appendChild(linkText);
      dropdownContent.appendChild(link);
    });

    GroupSidebar.appendChild(dropdownContent);
  }
});
