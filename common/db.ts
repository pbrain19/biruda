import { Sequelize } from 'sequelize';

import config from './config';

const sequelize = new Sequelize(config.DATABASE_URL);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err: Error) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
