import AuthRequire from 'components/auth/AuthRequire';
import Offset from 'components/Offset';
import type { NextPage } from 'next';
import React from 'react';

const AdminIndexPage: NextPage = () => {
	return (
		<>
			<Offset />
			<AuthRequire>
				<div>Hello</div>
			</AuthRequire>
		</>
	);
};

export default AdminIndexPage;
