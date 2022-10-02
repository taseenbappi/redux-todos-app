import axios from "axios";
import { GET_TODOS_DATA, GET_TODOS_FAILED, GET_TODOS_REQUEST } from "../constants/todosConstants";

// todos actions 
export const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
};
export const getTodosData = (todos) => {
    return {
        type: GET_TODOS_DATA,
        payload: todos
    }
};

export const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error.message
    }
};

// todos async await funstion to get data
export const getAllTodos = () => async (dispatch) => {
    dispatch(getTodosRequest());
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch(getTodosData(response?.data));
    } catch (error) {
        dispatch(getTodosFailed(error));
    }
};