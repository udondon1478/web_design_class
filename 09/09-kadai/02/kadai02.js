//0.5sごとにコードを実行する
setInterval(function () {
  //1. 現在時刻を取得する
  let now = new Date();

  //2. 時・分・秒を2桁の数字で取得する
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  //3. 期日を設定する
  let due = new Date("2024/06/03 23:59:59");

  //4. 期日と現在時刻の差を求める
  let diff = due.getTime() - now.getTime();

  //5. 残り日数・時間・分・秒を求める
  let remainDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  //diffを整数にするためにMath.floorを使用
  //1000ミリ秒×60秒×60分×24時間で1日あたりのミリ秒を日数に変換
  
  diff = diff - remainDay * (1000 * 60 * 60 * 24);
  let remainHour = Math.floor(diff / (1000 * 60 * 60));
  //1000ミリ秒×60秒×60分で1時間あたりのミリ秒を時間に変換

  diff = diff - remainHour * (1000 * 60 * 60);
  let remainMinute = Math.floor(diff / (1000 * 60));
  //1000ミリ秒×60秒で1分あたりのミリ秒を分に変換

  diff = diff - remainMinute * (1000 * 60);
  let remainSecond = Math.floor(diff / 1000);
  //1000ミリ秒で1秒あたりのミリ秒を秒に変換

  //6. 残り時間をHTMLに表示する
  document.getElementById("due-day").textContent = remainDay;
  document.getElementById("due-hour").textContent = remainHour;
  document.getElementById("due-minute").textContent = remainMinute;
  document.getElementById("due-second").textContent = remainSecond;
}, 500);
