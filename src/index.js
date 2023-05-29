import ReactDOM from "react-dom/client";
import React from "react";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import { shared } from "./shared";
import { shared1 } from "./shared";
import { shared2 } from "./shared";
import { shared3 } from "./shared";
import { shared5 } from "./shared";
import { shared4 } from "./shared";
import { entity } from "./entity";
import { entity1 } from "./entity";
import { entity2 } from "./entity";
import { entity3 } from "./entity";
import { entity4 } from "./entity";
import { entity5 } from "./entity";
import { feature } from "./feature";
import { feature5 } from "./feature";
import { feature2 } from "./feature";
import { feature4 } from "./feature";
import { feature3 } from "./feature";
import { feature1 } from "./feature";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
