import sequelize from '../common/db';

import commitment from './commitment';
import user from './user';
import listings from './listings';
import bid from './bid';

export default {
  Commitment: commitment(sequelize),
  User: user(sequelize),
  Listings: listings(sequelize),
  Bid: bid(sequelize),
};
