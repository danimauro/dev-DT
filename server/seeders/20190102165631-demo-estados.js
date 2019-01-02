'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
        */
        return queryInterface.bulkInsert('estados', [{
                Est_Nombre: 'Texas',
                Est_ZipCode: '12345',
                Est_Impuesto: 15.6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Est_Nombre: 'Florida',
                Est_ZipCode: '54321',
                Est_Impuesto: 16.6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Est_Nombre: 'California',
                Est_ZipCode: '76543',
                Est_Impuesto: 12.6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                Est_Nombre: 'Michigan',
                Est_ZipCode: '76543',
                Est_Impuesto: 20.2,
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
        return queryInterface.bulkDelete('Estados', null, {});
    }
};