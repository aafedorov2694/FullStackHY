const PersonForm = (props) => {

    const {
      persons,
      setPersons,
      newName,
      setNewName,
      newNumber,
      setNewNumber,
      filter
    } = props
  
  
    const onChangeName = (event) => {
  
      setNewName(event.target.value)
    }
    const onChangeNumber = (event) => {
      setNewNumber(event.target.value)
    }
  
  
    const onSubmitPerson = (event) => {
      event.preventDefault()
  
      let newPerson = {
        name: newName,
        phonenumber: newNumber,
        id: persons.length + 1
      }
      let newPersons = [];
      persons.forEach(e => {
  
        if (e.name === newName) {
          window.alert(`${newName} is already in the phonebook`)
          setPersons(persons)
        } else (setPersons(persons.concat(newPerson)))
  
  
      })
      console.log('newPersons: ', newPersons)
    }
  
    const chosen = []
    persons.forEach(e => {
      console.log(e.name.toLowerCase().includes(filter))
      if (e.name.toLowerCase().includes(filter) === true) {
        chosen.push(e)
      }
    })
  
  
    return (
      <div>
        <form onSubmit={onSubmitPerson}>
          <div>
            name: <input value={newName} onChange={onChangeName} />
          </div>
          <div>
            phonenumber: <input value={newNumber} onChange={onChangeNumber} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
  
      </div>
    )
  }
export default PersonForm  