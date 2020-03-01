import { NextApiRequest, NextApiResponse } from 'next';
import listingoptionsUpdate from '../../../handlers/listingoptions/update';
import listingoptionsDetails from '../../../handlers/listingoptions/details';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'PUT':
        listingoptionsUpdate(req, res);
        break;

      case 'GET':
        listingoptionsDetails(req, res);
        break;
    }
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
