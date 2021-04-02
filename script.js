const getDeviceType = () => {    // thx to Abdessalam Benharira
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };

const deviceType = getDeviceType();

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

const homeBtn = document.getElementById('homeBtn');
const hoverHomeBtn = document.getElementById('hoverHomeBtn');
const soundBtn = document.getElementById('soundBtn');

const body = document.getElementsByTagName('body')[0];

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

if (deviceType !== 'desktop') {
    homePage.classList.add('hidden');
    const warningPage = document.createElement('div');
    const warningText = document.createElement('p');
    warningText.innerText = 'Oh no! You can only play Llamaroom on desktop :c';
    warningText.classList.add('warningText');

    warningPage.appendChild(warningText);
    warningPage.classList.add('warning');
    body.appendChild(warningPage);
}

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
            cell.dataset.row = `${i+1}`;
            cell.dataset.column = `${j+1}`;
    
            if (currentCell === 'W') {
                cell.classList.add(styleClass);
            }

            if (currentCell === 'S') {
                cell.id = 'startPos';
                let player = document.createElement('div');
                player.id = 'player';
                player.classList.add(playerAvatar);
                cell.appendChild(player);
            }

            if (currentCell === 'F') {
                cell.id = 'end';
                cell.classList.add('door');
            }

            rowDiv.appendChild(cell);
        }
       gameDiv.appendChild(rowDiv);
    }
    gameSection.appendChild(gameDiv);
}

const activeSceneBtn = () => {
    winterScene.disabled = false;
    springScene.disabled = false;
    summerScene.disabled = false;
    autumnScene.disabled = false;
}

whiteToon.addEventListener('click', () => {
    selectedToon = 'white';

    blackToon.classList.remove('pinkText');
    whiteToon.classList.add('pinkText');

    activeSceneBtn();
});

blackToon.addEventListener('click', () => {
    selectedToon = 'black';

    whiteToon.classList.remove('pinkText');
    blackToon.classList.add('pinkText');

    activeSceneBtn();
});

const resetSceneBtnColor = () => {
    winterScene.classList.remove('pinkText');
    springScene.classList.remove('pinkText');
    summerScene.classList.remove('pinkText');
    autumnScene.classList.remove('pinkText');
}

const resetSceneBg = () => {
    gameSection.classList.remove('winterBg');
    gameSection.classList.remove('springBg');
    gameSection.classList.remove('summerBg');
    gameSection.classList.remove('autumnBg');
}

const audio = document.createElement('audio');
audio.loop = true;

winterScene.addEventListener('click', () => {
    selectedScene = 'winterBg';
    wallColor = 'winterWall';

    makeMaze(winterMap, wallColor, selectedToon);

    gameSection.classList.add(selectedScene);
    startBtn.disabled = false;

    resetSceneBtnColor();
    winterScene.classList.add('pinkText');

    audio.src = './assets/music/winter-bgm.mp3';
});

springScene.addEventListener('click', () => {
    selectedScene = 'springBg';
    wallColor = 'springWall';
    
    makeMaze(springMap, wallColor, selectedToon);

    gameSection.classList.add(selectedScene);
    startBtn.disabled = false;

    resetSceneBtnColor();
    springScene.classList.add('pinkText');

    audio.src = './assets/music/spring-bgm.mp3';
});

summerScene.addEventListener('click', () => {
    selectedScene = 'summerBg';
    wallColor = 'summerWall';

    makeMaze(summerMap, wallColor, selectedToon);

    gameSection.classList.add(selectedScene);
    startBtn.disabled = false;

    resetSceneBtnColor();
    summerScene.classList.add('pinkText');

    audio.src = './assets/music/summer-bgm.mp3';
});

autumnScene.addEventListener('click', () => {
    selectedScene = 'autumnBg';
    wallColor = 'autumnWall';

    makeMaze(autumnMap, wallColor, selectedToon);

    gameSection.classList.add(selectedScene);
    startBtn.disabled = false;

    resetSceneBtnColor();
    autumnScene.classList.add('pinkText');

    audio.src = './assets/music/autumn-bgm.mp3';
});

const main = document.getElementsByTagName('main')[0];
const popUp = document.createElement('div');

const makePopUp = () => {
    const innerPopUp = document.createElement('div');
    innerPopUp.innerText = 'You escaped!\nCongrats :D\n'
    const homeBtnPopUp = document.createElement('button');
    const restartBtn = document.createElement('button');
    const winner = document.createElement('div');

    if (selectedToon === 'white') {
        winner.classList.add('whiteWin');
    } else {
        winner.classList.add('blackWin');
    }

    homeBtnPopUp.innerText = 'Home';
    restartBtn.innerText = 'Restart';

    innerPopUp.appendChild(homeBtnPopUp);
    innerPopUp.appendChild(restartBtn);
    innerPopUp.classList.add('innerPopUp');

    homeBtnPopUp.addEventListener('click', () => {
        goToHomePg();
        popUp.classList.add('pageTransition');
        setTimeout(() => {
            main.removeChild(popUp);
        }, 500);
    });

    restartBtn.addEventListener('click', () => {
        main.removeChild(popUp);
        gameSection.classList.remove('pageTransition');
        gameSection.classList.remove('hidden');
        document.addEventListener('keydown', moveToon);

        const startPos = document.getElementById('startPos');
        const player = document.getElementById('player');
        startPos.classList.remove('closed');
        startPos.appendChild(player);
        closeStart();
    });

    popUp.appendChild(innerPopUp);
    popUp.appendChild(winner);
    popUp.classList.add('popUp');
}

