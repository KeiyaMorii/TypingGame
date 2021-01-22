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
})
}; // ランダムなテキストを画面に表示する
createText();

let keyDown = e => {
    if(e.key === checkTexts[0].textContent) {
        // add-colorクラスを付与する
        checkTexts[0].className = 'add-color'

        // 配列から1文字を削除する
        checkTexts.shift();

        // 最後まで入力したら新しいテキストを用意する
        if(!checkTexts.length) createText();
    }
}; // キーイベント&入力判定処理

let rankCheck = rank => {}; // ランク判定とメッセージ生成処理

let gameOver = id => {}; // ゲームの終了処理

let timer = () => {}; // タイマー処理

start.addEventListener('click', () => {
    createText();
    // キーボードのイベント処理
    document.addEventListener('keydown', keyDown);
}) // ゲームスタート時の処理