import { Cliente } from './Cliente.js'

export class ContaCorrente {

    static nContas = 0;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia) {
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = 0;
        ContaCorrente.nContas += 1;
    }

    sacar(valor) {
        if (this._saldo < valor) {
            return;
        }
        this._saldo -= valor;

    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    }
}