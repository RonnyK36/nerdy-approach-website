const menuBtn = document.getElementById("menu-btn")
const sideNav = document.getElementById("side-nav")


menuBtn.addEventListener('click', () => {
    console.log(sideNav.style.right);
    if (sideNav.style.right === "-250px") {
        sideNav.style.right = '0'
    } else {
        sideNav.style.right = "-250px"
    }
})