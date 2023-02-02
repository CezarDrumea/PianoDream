$(document).ready(function () {
  $(".color-mode-btn").click(function () {
    $(".color-mode-inner").toggleClass("active");
    $("body").toggleClass("body-dark").toggleClass("body-light");
    $("nav, .explore").toggleClass("dark-blur").toggleClass("light-blur");
    $(".languages, .piano-dream").toggleClass("dark-text").toggleClass("light-text");
    $(".logo-btn").toggleClass("logo-dark").toggleClass("logo-light");
    $(".facebook-btn").toggleClass("fb-dark").toggleClass("fb-light");
    $(".instagram-btn").toggleClass("ig-dark").toggleClass("ig-light");
    $(".more-btn").toggleClass("more-dark").toggleClass("more-light");
    $(".color-mode-btn").toggleClass("color-dark").toggleClass("color-light");
    $(".color-mode-inner").toggleClass("inner-dark").toggleClass("inner-light");
    $(".nav-elements").toggleClass("nav-el-dark").toggleClass("nav-el-light");
    $(".bar").toggleClass("bar-dark").toggleClass("bar-light");
    $(".title-logo").toggleAttrVal("href", "img/logo/pianodream-logo-white.png", "img/logo/pianodream-logo-black.png");
    $("")
  });
});

$.fn.toggleAttrVal = function (attr, val1, val2) {
  const test = $(this).attr(attr);
  if (test === val1) {
    return $(this).attr(attr, val2);
  }
  if (test === val2) {
    return $(this).attr(attr, val1);
  }
};

$.fn.toggleCSSpropertyValue = function (attr, propertyName, val1, val2) {
  const test = $(this).attr(attr).css(propertyName);
  if (test === val1) {
    return $(this).attr(attr).css(propertyName, val2);
  }
  if (test === val2) {
    return $(this).attr(attr).css(propertyName, val1);
  }
}