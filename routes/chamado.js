const express = require('express');
const router = express.Router();
const controller = require('../controllers/chamadoController');

router.get('/chamados', controller.list);
// router.get('/chamados/:id', controller.show);

router.get('/chamados/abrir', controller.create_form);
router.post('/chamados/abrir', controller.create);

router.get('/chamados/:id/atualizar/', controller.update_form);
router.post('/chamados/:id/atualizar/', controller.update);

router.get('/chamados/:id/delete/', controller.update_form);
router.post('/chamados/:id/delete/', controller.update);

module.exports = router;