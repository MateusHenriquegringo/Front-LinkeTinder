export class Vaga {
    nome;
    descricao;
    empresa;
    constructor(nome, descricao, empresa) {
        this.nome = nome;
        this.descricao = descricao;
        this.empresa = empresa;
    }
    collectVagaData() {
        return {
            nome: this.nome.value,
            descricao: this.descricao.value,
            empresa: this.empresa.value
        };
    }
}
