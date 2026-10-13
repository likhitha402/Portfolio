import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Summary.scss";
import {summarySection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

// Turns **word** into bold text
function renderBold(text) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function Summary() {
  const {isDark} = useContext(StyleContext);
  if (!summarySection.display) return null;
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="summary">
        <div className="summary-main">
          <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
            {summarySection.title}
          </h1>
          <p className={isDark ? "dark-mode subTitle" : "subTitle"}>
            {summarySection.subtitle}
          </p>
          {summarySection.paragraphs.map((p, i) => (
            <p key={i} className={isDark ? "dark-mode summary-text" : "summary-text"}>
              {renderBold(p)}
            </p>
          ))}
        </div>
      </div>
    </Fade>
  );
}
