import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useAuth();

	const navigate = useNavigate();

	const handleSubmit = async () => {
		const userData = {
			email: email,
			password: password,
		};
		const loginResult = await login(userData);
		if (loginResult) {
			navigate("/");
		} else {
			navigate("/register");
		}
	};
	return (
        <div>
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)} 
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)} 
                />
                <button onClick={handleSubmit}>Register</button>
            </form>
        </div>
      </div>
    );
  }