import { NextApiRequest, NextApiResponse } from 'next';
import bidCreate from '../../../handlers/bid/create';
import bidList from '../../../handlers/bid/list';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'POST':
        bidCreate(req, res);
        break;

      case 'GET':
        bidList(req, res);
        break;
    }
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
