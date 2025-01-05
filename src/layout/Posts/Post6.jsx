/// Art, Writing and Programming

import React from "react";
import Title from "../../components/Title";

// import { dbr_1, dbr_2, dbr_3, dbr_4, art_0 } from "../../constants/Constants";
import Image from "../../components/Image";
import { iconLeaf } from "../../constants/Constants";

import {
	p61,
	p610,
	p611,
	p612,
	p613,
	p62,
	p63,
	p64,
	p65,
	p66,
	p67,
	p68,
	p69,
} from "../../constants/Constants";

const Post6 = () => {
	return (
		<div id="post6" className="text-box">
			<Title>Personal Apps (Fullstack)</Title>

			<div className="text-box_display">
				{iconLeaf}
				<h3>Byte-Size Enterprise: Invoicer</h3>
			</div>

			<p>
				Part of my "applications under 2MB" collection, Invoicer is a{" "}
				<span> lightweight invoice generator</span> that stores and saves invoices
				long-term. It allows users to generate and edit receipts and invoices for clients
				effortlessly, with additional features for exporting and data safety.
			</p>

			<Image src={p61} caption={"Invoicer - Listing Page"}></Image>
			<Image src={p62} caption={"Invoicer - Create an Invoice"}></Image>

			<div className="text-box_display">
				{iconLeaf}
				<h3>Yves - Moroccan Parties Finder</h3>
			</div>

			<p>
				A social platform where users can create accounts, RSVP to or host parties in their
				area, and participate in a rating system. YVES also supports profile customization
				and includes <span>sponsored party options</span> for promotions.
			</p>

			<Image src={p66} caption={"Yves - Home Screen / Parties Listing"}></Image>
			<Image src={p63} caption={"Yves - Create a Party"}></Image>
			<Image src={p64} caption={"Yves - Profile Comments"}></Image>
			<Image src={p65} caption={"Yves - Different Input Types + Footer"}></Image>

			<div className="text-box_display">
				{iconLeaf}
				<h3>AI Cover Letter Generator - Moroccan Parties Finder</h3>
			</div>

			<p>
				A single-page app where users input their details and job postings to generate
				custom AI-generated cover letters. While effective, it currently struggles with
				accurately adding contact information, as it's built using Google's AI Pilot.
			</p>

			<Image src={p67} caption={"AI Cover Letter - Main App"}></Image>

			<div className="text-box_display">
				{iconLeaf}
				<h3>Flashio (Current Project)</h3>
			</div>

			<p>
				A flashcard app with a minimalist UI, allowing users to create, share, and study
				flashcards. Features include card editing and collaboration, aimed at enhancing
				learning efficiency.
			</p>

			<Image src={p69} caption={"Flashio - Cards Listing Dashboard"}></Image>
			<Image src={p68} caption={"Flashio - Create Flashcards"}></Image>
			<Image src={p610} caption={"Flashio - Creation of Flashcards"}></Image>
			<Image src={p611} caption={"Flashio - Running Flashcards (Question)"}></Image>
			<Image
				src={p612}
				caption={"Flashio - Running Flashcards (Answer after clicking on it)"}
			></Image>
			<Image src={p613} caption={"Flashio - Account Settings and Preferences"}></Image>
		</div>
	);
};

export default Post6;
