import { useRouter } from 'next/router';
import Head from 'next/head';
import Seo from '../components/Seo/Seo';

const Home = () => {
	const router = useRouter();

	const onMoveToAboutPage = () => {
		router.push('/About');
	};

	return (
		<div>
			<Seo title="Home" />
			<img src="xxx" alt="" />
			<h1 onClick={onMoveToAboutPage}>AboutPage로 이동</h1>
		</div>
	);
};

export default Home;
