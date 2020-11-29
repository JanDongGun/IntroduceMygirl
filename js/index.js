window.addEventListener("scroll", function(){
    console.log(window.scrollY);
    var header_top = document.querySelector('.header__top');
    header_top.classList.toggle("sticky", window.scrollY > 0);
})