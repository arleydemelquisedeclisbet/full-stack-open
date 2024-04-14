import axios from 'axios'

// const baseUrlPersons = 'http://localhost:3001/api/persons'
const baseUrlPersons = 'https://backend-full-stack-open.onrender.com/api/persons'

const getAll = () => {
    return axios.get(baseUrlPersons).then(({ data }) => data)
}

const addPerson = newPerson => {
    return axios.post(baseUrlPersons, newPerson).then(({ data }) => data)
}

const updatePerson = person => {
    return axios.put(`${baseUrlPersons}/${person.id}`, person).then(({ data }) => data)
}

const deletePerson = id => {
    return axios.delete(`${baseUrlPersons}/${id}`)
}

export default {
    getAll,
    addPerson,
    deletePerson,
    updatePerson
}