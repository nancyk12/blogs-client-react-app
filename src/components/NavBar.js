import { Link } from "react-router-dom";
function NavBar() {
	return (
	  <header>
		<nav>
			<Link to="/">Home</Link>
			{"    "}
			<Link to="/blog-form">Create New Blog</Link>
			{"    "}
			<Link to="/register">Register</Link>
			{"    "}
			<Link to="/login">Login</Link>
		</nav>
	 </header>
	);
}
//es6 syntax
export default NavBar;
//module.exports es5 syntax