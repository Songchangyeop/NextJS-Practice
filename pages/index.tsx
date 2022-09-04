import { useRouter } from 'next/router';
import Head from 'next/head';
import Seo from '../components/Seo/Seo';
import { useEffect, useState } from 'react';

const API_KEY = '012693cb558c04b496d10b1317a59162';

const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`).then(
			(response) => {
				console.log(response);
			}
		);
	}, []);

	const router = useRouter();

	const onMoveToAboutPage = () => {
		router.push('/About');
	};

	return (
		<div>
			<Seo title="Home" />

			<h1 onClick={onMoveToAboutPage}>AboutPage로 이동</h1>
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	const path = 'Home';
	return {
		props: {
			path,
		},
	};
}
