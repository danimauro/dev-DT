'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Detalle_Pedidos', {
            Ped_Cod: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            Pro_Cod: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            Dp_Cant: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            Dp_ValorCompra: {
                allowNull: false,
                type: Sequelize.DOUBLE
            },
            Dp_ValorVenta: {
                allowNull: false,
                type: Sequelize.DOUBLE
            },
            Dp_ValorMostrar: {
                allowNull: false,
                type: Sequelize.DOUBLE
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
        return queryInterface.dropTable('Detalle_Pedidos');
    }
};