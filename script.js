'use strict';
let score=20;

let highscore=0;

let c=Math.trunc(Math.random()*20)+1;

document.querySelector(".check").addEventListener('click', function(){
    const s=document.querySelector(".guess").value;
    console.log(s);
    
    if(!s){
        console.log(document.querySelector(".message").textContent= "No Number");
    }

    // else if(s<c){
    //     console.log(document.querySelector(".message").textContent= "Low Number");
       
    //     score--;
       
    //     document.querySelector(".score").textContent=score;
         
    //     if(score==0){
    //         console.log(document.querySelector(".message").textContent="You Lose! Try Again....")
    //     }
    // }

    // else if(s>c){
    //     console.log(document.querySelector(".message").textContent= "High Number");
       
    //     score--;
       
    //     document.querySelector(".score").textContent=score;

    //     if(score==0){
    //         console.log(document.querySelector(".message").textContent="You Lose! Try Again....")
    //     }
    // }

    else if(s==c){
        console.log(document.querySelector(".message").textContent= "Correct Number");
        
        console.log(document.querySelector(".number").textContent= c);

        if(score>highscore){
            document.querySelector(".highscore").textContent=score;
        }

        document.querySelector("body").style.backgroundColor="#60b347";

        document.querySelector(".number").style.width="30rem";
    }

    else if(s!=c){
        console.log(document.querySelector(".message").textContent= s<c ? "Low Number" :  "High Number");
        
        score--;
        
        document.querySelector(".score").textContent=score;
         
        if(score==0){
            console.log(document.querySelector(".message").textContent="You Lose! Try Again....")
        }
    }
});

document.querySelector(".again").addEventListener('click', function(){
    score=20;

    document.querySelector(".score").textContent=score;
    
    c=Math.trunc(Math.random()*20)+1;

    console.log(document.querySelector(".message").textContent="Start guessing...")

    console.log(document.querySelector(".number").textContent= "?");

    document.querySelector(".guess").value=null;

    document.querySelector("body").style.backgroundColor="#222";

    document.querySelector(".number").style.width="15rem";
});