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
        this.view.displayHangman(this.model.wrongGuesses);
        this.view.displayGuessedLetters(this.model.guessedLetters)
        this.view.displayStatus("Guess a letter!");

    }
    processGuess(letter) {
        if (this.model.gameOver)
            return;

        const isNewGuess = this.model.guessLetter(letter);
        if (!isNewGuess) {
            this.view.displayStatus("You already guessed \"" + letter.toLowerCase() + "\"!");
            return
        }
        this.view.displayGuessedLetters(
            this.model.guessedLetters
        );

        this.view.displayHangman(
            this.model.wrongGuesses
        );

        this.view.displayWord(
            this.model.word,
            this.model.guessedLetters
        );

        this.view.displayStats(
            this.model.wrongGuesses
        );

        if (this.model.hasWon()) {
            this.model.gameOver = true;
            this.view.displayStatus("Congratulations! You Won!");
        }
        if (this.model.hasLost()) {
            this.model.gameOver = true;
            this.view.displayStatus(
                "Game Over! The Word was " + this.model.word
            );
        }

    }
    addEventListeners() {

        this.view.newGameBtn.addEventListener("click", () => {
            this.startGame();
        });

        this.view.guessInput.addEventListener("input", (event) => {


            const letter = event.target.value.toLowerCase();

            if (letter >= "a" && letter <= "z") {
                this.processGuess(letter);
                // event.target.value = "";
                setTimeout(() => {
                    event.target.value = "";
                    
                }, 200);
            }
        });
    }

}
const ctrl = new Controller(model, view);
(async () => {
    await model.loadwords();
    ctrl.startGame();
})();