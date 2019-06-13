const VentaControl = require ('../models/ventaControl');
const ventaControlCtrl = {};


ventaControlCtrl.getVentaControls  = async (req, res) => {     
 //Hace busqueda a la BD
    
const ventaControls = await VentaControl.find();
res.json(ventaControls);
};

ventaControlCtrl.createVentaControl = async   (req, res) => {
//crear Notificacion
const ventaControl = new VentaControl({
    fechaVenta: req.body.fechaVenta,
    mesa: req.body.mesa,
    alimento_bebida: req.body.alimento_bebida,
    cantidad: req.body.cantidad,
    montoPagar: req.body.montoPagar,
    tipoPago: req.body.tipoPago});
await ventaControl.save();

res.json({
    'status': 'Realizado'
});
};

ventaControlCtrl.getVentaControl =async (req, res) => {
const ventaControl = await VentaControl.findById(req.params.id);

res.json(ventaControl);
};

ventaControlCtrl.editVentaControl = async  (req, res) => {
const { id } = req.params;
const ventaControl = {
    fechaVenta: req.body.fechaVenta,
    mesa: req.body.mesa,
    alimento_bebida: req.body.alimento_bebida,
    cantidad: req.body.cantidad,
    montoPagar: req.body.montoPagar,
    tipoPago: req.body.tipoPago
}
 await   VentaControl.findByIdAndUpdate(id, { $set: ventaControl}, {new: true});
    res.json({
status: 'Venta Actualizada'
    });

}
ventaControlCtrl.deleteVentaControl = async  (req, res) => {
await VentaControl.findByIdAndRemove(req.params.id);
res.json({status: 'Venta Eliminada'});
}
module.exports = ventaControlCtrl;