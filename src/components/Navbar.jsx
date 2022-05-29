import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import resume from '../assets/resume.pdf';

function Navbar() {
	const Links = [
		{ name: 'HOME', link: '/' },
		{ name: 'EXPERIENCE', link: '/experience' },
		{ name: 'BLOG', link: '/blog' },
		{ name: 'RESUME', link: require('../assets/resume.pdf'), target: '_blank' }
	]

	const [open, setOpen] = useState(false)

	return (
		<>
			<div className='drop-shadow-2xl md:flex justify-between items-baseline bg-primary text-white'>
				<h1 className='text-4xl font-Raleway font-bold pl-6 py-5 text-left bg-primary'>
					Topan Budiman
				</h1>
				<div className='absolute right-4 top-5 cursor-pointer md:hidden'
					onClick={() => setOpen(!open)}
				>
					{open ? <CloseIcon sx={{fontSize: '40px' }} /> : <MenuIcon sx={{fontSize: '40px' }} />}
				</div>
				<ul className={`absolute pl-7 bg-secondary w-full z-[-1]
				md:flex md:z-auto md:static md:flex md:items-center md:w-auto md:bg-primary
				transition-all duration-500 ease-in rounded-b-xl ${open ? 'top-16' : 'top-[-300px]'}`}>
					{
						Links.map((link) => (
							<li key={link.name} className='pr-6 my-7 md:px-10 text-2xl font-semibold duration-500
															hover:text-black'>
								<a href={link.link} target={link.target} >{link.name}</a>
							</li>
						))
					}
				</ul>
			</div>
		</>
	)
}
export default Navbar;


