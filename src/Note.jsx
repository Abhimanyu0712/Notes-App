import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) =>{
   const delNote = ()=>{
    
    props.deleteNote(props.id);
   }
   return(
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <p>{props.noteDate}</p>
        <button className='btn' onClick={delNote}>
        <DeleteOutlineIcon className='deleteIcon'/>
        </button>
        
      </div>
    </>
   )
} 
export default Note;