'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        Cli_Cod: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        Cli_Usuario: {
            allowNull: false,
            type: DataTypes.STRING(15)
        },
        Cli_Clave: {
            allowNull: false,
            type: DataTypes.STRING(200)
        },
        Cli_Nombre: {
            allowNull: false,
            type: DataTypes.STRING(25)
        },
        Cli_Apellido: {
            allowNull: false,
            type: DataTypes.STRING(25)
        },
        Cli_Telefono: {
            type: DataTypes.STRING(20)
        },
        Cli_Correo: {
            allowNull: false,
            type: DataTypes.STRING(50),
            validate: {
                isEmail: true,
            }
        },
        Cli_Estado: {
            allowNull: false,
            type: DataTypes.STRING(1)
        },

    }, {});
    Cliente.associate = function(models) {
        Cliente.hasMany(models.Pedido, { foreignKey: 'Cli_Cod' });
    };
    return Cliente;
};