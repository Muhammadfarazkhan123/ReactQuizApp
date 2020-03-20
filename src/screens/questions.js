import React, { Component } from "react";
import { connect } from "react-redux";
import { updateScore } from "../Redux/Action/scoreAction";
import Progress from "react-progressbar";
import "./Style.css";
import Questions from "../Data/questions.json";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

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
      value: "",
      redirect: false
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
    let { value } = this.state;

    if (value != "") {
      var obj = {
        score: this.state.score,
        questions: this.state.typeQuest.length
      };
      this.props.Score(obj);
      this.setState({ value: "", redirect: true });
    } else {
      alert("select your answer");
    }
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
    if (this.state.redirect) {
      return <Redirect push to="/Result" />;
    }
    return (
      <div>
        <div style={{ backgroundColor: "grey", borderRadius: 2 }}>
          <Progress completed={(index / typeQuest.length) * 100} />
        </div>
        <h3 className="heading">
          {"Question " + quesNum + " of " + typeQuest.length}
          <p className="category">{unescape(typeQuest[index].category)}</p>
        </h3>

        <h3 className="question">
          {"Q)" + unescape(typeQuest[index].question)}
        </h3>
        <div id="mainDiv">
          {option.map((v, i) => {
            return (
              <button
                onClick={e => this.check(e)}
                value={unescape(v)}
                id={unescape(v)}
                className="options"
              >
                {unescape(v)}
              </button>
            );
          })}
        </div>

        {index + 1 != typeQuest.length && (
          <button onClick={this.next} className="nextBtn">
            Next Question
          </button>
        )}
        {index + 1 == typeQuest.length && (
          // <Link to="/Result" onClick={this.finish}>
          <button className="finishBtn" onClick={this.finish}>
            Finish
          </button>
          // </Link>
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
