const express = require('express');
const router = express.Router();

router.get('/contato', function (req, res) {
    res.render('contato');
});

router.post('/contato', function (req, res) {
    console.log(req.body);
    
    let dados = {
        nome: req.body.nome
    }

    let envio = false;

    if(dados.nome != '') {
        envio = true;
    }

    res.render('contato', { envio, dados });
});

module.exports = router;