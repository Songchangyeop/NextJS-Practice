import styled from 'styled-components';
import Link from 'next/link';

const lightGray = '#bdbdbd';

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	margin: auto;
	width: 100%;
	padding: 0.625rem 1rem;
	border-bottom: 1px solid gray;
	background-color: black;
`;

export const NextLink = styled(Link)`
	text-decoration: none;
`;

export const Logo = styled.span`
	font-size: 2rem;
	margin-right: 1.5rem;
	color: white;
`;

export const NavItem = styled.span.attrs({ className: 'clickable' })<{
	active: string;
}>`
	font-size: 1.5rem;
	margin-right: 1rem;
	color: ${({ active }) => (active ? lightGray : 'white')};
`;
