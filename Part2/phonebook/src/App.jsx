import { useEffect, useState } from 'react'

import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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