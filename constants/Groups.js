
// Note:currently given propertie(tags) inside each array object is not in used 
let group=[
    {
        groupName:"Javascript Community",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s1.jpg",
        numOfPeople:248,
        tags:["General","Angular","React js","Backend with JS"]
    },
    {
        groupName:"Python Community",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s2.png",
        numOfPeople:123,
        tags:["General","WebDev Py","Machine Learning Py"]
    },
    {
        groupName:"Java Community",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s3.png",
        numOfPeople:112,
        tags:["General"]
    },
    {
        groupName:"C/CPP Community",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s4.png",
        numOfPeople:112,
        tags:["General","C Programing","CPP"]
    },
    {
        groupName:"System Design Community",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s5.png",
        numOfPeople:43,
        tags:["General"]
    },
    {
        groupName:"Mobile developer Community",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s6.png",
        numOfPeople:89,
        tags:["General","react native","flutter","ios","android"]
    },
    {
        groupName:"Front-End Community",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s7.png",
        numOfPeople:1289,
        tags:["General","HTML & CSS","Tailwind","Bootstrap","Material"]
    },
    {
        groupName:"Data Structure & Algorithm",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s8.png",
        numOfPeople:89,
        tags:["General","DSA With Python","DSA with Java","DSA With JavaScript"]
    },
    {
        groupName:"Database Community",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s9.png",
        numOfPeople:34,
        tags:["General","Sql","NoSql"]
    },
    {
        groupName:"DevOps Community",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s10.png",
        numOfPeople:34,
        tags:["General","Linux","Docker","Ansible","Kubernetes"]
    },
    {
        groupName:"Cloud Community",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s11.png",
        numOfPeople:32,
        tags:["General","Azure","Aws","GCP"]
    },
    {
        groupName:"Campus Tech leaders",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s12.png",
        numOfPeople:12,
        tags:["General","Batch-2"]
    },
    {
        groupName:"Software Testing Community",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s13.png",
        numOfPeople:43,
        tags:["General","JavaScript -QA","Cypress","Manual Testing"]
    },
    {
        groupName:"Backend devs Community",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s14.png",
        numOfPeople:435,
        tags:["General","JS Backend","JAVA Backend","PHP"]
    },
    {
        groupName:"Javascript paid bootcamp | Pro",
        groupDesc:"Learn and help from each other. It doesn't matter from wh...",
        groupCoverImage:"./images/cards/s15.png",
        numOfPeople:435,
        tags:["General","Chat"]
    },

];


let groupWrapper=document.querySelectorAll(".swiper-wrapper");
groupWrapper=groupWrapper[0];

group.forEach((Element) => {
    groupWrapper.innerHTML+=
    `   
    <div class="swiper-slide">
        <div class="card">
            <div class="card__image">
                <img src=${Element.groupCoverImage} alt="">
            </div>
            <div class="card__content">
                <p class="title">
                    ${Element.groupName}
                </p>
                <p class="desc">
                    ${Element.groupDesc}
                </p>
            
                <div class="card__bottom">
                    <p><ion-icon name="people" class="people__icon"></ion-icon> <span>${Element.numOfPeople}</span></p>
                    <a href="#" class="card__btn">Login</a>
                </div>
            </div>
        </div>
    </div>`;
})


