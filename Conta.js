//Conta Abstrata
export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta){
            throw Error("Você não deveria instaciar um objeto do tipo Conta diretamente!")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }
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

    sacar(valor){
        throw Error('O metodo sacar da conta é abstrato');
    }
    _sacar(valor) {
        const valorSacado = valor*taxa;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    }
}