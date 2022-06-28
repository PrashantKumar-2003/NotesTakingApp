import './App.css';
import { useState } from 'react';
import Navbar from './myComponents/navbar';
import NoteAdder from './myComponents/noteAdder';
import NoteContainer from './myComponents/noteContainer';

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState(""); 
  const [notes, setNotes] = useState(getNotesFromLS);

  // input Handler
  const inputHandler = (e) => {
    if (e.target.id === "exampleFormControlInput1") {
      setTitle(e.target.value);
    }
    else{
      setDesc(e.target.value);
    }
  }

  // Note Handler
  localStorage.setItem("notes",JSON.stringify(notes))
  const addNotesHandler = (e)=>{
    e.preventDefault();
    if(title!== "" && desc!==""){
    setNotes( note => {
        return([...note,{
            title: title,
            desc: desc,
            id: new Date().getTime()
        }])
    })}
    setTitle("");
    setDesc("");
}
const resetHandler = (e)=>{
  e.preventDefault();
  setTitle("");
setDesc("");
}
  return (
    <>
      <Navbar />
      <NoteAdder title={title} settitle={setTitle} desc={desc} setDesc={setDesc} inputHandler={inputHandler} notes={notes} setNotes={setNotes} addNotesHandler={addNotesHandler} resetHandler={resetHandler}/>
      <NoteContainer notes={notes} setNotes={setNotes}/>
    </>
  );
  function getNotesFromLS() {
    const note = JSON.parse(localStorage.getItem("notes"));
    if(note){
      return note
    }
    else{
      return[];
    }
  }
}

export default App;
