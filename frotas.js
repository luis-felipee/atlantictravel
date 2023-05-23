const headerElement = document.querySelector('header');

window.addEventListener('scroll', () => {
    
    if (window.scrollY > 100 ){
        headerElement.classList.add('header-scrolled');
    }
    else if(window.scrollY <=100){
        headerElement.classList.remove('header-scrolled')
    }
});