mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
$(document).ready(function(){
    function clock() {
      var now = new Date();
      var secs = ('0' + now.getSeconds()).slice(-2);
      var mins = ('0' + now.getMinutes()).slice(-2);
      var hr = now.getHours();
      var Time = hr + ":" + mins + ":" + secs;
      document.getElementById("watch").innerHTML = Time;
      requestAnimationFrame(clock);
    }

    requestAnimationFrame(clock);
});