const express = require('express');
const UsuarioControler = require ('../controllers/usuarioController');
const ProdutosControler = require ('../controllers/produtosController');
const router = express.Router();

router.post('/usuarios', UsuarioControler.Insert);
router.post('/produtos', ProdutosControler.Insert);

module.exports = router;