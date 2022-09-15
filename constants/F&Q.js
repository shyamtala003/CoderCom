let faq = [{
        question: "WHAT DO WE DO WITH YOUR INFORMATION?",
        answer: "We collect the personal information you give us such as your name, address and email address. When you browse our site, we also automatically receive your computer&aps;s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system."
    },
    {
        question: "How do you get my consent?",
        answer: "When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only. If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent or provide you with an opportunity to say no."
    },
    {
        question: "DISCLOSURE",
        answer: "We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service."
    },
    {
        question: "SECURITY",
        answer: "To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed."
    },
    {
        question: "THIRD-PARTY SERVICES",
        answer: "We collect the personal information you give us such as your name, address and email address. When you browse our site, we also automatically receive your computer&aps;s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system."
    },
    {
        question: "WHAT DO WE DO WITH YOUR INFORMATION?",
        answer: "In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies with respect to the information we are required to provide to them for your purchase-related transactions. For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers. In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located. Once you leave our store's website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website's Terms of Service. Links When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements."
    }
];


let faqContent = document.querySelector(".faq__content");

faq.forEach((Element) => {
    faqContent.innerHTML += `<div class="q__and__a  animation__pause">
    <p class="question"><span>${Element.question}</span><ion-icon name="chevron-down-outline" class="down"></ion-icon></p>
    <p class="answer">${Element.answer}<p>
    </div>`;
})