const mongoose = require('mongoose')

//INSTANCIANDO UM NOVO SCHEMA(MODELO) caracteristicas q o objeto vai possuir
const userSchema = new mongoose.Schema({
    nome: {type: String},
    telefone: {type: String},
    cpf: {type: Date},
    endereco: {type: String},
    doacao: {type: String},
    
},
{
    versionKey: false  
})



const User = mongoose.model('user', userSchema);

module.exports = User;