let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let heading3=document.querySelector("h3");

let btns=["first","second","third","fourth"];

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;

        levelup();
    }
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },225);
}

function levelup(){
    userSeq=[];
    level++;
    heading3.innerText=`level ${level}`;
//random color
    let randIdx=Math.floor(Math.random()*3);
    let randcol=btns[randIdx];
    let randbtn=document.querySelector(`.${randcol}`)
    // console.log(randIdx);
    // console.log(randcol);
    // console.log(randbtn);
    gameSeq.push(randcol);
    console.log(gameSeq);
    btnflash(randbtn);
}
function checkans(idx){
    // let idx=level-1;
    if(gameSeq[idx]==userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        heading3.innerHTML=`Game Over! your score was <b>${level}</b><br> press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
    
}

function btnpress(){
    // console.log("button pressed");
    let btn=this;
    btnflash(btn);

    let usercolor=btn.getAttribute("id");
    //console.log(usercolor);
    userSeq.push(usercolor);

    checkans(userSeq.length-1);
}

let butp=document.querySelectorAll(".btn");
for(buts of butp){
    buts.addEventListener("click",btnpress);

}

function reset(){
    started = false;
     level = 0;
     gameSeq=[];
     userSeq=[];
}