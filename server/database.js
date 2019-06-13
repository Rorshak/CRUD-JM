const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud';

mongoose.connect(URI)
//promesa para ver cuando se conecta, mostrará por consola.
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));

module.exports = mongoose;
