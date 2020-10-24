const Sequelize = require('sequelize');
 
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
//Clientes (id, nome, end, email, telefone)
const Usuario = sequelize.define("usuario", {
    id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    endereco:{
        allowNull: false,
        type: Sequelize.STRING(200)
    },
    email:{
        allowNull: false,
        type: Sequelize.STRING(100)
    },
    telefone:{
        allowNull: false,
        type: Sequelize.INTEGER
    }
});
 
module.exports = Usuario;