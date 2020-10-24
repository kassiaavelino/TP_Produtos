const Produtos = require('../models/produtos');

const status = require('http-status');

exports.Insert = (req, res, next) => {
    const p_id = req.body.p_id;
    const p_nome = req.body.p_nome;
    const p_precocusto = req.body.p_precocusto;
    const p_precovenda = req.body.p_precovenda;
    const qtd_estoque = req.body.qtd_estoque;

    Produtos.create({
        p_id: p_id,
        p_nome: p_nome,
        p_precocusto: p_precocusto,
        p_precovenda: p_precovenda,
        qtd_estoque: qtd_estoque        
    })

    .then (produtos=>{
        if (produtos){
            res.status(status.OK).send(produtos);
        }else {
            res.status(status.NOT_FOUND).send();
        }
    })

    .catch(error => next(error));
};