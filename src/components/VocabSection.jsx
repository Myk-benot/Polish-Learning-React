import { useState } from "react";
import data from "../pages/vocab/vocab-index.js";
import "/home/myk/Desktop/Polish-Learning/src/vocab.css";

function VocabSection({ section }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionData = data[section];

  const handlePrevClick = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex(Math.min(currentIndex + 1, sectionData.length - 1));
  };

  if (!sectionData) {
    return <div>Section not found</div>;
  }

  return (
    <div className="vocab-div">
      <h1 className="vocab-h1">
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </h1>
      {sectionData.length > 0 && (
        <ul className="vocab-list">
          <li className="vocab-li">
            <strong>English:</strong> {sectionData[currentIndex].english}
            <br />
            <br />
            <strong>Polish:</strong> {sectionData[currentIndex].polish}
            <br />
            <br />
            <strong>Phonetic:</strong> {sectionData[currentIndex].phonetic}
          </li>
        </ul>
      )}
      <div className="btn-div">
        <button
          className="btn"
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          className="btn"
          onClick={handleNextClick}
          disabled={currentIndex === sectionData.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default VocabSection;
