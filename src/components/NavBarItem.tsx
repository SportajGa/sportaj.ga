import Link from 'next/link';
import React from 'react';

export interface NavBarItemProps {
	className: string;
	href: string;
	content: string;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ content, href, className }) => {
	return (
		<Link href={href}>
			<span className={className}>{content}</span>
		</Link>
	);
};

export default NavBarItem;
