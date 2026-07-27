class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    startGame() {
        this.model.newGame();
        this.view.displayCategory(this.model.category);
        this.view.displayWord(this.model.word);
        this.view.displayStatus("Guess a letter!");
    }
}
const ctrl = new Controller(model, view);
(async () => {
    await model.loadwords();
    ctrl.startGame();
})();