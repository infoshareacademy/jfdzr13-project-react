import React, { useState, useEffect } from "react";
import "./App.css";

import styles from "./styles/ComponentStyles.module.css";

const UserCard = ({ user }) => {
	return (
		<div className={styles.card}>
			<div className={styles.topPart} />
			<div className={styles.bottomPart}>
				<h1>{user.name}</h1>
				<h2>tel: {user.phone}</h2>
				<p>website: {user.website}</p>
			</div>
		</div>
	);
};

const App = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data))
			.catch((err) => console.error(err));
	}, []);

	console.log("users ", users);

	return (
		<div className={styles.container}>
			{users.length
				? users.map((user, idx) => (
						<React.Fragment key={idx}>
							<UserCard user={user} />
						</React.Fragment>
				  ))
				: null}
		</div>
	);
};

export default App;

// Zadanie 2.

// import React, { useState } from "react";
// import "./App.css";
// import Card from "./components/Card";

// function App() {
// 	const [tasks, setTasks] = useState([]);
// 	const [error, setError] = useState("");
// 	const [gender, setGender] = useState("male");

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		setError("");

// 		if (e.target.taskDefinition.value) {
// 			const newTask = {
// 				ordinalNumber: tasks.length,
// 				value: e.target.taskDefinition.value,
// 				gender,
// 			};

// 			setTasks((prevValue) => [...prevValue, newTask]);
// 			setGender((prevValue) => {
// 				if (prevValue === "male") return "female";
// 				return "male";
// 			});
// 		} else {
// 			setError("Ale moze coś wpisz");
// 		}

// 		e.target.reset();
// 	};

// 	console.log("tasks ", tasks);

// 	return (
// 		<>
// 			<form onSubmit={handleSubmit}>
// 				<input
// 					type="text"
// 					placeholder="Enter task name"
// 					name="taskDefinition"
// 				/>
// 				<button type="submit">Add tasks</button>
// 			</form>
// 			{error && <strong style={{ color: "red" }}>{error}</strong>}
// 			<ul>
// 				{tasks.length
// 					? tasks.map((task) => (
// 							<React.Fragment key={task.ordinalNumber}>
// 								<Card task={task}/>
// 							</React.Fragment>
// 					))
// 					: null}
// 			</ul>
// 		</>
// 	);
// }

// export default App;

// Zadanie 1.
// function App() {
// 	const [currentValue, setValue] = useState(0);

// 	const decreaseValue = () => setValue(currentValue - 1);
// 	const increaseValue = () => setValue(currentValue + 1);

// 	const handleChange = (e) => {
// 		setValue(Number(e.target.value));
// 	};

// 	return (
// 		<>
// 			<button onClick={decreaseValue}>-</button>
// 			<input type="text" value={currentValue} onChange={handleChange} />
// 			<button onClick={increaseValue}>+</button>
// 		</>
// 	);
// }

// export default App;
