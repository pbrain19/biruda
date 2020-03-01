import { NextApiRequest, NextApiResponse } from 'next';
import indexUpdate from '../../../handlers/index/update';
import indexDetails from '../../../handlers/index/details';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'PUT':
        indexUpdate(req, res);
        break;

      case 'GET':
        indexDetails(req, res);
        break;
    }
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
