import type { Account, Profile, User } from 'next-auth';

export function formHasuraJWTPayload(_?: User, account?: Account, __?: Profile) {
	const data = new Map();

	if (account?.provider === 'facebook') data.set('X-Hasura-User-FB-Id', account.id);

	return Object.fromEntries(data);
}
