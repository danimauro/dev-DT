'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Clientes', {
            Cli_Cod: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Cli_Usuario: {
                allowNull: false,
                type: Sequelize.STRING(15)
            },
            Cli_Clave: {
                allowNull: false,
                type: Sequelize.STRING(200)
            },
            Cli_Nombre: {
                allowNull: false,
                type: Sequelize.STRING(25)
            },
            Cli_Apellido: {
                allowNull: false,
                type: Sequelize.STRING(25)
            },
            Cli_Telefono: {
                type: Sequelize.STRING(20)
            },
            Cli_Correo: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            Cli_Estado: {
                allowNull: false,
                type: Sequelize.STRING(1)
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Clientes');
    }
};