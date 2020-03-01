import * as Sequelize from 'sequelize';
import { PastProjects } from '../interfaces';

interface MyModel extends Sequelize.Model {
    readonly id: number;
  }
  
  // Need to declare the static model so `findOne` etc. use correct types.
  type MyModelStatic = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): MyModel & PastProjects;
  };

export default (sequelize: Sequelize.Sequelize) => {


    const pastProjects = sequelize.define(
        'business-profile',
        {
            // attributes
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cost: {
                type: Sequelize.NUMBER,
                allowNull: false,
            },
            time: {
                type: Sequelize.NUMBER,
                allowNull: false,
            },
            images: {
                type: Sequelize.ARRAY(Sequelize.STRING),
                allowNull: false,
            },
            clientName: {
                type: Sequelize.STRING,
                allowNull: false,
            },


        },
        {
            // options
        }
    ) as MyModelStatic;

    return pastProjects;
};
