$("#score").hide();
// 必要なHTML要素の取得
let wrap = document.getElementById('wrap');
let start = document.getElementById('start');

let textLists = [
    'Hello World', 'This is my App', 'How are you?',
    'Today is sunny', 'I love JavaScript!', 'Good morning',
    'I am Japanese', 'Let it be', 'Samurai', 'Typing Game',
    'Information Technology', 'I want to be a programmer',
    'What day is today?', 'I want to build a web app',
    'Nice to meet you', 'Chrome Firefox Edge Safari',
    'machine learning', 'Brendan Eich', 'John Resig',
    'React Vue Angular', 'Netscape Communications', 'undefined null NaN',
    'Thank you very much', 'Google Apple Facebook Amazon', 'ECMAScript',
    'console.log', 'for while if switch', 'var let const',
    'Windows Mac Linux iOS Android', 'programming']; // 複数のテキストを格納する配列
    // 新しい配列を用意する
let checkTexts = [];
    // スコアの初期値を設定する
let time = 3, score = 0;

let createText = () => {let p = document.getElementById('text');
// 配列の0番目にあるテキストを画面に表示する
let rnd = Math.floor(Math.random() * textLists.length);
// p要素の中身を空っぽにする
p.textContent = '';
// 画面に表示するテキスト情報をcheckText配列に格納する
checkTexts = textLists[rnd].split('').map(value => {
    // span要素を生成する
    let span = document.createElement('span');
    // span要素に配列の1文字ずつを当てはめる
    span.textContent = value;
    // span要素をp要素に追加していく
    p.appendChild(span);

    // 1文字ずつcheckTextsに格納していく
    return span;
});
}; // ランダムなテキストを画面に表示する

let keyDown = e => {
    wrap.style.backgroundColor = '#666';
    if(e.key === checkTexts[0].textContent) {
        // add-colorクラスを付与する
        checkTexts[0].className = 'add-color';
        // 配列から1文字を削除する
        checkTexts.shift();
        // 正しい入力の時だけスコアを加算する
        score++;

        // 最後まで入力したら新しいテキストを用意する
        if(!checkTexts.length) createText();
        // Shiftキーを押した時は色が変わらない
    } else if(e.key === 'Shift') {
        wrap.style.backgroundColor = '#666';
        // タイプミスした時だけ背景色を赤色に変える
    } else {
        wrap.style.backgroundColor = 'red';
    }
}; // キーイベント&入力判定処理

let rankCheck = score => {
        // テキストを格納する変数を作る
    let text = '';
        // スコアに応じて異なるメッセージを変数textに格納する
    if(score < 100) {
        text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
    } else if(score < 200) {
        text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
    } else if(score < 300) {
        text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;
    } else if(score >= 300) {
        text = `あなたのランクはSです。\nおめでとうございます！`;
    }
    // 生成したメッセージと一緒に文字列を返す
    return `${score}文字打てました！\n${text}\n`;
}; // ランク判定とメッセージ生成処理

let gameOver = id => {
    let rank = '';
    // タイマーをストップする
    clearInterval(id);
    time = 0;
    // スコアの値をrankCheck()に渡してhtmlで結果を表示する
    $("#score").text(rankCheck(score));
    $("#game").hide();
    $("#score").show();
    $("#result").show(); 

}; // ゲームの終了処理

$("#result").hide();

let timer = () => {
    // タイマーの初期値を設定(60秒)
    let time = 3;
    // タイマー要素を取得する
    let count = document.getElementById('count');
    let id = setInterval(() => {
        // カウントが0になったらタイマーを停止する
        if(time <= 0) gameOver(id);
        // タイマーの表示を1ずつ減らしていく
        count.textContent = time--;
        // 1秒ごとに実行する処理を書く
    }, 1000);
}; // タイマー処理

start.addEventListener('click', () => {
    // タイマー関数を追記する
    timer();
    createText();
    // 「スタート」ボタンを非表示にする処理を追記
    start.style.display = 'none';
    // キーボードのイベント処理
    document.addEventListener('keydown', keyDown);
}) // ゲームスタート時の処理