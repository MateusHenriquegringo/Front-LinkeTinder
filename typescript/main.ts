export const modal = document.getElementById("modal")

export function openModal(): void {
    modal ? modal.style.display = "flex" : console.log("erro")
}

export function closeModal(): void {
    modal ? modal.style.display = "none" : console.log("erro")
}
