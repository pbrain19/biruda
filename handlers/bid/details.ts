import { NextApiRequest, NextApiResponse } from 'next';

import models from '../../models';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id;

    const bidInstance = await models.Bid.findOne({
        where: {
            id,
        },
    });

    res.status(200).json(bidInstance);
};