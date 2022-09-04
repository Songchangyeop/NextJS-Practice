import React from 'react';

import '../styles/globals.css';
import Layout from '../components/Layout/Layout';

const App = ({ Component, pageProps }) => {
	console.log('현재 열려있는 페이지의 props' + pageProps);
	console.log('현재 열려있는 컴포넌트를 가리킨다' + Component);

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
