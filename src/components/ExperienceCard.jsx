import React, {useEffect, useState} from "react";
import client from "../secrets";

const ExperienceCard = () => {
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
		sorted.sort((a,b) => a.order > b.order)
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
	}, [data])
	
  return (
    <>
      <ul>
        {experienceData.map((data) => (
          <li
            key={data.order}
            className="flex flex-row-reverse text-left my-10 
														justify-center"
          >
            <img src={data.imageURL} className="w-24 h-24 md:w-36 md:h-36" />
            <div className="flex flex-col font-Raleway pr-24 w-64 md:w-1/2">
              <h2 className="text-lg font-bold md:text-2xl w-36 md:w-64">{data.company}</h2>
              {data.position.map((position) => (
                <div
                  key={position.title}
                  className="text-xs border-l-2 pl-3 my-3 border-secondary
													md:text-lg"
                >
                  <p>{position.title}</p>
                  <p className="text-dark">{position.duration}</p>
                  <p className="text-dark">{position.location}</p>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ExperienceCard;
