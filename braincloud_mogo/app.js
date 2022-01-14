let introH = intro.clientHeight;
let scrollOffset = window.scrollY;

// + Fixed Header

checkScroll(scrollOffset);

window.addEventListener("scroll", function () {
    scrollOffset = window.scrollY;

    checkScroll(scrollOffset);
});

function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}

//+ Smooth Scroll

document.querySelectorAll("[data-scroll]").forEach((item) => {
    item.addEventListener("click", function (event) {
        event.preventDefault();

        let target = event.target;
        let blockId = target.dataset.scroll.slice(1);
        let blockOffset = document.getElementById(blockId).offsetTop;

        nav.querySelectorAll("a").forEach((a) => {
            a.classList.remove("active");
        });
        target.classList.add("active");

        // на жквери использовалось animate
        window.scrollTo({
            top: blockOffset,
            behavior: "smooth",
        });
    });
});

//+ Menu nav-toggle

let navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", function (event) {
    event.preventDefault();

    let target = event.target;

    if (target.tagName == "SPAN" || target.tagName == "BUTTON") {
        navToggle.classList.toggle("active");
    }
    nav.classList.toggle("active");
});

//+ Collapse

document.querySelectorAll("[data-collapse]").forEach((item) => {
    item.addEventListener("click", function (event) {
        event.preventDefault();

        let target = event.currentTarget;

        target.classList.toggle("active");
    });
});
