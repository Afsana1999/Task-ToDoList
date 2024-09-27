const inputText = document.querySelector(".inputText");
const addBtn = document.querySelector(".addBtn");
const toDoList_paragraph = document.querySelector(".toDoList_paragraph");

addBtn.addEventListener("click", function () {
  const newDiw = document.createElement("div");
  newDiw.classList.add("flex");
  const newParagraph = document.createElement("p");
  newParagraph.innerText = inputText.value;
  const newInpCheck = document.createElement("input");
  newInpCheck.type = "checkbox";
  newInpCheck.addEventListener("click", function () {
    newParagraph.classList.toggle("line-through");
  });
  const newDeleteBtn = document.createElement("button");
  newDeleteBtn.textContent = "Delete";
  newDeleteBtn.classList.add("deleteBtn");
  newDeleteBtn.addEventListener("click", function () {
    toDoList_paragraph.removeChild(newDiw);
  });
  const newEditBtn = document.createElement("button");
  newEditBtn.textContent = "Edit";
  newEditBtn.addEventListener("click", function () {
    const editInput = document.createElement("input");
    editInput.style.backgroundColor = "rgb(235, 233, 233)";
    editInput.style.border = "none";
    newDiw.replaceChild(editInput, newParagraph);
    editInput.focus();
    editInput.value = newParagraph.innerText;
    editInput.addEventListener("change", function () {
      newParagraph.innerText = editInput.value;
      newDiw.replaceChild(newParagraph, editInput);
    });
  });
  toDoList_paragraph.appendChild(newDiw);
  newDiw.appendChild(newParagraph);
  newDiw.appendChild(newInpCheck);
  newDiw.appendChild(newDeleteBtn);
  newDiw.appendChild(newEditBtn);
  inputText.value = "";
});
