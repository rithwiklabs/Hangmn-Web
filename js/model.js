class Model {
    constructor() {
        this.data = {};
        this.category = "";
        this.word = "";
        this.guessedLetters = [];
        this.wrongGuesses = 0;
        this.gameOver = false;
    }
    async loadwords() {
        const response = await fetch("data/words.json");
        this.data = await response.json();
    }
    getRandomCategory() {
        const category = Object.keys(this.data);
        const randomidx = Math.floor(Math.random() * category.length);
        this.category = category[randomidx];
    }
    getRandomWord() {
        const words = this.data[this.category];
        const randidx = Math.floor(Math.random() * words.length);
        this.word = words[randidx];
    }
    guessLetter(ch) {
        if (this.guessedLetters.includes(ch))
            return false;
        this.guessedLetters.push(ch);
        if (!this.word.includes(ch))
            this.wrongGuesses++;
        return true;
    }
    hasWon() {
        for (let i = 0; i < this.word.length; i++) {
            if (!this.guessedLetters.includes(this.word[i]))
                return false;
        }
        return true;
    }
    hasLost() {
        return this.wrongGuesses >= 6;
    }
    newGame() {
        this.guessedLetters = [];
        this.wrongGuesses = 0;
        this.getRandomCategory();
        this.getRandomWord();

        // console.log("Category : " + this.category);
        // console.log("Word : " + this.word);
    }
}
const model = new Model();