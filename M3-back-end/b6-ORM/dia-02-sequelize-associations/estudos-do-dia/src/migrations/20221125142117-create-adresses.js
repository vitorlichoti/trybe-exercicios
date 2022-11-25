'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'employee_id',
        references: {
          model: 'employees', // aqui é informada a tabela que esse id está vindo
          key: 'id', // informa qual coluna da tabela estrangeira deve ser utilizada na FK
        },
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('addresses');
  }
};
