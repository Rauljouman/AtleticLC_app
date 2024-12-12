const admin = require('firebase-admin');
const serviceAccount = require('./path/to/tu-archivo-de-credenciales.json'); // Asegúrate de que este archivo esté en la ubicación correcta

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://tu-proyecto.firebaseio.com', // Asegúrate de reemplazarlo por la URL de tu base de datos de Firebase
});

const db = admin.firestore(); // Obtener referencia a Firestore

module.exports = db; // Exportar la base de datos para que la puedas usar en otras partes de tu código
