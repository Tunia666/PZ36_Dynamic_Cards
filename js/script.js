"use strict";

const form = document.querySelector("#card-form");
const input = document.querySelector("#card-input");
const list = document.querySelector("#card-list");
const status = document.querySelector("#card-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();
  if (title === "") { status.textContent = "Введите название карточки."; return; }
  const item = document.createElement("li");
  item.className = "item-card";
  item.setAttribute("data-card", "");
  const label = document.createElement("span");
  label.className = "item-title";
  label.textContent = title;
  const remove = document.createElement("button");
  remove.className = "remove-card";
  remove.type = "button";
  remove.setAttribute("aria-label", "удалить карту");
  remove.textContent = "×";
  item.append(label, remove);
  list.append(item);
  input.value = "";
  status.textContent = "карта добавлена";
});
list.addEventListener("click", (event) => {
  const remove = event.target.closest(".remove-card");
  if (remove) {
    remove.closest(".item-card").remove();
    status.textContent = "карта удалена";
    return;
  }

  const card = event.target.closest(".item-card");
  if (card && list.contains(card)) {
  card.classList.toggle(".is-active");
  status.textContent = "выделение карты изменено";
  }
});




// Задание 3. Назначьте ОДИН обработчик click на list (делегирование).
// Через event.target.closest(".remove-card") найдите кнопку удаления.
// Если кнопка есть, удалите её ближайшую .item-card и завершите обработчик.

// Задание 4. Если кликнули не по кнопке удаления,
// найдите event.target.closest(".item-card") и переключите is-active.
