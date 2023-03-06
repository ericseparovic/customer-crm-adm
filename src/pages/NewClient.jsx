import { useNavigate, Form, useActionData } from 'react-router-dom';
import FormCliente from '../components/FormClient';
import Error from '../components/Error';
import IconReturn from '../assets/return.png';

export async function action({ request }) {
	const formData = await request.formData();

	const data = Object.fromEntries(formData);

	// validation
	const errors = [];
	if (Object.values(data).includes('')) {
		errors.push('All fields are required');
	}

	// Return error
	if (Object.keys(errors).length) {
		return errors;
	}
	return data;
}

function NewClient() {
	const errors = useActionData();
	const navigate = useNavigate();

	return (
		<>
			<h1 className='font-black text-4xl text-sky-800 text-center'>
				New Client
			</h1>
			<p className='mt-3 text-center text-2xl mb-16'>Add new clients</p>

			<div className='flex justify-end'>
				<button
					className='px-3 py-2 text-white rounded font-bold uppercase shadow bg-white mb-2'
					onClick={() => navigate('/')}>
					<img className='w-6' src={IconReturn} alt='icon-return' />
				</button>
			</div>
			<div className='bg-white shadow rounded-md  mx-auto px-10 py-10'>
				{errors?.length &&
					errors.map((error, i) => <Error key={i}>{error}</Error>)}
				<Form method='post'>
					<FormCliente />
				</Form>
			</div>
		</>
	);
}

export default NewClient;
