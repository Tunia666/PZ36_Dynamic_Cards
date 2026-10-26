"use strict";

const form = document.querySelector("#card-form");
const input = document.querySelector("#card-input");
const list = document.querySelector("#card-list");
const status = document.querySelector("#card-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();
  if (title === "") { status.textContent = "Введите название карточки."; return; }
  // Задание 1. Создайте li с помощью document.createElement().
  // Добавьте класс item-card и атрибут data-card.
  // Задание 2. Создайте span с классом item-title и button с классом remove-card.
  // Запишите текст безопасно через textContent, добавьте дочерние элементы и list.append().
  // Очистите поле input и обновите status.
});

// Задание 3. Назначьте ОДИН обработчик click на list (делегирование).
// Через event.target.closest(".remove-card") найдите кнопку удаления.
// Если кнопка есть, удалите её ближайшую .item-card и завершите обработчик.

// Задание 4. Если кликнули не по кнопке удаления,
// найдите event.target.closest(".item-card") и переключите is-active.
