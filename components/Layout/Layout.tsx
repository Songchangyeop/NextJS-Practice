import React from 'react';
import NavBar from '../NavBar.rsx/NavBar';
import { Container } from './Layout.styles';

const Layout = ({ children }) => {
	return (
		<div>
			<NavBar />
			<Container>{children}</Container>
		</div>
	);
};

export default Layout;
