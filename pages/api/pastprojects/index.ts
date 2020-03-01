import { NextApiRequest, NextApiResponse } from 'next';
import listingList from '../../../handlers/pastprojects/list';

import listingCreate from '../../../handlers/pastprojects/create';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'POST':
        listingCreate(req, res);
        break;

      case 'GET':
        listingList(req, res);
        break;
    }
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
