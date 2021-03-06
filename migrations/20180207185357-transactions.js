

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('transactions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    transactionId: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    transactionStatus: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    transactionTimestamp: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    fromAccount: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    toAccount: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    toRemainigBalance: {
      type: Sequelize.INTEGER,
    },
    fromRemainingBalance: {
      type: Sequelize.INTEGER,
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    transactionType: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      validate: {
        notEmpty: true,
      },
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      validate: {
        notEmpty: true,
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('transactions'),
};
