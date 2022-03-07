import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      id: 1,
      name: 'Arto Hellas',
      phonenumber: '+358046753869'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const onChangeName = (event) => {
    
    setNewName(event.target.value)
  }
  const onChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const onSubmitPerson = (event) => {
    event.preventDefault()
    
    let newPerson = {
      id: persons.length + 1,
      name: newName,
      phonenumber:newNumber
    }
    let newPersons = [];
    persons.forEach(e => {

      if(e.name === newName) {
        window.alert(`${newName} nono`)
        setPersons(persons)
      } else (setPersons(persons.concat(newPerson)))
      
      
    })
    console.log ('newPersons: ', newPersons)
    
    
    
  }


  return (
    <div>
      
      <h2>Phonebook</h2>
      <form onSubmit={onSubmitPerson}>
        <div>
          name: <input value={newName} onChange={onChangeName}  />
        </div>
        <div>
          phonenumber: <input value={newNumber} onChange={onChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(e => 
        <div key = {e.id}>{e.name}: {e.phonenumber}</div>
      )}
      
    </div>
  )
}

export default App