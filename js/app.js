let circles = document.querySelectorAll('.circles-container img');
let navButtons = document.querySelectorAll('nav ul:nth-child(1) li');
let homePage = document.querySelector('.circles-container');
let randScale = 0;
let randRotate = 0;
let randDirection = 1;

circles.forEach(circle => {
    circle.style.scale = '1';
    circle.style.rotate = '0deg';
});

setTimeout(() => {
    circles.forEach(circle => {
        circle.style.transitionDuration = "4s";
    });
}, 700);

// navButtons.forEach(button => {
//     button.style.translate = '0px 0px';
// });


inverval_timer = setInterval(function() { 
    randScale = 0.7 + (Math.floor(Math.random() * 30))/100;
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