const translate = document.querySelectorAll(".translate");
const bigTitle = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const aboutSetion = document.getElementById("about");
const imgContainer = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navItems.classList.toggle('is-active');
})


let headerHeight = header.offsetHeight;
let aboutSetionHeight = aboutSetion.offsetHeight;


window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let aboutSetionY = aboutSetion.getBoundingClientRect();
    console.log(aboutSetionY.top);
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (aboutSetionY.top + aboutSetionHeight);
    })

    bigTitle.style.opacity = -scroll / (headerHeight / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (aboutSetionHeight + aboutSetionY.top) * 50 - 50}px)`;
    imgContainer.style.transform = `translateY(${scroll / (aboutSetionHeight + aboutSetionY.top) * -50 + 50}px)`;
    
    border.style.width = `${scroll / (aboutSetionY.top + aboutSetionHeight) * 30}%`;
})
