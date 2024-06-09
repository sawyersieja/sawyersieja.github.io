// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    
});

const heroSection = document.getElementById("hero-section");
const aboutSection = document.getElementById("about-section");
const skillsSection = document.getElementById("skills-section");
const portfolioSection = document.getElementById("portfolio-section");
const contactSection = document.getElementById("contact-section");

let currentSection = heroSection;
let previousSection = null;
let nextSection = aboutSection;

//what are you trying to do?
//I want to auto scroll up and down

document.onscroll = function scroll() {

    //aboutSection.scrollIntoView({behavior: "smooth"});
}
