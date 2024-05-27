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

function scrollToElement(event, id, offset) {
    event.preventDefault(); // Prevent the default anchor behavior
    const element = document.getElementById(id);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition + offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}
