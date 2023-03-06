import { useRouteError } from 'react-router-dom';

function ErrorPage() {
	const error = useRouteError();
	return (
		<div className='space-y-8'>
			<h1 className='text-center font-bold text-sky-800'></h1>
			<p className='text-center'>{error.message}</p>
		</div>
	);
}

export default ErrorPage;
