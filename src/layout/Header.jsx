import React, { useState, useEffect } from "react";

import {
    iconCV,
    iconTheme,
    iconBackToTop,
    iconLinkedIn
} from "../constants/Constants";

import CV from "../assets/downloadable/Aboussabr Saad - Frontend Engineer - UI-UX Designer.pdf";

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [theme, setTheme] = useState(false);

    if (theme) {
        document.documentElement.style.setProperty("--primary", "#0d070c");
        document.documentElement.style.setProperty("--secondary", "#dcd9d9");
        document.documentElement.style.setProperty("--accent", "#e41e1c");
    } else {
        document.documentElement.style.setProperty("--primary", "#FBFBFC");
        document.documentElement.style.setProperty("--secondary", "#353637");
        document.documentElement.style.setProperty("--accent", "#e11e3f");
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const currentScrollPos = window.scrollY;
            if (prevScrollPos > currentScrollPos) {
                document.getElementById("header").style.top = "0";
            } else {
                document.getElementById("header").style.top = "-4rem";
            }
            setPrevScrollPos(currentScrollPos);
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    });

    return (
        <header id="header" className="header">
            <button title="Resumé - CV" className="header__action">
                <a href={CV} download>
                    {iconCV}
                </a>
            </button>
            <button title="LinkedIn" className="header__action">
                <a
                    href="https://www.linkedin.com/in/saadaboussabr/"
                    target="_blank"
                    rel="noreferrer"
                >
                    {iconLinkedIn}
                </a>
            </button>
            <button
                title="Scroll Back To Top"
                className="header__action"
                onClick={() => {
                    document.documentElement.scrollTop = 0;
                }}
            >
                {iconBackToTop}
            </button>
            <button
                title="Theme"
                className="header__action"
                onClick={() => {
                    setTheme(!theme);
                }}
            >
                {iconTheme}
            </button>
        </header>
    );
};

export default Header;
