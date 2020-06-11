import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Buttons from "./components/Buttons/Buttons";
import Statistics from "./components/Stastistics/Stastistics";
const App = () => {

  //States
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    <div>
      <Header />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={total}
        average={average}
        positive={positive}
      />
      <Buttons good={handleGood} neutral={handleNeutral} bad={handleBad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
