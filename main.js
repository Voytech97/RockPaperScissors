let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let roundNum = 0;
let btn = document.getElementById('start');
let optionAI = 0;
let aiPicks = ['kamień', 'papier', 'nożyce'];
let score = document.getElementById('opScr');
let round = document.getElementById('round');
let picks = ['pustą dłoń', 'kamień', 'papier', 'nożyce'];
let i = 0;
let wins = 0;

function rockPick() {
    picks[1];
    i = 1;
    rock.style.backgroundColor = "darkslategrey";
    paper.style.backgroundColor = "rgb(193, 209, 193)";
    scissors.style.backgroundColor = "rgb(193, 209, 193)";
}

function paperPick() {
    picks[2];
    i = 2;
    rock.style.backgroundColor = "rgb(193, 209, 193)";
    paper.style.backgroundColor = "darkslategrey";
    scissors.style.backgroundColor = "rgb(193, 209, 193)";
}

function scissorsPick() {
    picks[3];
    i = 3;
    rock.style.backgroundColor = "rgb(193, 209, 193)";
    paper.style.backgroundColor = "rgb(193, 209, 193)";
    scissors.style.backgroundColor = "darkslategrey";
}

function aiPlay() {
    optionAI = Math.floor(Math.random() * 3);
    roundNum++

    if (optionAI <= -1) {
        optionAI++
    } else if (i == optionAI + 1)
        score.innerHTML = "REMIS!";
    else if (i == 1 && optionAI == 2) {
        wins++
        score.innerHTML = "Wygrałeś!";
    } else if (i == 2 && optionAI == 0) {
        wins++
        score.innerHTML = "Wygrałeś!";
    } else if (i == 3 && optionAI == 1) {
        wins++
        score.innerHTML = "Wygrałeś!";
    } else {
        score.innerHTML = "Przegrałeś"
    }
    round.innerHTML = "Masz " + wins + " zwycięstw!" + "<br/>" + "Runda " + roundNum + ": Wybrałeś " + picks[i] + ", a przeciwnik " + aiPicks[optionAI];
    picks[0];
    i = 0;
    rock.style.backgroundColor = "rgb(193, 209, 193)";
    paper.style.backgroundColor = "rgb(193, 209, 193)";
    scissors.style.backgroundColor = "rgb(193, 209, 193)";
}


rock.addEventListener('click', rockPick);
paper.addEventListener('click', paperPick);
scissors.addEventListener('click', scissorsPick);
btn.addEventListener('click', aiPlay);