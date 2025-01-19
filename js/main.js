// Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.accordion-toggle');
    const content = document.querySelector('.accordion-content');

    toggle.addEventListener('click', () => {
        content.classList.toggle('active');
    });
});
