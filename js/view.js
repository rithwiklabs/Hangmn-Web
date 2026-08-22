class View {
    constructor() {
        this.category = document.getElementById("category");
        this.word = document.getElementById("word");
        this.status = document.getElementById("status");
        this.newGameBtn = document.getElementById("new-game");
        this.wrongGuesses = document.getElementById("wrong-guesses");
        this.attemptsLeft = document.getElementById("attempts-left");
        this.hangmanParts = [
            document.querySelector(".head"),
            document.querySelector(".body"),
            document.querySelector(".left-arm"),
            document.querySelector(".right-arm"),
            document.querySelector(".left-leg"),
            document.querySelector(".right-leg"),
        ];
        this.guessedLetters = document.getElementById("guessed-letters");
        this.guessInput = document.getElementById("guess");
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
    displayHangman(wrongGuesses) {
        for (let i = 0; i < this.hangmanParts.length; i++) {
            if (i < wrongGuesses) {
                this.hangmanParts[i].style.display = "block";
                this.hangmanParts[i].classList.add("hangman-part");
            }
            else {
                this.hangmanParts[i].style.display = "none";
                this.hangmanParts[i].classList.remove("hangman-part");
            }
        }
    }
    displayGuessedLetters(letters) {

        this.guessedLetters.innerHTML = "";
        for (const letter of letters) {
            const box = document.createElement("div");
            box.classList.add("guessed-letter");
            box.textContent = letter.toLowerCase();
            this.guessedLetters.appendChild(box);
        }
    }

    disableInput() {
        this.guessInput.disabled = true;
    }
    enableInput() {
        this.guessInput.disabled = false;
        this.guessInput.focus();
    }
}
const view = new View();