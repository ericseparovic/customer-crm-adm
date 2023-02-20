import PropTypes from 'prop-types';

function Client({ client }) {
	const { name, phone, email, company } = client;
	return (
		<tr className='text-center'>
			<td className='p-2'>{name}</td>
			<td className='p-2'>{phone}</td>
			<td className='p-2'>{email}</td>
			<td className='p-2'>{company}</td>
		</tr>
	);
}

Client.propTypes = {
	client: PropTypes.array,
};

export default Client;
