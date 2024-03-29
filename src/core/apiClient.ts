import { ApolloClient, InMemoryCache } from '@apollo/client';
import type { Query_Root } from '@sportajga/mappings';

export const client = new ApolloClient({
	uri: 'https://hasura.sportaj.ga/v1/graphql',
	cache: new InMemoryCache()
});

export type GraphQLResponse<K extends keyof Omit<Query_Root, '__typename'>> = Record<K, Omit<Query_Root[K], '__typename'>>;
