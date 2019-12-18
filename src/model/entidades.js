const mongoose = require('mongoose')

//INSTANCIANDO UM NOVO SCHEMA(MODELO) caracteristicas q o objeto vai possuir
const entidadesSchema = new mongoose.Schema({
    nome: {type: String},
    telefone: {type: String},
    cnpj: {type: String},
    endereco: {type: String},
    doacao: {type: String},
    
},
{
    versionKey: false  ///TIRA O V QUANDO CRIA UM NOVO REGISTRO
})


// ESTA DIZENDO QUE ESSE MODEL TEM ESSAS CARACTERISTICAS,EXPORTA AQUI
const Entidades = mongoose.model('entidades', entidadesSchema);

module.exports = Entidades;
