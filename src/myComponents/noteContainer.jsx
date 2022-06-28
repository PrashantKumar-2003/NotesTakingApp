import React from 'react';
import Note from './note';
export default function noteContainer(props) {
  return (
    <>
    {props.notes.length === 0?<div className="container-fluid bg-dark bg-opacity-75 mt-3 border-top d-flex" style={{minHeight:"calc(100vh - 430px)"}}>
        <p className="fs-1 text-light fw-bold h-50 my-auto mx-auto">Nothing here to show</p>
    </div>:props.notes.map((element)=>{
        return(<div className="container">
        <Note element={element} key={element.id} notes={props.notes} setNotes={props.setNotes} setEditid={props.setEditid}/>
        </div>)
    })
    }
    </>
  )
}
