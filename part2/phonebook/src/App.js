import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {

  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(res => {
        setPersons(res.data)
        console.log('Rsponse: ', res)
      })
      .catch(e => console.log('Axios error: ', e))
  }, [])



  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter setFilter={setFilter} filter={filter} />

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
      <Persons filter={filter} persons={persons} />
    </div>
  )
}






export default App