const express = require("express")
const router = express.Router()
const controller = require("../controller/userController")



/**
 * @api {post} /user
 * @apiGroup User
 * * 
 * @apiSuccess {Object[]} user Cadastra uma nova doação
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   {
 *     "User incluido com sucesso"
 *   }
 *
 */
router.post("/cadastro", controller.postUser)

/**
 * @api {get} /user
 * @apiGroup User
 * * 
 * @apiSuccess {Object[]} user Lista de usuarios cadastrados
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *     
 *       "nome": "Luana Carvalho",
 *       "telefone": "5896-8978"
 *       "cpf": "258963147-11",
 *       "endereco": Rua Sebastiana,
 *        "doacao": Roupa,
 *   
 *
 */

router.get("/", controller.getUser)

/**
 * @api {get} /Lista usuarios
 * @apiGroup User
 * * 
 * @apiSuccess {Object[]} Usuarios Lista de Usuarios cadastrados
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 
 *
 */

router.get("/:id", controller.getById)

/**
 * @api {put} /:id
 * @apiGroup User
 * * 
 * @apiSuccess {Object[]} user Atualiza as informacoes de uma user especifica selecionada pelo id
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   {
 *     "Usuario atualizado com sucesso!!!"
 *   }
 *
 */
router.put("/:id", controller.updateUser)

/**
 * @api {delete} /:id
 * @apiGroup User
 * * 
 * @apiSuccess {Object[]} user Deleta um usuario especifico selecionado pelo id.
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   {
 *     "Usuario removido com sucesso!!!"
 *   }
 *
 */
router.delete("/:id", controller.deleteUser)



module.exports = router