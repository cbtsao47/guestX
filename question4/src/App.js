import React from "react";
import "./App.css";
import {moreThanVowelCount} from './helper'
// components
import InputBox from'./components/InputBox/InputBox';
import TextBox from "./components/TextBox/TextBox";
import Button from "./components/Buttons/Button";

class App extends React.Component {
  state = {
    userInput: "",
    resultInput:"",
    vowelCount:'',
    lineCount:'',
    wordCount:''
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  countWords = (
    userInput,
    vowelCount,
    lineCount,
    wordCount,
  ) => {
    // replace symbols with empty string
    const regexStr=userInput.replace(/[.,!?"]/g,'')

    // break into sentences
    const sentences = regexStr.split("\n");
    // result cache
    const result = [];
    // for each lineCount specified, loop through each sentence to find the matched
    for (let i = lineCount - 1; i < sentences.length; i = i + lineCount) {
      const sentence = sentences[i].split(" ");
      const matchedWord = sentence.filter((word, i) => (i + 1) % wordCount === 0 && moreThanVowelCount(word,vowelCount))
      if(matchedWord.length){
        result.push(matchedWord)
      }      
    }
    return result
  };
  handleClick=e=>{
    e.preventDefault();
    const {userInput,vowelCount,lineCount,wordCount}=this.state
    const resultInput=this.countWords(userInput,Number(vowelCount),Number(lineCount),Number(wordCount))
    this.setState({resultInput})
  }
  render() {
    const { userInput,resultInput,vowelCount,lineCount,wordCount } = this.state;
    return (
      <div className="App">
        <TextBox userInput={userInput} handleChange={this.handleChange} />
        <InputBox vowelCount={vowelCount} lineCount={lineCount} wordCount={wordCount} handleChange={this.handleChange} handleClick={this.handleClick}/>
        <TextBox userInput={resultInput} disabled />
      </div>
    );
  }
}

export default App;
