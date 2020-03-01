import { NextApiRequest, NextApiResponse } from 'next';
import commitmentCreate from '../../../handlers/commitment/create';
import commitmentList from '../../../handlers/commitment/list';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'POST':
        commitmentCreate(req, res);
        break;

      case 'GET':
        commitmentList(req, res);
        break;
    }
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
