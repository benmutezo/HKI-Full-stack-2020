import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header'
import Buttons from './components/Buttons/Buttons'
import Statistics from './components/Stastistics/Stastistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([{ id: 2, votes: 0 }])
  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)


  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = good / total * 100;

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const length = anecdotes.length - 1;
  const select = Math.floor(Math.random() * length)

  const randomAnecdote = () => {
    setSelected(select)
  }

  const vote = () => {
    const points = [...votes]
    // const con = points.concat({ id: selected, votes: 0 })
    points.map((i) => {
      if (i.id === 2) {
         return i.votes = 50
      }
      else {
        console.log("no")
        // return con;
      }
    })


    // points.ids.concat = selected
    // points.votes += 1
    // setVotes(con)
  }
  console.log(selected);


  return (
    <div >
      <Header />
      <Statistics good={good} neutral={neutral} bad={bad} all={total} average={average} positive={positive} />
      <Buttons good={handleGood} neutral={handleNeutral} bad={handleBad} />
      <button onClick={randomAnecdote}>Free anecdotes!</button>
      <button onClick={vote}>Vote</button>

      <p>{anecdotes[selected]}</p>
      <p>{console.log(votes)}</p>

    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));
