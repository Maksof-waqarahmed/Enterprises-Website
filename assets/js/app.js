

function toggleMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'block';
}

document.querySelector('.mob-icon').addEventListener('click', function () {
    document.querySelector('.mobile-nav').style.display = 'none';
});