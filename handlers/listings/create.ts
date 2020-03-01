import { NextApiRequest, NextApiResponse } from 'next';

import models from '../../models';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const payload = req.body;

    const listingInstance = await models.Listings.create(payload);

    res.status(200).json(listingInstance);
};