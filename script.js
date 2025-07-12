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
document.querySelector("#win").innerText=`WINS: ${score.win}`;
document.querySelector("#lose").innerText=`LOSE: ${score.lose}`;
document.querySelector("#draw").innerText=`DRAW: ${score.draw}`;
let x = Math.random();
    if(x>=0 && x<1/3){
        compMove="&#x270A;";
    } else if(x>=1/3 && x<2/3){
        compMove="&#x1F590;";
    } else if(x>=2/3 && x<1){
        compMove="&#x270C;";
    }

function reset() {
    userMove="";
    compMove="";
    res="";
    score.win=0; score.lose=0; score.draw=0;
    document.querySelector("#win").innerText=`WINS: ${score.win}`;
    document.querySelector("#lose").innerText=`LOSE: ${score.lose}`;
    document.querySelector("#draw").innerText=`DRAW: ${score.draw}`;
    document.querySelector("#um").innerText=``;
    document.querySelector("#cm").innerText=``;
    document.querySelector("#res").innerText=``;
}

function gameLogics(d, w, l){
    userMove=d;
    document.querySelector("#um").innerHTML=`Your move : <br><span style="font-size:50px;"> ${userMove} </span>`;
    document.querySelector("#cm").innerHTML=`Computer move : <br><span style="font-size:50px;"> ${compMove} </span>`;
    if(compMove===d) {
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
    document.querySelector("#win").innerText=`WINS: ${score.win}`;
    document.querySelector("#lose").innerText=`LOSE: ${score.lose}`;
    document.querySelector("#draw").innerText=`DRAW: ${score.draw}`;
    localStorage.setItem('score' , JSON.stringify(score));
    btns.forEach(btn => btn.disabled = true);
    setTimeout(start, 3000);
    
}

function start() {

    let x = Math.random();
    if(x>=0 && x<1/3){
        compMove="&#x270A;";
    } else if(x>=1/3 && x<2/3){
        compMove="&#x1F590;";
    } else if(x>=2/3 && x<1){
        compMove="&#x270C;";
    }

    btns.forEach(btn => btn.disabled = false);
    
    btns[0].onclick= function(){ gameLogics("&#x270A;", "&#x1F590;","&#x270C;");}

    btns[1].onclick= function(){ gameLogics("&#x1F590;","&#x270C;", "&#x270A;");}

    btns[2].onclick= function(){ gameLogics("&#x270C;", "&#x270A;", "&#x1F590;");}

    document.querySelector("#restart").onclick= function(){
        reset();
        start();
        
    }
}

start();
