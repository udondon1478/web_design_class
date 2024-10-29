//id = change-targetの要素を取得
let changeTarget = document.getElementById("change-target");
//htmlファイルのid = red-buttonの要素を取得
let redButton = document.getElementById("red-button");
//htmlファイルのid = blue-buttonの要素を取得
let blueButton = document.getElementById("blue-button");
//htmlファイルのid = green-buttonの要素を取得
let greenButton = document.getElementById("green-button");

redButton.addEventListener("click", function () {
  changeTarget.style.color = "red";
});

blueButton.addEventListener("click", function () {
  changeTarget.style.color = "blue";
});

greenButton.addEventListener("click", function () {
  changeTarget.style.color = "green";
});
