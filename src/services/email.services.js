const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true para puerto 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const enviarCorreo = async ({ para, asunto, mensaje }) => {
  const mailOptions = {
    from: `"Notificaciones" <${process.env.EMAIL_USER}>`,
    to: para,
    subject: asunto,
    text: mensaje
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { enviarCorreo };
