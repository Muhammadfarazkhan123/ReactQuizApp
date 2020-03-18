import React, { Component } from "react";
import Progress from "react-progressbar";
import { connect } from "react-redux";

class Result extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: "grey", borderRadius: 2 }}>
          <Progress completed={100} />
        </div>
        <p>{this.props.score.score}</p>
        <p>{this.props.score.questions}</p>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    score: state.scoreReducer.score
  };
};

export default connect(mapStateToProps)(Result);
