import React from 'react';

export default function note({element,notes,setNotes,setEditid}) {
    const removeHandler = (id)=>{
        const newNotes = notes.filter((elm)=>{
            if(elm.id!==id){
                return elm;
            }
        })
        setNotes(newNotes);
    }
    return (
        <>
            <div className="card bg-dark text-light bg-opacity-75 mx-auto my-2 w-100 border" style={{ width: "18rem" }}>
                <div className="card-body text-capitalize">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.desc}</p>
                    <button className="btn btn-danger" onClick={()=>{
                        removeHandler(element.id);
                    }}>Delete</button>
                </div>
            </div>
        </>
    )
}
