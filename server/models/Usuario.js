'use strict';
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        Usu_Cod: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        Usu_Nombre: {
            allowNull: false,
            type: DataTypes.STRING(25)
        },
        Usu_Apellido: {
            allowNull: false,
            type: DataTypes.STRING(25)
        },
        Usu_Correo: {
            allowNull: false,
            type: DataTypes.STRING(50)
        },
        Usu_Rol: {
            allowNull: false,
            type: DataTypes.STRING(25)
        }

    }, {});
    Usuario.associate = function(models) {
        // associations can be defined here
    };
    return Usuario;
};