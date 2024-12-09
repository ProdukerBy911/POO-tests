export class contaCorrente {
    _Agencia;
    _Saldo = 0;

    depositar(valorDeDeposito) {
        if (valorDeDeposito == 0 || valorDeDeposito <= 0) {
            console.log("Valor de deposito irregular, por favor verifique o valor a ser depositado!!");
            
        } else {
            this._Saldo += valorDeDeposito;
        }
    }

    sacar(ValorAsacar) {
        if (this._Saldo >= ValorAsacar) {
            this._Saldo -= ValorAsacar;
        } else {
            console.log("Saldo insuficiente");
        }
    }
}