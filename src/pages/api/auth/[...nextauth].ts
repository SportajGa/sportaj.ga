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
		session: {
			jwt: true
		},
		jwt: {
			secret: process.env.JWT_SECRET,
			maxAge: 30 * 24 * 60 * 60,
			verificationOptions: {
				algorithms: ['HS256']
			}
		},
		pages: {
			signIn: '/auth/signin'
		},
		callbacks: {
			jwt: (token, _, account, profile) => {
				if (account) token.account = account;
				if (profile) token.profile = profile;
				return token;
			}
		}
	});
};
