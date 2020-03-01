import { NextApiRequest, NextApiResponse } from 'next';
import listingUpdate from '../../../handlers/listing/update';
import listingDetails from '../../../handlers/listing/details';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'PUT':
        listingUpdate(req, res);
        break;

      case 'GET':
        listingDetails(req, res);
        break;
    }
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
