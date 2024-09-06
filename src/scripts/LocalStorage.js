export class LocalStorage {
    constructor() {
    }
    static fetchOnLocalStorage(keyPrefix) {
        let data = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(keyPrefix)) {
                const jsonString = localStorage.getItem(key);
                if (jsonString)
                    data.push(JSON.parse(jsonString));
            }
        }
        return data;
    }
}
export var fetchPefix;
(function (fetchPefix) {
    fetchPefix["EMPRESAS"] = "empresaData_";
    fetchPefix["VAGAS"] = "vagaData_";
    fetchPefix["CANDIDATOS"] = "candidatoData_";
})(fetchPefix || (fetchPefix = {}));
