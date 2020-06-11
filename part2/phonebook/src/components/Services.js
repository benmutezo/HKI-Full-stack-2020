import axios from "axios";

const URL = "http://localhost:3001/persons";
const getData = () => {
  return axios.get(URL);
};

const addData = (person) => {
  return axios.post(URL, person);
};

const updateData = (id, data) => {
  return axios.put(`${URL}/${id}`, data);
};

const deletePerson = (id) => {
  return axios.delete(`${URL}/${id}`);
};

export default { getData, addData, deletePerson, updateData };
