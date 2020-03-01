import { NextApiRequest, NextApiResponse } from 'next';

import models from '../../models';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id;

    const commitmentInstance = await models.Commitment.findOne({
        where: {
            id,
        },
    });

    res.status(200).json(commitmentInstance);
};