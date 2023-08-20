

const menuBtn = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

})

const btns = document.querySelectorAll('.nav-btn');
const contensts = document.querySelectorAll('.content');

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    })

    contensts.forEach((content) => {
        content.classList.remove("active");
    })

    btns[manual].classList.add("active");
    contensts[manual].classList.add("active");
    
}



btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderNav(i);
    })
});