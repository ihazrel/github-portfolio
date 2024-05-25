window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

var typed = new Typed('#highlight', {
    strings: ['Web Developer', 'Software Engineer', 'Data Analyst', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
     });