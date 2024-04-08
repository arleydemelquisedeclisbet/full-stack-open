import axios from 'axios'

const personUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(personUrl).then(({ data }) => data)
}

const addPerson = newPerson => {
    return axios.post(personUrl, newPerson).then(({ data }) => data)
}

const deletePerson = id => {
    return axios.delete(`${personUrl}/${id}`).then(({ data: { id } }) => id)
}

export default {
    getAll,
    addPerson,
    deletePerson
}