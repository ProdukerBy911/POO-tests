import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./contaCorrente.js"


const cliente1 = new Cliente("Monica Barreto Lima", 12345667820);

const cliente2 = new Cliente("Carlos Nogueira Lopes", 56742378964);

const cliente3 = new Cliente("Manuel Gomes Pereira", 98765432193);

const contaCorrenteManuel = new contaCorrente(cliente3, 10010);

const conta1 = new contaCorrente(cliente1, 10073);
conta1.depositar(400);

const conta2 = new contaCorrente(cliente2, 20008);
conta2.depositar(800);

conta2.transferir(200, conta1);

console.log(contaCorrente.numeroDeContas);
