const Usuario = require('../models/usuario');

const status = require('http-status');

exports.Insert = (req, res, next) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const endereco = req.body.endereco;
    const email = req.body.email;
    const telefone = req.body.telefone;

    Usuario.create({
        id: id,
        nome: nome,
        endereco: endereco,
        email: email,
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