const dropdownValues = document.querySelectorAll('.dropdown__value');
dropdownValues.forEach(dropdownValue => {
    dropdownValue.addEventListener('click', function() {
        const dropdown = this.closest('.dropdown');
        const dropdownList = dropdown.querySelector('.dropdown__list');
        dropdownList.classList.toggle('dropdown__list_active');
    });
});

const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('click', function(event) {
        event.preventDefault();
        const dropdown = this.closest('.dropdown');
        const dropdownValue = dropdown.querySelector('.dropdown__value');
        dropdownValue.textContent = this.textContent.trim();
        const dropdownList = dropdown.querySelector('.dropdown__list');
        dropdownList.classList.remove('dropdown__list_active');
    });
});

document.addEventListener('click', function(event) {
    const activeDropdowns = document.querySelectorAll('.dropdown__list_active');
    if (!event.target.closest('.dropdown')) {
        activeDropdowns.forEach(dropdownList => {
            dropdownList.classList.remove('dropdown__list_active');
        });
    }
});
