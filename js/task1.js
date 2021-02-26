const categorieItemsRefs = document.querySelectorAll("#categories > .item");

console.log(`В списке ${categorieItemsRefs.length} категории.`);

categorieItemsRefs.forEach(({ firstElementChild, lastElementChild }) =>
  console.log(
    `Категория: ${firstElementChild.textContent}\nКоличество элементов: ${lastElementChild.children.length}`
  )
);
