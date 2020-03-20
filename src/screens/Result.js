import React, { Component } from "react";
import Progress from "react-progressbar";
import { connect } from "react-redux";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Style.css";

class Result extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const percentage =
      (this.props.score.score / this.props.score.questions) * 100;
    return (
      <div>
        <div style={{ backgroundColor: "grey", borderRadius: 2 }}>
          <Progress completed={100} />
        </div>
        <h1 style={{ color: "grey" }}>
          RESULT:<p style={{ fontSize: 20 }}>75% marks are passing</p>
        </h1>
        {percentage >= 75 ? (
          <p className="remarksYes">Congratulations !!! You are cleared.</p>
        ) : (
          <p className="remarksNo">Sorry !!!! better luck next time.</p>
        )}
        <div className="result">
          <CircularProgressbarWithChildren
            value={75}
            styles={buildStyles({
              pathColor: "grey",
              trailColor: "#eee"
              //   strokeLinecap: "butt"
            })}
          >
            <CircularProgressbar
              value={percentage}
              text={`${percentage.toString().substring(0, 5)}%`}
              styles={buildStyles({
                pathColor: percentage >= 75 ? "green" : "red",
                textColor: percentage >= 75 ? "green" : "red",
                trailColor: "transparent"
              })}
            />
          </CircularProgressbarWithChildren>
          ;
        </div>
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
