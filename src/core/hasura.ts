import { mergeDefault } from '@sapphire/utilities';
import type { Account, Profile, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

export function formHasuraJWTPayload(token: JWT, _?: User, account?: Account, __?: Profile) {
	// TODO: create type definitions
	const data = new Map(Object.entries((token['https://hasura.io/jwt/claims'] as Record<string, string> | undefined) ?? {}));

	if (account?.provider === 'facebook') data.set('X-Hasura-User-FB-Id', account.id);

	console.log('account', account);
	console.log('data map', data);
	console.log('object', Object.fromEntries(data));

	return mergeDefault(token, { 'https://hasura.io/jwt/claims': Object.fromEntries(data) });
}
