var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

document.getElementById( "score--0" ).textContent = "0";
document.getElementById( "score--1" ).textContent = "0";
document.getElementById( "current--0" ).textContent = "0";
document.getElementById( "current--1" ).textContent = "0";

document.querySelector(".btn--roll").addEventListener("click", function(){ 
        var dice = Math.floor(Math.random()*6)+1;

        var diceDOM = document.querySelector( ".dice" );
        diceDOM.style.display = "block";
        diceDOM.src = "dice-" + dice + ".png";
        
    }
);
