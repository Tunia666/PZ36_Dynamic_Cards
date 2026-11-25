const cardForm = document.querySelector("#card-form");
const cardInput = document.querySelector("#card-input");
const cardList = document.querySelector("#card-list");
const cardStatus = document.querySelector("#card-status");

cardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleText = cardInput.value.trim();
  if (titleText === "") {
    cardStatus.textContent = "Введите название карточки.";
    return;
  }

  const li = document.createElement("li");
  li.className = "item-card";
  li.setAttribute("data-card", "");

  const span = document.createElement("span");
  span.className = "item-title";
  span.textContent = titleText;

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-card";
  removeBtn.type = "button";
  removeBtn.setAttribute("aria-label", "Удалить карточку");
  removeBtn.textContent = "×";

  li.append(span, removeBtn);
  cardList.append(li);

  cardInput.value = "";
  cardInput.focus();
  cardStatus.textContent = `Карточка «${titleText}» добавлена.`;
});

cardList.addEventListener("click", (event) => {
  const removeBtn = event.target.closest(".remove-card");
  if (removeBtn && cardList.contains(removeBtn)) {
    const card = removeBtn.closest(".item-card");
    if (card) {
      card.remove();
      cardStatus.textContent = "Карточка удалена.";
    }
    return;
  }

  const card = event.target.closest(".item-card");
  if (card && cardList.contains(card)) {
    card.classList.toggle("is-active");
    cardStatus.textContent = card.classList.contains("is-active")
      ? "Карточка выделена."
      : "Выделение снято.";
  }
});

