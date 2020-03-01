import { NextApiRequest, NextApiResponse } from 'next';
import listingoptionsCreate from '../../../handlers/listingoptions/create';
import listingoptionsList from '../../../handlers/listingoptions/list';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'POST':
        listingoptionsCreate(req, res);
        break;

      case 'GET':
        listingoptionsList(req, res);
        break;
    }
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
