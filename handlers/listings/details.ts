import { NextApiRequest, NextApiResponse } from 'next';
import models from '../../models';
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const payload = req.body;
    const detailsInstance = await models.Listings.create(payload);
    res.status(201).json(detailsInstance);
};