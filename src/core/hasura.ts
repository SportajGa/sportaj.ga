import { gql } from '@apollo/client';
import { mergeDefault } from '@sapphire/utilities';
import { client, GraphQLResponse } from 'core/apiClient';
import type { Account, Profile, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

const FETCH_MAPPED_ID = gql`
	query ResolveUser($FBId: bigint!) {
		auth_mapping(limit: 1, where: { _or: { facebook_id: { _eq: $FBId } } }) {
			id
		}
	}
`;

export async function formHasuraJWTPayload(token: JWT, _?: User, account?: Account, __?: Profile) {
	// TODO: create type definitions
	const claims = new Map(Object.entries((token['https://hasura.io/jwt/claims'] as Record<string, string> | undefined) ?? {}));

	if (account?.provider === 'facebook') claims.set('X-Hasura-User-FB-Id', account.id);

	const { data } = await client.query<GraphQLResponse<'auth_mapping'>>({
		query: FETCH_MAPPED_ID,
		variables: {
			FBId: claims.get('X-Hasura-User-FB-Id') ?? ''
		},
		context: {
			headers: new Headers().set('x-hasura-admin-secret', serverRuntimeConfig.hasuraGraphQLAdminSecret ?? '')
		}
	});

	// TODO: Check if there even are elements
	if (data.auth_mapping[0].id) claims.set('X-Hasura-User-Id', data.auth_mapping[0].id);

	return mergeDefault(token, { 'https://hasura.io/jwt/claims': Object.fromEntries(claims) });
}
