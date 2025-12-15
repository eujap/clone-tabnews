import database from "infra/database.js";

async function status(request, response) {
  response.status(200).json({ chave: "espero que agora deu" });
}

export default status;
