/* =====================================================
   GREEN CORNER
   JAVASCRIPT
===================================================== */


/* ==========================================
   NAVBAR ACTIVE
========================================== */

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link=>{

const href = link.getAttribute("href");

if(href===currentPage){

link.classList.add("active");

}

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


/* ==========================================
   BUTTON HOVER
========================================== */

const buttons=document.querySelectorAll(".btn-primary,.back-btn,.next-btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});


/* ==========================================
   SCROLL TO TOP
========================================== */

const scrollTopBtn=document.createElement("button");

scrollTopBtn.innerHTML="⬆";

scrollTopBtn.className="scroll-top";

document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

scrollTopBtn.style.display="block";

}else{

scrollTopBtn.style.display="none";

}

});

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* =====================================================
   HAMBURGER MENU
===================================================== */

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".navbar ul");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("show");

});

}


/* =====================================================
   LIVE CLOCK
===================================================== */

const liveClock=document.getElementById("liveClock");

function updateClock(){

if(!liveClock)return;

const now=new Date();

const time=now.toLocaleTimeString("id-ID");

const date=now.toLocaleDateString("id-ID",{

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

});

liveClock.innerHTML=`${date}<br>${time}`;

}

setInterval(updateClock,1000);

updateClock();


/* =====================================================
   DARK MODE
===================================================== */

const darkBtn=document.getElementById("darkModeBtn");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

}


/* =====================================================
   LOADING SCREEN
===================================================== */

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});


/* =====================================================
   MUSIC CONTROL
===================================================== */

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

if(music && musicBtn){

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

musicBtn.innerHTML='<i class="fa-solid fa-volume-high"></i>';

}else{

music.pause();

musicBtn.innerHTML='<i class="fa-solid fa-volume-xmark"></i>';

}

});

}

/* =====================================================
   LIGHTBOX GALERI
===================================================== */

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeLightbox = document.querySelector(".close-lightbox");

if(galleryImages.length > 0 && lightbox && lightboxImg){

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

}

if(closeLightbox){

closeLightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

}

if(lightbox){

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});

}


/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqQuestions=document.querySelectorAll(".faq-question");

faqQuestions.forEach(item=>{

item.addEventListener("click",()=>{

const parent=item.parentElement;

parent.classList.toggle("active");

});

});


/* =====================================================
   SEARCH FAQ
===================================================== */

const faqSearch=document.getElementById("faqSearch");

if(faqSearch){

faqSearch.addEventListener("keyup",()=>{

const keyword=faqSearch.value.toLowerCase();

document.querySelectorAll(".faq-item").forEach(item=>{

const text=item.innerText.toLowerCase();

item.style.display=text.includes(keyword)?"block":"none";

});

});

}


/* =====================================================
   PROGRESS BAR ANIMATION
===================================================== */

const progressFill=document.querySelectorAll(".progress-fill");

const progressObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

}

});

});

progressFill.forEach(bar=>{

progressObserver.observe(bar);

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealItems=document.querySelectorAll(

"section,.card,.feature-card,.plant-card,.tool-card,.step-card,.doc-card,.dashboard-card,.summary-card,.quote-card"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-in");

}

});

},

{

threshold:0.15

}

);

revealItems.forEach(item=>{

revealObserver.observe(item);

});

/* =====================================================
   GREEN CORNER AI
===================================================== */

const askAI = document.getElementById("askAI");

if (askAI) {

    askAI.addEventListener("click", () => {

        const question = document
            .getElementById("aiQuestion")
            .value
            .toLowerCase()
            .trim();

        const answer = document.getElementById("aiAnswer");

        if (question === "") {

            answer.innerHTML = "Silakan tuliskan pertanyaan terlebih dahulu 😊";

        }

        else if (question.includes("bougainvillea")) {

            answer.innerHTML =
            "🌸 Bougainvillea menyukai sinar matahari penuh dan tidak memerlukan penyiraman berlebihan.";

        }

        else if (question.includes("zinnia")) {

            answer.innerHTML =
            "🌼 Zinnia adalah bunga yang mudah tumbuh, cepat berbunga, dan memiliki banyak variasi warna.";

        }

        else if (question.includes("air") || question.includes("siram")) {

            answer.innerHTML =
            "💧 Penyiraman dilakukan setiap pagi atau sore sesuai kondisi tanah.";

        }

        else if (question.includes("pupuk")) {

            answer.innerHTML =
            "🌱 Gunakan pupuk organik secara berkala agar tanaman tumbuh subur.";

        }

        else if (question.includes("green corner")) {

            answer.innerHTML =
            "🌿 Green Corner adalah proyek penghijauan sekolah melalui penanaman Bougainvillea dan Zinnia.";

        }

        else {

            answer.innerHTML =
            "🤖 Maaf, saya belum memiliki jawaban tersebut. Silakan lihat halaman lain pada website.";

        }

    });

}


/* =====================================================
   COUNTER ANIMATION
===================================================== */

const counters = document.querySelectorAll(".dashboard-card h2");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = parseInt(counter.innerText);

            if (isNaN(target)) return;

            let number = 0;

            const speed = target / 60;

            const update = () => {

                number += speed;

                if (number < target) {

                    counter.innerText = Math.floor(number);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;

                }

            };

            update();

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =====================================================
   GREETING
===================================================== */

const greeting = document.getElementById("greeting");

if (greeting) {

    const hour = new Date().getHours();

    if (hour < 11) {

        greeting.innerHTML = "🌞 Selamat Pagi";

    }

    else if (hour < 15) {

        greeting.innerHTML = "☀️ Selamat Siang";

    }

    else if (hour < 18) {

        greeting.innerHTML = "🌤️ Selamat Sore";

    }

    else {

        greeting.innerHTML = "🌙 Selamat Malam";

    }

}


/* =====================================================
   RANDOM QUOTE
===================================================== */

const quote = document.getElementById("randomQuote");

if (quote) {

    const quotes = [

        "Plant today, bloom tomorrow.",

        "Small actions create big changes.",

        "Together we grow.",

        "Green Corner, Green Future.",

        "Where colors bloom together."

    ];

    quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];

}


/* =====================================================
   SAVE DARK MODE
===================================================== */

const darkButton = document.getElementById("darkModeBtn");

if (darkButton) {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

    }

    darkButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}


/* =====================================================
   EASTER EGG
===================================================== */

let clickLogo = 0;

const logo = document.querySelector(".logo");

if (logo) {

    logo.addEventListener("click", () => {

        clickLogo++;

        if (clickLogo === 5) {

            alert("🌿 Terima kasih telah mengunjungi Green Corner!");

            clickLogo = 0;

        }

    });

}