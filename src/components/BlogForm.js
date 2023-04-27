import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogForm(props) {
	const [titleInput, setTitleInput] = useState("");
	const [textInput, setTextInput] = useState("");
	const [authorInput, setAuthorInput] = useState("");

	const navigate = useNavigate();

	console.log(props);
	const handleOnSubmit = (e) => {
		const newBlog = {
			title: titleInput,
			text: textInput,
			author: authorInput,
		};
		// const newArray = [...props.blogsProps, newBlog];
		e.preventDefault();
		props.setBlogsProps((prevState) => [
			...prevState,
			{ ...newBlog, id: prevState.length + 1 },
		]);
		setTitleInput("");
		setTextInput("");
		setAuthorInput("");
		navigate("/");
		//props.setBlogsProps([...props.blogsProps, newBlog])
		//function getInfo(callback){}
		//getInfo(handleOnSubmit)
	};

	return (
	  <>
		<div>
			<form onSubmit={handleOnSubmit}>
			    <label>Title:</label>
				<input
					type="text"
					value={titleInput}
					name="title"
					onChange={(e) => {
						setTitleInput(e.target.value);
					}}
				/>
				<br />
				<label>Text:</label>
				<input
					type="text"
					value={textInput}
					name="text"
					onChange={(e) => {
						setTextInput(e.target.value);
					}}
				/>
				<br />
				<label>Author:</label>
				<input
					type="text"
					value={authorInput}
					name="author"
					onChange={(e) => {
						setAuthorInput(e.target.value);
					}}
				/>
				<br />
				<label>Amount</label>
				<input
					type="text"
					value={authorInput}
					name="amount"
					onChange={(e) => {
						setAuthorInput(e.target.value);
					}}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	  </>	
	);
}

export default BlogForm;