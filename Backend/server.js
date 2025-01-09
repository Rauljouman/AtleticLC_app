const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5001; // Cambia el puerto si es necesario

// Middleware
app.use(cors({ origin: "*" })); // Permitir solicitudes desde cualquier origen
app.use(bodyParser.json()); // Permitir procesar solicitudes con cuerpo JSON

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail", // Proveedor de correo
  auth: {
    user: "rauljouman.ip@gmail.com", // Tu correo de Gmail
    pass: "njwk doot tcdh pluc", // Contraseña de aplicación de Gmail
  },
});

// Endpoint para enviar correos
app.post("/send-email", async (req, res) => {
  const {name, email, subject, message } = req.body; // Datos recibidos desde el frontend

  // Configurar el correo
  const mailOptions = {
    from: `${email}>`, //Correo del remitente
    to: "rauljouman.ip@gmail.com", // Tu correo donde recibirás los mensajes
    replyTo: email, // Permite que respondas directamente al remitente
    subject: `${subject}`, // Asunto del correo
    text: `${message}`, 
  };

  try {
    // Enviar el correo
    await transporter.sendMail(mailOptions);
    console.log("Correo enviado con éxito");
    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error enviando el correo:", error);
    res.status(500).json({ error: "Error enviando el correo" });
  }
});

// Endpoint de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente.");
});

// Iniciar el servidor
app.listen(3001, "0.0.0.0", () => {
  console.log(`Servidor escuchando en http://192.168.1.64:${PORT}`);
});
