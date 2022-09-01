import { useRouter } from 'next/router';

const Notice = () => {
	const router = useRouter();

	return (
		<div>
			<h1>Notice {router.query.id}</h1>
		</div>
	);
};

export default Notice;
