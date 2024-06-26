document.addEventListener('DOMContentLoaded', function() {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(function(rotator) {
        const cases = rotator.querySelectorAll('.rotator__case');
        let index = 0; 
        function rotate() {
            cases[index].classList.remove('rotator__case_active');
            index = (cases[index].nextElementSibling) ? index +1 : 0;
            cases[index].classList.add('rotator__case_active');

        }
        setInterval(rotate, 1000);
    });
});