const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientListRef = document.querySelector("#ingredients");

ingredientListRef.append(
  ...ingredients.map((ingredientName) => {
    const ingredientRef = document.createElement("li");
    ingredientRef.textContent = ingredientName;
    return ingredientRef;
  })
);
