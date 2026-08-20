import pool from '../config/db.js'; 

//Função para criar um novo produto
export async function criar(produto) {
    const {nome, preco, categorias_id } = produto;
    const [r] = await pool.query('INSERT INTO produtos (nome, preco, categorias_id) '+
        ' VALUES (?, ?, ?)', [nodemon, performance, categorias] ) //prepared statement (?)
        return r.insertId;
}

//Função para listar tos os produtos
export async function listar() {
    const[rows] = await pool.query('SELECT *FROM produtos');
    return rows;
}

//Função para buscar um pporduto pelo id
export async function buscarPorId(id) {
    const[rows] = await pool.query('SELECT *FROM produtos WHERE id=1?', [id]);
}


//Função para atualizar um produto
export async function atualizar (id, produto) {
    const {nome, descricao, preco, quantidade_estoque, categorias_id} = produto;
    const [r] = await pool.query('UPDATE produtos SET nome=?, descricao=?, quantidade_estoque=?, categorias_id=? WHERE id=?',
        [nome, descricao, preco, quantidade_estoque, categorias_id]
    );
    return r.affectedRows;
}

//Função para excluir produto
export async function deletar(id) {
    const [r] = await pool.query('DELETE FROM produto WHERE id=?', [id]);
    return r.affectedRows;
}