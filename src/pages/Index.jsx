import { useLoaderData } from 'react-router-dom';
import Client from '../components/Client';

export function loader() {
	const clients = [
		{
			id: 1,
			name: 'Juan',
			phone: 102013313,
			email: 'juan@accesa.com',
			company: 'Accesa',
		},
		{
			id: 2,
			name: 'Karen',
			phone: 138198313,
			email: 'karen@nike.com',
			company: 'Nike',
		},
		{
			id: 3,
			name: 'Josue',
			phone: 31983913,
			email: 'josue@mistral.com',
			company: 'Mistral',
		},
		{
			id: 4,
			name: 'Miguel',
			phone: 319381983,
			email: 'miguel@tata.com',
			company: 'TaTa',
		},
		{
			id: 5,
			name: 'Pedro',
			phone: 1398198938,
			email: 'pedro@adidas.com',
			company: 'Adidas',
		},
	];
	return clients;
}

function Index() {
	const clients = useLoaderData();
	return (
		<>
			<h1 className='font-black text-4xl text-sky-800'>Clients</h1>
			<p className='mt-3'>Manage your Clients</p>

			{clients.length ? (
				<table className='w-full bg-while shadow mt-5 table-auto'>
					<thead className='bg-sky-800 text-white'>
						<tr>
							<th className='p-2'>Client</th>
							<th className='p-2'>Contact</th>
							<th className='p-2'>Email</th>
							<th className='p-2'>Company</th>
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
