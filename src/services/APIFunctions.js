import axios from "axios";
const URL = "http://localhost:3001/todos/";

export function getTodos () {
    const response = axios.get(URL);
    return response;
};

export function getOneTodo(id) {
    const response = axios.get(`${URL}${id}`);
    return response;
};

export function deleteTodo(id) {
    const response = axios.delete(`${URL}${id}`);
    return response;
};

export function createTodo(id) {
    const response = axios.post(URL, id);
    return response;
};

export function editTodo(id, updatedTodo) {
    const response = axios.put(`${URL}${id}`, updatedTodo);
    return response;
};