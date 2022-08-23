import { iRepositoryBase } from "./irepositorybase";
import { Pessoa } from "./pessoa";

export class PessoaRepository implements iRepositoryBase{
    
    insert(pessoa: Pessoa): boolean {
        console.log('Inserindo pessoa......', pessoa.toString());
        return true;
    }
    update(pessoa: Pessoa): boolean {
        console.log('Atualizando pessoa.....', pessoa.toString());
        return true;
    }
    delete(id: number): boolean {
        console.log('Deletando pessoa....');
        return true;
    }
    findById(id: number) {
        return null;
    }
    findAll() {
        return [new Pessoa('José')];
    }
    
}