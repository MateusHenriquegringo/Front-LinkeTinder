export class Modal {
    constructor(buttonToOpen, modal, buttonToClose) {
        var _a, _b, _c;
        this.buttonToOpen = buttonToOpen;
        this.modal = modal;
        this.buttonToClose = buttonToClose;
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target == modal || e.target == buttonToClose) {
                this.closeModal();
            }
        });
        (_b = this.buttonToOpen) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {
            e.preventDefault();
            this.openModal();
        });
        (_c = this.buttonToClose) === null || _c === void 0 ? void 0 : _c.addEventListener('click', (e) => {
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
}
