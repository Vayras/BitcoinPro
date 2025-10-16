// Common JavaScript functionality for all pages

function toggleMobileMenu() {
    const mobileNavbar = document.getElementById('mobileNavbar');
    mobileNavbar.classList.toggle('open');
    document.body.style.overflow = mobileNavbar.classList.contains('open') ? 'hidden' : '';
}

function closeMobileMenu() {
    const mobileNavbar = document.getElementById('mobileNavbar');
    mobileNavbar.classList.remove('open');
    document.body.style.overflow = '';
}
