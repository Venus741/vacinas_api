const express = require('express');
const app = express();
const mysql = require('mysql2');
const port = 3000;
const cors = require('cors');

app.use(cors());
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

    const nomeBairro = req.params.nome;

    const query = "SELECT * FROM bairros WHERE nome = ?"

    conexao_ao_banco.query(query, [nomeBairro], (err, resultado) => {

        if (err) {
            console.error('Erro ao consultar o banco de dados: ', err);
            res.status(500).send('Problemas com servidor.');

        } else if(resultado.length === 0) {
            res.status(404).send('Bairro não encontrado.');
            
        } else {
            res.json(resultado[0]);

        }
    });
});

app.listen(port, () => {
    console.log('SERVIDOR NO AR')
});