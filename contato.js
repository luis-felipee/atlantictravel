var typed = new Typed('#element', {
 
    strings: ['Follow our Network','Atlantic Travel'],
    typeSpeed: 50,
    backSpeed: 30,
    smartBackspace: true,
    loop: true,
    })
    const headerElement = document.querySelector('header');

    window.addEventListener('scroll', () => {
        
        if (window.scrollY > 100 ){
            headerElement.classList.add('header-scrolled');
        }
        else if(window.scrollY <=100){
            headerElement.classList.remove('header-scrolled')
        }
    });