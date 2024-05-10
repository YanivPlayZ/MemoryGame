var cardsNum, score = 0, timerMin = 0, timerSec = 0, timerId;
var emojiArr = ['\uD83D', '\uDE49', '\uD83D', '\uDE48', '\uD83D', '\uDE4A', '\uD83D', '\uDC35', '\uD83D', '\uDC32', '\uD83E', '\uDD84', '\uD83E', '\uDDA7', '\uD83D', '\uDC14', '\uD83D', '\uDC08',
 '\uD83D', '\uDC15', '\uD83D', '\uDC08', '‍', '⬛', '\uD83D', '\uDC3C', '\uD83D', '\uDC38', '\uD83D', '\uDC2F', '\uD83E', '\uDD8A', '\uD83D', '\uDC36', '\uD83D', '\uDC3A', '\uD83D', '\uDC31', '\uD83D', '\uDC17', '\uD83D', '\uDC2D', '\uD83D', '\uDC3B', '‍', '❄', '️', '\uD83D',
  '\uDC3B', '\uD83D', '\uDC30', '\uD83E', '\uDDA5', '\uD83D', '\uDC0D', '\uD83E', '\uDD96', '\uD83E', '\uDD90', '\uD83E', '\uDD9E', '\uD83D', '\uDC26', '‍', '⬛', '\uD83E', '\uDD89'];
function addScore(){
    if(score == cardsNum){ return;}
    if(++score == cardsNum){
        win();
    }
    let svg = document.getElementById("scorePointer");
    let pol;
    for(let i = 0;i<svg.children.length;++i){
        let text = ""
        pol = svg.children[i];
        for(let j = 0;j<pol.points.length;++j){
            text += (pol.points[j].x + (score==10?20:(score>10?25:15))) + "," + (pol.points[j].y) + " ";
        }
        svg.children[i].setAttribute("points", text);
    }
}
function timer(){
    var timerText = document.getElementById("timer");
    timerId = setInterval(() => {
        ++timerSec;
        if(timerSec == 60){
            timerSec = 0;
            ++timerMin;
        }
        timerText.textContent = (timerMin<10?((timerMin==0)?"00":"0"+timerMin):timerMin) + ":" + (timerSec<10?((timerSec==0)?"00":"0"+timerSec):timerSec);
    }, 1000);
}
function start(){
    cardsNum = 30;
    localStorage.getItem("cards");
    let text = "";
    for(let i = 0;i <= cardsNum;++i){
        text += (i) + " ";
    }
    score = 0, timerMin = 0, timerSec = 0;
    document.getElementById("ScoreText").innerText = text;
    let width = 0;
    for(let i = 0;i <= cardsNum;++i){
        width += 15 +(i>8?5:0);
    }
    document.getElementById("scorePointer").style.width = width + "px";
    timer();
    setCards();
    console.log("done");
}
function setCards(){
    let id;
    cardText = `<div id="cardContainer">
        <button class="card id${id}" onclick="cardClick(${id})">
            ${emojiArr[id]}
        </button>`;
        cardIds = [];
        id = Math.floor(Math.random() * 30);
        for(let i = 0;i < cardsNum;++i){
            while(cardIds.includes(id)){
                id = Math.floor(Math.random() * 30);
            }
            cardIds.push(id);
        }
        cardIds.concat(cardIds);
        shuffle(cardIds);



}
function cardClick(id){

}
function win(){
    clearInterval(timerId);
}
function shuffle(cards){
    let i, j, temp;
    for(let n = 0;n < cards.length;++n){
        i = Math.floor(Math.random() * 30), j = Math.floor(Math.random() * 30);
        temp = cards[i];
        cards[i] = cards[j];
        cards[j] = cards[i];
    }
}