const Usuario = require('../models/usuario');

const status = require('http-status');

exports.Insert = (req, res, next) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const endereco = req.body.endereco;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const cep = req.body.cep;    
    const telefone = req.body.telefone;

    Usuario.create({
        id: id,
        nome: nome,
        email: email,
        senha: senha,
        endereco: endereco,
        cidade: cidade,
        estado: estado,
        cep: cep, 
        telefone: telefone
    })

    .then (usuario=>{
        if (usuario){
            res.status(status.OK).send(usuario);
        }else {
            res.status(status.NOT_FOUND).send();
        }
    })

    .catch(error => next(error));
};