import pool from '../config/db.js';
import bcrypt from 'bcrypt';

//função para criar um novo usuário no banco
export async function criar(usuario) {
    const { nome, email, senha} = usuario;
    const senha_hash = await bcrypt.hash(senha, 10);
    const [r] = await pool.query(
        'INSERT INTO usuarios (nome, email, senha_hash)' +
        'VALUES (? ,?, ?)',
        [nome, email, senha_hash]
    );
    return r.insertId;
}

export async function buscarPorEmail(email) {
const [rows] = await pool.query(
'SELECT * FROM usuarios WHERE email = ?', [email]
);
return rows[0];
}

// Na ULTIMA LINHA do seu arquivo de rotas de usuários:
export default router; 
