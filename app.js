let list = document.querySelector('.list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;


function reloadSlider() {
    list.style.left = -active * 100 + '%'; 
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === active); 
    });
}


next.onclick = function() {
    active = (active + 1) > lengthItems ? 0 : active + 1;
    reloadSlider();
}


prev.onclick = function() {
    active = (active - 1) < 0 ? lengthItems : active - 1;
    reloadSlider();
}


dots.forEach((dot, index) => {
    dot.onclick = function() {
        active = index;
        reloadSlider();
    };
});
