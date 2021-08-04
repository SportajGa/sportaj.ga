import type { Account, Profile, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

export function formHasuraJWTPayload(token?: JWT, _?: User, account?: Account, __?: Profile) {
	const data = new Map();
	const prevPayload = token && token['https://hasura.io/jwt/claims'] ? (token['https://hasura.io/jwt/claims'] as Record<string, string>) : {};

	console.log('account', account);

	if (account?.provider === 'facebook') data.set('X-Hasura-User-FB-Id', prevPayload['X-Hasura-User-FB-Id'] ?? account.id);

	console.log('data map', data);
	console.log('object', Object.fromEntries(data));

	return Object.fromEntries(data);
}
