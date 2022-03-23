import Menu from "./components/Menu";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { button } from "react-bootstrap";

function App() {
  return (
    <div>
      <Menu />

      <h1>Hello World</h1>
      <button variant="primary">Primary</button>

    </div>
  );
}

export default App;
