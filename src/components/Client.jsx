import PropTypes from 'prop-types';
import { useNavigate, Form, redirect } from 'react-router-dom';
import { deleteClient } from '../data/clients';

export async function action({ params }) {
	deleteClient(params.clientId);
	return redirect('/');
}

function Client({ client }) {
	const navigate = useNavigate();
	const { name, phone, email, company, id } = client;
	return (
		<tr className='text-center'>
			<td className='p-2'>{name}</td>
			<td className='p-2'>{phone}</td>
			<td className='p-2'>{email}</td>
			<td className='p-2'>{company}</td>
			<td className='p-2 flex gap-3'>
				<button
					className='text-sky-800 uppercase font-bold text-xs'
					type='button'
					onClick={() => navigate(`/clients/${id}/edit`)}>
					Edit
				</button>
				<Form
					method='POST'
					action={`/clients/${id}/delete`}
					onSubmit={(e) => {
						if (!confirm('Do you want to delete?')) {
							e.preventDefault();
						}
					}}>
					<button
						className='text-red-800 uppercase font-bold text-xs'
						type='submit'>
						Delete
					</button>
				</Form>
			</td>
		</tr>
	);
}

Client.propTypes = {
	client: PropTypes.object,
};

export default Client;
