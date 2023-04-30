import React from "react";
import "../App.css";

function Login() {

  return(
    <>
      <div className="login-container">
       <h1>Sign in to your account</h1>
       <form onSubmit={handleSubmit} className="login-form">
        <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            value={loginFormData.email}
        />
        <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
    </div>
   </>	

  );
}

export default Login;