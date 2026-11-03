"use strict";

const form = document.querySelector("#card-form");
const input = document.querySelector("#card-input");
const list = document.querySelector("#card-list");
const status = document.querySelector("#card-status");

function updateCounter() {
  const counterElement = document.querySelector("#card-counter");
  if (counterElement) {
    const totalCards = list.querySelectorAll(".item-card").length;
    counterElement.textContent = `Количество карточек: ${totalCards}`;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = input.value.trim();

  if (title === "") { status.textContent = "Введите название карточки."; return; }

  const li = document.createElement("li");
  li.className = "item-card";
  li.setAttribute("data-card", "");

  const span = document.createElement("span");
  span.className = "item-title";
  span.textContent = title;

  const button = document.createElement("button");
  button.className = "remove-card";

  li.append(span);
  li.append(button);
  list.append(li);

  input.value = "";
  status.textContent = "";
  updateCounter();
});

list.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".remove-card");

  if (deleteButton) {
    const card = event.target.closest(".item-card");
    if (card) {
      card.remove();
      updateCounter();
    }
    return;
  }

  const card = event.target.closest(".item-card");
  if (card) {
    card.classList.toggle("is-active");
  }
});
