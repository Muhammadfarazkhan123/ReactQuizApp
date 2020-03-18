import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../Redux/Action/searchAction";
import { Link } from "react-router-dom";

const array = ["easy", "medium", "hard"];
class MainScreen extends Component {
  // #d8d8d8
  selected(e) {
    console.log(e.target.value, "eeee");
    this.props.select(e.target.value);
  }
  render() {
    return (
      <div
        style={{
          marginTop: "5%",
          marginBottom: "5%"
        }}
      >
        <h1 style={{ color: "grey" }}>Choose one category to start Test.</h1>
        {array.map(v => {
          return (
            <Link to="/Quiz">
              <button
                onClick={e => {
                  this.selected(e);
                }}
                value={v}
                style={{
                  width: "25%",
                  height: 200,
                  marginLeft: "3%",
                  marginRight: "3%",
                  borderRadius: 5,
                  border: "1px solid #cfcfcf",
                  boxShadow: "2px 2px 5px grey",
                  fontSize: 50,
                  fontWeight: "bold",
                  backgroundColor: "green",
                  color: "white"
                }}
              >
                {v.toUpperCase()}
              </button>
            </Link>
          );
        })}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  // console.log(dispatch(updateUser()));
  return {
    select: select => {
      console.log(select, "user in get");
      dispatch(updateUser(select));
    }
  };
};

export default connect(null, mapDispatchToProps)(MainScreen);
