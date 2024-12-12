const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware para parsear el JSON del cuerpo de la solicitud
app.use(bodyParser.json());

// Configura tu transporte de correo
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Usamos Gmail en este ejemplo
  auth: {
    user: 'rauljouman.ip@gmail.com',  // Tu correo
    pass: 'Habbo.es1',  // Tu contraseña de aplicación
  },
});

// Ruta para recibir el correo desde el frontend
app.post('/send-email', (req, res) => {
  console.log(req.body);  // Ver los datos recibidos desde el frontend

  const { email, subject, description } = req.body;  // Desestructura los datos recibidos

  const mailOptions = {
    from: email,  // El correo del usuario
    to: 'rauljouman.ip@gmail.com',  // El correo donde recibirás el mensaje
    subject: subject,  // El asunto que el usuario ingresó
    text: `Correo del usuario: ${email}\nAsunto: ${subject}\nMensaje: ${description}`,  // El mensaje completo
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);  // Muestra el error si ocurre
      return res.status(500).json({ message: 'Error al enviar el correo', error });
    }
    console.log('Correo enviado: ', info.response);  // Muestra información del correo enviado
    return res.status(200).json({ message: 'Correo enviado exitosamente' });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
