
/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

/* =========================
   MOBILE MENU TOGGLE
========================= */

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};

/* close menu on click */

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

/* =========================
   TYPING ANIMATION
========================= */

const typedText = document.querySelector(".multiple-text");

const words = [
    "Java Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI Designer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    currentWord = words[wordIndex];

    if (isDeleting) {
        typedText.textContent = currentWord.substring(0, charIndex--);
    } else {
        typedText.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(".navbar a[href*=" + id + "]")
                    .classList.add("active");
            });

        }
    });

    /* sticky header effect */
    let header = document.querySelector(".header");

    if (top > 100) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

/* =========================
   SMOOTH SCROLL FIX
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

/* =========================
   SCROLL REVEAL EFFECT
========================= */

window.addEventListener("scroll", reveal);

function reveal() {

    let reveals = document.querySelectorAll(".skill-box, .services-box, .project-box, .timeline-item");

    for (let i = 0; i < reveals.length; i++) {

        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

/* =========================
   BUTTON RIPPLE EFFECT
========================= */

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

        let ripple = document.createElement("span");

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});

/* =========================
   SKILL ANIMATION TRIGGER
========================= */

const skillBoxes = document.querySelectorAll(".skill-box");

function animateSkills() {
    skillBoxes.forEach(box => {
        let progress = box.querySelector(".progress span");
        progress.style.width = progress.style.width;
    });
}

window.addEventListener("scroll", animateSkills);