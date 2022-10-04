let circleContainer = document.querySelector('.circles-container');
let circles = document.querySelectorAll('.circles-container img');
let homePage = document.querySelector('.circles-container');
let scrollGroup = document.querySelector('nav ul:nth-child(2)');
let scrollDown = document.querySelector('.scroll-down');
let scrollDownIcon = document.querySelector('.scroll-down-icon');
let scrollAnim = true;
let scrollDownHeight = scrollDown.offsetHeight;
let intro = document.querySelector('.intro')
let introY = intro.getBoundingClientRect().top;
console.log(introY);
let randScale = 0;
let scaleFixed = false;
let randRotate = 0;
let randDirection = 1;
let windowY = window.innerHeight;
let y = window.scrollY;

circles.forEach(circle => {
    circle.style.scale = '1';
    circle.style.rotate = '0deg';
});

setTimeout(() => {
    circles.forEach(circle => {
        circle.style.transitionDuration = "4s";
    });
}, 4800);

inverval_timer = setInterval(() => { 
    if (scaleFixed) {
        randScale = 1;
    }
    else {
        randScale = 0.7 + (Math.floor(Math.random() * 30))/100;
    }
    randDirection = Math.floor(Math.random() * 2);
    if(randDirection == 0) {
        randDirection = -1;
    }
    else {
        randDirection = 1;
    }
    randRotate = randRotate + randDirection*(100 + Math.floor(Math.random() *  90));
    circles.forEach(circle => {
        circle.style.scale = randScale;
        circle.style.rotate = randRotate + 'deg';
    });
}, 4900);

scrollGroup.style.translate = '0px ' + scrollDownHeight + "px";

interval_timer2 = setInterval(() => {
    if (scrollAnim) { 
        scrollGroup.style.translate = '0px 0px';
        scrollDown.style.translate = '0px 0px';
        scrollDownIcon.style.rotate = '180deg';
        setTimeout(() => {
            scrollGroup.style.translate = '0px ' + scrollDownHeight + "px";
            scrollDown.style.translate = '0px 50px';
            scrollDownIcon.style.rotate = '0deg';
        }, 4000);
    }
}, 10000);

document.addEventListener('scroll', () => {
    intro = document.querySelector('.intro')
    introY = intro.getBoundingClientRect().top;
    if (introY < 400) {
        circleContainer.style.opacity = 0.4;
        scaleFixed = true;
        scrollAnim = false;
    }
    else {
        circleContainer.style.opacity = 1;
        scaleFixed = false;
        scrollAnim = true;
    }
})