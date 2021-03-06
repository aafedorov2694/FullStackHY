import './App.css';

import { useState } from 'react'

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];



  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
  const copy = [...points]
  const [selected, setSelected] = useState(0)
  const random = () => {
    let selection = (Math.random() * 5).toFixed(0);
    setSelected(selection)
  }

  const updateVote = () => {
    let maxPoints = 0;
    let chosenAnecdote = '';
    for (var i = 0; i <= 5; i++) {
      if (points[i] > maxPoints) {
        maxPoints = points[i]
        chosenAnecdote = `${anecdotes[i]}` 
        console.log('i:', i)

      }
    }
    return (chosenAnecdote);
  }

  const vote = () => {

    copy[selected] += 1

    setPoints(copy)


  }




  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Has {points[selected]} votes</p>

      <button onClick={random}>Next anecdote</button>
      <button onClick={vote}>vote</button>
      <h2>Anecdote with the most votes</h2>
      <p>Most voted one: {updateVote()} <br></br> Has: {Math.max(...points)} votes</p>
    
    </div>
  )
}

export default App;

