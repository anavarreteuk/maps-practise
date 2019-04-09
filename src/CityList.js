import React from "react";
import "./styles.css";
const CityList = props => {
  return (
    <div className="list-countries">
      <ul>
        {props.items &&
          props.items.map((item, index) => {
            return (
              <li key={index} onClick={e => props.onclick(e, item)}>
                <h5>{item.name}</h5>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CityList;
