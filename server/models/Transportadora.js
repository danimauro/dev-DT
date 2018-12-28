'use strict';
module.exports = (sequelize, DataTypes) => {
    const Transportadora = sequelize.define('Transportadora', {
        Tra_Cod: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        Tra_Nombre: {
            allowNull: false,
            type: DataTypes.STRING(25)
        },
        Tra_ID: {
            allowNull: false,
            type: DataTypes.STRING(25)
        },
        Tra_Telefono: {
            allowNull: false,
            type: DataTypes.STRING(25)
        },
        Tra_Direccion: {
            allowNull: false,
            type: DataTypes.STRING(25)
        },
        Tra_Contacto: {
            allowNull: false,
            type: DataTypes.STRING(25)
        },
        Tra_TelContacto: {
            type: DataTypes.STRING(25)
        },
        Tra_CorreoContacto: {
            allowNull: false,
            type: DataTypes.STRING(50)
        },
        Tra_Estado: {
            allowNull: false,
            type: DataTypes.STRING(1)
        },
        Usu_Cod: {
            allowNull: false,
            type: DataTypes.INTEGER
        }

    }, {});
    Transportadora.associate = function(models) {
        Transportadora.hasMany(models.Pedido, { foreignKey: 'Tra_Cod' });
    };
    return Transportadora;
};