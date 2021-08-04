import type { Account, Profile, User } from 'next-auth';

export function formHasuraJWTPayload(_?: User, account?: Account, __?: Profile) {
	const data = new Map();

	console.log('account', account);

	if (account?.provider === 'facebook') data.set('X-Hasura-User-FB-Id', account.id);

	console.log('data map', data);
	console.log('object', Object.fromEntries(data));

	return Object.fromEntries(data);
}
