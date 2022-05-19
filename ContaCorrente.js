import { Cliente } from './Cliente.js'

export class ContaCorrente extends Conta {

    static nContas = 0;
    constructor(cliente, agencia) {
        super(0,cliente, agencia);
        ContaCorrente.nContas += 1;
    }
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}