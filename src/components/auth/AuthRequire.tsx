import { signIn, useSession } from 'next-auth/client';
import React, { useEffect } from 'react';

const AuthRequire: React.FC = ({ children }) => {
	const [session, loading] = useSession();

	useEffect(() => {
		if (!session && !loading) void signIn();
	}, [session, loading]);

	return <>{children}</>;
};

export default AuthRequire;
