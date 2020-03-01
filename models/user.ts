import * as Sequelize from 'sequelize';
import { User } from '../interfaces';


interface MyModel extends Sequelize.Model {
  readonly id: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
type MyModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): MyModel & User;
};

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
  ) as MyModelStatic;

  return User;
};
