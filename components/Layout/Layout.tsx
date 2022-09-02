import React from 'react';
import NavBar from '../NavBar.rsx/NavBar';

const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			<div>{children}</div>
		</>
	);
};

export default Layout;
