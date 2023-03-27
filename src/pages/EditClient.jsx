import { getClient } from '../data/clients';
import FormClient from '../components/FormClient';
import {
	useNavigate,
	Form,
	redirect,
	useLoaderData,
	useActionData,
} from 'react-router-dom';
import Error from '../components/Error';
import IconReturn from '../assets/return.png';
import { updateClient } from '../data/clients';

export async function loader({ params }) {
	const client = await getClient(params.clientId);
	if (Object.values(client).length === 0) {
		throw new Response('', {
			status: 404,
			statusText: 'Not Result',
		});
	}

	return client;
}

export async function action({ request, params }) {
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

	await updateClient(params.clientId, data);

	return redirect('/');
}

function EditClient() {
	const errors = useActionData();
	const navigate = useNavigate();
	const client = useLoaderData();

	return (
		<>
			<h1 className='font-black text-4xl text-sky-800 text-center'>
				Edit Client
			</h1>
			<p className='mt-3 text-center text-2xl mb-16'>Modify client</p>

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
					<FormClient client={client} />
				</Form>
			</div>
		</>
	);
}

export default EditClient;
