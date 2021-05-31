import { ApolloClient, InMemoryCache } from '@apollo/client';
import type { Query } from '@sportajga/api';

export const client = new ApolloClient({
	uri: 'https://api.sportaj.ga',
	cache: new InMemoryCache()
});

export type GraphQLResponse<K extends keyof Omit<Query, '__typename'>> = Record<K, Omit<Query[K], '__typename'>>;
