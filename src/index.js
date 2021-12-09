import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log("Inicia carga React DOM");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


console.log("React DOM cargado");