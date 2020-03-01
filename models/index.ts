import sequelize from '../common/db';

import commitment from './commitment';
import user from './user';
import listings from './listings';
import bid from './bid';
import businessProfile from './business-profile';
import listingOptions from './listing-options';
import pastProjects from './past-project';

export default {
  Commitment: commitment(sequelize),
  User: user(sequelize),
  Listings: listings(sequelize),
  Bid: bid(sequelize),
  BusinessProfile: businessProfile(sequelize),
  ListingOptions: listingOptions(sequelize),
  PastProjects: pastProjects(sequelize),
};
