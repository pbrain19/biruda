import { NextApiRequest, NextApiResponse } from 'next';
import businessprofileCreate from '../../../handlers/businessprofile/create';
import businessprofileList from '../../../handlers/businessprofile/list';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'POST':
        businessprofileCreate(req, res);
        break;

      case 'GET':
        businessprofileList(req, res);
        break;
    }
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
