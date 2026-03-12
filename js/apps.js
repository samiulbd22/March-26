let footerBtn = document.getElementById("footer__button");
let scrollBox = document.getElementById("notice__container--notice");
scrollBox.addEventListener("scroll",function(){
    let counter = scrollBox.scrollHeight-(scrollBox.scrollTop+scrollBox.clientHeight);
    //console.log(counter);
    if(counter === 0 || counter ===1 || counter===2|| counter===3|| counter===4){
        footerBtn.style.opacity = 1;
    }else{
        footerBtn.style.opacity = .3;
    }
})
let ct= document.getElementById("notice__container");
let footer__button1 = document.getElementById("button-1");
let footer__button2 = document.getElementById("button-2");
let ct2= document.getElementById("bye__bye--container");

footer__button1.addEventListener("click",function(){
    ct.style.display = "none";
    ct2.style.display = "block";
})
footer__button2.addEventListener("click",function(){
    ct.style.display = "none";
    ct2.style.display = "none";
    let ct3 = document.getElementById("main__container");
    ct3.style.display = "block";
})

let notices = ["বাসার মেম্বারদের দায়িত্ববান, ধৈর্যশীল ও নম্রশীল হতে হবে।",
    "মাসের শুরুতে হিসাব বুঝে নিতে হবে ও ১-৩ তারিখের মধ্যে খাবার বাবদ অগ্রীম টাকা জমা দিতে হবে।",
    "গত মাসের হিসাব রানিং মাসের ৫ তারিখের মধ্যে বুঝে নিতে হবে।",
    "প্রতিদিনের হিসাব একবার দেখতে হবে।",
    "মাসের শুরুতে ৫-৯ তারিখের মধ্যে বাসা ভাড়া সহ সকল বকেয়া পরিশোধ করতে হবে।",
    "রান্নার চুলা ব্যবহারে সতর্ক থাকতে হবে এবং কোনো কিছু ব্যবহার বা খেলে নিজ দায়িত্বে অবগত করতে হবে।",
    "কিচেনের ঝুড়ি ব্যতিত অন্য কোথাও ময়লা-আবর্জনা ফেলা যাবে না।",
    "বাথরুম ব্যবহার করে পর্যাপ্ত পানি দিয়ে বাথরুম সর্বদা পরিষ্কার রাখি।",
    "বাথরুমের মেঝে সাবান-শ্যাম্পু বা অন্যকিছুর খোসা ফেলে জমা করে রাখা যাবে না।",
    "প্রত্যেক মেম্বারকে অনুরোধ - আপনারা স্ব-স্ব স্থান থেকে বাসা পরিষ্কার রাখুন। রুমের ময়লা- আবর্জনা কোণা-কুণিতে না রেখে ময়লার ঝুড়িতে ফেলুন।",
    "দরজার সামনে ৪ জনের জুতা রাখা থাকলে দয়া করে অনন্যরা আর জুতা রাখবেন না। অনিয়মিতি জুতা নিজেদের জায়গায় রাখুন । শুধু মাত্র ২ জোড়া জুতা রাখার চেষ্টা করুন । অতিরিক্ত জুতা নিজেদের হেফাজতে রাখুন।",
    "ফুটানো পানি নিয়ে আবার পানি ফুটাতে দিন যাতে অন্যের উপকার হয়।",
    "সন্ধ্যা হওয়ার সাথে সাথে বাসার লাইট অন করুন।",
    "১০ তারিখের পূর্বে বাসার সকল টাকা নিজ দায়িত্বে দিয়ে দিবেন যেন আপনার দ্বারা অন্যের সমস্যা পড়তে না হয়।",
    "বাসার মিল অফ-অন করতে চাইলে ২৪ ঘণ্টার পূর্বে জানাতে হবে। ",
    "বাসার ২৫ টা মিল কম্পালসরি।",
    "কিচেনের বাটি বা অন্যকিছু ব্যক্তিগত কাজে রাখবেন না এবং অন্যের প্লেটে ছুরি দিয়ে কোনো কিছু কাটাকাটি করবেন না।",
    "রাত ১১টার মধ্যে রান্না ঘরের কাজ শেষ করে ১২ টার  ভিতর বাসার লাইট অফ করুন।",
    "বাসা ছাড়ার তথ্য ২ মাস আগে অবগত করতে হবে।",
    "জাতিয় পরিচয় পত্র এবং বাসার ফর্ম পূরন করে বাসায় অবস্থান করুন এবং থাকার জায়গা কারো জন্য স্থায়ী নয় তাই এই ক্ষণ সময়ে একে অন্যের সাথে ভাল ব্যবহার করুন । অযথা সিন্ডিকেট ক্রিয়েট করে অন্যদের মাঝে মনোমালিন্য ভাব নিয়ে আমাদের সাথে থাকা যাবে না।"
];

function noticeBoard(a){
    
    let sum = '';
    for(let i=0; i<a.length; i++){
       sum = sum +`<div id="notices">
                    <img src="img/bullet-point.png" alt="list" id="bullet">
                    <span id="notice__list">${a[i]}</span>
                </div>`;       
    }
    return sum;
}
let notice__me = document.getElementById("note__box");

notice__me.innerHTML = noticeBoard(notices);


