import { Code2, Github, Laptop, Mail, Rocket } from "lucide-react";

const HomePage = () => {
	return (
		<div className='min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center p-8 bg-white'>
			<Rocket className='text-indigo-600 w-20 h-20 mb-6 animate-bounce' />

			<h1 className='text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-4'>
				Hello, I'm <span className='text-indigo-600'>Alex Raju</span>
			</h1>

			<p className='text-xl sm:text-2xl text-gray-700 font-medium mb-6'>
				Full-Stack Developer • Problem Solver • Tech Enthusiast
			</p>

			<p className='text-lg text-gray-600 max-w-2xl mb-10'>
				I build modern, scalable, and user-focused web applications using a range of technologies.
				My passion lies in creating seamless digital experiences that balance functionality and
				elegance.
			</p>

			{/* Skills Section */}
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 w-full max-w-3xl'>
				<div className='p-6 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition shadow'>
					<Code2 className='w-10 h-10 text-indigo-600 mb-3 mx-auto' />
					<h3 className='font-bold text-gray-900 text-xl'>Front-End</h3>
					<p className='text-gray-600 text-sm mt-2'>HTML, CSS, JavaScript, TypeScript, Tailwind</p>
				</div>

				<div className='p-6 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition shadow'>
					<Laptop className='w-10 h-10 text-indigo-600 mb-3 mx-auto' />
					<h3 className='font-bold text-gray-900 text-xl'>Back-End</h3>
					<p className='text-gray-600 text-sm mt-2'>
						Node.js, Express, MongoDB, PostgreSQL, MySQL, Sequilize{" "}
					</p>
				</div>

				<div className='p-6 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition shadow'>
					<Rocket className='w-10 h-10 text-indigo-600 mb-3 mx-auto' />
					<h3 className='font-bold text-gray-900 text-xl'>Frameworks</h3>
					<p className='text-gray-600 text-sm mt-2'>React.js, Next.js, Laravel</p>
				</div>
			</div>

			{/* Buttons */}
			<div className='flex flex-wrap gap-4 justify-center'>
				<a
					href='/projects'
					className='px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition flex items-center gap-2'>
					View My Work <Code2 size={18} />
				</a>

				<a
					href='https://github.com/alexraju01'
					target='_blank'
					rel='noopener noreferrer'
					className='px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition flex items-center gap-2'>
					GitHub <Github size={18} />
				</a>

				<a
					href='/contact'
					className='px-6 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg shadow hover:bg-gray-100 transition flex items-center gap-2'>
					Contact Me <Mail size={18} />
				</a>
			</div>
		</div>
	);
};

export default HomePage;
