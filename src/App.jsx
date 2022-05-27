import React, { useEffect, useState } from "react"
import db from "./Firebase"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import { onSnapshot, collection } from "firebase/firestore"

export default function App() {
	const [assets, setAssets] = useState([])

	useEffect(
		() =>
			onSnapshot(collection(db, "assets"), (snapshot) =>
				setAssets(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
			),
		[]
	)

	return (
		<>
			<Navbar />
			<Body
				data={assets}
			/>
		</>
	)
}