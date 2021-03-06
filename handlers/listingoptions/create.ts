import { NextApiRequest, NextApiResponse } from 'next';
import models from '../../models';
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const payload = req.body;
    const listingInstance = await models.ListingOptions.create(payload);
    res.status(201).json(listingInstance);
};