import axios from "axios";

export const START = "START";
export const ADD_TICKER = "ADD_TICKER";

export const loadAPI = (data) => {
  return (dispatch) => {
    dispatch({ type: START });
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.quandl.com/api/v3/datatables/ETFG/FUND.json?ticker=SPY,IWM&api_key=Q6u5MvugZBrEVF-gTc9W"
      )
      .then((response) => {
        console.log("API", response.data);
        dispatch({
          type: ADD_TICKER,
          payload: response.data.datatable.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
