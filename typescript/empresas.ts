const button = document.getElementById("anunciarVaga")
const modal = document.getElementById("vagaModal")
const closeButton = document.getElementsByClassName("close")[0]

const form = document.getElementById('vagaForm')

button?.addEventListener('click', function (e) {

    e.preventDefault()
    openModal()

})

form?.addEventListener('submit', (e)=> {
    e.preventDefault
})


modal?.addEventListener('click', (e)=>{
   e.preventDefault()

    if(e.target == modal || e.target == closeButton){
        closeModal()
    }
 }
)


function openModal(): void {
    modal ? modal.style.display = "flex" : console.log("erro")
}

function closeModal(): void {
    modal ? modal.style.display = "none" : console.log("erro")
}



