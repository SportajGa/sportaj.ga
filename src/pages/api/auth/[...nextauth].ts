import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default (req: NextApiRequest, res: NextApiResponse) => {
	return NextAuth(req, res, {
		providers: [
			Providers.Facebook({
				clientId: process.env.FACEBOOK_CLIENT_ID,
				clientSecret: process.env.FACEBOOK_CLIENT_SECRET
			})
		],
		pages: {
			signIn: '/auth/signin'
		}
	});
};
