import { NextApiRequest, NextApiResponse } from 'next';

import models from '../../models';

export default async (_: NextApiRequest, res: NextApiResponse) => {
    const commitmentInstance = await models.Commitment.findAll();

    res.status(200).json(commitmentInstance);
};