// INSTRUCCIONES

// - Localizar los elementos implicados del DOM
// - Crear los datos del programa necesarios

// FLUJO DEL PROGRAMA
 
//   - Detectar dónde hacemos click (Si tenéis problemas al hacer click
// porque detectáis cosas que no os interesan, podéis usar la propiedad
// "pointer-events:none" en CSS para facilitaros la vida)
//     - Guardar nuestra jugada
//     - Generar una jugada aleatoria para el ordenador y guardarla
//     - Comparar jugadas
//     - Mostrar resultado
//     - Asignar puntos

const gameContainerElement = document.getElementById('game')

const mainOptionsElement = document.getElementById('main-options')
const movementsElement = document.getElementById('movements')
const rulesWindow = document.getElementById('rules')
const rulesButtonElement = document.getElementById('rules-button');
const closeRulesButtonElement = document.getElementById('close-rules');
const buttonPlayAgain = document.getElementById('playagain');
const resultTextElement = document.getElementById('result-text');
const yourChoiceElement = document.getElementById('your-choice');
const pcChoiceElement = document.getElementById('pc-choice');
const scoreElement = document.getElementById('score')
const userResultElement = document.getElementById('result-user')
const pcResultElement = document.getElementById('result-pc')

let choice = '';
let move = 0;
let score = 0;
const options = ['rock','paper','scissors'];

const icons = {
    scissors:"../images/icon-scissors.svg",
    paper:"../images/icon-paper.svg",
    rock:"../images/icon-rock.svg"
}
//seleccionamos las reglas que tendra el juego
const gameRules = {
    rock: {
      scissors: true,
      lizard: true,
      paper: false,
      spock: false
    },
    scissors: {
      paper: true,
      lizard: true,
      rock: false,
      spock: false
    },
    paper: {
      rock: true,
      spock: true,
      lizard: false,
      scissors: false
    },
    lizard: {
      paper: true,
      spock: true,
      scissors: false,
      rock: false
    },
    spock: {
      rock: true,
      scissors: true,
      paper: false,
      lizard: false
    }
  };

const resultsImages = ()=>{
    yourChoiceElement.src
}
const result = ()=>{
    if(choice === options[move]){
        resultTextElement.textContent= `IT'S A TIE`;
    }
    console.log(rules[choice][move]);
    if(rules[choice][options[move]]===true){
        resultTextElement.textContent= `YOU WIN`;
        score++
    }else{
        resultTextElement.textContent= `YOU LOST`;
    }
    changeIconResult();
    updateScore();
}

const randomPlay = () =>{
    const number = Math.floor(Math.random()*options.length);
    move = options[number];
    console.log(move);
    result();
}

const setPlayerChoice = event => {
    console.dir(event.target.dataset.item);
    if(!event.target.dataset.item){
        return
    }
    choice = event.target.dataset.item;
    randomPlay();
    mainOptionsElement.classList.add('rulesOut');
    movementsElement.classList.remove('rulesIn');
    movementsElement.classList.remove('rulesOut');
    movementsElement.classList.add('rulesIn');
}




const updateScore = () => {
    scoreElement.textContent = score;
    showResults();
  };

const changeIconResult = () => {
    userResultElement.src = `../images/icon-${choice}.svg`;
    pcResultElement.src = `../images/icon-${options[move]}.svg`;
};

gameContainerElement.addEventListener('click',setPlayerChoice);

const changeWindowRules = () => {
    if(rulesWindow.style.display==='none'){
        rulesWindow.classList.add('rulesIn');
    }else{
        rulesWindow.classList.remove('rulesOut');
    }
    
}

const comeBackMain = ()=>{
    mainOptionsElement.classList.add('rulesIn');
    movementsElement.classList.remove('rulesOut');
    mainOptionsElement.classList.remove('rulesIn');
    movementsElement.classList.add('rulesOut');
}


buttonPlayAgain.addEventListener('click',comeBackMain);
rulesButtonElement.addEventListener('click',changeWindowRules);
closeRulesButtonElement.addEventListener('click',changeWindowRules);