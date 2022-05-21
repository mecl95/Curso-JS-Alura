import { Cliente } from './Cliente.js';
//import { ContaCorrente } from './Conta/ContaCorrente.js';
//import { ContaPoupanca } from './Conta/ContaPoupanca.js';
//import { Conta } from './Conta/Conta';
//import { Funcionario } from './Funcionario/Funcionario.js';
import { Diretor } from './Funcionario/Diretor.js';
import { Gerente } from './Funcionario/Gerente.js';
import { Autenticacao } from './autenticacao.js';



const cliente1 = new Cliente('Alice', 15151555555, '123');
//const cliente2 = new Cliente('Ricardo', 1112223354);
const diretor = new Diretor('Maria', 10000, 151515151);
const gerente = new Gerente ('Caio', 5000, 1111111111);

//const contaCorrente1 = new Conta(cliente1, 1001);
//const contaCorrente2 = new Conta(cliente2, 156);

diretor.cadastrarSenha('123456789');
gerente.cadastrarSenha('0000');

//contaCorrente1.depositar(100);
//contaCorrente1.sacar(30);
//contaCorrente1.transferir(35, contaCorrente2);
//const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);

const diretorLogado = Autenticacao.login(diretor, '123456789');
const gerenteLogado = Autenticacao.login(gerente, '0000');
const cliente1Logado = Autenticacao.login(cliente1, '123');

//console.log(contaPoupanca1);
//console.log('numero de contas do banco: ', ContaCorrente.nContas);

console.log(diretorLogado, gerenteLogado, cliente1Logado);