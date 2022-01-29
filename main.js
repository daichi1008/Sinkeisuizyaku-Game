// ペアの数字をランダムて4組
let flgFirst = true;
let array = []
for (var i = 1; i < 4; i++) {
    array.push(i);
    array.push(i);
};
console.log(array.push(i));
console.log(array.push(i));
shuffle(array);

function shuffle(array) {
    var n = array.length;
    var temp, i;

    while (n) {
        i = Math.floor(Math.random() * n--);
        temp = array[n];
        array[n] = array[i];
        array[i] = temp;
    }
    return array;
}
console.log(array)
// カードの作成
const panel = document.getElementById(`panel`);
for (i = 0; i < 8; i++) {
    var div = document.createElement('div');
    div.className = 'card back';
    div.index = i;
    div.number = array[i];
    div.innerHTML = '';
    div.onclick = turn;
    panel.appendChild(div);

}

// 判定
let countup = 0;
let count1 = 0;
let count2 = 0;
let flg2 = false;
function turn(e) {

    var div = e.target;
    if (div.innerHTML == '') {
        div.className = 'card';
        div.innerHTML = div.number;
    } else {
        return;
    }

    // 1枚目の処理
    if (flgFirst) {
        cardFirst = div;
        flgFirst = false;
    } else {

        // 数字が1枚目と一致する場合
        if (cardFirst.number == div.number) {
            backTimer = setTimeout(function () {
                div.className = 'card finish';
                cardFirst.className = 'card finish';
                countup++;
            }, 500);
            console.log(countup)
            if (countup === 3) {
                alert(`終了です`);
            };
            if (flg2) {
                count2++;
                player2P.innerHTML = `player2:${count2}`;

            } else {
                count1++;
                player1P.innerHTML = `player1:${count1}`;

            }
            // 一致しない場合
        } else {

            backTimer = setTimeout(function () {
                div.className = 'card back';
                div.innerHTML = '';
                cardFirst.className = 'card back';
                cardFirst.innerHTML = '';
                cardFirst = null;
            }, 500);

            if (flg2) {
                Player.innerHTML = ` 次はplayer1の番です`;
                flg2 = false;
            } else {
                Player.innerHTML = ` 次はplayer2の番です`;
                flg2 = true;
            }
        }
        flgFirst = true;
    }

};

// チャレンジ問題
const Player = document.getElementById(`nextPlayer`);
Player.innerHTML = ` 次はplayer１の番です`;
const player1P = document.getElementById(`player1Point`);
const player2P = document.getElementById(`player2Point`);
player1P.innerHTML = `player1:0`;
player2P.innerHTML = `player2:0`;
