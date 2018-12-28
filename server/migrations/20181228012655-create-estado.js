'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Estados', {
            Est_Cod: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Est_Nombre: {
                allowNull: false,
                type: Sequelize.STRING(30)
            },
            Est_ZipCode: {
                allowNull: false,
                type: Sequelize.STRING(6)
            },
            Est_Impuesto: {
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
        return queryInterface.dropTable('Estados');
    }
};