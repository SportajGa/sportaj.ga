import { submitForm } from 'core/hasura';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		try {
			await submitForm(JSON.parse(req.body));
			res.status(200);
		} catch {
			res.status(500);
		}
	} else {
		res.status(401);
	}

	res.end();
};
