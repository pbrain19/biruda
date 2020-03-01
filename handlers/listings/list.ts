import { NextApiRequest, NextApiResponse } from 'next';

import models from '../../models';

export default async (_: NextApiRequest, res: NextApiResponse) => {
    const listingInstance = await models.Listings.findAll();

    res.status(200).json(listingInstance);
};