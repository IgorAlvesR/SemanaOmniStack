

//chamado para criar a tabela
exports.up = function(knex) {
    //cria nova tabela
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();

    })

    //apos colocar os dados da migration usa o seguinte comando para executar a migrate
    // - npx knex migrate:latest
};
//chamado caso de algo de errado com a tabela
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
