import React from "react";
import "./App.css";
//import NavBar from "./components/NavBar";
import Blogs from "./components/Blogs";
import BlogForm from "./components/BlogForm";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
	const initialState = [
		{
			id: 1,
			title: "Today",
			text: "Is a warm day",
			author: "Max",
			amount: "5",
		},
		{
			id: 2,
			title: "Tomorrow",
			text: "Will be warm",
			author: "Max",
			amount: "10",
		},
	];
	const [blogs, setBlogs] = useState(initialState);
	return (
		<div>
			{/* <NavBar /> */}
			<BlogForm setBlogsProps={setBlogs} blogsProps={blogs} />
			<Routes>
				<Route path="/" element={<Blogs blogsProps={blogs} />} />
				<Route
					path="/blog-form"
					element={<BlogForm setBlogsProps={setBlogs} />}
				/>
			</Routes>
		</div>
	);
}

export default App;

// mounting: when a component is first rendered
// updating: When a component re-renders when there's update in state or props
// unmounting: when a component is no used and taken away

// import "./App.css";
// import NavBar from "./components/NavBar";
// import Blogs from "./components/Blogs";
// import { useState } from "react";

// jsx mixture html, javascript, css
// App it the top layer of components
// all returns have to be in one set of tags
// import React, { Component } from "react";

// class App extends Component {
// 	state = {
// 		name: "",
// 	};
//   this.props
// 	render() {
// 		console.log(this);
// 		return <div></div>;
// 	}
// }

// function App() {
// 	const initialState = [
// 		{
// 			title: "Today",
// 			text: "Is a warm day",
// 			author: "Max",
// 		},
// 		{
// 			title: "Tomorrow",
// 			text: "Will be warm",
// 			author: "Max",
// 		},
// 	];
// 	const [blogs, setBlogs] = useState(initialState); //[variableName, function]
// 	const blogs = [
// 		{
// 			title: "Today",
// 			text: "Is a warm day",
// 			author: "Max",
// 		},
// 		{
// 			title: "Tomorrow",
// 			text: "Will be warm",
// 			author: "Max",
// 		},
// 	];
// 	const [name, setName] = useState("Ginny");
// 	const [age, setAge] = useState(34);
// 	const [selected, setSelected] = useState("hi");
// 	const handleNameChange = (event) => {
// 		if (event.target.name === "user-name") {
// 			console.log(event.target);
// 			setName(event.target.value);
// 		} else {
// 			console.log(event.target);
// 			console.log(event.target.value);
// 			setSelected(event.target.value);
// 		}
// 	};
// 	const handleOnClick = (e) => {
// 		console.log(e);
// 		console.log("hello");
// 	};
// 	return (
// 		<div className="App">
// 			<NavBar />
// 			<input
// 				type="text"
// 				value={name}
// 				name="user-name"
// 				onChange={handleNameChange}
// 			/>
// 			<select value={selected} onChange={handleNameChange}>
// 				<option value="hi">hi</option>
// 				<option value="hello">hello</option>
// 			</select>
// 			<button onClick={handleOnClick}>submit</button>
// 			{/**key value pair in props*/}
// 			<Blogs name={name} age={age} />
// 		</div>
// 	);
// }

// export default App;
