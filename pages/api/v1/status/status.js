function status(request, response) {
  response.status(200).json({ chave: "aprendendo, são " });
}

export default status;
