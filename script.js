let btns= document.querySelectorAll(".btns");

let userMove="";
let compMove="";
let res="";
let score={
    win:0,
    lose:0,
    draw:0
}
score=JSON.parse(localStorage.getItem('score'));

function randomMove(){
    let Move;
    let x = Math.random();
    if(x>=0 && x<1/3){
        Move="&#x270A;";
    } else if(x>=1/3 && x<2/3){
        Move="&#x1F590;";
    } else if(x>=2/3 && x<1){
        Move="&#x270C;";
    }
    return Move;
}

function scoreDisplay(){
    document.querySelector("#win").innerText=`WINS: ${score.win}`;
    document.querySelector("#lose").innerText=`LOSE: ${score.lose}`;
    document.querySelector("#draw").innerText=`DRAW: ${score.draw}`;
    localStorage.setItem('score' , JSON.stringify(score));
}

function reset() {
    userMove="";
    compMove="";
    res="";
    score.win=0; score.lose=0; score.draw=0;
    scoreDisplay();
    document.querySelector("#um").innerText=``;
    document.querySelector("#cm").innerText=``;
    document.querySelector("#res").innerText=``;
}

function gameLogics(userMove){
    let w; let l; 
    if(userMove==="&#x270A;") {w="&#x1F590;"; l="&#x270C;"}
    if(userMove==="&#x1F590;") {w="&#x270C;"; l="&#x270A;"}
    if(userMove==="&#x270C;") {w="&#x270A;"; l="&#x1F590;"}
    
    document.querySelector("#um").innerHTML=`Your move : <br><span style="font-size:50px;"> ${userMove} </span>`;
    document.querySelector("#cm").innerHTML=`Computer move : <br><span style="font-size:50px;"> ${compMove} </span>`;
    if(compMove===userMove) {
        res="GAME IS DRAWN.";
        score.draw++;
    }
    else if(compMove===l) {
        res="YOU LOSE!";
        score.lose++;
    }
    else if(compMove===w) {
        res="YOU WON!";
        score.win++;
    }
    document.querySelector("#res").innerText=`${res}`;
    scoreDisplay();
    btns.forEach(btn => btn.disabled = true);
    
}

function start() {

    compMove=randomMove();
    btns.forEach(btn => btn.disabled = false);
    
    btns[0].onclick= function(){ gameLogics("&#x270A;")}
    btns[1].onclick= function(){ gameLogics("&#x1F590;")}
    btns[2].onclick= function(){ gameLogics("&#x270C;")}
    
}

let isAutoPlay=false; let intervalId;
function autoPlay(){
    if(!isAutoPlay){
        document.querySelector("#auto-play").classList.add("auto-play-on");
        intervalId = setInterval(() => {
            compMove=randomMove(); userMove=randomMove();
            gameLogics(userMove);
        }, 1000);
        isAutoPlay=true; 
    } else{
        document.querySelector("#auto-play").classList.remove("auto-play-on");
        clearInterval(intervalId);
        isAutoPlay=false;
    }

}

start();
setInterval(start, 1000);
