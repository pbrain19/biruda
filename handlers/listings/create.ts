import { NextApiRequest, NextApiResponse } from 'next';

import models from '../../models';

export default async (req: NextApiRequest, res: NextApiResponse) => {
<<<<<<< HEAD
    const payload = req.body;
    const listingInstance = await models.Listings.create(payload);
    res.status(201).json(listingInstance);
};
=======
  const payload = req.body;

  const listingInstance = await models.Listings.create(payload);

  res.status(200).json(listingInstance);
};
>>>>>>> fcb8cd8f5d4bb3f04327680a6ef6c304b4d82980
