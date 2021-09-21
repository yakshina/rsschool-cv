function burgerMenu() {
    let menu = document.querySelector(".header__wrapper_nav");
    let button = menu.querySelector(".header__menu_button");
    let links = menu.querySelectorAll(".span");
    let overlay = menu.querySelector(".header__menu__overlay");
    let link1 = menu.querySelector(".link1");
    let link2 = menu.querySelector(".link2");
    let link3 = menu.querySelector(".link3");
    let link4 = menu.querySelector(".link4");
    let link5 = menu.querySelector(".link5");
    let link6 = menu.querySelector(".link6");
    let link7 = menu.querySelector(".link7");
    button.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMenu();
    });
    [].forEach.call(links, function (el) {
        el.addEventListener("click", () => toggleMenu());
    });
    overlay.addEventListener("click", () => toggleMenu());
    link1.addEventListener("click", () => toggleMenu());
    link2.addEventListener("click", () => toggleMenu());
    link3.addEventListener("click", () => toggleMenu());
    link4.addEventListener("click", () => toggleMenu());
    link5.addEventListener("click", () => toggleMenu());
    link6.addEventListener("click", () => toggleMenu());
    link7.addEventListener("click", () => toggleMenu());


    function toggleMenu() {
        menu.classList.toggle("active");
        if (menu.classList.contains("active")) {
            document.body.style.overflow = "visible";

        } else {
            document.body.style.overflow = "visible";
        }
    }
}
burgerMenu();