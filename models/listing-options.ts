import * as Sequelize from 'sequelize';


export default (sequelize: Sequelize.Sequelize) => {
  const ListingOption = sequelize.define(
    'listing option', {
    images: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
    },
    price: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    details: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }

  )
  return ListingOption;
}