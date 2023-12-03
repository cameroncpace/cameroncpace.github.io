function toggleNav() {
    var nav = document.querySelector('nav');
    nav.style.display = (
        nav.style.display === 'none' || getComputedStyle(nav).display === 'none') ? 'flex' : 'none';
}

// Add a function to show the nav when the screen size is larger than 1200px
function showNav() {
    var nav = document.querySelector('nav');
    if (window.innerWidth > 1200) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
}

// Call the showNav function on page load and when the window is resized
window.onload = showNav;
window.onresize = showNav;
