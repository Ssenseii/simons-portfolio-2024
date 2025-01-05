import React from "react";
import Title from "../components/Title";
import Index from "../components/Index";

const Contents = () => {
	return (
		<div className="text-box">
			<Title>Table Of Contents</Title>
			<Index
				id="1"
				title={"Carbon - Website Builder"}
				detail={"Shortcodes Website Builder By BlueBooks Solutions"}
			/>
			<Index
				id="2"
				title={"Seniop - Recruitment Mobile App"}
				detail={"Tinder-Like Mobile App For Recruiting Seniors"}
			/>
			<Index id="3" title={"Confidential #1"} detail={"Payment Management Platform"} />
			<Index id="4" title={"Confidential #2"} detail={"Workplace Safety Testing Portal"} />
			<Index id="5" title={"Confidential #3"} detail={"Recruitment and Hiring Platform"} />
			<Index id="6" title={"Personal Apps"} detail={"Invoicer, Yves, Flashio, and More..."} />
			<Index
				id="7"
				title={"Websites: Landing, Sales, and Commercial..."}
				detail={"From design work to development..."}
			/>
			<Index id="8" title={"Old Portfolios..."} detail={"Work from years bygone... "} />
		</div>
	);
};

export default Contents;
