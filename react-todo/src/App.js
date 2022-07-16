import React, { useState,useEffect } from "react";
import './App.css';

//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
 
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFileteredTodos] = useState([]);

   //Run once when the app starts
   useEffect(() => {
    const getLocalTodos = ()=> {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]));
      }else{
       let todoLocal = JSON.parse(localStorage.getItem("todos"));
       setTodos(todoLocal);
      }
    };
     getLocalTodos();
   }, [])
   //USE effect
   useEffect(() =>{
     //Functions

     //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFileteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFileteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFileteredTodos(todos);
        break;
    }
  };

    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  

  

  return (
    <div className="App">
      <header>
        <h1>Rutvij's Todo List </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
