localStorage.clear(),
$(document).ready(function() {
  if (localStorage.getItem("switcher") === null) {
    $(".home").addClass("home-light");
    $("nav, .explore, .form-text").addClass("light-blur")
    $(".languages, .magic-piano, .about-text").addClass("light-text");
    $(".logo-btn").addClass("logo-light");
    $(".facebook-btn").addClass("fb-light");
    $(".instagram-btn").addClass("ig-light");
    $(".more-btn").addClass("more-light");
    $(".color-mode-btn").addClass("color-light");
    $(".color-mode-inner").addClass("inner-light");
    $(".nav-elements").addClass("nav-el-light");
    $(".bar").addClass("bar-light");
    $(".meta-logo").attr("href", "img/logo/magic-piano-meta-light.png");
    $(".about").addClass("about-light");
    $(".form").addClass("form-light");
  } else {
    $(".color-mode-inner").addClass("active");
    $(".home").addClass("home-dark");
    $("nav, .explore, .form-text").addClass("dark-blur")
    $(".languages, .magic-piano, .about-text").addClass("dark-text");
    $(".logo-btn").addClass("logo-dark");
    $(".facebook-btn").addClass("fb-dark");
    $(".instagram-btn").addClass("ig-dark");
    $(".more-btn").addClass("more-dark");
    $(".color-mode-btn").addClass("color-dark");
    $(".color-mode-inner").addClass("inner-dark");
    $(".nav-elements").addClass("nav-el-dark");
    $(".bar").addClass("bar-dark");
    $(".meta-logo").attr("href", "img/logo/magic-piano-meta-dark.png");
    $(".about").addClass("about-dark");
    $(".form").addClass("form-dark");
  }

  $(".color-mode-btn").click(function() {
    $(".color-mode-inner").toggleClass("active");
    if ($(".color-mode-inner").hasClass("active")) {
      localStorage.setItem("switcher", "active");
    } else {
      localStorage.removeItem("switcher");
    }
    $(".home").toggleBtwn2Classes("home-dark", "home-light");
    $("nav, .explore, .form-text").toggleBtwn2Classes("dark-blur", "light-blur")
    $(".languages, .magic-piano, .about-text").toggleBtwn2Classes("dark-text", "light-text");
    $(".logo-btn").toggleBtwn2Classes("logo-dark", "logo-light");
    $(".facebook-btn").toggleBtwn2Classes("fb-dark", "fb-light");
    $(".instagram-btn").toggleBtwn2Classes("ig-dark", "ig-light");
    $(".more-btn").toggleBtwn2Classes("more-dark", "more-light");
    $(".color-mode-btn").toggleBtwn2Classes("color-dark", "color-light");
    $(".color-mode-inner").toggleBtwn2Classes("inner-dark", "inner-light");
    $(".nav-elements").toggleBtwn2Classes("nav-el-dark", "nav-el-light");
    $(".bar").toggleBtwn2Classes("bar-dark", "bar-light");
    $(".meta-logo").toggleAttrVal("href", "img/logo/magic-piano-meta-dark.png", "img/logo/magic-piano-meta-light.png");
    $(".about").toggleBtwn2Classes("about-dark", "about-light");
    $(".form").toggleBtwn2Classes("form-dark", "form-light");
  });

  $(".hamburger, .mobile").click(function () {
    $(".mobile").toggle(600);
  })

  $(window).resize(function() {
    if ($(this).width() > 951) {
      $(".mobile").css("display", "none")
    }
  })
});

$.fn.toggleBtwn2Classes = function (class1, class2) {
    return $(this).toggleClass(class1).toggleClass(class2);
  }

$.fn.toggleAttrVal = function (attr, val1, val2) {
  const test = $(this).attr(attr);
  if (test === val1) {
    return $(this).attr(attr, val2);
  }
  if (test === val2) {
    return $(this).attr(attr, val1);
  }
};