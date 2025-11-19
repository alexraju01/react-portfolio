import { LayoutList } from "lucide-react";

const ProjectsPage = () => {
	return (
		<div className='min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center p-8 bg-white'>
			<LayoutList className='text-indigo-500 w-16 h-16 mb-4' />
			<h1 className='text-5xl font-extrabold text-indigo-600 mb-3'>This is project page</h1>
			<p className='text-xl text-gray-600 max-w-2xl'>
				A collection of my best work, spanning various technologies and domains.
			</p>
		</div>
	);
};

export default ProjectsPage;
