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