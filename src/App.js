import React from "react";
import { v4 as uuidv4 } from "uuid";

import logo from "./logo.svg";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state with an empty UUID
    this.state = {
      uuid: "",
    };
  }

  componentDidMount() {
    // Check if UUID is already in local storage
    const storedUUID = localStorage.getItem("uuid");

    if (storedUUID) {
      // If UUID exists, use it
      this.setState({ uuid: storedUUID });
    } else {
      // If UUID doesn't exist, generate a new one and save it to local storage
      const newUUID = uuidv4();
      localStorage.setItem("uuid", newUUID);
      this.setState({ uuid: newUUID });

      // Send a postMessage to the subdomain after setting local storage
      window.parent.postMessage(newUUID, "https://order.skiplisalon.com");
    }

    window.addEventListener("message", this.handleMessage);
  }

  componentWillUnmount() {
    // Remove the event listener when the component is unmounted
    window.removeEventListener("message", this.handleMessage);
  }
  3;
  handleMessage = (event) => {
    // Check the origin to ensure it's from the trusted subdomain
    if (event.origin === "https://order.skiplisalon.com") {
      console.log("0b577c76-4297-4055-b9fc-087dcb62226d");
    }
  };

  render() {
    const { uuid } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ROOT DOMAIN SKIPLI LOCAL STORAGE</h1>
          <p>UUID: {uuid}</p>
        </header>
      </div>
    );
  }
}

export default App;
