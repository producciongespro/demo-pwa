import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//console.log("Inicia carga React DOM");

if (navigator.serviceWorker) {
  console.log("Registrando Service Worker");
  navigator.serviceWorker.register("sw.js");
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//console.log("React DOM cargado");
/**
 * Documentación manifest json
 * https://web.dev/add-manifest/
 */
