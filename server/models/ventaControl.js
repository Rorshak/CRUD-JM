
const mongoose =require('mongoose');
const { Schema } = mongoose;

//moment().format();
const VentaControlSchema = new Schema({
    fechaVenta: { type: Date, required: true},
    mesa: {type: Number, required: true},
    alimento_bebida: { type: String, required: true},
    cantidad: {type: Number, required: true},
    montoPagar: {type: Number, required: true},
    tipoPago: {type: String, required: true}
    
});
/*
// Establecemos un campo virtual
VentaControlSchema.virtual('fecha_venta')
  .set(function(fecha) {
    // El formato esperado es 'yyyy-mm-dd' que es el devuelto por el campo input
    // el valor recibido se almacenará en el campo fecha_nacimiento_iso de nuestro documento
    this.fechaVenta = new Date(fecha);
  })
  .get(function(){
    // el valor devuelto será un string en formato 'yyyy-mm-dd'
    return this.fechaVenta.toISOString().substring(0,10);
  });*/
 

  module.exports = mongoose.model('VentaControl', VentaControlSchema);