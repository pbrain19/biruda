import { NextApiRequest, NextApiResponse } from 'next';

import models from '../../models';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const payload = req.body;

    const pastProjectsInstance = await models.PastProjects.update(payload, {
        where: {
            id: payload.id,
        },
    });

    res.status(200).json(pastProjectsInstance);
};