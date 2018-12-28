'use strict';
module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
        Ped_Cod: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        Ped_Fecha: {
            allowNull: false,
            type: DataTypes.DATEONLY
        },
        Ped_DireccionEnvio: {
            allowNull: false,
            type: DataTypes.STRING(40)
        },
        Ped_NomPersonaRecibe: {
            allowNull: false,
            type: DataTypes.STRING(50)
        },
        Ped_Apto: {
            allowNull: false,
            type: DataTypes.STRING(20)
        },
        Ped_CiudadVive: {
            allowNull: false,
            type: DataTypes.STRING(30)
        },
        Ped_ZipCode: {
            allowNull: false,
            type: DataTypes.STRING(6)
        },
        Ped_Estado: {
            allowNull: false,
            type: DataTypes.STRING(15)
        },
        Est_Impuesto: {
            allowNull: false,
            type: DataTypes.DOUBLE
        },
        Ped_ValorTransporte: {
            type: DataTypes.DOUBLE
        },
        Ped_Hora: {
            allowNull: false,
            type: DataTypes.DATE
        },
        Ped_IP: {
            type: DataTypes.STRING(16)
        }

    }, {});
    Pedido.associate = function(models) {

        Pedido.hasMany(models.Detalle_Pedido, { foreignKey: 'Ped_Cod' });
        Pedido.hasMany(models.Estado_Pedido, { foreignKey: 'Ped_Cod' });

        Pedido.belongsTo(models.Estado, { foreignKey: 'Est_Cod' });
        Pedido.belongsTo(models.Cliente, { foreignKey: 'Cli_Cod' });
        Pedido.belongsTo(models.Transportadora, { foreignKey: 'Tra_Cod' });
    };
    return Pedido;
};