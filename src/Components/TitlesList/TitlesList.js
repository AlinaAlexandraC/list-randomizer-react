import "./TitlesList.css";
import Title from "../Title/Title";
import { useEffect, useState } from "react";

const TitlesList = () => {
    const [titles, setTitles] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [inputError, setInputError] = useState("");
    const [editingTitlesIndex, setEditingTitlesIndex] = useState(null);
    const [editedTitleValue, setEditedTitleValue] = useState("");

    useEffect(() => {
        const storedTitles = JSON.parse(localStorage.getItem("titles"));
        if (storedTitles) {
            setTitles(storedTitles);
        }
    }, []);

    const addTitle = () => {
        if (inputValue === "") {
            setInputError("Title cannot be empty");
            setTimeout(() => {
                setInputError("");
            }, 3000);
            return;
        }

        const newTitle = { id: Date.now(), title: inputValue };

        const updatedTitles = [...titles, newTitle];
        setTitles(updatedTitles);
        localStorage.setItem("titles", JSON.stringify(updatedTitles));
        setInputError("");
        setInputValue("");
    };

    const handleKeyDown = (event) => {
        if (event.key == - "Enter") {
            addTitle();
        }
    };

    const removeTitle = (titleIndex) => {
        const updatedTitles = titles.filter((title, index) => index !== titleIndex);
        setTitles(updatedTitles);
        localStorage.setItem("titles", JSON.stringify(updatedTitles));
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const editTitle = (titleToEdit, index) => {
        setEditingTitlesIndex(index);
        setEditedTitleValue(titleToEdit.title);
    };

    const updateTitle = () => {
        if (editedTitleValue.trim() && editedTitleValue !== titles[editingTitlesIndex].title) {
            const updatedTitles = [...titles];

            updatedTitles[editingTitlesIndex].title = editedTitleValue;
            setTitles(updatedTitles);
            localStorage.setItem("titles", JSON.stringify(updatedTitles));
        }

        setEditingTitlesIndex(null);
        setEditedTitleValue("");
    };

    return (
        <div className="titles-list-admin-container">
            <div className="list-container">
                <div className="titles-list-input-bar">
                    <input type="text" className="titles-list-input" value={inputValue} placeholder="Add a title" onChange={handleInputChange} onKeyDown={handleKeyDown} spellCheck="false" />
                    <div className="titles-list-submit btn" onClick={addTitle}>
                        <div className="add-button-text">Add</div>
                    </div>
                </div>
                <label htmlFor="titles-list-input-bar" className="titles-list-input-bar-label">{inputError}</label>
                <div className="titles-list-container">
                    {titles.length > 0 && titles.map((title, index) => (
                        <Title key={index} index={index} title={title} removeTitle={removeTitle} editTitle={editTitle} isEditing={editingTitlesIndex === index} editedTitleValue={editedTitleValue} updateTitle={updateTitle} setEditedTitleValue={setEditedTitleValue} />
                    ))}
                </div>
                <div className="titles-list-length">Total Options: {titles.length}</div>
            </div>
        </div>
    );
};

export default TitlesList;