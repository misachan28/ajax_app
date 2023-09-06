function post (){
  //リクエストを送信する処理
  //投稿ボタンの要素を取得
   const form = document.getElementById("form");
   //投稿されたら、処理を実行する
  form.addEventListener("submit", (e) => {
    //memoが重複しないように、ブラウザのイベント(e)を無効化
    e.preventDefault();
    //フォームに入力した値を取得する
    const formData = new FormData(form);
    //javascriptからサーバーサイドにリクエストを送信するためにXMLHttpRequestオブジェクトを生成
    const XHR = new XMLHttpRequest();
    //リクエストの内容を指定
    XHR.open("POST", "/posts", true);
    //サーバーからのレスポンスの形式を指定する
    XHR.responseType = "json";
    //フォームの内容をコントローラーに送信
    XHR.send(formData);
  });
 };
 
 window.addEventListener('turbo:load', post);   