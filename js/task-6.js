function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputData = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divForBoxes = document.querySelector("#boxes");
const divForControls = document.querySelector("#controls");

// console.log(createBtn.textContent)
// console.log(destroyBtn.textContent)
// console.log(divForBoxes)

divForBoxes.classList.add("list-boxes");
divForControls.classList.add("controls-container");
createBtn.classList.add("btn-create");
destroyBtn.classList.add("btn-destroy");
inputData.classList.add("data-input");



createBtn.addEventListener("click", () => {
  const quantity = Number(inputData.value);
  if (quantity >= 1 && quantity <= 100) {
    createBoxes(quantity);
    inputData.value = '';
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

  function destroyBoxes() {
    divForBoxes.innerHTML = "";
  };

  function createBoxes(amount) {
    destroyBoxes(); 

    let size = 30;
    let boxElem = "";
    for (let i = 0; i < amount; i++) {
      boxElem += `<div style = "background-color:${getRandomHexColor()}; min-width:${size}px; height:${size}px"></div>`;
      size += 10;
    };
      divForBoxes.innerHTML = boxElem;
      // console.log(boxElem);     
};








