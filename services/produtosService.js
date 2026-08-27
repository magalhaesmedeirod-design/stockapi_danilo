import pool from '../config/db.js'; 

const CAMPOS_PRODUTOS = ['nome', 'descricao', 'preco', 'quantidade_estoque', 'categorias_id'];

//Função para criar um novo produto
export async function criar(produto) {
    const { nome, descricao, preco, quantidade_estoque, categorias_id } = produto;
    const [r] = await pool.query('INSERT INTO produtos (nome, preco, categorias_id) '+
        ' VALUES (?, ?, ?, ?, ?)', [nome, descricao ?? null, preco, quantidade_estoque ?? 0, categorias_id]); //prepared statement (?)
        return r.insertId;
}

//Função para listar tos os produtos
export async function listar() {
    const[rows] = await pool.query('SELECT *FROM produtos');
    return rows;
}

//Função para buscar um pporduto pelo id
export async function buscarPorId(id) {
    const[rows] = await pool.query('SELECT *FROM produtos WHERE id=?', [id]);
    return rows[0];
}


//Função para atualizar um produto
export async function atualizar (id, camposAtualizados) {
    const camposParaAtualizar = Object.keys(camposAtualizados).filter((campo) => CAMPOS_PRODUTOS.includes(campo));
    const setClause = camposParaAtualizar.map((campo) => `${campo} = ?`).join(', ');
    const valores = camposParaAtualizar.map((campo) => camposAtualizados[campo]);


    const [r] = await pool.query(
        `UPDATE produtos SET ${setClause} WHERE id=?`,
        [...valores, id]
    );

    return r.affectedRows;
}

//Função para excluir produto
export async function deletar(id) {
    const [r] = await pool.query('DELETE FROM produto WHERE id=?', [id]);
    return r.affectedRows;
}