const inputFontSizeRef = document.querySelector("#font-size-control");
const exampleTextRef = document.querySelector("#text");

exampleTextRef.style.fontSize = inputFontSizeRef.value + "px";

inputFontSizeRef.addEventListener("input", (e) => {
  exampleTextRef.style.fontSize = e.currentTarget.value + "px";
});
