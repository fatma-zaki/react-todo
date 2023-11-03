
import './App.css';
import './components/Todostyle.css'
import TodoForm from './components/TodoForm';
import { useState } from 'react';
import Todo from './components/Todos';
function App() {
  let [todos, setTodos] = useState([])
  const [todoToShow, setTodoToShow] = useState("all")
  const [toggleAllComplete , setToggleAllComplete] = useState(true)


  const addTodo = (todo)=>{
    setTodos([todo, ...todos])
  }
  const handeldelete= (id)=>{
    setTodos(todos.filter((todo)=>todo.id !== id))
    }

    const toggleComplete = (id)=>{
      setTodos(
        todos.map((todo)=> {
          if(todo.id === id ){
            return{
              ...todo,
              complete: !todo.complete
            }}else{
              return todo
          }
        })
      )
    }
    const updateTodoToShow = (s)=>{
      setTodoToShow(s)
    }
    if(todoToShow === 'active'){
      todos = todos.filter((todo)=> !todo.complete)
    }else if (todoToShow === 'complete'){
      todos = todos.filter((todo)=> todo.complete)
    }

    const removeAllCompletedTodos = ()=>{
      setTodos(todos.filter((todo)=> !todo.complete))
    }

  return (
    <div className="container">
     <TodoForm onsubmit={addTodo}/>

     {
      todos.map((todo)=> (
        <Todo key={todo.id} todo={todo} 
         onDelete={()=> handeldelete(todo.id) }
         toggleComplete={()=> toggleComplete(todo.id)}/>
      ))
     }
  <div>
     <button className='update-btn btn' onClick={()=> updateTodoToShow("all")}>All</button>
     <button className='update-btn btn' onClick={()=> updateTodoToShow("active")}>Active</button>
     <button className='update-btn btn' onClick={()=> updateTodoToShow("complete")}>Completed</button>
     </div>

     {todos.some((todo)=> todo.complete)? 
     ( <button className='all-btn btn' onClick={removeAllCompletedTodos}>
      remove all completed todos</button>) : null}
     <button className='all-btn btn' onClick={()=>{
      setTodos(todos.map((todo)=> ({
        ...todo,
        complete: toggleAllComplete,
      })))
      setToggleAllComplete(!toggleAllComplete)
     }}>toggle all todos : {`${toggleAllComplete}`}</button>
    </div>
  );
}

export default App;
