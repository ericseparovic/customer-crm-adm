import { Outlet, Link, useLocation } from 'react-router-dom';
import IconUsers from '../assets/IconUsers';
import IconUserAdd from '../assets/IconUserAdd';

function Layout() {
	const location = useLocation();

	return (
		<div className='md:flex'>
			<aside className='bg-sky-900 px-5 py-10 fixed top-0 bottom-0'>
				<h2 className='text-center text-white text-4xl font-black'>CRM </h2>
				<nav className='mt-16'>
					<Link
						className={`${
							location.pathname === '/' ? 'text-sky-500' : 'text-white'
						} text-2xl block mt-2`}
						to='/'>
						<div
							className='flex itemce
						'>
							<IconUsers
								color={`${
									location.pathname === '/' ? 'fill-sky-500' : 'fill-white'
								}`}
								to='/'></IconUsers>
							Clients
						</div>
					</Link>
					<Link
						className={`${
							location.pathname === '/clients/new'
								? 'text-sky-500'
								: 'text-white'
						} text-2xl block mt-2`}
						to='/clients/new'>
						<div className='flex items-center'>
							<IconUserAdd
								color={`${
									location.pathname === '/clients/new'
										? 'stroke-sky-500'
										: 'stroke-white'
								}`}
								to='/clients/new'></IconUserAdd>
							New Client
						</div>
					</Link>
				</nav>
			</aside>
			<main className='p-10 md:h-screen mx-auto max-w-xl w-full'>
				<Outlet />
			</main>
		</div>
	);
}
export default Layout;
