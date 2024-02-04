var guess = document.getElementById("guess")
var result = document.getElementById("result")
var score = document.getElementById("score")
var random =  Math.floor(Math.random() * 10) + 1;
var point = 10;
function check() 
{

    var enter = guess.value;
    if(enter == random){
        result.textContent="you are right";
        alert("you are win")
        
    }
    else{
        point=point-1;
        score.textContent="Score: "+ point;
        result.textContent="you are wrong";
    }
}


