import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BlogPage from './Pages/BlogPage';
import ExperiencePage from './Pages/ExperiencePage';

export default function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={process.env.PUBLIC_URL + '/'} element={<HomePage />} />
					<Route path={process.env.PUBLIC_URL + '/experience'} element={<ExperiencePage />} />
					<Route path={process.env.PUBLIC_URL + '/blog'} element={<BlogPage />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}