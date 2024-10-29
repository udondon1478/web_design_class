let Value = Math.floor(Math.random() * 1000);

let inputNum = document.getElementById("num").value;
//inputNumに入る値は文字列なのでNumberで数値に変換
let Num = Number(inputNum);

let check = document.getElementById("check");

let message = document.getElementsByClassName("message-container");

//回数をカウントする変数
let count = 0;

//乱数で生成された値をコンソールに表示
console.log(Value);

//checkがクリックされたらNumに値を代入
check.addEventListener("click", function () {
  Num = document.getElementById("num").value;
  console.log(Num);
  count++;

  if (Num > Value) {
    document.querySelector(".message-container").textContent =
      Num + "より小さい  " + "チェック回数:" + count + "回目";
  } else if (Num < Value) {
    document.querySelector(".message-container").textContent =
      Num + "より大きい  " + "チェック回数:" + count + "回目";
  } else {
    //変数messageのクラスをmessage-container.completeに変更
    message[0].classList.add("complete");
    document.querySelector(".message-container").textContent =
      "正解  " + "チェック回数:" + count + "回目";

    //変数checkのテキストをリセットに変更
    check.textContent = "リセット";
    //リセットがクリックされたらリロード
    check.addEventListener("click", function () {
      location.reload();
    });
  }
});
