const { Schema, model } = require('mongoose');

const notificacionSchema = new Schema({
  titulo: { type: String, required: true },
  mensaje: { type: String, required: true },
  receptor: { type: String, required: true },
  fechaEnvio: { type: Date }
});

module.exports = model('Notificacion', notificacionSchema);