const endGame = () => {
    const end = document.getElementById('end');

    if (end.childElementCount !== 0) {
        popUp.textContent = '';
        makePopUp();
        gameSection.classList.add('pageTransition');
        document.removeEventListener('keydown', moveToon);
        setTimeout(() => {
            gameSection.classList.add('hidden');
            main.appendChild(popUp);
        }, 800);
    }
}

const moveToon = (e) => {
    let keyName = e.key;
    const player = document.getElementById('player');
    let currentPosition = player.parentElement;
    let currentRow = Number(currentPosition.dataset.row);
    let currentColumn = Number(currentPosition.dataset.column);
  
    let toonPosition = {
        ArrowUp: function() {
            let newRow = `[data-row="${currentRow-1}"]`;;
            let newColumn = `[data-column="${currentColumn}"]`;
            let moveTo = gameDiv.querySelector(`${newRow}${newColumn}`);

            if (!moveTo.classList.contains(wallColor)) {
                player.classList.add('sizeDown');
                setTimeout(() => {
                    moveTo.appendChild(player);
                    player.classList.remove('sizeDown');
                    player.classList.add('sizeUp');
                }, 100);
                setTimeout(() => {
                    player.classList.remove('sizeUp');
                }, 200);
            }
                
        },
        ArrowDown: function() {
            let newRow = `[data-row="${currentRow+1}"]`;;
            let newColumn = `[data-column="${currentColumn}"]`;
            let moveTo = gameDiv.querySelector(`${newRow}${newColumn}`);

            if (!moveTo.classList.contains(wallColor)) {
                player.classList.add('sizeDown');
                setTimeout(() => {
                    moveTo.appendChild(player);
                    player.classList.remove('sizeDown');
                    player.classList.add('sizeUp');
                }, 100);
                setTimeout(() => {
                    player.classList.remove('sizeUp');
                }, 200);
            }
        },
        ArrowLeft: function() {
            let newRow = `[data-row="${currentRow}"]`;;
            let newColumn = `[data-column="${currentColumn-1}"]`;
            let moveTo = gameDiv.querySelector(`${newRow}${newColumn}`);

            if (currentColumn > 1) {
                if (!moveTo.classList.contains(wallColor) && moveTo.id !== 'startPos') {
                    player.classList.add('slideLeft');
                    setTimeout(() => {
                        moveTo.appendChild(player);
                        player.classList.remove('slideLeft');
                    }, 100);
                }
            }
        },
        ArrowRight: function() {
            let newRow = `[data-row="${currentRow}"]`;;
            let newColumn = `[data-column="${currentColumn+1}"]`;
            let moveTo = gameDiv.querySelector(`${newRow}${newColumn}`);

            if (currentColumn < 21) {
                if (!moveTo.classList.contains(wallColor)) {
                    player.classList.add('slideRight');
                    setTimeout(() => {
                        moveTo.appendChild(player);
                        player.classList.remove('slideRight');
                    }, 100);
                } 
            }
            
        }
    }
    endGame();
    toonPosition[keyName]();
    
}

const closeStart = () => {
    const startPos = document.getElementById('startPos');
 
    setTimeout(() => {
        startPos.classList.add('closed');
    }, 2500);
}

startBtn.addEventListener('click', () => {
    homePage.classList.add('hidden');
    gameSection.classList.remove('hidden');

    homeBtn.classList.remove('hidden');
    soundBtn.classList.remove('hidden');
    document.addEventListener('keydown', moveToon);
    closeStart();

    gameSection.appendChild(audio);
    audio.play();
});

const desactiveBtn = () => {
    winterScene.disabled = true;
    springScene.disabled = true;
    summerScene.disabled = true;
    autumnScene.disabled = true;
    startBtn.disabled = true;
}

const resetPage = () => {
    desactiveBtn();
    resetSceneBtnColor();
    resetSceneBg();
    whiteToon.classList.remove('pinkText');
    blackToon.classList.remove('pinkText');
    homeBtn.classList.add('hidden');
    hoverHomeBtn.classList.remove('hidden');
    soundBtn.classList.add('hidden');
    gameSection.removeChild(audio);
    document.removeEventListener('keydown', moveToon);
}

const goToHomePg = () => {
    setTimeout(() => {
        gameSection.classList.add('hidden');
        hoverHomeBtn.classList.add('hidden');
        gameSection.classList.remove('pageTransition');
        homePage.classList.add('homeTransition');
        homePage.classList.remove('hidden');
    }, 800);

    gameSection.classList.add('pageTransition');
    
    resetPage();
}

homeBtn.addEventListener('click', goToHomePg);

let clickCount = 'pause';

soundBtn.addEventListener('click', () => {
 
    if (clickCount === 'pause') {
        audio.pause();
        clickCount = 'play';
    } else if (clickCount === 'play') {
        audio.play();
        clickCount = 'pause';
    }
});