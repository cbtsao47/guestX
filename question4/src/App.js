import React from "react";
import "./App.css";

// components
import TextBox from "./components/TextBox/TextBox";
import Button from "./components/Buttons/Button";

class App extends React.Component {
  state = {
    userInput: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  countWords = (
    userInput = "how are you?\nI'm good!",
    vowelCount,
    lineCount = 1
  ) => {
    let sentences = userInput.split("\n");
    let inputArr = [];
    // separate the user input by lines
    for (let i = lineCount - 1; i < sentences.length; i = i + lineCount) {
      let currentLine = {};
      let sentence = sentences[i].split(" ");
      let count = 0;
      let wordsArr = sentence.filter((word, i) => (i + 1) % 3 === 0);

      inputArr.push(sentences[i]);
    }
  };
  render() {
    const { userInput } = this.state;
    const resultInput = this.countWords();
    return (
      <div className="App">
        <TextBox userInput={userInput} handleChange={this.handleChange} />
        <Button />
        <TextBox userInput={resultInput} disabled />
      </div>
    );
  }
}

export default App;
