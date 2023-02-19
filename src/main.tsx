import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ThemeProvider from "./context/theme/ThemeProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ThemeProvider>
		<Router>
			<App />
		</Router>
	</ThemeProvider>
);
