'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Productos', {
            Pro_Cod: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Dis_Cod: {
                //relation distribuidor
                type: Sequelize.INTEGER,
                allowNull: false
            },
            Pro_Nombre: {
                allowNull: false,
                type: Sequelize.STRING(45)
            },
            Pro_Tipo: {
                allowNull: false,
                type: Sequelize.STRING(45)
            },
            Pro_Marca: {
                allowNull: false,
                type: Sequelize.STRING(45)
            },
            Pro_Descrip: {
                type: Sequelize.STRING(250)
            },
            Pro_Ancho: {
                allowNull: false,
                type: Sequelize.STRING(5)
            },
            Pro_Perfil: {
                allowNull: false,
                type: Sequelize.STRING(5)
            },
            Pro_Rin: {
                allowNull: false,
                type: Sequelize.STRING(5)
            },
            Pro_Peso: {
                allowNull: false,
                type: Sequelize.DOUBLE
            },
            Pro_Valor_Compra: {
                allowNull: false,
                type: Sequelize.DOUBLE
            },
            Pro_Valor_Venta: {
                type: Sequelize.DOUBLE
            },
            Pro_Valor_Mostrar: {
                allowNull: false,
                type: Sequelize.DOUBLE
            },
            Pro_Valor_Porcen: {
                type: Sequelize.DOUBLE
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
        return queryInterface.dropTable('Productos');
    }
};