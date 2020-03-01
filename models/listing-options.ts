import * as Sequelize from 'sequelize';
import { ListingOptions } from '../interfaces';

interface MyModel extends Sequelize.Model {
  readonly id: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
type MyModelStatic = typeof Sequelize.Model & {
  new(values?: object, options?: Sequelize.BuildOptions): MyModel & ListingOptions;
};


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

  ) as MyModelStatic;
  return ListingOption;
}