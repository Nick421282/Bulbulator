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
// let media = window.matchMedia('(max-width: 1224px)');
// if (media.matches) {
//     alert('Ширина экрана не превышает 1224 пикселя');
// }