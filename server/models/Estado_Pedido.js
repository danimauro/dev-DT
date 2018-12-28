'use strict';
module.exports = (sequelize, DataTypes) => {
    const Estado_Pedido = sequelize.define('Estado_Pedido', {

        Ep_Cod: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        Ep_Estado: {
            allowNull: false,
            type: DataTypes.STRING(20)
        },
        Ep_Descripcion: {
            allowNull: false,
            type: DataTypes.STRING(100)
        },
        Usu_Codigo: {
            allowNull: false,
            type: DataTypes.INTEGER
        }

    }, {});
    Estado_Pedido.associate = function(models) {
        Estado_Pedido.belongsTo(models.Pedido, { foreignKey: 'Ped_Cod' });
    };
    return Estado_Pedido;
}