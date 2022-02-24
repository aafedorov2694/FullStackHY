import { useState } from "react";

const StatistisLine = (props) => {

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              {props.text}
            </td>
            <td>
              {props.value}
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

const Button = (props) => {

  return (
    <div>
      <button onClick={props.function}>{props.text}</button>
    </div>
  )
}

const Statistics = (props) => {


  let badCount = props.bad * -1
  console.log('statistics bad: ', props.bad, 'badCount: ', badCount)

  let sum = (props.good + props.bad + props.neutral);
  let avrg = (props.good + badCount) / props.total;
  let positive = props.good / sum * 100;

  return (
    <div>
      <StatistisLine text='good: ' value={props.good} />
      <StatistisLine text='neutral: ' value={props.neutral} />
      <StatistisLine text='bad: ' value={props.bad} />
      <StatistisLine text='all: ' value={sum} />
      <StatistisLine text='average: ' value={avrg.toFixed(1)} />
      <StatistisLine text='positive: ' value={positive.toFixed(0) + '%'} />
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
    setTotal(total + 1);
  }
  const plusNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);

  }
  const plusBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);

  }

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <h2>Give Feedback</h2>
        <table>
          <tbody>
            <tr>
              <td style={{width: '10px'}}>
                <Button text='good' function={plusGood} />
              </td>
              <td style={{width: '10px'}}>
                <Button text='neutral' function={plusNeutral} />
              </td>
              <td style={{width: '10px'}}>
                <Button text='bad' function={plusBad} />
              </td>
            </tr>
          </tbody>
        </table>

    
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  } else {

    return (
     <div>
            <h2>Give Feedback</h2>
            <table>
              <tbody>
                <tr>
                  <td style={{width: '10px'}}>
                    <Button text='good' function={plusGood} />
                  </td>
                  <td style={{width: '10px'}}>
                    <Button text='neutral' function={plusNeutral} />
                  </td>
                  <td style={{width: '10px'}}>
                    <Button text='bad' function={plusBad} />
                  </td>
                </tr>
              </tbody>
            </table>

            
            <h2>Statistics</h2>
        
              <Statistics good={good} neutral={neutral} bad={bad} total={total} />
          
      </div>
    );
  }
}



export default App;
