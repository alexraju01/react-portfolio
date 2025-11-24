import { useState } from "react";
import { Link, NavLink, type NavLinkProps } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavLinkItemProps extends Omit<NavLinkProps, "className"> {
	to: string;
	children: React.ReactNode;
	onClick?: () => void;
}
const NavLinkItem = ({ to, children, onClick }: NavLinkItemProps) => (
	<NavLink
		to={to}
		onClick={onClick}
		className={({ isActive }) =>
			`font-medium transition duration-150 ease-in-out ${
				isActive
					? "text-indigo-600 border-b-2 border-indigo-600"
					: "text-gray-600 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-300 border-b-2 border-transparent"
			} py-2`
		}>
		{children}
	</NavLink>
);
// --- Main Header Component ---
const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = (): void => setIsOpen(!isOpen);

	return (
		<header className='bg-white shadow-lg sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					{/* Logo/Title */}
					<Link
						to='/'
						className='text-2xl font-extrabold text-gray-900 tracking-tight hover:text-indigo-600 transition duration-150'>
						My Portfolio
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex items-center space-x-8'>
						<NavLinkItem to='/'>Home</NavLinkItem>
						<NavLinkItem to='/projects'>Projects</NavLinkItem>
					</nav>

					{/* Mobile Menu Button (Hamburger) */}
					<div className='md:hidden'>
						<button
							onClick={toggleMenu}
							className='p-2 text-gray-700 hover:text-indigo-600 transition duration-150'
							aria-label={isOpen ? "Close menu" : "Open menu"}
							aria-expanded={isOpen}>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu Panel */}
			{isOpen && (
				<div className='md:hidden bg-gray-50 border-t border-gray-200'>
					<div className='flex flex-col space-y-2 py-3 px-4 sm:px-6'>
						{/* Mobile Nav Links */}
						<NavLinkItem to='/' onClick={toggleMenu}>
							Home
						</NavLinkItem>
						<NavLinkItem to='/projects' onClick={toggleMenu}>
							Projects
						</NavLinkItem>
						<Link
							to='/contact'
							className='w-full text-center px-5 py-2 mt-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150'
							onClick={toggleMenu}>
							Contact
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
