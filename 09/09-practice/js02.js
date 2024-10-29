let title = document.getElementById("title");
let text = document.getElementById("text");
let photo = document.getElementById("photo");

let photo1 = document.getElementById("photo-1");
let photo2 = document.getElementById("photo-2");
let photo3 = document.getElementById("photo-3");
let photo4 = document.getElementById("photo-4");
let photo5 = document.getElementById("photo-5");

photo1.addEventListener("click", function () {
  title.textContent = "感謝";
  photo.src = "../images/1.jpg";
  text.textContent = "1枚目の写真です";
});

photo2.addEventListener("click", function () {
  title.textContent = "感動";
  photo.src = "../images/2.jpg";
  text.textContent = "2枚目の写真です";
});

photo3.addEventListener("click", function () {
  title.textContent = "涙";
  photo.src = "../images/3.jpg";
  text.textContent = "3枚目の写真です";
});

photo4.addEventListener("click", function () {
  title.textContent = "笑顔";
  photo.src = "../images/4.jpg";
  text.textContent = "4枚目の写真です";
});

photo5.addEventListener("click", function () {
  title.textContent = "喜び";
  photo.src = "../images/5.jpg";
  text.textContent = "5枚目の写真です";
});
