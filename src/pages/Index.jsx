import { useLoaderData } from 'react-router-dom';
import Client from '../components/Client';
import { getClients } from '../data/clients';

export function loader() {
	const clients = getClients();
	return clients;
}

function Index() {
	const clients = useLoaderData();

	return (
		<>
			<h1 className='font-black text-4xl text-sky-800 text-center'>Clients</h1>
			<p className='mt-3 text-2xl text-center mb-16'>Manage your Clients</p>

			{clients.length ? (
				<table className='w-full bg-while shadow mt-5 table-auto'>
					<thead className='bg-sky-800 text-white'>
						<tr>
							<th className='p-2'>Client</th>
							<th className='p-2'>Contact</th>
							<th className='p-2'>Email</th>
							<th className='p-2'>Company</th>
							<th className='p-2'></th>
						</tr>
					</thead>
					<tbody>
						{clients.map((client) => (
							<Client client={client} key={client.id} />
						))}
					</tbody>
				</table>
			) : (
				<p className='text-center mt-10'>No Clients</p>
			)}
		</>
	);
}

export default Index;
