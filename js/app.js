let studiesBtn = document.querySelectorAll('.about-me--content--buttons button');
let studiesTxt = document.querySelectorAll('.about-me--content--text p');

for (let i = 0; i < studiesBtn.length; i++) {
    studiesBtn[i].addEventListener('click', () => {
        studiesTxt.forEach(study => {
            if(study == studiesTxt[i+1]) {
                study.style.opacity = 1;
            }
            else {
                study.style.opacity = 0;
            }
        })
    })
}