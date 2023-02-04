// localStorage.clear();
$(document).ready(function() {
  if (localStorage.getItem("inner-active") !== null) {
    if (localStorage.getItem("inner-active") === "active") {
      $(".color-mode-inner").addClass("active");
    } else {
      $(".color-mode-inner").removeClass("active");
    }
  }
  $(".home").useItemsLocalStorage("home-dark", "home-light", "home");
  $("nav, .explore").useItemsLocalStorage("dark-blur", "light-blur", "blur")
  $(".languages, .piano-dream, .about-text").useItemsLocalStorage("dark-text", "light-text", "text");
  $(".logo-btn").useItemsLocalStorage("logo-dark", "logo-light", "logo");
  $(".facebook-btn").useItemsLocalStorage("fb-dark", "fb-light", "fb");
  $(".instagram-btn").useItemsLocalStorage("ig-dark", "ig-light", "ig");
  $(".more-btn").useItemsLocalStorage("more-dark", "more-light", "more");
  $(".color-mode-btn").useItemsLocalStorage("color-dark", "color-light", "color");
  $(".color-mode-inner").useItemsLocalStorage("inner-dark", "inner-light", "inner");
  $(".nav-elements").useItemsLocalStorage("nav-el-dark", "nav-el-light", "nav-elements");
  $(".bar").useItemsLocalStorage("bar-dark", "bar-light", "bar");
  if (localStorage.getItem("meta-logo") !== null) {
    $(".meta-logo").attr("href", localStorage.getItem("meta-logo"));
  }
  $(".about").useItemsLocalStorage("about-dark", "about-light", "about");

  $(".color-mode-btn").click(function() {
    $(".color-mode-inner").toggleClass("active");
    if ($(".color-mode-inner").hasClass("active")) {
      localStorage.setItem("inner-active", "active");
    } else {
      localStorage.setItem("inner-active", "not-active");
    }
    $(".home").toggleDarkLight("home-dark", "home-light", "home");
    $("nav, .explore").toggleDarkLight("dark-blur", "light-blur", "blur")
    $(".languages, .piano-dream, .about-text").toggleDarkLight("dark-text", "light-text", "text");
    $(".logo-btn").toggleDarkLight("logo-dark", "logo-light", "logo");
    $(".facebook-btn").toggleDarkLight("fb-dark", "fb-light", "fb");
    $(".instagram-btn").toggleDarkLight("ig-dark", "ig-light", "ig");
    $(".more-btn").toggleDarkLight("more-dark", "more-light", "more");
    $(".color-mode-btn").toggleDarkLight("color-dark", "color-light", "color");
    $(".color-mode-inner").toggleDarkLight("inner-dark", "inner-light", "inner");
    $(".nav-elements").toggleDarkLight("nav-el-dark", "nav-el-light", "nav-elements");
    $(".bar").toggleDarkLight("bar-dark", "bar-light", "bar");
    $(".meta-logo").toggleAttrVal("href", "img/logo/pianodream-logo-white.png", "img/logo/pianodream-logo-black.png", "meta-logo");
    $(".about").toggleDarkLight("about-dark", "about-light", "about");
  });

  $(".hamburger").click(function () {
    $(".mobile").toggle(600);
  })

  $(window).resize(function() {
    if ($(this).width() > 951) {
      $(".mobile").css("display", "none")
    }
  })
});

$.fn.toggleDarkLight = function (class1, class2, keyname) {
    if ($(this).hasClass(class1)) {
      localStorage.setItem(keyname, class2);
    } else {
      localStorage.setItem(keyname, class1);
    }
    return $(this).toggleClass(class1).toggleClass(class2);
  }

$.fn.useItemsLocalStorage = function (class1, class2, keyname) {
  if (localStorage.getItem(keyname) !== null) {
    if ($(this).hasClass(class1)) {
      $(this).removeClass(class1);
    } else {
      $(this).removeClass(class2);
    }
    return $(this).addClass(localStorage.getItem(keyname));
  }
}

$.fn.toggleAttrVal = function (attr, val1, val2, keyname) {
  const test = $(this).attr(attr);
  if (test === val1) {
    localStorage.setItem(keyname, val2);
    return $(this).attr(attr, val2);
  }
  if (test === val2) {
    localStorage.setItem(keyname, val1);
    return $(this).attr(attr, val1);
  }
};