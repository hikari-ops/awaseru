import words from "../data/words.json";

const Words = () => {
  const randomList = words.dictionary_EN_TR
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div className="buttons">
      <div className="container">
        {randomList.slice(0, 3).map((word, index) => {
          return (
            <div key={index}>
              <button className="main-button">{word.word}</button>
              <button className="main-button">{word.translation}</button>
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
