import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./contaCorrente.js"


const cliente1 = new Cliente();
cliente1.Nome = "Monica Barreto Lima";
cliente1._CPF = 12345667820;

const cliente2 = new Cliente();
cliente2.Nome = "Carlos Nogueira Lopes";
cliente2._CPF = 56742378964;

const cliente3 = new Cliente();
cliente3.Nome = "Manuel Gomes Pereira";
cliente3._CPF = 98765432193;

//console.log(cliente1,cliente2,cliente3);

const contaCorreteMonica = new contaCorrente();
contaCorreteMonica._Agencia = 20013;
contaCorreteMonica.depositar(650);
//console.log(contaCorreteMonica);

const contaCorrenteCarlos = new contaCorrente();
contaCorrenteCarlos._Agencia = 10010;
contaCorrenteCarlos.depositar(130);
//console.log(contaCorrenteCarlos);

const contaCorrenteManuel = new contaCorrente();
contaCorrenteManuel._Agencia = 20008;
contaCorrenteManuel.depositar(200840);
contaCorrenteManuel.sacar(800);
console.log(contaCorrenteManuel);