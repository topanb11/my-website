import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import client from "../secrets.js";

const ICONS = { color: "#5539CC", fontSize: "60px" };

const HomePage = () => {
	const [headshotUrl, setHeadshotUrl] = useState("");

	const getHeadshotUrl = async() => {
		var response = await client.getEntry("5OthejOTaaTviOM4FFLXFa");
		setHeadshotUrl(response.fields.imageUrl.fields.file.url);
	}

	useEffect(() => {
		getHeadshotUrl();
	}, [])

  return (
    <>
      <div className="from-secondary h-screen">
        <Navbar />
        <div
          className="flex flex-col text-center
								md:flex-row-reverse md:justify-center mt-10 md:mt-16"
        >
          <div className="mx-6 z-[-10]">
            <img
              src={headshotUrl}
              className="rounded-[3em] shadow-lg md:w-96"
            />
          </div>
          <div className="font-Raleway text-left mt-8 mx-6">
            <h2
              className="text-black font-bold
									text-4xl"
            >
              What's up! 👋 My name's Topan
            </h2>
            <h3
              className="text-secondary font-semibold
									text-2xl underline underline-offset-2"
            >
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
    </>
  );
};
export default HomePage;
