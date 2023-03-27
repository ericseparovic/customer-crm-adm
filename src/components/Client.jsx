import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

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
				<button
					className='text-red-800 uppercase font-bold text-xs'
					type='button'>
					Delete
				</button>
			</td>
		</tr>
	);
}

Client.propTypes = {
	client: PropTypes.object,
};

export default Client;
