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

//+ Slider

// некрасиво и возможны баги, но работает

let sliderNum = 0;
let slider1 = document.querySelectorAll("[data-slider1]");
let slider2 = document.querySelectorAll("[data-slider2]");

let sliderOffset_1 = slider1[0].parentNode.offsetTop;
let sliderOffset_2 = slider2[0].parentNode.offsetTop;
let sliderHeight = slider1[0].parentNode.clientHeight;

document.querySelectorAll(".reviews__btn").forEach((item) => {
    item.addEventListener("click", function (event) {
        event.preventDefault();

        let currSlider;

        if (sliderOffset_1 + sliderHeight >= event.pageY) {
            currSlider = slider1;
        } else {
            currSlider = slider2;
        }

        sliderToggle(currSlider, item);
    });
});

function sliderToggle(slider, item) {
    let sliderLength = slider.length;

    slider[sliderNum].classList.remove("active");

    if (item.classList.contains("reviews__btn--prev")) {
        sliderNum = sliderNum - 1;
        if (sliderNum == -1) sliderNum = sliderLength - 1;

        slider[sliderNum].classList.add("active");
    } else {
        sliderNum = sliderNum + 1;
        if (sliderNum == sliderLength) sliderNum = 0;

        slider[sliderNum].classList.add("active");
    }
}
