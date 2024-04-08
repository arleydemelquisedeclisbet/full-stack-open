import axios from 'axios'

const personUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(personUrl).then(({ data }) => data)
}

const addPerson = newPerson => {
    return axios.post(personUrl, newPerson).then(({ data }) => data)
}

export default {
    getAll,
    addPerson
}