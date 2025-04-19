const form = document.querySelector("form");
const inputBox = document.querySelector(".text");

const submit = document.querySelector(".sub");
const start = document.querySelector(".start");

const guess = document.querySelector(".guess").value;
const guesses = document.querySelector(".guesses");
const Hint = document.querySelector(".hint");

const allGuesses = [];

function quiz() {
  let randomNumber;

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  randomNumber = getRandomNumber();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userValue = Number(inputBox.value);
    if (userValue > randomNumber) {
      Hint.innerText = "too high !";
    } else if (userValue < randomNumber) {
      Hint.innerText = "too low !";
    } else {
      Hint.innerText = "congrats ! You won the game. ";
      start.disabled = false;
      submit.disabled = true;
    }
    form.reset();
    allGuesses.push(userValue);
    guesses.innerText = ` your guesses : ${allGuesses.join(", ")} `;
  });

  start.addEventListener("click", () => {
    allGuesses.innerText = "";
    Hint.innerText = "";
    submit.disabled = false;
    guesses.innerHTML = "";
    randomNumber = getRandomNumber();
  });
}

quiz();
