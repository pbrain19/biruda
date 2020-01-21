import { Sequelize, Model, DataTypes } from 'sequelize';

import config from './config';

const sequelize = new Sequelize(config.DATABASE_URL);
