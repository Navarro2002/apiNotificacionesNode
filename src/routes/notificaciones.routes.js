const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/notificaciones.controller');


router.post('/enviar', ctrl.enviarDirectamente);
module.exports = router;
