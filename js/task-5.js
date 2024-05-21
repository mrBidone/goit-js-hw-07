function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elemBtn = document.querySelector(".change-color");
const bckgColor = document.querySelector("body");
const textColor = document.querySelector(".color");

elemBtn.addEventListener('click', () => {

  const randomColor = getRandomHexColor();

  bckgColor.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
});

