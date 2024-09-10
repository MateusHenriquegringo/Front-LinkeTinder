export class Candidato {
    nome;
    email;
    cpf;
    telefone;
    linkedin;
    cep;
    cidade;
    estado;
    formacao;
    competencias;
    constructor(nome, email, cpf, telefone, linkedin, cep, cidade, estado, formacao, competencias) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.linkedin = linkedin;
        this.cep = cep;
        this.cidade = cidade;
        this.estado = estado;
        this.formacao = formacao;
        this.competencias = competencias;
    }
    collectCandidatoData() {
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
            };
        }
        else
            throw new Error("existem inputs invalidos");
    }
    collectCompetencias() {
        return Array.from(this.competencias)
            .filter(competenciasButton => competenciasButton.classList.contains('selected'))
            .map(competencia => competencia.textContent?.trim() ?? "");
    }
    areInputsValid() {
        const nomeREGEX = /^[A-Z][a-zA-ZÀ-ÿ\s]+$/;
        const emailREGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const cpfREGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        const telefoneREGEX = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/m;
        const linkedinREGEX = /^https:\/\/(www\.)?linkedin\.com\/in\/.*$/;
        const cepREGEX = /^\d{5}-?\d{3}$/;
        const cidadeREGEX = /^[a-zA-ZÀ-ÿ\s]{2,}$/;
        const estadoREGEX = /^[A-Z]{2}$/;
        return nomeREGEX.test(this.nome.value) &&
            emailREGEX.test(this.email.value) &&
            cpfREGEX.test(this.cpf.value) &&
            telefoneREGEX.test(this.telefone.value) &&
            linkedinREGEX.test(this.linkedin.value) || this.linkedin.value == "" &&
            cepREGEX.test(this.cep.value) &&
            cidadeREGEX.test(this.cidade.value) &&
            estadoREGEX.test(this.estado.value);
    }
}
