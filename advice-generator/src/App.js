import React, { useState, useEffect } from "react";
import "./App.css";
import divider from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
function App() {
  const [adviceId, setAdviceId] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      setAdviceId([data.slip]);
      console.log(adviceId);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  },[]);

  const handleChange = () => {
    fetchData();
  };

  return (
    <div className="main-box">
      <div className="advice-box">
        {adviceId.map((item, index) => {
          return (
            <div key={index} className="innerbox-flex">
              <div className="advice-id">ADVICE #{item.id}</div>
              <div className="advice-text">"{item.advice}"</div>
            </div>
          );
        })}
        <div className="images-flex">
          <img src={divider} alt="divider" />
          <div className="green-circle" onClick={handleChange}>
            <img src={dice} alt="dice" className="dice" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
