import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { productSlice } from "./api/productSlice.js";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <ApiProvider api={productSlice}>
          <App />
        </ApiProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
