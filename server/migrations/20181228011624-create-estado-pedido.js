'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Estado_Pedidos', {

            Ep_Cod: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Ped_Cod: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            Ep_Estado: {
                allowNull: false,
                type: Sequelize.STRING(20)
            },
            Ep_Descripcion: {
                allowNull: false,
                type: Sequelize.STRING(100)
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
        return queryInterface.dropTable('Estado_Pedidos');
    }
};