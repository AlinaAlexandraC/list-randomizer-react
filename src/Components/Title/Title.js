import "./Title.css";
import deleteTitleIcon from "../../images/delete.svg";
import editTitleIcon from "../../images/edit.svg";
import saveTitleIcon from "../../images/save.svg";

const Title = ({ index, title, removeTitle, editTitle, isEditing, editedTitleValue, updateTitle, setEditedTitleValue }) => {
    return (
        <div className="title-container">
            <div className="title-number">{index + 1}</div>
            {isEditing ? (
                <input type="text" className="input-edit" value={editedTitleValue} onChange={(e) => setEditedTitleValue(e.target.value)} spellCheck="false" />
            ) : (
                <div className={`title-name-${index}`}>{title.title}</div>
            )}
            <div className="buttons">
                {isEditing ? (
                    <div className="save-title" onClick={updateTitle}>
                        <img src={saveTitleIcon} alt="save" className="save-title-icon" />
                    </div>
                ) : (
                    <div className="edit-title" onClick={() => editTitle(title, index)}>
                        <img src={editTitleIcon} alt="edit" className="edit-title-icon" />
                    </div>
                )}
                <div className="delete-title" onClick={() => removeTitle(index)}>
                    <img src={deleteTitleIcon} alt="delete" className="delete-title-icon" />
                </div>
            </div>
        </div>
    );
};

export default Title;