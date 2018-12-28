'use strict';
module.exports = (sequelize, DataTypes) => {
    const Parametros = sequelize.define('Parametros', {
        Par_Cod: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        Par_Tipo: {
            allowNull: false,
            type: DataTypes.STRING(1)
        },
        Par_Nombre: {
            allowNull: false,
            type: DataTypes.STRING(8)
        }
    }, {});
    Parametros.associate = function(models) {
        // associations can be defined here
    };
    return Parametros;
};