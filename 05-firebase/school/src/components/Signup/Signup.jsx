import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../context/AuthContext";
import styles from "./Signup.module.css";

const Signup = () => {
	const { register, currentUser } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email")
    const pwd = formData.get("password")
    const cpwd = formData.get("confirm_password")

    if (pwd !== cpwd) {
      alert("Passwords do not match!")
      return;
    }

    try {
      await register(email, pwd)
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (currentUser) navigate("/");
  }, [currentUser, navigate])

	return (
		<div className={styles.signup__wrapper}>
			<form onSubmit={handleSubmit}>
				<h2>Sign Up</h2>
				<label>
					Email
					<input type="email" name="email" id="email" />
				</label>
				<label>
					Password
					<input type="password" name="password" id="password" />
				</label>
				<label>
					Confirm password
					<input
						type="password"
						name="confirm_password"
						id="confirm_password"
					/>
				</label>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default Signup;
