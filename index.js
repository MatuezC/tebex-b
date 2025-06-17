const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/tebex", (req, res) => {
  console.log("Webhook recibido: ", req.body);
  if(req.body.type == "validation.webhook") {
    console.log("Validacion de webhook detectada");
    return res.status(200).send("OK");
  }
  res.status(200).send("OK");
});

// app.post("/tebex", (req, res) => {
//   const data = req.body;
//   console.log("Webhook recibido:", data);

//   // Ejemplo: mostrar el nombre del jugador y el paquete
//   if (data.player && data.package) {
//     console.log(`Jugador: ${data.player.name}`);
//     console.log(`Paquete: ${data.package.name}`);
//   }

//   res.sendStatus(200); // Tebex espera esto
// });

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
