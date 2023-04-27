import React from "react";
import BlogsCard from "./BlogsCard";
import { useState } from "react";
function Blogs(props) {
	//console.log(props);
	return (
		<div>
			<h1>Blogs</h1>
			{/* <h2>{props.name}</h2> */}
			{props.blogsProps.map((blog) => {
				return <BlogsCard key={blog.id} blog={blog} />;
			})}
		</div>
	);
}

export default Blogs;