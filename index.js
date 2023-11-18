$(document).ready(function() {
    function diceRoll() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function changeImg(player, diceValue) {
        $(`.img${player}`).attr('src', `images/dice${diceValue}.png`);
    }

    function winner() {
        const player1Dice = diceRoll();
        const player2Dice = diceRoll();

        changeImg(1, player1Dice);
        changeImg(2, player2Dice);

        if (player1Dice > player2Dice) {
            $('h1').text('🚩 Player 1 Wins!');
        } else if (player1Dice < player2Dice) {
            $('h1').text('Player 2 Wins! 🚩');
        } else {
            $('h1').text('Draw!');
        }
    }

    winner();

  });