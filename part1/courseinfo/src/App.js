
const Header = (props) => {

  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );

}

const Part = (course) => {

  return (
    <div>
      {course.parts.parts.parts.map((e, i) => { return <p key={i}>{e.name}: {e.exercises}</p> })}
    </div>
  );
}

const Content = (course) => {



  return (
    <div>
      <Part parts={course} />

    </div>
  );
}

const Total = (course) => {


  let sum = 0;
  course.parts.parts.forEach(e => sum = sum + e.exercises)

  return (
    <div>
      <p>{`Number of exercises: ${sum}`}</p>
    </div>
  )
}

const App = () => {


  const course = {
    name: 'Half Stack application development',

    parts: [
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
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />

    </div>
  )
}

export default App;
