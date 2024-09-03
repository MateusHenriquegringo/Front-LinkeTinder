const modal = document.getElementById("modal")
const closeButton = document.getElementsByClassName("close")[0]
const buttonOpenModal = document.getElementById("cadastrar")

buttonOpenModal?.addEventListener('click', function (e) {

    e.preventDefault()
    openModal()

})

function openModal(): void {
    modal ? modal.style.display = "flex" : console.log("erro")
}
function closeModal(): void {
    modal ? modal.style.display = "none" : console.log("erro")
}

modal?.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target == modal || e.target == closeButton) {
        closeModal()
    }
}
)