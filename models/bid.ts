import * as Sequelize from 'sequelize';

export default (sequelize: Sequelize.Sequelize) => {
  const Bid = sequelize.define(
    'bid',
    {
      // attributes
      businessProfileId: {
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
      cost: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      timeCompletion: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      executionPlan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      executionPlanPdf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      // options
    }
  );

  return Bid;
};
