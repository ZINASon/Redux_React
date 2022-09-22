import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Addtodo from './Components/Addtodo';
import TodoList from './Components/TodoList';
import{filterTodo} from './Redux/Action/TodoAction'

function App() {
  const todos = useSelector(state=>state.TodoReducers.todos)
  const todoFiltred = useSelector(state=>state.TodoReducers.filter)
  const dispatch = useDispatch()
  return (
    
    <div className="App">
      <header className="App-header">
        <Addtodo></Addtodo>
        <div style={{ display:"flex" , flexDirection : "row" }}>
          <button onClick={()=>dispatch(filterTodo('All'))}>All</button>
          <button onClick={()=>dispatch(filterTodo('true'))}>Done</button>
          <button onClick={()=>dispatch(filterTodo('false'))}>Not Done</button>
        </div>
        <TodoList></TodoList>
         
      </header>
    </div>
   );
}

export default App;
