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
    return queryInterface.bulkInsert('HairColors', [
      { color: "Auburn", createdAt: '2019-04-12', updatedAt: '2019-04-12'},
      { color: "Black", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "Blonde", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "Brown", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "Other", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "Red", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "White", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('HairColors', null, {});
  }
};
