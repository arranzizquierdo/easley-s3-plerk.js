import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/main.scss";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById("root")
);
