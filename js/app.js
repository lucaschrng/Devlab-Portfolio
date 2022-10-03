let circles = document.querySelectorAll('.circles-container img');
let index = 1;


circles.forEach(circle => {
    circle.style.scale = '1';
    circle.style.rotate = '0deg';
    // circle.style.opacity = 1 - index/11;
    // index += 1;
});