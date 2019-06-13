const express = require('express');
const router = express.Router();

const notificacion = require('../controllers/notificacion.controller');

router.get('/', notificacion.getNotificaciones);
router.post('/', notificacion.createNotificacion);
router.get('/:id', notificacion.getNotificacion);
router.put('/:id',notificacion.editNotificacion);
router.delete('/:id', notificacion.deleteNotificacion);
module.exports = router;