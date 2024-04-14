import React from "react";
import { useDictionary } from "./context/DictionaryContext";

const App = () => {
	const { getDefinition, data } = useDictionary();

	const handleSubmit = (e) => {
		e.preventDefault();
		const searched_phrase = e.target.word.value;
		getDefinition(searched_phrase);
		e.target.reset();
	};

	console.log("data ", data);

	return (
		<>
			<header>
				<h1>English dictionary</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="word"
						id="word"
						placeholder="I am looking for a meaning of..."
					/>
					<button type="submit">Search</button>
				</form>
			</header>
			<main>
				{data.loadingState === "pending" && <h2>Loading...</h2>}
				{data.loadingState === "resolved" && <></>}
				{data.loadingState === "rejected" && <h2>An error occured</h2>}
			</main>
		</>
	);
};

export default App;
