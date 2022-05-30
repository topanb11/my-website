import React, { useEffect, useState, useContext } from 'react';
import { collection, getFirestore, getDocs, onSnapshot, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import config from './Firebase';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BlogPage from './Pages/BlogPage';
import ExperiencePage from './Pages/ExperiencePage';

export default function App() {

	const app = initializeApp(config);
	const db = getFirestore(app);

	const [data, setData] = useState([]);

	useEffect(
		() =>
			onSnapshot(collection(db, 'ExperienceData'), (snapshot) =>
				setData(snapshot.docs.map((doc) => doc.data()))
			),
		[]
	)



	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage/>} />
					<Route path='/experience' element={<ExperiencePage data={data}/>} />
					<Route path='/blog' element={<BlogPage />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}