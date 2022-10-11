let studiesBtn = document.querySelectorAll('.about-me--content--buttons button');
let studiesTxt = document.querySelectorAll('.about-me--content--text p');
let skillsBtn = document.querySelectorAll('.about-me__second-page--content--buttons button');
let skillsTxt = document.querySelectorAll('.about-me__second-page--content--text p');

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

for (let i = 0; i < skillsBtn.length; i++) {
    skillsBtn[i].addEventListener('click', () => {
        skillsTxt.forEach(skill => {
            if(skill == skillsTxt[i+1]) {
                skill.style.opacity = 1;
            }
            else {
                skill.style.opacity = 0;
            }
        })
    })
}