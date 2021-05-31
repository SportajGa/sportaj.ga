import { ApolloProvider } from '@apollo/client';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import NavBar from 'components/NavBar';
import { client } from 'core/apiClient';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import 'styles/_App.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<ApolloProvider client={client}>
				<NavBar />
				<div className="py-12" />
				<Component {...pageProps} />
			</ApolloProvider>
		</>
	);
};

export default App;
