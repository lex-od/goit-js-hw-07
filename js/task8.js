const createBoxes = (amount) => {
  let markup = "";

  for (let i = 0; i < amount; i++) {
    const side = 30 + 10 * i;
    markup += `<div style="width: ${side}px; height: ${side}px; background-color: rgb(${rndNum(
      256
    )}, ${rndNum(256)}, ${rndNum(256)});"></div>`;
  }

  containerRef.innerHTML = markup;
};

const destroyBoxes = () => (containerRef.innerHTML = "");

const rndNum = (maxNum) => Math.floor(Math.random() * maxNum);

const inputCountRef = document.querySelector("#controls > input");
const btnRenderRef = document.querySelector('[data-action="render"]');
const btnDestroyRef = document.querySelector('[data-action="destroy"]');
const containerRef = document.querySelector("#boxes");

btnRenderRef.addEventListener("click", () => createBoxes(inputCountRef.value));
btnDestroyRef.addEventListener("click", destroyBoxes);
