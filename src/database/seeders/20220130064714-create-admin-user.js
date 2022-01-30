'use strict';
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const pass = 'secret';
    const admin = bcrypt.hash(pass, 8);
    const manager = bcrypt.hash(pass, 8);
    const developer = bcrypt.hash(pass, 8);
    
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Admin User',
        email: 'admin@example.com',
        password_hash: admin,
        status: 'active',
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Manager User',
        email: 'manager@example.com',
        password_hash: manager,
        status: 'active',
        role: 'manager',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Developer User',
        email: 'developer@example.com',
        password_hash: developer,
        status: 'active',
        role: 'developer',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
