const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('#list');


hamburger.addEventListener('click', function () {
    if (overlay.classList == 'menu-list') {
        overlay.classList.add('tog');
        //adding class for animating the hamburger 
        hamburger.classList.add('click');
        hamburger.classList.add('click2');
    } else {
        overlay.classList.remove('tog');
        //hamburger animation remove
        hamburger.classList.remove('click');
        hamburger.classList.remove('click2');
    }
})