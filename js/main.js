'use strict';

window.addEventListener("scroll", checkScrollPos, { passive: true });

function checkScrollPos() {
    if (window.scrollY > 0) {
        document.querySelector('nav').classList.add('scroll-nav');
    }
    else {
        document.querySelector('nav').classList.remove('scroll-nav');
    }

    const footerRect = document.querySelector('footer').getBoundingClientRect();
    const footerTop = footerRect.top;
    const clientHeight = document.documentElement.clientHeight;
    if (footerTop < clientHeight) {
        document.querySelector('.contact-text').innerHTML = 'vasb@arbajrofghqvb.ay'.replace(/[a-zA-Z]/g, function (c) { return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); });
        document.querySelector('.contact-text').href = 'mailto:' + 'vasb@arbajrofghqvb.ay'.replace(/[a-zA-Z]/g, function (c) { return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); });
        document.querySelector('.contact-text').classList.remove('d-none');
        document.querySelector('.contact-svg').classList.add('d-none');
    }
    else {
        document.querySelector('.contact-text').innerHTML = 'Mailen naar Neonweb Studio';
        document.querySelector('.contact-text').href = '#';
        document.querySelector('.contact-text').classList.add('d-none');
        document.querySelector('.contact-svg').classList.remove('d-none');
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

function scrollToMain() {
    document.querySelector('#main').scrollIntoView();
}
