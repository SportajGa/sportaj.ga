import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { getToken } from 'next-auth/jwt';

const secret = process.env.JWT_SECRET;

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getSession({ req });
	const token = await getToken({ req, secret });

	if (session) {
		if (!token || !token.account) res.status(404);
		else res.status(200).json(token.account);
	} else res.status(401);
	res.end();
};
