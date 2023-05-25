// transição do header de background com cor para transparente e vice-versa
const headerElement = document.querySelector('header');

window.addEventListener('scroll', () => {
    
    if (window.scrollY > 100 && window.scrollY <= 800){
        headerElement.classList.remove('header-scrolled');
    }
    else if(window.scrollY <=100 || window.scrollY > 800 ){
        headerElement.classList.add('header-scrolled')
    }
});


// MENU HAMBURGUER
const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('#navbar');
hamburguer.addEventListener("click", () =>{
    if(hamburguer.classList.contains('active')){
        hamburguer.classList.remove('active');
        navMenu.classList.remove('active');
    }
    else{
        hamburguer.classList.add('active');
        navMenu.classList.add('active');
    }

});