import * as Sequelize from 'sequelize';

export default (sequelize: Sequelize.Sequelize) => {
  const Commitment = sequelize.define(
    'commitment',
    {
      // attributes
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      listingId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateSigned: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      option: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      // options
    }
  );

  return Commitment;
};
