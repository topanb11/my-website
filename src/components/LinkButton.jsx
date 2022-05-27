import React from "react"


export default function LinkButton(props) {

	return (
		<>
			<div className="flex justify-center pt-10">
				{props.links.map((link) => (
					<button
						className="transition-all bg-primary w-40 h-24 rounded-lg hover:rounded-2xl shadow-lg mx-6
                                hover:border-4"
						onClick={() => {
							window.open(link.link)
						}}
					>
						<img
							src={"./assets/" + link.name + "-icon.svg"}
							className="w-14 mx-auto"
						/>
					</button>
				))}
			</div>
		</>
	)
}