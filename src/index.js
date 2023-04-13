import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, theme ,ColorModeScript} from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <ColorModeScript/>
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher />
    <App />
  </ChakraProvider>
   
  </React.StrictMode>
);
