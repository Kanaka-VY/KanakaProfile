// ================================
// Smooth Scroll for Navigation
// ================================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        const href = this.getAttribute('href');

        if(href.startsWith("#")){

            e.preventDefault();

            document.querySelector(href).scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});


// ================================
// Active Navigation Link
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


// ================================
// Back To Top Button
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ================================
// Typing Effect
// ================================

const text = [
    "AI & ML Engineer",
    "Python Developer",
    "Data Analyst",
    "Generative AI Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type,1500);

    }

    else{

        setTimeout(type,100);

    }

})();


// ================================
// Scroll Reveal Animation
// ================================

const reveal = document.querySelectorAll(

".skill-card,.project-card,.certificate-card,.contact-box"

);

window.addEventListener("scroll",()=>{

    reveal.forEach(card=>{

        const windowHeight = window.innerHeight;

        const revealTop = card.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            card.classList.add("show");

        }

    });

});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        nav.style.background = "#111827";

    }

    else{

        nav.style.background = "rgba(8,8,15,.8)";

    }

});

// animation effect 

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(
".fade-up,.fade-down,.fade-left,.fade-right"
).forEach((el)=>{

    observer.observe(el);

});

// ================================
// Mobile Menu
// ================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuToggle.innerHTML = navMenu.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

});

// Close menu after clicking a link

document.querySelectorAll("#nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        menuToggle.innerHTML='<i class="fas fa-bars"></i>';

    });

});