document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById('bt');
    const topLeftBtn = document.getElementById('top-left');
    const topRightBtn = document.getElementById('top-right');
    const bottomLeftBtn = document.getElementById('bottom-left');
    const bottomRightBtn = document.getElementById('bottom-right');
    const LAST_LVL = 10;


    class Game {
        constructor() {
            this.init();
            this.generateSequence();
            this.nextLevel();
        }

        init() {
            this.choosePiece = this.choosePiece.bind(this);
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
            this.sequence = new Array(LAST_LVL).fill(0).map((n) => Math.floor(Math.random() * 4));
        }

        nextLevel() {
            this.sublevel = 0;
            this.ilumSequence();
            this.addClickEvents();
        }

        numberToPiece(num) {
            switch (num) {
                case 0:
                    return 'topLeftBtn';
                case 1:
                    return 'topRightBtn';
                case 2:
                    return 'bottomLeftBtn';
                case 3:
                    return 'bottomRightBtn';
            }
        }

        pieceToNumber(piece) {
            switch (piece) {
                case 'topLeftBtn':
                    return 0;
                case 'topRightBtn':
                    return 1;
                case 'bottomLeftBtn':
                    return 2;
                case 'bottomRightBtn':
                    return 3;
            }
        }

        ilumSequence() {
            for (let i = 0; i < this.level; i++) {
                const piece = this.numberToPiece(this.sequence[i]);
                console.log(this.sequence[i]);
                setTimeout(() => this.ilumPiece(piece), 1000 * i);
            }
        }

        ilumPiece(piece) {
            this.buttons[piece].classList.add('shadow-pop-tr', 'light');
            setTimeout(() => this.offPiece(piece), 1000);
        }

        offPiece(piece) {
            this.buttons[piece].classList.remove('shadow-pop-tr', 'light');
        }

        addClickEvents() {
            // this.buttons.topLeftBtn.addEventListener('click', this.choosePiece.bind(this));
            // this.buttons.topRightBtn.addEventListener('click', this.choosePiece.bind(this));
            // this.buttons.bottomLeftBtn.addEventListener('click', this.choosePiece.bind(this));
            // this.buttons.bottomRightBtn.addEventListener('click', this.choosePiece.bind(this));
            this.buttons.topLeftBtn.addEventListener('click', this.choosePiece);
            this.buttons.topRightBtn.addEventListener('click', this.choosePiece);
            this.buttons.bottomLeftBtn.addEventListener('click', this.choosePiece);
            this.buttons.bottomRightBtn.addEventListener('click', this.choosePiece);
        }

        removeClickEvents() {
            this.buttons.topLeftBtn.removeEventListener('click', this.choosePiece);
            this.buttons.topRightBtn.removeEventListener('click', this.choosePiece);
            this.buttons.bottomLeftBtn.removeEventListener('click', this.choosePiece);
            this.buttons.bottomRightBtn.removeEventListener('click', this.choosePiece);
        }

        choosePiece(e) {
            const namePiece = e.target.dataset.piece;
            const numbPiece = this.pieceToNumber(namePiece);
            this.ilumPiece(namePiece);
            if (numbPiece === this.sequence[this.sublevel]) {
                this.sublevel++;
                if (this.sublevel === this.level) {
                    this.level;
                    this.removeClickEvents();
                    if (this.level === (LAST_LVL + 1)) {
                        //Ganar
                    } else {
                        this.nextLevel();
                    }
                }
            } else {
                //perder
            }
        }
    }

    function startGame() {
        //alert("The game's gonna start soon");
        window.game = new Game();
    }

    startBtn.addEventListener('click', () => {
        setTimeout(() => {
            startGame();
        }, 500)
    });
});