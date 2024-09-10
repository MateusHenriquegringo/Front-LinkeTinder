export class Empresa {

    constructor(
        public nome: HTMLInputElement,
        public email: HTMLInputElement,
        public cnpj: HTMLInputElement,
        public cep: HTMLInputElement,
        public cidade: HTMLInputElement,
        public estadoFederativo: HTMLInputElement
    ) {
    }

    collectEmpresaData(): EmpresaJSON {

        if(this.areInputsValid()){
            return {
                nome: this.nome.value,
                email: this.email.value,
                cnpj: this.cnpj.value,
                cep: this.cep.value,
                cidade: this.cidade.value,
                estado: this.estadoFederativo.value
            }
        } else throw new Error("existem inputs invalidos")

    }

    private areInputsValid(): boolean {
       
        const cnpjREGEX: RegExp = /^(?:\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$/
        const nomeREGEX: RegExp = /^[a-zA-ZÀ-ÿ\s]{2,}$/
        const emailREGEX: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const cepREGEX: RegExp = /^\d{5}-?\d{3}$/
        const cidadeREGEX: RegExp = /^[a-zA-ZÀ-ÿ\s]{2,}$/
        const estadoREGEX: RegExp = /^[A-Z]{2}$/


        return nomeREGEX.test(this.nome.value) &&
            emailREGEX.test(this.email.value) &&
            cepREGEX.test(this.cep.value) &&
            cidadeREGEX.test(this.cidade.value) &&
            estadoREGEX.test(this.estadoFederativo.value) &&
            cnpjREGEX.test(this.cnpj.value)
    }
}

export interface EmpresaJSON {
    nome: string,
    email: string,
    cnpj: string,
    cep: string,
    cidade: string,
    estado: string
}