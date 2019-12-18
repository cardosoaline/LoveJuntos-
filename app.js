const express = require("express")
const mongoose = require("mongoose") 
const bodyParser = require("body-parser") 


const app = express()

// config DB
mongoose.connect("mongodb://localhost:27017/LoveJuntos");
let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function(){
  console.log("Conexão realizada com sucesso.")
  
})



//rotas
const entidades = require("./src/routes/entidadesRoutes")
const user = require("./src/routes/userRoutes")


// app.use(express.json());  //PQ TA USANDO O BODY PARSER

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(express.static("public"));

app.use(bodyParser.json());


app.use("/user", user) 
app.use("/ent", entidades) 

module.exports = app