import { GET_TODOS_DATA, GET_TODOS_FAILED, GET_TODOS_REQUEST } from "../constants/todosConstants";

const initializeState = {
    isLoading: false,
    todos: [],
    error: null
}
const todosReducer = (state = initializeState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state, isLoading: true
            }
        case GET_TODOS_DATA:
            return {
                ...state, todos: action.payload, isLoading: true, error: null
            }
        case GET_TODOS_FAILED:
            return {
                todos: [], isLoading: false, error: action.payload
            }

        default:
            return state;
    }
}
export default todosReducer;