import { Cliente } from "./Cliente.js";
export class contaCorrente {
    static numeroDeContas = 0;
    _Agencia;
    _Cliente;
    _Saldo = 0;

    set Cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._Cliente = novoValor;   
        }
    }

    get Cliente(){
        return this._Cliente;
    }

    // Evita a atribuição direta de qualquer valor dentro da variavel saldo, poe

    get saldo(){
        return this._Saldo;
    }

    constructor(Cliente, _Agencia){
        this.Cliente = Cliente;
        this._Agencia = _Agencia;
        contaCorrente.numeroDeContas += 1; 
    }



    depositar(valor) {
        if (valor == 0 || valor <= 0) {
            console.log("Valor de deposito irregular, por favor verifique o valor a ser depositado!!");
            
        } else {
            this._Saldo += valor;
        }
    }

    sacar(valor) {
        if (this._Saldo >= valor) {
            this._Saldo -= valor;
            return valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}