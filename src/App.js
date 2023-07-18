import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
function ErrorHandler({ error }) {
  console.log("sfhkgfgdfg",error.message)
  return (
    <div>
      <p>An error occured:</p>
      <pre>{error.message}</pre>
    </div>
  );
}
function City({ name }) {
  return <div>Hello, visit {name.toUpperCase()}</div>;
}

function Country({ capital }) {
  return <div>Hello, Visit {capital.toUpperCase()}</div>;
}
function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={(error)=>ErrorHandler(error)}>
        <Country />
        <City />
      </ErrorBoundary>
    </>
  );
}

export default App;
