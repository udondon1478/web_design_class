window.onload = function () {
  var nav = document.getElementById("nav-wrapper");
  var hamburger = document.getElementById("js-hamburger");
  var blackBg = document.getElementById("js-black-bg");
  var Links = document.querySelectorAll(".Link");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
  blackBg.addEventListener("click", function () {
    nav.classList.remove("open");
  });
  for (var i = 0; i < Links.length; i++) {
    Links[i].addEventListener("click", function () {
      nav.classList.remove("open");
    });
  }
};
