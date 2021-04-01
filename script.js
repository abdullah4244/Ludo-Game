'use strict';


const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const btnroll = document.querySelector('.btn--roll');
const btnnew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');
const currentscore1 = document.getElementById('current--0');
const currentscore2 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
score1.textContent = '0';
score2.textContent = '0';

let player1score = 0;
let player2score = 0;
let currentscore = 0;



const changeplayer = () => {
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
    currentscore = 0;
    currentscore1.textContent = currentscore;
    currentscore2.textContent = currentscore;
}


btnroll.addEventListener('click',function() {

    let dicenumber = Math.trunc((Math.random() * 6) + 1);

    dice.classList.remove('hidden');
    if(player1score <=20 && player2score <=20){

        dice.src = `dice-${dicenumber}.png`;
      
        if(dicenumber !== 6){

  
        if(player1.classList.contains('player--active')){
           
           currentscore += dicenumber;
           currentscore1.textContent = currentscore;
            


        }
        else if(player2.classList.contains('player--active')){

            currentscore += dicenumber;
           currentscore2.textContent = currentscore;

        }


        }

        else if (dicenumber === 6){

        changeplayer();



        }



    }






});

btnhold.addEventListener('click',function(){

    if(player1score <= 20 && player2score <=20){
    player1score += Number(currentscore1.textContent);
    player2score += Number(currentscore2.textContent);
    score1.textContent = player1score;
    score2.textContent = player2score;


changeplayer();
    }

    else {

        if(player1score >=20) {
            player1.classList.add('player--winner');
        }
        else if(player2score >= 20){
            player2.classList.add('player--winner');
        }
    }

});






