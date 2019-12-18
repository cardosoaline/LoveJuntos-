const express = require("express")
const router = express.Router()
const controller = require("../controller/entidadesController")



/**
 * @api {post} /entidades
 * @apiGroup Entidades
 * * 
 * @apiSuccess {Object[]} entidades Cadastra uma nova organização
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   {
 *     "Entidade incluida com sucesso"
 *   }
 *
 */

router.post("/cad", controller.postEntidades)

/**
 * @api {get} /entidades
 * @apiGroup Entidades
 * * 
 * @apiSuccess {Object[]} entidades Lista de entidades cadastradas
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *     
 *       "nome": "viverBem",
 *       "telefone": "5896-8978"
 *       "cnpj": "258963147-11",
 *       "endereco": Rua Sebastiana,
 *        "doacao": Roupa,
 *   
 *
 */
router.get("/", controller.getEntidades)

router.get("/:id", controller.getById)

/**
 * @api {put} /:id
 * @apiGroup Entidades
 * * 
 * @apiSuccess {Object[]} entidades Atualiza as informacoes de uma entidade selecionada pelo id.
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   {
 *     "Atualizada com sucesso!!!"
 *   }
 *
 */
router.put("/:id", controller.updateEntidades)

/**
 * @api {delete} /:id
 * @apiGroup Entidades
 * * 
 * @apiSuccess {Object[]} entidades Deleta uma entidade selecionada pelo id
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   {
 *     "Entidade removida com sucesso!!!"
 *   }
 *
 */
router.delete("/:id", controller.deleteEntidades)



module.exports = router