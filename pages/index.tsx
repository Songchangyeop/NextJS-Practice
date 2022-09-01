import { useRouter } from 'next/router';

const Home = () => {
	const router = useRouter();

	const onMoveToAboutPage = () => {
		router.push('/About');
	};

	return <div onClick={onMoveToAboutPage}>AboutPage로 이동</div>;
};

export default Home;
