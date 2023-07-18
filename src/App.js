import React from 'react';
function City({name}) {
  return <div>Hello, visit {name.toUpperCase()}</div>
}

function Country({capital}) {
  return <div>Hello, Visit {capital.toUpperCase()}</div>
}
function App() {
  return (
    <>
    <Country/>
    <City/>
    </>
  );
}

export default App;
