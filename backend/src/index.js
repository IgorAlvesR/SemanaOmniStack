const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//escuta o servidor na porta 3333
app.listen(3333);





















/*

Métodos HTTP

GET -> buscar uma informacao
POST -> criar uma informacao
PUT -> altera uma informacao
DELETE -> Deleta uma informacao no backend

Tipos de parametros

QUERY: parametros nomeados na rota apos o simbolo de ? (Filtros, paginacao)
ROUTE PARAMS: parametros utilizados para identificar recursos
REQUEST BODY: corpo da requisicao utilizado para criar ou alterar recurso

BANCOS DE DADOS
    - Sql: MySQL, PostgreSql
    - NoSQL: MongoDB

    o banco usado na aplicacao será o SQLite

DRIVER: SELECT * FROM users

QUERY Builder: table('users').select('*').where()
    - npm install knex
    - e para usar o driver npm install sqlite


KNEX - usa migrations 
            - mantém um histórico do banco de dados
            - bom para usar em time
            
    criar um nova migration
        - npx knex migrate:make create_ongs


ENTIDADES DA APP

    - ong
    - caso (incident)
    

    FUNCIONALIDADES 
        
        - login ong
        - cadastro ong
        - logout ong
        - cadastro de casos
        - deletar casos
        - listar casos
        - listar todos os casos
        - entrar em contato com a ong




*/


