'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Transportadoras', {
            Tra_Cod: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Tra_Nombre: {
                allowNull: false,
                type: Sequelize.STRING(25)
            },
            Tra_ID: {
                allowNull: false,
                type: Sequelize.STRING(25)
            },
            Tra_Telefono: {
                allowNull: false,
                type: Sequelize.STRING(25)
            },
            Tra_Direccion: {
                allowNull: false,
                type: Sequelize.STRING(25)
            },
            Tra_Contacto: {
                allowNull: false,
                type: Sequelize.STRING(25)
            },
            Tra_TelContacto: {
                type: Sequelize.STRING(25)
            },
            Tra_CorreoContacto: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            Tra_Estado: {
                allowNull: false,
                type: Sequelize.STRING(1)
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
        return queryInterface.dropTable('Transportadoras');
    }
};