import { NextApiRequest, NextApiResponse } from 'next';

import models from '../../models';

export default async (_: NextApiRequest, res: NextApiResponse) => {
    const pastProjectsInstance = await models.PastProjects.findAll();

    res.status(200).json(pastProjectsInstance);
};