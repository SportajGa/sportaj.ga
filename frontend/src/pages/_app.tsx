import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'tailwindcss/tailwind.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
};

export default App;
