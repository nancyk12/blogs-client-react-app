import React from "react";
function BlogsCard(props) {
	console.log("blogs card", props);
	return (
		<div>
			<h3>{props.blog.title}</h3>
			<p>{props.blog.text}</p>
			<p>author: {props.blog.author}</p>
			<p>{props.blog.amount}</p>
		</div>
	);
}

export default BlogsCard;
