import React, { useEffect } from "react";
import useAuth from "../../context/AuthContext";
import styles from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
	const { loginWithGoogle, login, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // const email = e.target.email.value;
    // const pwd = e.target.password.value;

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const pwd = formData.get("password");

    try {
      await login(email, pwd);
    } catch (e) {
      console.error(e); // Mozna uzyć toastify
    }

    e.currentTarget.reset();
  }

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate])

	return (
		<div className={styles.spa__container}>
			<article className={styles.login}>
				<h2>Login</h2>
				<form onSubmit={handleSubmit} className={styles.form}>
					<label>
						Email
						<input type="email" name="email" id="email" />
					</label>
					<label>
						Password
						<input type="password" name="password" id="password" />
					</label>
          <button type="submit">Login</button>
				</form>
        <div className={styles.hints}>
          <p>Or sign in with Google account</p>
          <button onClick={loginWithGoogle}>Sign in with Google</button>
          <p>Don't have an account?</p>
          <NavLink to="/signup">Sign up &#8599;</NavLink>
        </div>
			</article>
		</div>
	);
};

export default Login;
