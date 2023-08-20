

const menuBtn = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

})

//slider navigation

const btns = document.querySelectorAll('.nav-btn');
const sliders = document.querySelectorAll('.video-slider');
const contensts = document.querySelectorAll('.content');
const images = document.querySelectorAll('.members_image');

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    })

    sliders.forEach((slider) => {
        slider.classList.remove("active");
    })

    contensts.forEach((content) => {
        content.classList.remove("active");
    })

    images.forEach((img) => {
        img.classList.remove("active");
    })

    btns[manual].classList.add("active");
    sliders[manual].classList.add("active");
    contensts[manual].classList.add("active");
    images[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderNav(i);
    })
});
