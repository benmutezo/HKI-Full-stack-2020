import React, { useState } from "react";
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

  const randomAnecdote = () => {
    const select = Math.floor(Math.random() * anecdotes.length);
    setSelected(select);
  };

  const vote = () => {
    const points = [...votes];
    setVotes(points, (points[selected] += 1));
  };

  const mostVotes = Math.max(...votes);

  let index = votes.indexOf(mostVotes);

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>
          {anecdotes[selected]} has {votes[selected]} votes
        </p>
        <button onClick={randomAnecdote}>Free anecdotes!</button>
        <button onClick={vote}>Vote</button>
      </div>

      <div>
        <h1>Anecdote with most votes</h1>
        <p>
          {anecdotes[index]} has {mostVotes} votes
        </p>
      </div>
    </div>
  );
};

export default App;
