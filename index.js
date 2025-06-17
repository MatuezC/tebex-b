const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/tebex", (req, res) => {
  const data = req.body;
  console.log("Webhook recibido:", data);

  // Ejemplo: mostrar el nombre del jugador y el paquete
  if (data.player && data.package) {
    console.log(`Jugador: ${data.player.name}`);
    console.log(`Paquete: ${data.package.name}`);
  }

  res.sendStatus(200); // Tebex espera esto
});

app.get("/", (req, res) => {
  res.send("Webhook de Tebex activo");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});