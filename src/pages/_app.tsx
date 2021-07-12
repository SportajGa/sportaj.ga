import { ApolloProvider } from '@apollo/client';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import { DefaultSEOProps } from 'DefaultSEOProps';
import NavBar from 'components/NavBar';
import { client } from 'core/apiClient';
import type { NextPage } from 'next';
import PlausibleProvider from 'next-plausible';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import 'styles/_App.css';

import { config, dom } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<PlausibleProvider domain="sportaj.ga">
				<ApolloProvider client={client}>
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
					<div className="py-12" />
					<Component {...pageProps} />
				</ApolloProvider>
			</PlausibleProvider>
		</>
	);
};

export default App;
