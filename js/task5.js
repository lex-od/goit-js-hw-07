const inputNameRef = document.querySelector("#name-input");
const outputNameRef = document.querySelector("#name-output");

inputNameRef.addEventListener("input", (e) => {
  outputNameRef.textContent = e.currentTarget.value || "незнакомец";
});
