import React from 'react';

export default function noteAdder(props) {
    
    return (
        <>
            <div className="container border rounded bg-dark bg-opacity-75 my-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label text-light">Note's Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" onChange={props.inputHandler} value={props.title}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label text-light">Note's Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={props.desc} onChange={props.inputHandler}></textarea>
                    </div>
                    <div className="mb-3">
                    <button type="submit" className="btn btn-primary me-3" onClick={props.addNotesHandler}>Submit</button>
                    <button type="reset" className="btn btn-danger" onClick={props.resetHandler}>Reset</button>
                    </div>
                </form>
            </div>
        </>
    )
}
