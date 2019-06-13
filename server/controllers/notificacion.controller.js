const Notificacion = require ('../models/notificacion');
const notificacionCtrl = {};


notificacionCtrl.getNotificaciones  = async (req, res) => {     
 //Hace busqueda a la BD
    
const notificaciones = await Notificacion.find();
res.json(notificaciones);
};

notificacionCtrl.createNotificacion = async   (req, res) => {
//crear Notificacion
const notificacion = new Notificacion({
    tipo_notificacion: req.body.tipo_notificacion,
    fecha: req.body.fecha,
    recordatorio: req.body.recordatorio});
await notificacion.save();

res.json({
    'status': '2134567'
});
};

notificacionCtrl.getNotificacion =async (req, res) => {
const notificacion = await Notificacion.findById(req.params.id);

res.json(notificacion);
};

notificacionCtrl.editNotificacion = async  (req, res) => {
const { id } = req.params;
const notificacion = {
    tipo_notificacion: req.body.tipo_notificacion,
    fecha: req.body.fecha,
    recordatorio: req.body.recordatorio
}
 await   Notificacion.findByIdAndUpdate(id, { $set: notificacion}, {new: true});
    res.json({
status: 'Notificacion Actualizada'
    });

}
notificacionCtrl.deleteNotificacion = async  (req, res) => {
await Notificacion.findByIdAndRemove(req.params.id);
res.json({status: 'Notificacion Eliminada'});
}
module.exports = notificacionCtrl;