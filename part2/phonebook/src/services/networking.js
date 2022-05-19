import axios from 'axios';
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseURL)
}

const create = newObject => {
    return axios.post(baseURL, newObject)
  }

const deletePerson = id => {
    
    return axios.delete(`${baseURL}/${id}`)
}

const update = (updatedPerson) => {
    console.log('Link to update: ', `${baseURL}/${updatedPerson.id}`, 'updated person: ', updatedPerson)
    return axios.put(`${baseURL}/${updatedPerson.id}`, updatedPerson )

}

export default {
    getAll, create, deletePerson, update
}