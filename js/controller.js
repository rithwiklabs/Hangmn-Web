class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.addEventListeners();
    }
    startGame() {
        this.model.newGame();
        this.view.displayCategory(this.model.category);
        this.view.displayWord(this.model.word);
        this.view.displayStatus("Guess a letter!");
    }

    addEventListeners() {
        this.view.newGameBtn.addEventListener("click", () => {
            this.startGame();
        });

        document.addEventListener("keydown", (event) => {
            // console.log(event.key);
            const letter = event.key.toUpperCase();
            if (letter >= "A" && letter <= "Z") {
                console.log(letter)

            }
        })
    }

}
const ctrl = new Controller(model, view);
(async () => {
    await model.loadwords();
    ctrl.startGame();
})();