class View {
    constructor() {
        this.category = document.getElementById("category");
        this.word = document.getElementById("word");
        this.status = document.getElementById("status");
        this.newGameBtn = document.getElementById("new-game");
    }
    displayCategory(category) {
        this.category.textContent = category;
    }
    displayWord(word) {
        let hiddenword = "";
        for (let i = 0; i < word.length; i++) {
            hiddenword += "_";
        }
        this.word.textContent = hiddenword.trim();
    }
    displayStatus(message) {
        this.status.textContent = message;
    }

}
const view = new View();
// view.displayCategory("Programming");
// view.displayWord("frontend");
// view.displayStatus("Guess a letter!");