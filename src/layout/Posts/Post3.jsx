/// simonsnotes

import React from "react";
import Title from "../../components/Title";
import Image from "../../components/Image";
import { p31, p32, p33 } from "../../constants/Constants";

const Post3 = () => {
	return (
		<div id="post3" className="text-box">
			<Title>
				Confidential Project #1: Revamping the UI for a Recrutement Management Platform
			</Title>

			<p>
				In May, I joined a team of full-stack developers to fix the broken UI of a
				recrutement management web app for a major client.
			</p>

			<Image src={p31} caption={"Revamped Main Dashboard Page"} />

			<p>
				The frontend was a mess—handled by backend developers without cohesion or structure
				across 150+ pages. As the only frontend specialist, my role was to bring order to
				the chaos.
			</p>

			<Image src={p32} caption={"Revamped Recrutement Page"} />

			<p>
				I designed a Figma-based design system for management approval, iterating through
				several versions until we landed on a cohesive, template-driven system. Then, I
				implemented the design across the project, added a new Light mode, and created
				investor presentation UIs for showcasing the final product.
			</p>

			<p>
				Over eight months, I built reusable templates, coordinated with backend developers
				to ensure functionality, and resolved countless custom UI challenges.
			</p>

			<Image
				src={p33}
				caption={
					"New KANBAN Board for managing candidats throughout the recrutement process"
				}
			/>

			<p>
				Result: The project is now being deployed. The client presentation was a success,
				with no complaints about the frontend.
			</p>

			<p>
				Frontend Tech Stack: <span>Laravel Blade with Pure CSS</span>
			</p>
		</div>
	);
};

export default Post3;
