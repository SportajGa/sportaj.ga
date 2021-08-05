import { formHasuraJWTPayload } from 'core/hasura';
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
				algorithms: ['HS512']
			}
		},
		pages: {
			signIn: '/auth/signin'
		},
		callbacks: {
			jwt: async (token, user, account, profile) => {
				// if (account) token.account = account;
				if (profile) token.profile = profile;

				token = await formHasuraJWTPayload(token, user, account, profile);

				return token;
			}
		}
	});
};
