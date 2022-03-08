import { useState } from 'react'


const Filter = (props) => {
  
  const{
    
    filter,
    setFilter
  } = props;
  
  const onChangeFilter = (event) => {
    setFilter(event.target.value)
  }
 
 
  

  return(
    <div>
     
      search: <input value={filter} onChange={onChangeFilter}/>
     
    </div>
  )
}

const Persons = (props) => {
  const {
    filter,
    persons
  } = props
  const chosen = []
  persons.forEach(e => {
    console.log(e.name.toLowerCase().includes(filter))
    if(e.name.toLowerCase().includes(filter) === true){
      chosen.push(e)
    } 
  })

  return(
    <div>
       {chosen.map(e => 
          <div key = {e.id}>{e.name}: {e.phonenumber}</div>
        )}
    </div>
  )
}

const PersonForm = (props) => {
  
  const{
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
      phonenumber:newNumber,
      id: persons.length + 1
    }
    let newPersons = [];
    persons.forEach(e => {

      if(e.name === newName) {
        window.alert(`${newName} is already in the phonebook`)
        setPersons(persons)
      } else (setPersons(persons.concat(newPerson)))
      
      
    })
    console.log ('newPersons: ', newPersons)
  }

  const chosen = []
  persons.forEach(e => {
    console.log(e.name.toLowerCase().includes(filter))
    if(e.name.toLowerCase().includes(filter) === true){
      chosen.push(e)
    } 
  })

  
  return(
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


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phonenumber: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phonenumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phonenumber: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phonenumber: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('') 
 
  
  
  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          <Filter setFilter={setFilter} filter={filter}/>
          
        </div>
      <h2>add new</h2>
        <PersonForm 
          persons={persons} 
          setPersons={setPersons}
          newName={newName}
          setNewName={setNewName}
          newNumber={newNumber}
          setNewNumber={setNewNumber}
        />
          
      
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons}/>
    </div>
  )
  }






export default App