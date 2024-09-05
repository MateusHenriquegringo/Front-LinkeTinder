export class Vaga {

    constructor(
        public nome: HTMLInputElement,
        public descricao: HTMLInputElement,
        public empresa: HTMLInputElement
    ) { }

    collectVagaData(): VagaJSON {
        return {
            nome: this.nome.value,
            descricao: this.descricao.value,
            empresa: this.empresa.value
        }
    }

}

export interface VagaJSON {
    nome: string,
    descricao: string,
    empresa: string
}