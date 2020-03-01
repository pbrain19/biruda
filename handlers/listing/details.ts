import { NextApiRequest, NextApiResponse } from 'next';

import models from '../../models';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;

  const listingInstance = await models.Listings.findOne({
    where: {
      id,
    },
  });

  res.status(200).json(listingInstance);
};
