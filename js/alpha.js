// eta o hobe
// function play(){
//     // hide the home screen
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden')    
// // show the playground
// const playgroundSection = document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden')
// }

function handleKeyboardKeyupPress(event){
    const playerPressed = event.key;
    console.log('player press',playerPressed);

    // stop the game if player press esc
    if(playerPressed === 'Escape'){
        gameOver();
    }


    // get the expected press
    const currentElementAlphabet = document.getElementById('current-alphabet');
    const currentAlphabet = currentElementAlphabet.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,currentAlphabet);

// checked matched or not
if(playerPressed === expectedAlphabet){
    console.log('you got a point');

    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
setTextElementValueById('current-score',updatedScore);


    // -------------------------------------------
    // // update score
    // //1. get the current score
    // const currentScoreElement = document.getElementById('current-score');
    //  const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);

    // // 2.increase the scored
    const newScore = currentScore + 1;

    // 3. show the updated score
    // currentScoreElement.innerText = newScore;

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
}
else{
    console.log('you lost a life');
  const currentLife = getTextElementValueById('current-life');
  const updatedLife = currentLife - 1;
  setTextElementValueById('current-life', updatedLife);

  if(updatedLife === 0){
    gameOver();

  }





// ---------------------------------------
    // // 1. get the current life number
    //    const currentLifeElement = document.getElementById('current-life');
    //    const currentLifeText = currentLifeElement.innerText;
    //    const currentLife = parseInt(currentLifeText);
    // // 2.reduce the life count
    //    const newLife = currentLife - 1;
    // // 3.display the updated life
    // currentLifeElement.innerText = newLife;
}
}
// capture keypress
document.addEventListener('keyup',handleKeyboardKeyupPress)

function continueGame(){
// step 1 generate a random alphabet
const alphabet = getARandomAlphabet();
// console.log('your random alphabet',alphabet);

// set randomly generate alphabet to show it
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

//set background color
setBackgroundColorById(alphabet);
}



function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame()
}

function gameOver(){
        hideElementById('play-ground');
        showElementById('final-score');
        // update final score
        // 1.get the final score
        const lastScore = getTextElementValueById('current-score');
        setTextElementValueById('last-score',lastScore);
        // set the alphabet color
        const currentAlphabet = getElementTextById('current-alphabet');

        removeBackgroundColorById(currentAlphabet);
        
}