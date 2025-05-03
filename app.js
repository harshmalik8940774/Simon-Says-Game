let gameSeq = [];
let userSeq = [];

let btns = ['yellow', 'purple', 'green', 'red'];

let started = false;
let level = 0;
let maxScore = 0;
let currentScore = 0;
let h2 = document.querySelector('h2');
// step one -> when we pressed any key then our game is started
document.addEventListener('keypress', function () {
    if (started == false) {
        console.log("game started");
        started = true;
  document.querySelector(".MaxScore").innerText = `Your Maximum Score `;      

        levelUp();
    }
})

//step 2 -> random button is flashed and then level is increased by one
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 400);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 400);
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //choose random color
    let randIdx = Math.floor(Math.random() * 3);//(0 -3)
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randbtn);
 }

// step 3->user input

function checkAns(idx) {
    

    if (userSeq[idx] == gameSeq[idx]) {
        console.log('same value');

        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        } 
        
        currentScore++;
    }
    else {
        h2.innerHTML = `Game Over!Your score was <b>${level} </b> <br/> Press any key to start new game`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";

            maxScore = MaximumScore();
            
            document.querySelector('.MaxScore').innerHTML = `Your Maximum Score is : <b> ${maxScore}`;
            
            reset();
            
        }, 150);
        
    }
}


function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
    btn.addEventListener('click', btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    
    currentScore = 0;


    
}


function MaximumScore() {
    if (maxScore >= currentScore) {
        return maxScore;
    }
    else {
        return currentScore;
    }
}
 
