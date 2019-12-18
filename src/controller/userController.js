const model = require('../model/user')

const fs = require('fs');



exports.postUser = (req, res) => {
  let user = new model(req.body); //pega as informaçoes do body da requisicao e modela um novo pacote

  user.save(function (err) {
    if (err) res.status(500).send(err);
    else {
      res.status(201).send({
        status: true,
        mensagem: "Usuario cadastrado com sucesso!"
      });
    };
  });
}




exports.getUser = (req, res) => {
  model.find(function (err, user) { 
    if (err) res.status(500).send(err);
    res.status(200).send(user)
  })
}


exports.getById = (req, res) => {
  const userId = req.params.id

  model.findById(userId, function (err, user) {
    if (err) return res.status(500).send(err);
    if (!user) {
      return res.status(200).send({ message: `Infelizmente não localizamos o usuario: ${userId}` });
    }
    res.status(200).send(user);
  })
}

    
exports.updateUser = (req, res) => {
    model.update(
      { _id: req.params.id },
      { $set: req.body },
      { upsert: true},
      function (err) {
        if (err) return res.status(500).send(err);
        res.status(200).send({ message: "Atualizado com sucesso!!!"});
      })
}




exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  model.findById(userId, function (err, user){
    if (err) res.status(500).send(err);

    if (!user){
      return res.status(200).send({ message: "Infelizmente usuario não foi encontrado!!"});
    }
     user.remove(function(err){
      if(!err) {
        res.status(200).send({ message: "Usuario removido com sucesso!!!"});
      }
    }) 
    
  })
}
