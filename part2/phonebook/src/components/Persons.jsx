const Persons = (props) => {
    const {
      filter,
      persons
    } = props
    const chosen = []
    persons.forEach(e => {
      console.log(e.name.toLowerCase().includes(filter))
      if (e.name.toLowerCase().includes(filter) === true) {
        chosen.push(e)
      }
    })
  
    return (
      <div>
        {chosen.map(e =>
          <div key={e.id}>{e.name}: {e.number}</div>
        )}
      </div>
    )
  }
  export default Persons