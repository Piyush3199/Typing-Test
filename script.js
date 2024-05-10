let text = document.getElementById("text");

let userInput="";
    document.getElementById("userInput").addEventListener("input", function(event){
        userInput = event.target.value;
        //console.log(userInput);
        let passage = text.innerHTML;
        console.log(passage);
        compare(userInput, passage);
    });

function compare(userInput, passage){
    let correctWords = 0;
    for(let i = 0;i<Math.min(userInput.length, passage.length);i++){
        if(userInput[i] === passage[i]){
            correctWords++;
        }
    }
    let start = 0;
    let end = 60000;
    let timeTaken = end-start;
    let minutes = timeTaken/60000;
    const wpm = Math.round(correctWords/minutes);
    let accuracy = ((correctWords/passage.length)*100).toFixed(2); 
    document.getElementById("wpm").innerHTML = wpm;
    document.getElementById("accuracy").innerHTML = accuracy;
}
function loadText(){
    
    let randomPassage = ["During the first part of your life, you only become aware of happiness once you have lost it. Then an age comes, a second one, in which you already know, at the moment when you begin to experience true happiness, that you are, at the end of the day, going to lose it. When I met Belle, I understood that I had just entered this second age. I also understood that I hadn’t reached the third age, in which anticipation of the loss of happiness prevents you from living."];
    text.innerHTML = randomPassage[Math.floor(Math.random()*randomPassage.length)];
    
}
window.addEventListener("load", function(){
    loadText();
});