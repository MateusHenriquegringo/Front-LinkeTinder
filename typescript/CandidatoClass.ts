export class Candidato {

    constructor(
        public nome: HTMLInputElement,
        public email: HTMLInputElement,
        public cep: HTMLInputElement,
        public cidade: HTMLInputElement,
        public estado: HTMLInputElement,
        public formacao: HTMLInputElement,
        public competencias: HTMLCollectionOf<Element>
    ){}

    collectCandidatoData(): CandidatoJSON {
         return {
            nome: this.nome.value,
            email: this.email.value,
            cep: this.cep.value,
            cidade: this.cidade.value,
            estado: this.estado.value,
            formacao: this.formacao.value,
            competencias: this.collectCompetencias()
        };
    }

    private collectCompetencias(): string[] {
        return Array.from(this.competencias)
            .filter(competenciasButton => competenciasButton.classList.contains('selected'))
            .map(competencia => competencia.textContent?.trim() ?? "");
    }

}

export interface CandidatoJSON {
    nome: string,
    email: string,
    cep: string,
    cidade: string,
    estado: string,
    formacao: string,
    competencias: string[]
}