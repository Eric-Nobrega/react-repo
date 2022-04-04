import React, { useState, useEffect } from "react";

//task -> print the currently active index at page bottom

export default function Accordion({ items }) {
  //index state
  //default is null as user has not clicked on question yet
  const [activeIndex, setActiveIndex] = useState(null);

  //Helper Functions
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={"title " + active} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={"content " + active}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
}
