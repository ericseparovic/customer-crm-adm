import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

function NewClient() {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<h1 className='font-black text-4xl text-sky-800 text-center'>
				New Client
			</h1>
			<p className='mt-3 text-center text-2xl mb-16'>Add new clients</p>

			<div className='flex justify-end'>
				<button
					className='bg-sky-800 px-3 py-1 text-white rounded font-bold uppercase'
					onClick={() => navigate('/')}>
					Return
				</button>
			</div>
			<div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-10 py-10 max-w-xl'>
				<Form handleSubmit={handleSubmit} />
			</div>
		</>
	);
}

export default NewClient;
