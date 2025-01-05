/// Low Poly Laboratory

import React from "react";
import Title from "../../components/Title";
import Image from "../../components/Image";
import Website from "../../components/Website";

import {
	p11,
	p110,
	p111,
	p112,
	p12,
	p13,
	p14,
	p15,
	p16,
	p17,
	p18,
	p19,
} from "../../constants/Constants";

const Post1 = () => {
	return (
		<div id="post1" className="text-box">
			<Title>Carbon - Website Builder</Title>

			<p>
				This year, I worked with a backend developer to create a custom website builder for
				our agency.
			</p>

			<Website src={p11} caption={"Carbon X - Notion Documentation"}></Website>

			<Website src={p12} caption={"HI-FI Dashboard Design for Carbon-X"}></Website>

			<p>
				We faced growing demands for custom websites like e-commerce platforms and
				recruitment portals. Existing solutions were either too expensive or lacked the
				flexibility we needed, and support was unreliable.
			</p>
			<p>
				We decided to create a <span>reusable shortcode-based builder</span> . The admin
				dashboard let me design sections (hero, contact, blog) and full pages, while the
				backend handled logic and style pickers. Each section featured multiple styles for
				maximum customization.
			</p>

			<p>Here are a few pages from the initial figma design...</p>

			<Image src={p15} caption={"Carbon Admin Dashboard - Login Page"}></Image>
			<Image src={p13} caption={"Carbon Admin Dashboard - WebPage Listing"}></Image>
			<Image src={p14} caption={"Carbon Admin Dashboard - WebPage Creation"}></Image>
			<Image
				src={p16}
				caption={"Carbon Admin Dashboard - Dynamic Product Categories"}
			></Image>

			<p>
				We started with two jobs—a commercial website and a sales platform—which allowed us
				to build two full sets of styles. Over three months,{" "}
				<span>
					{" "}
					I designed layouts, dashboards, color systems, and 168+ shortcode styles
				</span>
				. My backend teammate handled deployment pipelines and shortcode logic.
			</p>

			<Image src={p17} caption={"Shortcode Designs for Carbon 3.0"}></Image>

			<p>
				Result? We reduced project timelines from weeks to just <span>3 days !!!</span> for
				fully dynamic websites, complete with features like Excel-based product imports.
			</p>

			<p>Here are some websites made with carbon:</p>

			<Image src={p18} caption={"GreenStorage.ma - Hero + Header"}></Image>

			<Image src={p19} caption={"newdoors.ma - Contact Page"}></Image>

			<Image src={p110} caption={"mobi-nardo.ma - Hero Section"}></Image>

			<Image src={p111} caption={"wirenext.ma - About Section"}></Image>

			<Image src={p112} caption={"samp.ma - Projects Page"}></Image>

			<p>
				Carbon is in constant development, and always will be as long as demand for websites
				grows...
			</p>

			<p>
				Frontend Tech Stack: <span>Laravel Blade + SCSS</span>
			</p>
		</div>
	);
};

export default Post1;
