
const Header = (props) => {

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );

}

const Part = (parts) => {
  return (
    <div>
      {parts.parts.parts.forEach(e => console.log('Part porps: ', e.name))}

      {parts.parts.parts.map(e => { return <p>{e.name}: {e.exercises}</p> })}
    </div>
  );
}

const Content = (parts) => {

  return (
    <div>
      <Part parts={parts} />

    </div>
  );
}

const Total = (parts) => {
  let sum = 0;
  parts.parts.forEach(e => sum = sum + e.exercises)

  return (
    <div>
      <p>{`Number of exercises: ${sum}`}</p>
    </div>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />

    </div>
  )
}

export default App;
