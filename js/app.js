let cursor = document.querySelector('.cursor');
let circleContainer = document.querySelector('.circles-container');
let circles = document.querySelectorAll('.circles-container img');
let homePage = document.querySelector('.circles-container');
let scrollGroup = document.querySelector('nav ul:nth-child(2)');
let scrollDown = document.querySelector('.scroll-down');
let scrollDownIcon = document.querySelector('.scroll-down-icon');
let scrollAnim = true;
let scrollDownHeight = scrollDown.offsetHeight;
let randScale = 0;
let scaleFixed = false;
let randRotate = 0;
let randDirection = 1;
let pages = document.querySelectorAll('.page0 ~ div');
let introY = pages[0].getBoundingClientRect().top;
let studiesY = pages[1].getBoundingClientRect().top;
let skillsY = pages[2].getBoundingClientRect().top;
let navButtons = document.querySelectorAll('nav ul:nth-child(3) li');
let navButtonsCircle = document.querySelectorAll('nav ul:nth-child(3) li a');
let homeButton = document.querySelector('nav ul li a');

window.addEventListener('mousemove', (e) => {
    console.log(e.offsetY);
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
})

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
    introY = pages[0].getBoundingClientRect().top;
    studiesY = pages[1].getBoundingClientRect().top;
    skillsY = pages[2].getBoundingClientRect().top;
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

    if (studiesY < 400) {
        circleContainer.style.opacity = 0;
        navButtonsCircle[0].classList.add("active");
    }

    else {
        navButtonsCircle[0].classList.remove("active");
    }

    if (skillsY < 400) {
        circleContainer.style.opacity = 0;
        navButtonsCircle[1].classList.add("active");
        navButtonsCircle[0].classList.remove("active");
    }

    else {
        navButtonsCircle[1].classList.remove("active");
    }
})

homeButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', () => {
        window.scrollTo({
            top: pages[i+1].getBoundingClientRect().top + window.pageYOffset,
            left: 0,
            behavior: 'smooth'
          });
    })
    
}

console.log(pages);