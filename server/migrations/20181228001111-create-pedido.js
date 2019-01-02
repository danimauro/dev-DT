'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Pedidos', {
            Ped_Cod: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Cli_Cod: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            Ped_Fecha: {
                allowNull: false,
                type: Sequelize.DATEONLY
            },
            Ped_DireccionEnvio: {
                allowNull: false,
                type: Sequelize.STRING(40)
            },
            Ped_NomPersonaRecibe: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            Ped_Apto: {
                allowNull: false,
                type: Sequelize.STRING(20)
            },
            Est_Cod: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            Ped_CiudadVive: {
                allowNull: false,
                type: Sequelize.STRING(30)
            },
            Ped_ZipCode: {
                allowNull: false,
                type: Sequelize.STRING(6)
            },
            Ped_Estado: {
                allowNull: false,
                type: Sequelize.STRING(15)
            },
            Tra_Cod: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            Est_Impuesto: {
                allowNull: false,
                type: Sequelize.DOUBLE
            },
            Ped_ValorTransporte: {
                type: Sequelize.DOUBLE
            },
            Ped_Hora: {
                allowNull: false,
                type: Sequelize.DATE
            },
            Ped_IP: {
                type: Sequelize.STRING(16)
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
        return queryInterface.dropTable('Pedidos');
    }
};