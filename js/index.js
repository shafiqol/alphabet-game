// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    if(playerPressed === 'Escape'){
        gameOver();
    }
    // console.log(playerPressed);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);
    if(playerPressed === expectedAlphabet){
        removeBackgroundColorById(expectedAlphabet);
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);
        // currentScoreElement.innerText = newScore;
        continueGame();
    }else{
        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife);

        if(newLife === 0){
            gameOver();
        }

    //     const currentLifeElement = document.getElementById('current-life');
    //     const currentLifeText = currentLifeElement.innerText;
    //     const currentLife = parseInt(currentLifeText);
    //     const newLife = currentLife - 1;
    //     currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet); 
}

function play(){
    hiddenElementById('home-screen');
    hiddenElementById('final-score');
    showElementById('play-ground');
    setTextElementValueById('current-life', 3);
    setTextElementValueById('current-score', 0)
    continueGame()
} 

function gameOver(){
    hiddenElementById('play-ground');
    showElementById('final-score');
    // update final score
    const totalScore = getTextElementValueById('current-score');
    console.log(totalScore)
    setTextElementValueById('total-score' ,totalScore);
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}