import { useState } from "react";

const Statistics = (props) => {
 

  let badCount = props.bad*-1
  console.log('statistics bad: ', props.bad, 'badCount: ', badCount)

  let sum = (props.good + props.bad + props.neutral);
  let avrg = (props.good+badCount)/props.total;
  let positive = props.good/sum*100;

  return(
    <div>
      <p>all: {sum}</p>
      <p>average: {avrg}</p>
      <p>positive: {positive}%</p>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  
  
  

  const plusGood = () => {
    setGood(good + 1);
    setTotal(total+1);
  }
  const plusNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total+1);

  }
  const plusBad = () => {
    setBad(bad + 1);
    setTotal(total+1);

  }

  if(good === 0 && bad === 0 && neutral === 0)  {
    return(
      <div>
         <h2>Give feedback</h2>
          <button onClick ={plusGood}>good</button>
          <button onClick ={plusNeutral}>neutral</button>
          <button onClick ={plusBad}>bad</button>
        <h2>Statistics</h2> 
          <p>No feedback given</p>
      </div>
    )
  } else {  

  return (
    <div>
      <h2>Give feedback</h2>
      <button onClick ={plusGood}>good</button>
      <button onClick ={plusNeutral}>neutral</button>
      <button onClick ={plusBad}>bad</button>
      {console.log('Good: ', good, ' Neutral: ', neutral,  ' Bad: ', bad, ' Total: ', total)}
    
      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      
      <Statistics good = {good} neutral = {neutral} bad = {bad} total={total}/>
     

    </div>
  );
  }
}



export default App;
