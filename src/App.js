import React from "react";
import ReactDOM from "react-dom";

function ErrorHandler({ error }) {
  return (
    <div role="alert">
      <p>An error occured:</p>
      <pre>{error.message}</pre>
    </div>
  );
}
function City({ name }) {
  try {
  return <div>Hello, visit {name.toUpperCase()}</div>;
  } catch (error) {
    return <ErrorHandler error={error}/>
  }
}

function Country({ capital }) {
  try {
    return <div>Hello, Visit {capital.toUpperCase()}</div>;
  } catch (error) {
    return <ErrorHandler error={error}/>
  }
}
function App() {
  return (
    <>
      <Country />
      <City />
    </>
  );
}

export default App;
