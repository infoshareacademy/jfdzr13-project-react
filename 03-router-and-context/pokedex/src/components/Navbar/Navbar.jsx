import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? styles.active : "")}
					>
						Home
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
