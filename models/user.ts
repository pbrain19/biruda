import * as Sequelize from 'sequelize';

export default (sequelize: Sequelize.Sequelize) => {
  const User = sequelize.define(
    'user',
    {
      // attributes
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.DATE,
      },
    },
    {
      // options
    }
  );

  return User;
};
