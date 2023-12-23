import React from "react";

const FunFact = ({funFacts}) => {
  return (
    <>
      <div className="single-fun">
        <i className={`icofont ${funFacts.icon}`} />
        <div className="content">
          <span className="counter">{funFacts.count}</span>
          <p>{funFacts.title}</p>
        </div>
      </div>
    </>
  );
};

export default FunFact;
