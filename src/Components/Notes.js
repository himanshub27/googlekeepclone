import React from 'react';
import "./Notes.css";
import DeleteIcon from '@material-ui/icons/Delete';

const Notes = (props) => {

    const delNote=()=>{
      props.deleteItem(props.id);
    }

    return (
        <div className="allNotes">
        <div className="notes">
            <h3><strong>{props.title}</strong></h3>
            <p> {props.content}</p>
            <button onClick={delNote} className="delBtn">
             <DeleteIcon style={{fill: "#ff003c" }}/>
            </button>
        </div>
        </div>
    )
}

export default Notes;
