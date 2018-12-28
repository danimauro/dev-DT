'use strict';
module.exports = (sequelize, DataTypes) => {
    const Estado = sequelize.define('Estado', {

        Est_Cod: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        Est_Nombre: {
            allowNull: false,
            type: DataTypes.STRING(30)
        },
        Est_ZipCode: {
            allowNull: false,
            type: DataTypes.STRING(6)
        },
        Est_Impuesto: {
            allowNull: false,
            type: DataTypes.DOUBLE
        }

    }, {});
    Estado.associate = function(models) {
        Estado.hasMany(models.Pedido, { foreignKey: 'Est_Cod' })
    };
    return Estado;
};