import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import client from "../secrets.js";

const ICONS = { color: "#5539CC", fontSize: "70px" };
const BORDER_PLACEHOLDER = "animate-pulse border-4 border-grey bg-grey";

const HomePage = () => {
	const [headshotUrl, setHeadshotUrl] = useState("");
	const [loaded, setLoaded] = useState(false);

	const getHeadshotUrl = async() => {
		var response = await client.getEntry("5OthejOTaaTviOM4FFLXFa");
		setHeadshotUrl(response.fields.imageUrl.fields.file.url);
	}

	useEffect(() => {
		getHeadshotUrl();
		setLoaded(true);
	}, [])

	const LoadingPage = () => {
		return (
			<>
				<div className="from-secondary h-screen">
					<div className={` ${BORDER_PLACEHOLDER} h-20 border-b-4`}></div>
					<div className="flex flex-col md:flex-row-reverse md:justify-center mt-10 md:mt-16">
						<div className={` ${BORDER_PLACEHOLDER} rounded-[3em] h-96 md:w-96 mx-6`}></div>
						<div className="mt-5 mx-6">
							<div className={` ${BORDER_PLACEHOLDER} mt-5 rounded-lg h-20 md:w-[40rem]`}></div>
							<div className={` ${BORDER_PLACEHOLDER} rounded-lg h-16 w-64 md:w-[32rem] mt-2`}></div>
							<div className={` ${BORDER_PLACEHOLDER} rounded-lg h-10 w-80 md:w-[45rem] mt-2`}></div>
							<div className="flex justify-center justify-around md:justify-evenly mt-10 mb-5">
								<div className={` ${BORDER_PLACEHOLDER} rounded-full w-16 h-16 md:w-24 md:h-24`} ></div>
								<div className={` ${BORDER_PLACEHOLDER} rounded-full w-16 h-16 md:w-24 md:h-24`} ></div>
								<div className={` ${BORDER_PLACEHOLDER} rounded-full w-16 h-16 md:w-24 md:h-24`} ></div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	const LoadedPage = () => {
		return (
			<div className="from-secondary h-screen">
			<Navbar />
			<div className="flex flex-col text-center md:flex-row-reverse md:justify-center mt-10 md:mt-16">
				<div className="mx-6 z-[-10]">
					<img
						src={headshotUrl}
						className="rounded-[3em] shadow-lg md:w-96"
					/>
				</div>
				<div className="font-Raleway text-left mt-8 mx-6">
					<h2 className="text-black font-bold text-4xl">
						What's up! 👋 My name's Topan
					</h2>
					<h3 className="text-secondary font-semibold text-2xl underline underline-offset-2">
						3rd year Software Engineering @ UCalgary
					</h3>
					<p className="mt-1">
						Always looking to learn new things, connect with people and create
						cool stuff!
					</p>
					<div className="flex justify-center justify-around md:justify-evenly mt-5 mb-5">
						<a href="https://github.com/topanb11" 
							target="_blank"
						>
							<GitHubIcon sx={ICONS} />
						</a>
						<a
							href="https://www.linkedin.com/in/topan-budiman-b84977205/"
							target="_blank"
						>
							<LinkedInIcon sx={ICONS} />
						</a>
						<a href="mailto:topanbudiman11@gmail.com" target="_blank">
							<EmailIcon sx={ICONS} />
						</a>
					</div>
				</div>
			</div>
		</div>
		);
	}

  return (
			loaded ? LoadedPage() : LoadingPage()
  );
};
export default HomePage;
