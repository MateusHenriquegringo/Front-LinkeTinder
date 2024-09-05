export class Modal {

    constructor(
        public buttonToOpen: HTMLElement | null,
        public modal: HTMLElement | null,
        public buttonToClose: HTMLElement | null
    ){

        this.modal?.addEventListener('click', (e) => {
            e.preventDefault()
        
            if (e.target == modal || e.target == buttonToClose) {
                this.closeModal()
            }
         }
        )

        this.buttonToOpen?.addEventListener('click', (e)=>{
            e.preventDefault()

            this.openModal()
        })

        this.buttonToClose?.addEventListener('click', (e)=>{
            e.preventDefault()

            this.closeModal()
        })
    }

    public openModal(): void{
        this.modal ? this.modal.style.display = "flex" : console.log("erro")
    }
    
    public closeModal(): void{
        this.modal ? this.modal.style.display = "none" : console.log("erro")
    }
    

}


export class ModalCandidato extends Modal {

    constructor( 
        public buttonToOpen: HTMLElement | null,
        public modal: HTMLElement | null,
        public buttonToClose: HTMLElement | null,
        public competenciasButtons: HTMLCollectionOf<Element>
    ){
        super(buttonToOpen, modal, buttonToClose)

        Array.from(competenciasButtons).forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('selected');
            });
        });
    }

    clearCompetenciasStyle(): void {
        Array.from(this.competenciasButtons).forEach(button => {
            button.classList.remove('selected')
        });
    }

    collectCompetencias(): string[] {
        return Array.from(this.competenciasButtons)
            .filter(competenciasButton => competenciasButton.classList.contains('selected'))
            .map(competencia => competencia.textContent?.trim() ?? "");
    }

}