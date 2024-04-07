import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<PokemonProvider>
				<Routes>
					<Route path="*" element={<App />} />
				</Routes>
			</PokemonProvider>
		</BrowserRouter>
	</React.StrictMode>
);
