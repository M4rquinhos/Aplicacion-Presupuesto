class Dato {
    constructor(descripcion, valor) {
        this.descripcion = descripcion;
        this.valor = valor;
    }

    // Descripcion
    get descripcion() {
        return this._descripcion;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    // Valor
     get valor() {
         return this._valor;
     }
     set valor(valor) {
         this._valor = valor;
     }
}