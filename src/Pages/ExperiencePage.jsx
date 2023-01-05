import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ExperienceCard from "../components/ExperienceCard";
import client from "../secrets";

const BORDER_PLACEHOLDER = "animate-pulse border-4 border-grey bg-grey rounded-lg";

const ExperiencePage = () => {
	const [loaded, setLoaded] = useState(false);
	const [data, setData] = useState([]);
	const [experienceData, setExperienceData] = useState([]);

	const sortExperienceData = (data) => {
		var sorted = [];
		var companies = {};

		data.forEach(item => {
			const companyName = item.fields.company;
			if (companyName in companies) {
				companies[companyName].position.unshift({
					title: item.fields.experience,
					duration: item.fields.date,
					location: item.fields.location 
				})
			} else {
				companies[companyName] = ({
					company: item.fields.company,
					imageURL: item.fields.headshot.fields.file.url,
					order: item.fields.order,
					position: [{
						title: item.fields.experience,
						duration: item.fields.date,
						location: item.fields.location
					}]
				});
			}
		});
		for (const company in companies) {
			sorted.push(companies[company]);
		};
		sorted.sort((a,b) => a.order > b.order);
		return sorted;
	}

	const getExperienceData = async() => {
		let response = await client.getEntries({
			content_type: 'topan'
		})
		setData(response.items);
	}

	useEffect(() => {
		getExperienceData();
	}, [])

	useEffect(() => {
		var sortedData = sortExperienceData(data);
		setExperienceData(sortedData);
		setLoaded(true);
	}, [data])

	const LoadingPage = () => {
		return (
			<>
				<div className={` ${BORDER_PLACEHOLDER} h-20 md:h-24 border-b-4`}></div>
				<div className={`${BORDER_PLACEHOLDER} mx-auto my-6 h-10 w-48 md:w-64 md:h-16`}></div>
					<div className="flex flex-row justify-center mt-10 space-x-12 md:space-x-[60rem]">
						<div className="flex flex-col">
							<div className={`${BORDER_PLACEHOLDER} w-16 h-6 md:w-28 md:h-18`}></div>
							<div className="flex flex-col justify-around border-l-4 border-grey pl-5 h-14 mt-5 md:h-24">
								<div className={`${BORDER_PLACEHOLDER} w-48 h-3 md:h-4 md:w-64`}></div>
								<div className={`${BORDER_PLACEHOLDER} w-36 h-3 md:h-4 md:w-48`}></div>
								<div className={`${BORDER_PLACEHOLDER} w-24 h-3 md:h-4 md:w-36`}></div>
							</div>
						</div>
						<div className={` ${BORDER_PLACEHOLDER} w-20 h-20 md:w-36 md:h-36`}></div>
					</div>
			</>
		);
	};

	const LoadedPage = () => {
		return (
			<>
				<Navbar />
				<div className="text-center">
					<h1 className="font-Raleway text-3xl md:text-5xl font-bold mt-10 ">
						Experience
					</h1>
					<ExperienceCard data={experienceData}/>
				</div>
    	</>
		);
	};

  return (
		loaded ? LoadedPage() : LoadingPage()
  );
};
export default ExperiencePage;
