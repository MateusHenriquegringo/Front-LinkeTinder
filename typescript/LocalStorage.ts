import { Candidato } from "./CandidatoClass"
import { Empresa, EmpresaJSON } from "./EmpresaClass";
import { VagaJSON } from "./VagaClass";

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