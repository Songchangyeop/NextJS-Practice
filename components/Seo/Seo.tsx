import React from 'react';
import Head from '../../node_modules/next/head';

const Seo = ({ title }) => {
	return (
		<Head>
			<title>{title} | Next </title>
		</Head>
	);
};

export default Seo;
