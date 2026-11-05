import express from 'express';
import * as controller from '../controllers/usuariosController.js';


const router = express.Router();

router.post('/usuarios/registro', controller.registrar); //http://localhost:3000/api/v1/stockapi/usuarios/registro --- passar no body a senha e o email do ususario

export default router;