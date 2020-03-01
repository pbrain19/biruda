import { NextApiRequest, NextApiResponse } from 'next';

import models from '../../models';

export default async (_: NextApiRequest, res: NextApiResponse) => {
    const businessProfileInstance = await models.BusinessProfile.findAll();

    res.status(200).json(businessProfileInstance);
};