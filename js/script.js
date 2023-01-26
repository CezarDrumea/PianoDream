$(document).ready(function () {
  $(".color-mode-btn").click(function () {
    $(".color-mode-inner").toggleClass("active");
    $("body").toggleClass("body-dark").toggleClass("body-light");
    $("nav").toggleClass("dark-blur").toggleClass("light-blur");
    $(".languages, .piano-dream").toggleClass("dark-text").toggleClass("light-text");
    $(".logo-btn").toggleClass("logo-dark").toggleClass("logo-light");
    $(".facebook-btn").toggleClass("fb-dark").toggleClass("fb-light");
    $(".instagram-btn").toggleClass("ig-dark").toggleClass("ig-light");
    $(".more-btn").toggleClass("more-dark").toggleClass("more-light");
    $(".color-mode-btn").toggleClass("color-dark").toggleClass("color-light");
    $(".color-mode-inner").toggleClass("inner-dark").toggleClass("inner-light");
    $(".nav-elements").toggleClass("nav-el-dark").toggleClass("nav-el-light");
    $(".bar").toggleClass("bar-dark").toggleClass("bar-light");
  })
})


