'use strict';
module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('Producto', {
        Pro_Cod: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        Pro_Nombre: {
            allowNull: false,
            type: DataTypes.STRING(45)
        },
        Pro_Tipo: {
            allowNull: false,
            type: DataTypes.STRING(45)
        },
        Pro_Marca: {
            allowNull: false,
            type: DataTypes.STRING(45)
        },
        Pro_Descrip: {
            type: DataTypes.STRING(250)
        },
        Pro_Ancho: {
            allowNull: false,
            type: DataTypes.STRING(5)
        },
        Pro_Perfil: {
            allowNull: false,
            type: DataTypes.STRING(5)
        },
        Pro_Rin: {
            allowNull: false,
            type: DataTypes.STRING(5)
        },
        Pro_Peso: {
            allowNull: false,
            type: DataTypes.DOUBLE
        },
        Pro_Valor_Compra: {
            allowNull: false,
            type: DataTypes.DOUBLE
        },
        Pro_Valor_Venta: {
            type: DataTypes.DOUBLE
        },
        Pro_Valor_Mostrar: {
            allowNull: false,
            type: DataTypes.DOUBLE
        },
        Pro_Valor_Porcen: {
            type: DataTypes.DOUBLE
        },
        Usu_Cod: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
    }, {});
    Producto.associate = function(models) {
        Producto.belongsTo(models.Distribuidor, { foreignKey: 'Dis_Cod' });
        Producto.hasMany(models.Detalle_Pedido, { foreignKey: 'Pro_Cod' });
        Producto.hasMany(models.Foto, { foreignKey: 'Pro_Cod' });
    };
    return Producto;
};