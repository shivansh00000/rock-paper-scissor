let btns= document.querySelectorAll(".btns");

let userMove="";
let compMove="";
let res="";
let win=0; let lose=0; let draw=0;

function reset() {
    userMove="";
    compMove="";
    res="";
    win=0; lose=0; draw=0;
    document.querySelector("#win").innerText=`WINS: ${win}`;
    document.querySelector("#lose").innerText=`LOSE: ${lose}`;
    document.querySelector("#draw").innerText=`DRAW: ${draw}`;
    document.querySelector("#um").innerText=``;
    document.querySelector("#cm").innerText=``;
    document.querySelector("#res").innerText=``;
}

function start() {

    let x = Math.random();
    if(x>=0 && x<1/3){
        compMove="rock";
    } else if(x>=1/3 && x<2/3){
        compMove="paper";
    } else if(x>=2/3 && x<1){
        compMove="scissor";
    }

    btns.forEach(btn => btn.disabled = false);
    
    btns[0].onclick= function(){
        userMove="rock";
        document.querySelector("#um").innerText=`Your move : ${userMove.toUpperCase()}`;
        document.querySelector("#cm").innerText=`Computer move : ${compMove.toUpperCase()}`;
        if(compMove==="rock") {
            res="GAME IS DRAWN.";
            draw++;
        }
        else if(compMove==="paper") {
            res="YOU LOSE!";
            lose++;
        }
        else if(compMove==="scissor") {
            res="YOU WON!";
            win++;
        }
        document.querySelector("#res").innerText=`${res}`;
        setTimeout(start, 2500);
        document.querySelector("#win").innerText=`WINS: ${win}`;
        document.querySelector("#lose").innerText=`LOSE: ${lose}`;
        document.querySelector("#draw").innerText=`DRAW: ${draw}`;

        btns.forEach(btn => btn.disabled = true);
    }

    btns[1].onclick= function(){
        userMove="paper";
        document.querySelector("#um").innerText=`Your move : ${userMove.toUpperCase()}`;
        document.querySelector("#cm").innerText=`Computer move : ${compMove.toUpperCase()}`;
        if(compMove==="paper") {
            res="GAME IS DRAWN.";
            draw++;
        }
        else if(compMove==="scissor") {
            res="YOU LOSE!";
            lose++;
        }
        else if(compMove==="rock") {
            res="YOU WON!";
            win++;
        }
        document.querySelector("#res").innerText=`${res}`;
        setTimeout(start, 2500);
        document.querySelector("#win").innerText=`WINS: ${win}`;
        document.querySelector("#lose").innerText=`LOSE: ${lose}`;
        document.querySelector("#draw").innerText=`DRAW: ${draw}`;
        btns.forEach(btn => btn.disabled = true);
    }

    btns[2].onclick= function(){
        userMove="scissor";
        document.querySelector("#um").innerText=`Your move : ${userMove.toUpperCase()}`;
        document.querySelector("#cm").innerText=`Computer move : ${compMove.toUpperCase()}`;
        if(compMove==="scissor") {
            res="GAME IS DRAWN.";
            draw++;
        }
        else if(compMove==="rock") {
            res="YOU LOSE!";
            lose++;
        }
        else if(compMove==="paper") {
            res="YOU WON!";
            win++;
        }
        document.querySelector("#res").innerText=`${res}`;
        setTimeout(start, 2500);
        document.querySelector("#win").innerText=`WINS: ${win}`;
        document.querySelector("#lose").innerText=`LOSE: ${lose}`;
        document.querySelector("#draw").innerText=`DRAW: ${draw}`;
        btns.forEach(btn => btn.disabled = true);
    }

    document.querySelector("#restart").onclick= function(){
        start();
        reset();
    }
}

start();
