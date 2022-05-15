export class ContaPoupanca {

    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this.agencia = agencia;

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