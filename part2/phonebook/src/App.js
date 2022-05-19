import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import networking from './services/networking';
import Notification from './components/Notification'

const App = () => {

  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [stateUpdate, setStateUpdate] = useState(false)
  const [message, setMessage] = useState(null);

  useEffect(() => {
    networking
      .getAll()
      .then(res => {
        setPersons(res.data)
     
      })
      .catch(e => console.log('Axios error: ', e))
  }, [stateUpdate, newName, newNumber])

  console.log('message: ', message)

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message ={message} />
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
        setMessage = {setMessage}
      />


      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} setStateUpdate = {setStateUpdate} stateUpdate = {stateUpdate} setMessage = {setMessage}/>
    </div>
  )
}






export default App