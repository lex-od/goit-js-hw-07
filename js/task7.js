const inputFontSizeRef = document.querySelector("#font-size-control");
const exampleTextRef = document.querySelector("#text");

inputFontSizeRef.addEventListener("input", (e) => {
  exampleTextRef.style.fontSize = e.currentTarget.value + "px";
});
