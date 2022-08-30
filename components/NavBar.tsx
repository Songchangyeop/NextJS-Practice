import { useRouter } from '../node_modules/next/router';
import { Nav, NextLink } from './NavBer.styles';

export default function NavBar() {
	const router = useRouter();

	return (
		<Nav>
			<NextLink href="/">
				<a style={{ color: 'red' }}>Home</a>
			</NextLink>
			<NextLink href="/about">
				<a style={{ color: 'red' }}>About</a>
			</NextLink>
		</Nav>
	);
}
