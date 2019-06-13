
export class VentaControl {
    constructor(_id ='' , fechaVenta = null, mesa = 0, alimento_bebida = '',
    cantidad = 0, montoPagar = 0 , tipoPago = ''){
        this._id = _id;
        this.fechaVenta =fechaVenta;
        this.mesa = mesa;
        this.alimento_bebida = alimento_bebida;
        this.cantidad = cantidad;
        this.montoPagar = montoPagar;
        this.tipoPago = tipoPago;
    
    }
    _id: string;
    fechaVenta: Date;
    mesa: Number;
    alimento_bebida: String;
    cantidad: Number;
    montoPagar: Number;
    tipoPago: String;
   
}

