import "../App.css";
import { useState } from "react";
import { registerUser } from "../Auth/authUtils";
import { useNavigate } from "react-router-dom";

export default function Registration() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("user");

	const navigate = useNavigate();

	const handleSubmit = async () => {
		const newUser = {
			email: email,
			password: password,
			role: role,
		};
		const registerResult = await registerUser(newUser);
		if (registerResult) {
			navigate("/");
		}
	};

    return(
      <div>
        <div className="login-container">
            <h1>Registration Page</h1>
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
    )
}