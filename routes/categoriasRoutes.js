import express from 'express';
import * as controller from '../controllers/categoriasControllers.js';
import { validarCategoria } from '../middlewares/validarCategorias.js';

const router = express.router();

router.post('/categorias', validarCategoria, controller.criar);
router.get('/categorias', controller.listar);
router.get('/categorias/:id', controller.buscarPorId);
router.put('/categorias/:id', controller.atualizar);
router.delete('/categorias/:id', controller.deletar)

export default router;