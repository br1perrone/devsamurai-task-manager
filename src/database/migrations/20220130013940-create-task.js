'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      due_date: {
        allowNull: true,
        type: Sequelize.DATE
      },
      effort: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      order: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      status: {
        defaultValue: 'backlog',
        type: Sequelize.ENUM(
          'backlog',
          'doing',
          'done',
          'approved',
          'rejected',
        )
      },
      user_id: {
        references: { model: 'users', key: 'id', },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      project_id: {
        references: { model: 'projects', key: 'id', },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tasks');
  }
};