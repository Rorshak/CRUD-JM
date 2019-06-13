const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');
//Settings Configuraciones
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes

app.use('/api/employees',require('./routes/employee.routes'));
app.use('/api/notificacion',require('./routes/notificacion.routes'));
app.use('/api/venta-control',require('./routes/ventaControl.routes'));
//Starting the server

app.listen(app.get('port'),() => {
    console.log('Servidor en puerto 3000');
});

