import React from "react";

function GetAPI(props) {
  console.log("GetAPI props", props);

  return (
    <div className="container">
      {props.stocks.map((item, index) => {
        return (
          <div className="card" key={index}>
            <p>{"Date: " + item[0]}</p>
            <p>{"Ticker: " + item[1]}</p>
            <p>{"Shares Outstanding: " + item[2]}</p>
            <p>{"Net Asset Value: " + item[3]}</p>
            <p>{"Flow Daily: " + item[4]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GetAPI;
