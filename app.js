/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;
var diceValue = 0;
var diceValue1 = 0;

init();



document.querySelector('.btn-roll').addEventListener('click', function(){
  if(gamePlaying){
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice1 = Math.floor(Math.random() * 6) + 1;
    //2. Display result
    var diceDOM = document.querySelector('.dice');
    var dice1DOM = document.querySelector('.dice1');
    dice1DOM.style.display = 'block';
    dice1DOM.src = 'dice-' + dice1 + '.png';
     diceDOM.style.display = 'block';
     diceDOM.src = 'dice-' + dice + '.png';

    //3. update the round score if the round number was not 1
     if ((diceValue === 6 && dice === 6) || (diceValue1 === 6 && dice1 === 6)  ){
       scores[activePlayer] = 0;
       document.querySelector('#score-' + activePlayer).textContent = 0;
       nextPlayer();

     } else if(dice !== 1 && dice1 !== 1){
       roundScore += dice + dice1;
       document.querySelector('#current-' + activePlayer).textContent = roundScore;
     } else {
       nextPlayer();
     }
     diceValue = dice;
     diceValue1 = dice1;
     console.log(diceValue);
     console.log(diceValue1);
  }

});


document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying){
    //add current score to global scores
    scores[activePlayer] += roundScore;

    //update UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  var input = document.querySelector('.win_score').value;
  var winScore;

  if(input){
    winScore = input;
  } else {
    winScore = 100;
  }

  //check if player won the game
  if (scores[activePlayer] >= winScore){
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    gamePlaying = false;
  } else {
    //next player
    nextPlayer();
  }

}

});


document.querySelector('.btn-new').addEventListener('click', init);





function nextPlayer() {
  //next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice1').style.display = 'none';

}

function init() {
  scores =[0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice1').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}




















//state variable tells the condition of a system. we use it when we want to remember something
//document.querySelector('.player-0-panel').classList.remove('active');
//document.querySelector('.player-1-panel').classList.add('active');
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


//var x = document.querySelector('#score-0').textContent;
//console.log(x);

/*Event Handling*/

//function btn(){
  //do something
//}

//a callback function is a function that is not called by us, but by another function.
//it is a function that we pass inside another function.
// anonymous function, is a function that doesent have a name and cant be reused
