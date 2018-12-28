'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Fotos', {
            Fot_Cod: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Pro_Cod: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            Fot_Ruta: {
                allowNull: false,
                type: Sequelize.STRING(120)
            },
            Usu_Cod: {
                allowNull: false,
                type: Sequelize.INTEGER
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
        return queryInterface.dropTable('Fotos');
    }
};