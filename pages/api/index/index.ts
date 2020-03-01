import { NextApiRequest, NextApiResponse } from 'next';
import indexCreate from '../../../handlers/index/create';
import indexList from '../../../handlers/index/list';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'POST':
        indexCreate(req, res);
        break;

      case 'GET':
        indexList(req, res);
        break;
    }
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
