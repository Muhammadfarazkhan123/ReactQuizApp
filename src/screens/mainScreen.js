import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../Redux/Action/searchAction";
import { Link } from "react-router-dom";
import "./Style.css";

const array = ["easy", "medium", "hard"];
class MainScreen extends Component {
  // #d8d8d8
  selected(e) {
    console.log(e.target.value, "eeee");
    this.props.select(e.target.value);
  }
  render() {
    return (
      <div className="maincategory">
        <h1 style={{ color: "grey" }}>Choose one category to start Test.</h1>
        {array.map(v => {
          return (
            <Link to="/Quiz">
              <button
                onClick={e => {
                  this.selected(e);
                }}
                value={v}
                className="categoryBtn"
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
