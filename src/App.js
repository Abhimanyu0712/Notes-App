import React , {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Createnote from './Createnote';
import Note from './Note';
const App = () =>{
  const [addNote,setAddnote] = useState([]);

  const adnot = (note) =>{
    if(note.title!=="" && note.content!==""){
    setAddnote((prevData)=>{
      return[...prevData,note];
    })};
  }

  const onDelete = (id) =>{
     setAddnote((oldData)=>
      oldData.filter((curData,ind)=>{
        return ind!== id;
      })
     );
  };
   return(
    <>
      <Header/>
      <Createnote passNote = {adnot}/>
      {
    addNote.map((val,index)=>{
      return <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteNote = {onDelete}
        />
    })
  }
      <Footer/>
      
      
    </>
   )
} 
export default App;