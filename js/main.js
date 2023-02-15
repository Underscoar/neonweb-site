'use strict';

let allTabBtns = document.querySelectorAll('.tab-view button');
allTabBtns.forEach((element) => {
    element.addEventListener('click', function() {
        document.querySelectorAll('.tab-view button').forEach((item) => { item.classList.remove('active'); })
        document.querySelectorAll('.tab-content .tab').forEach((item) => { item.classList.remove('active'); })
        document.querySelector(`#tab-${element.dataset.tabtoggle}`).classList.add('active');
        element.classList.add('active');
    })
})