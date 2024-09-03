"use strict";
const modal = document.getElementById("modal");
const closeButton = document.getElementsByClassName("close")[0];
const buttonOpenModal = document.getElementById("cadastrar");
buttonOpenModal === null || buttonOpenModal === void 0 ? void 0 : buttonOpenModal.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
});
function openModal() {
    modal ? modal.style.display = "flex" : console.log("erro");
}
function closeModal() {
    modal ? modal.style.display = "none" : console.log("erro");
}
modal === null || modal === void 0 ? void 0 : modal.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target == modal || e.target == closeButton) {
        closeModal();
    }
});
