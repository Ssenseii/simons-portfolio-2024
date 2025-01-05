import React from "react";
import Title from "../../components/Title";

import { iconLeaf, p51, p52, p53, p54 } from "../../constants/Constants";
import Image from "../../components/Image";

const Post5 = () => {
	return (
		<div id="post5" className="text-box">
			<Title>
				Confidential Project #4: Redesign for a Recruitment and Onboarding Platform
			</Title>

			<p>
				Alongside my work on the safety testing app, I tackled the{" "}
				<span>redesign of a recruitment platform </span> that manages candidates through the
				hiring lifecycle and handles invoicing for services.
			</p>

			<Image src={p51} caption={"Iteration 1"} />

			<p>
				The client tasked me with <span>reimagining the entire platform</span> — new layouts
				, colors, typography, and overall design language.
			</p>

			<Image src={p52} caption={"Iteration 2"} />

			<Image src={p53} caption={"Iteration 3"} />

			<p>
				Action: I created <span>nearly 20 mockups in Figma</span> , exploring various
				directions for the redesign. However, after thorough analysis, I concluded that
				building upon the existing design base was more efficient and aligned with project
				goals.
			</p>

			<Image src={p54} caption={"Iteration 4"} />
			<p>
				Frontend Tech Stack: Figma for Design Prototyping Existing Design System Refinements
			</p>

			{/* <p>
                As I continue to grow and learn, I try my best to participate in
                challenges, do community work, or freelance to support myself
                while I'm growing.
            </p>

            <p>
                Here are <span>Some of my favorite</span> works and designs (out
                of 78):
            </p>

            <div className="text-box_display">
                {iconLeaf}
                <h3>DanDaDan</h3>
            </div>
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web4.png"
                }
                caption={"DanDaDan - Slide"}
            />

            <div className="text-box_display">
                {iconLeaf}
                <h3>Dravida - Art E-Store</h3>
            </div>
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web5.png"
                }
                caption={"Dravida - Landing Page"}
            />

            <div className="text-box_display">
                {iconLeaf}
                <h3>HI-Success - Study Abroad Agency</h3>
            </div>
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web6.png"
                }
                caption={"Hi-Success - 2021 Design"}
            />
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web7.png"
                }
                caption={"Hi-Success - 2022 Re-Design"}
            />

            <div className="text-box_display">
                {iconLeaf}
                <a
                    href="https://ssenseii.github.io/I.bit/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Ibit- Puzzle Game
                </a>
            </div>
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web8.png"
                }
                caption={"Ibit - Slide #1: Journal Article"}
            />
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web26.png"
                }
                caption={"Ibit - Slide #4: Phone Conversation"}
            />
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web27.png"
                }
                caption={"Ibit - Slide #6: Choices Tree"}
            />

            <div className="text-box_display">
                {iconLeaf}
                <h3>Inktober 2023</h3>
            </div>
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web9.png"
                }
                caption={"Inktober 2023 - Landing Page"}
            />

            <div className="text-box_display">
                {iconLeaf}
                <h3>Instagram x Microsoft Fluent Design System</h3>
            </div>
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web10.png"
                }
                caption={
                    "Recreation of Instagram using Microsoft's Design System"
                }
            />

            <div className="text-box_display">
                {iconLeaf}
                <a
                    href="https://overclocker.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Overclocker: Community Gift
                </a>
            </div>
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web14.png"
                }
                caption={
                    "Keep track of your 'Deep Rock Galactic' obtained overclocks"
                }
            />

            <div className="text-box_display">
                {iconLeaf}
                <a
                    href="https://pixel-notes.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Pixel Notes
                </a>
            </div>
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web15.png"
                }
                caption={
                    "Website made entirely with pixel-art, live on vercel, with firebase Auth and storage"
                }
            />

            <div className="text-box_display">
                {iconLeaf}
                <a
                    href="https://simonslab.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Simon's Lab
                </a>
            </div>
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web18.png"
                }
                caption={"Simon's Lab - Landing Page"}
            />
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web19.png"
                }
                caption={"Simon's Lab - Dynamic Color Scheme"}
            />
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web21.png"
                }
                caption={"Simon's Lab - Project Info Screen"}
            />

            <div className="text-box_display">
                {iconLeaf}
                <h3>Tsuki - Note Taking App</h3>
            </div>
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web24.png"
                }
                caption={"Tsuki - Landing Page"}
            />
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web23.png"
                }
                caption={"Tsuki - Editor"}
            />
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web25.png"
                }
                caption={"Tsuki - Neumorphism + Dynamic Color"}
            />

            <div className="text-box_display">
                {iconLeaf}
                <h3>Simon's Gallery</h3>
            </div>
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web28.png"
                }
                caption={"Simon's Gallery - Landing Page"}
            />
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web29.png"
                }
                caption={"Simon's Gallery - Bottom Page"}
            />

            <div className="text-box_display">
                {iconLeaf}
                <h3>Random Ones</h3>
            </div>
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web1.png"
                }
                caption={"Achraf Kine - Main Page"}
            />
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web2.png"
                }
                caption={"Achraf Kine - About Page"}
            />
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web3.png"
                }
                caption={"Achraf Kine - Contact Page"}
            />
            <Website
                src={
                    "https://g-host-iiiing.sirv.com/portfolio/webpages/web3.png"
                }
                caption={"Lapin Mockup - Sign In & Sign Up"}
            /> */}
		</div>
	);
};

export default Post5;
