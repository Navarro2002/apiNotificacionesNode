const servicio = require('../services/notificaciones.service');

exports.enviarDirectamente = async (req, res) => {
  try {
      await servicio.enviarDirecto(req.body);
                  
    res.status(200).json({
      mensaje: 'Notificación enviada correctamente',
      datos: req.body
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
