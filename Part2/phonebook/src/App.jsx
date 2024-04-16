import { useEffect, useState } from 'react'

import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([])
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')
  const [className, setClassName] = useState('')

  useEffect(() => { personsService.getAll().then(setPersons) }, [])

  const addPerson = e => {
    e.preventDefault()

    const personFound = persons.find(({ name }) => name === newName)
    if (personFound) {
      const updatePerson = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)
      if (updatePerson) {
        personsService.updatePerson({ ...personFound, number: newNumber }).then(updatedPerson => {
          handleMessage(`Updated ${updatedPerson.name}`, 'success')
          setPersons(persons.map(p => p.id !== personFound.id ? p : updatedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          const message = error.response?.data?.message ?? error.message
          console.error(`Error actualizando persona: `, message)
          handleMessage(message, 'error')
        })
      }
    } else {
      personsService.addPerson({ name: newName, number: newNumber })
        .then(newPerson => {
          handleMessage(`Added ${newName}`, 'success')
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          const message = error.response?.data?.message ?? error.message
          console.error(`Error agregando persona: `, message)
          handleMessage(message, 'error')
        })
    }
  }

  const handleMessage = (msg, className) => {
    setClassName(className)
    setMessage(msg)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const handleSearchValue = e => { setFilter(e.target.value.toUpperCase()) }

  useEffect(() => {
    const filteredPersons = persons.filter(p => p.name.toUpperCase().includes(filter))
    setPersonsToShow(filteredPersons)
  }, [persons, filter])

  const deletePerson = id => {
    const foundPersonToDelete = persons.find(p => p.id === id)
    if (foundPersonToDelete) {
      const deletePerson = window.confirm(`Delete ${foundPersonToDelete.name} ?`)
      if (deletePerson) {
        personsService.deletePerson(id)
          .then(() => {
            handleMessage(`Deleted ${foundPersonToDelete.name}`, 'success')
            setPersons(persons.filter(p => p.id !== id))
          })
          .catch(error => {
            console.error(error.message)
            handleMessage(`Information of ${foundPersonToDelete.name} has already been removed from server`, 'error')
          })
      }
    } else {
      handleMessage(`Persona con id ${id} no está en la lista`, 'error')
    }
  }

  return (
    <>
      <h2>Phonebook</h2>

      <Notification message={message} className={className} />
      <Filter filter={filter} handleOnChange={handleSearchValue} />

      <h3>Add a new</h3>
      <PersonForm onSubmit={e => addPerson(e)}
        name={newName}
        number={newNumber}
        setNewName={e => setNewName(e.target.value)}
        setNewNumber={e => setNewNumber(e.target.value)}
      />

      <h3>Numbers</h3>
      <Persons persons={personsToShow} handleDelete={deletePerson} />

    </>
  )
}

export default App