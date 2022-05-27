import React from "react"
import LinkButton from "./LinkButton"

export default function Body(props) {
	return (
		<>
			<div className="bg-gradient-to-t from-primary to-secondary text-white min-h-screen pt-20">
				<img
					className="w-96 rounded-3xl mx-auto shadow-xl"
					src="./assets/Topan.jpeg"
				/>

				<body className="pt-10">
					<h3 className="text-4xl font-Raleway font-semibold text-center">
						Hey!👋 I'm Topan
					</h3>
					<h2 className="text-5xl font-Raleway font-bold text-orange text-center">
						Software Engineering Student
					</h2>
					<p className="w-2/3 text-center font-raleway text-lg mx-auto pt-6">
						Welcome to my website! I am a second year Software Engineering Student
						at the University of Calgary. Feel free to connect with me or reach out to me
						at: topanbudiman11@gmail.com yoyo
					</p>

					<LinkButton
						links={props.data}
					>
					</LinkButton>
				</body>
			</div>
		</>
	)
}