export class Modal {
    buttonToOpen;
    modal;
    buttonToClose;
    constructor(buttonToOpen, modal, buttonToClose) {
        this.buttonToOpen = buttonToOpen;
        this.modal = modal;
        this.buttonToClose = buttonToClose;
        this.modal?.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target == modal || e.target == buttonToClose) {
                this.closeModal();
            }
        });
        this.buttonToOpen?.addEventListener('click', (e) => {
            e.preventDefault();
            this.openModal();
        });
        this.buttonToClose?.addEventListener('click', (e) => {
            e.preventDefault();
            this.closeModal();
        });
    }
    openModal() {
        this.modal ? this.modal.style.display = "flex" : console.log("erro");
    }
    closeModal() {
        this.modal ? this.modal.style.display = "none" : console.log("erro");
    }
}
export class ModalCandidato extends Modal {
    buttonToOpen;
    modal;
    buttonToClose;
    competenciasButtons;
    constructor(buttonToOpen, modal, buttonToClose, competenciasButtons) {
        super(buttonToOpen, modal, buttonToClose);
        this.buttonToOpen = buttonToOpen;
        this.modal = modal;
        this.buttonToClose = buttonToClose;
        this.competenciasButtons = competenciasButtons;
        Array.from(competenciasButtons).forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('selected');
            });
        });
    }
    clearCompetenciasStyle() {
        Array.from(this.competenciasButtons).forEach(button => {
            button.classList.remove('selected');
        });
    }
    collectCompetencias() {
        return Array.from(this.competenciasButtons)
            .filter(competenciasButton => competenciasButton.classList.contains('selected'))
            .map(competencia => competencia.textContent?.trim() ?? "");
    }
}
