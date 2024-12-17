export class Cliente {
    Nome;
    _CPF;

    get cpf(){
       return this._CPF;
    }

    constructor(Nome, cpf){
        this.Nome = Nome;
        this._CPF = cpf;
    }

}