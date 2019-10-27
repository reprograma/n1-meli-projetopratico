const tarefas = require("../model/tarefas.json");

exports.get = (req, res) => {
  console.log(req.url);
  res.status(200).send(tarefas);
};

exports.getById = (req, res) => {
  const id = req.params.id;
  if (id > 17 || id <= 0) {
    res.redirect(301, "https://en.wikipedia.org/wiki/Man-in-the-middle_attack");
  }
  res.status(200).send(tarefas.find(tarefa => tarefa.id == id));
};

exports.getByNomeColaborador = (req, res) => {
  const nome = req.params.nome;
  console.log(nome)
  res.status(200).send(tarefas.filter(tarefa => tarefa.nomeColaborador == nome));
};

exports.getConcluidos = (req, res) => {
  console.log(req.url);
  res.status(200).send(
    tarefas.filter(tarefa => {
      return tarefa.concluido === "true";
    })
  );
};
