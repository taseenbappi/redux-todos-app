import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getAllTodos } from './Redux/actions/todosActions';

function App() {
  const { todos, isLoading, error } = useSelector(state => (state));
  const dispatch = useDispatch();

  console.log(todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch])

  return (
    <div className="App">
      <h1>Redux and React Redux and Thunk Data Fetching... </h1>
      <h1>Todos </h1>
      {
        isLoading && "Todos loading"
      }
      <div className="todos-container">
        {
          todos?.map((todo) => <div className="todos-item">

            <h4>Name: {todo?.title}</h4>
          </div>)
        }

      </div>


    </div>
  );
}

export default App;
