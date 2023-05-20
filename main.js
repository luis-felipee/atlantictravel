// transição do header de background com cor para transparente e vice-versa
const headerElement = document.querySelector('header');

window.addEventListener('scroll', () => {
    
    if (window.scrollY > 100 ){
        headerElement.classList.add('header-scrolled');
    }
    else if(window.scrollY <=100){
        headerElement.classList.remove('header-scrolled')
    }
});
// Apaga e escreve o texto na primeira section.
var typed = new Typed('#element', {
    strings: ['caribbean sea.', 'world with Atlantic Travel.'],
    typeSpeed: 50,
    backSpeed: 30,
    smartBackspace: true,
    loop: true,
 })

 
 
 // Coloca a data atual no início do checkin
 var currentDate = new Date()
document.getElementById('checkin').value = currentDate.toISOString().substring(0, 10);

// Função soma mais um dia para a data do checkout
function addDays(date, days) {
    date.setDate(date.getDate() + days)
    return date;
 }
 // coloca a data atual + um dia no input checkout
var nextDate = addDays(currentDate, 1);
document.getElementById('checkout').value = nextDate.toISOString().substring(0, 10);
