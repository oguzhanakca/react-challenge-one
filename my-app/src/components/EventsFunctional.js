import React from "react";

function EventsFunctional() {
  function clickHandler() {
    console.log("Functional clicked.");
  }
  return (
    <div>
      <button onClick={clickHandler}>click me - functional component</button>
    </div>
  );
}

export default EventsFunctional;
