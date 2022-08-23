"use strict";
exports.__esModule = true;
var estudante_1 = require("./estudante");
var pessoa_1 = require("./pessoa");
var pessoarepository_1 = require("./pessoarepository");
var p = new pessoa_1.Pessoa('Jéssica');
p.showPessoa();
var e = new estudante_1.Estudante('Maria');
e.showPessoa();
var pessoaRepo = new pessoarepository_1.PessoaRepository();
pessoaRepo.insert(p);
pessoaRepo.insert(e);
pessoaRepo.findAll();
