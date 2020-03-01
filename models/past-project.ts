import * as Sequelize from 'sequelize';

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
    );

    return pastProjects;
};
