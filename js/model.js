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
        const randomidx = Math.floor(Math.random() * category.length);
        this.category = category[randomidx];
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
// (async () => {
//     await model.loadwords();
//     model.newGame();
// })();