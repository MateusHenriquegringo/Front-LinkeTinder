export class Candidato {
    nome;
    email;
    cep;
    cidade;
    estado;
    formacao;
    competencias;
    constructor(nome, email, cep, cidade, estado, formacao, competencias) {
        this.nome = nome;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.estado = estado;
        this.formacao = formacao;
        this.competencias = competencias;
    }
    collectCandidatoData() {
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
    collectCompetencias() {
        return Array.from(this.competencias)
            .filter(competenciasButton => competenciasButton.classList.contains('selected'))
            .map(competencia => competencia.textContent?.trim() ?? "");
    }
}
