const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let current = '';
    const navHeight = navbar ? navbar.offsetHeight : 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - navHeight - 30)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});