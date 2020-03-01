import { NextApiRequest, NextApiResponse } from 'next';
import models from '../../models';
export default async (req: NextApiRequest, res: NextApiResponse) => {
    
    const listingOptions = await models.ListingOptions.findAll();
    res.status(201).json(listingOptions);
};