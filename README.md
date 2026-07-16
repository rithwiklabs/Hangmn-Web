# Hangman Web

<p align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge\&logo=json\&logoColor=white)
![Architecture](https://img.shields.io/badge/Architecture-MVC-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-Educational-blue?style=for-the-badge)

</p>

A modern browser-based **Hangman Game** built using **HTML, CSS, and JavaScript**. The project follows the **Model-View-Controller (MVC)** architecture, ensuring a clean separation between game logic, user interface, and user interactions. The game features multiple categories, smooth animations, responsive design, and an engaging gameplay experience.

---

## Features

* Random word generation
* Five different word categories
* 40–50 words in each category
* Animated Hangman (No image assets)
* Physical keyboard support
* Interactive virtual keyboard
* New Game / Restart option
* Responsive user interface
* Fast and lightweight

---

## MVC Architecture

This project follows the **Model-View-Controller (MVC)** design pattern.

### Model

Responsible for:

* Loading the word database
* Selecting random words and categories
* Managing game state
* Validating guesses
* Checking win/loss conditions

### View

Responsible for:

* Rendering the game interface
* Displaying the hidden word
* Showing the selected category
* Updating the Hangman animation
* Displaying game messages and status

### Controller

Responsible for:

* Handling user interactions
* Processing keyboard and button events
* Coordinating communication between the Model and View
* Starting and resetting the game

---

## Project Structure

```text
Hangman-Web/
│
├── index.html
├── README.md
│
├── data/
│   └── words.json
│
├── css/
│   ├── style.css
│   └── animation.css
│
└── js/
    ├── model.js
    ├── view.js
    └── controller.js
```

---

## File Description

| File            | Description                                        |
| --------------- | -------------------------------------------------- |
| `index.html`    | Main webpage and game layout                       |
| `words.json`    | Stores all categories and words                    |
| `style.css`     | General styling for the application                |
| `animation.css` | Handles Hangman animations                         |
| `model.js`      | Contains game data and business logic              |
| `view.js`       | Updates the UI and animations                      |
| `controller.js` | Handles user input and coordinates the application |

---

## Word Categories

The game includes approximately **200–250 words** distributed across five categories:

* Programming
* Countries
* Animals
* Movies
* Sports

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* JSON

---

## Getting Started

1. Clone the repository.

```bash
git clone https://github.com/your-username/Hangman-Web.git
```

2. Navigate to the project directory.

```bash
cd Hangman-Web
```

3. Open `index.html` in your preferred web browser.

---

## Future Enhancements

* Hint System
* ⏱Timer Mode
* Dark Mode
* Sound Effects
* High Score Tracking
* Game Statistics
* Difficulty Levels

---

## License

This project is created for **educational and learning purposes**.
