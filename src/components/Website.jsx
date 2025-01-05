import React from "react";

const Website = ({ src, caption }) => {
    return (
        <div className="webpage">
            <img src={src} alt="website.png" />
            <figcaption>{caption}</figcaption>
        </div>
    );
};

export default Website;
