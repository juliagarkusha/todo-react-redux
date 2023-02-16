import {useSelector} from "react-redux";

import TodoItem from "../TodoItem";

import "./TodoList.scss";

function TodoList () {
  const todoList = useSelector(state => state.todo.list);

  return (
    <div className="todo__list">
      {todoList.map(todoItem => (
        <TodoItem
          key={todoItem.id}
          todo={todoItem}
        />
      ))}
    </div>
  )
}

export default TodoList;


