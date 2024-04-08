import { useEffect, useState } from 'react'
import axios from 'axios'

import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {

  const personUrl = 'http://localhost:3001/persons'
  const [persons, setPersons] = useState([])
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get(personUrl).then(({ data }) => setPersons(data))
  }, [])

  const addPerson = e => {
    e.preventDefault()

    persons.findIndex(({ name }) => name === newName) >= 0
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat({ name: newName, number: newNumber, id: persons.length + 1 }))

    setNewName('')
    setNewNumber('')
  }

  const handleSearchValue = e => {
    const text = e.target.value.toUpperCase()
    setFilter(text)
  }

  useEffect(() => {
    const filteredPersons = persons.filter(p => p.name.toUpperCase().includes(filter))
    setPersonsToShow(filteredPersons)
  }, [ persons, filter ])

  return (
    <>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleOnChange={handleSearchValue} />
      
      <h3>Add a new</h3>
      <PersonForm onSubmit={e => addPerson(e)} 
        name={newName} 
        number={newNumber} 
        setNewName={e => setNewName(e.target.value)} 
        setNewNumber={e => setNewNumber(e.target.value)}
      />
      
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
      
    </>
  )
}

export default App