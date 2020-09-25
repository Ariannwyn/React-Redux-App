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
      <h1>BATS U.S. Stock Exchanges</h1>
      <h2>
        Bats is an equities market operator in the U.S. Here is a selection of
        stocks and their values
      </h2>
      <GetAPI stocks={props.state.stocks} />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("App state", state);
  return { state };
};

export default connect(mapStateToProps, { loadAPI })(App);
