var score = 0, timerMin = 0, timerSec = 0, timerId;
function addScore(){
    ++score
    let svg = document.getElementById("scorePointer");
    let pol;
    for(let i = 0;i<svg.children.length;++i){
        let text = ""
        pol = svg.children[i];
        for(let j = 0;j<pol.points.length;++j){
            text += (pol.points[j].x + (score==10?20:(score>10?25:15))) + "," + (pol.points[j].y) + " ";
            console.log(text);
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
        console.log(timerMin + ":" + timerSec )
        timerText.textContent = (timerMin<10?((timerMin==0)?"00":"0"+timerMin):timerMin) + ":" + (timerSec<10?((timerSec==0)?"00":"0"+timerSec):timerSec);
    }, 1000);
}