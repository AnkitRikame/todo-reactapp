import React, { useState } from 'react';

function AddTodo(props) {

	// This is the useSate for the title desc .......
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");


	const submit =(e) =>{
		e.preventDefault();
		if(!title || !desc ){
			alert("Title or desc cannot be blanked");
		}
		else{
			props.addTodo(title,desc);
			setTitle("");
			setDesc("");
		}
	}

	return (
		<div className="container my-3">
			<h3>Add a Todo</h3>
			<form onSubmit = {submit} >
			<div className="mb-3">
				<label htmlFor="title" className="form-title">Title <span style={{color:"red"}}>*</span> </label>
				<input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
			</div>
			<div className="mb-3">
				<label htmlFor="desc" className="form-desc">Password <span style={{color:"red"}}>*</span> </label>
				<input type="text" className="form-control" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)}/>
			</div>
			<button type="submit" className="btn btn-sm btn-success" style={{padding:"5px 40px"}}>Add</button>
			</form>
		</div>
	);
}

export default AddTodo;
