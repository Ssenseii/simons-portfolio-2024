import React from "react";

const Image = ({src, caption, className=""}) => {
    return (
        <div className={`webpage ${className}`}>
            <img src={src} alt="alternate.png" />
            <figcaption>{caption}</figcaption>
        </div>
    );
};

export default Image;
