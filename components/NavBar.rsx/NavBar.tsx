import { useState } from 'react';
import { useRouter } from '../../node_modules/next/router';
import { Logo, Nav, NextLink, NavItem } from './NavBar.styles';

export default function NavBar() {
	const router = useRouter();

	return (
		<Nav>
			<Logo>Next.js</Logo>
			<NextLink href="/">
				<NavItem active={router.pathname === '/'}>Home</NavItem>
			</NextLink>
			<NextLink href="/About">
				<NavItem active={router.pathname === '/About'}>About</NavItem>
			</NextLink>
			<NextLink href="/Notice">
				<NavItem active={router.pathname === '/Notice'}>Notice</NavItem>
			</NextLink>
		</Nav>
	);
}
