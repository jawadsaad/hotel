var mobileNav = document.getElementById('mobile-nav-container');
var icon = document.getElementById('navlink-icon');

function showNav() {
    icon.classList.add('hide-navlink-icon');
    mobileNav.classList.remove("no-display");
    setTimeout(display, 10);
    
    function display() {
        mobileNav.classList.add("display-mobile-nav");
    }
}

function closeNav() {
    icon.classList.remove('hide-navlink-icon');
    mobileNav.classList.remove('display-mobile-nav');
    setTimeout(noDisplay, 500);
    
    function noDisplay() {
        mobileNav.classList.add('no-display');
    }
}
