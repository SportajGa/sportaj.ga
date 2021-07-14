import { ApolloProvider } from '@apollo/client';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import { DefaultSEOProps } from 'DefaultSEOProps';
import NavBar from 'components/NavBar';
import { client } from 'core/apiClient';
import type { NextPage } from 'next';
import { Provider as NextAuthProvider } from 'next-auth/client';
import PlausibleProvider from 'next-plausible';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'state';
import 'styles/_App.css';
import 'react-tippy/dist/tippy.css';
import 'react-placeholder/lib/reactPlaceholder.css';

import { config, dom } from '@fortawesome/fontawesome-svg-core';
import AuthTrack from 'components/auth/AuthTrack';
config.autoAddCss = false;

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<PlausibleProvider domain="sportaj.ga">
			<ApolloProvider client={client}>
				<ReduxProvider store={store}>
					<NextAuthProvider session={pageProps.session}>
						<AuthTrack>
							<Head>
								<meta httpEquiv="Expires" content="1y" />
								<meta httpEquiv="Pragma" content="1y" />
								<meta httpEquiv="Cache-Control" content="1y" />

								<link rel="shortcut icon" href="/icons/favicon.ico" />

								{/* This fixes big icons with next-seo since CSS is somehow overwritten*/}
								<style>{dom.css()}</style>
							</Head>
							<DefaultSeo {...DefaultSEOProps} />

							<NavBar />
							<Component {...pageProps} />
						</AuthTrack>
					</NextAuthProvider>
				</ReduxProvider>
			</ApolloProvider>
		</PlausibleProvider>
	);
};

export default App;
