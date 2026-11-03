"use strict";

const form = document.querySelector("#card-form");
const input = document.querySelector("#card-input");
const list = document.querySelector("#card-list");
const status = document.querySelector("#card-status");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();
  if (title === "") {
    status.textContent = "Введите название карточки.";
    return;
  }
  const li = document.createElement("li");
  li.classList.add("item-card");
  li.setAttribute("data-card", "");
  const span = document.createElement("span");
  span.classList.add("item-title");
  span.textContent = title;
  const button = document.createElement("button");
  button.classList.add("remove-card");
  button.textContent = "X"; 
  li.append(span, button);
  list.append(li);
  input.value = "";
  status.textContent = "Карточка успешно добавлена.";
});
list.addEventListener("click", (event) => {
  const removeBtn = event.target.closest(".remove-card");
  if (removeBtn) {
    const card = removeBtn.closest(".item-card");
    if (card) {
      card.remove();
      status.textContent = "Карточка успешно удалена."; 
    }
    return;
  }
  const card = event.target.closest(".item-card");
  if (card) {
    card.classList.toggle("is-active");
  
    if (card.classList.contains("is-active")) {
      status.textContent = "Карточка выделена.";
    } else {
      status.textContent = "Выделение снято.";
    }
  }
});
