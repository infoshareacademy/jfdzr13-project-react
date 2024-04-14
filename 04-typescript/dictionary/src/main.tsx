import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DictionaryProvider } from "./context/DictionaryContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<DictionaryProvider>
			<App />
		</DictionaryProvider>
	</React.StrictMode>
);
