import { NextApiRequest, NextApiResponse } from 'next';
import businessprofileUpdate from '../../../handlers/businessprofile/update';
import businessprofileDetails from '../../../handlers/businessprofile/details';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'PUT':
        businessprofileUpdate(req, res);
        break;

      case 'GET':
        businessprofileDetails(req, res);
        break;
    }
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
