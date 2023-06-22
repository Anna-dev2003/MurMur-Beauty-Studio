
$('h6.faq__question').on('click', function(){
    $(this).next('.faq__answer').slideToggle(300)
})

const btnPrev = document.getElementById('slider-prev')
const btnNext = document.getElementById('slider-next')

$(document).ready(function(){
    $(".slider-min").bxSlider();

    $(".slider-max").bxSlider({
        // nextSelector: '#slider-next',
        // prevSelector: '#slider-prev',
    })
});

// hamburg-menu-btn
const menuBtn = document.getElementById('hamburg-menu-btn')
const menuNav = document.getElementById('hamburg-menu')

menuBtn.addEventListener('click', ()=>{
    menuNav.classList.toggle('slide-menu')
    menuBtn.classList.toggle('change-menu-btn-color')
})

// btnNext.addEventListener('click', ()=>{
//     console.log('hi')
// })

$(".offer-l").click(function() {
    $('html, body').animate({
    scrollTop: $(".offer").offset().top - 50
    }, 1000);
});
$(".courses-l").click(function() {
    $('html, body').animate({
    scrollTop: $(".courses").offset().top - 50
    }, 1000);
});
$(".reviews-l").click(function() {
    $('html, body').animate({
    scrollTop: $(".reviews").offset().top - 50
    }, 1000);
});
$(".faq-l").click(function() {
    $('html, body').animate({
    scrollTop: $(".faq").offset().top - 50
    }, 1000);
});








