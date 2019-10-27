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
  console.log(nome);
  res
    .status(200)
    .send(tarefas.filter(tarefa => tarefa.nomeColaborador == nome));
};

exports.getConcluidos = (req, res) => {
  console.log(req.url);
  res.status(200).send(
    tarefas.filter(tarefa => {
      return tarefa.concluido === "true";
    })
  );
};

exports.getDiferencaDias = (req, res) => {
  tarefas.forEach(element => {
    // element.outraChave = "a";
    console.log(
      Math.abs(
        new Date(
          element.dataConclusao.split("/")[2],
          element.dataConclusao.split("/")[1],
          element.dataConclusao.split("/")[0]
        )
      )
    );
    const diferencaTempo = Math.abs(
      new Date(
        element.dataConclusao.split("/")[2],
        element.dataConclusao.split("/")[1],
        element.dataConclusao.split("/")[0]
      ) -
        new Date(
          element.dataInclusao.split("/")[2],
          element.dataInclusao.split("/")[1],
          element.dataInclusao.split("/")[0]
        )
    );
    const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));
    element.tempoLevado = diferencaDias;
    // new Date(
    //   element.dataConclusao.split("/")[2],
    //   element.dataConclusao.split("/")[1],
    //   element.dataConclusao.split("/")[0]
    // ) -
    // new Date(
    //   element.dataInclusao.split("/")[2],
    //   element.dataInclusao.split("/")[1],
    //   element.dataInclusao.split("/")[0]
    // );
  });
  res.status(200).send(tarefas);
};

exports.getMaisRecentes = (req, res) => {
  // tarefas.forEach(element => {
  //   console.log(element.dataConclusao)
  //   console.log(
  //     new Date(
  //       element.dataConclusao.split("/")[2],
  //       element.dataConclusao.split("/")[1],
  //       element.dataConclusao.split("/")[0]
  //     )
  //   );
  // });

  // console.log(
  //   tarefas.sort(function(a, b) {
  //     return (
  //       new Date(
  //         b.dataConclusao.split("/")[2],
  //         b.dataConclusao.split("/")[1],
  //         b.dataConclusao.split("/")[0]
  //       ) -
  //       new Date(
  //         a.dataConclusao.split("/")[2],
  //         a.dataConclusao.split("/")[1],
  //         a.dataConclusao.split("/")[0]
  //       )
  //     );
  //   })
  // );

  const resultado = tarefas.sort(function(a, b) {
    return (
      new Date(
        b.dataConclusao.split("/")[2],
        b.dataConclusao.split("/")[1],
        b.dataConclusao.split("/")[0]
      ) -
      new Date(
        a.dataConclusao.split("/")[2],
        a.dataConclusao.split("/")[1],
        a.dataConclusao.split("/")[0]
      )
    );
  });

  // res.status(200).send(tarefas);
  res.status(200).send(resultado);
};
