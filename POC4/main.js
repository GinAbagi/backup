// parallax effect of the home div

const parallax = document.getElementById("home");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.6 + "px";
})