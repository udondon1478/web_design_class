let left = document.getElementById("sc-to-left");
let right = document.getElementById("sc-to-right");

//画像を表示する要素を取得
let header = document.getElementById("top");

//画像の配列
let images = [
  "./img/image01.jpg",
  "./img/image02.jpg",
  "./img/image03.jpg",
  "./img/image04.jpg",
];

//現在の画像配列の番号
let currentImageIndex = 1;

//画像を自動で切り替えるための関数
function changeImage() {
  header.style.backgroundImage = "url(" + images[currentImageIndex] + ")";
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
}

//changeImage関数を5000ミリ秒ごとに実行する
setInterval(changeImage, 5000);

//左ボタンを押したときの処理
//ボタンをクリックした後のcurrentImageIndexの値に基づいて
//画像を切り替えるため、
//top.style.backgroundImage = URL(images[currentImageIndex]);
//は最後に書く必要がある
left.addEventListener("click", function () {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  header.style.backgroundImage = "url(" + images[currentImageIndex] + ")";
});

//右ボタンを押したときの処理
right.addEventListener("click", function () {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  header.style.backgroundImage = "url(" + images[currentImageIndex] + ")";
});
