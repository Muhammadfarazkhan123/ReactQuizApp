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
          width: "50%",
          marginLeft: "25%",
          marginTop: "1%"
        }}
      >
        {array.map(v => {
          return (
            <Link to="/Quiz">
              <button
                onClick={e => {
                  this.selected(e);
                }}
                value={v}
              >
                {v}
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
