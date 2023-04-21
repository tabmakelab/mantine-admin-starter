import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.less";
import CustomRouter from "./routes/CustomRouter";
import CustomHistory from "./routes/custom-history";

// Strict Mode
// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
// <CustomRouter history={CustomHistory}>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// </CustomRouter>
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CustomRouter history={CustomHistory}>
    <App />
  </CustomRouter>
);
