'use strict';
module.exports = (sequelize, DataTypes) => {
    const Foto = sequelize.define('Foto', {
        Fot_Cod: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        Fot_Ruta: {
            allowNull: false,
            type: DataTypes.STRING(120)
        },
        Usu_Cod: {
            allowNull: false,
            type: DataTypes.INTEGER
        }

    }, {});
    Foto.associate = function(models) {
        Foto.belongsTo(models.Producto, { foreignKey: 'Pro_Cod' });
    };
    return Foto;
};