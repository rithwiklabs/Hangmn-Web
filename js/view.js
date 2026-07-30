class View {
    constructor() {
        this.category = document.getElementById("category");
        this.word = document.getElementById("word");
        this.status = document.getElementById("status");
        this.newGameBtn = document.getElementById("new-game");
        this.wrongGuesses = document.getElementById("wrong-guesses");
        this.attemptsLeft = document.getElementById("attempts-left");
    }
    displayCategory(category) {
        this.category.textContent = category;
    }
    displayWord(word, guessedLetters) {
        let display = "";
        for (let i = 0; i < word.length; i++) {
            if (guessedLetters.includes(word[i])) {
                display += word[i] + " ";
            }
            else {
                display += "_";
            }
        }
        this.word.textContent = display.trim();
    }
    displayStatus(message) {
        this.status.textContent = message;
    }
    displayStats(wrongGuesses) {
        this.wrongGuesses.textContent = wrongGuesses;
        this.attemptsLeft.textContent = 6 - wrongGuesses;
    }
}
const view = new View();