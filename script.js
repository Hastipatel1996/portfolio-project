const section = document.querySelectorAll('section');
const navbarlinks = document.querySelectorAll('.navbar-link');
const navbar = document.querySelector(".navbar");
const navbaroffsetTop = navbar.offsetTop;

window.addEventListener("scroll", () => {
    mainFn();
});

const mainFn = () => {
    if(window.pageYOffset >= navbaroffsetTop)
    {
        navbar.classList.add("sticky");
    }
    else
    {
        navbar.classList.remove("sticky");
    }

    section.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop -10) {
            navbarlinks.forEach(navbarlinks => {
                navbarlinks.classList.remove("change");
            })
            navbarlinks[i].classList.add("change");
        }
    });
};

mainFn();

//window.addEventListener('resize', () => {
 //   window.location.reload();
//})