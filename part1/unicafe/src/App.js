import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const plusGood = () => {
    setGood(good + 1)
  }
  const plusNeutral = () => {
    setNeutral(neutral + 1)
  }
  const plusBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <button onClick ={plusGood}>good</button>
      <button onClick ={plusNeutral}>neutral</button>
      <button onClick ={plusBad}>bad</button>
      {console.log('Good: ', good, ' Neutral: ', neutral,  ' Bad: ', bad)}

      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>

    </div>
  );
}



export default App;
