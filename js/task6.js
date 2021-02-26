const inputTextRef = document.querySelector("#validation-input");

inputTextRef.addEventListener("blur", ({ currentTarget: ref }) => {
  ref.classList.remove("invalid", "valid");
  ref.classList.add(
    ref.value.length >= ref.dataset.length ? "valid" : "invalid"
  );
});
