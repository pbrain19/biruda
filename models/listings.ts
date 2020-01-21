import * as Sequelize from 'sequelize';

export default (sequelize: Sequelize.Sequelize) => {
  const Listing = sequelize.define(
    'listing',
    {
      // attributes
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      totalPrice: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      estimatedConstructionTime: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      authorId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prospectus: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
    },
    {
      // options
    }
  );

  return Listing;
};
