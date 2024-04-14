import axios from 'axios'

const personUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    return axios.get(personUrl).then(({ data }) => data)
}

const addPerson = newPerson => {
    return axios.post(personUrl, newPerson).then(({ data }) => data)
}

const updatePerson = person => {
    return axios.put(`${personUrl}/${person.id}`, person).then(({ data }) => data)
}

const deletePerson = id => {
    return axios.delete(`${personUrl}/${id}`)
}

export default {
    getAll,
    addPerson,
    deletePerson,
    updatePerson
}