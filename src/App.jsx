import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BlogPage from './Pages/BlogPage';
import ExperiencePage from './Pages/ExperiencePage';

export default function App() {

	return (
		<>
			<HashRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/experience' element={<ExperiencePage />} />
					<Route path='/blog' element={<BlogPage />} />
				</Routes>
			</HashRouter>
		</>
	)
}