const model = require('../model/entidades') //coloca esse para puxar do bdd pq os arq do model sao reflexo do q tem no bdd

const fs = require('fs');



exports.postEntidades = (req, res) => {
  let entidades = new model(req.body); //pega as informaçoes do body da requisicao e modela um novo pacote

  entidades.save(function (err) {
    if (err) res.status(500).send(err);
    else {
      res.status(201).send({
        status: true,
        mensagem: "Entidades cadastrado com sucesso!"
      });
    };
  });
}




exports.getEntidades = (req, res) => {
  model.find(function (err, entidades) { 
    if (err) res.status(500).send(err);
    res.status(200).send(entidades)
  })
}


exports.getById = (req, res) => {
  const entidadesId = req.params.id

  model.findById(entidadesId, function (err, entidades) {
    if (err) return res.status(500).send(err);
    if (!entidades) {
      return res.status(200).send({ message: `Infelizmente não localizamos a entidade: ${entidadesId}` });
    }
    res.status(200).send(entidades);
  })
}

    
exports.updateEntidades = (req, res) => {
    model.update(
      { _id: req.params.id },
      { $set: req.body },
      { upsert: true},
      function (err) {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Atualizado com sucesso!!!"});
      })
}




exports.deleteEntidades = (req, res) => {
  const userId = req.params.id;

  model.findById(userId, function (err, entidades){
    if (err) res.status(500).send(err);

    if (!entidades){
      return res.status(200).send({ message: "Infelizmente a entidade não foi encontrada!!"});
    }
    entidades.remove(function(err){
      if(!err) {
        res.status(200).send({ message: "Entidade removida com sucesso!!!"});
      }
    }) 
    
  })
}
