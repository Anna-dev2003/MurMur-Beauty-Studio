
const menuBtn = document.getElementById('hamburg-menu-btn')
const menuNav = document.getElementById('hamburg-menu')

menuBtn.addEventListener('click', ()=>{
    menuNav.classList.toggle('slide-menu')
    menuBtn.classList.toggle('change-menu-btn-color')
})

$(".program-l").click(function() {
    $('html, body').animate({
    scrollTop: $(".program").offset().top - 50
    }, 1000);
});

$(".teacher-l").click(function() {
    $('html, body').animate({
    scrollTop: $(".teacher").offset().top - 50
    }, 1000);
});
$(".registration-l").click(function() {
    $('html, body').animate({
    scrollTop: $(".registration").offset().top - 50
    }, 1000);
});