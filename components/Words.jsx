import words from "../data/words.json";

const Words = () => {
  const randomize = (RN) => {
    return words.dictionary_EN_TR
      .slice(0, 10)
      .map((value) => ({ value, sort: Math.random() * RN }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  console.log(randomize(0.5));
  console.log(randomize(2));
  return (
    <div className="buttons">
      <div className="container">
        {randomize(0.5).map((word, index) => {
          return (
            <div className="words-container" key={index}>
              <button className="main-button">{word.word}</button>
              {/* <button className="main-button">{word.translation}</button> */}
            </div>
          );
        })}
        {randomize(0.5).map((word, index) => {
          return (
            <div className="words-container" key={index}>
              <button className="main-button">{word.translation}</button>
              {/* <button className="main-button">{word.translation}</button> */}
            </div>
          );
        })}
        {/* <button className="main-button">Main Button</button>
    <button className="correct-button">Correct Button</button>
    <button className="incorrect-button">Incorrect Button</button> */}
      </div>
    </div>
  );
};

export default Words;
