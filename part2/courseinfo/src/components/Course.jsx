const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>

      {course.map((e, i) => (
        <div key={e.id}>
          <h2>{e.name}</h2>

          {e.parts.map((e, i) => (
            <p key={e.id}>
              {e.name} {e.exercises}
            </p>
          ))}

          <p key={e.id} style={{ fontWeight: "bold" }}>
            total of {e.parts.reduce((s, p) => s + p.exercises, 0)} exercises
          </p>
        </div>
      ))}
    </div>
  );
};
export default Course;
