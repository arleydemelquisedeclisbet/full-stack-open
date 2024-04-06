import { useState } from 'react'

import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 }
  ])
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = e => {
    e.preventDefault()

    persons.findIndex(({ name }) => name === newName) >= 0
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat({ name: newName, number: newNumber }))

    setNewName('')
  }

  const handleSearchValue = e => {
    const text = e.target.value.toUpperCase()
    setPersonsToShow(persons.filter(p => p.name.toUpperCase().includes(text)))
  }

  return (
    <>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input onChange={handleSearchValue} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{listStyleType:'none', paddingLeft: 0}} >
        {personsToShow.map(({ name, number, id }) =>
          <Person key={id} name={name} number={number} />
        )}
      </ul>
    </>
  )
}

export default App