import { Estudante } from "./estudante";
import { iRepositoryBase } from "./irepositorybase";
import { Pessoa } from "./pessoa";
import { PessoaRepository } from "./pessoarepository";

let p = new Pessoa('Jéssica');
p.showPessoa();

let e = new Estudante('Maria');
e.showPessoa();

let pessoaRepo: iRepositoryBase = new PessoaRepository();
pessoaRepo.insert(p);
pessoaRepo.insert(e);

pessoaRepo.findAll();