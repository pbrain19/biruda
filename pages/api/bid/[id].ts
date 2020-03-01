import { NextApiRequest, NextApiResponse } from 'next';
import bidUpdate from '../../../handlers/bid/update';
import bidDetails from '../../../handlers/bid/details';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'PUT':
        bidUpdate(req, res);
        break;

      case 'GET':
        bidDetails(req, res);
        break;
    }
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
