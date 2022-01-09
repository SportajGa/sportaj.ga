import { gql } from '@apollo/client';
import { mergeDefault } from '@sapphire/utilities';
import { client, GraphQLResponse } from 'core/apiClient';
import type { Account, Profile, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import getConfig from 'next/config';
import type { FormFields } from 'pages/prijava';

const { serverRuntimeConfig } = getConfig();

const FETCH_MAPPED_ID = gql`
	query ResolveUser($FBId: bigint!) {
		auth_mapping(limit: 1, where: { _or: { facebook_id: { _eq: $FBId } } }) {
			id
		}
	}
`;

const CREATE_MAPPING = gql`
	mutation CreateUserMapping($FBId: bigint!) {
		insert_auth_mapping_one(object: { facebook_id: $FBId }) {
			id
		}
	}
`;

const SUBMIT_CREATE_FORM = gql`
	mutation SubmitCreateForm(
		$Ime: String
		$Slug: String
		$Description: String
		$Address: String
		$Phonenumber: String
		$Email: String
		$Website: String
		$Instragram: String
		$Facebook: String
		$GCal: String
		$ICS: String
		$Notes: String
	) {
		insert_form_one(
			object: {
				ime: $Ime
				slug: $Slug
				description: $Description
				address: $Address
				phonenumber: $Phonenumber
				email: $Email
				website: $Website
				instagram: $Instragram
				facebook: $Facebook
				gcal: $GCal
				ics: $ICS
				notes: $Notes
			}
		) {
			id
		}
	}
`;

export async function fetchUserID(FBId?: string) {
	const { data } = await client.query<GraphQLResponse<'auth_mapping'>>({
		query: FETCH_MAPPED_ID,
		variables: {
			FBId: FBId ?? '0'
		},
		context: {
			headers: { 'x-hasura-admin-secret': serverRuntimeConfig.hasuraGraphQLAdminSecret ?? '' }
		}
	});

	return data.auth_mapping.length > 0 ? data.auth_mapping[0].id : undefined;
}

export async function createMappedUser(account?: Account) {
	const mappedId = await fetchUserID(account?.id);

	if (account?.provider === 'facebook' && !mappedId) {
		await client.mutate({
			mutation: CREATE_MAPPING,
			variables: { FBId: account.id },
			context: {
				headers: { 'x-hasura-admin-secret': serverRuntimeConfig.hasuraGraphQLAdminSecret ?? '' }
			}
		});
	}
}

export async function submitForm(fields: FormFields) {
	await client.mutate({
		mutation: SUBMIT_CREATE_FORM,
		variables: {
			Ime: fields.name,
			Slug: fields.slug,
			Description: fields.description,
			Address: fields.address,
			Phonenumber: fields.phonenumber,
			Email: fields.email,
			Website: fields.website,
			Instragram: fields.instagram,
			Facebook: fields.facebook,
			GCal: fields.gcal,
			ICS: fields.ics,
			Notes: fields.notes
		},
		context: {
			headers: { 'x-hasura-admin-secret': serverRuntimeConfig.hasuraGraphQLAdminSecret ?? '' }
		}
	});
}

export async function formHasuraJWTPayload(token: JWT, _?: User, account?: Account, __?: Profile) {
	const claims = new Map(Object.entries((token['https://hasura.io/jwt/claims'] as Claims) ?? {}));

	if (account?.provider === 'facebook') claims.set('X-Hasura-User-FB-Id', account.id);

	const mappedId = await fetchUserID(claims.get('X-Hasura-User-FB-Id'));
	if (mappedId) claims.set('X-Hasura-User-Id', mappedId);

	return mergeDefault(token, { 'https://hasura.io/jwt/claims': Object.fromEntries(claims) });
}

export type Claims = Record<string, string> | undefined;
