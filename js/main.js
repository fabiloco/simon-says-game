document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById('bt');
    const topLeftBtn = document.getElementById('top-left');
    const topRightBtn = document.getElementById('top-right');
    const bottomLeftBtn = document.getElementById('bottom-left');
    const bottomRightBtn = document.getElementById('bottom-right');



    class Game {
        constructor() {
            this.init();
            this.generateSequence();
        }

        init() {
            startBtn.classList.add('hide');
            this.level = 1;
            this.buttons = {
                topLeftBtn,
                topRightBtn,
                bottomLeftBtn,
                bottomRightBtn
            }
        }

        generateSequence() {
            this.sequence = new Array(10).fill(0).map((n) => Math.floor(Math.random() * 4));
        }
    }

    function startGame() {
        //alert("The game's gonna start soon");
        window.game = new Game();
    }

    startBtn.addEventListener('click', () => {
        startGame();
    });
});