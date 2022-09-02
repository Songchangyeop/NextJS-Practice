import { useRouter } from '../../node_modules/next/router';
import { Nav, NextLink, NavItem } from './NavBar.styles';

export default function NavBar() {
	const router = useRouter();

	return (
		<Nav>
			<NextLink href="/">
				<NavItem>Home</NavItem>
			</NextLink>
			<NextLink href="/About">
				<NavItem>About</NavItem>
			</NextLink>
		</Nav>
	);
}
