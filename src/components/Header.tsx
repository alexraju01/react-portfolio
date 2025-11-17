import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className='bg-white shadow-md sticky top-0 z-50'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16'>
				<Link
					to='/'
					className='text-2xl font-extrabold text-gray-900 tracking-tight transition duration-150 hover:text-indigo-600'>
					My Portfolio
				</Link>

				<nav className='flex items-center space-x-6'>
					<Link
						className='text-gray-600 hover:text-indigo-600 font-medium transition duration-150 ease-in-out'
						to='/'>
						Home
					</Link>
					<Link
						className='text-gray-600 hover:text-indigo-600 font-medium transition duration-150 ease-in-out'
						to='/projects'>
						Projects
					</Link>
					<Link
						className='px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition duration-150 ease-in-out hidden sm:inline-block'
						to='/contact'>
						Contact
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
