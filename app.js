const menuBtn = document.getElementById("menu-btn")
const sideNav = document.getElementById("side-nav")

// For smooth scrolling from cferdinand/smooth-scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

menuBtn.addEventListener('click', () => {
    console.log(sideNav.style.right);
    if (sideNav.style.right === "-250px") {
        sideNav.style.right = '0'
    } else {
        sideNav.style.right = "-250px"
    }
})