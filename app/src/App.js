import React, { useEffect } from "react";
import "./App.css";

import { loadAPI } from "./actions/index";
import { connect } from "react-redux";
import GetAPI from "./components/GetAPI";

function App(props) {
  console.log("App props", props);
  useEffect(() => {
    props.loadAPI();
  }, [props.loadAPI]);
  return (
    <div className="App">
      <h1>Some Title</h1>
      <GetAPI stocks={props.state.stocks} />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("App state", state);
  return { state };
};

export default connect(mapStateToProps, { loadAPI })(App);
