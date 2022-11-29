// A popup effect will be enable when users innteractive with button in the course sectnion.

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overLay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = (button = button.closest(".modal"));
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal === null) return;
  modal.classList.add("active");
  overLay.classList.add("active");
}

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove("active");
  overLay.classList.remove("active");
}

overLay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});
