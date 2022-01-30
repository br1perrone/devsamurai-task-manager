'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("tasks", "path", {
      type: Sequelize.STRING,
    });
    queryInterface.addColumn("tasks", "folder", {
      type: Sequelize.STRING,
    });
    queryInterface.addColumn("tasks", "type", {
      type: Sequelize.STRING,
    });
    queryInterface.addColumn("tasks", "filename", {
      type: Sequelize.STRING,
    });
    queryInterface.addColumn("tasks", "size", {
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return Promisse.all([
      queryInterface.removeColumn("tasks", "path"),
      queryInterface.removeColumn("tasks", "folder"),
      queryInterface.removeColumn("tasks", "type"),
      queryInterface.removeColumn("tasks", "filename"),
      queryInterface.removeColumn("tasks", "size"),
    ]);
  }
};
