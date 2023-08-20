
const menuBtn = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

})




