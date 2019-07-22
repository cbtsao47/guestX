import React from "react";
import "./InputBox.css";
const InputBox = ({
  vowelCount,
  lineCount,
  wordCount,
  handleChange,
  handleSubmit
}) => {
  return (
    <div className="inputbox">
      <form onSubmit={handleSubmit} className="inputbox-form">
        <label htmlFor="wordCount">
          Count Every
          <input
            className="inputbox-input"
            required
            type="number"
            id="wordCount"
            name="wordCount"
            value={wordCount}
            onChange={handleChange}
            min="1"
            max="9"
            placeholder="1"
          />
          Word
        </label>
        <label htmlFor="vowelCount">
          {" "}
          with at least
          <input
            className="inputbox-input"
            required
            type="number"
            id="vowelCount"
            name="vowelCount"
            value={vowelCount}
            onChange={handleChange}
            min="1"
            max="9"
            placeholder="1"
          />
          vowels
        </label>
        <label htmlFor="lineCount">
          {" "}
          in every
          <input
            className="inputbox-input"
            required
            type="number"
            id="lineCount"
            name="lineCount"
            value={lineCount}
            onChange={handleChange}
            min="1"
            max="9"
            placeholder="1"
          />
          lines
        </label>
        <button className="inputbox-button" type="submit">
          Find Match
        </button>
      </form>
    </div>
  );
};

export default InputBox;
