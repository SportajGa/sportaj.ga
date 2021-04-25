import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/ui';
import NavBar from 'components/NavBar';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import 'styles/_App.css';
import { SupabaseContextProvider } from 'use-supabase';

// @ts-expect-error Stupidity
export const _supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<SupabaseContextProvider client={_supabase}>
				<Auth.UserContextProvider supabaseClient={_supabase}>
					<NavBar />
					<div className="py-12" />
					<Component {...pageProps} />
				</Auth.UserContextProvider>
			</SupabaseContextProvider>
		</>
	);
};

export default App;
