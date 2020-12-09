import React from "react";

function App() {
  const [FName, setFname] = React.useState("");
  const [LName, setLName] = React.useState("");
  const [hoverState, setHoverState] = React.useState(false);

  function clickHandler(event) {
    setFname(FName);
    setLName(LName);
    event.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={clickHandler}>
        <h1>
          Hello {FName} {LName}!
        </h1>
        <input
          onChange={(event) => setFname(event.target.value)}
          type="text"
          placeholder="What's your name?"
        />
        <input
          onChange={(event) => setLName(event.target.value)}
          type="text"
          placeholder="Last Name ?"
        />
        <button
          type="submit"
          onMouseOver={() => setHoverState(true)}
          onMouseOut={() => setHoverState(false)}
          style={{ backgroundColor: hoverState ? "black" : "white" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
