document.addEventListener('DOMContentLoaded', function () {
    const toggleMenu = document.querySelector('.logo');
    const perspective = document.querySelector('.perspective');
    const outerNavReturn1 = document.querySelector('.outer-nav-return1');
    const outerNavReturn2 = document.querySelector('.outer-nav-return2');
    const outerNavReturn3 = document.querySelector('.outer-nav-return3');
    const outerNavReturn4 = document.querySelector('.outer-nav-return4');
    const outerNavReturn5 = document.querySelector('.outer-nav-return5');
    const targetServices = document.querySelector('#services');

    function newNavigation() {
        perspective.classList.add('modalview-perspective', 'effect-rotate-left-animate');
        outerNavReturn1.classList.add('is-visual');
        outerNavReturn2.classList.add('is-visual');
        outerNavReturn3.classList.add('is-visual');
        outerNavReturn4.classList.add('is-visual');
        outerNavReturn5.classList.add('is-visual');

    }

    function navigationNormal() {
        if (outerNavReturn1.classList.contains('is-visual')) {
            perspective.classList.remove('modalview-perspective', 'effect-rotate-left-animate');
            outerNavReturn1.classList.remove('is-visual');
            // appliquer un délai de 2 secondes
            //puis injecter un #intro dans l'url
        }
    }
    function navigationNormal2() {
        if (outerNavReturn2.classList.contains('is-visual')) {
            perspective.classList.remove('modalview-perspective', 'effect-rotate-left-animate');
            outerNavReturn2.classList.remove('is-visual');

            // appliquer un délai de 2 secondes
            //puis injecter un #services dans l'url
        }
    }
    function navigationNormal3() {
        if (outerNavReturn3.classList.contains('is-visual')) {
            perspective.classList.remove('modalview-perspective', 'effect-rotate-left-animate');
            outerNavReturn3.classList.remove('is-visual');
        }
    }
    function navigationNormal4() {
        if (outerNavReturn4.classList.contains('is-visual')) {
            perspective.classList.remove('modalview-perspective', 'effect-rotate-left-animate');
            outerNavReturn4.classList.remove('is-visual');
        }
    }
    function navigationNormal5() {
        if (outerNavReturn5.classList.contains('is-visual')) {
            perspective.classList.remove('modalview-perspective', 'effect-rotate-left-animate');
            outerNavReturn5.classList.remove('is-visual');
        }
    }

    toggleMenu.addEventListener('click', newNavigation);

    outerNavReturn1.addEventListener('click', navigationNormal);
    outerNavReturn2.addEventListener('click', navigationNormal2);
    outerNavReturn3.addEventListener('click', navigationNormal3);
    outerNavReturn4.addEventListener('click', navigationNormal4);
    outerNavReturn5.addEventListener('click', navigationNormal5);

});