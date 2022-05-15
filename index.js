import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Conta } from './Conta';

const cliente1 = new Cliente('Alice');
const cliente2 = new Cliente("Ricardo", 1112223354);


const contaCorrente1 = new Conta(cliente1, 1001);
const contaCorrente2 = new Conta(cliente2, 156);


//contaCorrente1.depositar(100);
//contaCorrente1.sacar(30);
//contaCorrente1.transferir(35, contaCorrente2);
const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca1);
console.log('numero de contas do banco: ', ContaCorrente.nContas);