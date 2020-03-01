import * as Sequelize from 'sequelize';
import { BusinessProfile } from '../interfaces';

interface MyModel extends Sequelize.Model {
    readonly id: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
type MyModelStatic = typeof Sequelize.Model & {
    new(values?: object, options?: Sequelize.BuildOptions): MyModel & BusinessProfile;
};

export default (sequelize: Sequelize.Sequelize) => {

    const businessProfile = sequelize.define(
        'business-profile',
        {
            // attributes
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nameLogo: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            licenseNumber: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            contactEmail: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            contactAddress: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            contactTelephone: {
                type: Sequelize.NUMBER,
                allowNull: false,
            },
            webAddress: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            portfolio: {
                type: Sequelize.STRING,
                allowNull: false,
            },


        },
        {
            // options
        }
    ) as MyModelStatic;

    return businessProfile;
};
