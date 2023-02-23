import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {
	const location = useLocation();

	return (
		<div className='md:flex'>
			<aside className='bg-sky-900 px-5 py-10 fixed top-0 bottom-0'>
				<h2 className='text-center text-white text-4xl font-black'>
					CRM - Client
				</h2>
				<nav className='mt-16'>
					<Link
						className={`${
							location.pathname === '/' ? 'text-sky-500' : 'text-white'
						} text-2xl block mt-2 hover:text-sky-500`}
						to='/'>
						Clients
					</Link>
					<Link
						className={`${
							location.pathname === '/clients/new'
								? 'text-sky-500'
								: 'text-white'
						} text-2xl block mt-2 hover:text-sky-500`}
						to='/clients/new'>
						New clients
					</Link>
				</nav>
			</aside>
			<main className='p-10 md:h-screen mx-auto w-full'>
				<Outlet />
			</main>
		</div>
	);
}
export default Layout;
