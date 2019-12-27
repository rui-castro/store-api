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
        return queryInterface.bulkInsert('products', [
            {
                name: 'Lego Creator: Underwater Robot',
                price: '19.99',
                description: 'Lego Creator: Underwater Robot - 31090 - 7+',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Lego Creator: Deep Sea Creatures',
                price: '14.99',
                description: 'Lego Creator: Deep Sea Creatures - 31088 - 7+',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Lego Creator: Dune Buggy',
                price: '12.99',
                description: 'Lego Creator: Dune Buggy - 31087 - 6+',
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
        return queryInterface.bulkDelete('products', null, {});
    }
};
