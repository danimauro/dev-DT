'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Usuarios', {
            Usu_Cod: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Usu_Nombre: {
                allowNull: false,
                type: Sequelize.STRING(25)
            },
            Usu_Apellido: {
                allowNull: false,
                type: Sequelize.STRING(25)
            },
            Usu_Correo: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            Usu_Rol: {
                allowNull: false,
                type: Sequelize.STRING(25)
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
        return queryInterface.dropTable('Usuarios');
    }
};