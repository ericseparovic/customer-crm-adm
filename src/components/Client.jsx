function Client({ client }) {
	const { name } = client;
	return <tr className='p-2'>{name}</tr>;
}

export default Client;
