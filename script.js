let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach(function (element){
    element.addEventListener('click', function (event){
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})
function handle() {
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
}
// Бургер

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
// karusel

$(document).ready(function () {
    $('.slider').bxSlider();
});
// $(document).ready(function () {
//     $('.slider').bxSlider({
//         pagerCustom: '.slider-nav',
//         infiniteLoop: true,
//         hideControlOnEnd: true,
//     });
// });
