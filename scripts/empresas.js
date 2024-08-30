"use strict";
const button = document.getElementById("anunciarVaga");
const modal = document.getElementById("vagaModal");
const closeButton = document.getElementsByClassName("close")[0];
button === null || button === void 0 ? void 0 : button.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
});
modal === null || modal === void 0 ? void 0 : modal.addEventListener('click', (e) => {
    if (e.target == modal || e.target == closeButton) {
        closeModal();
    }
});
function openModal() {
    modal ? modal.style.display = "flex" : console.log("erro");
}
function closeModal() {
    modal ? modal.style.display = "none" : console.log("erro");
}
