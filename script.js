const winterMap = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const springMap = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W F",
    "W W W WWWWWWWWW W W W",
    "W W W         W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W W",
    "W     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "S     WWW       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const summerMap = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "S   W     W     W W W",
    "W W W WWWWWWWWW W W W",
    "W W W         W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W W",
    "W     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W     WWW       W   F",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const autumnMap = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "S WWWWW W W W WWW W F",
    "W     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const whiteToon = document.getElementById('white');
const blackToon = document.getElementById('black');
const winterScene = document.getElementById('winter');
const springScene = document.getElementById('spring');
const summerScene = document.getElementById('summer');
const autumnScene = document.getElementById('autumn');
const startBtn = document.getElementById('start');

const homePage = document.getElementById('home');
const gameSection = document.getElementById('game');
const gameDiv = document.createElement('div');

let selectedToon = '';
let selectedScene = ''; 
let wallColor = '';

startBtn.disabled = true;
winterScene.disabled = true;
springScene.disabled = true;
summerScene.disabled = true;
autumnScene.disabled = true;

const makeMaze = (array, styleClass, playerAvatar) => {
    gameDiv.textContent = '';
    for (let i = 0; i < array.length; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('flex');
    
        for (let j = 0; j < array[i].length; j++) {
            let currentCell = array[i][j];
            let cell = document.createElement('div');
            cell.classList.add('box');
    
            if (currentCell === 'W') {
                cell.classList.add(styleClass);
            }
            if (currentCell === 'S') {
                cell.classList.add('player');
                cell.classList.add(playerAvatar);
            }
            rowDiv.appendChild(cell);
        }
       gameDiv.appendChild(rowDiv);
    }
    gameSection.appendChild(gameDiv);
}

whiteToon.addEventListener('click', () => {
    selectedToon = 'white';

    blackToon.classList.remove('pinkText');
    whiteToon.classList.add('pinkText');

    winterScene.disabled = false;
    springScene.disabled = false;
    summerScene.disabled = false;
    autumnScene.disabled = false;
});

blackToon.addEventListener('click', () => {
    selectedToon = 'black';

    whiteToon.classList.remove('pinkText');
    blackToon.classList.add('pinkText');

    winterScene.disabled = false;
    springScene.disabled = false;
    summerScene.disabled = false;
    autumnScene.disabled = false;
});

winterScene.addEventListener('click', () => {
    selectedScene = 'winterBg';
    wallColor = 'winterWall';

    makeMaze(winterMap, wallColor, selectedToon);

    gameSection.classList.add(selectedScene);
    startBtn.disabled = false;

    springScene.classList.remove('pinkText');
    summerScene.classList.remove('pinkText');
    autumnScene.classList.remove('pinkText');
    winterScene.classList.add('pinkText');
});

springScene.addEventListener('click', () => {
    selectedScene = 'springBg';
    wallColor = 'springWall';
    
    makeMaze(springMap, wallColor, selectedToon);

    gameSection.classList.add(selectedScene);
    startBtn.disabled = false;

    summerScene.classList.remove('pinkText');
    autumnScene.classList.remove('pinkText');
    winterScene.classList.remove('pinkText');
    springScene.classList.add('pinkText');
});

summerScene.addEventListener('click', () => {
    selectedScene = 'summerBg';
    wallColor = 'summerWall';

    makeMaze(summerMap, wallColor, selectedToon);

    gameSection.classList.add(selectedScene);
    startBtn.disabled = false;

    springScene.classList.remove('pinkText');
    autumnScene.classList.remove('pinkText');
    winterScene.classList.remove('pinkText');
    summerScene.classList.add('pinkText');
});

autumnScene.addEventListener('click', () => {
    selectedScene = 'autumnBg';
    wallColor = 'autumnWall';

    makeMaze(autumnMap, wallColor, selectedToon);

    gameSection.classList.add(selectedScene);
    startBtn.disabled = false;

    springScene.classList.remove('pinkText');
    summerScene.classList.remove('pinkText');
    winterScene.classList.remove('pinkText');
    autumnScene.classList.add('pinkText');
});

startBtn.addEventListener('click', () => {
    homePage.classList.add('hidden');
    gameSection.classList.remove('hidden');
});
