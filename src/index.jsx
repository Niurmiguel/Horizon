import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import UIkit from "uikit";
import UIkitIcons from "uikit/dist/js/uikit-icons";
import "./assets/scss/styles.scss";
import App from "./layouts/App";
import * as serviceWorker from "./serviceWorker";

UIkit.use(UIkitIcons);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
