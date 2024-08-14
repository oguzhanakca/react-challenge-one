import React from "react";
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Hello, guest!",
            button: "Log in"
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            button: prevState.button === "Log out" ? "Log in" : "Log out"
        }), () => console.log(this.state.message)
    )
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleClick()}>{this.state.button}</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple