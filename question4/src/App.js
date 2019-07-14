import React from "react";
import "./App.css";
import {moreThanVowelCount} from './helper'
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
    userInput = "how are. you?\nI'm very very good!",
    vowelCount=2,
    lineCount = 1,
    wordCount=3
  ) => {
    // replace symbols with empty string
    let regexStr=userInput.replace(/[.,!?"]/g,'')
    // break into sentences
    let sentences = regexStr.split("\n");
    // result cache
    let result = [];
    // for each lineCount specified, loop through each sentence to find the matched
    for (let i = lineCount - 1; i < sentences.length; i = i + lineCount) {
      let sentence = sentences[i].split(" ");
      let matchedWord = sentence.filter((word, i) => (i + 1) % wordCount === 0 && moreThanVowelCount(word,vowelCount))
      if(matchedWord.length){
        result.push(matchedWord)
      }      
    }
    return result
  };
  handleClick=e=>{
    this.countWords()
  }
  render() {
    const { userInput } = this.state;
    const resultInput = this.countWords();
    return (
      <div className="App">
        <TextBox userInput={userInput} handleChange={this.handleChange} />
        <Button handleClick={this.handleClick}/>
        <TextBox userInput={resultInput} disabled />
      </div>
    );
  }
}

export default App;
