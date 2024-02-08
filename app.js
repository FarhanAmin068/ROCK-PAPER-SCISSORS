// console.log("js added");

const computerChoiceDisplay=document.getElementById('computer-choice');

const userChoiceDisplay=document.getElementById('user-choice');

const resultDisplay=document.getElementById('result');

// If I want to use all the buttons together then I need to use querySelectorAll

const possibleChoices=document.querySelectorAll('button')
// we would like to store the id of the button on the user
let userChoice;
// here i want to pass an event to each button by using event listener
//using e we can pass events
possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click',
(e)=>{
  userChoice=e.target.id;
  userChoiceDisplay.innerHTML=userChoice;
  generateComputerChoice();
  getResult();
}))

// Now I will generate guesses from computers pov
let computerChoice;
function generateComputerChoice(){
    const randomNumber =Math.floor(Math.random() *possibleChoices.length);
    // console.log(randomNumber);

    if(randomNumber===0){
        computerChoice='rock';
    }
    if(randomNumber===1){
        computerChoice='scissors';
    }
    if(randomNumber===2){
        computerChoice='paper';
    }
    //Now set the value
    computerChoiceDisplay.innerHTML=computerChoice;

}


//Now for the result
let matchResult;
function getResult(){
    if(computerChoice===userChoice){
     matchResult='Its a draw';
    }

   else if((computerChoice==='paper' && userChoice==='scissors') ||
    (computerChoice==='rock' && userChoice==='paper')|| 
   ( computerChoice==='scissors' && userChoice==='rock')
     ){
        matchResult='You win';
     }

     else {
        matchResult='You lose';
     }
     resultDisplay.innerHTML=matchResult;
}
