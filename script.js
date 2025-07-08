let btns= document.querySelectorAll(".btns");

let userMove="";
let compMove="";
let res="";
let win=0; let lose=0; let draw=0;
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
        compMove="&#x270A;";
    } else if(x>=1/3 && x<2/3){
        compMove="&#x1F590;";
    } else if(x>=2/3 && x<1){
        compMove="&#x270C;";
    }

    btns.forEach(btn => btn.disabled = false);
    
    btns[0].onclick= function(){
        userMove="&#x270A;";
        document.querySelector("#um").innerHTML=`Your move : <br><span style="font-size:50px;"> ${userMove} </span>`;
        document.querySelector("#cm").innerHTML=`Computer move : <br><span style="font-size:50px;"> ${compMove} </span>`;
        if(compMove==="&#x270A;") {
            res="GAME IS DRAWN.";
            draw++;
        }
        else if(compMove==="&#x1F590;") {
            res="YOU LOSE!";
            lose++;
        }
        else if(compMove==="&#x270C;") {
            res="YOU WON!";
            win++;
        }
        document.querySelector("#res").innerText=`${res}`;
        setTimeout(start, 3000);
        document.querySelector("#win").innerText=`WINS: ${win}`;
        document.querySelector("#lose").innerText=`LOSE: ${lose}`;
        document.querySelector("#draw").innerText=`DRAW: ${draw}`;

        btns.forEach(btn => btn.disabled = true);
    }

    btns[1].onclick= function(){
        userMove="&#x1F590;";
        document.querySelector("#um").innerHTML=`Your move : <br><span style="font-size:50px;"> ${userMove} </span>`;
        document.querySelector("#cm").innerHTML=`Computer move : <br><span style="font-size:50px;"> ${compMove} </span>`;
        if(compMove==="&#x1F590;") {
            res="GAME IS DRAWN.";
            draw++;
        }
        else if(compMove==="&#x270C;") {
            res="YOU LOSE!";
            lose++;
        }
        else if(compMove==="&#x270A;") {
            res="YOU WON!";
            win++;
        }
        document.querySelector("#res").innerText=`${res}`;
        setTimeout(start, 3000);
        document.querySelector("#win").innerText=`WINS: ${win}`;
        document.querySelector("#lose").innerText=`LOSE: ${lose}`;
        document.querySelector("#draw").innerText=`DRAW: ${draw}`;
        btns.forEach(btn => btn.disabled = true);
    }

    btns[2].onclick= function(){
        userMove="&#x270C;";
        document.querySelector("#um").innerHTML=`Your move : <br><span style="font-size:50px;"> ${userMove} </span>`;
        document.querySelector("#cm").innerHTML=`Computer move : <br><span style="font-size:50px;"> ${compMove} </span>`;
        if(compMove==="&#x270C;") {
            res="GAME IS DRAWN.";
            draw++;
        }
        else if(compMove==="&#x270A;") {
            res="YOU LOSE!";
            lose++;
        }
        else if(compMove==="&#x1F590;") {
            res="YOU WON!";
            win++;
        }
        document.querySelector("#res").innerText=`${res}`;
        setTimeout(start, 3000);
        document.querySelector("#win").innerText=`WINS: ${win}`;
        document.querySelector("#lose").innerText=`LOSE: ${lose}`;
        document.querySelector("#draw").innerText=`DRAW: ${draw}`;
        btns.forEach(btn => btn.disabled = true);
    }

    document.querySelector("#restart").onclick= function(){
        reset();
        start();
        
    }
}

start();
