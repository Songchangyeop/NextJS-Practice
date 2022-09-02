import styled from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const NextLink = styled(Link)`
	text-decoration: none;
	color: tomato;
`;

export const NavItem = styled.span`
	margin-right: 10rem;
`;
