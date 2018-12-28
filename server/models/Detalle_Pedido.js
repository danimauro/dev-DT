'use strict';
module.exports = (sequelize, DataTypes) => {
    const Detalle_Pedido = sequelize.define('Detalle_Pedido', {
        Dp_Cant: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        Dp_ValorCompra: {
            allowNull: false,
            type: DataTypes.DOUBLE
        },
        Dp_ValorVenta: {
            allowNull: false,
            type: DataTypes.DOUBLE
        },
        Dp_ValorMostrar: {
            allowNull: false,
            type: DataTypes.DOUBLE
        }
    }, {});
    Detalle_Pedido.associate = function(models) {
        Detalle_Pedido.belongsTo(models.Pedido, { foreignKey: 'Ped_Cod' });
        Detalle_Pedido.belongsTo(models.Producto, { foreignKey: 'Pro_Cod' });
    };
    return Detalle_Pedido;
};