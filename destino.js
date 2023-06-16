const headerElement = document.querySelector('header');

window.addEventListener('scroll', () => {
    
    if (window.scrollY > 100 && window.scrollY <= 500){
        headerElement.classList.remove('header-scrolled');
    }
    else if(window.scrollY <=100 || window.scrollY > 500 ){
        headerElement.classList.add('header-scrolled')
    }
});
