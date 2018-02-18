var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var error = document.querySelector('.error');


email.addEventListener("keyup", function (event) {

  // valid
  if (email.validity.valid) {
    error.innerHTML = ""; 
  }
  // invalid
  if (!email.validity.valid) {
    error.innerHTML = "メールアドレス形式ではありません";
    event.preventDefault();　//イベントをキャンセル、フォームの送信停止
  }

}, false);

form.addEventListener("submit", function (event) {

  // valid
  if (email.validity.valid) {
    alert("OK");
  }
  // invalid
  if (!email.validity.valid) {
    error.innerHTML = "メールアドレス形式ではありません";
    alert("未入力またはエラーの箇所があります");
    event.preventDefault(); //イベントをキャンセル、フォームの送信停止
  }

}, false);