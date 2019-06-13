const express = require('express');
const router = express.Router();

const ventaControl = require('../controllers/ventaControl.controller');

router.get('/', ventaControl.getVentaControls);
router.post('/', ventaControl.createVentaControl);
router.get('/:id', ventaControl.getVentaControl);
router.put('/:id',ventaControl.editVentaControl);
router.delete('/:id', ventaControl.deleteVentaControl);
module.exports = router;