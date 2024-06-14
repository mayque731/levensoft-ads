const express = require('express');
const router = express.Router();

// router.get('/dashboard', function (request, response) {
//     response.render('index');
// });

router.get('/', function (request, response) {
    let user = { 
        nome: 'Joao', 
        email: 'joao@ifro.edu.br'
    };

    response.render('index', {
        user
    });


});

// router.get('/chamados/abrir', function (request, response) {
//     let data = new Date();
//     let mes = (data.getMonth()+1).toString().padStart(2, '0');
//     let dia = data.getDate().toString().padStart(2, '0');
//     data = data.getFullYear() + '-' + mes +'-' + dia;

//     response.render('chamado/abrir-form', { 
//         data
//     });
// });

// router.get('/chamados', function (request, response) {
//     response.render('chamado/listagem');
// });


module.exports = router;