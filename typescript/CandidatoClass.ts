export class Candidato {

    constructor(
        public nome: HTMLInputElement,
        public email: HTMLInputElement,
        public cpf: HTMLInputElement,
        public telefone: HTMLInputElement,
        public linkedin: HTMLInputElement,
        public cep: HTMLInputElement,
        public cidade: HTMLInputElement,
        public estado: HTMLInputElement,
        public formacao: HTMLInputElement,
        public competencias: HTMLCollectionOf<Element>
    ) { }

    collectCandidatoData(): CandidatoJSON {

        if (this.areInputsValid()) {
            return {
                nome: this.nome.value,
                email: this.email.value,
                cpf: this.cpf.value,
                telefone: this.telefone.value,
                linkedin: this.linkedin.value,
                cep: this.cep.value,
                cidade: this.cidade.value,
                estado: this.estado.value,
                formacao: this.formacao.value,
                competencias: this.collectCompetencias()
            }
        } else throw new Error("existem inputs invalidos")
    }

    private collectCompetencias(): string[] {
        return Array.from(this.competencias)
            .filter(competenciasButton => competenciasButton.classList.contains('selected'))
            .map(competencia => competencia.textContent?.trim() ?? "");
    }

    private areInputsValid(): boolean {

        const nomeREGEX: RegExp = /^[A-Z][a-zA-ZÀ-ÿ\s]+$/
        const emailREGEX: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const cpfREGEX: RegExp = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
        const telefoneREGEX: RegExp = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/m
        const linkedinREGEX: RegExp = /^https:\/\/(www\.)?linkedin\.com\/in\/.*$/
        const cepREGEX: RegExp = /^\d{5}-?\d{3}$/
        const cidadeREGEX: RegExp = /^[a-zA-ZÀ-ÿ\s]{2,}$/
        const estadoREGEX: RegExp = /^[A-Z]{2}$/

        return nomeREGEX.test(this.nome.value) &&
            emailREGEX.test(this.email.value) &&
            cpfREGEX.test(this.cpf.value) &&
            telefoneREGEX.test(this.telefone.value) &&
            linkedinREGEX.test(this.linkedin.value) || this.linkedin.value == "" &&
            cepREGEX.test(this.cep.value) &&
            cidadeREGEX.test(this.cidade.value) &&
            estadoREGEX.test(this.estado.value)

    }

}

export interface CandidatoJSON {
    nome: string,
    email: string,
    cpf: string,
    telefone: string,
    linkedin: string,
    cep: string,
    cidade: string,
    estado: string,
    formacao: string,
    competencias: string[]
}