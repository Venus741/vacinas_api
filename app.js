const express = require('express');
const app = express();
const mysql = require('mysql2');
const port = 3000;

app.use(express.json());

 // Criação de conexão com o banco de dados PhpMyAdmin
const conexao_ao_banco = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3307, // Porta utilizada pelo MySQL
    password: '',
    database: 'vacinas',
});

// Para verificar a conexão com o banco de dados
conexao_ao_banco.connect(err => {
    if (err) {
        console.log('A conexão com o banco de dados falhou', err);

    } else {
        console.log('Êxito na conexão com o banco');
    
    }
});

app.post('/bairros', (req, res) => {
    
});

app.get('/bairros/:nome', (req, res) => {

    const nome = req.params.nome;

    if (nome) {
        res.send(nome);
    } else {
        res.send('Não encontrado')
    }
})

app.listen(port, () => {
    console.log('SERVIDOR NO AR')
})