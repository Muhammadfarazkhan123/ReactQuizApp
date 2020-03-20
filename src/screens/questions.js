import React, { Component } from "react";
import { connect } from "react-redux";
import { updateScore } from "../Redux/Action/scoreAction";
import Progress from "react-progressbar";

import Questions from "../Data/questions.json";
import { Link } from "react-router-dom";

class Question extends Component {
  // #d8d8d8

  constructor() {
    super();
    this.state = {
      typeQuest: [],
      option: [],
      index: 0,
      score: 0,
      diable: false,
      value: ""
    };
    this.next = this.next.bind(this);
    this.check = this.check.bind(this);
    this.finish = this.finish.bind(this);
  }
  componentWillMount() {
    console.log("thikkkkw");

    const select = this.props.select;
    const { typeQuest } = this.state;
    Questions.map((v, i) => {
      if (v.difficulty === select) {
        console.log(v, "comds");
        typeQuest.push(v);
      }
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.score != nextState.score) {
      return false;
    }
    if (this.state.value != nextState.value) {
      if (this.state.value === "") {
        return false;
      }
    }
    return true;
  }

  next() {
    let { typeQuest, index, value } = this.state;
    console.log(index + 1, typeQuest.length);
    if (value != "") {
      if (index < typeQuest.length - 1) {
        index++;
        this.setState({ index: index });

        document.getElementById(value).style.backgroundColor = "white";

        var nodes = document
          .getElementById("mainDiv")
          .getElementsByTagName("button");
        for (var i = 0; i < nodes.length; i++) {
          nodes[i].disabled = false;
          nodes[i].style.color = "black";
        }
        this.setState({ value: "" });
      }
    } else {
      alert("select your answer");
    }
  }

  check(e) {
    let { typeQuest, index, score } = this.state;
    // document.getElementById("mainDiv").disabled = true;
    var nodes = document
      .getElementById("mainDiv")
      .getElementsByTagName("button");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].disabled = true;
      nodes[i].style.color = "grey";
    }
    console.log(
      e.target.value + unescape(typeQuest[index].correct_answer),
      "ansewe"
    );
    this.setState({ value: e.target.value });
    if (e.target.value === unescape(typeQuest[index].correct_answer)) {
      document.getElementById(e.target.value).style.backgroundColor = "green";
      document.getElementById(e.target.value).style.color = "white";

      score++;
      // alert("good ");
      this.setState({ score });
    } else {
      document.getElementById(e.target.value).style.backgroundColor = "red";
      document.getElementById(e.target.value).style.color = "white";
    }
  }

  finish() {
    var obj = {
      score: this.state.score,
      questions: this.state.typeQuest.length
    };
    this.props.Score(obj);
  }

  render() {
    let { typeQuest, index, score } = this.state;
    var num = Math.floor(Math.random() * 4);
    var option = [];
    var answer = typeQuest[index].correct_answer;
    var incorrect = typeQuest[index].incorrect_answers;
    var quesNum = index + 1;

    incorrect.map(v => {
      option.push(v);
    });
    const select = this.props.select;
    option.splice(num, 0, answer);
    return (
      <div>
        <div style={{ backgroundColor: "grey", borderRadius: 2 }}>
          <Progress completed={(index / typeQuest.length) * 100} />
        </div>
        <h3
          style={{
            textAlign: "left",
            marginLeft: 20,
            fontSize: 35,
            color: "grey",
            fontWeight: "revert",
            marginTop: 0
          }}
        >
          {"Question " + quesNum + " of " + typeQuest.length}
          <p
            style={{
              textAlign: "left",
              marginLeft: 10,
              fontSize: 18,
              fontWeight: "lighter",
              marginTop: 0
            }}
          >
            {unescape(typeQuest[index].category)}
          </p>
        </h3>

        <h3
          style={{
            textAlign: "left",
            marginLeft: 30,
            marginTop: 0,
            fontSize: 20,
            fontWeight: "normal"
          }}
        >
          {"Q)" + unescape(typeQuest[index].question)}
        </h3>
        <div id="mainDiv">
          {option.map((v, i) => {
            return (
              <button
                onClick={e => this.check(e)}
                value={unescape(v)}
                style={{
                  height: 38,
                  width: "25%",
                  marginLeft: "12.5%",
                  marginRight: "12.5%",
                  marginTop: "8%",
                  display: "inline",
                  float: "left",
                  borderRadius: 5,
                  fontWeight: "bold",
                  fontSize: 16
                }}
                id={unescape(v)}
                name="a"
              >
                {unescape(v)}
              </button>
            );
          })}
        </div>

        {index + 1 != typeQuest.length && (
          <button
            onClick={this.next}
            style={{
              border: "2px solid black",
              width: "20%",
              marginTop: "8%",
              fontSize: 20,
              borderRadius: 5
            }}
          >
            Next Question
          </button>
        )}
        {index + 1 == typeQuest.length && (
          <Link to="/Result">
            <button
              onClick={this.finish}
              style={{
                border: "2px solid black",
                width: "20%",
                marginTop: "8%",
                fontSize: 20,
                borderRadius: 5
              }}
            >
              Finish
            </button>
          </Link>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    select: state.searchReducer.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Score: score => {
      console.log(score, "comp");
      dispatch(updateScore(score));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Question);
