'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */

        return queryInterface.bulkInsert('parametros', [{
                Par_Tipo: '1',
                Par_Nombre: '195',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                Par_Tipo: '1',
                Par_Nombre: '200',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Par_Tipo: '1',
                Par_Nombre: '210',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                Par_Tipo: '2',
                Par_Nombre: '55',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                Par_Tipo: '2',
                Par_Nombre: '50',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                Par_Tipo: '2',
                Par_Nombre: '35',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                Par_Tipo: '3',
                Par_Nombre: '16',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                Par_Tipo: '3',
                Par_Nombre: '17',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                Par_Tipo: '3',
                Par_Nombre: '18',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                Par_Tipo: '4',
                Par_Nombre: 'Michellin',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                Par_Tipo: '4',
                Par_Nombre: 'Pirelli',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                Par_Tipo: '4',
                Par_Nombre: 'Hankook',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                Par_Tipo: '5',
                Par_Nombre: 'Velocidad',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                Par_Tipo: '5',
                Par_Nombre: 'Off Road',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                Par_Tipo: '5',
                Par_Nombre: 'Ciudad',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});


    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
        return queryInterface.bulkDelete('parametros', null, {});
    }
};