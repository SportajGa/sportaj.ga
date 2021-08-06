import AuthRequire from 'components/auth/AuthRequire';
import Offset from 'components/Offset';
import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

const AdminClubPage: NextPage = () => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<>
			<Offset />
			<AuthRequire>
				<div>Oh this is {slug}</div>
			</AuthRequire>
		</>
	);
};

export default AdminClubPage;
