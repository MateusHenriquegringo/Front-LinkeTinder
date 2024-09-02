export const modal = document.getElementById("modal");
export function openModal() {
    modal ? modal.style.display = "flex" : console.log("erro");
}
export function closeModal() {
    modal ? modal.style.display = "none" : console.log("erro");
}
export const submitButton = document.getElementById("submit");
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const uniqueKey = `vagaData_${new Date().getTime()}`;
    const data = collectData();
    localStorage.setItem(uniqueKey, JSON.stringify(data));
    alert("dados salvos com sucesso");
});
