class Model {
    constructor() {
        this.data = {};
        this.category = "";
        this.word = "";
    }
    async loadwords() {
        const response = await fetch("data/words.json");
        this.data = await response.json();
        // console.log(this.data);
    }
    getRandomCategory() {
        const category = Object.keys(this.data);
        category.sort(() => Math.random() - 0.5);
        this.category = category[0];
        // console.log(this.category)
    }
    getRandomWord() {
        const words = this.data[this.category];
        const randidx = Math.floor(Math.random() * words.length);
        this.word = words[randidx];
        // console.log("Word : ", this.word)
    }
    newGame() {
        this.getRandomCategory();
        this.getRandomWord();
        // console.log("Category : " + this.category);
        // console.log("Word : " + this.word);
    }
}
const model = new Model();
(async () => {
    await model.loadwords();
    // model.getRandomCategory();
    // model.getRandomWord();
    model.newGame();
})();