import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function Navbar() {
	const Links = [
		{ name: 'HOME', link: '/' },
		{ name: 'EXPERIENCE', link: '/experience' },
		{ name: 'BLOG', link: '/blog' }
	]

	const [open, setOpen] = useState(false)

	return (
		<>
			<div className='shadow-md md:flex justify-between items-baseline shadow-md bg-primary text-white py-3'>
				<h1 className='text-4xl font-Raleway font-bold pl-6'>
					Topan Budiman
				</h1>
				<div className='absolute right-4 top-4 cursor-pointer md:hidden'
					onClick={() => setOpen(!open)}
				>
					{open ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
				</div>
				<ul className={`absolute w-full md:flex md:z-auto z-[-1] md:my-5 md:static pb-0 pl-7 bg-primary md:flex 
				md:items-center md:w-auto transition-all duration-500 ease-in ${open ? 'top-10' : 'top-[-490px]'}`}>
					{
						Links.map((link) => (
							<li key={link.name} className='pr-6 my-7 sm:ml-7 text-2xl font-semibold hover:text-orange duration-500'>
								<a href={link.link}>{link.name}</a>
							</li>
						))
					}
				</ul>
			</div>
		</>
	)
}
export default Navbar;


