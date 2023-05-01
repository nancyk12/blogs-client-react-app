import React from "react";
import "./App.css";
import axios from "axios"; // axios is a 3rd party library that helps us with api calls
import NavBar from "./components/NavBar";
import Blogs from "./components/Blogs";
import BlogForm from "./components/BlogForm";
import EditBlog from "./components/EditBlog";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import PrivatePage from "./pages/PrivatePage"
import { Route, Routes } from "react-router-dom";


function App() {
	const [blogs, setBlogs] = useState([]);
	const [shouldRefresh, setShouldRefresh] = useState(false);

	const url = "http://localhost:5001"
	//useEffect first argument, takes in an anonymous callback function, second argument, dependency array
	useEffect(() => {
		const fetchData = async () =>{
		// fetch('url', {method: "POST"})
		//axios will parase the response from our backend back to us so we don't need response.json()
		   const response = await axios.get(`${url}/blogs/all-blogs`);
		   if (response.data.success) {
			setBlogs(response.data.blogs);
		   }
		}
		fetchData();
	}, [shouldRefresh])


	return (
		<div>
			<NavBar />
			{/* <BlogForm setBlogsProps={setBlogs} blogsProps={blogs} /> */}
			<Routes>
			<Route path="/" element={<PrivatePage />}>		
				<Route 
				   index
				   element={
					 <Blogs 
						blogsProps={blogs}
						setShouldRefreshProps={setShouldRefresh}
					 />
			      }
			   />
				<Route
					path="/blog-form"
					element={
						<BlogForm 
							setBlogsProps={setBlogs} 
							setShouldRefreshProps={setShouldRefresh}
					/>
					}
				/>
				<Route 
					path="/edit-blog/:id" 
					element={
					     <EditBlog	
							blogsProps={blogs}
							setShouldRefreshProps={setShouldRefresh}
				    	/>
					}
				/>
				</Route>
				<Route path="/register" element={<Registration />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;

