'use strict';
module.exports = (sequelize, DataTypes) => {
    const Distribuidor = sequelize.define('Distribuidor', {
        Dis_Cod: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        Dis_Nombre: {
            allowNull: false,
            type: DataTypes.STRING(45)
        },
        Dis_ID: {
            allowNull: false,
            type: DataTypes.STRING(45)
        },
        Dis_Telefono: {
            allowNull: false,
            type: DataTypes.STRING(20)
        },
        Dis_Direccion: {
            allowNull: false,
            type: DataTypes.STRING(30),
        },
        Dis_Contacto: {
            allowNull: false,
            type: DataTypes.STRING(45)
        },
        Dis_TelContacto: {
            allowNull: false,
            type: DataTypes.STRING(20)
        },
        Dis_CorreoContacto: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                isEmail: true,
            }
        },
        Usu_Cod: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
    }, {});
    Distribuidor.associate = function(models) {
        Distribuidor.hasMany(models.Producto, { foreignKey: 'Dis_Cod' });
    };
    return Distribuidor;
};