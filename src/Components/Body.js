import React, { useState } from 'react';
import "./Body.css";
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Body = ({passNote}) => {

    const [expand, setExpand]=useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleChange=(e)=>{
        const {name, value} = e.target;

        setNote((prevData)=>{
          return {
            ...prevData,
            [name]: value,
          }
        })
    }

    const submitBtn=()=>{
       passNote(note);
       setNote({
        title: "",
        content: ""
    })
    }

    const expandIt = ()=>{
        setExpand(true);
    }
    const backtoNormal=()=>{
        setExpand(false);
    }

    return (
        <div className="body" onDoubleClick={backtoNormal}>
            <div className="form">
                {expand?<input onChange={handleChange} value={note.title} name="title" placeholder="Title" type="text" autoComplete="off"/>:null}
                <p>
                    <textarea onChange={handleChange} value={note.content} name="content" cols="4" rows="6" placeholder="Take a note..." onClick={expandIt}></textarea>
                </p>
                {expand?<button onClick={submitBtn} className="addBtn">
                   <AddCircleIcon style={{fill: "#ffc812", fontSize: 40 }}/>
                </button>:null}
              
            </div>
        </div>
    )
}

export default Body;
