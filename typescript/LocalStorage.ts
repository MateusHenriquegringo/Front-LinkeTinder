import { CandidatoJSON } from "./CandidatoClass"

export class LocalStorage {

    private constructor() {
    }


    static fetchOnLocalStorage<T>(keyPrefix: fetchPefix): T[] {
        let data: T[] = []

        for (let i: number = 0; i < localStorage.length; i++) {

            const key: string | null = localStorage.key(i)

            if (key && key.startsWith(keyPrefix)) {
                const jsonString: string | null = localStorage.getItem(key)

                if (jsonString) data.push(JSON.parse(jsonString))
            }

        }

        return data

    }

    static candidatosByCompetencia() : {[key: string]: number} {
        
        const count: {[key: string]: number} = {}

        this.fetchOnLocalStorage<CandidatoJSON>(fetchPefix.CANDIDATOS).forEach(candidato => {
            candidato.competencias.forEach(competencia => {
                count[competencia] = (count[competencia]||0) + 1;
            })
        })

        return count
    }

}

export enum fetchPefix {
    EMPRESAS = "empresaData_",
    VAGAS = "vagaData_",
    CANDIDATOS = "candidatoData_"
}

interface CandidatoEmEmpresas {
    formacao: string,
    competencias: string[]
}