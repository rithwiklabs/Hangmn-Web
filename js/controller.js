class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.addEventListeners();
    }
    startGame() {
        this.model.newGame();
        this.view.displayCategory(this.model.category);
        this.view.displayWord(this.model.word, this.model.guessedLetters);
        this.view.displayStats(this.model.wrongGuesses);
        this.view.displayStatus("Guess a letter!");

    }

    addEventListeners() {
        this.view.newGameBtn.addEventListener("click", () => {
            this.startGame();
        });

        document.addEventListener("keydown", (event) => {
            // console.log(event.key);
            if (this.model.gameOver)
                return;
            const letter = event.key.toLowerCase();
            if (letter >= "a" && letter <= "z") {
                this.model.guessLetter(letter);
                this.view.displayWord(this.model.word, this.model.guessedLetters);
                this.view.displayStats(this.model.wrongGuesses);
                // console.log(this.model.guessedLetters)
                // console.log(this.model.wrongGuesses)
                if (this.model.hasWon()) {
                    // console.log("Player Won!");
                    this.model.gameOver = true;
                    this.view.displayStatus("Congratulatios! You Won!");
                }
                if (this.model.hasLost()) {
                    this.model.gameOver = true;
                    this.view.displayStatus("Game Over !The Word was " + this.model.word);
                }
            }
        })
    }

}
const ctrl = new Controller(model, view);
(async () => {
    await model.loadwords();
    ctrl.startGame();
})();