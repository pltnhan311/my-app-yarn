import React, { Component } from "react";

const fetchComments = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(["Cmt1", "Cmt2", "Cmt3"]), 1000);
  });

export class CorrectlyState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      comments: [],
    };
  }

  componentDidMount() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    // Mình truyền nguyên 1 cái object với các thuộc tính giống như cái state ban đầu

    // React class component có tính năng merge state
    fetchComments().then((res) => {
      this.setState((prevState) => ({
        ...prevState,
        comments: res,
      }));
    });
  }

  render() {
    return (
      <div>
        <div>CorrectlyState. Count: {this.state.count}</div>
        <div>Comments: {this.state.comments}</div>
      </div>
    );
  }
}

export default CorrectlyState;
