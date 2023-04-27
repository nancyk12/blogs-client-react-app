import React from "react";
import { link } from "react-router-dom";

function NavBar() {
    return (
        
<nav>
  <Link to="/"> Home </Link>
  {" "}
  <Link to="/blog-form"> Create New Blog </Link>
</nav>


       
    );
}

export default NavBar;