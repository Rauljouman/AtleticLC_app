const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configura el transporte de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'rauljouman.ip@gmail.com',  
    pass: 'Habbo.es1', 
  },
});

app.post('/send-email', (req, res) => {
  const { name, team, subject } = req.body;

  // Configuración del mensaje
  const mailOptions = {
    from: 'useratleticlc@gmail.com',
    to: 'rauljouman.ip@gmail.com',
    subject: 'Nuevo formulario recibido',
    text: `Nombre: ${name}\nEquipo: ${team}\nAsunto: ${subject}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error al enviar el correo', error });
    }
    res.status(200).send({ message: 'Correo enviado exitosamente' });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
