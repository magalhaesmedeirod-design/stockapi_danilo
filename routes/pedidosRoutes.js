import express from 'express';
import * as controller from '../controllers/pedidosControllers.js';
import { validarPedido, validarAtualizacaoPedido } from '../middlewares/validarPedido.js';

const router = express.Router();

router.post('/pedidos', validarPedido, controller.criar);

router.get('/pedidos', controller.listar);
router.get('/pedidos/:id', controller.buscarPorid);

router.put('/pedidos/:id', validarAtualizacaoPedido, controller.atualizar);

router.delete('/pedidos/:id', controller.deletar);

export default router;



// 1. R: O routes são as rotas de cada função.
//O middlewares valida se aquela função é verdadeira.
//O service cria cada função.
//O controller analisa as funções do service e reton uma mensagem.



//2. R: Para que retorne uma mensagem de erro, significando que a mensagem de erro foi retornada ao cliente.


//3. R: Para salvar as informações antes da alteração.