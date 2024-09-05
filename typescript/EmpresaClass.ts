export class Empresa {

    constructor (
        public nome: HTMLInputElement,
        public email: HTMLInputElement,
        public cep: HTMLInputElement,
        public cidade: HTMLInputElement,
        public estadoFederativo: HTMLInputElement
    ){
    }

    collectEmpresaData(): EmpresaJSON {
        return {
            nome: this.nome.value,
            email: this.email.value,
            cep: this.cep.value,
            cidade: this.cidade.value,
            estado: this.estadoFederativo.value
        }
    }

}

export interface EmpresaJSON {
    nome: string,
    email: string,
    cep: string,
    cidade: string,
    estado: string
}