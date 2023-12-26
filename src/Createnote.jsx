import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Createnote = (props) =>{
    const [expand,setExpand] = useState(false);
    const [note,setNote] = useState({
        title:'',
        content:'',
    });
    
    const inputEvent = (event)=>{
        const value = event.target.value;
        const name = event.target.name;

       setNote((prevVal)=>{
        return {
            ...prevVal,
            [name]:value,
        }
       })
    }
    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        });
    };
    
    const expandIt = ()=>{
        setExpand(true);
    }
   return(
    <>
     <div className="main_note">
        <form>
           {expand?
            <input 
            type="text" 
            placeholder='Title'
             autoComplete='off' 
             name='title'
             onChange={inputEvent} 
             value={note.title}
             /> : null}
             
            <textarea rows=""
             column="" 
             placeholder='Write a new note...'
              name='content'
              onChange={inputEvent} 
              value={note.content}
              onClick={expandIt}>
              </textarea>
              {expand?
            <Button onClick={addEvent}>
                <AddIcon className='plus_sign'/>
            </Button> : null}
        </form>
     </div>
    </>
   )
   
} 

export default Createnote;