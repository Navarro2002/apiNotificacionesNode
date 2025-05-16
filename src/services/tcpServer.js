// src/services/tcpServer.js
const net = require('net');
const { enviarCorreo } = require('./email.services');

function startTcpServer() {
  const server = net.createServer((socket) => {
    console.log('Cliente conectado:', socket.remoteAddress, socket.remotePort);

    // Aquí marcamos la función como async para poder usar await
    socket.on('data', async (data) => {
      try {
        const texto = data.toString().trim();
        console.log('Mensaje recibido:', texto);

        // renombramos mensaje a cuerpo al desestructurar
        const { receptor, titulo, mensaje: cuerpo } = JSON.parse(texto);

        await enviarCorreo({
          para: receptor,
          asunto: titulo,
          cuerpo,     // ✨ aquí sí coincide con lo que espera enviarCorreo()
        })

        // Respondemos al cliente TCP
        socket.write('OK\n');
      } catch (err) {
        console.error('Error al procesar datos:', err.message);
        // Si hubo error, informamos al cliente
        socket.write('ERROR\n');
      }
    });

    socket.on('end', () => {
      console.log('Cliente desconectado');
    });

    socket.on('error', (err) => {
      console.error('Socket error:', err.message);
    });
  });

  const TCP_PORT = process.env.TCP_PORT || 9000;
  server.listen(TCP_PORT, () => {
    console.log(`🔌 Servidor TCP escuchando en puerto ${TCP_PORT}`);
  });
}

module.exports = { startTcpServer };
