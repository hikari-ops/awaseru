import { useState } from "react";
import words from "../data/words.json";

const Words = () => {
  const randomize = (RN) => {
    return words.dictionary_EN_TR
      .slice(0, 10)
      .map((value) => ({ value, sort: Math.random() * RN }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const wordsList = [...randomize(0.5), ...randomize(0.5)];
  const [correctAnswer, setCorrectAnswer] = useState([]);

  const handleClick = (i) => {
    setCorrectAnswer((click) => [...click, i]);
  };

  return (
    <div className="word-container">
      <div className="col">
        {wordsList.map((word, index) => {
          let selected = false;
          if (correctAnswer.includes(index)) {
            selected = true;
          }
          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={selected ? "correct-button" : "main-button"}
            >
              {word.word}
            </button>
          );
        })}
      </div>
      <div className="col">
        {randomize(0.5).map((word, index) => {
          return (
            <button key={index} className="main-button">
              {word.translation}
            </button>
          );
        })}
      </div>
      {/* <button className="main-button">Main Button</button>
    <button className="correct-button">Correct Button</button>
    <button className="incorrect-button">Incorrect Button</button> */}
    </div>
  );
};

export default Words;
