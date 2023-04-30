import React from "react";
import axios from "axios";


function BlogsCard(props) {
	const url = "http://localhost:5001";

	const handleDelete = async(id) => {
		props.setShouldRefresh(true);
		const response = await axios.delete(`${url}/blogs/delete-by-id/${id}`);
		props.setShouldRefresh(false);
	}


	console.log("blogs card", props);
	return (
	  <section>	
		<div div className="blog-link-wrapper">
		  <div className="blog-single"> 
		    <img src="images/pet-photo-shoot.jpeg" alt="blog"/>	
			<div className="blog-info">
				<h3>{props.blog.title}</h3>
				<p>{props.blog.text}</p>
				<p>author: {props.blog.author}</p>
				<p>{props.blog.category}</p>
				<button onClick={() => handleDelete(props.blog.id)}>Delete Blog</button>
			</div>	
		  </div>		
		</div>
	  </section>
	);
}

export default BlogsCard;

