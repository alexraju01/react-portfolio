import { HomeIcon } from "lucide-react";

const HomePage = () => {
	return (
		<div className='min-h-[50vh] flex flex-col items-center justify-center text-center p-8 bg-white rounded-xl shadow-lg m-4 sm:m-8'>
			<HomeIcon className='text-indigo-500 w-16 h-16 mb-4' />
			<h1 className='text-5xl font-extrabold text-gray-900 mb-3'>Welcome to my portfolio!</h1>
			<p className='text-xl text-gray-600 max-w-2xl'>
				Explore my work and see the projects I've been involved in.
			</p>
		</div>
	);
};

export default HomePage;
