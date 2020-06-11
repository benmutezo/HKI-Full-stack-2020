import React from "react";

const StatisticText = ({ text, review }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{review}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <h2>No feedback</h2>;
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticText text={"good"} review={good} />
          <StatisticText text={"neutral"} review={neutral} />
          <StatisticText text={"bad"} review={bad} />
          <StatisticText text={"average"} review={average} />
          <StatisticText text={"all"} review={all} />
          <StatisticText text={"positive"} review={positive} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
