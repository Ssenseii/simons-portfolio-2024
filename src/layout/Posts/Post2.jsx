/// Markdown Editor

import React from "react";
import Title from "../../components/Title";
import Image from "../../components/Image";
import { p21, p22, p23, p24, p25 } from "../../constants/Constants";

const Post2 = () => {
	return (
		<div id="post2" className="text-box">
			<Title> Seniop - Recruitment Mobile App</Title>
			<p>
				My agency took on a <span>full-scale project</span> : a mobile app, dashboard
				system, promotional website, and landing page.
			</p>

			<Image src={p21} caption={"SENIOP - Figma HI-FI Screens"} className="no-border"></Image>

			<p>
				The app was a Tinder-like recruitment platform connecting senior candidates and
				recruiters. Retired veterans could swipe to find consultancy or guidance
				opportunities. Our task was to <span>build and deploy</span> the app on both Apple
				Store and Google Play Store.
			</p>

			<Image src={p22} caption={"Login Screen - Account Type Picker Screen - Experience Adding Screen"}></Image>

			<p>
				I handled branding—logo, colors, typography, and brand language—and created an
				interactive Figma mockup for investor presentations and as a development guide.
				Later, I built the <span>Flutter frontend</span>, including all screens, animations,
				and a reusable design system.
			</p>

            <Image src={p23} caption={"Figma Design - Low Fidelity"} />
            <Image src={p24} caption={"Figma Design - High Fidelity"} />

			<p>
				It took two months to finalize the <span>Figma prototype</span> and another three
				months to build a complete Flutter frontend for backend integration.
			</p>

            <Image src={p25} caption={"Landing Page For Seniop (In Development...)"} />

			<p>
				Result: The app is still in development, but the project taught me a lot about
				<span> mobile app development </span> and the power of Flutter's flexibility.
			</p>

			<p>
				P.S: The landing page is made with <span>Carbon</span>
			</p>

			<p>
				Frontend Tech Stack: <span>Pure Flutter with Internal Styling</span>
			</p>
		</div>
	);
};

export default Post2;
