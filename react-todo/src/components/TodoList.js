import React from "react";
// import Components
import Todo from "./Todo"

const TodoList = ({ todos, setTodos, filteredTodos}) => {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                    todos={todos} 
                    setTodos={setTodos} 
                    key={todo.id} 
                    text={todo.text}
                    todo = {todo} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;