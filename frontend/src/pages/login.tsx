import { Auth } from '@supabase/ui';
import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { useSupabase } from 'use-supabase';

const Login: NextPage = () => {
	const supabase = useSupabase();
	const [authView, setAuthView] = useState<'sign_in' | 'sign_up' | 'forgotten_password' | 'magic_link'>('sign_in');

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
			if (event === 'PASSWORD_RECOVERY') setAuthView('forgotten_password');
			if (event === 'USER_UPDATED') setTimeout(() => setAuthView('sign_in'), 1000);
			// Send session to /api/auth route to set the auth cookie.
			// NOTE: this is only needed if you're doing SSR (getServerSideProps)!
			void fetch('/api/auth', {
				method: 'POST',
				headers: new Headers({ 'Content-Type': 'application/json' }),
				credentials: 'same-origin',
				body: JSON.stringify({ event, session })
			}).then((res) => res.json());
		});

		return () => {
			authListener!.unsubscribe();
		};
	}, [supabase.auth]);

	return (
		<>
			<Auth //
				supabaseClient={supabase}
				view={authView}
				socialLayout="horizontal"
				socialButtonSize="xlarge"
				providers={['google', 'github']}
			/>
		</>
	);
};

export default Login;
