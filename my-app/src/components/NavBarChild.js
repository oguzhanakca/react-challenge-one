import React from "react";

function NavBarChild(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <button onClick={props.handleClick}>Login</button>
      ) : (
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username"></input>
          <label htmlFor="password">Password</label>
          <input type="text" id="password"></input>
          <button onClick={props.handleClick}>Submit</button>
        </form>
      )}
    </div>
  );
}

export default NavBarChild;
