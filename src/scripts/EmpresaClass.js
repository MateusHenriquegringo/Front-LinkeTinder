export class Empresa {
    nome;
    email;
    cnpj;
    cep;
    cidade;
    estadoFederativo;
    constructor(nome, email, cnpj, cep, cidade, estadoFederativo) {
        this.nome = nome;
        this.email = email;
        this.cnpj = cnpj;
        this.cep = cep;
        this.cidade = cidade;
        this.estadoFederativo = estadoFederativo;
    }
    collectEmpresaData() {
        if (this.areInputsValid()) {
            return {
                nome: this.nome.value,
                email: this.email.value,
                cnpj: this.cnpj.value,
                cep: this.cep.value,
                cidade: this.cidade.value,
                estado: this.estadoFederativo.value
            };
        }
        else
            throw new Error("existem inputs invalidos");
    }
    areInputsValid() {
        const cnpjREGEX = /^(?:\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$/;
        const nomeREGEX = /^[a-zA-ZÀ-ÿ\s]{2,}$/;
        const emailREGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const cepREGEX = /^\d{5}-?\d{3}$/;
        const cidadeREGEX = /^[a-zA-ZÀ-ÿ\s]{2,}$/;
        const estadoREGEX = /^[A-Z]{2}$/;
        return nomeREGEX.test(this.nome.value) &&
            emailREGEX.test(this.email.value) &&
            cepREGEX.test(this.cep.value) &&
            cidadeREGEX.test(this.cidade.value) &&
            estadoREGEX.test(this.estadoFederativo.value) &&
            cnpjREGEX.test(this.cnpj.value);
    }
}
