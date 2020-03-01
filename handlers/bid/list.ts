import { NextApiRequest, NextApiResponse } from 'next';

import models from '../../models';

export default async (_: NextApiRequest, res: NextApiResponse) => {
    const bidInstance = await models.Bid.findAll();

    res.status(200).json(bidInstance);
};
