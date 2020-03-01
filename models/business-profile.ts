import * as Sequelize from 'sequelize';

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
    );

    return businessProfile;
};
