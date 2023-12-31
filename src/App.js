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
    const storedUuid = localStorage.getItem("uuid");

    // if (storedUuid) {
    //   this.setState({ uuid: storedUuid });
    // } else {
    //   const newUuid = uuidv4();
    //   localStorage.setItem("uuid", newUuid);
    //   this.setState({ uuid: newUuid });
    // }

    window.addEventListener("message", this.handleMessage);
  }

  componentWillUnmount() {
    // Remove the event listener when the component is unmounted
    window.removeEventListener("message", this.handleMessage);
  }
  3;
  handleMessage = (event) => {
    // Check the origin to ensure it's fr om the trusted subdomain
    const storedUUID = localStorage.getItem("uuid");
    if (event.origin === "https://order.skiplisalon.com") {
      console.log("storedUUID", storedUUID);
      // Send a postMessage to the subdomain after setting local storage
      window.parent.postMessage(storedUUID, "https://order.skiplisalon.com");
    }
  };

  render() {
    const { uuid } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ROOT DOMAIN SKIPLI LOCAL STORAGE</h1>
          <p>UUID: {localStorage.getItem("uuid")}</p>
        </header>
      </div>
    );
  }
}

export default App;
