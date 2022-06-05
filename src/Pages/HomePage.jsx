import React from 'react';
import Navbar from '../components/Navbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const HomePage = () => {

	return (
		<>
			<div className='from-secondary to h-screen'>
				<Navbar />
				<div className='flex flex-col text-center
								md:flex-row-reverse md:justify-center md:mt-16'>
					<div className='mt-6 mx-6'>
						<img src='../assets/headshot.jpeg'
							className='rounded-[3em] shadow-lg md:w-96' />
					</div>
					<div className='font-Raleway text-left mt-8 mx-6'>
						<h2 className='text-black font-bold
									text-4xl'>
							What's up! 👋 My name's Topan
						</h2>
						<h3 className='text-secondary font-semibold
									text-2xl underline underline-offset-2'>
							Software Engineering Student @ University of Calgary
						</h3>
						<p>Always looking to learn new things, connect with people and create cool stuff!</p>
						<div className='flex justify-center justify-evenly mt-5'>
							<a href='https://github.com/topanb11' target='_blank'>
								<GitHubIcon sx={{ color: '#764AF1', fontSize: '60px' }} />
							</a>
							<a href='https://www.linkedin.com/in/topan-budiman-b84977205/' target='_blank'>
								<LinkedInIcon sx={{ color: '#764AF1', fontSize: '60px' }} />
							</a>
							<a href='mailto:topan.budiman@ucalgary.ca' target='_blank'>
								<EmailIcon sx={{ color: '#764AF1', fontSize: '60px' }} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default HomePage;