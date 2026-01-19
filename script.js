document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal-element');

    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('active');
            } else {

            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal();
    
    console.log("Website Portofolio Siap!");
});