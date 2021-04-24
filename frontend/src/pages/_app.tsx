import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import NavBar from 'components/NavBar';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import 'styles/_App.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<NavBar />
			<div className="py-8" />
			<Component {...pageProps} />
		</>
	);
};

export default App;
