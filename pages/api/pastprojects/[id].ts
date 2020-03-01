import { NextApiRequest, NextApiResponse } from 'next';
import pastprojectsUpdate from '../../../handlers/pastprojects/update';
import pastprojectsDetails from '../../../handlers/pastprojects/details';
import pastprojects from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'PUT':
        pastprojectsUpdate(req, res);
        break;

      case 'GET':
        pastprojectsDetails(req, res);
        break;
    }
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
