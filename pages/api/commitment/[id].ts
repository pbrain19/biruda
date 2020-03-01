import { NextApiRequest, NextApiResponse } from 'next';
import commitmentUpdate from '../../../handlers/commitment/update';
import commitmentDetails from '../../../handlers/commitment/details';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'PUT':
        commitmentUpdate(req, res);
        break;

      case 'GET':
        commitmentDetails(req, res);
        break;
    }
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
