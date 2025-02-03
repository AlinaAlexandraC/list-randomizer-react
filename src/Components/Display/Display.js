import { useState } from "react";
import "./Display.css";

const Display = () => {
    const [pickedTitle, setPickedTitle] = useState("-");

    const randomizeTitle = () => {
        const storedTitles = JSON.parse(localStorage.getItem("titles"));
        const randomTitle = Math.floor(Math.random() * (storedTitles.length));
        const pickedTitle = storedTitles[randomTitle].title;
        setPickedTitle(pickedTitle);
    };

    return (
        <div className="display-container">
            <div className="display-title">
                The internet chose this title:
            </div>
            <div className="anime-title-container">
            </div>
            <div className="anime-title">{pickedTitle}</div>
            <div className="get-title-button btn" onClick={randomizeTitle}>Get Title</div>
        </div>
    );
};

export default Display;