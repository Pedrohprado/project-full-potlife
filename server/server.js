const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

app.post("/api", (req, res) => {
  const { value } = req.body;
  console.log(`Valor recebido: ${value}`);
  // Enviar valor para o ESP32 aqui
  res.send("Valor recebido com sucesso!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
