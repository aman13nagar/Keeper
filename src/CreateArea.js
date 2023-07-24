import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
    const [isexpend,setisexpend]=useState(false);
    const[note,setnote]=useState({
        title:"",
        content:""
    });
    function handleChange(event){
        const{name,value}=event.target;
        setnote((prevnote=>{
            return {
                ...prevnote,
                [name]:value
            }
        }))
    }
    function SubmitNote(event){
        props.onadd(note);
        setnote({
            title:"",
            content:""
        })
        event.preventDefault();
    }
    function expand(){
        setisexpend(true);
    }
  return (
    <div>
      <form className="create-note">
        {isexpend?<input 
        name="title" 
        onChange={handleChange}
        value={note.title}
        placeholder="Title" />:null}
        <textarea 
        name="content" 
        onClick={expand}
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..." 
        rows={isexpend?3:1} />
        <Zoom in ={isexpend}><Fab onClick={SubmitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
