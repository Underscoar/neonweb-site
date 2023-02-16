'use strict';

window.addEventListener("scroll", checkScrollPos, { passive: true });

function checkScrollPos() {
    if (window.scrollY > 0) {
        document.querySelector('nav').classList.add('scroll-nav');
    }
    else {
        document.querySelector('nav').classList.remove('scroll-nav');
    }
}

checkScrollPos();

let allTabBtns = document.querySelectorAll('.tab-view button');
allTabBtns.forEach((element) => {
    element.addEventListener('click', function () {
        document.querySelectorAll('.tab-view button').forEach((item) => { item.classList.remove('active'); })
        document.querySelectorAll('.tab-content .tab').forEach((item) => { item.classList.remove('active'); })
        document.querySelector(`#tab-${element.dataset.tabtoggle}`).classList.add('active');
        element.classList.add('active');
    })
});

document.getElementById('current-year').innerHTML = new Date().getFullYear();
