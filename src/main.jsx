import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StoreProvider } from "./components/context/StoreContext.jsx"; // path may vary

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
