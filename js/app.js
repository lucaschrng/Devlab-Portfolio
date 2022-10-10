let cursor = document.querySelector('.cursor');
let circleContainer = document.querySelector('.circles-container');
let circles = document.querySelectorAll('.circles-container img');
let homePage = document.querySelector('.circles-container');
let scrollGroup = document.querySelector('.scroll-down-container');
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
let navButtons = document.querySelectorAll('nav ul:nth-child(2) li');
let navButtonsBtn = document.querySelectorAll('nav ul:nth-child(2) li a');
let homeButton = document.querySelector('nav ul li a');
let hoverCircles = document.querySelector('.hover-circles');
let stopAnim = false;
let timeChange = false;
let canPlay = true;
let click = false;
let lastActive;
let useLastActive = true;

window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
})

navButtonsBtn.forEach(button => {
    button.addEventListener('mouseenter', () => {
        click = false;
        navButtonsBtn.forEach(button2 => {
            if (button2.classList.contains('active')) {
                lastActive = button2;
            }
            if (button == button2) {
                button2.classList.add('active');
            }
            else {
                button2.classList.remove('active');
            }
        });
    })
});

navButtonsBtn.forEach(button => {
    button.addEventListener('click', () => {
        click = true;
        // navButtonsBtn.forEach(button2 => {
        //     if (button2.classList.contains('active')) {
        //         lastActive = button2;
        //     }
        //     if (button == button2) {
        //         button2.classList.add('active');
        //     }
        //     else {
        //         button2.classList.remove('active');
        //     }
        // });
    })
})

navButtonsBtn.forEach(button => {
    button.addEventListener('mouseleave', () => {
        if(!click) {
            navButtonsBtn.forEach(button2 => {
                if (button2 == lastActive && useLastActive) {
                    button2.classList.add('active');
                }
                else {
                    button2.classList.remove('active');
                }
            });
        }
    })
})

for (let index = 1; index < circles.length+1; index++) {
    circles[index-1].style.opacity = 1 - (index-1)/10;
}

for (let index = 1; index < circles.length+1; index++) {
    setTimeout(() => {
        circles[index-1].style.translate = "0px 0px";
    }, ((index -1)*20+1));
    circles[index-1].style.scale = 1;
    circles[index-1].style.transitionDuration = "calc(" + index + "*0.2s)";
    timeChange = false;
}

window.addEventListener('mousemove', (e) => {
    if (canPlay) {
        if (e.clientX > hoverCircles.getBoundingClientRect().left && e.clientX < hoverCircles.getBoundingClientRect().right && e.clientY > hoverCircles.getBoundingClientRect().top && e.clientY < hoverCircles.getBoundingClientRect().bottom) {
            timeChange = true;
            setTimeout(() => {
                if (timeChange) {
                    cursor.style.scale = 0.4;
                }
            }, 100);
            let y = 0;
            let x = 0;
            hoverCircles.style.opacity = 0.2;
            stopAnim = true;
            for (let index = 1; index < circles.length+1; index++) {
                y = (e.clientY - (window.innerHeight/2))/2;
                x = (e.clientX - (window.innerWidth/2))/2;
                setTimeout(() => {    
                    circles[index-1].style.translate = x + "px " + y + "px";
                }, (index - 1)*20);
                circles[index-1].style.scale = 0.7;
                circles[index-1].style.transitionDuration = ".3s";
                setTimeout(() => {  
                    if(timeChange) {
                        circles[index-1].style.transitionDuration = "0s";
                    }
                }, 200);
            }
        }
        else if(timeChange = true) {
            stopAnim = false;
            cursor.style.animation = ".2s ease 0s 1 normal scale";
            setTimeout(() => {
                cursor.style.scale = 1;
            }, 200);
            hoverCircles.style.opacity = 0;
            for (let index = 1; index < circles.length+1; index++) {
                setTimeout(() => {
                    circles[index-1].style.translate = "0px 0px";
                }, ((index -1)*20+1));
                circles[index-1].style.scale = 1;
                circles[index-1].style.transitionDuration = "calc(" + index + "*0.2s)";
                timeChange = false;
            }
        }
    }
    
    else if(timeChange = true) {
        stopAnim = false;
        cursor.style.animation = ".2s ease 0s 1 normal scale";
        setTimeout(() => {
            cursor.style.scale = 1;
        }, 200);
        hoverCircles.style.opacity = 0;
        for (let index = 1; index < circles.length+1; index++) {
            setTimeout(() => {
                circles[index-1].style.translate = "0px 0px";
            }, ((index -1)*20+1));
            circles[index-1].style.scale = 1;
            circles[index-1].style.transitionDuration = "calc(" + index + "*0.2s)";
            timeChange = false;
        }
    }
})

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
    if (introY < window.innerHeight*0.9) {
        circleContainer.style.opacity = 0.4;
        hoverCircles.style.opacity = 0;
        circles.forEach(circle => {
            circle.style.scale = "0.9";
            console.log(circle);
        });
        useLastActive = false;
        scrollAnim = false;
        canPlay = false;
    }
    else {
        circleContainer.style.opacity = 1;
        circles.forEach(circle => {
            circle.style.scale = "1";
        })
        scaleFixed = false;
        scrollAnim = true;
        canPlay = true;
    }

    if (studiesY < window.innerHeight*0.9) {
        circleContainer.style.opacity = 0;
        useLastActive = true;
        navButtonsBtn[0].classList.add("active");
    }

    else {
        navButtonsBtn[0].classList.remove("active");
    }

    if (skillsY < window.innerHeight*0.9) {
        circleContainer.style.opacity = 0;
        navButtonsBtn[1].classList.add("active");
        navButtonsBtn[0].classList.remove("active");
    }

    else {
        navButtonsBtn[1].classList.remove("active");
    }

    if(timeChange = true) {
        stopAnim = false;
        cursor.style.animation = ".2s ease 0s 1 fade";
        setTimeout(() => {
            cursor.style.scale = 1;
        }, 200);
        for (let index = 1; index < circles.length+1; index++) {
            setTimeout(() => {
                circles[index-1].style.translate = "0px 0px";
            }, ((index -1)*20+1));
            circles[index-1].style.scale = 1;
            circles[index-1].style.transitionDuration = "calc(" + index + "*0.2s)";
            timeChange = false;
        }
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
            top: pages[i+1].getBoundingClientRect().top + window.pageYOffset - (window.innerHeight/2) + (pages[i+1].offsetHeight/2),
            left: 0,
            behavior: 'smooth'
          });
    })
    
}