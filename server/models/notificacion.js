
const mongoose =require('mongoose');
const { Schema } = mongoose;

const NotificacionSchema = new Schema({
    tipo_notificacion: { type:   String, required: true},
    fecha: {type: String, required: true},
    recordatorio: { type: String, required: true}
    
});

  module.exports = mongoose.model('Notificacion', NotificacionSchema);