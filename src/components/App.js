<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React from "react";

// Convert App into a functional component
const App = () => {
  return (
    <div id="main">
    <h1>Welcome to My React App</h1>
    <p>
      This is a demonstration of rendering a React component onto a specific DOM node.
    </p>
    <ul>
      <li>React Functional Components</li>
      <li>JSX Syntax</li>
      <li>DOM Manipulation using ReactDOM</li>
    </ul>
  </div>
  );
};

// Ensure the App component is a default export
export default App;
