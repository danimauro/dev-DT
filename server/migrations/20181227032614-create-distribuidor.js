'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Distribuidors', {
            Dis_Cod: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Dis_Nombre: {
                allowNull: false,
                type: Sequelize.STRING(45)
            },
            Dis_ID: {
                allowNull: false,
                type: Sequelize.STRING(45)
            },
            Dis_Telefono: {
                allowNull: false,
                type: Sequelize.STRING(20)
            },
            Dis_Direccion: {
                allowNull: false,
                type: Sequelize.STRING(30)
            },
            Dis_Contacto: {
                allowNull: false,
                type: Sequelize.STRING(45)
            },
            Dis_TelContacto: {
                allowNull: false,
                type: Sequelize.STRING(20)
            },
            Dis_CorreoContacto: {
                allowNull: false,
                type: Sequelize.STRING(50)
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
        return queryInterface.dropTable('Distribuidors');
    }
};