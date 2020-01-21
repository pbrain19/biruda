import * as Sequelize from 'sequelize';

export default (sequelize: Sequelize.Sequelize) => {
  const Bid = sequelize.define(
    'bid',
    {
      // attributes
      businessId: {
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
    },
    {
      // options
    }
  );

  return Bid;
};
