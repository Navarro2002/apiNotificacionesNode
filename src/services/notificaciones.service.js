const { enviarCorreo } = require('./email.services');

const enviarDirecto = async ({ titulo, mensaje, receptor }) => {
  if (!titulo || !mensaje || !receptor) {
    throw new Error('Faltan datos para enviar la notificación');
  }

  await enviarCorreo({ para: receptor, asunto: titulo, mensaje });
};

module.exports = {
  enviarDirecto,
};
