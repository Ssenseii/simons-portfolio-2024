import React from "react";
import Title from "../../components/Title";
import Image from "../../components/Image";
import { p41, p42, p43, p44, p45 } from "../../constants/Constants";

const Post4 = () => {
	return (
		<div id="post4" className="text-box">
			<Title>Confidential Project #2: Workplace Safety Testing Application</Title>

			<p>
				Last month, I started working on a <span> web app dashboard </span> designed to test
				employees on workplace safety, targeting industrial workers and hands-on engineers.
			</p>

			<Image src={p41} caption={"Instructions Page for the Quiz"} />

			<p>
				The client needed software with modern technology and scalability, and I was given
				full control over the design, only requiring minimal approvals from the board of
				directors.
			</p>

			<Image src={p42} caption={"Center of Resources for the platform"} />

			<p>
				I began by creating wireframes and HIFI key pages in Figma, focusing on a{" "}
				<span>sleek, modern look.</span> Once approved, I moved to the frontend, developing
				custom components and a robust grid layout system.
			</p>

			<Image src={p43} caption={"Users Management Listing Page"} />

			<Image src={p44} caption={"Adding a new user..."} />

			<p>
				Result: Sprint reviews have been met with <span> consistent approval</span>. My
				favorite component so far is the table, which supports bulk actions, searching,
				pagination, and filters. It’s scalable, plug-and-play, and will be reused in future
				projects. Plans are underway to enhance it further with dynamic animations using
				"motion."
			</p>

			<Image src={p45} caption={"Email Templates Page"} />

			<p>Frontend Tech Stack: React and SCSS</p>
		</div>
	);
};

export default Post4;
